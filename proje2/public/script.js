document.addEventListener('DOMContentLoaded', function() {
  const translations = {
    en: {
      login_title: "Login",
      register_title: "Register",
      username_label: "Username",
      password_label: "Password",
      confirm_password_label: "Password (Repeat)",
      email_label: "Email",
      fullname_label: "Full Name",
      login_btn: "Login",
      register_btn: "Register",
      show_btn: "Show",
      go_to_register: "Register",
      go_to_login: "Login",
      social_text: "or sign in with a social account",
      google_text: "Google",
      facebook_text: "Facebook",
      not_registered: "Not registered yet?",
      already_registered: "Already have an account?",
      username_placeholder: "Username",
      password_placeholder: "Password",
      password_repeat_placeholder: "Password (Repeat)",
      email_placeholder: "Email",
      fullname_placeholder: "Full Name",
      main_title: "Final Answer!",
      start_btn: "Start Game",
      settings_btn: "Settings",
      leaderboard_btn: "Leaderboard",
      main_menu: "Return to Main Menu",
      save_btn: "Save",
      close_btn: "Close",
      logout: "Logout",
      remove_profile: "Remove Profile Picture",
      select_mode: "Please Select a Mode",
      mode_zaman: "Time Mode",
      mode_kapisma: "Duel Mode",
      mode_kultur: "Culture Mode",
      mode_araba: "Car Mode",
      mode_dil: "Language Mode",
      mode_muzik: "Music Mode",
      mode_sinema: "Cinema Mode",
      mode_teknoloji: "Technology Mode",
      mode_info: "Mode Info Here",
      leaderboard_title: "Leaderboard",
      cat_overall: "Overall",
      cat_teknoloji: "Technology",
      cat_sinema: "Cinema",
      cat_muzik: "Music",
      cat_dil: "Language",
      cat_araba: "Car",
      cat_kultur: "Culture",
      cat_kapisma: "Duel",
      cat_zaman: "Time",
      quiz_ready_title: "{mode} Mode",
      quiz_ready_desc: "You will be asked {n} questions in the selected category. Are you ready?",
      quiz_finish_title: "Congratulations! You have completed all questions.",
      ready_btn: "I'm Ready",
      cancel_btn: "Cancel",
      settings_title: "Settings",
      sound_label: "🔊 Sound",
      dark_label: "🌗 Dark Mode",
      category_info: {
        mode_zaman: "A game mode where the player tries to answer questions correctly within the given time.",
        mode_kapisma: "A mode where players compete to collect as many points as they can by answering questions.",
        mode_kultur: "A mode with general knowledge questions asked in a mixed way.",
        mode_araba: "A mode with questions about car brands, models, technical features, or car culture.",
        mode_dil: "A mode with questions about the history, development, and rules of languages.",
        mode_muzik: "A mode with questions about songs, artists, albums, music theory, and history.",
        mode_sinema: "A mode with questions about movies, directors, actors, film awards, and cinema history.",
        mode_teknoloji: "A mode with questions about computers, phones, software, innovative technologies, and technology history."
      },
      question_pool_title: "Question Pool",
      question_label: "Question",
      question_placeholder: "Question text",
      option_a_placeholder: "Option A",
      option_b_placeholder: "Option B",
      option_c_placeholder: "Option C",
      option_d_placeholder: "Option D",
      correct_option_label: "Correct Option",
      correct_option_select: "Select correct option",
      option_a: "A",
      option_b: "B",
      option_c: "C",
      option_d: "D",
      category_label: "Category (optional)",
      category_placeholder: "Category (e.g. Technology)",
      add_question_btn: "Add Question",
      your_questions_title: "Your Questions",
    },
    tr: {
      login_title: "Giriş Yap",
      register_title: "Kayıt Ol",
      username_label: "Kullanıcı Adı",
      password_label: "Şifre",
      confirm_password_label: "Şifre (Tekrar)",
      email_label: "E-posta",
      fullname_label: "Ad Soyad",
      login_btn: "Giriş Yap",
      register_btn: "Kayıt Ol",
      show_btn: "Göster",
      go_to_register: "Kayıt Ol",
      go_to_login: "Giriş Yap",
      social_text: "veya sosyal hesapla giriş yap",
      google_text: "Google",
      facebook_text: "Facebook",
      not_registered: "Henüz kayıtlı değil misiniz?",
      already_registered: "Zaten bir hesabınız var mı?",
      username_placeholder: "Kullanıcı Adı",
      password_placeholder: "Şifre",
      password_repeat_placeholder: "Şifre (Tekrar)",
      email_placeholder: "E-posta",
      fullname_placeholder: "Ad Soyad",
      main_title: "Son Kararım!",
      start_btn: "Oyuna Başla",
      settings_btn: "Ayarlar",
      leaderboard_btn: "Lider Tablosu",
      main_menu: "Ana Menüye Dön",
      save_btn: "Kaydet",
      close_btn: "Kapat",
      logout: "Çıkış",
      remove_profile: "Profil Resmini Sil",
      select_mode: "Lütfen Mod Seçiniz",
      mode_zaman: "Zaman Modu",
      mode_kapisma: "Kapışma Modu",
      mode_kultur: "Kültür Modu",
      mode_araba: "Araba Modu",
      mode_dil: "Dil Bilgisi Modu",
      mode_muzik: "Müzik Modu",
      mode_sinema: "Sinema Modu",
      mode_teknoloji: "Teknoloji Modu",
      mode_info: "Mod Bilgileri Burada",
      leaderboard_title: "Lider Tablosu",
      cat_overall: "Genel",
      cat_teknoloji: "Teknoloji",
      cat_sinema: "Sinema",
      cat_muzik: "Müzik",
      cat_dil: "Dil",
      cat_araba: "Araba",
      cat_kultur: "Kültür",
      cat_kapisma: "Kapışma",
      cat_zaman: "Zaman",
      quiz_ready_title: "{mode} Modu",
      quiz_ready_desc: "Seçtiğiniz kategoride {n} soru sorulacak. Hazır mısınız?",
      quiz_finish_title: "Tebrikler! Tüm soruları tamamladınız.",
      ready_btn: "Hazırım",
      cancel_btn: "İptal",
      settings_title: "Ayarlar",
      sound_label: "🔊 Ses",
      dark_label: "🌗 Karanlık Mod",
      category_info: {
        mode_zaman: "Oyuncunun belirlenen süre içerisinde soruları doğru cevaplamaya çalıştığı oyun modudur.",
        mode_kapisma: "Bu mod, liderlik tablosuna bağlıdır. Oyuncuların bildikleri soru kadar puan topladığı ve kapıştığı oyun modudur.",
        mode_kultur: "Karma şekilde genel kültür sorularının sorulduğu oyun modudur.",
        mode_araba: "Otomobil dünyasına dair, araba markaları, modelleri, teknik özellikler veya otomobil kültürüyle ilgili soruların yer aldığı oyun modudur.",
        mode_dil: "Bu mod, dillerin tarihi, gelişimi, kuralları gibi genel bazlı soruların sorulduğu oyun modudur.",
        mode_muzik: "Müzik dünyasına dair, şarkılar, sanatçılar, albümler, müzik teorisi ve tarihinden soruların sorulduğu oyun modudur.",
        mode_sinema: "Bu mod, filmler, yönetmenler, oyuncular, film ödülleri ve sinema tarihinden soruların sorulduğu oyun modudur.",
        mode_teknoloji: "Bu mod, bilgisayarlar, telefonlar, yazılımlar, yenilikçi teknolojiler ve teknoloji tarihinden soruların sorulduğu oyun modudur."
      },
      question_pool_title: "Soru Havuzu",
      question_label: "Soru",
      question_placeholder: "Soru metni",
      option_a_placeholder: "A şıkkı",
      option_b_placeholder: "B şıkkı",
      option_c_placeholder: "C şıkkı",
      option_d_placeholder: "D şıkkı",
      correct_option_label: "Doğru Şık",
      correct_option_select: "Doğru şıkkı seçin",
      option_a: "A",
      option_b: "B",
      option_c: "C",
      option_d: "D",
      category_label: "Kategori (isteğe bağlı)",
      category_placeholder: "Kategori (ör: Teknoloji)",
      add_question_btn: "Soru Ekle",
      your_questions_title: "Eklediğiniz Sorular",
    },
  };

  const goToRegisterLink = document.getElementById("goToRegister");
  const goToLoginLink = document.getElementById("goToLogin");
  const loginFormContainer = document.getElementById("loginFormContainer");
  const registerFormContainer = document.getElementById("registerFormContainer");
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");

  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("emailError");
  const registerPasswordInput = document.getElementById("registerPassword");
  const confirmPasswordInput = document.getElementById("confirmPassword");
  const passwordError = document.getElementById("passwordError");

  const langBtn = document.getElementById('langBtn');
  const langMenu = document.getElementById('langMenu');
  const selectedLangSpan = document.querySelector('.selected-lang');
  const toast = document.getElementById("toast");

  const roleInput = document.getElementById("role");
  const teacherCodeInput = document.getElementById("teacherCode");

  (function setupLanguageDropdownEvents() {
    const langBtn = document.getElementById('langBtn');
    const langMenu = document.getElementById('langMenu');
    const selectedLangSpan = document.querySelector('.selected-lang');
    let currentLang = localStorage.getItem('lang') || 'tr';
    if (typeof updateLanguage === 'function') updateLanguage(currentLang);
    if (langMenu) {
      langMenu.querySelectorAll('li').forEach(li => {
        const check = li.querySelector('.check');
        if (li.getAttribute('data-lang') === currentLang) {
          if (check) check.style.display = 'inline';
          const flagImg = li.querySelector('img').getAttribute('src');
          const langName = li.querySelector('span').textContent.trim();
          const langBtnImg = document.querySelector('.lang-btn img');
          if (langBtnImg) langBtnImg.setAttribute('src', flagImg);
          if (selectedLangSpan) selectedLangSpan.textContent = langName;
        } else {
          if (check) check.style.display = 'none';
        }
      });
    }
    if (langBtn) {
      langBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        if (langMenu) langMenu.classList.toggle('hidden');
      });
    }
    if (langMenu) {
      document.addEventListener('click', function() {
        langMenu.classList.add('hidden');
      });
      langMenu.addEventListener('click', function(e) {
        e.stopPropagation();
        const li = e.target.closest('li');
        if (!li) return;
        const langCode = li.getAttribute('data-lang');
        const flagImg = li.querySelector('img').getAttribute('src');
        const langName = li.querySelector('span').textContent.trim();
        document.querySelectorAll('.lang-menu li .check').forEach(ch => {
          ch.style.display = 'none';
        });
        const checkSpan = li.querySelector('.check');
        if (checkSpan) {
          checkSpan.style.display = 'inline';
        }
        const langBtnImg = document.querySelector('.lang-btn img');
        if (langBtnImg) langBtnImg.setAttribute('src', flagImg);
        if (selectedLangSpan) selectedLangSpan.textContent = langName;
        langMenu.classList.add('hidden');
        localStorage.setItem('lang', langCode);
        if (typeof updateLanguage === 'function') updateLanguage(langCode);
      });
    }
  })();

  function updateLanguage(lang) {
    document.querySelectorAll("[data-key]").forEach(el => {
      if (el.closest('.switch-text')) return;
      const key = el.getAttribute("data-key");
      if (translations[lang] && translations[lang][key] !== undefined && translations[lang][key] !== "") {
        el.textContent = translations[lang][key];
      }
    });
    document.querySelectorAll("input[data-placeholder]").forEach(input => {
      const placeholderKey = input.getAttribute("data-placeholder");
      if (translations[lang] && translations[lang][placeholderKey] !== undefined) {
        input.placeholder = translations[lang][placeholderKey];
      }
    });
    document.querySelectorAll("input[data-key][placeholder]").forEach(input => {
      const key = input.getAttribute("data-key");
      if (translations[lang] && translations[lang][key] !== undefined) {
        input.placeholder = translations[lang][key];
      }
    });
    document.querySelectorAll("label[data-key]").forEach(label => {
      const key = label.getAttribute("data-key");
      if (translations[lang] && translations[lang][key] !== undefined) {
        label.textContent = translations[lang][key];
      }
    });
    const infoMap = translations[lang]?.category_info;
    if (infoMap) {
      document.querySelectorAll('.category-card').forEach(card => {
        const modeKey = card.querySelector('.category-name')?.getAttribute('data-key');
        if (modeKey && infoMap[modeKey]) {
          card.setAttribute('data-info', infoMap[modeKey]);
        }
      });
      const infoBox = document.getElementById('infoBox');
      if (infoBox && infoBox.getAttribute('data-key') === 'mode_info') {
        infoBox.textContent = translations[lang]['mode_info'] || '';
      }
    }
  }

  if (goToLoginLink) {
    goToLoginLink.addEventListener("click", function(e) {
      e.preventDefault();
      if (loginFormContainer && registerFormContainer) {
        loginFormContainer.classList.remove("hidden");
        registerFormContainer.classList.add("hidden");
      }
    });
  }
  if (goToRegisterLink) {
    goToRegisterLink.addEventListener("click", function(e) {
      e.preventDefault();
      if (registerFormContainer && loginFormContainer) {
        registerFormContainer.classList.remove("hidden");
        loginFormContainer.classList.add("hidden");
      }
    });
  }
  if (emailInput) {
    emailInput.addEventListener("input", function() {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(emailInput.value)) {
        if (emailError) emailError.textContent = "Lütfen geçerli bir e-posta adresi girin.";
        emailInput.setCustomValidity("Geçersiz e-posta adresi.");
      } else {
        if (emailError) emailError.textContent = "";
        emailInput.setCustomValidity("");
      }
    });
  }
  if (registerForm) {
    registerForm.addEventListener("submit", async function(e) {
      e.preventDefault();
      if (checkEmptyFields(registerForm)) {
        showToast("Lütfen tüm alanları doldurun!", true);
        return;
      }
      if (emailInput && !emailInput.checkValidity()) {
        showToast("Lütfen geçerli bir e-posta adresi girin!", true);
        return;
      }
      if (registerPasswordInput && confirmPasswordInput && registerPasswordInput.value !== confirmPasswordInput.value) {
        showToast("Şifreler eşleşmiyor!", true);
        return;
      }
      const fullname = document.getElementById("fullname")?.value || "";
      const username = document.getElementById("registerUsername")?.value || "";
      const email = emailInput ? emailInput.value : "";
      const password = registerPasswordInput ? registerPasswordInput.value : "";
      const role = roleInput ? roleInput.value : "student";
      const teacherCode = teacherCodeInput ? teacherCodeInput.value : "";
      try {
        const res = await fetch('/api/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ fullname, username, email, password, role, teacherCode })
        });
        const data = await res.json();
        if (!res.ok) {
          showToast(data.message, true);
        } else {
          showToast(data.message);
          setTimeout(() => {
            if (registerFormContainer && loginFormContainer) {
              registerFormContainer.classList.add("hidden");
              loginFormContainer.classList.remove("hidden");
            }
          }, 1000);
        }
      } catch (err) {
        showToast("Sunucu hatası.", true);
      }
    });
  }
  if (loginForm) {
    loginForm.addEventListener("submit", async function(e) {
      e.preventDefault();
      if (checkEmptyFields(loginForm)) {
        showToast("Lütfen tüm alanları doldurun!", true);
        return;
      }
      const username = document.getElementById("loginUsername")?.value || "";
      const password = document.getElementById("loginPassword")?.value || "";
      try {
        const res = await fetch('/api/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'same-origin',
          body: JSON.stringify({ username, password })
        });
        const data = await res.json();
        if (!res.ok) {
          showToast(data.message, true);
        } else {
          showToast(data.message);
          localStorage.setItem("username", username);
          localStorage.setItem("token", data.token);
          setTimeout(() => {
            window.location.href = "/anasayfa.html";
          }, 1000);
        }
      } catch (err) {
        showToast("Sunucu hatası.", true);
      }
    });
  }

  window.togglePassword = function(inputId, btn) {
    const passwordField = document.getElementById(inputId);
    if (passwordField.type === "password") {
      passwordField.type = "text";
      btn.textContent = "Gizle";
    } else {
      passwordField.type = "password";
      btn.textContent = "Göster";
    }
  };

  function checkPasswordMatch() {
    if (registerPasswordInput.value !== confirmPasswordInput.value) {
      passwordError.textContent = "Şifreler eşleşmiyor!";
      confirmPasswordInput.setCustomValidity("Şifreler eşleşmiyor.");
    } else {
      passwordError.textContent = "";
      confirmPasswordInput.setCustomValidity("");
    }
  }
  if (registerPasswordInput) {
    registerPasswordInput.addEventListener("input", checkPasswordMatch);
  }
  if (confirmPasswordInput) {
    confirmPasswordInput.addEventListener("input", checkPasswordMatch);
  }

  const strengthBar = document.querySelector("#passwordStrength .strength-bar");
  const strengthText = document.querySelector("#passwordStrength .strength-text");
  if (registerPasswordInput) {
    registerPasswordInput.addEventListener("input", function() {
      const val = registerPasswordInput.value;
      let strength = 0;
      if (val.length > 5) strength++;
      if (/[a-z]/.test(val) && /[A-Z]/.test(val)) strength++;
      if (/\d/.test(val)) strength++;
      if (/\W/.test(val)) strength++;
      const percent = (strength / 4) * 100;
      strengthBar.style.width = percent + "%";
      if (strength === 0) {
        strengthBar.style.backgroundColor = "transparent";
        strengthText.textContent = "";
      } else if (strength === 1) {
        strengthBar.style.backgroundColor = "red";
        strengthText.textContent = "Zayıf";
      } else if (strength === 2) {
        strengthBar.style.backgroundColor = "orange";
        strengthText.textContent = "Orta";
      } else if (strength === 3) {
        strengthBar.style.backgroundColor = "yellowgreen";
        strengthText.textContent = "Güçlü";
      } else if (strength === 4) {
        strengthBar.style.backgroundColor = "green";
        strengthText.textContent = "Çok Güçlü";
      }
    });
  }

  function checkEmptyFields(formElement) {
    const requiredInputs = formElement.querySelectorAll("input[required]");
    let emptyFound = false;
    requiredInputs.forEach((input) => {
      if (!input.value.trim()) {
        emptyFound = true;
      }
    });
    return emptyFound;
  }

  function showToast(message, isError) {
    toast.textContent = message;
    toast.classList.remove("hidden");
    toast.style.backgroundColor = isError ? "#e74c3c" : "#27ae60";
    setTimeout(() => {
      toast.classList.add("hidden");
    }, 3000);
  }

  if (document.getElementById('milyoner-soru')) {
    function kategoriKeyDonustur(kategori) {
      const map = {
        'Teknoloji Modu': 'Teknoloji',
        'Sinema Modu': 'Sinema',
        'Müzik Modu': 'Muzik',
        'Dil Bilgisi Modu': 'Dil',
        'Araba Modu': 'Araba',
        'Kültür Modu': 'Kultur',
        'Kapışma Modu': 'Kapisma',
        'Zaman Modu': 'Zaman',
      };
      return map[kategori] || kategori;
    }

    // Fisher-Yates karıştırma algoritması
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }

    const kategori = localStorage.getItem('seciliKategori') || 'Teknoloji Modu';
    const kategoriKey = kategoriKeyDonustur(kategori);
    let puan = 0;
    let dogruCevapSayisi = 0;
    let soruIndex = 0;
    let soruListesi = [];
    let timer = null;
    let sure = 20;
    let sureKalan = sure;
    let joker5050Used = false;
    let jokerAudienceUsed = false;
    let jokerPhoneUsed = false;
    let soundOn = true;

    const soruDiv = document.getElementById('milyoner-soru');
    const secenekBtns = [
      document.getElementById('secenekA'),
      document.getElementById('secenekB'),
      document.getElementById('secenekC'),
      document.getElementById('secenekD')
    ];
    const puanDiv = document.getElementById('puan');
    const progressDiv = document.getElementById('milyoner-progress');
    const progressBarFill = document.getElementById('progress-bar-fill');
    const timerSpan = document.getElementById('timer');
    const cardDiv = document.getElementById('milyoner-card');
    const mediaArea = document.getElementById('media-area');
    const audioCorrect = document.getElementById('audio-correct');
    const audioWrong = document.getElementById('audio-wrong');

    const joker5050 = document.getElementById('joker-5050');
    const jokerAudience = document.getElementById('joker-audience');
    const jokerPhone = document.getElementById('joker-phone');

    async function sorulariCek() {
      try {
        console.log(`Sorular çekiliyor: kategori=${kategoriKey}`);
        const res = await fetch('/api/questions/generate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          },
          body: JSON.stringify({ kategori: kategoriKey })
        });
        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.message || 'Sorular çekilemedi!');
        }
        if (!Array.isArray(data) || data.length === 0) {
          throw new Error('Geçerli sorular alınamadı.');
        }
        soruListesi = data;
        console.log(`API'den sorular yüklendi: ${soruListesi.length} adet`);
      } catch (err) {
        console.error('API hatası:', err);
        showToast('Sorular çekilemedi, yedek sorular kullanılıyor.', true);
        try {
          const yedekRes = await fetch('/questions.json');
          if (!yedekRes.ok) {
            throw new Error('Yedek sorular yüklenemedi.');
          }
          const yedekData = await yedekRes.json();
          soruListesi = yedekData[kategori] || yedekData['Teknoloji Modu'] || [];
          if (!Array.isArray(soruListesi) || soruListesi.length === 0) {
            throw new Error('Geçerli yedek sorular bulunamadı.');
          }
          console.log(`Yedek sorular yüklendi: ${soruListesi.length} adet`);
        } catch (yedekErr) {
          console.error('Yedek soru yükleme hatası:', yedekErr);
          showToast('Yedek sorular yüklenemedi.', true);
          soruListesi = [];
        }
      }
      // Soruları rastgele karıştır
      if (soruListesi.length > 0) {
        shuffleArray(soruListesi);
        console.log(`Sorular karıştırıldı: ${soruListesi.length} adet`, soruListesi);
        soruIndex = 0;
        soruGoster();
      } else {
        showToast('Hiç soru bulunamadı, oyun başlatılamıyor.', true);
        setTimeout(() => window.location.href = '/katagori.html', 3000);
      }
    }

    function secenekHarf(i) {
      return String.fromCharCode(65 + i);
    }

    function puanGuncelle() {
      puanDiv.textContent = "Puan: " + puan;
      localStorage.setItem('puan_' + kategoriKey, puan);
    }

    function fadeOutIn(callback) {
      cardDiv.style.transition = 'opacity 0.4s';
      cardDiv.style.opacity = 0;
      setTimeout(() => {
        callback();
        cardDiv.style.opacity = 1;
      }, 400);
    }

    function playSound(type) {
      if (!getSoundOn()) return;
      if (type === 'dogru') audioCorrect && audioCorrect.play();
      if (type === 'yanlis') audioWrong && audioWrong.play();
    }

    function ilerlemeBarGuncelle() {
      progressBarFill.style.width = ((soruIndex + 1) / soruListesi.length * 100) + '%';
    }

    function sureyiBaslat() {
      sureKalan = sure;
      timerSpan.textContent = sureKalan;
      timerSpan.style.color = '';
      if (timer) clearInterval(timer);
      timer = setInterval(() => {
        sureKalan--;
        timerSpan.textContent = sureKalan;
        if (sureKalan <= 5) timerSpan.style.color = '#e74c3c';
        if (sureKalan <= 0) {
          clearInterval(timer);
          timer = null;
          otomatikYanlis();
        }
      }, 1000);
    }

    function otomatikYanlis() {
      secenekBtns.forEach(b => b.disabled = true);
      const dogru = soruListesi[soruIndex].dogru;
      const dogruIndex = dogru.charCodeAt(0) - 65;
      secenekBtns[dogruIndex].classList.add('dogru');
      playSound('yanlis');
      setTimeout(() => {
        fadeOutIn(() => {
          soruIndex++;
          soruGoster();
        });
      }, 1200);
    }

    function medyaGoster(soru) {
      mediaArea.innerHTML = '';
      mediaArea.style.display = 'none';
      if (soru.gorsel) {
        mediaArea.innerHTML = `<img src="${soru.gorsel}" alt="Soru görseli" style="max-width:100%;max-height:180px;border-radius:1rem;">`;
        mediaArea.style.display = 'block';
      } else if (soru.ses) {
        mediaArea.innerHTML = `<audio controls src="${soru.ses}" style="width:100%"></audio>`;
        mediaArea.style.display = 'block';
      }
    }

    async function soruGoster() {
      if (!soruListesi || soruListesi.length === 0) {
        console.error("Soru listesi boş, oyun başlatılamıyor.");
        showToast("Sorular yüklenemedi, kategori seçimine dönülüyor.", true);
        setTimeout(() => window.location.href = '/katagori.html', 3000);
        return;
      }
      if (timer) clearInterval(timer);
      if (soruIndex >= soruListesi.length) {
        const lang = localStorage.getItem('lang') || 'tr';
        if (dogruCevapSayisi === 10) {
          puan = 10;
          puanGuncelle();
          await fetch('/api/score', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({ kategori: kategoriKey, puan })
          }).catch(() => showToast('Puan kaydedilemedi.', true));
          showToast('Tebrikler! Tüm soruları doğru cevapladınız!', false);
        } else {
          puan = 0;
          puanGuncelle();
          showToast('Maalesef, tüm soruları doğru cevaplayamadınız.', true);
        }
        soruDiv.innerHTML = `<div style='display:flex;flex-direction:column;align-items:center;gap:2.2rem;'>
          <span style='font-size:1.4rem;font-weight:bold;'>${translations[lang].quiz_finish_title || 'Tebrikler! Tüm soruları tamamladınız.'}</span>
          <span>Puanınız: ${puan}</span>
          <a class='main-menu-link' id='mainMenuBtnQuizEnd' style='font-size:1.1rem;padding:0.9rem 2.2rem;margin-top:0.7rem;cursor:pointer;' data-key="main_menu">${translations[lang].main_menu || 'Ana Menüye Dön'}</a>
        </div>`;
        const mainMenuBtn = document.getElementById('mainMenuBtnQuizEnd');
        if (mainMenuBtn) {
          mainMenuBtn.onclick = function(e) {
            e.preventDefault();
            if (typeof animatedRedirect === 'function') {
              animatedRedirect('anasayfa.html');
            } else {
              window.location.href = 'anasayfa.html';
            }
          };
        }
        secenekBtns.forEach(btn => btn.style.display = 'none');
        progressDiv.textContent = "";
        progressBarFill.style.width = '100%';
        timerSpan.textContent = '';
        mediaArea.style.display = 'none';
        return;
      }
      progressDiv.textContent = `Soru ${soruIndex + 1} / ${soruListesi.length}`;
      ilerlemeBarGuncelle();
      const soru = soruListesi[soruIndex];
      if (!soru || !soru.soru || !Array.isArray(soru.secenekler) || soru.secenekler.length !== 4 || !soru.dogru) {
        console.error("Geçersiz soru formatı:", soru);
        showToast("Soru formatı hatalı, bir sonraki soruya geçiliyor.", true);
        soruIndex++;
        soruGoster();
        return;
      }
      medyaGoster(soru);
      soruDiv.textContent = soru.soru;
      secenekBtns.forEach((btn, i) => {
        btn.className = 'milyoner-secenek';
        const textSpan = btn.querySelector('.secenek-text');
        if (textSpan) textSpan.textContent = soru.secenekler[i] || '';
        btn.disabled = false;
        btn.style.display = 'block';
        btn.style.visibility = 'visible';
      });
      if (joker5050Used) {
        secenekBtns.forEach(btn => btn.style.visibility = 'visible');
      }
      joker5050Used = false; // Her yeni soruda joker sıfırlanıyor
      sureyiBaslat();
      console.log(`Soru yüklendi: ${soru.soru}`, soru);
    }

    secenekBtns.forEach((btn, i) => {
      btn.onclick = function() {
        if (btn.classList.contains('disabled')) return;
        const secenek = secenekHarf(i);
        const dogru = soruListesi[soruIndex].dogru;
        secenekBtns.forEach(b => b.disabled = true);
        if (secenek === dogru) {
          btn.classList.add('dogru');
          dogruCevapSayisi++;
          playSound('dogru');
        } else {
          btn.classList.add('yanlis');
          const dogruIndex = dogru.charCodeAt(0) - 65;
          secenekBtns[dogruIndex].classList.add('dogru');
          playSound('yanlis');
        }
        if (timer) clearInterval(timer);
        setTimeout(() => {
          fadeOutIn(() => {
            soruIndex++;
            soruGoster();
          });
        }, 1200);
      };
    });

    document.addEventListener('keydown', function(e) {
      if (['a','b','c','d','A','B','C','D'].includes(e.key)) {
        const idx = e.key.toUpperCase().charCodeAt(0) - 65;
        if (secenekBtns[idx] && !secenekBtns[idx].disabled) {
          secenekBtns[idx].click();
        }
      }
    });

    if (joker5050) {
      joker5050.addEventListener('click', function() {
        if (joker5050Used) return;
        joker5050Used = true;
        joker5050.classList.add('used');
        const dogru = soruListesi[soruIndex].dogru;
        let yanlislar = [0,1,2,3].filter(i => secenekHarf(i) !== dogru);
        yanlislar = yanlislar.sort(() => Math.random() - 0.5).slice(0,2);
        yanlislar.forEach(i => {
          secenekBtns[i].style.visibility = 'hidden';
        });
        joker5050.classList.add('animate-joker');
        setTimeout(() => {
          joker5050.style.display = 'none';
          checkAllJokersUsed();
        }, 500);
      });
    }

    if (jokerAudience) {
      jokerAudience.addEventListener('click', function() {
        if (jokerAudienceUsed) return;
        jokerAudienceUsed = true;
        jokerAudience.classList.add('used');
        jokerAudience.classList.add('animate-joker');
        setTimeout(() => jokerAudience.classList.remove('animate-joker'), 700);
        showToast('Seyirci jokeri kullanıldı! (Demo)', false);
        setTimeout(() => {
          jokerAudience.style.display = 'none';
          checkAllJokersUsed();
        }, 500);
      });
    }

    if (jokerPhone) {
      jokerPhone.addEventListener('click', function() {
        if (jokerPhoneUsed) return;
        jokerPhoneUsed = true;
        jokerPhone.classList.add('used');
        jokerPhone.classList.add('animate-joker');
        setTimeout(() => jokerPhone.classList.remove('animate-joker'), 700);
        showToast('Telefon jokeri kullanıldı! (Demo)', false);
        setTimeout(() => {
          jokerPhone.style.display = 'none';
          checkAllJokersUsed();
        }, 500);
      });
    }

    function checkAllJokersUsed() {
      if (joker5050Used && jokerAudienceUsed && jokerPhoneUsed) {
        document.querySelectorAll('.joker-btn').forEach(btn => btn.style.display = 'none');
        const msg = document.querySelector('.all-jokers-used');
        if (msg) msg.style.display = 'flex';
      }
    }

    function getSoundOn() {
      return localStorage.getItem('soundOn') === null ? true : localStorage.getItem('soundOn') === 'true';
    }

    sorulariCek().then(() => {
      puanGuncelle();
    });
  }

  const hazirlikEkrani = document.getElementById('hazirlik-ekrani');
  const hazirlikBaslik = document.getElementById('hazirlik-baslik');
  const hazirlikAciklama = document.getElementById('hazirlik-aciklama');
  const hazirimBtn = document.getElementById('hazirim-btn');
  const iptalBtn = document.getElementById('iptal-btn');

  const soruSayisi = 10;

  if (hazirlikEkrani && hazirlikBaslik && hazirlikAciklama && hazirimBtn) {
    const lang = localStorage.getItem('lang') || 'tr';
    function kategoriKeyDonustur(kategori) {
      const map = {
        'Teknoloji Modu': 'Teknoloji',
        'Sinema Modu': 'Sinema',
        'Müzik Modu': 'Muzik',
        'Dil Bilgisi Modu': 'Dil',
        'Araba Modu': 'Araba',
        'Kültür Modu': 'Kultur',
        'Kapışma Modu': 'Kapisma',
        'Zaman Modu': 'Zaman',
      };
      return map[kategori] || kategori;
    }
    const kategori = localStorage.getItem('seciliKategori') || 'Teknoloji Modu';
    const kategoriKey = kategoriKeyDonustur(kategori);
    const modeName = translations[lang][`mode_${kategoriKey.toLowerCase()}`] || kategori;
    let readyTitle = translations[lang].quiz_ready_title;
    let readyDesc = translations[lang].quiz_ready_desc;
    if (!readyTitle) readyTitle = '{mode} Modu';
    if (!readyDesc) readyDesc = 'Seçtiğiniz kategoride {n} soru sorulacak. Hazır mısınız?';
    readyTitle = readyTitle.replace('{mode}', modeName);
    readyDesc = readyDesc.replace('{n}', soruSayisi);
    hazirlikBaslik.textContent = readyTitle;
    hazirlikAciklama.textContent = readyDesc;
    hazirimBtn.onclick = function() {
      const icerik = hazirlikEkrani.querySelector('.hazirlik-icerik');
      icerik.classList.remove('hazirlik-anim-in');
      icerik.classList.add('hazirlik-anim-out');
      setTimeout(() => {
        hazirlikEkrani.style.display = 'none';
        const quizMain = document.getElementById('milyoner-main');
        if (quizMain) quizMain.style.display = 'block';
        if (typeof soruGoster === 'function') soruGoster();
      }, 350);
    };
    if (iptalBtn) {
      iptalBtn.onclick = function() {
        const icerik = hazirlikEkrani.querySelector('.hazirlik-icerik');
        icerik.classList.remove('hazirlik-anim-in');
        icerik.classList.add('hazirlik-anim-out');
        setTimeout(() => {
          window.location.href = 'katagori.html';
        }, 350);
      };
    }
    document.body.style.overflow = 'hidden';
    const enableScroll = () => { document.body.style.overflow = ''; };
    hazirimBtn.addEventListener('click', enableScroll);
    if (iptalBtn) iptalBtn.addEventListener('click', enableScroll);
  }

  const correctSelect = document.getElementById('correctAnswer');
  if (correctSelect) {
    Array.from(correctSelect.options).forEach(function(opt) {
      if (!opt.textContent || opt.textContent.trim() === "") {
        opt.textContent = opt.value;
      }
    });
  }

  function injectProfileBar() {
    if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname === '/index.html') return;
    if (document.querySelector('.profile-container')) return;
    fetch('/api/user', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(res => res.ok ? res.json() : null)
      .then(user => {
        const name = user?.fullname || user?.username || "Kullanıcı Adı";
        const img = user?.profilePic || 'image/Default_pfp.jpg';
        const div = document.createElement('div');
        div.innerHTML = `
          <div class="profile-container" onclick="toggleDropdown()">
            <img id="profileImage" src="${img}" alt="Profile Picture" class="profile-pic">
            <span class="profile-name">${name}</span>
          </div>
          <div id="profileDropdown" class="dropdown">
            <label for="profileInput">Profil Resmi Yükle</label>
            <a onclick="removeProfilePic()">Profil Resmini Sil</a>
            <a onclick="logout()">Çıkış</a>
          </div>
          <input type="file" id="profileInput" accept="image/*" onchange="uploadProfilePic(event)">
        `;
        document.body.insertBefore(div, document.body.firstChild);
      });
  }

  window.addEventListener('DOMContentLoaded', injectProfileBar);

  function toggleDropdown() {
    const dropdown = document.getElementById('profileDropdown');
    if (!dropdown) return;
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
  }

  function uploadProfilePic(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(e) {
      document.getElementById('profileImage').src = e.target.result;
      localStorage.setItem('profilePic', e.target.result);
    };
    reader.readAsDataURL(file);
  }

  function removeProfilePic() {
    document.getElementById('profileImage').src = 'image/Default_pfp.jpg';
    localStorage.removeItem('profilePic');
  }

  function logout() {
    localStorage.clear();
    window.location.href = 'index.html';
  }

  window.addEventListener('DOMContentLoaded', function() {
    const img = document.getElementById('profileImage');
    const name = document.querySelector('.profile-name');
    if (img && localStorage.getItem('profilePic')) {
      img.src = localStorage.getItem('profilePic');
    }
    if (name && localStorage.getItem('username')) {
      name.textContent = localStorage.getItem('username');
    }
  });

  if (typeof saveSettings === 'function') {
    const _saveSettings = saveSettings;
    window.saveSettings = function() {
      const soundOn = document.getElementById('soundToggle').checked;
      localStorage.setItem('soundOn', soundOn);
      _saveSettings();
    }
  }

  function updateProfileBarFromApi() {
    fetch('/api/user', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(res => res.ok ? res.json() : null)
      .then(user => {
        if (!user) return;
        const name = document.querySelector('.profile-name');
        const img = document.getElementById('profileImage');
        if (name) name.textContent = user.fullname || user.username || "Kullanıcı Adı";
        if (img) img.src = user.profilePic || 'image/Default_pfp.jpg';
      });
  }

  window.addEventListener('DOMContentLoaded', function() {
    injectProfileBar();
    setTimeout(updateProfileBarFromApi, 100);
  });

  function animatedRedirect(url) {
    try {
      const darkMode = JSON.parse(localStorage.getItem('darkMode') ?? 'false');
      if (darkMode) {
        document.body.classList.add('dark-mode');
        document.body.style.background = '#18181a';
      } else {
        document.body.classList.remove('dark-mode');
        document.body.style.background = '';
      }
    } catch(e) {}
    document.body.classList.add('page-fade-out');
    setTimeout(() => {
      window.location.href = url;
    }, 500);
  }
  window.animatedRedirect = animatedRedirect;

  function applyDarkMode(isDark) {
    if (isDark) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }
  window.applyDarkMode = applyDarkMode;

  function setDarkMode(isDark) {
    localStorage.setItem('darkMode', JSON.stringify(isDark));
    if (typeof applyDarkMode === 'function') applyDarkMode(isDark);
  }
  window.setDarkMode = setDarkMode;

  if (document.getElementById('darkToggle')) {
    document.getElementById('darkToggle').addEventListener('change', function(e) {
      setDarkMode(e.target.checked);
    });
  }

  (function insertLanguageDropdown() {
    const allowedPages = ["index.html", "anasayfa.html", "soruhavuzu.html", "/"];
    let currentPage = window.location.pathname.split("/").pop();
    if (!currentPage || currentPage === "/") currentPage = "anasayfa.html";
    if (!allowedPages.map(p=>p.toLowerCase()).includes(currentPage.toLowerCase())) return;
    if (document.getElementById('langBtn')) return;
    const langHtml = `
      <div class="language-dropdown">
        <button class="lang-btn" id="langBtn">
          <img src="flags/tr.png" alt="Türkçe" class="lang-flag">
          <span class="selected-lang">Türkçe</span>
          <span class="arrow">▾</span>
        </button>
        <ul class="lang-menu hidden" id="langMenu">
          <li data-lang="en">
            <img src="flags/us.svg" alt="English" class="lang-flag">
            <span>English</span>
            <span class="check">✓</span>
          </li>
          <li data-lang="tr">
            <img src="flags/tr.png" alt="Türkçe" class="lang-flag">
            <span>Türkçe</span>
            <span class="check">✓</span>
          </li>
        </ul>
      </div>
    `;
    const div = document.createElement('div');
    div.innerHTML = langHtml;
    document.body.appendChild(div.firstElementChild);
  })();
});