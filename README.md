# 🧠 KPSS Şifrebazı & İnteraktif Sınav İstasyonu

<p align="center">
  <img src="https://img.shields.io/badge/Versiyon-2.0.0-blue?style=for-the-badge" alt="Version">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white" alt="Netlify">
</p>

KPSS (Kamu Personel Seçme Sınavı) hazırlık sürecini hızlandırmak, soyut bilgileri akılda kalıcı kodlamalar ve hafıza teknikleriyle pekiştirmek ve gerçek sınav provası sunmak amacıyla geliştirilmiş **kapsamlı, modern ve interaktif web platformu**.

---

## ✨ Öne Çıkan Özellikler

### 📝 1. Gerçek Format KPSS Deneme Sınavı (120 Soru • 130 Dakika)
ÖSYM standartlarına birebir uygun soru dağılımı ve 5 seçenekli (A, B, C, D, E) özgün soru havuzu:
* **30 Türkçe:** Anlam bilgisi, dil bilgisi, paragraf ve 4 soruluk özgün Sözel Mantık grubu.
* **30 Matematik & Geometri:** Temel kavramlar, problemler, kümeler, fonksiyonlar, olasılık, sayısal mantık ve geometri.
* **27 Tarih:** İslamiyet öncesinden Çağdaş Türk ve Dünya Tarihi'ne kadar tüm kritik olaylar ve ilkler.
* **18 Coğrafya:** Türkiye'nin fiziki, beşeri, ekonomik coğrafyası ve bölgesel kalkınma projeleri.
* **9 Vatandaşlık:** Temel hukuk, anayasa tarihi, yasama, yürütme, yargı ve idare hukuku.
* **6 Güncel Bilgiler:** Uluslararası kuruluşlar, UNESCO mirasları, bilim, kültür ve teknoloji gelişmeleri.

### ✏️ 2. PDF / Kitapçık Üzerinde İnteraktif Çizim Tuvali (Canvas)
* **İki Sütunlu ÖSYM Kitapçık Mizanpajı:** Sayfa başına 8 soru (4 sol, 4 sağ) düşen 15 sayfalık resmi sınav kitapçığı düzeni.
* **Kalem & Karalama:** Matematik soruları altındaki karalama alanlarında işlem yapabilme veya soru üstünü çizebilme.
* **Fosforlu Kalem:** Önemli ipuçlarını ve soru köklerini yarı saydam vurgulayıcıyla işaretleme.
* **Silgi & Temizleme:** Yapılan çizimleri lokal olarak silme veya sayfayı tek tıkla temizleme.
* **Renk & Kalınlık Seçimi:** Kurşun kalem siyahı, kırmızı, mavi ve fosforlu sarı renkleri.
* **Sayfa Hafızası:** Sayfalar arasında gezinirken çizimlerinizin kaybolmaması için sayfa bazlı veri saklama.

### 📊 3. Senkronize Optik Cevap Kağıdı (Drawer)
* Ekranın sağından açılan 120 soruluk resmi optik form.
* Kitapçıkta bir şık işaretlendiğinde optik baloncuk anında kurşun kalemle doldurulur.
* Optik formdan işaretleme yapıldığında doğrudan ilgili soruya odaklanır.

### 🏁 4. Net Hesaplama & Detaylı Çözüm Analizi
* ÖSYM kuralıyla **$Net = Doğru - \frac{Yanlış}{4}$** formülü uygulanır.
* Standart sapmalı tahmini **KPSS Lisans/Önlisans Puanı (P3 / P93)** hesaplanır.
* Sınav bitiminde 1-120 Cevap Anahtarı tablosu (Doğru, Yanlış, Boş durumları).
* **"Çözümleri İncele":** Her sorunun altında açılan **💡 ÖSYM Çözümü ve Detaylı Analiz** kutuları.

---

### 🎴 5. Hafıza Kartları, Kodlamalar & Şifreler
* Tarih, Coğrafya ve Vatandaşlık derslerine ait yüzlerce pratik şifre (örn: *SAKAL GU*, *TEMA*, *D-SMAÇ*, *KAYIP SAKAL*).
* Çift taraflı interaktif kart çevirme animasyonu.
* Arama ve kategori filtreleme.
* Zorlanılan kartları **Favorilere** ekleme.

---

### ⏳ 6. Tarih Çalışma Rehberi & Oyun Modülleri
* **🎯 Padişahını Seç:** 100'den fazla savaş, ıslahat ve ilkin hangi padişah döneminde olduğunu test eden interaktif oyun.
* **🛠️ Osmanlı Islahatları:** II. Mahmut, Abdülmecit, Abdülaziz ve II. Abdülhamit ıslahatları tablosu ve eşleştirme oyunu.
* **⏳ Zaman Tüneli:** Kronolojik olay sıralama oyunu (Kuruluş, Yükselme, Duraklama, Gerileme, Dağılma, I. Dünya Savaşı - Lozan).
* **📜 Osmanlı Divanı & Terimler:** Divan üyeleri, defterler ve kritik KPSS kavramları.

---

## 🛠️ Teknolojiler
* **Frontend:** HTML5, CSS3 (Modern CSS Grid, Flexbox, Custom Variables, Dark/Light Theme)
* **Scripting & Engine:** Pure Vanilla JavaScript (Sıfır harici kütüphane bağımlılığı)
* **Grafik & Çizim:** HTML5 Canvas API (Pointer, Touch & Stylus desteği)
* **Deployment:** Netlify Ready (`netlify.toml` yapılandırılmış)

---

## 🚀 Yerel Olarak Çalıştırma

Projeyi bilgisayarınızda çalıştırmak için herhangi bir paket yöneticisine veya derleyiciye ihtiyaç yoktur:

1. Depoyu klonlayın:
   ```bash
   git clone https://github.com/arime10/kpss-sifrebazi.git
   ```
2. Proje klasörüne girin:
   ```bash
   cd kpss-sifrebazi
   ```
3. `index.html` dosyasını herhangi bir web tarayıcısında (Chrome, Edge, Firefox, Safari) çift tıklayarak açın.

---

## 🌐 Netlify Üzerinde Yayınlama

Projede `netlify.toml` dosyası hazır olarak bulunmaktadır:
1. [Netlify](https://app.netlify.com)'a giriş yapın.
2. **"Import an existing project"** diyerek GitHub deponuzu (`kpss-sifrebazi`) seçin.
3. Otomatik olarak birkaç saniyede yayına girecektir.

---

## 👨‍💻 Geliştirici & Lisans
* **Geliştirici:** [arime10](https://github.com/arime10) — **ED10 Studio**
* **Lisans:** MIT Lisansı © 2026 ED10 KPSS Çalışma İstasyonu
