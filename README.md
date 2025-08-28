# Araba Bilgileri Web Uygulaması

Türkçe araba bilgilerini arama ve görüntüleme imkanı sunan Express.js tabanlı web uygulaması.

## Özellikler

- **Gelişmiş Arama**: Marka, model, donanım, yakıt türü ve vites tipine göre filtreleme
- **Responsive Tasarım**: Mobil ve desktop uyumlu arayüz
- **İletişim Formu**: Kullanıcı geri bildirimleri için form sistemi
- **REST API**: JSON formatında veri erişimi
- **Detaylı Görüntüleme**: Her arabanın ayrıntılı bilgi sayfası
- **Hızlı Performans**: Optimize edilmiş arama algoritması

## Teknolojiler

- **Backend**: Node.js, Express.js
- **Template Engine**: EJS
- **Styling**: CSS3 (Modern responsive tasarım)
- **JavaScript**: Vanilla JS (Frontend interaktivite)
- **Data**: JSON dosya tabanlı veri saklama

## Kurulum

### Gereksinimler
- Node.js (v14.0.0 veya üzeri)
- npm

### Adımlar

1. **Projeyi klonlayın**
```bash
git clone https://github.com/alihaydarkir/arababilgileri.git
cd arababilgileri
```

2. **Bağımlılıkları yükleyin**
```bash
npm install
```

3. **Uygulamayı başlatın**
```bash
# Üretim modu
npm start

# Geliştirme modu (nodemon ile)
npm run dev
```

4. **Tarayıcıda açın**
```
http://localhost:3000
```

## Proje Yapısı

```
arababilgileri/
├── app.js                 # Ana Express uygulaması
├── package.json          # Proje bağımlılıkları ve scriptler
├── README.md             # Proje dokümantasyonu
├── .gitignore            # Git ignore kuralları
├── data/
│   └── arabalar.json     # Araba verileri (JSON format)
├── views/
│   ├── index.ejs         # Ana sayfa şablonu
│   ├── detay.ejs         # Araba detay sayfası
│   └── error.ejs         # Hata sayfası şablonu
└── public/
    ├── css/
    │   └── styles.css    # Ana stil dosyası
    └── js/
        └── app.js        # Frontend JavaScript
```

## API Kullanımı

### Tüm Arabaları Getir
```http
GET /api/arabalar
```

### Arama ile Arabalar
```http
GET /api/arabalar?search=bmw
```

### Örnek API Yanıtı
```json
{
  "success": true,
  "data": [
    {
      "id": "1",
      "marka": "BMW",
      "model": "320i",
      "donanim": "2.0 Turbo",
      "motor": "2000",
      "yakit": "Benzin",
      "vites": "Otomatik",
      "fiyat": "450000",
      "websitesi": "http://www.bmw.com.tr/"
    }
  ],
  "count": 1,
  "total": 5
}
```

## Mevcut Veriler

Uygulama şu markaları içermektedir:
- **Alfa Romeo**: 4C, 4C Spider
- **BMW**: 320i
- **Mercedes**: C200
- **Audi**: A4

## Konfigürasyon

### Port Değiştirme
```bash
PORT=8080 npm start
```

### Yeni Araba Ekleme
`data/arabalar.json` dosyasını düzenleyin:

```json
{
  "id": "6",
  "marka": "Volkswagen",
  "model": "Golf",
  "donanim": "1.6 TDI",
  "motor": "1600",
  "yakit": "Dizel",
  "vites": "Manuel",
  "fiyat": "320000",
  "websitesi": "http://www.volkswagen.com.tr/"
}
```

## Özellikler

### Arama İşlemleri
- Gerçek zamanlı arama
- Çoklu alan filtreleme
- Sonuç sayısı gösterimi

### Form Validasyonu
- Client-side validation
- Server-side validation
- Hata mesajları

### UI/UX
- Modern responsive tasarım
- Smooth scroll animasyonları
- Loading durumları
- Hover efektleri

## Dağıtım

### Heroku
```bash
heroku create arababilgileri-app
git push heroku main
```

### Netlify Functions
Serverless deployment için uygun

## Geliştirme

### Geliştirme Modu
```bash
npm run dev
```

### Linting
```bash
npm run lint
```

## Katkıda Bulunma

1. Fork edin
2. Feature branch oluşturun (`git checkout -b feature/yeni-ozellik`)
3. Commit edin (`git commit -am 'Yeni özellik ekle'`)
4. Push edin (`git push origin feature/yeni-ozellik`)
5. Pull Request oluşturun

## Yapılacaklar

- [ ] Veritabanı entegrasyonu (MongoDB)
- [ ] Kullanıcı giriş sistemi
- [ ] Admin paneli
- [ ] Resim yükleme
- [ ] Email bildirim sistemi
- [ ] Çoklu dil desteği

## Lisans

MIT License

## Geliştirici

**alihaydarkir**
- GitHub: [@alihaydarkir](https://github.com/alihaydarkir)

## Destek

Sorularınız için:
- Issue açın
- Email gönderin
- İletişim formu kullanın

---

Bu proje İstanbul Zaim Üniversitesi Web Teknolojileri dersi kapsamında geliştirilmiştir.
