const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const path = require('path');
const dotenv = require('dotenv');
const fetch = require('node-fetch');
const fs = require('fs').promises;

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));

app.use(session({
  secret: process.env.SESSION_SECRET || 'your-secret-key',
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({ mongoUrl: process.env.MONGODB_URI }),
  cookie: {
    maxAge: 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production'
  }
}));

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB bağlı'))
  .catch(err => console.error('MongoDB bağlantı hatası:', err));

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  fullname: String,
  role: { type: String, enum: ['student', 'teacher'], default: 'student' },
  teacherCode: String,
  profilePic: String,
  scores: [{
    kategori: String,
    puan: Number,
    tarih: { type: Date, default: Date.now }
  }]
});

const User = mongoose.model('User', userSchema);

const questionSchema = new mongoose.Schema({
  question: String,
  options: [String],
  correct: String,
  category: String,
  createdBy: String,
  createdAt: { type: Date, default: Date.now }
});

const Question = mongoose.model('Question', questionSchema);

function authenticateToken(req, res, next) {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Yetkisiz erişim.' });
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: 'Geçersiz token.' });
    req.user = user;
    next();
  });
}

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));
app.get('/anasayfa.html', (req, res) => res.sendFile(path.join(__dirname, 'public', 'anasayfa.html')));
app.get('/soruhavuzu.html', (req, res) => res.sendFile(path.join(__dirname, 'public', 'soruhavuzu.html')));
app.get('/katagori.html', (req, res) => res.sendFile(path.join(__dirname, 'public', 'katagori.html')));
app.get('/chat.html', (req, res) => res.sendFile(path.join(__dirname, 'public', 'chat.html')));
app.get('/settings.html', (req, res) => res.sendFile(path.join(__dirname, 'public', 'settings.html')));
app.get('/leaderboard.html', (req, res) => res.sendFile(path.join(__dirname, 'public', 'leaderboard.html')));

app.post('/api/register', async (req, res) => {
  const { fullname, username, email, password, role, teacherCode } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({ message: 'Lütfen tüm gerekli alanları doldurun.' });
  }
  try {
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res.status(400).json({ message: 'Kullanıcı adı veya e-posta zaten kayıtlı.' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      fullname,
      username,
      email,
      password: hashedPassword,
      role: role || 'student',
      teacherCode: role === 'teacher' ? generateTeacherCode() : teacherCode
    });
    await user.save();
    res.status(201).json({ message: 'Kayıt başarılı! Giriş yapabilirsiniz.' });
  } catch (err) {
    console.error('Kayıt hatası:', err);
    res.status(500).json({ message: 'Sunucu hatası.' });
  }
});

function generateTeacherCode() {
  return Math.random().toString(36).substr(2, 8).toUpperCase();
}

app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: 'Geçersiz kullanıcı adı veya şifre.' });
    }
    req.session.userId = user._id;
    const token = jwt.sign({ userId: user._id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '1d' });
    console.log(`/api/login OK, session kaydedildi id= ${req.sessionID}`);
    res.json({ message: 'Giriş başarılı!', token });
  } catch (err) {
    console.error('Giriş hatası:', err);
    res.status(500).json({ message: 'Sunucu hatası.' });
  }
});

app.get('/api/user', async (req, res) => {
  if (!req.session.userId) {
    return res.status(401).json({ message: 'Oturum bulunamadı.' });
  }
  try {
    const user = await User.findById(req.session.userId).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'Kullanıcı bulunamadı.' });
    }
    res.json(user);
  } catch (err) {
    console.error('Kullanıcı bilgisi hatası:', err);
    res.status(500).json({ message: 'Sunucu hatası.' });
  }
});

app.post('/api/score', authenticateToken, async (req, res) => {
  const { kategori, puan } = req.body;
  try {
    const user = await User.findById(req.user.userId);
    if (!user) {
      return res.status(404).json({ message: 'Kullanıcı bulunamadı.' });
    }
    user.scores.push({ kategori, puan });
    await user.save();
    res.json({ message: 'Puan kaydedildi.' });
  } catch (err) {
    console.error('Puan kaydetme hatası:', err);
    res.status(500).json({ message: 'Puan kaydedilemedi.' });
  }
});

app.get('/api/leaderboard', async (req, res) => {
  try {
    const users = await User.find({}, 'username scores').lean();
    const leaderboard = users.map(user => {
      const scoresByCategory = user.scores.reduce((acc, score) => {
        acc[score.kategori] = (acc[score.kategori] || 0) + score.puan;
        return acc;
      }, {});
      const totalScore = Object.values(scoresByCategory).reduce((sum, puan) => sum + puan, 0);
      return {
        username: user.username,
        scores: scoresByCategory,
        totalScore
      };
    }).sort((a, b) => b.totalScore - a.totalScore);
    res.json(leaderboard);
  } catch (err) {
    console.error('Lider tablosu hatası:', err);
    res.status(500).json({ message: 'Lider tablosu yüklenemedi.' });
  }
});

app.post('/api/questions/add', authenticateToken, async (req, res) => {
  const { question, options, correct, category } = req.body;
  try {
    const user = await User.findById(req.user.userId);
    if (!user) {
      return res.status(404).json({ message: 'Kullanıcı bulunamadı.' });
    }
    const newQuestion = new Question({
      question,
      options,
      correct,
      category: category || 'Genel',
      createdBy: user.username
    });
    await newQuestion.save();
    res.json({ message: 'Soru eklendi.' });
  } catch (err) {
    console.error('Soru ekleme hatası:', err);
    res.status(500).json({ message: 'Soru eklenemedi.' });
  }
});

app.get('/api/questions/user', authenticateToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId);
    if (!user) {
      return res.status(404).json({ message: 'Kullanıcı bulunamadı.' });
    }
    const questions = await Question.find({ createdBy: user.username });
    res.json(questions);
  } catch (err) {
    console.error('Soru listeleme hatası:', err);
    res.status(500).json({ message: 'Sorular yüklenemedi.' });
  }
});

app.post('/api/questions/generate', authenticateToken, async (req, res) => {
  const { kategori } = req.body;
  if (!kategori) {
    return res.status(400).json({ message: 'Kategori belirtilmedi.' });
  }
  const prompt = `Aşağıdaki kategoriye uygun, Türkçe, 4 şıklı, bilgi yarışması için 10 adet soru oluştur. Her sorunun 4 seçeneği ve doğru cevabı (A, B, C veya D) olacak. Cevaplar JSON formatında, aşağıdaki gibi dönmeli:
[
  {
    "soru": "Soru metni",
    "secenekler": ["Seçenek A", "Seçenek B", "Seçenek C", "Seçenek D"],
    "dogru": "A"
  },
  ...
]
Kategori: ${kategori}
Lütfen yalnızca JSON formatında yanıt ver ve başka metin ekleme.`;

  try {
    const response = await fetch('https://api-inference.huggingface.co/models/google/flan-t5-base', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.HUGGING_FACE_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        inputs: prompt,
        parameters: { max_length: 1500, temperature: 0.7, top_p: 0.9, do_sample: true }
      })
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      if (response.status === 429) {
        console.warn('Hugging Face kota aşımı:', errorData);
        return await sendFallbackQuestions(res, kategori);
      }
      throw new Error(`Hugging Face API hatası: ${response.status} - ${JSON.stringify(errorData || {})}`);
    }

    const data = await response.json();
    const generatedText = data[0]?.generated_text || '';
    console.log('Hugging Face yanıtı:', generatedText);

    let questions;
    try {
      const jsonMatch = generatedText.match(/\[[\s\S]*\]/);
      if (!jsonMatch) {
        throw new Error('Geçersiz JSON formatı.');
      }
      questions = JSON.parse(jsonMatch[0]);
      if (!Array.isArray(questions) || questions.length !== 10) {
        throw new Error(`Beklenen 10 soru alınmadı, alınan: ${questions.length}`);
      }
      questions.forEach(q => {
        if (!q.soru || !Array.isArray(q.secenekler) || q.secenekler.length !== 4 || !['A', 'B', 'C', 'D'].includes(q.dogru)) {
          throw new Error('Geçersiz soru formatı.');
        }
      });
    } catch (parseErr) {
      console.warn('JSON ayrıştırma hatası:', parseErr.message);
      return await sendFallbackQuestions(res, kategori);
    }

    res.json(questions);
  } catch (err) {
    console.error('Soru oluşturma hatası:', err.message);
    return await sendFallbackQuestions(res, kategori);
  }
});

async function sendFallbackQuestions(res, kategori) {
  try {
    const yedekData = await fs.readFile(path.join(__dirname, 'public', 'questions.json'), 'utf8');
    const questions = JSON.parse(yedekData);
    const kategoriSorular = questions[kategori] || questions['Teknoloji Modu'];
    if (!Array.isArray(kategoriSorular)) {
      throw new Error('Geçerli yedek sorular bulunamadı.');
    }
    res.json(kategoriSorular.slice(0, 10));
  } catch (yedekErr) {
    console.error('Yedek soru yükleme hatası:', yedekErr.message);
    res.status(500).json({ message: 'Soru oluşturulamadı ve yedek sorular yüklenemedi.', error: yedekErr.message });
  }
}

app.listen(PORT, () => {
  console.log(`Sunucu http://localhost:${PORT}`);
});