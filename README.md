# Yapay Zeka Destekli Web Quiz ("Son Kararım")

"Kim Milyoner Olmak İster" tarzında, kategori bazlı bir bilgi yarışması web uygulaması. Backend Node.js / Express üzerinde çalışıyor ve veriler MongoDB'de tutuluyor. Sorular Hugging Face Inference API üzerinden bir dil modeline (`google/flan-t5-base`) ürettiriliyor. API'ye ulaşılamazsa, kota dolarsa ya da gelen yanıt beklenen JSON formatında değilse `public/questions.json` içindeki hazır sorular kullanılıyor. Arayüz Türkçe; İngilizce dil seçeneği de var.

## Özellikler

- **Kayıt ve giriş**: Kullanıcı adı, e-posta ve şifreyle kayıt olunuyor. Şifreler bcrypt ile hashleniyor. Giriş yapınca hem sunucu tarafında bir oturum (MongoDB'de saklanan `express-session`) hem de 1 gün geçerli bir JWT oluşturuluyor; JWT tarayıcıda `localStorage`'a yazılıyor.
- **Roller**: Öğrenci (`student`) veya öğretmen (`teacher`). Öğretmen olarak kayıt olan kullanıcıya otomatik 8 karakterlik bir öğretmen kodu üretiliyor. Ana sayfadaki "Soru Havuzu" butonu yalnızca öğretmenlere gösteriliyor.
- **Kategoriler** (`katagori.html`): Teknoloji, Sinema, Müzik, Dil Bilgisi, Araba, Kültür, Kapışma ve Zaman modları. Yedek soru dosyasında her kategori için 10 soru var.
- **Yapay zeka ile soru üretimi**: `POST /api/questions/generate` seçilen kategori için 10 adet, 4 şıklı Türkçe soru istiyor ve yanıtın formatını doğruluyor.
- **Yarışma ekranı** (`chat.html`):
  - Her soru için 20 saniye süre; süre dolarsa cevap yanlış sayılıyor.
  - Doğru/yanlış ses efektleri (`image/correct.mp3`, `image/wrong.mp3`).
  - A/B/C/D klavye kısayolları.
  - Jokerler: 50:50 iki yanlış şıkkı gizliyor. Seyirci ve Telefon jokerleri şimdilik sadece "(Demo)" bildirimi gösteriyor.
  - Puanlama: 10 sorunun hepsi doğru bilinirse 10 puan kazanılıyor ve puan `POST /api/score` ile kaydediliyor; aksi halde puan 0.
- **Ayarlar**: Ses açma/kapama, karanlık mod, Türkçe/İngilizce dil seçimi. Tercihler `localStorage`'da saklanıyor.
- **Profil resmi**: Tarayıcıdan yüklenen resim base64 olarak `localStorage`'a kaydediliyor (sunucuya gönderilmiyor).
- **Lider tablosu API'si**: `GET /api/leaderboard` kullanıcıların puanlarını kategori bazında toplayıp toplam puana göre sıralıyor.

## Teknoloji

- **Backend**: Node.js, Express 4, Mongoose 7, express-session + connect-mongo, jsonwebtoken, bcryptjs, dotenv, node-fetch
- **Frontend**: Statik HTML/CSS ve tek bir `script.js` dosyası (vanilla JavaScript)
- **Veritabanı**: MongoDB
- **Yapay zeka**: Hugging Face Inference API, `google/flan-t5-base` modeli

## Proje yapısı

```
proje2/
├── server.js              # Express sunucusu, Mongoose modelleri, tüm API uçları
├── package.json
├── .env                   # Ortam değişkenleri (aşağıya bakın)
└── public/
    ├── index.html         # Giriş / kayıt
    ├── anasayfa.html      # Ana menü + ayarlar modalı
    ├── katagori.html      # Kategori seçimi
    ├── chat.html          # Yarışma ekranı
    ├── leaderboard.html   # Lider tablosu
    ├── soruhavuzu.html    # Öğretmenler için soru ekleme ekranı
    ├── script.js          # Çeviriler, oturum, quiz mantığı, jokerler, ayarlar
    ├── style.css
    ├── questions.json     # Yedek soru havuzu (kategori -> 10 soru)
    ├── flags/             # Dil bayrakları
    └── image/             # Görseller, joker ikonları, ses dosyaları
```

## Gereksinimler

- Node.js ve npm
- Çalışan bir MongoDB sunucusu (yerel ya da MongoDB Atlas). Hem uygulama verisi hem de oturumlar burada tutuluyor.
- Yapay zeka ile soru üretimi için bir Hugging Face erişim token'ı (opsiyonel; yoksa yedek sorular kullanılıyor)

## Kurulum ve çalıştırma

```bash
cd proje2
npm install
npm install node-fetch@2   # server.js bunu kullanıyor ama package.json'da yok
npm start                  # node server.js
```

Sunucu varsayılan olarak `http://localhost:3000` adresinde açılıyor (`PORT` değişkeniyle değiştirilebilir). `node_modules` klasörü depoya da eklenmiş durumda; içindeki `node-fetch` sürümü 2.7.0. Temiz bir kurulumda `node-fetch` yüklenmezse sunucu açılışta hata verir. `require('node-fetch')` 3.x sürümüyle çalışmadığı için 2.x sürümü gerekiyor.

## Yapılandırma

`proje2/.env` dosyasında şu değişkenler okunuyor:

| Değişken | Açıklama |
|---|---|
| `MONGODB_URI` | MongoDB bağlantı adresi (Mongoose ve oturum deposu için) |
| `SESSION_SECRET` | `express-session` imza anahtarı |
| `JWT_SECRET` | JWT imzalama anahtarı |
| `PORT` | Sunucu portu (varsayılan 3000) |
| `HUGGING_FACE_TOKEN` | Hugging Face Inference API token'ı |
| `GOOGLE_ID`, `GOOGLE_SECRET` | `.env` içinde tanımlı ama `server.js` tarafından kullanılmıyor |

`NODE_ENV=production` olduğunda oturum çerezi `secure` olarak işaretleniyor; bu durumda HTTPS gerekiyor.

> **Güvenlik uyarısı:** `.env` dosyası git'e eklenmiş durumda. İçindeki veritabanı adresi, gizli anahtarlar ve token'lar herkese açık kabul edilmeli. Bu değerleri yenileyin ve `.env` dosyasını `.gitignore`'a ekleyin.

## API uçları

| Metot | Yol | Kimlik doğrulama | Açıklama |
|---|---|---|---|
| POST | `/api/register` | yok | `fullname, username, email, password, role, teacherCode` |
| POST | `/api/login` | yok | `username, password`; oturum açar ve `{ token }` döner |
| GET | `/api/user` | oturum çerezi | Giriş yapmış kullanıcının bilgileri (şifre hariç) |
| POST | `/api/score` | `Authorization: Bearer <token>` | `{ kategori, puan }` kaydeder |
| GET | `/api/leaderboard` | yok | Kullanıcı bazında kategori ve toplam puanlar |
| POST | `/api/questions/add` | Bearer token | `{ question, options, correct, category }` ekler |
| GET | `/api/questions/user` | Bearer token | Kullanıcının eklediği sorular |
| POST | `/api/questions/generate` | Bearer token | `{ kategori }` için 10 soru üretir (hata durumunda yedek sorular döner) |

Soru formatı (hem yapay zeka çıktısı hem `questions.json` için):

```json
{ "soru": "Soru metni", "secenekler": ["A", "B", "C", "D"], "dogru": "B" }
```

## Bilinen eksikler

- `leaderboard.html` şu an API'den veri çekmiyor; sayfa içine yazılmış örnek verileri gösteriyor (`/api/leaderboard` çağrısı yorum satırında).
- `soruhavuzu.html` formu `POST /api/questions` adresine gönderiliyor, ama sunucuda bu uç yok (mevcut uç `/api/questions/add`) ve istek token içermiyor. Liste kısmı da sabit bir örnek soru gösteriyor.
- Giriş ekranındaki Google ve Facebook butonları `/auth/google` ve `/auth/facebook` adreslerine yönlendiriyor, ama bu rotalar tanımlı değil. `passport` paketleri bağımlılıklarda var fakat kullanılmıyor.
- Ana sayfadaki `highscores.html` bağlantısı ve sunucudaki `/settings.html` rotası, depoda olmayan dosyalara işaret ediyor.
- Seyirci ve Telefon jokerleri işlevsel değil (demo).
- Bayrak klasöründe de, es, fr, zh dosyaları var ama `script.js` içinde yalnızca `tr` ve `en` çevirileri bulunuyor.
- Sunucu, model yanıtında tam 10 geçerli soru içeren bir JSON dizisi bulamazsa yedek sorulara dönüyor. `flan-t5-base` küçük bir model olduğu için bu yedeğe düşme durumu sık yaşanabilir.
- Depoda lisans dosyası yok; lisans belirtilmemiş.
