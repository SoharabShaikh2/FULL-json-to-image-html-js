var json = [
    {
        "p": 1,
        "w": "بِسْمِ/بِسۡمِ/./bis'mi|اللّٰهِ/ٱللَّهِ/./al-lahi|الرَّحْمٰنِ/ٱلرَّحۡمَٰنِ/./al-rahmani|الرَّحِیْمِ/ٱلرَّحِيمِ/./al-rahimi",
        "e": "In (the) name//(of) Allah//the Most Gracious//the Most Merciful",
        "m": "নামে//আল্লাহ (র)//পরম করুণাময়//অসীম দয়ালু",
        "fm": "শুরু করছি আল্লাহর নামে যিনি পরম করুণাময়, অতি দয়ালু।",
        "fme": "In the Name of Allah, the Most Beneficent, the Most Merciful"
    },
    {
        "p": 1,
        "w": "اَلْحَمْدُ/ٱلۡحَمۡدُ/./al-hamdu|لِلّٰهِ/لِلَّهِ/./lillahi|رَبِّ/رَبِّ/./rabbi|الْعٰلَمِیْنَ/ٱلۡعَٰلَمِينَ/./al-'alamina",
        "e": "All praises and thanks//(be) to Allah//the Lord//of the universe",
        "m": "সকল প্রশংসা//আল্লাহ্‌রই জন্য//(যিনি) রব//সারা জগতের",
        "fm": "যাবতীয় প্রশংসা আল্লাহ তাআলার যিনি সকল সৃষ্টি জগতের পালনকর্তা।",
        "fme": "All the praises and thanks be to Allah, the Lord of the 'Alamin (mankind, jinns and all that exists)"
    },
    {
        "p": 1,
        "w": "الرَّحْمٰنِ/ٱلرَّحۡمَٰنِ/./al-rahmani|الرَّحِیْمِ/ٱلرَّحِيمِ/./al-rahimi",
        "e": "The Most Gracious//the Most Merciful",
        "m": "অশেষ করুণাময়//পরম দয়ালু",
        "fm": "যিনি নিতান্ত মেহেরবান ও দয়ালু।",
        "fme": "The Most Beneficent, the Most Merciful"
    },
    {
        "p": 1,
        "w": "مٰلِكِ/مَٰلِكِ/./maliki|یَوْمِ/يَوۡمِ/./yawmi|الدِّیْنِ/ٱلدِّينِ/./al-dini",
        "e": "(The) Master//(of the) Day//(of the) Judgment",
        "m": "অধিপতি//দিনের//বিচারের",
        "fm": "যিনি বিচার দিনের মালিক।",
        "fme": "The Only Owner (and the Only Ruling Judge) of the Day of Recompense (i.e. the Day of Resurrection)"
    },
    {
        "p": 1,
        "w": "اِیَّاكَ/إِيَّاكَ/./iyyaka|نَعْبُدُ/نَعۡبُدُ/./na'budu|وَاِیَّاكَ/وَإِيَّاكَ/./wa-iyyaka|نَسْتَعِیْنُ/نَسۡتَعِينُ/./nasta'inu",
        "e": "You Alone//we worship//and You Alone//we ask for help",
        "m": "আপনারই শুধু//আমরা ইবাদত করি//এবং আপনারই (কাছে  শুধু)//আমরা সাহায্য চাই।",
        "fm": "আমরা একমাত্র তোমারই ইবাদত করি এবং শুধুমাত্র তোমারই সাহায্য প্রার্থনা করি।",
        "fme": "You (Alone) we worship, and you (Alone) we ask for help (for each and everything)"
    },
    {
        "p": 1,
        "w": "اِهْدِنَا/ٱهۡدِنَا/./ih'dina|الصِّرَاطَ/ٱلصِّرَٰطَ/./al-sirata|الْمُسْتَقِیْمَ/ٱلۡمُسۡتَقِيمَ/./al-mus'taqima",
        "e": "Guide us//(to) the path//the straight",
        "m": "আমাদেরকে দেখান//পথ//সরল সঠিক",
        "fm": "আমাদেরকে সরল পথ দেখাও",
        "fme": "Guide us to the Straight Way"
    },
    {
        "p": 1,
        "w": "صِرَاطَ/صِرَٰطَ/./sirata|الَّذِیْنَ/ٱلَّذِينَ/./alladhina|اَنْعَمْتَ/أَنۡعَمۡتَ/./an'amta|عَلَیْهِمْ ۙ۬—/عَلَيۡهِمۡ/./alayhim|غَیْرِ/غَيۡرِ/./ghayri|الْمَغْضُوْبِ/ٱلۡمَغۡضُوبِ/./al-maghdubi|عَلَیْهِمْ/عَلَيۡهِمۡ/./alayhim|وَلَا/وَلَا/./wala|الضَّآلِّیْنَ/ٱلضَّآلِّينَ/./al-dalina",
        "e": "(The) path//(of) those//You have bestowed (Your) Favors//on them//not (of)//those who earned (Your) wrath//on themselves//and not//(of) those who go astray",
        "m": "(সেই) পথে//যাদেরকে//আপনি অনুগ্রহ দান করেছেন//তাদের উপর//নয় (পথ)//অভিশপ্তদের//যাদের উপর (গজব পরেছে)//এবং না//পথভ্রষ্টদের",
        "fm": "সে সমস্ত লোকের পথ, যাদেরকে তুমি নেয়ামত দান করেছ। তাদের পথ নয়, যাদের প্রতি তোমার গজব নাযিল হয়েছে এবং যারা পথভ্রষ্ট হয়েছে।",
        "fme": "The Way of those on whom You have bestowed Your Grace, not (the way) of those who earned Your Anger, nor of those who went astray"
    }
]