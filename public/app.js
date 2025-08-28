// Frontend JavaScript - Araba Bilgileri Uygulaması

document.addEventListener('DOMContentLoaded', function() {
    // Arama fonksiyonları
    initSearch();
    
    // Form validasyonu
    initFormValidation();
    
    // UI geliştirmeleri
    initUIEnhancements();
    
    // API işlemleri
    initAPI();
});

// Arama işlemleri
function initSearch() {
    const searchForm = document.querySelector('.search-form');
    const searchInput = searchForm?.querySelector('input[name="anahtarKelime"]');
    
    if (searchInput) {
        // Otomatik odaklan
        searchInput.focus();
        
        // Gerçek zamanlı arama önerisi
        let searchTimeout;
        searchInput.addEventListener('input', function() {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                showSearchSuggestions(this.value);
            }, 300);
        });
        
        // Enter tuşu ile arama
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                searchForm.submit();
            }
        });
    }
}

// Form validasyonu
function initFormValidation() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            if (!validateContactForm(this)) {
                e.preventDefault();
            }
        });
        
        // Gerçek zamanlı validasyon
        const inputs = contactForm.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });
        });
    }
}

// İletişim formu validasyonu
function validateContactForm(form) {
    let isValid = true;
    const errors = [];
    
    const adSoyad = form.querySelector('#adSoyad').value.trim();
    const email = form.querySelector('#email').value.trim();
    const mesaj = form.querySelector('#mesaj').value.trim();
    const telefon = form.querySelector('#telefon').value.trim();
    
    // Ad soyad kontrolü
    if (adSoyad.length < 2) {
        errors.push('Ad soyad en az 2 karakter olmalıdır.');
        isValid = false;
    } else if (adSoyad.length > 50) {
        errors.push('Ad soyad en fazla 50 karakter olmalıdır.');
        isValid = false;
    }
    
    // Email kontrolü
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errors.push('Geçerli bir email adresi girin.');
        isValid = false;
    }
    
    // Telefon kontrolü (opsiyonel ama girildiyse geçerli olmalı)
    if (telefon && telefon.length > 0) {
        const phoneRegex = /^[\d\s\(\)\-\+]+$/;
        if (!phoneRegex.test(telefon)) {
            errors.push('Geçerli bir telefon numarası girin.');
            isValid = false;
        }
    }
    
    // Mesaj kontrolü
    if (mesaj.length < 10) {
        errors.push('Mesaj en az 10 karakter olmalıdır.');
        isValid = false;
    } else if (mesaj.length > 500) {
        errors.push('Mesaj en fazla 500 karakter olmalıdır.');
        isValid = false;
    }
    
    // Hataları göster
    if (!isValid) {
        showNotification(errors.join('\n'), 'error');
    }
    
    return isValid;
}

// Tek alan validasyonu
function validateField(field) {
    const fieldName = field.getAttribute('name');
    const value = field.value.trim();
    let error = '';
    
    switch (fieldName) {
        case 'adSoyad':
            if (value.length < 2) error = 'En az 2 karakter gerekli';
            else if (value.length > 50) error = 'En fazla 50 karakter';
            break;
        case 'email':
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) error = 'Geçerli email girin';
            break;
        case 'mesaj':
            if (value.length < 10) error = 'En az 10 karakter gerekli';
            else if (value.length > 500) error = 'En fazla 500 karakter';
            break;
    }
    
    showFieldError(field, error);
    return error === '';
}

// Alan hatası göster
function showFieldError(field, error) {
    // Önceki hata mesajını kaldır
    const existingError = field.parentNode.querySelector('.field-error');
    if (existingError) {
        existingError.remove();
    }
    
    if (error) {
        field.classList.add('error');
        const errorElement = document.createElement('small');
        errorElement.className = 'field-error';
        errorElement.style.color = '#e74c3c';
        errorElement.textContent = error;
        field.parentNode.appendChild(errorElement);
    } else {
        field.classList.remove('error');
    }
}

// UI geliştirmeleri
function initUIEnhancements() {
    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Tablo hover efektleri
    const tableRows = document.querySelectorAll('tbody tr');
    tableRows.forEach(row => {
        row.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.01)';
            this.style.transition = 'transform 0.2s ease';
        });
        
        row.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Loading animasyonu
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function() {
            const submitButton = this.querySelector('button[type="submit"]');
            if (submitButton) {
                submitButton.innerHTML = '<span class="loading"></span> Gönderiliyor...';
                submitButton.disabled = true;
            }
        });
    });
    
    // Tablo sıralama
    initTableSorting();
}

// Tablo sıralama
function initTableSorting() {
    const table = document.querySelector('table');
    if (!table) return;
    
    const headers = table.querySelectorAll('th');
    let currentSort = { column: -1, direction: 'asc' };
    
    headers.forEach((header, index) => {
        if (index < headers.length - 2) { // Son iki sütun (Web sitesi ve Detay) hariç
            header.style.cursor = 'pointer';
            header.addEventListener('click', () => sortTable(index, header));
        }
    });
    
    function sortTable(columnIndex, header) {
        const tbody = table.querySelector('tbody');
        const rows = Array.from(tbody.querySelectorAll('tr'));
        
        const direction = (currentSort.column === columnIndex && currentSort.direction === 'asc') ? 'desc' : 'asc';
        currentSort = { column: columnIndex, direction };
        
        // Sıralama ikonu güncelle
        headers.forEach(h => h.classList.remove('sort-asc', 'sort-desc'));
        header.classList.add(`sort-${direction}`);
        
        rows.sort((a, b) => {
            const aText = a.cells[columnIndex].textContent.trim();
            const bText = b.cells[columnIndex].textContent.trim();
            
            // Sayısal sıralama (fiyat için)
            if (columnIndex === 7) { // Fiyat sütunu
                const aNum = parseInt(aText.replace(/[^\d]/g, ''));
                const bNum = parseInt(bText.replace(/[^\d]/g, ''));
                return direction === 'asc' ? aNum - bNum : bNum - aNum;
            }
            
            // Alfabetik sıralama
            return direction === 'asc' 
                ? aText.localeCompare(bText, 'tr-TR')
                : bText.localeCompare(aText, 'tr-TR');
        });
        
        // Sıralanmış satırları tekrar ekle
        rows.forEach(row => tbody.appendChild(row));
    }
}

// API işlemleri
function initAPI() {
    // Sayfa yüklendiğinde istatistikleri güncelle
    updateStats();
}

// Bildirim göster
function showNotification(message, type = 'info') {
    // Mevcut bildirimleri kaldır
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(n => n.remove());
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <span>${message}</span>
        <button class="close-notification">&times;</button>
    `;
    
    // Stil ekle
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '15px 20px',
        borderRadius: '6px',
        color: 'white',
        fontWeight: '500',
        zIndex: '1000',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        maxWidth: '400px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
    });
    
    // Tip'e göre renk
    switch (type) {
        case 'success':
            notification.style.background = 'linear-gradient(135deg, #27ae60 0%, #2ecc71 100%)';
            break;
        case 'error':
            notification.style.background = 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)';
            break;
        default:
            notification.style.background = 'linear-gradient(135deg, #3498db 0%, #2980b9 100%)';
    }
    
    document.body.appendChild(notification);
    
    // Kapatma butonu
    const closeBtn = notification.querySelector('.close-notification');
    closeBtn.style.background = 'none';
    closeBtn.style.border = 'none';
    closeBtn.style.color = 'white';
    closeBtn.style.fontSize = '20px';
    closeBtn.style.cursor = 'pointer';
    closeBtn.addEventListener('click', () => notification.remove());
    
    // Otomatik kapat
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

// İstatistikleri güncelle
function updateStats() {
    fetch('/api/arabalar')
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                console.log(`API'den ${data.count} araba bilgisi alındı`);
            }
        })
        .catch(error => {
            console.error('API hatası:', error);
        });
}

// Arama önerileri (gelecekte kullanım için)
function showSearchSuggestions(query) {
    if (query.length < 2) return;
    
    fetch(`/api/arabalar?search=${encodeURIComponent(query)}`)
        .then(response => response.json())
        .then(data => {
            if (data.success && data.data.length > 0) {
                // Öneri listesi oluştur (şimdilik console'a log)
                console.log(`"${query}" için ${data.count} sonuç bulundu`);
            }
        })
        .catch(error => {
            console.error('Arama önerisi hatası:', error);
        });
}

// Sayfa performansı izleme
window.addEventListener('load', function() {
    const loadTime = performance.now();
    console.log(`Sayfa yükleme süresi: ${loadTime.toFixed(2)}ms`);
});
