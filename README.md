# Qırmızı Xətt

Statik sayt, server və verilənlər bazası yoxdur — bütün fayllar birbaşa istənilən statik hosting
(GitHub Pages, Netlify, Cloudflare Pages və s.) üzərində işə düşür.

## Məqalə əlavə etmək

Admin panel yoxdur. Yeni məqalə əlavə etmək üçün `data/articles.js` faylını açıb `ARTICLES`
siyahısına yeni obyekt əlavə edin (fayldakı nümunələrə baxın). `slug` sahəsi unikal olmalı və
URL-də istifadə olunacaq (yalnız hərf, rəqəm, tire).

## Şərhlər

`article.html` [Cusdis](https://cusdis.com)-a qoşulub (pulsuz, açıq mənbəli, qeydiyyat tələb
etmir). İstifadə etmək üçün `article.html` içindəki `data-app-id="SIZIN-APP-ID-BURAYA"` sətrini
öz Cusdis app ID-nizlə əvəz edin.

## Struktur

- `index.html`, `about.html`, `articles.html`, `article.html`, `contact.html` — səhifələr
- `styles.css` — bütün stillər
- `site.js` — paylaşılan köməkçi funksiyalar (HTML escape, məqalə mətninin renderi)
- `data/articles.js` — məqalə mətnləri
