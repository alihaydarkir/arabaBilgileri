// app.js - Ana uygulama dosyası
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Middleware ayarları
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// Araba verilerini yükle
let arabalar = [];
try {
    arabalar = require('./data/arabalar.json');
} catch (error) {
    console.error('Araba verileri yüklenemedi:', error.message);
    arabalar = [];
}

// Ana sayfa route
app.get('/', (req, res) => {
    const anahtarKelime = req.query.anahtarKelime ? req.query.anahtarKelime.toLowerCase().trim() : '';
    
    let filtrelenmisArabalar = arabalar;
    
    if (anahtarKelime) {
        filtrelenmisArabalar = arabalar.filter(araba => 
            araba.marka.toLowerCase().includes(anahtarKelime) || 
            araba.model.toLowerCase().includes(anahtarKelime) || 
            araba.donanim.toLowerCase().includes(anahtarKelime) || 
            araba.yakit.toLowerCase().includes(anahtarKelime) ||
            araba.vites.toLowerCase().includes(anahtarKelime) ||
            araba.motor.toString().includes(anahtarKelime)
        );
    }
    
    const mesaj = anahtarKelime && filtrelenmisArabalar.length === 0 
        ? `"${req.query.anahtarKelime}" için sonuç bulunamadı` 
        : null;
    
    res.render('index', { 
        arabalar: filtrelenmisArabalar, 
        anahtarKelime: req.query.anahtarKelime || '', 
        mesaj,
        toplamSonuc: filtrelenmisArabalar.length,
        toplamAraba: arabalar.length
    });
});

// Arama filtreleme route
app.post('/filtrele', (req, res) => {
    const anahtarKelime = req.body.anahtarKelime?.trim() || '';
    if (anahtarKelime) {
        res.redirect(`/?anahtarKelime=${encodeURIComponent(anahtarKelime)}`);
    } else {
        res.redirect('/');
    }
});

// İletişim formu route
app.post('/iletisim', (req, res) => {
    const { adSoyad, email, telefon, mesaj } = req.body;
    
    // Form doğrulama
    if (!adSoyad || !email || !mesaj) {
        return res.render('index', { 
            arabalar, 
            anahtarKelime: '', 
            mesaj: 'Lütfen tüm gerekli alanları doldurun!',
            hata: true,
            toplamSonuc: arabalar.length,
            toplamAraba: arabalar.length
        });
    }
    
    // Console'a log
    console.log('\n--- Yeni İletişim Mesajı ---');
    console.log(`Ad Soyad: ${adSoyad}`);
    console.log(`Email: ${email}`);
    console.log(`Telefon: ${telefon || 'Belirtilmemiş'}`);
    console.log(`Mesaj: ${mesaj}`);
    console.log(`Tarih: ${new Date().toLocaleString('tr-TR')}`);
    console.log('---------------------------\n');
    
    res.render('index', { 
        arabalar, 
        anahtarKelime: '', 
        mesaj: 'Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.',
        basari: true,
        toplamSonuc: arabalar.length,
        toplamAraba: arabalar.length
    });
});

// API endpoint - JSON veri döndürür
app.get('/api/arabalar', (req, res) => {
    const anahtarKelime = req.query.search ? req.query.search.toLowerCase() : '';
    
    let sonuc = arabalar;
    if (anahtarKelime) {
        sonuc = arabalar.filter(araba => 
            araba.marka.toLowerCase().includes(anahtarKelime) || 
            araba.model.toLowerCase().includes(anahtarKelime) || 
            araba.donanim.toLowerCase().includes(anahtarKelime)
        );
    }
    
    res.json({
        success: true,
        data: sonuc,
        count: sonuc.length,
        total: arabalar.length
    });
});

// Detay sayfası
app.get('/araba/:id', (req, res) => {
    const arabaId = req.params.id;
    const araba = arabalar.find(a => a.id === arabaId);
    
    if (!araba) {
        return res.status(404).render('error', { 
            mesaj: 'Araba bulunamadı',
            kod: 404
        });
    }
    
    res.render('detay', { araba });
});

// 404 handler
app.use((req, res) => {
    res.status(404).render('error', { 
        mesaj: 'Sayfa bulunamadı',
        kod: 404
    });
});

// Error handler
app.use((err, req, res, next) => {
    console.error('Uygulama hatası:', err);
    res.status(500).render('error', { 
        mesaj: 'Sunucu hatası oluştu',
        kod: 500
    });
});

// Sunucuyu başlat
app.listen(port, () => {
    console.log(`🚗 Araba Bilgileri Uygulaması`);
    console.log(`🌐 Server: http://localhost:${port}`);
    console.log(`📊 Toplam araba sayısı: ${arabalar.length}`);
    console.log(`📅 Başlatma zamanı: ${new Date().toLocaleString('tr-TR')}`);
});

module.exports = app;
