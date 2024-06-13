
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static('public'));

const arabalar = require('./data/arabalar.json');

app.get('/', (req, res) => {
    const anahtarKelime = req.query.anahtarKelime ? req.query.anahtarKelime.toLowerCase() : '';
    const filtrelenmisArabalar = anahtarKelime
        ? arabalar.filter(araba => 
            araba.marka.toLowerCase().includes(anahtarKelime) || 
            araba.model.toLowerCase().includes(anahtarKelime) || 
            araba.donanim.toLowerCase().includes(anahtarKelime) || 
            araba.yakit.toLowerCase().includes(anahtarKelime) ||
            araba.vites.toLowerCase().includes(anahtarKelime))
        : arabalar;
    const mesaj = filtrelenmisArabalar.length === 0 ? 'Not Found' : null;
    res.render('index', { arabalar: filtrelenmisArabalar, anahtarKelime, mesaj });
});

app.post('/filtrele', (req, res) => {
    const anahtarKelime = req.body.anahtarKelime;
    res.redirect(`/?anahtarKelime=${anahtarKelime}`);
});

app.post('/iletisim', (req, res) => {
    const { adSoyad, email, telefon, mesaj } = req.body;
    console.log(`Ad Soyad: ${adSoyad}, Email: ${email}, Telefon: ${telefon}, Mesaj: ${mesaj}`);
    res.render('index', { arabalar, anahtarKelime: '', mesaj: 'Mesajınız başarıyla gönderildi!' });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
