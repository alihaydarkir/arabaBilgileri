🚗 Araba Bilgileri Web Uygulaması

Türkiye’nin Kapsamlı Otomobil Veritabanı
Node.js & Express.js ile geliştirilmiş, EJS tabanlı bir web uygulaması.
Araba bilgilerini listeleyebilir, arayabilir ve detaylarını görüntüleyebilirsiniz.

✨ Özellikler

🔍 Arama & Filtreleme

📱 Responsive tasarım

🚀 Hızlı API

🗂️ JSON tabanlı veritabanı

🛠️ Teknolojiler
Kategori	Teknoloji
Backend	Node.js, Express.js
Template	EJS
Veri	JSON
Styling	CSS
🚀 Kurulum
# Repository'yi klonla
git clone https://github.com/alihaydarkir/arababilgileri.git

# Proje klasörüne gir
cd arababilgileri

# Bağımlılıkları yükle
npm install

# Geliştirme modunda çalıştır
npm run dev


🔗 Uygulama: http://localhost:3000

🔗 API: http://localhost:3000/api/arabalar

📊 API Kullanımı

Tüm arabalar
GET /api/arabalar

Arama yap
GET /api/arabalar?search=bmw

Detay sayfası
GET /araba/{id}

📂 Proje Yapısı
arababilgileri/
├── data/arabalar.json     # Araba veritabanı
├── public/                # CSS & JS dosyaları
├── views/                 # EJS sayfaları
├── app.js                 # Express server
└── package.json

🤝 Katkıda Bulunma

Repo’yu forkla

Yeni bir branch oluştur

Değişiklikleri commit et

Pull Request gönder

📞 İletişim

👨‍💻 Geliştirici: alihaydarkir

📜 Lisans: MIT

⭐ Eğer projeyi beğendiyseniz, destek olmak için star vermeyi unutmayın!
