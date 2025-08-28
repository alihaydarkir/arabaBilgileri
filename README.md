🚗 Araba Bilgileri Web Uygulaması

Türkiye’nin Otomobil Veritabanı

Express.js ve EJS kullanılarak geliştirilmiş basit bir web uygulaması. Araba bilgilerini arayabilir, filtreleyebilir ve detaylarını görebilirsiniz.

Özellikler

🔍 Arama ve filtreleme

📱 Responsive tasarım

🚀 Basit ve hızlı API

🗂️ JSON tabanlı veri kaynağı

Teknolojiler

Backend: Node.js + Express.js

Template: EJS

Veri: JSON dosyası

Styling: CSS

Kurulum
git clone https://github.com/alihaydarkir/arababilgileri.git
cd arababilgileri
npm install
npm run dev


Uygulama: http://localhost:3000

API: http://localhost:3000/api/arabalar

API Kullanımı

Tüm arabalar:
GET /api/arabalar

Arama:
GET /api/arabalar?search=bmw

Detay:
GET /araba/{id}

Proje Yapısı
arababilgileri/
├── data/arabalar.json
├── public/
│   ├── css/styles.css
│   └── js/app.js
├── views/
│   ├── index.ejs
│   ├── detay.ejs
│   └── error.ejs
├── app.js
└── package.json

Katkıda Bulunma

Repo’yu forkla

Yeni branch aç

Değişiklik yap ve commit et

Pull request gönder


Geliştirici: alihaydarkir

Lisans: MIT
