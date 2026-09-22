// Məqalələr burada saxlanılır — verilənlər bazası yoxdur.
// Yeni məqalə əlavə etmək üçün siyahıya yeni obyekt əlavə edin.
// Ən yeni məqalə siyahının başında olmalıdır.
//
// slug: URL-də görünəcək unikal ad (yalnız hərf, rəqəm və tire)
// title: başlıq
// excerpt: siyahıda görünən qısa xülasə
// publishedAt: "İL-AY-GÜN" formatında (sıralama üçün istifadə olunur)
// content: mətnin özü — boş sətir yeni paraqraf başladır,
//          öz sətrində olan ![təsvir](https://...) şəkil kimi göstərilir

const ARTICLES = [
  {
    slug: "patriarxat-nedir",
    title: "Patriarxat nədir?",
    excerpt: "Əsas anlayışa qısa giriş: patriarxatı fərdi münasibət deyil, struktur kimi anlamaq.",
    publishedAt: "2026-01-12",
    content: `Patriarxat dedikdə tək-tək kişilərin "pis davranışı" deyil, kişilərin qadınlar üzərində
üstünlüyünü təbiiləşdirən, təkrarlayan və mühafizə edən ictimai sistem nəzərdə tutulur. Bu sistem
ailədən dövlət institutlarına, dindən mədəniyyətə qədər müxtəlif sahələrdə fərqli formalarda özünü göstərir.

Radikal feminist nəzəriyyə üçün patriarxatı adlandırmaq ilk addımdır. Adlandırılmayan sistem
görünməz qalır və "belə gəlib, belədir" kimi qəbul edilir. Halbuki tarixi və mədəni baxımdan
fərqli cəmiyyətlərdə patriarxat fərqli formalar alıb — bu da onun təbii deyil, qurulmuş olduğunu göstərir.

Sistemi tanımaq ittiham etmək demək deyil. Məqsəd struktur təhlildir: hansı institutlar, normalar
və gündəlik praktikalar bu bərabərsizliyi yenidən istehsal edir? Bu sualı verə bildiyimiz zaman
dəyişiklik üçün real strategiyalar da müzakirə edə bilərik.`
  },
  {
    slug: "sexsi-olan-siyasidir",
    title: "«Şəxsi olan siyasidir» nə deməkdir?",
    excerpt: "İkinci dalğa feminizmin bu şüarı bu gün bizim üçün nə ifadə edir?",
    publishedAt: "2026-01-05",
    content: `"Şəxsi olan siyasidir" ifadəsi ilk baxışda paradoksal görünə bilər — axı ailə həyatı, münasibətlər,
ev işləri fərdi seçim sahəsi deyilmi? Radikal feminist təhlil bunun tam doğru olmadığını göstərir.

Kimin ev işini gördüyü, kimin kimə hesabat verdiyi, kimin bədəni üzərində kimin söz sahibi olduğu —
bunların hamısı fərdi görünsə də, geniş sosial nümunələri əks etdirir. Milyonlarla ev və münasibətdə
təkrarlanan eyni bərabərsizlik artıq "fərdi seçim" izahı ilə açıqlana bilməz.

Bu prinsip bizə imkan verir ki, gündəlik həyatımızda gördüyümüz problemləri təcrid olunmuş hadisələr
kimi deyil, daha geniş sistemin təzahürləri kimi görək — və beləliklə, onlara fərdi deyil, kollektiv
cavab axtaraq.`
  }
];
