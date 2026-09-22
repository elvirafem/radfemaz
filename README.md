# Qırmızı Xətt

Qırmızı Xətt — Azərbaycan dilində radikal feminist nəzəriyyəyə, təhlilə və resurslara giriş
yaratmaq məqsədi daşıyan nəşr saytıdır. Patriarxatı fərdi davranış deyil, tarixən yaranmış
sistemli hakimiyyət strukturu kimi araşdırır; məqsəd akademik feminist nəzəriyyəni əlçatan dildə
təqdim etmək, onu yerli kontekstə uyğunlaşdırmaq və oxuyanları düşünməyə, sual verməyə və öz
mühitlərində həmrəylik qurmağa təşviq etməkdir. Sayt struktur tənqid və kollektiv düşüncəyə
əsaslanır — fərdi ittihamlara, hədə-qorxuya və ya zorakılıq təbliğatına yer yoxdur.

Statik sayt, server və verilənlər bazası yoxdur — bütün fayllar birbaşa istənilən statik hosting
(GitHub Pages, Netlify, Cloudflare Pages və s.) üzərində işə düşür.

## Məqalə əlavə etmək

Admin panel yoxdur. Yeni məqalə əlavə etmək üçün `data/articles.js` faylını açıb `ARTICLES`
siyahısına yeni obyekt əlavə edin (fayldakı nümunələrə baxın). `slug` sahəsi unikal olmalı və
URL-də istifadə olunacaq (yalnız hərf, rəqəm, tire).


## Struktur

- `index.html`, `about.html`, `articles.html`, `article.html`, `contact.html` — səhifələr
- `styles.css` — bütün stillər
- `site.js` — paylaşılan köməkçi funksiyalar (HTML escape, məqalə mətninin renderi)
- `data/articles.js` — məqalə mətnləri
