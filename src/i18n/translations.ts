// Translation system for FR, EN, AR, TR

export type Language = 'fr' | 'en' | 'ar' | 'tr';

export const languages: { code: Language; name: string; nativeName: string; dir: 'ltr' | 'rtl' }[] = [
  { code: 'fr', name: 'French', nativeName: 'Français', dir: 'ltr' },
  { code: 'en', name: 'English', nativeName: 'English', dir: 'ltr' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية', dir: 'rtl' },
  { code: 'tr', name: 'Turkish', nativeName: 'Türkçe', dir: 'ltr' },
];

export const translations: Record<Language, Record<string, string>> = {
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.questions': 'Questions',
    'nav.guide': 'Guide',
    'nav.exam': 'Examen Chronométré',
    'nav.blog': 'Blog',
    'nav.faq': 'FAQ',
    'nav.about': 'À propos',
    'nav.comparison': 'OFII vs Naturalisation',
    
    // Hero
    'hero.badge': 'Questions 100% officielles du Ministère de l\'Intérieur',
    'hero.title': 'Préparation Examen Civique',
    'hero.free': '2 quiz gratuits',
    'hero.description': 'L\'examen civique est un test obligatoire de 40 questions QCM pour obtenir votre carte de séjour en France. Score minimum : 32/40 (80%). Entraînez-vous avec 2 quiz gratuits, puis le Pack Réussite (3 mois).',
    'hero.cta': 'Commencer le test (2 quiz gratuits)',
    
    // Stats
    'stats.questions': 'Questions QCM',
    'stats.score': 'Score minimum',
    'stats.minutes': 'Minutes',
    'stats.official': 'Questions officielles',
    
    // Quiz
    'quiz.title': 'Simulateur d\'Examen Civique',
    'quiz.description': 'Cet examen contient 40 questions réparties selon les thématiques officielles. Vous devez obtenir au moins 32 bonnes réponses (80%) pour réussir.',
    'quiz.start': 'Commencer l\'examen',
    'quiz.question': 'Question',
    'quiz.correct': 'bonnes réponses',
    'quiz.previous': 'Précédent',
    'quiz.next': 'Suivant',
    'quiz.results': 'Voir les résultats',
    'quiz.explanation': 'Explication',
    'quiz.congratulations': 'Félicitations !',
    'quiz.keepStudying': 'Continuez vos révisions',
    'quiz.passed': 'Vous avez réussi l\'examen civique !',
    'quiz.failed': 'Vous n\'avez pas atteint le score minimum de 32/40.',
    'quiz.goodAnswers': 'bonnes',
    'quiz.errors': 'erreurs',
    'quiz.viewAnswers': 'Voir les réponses',
    'quiz.restart': 'Recommencer',
    'quiz.review': 'Révision des réponses',
    
    // Timed Exam
    'exam.title': 'Examen Chronométré',
    'exam.subtitle': 'Conditions réelles de l\'examen OFII',
    'exam.description': 'Passez l\'examen dans les conditions réelles : 40 questions en 45 minutes. Le timer démarre dès que vous commencez.',
    'exam.timeRemaining': 'Temps restant',
    'exam.timeUp': 'Temps écoulé !',
    'exam.timeUpDesc': 'Le temps imparti est terminé. Vos réponses ont été enregistrées.',
    'exam.start': 'Démarrer l\'examen chronométré',
    'exam.warning': 'Attention : Une fois démarré, vous ne pourrez pas mettre en pause.',
    
    // Themes
    'theme.values': 'Principes & Valeurs',
    'theme.institutions': 'Institutions',
    'theme.rights': 'Droits & Devoirs',
    'theme.history': 'Histoire & Culture',
    'theme.society': 'Vie en Société',
    
    // Common
    'common.loading': 'Chargement...',
    'common.error': 'Erreur',
    'common.readMore': 'Lire la suite',
    'common.viewAll': 'Voir tout',
    'common.back': 'Retour',
    'common.share': 'Partager',
    'common.download': 'Télécharger',
    
    // Footer
    'footer.rights': 'Tous droits réservés',
    'footer.contact': 'Contact',
    'footer.legal': 'Mentions légales',
    'footer.privacy': 'Politique de confidentialité',
    
    // Blog
    'blog.title': 'Blog & Articles',
    'blog.subtitle': 'Conseils et guides pour réussir votre examen civique',
    'blog.readTime': 'min de lecture',
    'blog.category': 'Catégorie',
    'blog.relatedArticles': 'Articles similaires',
  },
  
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.questions': 'Questions',
    'nav.guide': 'Guide',
    'nav.exam': 'Timed Exam',
    'nav.blog': 'Blog',
    'nav.faq': 'FAQ',
    'nav.about': 'About',
    'nav.comparison': 'OFII vs Naturalization',
    
    // Hero
    'hero.badge': '100% Official Questions from the Ministry of Interior',
    'hero.title': 'Civic Exam Preparation',
    'hero.free': '2 free quizzes',
    'hero.description': 'The civic exam is a mandatory 40-question MCQ test to obtain your residence permit in France. Minimum score: 32/40 (80%). Practice with 2 free quizzes, then the 3-month Pack.',
    'hero.cta': 'Start (2 free quizzes)',
    
    // Stats
    'stats.questions': 'MCQ Questions',
    'stats.score': 'Minimum Score',
    'stats.minutes': 'Minutes',
    'stats.official': 'Official Questions',
    
    // Quiz
    'quiz.title': 'Civic Exam Simulator',
    'quiz.description': 'This exam contains 40 questions divided according to official themes. You must get at least 32 correct answers (80%) to pass.',
    'quiz.start': 'Start Exam',
    'quiz.question': 'Question',
    'quiz.correct': 'correct answers',
    'quiz.previous': 'Previous',
    'quiz.next': 'Next',
    'quiz.results': 'View Results',
    'quiz.explanation': 'Explanation',
    'quiz.congratulations': 'Congratulations!',
    'quiz.keepStudying': 'Keep Studying',
    'quiz.passed': 'You passed the civic exam!',
    'quiz.failed': 'You did not reach the minimum score of 32/40.',
    'quiz.goodAnswers': 'correct',
    'quiz.errors': 'errors',
    'quiz.viewAnswers': 'View Answers',
    'quiz.restart': 'Restart',
    'quiz.review': 'Answer Review',
    
    // Timed Exam
    'exam.title': 'Timed Exam',
    'exam.subtitle': 'Real OFII Exam Conditions',
    'exam.description': 'Take the exam under real conditions: 40 questions in 45 minutes. The timer starts as soon as you begin.',
    'exam.timeRemaining': 'Time Remaining',
    'exam.timeUp': 'Time\'s Up!',
    'exam.timeUpDesc': 'The allotted time has ended. Your answers have been recorded.',
    'exam.start': 'Start Timed Exam',
    'exam.warning': 'Warning: Once started, you cannot pause.',
    
    // Themes
    'theme.values': 'Principles & Values',
    'theme.institutions': 'Institutions',
    'theme.rights': 'Rights & Duties',
    'theme.history': 'History & Culture',
    'theme.society': 'Life in Society',
    
    // Common
    'common.loading': 'Loading...',
    'common.error': 'Error',
    'common.readMore': 'Read More',
    'common.viewAll': 'View All',
    'common.back': 'Back',
    'common.share': 'Share',
    'common.download': 'Download',
    
    // Footer
    'footer.rights': 'All rights reserved',
    'footer.contact': 'Contact',
    'footer.legal': 'Legal Notice',
    'footer.privacy': 'Privacy Policy',
    
    // Blog
    'blog.title': 'Blog & Articles',
    'blog.subtitle': 'Tips and guides to pass your civic exam',
    'blog.readTime': 'min read',
    'blog.category': 'Category',
    'blog.relatedArticles': 'Related Articles',
  },
  
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.questions': 'الأسئلة',
    'nav.guide': 'الدليل',
    'nav.exam': 'اختبار بتوقيت',
    'nav.blog': 'المدونة',
    'nav.faq': 'الأسئلة الشائعة',
    'nav.about': 'حول',
    'nav.comparison': 'OFII مقابل التجنس',
    
    // Hero
    'hero.badge': 'أسئلة رسمية 100% من وزارة الداخلية',
    'hero.title': 'التحضير للامتحان المدني',
    'hero.free': 'اختباران مجانيان',
    'hero.description': 'الامتحان المدني هو اختبار إلزامي من 40 سؤالاً للحصول على بطاقة الإقامة في فرنسا. الحد الأدنى للنجاح: 32/40 (80%). تدرب مع اختبارين مجانيين ثم باقة النجاح لمدة 3 أشهر.',
    'hero.cta': 'ابدأ الاختبار (اختباران مجانيان)',
    
    // Stats
    'stats.questions': 'أسئلة اختيار متعدد',
    'stats.score': 'الحد الأدنى للنجاح',
    'stats.minutes': 'دقيقة',
    'stats.official': 'أسئلة رسمية',
    
    // Quiz
    'quiz.title': 'محاكي الامتحان المدني',
    'quiz.description': 'يحتوي هذا الامتحان على 40 سؤالاً موزعة حسب المواضيع الرسمية. يجب الحصول على 32 إجابة صحيحة على الأقل (80%) للنجاح.',
    'quiz.start': 'بدء الامتحان',
    'quiz.question': 'سؤال',
    'quiz.correct': 'إجابات صحيحة',
    'quiz.previous': 'السابق',
    'quiz.next': 'التالي',
    'quiz.results': 'عرض النتائج',
    'quiz.explanation': 'الشرح',
    'quiz.congratulations': 'تهانينا!',
    'quiz.keepStudying': 'واصل المراجعة',
    'quiz.passed': 'لقد نجحت في الامتحان المدني!',
    'quiz.failed': 'لم تحقق الحد الأدنى من 32/40.',
    'quiz.goodAnswers': 'صحيحة',
    'quiz.errors': 'أخطاء',
    'quiz.viewAnswers': 'عرض الإجابات',
    'quiz.restart': 'إعادة',
    'quiz.review': 'مراجعة الإجابات',
    
    // Timed Exam
    'exam.title': 'اختبار بتوقيت',
    'exam.subtitle': 'ظروف امتحان OFII الحقيقية',
    'exam.description': 'خوض الامتحان في ظروف حقيقية: 40 سؤالاً في 45 دقيقة. يبدأ المؤقت بمجرد البدء.',
    'exam.timeRemaining': 'الوقت المتبقي',
    'exam.timeUp': 'انتهى الوقت!',
    'exam.timeUpDesc': 'انتهى الوقت المحدد. تم تسجيل إجاباتك.',
    'exam.start': 'بدء الاختبار بتوقيت',
    'exam.warning': 'تحذير: بمجرد البدء، لا يمكنك الإيقاف مؤقتاً.',
    
    // Themes
    'theme.values': 'المبادئ والقيم',
    'theme.institutions': 'المؤسسات',
    'theme.rights': 'الحقوق والواجبات',
    'theme.history': 'التاريخ والثقافة',
    'theme.society': 'الحياة في المجتمع',
    
    // Common
    'common.loading': 'جار التحميل...',
    'common.error': 'خطأ',
    'common.readMore': 'اقرأ المزيد',
    'common.viewAll': 'عرض الكل',
    'common.back': 'رجوع',
    'common.share': 'مشاركة',
    'common.download': 'تحميل',
    
    // Footer
    'footer.rights': 'جميع الحقوق محفوظة',
    'footer.contact': 'اتصل بنا',
    'footer.legal': 'إشعار قانوني',
    'footer.privacy': 'سياسة الخصوصية',
    
    // Blog
    'blog.title': 'المدونة والمقالات',
    'blog.subtitle': 'نصائح وأدلة لاجتياز امتحانك المدني',
    'blog.readTime': 'دقيقة للقراءة',
    'blog.category': 'الفئة',
    'blog.relatedArticles': 'مقالات ذات صلة',
  },
  
  tr: {
    // Navigation
    'nav.home': 'Ana Sayfa',
    'nav.questions': 'Sorular',
    'nav.guide': 'Rehber',
    'nav.exam': 'Zamanlı Sınav',
    'nav.blog': 'Blog',
    'nav.faq': 'SSS',
    'nav.about': 'Hakkında',
    'nav.comparison': 'OFII vs Vatandaşlık',
    
    // Hero
    'hero.badge': 'İçişleri Bakanlığı\'ndan %100 Resmi Sorular',
    'hero.title': 'Vatandaşlık Sınavı Hazırlığı',
    'hero.free': 'Ücretsiz',
    'hero.description': 'Vatandaşlık sınavı, Fransa\'da oturma izni almak için 40 soruluk zorunlu bir testtir. Minimum puan: 32/40 (%80). Resmi sorularla ücretsiz pratik yapın.',
    'hero.cta': 'Ücretsiz Teste Başla',
    
    // Stats
    'stats.questions': 'Çoktan Seçmeli Soru',
    'stats.score': 'Minimum Puan',
    'stats.minutes': 'Dakika',
    'stats.official': 'Resmi Sorular',
    
    // Quiz
    'quiz.title': 'Vatandaşlık Sınavı Simülatörü',
    'quiz.description': 'Bu sınav, resmi temalara göre düzenlenmiş 40 soru içerir. Geçmek için en az 32 doğru cevap (%80) gerekir.',
    'quiz.start': 'Sınava Başla',
    'quiz.question': 'Soru',
    'quiz.correct': 'doğru cevap',
    'quiz.previous': 'Önceki',
    'quiz.next': 'Sonraki',
    'quiz.results': 'Sonuçları Gör',
    'quiz.explanation': 'Açıklama',
    'quiz.congratulations': 'Tebrikler!',
    'quiz.keepStudying': 'Çalışmaya Devam Et',
    'quiz.passed': 'Vatandaşlık sınavını geçtiniz!',
    'quiz.failed': '32/40 minimum puanına ulaşamadınız.',
    'quiz.goodAnswers': 'doğru',
    'quiz.errors': 'hata',
    'quiz.viewAnswers': 'Cevapları Gör',
    'quiz.restart': 'Yeniden Başla',
    'quiz.review': 'Cevap İncelemesi',
    
    // Timed Exam
    'exam.title': 'Zamanlı Sınav',
    'exam.subtitle': 'Gerçek OFII Sınav Koşulları',
    'exam.description': 'Gerçek koşullarda sınava girin: 45 dakikada 40 soru. Zamanlayıcı başladığınız anda başlar.',
    'exam.timeRemaining': 'Kalan Süre',
    'exam.timeUp': 'Süre Doldu!',
    'exam.timeUpDesc': 'Ayrılan süre sona erdi. Cevaplarınız kaydedildi.',
    'exam.start': 'Zamanlı Sınava Başla',
    'exam.warning': 'Uyarı: Başladıktan sonra duraklatamazsınız.',
    
    // Themes
    'theme.values': 'İlkeler ve Değerler',
    'theme.institutions': 'Kurumlar',
    'theme.rights': 'Haklar ve Görevler',
    'theme.history': 'Tarih ve Kültür',
    'theme.society': 'Toplumda Yaşam',
    
    // Common
    'common.loading': 'Yükleniyor...',
    'common.error': 'Hata',
    'common.readMore': 'Devamını Oku',
    'common.viewAll': 'Tümünü Gör',
    'common.back': 'Geri',
    'common.share': 'Paylaş',
    'common.download': 'İndir',
    
    // Footer
    'footer.rights': 'Tüm hakları saklıdır',
    'footer.contact': 'İletişim',
    'footer.legal': 'Yasal Uyarı',
    'footer.privacy': 'Gizlilik Politikası',
    
    // Blog
    'blog.title': 'Blog ve Makaleler',
    'blog.subtitle': 'Vatandaşlık sınavınızı geçmeniz için ipuçları ve rehberler',
    'blog.readTime': 'dk okuma',
    'blog.category': 'Kategori',
    'blog.relatedArticles': 'İlgili Makaleler',
  },
};

export function getTranslation(lang: Language, key: string): string {
  return translations[lang][key] || translations['fr'][key] || key;
}
