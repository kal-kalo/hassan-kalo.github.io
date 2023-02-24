const pages = [
    'بسم ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ ۝١ ٱلۡحَمۡدُ لِلَّهِ رَبِّ ٱلۡعَٰلَمِينَ ۝٢ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ ۝٣ مَٰلِكِ يَوۡمِ ٱلدِّينِ ۝٤ إِيَّاكَ نَعۡبُدُ وَإِيَّاكَ نَسۡتَعِينُ ۝٥ ٱهۡدِنَا ٱلصِّرَٰطَ ٱلۡمُسۡتَقِيمَ ۝٦ صِرَٰطَ ٱلَّذِينَ أَنۡعَمۡتَ عَلَيۡهِمۡ غَيۡرِ ٱلۡمَغۡضُوبِ عَلَيۡهِمۡ وَلَا ٱلضَّآلِّين ۝٧',
    'الٓمٓ ۝١ ذَٰلِكَ ٱلۡكِتَٰبُ لَا رَيۡبَۛ فِيهِۛ هُدٗى لِّلۡمُتَّقِينَ ۝٢ ٱلَّذِينَ يُؤۡمِنُونَ بِٱلۡغَيۡبِ وَيُقِيمُونَ ٱلصَّلَوٰةَ وَمِمَّا رَزَقۡنَٰهُمۡ يُنفِقُونَ ۝٣ وَٱلَّذِينَ يُؤۡمِنُونَ بِمَآ أُنزِلَ إِلَيۡكَ وَمَآ أُنزِلَ مِن قَبۡلِكَ وَبِٱلۡأٓخِرَةِ هُمۡ يُوقِنُونَ ۝٤ أُوْلَٰٓئِكَ عَلَىٰ هُدٗى مِّن رَّبِّهِمۡۖ وَأُوْلَٰٓئِكَ هُمُ ٱلۡمُفۡلِحُونَ ۝٥',
    'إِنَّ ٱلَّذِينَ كَفَرُواْ سَوَآءٌ عَلَيۡهِمۡ ءَأَنذَرۡتَهُمۡ أَمۡ لَمۡ تُنذِرۡهُمۡ لَا يُؤۡمِنُونَ ۝٦ خَتَمَ ٱللَّهُ عَلَىٰ قُلُوبِهِمۡ وَعَلَىٰ سَمۡعِهِمۡۖ وَعَلَىٰٓ أَبۡصَٰرِهِمۡ غِشَٰوَةٞۖ وَلَهُمۡ عَذَابٌ عَظِيمٞ ۝٧ وَمِنَ ٱلنَّاسِ مَن يَقُولُ ءَامَنَّا بِٱللَّهِ وَبِٱلۡيَوۡمِ ٱلۡأٓخِرِ وَمَا هُم بِمُؤۡمِنِينَ ۝٨ يُخَٰدِعُونَ ٱللَّهَ وَٱلَّذِينَ ءَامَنُواْ وَمَا يَخۡدَعُونَ إِلَّآ أَنفُسَهُمۡ وَمَا يَشۡعُرُونَ ۝٩ فِي قُلُوبِهِم مَّرَضٞ فَزَادَهُمُ ٱللَّهُ مَرَضٗاۖ وَلَهُمۡ عَذَابٌ أَلِيمُۢ بِمَا كَانُواْ يَكۡذِبُونَ ۝١٠ وَإِذَا قِيلَ لَهُمۡ لَا تُفۡسِدُواْ فِي ٱلۡأَرۡضِ قَالُوٓاْ إِنَّمَا نَحۡنُ مُصۡلِحُونَ ۝١١ أَلَآ إِنَّهُمۡ هُمُ ٱلۡمُفۡسِدُونَ وَلَٰكِن لَّا يَشۡعُرُونَ ۝١٢ وَإِذَا قِيلَ لَهُمۡ ءَامِنُواْ كَمَآ ءَامَنَ ٱلنَّاسُ قَالُوٓاْ أَنُؤۡمِنُ كَمَآ ءَامَنَ ٱلسُّفَهَآءُۗ أَلَآ إِنَّهُمۡ هُمُ ٱلسُّفَهَآءُ وَلَٰكِن لَّا يَعۡلَمُونَ ۝١٣ وَإِذَا لَقُواْ ٱلَّذِينَ ءَامَنُواْ قَالُوٓاْ ءَامَنَّا وَإِذَا خَلَوۡاْ إِلَىٰ شَيَٰطِينِهِمۡ قَالُوٓاْ إِنَّا مَعَكُمۡ إِنَّمَا نَحۡنُ مُسۡتَهۡزِءُونَ ۝١٤ ٱللَّهُ يَسۡتَهۡزِئُ بِهِمۡ وَيَمُدُّهُمۡ فِي طُغۡيَٰنِهِمۡ يَعۡمَهُونَ ۝١٥ أُوْلَٰٓئِكَ ٱلَّذِينَ ٱشۡتَرَوُاْ ٱلضَّلَٰلَةَ بِٱلۡهُدَىٰ فَمَا رَبِحَت تِّجَٰرَتُهُمۡ وَمَا كَانُواْ مُهۡتَدِينَ ۝١٦',
    'سورة التوبة بَرَآءَةٞ مِّنَ ٱللَّهِ وَرَسُولِهِۦٓ إِلَى ٱلَّذِينَ عَٰهَدتُّم مِّنَ ٱلۡمُشۡرِكِينَ ۝١ فَسِيحُواْ فِي ٱلۡأَرۡضِ أَرۡبَعَةَ أَشۡهُرٖ وَٱعۡلَمُوٓاْ أَنَّكُمۡ غَيۡرُ مُعۡجِزِي ٱللَّهِ وَأَنَّ ٱللَّهَ مُخۡزِي ٱلۡكَٰفِرِينَ ۝٢ وَأَذَٰنٞ مِّنَ ٱللَّهِ وَرَسُولِهِۦٓ إِلَى ٱلنَّاسِ يَوۡمَ ٱلۡحَجِّ ٱلۡأَكۡبَرِ أَنَّ ٱللَّهَ بَرِيٓءٞ مِّنَ ٱلۡمُشۡرِكِينَ وَرَسُولُهُۥۚ فَإِن تُبۡتُمۡ فَهُوَ خَيۡرٞ لَّكُمۡۖ وَإِن تَوَلَّيۡتُمۡ فَٱعۡلَمُوٓاْ أَنَّكُمۡ غَيۡرُ مُعۡجِزِي ٱللَّهِۗ وَبَشِّرِ ٱلَّذِينَ كَفَرُواْ بِعَذَابٍ أَلِيمٍ ۝٣ إِلَّا ٱلَّذِينَ عَٰهَدتُّم مِّنَ ٱلۡمُشۡرِكِينَ ثُمَّ لَمۡ يَنقُصُوكُمۡ شَيۡـٔٗا وَلَمۡ يُظَٰهِرُواْ عَلَيۡكُمۡ أَحَدٗا فَأَتِمُّوٓاْ إِلَيۡهِمۡ عَهۡدَهُمۡ إِلَىٰ مُدَّتِهِمۡۚ إِنَّ ٱللَّهَ يُحِبُّ ٱلۡمُتَّقِينَ ۝٤ فَإِذَا ٱنسَلَخَ ٱلۡأَشۡهُرُ ٱلۡحُرُمُ فَٱقۡتُلُواْ ٱلۡمُشۡرِكِينَ حَيۡثُ وَجَدتُّمُوهُمۡ وَخُذُوهُمۡ وَٱحۡصُرُوهُمۡ وَٱقۡعُدُواْ لَهُمۡ كُلَّ مَرۡصَدٖۚ فَإِن تَابُواْ وَأَقَامُواْ ٱلصَّلَوٰةَ وَءَاتَوُاْ ٱلزَّكَوٰةَ فَخَلُّواْ سَبِيلَهُمۡۚ إِنَّ ٱللَّهَ غَفُورٞ رَّحِيمٞ ۝٥ وَإِنۡ أَحَدٞ مِّنَ ٱلۡمُشۡرِكِينَ ٱسۡتَجَارَكَ فَأَجِرۡهُ حَتَّىٰ يَسۡمَعَ كَلَٰمَ ٱللَّهِ ثُمَّ أَبۡلِغۡهُ مَأۡمَنَهُۥۚ ذَٰلِكَ بِأَنَّهُمۡ قَوۡمٞ لَّا يَعۡلَمُونَ ۝',
    'لَّا تَجِدُ قَوۡمٗا يُؤۡمِنُونَ بِٱللَّهِ وَٱلۡيَوۡمِ ٱلۡأٓخِرِ يُوَآدُّونَ مَنۡ حَآدَّ ٱللَّهَ وَرَسُولَهُۥ وَلَوۡ كَانُوٓاْ ءَابَآءَهُمۡ أَوۡ أَبۡنَآءَهُمۡ أَوۡ إِخۡوَٰنَهُمۡ أَوۡ عَشِيرَتَهُمۡۚ أُوْلَٰٓئِكَ كَتَبَ فِي قُلُوبِهِمُ ٱلۡإِيمَٰنَ وَأَيَّدَهُم بِرُوحٖ مِّنۡهُۖ وَيُدۡخِلُهُمۡ جَنَّٰتٖ تَجۡرِي مِن تَحۡتِهَا ٱلۡأَنۡهَٰرُ خَٰلِدِينَ فِيهَاۚ رَضِيَ ٱللَّهُ عَنۡهُمۡ وَرَضُواْ عَنۡهُۚ أُوْلَٰٓئِكَ حِزۡبُ ٱللَّهِۚ أَلَآ إِنَّ حِزۡبَ ٱللَّهِ هُمُ ٱلۡمُفۡلِحُونَ ۝٢٢       سَبَّحَ لِلَّهِ مَا فِي ٱلسَّمَٰوَٰتِ وَمَا فِي ٱلۡأَرۡضِۖ وَهُوَ ٱلۡعَزِيزُ ٱلۡحَكِيمُ ۝١ هُوَ ٱلَّذِيٓ أَخۡرَجَ ٱلَّذِينَ كَفَرُواْ مِنۡ أَهۡلِ ٱلۡكِتَٰبِ مِن دِيَٰرِهِمۡ لِأَوَّلِ ٱلۡحَشۡرِۚ مَا ظَنَنتُمۡ أَن يَخۡرُجُواْۖ وَظَنُّوٓاْ أَنَّهُم مَّانِعَتُهُمۡ حُصُونُهُم مِّنَ ٱللَّهِ فَأَتَىٰهُمُ ٱللَّهُ مِنۡ حَيۡثُ لَمۡ يَحۡتَسِبُواْۖ وَقَذَفَ فِي قُلُوبِهِمُ ٱلرُّعۡبَۚ يُخۡرِبُونَ بُيُوتَهُم بِأَيۡدِيهِمۡ وَأَيۡدِي ٱلۡمُؤۡمِنِينَ فَٱعۡتَبِرُواْ يَٰٓأُوْلِي ٱلۡأَبۡصَٰرِ ۝٢ وَلَوۡلَآ أَن كَتَبَ ٱللَّهُ عَلَيۡهِمُ ٱلۡجَلَآءَ لَعَذَّبَهُمۡ فِي ٱلدُّنۡيَاۖ وَلَهُمۡ فِي ٱلۡأٓخِرَةِ عَذَابُ ٱلنَّارِ ۝',
    'سورة الانفطار بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ إِذَا ٱلسَّمَآءُ ٱنفَطَرَتۡ ۝١ وَإِذَا ٱلۡكَوَاكِبُ ٱنتَثَرَتۡ ۝٢ وَإِذَا ٱلۡبِحَارُ فُجِّرَتۡ ۝٣ وَإِذَا ٱلۡقُبُورُ بُعۡثِرَتۡ ۝٤ عَلِمَتۡ نَفۡسٞ مَّا قَدَّمَتۡ وَأَخَّرَتۡ ۝٥ يَٰٓأَيُّهَا ٱلۡإِنسَٰنُ مَا غَرَّكَ بِرَبِّكَ ٱلۡكَرِيمِ ۝٦ ٱلَّذِي خَلَقَكَ فَسَوَّىٰكَ فَعَدَلَكَ ۝٧ فِيٓ أَيِّ صُورَةٖ مَّا شَآءَ رَكَّبَكَ ۝٨ كَلَّا بَلۡ تُكَذِّبُونَ بِٱلدِّينِ ۝٩ وَإِنَّ عَلَيۡكُمۡ لَحَٰفِظِينَ ۝١٠ كِرَامٗا كَٰتِبِينَ ۝١١ يَعۡلَمُونَ مَا تَفۡعَلُونَ ۝١٢ إِنَّ ٱلۡأَبۡرَارَ لَفِي نَعِيمٖ ۝١٣ وَإِنَّ ٱلۡفُجَّارَ لَفِي جَحِيمٖ ۝١٤ يَصۡلَوۡنَهَا يَوۡمَ ٱلدِّينِ ۝١٥ وَمَا هُمۡ عَنۡهَا بِغَآئِبِينَ ۝١٦ وَمَآ أَدۡرَىٰكَ مَا يَوۡمُ ٱلدِّينِ ۝١٧ ثُمَّ مَآ أَدۡرَىٰكَ مَا يَوۡمُ ٱلدِّينِ ۝١٨ يَوۡمَ لَا تَمۡلِكُ نَفۡسٞ لِّنَفۡسٖ شَيۡـٔٗاۖ وَٱلۡأَمۡرُ يَوۡمَئِذٖ لِّلَّهِ ۝١٩ سورة المُطَفِّفِينَ بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ وَيۡلٞ لِّلۡمُطَفِّفِينَ ۝١ ٱلَّذِينَ إِذَا ٱكۡتَالُواْ عَلَى ٱلنَّاسِ يَسۡتَوۡفُونَ ۝٢ وَإِذَا كَالُوهُمۡ أَو وَّزَنُوهُمۡ يُخۡسِرُونَ ۝٣ أَلَا يَظُنُّ أُوْلَٰٓئِكَ أَنَّهُم مَّبۡعُوثُونَ ۝',
    ' قُلۡ هُوَ ٱللَّهُ أَحَدٌ ۝١ ٱللَّهُ ٱلصَّمَدُ ۝٢ لَمۡ يَلِدۡ وَلَمۡ يُولَدۡ ۝٣ وَلَمۡ يَكُن لَّهُۥ كُفُوًا أَحَدُۢ ۝٤ قُلۡ أَعُوذُ بِرَبِّ ٱلۡفَلَقِ ۝١ مِن شَرِّ مَا خَلَقَ ۝٢ وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ ۝٣ وَمِن شَرِّ ٱلنَّفَّٰثَٰتِ فِي ٱلۡعُقَدِ ۝٤ وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ ۝٥ قُلۡ أَعُوذُ بِرَبِّ ٱلنَّاسِ ۝١ مَلِكِ ٱلنَّاسِ ۝٢ إِلَٰهِ ٱلنَّاسِ ۝٣ مِن شَرِّ ٱلۡوَسۡوَاسِ ٱلۡخَنَّاسِ ۝٤ ٱلَّذِي يُوَسۡوِسُ فِي صُدُورِ ٱلنَّاسِ ۝٥ مِنَ ٱلۡجِنَّةِ والناس ۝٦ ',
]
const namesOfSuras = [
    "الفاتحة",
    "البقرة",
    "آل عمران",
    "النساء",
    "المائدة",
    "الأنعام",
    "الأعراف",
    "الأنفال",
    "التوبة",
    "يونس",
    "هود",
    "يوسف",
    "الرعد",
    "إبراهيم",
    "الحجر",
    "النحل",
    "الإسراء",
    "الكهف",
    "مريم",
    "طه",
    "الأنبياء",
    "الحج",
    "المؤمنون",
    "النور",
    "الفرقان",
    "الشعراء",
    "النمل",
    "القصص",
    "العنكبوت",
    "الروم",
    "لقمان",
    "السجدة",
    "الأحزاب",
    "سبأ",
    "فاطر",
    "يس",
    "الصافات",
    "ص",
    "الزمر",
    "غافر",
    "فصلت",
    "الشورى",
    "الزخرف",
    "الدخان",
    "الجاثية",
    "الأحقاف",
    "محمد",
    "الفتح",
    "الحجرات",
    "ق",
    "الذاريات",
    "الطور",
    "النجم",
    "القمر",
    "الرحمن",
    "الوقعة",
    "الحديد",
    "المجادلة",
    "لحشر",
    "الممتحنة",
    "الصف",
    "الجمعة",
    "المنافقون",
    "التغابن",
    "الطلاق",
    "التحريم",
    "الملك",
    "القلم",
    "الحاقة",
    "المعارج",
    "نوح",
    "الجن",
    "المزمل",
    "المدثر",
    "القيامة",
    "الإنسان",
    "المرسلات",
    "النبأ",
    "النازعات",
    "عبس",
    "التكوير",
    "الانفطار",
    "المطففين",
    "الانشقاق",
    "البروج",
    "الطارق",
    "الأعلى",
    "الغاشية",
    "الفجر",
    "البلد",
    "الشمس",
    "الليل",
    "الضحى",
    "الشرح",
    "التين",
    "العلق",
    "القدر",
    "البينة",
    "الزلزلة",
    "العاديات",
    "القارعة",
    "التكاثر",
    "العصر",
    "الهمزة",
    "الفيل",
    "قريش",
    "الماعون",
    "الكوثر",
    "الكافرون",
    "النصر",
    "المسد",
    "الإخلاص",
    "لفلق",
    "لناس",
];
const arDiacritics = /[\u0610-\u061a\u064b-\u065f\u0670\u06d6-\u06dc\u06df-\u06e4\u06e7\u06e8\u06ea-\u06ed\u08d4-\u08e1\u08e3-\u08ff-\u0671]/g;
const arQuranDictionary = {
    'لحمد': 'الثَّناءُ على اللهِ بصفاتِه، وبنِعَمِه كلِّها.',
    'لعالمين': 'جميعِ الخلْقِ.',
    'لعلمين': 'جميعِ الخلْقِ.',
    'لعـٰلمين': 'جميعِ الخلْقِ.',
     'إياك نعبد': 'نَخُصُّك بالعبادةِ.',
    'لصراط المستقيم': 'الطَّريقَ الواضحَ، المُوصِلَ إلى رِضوانِ اللهِ، وهو الإسلامُ.',
    'للمتقين': ' الذين يَخافون اللهَ، ويتَّبعون أحكامَه.',
}
const worshipArr = [
    "بسم",
    "الحمد",
    "نعبد",
    "نستعين",
    "اهدنا",
];
const tafsirs = {
    "التفسير الميسر":[
       [
        'تفسير بسم الله الرحمن الرحيم',
        'تفسير الحمد لله رب العالمين',
        'تفسير الرحمن الرحيم',
        'تفسير مالك يوم الدين',
        'تفسير إياك نعبد وإياك نستعين',
        'تفسير اهدنا الصراط المستقيم',
        'تفسير صراط الذين أنعمت عليهم غير المغضوب عليهم ولا الضالين',
       ],
       [
        'سورة البقرة تفسير الآية الأولى',
        'سورة البقرة تفسير الآية الثانية',
        'سورة البقرة تفسير الآية الثالثة',
        'سورة البقرة تفسير الآية الرابعة',
        'سورة البقرة تفسير الآية الخامسة',
      ],
    ],
   
    "تفسير السعدي":[
        [
            "page1aya1",
            "page1aya2",
            "page1aya3",
            "page1aya4",
            "page1aya5",
            "page1aya6",
            "page1aya7"
        ],
        [
            "page2aya1",
            "page2aya2",
            "page2aya3",
            "page2aya4",
            "page2aya5",
        ],
        [
            "page3aya6",
            "page3aya7",
            "page3aya8",
            "page3aya9",
            "page3aya10",
            "page3aya11",
            "page3aya12",
            "page3aya13",
            "page3aya14",
            "page3aya15",
            "page3aya16",
        ], 
    ],
   
    "تفسير ابن تيمية":[
        [
            "page1aya1",
            "page1aya2",
            "page1aya3",
            "page1aya4",
            "page1aya5",
            "page1aya6",
            "page1aya7"
        ],
        [
            "page2aya1",
            "page2aya2",
            "page2aya3",
            "page2aya4",
            "page2aya5",
        ],
        [
            "page3aya6",
            "page3aya7",
            "page3aya8",
            "page3aya9",
            "page3aya10",
            "page3aya11",
            "page3aya12",
            "page3aya13",
            "page3aya14",
            "page3aya15",
            "page3aya16",
        ],
        
    ],
  
}

