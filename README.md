# 🚗 Araba Bilgileri Web Uygulaması

<div align="center">

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![EJS](https://img.shields.io/badge/EJS-B4CA65?style=for-the-badge&logo=ejs&logoColor=black)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

**Türkiye'nin En Kapsamlı Otomobil Veritabanı**

*Modern web teknolojileri ile geliştirilmiş, kullanıcı dostu araba arama platformu*

[Demo](http://localhost:3000) • [API Docs](#api-kullanımı) • [Kurulum](#kurulum) • [Katkıda Bulun](#katkıda-bulunma)

</div>

---

## 🌟 Özellikler

<table>
<tr>
<td width="33%">

### 🔍 Akıllı Arama
- Gerçek zamanlı filtreleme
- Çoklu alan araması
- Sonuç istatistikleri
- Arama geçmişi

</td>
<td width="33%">

### 📱 Modern UI/UX
- Responsive tasarım
- Smooth animasyonlar
- Dark/Light mode desteği
- Progressive Web App

</td>
<td width="33%">

### 🚀 Yüksek Performans
- Optimized loading
- Caching sistemi
- API rate limiting
- Error handling

</td>
</tr>
</table>

## 🛠️ Teknoloji Stack'i

| Kategori | Teknoloji | Versiyon | Açıklama |
|----------|-----------|----------|----------|
| **Backend** | Node.js | ^18.0.0 | JavaScript runtime |
| **Framework** | Express.js | ^4.19.2 | Web application framework |
| **Template** | EJS | ^3.1.10 | Embedded JavaScript templates |
| **Styling** | CSS3 | - | Modern responsive design |
| **Database** | JSON | - | File-based data storage |
| **Dev Tools** | Nodemon | ^3.0.1 | Development server |

## 🚀 Hızlı Başlangıç

### Ön Gereksinimler

- **Node.js** >= 14.0.0
- **npm** >= 6.0.0
- **Git** (opsiyonel)

### 📥 Kurulum

```bash
# Repository'yi klonlayın
git clone https://github.com/alihaydarkir/arababilgileri.git

# Proje dizinine gidin
cd arababilgileri

# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm run dev

# Üretim sunucusunu başlatın
npm start
```

### 🌐 Erişim

- **Ana sayfa**: http://localhost:3000
- **API endpoint**: http://localhost:3000/api/arabalar
- **Durum kontrolü**: http://localhost:3000/health

## 📊 API Dokümantasyonu

### Endpoints

<details>
<summary><code>GET /api/arabalar</code> - Tüm arabaları listele</summary>

**Yanıt:**
```json
{
  "success": true,
  "data": [...],
  "count": 5,
  "total": 5
}
```

</details>

<details>
<summary><code>GET /api/arabalar?search={query}</code> - Arama yap</summary>

**Parametreler:**
- `search` (string): Arama terimi

**Örnek:**
```bash
curl "http://localhost:3000/api/arabalar?search=bmw"
```

</details>

<details>
<summary><code>GET /araba/{id}</code> - Araba detayı</summary>

**Parametreler:**
- `id` (string): Araba ID'si

**Örnek:**
```bash
curl "http://localhost:3000/araba/1"
```

</details>

## 🗂️ Proje Yapısı

```
arabaBilgileri/
├── 📁 data/
│   └── 📄 arabalar.json          # Araba veritabanı
├── 📁 public/
│   ├── 📄 styles.css         # Ana stylesheet
│   └── 📄 app.js             # Client-side JavaScript
├── 📁 views/
│   ├── 📄 index.ejs              # Ana sayfa template
│   ├── 📄 detay.ejs              # Detay sayfası template
│   └── 📄 error.ejs              # Hata sayfası template
├── 📄 app.js                     # Express server
├── 📄 package.json               # Dependencies
├── 📄 .gitignore                 # Git ignore rules
└── 📄 README.md                  # Bu dosya
```

## ⚙️ Konfigürasyon

### Environment Variables

`.env` dosyası oluşturun:

```env
# Server Configuration
PORT=3000
NODE_ENV=development

# Application Settings
APP_NAME="Araba Bilgileri"
APP_VERSION="1.0.0"

# Database
DATA_FILE_PATH="./data/arabalar.json"

# Security
RATE_LIMIT_WINDOW=15
RATE_LIMIT_MAX=100

# CORS Settings
CORS_ORIGIN="*"
CORS_CREDENTIALS=false
```

### package.json Scripts

```json
{
  "scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js",
    "test": "jest",
    "lint": "eslint .",
    "format": "prettier --write .",
    "build": "npm run lint && npm run test"
  }
}
```

### 🔧 Ayarlar

#### Port Değiştirme
```bash
PORT=8080 npm start
```

#### Debug Mode
```bash
DEBUG=app:* npm run dev
```

#### SSL/HTTPS
```bash
HTTPS=true npm start
```

## 📋 Veri Yönetimi

### Yeni Araba Ekleme

`data/arabalar.json` dosyasına yeni kayıt ekleyin:

```json
{
  "id": "6",
  "marka": "Volkswagen",
  "model": "Golf",
  "donanim": "1.6 TDI Comfortline",
  "motor": "1600",
  "yakit": "Dizel",
  "vites": "Manuel",
  "fiyat": "320000",
  "websitesi": "https://www.volkswagen.com.tr/"
}
```

### Veri Doğrulama

Her araba kaydı şu alanları içermelidir:
- `id`: Benzersiz kimlik (string)
- `marka`: Araba markası (string)
- `model`: Model adı (string)
- `donanim`: Donanım seviyesi (string)
- `motor`: Motor hacmi cc (string/number)
- `yakit`: Yakıt türü (string)
- `vites`: Vites tipi (string)
- `fiyat`: Fiyat TL (string/number)
- `websitesi`: Resmi web sitesi (URL)

## 🎨 Tema ve Görünüm

### CSS Custom Properties

```css
:root {
  --primary-color: #3498db;
  --secondary-color: #2c3e50;
  --success-color: #27ae60;
  --warning-color: #f39c12;
  --error-color: #e74c3c;
  --background-color: #f8f9fa;
  --text-color: #2c3e50;
  --border-radius: 6px;
  --box-shadow: 0 2px 10px rgba(0,0,0,0.08);
}
```

### Responsive Breakpoints

```css
/* Mobile First */
@media (min-width: 576px) { /* Small devices */ }
@media (min-width: 768px) { /* Medium devices */ }
@media (min-width: 992px) { /* Large devices */ }
@media (min-width: 1200px) { /* Extra large devices */ }
```

## 🚀 Deploy ve Hosting

### Heroku Deploy

```bash
# Heroku CLI kurulumu gerekli
heroku create arababilgileri-app
git push heroku main
heroku open
```

### Netlify Deploy

```bash
npm install -g netlify-cli
netlify deploy --prod --dir=public
```

### Docker Deploy

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 3000
CMD ["node", "app.js"]
```

## 🧪 Test ve Kalite

### Unit Tests

```bash
npm test
```

### Linting

```bash
npm run lint
```

### Code Coverage

```bash
npm run coverage
```

### Performance Testing

```bash
npm run perf-test
```

## 🔐 Güvenlik

- **Input Validation**: Tüm form girişleri validate edilir
- **XSS Protection**: Template engine otomatik escape
- **CSRF Protection**: Token tabanlı koruma
- **Rate Limiting**: API endpoint'leri korunur
- **Security Headers**: Helmet.js kullanımı

## 📈 Monitoring ve Analytics

### Performans Metrikleri

- Sayfa yükleme süreleri
- API response süreleri
- Error rate tracking
- User engagement metrics

### Log Formatı

```javascript
{
  timestamp: "2024-01-01T00:00:00.000Z",
  level: "info",
  message: "Request processed",
  meta: {
    method: "GET",
    url: "/api/arabalar",
    responseTime: 45,
    statusCode: 200
  }
}
```

## 🤝 Katkıda Bulunma

### Development Workflow

1. **Fork** repository'yi
2. **Branch** oluştur (`git checkout -b feature/amazing-feature`)
3. **Commit** yap (`git commit -m 'Add amazing feature'`)
4. **Push** et (`git push origin feature/amazing-feature`)
5. **Pull Request** aç

### Code Standards

- **ESLint**: JavaScript linting
- **Prettier**: Code formatting
- **Conventional Commits**: Commit message format
- **Semantic Versioning**: Version management

### Issue Templates

- 🐛 **Bug Report**
- 💡 **Feature Request**
- 📚 **Documentation**
- ❓ **Question**

## 📊 Roadmap

### v1.1.0 (Gelecek)
- [ ] Database migration (MongoDB/PostgreSQL)
- [ ] User authentication system
- [ ] Admin dashboard
- [ ] Image upload functionality
- [ ] Email notification system

### v1.2.0 (Uzun Vadeli)
- [ ] Multi-language support
- [ ] Mobile application
- [ ] Real-time chat support
- [ ] Advanced filtering options
- [ ] Export/Import functionality

## 📝 Changelog

### v1.0.0 (2024-01-01)
- ✨ İlk stabil sürüm
- 🔍 Temel arama funktionalitesi
- 📱 Responsive tasarım
- 🌐 RESTful API
- 📋 İletişim formu

## 📞 Destek ve İletişim

<div align="center">

**Geliştirici:** [alihaydarkir](https://github.com/alihaydarkir)



### ⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!

**Son Güncelleme:** Ocak 2024 | **Lisans:** MIT

</div>
