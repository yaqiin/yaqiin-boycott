export interface LanguageConfig {
  code: string;
  name: string;
  nativeName: string;
  dir: 'rtl' | 'ltr';
}

export const SUPPORTED_LANGUAGES: Record<string, LanguageConfig> = {
  ar: { code: 'ar', name: 'Arabic', nativeName: 'العربية', dir: 'rtl' },
  en: { code: 'en', name: 'English', nativeName: 'English', dir: 'ltr' },
  bn: { code: 'bn', name: 'Bengali', nativeName: 'বাংলা', dir: 'ltr' },
  es: { code: 'es', name: 'Spanish', nativeName: 'Español', dir: 'ltr' },
  fr: { code: 'fr', name: 'French', nativeName: 'Français', dir: 'ltr' },
  id: { code: 'id', name: 'Indonesian', nativeName: 'Bahasa Indonesia', dir: 'ltr' },
  tr: { code: 'tr', name: 'Turkish', nativeName: 'Türkçe', dir: 'ltr' },
  ur: { code: 'ur', name: 'Urdu', nativeName: 'اردو', dir: 'rtl' },
};

export type Language = keyof typeof SUPPORTED_LANGUAGES;

export const translations = {
  ar: {
    siteName: 'يقين للمقاطعة',
    siteSlogan: 'مقاطعة أخلاقية، نصرة لأخوتنا',
    menuTitle: 'القائمة',
    toggleLanguage: 'English',
    searchPlaceholder: 'ابحث عن منتج',
    productName: 'اسم المنتج',
    countryOfOrigin: 'بلد المنشأ',
    alternatives: 'البدائل',
     noAlternatives: 'لا توجد بدائل متاحة حالياً',
    noAlternativesDescription: 'لا توجد بدائل متاحة لهذه الفئة حالياً. هل تعرف أيًا منها؟ أرسل لنا رسالة',
    here: 'هنا',
    loading: 'جاري التحميل...',
    error: 'حدث خطأ في تحميل البيانات',
    pageNotFound: 'عذرًا! الصفحة غير موجودة',
    backHome: 'العودة إلى الصفحة الرئيسية',
    introText: 'منصة تساعدك على اكتشاف بدائل أخلاقية للمنتجات الإسرائيلية والأمريكية.',
    copyright: 'يقين للمقاطعة. جميع الحقوق محفوظة.',
    whyBoycott: 'لماذا نقاطع؟',
    products: 'المنتجات',
    backToProducts: 'العودة إلى المنتجات',
    whyBoycottSubtitle1: 'لماذا نقاطع؟',
    whyBoycottParagraph1: 'المقاطعة هي وسيلة قوية لاستخدام قوتنا كمستهلكين لإجبار المؤسسات المسيئة على تغيير سياساتها.',
    whyBoycottSubtitle2: 'ما هو التأثير؟',
    whyBoycottParagraph2: 'يمكن أن تؤثر المقاطعة الجماعية للمستهلكين على الصحة المالية للشركات وأن تحدث تغييرًا في سلوك الشركات.',
    whyBoycottSubtitle3: 'كيف تعمل المقاطعة؟',
    whyBoycottParagraph3: 'نحن نعبر عن قوتنا الاقتصادية من خلال عدم شراء منتجات وخدمات الشركات ودعم البدائل الأخلاقية.',
    whyBoycottSubtitle4: 'لماذا هذه المقاطعة؟',
    whyBoycottParagraph4: 'من واجبنا الأخلاقي سحب الدعم الاقتصادي من أولئك الذين يساعدون في الظلم والقمع وانتهاكات حقوق الإنسان.',
    allCategories: 'جميع الفئات',
    productsCount: 'منتج',
  },
  bn: {
    siteName: 'ইয়াকীন বয়কট',
    siteSlogan: 'নৈতিক বয়কট, আমাদের ভাইদের সমর্থন',
    menuTitle: 'তালিকা',
    toggleLanguage: 'বাংলা',
    searchPlaceholder: 'একটি পণ্য খুঁজুন',
    productName: 'পণ্যের নাম',
    countryOfOrigin: 'উৎপত্তির দেশ',
    alternatives: 'বিকল্পসমূহ',
    noAlternatives: 'এখনো কোনো বিকল্প উপলব্ধ নেই',
    noAlternativesDescription: 'এই ক্যাটাগরির বিকল্প এখনও উপলব্ধ নয়, আপনি কিছু জানেন? আমাদের সাথে যোগাযোগ করুন',
    here: 'এখানে',
    loading: 'লোড হচ্ছে...',
    error: 'ডেটা লোড করতে সমস্যা হয়েছে',
    pageNotFound: 'উপস! পেজটি পাওয়া যায়নি',
    backHome: 'হোমে ফিরুন',
    introText: 'ইসরায়েলি এবং আমেরিকান পণ্যের নৈতিক বিকল্প আবিষ্কারে সহায়তা করার জন্য একটি প্ল্যাটফর্ম।',
    copyright: 'ইয়াকীন বয়কট। সর্বস্বত্ব সংরক্ষিত।',
    whyBoycott: 'কেন বয়কট?',
    products: 'পণ্যসমূহ',
    backToProducts: 'পণ্যসমূহে ফিরে যান',
    whyBoycottSubtitle1: 'আমরা কেন বয়কট করি?',
    whyBoycottParagraph1: 'বয়কট হল আমাদের ভোক্তা ক্ষমতা ব্যবহার করে অন্যায়কারী প্রতিষ্ঠানগুলিকে তাদের নীতি পরিবর্তন করতে বাধ্য করার একটি শক্তিশালী উপায়।',
    whyBoycottSubtitle2: 'এর প্রভাব কী?',
    whyBoycottParagraph2: 'সম্মিলিত ক্রেতাদের বয়কট সংস্থাগুলির আর্থিক স্বাস্থ্যকে প্রভাবিত করতে পারে এবং কোম্পানির আচরণে পরিবর্তন আনতে পারে।',
    whyBoycottSubtitle3: 'কিভাবে বয়কট কাজ করে?',
    whyBoycottParagraph3: 'আমরা কোম্পানিগুলির পণ্য ও পরিষেবা না কিনে এবং নৈতিক বিকল্পগুলিকে সমর্থন করে আমাদের অর্থনৈতিক ক্ষমতার কণ্ঠস্বর দেই।',
    whyBoycottSubtitle4: 'কেন এই বয়কট?',
    whyBoycottParagraph4: 'যারা অন্যায়, নিপীড়ন এবং মানবাধিকার লঙ্ঘনে সহায়তা করে তাদের থেকে অর্থনৈতিক সমর্থন ফিরিয়ে নেওয়া আমাদের নৈতিক দায়িত্ব।',
    allCategories: 'সকল বিভাগ',
    productsCount: 'পণ্য',
  },
  en: {
    siteName: 'Yaqiin Boycott',
    siteSlogan: 'Ethical Boycott, Supporting Our Brothers',
    menuTitle: 'Menu',
    toggleLanguage: 'العربية',
    searchPlaceholder: 'Search for a product',
    productName: 'Product Name',
    countryOfOrigin: 'Country of Origin',
    alternatives: 'Alternatives',
    noAlternatives: 'No alternatives available yet',
    noAlternativesDescription: 'Alternatives for this category are not available yet. Do you know any? contact us',
    here: 'here',
    loading: 'Loading...',
    error: 'Error loading data',
    pageNotFound: 'Oops! Page not found',
    backHome: 'Back Home',
    introText: 'A platform to help you discover ethical alternatives to Israeli and US products.',
    copyright: 'Yaqiin Boycott. All rights reserved.',
    whyBoycott: 'Why Boycott?',
    products: 'Products',
    backToProducts: 'Back to Products',
    whyBoycottSubtitle1: 'Why Do We Boycott?',
    whyBoycottParagraph1: 'Boycotting is a powerful way to use our consumer power to force abusive institutions to change their policies.',
    whyBoycottSubtitle2: 'What is the Impact?',
    whyBoycottParagraph2: 'Collective consumer boycotts can affect the financial health of corporations and bring about change in corporate behavior.',
    whyBoycottSubtitle3: 'How Does Boycotting Work?',
    whyBoycottParagraph3: "We exercise our economic power by not purchasing companies' products and services and supporting ethical alternatives.",
    whyBoycottSubtitle4: 'Why This Boycott?',
    whyBoycottParagraph4: 'It is our moral duty to withdraw economic support from those who aid injustice, oppression, and human rights violations.',
    allCategories: 'All Categories',
    productsCount: 'products',
  },
  es: {
    siteName: 'Yaqiin Boicot',
    siteSlogan: 'Boicot Ético, Apoyando a Nuestros Hermanos',
    menuTitle: 'Menú',
    toggleLanguage: 'Cambiar Idioma',
    searchPlaceholder: 'Buscar un producto',
    productName: 'Nombre del Producto',
    countryOfOrigin: 'País de Origen',
    alternatives: 'Alternativas',
    noAlternatives: 'No hay alternativas disponibles aún',
    noAlternativesDescription: 'Aún no hay alternativas para esta categoría. ¿Conoces alguna? Envíanos un mensaje',
    here: 'aquí',
    loading: 'Cargando...',
    error: 'Error al cargar datos',
    pageNotFound: '¡Ups! Página no encontrada',
    backHome: 'Volver al Inicio',
    introText: 'Una plataforma para ayudarte a descubrir alternativas éticas a productos israelíes y estadounidenses.',
    copyright: 'Yaqiin Boicot. Todos los derechos reservados.',
    whyBoycott: '¿Por qué Boicotear?',
    products: 'Productos',
    backToProducts: 'Volver a Productos',
    whyBoycottSubtitle1: '¿Por Qué Boicoteamos?',
    whyBoycottParagraph1: 'El boicot es una forma poderosa de usar nuestro poder como consumidores para obligar a las instituciones abusivas a cambiar sus políticas.',
    whyBoycottSubtitle2: '¿Cuál es el Impacto?',
    whyBoycottParagraph2: 'Los boicots colectivos de consumidores pueden afectar la salud financiera de las corporaciones y provocar cambios en el comportamiento corporativo.',
    whyBoycottSubtitle3: '¿Cómo Funciona el Boicot?',
    whyBoycottParagraph3: 'Ejercemos nuestro poder económico al no comprar productos y servicios de empresas y apoyar alternativas éticas.',
    whyBoycottSubtitle4: '¿Por Qué Este Boicot?',
    whyBoycottParagraph4: 'Es nuestro deber moral retirar el apoyo económico de aquellos que ayudan a la injusticia, la opresión y las violaciones de derechos humanos.',
    allCategories: 'Todas las Categorías',
    productsCount: 'productos',
  },
  fr: {
    siteName: 'Yaqiin Boycott',
    siteSlogan: 'Boycott Éthique, Soutenir Nos Frères',
    menuTitle: 'Menu',
    toggleLanguage: 'Changer de langue',
    searchPlaceholder: 'Rechercher un produit',
    productName: 'Nom du Produit',
    countryOfOrigin: "Pays d'Origine",
    alternatives: 'Alternatives',
    noAlternatives: 'Aucune alternative disponible pour le moment',
    noAlternativesDescription: 'Aucune alternative disponible pour cette catégorie. En connaissez-vous ? Envoyez-nous un message',
    here: 'ici',
    loading: 'Chargement...',
    error: 'Erreur lors du chargement des données',
    pageNotFound: 'Oups ! Page non trouvée',
    backHome: "Retour à l'Accueil",
    introText: 'Une plateforme pour vous aider à découvrir des alternatives éthiques aux produits israéliens et américains.',
    copyright: 'Yaqiin Boycott. Tous droits réservés.',
    whyBoycott: 'Pourquoi Boycotter?',
    products: 'Produits',
    backToProducts: 'Retour aux Produits',
    whyBoycottSubtitle1: 'Pourquoi Boycottons-nous?',
    whyBoycottParagraph1: "Le boycott est un moyen puissant d'utiliser notre pouvoir de consommateurs pour forcer les institutions abusives à changer leurs politiques.",
    whyBoycottSubtitle2: "Quel est l'Impact?",
    whyBoycottParagraph2: 'Les boycotts collectifs de consommateurs peuvent affecter la santé financière des entreprises et entraîner un changement dans le comportement des entreprises.',
    whyBoycottSubtitle3: 'Comment Fonctionne le Boycott?',
    whyBoycottParagraph3: "Nous exerçons notre pouvoir économique en n'achetant pas les produits et services des entreprises et en soutenant des alternatives éthiques.",
    whyBoycottSubtitle4: 'Pourquoi ce Boycott?',
    whyBoycottParagraph4: 'Il est de notre devoir moral de retirer le soutien économique à ceux qui contribuent à l’injustice, à l’oppression et aux violations des droits humains.',
    allCategories: 'Toutes les Catégories',
    productsCount: 'produits',
  },
  id: {
    siteName: 'Yaqiin Boikot',
    siteSlogan: 'Boikot Etis, Mendukung Saudara Kita',
    menuTitle: 'Menu',
    toggleLanguage: 'Ganti Bahasa',
    searchPlaceholder: 'Cari produk',
    productName: 'Nama Produk',
    countryOfOrigin: 'Negara Asal',
    alternatives: 'Alternatif',
    noAlternatives: 'Belum ada alternatif yang tersedia',
    noAlternativesDescription: 'Belum ada alternatif untuk kategori ini. Apakah Anda mengetahui produk alternatif? Kirimkan kepada kami!',
    here: 'di sini',
    loading: 'Memuat...',
    error: 'Terjadi kesalahan saat memuat data',
    pageNotFound: 'Maaf! Halaman tidak ditemukan',
    backHome: 'Kembali ke Beranda',
    introText: 'Platform yang membantu Anda menemukan alternatif etis untuk produk Israel dan Amerika.',
    copyright: 'Yaqiin Boikot. Seluruh hak cipta dilindungi.',
    whyBoycott: 'Mengapa Boikot?',
    products: 'Produk',
    backToProducts: 'Kembali ke Produk',
    whyBoycottSubtitle1: 'Mengapa Kita Boikot?',
    whyBoycottParagraph1: 'Boikot adalah cara yang kuat untuk memaksa lembaga penindas mengubah kebijakan mereka melalui kekuatan konsumen.',
    whyBoycottSubtitle2: 'Apa Dampaknya?',
    whyBoycottParagraph2: 'Boikot massal oleh konsumen dapat berdampak besar pada kondisi finansial perusahaan dan mempengaruhi perilaku mereka.',
    whyBoycottSubtitle3: 'Bagaimana Cara Kerjanya?',
    whyBoycottParagraph3: 'Kita menggunakan kekuatan ekonomi kita dengan tidak membeli produk dan layanan mereka serta mendukung alternatif yang etis.',
    whyBoycottSubtitle4: 'Mengapa Boikot Ini Penting?',
    whyBoycottParagraph4: 'Merupakan tanggung jawab moral kita untuk menghentikan dukungan ekonomi terhadap mereka yang membantu penindasan dan pelanggaran HAM.',
    allCategories: 'Semua Kategori',
    productsCount: 'Produk',
  }
,   
  tr: {
    siteName: 'Yaqiin Boykot',
    siteSlogan: 'Ahlaki Boykot, Kardeşlerimize Destek',
    menuTitle: 'Menü',
    toggleLanguage: 'Dili Değiştir',
    searchPlaceholder: 'Bir ürün ara',
    productName: 'Ürün Adı',
    countryOfOrigin: 'Menşei Ülke',
    alternatives: 'Alternatifler',
    noAlternatives: 'Henüz alternatif yok',
    noAlternativesDescription: 'Bu kategori için henüz alternatif bulunmamaktadır. Biliyor musunuz? Bize mesaj atın',
    here: 'burada',
    loading: 'Yükleniyor...',
    error: 'Veriler yüklenirken hata oluştu',
    pageNotFound: 'Üzgünüz! Sayfa bulunamadı',
    backHome: 'Ana Sayfaya Dön',
    introText: 'İsrail ve ABD ürünlerine ahlaki alternatifleri keşfetmenize yardımcı olan bir platform.',
    copyright: 'Yaqiin Boykot. Tüm hakları saklıdır.',
    whyBoycott: 'Neden Boykot?',
    products: 'Ürünler',
    backToProducts: 'Ürünlere Geri Dön',
    whyBoycottSubtitle1: 'Neden Boykot Ediyoruz?',
    whyBoycottParagraph1: 'Boykot, tüketici gücümüzü kötü niyetli kurumların politikalarını değiştirmeye zorlamak için güçlü bir araçtır.',
    whyBoycottSubtitle2: 'Etkisi Nedir?',
    whyBoycottParagraph2: 'Toplu tüketici boykotları, şirketlerin finansal durumunu etkileyebilir ve davranışlarını değiştirebilir.',
    whyBoycottSubtitle3: 'Boykot Nasıl Çalışır?',
    whyBoycottParagraph3: 'Ahlaki alternatifleri destekleyerek ve şirketlerin ürünlerini satın almayarak ekonomik gücümüzü kullanırız.',
    whyBoycottSubtitle4: 'Neden Bu Boykot?',
    whyBoycottParagraph4: 'Zulüm ve insan hakları ihlallerine destek olanlardan ekonomik desteği çekmek ahlaki bir sorumluluğumuzdur.',
    allCategories: 'Tüm Kategoriler',
    productsCount: 'ürün',
  }, 

  ur: {
    siteName: 'یقین بائیکاٹ',
    siteSlogan: 'اخلاقی بائیکاٹ، ہمارے بھائیوں کی حمایت',
    menuTitle: 'فہرست',
    toggleLanguage: 'زبان تبدیل کریں',
    searchPlaceholder: 'مصنوع تلاش کریں',
    productName: 'مصنوع کا نام',
    countryOfOrigin: 'ملک پیدائش',
    alternatives: 'متبادل',
    noAlternatives: 'ابھی کوئی متبادل دستیاب نہیں',
    noAlternativesDescription: 'اس زمرے کے لیے فی الحال کوئی متبادل دستیاب نہیں۔ کیا آپ کوئی جانتے ہیں؟ ہمیں پیغام بھیجیں',
    here: 'یہاں',
    loading: 'لوڈ ہو رہا ہے...',
    error: 'ڈیٹا لوڈ کرنے میں خرابی',
    pageNotFound: 'معذرت! صفحہ نہیں ملا',
    backHome: 'ہوم پر واپس جائیں',
    introText: 'ایک ایسا پلیٹ فارم جو اسرائیلی اور امریکی مصنوعات کے اخلاقی متبادلات تلاش کرنے میں آپ کی مدد کرتا ہے۔',
    copyright: 'یقین بائیکاٹ۔ جملہ حقوق محفوظ ہیں۔',
    whyBoycott: 'ہم بائیکاٹ کیوں کریں؟',
    products: 'مصنوعات',
    backToProducts: 'مصنوعات پر واپس جائیں',
    whyBoycottSubtitle1: 'ہم بائیکاٹ کیوں کرتے ہیں؟',
    whyBoycottParagraph1: 'بائیکاٹ ایک طاقتور ذریعہ ہے کہ ہم صارفین کی حیثیت سے ظالم اداروں کو اپنی پالیسیوں میں تبدیلی پر مجبور کریں۔',
    whyBoycottSubtitle2: 'اس کا اثر کیا ہے؟',
    whyBoycottParagraph2: 'اجتماعی طور پر صارفین کے بائیکاٹ سے کمپنیوں کی مالی صحت پر اثر پڑ سکتا ہے اور ان کے رویے میں تبدیلی آسکتی ہے۔',
    whyBoycottSubtitle3: 'بائیکاٹ کیسے کام کرتا ہے؟',
    whyBoycottParagraph3: 'ہم کمپنیوں کی مصنوعات اور خدمات کو نہ خرید کر اور اخلاقی متبادلات کی حمایت کر کے اپنی اقتصادی طاقت کا استعمال کرتے ہیں۔',
    whyBoycottSubtitle4: 'یہ بائیکاٹ کیوں؟',
    whyBoycottParagraph4: 'یہ ہمارا اخلاقی فرض ہے کہ ہم ان لوگوں سے اقتصادی حمایت واپس لیں جو ظلم، جبر اور انسانی حقوق کی خلاف ورزیوں کی مدد کرتے ہیں۔',
    allCategories: 'تمام اقسام',
    productsCount: 'مصنوعات',
  },
  
  
}

export type TranslationKey = keyof (typeof translations)['ar'];

export interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
  isRTL: boolean;
  supportedLanguages: typeof SUPPORTED_LANGUAGES;
  isLoading: boolean;
}
