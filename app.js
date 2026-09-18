/* -------------------------------------------------------------
   KPSS Şifrebazı - Application Database & Interactivity
   ------------------------------------------------------------- */

// Comprehensive Database of KPSS Mnemonics
const mnemonicsDatabase = [
    // === TARİH CATEGORY ===
    {
        id: "tarih_sakalguy",
        category: "tarih",
        mnemonic: "SAKAL GU",
        topic: "Türklerin Kullandığı Alfabeler",
        expansion: [
            { letter: "S", word: "Soğd Alfabesi" },
            { letter: "A", word: "Arap Alfabesi" },
            { letter: "K", word: "Kiril Alfabesi" },
            { letter: "A", word: "Latin Alfabesi" },
            { letter: "L", word: "Göktürk Alfabesi (İlk milli alfabe)" },
            { letter: "G", word: "Uygur Alfabesi (İkinci milli alfabe)" }
        ],
        description: "Türklerin tarih boyunca kültürel ve ticari ilişkiler neticesinde ya da kendi bünyelerinde oluşturarak kullandıkları alfabelerdir."
    },
    {
        id: "tarih_ohacerim",
        category: "tarih",
        mnemonic: "O HaCeRiM",
        topic: "Türklerin Kullandığı Takvimler",
        expansion: [
            { letter: "O", word: "On İki Hayvanlı Türk Takvimi (İlk takvim, Güneş esaslı)" },
            { letter: "H", word: "Hicri Takvim (Tek Ay yılı esaslı takvim)" },
            { letter: "C", word: "Celali Takvim (Büyük Selçuklu, Melikşah dönemi, Güneş esaslı)" },
            { letter: "R", word: "Rumi Takvim (Osmanlı'da mali işler için, Güneş esaslı)" },
            { letter: "M", word: "Miladi Takvim (1 Ocak 1926'dan itibaren kullanılan modern takvim)" }
        ],
        description: "Küçük harfler (a, e, i) dolgu harf olup, Türklerin zamanı ölçmek için kullandığı takvimlerin kronolojik sıralamasıdır."
    },
    {
        id: "tarih_tema",
        category: "tarih",
        mnemonic: "TEMA",
        topic: "Mısır'da Kurulan İlk Türk-İslam Devletleri",
        expansion: [
            { letter: "T", word: "Tolunoğulları (Mısır'da kurulan ilk Türk-İslam devleti)" },
            { letter: "E", word: "Eyyubiler (Kudüs'ü Haçlılardan geri alan devlet)" },
            { letter: "M", word: "Memlükler (Veraset sistemi farklı olan tek devlet, her komutan tahta geçebilir)" },
            { letter: "A", word: "Akşitler / İhşidiler (Kutsal topraklara, Hicaz'a hakim olan ilk Türk devleti)" }
        ],
        description: "Mısır'da sırasıyla kurulmuş ve yöneticileri Türk, halkı ağırlıklı olarak Arap olan devletlerdir."
    },
    {
        id: "tarih_dsmac",
        category: "tarih",
        mnemonic: "D-SMAÇ",
        topic: "Anadolu'da Kurulan İlk Türk Beylikleri",
        expansion: [
            { letter: "D", word: "Danişmentliler (En güçlüsüdür, Tokat Yağıbasan Medresesi'ni kurdular)" },
            { letter: "S", word: "Saltuklular (Erzurum çevresi, Anadolu'da kurulan ilk Türk beyliğidir)" },
            { letter: "M", word: "Mengücekler (Erzincan-Sivas, Divriği Ulu Camii ve Darüşşifası'nı kurdular)" },
            { letter: "A", word: "Artuklular (Mardin-Diyarbakır, Malabadi Köprüsü'nü yaptılar, El Cezeri bu dönemde yaşadı)" },
            { letter: "Ç", word: "Çaka Beyliği (İzmir, ilk Türk denizci beyliği ve deniz kuvvetlerinin kuruluş yılı)" }
        ],
        description: "Malazgirt Savaşı (1071) sonrası Alp Arslan'ın komutanlarına fethedilen yerleri kılıç hakkı olarak vermesiyle kurulan beyliklerdir."
    },
    {
        id: "tarih_tamisabet",
        category: "tarih",
        mnemonic: "TAMiSaBeT",
        topic: "Büyük Selçuklu Hükümdarları",
        expansion: [
            { letter: "T", word: "Tuğrul Bey (Devletin kurucusu, Doğu'nun ve Batı'nın Sultanı)" },
            { letter: "A", word: "Alp Arslan (Malazgirt Fatihi)" },
            { letter: "M", word: "Melikşah (En parlak dönem, sınırların en geniş olduğu zaman)" },
            { letter: "S", word: "Sencer / Sultan-ı Azam (Son büyük hükümdar, Katvan Savaşı yenilgisi)" },
            { letter: "B", word: "Berkyaruk (Taht kavgaları dönemi hükümdarı)" },
            { letter: "T", word: "Tapar / Muhammed Tapar (Bâtınilikle mücadele dönemi)" }
        ],
        description: "Büyük Selçuklu Devleti'nin tahta çıkmış başlıca önemli hükümdarlarının listesidir."
    },
    {
        id: "tarih_sinav2",
        category: "tarih",
        mnemonic: "SINaV II",
        topic: "Osmanlı Haçlı Savaşları",
        expansion: [
            { letter: "S", word: "Sırpsındığı Savaşı (İlk Osmanlı-Haçlı savaşı)" },
            { letter: "I", word: "I. Kosova Savaşı (İlk kez top kullanıldı, I. Murat şehit düştü)" },
            { letter: "N", word: "Niğbolu Savaşı (Yıldırım Bayezid'e Sultan-ı İklim-i Rum unvanı verildi)" },
            { letter: "V", word: "Varna Savaşı (II. Murat'ın tahta tekrar geçmesiyle kazanıldı)" },
            { letter: "II", word: "II. Kosova Savaşı (Balkanlar kesin olarak Türk yurdu haline geldi)" }
        ],
        description: "Osmanlı Devleti'nin kuruluş döneminde Balkanlar'da Haçlı ordularına karşı yaptığı savunma ve taarruz savaşlarıdır. Ankara Savaşı (1402) hariç hepsi haçlılaradır."
    },
    {
        id: "tarih_tokmak",
        category: "tarih",
        mnemonic: "TOKMAK",
        topic: "Duraklama Dönemi Islahatçıları (17. yy)",
        expansion: [
            { letter: "T", word: "Tarhuncu Ahmet Paşa (İlk modern denk bütçeyi hazırladı)" },
            { letter: "O", word: "Genç Osman / II. Osman (İlk radikal ıslahatçı, Yeniçeri Ocağı'nı kaldırmak istedi)" },
            { letter: "K", word: "Kuyucu Murat Paşa (Celali isyanlarını baskı ve şiddetle bastırdı)" },
            { letter: "M", word: "IV. Murat (İçki, tütün yasağı, saray kadınlarının yönetime müdahalesini engelleme, Koçi Bey raporu)" },
            { letter: "A", word: "I. Ahmet (Ekber ve Erşed veraset sistemini getirdi, kafes usulünü başlattı)" },
            { letter: "K", word: "Köprülüler (Köprülü Mehmet Paşa, saraya şartlar sunarak sadrazam olan ilk kişidir)" }
        ],
        description: "17. yüzyıl Osmanlı Duraklama Döneminde devleti eski gücüne kavuşturmak amacıyla ıslahat yapan devlet adamları ve padişahlar."
    },
    {
        id: "tarih_gerileme",
        category: "tarih",
        mnemonic: "3-1-3-1-3",
        topic: "18. Yüzyıl (Gerileme) Islahatçı Padişahları",
        expansion: [
            { letter: "3", word: "III. Ahmet (Lale Devri padişahı, askeri ıslahat yapılmayan tek dönemdir)" },
            { letter: "1", word: "I. Mahmut (Batı tarzı askeri ıslahatları başlattı, Hendesehane'yi kurdu)" },
            { letter: "3", word: "III. Mustafa (Deniz Mühendishanesi kuruldu, Sürat Topçuları Ocağı açıldı)" },
            { letter: "1", word: "I. Abdülhamit (Cülus bahşişini kaldırdı, yeniçeri sayımı yaptı, ulufe alım-satımını yasakladı)" },
            { letter: "3", word: "III. Selim (Nizam-ı Cedid dönemi, ilk kalıcı elçilikler açıldı, Matbaa-i Amire açıldı)" }
        ],
        description: "18. yüzyılda Batı'nın üstünlüğünün kabul edilmesiyle askeri ve idari alanlarda köklü ıslahatlar yapan padişahların kodlamasıdır."
    },
    {
        id: "tarih_sevdam",
        category: "tarih",
        mnemonic: "SEVDAM",
        topic: "II. Mahmut Dönemi Askeri Islahatları",
        expansion: [
            { letter: "S", word: "Sekban-ı Cedit Ocağı kuruldu." },
            { letter: "E", word: "Eşkinci Ocağı kuruldu." },
            { letter: "V", word: "Vaka-i Hayriye (Yeniçeri Ocağı'nın kaldırılması - 1826)" },
            { letter: "D", word: "Dar-ı Şura-yı Askeri kuruldu (Askeri şura/meclis)" },
            { letter: "A", word: "Asakir-i Mansure-i Muhammediye ordusu kuruldu (Yeniçeriler yerine)" },
            { letter: "M", word: "Mızıka-i Hümayun kuruldu (Askeri bando ocağı)" }
        ],
        description: "II. Mahmut döneminde orduyu tamamen modernize etmek amacıyla gerçekleştirilen radikal askeri değişimlerdir."
    },
    {
        id: "tarih_zaman",
        category: "tarih",
        mnemonic: "ZAMAN",
        topic: "Genç Osmanlılar (Jön Türkler)",
        expansion: [
            { letter: "Z", word: "Ziya Paşa" },
            { letter: "A", word: "Ahmet Mithat Efendi" },
            { letter: "M", word: "Mustafa Fazıl Paşa (Cemiyetin finansörü)" },
            { letter: "A", word: "Ali Suavi (Çırağan Baskını girişimiyle bilinir)" },
            { letter: "N", word: "Namık Kemal (Vatan Şairi)" }
        ],
        description: "Osmanlı İmparatorluğu'nda meşrutiyet rejiminin ilan edilmesini savunan, Osmanlıcılık fikir akımının öncüsü olan aydınlar grubudur."
    },
    {
        id: "tarih_3b",
        category: "tarih",
        mnemonic: "3B",
        topic: "1908 Meşrutiyet Karışıklığında Kaybedilen Topraklar",
        expansion: [
            { letter: "B", word: "Bosna-Hersek (Avusturya-Macaristan tarafından ilhak edildi)" },
            { letter: "B", word: "Bulgaristan (Bağımsızlığını ilan etti)" },
            { letter: "B", word: "Girit (Yunanistan'a katıldığını açıkladı)" }
        ],
        description: "II. Meşrutiyet'in ilanı sırasında ülkede yaşanan iç kargaşadan faydalanan dış güçlerin el koyduğu veya elden çıkan topraklardır."
    },
    {
        id: "tarih_buyusek",
        category: "tarih",
        mnemonic: "BüYüSeK",
        topic: "I. Balkan Savaşı'nda Osmanlı'ya Savaş Açanlar",
        expansion: [
            { letter: "Bü", word: "Bulgaristan" },
            { letter: "Yü", word: "Yunanistan" },
            { letter: "Se", word: "Sırbistan" },
            { letter: "K", word: "Karadağ (Savaşı fiilen başlatan ilk devlettir)" }
        ],
        description: "Milliyetçilik akımı ve Rusya'nın Panslavizm politikası etkisiyle birleşerek Osmanlı Devleti'ni Balkanlar'dan atmak isteyen devletler."
    },
    {
        id: "tarih_roksy",
        category: "tarih",
        mnemonic: "ROKSY",
        topic: "II. Balkan Savaşı'nda Bulgaristan'a Savaş Açanlar",
        expansion: [
            { letter: "R", word: "Romanya (I. Balkan'da olmayıp II. Balkan'a dahil olan devlet)" },
            { letter: "O", word: "Osmanlı Devleti (Kayıp Edirne ve Kırklareli'yi geri almak için katıldı)" },
            { letter: "K", word: "Karadağ" },
            { letter: "S", word: "Sırbistan" },
            { letter: "Y", word: "Yunanistan" }
        ],
        description: "I. Balkan Savaşı'nda en büyük toprak payını Bulgaristan'ın alması üzerine diğer Balkan devletlerinin ittifak yapıp Bulgaristan'a saldırması olayı."
    },
    {
        id: "tarih_badem",
        category: "tarih",
        mnemonic: "BADEM",
        topic: "I. Balkan Savaşı Sonunda Kaybedilen Topraklar",
        expansion: [
            { letter: "B", word: "Batı Trakya (Gümülcine, Dedeağaç vb.)" },
            { letter: "A", word: "Arnavutluk (Osmanlı'dan ayrılan en son Balkan devletidir)" },
            { letter: "D", word: "Doğu Trakya (Edirne, Kırklareli - II. Balkan'da geri alındı)" },
            { letter: "E", word: "Ege Adaları" },
            { letter: "M", word: "Makedonya" }
        ],
        description: "Londra Antlaşması (1913) ile Midye-Enez hattının batısında kalan ve Osmanlı'nın tamamen çekilmek zorunda kaldığı topraklardır."
    },
    {
        id: "tarih_sentes",
        category: "tarih",
        mnemonic: "SeNTeS (VeSeNTeS)",
        topic: "I. Dünya Savaşı Barış Antlaşmaları",
        expansion: [
            { letter: "Ve", word: "Versay Antlaşması (Almanya ile)" },
            { letter: "Se", word: "Saint Germain / Senjermen Antlaşması (Avusturya ile)" },
            { letter: "N", word: "Neuilly / Nöyyi Antlaşması (Bulgaristan ile)" },
            { letter: "Te", word: "Trianon Antlaşması (Macaristan ile)" },
            { letter: "S", word: "Sevr Antlaşması (Osmanlı Devleti ile - Ölü doğmuş, hukuken geçersizdir)" }
        ],
        description: "İtilaf Devletleri'nin I. Dünya Savaşı'nı kaybeden İttifak Devletleri ile Paris Barış Konferansı sonrasında imzaladıkları ağır şartlar içeren antlaşmalardır."
    },
    {
        id: "tarih_wistkon",
        category: "tarih",
        mnemonic: "WİSTKoN",
        topic: "Zararlı Cemiyetler (Milli Varlığa Düşman)",
        expansion: [
            { letter: "W", word: "Wilson Prensipleri Cemiyeti (Amerikan mandasını savunan Türk aydınları)" },
            { letter: "İ", word: "İngiliz Muhipleri Cemiyeti (İngiliz himayesini savunan padişah yanlıları)" },
            { letter: "S", word: "Sulh ve Selamet-i Osmaniye Fırkası (Kurtuluşu padişahın emirlerine uymakta görenler)" },
            { letter: "T", word: "Teali İslam Cemiyeti (Hilafet ve medrese desteğiyle kurtuluş arayanlar)" },
            { letter: "Ko", word: "Kürt Teali Cemiyeti (Doğu'da bağımsız Kürt devleti kurmak isteyenler)" },
            { letter: "N", word: "Nigehban Cemiyeti (Askeri zabitlerin kurduğu, saltanat yanlısı silahlı grup)" }
        ],
        description: "Türk ve Müslümanlar tarafından kurulmuş, ancak manda/himaye fikrini veya halifeliği savunarak milli mücadeleye karşı çıkmış cemiyetlerdir."
    },
    {
        id: "tarih_damaktati",
        category: "tarih",
        mnemonic: "DAMAK TATİ",
        topic: "Yararlı (Milli) Cemiyetler",
        expansion: [
            { letter: "D", word: "Doğu Anadolu (Şark Vilayetleri) Müdafaa-i Hukuk Cemiyeti" },
            { letter: "A", word: "Anadolu Kadınları Müdafaa-i Vatan Cemiyeti (Sivas valisinin eşi öncülüğünde)" },
            { letter: "M", word: "Milli Kongre Cemiyeti (Basın-yayın yolunu kullanan, Kuva-yı Milliye adını ilk kullanan)" },
            { letter: "A", word: "Anadolu ve Rumeli Müdafaa-i Hukuk Cemiyeti (Tüm cemiyetlerin birleşmiş hali)" },
            { letter: "K", word: "Kilikyalılar Cemiyeti (Adana ve Çukurova çevresini Fransız/Ermenilere karşı korudu)" },
            { letter: "T", word: "Trakya-Paşaeli Müdafaa-i Hukuk Cemiyeti (İlk kurulan cemiyettir)" },
            { letter: "A", word: "Anadolu Müdafaa-i Hukuk (Genel yerel kongre komiteleri)" },
            { letter: "T", word: "Trabzon Muhafaza-i Hukuk-u Milliye Cemiyeti (Pontus Rumlarına karşı kuruldu)" },
            { letter: "İ", word: "İzmir Müdafaa-i Hukuk / Redd-i İlhak Cemiyetleri (Yunan ilhakına karşı durdu)" }
        ],
        description: "İşgallere karşı bölgesel direnişi örgütlemek için halk tarafından kurulan vatansever cemiyetlerdir."
    },
    {
        id: "tarih_sevdeb",
        category: "tarih",
        mnemonic: "SEV DEB",
        topic: "Vilayet-i Sitte (6 Doğu İli)",
        expansion: [
            { letter: "S", word: "Sivas" },
            { letter: "E", word: "Erzurum" },
            { letter: "V", word: "Van" },
            { letter: "D", word: "Diyarbakır" },
            { letter: "E", word: "Elazığ (Harput)" },
            { letter: "B", word: "Bitlis" }
        ],
        description: "Mondros Mütarekesi'nin 24. maddesinde geçen ve 'herhangi bir karışıklık çıkarsa işgal edilecektir' denilen, Ermeni devleti kurulması hedeflenen 6 ilimizdir."
    },
    {
        id: "tarih_kabsar",
        category: "tarih",
        mnemonic: "KABSAR",
        topic: "Misak-ı Milli Kararları ve Maddeleri",
        expansion: [
            { letter: "K", word: "Kapitülasyonlar (Ekonomik ve hukuki bağımsızlık için kaldırılması şart koşuldu)" },
            { letter: "A", word: "Azınlık Hakları (Komşu ülkelerdeki Müslüman hakları kadar hak verilecektir)" },
            { letter: "B", word: "Boğazlar (İstanbul ve Marmara'nın güvenliği sağlanırsa dünya ticaretine açılabilir)" },
            { letter: "S", word: "Sınırlar (Mondros imzalandığı andaki Türk vatanı bölünmez bir bütündür)" },
            { letter: "A", word: "Araplar (Arap nüfusun yoğun olduğu bölgelerde halk oylaması yapılmalıdır)" },
            { letter: "R", word: "Referandum (Kars, Ardahan, Batum ve Batı Trakya'da gerekirse halk oylaması)" }
        ],
        description: "Son Osmanlı Mebusan Meclisi'nde kabul edilen (28 Ocak 1920) ve Türk milletinin asgari barış şartlarını belirleyen milli ant belgesidir."
    },
    {
        id: "tarih_milat",
        category: "tarih",
        mnemonic: "MİLAT",
        topic: "I. İnönü Savaşı Sonrası Gelişmeler",
        expansion: [
            { letter: "M", word: "Moskova Antlaşması (Rusya ile, Misak-ı Milli'den ilk taviz Batum verildi)" },
            { letter: "İ", word: "İstiklal Marşı'nın Kabulü (12 Mart 1921, Hamdullah Suphi Tanrıöver okudu)" },
            { letter: "L", word: "Londra Konferansı (TBMM'nin İtilaf Devletlerince hukuken tanınması)" },
            { letter: "A", word: "Afganistan ile Dostluk Antlaşması (TBMM'yi tanıyan ilk Müslüman ülke)" },
            { letter: "T", word: "Teşkilat-ı Esasiye Kanunu (1921 Anayasası'nın kabulü)" }
        ],
        description: "Düzenli ordunun kazandığı ilk askeri zafer olan I. İnönü Savaşı'ndan sonra hem ulusal hem uluslararası alanda yaşanan büyük siyasi adımlardır."
    },
    {
        id: "tarih_gmk",
        category: "tarih",
        mnemonic: "GMK",
        topic: "Doğu Sınırlarımızı Çizen Antlaşmalar",
        expansion: [
            { letter: "G", word: "Gümrü Antlaşması (Ermenilerle, TBMM'nin ilk askeri-siyasi başarısı)" },
            { letter: "M", word: "Moskova Antlaşması (Rusya ile, sınırı büyük ölçüde çizdi)" },
            { letter: "K", word: "Kars Antlaşması (Kafkas Cumhuriyetleri ile, Doğu sınırına kesin halini verdi)" }
        ],
        description: "Doğu cephesinin kapanmasını sağlayan ve doğu sınırımızı sırasıyla şekillendiren üç antlaşmanın kronolojik kodlamasıdır."
    },
    {
        id: "tarih_hirbo",
        category: "tarih",
        mnemonic: "HIRBO",
        topic: "Lozan'da Çözümlenemeyen veya Aleyhte Kalanlar",
        expansion: [
            { letter: "H", word: "Hatay Sorunu (Suriye sınırı çözülemedi, aleyhimize kaldı, 1939'da anavatana katıldı)" },
            { letter: "I", word: "Irak Sınırı / Musul Sorunu (Lozan'da çözülemeyen tek sınırdır, İngiltere ile sonradan görüşüldü)" },
            { letter: "R", word: "Rum Patrikhanesi (İstanbul dışına çıkarılamadı, imtiyazları kaldırıldı)" },
            { letter: "B", word: "Boğazlar (Başkanı Türk olan uluslararası bir komisyona bırakıldı, egemenliğe aykırı çözüldü)" },
            { letter: "O", word: "Osmanlı Borçları (Fransızlarla büyük kriz oldu, taksitler halinde ödenmesi kararlaştırıldı)" }
        ],
        description: "Lozan Barış Antlaşması sırasında tam olarak bağımsızlık ilkelerimize uygun çözülemeyen veya ertelenen dış politika konularıdır."
    },
    {
        id: "tarih_tayyar",
        category: "tarih",
        mnemonic: "TaYYaR",
        topic: "Balkan Antantı Devletleri (1934)",
        expansion: [
            { letter: "T", word: "Türkiye" },
            { letter: "Y", word: "Yunanistan" },
            { letter: "Y", word: "Yugoslavya" },
            { letter: "R", word: "Romanya" }
        ],
        description: "Almanya ve İtalya'nın yayılmacı politikalarına karşı Türkiye önderliğinde batı sınırını güvence altına almak için imzalanan ittifaktır."
    },
    {
        id: "tarih_aiit",
        category: "tarih",
        mnemonic: "A.İ.İ.T.",
        topic: "Sadabat Paktı Devletleri (1937)",
        expansion: [
            { letter: "A", word: "Afganistan" },
            { letter: "İ", word: "İran" },
            { letter: "İ", word: "Irak" },
            { letter: "T", word: "Türkiye" }
        ],
        description: "İtalya'nın Doğu Afrika'da yayılması ve Orta Doğu tehdidine karşı güney ve doğu sınırlarını korumak amacıyla kurulan pakttır."
    },

    // === COĞRAFYA CATEGORY ===
    {
        id: "cografya_kayipsakal",
        category: "cografya",
        mnemonic: "KaYıP SaKaL",
        topic: "Türkiye'yi Etkileyen Yerel Rüzgarlar",
        expansion: [
            { letter: "Ka", word: "Karayel (Kuzeybatı, soğuk ve kar getirici)" },
            { letter: "Yı", word: "Yıldız (Kuzey, doğrudan soğuk hava taşır)" },
            { letter: "P", word: "Poyraz (Kuzeydoğu, kışın dondurucu soğuk yapar)" },
            { letter: "Sa", word: "Samyeli / Keşişleme (Güneydoğu, çöl kökenli, kuru ve çok sıcaktır)" },
            { letter: "Ka", word: "Kıble (Güney, nemli ve sıcak)" },
            { letter: "L", word: "Lodos (Güneybatı, sıcak, soba zehirlenmesi rüzgarı, karları hızla eritir)" }
        ],
        description: "Kuzeybatı köşeden başlayıp saat yönünde güneybatıya kadar dönen rüzgarların yön ve karakter sıralamasıdır."
    },
    {
        id: "cografya_kirikdaglar",
        category: "cografya",
        mnemonic: "KAZ MADRA YUTTU BOZ AYI MELEDİ",
        topic: "Ege Bölgesi Kırıklı Dağları (Horstlar)",
        expansion: [
            { letter: "Kaz", word: "Kaz Dağları (Çanakkale-Balıkesir sınırı)" },
            { letter: "Madra", word: "Madra Dağı (İzmir-Balıkesir)" },
            { letter: "Yut", word: "Yunt Dağı (Manisa-İzmir)" },
            { letter: "Boz", word: "Bozdağlar (İzmir, tarım ve kayak merkezi)" },
            { letter: "Aydın", word: "Aydın Dağları (Aydın)" },
            { letter: "Mele", word: "Menteşe Dağları (Muğla, kıyıya paralel uzanan tek kırık dağ grubudur)" }
        ],
        description: "Ege Bölgesi'nde yer alan, kırılma sonucu yükselen kısımları (horst) kuzeyden güneye doğru sıralayan tekerlemedir."
    },
    {
        id: "cografya_volkanik",
        category: "cografya",
        mnemonic: "K.E.K.H.M",
        topic: "İç Anadolu Volkanik Dağları",
        expansion: [
            { letter: "K", word: "Karadağ (Karaman)" },
            { letter: "E", word: "Erciyes Dağı (Kayseri, İç Anadolu'nun en yüksek dağı)" },
            { letter: "K", word: "Karacadağ (Konya-Aksaray sınırında)" },
            { letter: "H", word: "Hasan Dağı (Aksaray)" },
            { letter: "M", word: "Melendiz Dağı (Niğde)" }
        ],
        description: "İç Anadolu Bölgesi'nde yer alan sönmüş volkan konilerinin kodlamasıdır."
    },
    {
        id: "cografya_tektonikgöller",
        category: "cografya",
        mnemonic: "BASİT MUHASEBE",
        topic: "Türkiye'nin Tektonik Gölleri",
        expansion: [
            { letter: "B", word: "Burdur Gölü (Göller yöresi, acı sulu)" },
            { letter: "A", word: "Acıgöl (Afyon-Denizli, sodyum sülfat üretilir)" },
            { letter: "S", word: "Sapanca Gölü (Marmara)" },
            { letter: "İ", word: "İznik Gölü (Bursa)" },
            { letter: "T", word: "Tuz Gölü (Rezerv olarak en büyük tuz kaynağı)" },
            { letter: "M", word: "Manyas (Kuş) Gölü (Balıkesir, kuş cenneti)" },
            { letter: "U", word: "Ulubat Gölü (Bursa)" },
            { letter: "H", word: "Hazar Gölü (Elazığ, tektonik çöküntü)" },
            { letter: "A", word: "Akşehir Gölü (Konya)" },
            { letter: "S", word: "Seyfe Gölü (Kırşehir)" },
            { letter: "E", word: "Eber Gölü (Afyon)" },
            { letter: "B", word: "Beyşehir Gölü (En büyük tatlı su gölü)" },
            { letter: "E", word: "Eğirdir Gölü (Isparta, tatlı su)" }
        ],
        description: "Yer kabuğu hareketleri (çöküntüler) sonucu oluşan çukurlarda biriken suların oluşturduğu göllerdir."
    },
    {
        id: "cografya_karstikgöller",
        category: "cografya",
        mnemonic: "KASKET",
        topic: "Türkiye'nin Karstik Gölleri",
        expansion: [
            { letter: "K", word: "Kızılören Gölü" },
            { letter: "A", word: "Avlan Gölü (Antalya)" },
            { letter: "S", word: "Salda Gölü (Burdur, beyaz kumsallarıyla ünlü)" },
            { letter: "K", word: "Kestel Gölü (Burdur)" },
            { letter: "E", word: "Elmalı Gölü (Antalya)" },
            { letter: "T", word: "Timraş Obruk Gölü (Konya)" }
        ],
        description: "Kolay eriyebilen kalker, jips gibi karstik kayaçların bulunduğu arazilerde, erime çukurlarında oluşan göllerdir."
    },
    {
        id: "cografya_heyelanset",
        category: "cografya",
        mnemonic: "UYSAT",
        topic: "Heyelan Set Gölleri",
        expansion: [
            { letter: "U", word: "Uzungöl (Trabzon)" },
            { letter: "Y", word: "Yedigöller (Bolu)" },
            { letter: "S", word: "Sera Gölü (Trabzon)" },
            { letter: "A", word: "Abant Gölü (Bolu)" },
            { letter: "T", word: "Tortum Gölü (Erzurum)" }
        ],
        description: "Dağ yamaçlarından kayan toprak kütlelerinin vadilerin önünü kapatmasıyla oluşan göllerdir, heyelan riskinin yüksek olduğu Karadeniz'de yaygındır."
    },
    {
        id: "cografya_aluvyalset",
        category: "cografya",
        mnemonic: "MEMBAK",
        topic: "Alüvyal Set Gölleri",
        expansion: [
            { letter: "M", word: "Mogan Gölü (Ankara)" },
            { letter: "E", word: "Eymir Gölü (Ankara)" },
            { letter: "M", word: "Marmara Gölü (Manisa)" },
            { letter: "B", word: "Bafa / Çamiçi Gölü (Aydın-Muğla)" },
            { letter: "A", word: "Akgöl (Sakarya)" },
            { letter: "K", word: "Köyceğiz Gölü (Muğla)" }
        ],
        description: "Akarsuların taşıdığı alüvyonların, kendi vadilerini veya yan kolları kapatmasıyla oluşan set gölleridir."
    },
    {
        id: "cografya_volkanikset",
        category: "cografya",
        mnemonic: "BaHÇEVaN",
        topic: "Volkanik Set Gölleri",
        expansion: [
            { letter: "Ba", word: "Balık Gölü (Ağrı)" },
            { letter: "H", word: "Haçlı Gölü (Muş)" },
            { letter: "Ç", word: "Çıldır Gölü (Ardahan, kışın donar)" },
            { letter: "E", word: "Erçek Gölü (Van)" },
            { letter: "Va", word: "Van Gölü (En büyük soda gölü, karma yapılıdır)" },
            { letter: "N", word: "Nazik Gölü (Bitlis)" }
        ],
        description: "Volkanik patlamalar sırasında çıkan lavların bir vadinin önünü kapatarak baraj oluşturmasıyla ortaya çıkan göllerdir. Doğu Anadolu'da yoğundur."
    },
    {
        id: "cografya_takke",
        category: "cografya",
        mnemonic: "TAKKE",
        topic: "Akdeniz Karstik Ovaları (Poljeler)",
        expansion: [
            { letter: "T", word: "Tefenni Ovası (Burdur)" },
            { letter: "A", word: "Acıpayam Ovası (Denizli)" },
            { letter: "K", word: "Korkuteli Ovası (Antalya)" },
            { letter: "K", word: "Kestel Ovası (Burdur)" },
            { letter: "E", word: "Elmalı Ovası (Antalya)" }
        ],
        description: "Eriyebilen arazilerde meydana gelen en büyük karstik aşınım şekli olan poljelerin tabanında oluşan verimli ovalardır."
    },
    {
        id: "cografya_hucob",
        category: "cografya",
        mnemonic: "HUCOB",
        topic: "İç Anadolu Platoları",
        expansion: [
            { letter: "H", word: "Haymana Platosu (Ankara, tiftik keçisi yaygındır)" },
            { letter: "U", word: "Uzunyayla Platosu (Sivas-Kayseri, en yüksek İç Anadolu platosu)" },
            { letter: "C", word: "Cihanbeyli Platosu (Konya, tahıl ambarı)" },
            { letter: "O", word: "Obruk Platosu (Konya, karstik obrukların yoğun olduğu yer)" },
            { letter: "B", word: "Bozok Platosu (Yozgat, küçükbaş hayvancılık)" }
        ],
        description: "Çevresine göre yüksekte kalmış, akarsularla yarılmış geniş düzlükler olan platoların İç Anadolu'daki temsilcileridir."
    },
    {
        id: "cografya_gecitler",
        category: "cografya",
        mnemonic: "Ç S G B",
        topic: "Akdeniz Bölgesi Geçitleri",
        expansion: [
            { letter: "Ç", word: "Çubuk Geçidi (Antalya'yı Göller Yöresi'ne bağlar)" },
            { letter: "S", word: "Sertavul Geçidi (Mersin'i İç Anadolu/Karaman'a bağlar)" },
            { letter: "G", word: "Gülek Geçidi (Adana'yı İç Anadolu'ya bağlar, en işlek olanıdır)" },
            { letter: "B", word: "Belen Geçidi (İskenderun/Hatay'ı iç kesimlere bağlar, tek kıvrım dağ olmayan geçittir)" }
        ],
        description: "Akdeniz'de Toros Dağları'nın kıyıya paralel uzanması sebebiyle, kıyı ile iç kesimler arasındaki ulaşımı sağlayan geçitlerin batıdan doğuya sıralamasıdır."
    },
    {
        id: "cografya_zuhti",
        category: "cografya",
        mnemonic: "ZÜHTİ",
        topic: "Ege Bölgesi Tarım Ürünleri",
        expansion: [
            { letter: "Z", word: "Zeytin (Yağlık ve sofralık, Ege ilk sırada)" },
            { letter: "Ü", word: "Üzüm (Kurutmalık çekirdeksiz üzümde Ege dünya birincisi)" },
            { letter: "H", word: "Haşhaş (Tıbbi amaçlı, devlet kontrolünde üretilir)" },
            { letter: "T", word: "Tütün (Kalite korunması için devlet kontrolündedir)" },
            { letter: "İ", word: "İncir (Aydın ilk sırada, dünya üretim birincisiyiz)" }
        ],
        description: "Ege Bölgesi'nin Türkiye ve dünya üretiminde en üst sıralarda yer aldığı endüstriyel tarım ürünleridir."
    },
    {
        id: "cografya_kader",
        category: "cografya",
        mnemonic: "KADER",
        topic: "Bakır Madeni Çıkarılan Yerler",
        expansion: [
            { letter: "K", word: "Kastamonu - Küre (En önemli yataklardan biri)" },
            { letter: "A", word: "Artvin - Murgul (Büyük rezerv ve işletme tesisi)" },
            { letter: "D", word: "Diyarbakır - Ergani (Güneydoğu'nun önemli yatağı)" },
            { letter: "E", word: "Elazığ - Maden (Tarihsel bakır ocağı)" },
            { letter: "R", word: "Rize - Çayeli (Karadeniz yatağı)" }
        ],
        description: "Türkiye'de elektrik-elektronik sanayinin vazgeçilmezi olan bakır madeninin ham olarak çıkarıldığı başlıca merkezlerdir."
    },
    {
        id: "cografya_simba",
        category: "cografya",
        mnemonic: "SİMBA",
        topic: "Demir Çıkarılan ve İşlenen Yerler",
        expansion: [
            { letter: "S", word: "Sivas (Divriği - En büyük demir rezervi)" },
            { letter: "İ", word: "İskenderun (Hatay - Demir-Çelik fabrikası, ithalat/ihracat kolaylığı)" },
            { letter: "M", word: "Malatya (Hekimhan/Hasançelebi - Önemli çıkarma alanı)" },
            { letter: "B", word: "Balıkesir (Edremit/Eymir)" },
            { letter: "A", word: "Adana (Feke/Saimbeyli)" }
        ],
        description: "Ağır sanayinin temel hammaddesi olan demirin çıkarıldığı önemli maden yatakları ve en büyük işleme tesisinin bulunduğu liman şehridir."
    },
    {
        id: "cografya_adem",
        category: "cografya",
        mnemonic: "ADEM",
        topic: "Krom Çıkarılan Başlıca Yerler",
        expansion: [
            { letter: "A", word: "Antalya (Çıkarım ve Ferrokrom işleme tesisi)" },
            { letter: "D", word: "Dalaman (Muğla - rezerv ve liman ihracatı)" },
            { letter: "E", word: "Elazığ (Guleman - En zengin krom yatağı)" },
            { letter: "M", word: "Muğla (Fethiye/Köyceğiz - rezerv yoğunluğu)" }
        ],
        description: "Demirin sertleştirilmesi ve paslanmaz çelik yapımında kullanılan krom madeninin yataklarıdır. Ferrokrom tesisleri Elazığ ve Antalya'dadır."
    },
    {
        id: "cografya_bebek",
        category: "cografya",
        mnemonic: "BEBEK",
        topic: "Bor Mineralleri Çıkarılan Yerler",
        expansion: [
            { letter: "B", word: "Balıkesir (Bigadiç/Susurluk)" },
            { letter: "E", word: "Eskişehir (Kırka - En büyük boraks rezervi)" },
            { letter: "B", word: "Bursa (Kestelek)" },
            { letter: "E", word: "Kütahya (Emet)" },
            { letter: "K", word: "Kütahya / Bandırma (Maden işleme tesisi Balıkesir Bandırma'dadır)" }
        ],
        description: "Geleceğin madeni olarak görülen ve dünya rezervlerinin çoğunluğu Türkiye'de bulunan bor madeninin çıkarıldığı yerlerdir."
    },
    {
        id: "cografya_kimu",
        category: "cografya",
        mnemonic: "KİM-U",
        topic: "Cıva Çıkarılan Yerler",
        expansion: [
            { letter: "K", word: "Konya (Sarayönü)" },
            { letter: "İ", word: "İzmir (Ödemiş/Karaburun)" },
            { letter: "M", word: "Manisa (Salihli)" },
            { letter: "U", word: "Uşak (Banaz)" }
        ],
        description: "Doğada sıvı halde bulunan tek metal madendir. Zehirli yapısından dolayı maden ocaklarının birçoğu kapatılmış veya kısıtlanmıştır."
    },
    {
        id: "cografya_bacakmabet",
        category: "cografya",
        mnemonic: "BaCaK MaBeT",
        topic: "İhraç Ettiğimiz Madenler",
        expansion: [
            { letter: "Ba", word: "Bakır" },
            { letter: "C", word: "Cıva" },
            { letter: "K", word: "Krom" },
            { letter: "Ma", word: "Mermer (Magnezyum / En çok gelir getiren mermerdir)" },
            { letter: "Be", word: "Bor" },
            { letter: "T", word: "Tuz" }
        ],
        description: "Türkiye'nin dış ticaretinde başka ülkelere sattığı (ihraç ettiği) madenlerin listesidir."
    },
    {
        id: "cografya_kabakdilek",
        category: "cografya",
        mnemonic: "KaBaK DiLeK",
        topic: "Akdeniz Bölgesi Madenleri",
        expansion: [
            { letter: "K", word: "Krom" },
            { letter: "B", word: "Boksit (Seydişehir/Konya - Alüminyum hammaddesi)" },
            { letter: "K", word: "Kükürt (Keçiborlu/Isparta - üretimi durduruldu)" },
            { letter: "D", word: "Demir" },
            { letter: "L", word: "Linyit" },
            { letter: "K", word: "Kurşun-Çinko" }
        ],
        description: "Akdeniz bölgesinde rezervi yüksek olan veya çıkarılan maden çeşitlerinin listesidir."
    },
    {
        id: "cografya_oha",
        category: "cografya",
        mnemonic: "OHA",
        topic: "Doğalgaz ile Çalışan Termik Santraller",
        expansion: [
            { letter: "O", word: "Ovaakça Termik Santrali (Bursa)" },
            { letter: "H", word: "Hamitabat Termik Santrali (Kırklareli - Doğalgaz çıkarımı da yapılır)" },
            { letter: "A", word: "Ambarlı Termik Santrali (İstanbul)" }
        ],
        description: "Türkiye'nin elektrik üretiminde kullandığı, ithal doğalgazın tüketim merkezlerine yakınlığı göz önüne alınarak kurulan dev santrallerdir."
    },
    {
        id: "cografya_kak",
        category: "cografya",
        mnemonic: "KAK",
        topic: "Fırat Nehri Üzerindeki Barajlar",
        expansion: [
            { letter: "K", word: "Keban Barajı (Elazığ)" },
            { letter: "A", word: "Atatürk Barajı (Şanlıurfa-Adıyaman, en büyük hidroelektrik santrali)" },
            { letter: "K", word: "Karakaya Barajı (Malatya-Elazığ sınırında)" }
        ],
        description: "Türkiye'nin en çok su taşıyan ve elektrik potansiyeli en yüksek nehri olan Fırat üzerindeki devasa HES'lerdir."
    },
    {
        id: "cografya_has",
        category: "cografya",
        mnemonic: "HAS",
        topic: "Yeşilırmak Üzerindeki Barajlar",
        expansion: [
            { letter: "H", word: "Hasan Uğurlu Barajı (Samsun)" },
            { letter: "A", word: "Almus Barajı (Tokat)" },
            { letter: "S", word: "Suat Uğurlu Barajı (Samsun)" }
        ],
        description: "Yeşilırmak nehri üzerine kurulmuş taşkın koruma ve elektrik enerjisi üretim barajlarıdır."
    },
    {
        id: "cografya_hokka",
        category: "cografya",
        mnemonic: "HoKKA",
        topic: "Kızılırmak Üzerindeki Barajlar",
        expansion: [
            { letter: "H", word: "Hirfanlı Barajı (Kırşehir)" },
            { letter: "K", word: "Kesikköprü Barajı (Ankara)" },
            { letter: "K", word: "Kapulukaya Barajı (Kırıkkale)" },
            { letter: "A", word: "Altınkaya Barajı (Samsun)" }
        ],
        description: "Türkiye sınırları içerisindeki en uzun nehir olan Kızılırmak üzerindeki baraj gölleridir."
    },

    // === VATANDAŞLIK CATEGORY ===
    {
        id: "vatandaslik_yaptirim",
        category: "vatandaslik",
        mnemonic: "C-C-T-H-D",
        topic: "Hukuk Kurallarının Yaptırımları",
        expansion: [
            { letter: "C", word: "Ceza (Hapis veya adli para cezaları)" },
            { letter: "C", word: "Cebri İcra (Devlet zoruyla yükümlülüğü yerine getirtme)" },
            { letter: "T", word: "Tazminat (Maddi veya manevi zararın ödetilmesi)" },
            { letter: "H", word: "Hükümsüzlük (Yokluk, butlan, tek taraflı bağlamazlık)" },
            { letter: "D", word: "Disiplin Cezası (Memura verilen uyarma, kınama, aylıktan kesme vb.)" }
        ],
        description: "Hukuk kurallarına aykırı davranıldığında devlet gücüyle uygulanan müeyyidelerin (yaptırımların) listesidir."
    },
    {
        id: "vatandaslik_yuksekmahkeme",
        category: "vatandaslik",
        mnemonic: "A-Y-D-U",
        topic: "Anayasal Yüksek Mahkemeler",
        expansion: [
            { letter: "A", word: "Anayasa Mahkemesi (Kanunların anayasaya uygunluğunu denetler, 15 üyedir)" },
            { letter: "Y", word: "Yargıtay (Adli yargının en üst derece mahkemesidir)" },
            { letter: "D", word: "Danıştay (İdari yargının en üst derece mahkemesidir)" },
            { letter: "U", word: "Uyuşmazlık Mahkemesi (Adli ve idari yargı uyuşmazlığını çözer)" }
        ],
        description: "1982 Anayasası'nda açıkça yüksek mahkeme olarak tanımlanan 4 organ. YSK, HSK ve Sayıştay yüksek mahkeme DEĞİLDİR."
    },
    {
        id: "vatandaslik_mgk",
        category: "vatandaslik",
        mnemonic: "SAİD",
        topic: "MGK'ya Katılan Üye Bakanlar",
        expansion: [
            { letter: "S", word: "Savunma (Milli Savunma Bakanı)" },
            { letter: "A", word: "Adalet Bakanı" },
            { letter: "İ", word: "İçişleri Bakanı" },
            { letter: "D", word: "Dışişleri Bakanı" }
        ],
        description: "Milli Güvenlik Kurulu toplantılarına katılma hakkı olan anayasal kurul üyesi bakanlardır."
    },
    {
        id: "vatandaslik_bmv",
        category: "vatandaslik",
        mnemonic: "BMV",
        topic: "Kadınların Siyasi Seçim Hakları",
        expansion: [
            { letter: "B", word: "Belediye Seçimlerine Katılma Hakkı (1930)" },
            { letter: "M", word: "Muhtar Seçme ve Seçilme Hakkı (1933)" },
            { letter: "V", word: "Vekil (Milletvekili) Seçilme Hakkı (1934)" }
        ],
        description: "Türk kadınlarına siyasal hakların verilişinin kronolojik sıralamasıdır (0-3-4 formülü)."
    },
    {
        id: "vatandaslik_aymsecim",
        category: "vatandaslik",
        mnemonic: "AYM Seçimi",
        topic: "Anayasa Mahkemesi Üye Dağılımı",
        expansion: [
            { letter: "12", word: "Cumhurbaşkanı Seçer (Yargıtay, Danıştay, YÖK, üst yöneticiler arasından)" },
            { letter: "3", word: "TBMM Seçer (Sayıştay genel kurulundan 2, baro avukatlarından 1)" },
            { letter: "15", word: "Toplam Üye Sayısı (Görev süreleri 12 yıldır, tekrar seçilemezler)" }
        ],
        description: "Anayasa Mahkemesi üyelerinin yasama ve yürütme organları arasındaki seçim paylaşım oranıdır."
    },

    // === TÜRKÇE CATEGORY ===
    {
        id: "turkce_fistikci",
        category: "turkce",
        mnemonic: "FISTIKÇI ŞAHAP",
        topic: "Sert Ünsüzler (Sertleşme Kuralı)",
        expansion: [
            { letter: "f, s, t, k, ç, ş, h, p", word: "Sert sessiz harflerdir." }
        ],
        description: "Kelime bu ünsüzlerden biriyle bittiğinde, gelen c, d, g ekleri sertleşerek ç, t, k olur. Örnek: Dolap-da -> Dolapta."
    },
    {
        id: "turkce_ketcap",
        category: "turkce",
        mnemonic: "KETÇAP",
        topic: "Ünsüz Yumuşaması Kuralı",
        expansion: [
            { letter: "p, ç, t, k", word: "Ünlü ile başlayan ek aldığında b, c, d, g/ğ harflerine dönüşürler." }
        ],
        description: "Son hecesi sert sessizle biten kelimelerin ünlü harfle karşılaşınca yumuşama kuralıdır. Örnek: Ağaç-ı -> Ağacı."
    },
    {
        id: "turkce_unludusmesi",
        category: "turkce",
        mnemonic: "AĞBUR KAROM",
        topic: "Ünlü Düşmesi Yaşayan Organlar",
        expansion: [
            { letter: "Ağ", word: "Ağız -> Ağzı" },
            { letter: "Bur", word: "Burun -> Burnu" },
            { letter: "Kar", word: "Karın -> Karnı" },
            { letter: "Om", word: "Omuz -> Omzu" }
        ],
        description: "İki heceli organ adlarımızın ünlü ile başlayan ek aldıklarında ikinci hecedeki dar ünlüyü düşürmesi kuralıdır."
    },
    {
        id: "turkce_mayismak",
        category: "turkce",
        mnemonic: "MAYIŞMAK",
        topic: "İsim-Fiil (Ad-Eylem) Ekleri",
        expansion: [
            { letter: "-ma / -me", word: "Örnek: Okuma alışkanlığı kazandı." },
            { letter: "-ış / -iş / -uş / -üş", word: "Örnek: Onun bakışı çok farklı." },
            { letter: "-mak / -mek", word: "Örnek: Yazmak en büyük tutkusudur." }
        ],
        description: "Fiillere gelerek onları cümlede isim durumuna getiren eylemsi ekleridir."
    },
    {
        id: "turkce_anasimezar",
        category: "turkce",
        mnemonic: "ANASI MEZAR DİKECEKMİŞ",
        topic: "Sıfat-Fiil (Ortaç) Ekleri",
        expansion: [
            { letter: "-an / -en", word: "Örnek: Çalışan demir pas tutmaz." },
            { letter: "-ası / -esi", word: "Örnek: Yıkılası dağlar." },
            { letter: "-mez / -maz", word: "Örnek: Görünmez kazalara dikkat edin." },
            { letter: "-ar / -er / -ır", word: "Örnek: Koşar adımlarla uzaklaştı." },
            { letter: "-dik / -dık / -duk", word: "Örnek: Bildik simalarla karşılaştık." },
            { letter: "-ecek / -acak", word: "Örnek: Gelecek günlerimiz parlak." },
            { letter: "-miş / -müş", word: "Örnek: Sararmış yapraklar yollara döküldü." }
        ],
        description: "Fiilleri sıfat tamlaması yapacak şekilde sıfat görevine sokan fiilimsi ekleridir."
    },
    {
        id: "turkce_zarffiil",
        category: "turkce",
        mnemonic: "Ali madan dağında...",
        topic: "Zarf-Fiil (Ulaç) Ekleri Cümlesi",
        expansion: [
            { letter: "-alı / -madan / -diğinde", word: "Eylem bildiren durum belirteçleri" },
            { letter: "-ken / -ince / -ip / -arak", word: "Zaman ve tarz bildiren ulaçlar" },
            { letter: "-meksizin / -dikçe / -e...-a / -r...-mez", word: "Koşul ve devamlılık bildiren zarf-fiiller" }
        ],
        description: "Zarf-fiil eklerini ezberleten tekerleme cümlesidir: 'Ali madan dağında yaramazken ince ip atarak incelmeksizin dikçe durdu' veya 'Kenya'lı Asiye ince ipi araklamadan gitti'."
    },
    {
        id: "tarih_erzurum_katilan",
        category: "tarih",
        mnemonic: "BEST-VAN",
        topic: "Erzurum Kongresi'ne Delege Gönderen İller",
        expansion: [
            { letter: "B", word: "Bitlis" },
            { letter: "E", word: "Erzurum" },
            { letter: "S", word: "Sivas" },
            { letter: "T", word: "Trabzon" },
            { letter: "VAN", word: "Van" }
        ],
        description: "Erzurum Kongresi'ne delege/temsilci gönderen ve kongrenin toplanmasında aktif rol alan Doğu Anadolu ve Karadeniz illeridir."
    },
    {
        id: "tarih_erzurum_katilmayan",
        category: "tarih",
        mnemonic: "DEM",
        topic: "Erzurum Kongresi'ne Delege Gönderemeyen İller",
        expansion: [
            { letter: "D", word: "Diyarbakır" },
            { letter: "E", word: "Elazığ" },
            { letter: "M", word: "Mardin" }
        ],
        description: "Elazığ Valisi Ali Galip'in engellemeleri, işgaller ve ulaşım zorlukları nedeniyle Erzurum Kongresi'ne delege gönderemeyen Doğu illeridir."
    },
    {
        id: "tarih_berlin_bagimsiz",
        category: "tarih",
        mnemonic: "SAKAR",
        topic: "Berlin Antlaşması ile Bağımsız Olanlar (1878)",
        expansion: [
            { letter: "S", word: "Sırbistan" },
            { letter: "K", word: "Karadağ" },
            { letter: "R", word: "Romanya" }
        ],
        description: "93 Harbi (1877-1878 Osmanlı-Rus Savaşı) sonrası imzalanan Berlin Antlaşması ile Osmanlı Devleti'nden ayrılarak bağımsızlığını kazanan devletlerdir. (A harfleri dolgudur)."
    },
    {
        id: "tarih_evliyeiselase",
        category: "tarih",
        mnemonic: "KAB",
        topic: "Berlin Antlaşması ile Kaybedilen Üç İl (Evliye-i Selase)",
        expansion: [
            { letter: "K", word: "Kars" },
            { letter: "A", word: "Ardahan" },
            { letter: "B", word: "Batum" }
        ],
        description: "Osmanlı Devleti'nin 93 Harbi tazminatı karşılığında Rusya'ya bırakmak zorunda kaldığı, 'üç vilayet' anlamına gelen doğu illerimizdir."
    },
    {
        id: "tarih_ataturk_gazete",
        category: "tarih",
        mnemonic: "AHİM (MİHA)",
        topic: "Atatürk'ün Rol Aldığı Basın-Yayın Organları",
        expansion: [
            { letter: "A", word: "Anadolu Ajansı (Halide Edip ve Yunus Nadi ile kurdurdu)" },
            { letter: "H", word: "Hakimiyet-i Milliye (TBMM'nin yarı resmi yayın organı)" },
            { letter: "İ", word: "İrade-i Milliye (Sivas Kongresi'nde çıkarılan ilk ulusal gazete)" },
            { letter: "M", word: "Minber (Fethi Okyar ile İstanbul'da çıkardığı gazete)" }
        ],
        description: "Mustafa Kemal Atatürk'ün işgallere karşı milli bilinci uyandırmak ve mücadeleyi duyurmak için desteklediği veya bizzat çıkardığı gazetelerdir."
    },
    {
        id: "tarih_amasya_imza",
        category: "tarih",
        mnemonic: "MASKAR",
        topic: "Amasya Genelgesi'ni İmzalayan ve Onaylayanlar",
        expansion: [
            { letter: "M", word: "Mustafa Kemal Paşa (İmzaladı)" },
            { letter: "A", word: "Ali Fuat Cebesoy (İmzaladı)" },
            { letter: "K", word: "Kazım Karabekir (Erzurum'dan telgrafla onayladı)" },
            { letter: "A", word: "Mersinli Cemal Paşa (Konya'dan telgrafla onayladı)" },
            { letter: "R", word: "Rauf Orbay / Refet Bele (İmzaladılar)" }
        ],
        description: "Milli Mücadele'nin ihtilal beyannamesi olan Amasya Genelgesi'ne (22 Haziran 1919) imza ve onay vererek hareketi kişisellikten çıkaran komutanlardır."
    },
    {
        id: "cografya_petrolrafineri",
        category: "cografya",
        mnemonic: "İBİMK",
        topic: "Türkiye'deki Petrol Rafinerileri",
        expansion: [
            { letter: "İ", word: "İzmit - İpraş (Tüketim merkezine yakınlık / Ulaşım)" },
            { letter: "B", word: "Batman (Yerli hammaddeye yakınlık)" },
            { letter: "İ", word: "İzmir - Aliağa (Ulaşım ve liman kolaylığı)" },
            { letter: "M", word: "Mersin - Ataş (Şu an sadece depolama ve ithalat terminali olarak kullanılır)" },
            { letter: "K", word: "Kırıkkale - Orta Anadolu (Boru hattı bağlantılı / Güvenli iç bölge)" }
        ],
        description: "Batman dışındaki tüm rafineriler pazar, ulaşım veya stratejik konum avantajları nedeniyle kıyılara veya iç bölgelere kurulmuştur."
    },
    {
        id: "cografya_boksityatak",
        category: "cografya",
        mnemonic: "S - A - M - P",
        topic: "Boksit (Alüminyum) Çıkarılan Yerler",
        expansion: [
            { letter: "S", word: "Seydişehir (Konya - Türkiye'nin tek alüminyum fabrikası buradadır)" },
            { letter: "A", word: "Akseki (Antalya - Önemli bir boksit yatağı)" },
            { letter: "M", word: "Milas (Muğla)" },
            { letter: "P", word: "Payas (Hatay)" }
        ],
        description: "Hafif ve dayanıklı bir metal olan alüminyumun hammaddesi olan boksitin çıkarıldığı başlıca sahalardır."
    },
    {
        id: "cografya_sinir_sta",
        category: "cografya",
        mnemonic: "STA",
        topic: "Gürcistan Sınır Kapılarımız",
        expansion: [
            { letter: "S", word: "Sarp Sınır Kapısı (Artvin - En işlek olanı)" },
            { letter: "T", word: "Türkgözü Sınır Kapısı (Ardahan)" },
            { letter: "A", word: "Aktaş Sınır Kapısı (Ardahan)" }
        ],
        description: "Kuzeydoğu komşumuz Gürcistan ile kara yolu bağlantımızı ve Kafkasya ticaretini sağlayan sınır kapılarımızdır."
    },
    {
        id: "cografya_sinir_guke",
        category: "cografya",
        mnemonic: "GÜK-E",
        topic: "İran Sınır Kapılarımız",
        expansion: [
            { letter: "GÜ", word: "Gürbulak Sınır Kapısı (Ağrı - En işlek İran kapısı)" },
            { letter: "K", word: "Kapıköy Sınır Kapısı (Van - Demiryolu geçişi de vardır)" },
            { letter: "E", word: "Esendere Sınır Kapısı (Hakkari)" }
        ],
        description: "Doğu sınırımızda yer alan komşumuz İran ile ticari ve beşeri geçişleri sağlayan sınır kapılarıdır."
    },
    {
        id: "cografya_sinir_hud",
        category: "cografya",
        mnemonic: "HÜD",
        topic: "Irak Sınır Kapılarımız",
        expansion: [
            { letter: "H", word: "Habur Sınır Kapısı (Şırnak - En yüksek ticaret hacmine sahip kapı)" },
            { letter: "Ü", word: "Üzümlü Sınır Kapısı (Hakkari)" },
            { letter: "D", word: "Derecik Sınır Kapısı (Hakkari)" }
        ],
        description: "Irak ile ticaretimizi sağlayan, özellikle Habur kapısı üzerinden Orta Doğu'ya açılan ticaret yollarımızdır."
    },
    {
        id: "vatandaslik_kamuhukuku",
        category: "vatandaslik",
        mnemonic: "CİVİYAD",
        topic: "Kamu Hukuku Dalları",
        expansion: [
            { letter: "C", word: "Ceza Hukuku" },
            { letter: "İ", word: "İdare Hukuku" },
            { letter: "V", word: "Vergi Hukuku" },
            { letter: "İ", word: "İcra ve İflas Hukuku" },
            { letter: "Y", word: "Yargılama Hukuku" },
            { letter: "A", word: "Anayasa Hukuku" },
            { letter: "D", word: "Devletler Genel Hukuku" }
        ],
        description: "Devletin egemenlik hakkına dayanarak kamu gücüyle taraf olduğu ve dikey (ast-üst) ilişkileri düzenleyen hukuk dalları bütünüdür."
    },
    {
        id: "vatandaslik_ozehukuk",
        category: "vatandaslik",
        mnemonic: "M-B-T-D",
        topic: "Özel Hukuk Dalları",
        expansion: [
            { letter: "M", word: "Medeni Hukuk" },
            { letter: "B", word: "Borçlar Hukuku" },
            { letter: "T", word: "Ticaret Hukuku" },
            { letter: "D", word: "Devletler Özel Hukuku" }
        ],
        description: "Kişilerin veya kurumların eşit şartlar altında kendi aralarında kurdukları yatay ilişkileri düzenleyen hukuk dallarıdır."
    },
    {
        id: "turkce_yazim_seyler",
        category: "turkce",
        mnemonic: "ŞEY Her Zaman Ayrı",
        topic: "'Şey' Sözcüğünün Yazılışı",
        expansion: [
            { letter: "Ş", word: "Şey sözcüğü her zaman ayrı yazılır." },
            { letter: "E", word: "Ek değildir, başlı başına zamirdir." },
            { letter: "Y", word: "Yanına gelen tüm sözcüklerle mesafelidir." }
        ],
        description: "Yazım kurallarında en sık yapılan hatalardan biridir. 'Her şey', 'bir şey', 'hiçbir şey', 'çok şey' örneklerinde olduğu gibi 'şey' daima ayrı yazılır."
    },
    {
        id: "turkce_daralma_istisnalar",
        category: "turkce",
        mnemonic: "D - Y - N",
        topic: "-yor Eki Almadan Daralan İstisnai Fiiller",
        expansion: [
            { letter: "D", word: "Diye (Demek fiilinden, zarf-fiil ekiyle daralmıştır)" },
            { letter: "Y", word: "Yiyecek (Yemek fiilinden, gelecek zaman sıfat-fiil ekiyle daralmıştır)" },
            { letter: "N", word: "Niye (Ne soru zamirinden türetilirken daralmıştır)" }
        ],
        description: "Türkçede ünlü daralması kuralı genel olarak sadece şimdiki zaman eki '-yor' ile sağlanır. Bu üç kelime, '-yor' eki almadığı halde daralmaya uğrayan yegane istisnalardır."
    },
    {
        id: "cografya_ruzgar_asinim",
        category: "cografya",
        mnemonic: "METYŞ",
        topic: "Rüzgar Aşınım Şekilleri",
        expansion: [
            { letter: "M", word: "Mantar Kaya (Şeytan Masası)" },
            { letter: "E", word: "Hamada (Çöl Kaldırımı)" },
            { letter: "T", word: "Tafoni (Kayalardaki küçük oyuklar)" },
            { letter: "Y", word: "Yardang (Rüzgar yönüne paralel U oluklar)" },
            { letter: "Ş", word: "Şahit Kaya (Dirençli dik tepecikler)" }
        ],
        description: "Kurak ve yarı kurak bölgelerde rüzgarların kayaları çarparak aşındırmasıyla oluşan şekillerdir. Türkiye'de en çok Konya-Karapınar ve Güneydoğu Anadolu'da görülür."
    },
    {
        id: "cografya_ruzgar_birikim",
        category: "cografya",
        mnemonic: "KBL (Kabul)",
        topic: "Rüzgar Birikim Şekilleri",
        expansion: [
            { letter: "K", word: "Kumul (Kum tepeleri)" },
            { letter: "B", word: "Barkan (Hilal şeklindeki kum birikintileri)" },
            { letter: "L", word: "Lös (Rüzgarın taşıyıp yığdığı verimli toprak)" }
        ],
        description: "Rüzgar gücünün azaldığı veya engelle karşılaştığı sahalarda taşıdığı ince materyali yığmasıyla oluşan birikim şekilleridir."
    },
    {
        id: "cografya_karstik_asinim",
        category: "cografya",
        mnemonic: "LUDOP (LADUP)",
        topic: "Karstik Aşınım Şekilleri (Küçükten Büyüğe)",
        expansion: [
            { letter: "L", word: "Lapya (En küçük karstik aşınım çukuru)" },
            { letter: "U", word: "Uvala (Dolinlerin birleşmesiyle oluşan orta boy çukur)" },
            { letter: "D", word: "Dolin (Lapyaların genişlemesiyle oluşan çukurlar)" },
            { letter: "O", word: "Obruk (Mağara tavanlarının çökmesiyle oluşan dikey derin kuyu)" },
            { letter: "P", word: "Polje (En büyük karstik çöküntü / Göller Yöresi karstik ovaları)" }
        ],
        description: "Karstik eriyebilen arazilerde (kalker, jips, kaya tuzu) kimyasal aşınma sonucu oluşan çukurlukların küçükten büyüğe sıralamasıdır."
    },
    {
        id: "cografya_dalga_birikim",
        category: "cografya",
        mnemonic: "KİLO-T",
        topic: "Dalga Birikim Şekilleri",
        expansion: [
            { letter: "K", word: "Kıyı Oku (Kıyıdan açığa uzanan birikintiler)" },
            { letter: "L", word: "Lagün (Deniz Kulağı gölü - Terkos, B.Çekmece vb.)" },
            { letter: "O", word: "Kıyı Kordonu (Koyun önünü kapatan set)" },
            { letter: "T", word: "Tombolo (Saplı Ada - Kapıdağ Yarımadası ve Sinop)" }
        ],
        description: "Dalgaların kıta sahanlığının geniş ve sığ olduğu kıyılarda taşıdığı kumları biriktirmesiyle oluşturduğu şekillerdir. (İ harfi dolgu harfidir)."
    },
    {
        id: "cografya_kiyitipleri",
        category: "cografya",
        mnemonic: "BEDRİ L (BEDRİ LAKAPLI)",
        topic: "Türkiye'de Görülen Kıyı Tipleri",
        expansion: [
            { letter: "B", word: "Boyuna Kıyı Tipi (Karadeniz ve Akdeniz - dağlar kıyıya paralel)" },
            { letter: "E", word: "Enine Kıyı Tipi (Ege Bölgesi - dağlar kıyıya dik)" },
            { letter: "D", word: "Dalmaçya Kıyı Tipi (Finike-Kaş çevresi - dağ aralarının sularla dolması)" },
            { letter: "R", word: "Ria Kıyı Tipi (İstanbul-Çanakkale Boğazları, Haliç, Muğla-Gökova)" },
            { letter: "L", word: "Limanlı Kıyı Tipi (Büyük ve Küçük Çekmece kıyı set gölleri)" }
        ],
        description: "Epirojenez ve dağ uzanışına göre Türkiye kıyılarında şekillenen kıyı türleridir. (Kalanklı kıyı tipi de Mersin-Silifke arasında karstik kanyonların dolmasıyla görülür. Fiyort ve Haliç ise görülmez!)."
    },
    {
        id: "cografya_delta_ovalari",
        category: "cografya",
        mnemonic: "Deltalar",
        topic: "Türkiye'nin Başlıca Delta Ovaları ve Nehirleri",
        expansion: [
            { letter: "Bafra", word: "Kızılırmak tarafından Karadeniz kıyısında oluşturulmuştur." },
            { letter: "Çarşamba", word: "Yeşilırmak tarafından Karadeniz kıyısında oluşturulmuştur." },
            { letter: "Menemen", word: "Gediz Nehri tarafından Ege kıyısında oluşturulmuştur." },
            { letter: "Balat", word: "Büyük Menderes tarafından Ege kıyısında oluşturulmuştur." },
            { letter: "Selçuk", word: "Küçük Menderes tarafından Ege kıyısında oluşturulmuştur." },
            { letter: "Çukurova", word: "Seyhan ve Ceyhan nehirlerince Akdeniz'de oluşturulan en büyük deltamızdır." },
            { letter: "Silifke", word: "Göksu Nehri tarafından Akdeniz kıyısında oluşturulmuştur." }
        ],
        description: "Gel-git genliğinin az ve kıta sahanlığının geniş olduğu kıyılarda akarsu alüvyonlarının denizde birikmesiyle oluşan son derece verimli tarım ovalarıdır."
    }
];

// Application States
let currentMode = 'dashboard';
let currentCategory = 'all';
let searchQuery = '';
let favoriteCardIds = JSON.parse(localStorage.getItem('kpss_favorites') || '[]');

// Carousel state
let studyCards = [...mnemonicsDatabase];
let currentStudyIndex = 0;

// Quiz State
let quizCards = [];
let currentQuizIndex = 0;
let quizCorrectCount = 0;
let quizIncorrectCount = 0;
let isQuizAnswerRevealed = false;

// Initial Setup on Page Load
document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    updateDashboard();
    updateStatsBadge();
});

// Theme System Initialization
function initTheme() {
    const savedTheme = localStorage.getItem('kpss_theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeButtonUI(savedTheme);

    const toggleBtn = document.getElementById("theme-toggle");
    toggleBtn.addEventListener("click", () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('kpss_theme', newTheme);
        updateThemeButtonUI(newTheme);
    });
}

function updateThemeButtonUI(theme) {
    const textSpan = document.querySelector(".theme-text");
    if (theme === 'dark') {
        textSpan.textContent = "Açık Tema";
    } else {
        textSpan.textContent = "Koyu Tema";
    }
}

// Navigation and Mode Switching
function switchMode(mode) {
    currentMode = mode;
    
    // Update navigation button active state
    document.querySelectorAll(".nav-btn").forEach(btn => btn.classList.remove("active"));
    document.getElementById(`btn-${mode}`).classList.add("active");

    // Hide all sections, show active section
    document.querySelectorAll(".content-section").forEach(sec => sec.classList.remove("active"));
    document.getElementById(`mode-${mode}`).classList.add("active");

    // Title and stats header updates
    const pageTitle = document.getElementById("page-title");
    const pageDesc = document.getElementById("page-desc");

    if (mode === 'dashboard') {
        pageTitle.textContent = "KPSS Hafıza Kartları";
        pageDesc.textContent = "Tüm konulara ait kodlamalar ve hızlı ezber kartları.";
        updateDashboard();
    } else if (mode === 'study') {
        pageTitle.textContent = "Çalışma Odası";
        pageDesc.textContent = "Kartları sırasıyla inceleyerek görsel hafızanızı güçlendirin.";
        initStudyMode();
    } else if (mode === 'quiz') {
        pageTitle.textContent = "Hafıza Testi";
        pageDesc.textContent = "Kendinizi test edin ve ezber durumunuzu kontrol edin.";
        resetQuizSetup();
    } else if (mode === 'literature') {
        pageTitle.textContent = "Edebi Eserler";
        pageDesc.textContent = "Kurtuluş Savaşı ve Milli Mücadele dönemi eser-yazar eşleşmeleri.";
        initLiteratureMode();
    } else if (mode === 'history-guide') {
        pageTitle.textContent = "Tarih Çalışma Rehberi";
        pageDesc.textContent = "Zaman tüneli kronoloji oyunu, Atatürk ilkeleri, Osmanlı Divan kadroları ve önemli terimler.";
        initHistoryGuideMode();
    } else if (mode === 'citizenship') {
        pageTitle.textContent = "Vatandaşlık Rehberi";
        pageDesc.textContent = "Vatandaşlık dersi için kritik üye sayıları, yaş sınırları, süreler ve atama makamları.";
        initCitizenshipMode();
    } else if (mode === 'culture') {
        pageTitle.textContent = "Güncel Bilgiler";
        pageDesc.textContent = "UNESCO miras listesi, milli parklar, rekorlar ve uluslararası kuruluşlar.";
        initCultureMode();
    } else if (mode === 'custom-notes') {
        pageTitle.textContent = "ED10 Özel Notlarım";
        pageDesc.textContent = "Kişisel ders notlarınız ve bu notlardan hazırlanan özel tarih sınavı.";
        initCustomNotesMode();
    } else if (mode === 'exam-mock') {
        pageTitle.textContent = "KPSS Genel Yetenek & Genel Kültür Deneme Sınavı";
        pageDesc.textContent = "120 Soru • 130 Dakika • ÖSYM Gerçek Sınav Formatı • Kalem & Optik Form Destekli";
        initExamMockMode();
    } else if (mode === 'favorites') {
        pageTitle.textContent = "Favorilerim";
        pageDesc.textContent = "Tekrar etmek için işaretlediğiniz özel şifreli notlar.";
        updateFavoritesView();
    }
}

// Update Global Stats Badge
function updateStatsBadge() {
    document.getElementById("total-cards-count").textContent = mnemonicsDatabase.length;
}

// Favorite bookmarking functions
function toggleFavorite(cardId, event) {
    if (event) event.stopPropagation(); // Avoid card flipping
    
    const index = favoriteCardIds.indexOf(cardId);
    if (index === -1) {
        favoriteCardIds.push(cardId);
    } else {
        favoriteCardIds.splice(index, 1);
    }
    localStorage.setItem('kpss_favorites', JSON.stringify(favoriteCardIds));
    
    // Refresh views to show updated heart state
    if (currentMode === 'dashboard') {
        updateDashboard();
    } else if (currentMode === 'favorites') {
        updateFavoritesView();
    } else if (currentMode === 'study') {
        updateStudyCardButtons();
    }
}

// 3D Card Flip Handler
function toggleCardFlip(cardElement) {
    cardElement.classList.toggle("flipped");
}

// Render dynamic card function
function createCardHTML(cardData) {
    const isFav = favoriteCardIds.includes(cardData.id);
    const favIcon = isFav ? '❤️' : '🤍';
    
    // Generate expansions
    let expansionHTML = '';
    cardData.expansion.forEach(item => {
        expansionHTML += `<li><strong>${item.letter}</strong> - ${item.word}</li>`;
    });

    return `
    <div class="flashcard-wrapper card-${cardData.category}">
        <div class="flashcard" onclick="toggleCardFlip(this)">
            <!-- FRONT SIDE -->
            <div class="card-face card-front">
                <div class="card-header-row">
                    <span class="category-badge">${cardData.category}</span>
                    <button class="fav-btn" onclick="toggleFavorite('${cardData.id}', event)" title="Favorilere Ekle/Çıkar">${favIcon}</button>
                </div>
                <div class="card-body-front">
                    <h2 class="mnemonic-display">${cardData.mnemonic}</h2>
                    <p class="topic-title">${cardData.topic}</p>
                </div>
                <div class="card-footer">
                    <span>${cardData.description.substring(0, 30)}...</span>
                    <span class="click-hint">Aç 🔍</span>
                </div>
            </div>
            <!-- BACK SIDE -->
            <div class="card-face card-back">
                <div class="card-back-header">
                    <span class="card-back-title">${cardData.mnemonic}</span>
                    <button class="fav-btn" onclick="toggleFavorite('${cardData.id}', event)" title="Favorilere Ekle/Çıkar">${favIcon}</button>
                </div>
                <ul class="card-expansion-list">
                    ${expansionHTML}
                </ul>
                <div class="card-extra-info">
                    ${cardData.description}
                </div>
                <div class="card-footer" style="margin-top: 0.5rem; justify-content: flex-end;">
                    <span class="click-hint" style="color: var(--text-muted)">Kapat ↩</span>
                </div>
            </div>
        </div>
    </div>`;
}

// Dashboard rendering and filtering
function updateDashboard() {
    const grid = document.getElementById("cards-grid");
    const noResults = document.getElementById("no-results");
    
    // Filter database
    const filtered = mnemonicsDatabase.filter(card => {
        const matchesCategory = currentCategory === 'all' || card.category === currentCategory;
        const matchesSearch = searchQuery === '' || 
            card.mnemonic.toLowerCase().includes(searchQuery) ||
            card.topic.toLowerCase().includes(searchQuery) ||
            card.description.toLowerCase().includes(searchQuery);
        return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
        grid.innerHTML = '';
        noResults.classList.remove("hidden");
    } else {
        noResults.classList.add("hidden");
        grid.innerHTML = filtered.map(card => createCardHTML(card)).join('');
    }
}

function handleSearch() {
    searchQuery = document.getElementById("search-input").value.toLowerCase().trim();
    updateDashboard();
}

function filterCategory(category) {
    currentCategory = category;
    
    // Update active tab styling
    document.querySelectorAll(".filter-tab").forEach(tab => {
        if (tab.getAttribute("data-category") === category) {
            tab.classList.add("active");
        } else {
            tab.classList.remove("active");
        }
    });

    updateDashboard();
}

// Favorites Mode Rendering
function updateFavoritesView() {
    const grid = document.getElementById("favorites-grid");
    const noFavorites = document.getElementById("no-favorites");
    
    const favs = mnemonicsDatabase.filter(card => favoriteCardIds.includes(card.id));

    if (favs.length === 0) {
        grid.innerHTML = '';
        noFavorites.classList.remove("hidden");
    } else {
        noFavorites.classList.add("hidden");
        grid.innerHTML = favs.map(card => createCardHTML(card)).join('');
    }
}

// === STUDY MODE LOGIC ===
function initStudyMode() {
    studyCards = [...mnemonicsDatabase];
    currentStudyIndex = 0;
    renderStudyCard();
}

function renderStudyCard() {
    const studyCardElement = document.getElementById("study-flashcard");
    // Remove flip style before loading next card
    studyCardElement.classList.remove("flipped");

    if (studyCards.length === 0) {
        document.getElementById("study-front").innerHTML = "<h3>Kart bulunamadı.</h3>";
        document.getElementById("study-back").innerHTML = "<h3>Kart bulunamadı.</h3>";
        return;
    }

    const card = studyCards[currentStudyIndex];
    
    // Generate expansions
    let expansionHTML = '';
    card.expansion.forEach(item => {
        expansionHTML += `<li><strong>${item.letter}</strong> - ${item.word}</li>`;
    });

    // Color theme class injection
    studyCardElement.className = `flashcard card-${card.category}`;

    document.getElementById("study-front").innerHTML = `
        <div class="card-header-row">
            <span class="category-badge">${card.category}</span>
        </div>
        <div class="card-body-front">
            <h2 class="mnemonic-display" style="font-size: 2.8rem;">${card.mnemonic}</h2>
            <p class="topic-title">${card.topic}</p>
        </div>
        <div class="card-footer">
            <span>Açılım için tıklayın</span>
            <span class="click-hint">Çevir 🔄</span>
        </div>
    `;

    document.getElementById("study-back").innerHTML = `
        <div class="card-back-header">
            <span class="card-back-title" style="font-size: 1.1rem;">${card.mnemonic}</span>
            <span class="category-badge">${card.category}</span>
        </div>
        <ul class="card-expansion-list" style="gap: 0.6rem; margin-bottom: 1rem;">
            ${expansionHTML}
        </ul>
        <div class="card-extra-info" style="font-size: 0.85rem; padding: 0.8rem;">
            ${card.description}
        </div>
        <div class="card-footer" style="margin-top: 0.5rem;">
            <span>Geri çevirmek için tıklayın</span>
            <span class="click-hint" style="color: var(--text-muted)">Kapat ↩</span>
        </div>
    `;

    // Progress bar & text
    const total = studyCards.length;
    const current = currentStudyIndex + 1;
    const pct = (current / total) * 100;
    
    document.getElementById("study-progress-bar").style.width = `${pct}%`;
    document.getElementById("study-progress-text").textContent = `Kart: ${current} / ${total}`;

    updateStudyCardButtons();
}

function updateStudyCardButtons() {
    if (studyCards.length === 0) return;
    const card = studyCards[currentStudyIndex];
    const isFav = favoriteCardIds.includes(card.id);
    const favBtn = document.querySelector(".study-action-btn.secondary-btn");
    
    if (isFav) {
        favBtn.innerHTML = `<span>❤️</span> Favorilerden Çıkar`;
    } else {
        favBtn.innerHTML = `<span>🤍</span> Favorilere Ekle`;
    }
}

function toggleFavoriteCurrentStudyCard() {
    if (studyCards.length === 0) return;
    const card = studyCards[currentStudyIndex];
    toggleFavorite(card.id);
}

function studyNextCard() {
    if (studyCards.length === 0) return;
    currentStudyIndex = (currentStudyIndex + 1) % studyCards.length;
    renderStudyCard();
}

function studyPrevCard() {
    if (studyCards.length === 0) return;
    currentStudyIndex = (currentStudyIndex - 1 + studyCards.length) % studyCards.length;
    renderStudyCard();
}

// === INTERACTIVE QUIZ MODE LOGIC ===
function resetQuizSetup() {
    document.getElementById("quiz-setup").classList.remove("hidden");
    document.getElementById("quiz-active").classList.add("hidden");
    document.getElementById("quiz-results").classList.add("hidden");

    // Setup checkbox click styles helper
    const checkBoxes = ["tarih", "cografya", "vatandaslik", "turkce"];
    checkBoxes.forEach(cat => {
        const el = document.getElementById(`quiz-cat-${cat}`);
        const parent = el.closest(".checkbox-card");
        
        el.onchange = () => {
            if (el.checked) {
                parent.classList.add("checked");
            } else {
                parent.classList.remove("checked");
            }
        };
    });
}

function startQuiz() {
    // 1. Gather active categories
    const categories = [];
    if (document.getElementById("quiz-cat-tarih").checked) categories.push("tarih");
    if (document.getElementById("quiz-cat-cografya").checked) categories.push("cografya");
    if (document.getElementById("quiz-cat-vatandaslik").checked) categories.push("vatandaslik");
    if (document.getElementById("quiz-cat-turkce").checked) categories.push("turkce");

    if (categories.length === 0) {
        alert("Lütfen en az bir ders kategorisi seçiniz.");
        return;
    }

    // 2. Filter database
    let pool = mnemonicsDatabase.filter(c => categories.includes(c.category));
    
    if (pool.length === 0) {
        alert("Seçilen kategorilerde kart bulunamadı.");
        return;
    }

    // 3. Shuffle pool (Fisher-Yates)
    for (let i = pool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pool[i], pool[j]] = [pool[j], pool[i]];
    }

    // 4. Set limit
    const limitVal = document.querySelector('input[name="quiz-limit"]:checked').value;
    let limit = pool.length;
    if (limitVal === "10") limit = Math.min(10, pool.length);
    else if (limitVal === "20") limit = Math.min(20, pool.length);

    quizCards = pool.slice(0, limit);

    // 5. Initialize stats
    currentQuizIndex = 0;
    quizCorrectCount = 0;
    quizIncorrectCount = 0;

    // 6. Switch states
    document.getElementById("quiz-setup").classList.add("hidden");
    document.getElementById("quiz-active").classList.remove("hidden");
    document.getElementById("quiz-results").classList.add("hidden");

    renderQuizQuestion();
}

function renderQuizQuestion() {
    isQuizAnswerRevealed = false;
    
    // Reset actions buttons
    document.getElementById("quiz-pre-reveal-actions").classList.remove("hidden");
    document.getElementById("quiz-post-reveal-actions").classList.add("hidden");
    document.getElementById("quiz-instruction").textContent = "Açılımı hatırlamaya çalışın ve ardından cevabı kontrol edin!";

    const card = quizCards[currentQuizIndex];
    const quizCardElement = document.getElementById("quiz-flashcard");
    quizCardElement.classList.remove("flipped");
    quizCardElement.className = `flashcard card-${card.category}`;

    // Header stats
    document.getElementById("quiz-question-number").textContent = `Soru: ${currentQuizIndex + 1} / ${quizCards.length}`;
    document.getElementById("quiz-score-correct").textContent = quizCorrectCount;
    document.getElementById("quiz-score-incorrect").textContent = quizIncorrectCount;

    // Generate expansions
    let expansionHTML = '';
    card.expansion.forEach(item => {
        expansionHTML += `<li><strong>${item.letter}</strong> - ${item.word}</li>`;
    });

    document.getElementById("quiz-front").innerHTML = `
        <div class="card-header-row">
            <span class="category-badge">${card.category}</span>
        </div>
        <div class="card-body-front">
            <h2 class="mnemonic-display" style="font-size: 2.8rem;">${card.mnemonic}</h2>
            <p class="topic-title" style="margin-top:0.5rem;">Bu şifrenin açılımı nedir?</p>
        </div>
        <div class="card-footer" style="justify-content: center;">
            <span class="click-hint">Çevirip Öğren 🔄</span>
        </div>
    `;

    document.getElementById("quiz-back").innerHTML = `
        <div class="card-back-header">
            <span class="card-back-title" style="font-size: 1.1rem;">${card.mnemonic} (Cevap)</span>
            <span class="category-badge">${card.category}</span>
        </div>
        <ul class="card-expansion-list" style="gap: 0.6rem; margin-bottom: 1rem;">
            ${expansionHTML}
        </ul>
        <div class="card-extra-info" style="font-size: 0.85rem; padding: 0.8rem;">
            ${card.description}
        </div>
    `;
}

function quizRevealAnswer() {
    if (isQuizAnswerRevealed) return;
    isQuizAnswerRevealed = true;

    // Flip card
    document.getElementById("quiz-flashcard").classList.add("flipped");

    // Toggle action buttons
    document.getElementById("quiz-pre-reveal-actions").classList.add("hidden");
    document.getElementById("quiz-post-reveal-actions").classList.remove("hidden");
    document.getElementById("quiz-instruction").textContent = "Cevabınız doğru muydu? Aşağıdaki butonlarla işaretleyin.";
}

function submitQuizAnswer(isCorrect) {
    if (isCorrect) {
        quizCorrectCount++;
    } else {
        quizIncorrectCount++;
    }

    // Go to next or finish
    if (currentQuizIndex + 1 < quizCards.length) {
        currentQuizIndex++;
        renderQuizQuestion();
    } else {
        showQuizResults();
    }
}

function showQuizResults() {
    document.getElementById("quiz-setup").classList.add("hidden");
    document.getElementById("quiz-active").classList.add("hidden");
    document.getElementById("quiz-results").classList.remove("hidden");

    // Set stats text
    const total = quizCards.length;
    const correctPct = Math.round((quizCorrectCount / total) * 100);
    
    document.getElementById("res-score-pct").textContent = `${correctPct}%`;
    document.getElementById("res-score-correct").textContent = quizCorrectCount;
    document.getElementById("res-score-incorrect").textContent = quizIncorrectCount;

    // Custom feedback
    const feedback = document.getElementById("res-feedback-text");
    if (correctPct === 100) {
        feedback.innerHTML = "🏆 Harika! Tüm şifreleri eksiksiz hatırladınız. KPSS Genel Kültür netleriniz uçuşa geçmeye hazır!";
    } else if (correctPct >= 70) {
        feedback.innerHTML = "✨ Çok iyi! Şifrelerin büyük bir kısmını ezberlemişsiniz. Ufak tefek eksiklikler için çalışmaya devam edin.";
    } else if (correctPct >= 40) {
        feedback.innerHTML = "👍 Fena değil. Bazı şifreler birbirine karışmış olabilir. 'Çalışma Odası' modunda birkaç tur atmanızı öneririz.";
    } else {
        feedback.innerHTML = "📚 Henüz başlangıç aşamasındasınız. Şifreleri birkaç defa tekrar ederek hafıza testiyle kendinizi zorlamayı sürdürün.";
    }
}

function restartSameQuiz() {
    // Reset counters and restart index using same array
    currentQuizIndex = 0;
    quizCorrectCount = 0;
    quizIncorrectCount = 0;

    document.getElementById("quiz-setup").classList.add("hidden");
    document.getElementById("quiz-active").classList.remove("hidden");
    document.getElementById("quiz-results").classList.add("hidden");

    renderQuizQuestion();
}

// === LITERARY WORKS & MATCHING GAME DATABASE ===
const literatureDatabase = [
    {
        id: "lit_atesgömlek",
        title: "Ateşten Gömlek",
        author: "Halide Edib Adıvar",
        genre: "Roman",
        description: "İzmir'in işgalinde kocası ve çocuğu öldürülen Ayşe'nin, akrabası Peyami ve Binbaşı İhsan ile Anadolu direnişine katılımını konu edinir.",
        importance: "Türk edebiyatında Kurtuluş Savaşı'nı doğrudan işleyen ilk roman özelliğini taşır."
    },
    {
        id: "lit_vurunkahpeye",
        title: "Vurun Kahpeye",
        author: "Halide Edib Adıvar",
        genre: "Roman",
        description: "Vatansever bir İstanbul öğretmeni olan Aliye'nin, Anadolu'da tayin olduğu kasabada cehalete, yobazlara ve işgalci Yunan ordusuna karşı direnişini anlatır.",
        importance: "Milli mücadele ruhunu ve halkın içindeki hain iş birlikçileri anlatan en çarpıcı romanlardan biridir."
    },
    {
        id: "lit_atesleimtihan",
        title: "Türk'ün Ateşle İmtihanı",
        author: "Halide Edib Adıvar",
        genre: "Anı",
        description: "Yazarın 1919'dan Sakarya Savaşı sonrasına kadar bizzat cephede onbaşı ve başçavuş rütbeleriyle yaşadığı olayları anlattığı tarihi belgesel niteliğindeki anı kitabıdır.",
        importance: "Milli Mücadele'nin cephe gerisini ve önde gelen komutanlarının durumlarını anlatan temel kaynak eserdir."
    },
    {
        id: "lit_yaban",
        title: "Yaban",
        author: "Yakup Kadri Karaosmanoğlu",
        genre: "Roman",
        description: "Çanakkale Savaşı'nda kolunu kaybeden Ahmet Celal isimli bir subayın, Eskişehir Porsuk çayı kıyısındaki bir köyde köylülerin yabancılığı ve vurdumduymazlığı karşısındaki dramını işler.",
        importance: "Türk aydını ile Anadolu köylüsü arasındaki büyük uçurumu (aydın-halk kopukluğunu) en açık şekilde eleştiren romandır."
    },
    {
        id: "lit_sodomsorgu",
        title: "Sodom ve Gomore",
        author: "Yakup Kadri Karaosmanoğlu",
        genre: "Roman",
        description: "İşgal altındaki İstanbul'daki ahlaki çöküntüyü, mütareke dönemi zenginlerini ve İngiliz subaylarına yaranmaya çalışan iş birlikçi çevreleri İncil'deki günahkar şehirlere benzeterek anlatır.",
        importance: "İşgal İstanbul'unun sosyo-psikolojik portresini çizen en meşhur romandır."
    },
    {
        id: "lit_ankara",
        title: "Ankara",
        author: "Yakup Kadri Karaosmanoğlu",
        genre: "Roman",
        description: "Ankara'nın üç ayrı dönemini (Milli Mücadele yılları, Cumhuriyet'in kuruluşu ve devrim sonrası 1940'lar) Selma karakterinin hayatı üzerinden üç bölüm halinde anlatır.",
        importance: "Milli şuurdan idealist Cumhuriyet toplumuna geçişi ve başkentin gelişimini işleyen panoramik bir romandır."
    },
    {
        id: "lit_kucukaga",
        title: "Küçük Ağa",
        author: "Tarık Buğra",
        genre: "Roman",
        description: "İstanbullu Hoca olarak Akşehir'e padişah propagandası yapmaya gönderilen Salih Efendi'nin, Kuvayı Milliye liderleriyle tanıştıktan sonra şuur kazanarak 'Küçük Ağa' adıyla direnişin önderlerinden birine dönüşmesini anlatır.",
        importance: "Milli Mücadele'nin din adamları ve halk nezdinde kazandığı desteği anlatan destansı bir eserdir."
    },
    {
        id: "lit_yorgunsavasci",
        title: "Yorgun Savaşçı",
        author: "Kemal Tahir",
        genre: "Roman",
        description: "Mondros sonrası ordunun terhis edilmesiyle yorgun düşmüş Osmanlı subayı Yüzbaşı Cemil'in, ittihatçı geçmişiyle yüzleşerek Anadolu'da direniş ordusunu kurma çabalarını konu edinir.",
        importance: "Milli Mücadele'nin düzenli ordu öncesindeki en zorlu örgütlenme aşamasını ve subayların psikolojisini yansıtır."
    },
    {
        id: "lit_esirsehir",
        title: "Esir Şehrin İnsanları",
        author: "Kemal Tahir",
        genre: "Roman",
        description: "Zengin bir paşa oğlu olan Kamil Bey'in, işgal İstanbul'una döndükten sonra yurtsever aydınların çıkardığı gizli gazeteye destek vererek direnişçi kadroya dahil olmasını işler.",
        importance: "İşgal altındaki İstanbul aydınlarının gizli direniş faaliyetlerini ve Karakol Cemiyeti çalışmalarını anlatan üçlemenin ilk kitabıdır."
    },
    {
        id: "lit_kalpaklilar",
        title: "Kalpaklılar",
        author: "Samim Kocagöz",
        genre: "Roman",
        description: "İzmir'in işgaliyle başlayan direniş hareketini, Kuvayı Milliye kalpaklıları üzerinden, belgelere ve gerçek olaylara dayanarak anlatan destansı bir romandır.",
        importance: "Milli Mücadele'nin tarihsel kronolojisine en sadık kalarak yazılmış geniş hacimli belgesel romandır."
    },
    {
        id: "lit_zeytindagi",
        title: "Zeytindağı",
        author: "Falih Rıfkı Atay",
        genre: "Anı / Günlük",
        description: "Yazarın I. Dünya Savaşı yıllarında Suriye ve Filistin cephesinde 4. Ordu Komutanı Cemal Paşa'nın yaverliğini yaptığı dönemdeki gözlemlerini, Osmanlı'nın Arap çöllerindeki çöküşünü anlatır.",
        importance: "Kanal Cephesi ve imparatorluğun çöküş acılarını çok duru bir Türkçe ile aktaran başyapıttır."
    },
    {
        id: "lit_cankaya",
        title: "Çankaya",
        author: "Falih Rıfkı Atay",
        genre: "Anı / Biyografi",
        description: "Mustafa Kemal Atatürk'ün çocukluğundan başlayarak, askeri dehasını, Kurtuluş Savaşı planlarını, Cumhuriyet devrimlerini ve Çankaya Köşkü'ndeki yakın dost sohbetlerini aktaran dev anı eseridir.",
        importance: "Atatürk'ün şahsiyetini ve yakın tarih devrim sürecini aydınlatan en güvenilir ve popüler birinci el kaynaktır."
    },
    {
        id: "lit_nutuk",
        title: "Nutuk (Söylev)",
        author: "Mustafa Kemal Atatürk",
        genre: "Tarihi Hitabet / Vesika",
        description: "Atatürk'ün 1919'da Samsun'a çıkışından başlayarak 1927 yılına kadar olan askeri, siyasi ve inkılap gelişmelerini bizzat belgelerle (vesikalarla) Meclis'te 6 günde okuduğu eserdir.",
        importance: "Milli Mücadele ve Cumhuriyet tarihi araştırmalarının en temel, tartışmasız ana kaynağıdır."
    },
    {
        id: "lit_istiklalharbimiz",
        title: "İstiklal Harbimiz",
        author: "Kazım Karabekir",
        genre: "Anı / Vesika",
        description: "Doğu Cephesi Komutanı Kazım Karabekir'in kendi arşivindeki binlerce telgraf, mektup ve belgeye dayanarak Kurtuluş Savaşı sürecini kendi perspektifinden anlattığı dev eserdir.",
        importance: "Milli Mücadele'nin doğu cephesi ve Erzurum Kongresi sürecini aydınlatan en önemli askeri anı kitabıdır."
    },
    {
        id: "lit_cilginturkler",
        title: "Şu Çılgın Türkler",
        author: "Turgut Özakman",
        genre: "Belgesel Roman",
        description: "Kurtuluş Savaşı'nın en kritik aşamaları olan Kütahya-Eskişehir yenilgileri, Sakarya Meydan Savaşı ve Büyük Taarruz zaferlerini belgesel roman tarzında anlatan devasa eserdir.",
        importance: "Türk yayıncılık tarihinde satış rekorları kırmış, Kurtuluş Savaşı ruhunu geniş kitlelere sevdiren yakın dönem çalışmasıdır."
    }
];

// Sub-mode variables
let litSubMode = 'list';
let litSearchQuery = '';

// Game state variables
let activeGameItems = [];
let selectedBookId = null;
let selectedAuthorId = null;
let selectedBookElement = null;
let selectedAuthorElement = null;
let gameMatchedCount = 0;
let isGameBlocked = false;

// Initialize Literature tab
function initLiteratureMode() {
    litSubMode = 'list';
    litSearchQuery = '';
    
    // Reset tabs UI
    document.getElementById("lit-tab-list").classList.add("active");
    document.getElementById("lit-tab-game").classList.remove("active");
    
    document.getElementById("lit-submode-list").classList.add("active");
    document.getElementById("lit-submode-game").classList.remove("active");
    
    // Clear inputs
    const searchInput = document.getElementById("lit-search-input");
    if (searchInput) searchInput.value = '';

    renderLiteratureList();
}

function toggleLitSubMode(submode) {
    litSubMode = submode;
    
    document.querySelectorAll(".lit-tab-btn").forEach(btn => btn.classList.remove("active"));
    document.querySelectorAll(".lit-submode-content").forEach(c => c.classList.remove("active"));
    
    if (submode === 'list') {
        document.getElementById("lit-tab-list").classList.add("active");
        document.getElementById("lit-submode-list").classList.add("active");
        renderLiteratureList();
    } else {
        document.getElementById("lit-tab-game").classList.add("active");
        document.getElementById("lit-submode-game").classList.add("active");
        startNewMatchGame();
    }
}

// Render Book list
function renderLiteratureList() {
    const listContainer = document.getElementById("lit-cards-list");
    if (!listContainer) return;

    const filtered = literatureDatabase.filter(item => {
        return litSearchQuery === '' ||
            item.title.toLowerCase().includes(litSearchQuery) ||
            item.author.toLowerCase().includes(litSearchQuery) ||
            item.description.toLowerCase().includes(litSearchQuery);
    });

    if (filtered.length === 0) {
        listContainer.innerHTML = `<div class="empty-state" style="grid-column: 1 / -1;"><div class="empty-icon">📖</div><h3>Eser bulunamadı</h3><p>Farklı bir arama terimi girmeyi deneyin.</p></div>`;
    } else {
        listContainer.innerHTML = filtered.map(item => `
            <div class="lit-card">
                <div class="lit-card-header">
                    <div class="lit-title-area">
                        <span class="lit-book-title">⭐ ${item.title}</span>
                        <span class="lit-author-name">${item.author}</span>
                    </div>
                    <span class="lit-genre-badge">${item.genre}</span>
                </div>
                <p class="lit-card-desc">${item.description}</p>
                <div class="lit-importance-box">
                    <strong>Önemi:</strong> ${item.importance}
                </div>
            </div>
        `).join('');
    }
}

function handleLitSearch() {
    litSearchQuery = document.getElementById("lit-search-input").value.toLowerCase().trim();
    renderLiteratureList();
}

// Matching Game logic
function startNewMatchGame() {
    // 1. Choose 6 random items from literatureDatabase
    const pool = [...literatureDatabase];
    
    // Shuffle pool
    for (let i = pool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pool[i], pool[j]] = [pool[j], pool[i]];
    }

    activeGameItems = pool.slice(0, 6);
    
    // 2. Build left column (Books) and right column (Authors) shuffled separately
    const books = [...activeGameItems];
    const authors = [...activeGameItems];

    // Shuffle books
    for (let i = books.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [books[i], books[j]] = [books[j], books[i]];
    }

    // Shuffle authors
    for (let i = authors.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [authors[i], authors[j]] = [authors[j], authors[i]];
    }

    // 3. Render items
    const leftCol = document.getElementById("game-left-col");
    const rightCol = document.getElementById("game-right-col");

    leftCol.innerHTML = books.map(item => `
        <div class="game-item" data-id="${item.id}" onclick="selectGameItem('book', '${item.id}', this)">
            ${item.title}
        </div>
    `).join('');

    rightCol.innerHTML = authors.map(item => `
        <div class="game-item" data-id="${item.id}" onclick="selectGameItem('author', '${item.id}', this)">
            ${item.author}
        </div>
    `).join('');

    // 4. Reset states
    selectedBookId = null;
    selectedAuthorId = null;
    selectedBookElement = null;
    selectedAuthorElement = null;
    gameMatchedCount = 0;
    isGameBlocked = false;

    document.getElementById("game-score-correct").textContent = "0";
    document.getElementById("game-score-total").textContent = activeGameItems.length;
    document.getElementById("game-success-message").classList.add("hidden");
}

function selectGameItem(type, id, element) {
    if (isGameBlocked) return;
    if (element.classList.contains("correct")) return; // Skip already matched

    if (type === 'book') {
        // Clear previous selected book element styling
        if (selectedBookElement) {
            selectedBookElement.classList.remove("selected");
        }
        selectedBookId = id;
        selectedBookElement = element;
        element.classList.add("selected");
    } else {
        // Clear previous selected author element styling
        if (selectedAuthorElement) {
            selectedAuthorElement.classList.remove("selected");
        }
        selectedAuthorId = id;
        selectedAuthorElement = element;
        element.classList.add("selected");
    }

    // Check match if both selected
    if (selectedBookId && selectedAuthorId) {
        isGameBlocked = true;

        if (selectedBookId === selectedAuthorId) {
            // MATCH!
            setTimeout(() => {
                selectedBookElement.classList.remove("selected");
                selectedAuthorElement.classList.remove("selected");

                selectedBookElement.classList.add("correct");
                selectedAuthorElement.classList.add("correct");

                // Retrieve book info to display a helpful toast or alert
                const item = literatureDatabase.find(x => x.id === selectedBookId);
                
                // Update stats
                gameMatchedCount++;
                document.getElementById("game-score-correct").textContent = gameMatchedCount;

                // Reset selections
                selectedBookId = null;
                selectedAuthorId = null;
                selectedBookElement = null;
                selectedAuthorElement = null;
                isGameBlocked = false;

                // Check victory condition
                if (gameMatchedCount === activeGameItems.length) {
                    document.getElementById("game-success-message").classList.remove("hidden");
                }
            }, 300);
        } else {
            // MISMATCH!
            setTimeout(() => {
                selectedBookElement.classList.add("incorrect");
                selectedAuthorElement.classList.add("incorrect");
                
                // Clear after animation shakes
                setTimeout(() => {
                    selectedBookElement.classList.remove("selected", "incorrect");
                    selectedAuthorElement.classList.remove("selected", "incorrect");

                    // Reset selections
                    selectedBookId = null;
                    selectedAuthorId = null;
                    selectedBookElement = null;
                    selectedAuthorElement = null;
                    isGameBlocked = false;
                }, 800);
            }, 300);
        }
    }
}

// === ATATÜRK İLKELERİ & İNKILAPLAR QUIZ ENGINE ===
const principlesDatabase = [
    { text: "Medeni Kanun'un Kabulü", answer: "Halkçılık", hint: "Kadın-erkek eşitliğini (sosyal ve hukuki eşitlik) sağladığı için Halkçılık, modernleşme getirdiği için İnkılapçılık ve dini kurallardan ayrıldığı için Laiklik'tir." },
    { text: "Kabotaj Kanunu'nun Çıkarılması", answer: "Milliyetçilik", hint: "Türk karasularında gemi işletme hakkını Türk denizcilerine verdiği için doğrudan milli bağımsızlık ve Milliyetçilik'tir." },
    { text: "Aşar Vergisinin Kaldırılması", answer: "Halkçılık", hint: "Köylü üzerindeki ağır vergi yükünü kaldırarak sosyal adaleti sağladığı için Halkçılık'tır." },
    { text: "Sümerbank ve Etibank'ın Kurulması", answer: "Devletçilik", hint: "Milli yatırımları finanse etmek ve sanayi tesislerini devlet eliyle açmak için kurulan bankalar doğrudan Devletçilik'tir." },
    { text: "Millet Mekteplerinin Açılması", answer: "Halkçılık", hint: "Okuma yazma oranını artırmak ve eğitimi halka yaymak amacı taşıdığı için Halkçılık'tır." },
    { text: "Türk Tarih ve Türk Dil Kurumlarının Kurulması", answer: "Milliyetçilik", hint: "Türk kültürünü, tarihini ve dilini araştırmak, geliştirmek amacıyla kuruldukları için doğrudan Milliyetçilik'tir." },
    { text: "Saltanatın Kaldırılması", answer: "Cumhuriyetçilik", hint: "Milli egemenliği ve halk iradesini tek yetkili kılmak adına atılan en büyük adım olduğundan Cumhuriyetçilik'dir." },
    { text: "Tevhid-i Tedrisat Kanunu (Eğitim Birliği)", answer: "Laiklik", hint: "Eğitimi laik, milli ve tek çatı altında birleştirdiği için hem Laiklik hem Milliyetçilik hem de Halkçılık ile ilgilidir." },
    { text: "Miladi Takvim ve Harf İnkılabı", answer: "İnkılapçılık", hint: "Çağdaşlaşma, batılı ülkelerle ilişkileri kolaylaştırma ve köklü yenilik amacı taşıdığı için doğrudan İnkılapçılık'tır." },
    { text: "Halifeliğin Kaldırılması", answer: "Laiklik", hint: "Devlet düzenini din kurallarından arındırmanın ve laikleşmenin en temel aşaması olduğu için Laiklik'tir. Aynı zamanda cumhuriyeti güçlendirdiği için Cumhuriyetçilik'tir." },
    { text: "Beş Yıllık Sanayi Planı", answer: "Devletçilik", hint: "Özel sektörün yetersiz kaldığı alanlarda yatırımların devlet planlamasıyla yapılmasını öngördüğü için Devletçilik'tir." },
    { text: "Kadınlara Seçme ve Seçilme Hakkının Verilmesi", answer: "Cumhuriyetçilik", hint: "Halkın tamamının yönetime katılmasını sağladığı için Cumhuriyetçilik ve cinsiyet eşitliği getirdiği için Halkçılık'tır." },
    { text: "Soyadı Kanunu'nun Kabul Edilmesi", answer: "Halkçılık", hint: "Ağa, paşa, efendi gibi unvanları kaldırıp imtiyazsız, eşit bir toplum yaratmayı amaçladığı için öncelikle Halkçılık'tır." },
    { text: "Şer'iye ve Evkaf Vekaleti'nin Kaldırılması", answer: "Laiklik", hint: "Din ve vakıf işlerini devlet işlerinden ayırdığı, laik devlet yapısını güçlendirdiği için doğrudan Laiklik'tir." },
    { text: "Erkan-ı Harbiye Vekaleti'nin Kaldırılması", answer: "Cumhuriyetçilik", hint: "Orduyu siyasetten ayırarak milli iradeyi ve demokratik yönetimi güvence altına almayı amaçladığı için Cumhuriyetçilik'tir." },
    { text: "Türk Parasının Kıymetini Koruma Kanunu'nun Çıkarılması", answer: "Milliyetçilik", hint: "Ulusal ekonomiyi korumayı, Türk lirasını dış etkilere karşı güçlendirmeyi amaçladığı için Milliyetçilik'tir." },
    { text: "Maden Tetkik Arama (MTA) Enstitüsü'nün Kurulması", answer: "Devletçilik", hint: "Yeraltı kaynaklarının devlet eliyle araştırılıp işletilmesi hedeflendiği için doğrudan Devletçilik'tir." },
    { text: "İzmir İktisat Kongresi'nin Toplanması", answer: "Milliyetçilik", hint: "Milli ekonomi ilkelerinin (Misak-ı İktisadi) kabul edilerek yabancı tekelinden kurtulmayı amaçlaması yönüyle Milliyetçilik'tir." },
    { text: "Tekke, Zaviye ve Türbelerin Kapatılması", answer: "Laiklik", hint: "Toplumun batıl inançlardan uzaklaşması, laikleşmesi ve çağdaşlaşması yolunda atılan bu adım Laiklik ve İnkılapçılık'tır." },
    { text: "Şapka İnkılabı ve Kılık Kıyafet Düzenlemesi", answer: "İnkılapçılık", hint: "Topluma çağdaş, modern ve batı dünyasıyla uyumlu dış görünüş kazandırmayı amaçladığı için doğrudan İnkılapçılık'tır." },
    { text: "Ağırlık ve Uzunluk Ölçülerinin Değiştirilmesi", answer: "İnkılapçılık", hint: "Eski ölçü birimleri (okka, arşın vb.) yerine uluslararası metre ve kilogram sistemine geçilmesi doğrudan İnkılapçılık'tır." },
    { text: "Anayasa'dan 'Devletin Dini İslam'dır' Maddesinin Çıkarılması (1928)", answer: "Laiklik", hint: "Anayasanın dinsel kurallardan temizlenerek laikleştirilmesinin en önemli adımıdır." },
    { text: "Atatürk İlkelerinin Anayasa'ya Eklenmesi (1937)", answer: "İnkılapçılık", hint: "Yapılan tüm inkılapların ve ilkelerin anayasal güvence altına alınması doğrudan İnkılapçılık'tır." },
    { text: "Halkevlerinin Açılması", answer: "Halkçılık", hint: "Kültür, sanat ve okuma-yazma eğitimini halkın tamamına ücretsiz ulaştırmayı hedeflediği için Halkçılık'tır." },
    { text: "Kapitülasyonların Kaldırılması", answer: "Milliyetçilik", hint: "Yabancı devletlere verilen ekonomik ayrıcalıklara son vererek tam bağımsızlığı sağladığı için doğrudan Milliyetçilik'tir." },
    { text: "Yabancı Okulların Milli Eğitim Bakanlığı'na Bağlanması", answer: "Milliyetçilik", hint: "Eğitimde milli bütünlüğü ve devlet denetimini sağladığı için doğrudan Milliyetçilik'tir." },
    { text: "Karabük Demir-Çelik Fabrikası'nın Kurulması", answer: "Devletçilik", hint: "Ağır sanayi yatırımının özel sektörün gücü yetmediği için doğrudan devlet bütçesiyle yapılması Devletçilik'tir." },
    { text: "Kadınların Belediye Seçimlerine Katılma Hakkı Elde Etmesi (1930)", answer: "Cumhuriyetçilik", hint: "Kadınların siyasi hayata katılımını sağlayarak halk iradesinin kapsamını genişlettiği için Cumhuriyetçilik'tir." },
    { text: "Ayrıcalık Bildiren Unvanların (Ağa, Paşa, Efendi vb.) Yasaklanması", answer: "Halkçılık", hint: "Toplumsal sınıf farklarını reddederek eşitliği ve imtiyazsızlığı savunduğu için doğrudan Halkçılık'tır." },
    { text: "Düzenli Ordunun Kurulması", answer: "Cumhuriyetçilik", hint: "Milli iradenin temsilcisi olan TBMM'ye bağlı düzenli bir savunma gücü oluşturulduğu için öncelikle Cumhuriyetçilik'tir." }
];

let principlesQuestions = [];
let currentPrincipleIndex = 0;
let principlesScore = 0;

function startPrinciplesQuiz() {
    principlesQuestions = [...principlesDatabase];
    // Shuffle
    for (let i = principlesQuestions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [principlesQuestions[i], principlesQuestions[j]] = [principlesQuestions[j], principlesQuestions[i]];
    }
    principlesQuestions = principlesQuestions.slice(0, 10); // Limit to 10 questions
    currentPrincipleIndex = 0;
    principlesScore = 0;

    document.getElementById("principles-active").classList.remove("hidden");
    document.getElementById("principles-results").classList.add("hidden");

    renderPrincipleQuestion();
}

function renderPrincipleQuestion() {
    const q = principlesQuestions[currentPrincipleIndex];
    document.getElementById("principles-q-num").textContent = `Soru: ${currentPrincipleIndex + 1} / 10`;
    document.getElementById("principles-score-correct").textContent = principlesScore;
    document.getElementById("principles-question-text").textContent = q.text;
    document.getElementById("principles-question-hint").textContent = ""; // Clear previous feedback
}

function submitPrincipleAnswer(userAnswer) {
    const q = principlesQuestions[currentPrincipleIndex];
    const isCorrect = userAnswer === q.answer;
    
    // Display feedback in the card
    const hintElement = document.getElementById("principles-question-hint");
    if (isCorrect) {
        principlesScore++;
        hintElement.innerHTML = `<span style="color: var(--color-success); font-weight:700;">✅ Doğru!</span> ${q.hint}`;
    } else {
        hintElement.innerHTML = `<span style="color: var(--color-danger); font-weight:700;">❌ Yanlış! Doğru Cevap: ${q.answer}</span><br>${q.hint}`;
    }

    // Disable option buttons during feedback display (block double-click)
    document.querySelectorAll("#principles-active button").forEach(btn => btn.style.pointerEvents = "none");

    setTimeout(() => {
        // Re-enable buttons
        document.querySelectorAll("#principles-active button").forEach(btn => btn.style.pointerEvents = "auto");

        if (currentPrincipleIndex + 1 < 10) {
            currentPrincipleIndex++;
            renderPrincipleQuestion();
        } else {
            showPrinciplesResults();
        }
    }, 4500); // Give 4.5 seconds to read the nice explanation
}

function showPrinciplesResults() {
    document.getElementById("principles-active").classList.add("hidden");
    document.getElementById("principles-results").classList.remove("hidden");

    const correctPct = Math.round((principlesScore / 10) * 100);
    document.getElementById("principles-res-pct").textContent = `${correctPct}%`;
    document.getElementById("principles-res-correct").textContent = principlesScore;

    const feedback = document.getElementById("principles-res-feedback");
    if (correctPct === 100) {
        feedback.textContent = "🏆 Muhteşem! Atatürk ilkelerini eksiksiz biliyorsunuz, sınavda soru kaçırmanız imkansız!";
    } else if (correctPct >= 70) {
        feedback.textContent = "✨ Çok iyi! İlkelerin mantığını kavramışsınız. Ufak tefek kelime oyunlarına dikkat edin.";
    } else {
        feedback.textContent = "📚 İlkeleri anahtar kelimelerine dikkat ederek biraz daha tekrar etmeniz faydalı olacaktır.";
    }
}

// === ZAMAN TÜNELİ (KRONOLOJİ) OYUNU ENGINE ===
const timelineDatabase = [
    { title: "Mondros Ateşkes Antlaşması", date: "30 Ekim 1918", year: 1918.83 },
    { title: "İzmir'in İşgali", date: "15 Mayıs 1919", year: 1919.37 },
    { title: "Samsun'a Çıkış", date: "19 Mayıs 1919", year: 1919.38 },
    { title: "Amasya Genelgesi", date: "22 Haziran 1919", year: 1919.47 },
    { title: "Erzurum Kongresi", date: "23 Temmuz 1919", year: 1919.56 },
    { title: "Sivas Kongresi", date: "4 Eylül 1919", year: 1919.68 },
    { title: "Amasya Görüşmeleri", date: "22 Ekim 1919", year: 1919.81 },
    { title: "Misak-ı Milli'nin Kabulü", date: "28 Ocak 1920", year: 1920.08 },
    { title: "İstanbul'un Resmi İşgali", date: "16 Mart 1920", year: 1920.21 },
    { title: "TBMM'nin Açılması", date: "23 Nisan 1920", year: 1920.31 },
    { title: "Sevr Antlaşması", date: "10 Ağustos 1920", year: 1920.61 },
    { title: "Gümrü Antlaşması", date: "3 Aralık 1920", year: 1920.92 },
    { title: "I. İnönü Savaşı", date: "6 Ocak 1921", year: 1921.02 },
    { title: "II. İnönü Savaşı", date: "23 Mart 1921", year: 1921.22 },
    { title: "Kütahya-Eskişehir Savaşları", date: "10 Temmuz 1921", year: 1921.52 },
    { title: "Sakarya Meydan Muharebesi", date: "23 Ağustos 1921", year: 1921.64 },
    { title: "Ankara Antlaşması", date: "20 Ekim 1921", year: 1921.80 },
    { title: "Büyük Taarruz", date: "26 Ağustos 1922", year: 1922.65 },
    { title: "Mudanya Ateşkes Antlaşması", date: "11 Ekim 1922", year: 1922.78 },
    { title: "Saltanatın Kaldırılması", date: "1 Kasım 1922", year: 1922.84 },
    { title: "Lozan Barış Antlaşması", date: "24 Temmuz 1923", year: 1923.56 },
    { title: "Ankara'nın Başkent Olması", date: "13 Ekim 1923", year: 1923.78 },
    { title: "Cumhuriyet'in İlanı", date: "29 Ekim 1923", year: 1923.82 },
    { title: "Halifeliğin Kaldırılması", date: "3 Mart 1924", year: 1924.17 },
    { title: "Tevhid-i Tedrisat Kanunu", date: "3 Mart 1924", year: 1924.18 },
    { title: "Şapka Kanunu'nun Kabulü", date: "25 Kasım 1925", year: 1925.90 },
    { title: "Medeni Kanun'un Kabulü", date: "17 Şubat 1926", year: 1926.13 },
    { title: "Kabotaj Kanunu'nun Kabulü", date: "1 Temmuz 1926", year: 1926.50 },
    { title: "Harf İnkılabı", date: "1 Kasım 1928", year: 1928.84 },
    { title: "Balkan Antantı", date: "9 Şubat 1934", year: 1934.11 },
    { title: "Soyadı Kanunu", date: "21 Haziran 1934", year: 1934.47 },
    { title: "Kadınlara Milletvekili Seçilme Hakkı", date: "5 Aralık 1934", year: 1934.93 },
    { title: "Montrö Boğazlar Sözleşmesi", date: "20 Temmuz 1936", year: 1936.55 },
    { title: "Sadabat Paktı", date: "8 Temmuz 1937", year: 1937.52 },
    { title: "Atatürk'ün Vefatı", date: "10 Kasım 1938", year: 1938.86 },
    { title: "Hatay'ın Anavatana Katılması", date: "23 Temmuz 1939", year: 1939.56 },
    // Osmanlı ve Selçuklu Kritik Tarihleri
    { title: "Malazgirt Savaşı", date: "26 Ağustos 1071", year: 1071.65 },
    { title: "İstanbul'un Fethi", date: "29 Mayıs 1453", year: 1453.41 },
    { title: "Yavuz Sultan Selim'in Mısır Seferi", date: "22 Ocak 1517", year: 1517.06 },
    { title: "Mohaç Meydan Muharebesi", date: "29 Ağustos 1526", year: 1526.66 },
    { title: "Karlofça Antlaşması", date: "26 Ocak 1699", year: 1699.07 },
    { title: "Küçük Kaynarca Antlaşması", date: "21 Temmuz 1774", year: 1774.55 },
    { title: "Tanzimat Fermanı'nın İlanı", date: "3 Kasım 1839", year: 1839.84 },
    { title: "I. Meşrutiyet'in İlanı", date: "23 Aralık 1876", year: 1876.98 },
    { title: "II. Meşrutiyet'in İlanı", date: "23 Temmuz 1908", year: 1908.56 },
    { title: "Trablusgarp Savaşı", date: "29 Eylül 1911", year: 1911.74 },
    { title: "Babıali Baskını (Hükümet Darbesi)", date: "23 Ocak 1913", year: 1913.06 },
    { title: "Çanakkale Deniz Zaferi", date: "18 Mart 1915", year: 1915.21 }
];

let activeTimelineItems = [];
let timelineCurrentIndex = 0;
let timelineSortedList = [];

function startNewTimelineGame() {
    // Dynamically compile pools
    const pools = {};

    // 1. Original database (Cumhuriyet / İnkılaplar)
    pools["Cumhuriyet Dönemi & İnkılaplar"] = timelineDatabase.map(item => ({
        title: item.title,
        date: item.date,
        originalIndex: item.year 
    }));

    // 2. Kuruluş, Yükselme, Duraklama, Gerileme, Dağılma
    const eras = ['Kuruluş', 'Yükselme', 'Duraklama', 'Gerileme', 'Dağılma'];
    const eraDisplayNames = {
        'Kuruluş': 'Osmanlı Kuruluş Dönemi (1299-1453)',
        'Yükselme': 'Osmanlı Yükselme Dönemi (1453-1579)',
        'Duraklama': 'Osmanlı Duraklama Dönemi (1579-1699)',
        'Gerileme': 'Osmanlı Gerileme Dönemi (1699-1792)',
        'Dağılma': 'Osmanlı Dağılma Dönemi (1792-1913)'
    };

    eras.forEach(era => {
        const eraDisplay = eraDisplayNames[era];
        pools[eraDisplay] = customNotesDatabase
            .filter(note => note.category === "Osmanlı Genel Kronolojisi" && note.eraGroup === era)
            .map((note, idx) => ({
                title: note.desc,
                date: note.title,
                originalIndex: idx
            }));
    });

    // 3. I. Dünya Savaşı - Lozan Kronolojisi
    pools["I. Dünya Savaşı - Lozan Kronolojisi (1914-1923)"] = customNotesDatabase
        .filter(note => note.category === "I. Dünya Savaşı - Lozan Kronolojisi")
        .map((note, idx) => ({
            title: note.desc,
            date: note.title,
            originalIndex: idx
        }));

    // Select a random category pool that has at least 5 items
    const availablePoolNames = Object.keys(pools).filter(name => pools[name].length >= 5);
    const selectedPoolName = availablePoolNames[Math.floor(Math.random() * availablePoolNames.length)];
    const selectedPool = pools[selectedPoolName];

    // Pick 5 random items from this pool
    const selectedItems = [];
    const poolCopy = [...selectedPool];
    for (let i = 0; i < 5; i++) {
        const randomIndex = Math.floor(Math.random() * poolCopy.length);
        selectedItems.push(poolCopy.splice(randomIndex, 1)[0]);
    }

    // Sort chronologically by originalIndex
    timelineSortedList = [...selectedItems].sort((a, b) => a.originalIndex - b.originalIndex);
    activeTimelineItems = selectedItems;
    timelineCurrentIndex = 0;

    // Shuffle for display
    const shuffledDisplay = [...selectedItems];
    for (let i = shuffledDisplay.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledDisplay[i], shuffledDisplay[j]] = [shuffledDisplay[j], shuffledDisplay[i]];
    }

    // Render era title in UI
    const eraTitleElement = document.getElementById("timeline-game-era");
    if (eraTitleElement) {
        eraTitleElement.textContent = `📍 Dönem: ${selectedPoolName}`;
    }

    // Render event list
    const listContainer = document.getElementById("timeline-events-list");
    listContainer.innerHTML = shuffledDisplay.map(item => `
        <div class="game-item" data-title="${item.title.replace(/"/g, '&quot;')}" onclick="clickTimelineEvent(\`${item.title.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`, this)" style="cursor: pointer; padding: 0.75rem 1rem; margin-bottom: 0.5rem; background: var(--bg-primary); border: 1px solid var(--border-color); border-radius: var(--border-radius-sm); font-size: 0.9rem; transition: all 0.2s ease;">
            ${item.title} <span class="timeline-date hidden" style="font-size:0.8rem; color:var(--color-tarih); font-weight: bold; display:block; margin-top:0.25rem;">📅 ${item.date}</span>
        </div>
    `).join('');

    document.getElementById("timeline-instructions").textContent = "Sıradaki en eski olayı seçin.";
    document.getElementById("timeline-instructions").className = "score-green";
    document.getElementById("timeline-success-message").classList.add("hidden");
}

function clickTimelineEvent(title, element) {
    if (element.classList.contains("correct")) return;

    const targetCorrectItem = timelineSortedList[timelineCurrentIndex];

    if (title === targetCorrectItem.title) {
        element.classList.add("correct");
        element.querySelector(".timeline-date").classList.remove("hidden");
        
        timelineCurrentIndex++;

        if (timelineCurrentIndex === 5) {
            document.getElementById("timeline-instructions").textContent = "Mükemmel Sıralama!";
            document.getElementById("timeline-success-message").classList.remove("hidden");
        } else {
            document.getElementById("timeline-instructions").textContent = `Doğru! Sıradaki en eski olayı seçin. (${timelineCurrentIndex}/5)`;
        }
    } else {
        element.classList.add("incorrect");
        document.getElementById("timeline-instructions").textContent = "Hatalı Olay! Daha eski bir olay mevcut.";
        document.getElementById("timeline-instructions").className = "score-red";
        
        setTimeout(() => {
            element.classList.remove("incorrect");
            document.getElementById("timeline-instructions").textContent = `Sıradaki en eski olayı seçin. (${timelineCurrentIndex}/5)`;
            document.getElementById("timeline-instructions").className = "score-green";
        }, 1000);
    }
}



// === GÜNCEL BİLGİLER & GENEL KÜLTÜR ENGINE ===
const cultureDatabase = {
    unesco: [
        { name: "Divriği Ulu Camii ve Darüşşifası", detail: "Sivas'ta bulunur. Türkiye'nin UNESCO listesine giren ilk kültürel mirasıdır (1985)." },
        { name: "Göbeklitepe Arkeolojik Alanı", detail: "Şanlıurfa'da yer alır. 'Tarihin sıfır noktası' olarak nitelendirilir ve 2018 yılında listeye dahil edilmiştir." },
        { name: "Efes Antik Kenti", detail: "İzmir'de bulunur. Celsus Kütüphanesi, antik tiyatro ve Meryem Ana Evi'ni barındırır (2015)." },
        { name: "Nemrut Dağı", detail: "Adıyaman'da bulunur. Kommagene Krallığı'na ait devasa heykeller ve tümülüs barındırır (1987)." },
        { name: "Safranbolu Şehri", detail: "Karabük'te yer alır. Geleneksel Osmanlı sivil mimarisini koruyan ahşap konaklarıyla ünlüdür (1994)." },
        { name: "Arslantepe Höyüğü", detail: "Malatya'da bulunur. Türkiye'nin listedeki en güncel arkeolojik alanlarından biridir (2021)." },
        { name: "Gordion Antik Kenti", detail: "Ankara'da yer alır. Frigya Krallığı'nın tarihi başkentidir. 2023 yılında UNESCO listesine dahil edilmiştir." }
    ],
    parks: [
        { name: "Yozgat Çamlığı Milli Parkı", detail: "Türkiye'nin ilan edilen İLK milli parkıdır (1958)." },
        { name: "Derebucak Çamlık Mağaraları", detail: "Konya'da bulunur. Türkiye'nin 48. ve ilan edilen en yeni milli parklarından biridir." },
        { name: "Yusufeli Barajı (Artvin)", detail: "275 metre gövde yüksekliği ile Türkiye'nin en yüksek, dünyanın ise 5. en yüksek kemer barajıdır." },
        { name: "Van Gölü & Tuz Gölü", detail: "Van Gölü Türkiye'nin en büyük gölü ve en büyük sodalı gölüdür. Tuz Gölü ise Türkiye'nin en sığ ve tuz oranı en yüksek gölüdür." },
        { name: "Kızılırmak", detail: "Türkiye sınırları içerisinden doğup yine Türkiye sınırları içerisinden dökülen EN UZUN nehrimizdir (Fırat Nehri ise en büyük nehrimizdir fakat sınır dışına akar)." }
    ],
    orgs: [
        { name: "Birleşmiş Milletler (BM)", detail: "Türkiye, 1945 yılında kurulan Birleşmiş Milletler teşkilatının KURUCU üyelerindendir." },
        { name: "NATO (Kuzey Atlantik Antlaşması)", detail: "Türkiye, NATO'ya 1952 yılında (Kore Savaşı'na asker gönderdikten sonra) Yunanistan ile birlikte katılmıştır." },
        { name: "Türk Devletleri Teşkilatı (TDT)", detail: "Türk Konseyi adıyla 2009 Nahçıvan Anlaşması ile kurulmuştur. Merkezi İstanbul'dadır. Türkiye aktif kurucu üyedir." },
        { name: "Avrupa Konseyi", detail: "Türkiye, 1949 yılında kurulan insan hakları odaklı Avrupa Konseyi'nin kurucu üyeleri arasında yer almaktadır (AİHM buraya bağlıdır)." },
        { name: "İslam İşbirliği Teşkilatı (İİT)", detail: "1969 yılında kurulan teşkilatın Türkiye kurucu üyelerindendir. 2004-2014 yılları arasında genel sekreterliğini Türk akademisyen Ekmeleddin İhsanoğlu yapmıştır." }
    ]
};

let activeCultureTab = 'unesco';

function initCultureMode() {
    activeCultureTab = 'unesco';
    document.getElementById("culture-tab-unesco").classList.add("active");
    document.getElementById("culture-tab-parks").classList.remove("active");
    document.getElementById("culture-tab-orgs").classList.remove("active");

    renderCultureCards();
}

function toggleCultureTab(tab) {
    activeCultureTab = tab;
    document.getElementById("culture-tab-unesco").classList.remove("active");
    document.getElementById("culture-tab-parks").classList.remove("active");
    document.getElementById("culture-tab-orgs").classList.remove("active");

    document.getElementById(`culture-tab-${tab}`).classList.add("active");
    renderCultureCards();
}

function renderCultureCards() {
    const listContainer = document.getElementById("culture-cards-list");
    const data = cultureDatabase[activeCultureTab];
    
    let colorVar = 'var(--color-tarih)';
    if (activeCultureTab === 'parks') colorVar = 'var(--color-cografya)';
    else if (activeCultureTab === 'orgs') colorVar = 'var(--color-vatandaslik)';

    listContainer.innerHTML = data.map(item => `
        <div class="lit-card" style="border-left: 4px solid ${colorVar};">
            <div class="lit-card-header">
                <div class="lit-title-area">
                    <span class="lit-book-title" style="color: ${colorVar};">${item.name}</span>
                </div>
            </div>
            <p class="lit-card-desc" style="font-size: 0.9rem; line-height: 1.5; margin-top:0.25rem;">${item.detail}</p>
        </div>
    `).join('');
}

// === VATANDAŞLIK SAYISAL VE ATAMA REHBERİ ENGINE ===
const citizenshipDatabase = [
    {
        name: "Yaş Sınırları (Sayısal)",
        locations: "Milletvekili seçilme: 18 yaş | Seçmen olma: 18 yaş | Cumhurbaşkanı seçilme: 40 yaş (ve yükseköğrenim mezunu) | AYM ve HSK üyesi seçilme: 45 yaş.",
        factories: "Anayasa Mahkemesi ve HSK üyeliği için olgunluk ve mesleki tecrübe şartından dolayı yaş sınırı 45 olarak belirlenmiştir.",
        description: "Anayasamıza göre seçme, seçilme ve devlet organlarına atanmada uygulanan yaş sınırlarıdır."
    },
    {
        name: "Yüksek Mahkeme Üye Sayıları",
        locations: "Anayasa Mahkemesi: 15 Üye | Yargıtay: HSK tarafından belirlenir | Danıştay: Kadro sayılarına göredir | Uyuşmazlık Mahkemesi: 1 Başkan, 6 Asıl, 6 Yedek.",
        factories: "Sayıştay ve YSK anayasal kurumlardır ancak Yüksek Mahkeme DEĞİLDİRLER! 1982 Anayasası'nda sadece 4 yüksek mahkeme bulunur (AYM, Yargıtay, Danıştay, Uyuşmazlık).",
        description: "Yargı bölümünde yer alan yüksek mahkemelerin üye sayıları ve yapısal formlarıdır."
    },
    {
        name: "YSK ve HSK Üye Sayıları",
        locations: "Hakimler ve Savcılar Kurulu (HSK): 13 Üye (Başkanı Adalet Bakanıdır) | Yüksek Seçim Kurulu (YSK): 7 Asıl, 4 Yedek (Toplam 11 üye).",
        factories: "YSK üyelerinin 6'sını Yargıtay, 5'ini Danıştay kendi üyeleri arasından seçer. HSK üyelerinin 4'ünü CB, 7'sini TBMM seçer, Adalet Bakanı ve Müsteşarı (Yardımcısı) ise doğal üyedir.",
        description: "Seçimlerin yönetimini ve hakim-savcıların atama/özlük işlerini yürüten anayasal üst kurullardır."
    },
    {
        name: "Görev Süreleri (Yıllar)",
        locations: "Milletvekili ve Cumhurbaşkanı: 5 Yıl | AYM Üyeleri: 12 Yıl (Bir kez seçilebilirler) | HSK Üyeleri: 4 Yıl (Tekrar seçilebilirler) | Kamu Başdenetçisi: 4 Yıl.",
        factories: "Cumhurbaşkanı ve TBMM seçimleri 5 yılda bir aynı gün yapılır. Anayasa Mahkemesi üyeleri 12 yıllığına seçilir ve 65 yaşını doldurunca emekli olurlar.",
        description: "Devlet organlarının, meclisin ve yüksek yargı üyelerinin görev yapma süreleridir."
    },
    {
        name: "Olağanüstü Hal (OHAL) Süreleri",
        locations: "İlan Süresi: En fazla 6 Ay (Cumhurbaşkanı tarafından ilan edilir) | Meclis Uzatma Süresi: Her defasında en fazla 4 Ay (TBMM kararıyla).",
        factories: "OHAL ilanı yetkisi doğrudan Cumhurbaşkanı'na aittir ve resmi gazetede yayımlanır. TBMM, CB'nin talebiyle bu süreyi uzatabilir, kısaltabilir veya kaldırabilir.",
        description: "Ülke genelinde veya bir bölgesinde olağanüstü durumlarda uygulanan yönetim usulü süreleridir."
    },
    {
        name: "TBMM Karar Yeter Sayıları",
        locations: "Üye Tamsayısı: 600 | Toplantı Yeter Sayısı: 200 (1/3) | Karar Yeter Sayısı: Salt çoğunluk (Basit çoğunluk - Toplantıya katılanların yarıdan fazlası, 151'den az olamaz).",
        factories: "Nitelikli Çoğunluklar: Anayasa Değişikliği (En az 360 veya 400 oy) | Genel ve Özel Af İlanı: 360 oy (3/5 çoğunluk) | CB ve Bakanları Yüce Divan'a Sevk: 400 oy (2/3 çoğunluk).",
        description: "Meclisin toplanabilmesi ve kanun/karar alabilmesi için gereken asgari üye oy sınırlarıdır."
    },
    {
        name: "Yönetmelik Çıkarma Yetkisi",
        locations: "Cumhurbaşkanı, Bakanlıklar ve Kamu Tüzel Kişileri (Belediyeler, Üniversiteler, TRT, SGK, Valilikler vb. yönetmelik çıkarabilir).",
        factories: "Cumhurbaşkanı yardımcıları veya valiler (şahsen valilik makamı hariç) bağımsız yönetmelik çıkaramazlar. Yönetmelikler kanunlara aykırı olamaz.",
        description: "Kanunların uygulanmasını sağlamak üzere kamu kurumlarının çıkardığı yazılı düzenleyici kurallardır."
    },
    {
        name: "Kim Atar / Kim Seçer?",
        locations: "Kamu Başdenetçisi: TBMM seçer | Sayıştay Başkanı ve Üyeleri: TBMM seçer | YSK Üyeleri: Yargıtay ve Danıştay seçer | Yargıtay Üyeleri: Tamamını HSK seçer.",
        factories: "Cumhurbaşkanı, AYM üyelerinin 12'sini ve Danıştay üyelerinin 1/4'ünü seçer. HSK ise Danıştay üyelerinin 3/4'ünü ve Yargıtay üyelerinin tamamını seçer.",
        description: "Devletin yüksek idari ve yargı organlarındaki kritik atama yetki dağılımlarıdır."
    },
    {
        name: "Siyasi Parti Kuralları & Barajlar",
        locations: "Parti kurmak: En az 30 Vatandaş | Parti Grubu kurmak: En az 20 Milletvekili | Devlet Yardımı barajı: %3 oy | Seçim barajı (Milletvekili çıkarmak için): %7 oy.",
        factories: "Siyasi partileri kapatma davasını açmaya yetkili kişi Yargıtay Cumhuriyet Başsavcısı'dır. Kapatma kararını ise Anayasa Mahkemesi verir.",
        description: "Siyasi partilerin kurulması, mecliste temsili, hazine yardımı alabilmesi ve kapatılmasına dair anayasal sınırlardır."
    },
    {
        name: "TBMM Çalışma Düzeni",
        locations: "Yasama Dönemi: 5 Yıl | Yasama Yılı Başlangıcı: 1 Ekim | Meclis Tatil Süresi: En fazla 3 Ay | Meclis Ara Verme Süresi: En fazla 15 Gün.",
        factories: "TBMM her yıl 1 Ekim günü kendiliğinden (çağrısız) toplanır. Yasama yılı içinde en çok 3 ay tatil yapabilir.",
        description: "Meclisin çalışma ve tatil sürelerini düzenleyen anayasal kurallardır."
    },
    {
        name: "Milletvekilliğinin Düşmesi",
        locations: "TBMM Kararıyla: İstifa, devamsızlık (1 ayda 5 birleşim), bağdaşmayan görevde ısrar | Kendiliğinden: CB/CB Yardımcısı/Bakan seçilme, ölüm, kısıtlanma, gaiplik.",
        factories: "Partisinden istifa eden bir milletvekilinin milletvekilliği DÜŞMEZ! Ayrıca Meclis Başkanı seçilmek de milletvekilliğini düşürmez (sadece oy kullanamaz).",
        description: "Seçilen milletvekillerinin hangi şartlarda bu sıfatlarını kaybedeceklerini belirleyen düzenlemedir."
    },
    {
        name: "Hakların Sınırlandırılması",
        locations: "Sınırlandırma aracı: Sadece Kanun | Anayasal Kriterler: Demokratik toplum düzeni, Ölçülülük ilkesi, Laik Cumhuriyet ilkeleri.",
        factories: "Savaş, seferberlik veya OHAL hallerinde bile dokunulamayan haklara 'Çekirdek Haklar' denir (Yaşam hakkı, masumiyet karinesi, suçların geriye yürümemesi vb.).",
        description: "Temel hak ve hürriyetlerin hangi koşullarda ve hangi yasal sınırlarla sınırlandırılabileceğini veya durdurulabileceğini belirleyen maddedir."
    }
];

let citizenshipQuizQuestions = [];
let currentCitizenshipIndex = 0;
let citizenshipScore = 0;
let currentCitizenshipSubMode = 'list';

function initCitizenshipMode() {
    currentCitizenshipSubMode = 'list';
    document.getElementById("citizenship-tab-list").classList.add("active");
    document.getElementById("citizenship-tab-quiz").classList.remove("active");
    document.getElementById("citizenship-submode-list").classList.add("active");
    document.getElementById("citizenship-submode-quiz").classList.remove("active");

    renderCitizenshipList();
}

function toggleCitizenshipSubMode(submode) {
    currentCitizenshipSubMode = submode;
    document.getElementById("citizenship-tab-list").classList.remove("active");
    document.getElementById("citizenship-tab-quiz").classList.remove("active");
    document.getElementById("citizenship-submode-list").classList.remove("active");
    document.getElementById("citizenship-submode-quiz").classList.remove("active");

    if (submode === 'list') {
        document.getElementById("citizenship-tab-list").classList.add("active");
        document.getElementById("citizenship-submode-list").classList.add("active");
        renderCitizenshipList();
    } else if (submode === 'quiz') {
        document.getElementById("citizenship-tab-quiz").classList.add("active");
        document.getElementById("citizenship-submode-quiz").classList.add("active");
        startCitizenshipQuiz();
    }
}

function renderCitizenshipList() {
    const listContainer = document.getElementById("citizenship-cards-list");
    listContainer.innerHTML = citizenshipDatabase.map(cit => `
        <div class="lit-card" style="border-left: 4px solid var(--color-vatandaslik);">
            <div class="lit-card-header">
                <div class="lit-title-area">
                    <span class="lit-book-title" style="color: var(--color-vatandaslik);">📜 ${cit.name}</span>
                </div>
            </div>
            <p class="lit-card-desc"><strong>Sayılar / Yetkililer:</strong> ${cit.locations}</p>
            <p class="lit-card-desc"><strong>Açıklama:</strong> ${cit.description}</p>
            <div class="lit-importance-box" style="border-left-color: var(--color-vatandaslik); background-color: rgba(99, 102, 241, 0.03);">
                <strong>KPSS Püf Noktası:</strong> ${cit.factories}
            </div>
        </div>
    `).join('');
}

const citizenshipQuestionsPool = [
    { text: "Cumhurbaşkanı seçilebilmek için en az kaç yaşında olmak gerekir?", options: ["18", "25", "30", "40"], answer: "40" } ,
    { text: "Anayasa Mahkemesi'nin (AYM) toplam üye sayısı kaçtır?", options: ["7", "11", "13", "15"], answer: "15" },
    { text: "Yargıtay üyelerinin tamamını seçmekle görevli olan kurum hangisidir?", options: ["Cumhurbaşkanı", "TBMM", "Hakimler ve Savcılar Kurulu (HSK)", "Anayasa Mahkemesi"], answer: "Hakimler ve Savcılar Kurulu (HSK)" },
    { text: "Anayasa Mahkemesi üyelerinin görev süresi kaç yıldır?", options: ["4 Yıl", "5 Yıl", "9 Yıl", "12 Yıl"], answer: "12 Yıl" },
    { text: "Seçimlerin yönetim ve denetiminden sorumlu olan Yüksek Seçim Kurulu (YSK) toplam kaç üyeden oluşur?", options: ["7 Asıl (Toplam 7)", "7 Asıl, 4 Yedek (Toplam 11)", "9 Asıl, 3 Yedek (Toplam 12)", "13 Üye"], answer: "7 Asıl, 4 Yedek (Toplam 11)" },
    { text: "Olağanüstü Hal (OHAL) ilan etme yetkisi doğrudan kime aittir?", options: ["Cumhurbaşkanı", "TBMM", "İçişleri Bakanı", "Milli Güvenlik Kurulu"], answer: "Cumhurbaşkanı" },
    { text: "Kamu Başdenetçisini (Ombudsman) seçen merci hangisidir?", options: ["Cumhurbaşkanı", "TBMM", "Anayasa Mahkemesi", "Danıştay"], answer: "TBMM" },
    { text: "Aşağıdakilerden hangisi 1982 Anayasası'na göre bir 'Yüksek Mahkeme' değildir?", options: ["Yargıtay", "Danıştay", "Sayıştay", "Uyuşmazlık Mahkemesi"], answer: "Sayıştay" },
    { text: "Hakimler ve Savcılar Kurulu'nun (HSK) başkanı kimdir?", options: ["Cumhurbaşkanı", "Yargıtay Birinci Başkanı", "Adalet Bakanı", "Anayasa Mahkemesi Başkanı"], answer: "Adalet Bakanı" },
    { text: "Genel ve Özel af ilan etme yetkisi anayasamıza göre kime aittir?", options: ["Cumhurbaşkanı", "TBMM", "Adalet Bakanı", "Anayasa Mahkemesi"], answer: "TBMM" },
    { text: "657 sayılı Devlet Memurları Kanunu'na göre hizmet süresi 10 yılı aşan bir devlet memurunun yıllık izin süresi kaç gündür?", options: ["20 gün", "25 gün", "30 gün", "45 gün"], answer: "30 gün" },
    { text: "Bir köyün kurulabilmesi için nüfusunun en az ve en fazla hangi sınırlar arasında olması gerekir?", options: ["100 - 1000", "150 - 2000", "500 - 5000", "1000 - 10000"], answer: "150 - 2000" },
    { text: "Büyükşehir belediyesi kurulabilmesi için o ilin toplam nüfusunun en az kaç olması zorunludur?", options: ["250 bin", "500 bin", "750 bin", "1 milyon"], answer: "750 bin" },
    { text: "Bir yerde normal (ilçe/belde) belediye kurulabilmesi için asgari nüfus sınırı kaçtır ve belediye kimin kararı ile kurulur?", options: ["2000 - Vali Kararı", "5000 - Cumhurbaşkanı Kararı", "10000 - Kanunla", "50000 - İçişleri Bakanı Kararı"], answer: "5000 - Cumhurbaşkanı Kararı" },
    { text: "Yasama dokunulmazlığı kaldırılan veya milletvekilliği düşürülen bir milletvekili, bu karara karşı kaç gün içinde Anayasa Mahkemesi'ne başvurabilir?", options: ["7 gün", "15 gün", "30 gün", "60 gün"], answer: "7 gün" },
    { text: "Milletvekilliği düşürülen bir vekilin başvurusunu alan Anayasa Mahkemesi, iptal istemini en geç kaç gün içinde karara bağlamak zorundadır?", options: ["7 gün", "15 gün", "30 gün", "60 gün"], answer: "15 gün" },
    { text: "Siyasi partilerin genel seçimlerde milletvekili çıkarabilmesi için aşması gereken genel ülke barajı yüzde kaçtır?", options: ["%3", "%5", "%7", "%10"], answer: "%7" },
    { text: "Siyasi partilerin devlet hazinesinden mali yardım alabilmesi için milletvekili genel seçimlerinde en az yüzde kaç oy alması gerekir?", options: ["%3", "%5", "%7", "%10"], answer: "%3" },
    { text: "TBMM'de bir siyasi parti grubu kurulabilmesi için en az kaç milletvekilinin bir araya gelmesi gerekir?", options: ["20", "30", "50", "100"], answer: "20" },
    { text: "Bir siyasi partinin kurulabilmesi için en az kaç Türk vatandaşının bildirimde bulunması zorunludur?", options: ["20", "30", "50", "100"], answer: "30" },
    { text: "Milletvekili genel seçimlerinden sonra TBMM her yıl kendiliğinden (çağrısız) hangi tarihte toplanır?", options: ["1 Ekim", "29 Ekim", "1 Kasım", "1 Ocak"], answer: "1 Ekim" },
    { text: "TBMM bir yasama yılında en fazla kaç ay tatil yapabilir?", options: ["1 ay", "2 ay", "3 ay", "4 ay"], answer: "3 ay" },
    { text: "TBMM tatilde veya ara vermedeyken, meclisi doğrudan (resen) toplantıya çağırma yetkisi olan merci/makamlar hangileridir?", options: ["Sadece TBMM Başkanı", "Sadece Cumhurbaşkanı", "TBMM Başkanı ve Cumhurbaşkanı", "Bakanlar Kurulu"], answer: "TBMM Başkanı ve Cumhurbaşkanı" },
    { text: "Cumhurbaşkanlığı Kararnamelerinin anayasaya esas veya şekil bakımından aykırılığı iddiasıyla Anayasa Mahkemesi'ne en geç kaç gün içinde iptal davası açılmalıdır?", options: ["15 gün", "30 gün", "60 gün", "90 gün"], answer: "60 gün" },
    { text: "Olağanüstü Hal (OHAL) ilan süresi en fazla kaç ay olabilir ve ilan etme yetkisi kime aittir?", options: ["3 Ay - TBMM", "6 Ay - Cumhurbaşkanı", "6 Ay - İçişleri Bakanı", "1 Yıl - MGK"], answer: "6 Ay - Cumhurbaşkanı" },
    { text: "Cumhurbaşkanı tarafından ilan edilen OHAL süresini, her defasında en fazla kaç ay uzatma yetkisi TBMM'ye aittir?", options: ["2 Ay", "4 Ay", "6 Ay", "1 Yıl"], answer: "4 Ay" },
    { text: "Sağır ve dilsizlerde Türk Ceza Kanunu'na göre ceza ehliyeti yaşı kaç yaşın doldurulmasıyla başlar?", options: ["12", "15", "18", "21"], answer: "15" },
    { text: "Kamu Başdenetçisi (Ombudsman) görev süresi kaç yıldır ve kim tarafından seçilir?", options: ["4 Yıl - TBMM", "5 Yıl - Cumhurbaşkanı", "9 Yıl - Anayasa Mahkemesi", "12 Yıl - HSK"], answer: "4 Yıl - TBMM" },
    { text: "Hakimler ve Savcılar Kurulu (HSK) toplam kaç üyeden oluşur?", options: ["7", "11", "13", "15"], answer: "13" },
    { text: "Anayasa Mahkemesi veya HSK üyesi seçilebilmek için asgari yaş sınırı kaçtır?", options: ["30", "35", "40", "45"], answer: "45" }
];

function startCitizenshipQuiz() {
    citizenshipQuizQuestions = [...citizenshipQuestionsPool];
    // Shuffle
    for (let i = citizenshipQuizQuestions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [citizenshipQuizQuestions[i], citizenshipQuizQuestions[j]] = [citizenshipQuizQuestions[j], citizenshipQuizQuestions[i]];
    }

    currentCitizenshipIndex = 0;
    citizenshipScore = 0;

    document.getElementById("citizenship-submode-quiz").querySelector(".quiz-setup-box").classList.remove("hidden");
    document.getElementById("citizenship-results").classList.add("hidden");

    renderCitizenshipQuestion();
}

function renderCitizenshipQuestion() {
    const q = citizenshipQuizQuestions[currentCitizenshipIndex];
    document.getElementById("citizenship-q-num").textContent = `Soru: ${currentCitizenshipIndex + 1} / 10`;
    document.getElementById("citizenship-score-correct").textContent = citizenshipScore;
    document.getElementById("citizenship-question-text").textContent = q.text;

    // Shuffle options
    const shuffledOptions = [...q.options];
    for (let i = shuffledOptions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledOptions[i], shuffledOptions[j]] = [shuffledOptions[j], shuffledOptions[i]];
    }

    const optionsGrid = document.getElementById("citizenship-options-grid");
    optionsGrid.innerHTML = shuffledOptions.map(opt => `
        <button class="results-btn secondary-btn" onclick="submitCitizenshipAnswer('${opt.replace(/'/g, "\\'")}')">${opt}</button>
    `).join('');
}

function submitCitizenshipAnswer(userAns) {
    const q = citizenshipQuizQuestions[currentCitizenshipIndex];
    const isCorrect = userAns === q.answer;

    if (isCorrect) {
        citizenshipScore++;
    }

    const buttons = document.querySelectorAll("#citizenship-options-grid button");
    buttons.forEach(btn => {
        btn.style.pointerEvents = "none";
        if (btn.textContent === q.answer) {
            btn.style.backgroundColor = "rgba(16, 185, 129, 0.2)";
            btn.style.borderColor = "var(--color-success)";
        } else if (btn.textContent === userAns) {
            btn.style.backgroundColor = "rgba(239, 68, 68, 0.2)";
            btn.style.borderColor = "var(--color-danger)";
        }
    });

    setTimeout(() => {
        if (currentCitizenshipIndex + 1 < 10) {
            currentCitizenshipIndex++;
            renderCitizenshipQuestion();
        } else {
            showCitizenshipResults();
        }
    }, 1500);
}

function showCitizenshipResults() {
    document.getElementById("citizenship-submode-quiz").querySelector(".quiz-setup-box").classList.add("hidden");
    document.getElementById("citizenship-results").classList.remove("hidden");

    const pct = Math.round((citizenshipScore / 10) * 100);
    document.getElementById("citizenship-res-pct").textContent = `${pct}%`;
}



// === OSMANLI DİVANI VE YÖNETİM SINIFLARI ENGINE ===
const osmanliDatabase = [
    { name: "Sadrazam (Veziriazam)", class: "Seyfiye", role: "Padişahın mutlak vekilidir. Padişah sefere gitmediğinde 'Serdar-ı Ekrem' sıfatıyla orduya komuta eder.", kpssNote: "Padişahın mührünü taşır. Seyfiye (Askeri/İdari) sınıfının en üst yöneticisidir." },
    { name: "Defterdar", class: "Kalemiye", role: "Devletin gelir ve giderlerini bütçe şeklinde düzenleyen maliyeden sorumlu kişidir.", kpssNote: "Maliye işleri Kalemiye sınıfına aittir. Anadolu ve Rumeli Defterdarı olmak üzere ikiye ayrılır." },
    { name: "Nişancı", class: "Kalemiye", role: "Padişah ferman ve beratlarına padişahın imzası olan Tuğrayı çeker. Tapu tahrir defterlerini tutar.", kpssNote: "Fethedilen toprakların kaydını tutan kişidir, bürokrasiyi temsil eden Kalemiye sınıfındadır." },
    { name: "Kazasker", class: "İlmiye", role: "Divandaki büyük davaları çözen adalet bakanıdır. Ayrıca kadı ve müderris atamalarını yapar.", kpssNote: "Hem adalet hem eğitimden sorumlu İlmiye sınıfının liderlerindendir. Askeri davalara da bakar." },
    { name: "Şeyhülislam (Müftü)", class: "İlmiye", role: "Divanda alınan kararların İslam dinine uygun olup olmadığına dair fetva (ifta) veren dini liderdir.", kpssNote: "Divan kararlarını onaylar, dini/hukuki meşruiyet sağlar. İlmiye sınıfının dini başıdır." },
    { name: "Reisülküttab", class: "Kalemiye", role: "Devletin dış yazışmalarından ve diplomasiden sorumludur. 17. yüzyıldan sonra önemi artmıştır.", kpssNote: "Nişancı'ya bağlı çalışırken sonradan bağımsız Dışişleri Bakanı olarak Kalemiye sınıfında yer almıştır." },
    { name: "Kaptan-ı Derya", class: "Seyfiye", role: "Osmanlı donanmasının ve deniz kuvvetlerinin başkomutanıdır. İstanbul'da bulunduğunda divana katılır.", kpssNote: "Deniz askeri kuvvetlerinin başı olduğu için Seyfiye (Askeri/İdari) sınıfına tabidir." },
    { name: "Yeniçeri Ağası", class: "Seyfiye", role: "İstanbul'un güvenliğinden ve merkez ordusu olan Yeniçerilerden sorumludur.", kpssNote: "Seyfiye sınıfının askeri kanadındadır. Rütbesi uygunsa divan toplantılarına katılır." }
];

let osmanliQuizQuestions = [];
let currentOsmanliIndex = 0;
let osmanliScore = 0;
let currentOsmanliSubMode = 'list';

function initOsmanliMode() {
    currentOsmanliSubMode = 'list';
    document.getElementById("osmanli-tab-list").classList.add("active");
    document.getElementById("osmanli-tab-quiz").classList.remove("active");
    document.getElementById("osmanli-submode-list").classList.add("active");
    document.getElementById("osmanli-submode-quiz").classList.remove("active");

    renderOsmanliList();
}

function toggleOsmanliSubMode(submode) {
    currentOsmanliSubMode = submode;
    document.getElementById("osmanli-tab-list").classList.remove("active");
    document.getElementById("osmanli-tab-quiz").classList.remove("active");
    document.getElementById("osmanli-submode-list").classList.remove("active");
    document.getElementById("osmanli-submode-quiz").classList.remove("active");

    if (submode === 'list') {
        document.getElementById("osmanli-tab-list").classList.add("active");
        document.getElementById("osmanli-submode-list").classList.add("active");
        renderOsmanliList();
    } else {
        document.getElementById("osmanli-tab-quiz").classList.add("active");
        document.getElementById("osmanli-submode-quiz").classList.add("active");
        startOsmanliQuiz();
    }
}

function renderOsmanliList() {
    const listContainer = document.getElementById("osmanli-cards-list");
    listContainer.innerHTML = osmanliDatabase.map(member => {
        let color = 'var(--color-tarih)';
        if (member.class === 'Seyfiye') color = 'var(--color-turkce)';
        else if (member.class === 'Kalemiye') color = 'var(--color-cografya)';

        return `
            <div class="lit-card" style="border-left: 4px solid ${color};">
                <div class="lit-card-header">
                    <div class="lit-title-area">
                        <span class="lit-book-title" style="color: ${color};">👑 ${member.name}</span>
                        <span class="favorite-btn" style="color: white; font-size:0.75rem; background-color: ${color}; padding: 0.15rem 0.4rem; border-radius: 4px;">${member.class}</span>
                    </div>
                </div>
                <p class="lit-card-desc"><strong>Divandaki Rolü:</strong> ${member.role}</p>
                <div class="lit-importance-box" style="border-left-color: ${color}; background-color: rgba(245, 158, 11, 0.03);">
                    <strong>KPSS Sınav Notu:</strong> ${member.kpssNote}
                </div>
            </div>
        `;
    }).join('');
}

function startOsmanliQuiz() {
    osmanliQuizQuestions = [...osmanliDatabase];
    // Shuffle
    for (let i = osmanliQuizQuestions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [osmanliQuizQuestions[i], osmanliQuizQuestions[j]] = [osmanliQuizQuestions[j], osmanliQuizQuestions[i]];
    }

    currentOsmanliIndex = 0;
    osmanliScore = 0;

    document.getElementById("osmanli-submode-quiz").querySelector(".quiz-setup-box").classList.remove("hidden");
    document.getElementById("osmanli-results").classList.add("hidden");
    document.getElementById("osmanli-explanation").classList.add("hidden");

    renderOsmanliQuestion();
}

function renderOsmanliQuestion() {
    const q = osmanliQuizQuestions[currentOsmanliIndex];
    document.getElementById("osmanli-q-num").textContent = `Soru: ${currentOsmanliIndex + 1} / 8`;
    document.getElementById("osmanli-score-correct").textContent = osmanliScore;
    document.getElementById("osmanli-question-text").textContent = `"${q.name}" hangi yönetim sınıfına (zümresine) aittir?`;
    document.getElementById("osmanli-explanation").classList.add("hidden");

    const classes = ["Seyfiye", "İlmiye", "Kalemiye"];
    const optionsGrid = document.getElementById("osmanli-options-grid");
    optionsGrid.innerHTML = classes.map(cls => `
        <button class="results-btn secondary-btn" onclick="submitOsmanliAnswer('${cls}')">${cls}</button>
    `).join('');
}

function submitOsmanliAnswer(userAns) {
    const q = osmanliQuizQuestions[currentOsmanliIndex];
    const isCorrect = userAns === q.class;

    if (isCorrect) {
        osmanliScore++;
    }

    const buttons = document.querySelectorAll("#osmanli-options-grid button");
    buttons.forEach(btn => {
        btn.style.pointerEvents = "none";
        if (btn.textContent === q.class) {
            btn.style.backgroundColor = "rgba(16, 185, 129, 0.2)";
            btn.style.borderColor = "var(--color-success)";
        } else if (btn.textContent === userAns) {
            btn.style.backgroundColor = "rgba(239, 68, 68, 0.2)";
            btn.style.borderColor = "var(--color-danger)";
        }
    });

    // Display explanation box
    const expBox = document.getElementById("osmanli-explanation");
    expBox.innerHTML = `<strong>${isCorrect ? '✔️ Doğru!' : '❌ Yanlış!'}</strong> ${q.kpssNote}`;
    expBox.classList.remove("hidden");

    setTimeout(() => {
        if (currentOsmanliIndex + 1 < 8) {
            currentOsmanliIndex++;
            renderOsmanliQuestion();
        } else {
            showOsmanliResults();
        }
    }, 2000);
}

function showOsmanliResults() {
    document.getElementById("osmanli-submode-quiz").querySelector(".quiz-setup-box").classList.add("hidden");
    document.getElementById("osmanli-results").classList.remove("hidden");

    const pct = Math.round((osmanliScore / 8) * 100);
    document.getElementById("osmanli-res-pct").textContent = `${pct}%`;
}

// === ED10 ÖZEL DERS NOTLARI VE SORU HAVUZU ENGINE ===
const customNotesDatabase = [
    // --- TARİH DERS NOTLARI ---
    { subject: "Tarih", category: "Trablusgarp Savaşı", title: "Kuzey Afrika'da Son Kayıp", desc: "Uşi Antlaşması ile Kuzey Afrika’daki son toprağımızı (Trablusgarp ve Bingazi) İtalya'ya verdik.", kpssNote: "Uşi Antlaşması İsviçre'de imzalanmıştır." },
    { subject: "Tarih", category: "Trablusgarp Savaşı", title: "Havacılık Tarihi ve İlk Savaş Uçağı", desc: "Tarihte ilk kez savaş uçağı İtalyanlar tarafından Trablusgarp Savaşı'nda Osmanlı mevzilerine karşı kullanıldı.", kpssNote: "Havacılık tarihinin ilk askeri uçuşu ve hava bombardımanı bu cephededir." },
    { subject: "Tarih", category: "Trablusgarp Savaşı", title: "Gazeteci Şerif Bey (Gizli Görev)", desc: "Mustafa Kemal, yerel halkı İtalyan işgaline karşı örgütlemek için gizlice 'Gazeteci Şerif' takma adıyla Mısır üzerinden Trablusgarp'a gitmiştir.", kpssNote: "Enver Paşa ise aynı görevle 'Kuyumcu Hamdi' takma adıyla gitmiştir." },
    { subject: "Tarih", category: "Trablusgarp Savaşı", title: "Mustafa Kemal'in Rütbesi", desc: "Mustafa Kemal, Derne ve Tobruk'taki üstün teşkilatlandırma başarılarının ardından Binbaşı rütbesine yükselmiştir.", kpssNote: "Binbaşı rütbesine bu cephedeki başarıları sonucunda ulaşmıştır." },
    { subject: "Tarih", category: "Trablusgarp Savaşı", title: "Milli Mücadele'nin İlk İşaretleri", desc: "Yerel aşiretlerin ve halkın İtalyanlara karşı başarıyla örgütlenmesi, ilerideki Milli Mücadele'nin (Kurtuluş Savaşı) kazanılacağının ilk işaretlerini vermiştir.", kpssNote: "M. Kemal'in teşkilatçılık yeteneğini gösterdiği ilk yerdir." },
    { subject: "Tarih", category: "Trablusgarp Savaşı", title: "M. Kemal'in Askeri Başarılarının İlkleri", desc: "Trablusgarp Savaşı, Mustafa Kemal'in katıldığı ilk savaştır ve kendisinden daha büyük bir orduyu yeneceğinin anlaşıldığı ilk cephedir.", kpssNote: "İlk görev yeri Şam 5. Ordu'dur (1905) fakat sıcak çatışmaya girdiği ilk savaş Trablusgarp'tır." },

    // Category: Balkan Savaşları
    { subject: "Tarih", category: "Balkan Savaşları", title: "I. Balkan Savaşı ve Düşmanlar", desc: "Bulgaristan, Yunanistan, Karadağ ve Sırbistan birleşerek Osmanlı'ya saldırdı (Arkasında Rusya desteği vardır).", kpssNote: "Osmanlıcılık fikri bu savaşın başlamasıyla ilk büyük darbesini almıştır." },
    { subject: "Tarih", category: "Balkan Savaşları", title: "Balkan Savaşı Kaybetme Sebepleri", desc: "Osmanlı'nın 4 cephede birden savaşması, ordu içine siyasetin girmesi ve savaştan hemen önce 75.000 eğitimli askerin emekli edilmesi.", kpssNote: "Ordunun siyasete karışması büyük bir askeri koordinasyonsuzluğa neden olmuştur." },
    { subject: "Tarih", category: "Balkan Savaşları", title: "Babıali Baskını (Hükümet Darbesi)", desc: "I. Balkan Savaşı'nın kaybedilmesi üzerine İttihat ve Terakki Cemiyeti hükümet darbesiyle (Babıali Baskını) yönetimi ele geçirdi.", kpssNote: "Babıali Baskını padişahı tahttan indirmemiş, sadece hükümeti (Kamil Paşa) devirmiştir." },
    { subject: "Tarih", category: "Balkan Savaşları", title: "Arnavutluk'un Ayrılması", desc: "I. Balkan Savaşı'nın yarattığı kargaşada Arnavutluk Osmanlı'dan ayrılarak bağımsızlığını ilan eden en son Balkan devleti olmuştur.", kpssNote: "Arnavutluk'un ayrılmasıyla Osmanlıcılık fikri tamamen çökmüş, Türkçülük önem kazanmıştır." },
    { subject: "Tarih", category: "Balkan Savaşları", title: "Hamidiye Kahramanı Rauf Orbay", desc: "Rauf Orbay, Hamidiye Kruvazörü ile Yunan donanmasına karşı gösterdiği üstün başarılardan dolayı 'Hamidiye Kahramanı' ünvanını almıştır.", kpssNote: "Batı Trakya ve Balkanlar elden gitmiş, sınır Meriç Nehri olmuş, Doğu Trakya işgal edilmiştir." },
    { subject: "Tarih", category: "Balkan Savaşları", title: "II. Balkan Savaşı Gelişmeleri", desc: "II. Balkan Savaşı'nda sadece Doğu Trakya (Edirne ve Kırklareli) geri alınmıştır. Edirne'yi geri alan Enver Paşa 'Edirne Fatihi' olmuştur.", kpssNote: "Romanya 1. Balkan'da yokken, 2. Balkan Savaşı'nda Bulgaristan'a karşı savaşa katılmıştır." },

    // Category: 1. Dünya Savaşı & Cepheler
    { subject: "Tarih", category: "1. Dünya Savaşı", title: "Taraf Değiştiren İtalya", desc: "Savaşın başında tarafsız olan İtalya, kendisine gizli antlaşmalarla toprak vadedilince (Londra Antlaşması) İtilaf Devletleri safına geçmiştir (1915).", kpssNote: "Japonya ise I. Dünya Savaşı'ndan en erken ayrılan devlettir." },
    { subject: "Tarih", category: "1. Dünya Savaşı", title: "Giriş ve Kapitülasyonlar", desc: "Goben ve Breslau (Yavuz ve Midilli) gemilerinin Rus limanlarını bombalamasıyla savaşa girdik. Kapitülasyonları kaldırma kararımıza en çok tepkiyi müttefikimiz Almanya verdi.", kpssNote: "Savaşa girmemizle yeni cepheler açılmış, savaşın süresi 2 yıl uzamıştır. ABD 1917'de katılmış, Rusya Bolşevik İhtilaliyle çekilmiştir." },
    { subject: "Tarih", category: "1. Dünya Savaşı", title: "Kafkasya Cephesi (Taarruz)", desc: "Ruslar ve Ermenilere karşı açıldı. Ermeni iş birlikçiler için Tehcir (Sevk ve İskân) Kanunu çıkarıldı. Başarısızlığa rağmen toprak (Kars, Ardahan, Batum) kazandığımız tek cephedir.", kpssNote: "Brest-Litovsk Antlaşması ile Bolşevik Rusya savaştan çekilirken bu toprakları bize bıraktı." },
    { subject: "Tarih", category: "1. Dünya Savaşı", title: "M. Kemal'in Kafkasya Başarısı", desc: "Mustafa Kemal, Kafkas cephesinde Ruslardan Muş ve Bitlis'i geri almış, bu başarısından dolayı Tuğgeneral rütbesine yükselmiş ve Altın Kılıç madalyası almıştır.", kpssNote: "Kafkasya Mustafa Kemal'in 1. Dünya Savaşı'ndaki ikinci cephesidir." },
    { subject: "Tarih", category: "1. Dünya Savaşı", title: "Çanakkale Cephesi (Savunma)", desc: "18 Mart Deniz Zaferi kahramanı Cevat Çobanlı'dır. M. Kemal 'Ben size taarruzu değil ölmeyi emrediyorum' demiştir.", kpssNote: "Savaş 2 yıl uzadı, Rusya'da Bolşevik ihtilali çıktı ve M. Kemal tüm dünyada tanındı." },
    { subject: "Tarih", category: "1. Dünya Savaşı", title: "Kut'ül Amare & Halil Paşa", desc: "Irak Cephesi'nde Kut'ül Amare kuşatmasında İngiliz ordusunu tümeniyle esir alan Halil Paşa, 'Kut'ül Amare Kahramanı' ilan edilmiştir.", kpssNote: "Kut (Kut Paşa) soyadı bizzat bu zaferin anısına verilmiştir." },
    { subject: "Tarih", category: "1. Dünya Savaşı", title: "Medine Müdafi & Çöl Aslanı", desc: "Fahrettin Paşa, Hicaz-Yemen cephesinde açlık ve çekirge istilasına rağmen Medine'yi İngiliz işbirlikçilerine karşı kahramanca savunmuştur.", kpssNote: "İngiliz ajanı Lawrence'ın entrikalarına rağmen Medine'yi en son teslim eden kahramandır." },

    // Category: Mondros & Gizli Antlaşmalar
    { subject: "Tarih", category: "Mondros & Gizli Antlaşmalar", title: "Mondros 7. ve 24. Maddeler", desc: "7. Madde İtilaf devletlerine güvenlik bahanesiyle işgal hakkı tanırken, 24. Madde Vilayet-i Sitte'de (6 Doğu ilinde) Ermeni Devleti kurmayı amaçlar.", kpssNote: "Vilayet-i Sitte: Bitlis, Erzurum, Van, Sivas, Elazığ, Diyarbakır (Kodlama: BESVED)." },
    { subject: "Tarih", category: "Mondros & Gizli Antlaşmalar", title: "İlk İşgaller ve Hasan Tahsin", desc: "Mondros sonrası ilk işgal edilen Osmanlı toprağı Musul'dur. Batı Anadolu'da ilk kurşunu sıkan gazeteci Hasan Tahsin'dir (Gerçek adı Osman Nevres).", kpssNote: "Milli Mücadele'de Hatay Dörtyol'da ilk kurşunu sıkan ise Kara Mehmet Çavuş'tur. İzmir'de 'Yaşasın Venizelos' demediği için şehit edilen subay Albay Süleyman Fethi Bey'dir." },
    { subject: "Tarih", category: "Mondros & Gizli Antlaşmalar", title: "Amiral Bristol Raporu", desc: "Batı Anadolu'da Rum iddialarının asılsız olduğunu ve Türklerin haklılığını kanıtlayan ilk uluslararası belgedir.", kpssNote: "Mondros'un 5. maddesi gereğince Osmanlı orduları terhis edilecektir." },
    { subject: "Tarih", category: "Mondros & Gizli Antlaşmalar", title: "Sykes-Picot Antlaşması", desc: "İngiltere ve Fransa'nın, Osmanlı'nın Orta Doğu topraklarını gizlice aralarında paylaştıkları antlaşmadır.", kpssNote: "Gizli antlaşmaları dünyaya duyuran Sovyet Rusya (Sarı Kitap ile) olmuştur." },

    // Category: Genelgeler & Kongreler
    { subject: "Tarih", category: "Genelgeler & Kongreler", title: "Havza ve Amasya Genelgeleri", desc: "Havza'da mitingler istendi (azınlıklara dokunulmamasının vurgulanmasıyla). Amasya Genelgesi'nde ise gerekçe/amaç/yöntem belirlendi ve ilk kez ulusal egemenlikten bahsedildi.", kpssNote: "Amasya Genelgesi İstanbul Hükümeti'ne karşı ilk açık başkaldırıdır." },
    { subject: "Tarih", category: "Genelgeler & Kongreler", title: "M. Kemal'in İstifası", desc: "Mustafa Kemal, Amasya Genelgesi sonrasında İstanbul Hükümeti tarafından geri çağrılınca, Erzurum Kongresi'nden önce askerlik görevinden istifa etmiştir.", kpssNote: "Sine-i Millete (sivil hayata) dönüşün ilk adımıdır." },
    { subject: "Tarih", category: "Genelgeler & Kongreler", title: "Erzurum ve Sivas Kongreleri", desc: "Erzurum bölgesel toplanıp ulusal kararlar aldı ve Temsil Heyeti'ni kurdu. Sivas ise tamamen ulusal olup tüm yararlı cemiyetleri tek bir çatı altında birleştirdi.", kpssNote: "Cemiyetler 'Anadolu ve Rumeli Müdafaa-i Hukuk Cemiyeti' adı altında birleşmiştir." },
    { subject: "Tarih", category: "Genelgeler & Kongreler", title: "Temsil Heyeti Yürütme Gücü", desc: "Temsil Heyeti, Sivas Kongresi'nde Ali Fuat Paşa'yı Batı Cephesi Komutanlığı'na atayarak ilk kez hükümet gibi davranmış ve yürütme yetkisini kullanmıştır.", kpssNote: "İrade-i Milliye gazetesi de Sivas Kongresi'nde çıkarılmıştır." },
    { subject: "Tarih", category: "Genelgeler & Kongreler", title: "Amasya Görüşmeleri", desc: "Damat Ferit hükümetinin düşürülmesi Temsil Heyeti'nin ilk siyasi zaferidir. Amasya Görüşmeleri ile İstanbul Hükümeti Temsil Heyeti'ni hukuken tanıdı.", kpssNote: "Seçimlerin yapılması ve Mebusan Meclisi'nin toplanması kararlaştırıldı." },

    // Category: Misakımilli & Gazeteler
    { subject: "Tarih", category: "Misakımilli & Gazeteler", title: "Misak-ı Milli Kararları", desc: "Son Osmanlı Mebusan Meclisi'nde kabul edildi. Sınırlar, Kars-Ardahan-Batum ve Batı Trakya için referandum kararı alındı ve kapitülasyonlar ilk kez burada reddedildi.", kpssNote: "Misak-ı Milli kararları üzerine İstanbul 16 Mart 1920'de resmen işgal edilmiştir." },
    { subject: "Tarih", category: "Misakımilli & Gazeteler", title: "İstanbul'un İşgali Tepkileri", desc: "İşgalde basılan ilk yer Şehzadebaşı Karakolu'dur. Haber M. Kemal'e telgrafla Manastırlı Hamdi tarafından ulaştırıldı. Önlem olarak Geyve-Ulukışla demiryolu tahrip edildi.", kpssNote: "Haberleşme kesilmiş ve İtilaf subayları kısasa kısas tutuklanmıştır." },
    { subject: "Tarih", category: "Misakımilli & Gazeteler", title: "Yararlı ve Zararlı Gazeteler", desc: "Yararlı: İrade-i Milliye, İleri, Açıksöz, Albayrak, Minber. Zararlı: Peyam-ı Sabah (En zararlısı), Ümit, Aydede, Zafer, Selamet, Alemdar.", kpssNote: "Peyam-ı Sabah, Milli Mücadele'ye ve Ankara hükümetine karşı en sert baltalayıcı yayınları yapan gazetedir." },

    // Category: I. TBMM Dönemi
    { subject: "Tarih", category: "I. TBMM Dönemi", title: "I. TBMM'nin Açılışı ve Yapısı", desc: "23 Nisan 1920'de Ankara'da açılmıştır. M. Kemal ismini 'Müessesiyan' (Kurucular) Meclisi olarak düşünmüştür. Meclisin açılış konuşmasını Sinop Mebusu Şerif Bey yapmıştır.", kpssNote: "Kendi görevlerini bırakıp gelemeyen milletvekilleri nedeniyle başlangıçta meclise az vekil katılmıştır." },
    { subject: "Tarih", category: "I. TBMM Dönemi", title: "24 Nisan Önergesi Kararları", desc: "TBMM'nin üstünde hiçbir güç yoktur; meclis başkanı aynı zamanda hükümet başkanıdır; meclis içinden seçilecek kurul hükümet işlerini yürütür.", kpssNote: "İlk meclis güçler birliği ilkesine ve meclis hükümeti sistemine dayanmaktadır." },
    { subject: "Tarih", category: "I. TBMM Dönemi", title: "I. TBMM Dönemi Kanunları", desc: "Çıkarılan ilk kanun Ağnam Vergisi (hayvancılık) Kanunu'dur. Ayrıca Hıyanet-i Vataniye, İstiklal Mahkemeleri ve İstiklal Marşı kanunları çıkarılmıştır.", kpssNote: "I. TBMM'nin yaptığı tek inkılap 1 Kasım 1922'de Saltanatın Kaldırılması'dır." },

    // Category: Milli Mücadele İsyanları
    { subject: "Tarih", category: "Milli Mücadele İsyanları", title: "TBMM'ye Karşı İsyanlar", desc: "İstanbul Hükümeti'nin çıkardığı Anzavur ve Kuvay-ı İnzibatiye isyanları ile İtilaf Devletleri ortaklı Konya, Bolu, Adapazarı, Afyon isyanları çıkmıştır.", kpssNote: "Kuvayımilliyeci olup düzenli orduya girmek istemeyen Çerkez Ethem ve Demirci Efe de isyan etmiştir." },
    { subject: "Tarih", category: "Milli Mücadele İsyanları", title: "İsyanlara Karşı Önlemler", desc: "Hıyanet-i Vataniye Kanunu çıkarıldı, İstiklal Mahkemeleri kuruldu, Rıfat Börekçi fetvası alındı, Anadolu Ajansı ve Hakimiyet-i Milliye gazetesi kuruldu.", kpssNote: "Halkı aydınlatmak ve irşad etmek amacıyla Anadolu'ya İrşad Heyetleri gönderilmiştir." },

    // Category: Sevr Barış Antlaşması
    { subject: "Tarih", category: "Sevr Barış Antlaşması", title: "Sevr Antlaşması Hükümsüzlüğü", desc: "10 Ağustos 1920'de imzalanan antlaşmanın taslağı San Remo Konferansı'nda hazırlandı. Mebusan Meclisi onaylamadığı için hukuken geçersiz kalmıştır.", kpssNote: "TBMM, Sevr'i imzalayan Damat Ferit hükümetini ve onaylayan Saltanat Şurası üyelerini vatan haini ilan etmiştir." },

    // Category: Kurtuluş Savaşı Cepheleri
    { subject: "Tarih", category: "Kurtuluş Savaşı Cepheleri", title: "Doğu Cephesi ve Gümrü", desc: "Kazım Karabekir komutasındaki 15. Kolordu Ermenileri yendi ve Gümrü Antlaşması (3 Aralık 1920) imzalandı. TBMM'yi tanıyan ilk devlet Ermenistan olmuştur.", kpssNote: "Gümrü, TBMM'nin ilk askeri ve siyasi zaferidir. Türkiye adı ilk kez bu antlaşmada geçmiştir." },
    { subject: "Tarih", category: "Kurtuluş Savaşı Cepheleri", title: "Güney Cephesi Direnişi", desc: "Düzenli ordu yoktur, tamamen Kuvayımilliye ve halk direnişi (Maraş'ta Sütçü İmam, Antep'te Şahin Bey, Urfa'da Onikiler Grubu) ile yürütülmüştür.", kpssNote: "Fransa ile 20 Ekim 1921 Ankara Antlaşması imzalandıktan sonra Fransa bu cepheden çekilmiştir." },
    { subject: "Tarih", category: "Kurtuluş Savaşı Cepheleri", title: "İstiklal Yolu ve Madalyalar", desc: "İnebolu-Kastamonu-Çankırı-Ankara cephane yoluna İstiklal Yolu denir. İlk İstiklal madalyasını alan ilçe Kastamonu İnebolu'dur.", kpssNote: "Maraş, Antep ve Urfa da daha sonra hem unvan hem de istiklal madalyası almışlardır." },

    // Category: Batı Cephesi Savaşları
    { subject: "Tarih", category: "Batı Cephesi Savaşları", title: "I. İnönü ve Londra Konferansı", desc: "Düzenli ordunun ilk zaferidir. Konferansta TBMM'yi Bekir Sami Bey temsil etti. İstiklal Marşı kabul edildi (Sebilürreşad dergisi ve Hakimiyet-i Milliye gazetesinde çıktı).", kpssNote: "İstiklal Marşı ilk kez 1982 Anayasası'nda yer almıştır. Bekir Sami Bey'in yerine Yusuf Kemal Tengirşenk getirilmiştir." },
    { subject: "Tarih", category: "Batı Cephesi Savaşları", title: "Moskova Antlaşması ve Batum", desc: "Sovyet Rusya ile imzalandı. Rusya TBMM'yi tanıyan ilk büyük Avrupa devleti oldu. Ancak Batum Gürcistan'a bırakılarak Misakımilli'den ilk taviz verildi.", kpssNote: "Gediz Muharebesi yenilgisi sonrasında Kuvayımilliye kaldırılarak düzenli orduya geçiş kararı alınmıştır." },
    { subject: "Tarih", category: "Batı Cephesi Savaşları", title: "Kütahya-Eskişehir ve Başkomutanlık", desc: "Düzenli ordunun aldığı tek yenilgidir. Türk ordusu Sakarya'nın doğusuna çekildi. M. Kemal'e 3 ay süreyle Başkomutanlık yetkisi verildi ve Tekalif-i Milliye yayınlandı.", kpssNote: "Mustafa Kemal bu savaşlar sırasında Ankara'da 1. Maarif (Eğitim) Kongresi'ni toplamıştır." },
    { subject: "Tarih", category: "Batı Cephesi Savaşları", title: "Sakarya Meydan Muharebesi", desc: "Subaylar Savaşı olarak bilinir. M. Kemal 'Hattı müdafaa yoktur sathı müdafaa vardır' demiştir. Kars (doğu sınırı kesinleşti) ve Ankara (Fransa ile, Hatay 2. taviz) antlaşmaları imzalandı.", kpssNote: "İtalya Anadolu'dan tamamen çekilen ilk İtilaf devleti olmuştur. M. Kemal'e Gazi unvanı ve Mareşal rütbesi verildi." },
    { subject: "Tarih", category: "Batı Cephesi Savaşları", title: "Büyük Taarruz ve Mudanya", desc: "30 Ağustos zaferiyle General Trikopis esir edildi. Mudanya Ateşkesi ile Doğu Trakya, İstanbul ve Boğazlar savaşılmadan geri alındı.", kpssNote: "Mudanya ile Kurtuluş Savaşı'nın askeri safhası sona ermiş ve barış görüşmelerine geçilmiştir." },

    // Category: Lozan Barış Antlaşması
    { subject: "Tarih", category: "Lozan Barış Antlaşması", title: "Lozan Barış Antlaşması Kararlar", desc: "Başdelege İsmet İnönü'dür. Kapitülasyonlar kaldırıldı, azınlıklar Türk vatandaşı sayıldı. Musul konusu İngiltere ile ikili görüşmelere bırakıldı.", kpssNote: "Lozan Barış Antlaşması müzakereleri I. TBMM döneminde başlasa da antlaşmayı onaylayan II. TBMM'dir." },

    // Category: Çok Partili Hayat & İsyanlar
    { subject: "Tarih", category: "Çok Partili Hayat & İsyanlar", title: "Terakkiperver Cumhuriyet Fırkası", desc: "İlk muhalefet partisidir. Kazım Karabekir (Başkan), Ali Fuat, Refet Bele, Adnan Adıvar ve Rauf Orbay kurmuştur (KARAR). Liberalizmi savunmuşlardır.", kpssNote: "Programdaki 'dini inançlara saygılıyız' ifadesi laiklik karşıtlarının odağı olmasına yol açmış ve Takrir-i Sükun ile kapatılmıştır." },
    { subject: "Tarih", category: "Çok Partili Hayat & İsyanlar", title: "Şeyh Sait İsyanı", desc: "1925'te rejime ve laikliğe karşı çıkan ilk büyük isyandır. Ali Fethi Okyar hükümeti başarısız olunca yerine İsmet İnönü Hükümeti kurulmuştur.", kpssNote: "Bu isyan nedeniyle Musul sorunu aleyhimize sonuçlanmıştır. İsyan sonrası olağanüstü Takrir-i Sükûn Kanunu çıkarılmıştır." },
    { subject: "Tarih", category: "Çok Partili Hayat & İsyanlar", title: "M. Kemal'e Suikast Girişimi", desc: "1926'da İzmir'de planlanan suikast, motorcu Şevki'nin ihbarıyla önlenmiştir. M. Kemal 'Benim naçiz vücudum...' sözünü söylemiştir.", kpssNote: "Suikastçıların yargılanması, İstiklal Mahkemelerinin son kez kullanıldığı tarihi gelişmedir." },
    { subject: "Tarih", category: "Çok Partili Hayat & İsyanlar", title: "Serbest Cumhuriyet Fırkası", desc: "1930'da 1929 Dünya Buhranı etkilerini azaltmak için M. Kemal'in isteğiyle Ali Fethi Okyar kurmuştur. Makbule Atadan da kurucular arasındadır.", kpssNote: "Kadınların seçme ve seçilme hakkını programına alan ilk partidir. Rejim karşıtlarının sızmasıyla Fethi Okyar kendi isteğiyle kapattı." },
    { subject: "Tarih", category: "Çok Partili Hayat & İsyanlar", title: "Menemen Olayı ve Kubilay", desc: "1930'da rejim karşıtı isyanda Asteğmen Kubilay şehit edilmiştir. Çok partili hayata geçiş denemelerinin ertelenmesine neden olmuştur.", kpssNote: "İsyancılar İstiklal Mahkemesinde değil, askeri mahkeme olan Divan-ı Harp'te yargılanmıştır." },

    // Category: Atatürk Dönemi Dış Politika
    { subject: "Tarih", category: "Atatürk Dönemi Dış Politika", title: "Musul Sorunu ve Ankara Antlaşması", desc: "1924 Haliç Konferansı'nda Türkiye'yi Fethi Okyar, İngiltere'yi Sir Percy Cox temsil etti. Geçici sınıra Brüksel Hattı denildi.", kpssNote: "1926 Ankara Antlaşması ile Musul, Irak'a bırakılmıştır. Şeyh Sait İsyanı elimizi zayıflatmıştır." },
    { subject: "Tarih", category: "Atatürk Dönemi Dış Politika", title: "Yabancı Okullar Sorunu", desc: "Özellikle Fransız okullarının Türk kanunlarına uyması istendi. Türkiye bunu iç mesele sayarak taviz vermedi. Dış politikadaki ilk siyasi başarıdır.", kpssNote: "Egemenlik ve bağımsızlık anlayışımızın dış politikadaki en kararlı yansımasıdır." },
    { subject: "Tarih", category: "Atatürk Dönemi Dış Politika", title: "Milletler Cemiyeti ve Balkan Antantı", desc: "Türkiye 1932'de İspanya daveti ve Yunanistan desteğiyle MC'ye üye oldu. 1934'te batı sınırını korumak için Balkan Antantı (TAYYAR) kuruldu.", kpssNote: "Arnavutluk (İtalya baskısıyla) ve Bulgaristan ( Makedonya sorunu ve Alman yanlısı revizyonist politika nedeniyle) antanta katılmadı." },
    { subject: "Tarih", category: "Atatürk Dönemi Dış Politika", title: "Montrö Boğazlar Sözleşmesi", desc: "1936'da imzalandı. Heyet başkanı Tevfik Rüştü Aras'tır. Boğazlar komisyonu kaldırıldı, boğazları silahlandırma hakkı Türkiye'ye devredildi.", kpssNote: "Türkiye'nin Boğazlar üzerindeki tam egemenliği bu antlaşma ile sağlanmıştır." },
    { subject: "Tarih", category: "Atatürk Dönemi Dış Politika", title: "Sadabat Paktı ve Akdeniz Paktı", desc: "1937'de doğu sınırını korumak için Sadabat Paktı (TİAİ) kuruldu. 1936 Akdeniz Paktı ise İtalya Habeşistan işgaline karşı kuruldu.", kpssNote: "Her iki paktta da temel amaç yayılmacı İtalyan politikalarına karşı bölgesel güvenliği sağlamaktır." },
    { subject: "Tarih", category: "Atatürk Dönemi Dış Politika", title: "Hatay Sorunu (Sancak Meselesi)", desc: "Sandler Raporu Hatay'ın Türk olduğunu kanıtladı. 1938'de kurulan Hatay Devleti 1939'da meclis kararıyla Türkiye'ye katıldı.", kpssNote: "İlk Cumhurbaşkanı Tayfur Sökmen, Başbakan Abdurrahman Melek, Meclis Başkanı Abdülgani Türkmen'dir. Atatürk 'Şahsi meselem' demiştir." },
    { subject: "Tarih", category: "Atatürk Dönemi Dış Politika", title: "Bozkurt-Lotus Davası", desc: "1926'da Ege açıklarında çarpışan Türk Bozkurt ve Fransız Lotus gemileri davasıdır. Lahey Adalet Divanı'nda Mahmut Esat Bey bizi savundu.", kpssNote: "Mahmut Esat Bey'in buradaki başarısından dolayı kendisine bizzat Atatürk tarafından 'Bozkurt' soyadı verilmiştir." },
    { subject: "Tarih", category: "Atatürk Dönemi Dış Politika", title: "Nüfus Mübadelesi (Etapli)", desc: "Rum ve Müslüman nüfusunun değişimidir. İstanbul Rumları ve Batı Trakya Türkleri yerleşik (etapli) sayılarak mübadele dışı tutulmuştur.", kpssNote: "Türkiye ile Yunanistan arasındaki en büyük ikili sorunlardan biri bu yolla çözülmüştür." },

    // Category: Atatürk Dönemi İnkılapları
    { subject: "Tarih", category: "Atatürk Dönemi İnkılapları", title: "Cumhuriyetin İlanı Görevlileri", desc: "29 Ekim 1923'te ilan edildi. İlk Cumhurbaşkanı M. Kemal, ilk Başbakan İsmet İnönü, ilk TBMM Başkanı Ali Fethi Okyar, Genelkurmay Başkanı Fevzi Çakmak.", kpssNote: "Kabine sistemine geçilerek hükümet bunalımı çözülmüştür." },
    { subject: "Tarih", category: "Atatürk Dönemi İnkılapları", title: "3 Mart 1924 İnkılapları", desc: "Halifelik kaldırıldı. Şer'iye ve Evkaf kaldırıldı (ilk Diyanet Bşk Rıfat Börekçi). Erkan-ı Harbiye kaldırıldı. Tevhid-i Tedrisat kabul edildi. Hanedan sınır dışı edildi.", kpssNote: "Eğitim ve ordunun siyasetten arındırılması yolundaki en köklü kanunlar tek günde (3 Mart) çıkarılmıştır." },
    { subject: "Tarih", category: "Atatürk Dönemi İnkılapları", title: "Anayasa Değişiklikleri", desc: "1921 anayasasının ilk değişikliği Cumhuriyetin ilanıdır (1923). 1924 anayasasından 'Devletin dini İslam'dır' ibaresi 1928'de çıkarıldı. İlkeler 1937'de girdi.", kpssNote: "Laikleşme ve anayasal modernleşme adımları bu yıllarda atılmıştır." },
    { subject: "Tarih", category: "Atatürk Dönemi İnkılapları", title: "Kadınların Siyasi Hakları (BMW)", desc: "Kadınlara siyasi haklar sırasıyla verilmiştir: Belediye seçimleri (1930), Muhtarlık seçimleri (1933) ve Vekillik (milletvekili) seçimleri (1934).", kpssNote: "1926 Medeni Kanun ile kadınlara ekonomik/sosyal haklar verilmişken siyasi haklar 1930 sonrasında gelmiştir." },
    { subject: "Tarih", category: "Atatürk Dönemi İnkılapları", title: "Eser-Yazar Eşleştirmeleri", desc: "Nutuk: Atatürk (1919-1927'yi anlatır, CHP kurultayında okundu). Çankaya: Falih Rıfkı Atay. Ankara: Yakup Kadri. Tek Adam/İkinci Adam: Şevket Süreyya.", kpssNote: "Atatürk'ün Nutuk'unun geliri Türk Tayyare (Hava) Cemiyeti'ne bağışlanmıştır." },

    { subject: "Tarih", category: "Atatürk Dönemi İnkılapları", title: "Eser-Yazar Eşleştirmeleri", desc: "Nutuk: Atatürk (1919-1927'yi anlatır, CHP kurultayında okundu). Çankaya: Falih Rıfkı Atay. Ankara: Yakup Kadri. Tek Adam/İkinci Adam: Şevket Süreyya.", kpssNote: "Atatürk'ün Nutuk'unun geliri Türk Tayyare (Hava) Cemiyeti'ne bağışlanmıştır." },

    // Category: Osmanlı Kültür & Medeniyeti
    { subject: "Tarih", category: "Osmanlı Kültür & Medeniyeti", title: "Osmanlı'da Veraset Sistemi", desc: "Veraset anlayışındaki ilk değişiklik I. Murat döneminde yapılmış (ülke padişah ve oğullarınındır), son değişiklik ise I. Ahmet döneminde Ekber ve Erşed sistemiyle (en yaşlı ve olgun üyenin tahta geçmesi) yapılmıştır.", kpssNote: "Fatih döneminde kardeş katli yasallaştırılmış ve ülke 'sadece padişahındır' anlayışı getirilmiştir." },
    { subject: "Tarih", category: "Osmanlı Kültür & Medeniyeti", title: "Hükümdar Unvanları ve Başkentler", desc: "İlk kez 'Sultan' unvanını kullanan hükümdar Orhan Bey'dir. Osmanlı hükümdarları hiçbir zaman 'Kağan' unvanını kullanmamışlardır. Başkentler sırasıyla: Söğüt, Karacahisar, Bilecik, Yenişehir, Bursa, İznik, Edirne ve İstanbul'dur.", kpssNote: "İstanbul'un diğer isimleri: Konstantiniyye, Dersaadet, Asitane, İslambol, Darülhilafe." },
    { subject: "Tarih", category: "Osmanlı Kültür & Medeniyeti", title: "Topkapı Sarayı Bölümleri", desc: "Topkapı Sarayı üç ana bölümden oluşur: Birun (dış saray, devlet işlerinin görüşüldüğü yer), Enderun (iç saray, devşirmelerin yetiştirildiği saray okulu) ve Harem (padişah ve ailesinin yaşadığı yasak yer).", kpssNote: "Enderun okuluna sadece Müslüman olan devşirmeler kabul edilirdi." },
    { subject: "Tarih", category: "Osmanlı Kültür & Medeniyeti", title: "Divan-ı Hümayun ve Tarihçesi", desc: "Devlet işlerinin görüşüldüğü divan Orhan Bey döneminde kurulmuş, Fatih döneminde sadrazamlar divana başkanlık etmeye başlamıştır. II. Mahmut döneminde kaldırılarak yerine Nazırlıklar (Bakanlıklar) kurulmuştur.", kpssNote: "Yabancı elçilerin kabul edildiği ve yeniçeri ulufe maaşlarının dağıtıldığı divana Galebe Divanı denir." },
    { subject: "Tarih", category: "Osmanlı Kültür & Medeniyeti", title: "Divan Üyeleri ve Görevleri", desc: "Sadrazam (mührü taşır, padişah vekili, emirlerine buyruldu denir), Nişancı (Tuğra çeker, Tahrir defteri tutar, örfi hukuk uzmanı), Kazasker (MEB ve Adalet bakanı, kadı/müderris atar), Defterdar (mali işler), Reisülküttab (dışişleri).", kpssNote: "Şeyhülislam, Yeniçeri Ağası, Reisülküttab ve Kaptan-ı Derya divana sonradan katılan üyelerdir. Divana katılan ilk Kaptan-ı Derya Barbaros'tur." },
    { subject: "Tarih", category: "Osmanlı Kültür & Medeniyeti", title: "Padişahın Belgeleri & Yetkileri", desc: "Ferman (yazılı emir), Kanunname (kanunlar topluluğu), Berat (atama belgesi), Hatt-ı Hümayun (padişah el yazılı emir), Adaletname (halkı yöneticilere karşı koruyan belge), Tevki (onaylama), Müsadere (mallara el koyma).", kpssNote: "Müsadere sistemi memurların haksız kazanç elde etmesini önlemeyi amaçlar; özel mülkiyeti sınırlar ve II. Mahmut tarafından kaldırılmıştır." },
    { subject: "Tarih", category: "Osmanlı Kültür & Medeniyeti", title: "Osmanlı Toplum Sınıfları", desc: "Toplum üç ana sınıfa ayrılır: Seyfiye (Askeri ve idari: Sadrazam, vezirler, beylerbeyi, sancakbeyi), İlmiye (Eğitim, adalet, din: Şeyhülislam, kazasker, kadı, müderris) ve Kalemiye (Bürokrasi ve maliye: Defterdar, nişancı, kâtipler).", kpssNote: "İlmiye sınıfı üyeleri medrese çıkışlı olup doğuştan Müslüman olmak zorundadır." },
    { subject: "Tarih", category: "Osmanlı Kültür & Medeniyeti", title: "Kadıların Görevleri & Millet Sistemi", desc: "Kadılar belediye işlerini yürütür, savcılık, noterlik ve nikah kıyma yetkisine sahiptir. İlk kadı Dursun Fakih'tir. Millet sistemi dini inanca göre Müslüman-Gayrimüslim ayrımına dayanır. Tereke defteri miras kayıtlarını tutar.", kpssNote: "Kadıların tuttuğu miras kayıtları olan Tereke Defterlerinde kişilerin fiziksel özelliklerine dair bilgi yer almaz." },
    { subject: "Tarih", category: "Osmanlı Kültür & Medeniyeti", title: "Osmanlı Eyalet Sistemi", desc: "Saliyanesiz (merkeze yakın, Tımar sistemi uygulanır, maaş yok), Saliyaneli (merkeze uzak, maaş var, İltizam sistemi uygulanır - ihaleyi alan mültezimdir, ömür boyu ihale adı Malikane'dir), İmtiyazlı (özerk; Kırım, Eflak-Boğdan, Hicaz).", kpssNote: "Hicaz bölgesi kutsal topraklar olduğu için ne vergi verir ne de asker gönderir. Kırım asker gönderir vergi vermez." },
    { subject: "Tarih", category: "Osmanlı Kültür & Medeniyeti", title: "Kapıkulu Ordusu (Merkez)", desc: "Pençik ve Devşirme sistemine dayanır. Padişaha bağlıdırlar. 3 ayda bir Ulufe maaşı, taht değişiminde Cülus bahşişi alırlar. Acemioğlanlar ilk askeri eğitim ocağıdır. Yeniçeri ocağına geçişe Kapıya Çıkma (Bedergah) denir.", kpssNote: "Kapıkulu süvarilerinden Garipler, savaş esnasında devlet hazinesini ve saltanat sancağını korumakla görevlidir." },
    { subject: "Tarih", category: "Osmanlı Kültür & Medeniyeti", title: "Eyalet Ordusu (Taşra)", desc: "En kalabalık sınıfı Tımarlı Sipahilerdir (maaş almazlar, cebelü yetiştirirler). Akıncılar (sınır öncüsü), Azaplar (bekar Türk gençleri), Deliler (korkusuz öncüler), Derbentçiler (geçit koruyucuları), Yaya ve Müsellemler (ilk düzenli ordu).", kpssNote: "Ordunun su ihtiyacını Sakalar, savaş sırasındaki haberleşmeyi ise Turnalar sağlar." },
    { subject: "Tarih", category: "Osmanlı Kültür & Medeniyeti", title: "Osmanlı Donanması", desc: "İlk tersane Orhan Bey döneminde Karamürsel'de kuruldu. İlk büyük tersane Gelibolu'da, en büyüğü ise Haliç'tedir. Donanma askerine Levent veya Azap denir. İlk Kaptan-ı Derya Saruca Paşa, divana katılan ilk kişi ise Barbaros'tur.", kpssNote: "Piri Reis ünlü denizci ve haritacı olup Kitab-ı Bahriye eseriyle tanınır. İlk zırhlı donanma Abdülaziz döneminde alınmıştır." },
    { subject: "Tarih", category: "Osmanlı Kültür & Medeniyeti", title: "Ekonomi ve Vergiler", desc: "Öşür (Müslüman çiftçiden), Haraç (gayrimüslimden), Cizye (gayrimüslim sağlıklı erkekten askere gitmediği için alınan korunma vergisi), Avarız (olağanüstü hal vergisi), Ağnam (küçükbaş hayvancılık), Çiftbozan (boş bırakma cezası).", kpssNote: "Osmanlı'da ilk bakır para Osman Bey (mangır), gümüş para Orhan Bey (akçe), altın para II. Mehmet (sultani), kağıt para Abdülmecit (kaime) dönemindedir." },
    { subject: "Tarih", category: "Osmanlı Kültür & Medeniyeti", title: "Ekonomik Kavramlar & Bankalar", desc: "İaşecilik (uygun fiyata yeterli mal bulundurma), Fiskalizm (hazine gelirini yüksek tutma), Gelenekçilik (mevcut dengeleri koruma), Gedik (ruhsat), Narh (fiyat belirleme), Kapan (toptancı hali). Bank-ı Dersaadet ilk Osmanlı bankasıdır.", kpssNote: "Mithat Paşa tarafından kurulan Memleket Sandıkları, günümüz Ziraat Bankası'nın temelidir." },
    { subject: "Tarih", category: "Osmanlı Kültür & Medeniyeti", title: "Miri Toprak Çeşitleri", desc: "Dirlik (Has-Zeamet-Tımar), Paşmaklık (saray kadınlarına), Ocaklık (kale muhafızları ve tersaneye), Yurtluk (sınır koruyucularına), Malikane (üstün hizmetlilere ömür boyu), Mukataa (geliri doğrudan hazineye), Arpalık (emeklilik/ek gelir).", kpssNote: "Tımar sistemine çiftçi gözüyle bakıldığında Çift-Hane sistemi denir." },
    { subject: "Tarih", category: "Osmanlı Kültür & Medeniyeti", title: "Osmanlı'da Eğitim Sistemi", desc: "İlk eğitim basamağı Sıbyan mektebidir. Eğitime başlarken Bed-i Besmele veya Amin Alayı töreni yapılır. İlk Osmanlı medresesi İznik Medresesi'dir ve ilk müderrisi Davud-ı Kayseri'dir. Şehzadelerin eğitildiği yer Şehzadegan Mektebidir.", kpssNote: "Medreselerin bozulmasında 'Beşik Ulemalığı' (alim oğlu alimdir anlayışı) etkili olmuştur." },
    { subject: "Tarih", category: "Osmanlı Kültür & Medeniyeti", title: "Kültür, Sanat ve Mimarlık", desc: "Fatih portresini yaptıran ilk padişahtır. Şeker Ahmet Paşa ilk resim sergisini açmıştır. Osman Hamdi Bey ünlü ressam ve müzecidir. Minyatür ustalarına Nakkaş/Musavvir denir (Matrakçı Nasuh, Levni). Hattat Şeyh Hamdullah önemlidir.", kpssNote: "Mimar Sinan'ın ustalık eseri Selimiye Camii UNESCO mirasındadır. Batı tarzında yapılan ilk cami Nuruosmaniye Camii'dir." },
    { subject: "Tarih", category: "Osmanlı Kültür & Medeniyeti", title: "Osmanlı Bilim İnsanları", desc: "Ali Kuşçu (matematik/astronomi), Sabuncuoğlu Şerafettin (cerrahi), Akşemsettin (mikrop tanımı), Piri Reis (Kitab-ı Bahriye), Seydi Ali Reis (Miratül Memalik), Takiyüddin Mehmet (ilk rasathane), Katip Çelebi (Keşfüz Zünün), Ahmed Cevdet Paşa (Mecelle).", kpssNote: "Hezarfen Ahmet Çelebi kanat takarak Galata'dan uçmuş, Lagari Hasan Çelebi ise roketle dikey uçuş gerçekleştirmiştir." },

    // --- 5. ÜNİTE: DAĞILMA DÖNEMİ, ISLAHATLAR & DÜŞÜNCE AKIMLARI ---
    { subject: "Tarih", category: "Dağılma Dönemi", title: "Sırp İsyanı (1804)", desc: "Kara Yorgi önderliğinde 1804'te 3. Selim döneminde başlayan ilk isyandır. 1812 Bükreş Antlaşması ile Sırplara ilk kez imtiyaz ve ayrıcalık verilmiştir.", kpssNote: "Osmanlı'da imtiyaz elde eden ilk azınlık Sırplardır." },
    { subject: "Tarih", category: "Dağılma Dönemi", title: "Yunan İsyanı ve Bağımsızlığı", desc: "1821'de Mora'da II. Mahmut döneminde başlamış, bastırmak için Mısır valisi Kavalalı'dan yardım istenmiştir. 1827 Navarin Baskını ile Osmanlı-Mısır donanması yakılmış ve 1829 Edirne Antlaşması ile Yunanistan bağımsız olmuştur.", kpssNote: "Osmanlı'da bağımsızlığını kazanan ilk azınlık Yunanlılardır. Edirne Antlaşması ile Sırplara da özerklik verilmiştir." },
    { subject: "Tarih", category: "Dağılma Dönemi", title: "Mısır ve Boğazlar Sorunu", desc: "Kavalalı isyanı üzerine Rusya'dan yardım istenmiş ve 1833 Hünkar İskelesi Antlaşması imzalanmıştır. Bu antlaşma ile Boğazlar sorunu başlamıştır.", kpssNote: "Hünkar İskelesi, Osmanlı'nın boğazlar konusunda tek başına karar verdiği son antlaşmadır." },
    { subject: "Tarih", category: "Dağılma Dönemi", title: "1838 Balta Limanı Antlaşması", desc: "İngilizlere en geniş kapitülasyonların verilmesiyle Osmanlı iç pazarı yabancı malların işgaline uğramış ve Osmanlı 'açık pazar/yarı sömürge' durumuna gelmiştir.", kpssNote: "Osmanlı sanayisini ve esnafını baltalayan, yerli üretimi çökerten antlaşmadır." },
    { subject: "Tarih", category: "Dağılma Dönemi", title: "1841 Londra Boğazlar Antlaşması", desc: "Boğazların yönetimi Osmanlı'da kalacak ancak barış zamanında hiçbir savaş gemisi geçemeyecektir. Boğazlar uluslararası statü kazanmıştır.", kpssNote: "Boğazlar konusunda imzalanan ilk uluslararası antlaşmadır." },
    { subject: "Tarih", category: "Dağılma Dönemi", title: "Kırım Savaşı (1853-1856)", desc: "Rus elçi Mençikof'un istekleri ve kutsal yerler sorunuyla başladı. Ruslar 1853 Sinop Baskını ile Osmanlı donanmasını yaktı. Kırım Savaşı sırasında ilk kez İngiltere'den dış borç alındı.", kpssNote: "Savaşta ilk kez telgraf hatları (Edirne-Şumnu-İstanbul) kullanılmış; Florence Nightingale Selimiye Kışlası'nda yaralı askerlere bakmıştır." },
    { subject: "Tarih", category: "Dağılma Dönemi", title: "1856 Paris Antlaşması", desc: "Osmanlı bir Avrupa devleti sayılmış ve toprakları Avrupa koruması altına alınmıştır. Hem Osmanlı hem de Rusya Karadeniz'de donanma bulunduramayacaktır.", kpssNote: "Osmanlı Karadeniz'de haklıyken galip devlet olmasına rağmen mağlup devlet muamelesi görmüştür." },
    { subject: "Tarih", category: "Dağılma Dönemi", title: "93 Harbi (1877-1878 Osmanlı-Rus Savaşı)", desc: "Nene Hatun (Erzurum) ve Gazi Osman Paşa (Plevne) kahramanlaşmıştır. Ayastefanos Antlaşması geçersiz kılınmış, yerine 1878 Berlin Antlaşması imzalanmıştır.", kpssNote: "Şartların hafifletilmesi için Kıbrıs'ın yönetimi İngiltere'ye verilmiştir. Berlin Antlaşması ile Sırbistan, Karadağ ve Romanya bağımsız olmuştur." },
    { subject: "Tarih", category: "Dağılma Dönemi", title: "Elviye-i Selase ve Doğubeyazıt", desc: "Berlin Antlaşması ile Kars, Ardahan ve Batum (Elviye-i Selase) Rusya'ya verilmiştir. Ayastefanos'ta Ruslara verilen Doğubeyazıt ise Berlin'de Osmanlı'da kalmıştır.", kpssNote: "Aynı dönemde Giritli Rumların hakları için Halepa Fermanı (1878) yayınlanmıştır." },
    { subject: "Tarih", category: "Dağılma Dönemi", title: "İstibdat Devri ve Dömeke", desc: "1878-1908 yılları arasında meclisin kapalı olduğu, İslamcılık politikasının izlendiği dönemdir. Girit sorunu nedeniyle 1897'de Dömeke Meydan Savaşı yapılmıştır.", kpssNote: "Dömeke, Osmanlı'nın kazanan taraf olarak imzaladığı son meydan savaşıdır. Mustafa Kemal liseden kaçıp katılmak istemiştir." },
    { subject: "Tarih", category: "Islahatlar", title: "II. Mahmut Islahatları (Siyasi/İdari)", desc: "Sened-i İttifak (Ayanlarla, ilk demokratikleşme belgesi), Tımar sisteminin kaldırılması, memurlara maaş ve kıyafet zorunluluğu, Müsadere sisteminin kaldırılması.", kpssNote: "Divan-ı Hümayun kaldırılarak yerine Nazırlıklar (Dahiliye, Hariciye, Başvekalet vb.) kurulmuştur." },
    { subject: "Tarih", category: "Islahatlar", title: "II. Mahmut Islahatları (Askeri/Sosyal)", desc: "Sekban-ı Cedit ve Eşkinci Ocakları kuruldu. Yeniçeri Ocağı kaldırılarak (Vaka-i Hayriye) yerine Asakir-i Mansure-i Muhammediye ordusu kuruldu.", kpssNote: "Askeri amaçlı ilk nüfus sayımı yapılmış, Mehter yasaklanarak Mızıka-i Hümayun kurulmuş, ilk resmi gazete Takvim-i Vekayi çıkarılmıştır." },
    { subject: "Tarih", category: "Islahatlar", title: "Abdülmecit Dönemi (Tanzimat Fermanı)", desc: "1839'da Mustafa Reşit Paşa hazırladı. Osmanlıcılık fikri esastır. Tüm halkın can, mal, namus güvenliği sağlanacak ve padişah dahil herkes kanunlara uyacaktır.", kpssNote: "Padişah yetkilerini ilk kez kendi isteğiyle kanun gücünün üstünde sınırlandırmıştır (hukukun üstünlüğü)." },
    { subject: "Tarih", category: "Islahatlar", title: "Abdülmecit Dönemi (Islahat Fermanı)", desc: "1856'da Ali ve Fuat Paşalar hazırladı. Azınlıklara geniş haklar verildi; cizye vergisi kaldırıldı, azınlıklara il genel meclislerine üye olma hakkı tanındı.", kpssNote: "Paris Antlaşması kararlarını etkilemek ve azınlık isyanlarını önlemek amaçlanmıştır." },
    { subject: "Tarih", category: "Islahatlar", title: "Abdülmecit Dönemi Diğer İnkılaplar", desc: "Jandarma ve polis teşkilatı kuruldu. Kaime (ilk kağıt para), ilk dış borç (İngiltere), ilk demiryolu (İzmir-Aydın), Bank-ı Dersaadet (ilk banka) kuruldu.", kpssNote: "İlk sivil yüksekokul Mekteb-i Mülkiye, ilk erkek öğretmen okulu Darülmuallimin ve ilk bilim heyeti Encümen-i Daniş bu dönemdedir." },
    { subject: "Tarih", category: "Islahatlar", title: "Abdülaziz Dönemi Islahatları", desc: "Avrupa'ya seyahat eden ilk padişahtır. Mekteb-i Sultani (Galatasaray Lisesi) açıldı. Dünyanın 3. büyük donanması kuruldu. Nizamiye Mahkemeleri kuruldu.", kpssNote: "Mecelle (Medeni Kanun) Ahmet Cevdet Paşa başkanlığındaki heyet tarafından hazırlanmaya başlanmıştır." },
    { subject: "Tarih", category: "Islahatlar", title: "II. Abdülhamit (I. Meşrutiyet)", desc: "Jön Türklerin baskısıyla 1876'da ilan edildi. Mithat Paşa öncülüğünde ilk anayasa Kanun-ı Esasi hazırlandı. İki meclisli parlamento (Mebusan ve Ayan) kuruldu.", kpssNote: "93 Harbi bahane edilerek meclis kapatılmış ve İstibdat devri başlatılmıştır." },
    { subject: "Tarih", category: "Islahatlar", title: "II. Abdülhamit Dönemi Diğer İnkılaplar", desc: "Darülaceze, Sanayi-i Nefise Mektebi, Darülhayr-ı Ali, Darülfünun (İstanbul Üni.) kuruldu. Ziraat Bankası (1888) kuruldu. Düyun-u Umumiye idaresi kuruldu.", kpssNote: "Berlin-Bağdat demiryolu ihalesi Almanlara verilmiş, doğuda Ermenilere karşı Hamidiye Alayları kurulmuştur." },
    { subject: "Tarih", category: "Dağılma Dönemi", title: "II. Meşrutiyet ve 31 Mart Olayı", desc: "1908'de İttihat ve Terakki baskısıyla II. Meşrutiyet ilan edildi (Girit, Bosna-Hersek ve Bulgaristan bu karışıklıkta kaybedildi). 1909'da rejime karşı ilk isyan olan 31 Mart Olayı çıktı.", kpssNote: "31 Mart isyanını Selanik'ten gelen Hareket Ordusu (Kurmay bşk. Mustafa Kemal) bastırmış ve II. Abdülhamit tahttan indirilmiştir." },
    { subject: "Tarih", category: "Fikir Akımları", title: "Osmanlı'yı Kurtarma Fikir Akımları", desc: "Batıcılık (Tevfik Fikret), Osmanlıcılık (eşitlik, Arnavutluk kaybıyla çöktü - Namık Kemal), İslamcılık (Halife birliği - Mehmet Akif), Türkçülük (Ziya Gökalp).", kpssNote: "Adem-i Merkeziyetçilik (federal ve liberal yapı) fikir akımının öncüsü Prens Sabahattin'dir." },

    // --- 6. ÜNİTE: OSMANLI KURULUŞ DÖNEMİ (1299-1453) ---
    { subject: "Tarih", category: "Kuruluş Dönemi", title: "Askeri ve Sosyal Gruplar", desc: "Osmanlı'nın kısa sürede büyümesinde Gaziyân-ı Rum, Ahiyân-ı Rum, Bâcıyân-ı Rum ve Abdalân-ı Rum gibi grupların büyük desteği olmuştur.", kpssNote: "Milli bilincin ve toplumsal teşkilatlanmanın temelini bu sosyal destek grupları oluşturmuştur." },
    { subject: "Tarih", category: "Kuruluş Dönemi", title: "İlk Kadı Ataması", desc: "Osman Bey döneminde Karacahisar'ın fethinden sonra ilk kadı ataması yapılmıştır.", kpssNote: "Osmanlı Devleti'nin ilk kadısı Dursun Fakih'tir." },
    { subject: "Tarih", category: "Kuruluş Dönemi", title: "Fiili Kuruluş Tartışması", desc: "Ünlü tarihçi Halil İnalcık, Osmanlı Devleti'nin fiili kuruluş tarihi olarak 1302 Koyunhisar (Bafeus) Savaşı'nı kabul eder.", kpssNote: "Koyunhisar Savaşı, Bizans ile yapılan ilk savaştır." },
    { subject: "Tarih", category: "Kuruluş Dönemi", title: "Karesioğulları Beyliği", desc: "Orhan Bey döneminde 1345'te Karesioğulları Beyliği alınmıştır.", kpssNote: "Anadolu Türk siyasi birliğini sağlamada atılan ilk adımdır ve Osmanlı'ya denizcilik gücü katmıştır." },
    { subject: "Tarih", category: "Kuruluş Dönemi", title: "Rumeli'ye İlk Geçiş", desc: "Bizans'taki taht kavgalarına yardım karşılığında 1353'te Çimpe Kalesi hediye alınmıştır.", kpssNote: "Çimpe Kalesi, Osmanlı'nın Rumeli'deki ilk toprak parçasıdır. Fethi Süleyman Paşa (Gelibolu Fatihi) yönetmiştir." },
    { subject: "Tarih", category: "Kuruluş Dönemi", title: "Orhan Bey Teşkilatlanması", desc: "Divan-ı Hümayun kuruldu, ilk vezir (Alaaddin Paşa) atandı, Yaya ve Müsellem adıyla ilk düzenli ordu kuruldu, ilk gümüş para bastırıldı.", kpssNote: "İlk Osmanlı medresesi İznik'te açılmış ve ilk müderris Davud-ı Kayseri olmuştur." },
    { subject: "Tarih", category: "Kuruluş Dönemi", title: "İlk Osmanlı-Haçlı Savaşı", desc: "I. Murat döneminde 1364 yılında Sırpsındığı Savaşı yapılmıştır.", kpssNote: "Sırpsındığı, Osmanlı ile Haçlı ordusu arasında yapılan ilk savaştır." },
    { subject: "Tarih", category: "Kuruluş Dönemi", title: "Savaş Meydanında Şehit Padişah", desc: "I. Murat, 1389 I. Kosova Savaşı zaferinden sonra savaş meydanını gezerken bir Sırp tarafından şehit edilmiştir.", kpssNote: "Savaş meydanında şehit edilen ilk ve tek Osmanlı padişahıdır." },
    { subject: "Tarih", category: "Kuruluş Dönemi", title: "Niğbolu ve Ankara Savaşları", desc: "Yıldırım Bayezit Niğbolu zaferiyle Sultan-ı İklim-i Rum unvanını almış; 1402 Ankara Savaşı'nda ise Timur'a yenilerek esir düşmüştür.", kpssNote: "Ankara Savaşı sonrasında devlette 11 yıl sürecek taht kavgaları dönemi (Fetret Devri) başlamıştır." },
    { subject: "Tarih", category: "Kuruluş Dönemi", title: "Balkanlarda Kesinleşen Türk Yurdu", desc: "II. Murat döneminde 1448 II. Kosova Savaşı ile Haçlılar yenilgiye uğratılmıştır.", kpssNote: "II. Kosova Savaşı ile Balkanlar kesin olarak Türk yurdu haline gelmiş, savunmadan taarruza geçilmiştir." },

    // --- 7. ÜNİTE: OSMANLI YÜKSELME DÖNEMİ (1453-1579) ---
    { subject: "Tarih", category: "Yükselme Dönemi", title: "Grandük Notaras Sözü", desc: "İstanbul'un kuşatılması sırasında Bizanslı devlet adamı Notaras, Katolik Kilisesi ile birleşmeye karşı çıkmıştır.", kpssNote: "'İstanbul'da Latin külahı görmektense, Osmanlı sarığı görmeyi tercih ederim' sözü meşhurdur." },
    { subject: "Tarih", category: "Yükselme Dönemi", title: "Fatih'in Denizlerdeki Fethi", desc: "1474 yılında Kırım fethedilmiştir.", kpssNote: "Kırım'ın alınmasıyla Karadeniz bir Türk gölü haline gelmiştir ve İpek Yolu kontrolü pekişmiştir." },
    { subject: "Tarih", category: "Yükselme Dönemi", title: "Cem Sultan Olayı", desc: "II. Bayezit döneminde Cem Sultan'ın Rodos şövalyelerine ve Papa'ya sığınmasıyla iç sorun dış soruna dönüşmüştür.", kpssNote: "Bu olay nedeniyle II. Bayezit döneminde batıdaki fetihler yavaşlamış ve duraklama gibi geçmiştir." },
    { subject: "Tarih", category: "Yükselme Dönemi", title: "Anadolu Türk Birliğinin Sağlanması", desc: "Yavuz Sultan Selim döneminde 1515 Turnadağ Savaşı ile Dulkadiroğulları beyliğine son verilmiştir.", kpssNote: "Turnadağ Savaşı ile Anadolu Türk siyasi birliği kesin olarak sağlanmıştır." },
    { subject: "Tarih", category: "Yükselme Dönemi", title: "Halifeliğin Osmanlı'ya Geçmesi", desc: "Yavuz Sultan Selim'in Mısır Seferi (Mercidabık 1516, Ridaniye 1517) sonucunda Memlük devleti yıkılmıştır.", kpssNote: "Halifelik Osmanlı'ya geçmiş, kutsal emanetler İstanbul'a getirilmiş, Yavuz'a Hadimü'l Haremeyn unvanı verilmiştir." },
    { subject: "Tarih", category: "Yükselme Dönemi", title: "Celali İsyanlarının Başlangıcı", desc: "Yavuz döneminde ağır vergiler ve idari memnuniyetsizlikler nedeniyle ilk Celali isyanı çıkmıştır.", kpssNote: "İlk Celali isyanı Yozgat'ta Bozoklu Celal tarafından çıkarılmıştır." },
    { subject: "Tarih", category: "Yükselme Dönemi", title: "Protokolde Sadrazam Üstünlüğü", desc: "Kanuni döneminde imzalanan 1533 İstanbul Antlaşması ile Avusturya Arşidükü Osmanlı sadrazamına denk sayılmıştır.", kpssNote: "Osmanlı, Avusturya ve Avrupa karşısında büyük bir siyasi üstünlük elde etmiştir." },
    { subject: "Tarih", category: "Yükselme Dönemi", title: "Akdeniz'in Türk Gölü Olması", desc: "Barbaros Hayreddin Paşa komutasındaki donanma 1538 Preveze Deniz Savaşı'nda Haçlı donanmasını yenmiştir.", kpssNote: "Preveze Deniz Savaşı zaferi ile Akdeniz bir Türk gölü haline gelmiştir." },
    { subject: "Tarih", category: "Yükselme Dönemi", title: "Donanmanın Yakılması (İnebahtı)", desc: "Sokullu Mehmet Paşa döneminde Kıbrıs'ın fethi (1571) üzerine Haçlılar İnebahtı'da Osmanlı donanmasını yakmıştır.", kpssNote: "Osmanlı donanmasının tarihte yakıldığı ilk olay 1571 İnebahtı savaşıdır (İÇİNAS kodlamasındaki ilk olay)." },
    { subject: "Tarih", category: "Yükselme Dönemi", title: "Sokullu'nun Kanal Projeleri", desc: "Don-Volga (Rus yayılımını önlemek, Orta Asya Türkleri ile birleşmek) ve Süveyş (Akdeniz ticaretini canlandırmak) kanalları planlanmıştır.", kpssNote: "Projedeki amaçlar coğrafi keşiflerin olumsuz etkilerini kırmak ve ticaret yollarını canlandırmaktır." },

    // --- 8. ÜNİTE: OSMANLI DURAKLAMA VE GERİLEME DÖNEMLERİ (XVII. & XVIII. YÜZYIL) ---
    { subject: "Tarih", category: "Duraklama Dönemi", title: "Büyük Kaçgun", desc: "XVII. yüzyılda Anadolu'da güvenliğin bozulması ve ağır vergiler nedeniyle köylülerin topraklarını terk etmesidir.", kpssNote: "Celali isyanlarının yarattığı en büyük toplumsal ve ekonomik göç hareketidir." },
    { subject: "Tarih", category: "Duraklama Dönemi", title: "Vaka-i Vakvakiye (Çınar Vakası)", desc: "IV. Mehmet döneminde yeniçerilerin isyan ederek 30'a yakın devlet adamını saray önündeki çınar ağacına asması olayıdır.", kpssNote: "Merkez/Yeniçeri isyanlarının saray üzerindeki baskısını gösteren en feci olaydır." },
    { subject: "Tarih", category: "Duraklama Dönemi", title: "En Geniş Sınırlar", desc: "Osmanlı, Doğu'da en geniş sınırlara 1590 Ferhat Paşa; Batı'da en geniş sınırlara ise 1672 Bucaş Antlaşması ile ulaşmıştır.", kpssNote: "Ferhat Paşa İran'la, Bucaş ise Lehistan'la imzalanmıştır." },
    { subject: "Tarih", category: "Duraklama Dönemi", title: "Siyasi Üstünlüğün Kaybedilmesi", desc: "1606 Zitvatorok Antlaşması ile Avusturya kralı Osmanlı padişahına denk sayılmıştır.", kpssNote: "1533 İstanbul Antlaşması'ndaki protokol üstünlüğü kaybedilmiş ve mütekabiliyet (eşitlik) esası gelmiştir." },
    { subject: "Tarih", category: "Duraklama Dönemi", title: "Karlofça Antlaşması (1699)", desc: "Osmanlı Devleti'nin Batı'da ilk kez çok büyük miktarda toprak kaybettiği tarihi antlaşmadır.", kpssNote: "Karlofça ile Duraklama dönemi sona ermiş, Gerileme dönemi başlamıştır." },
    { subject: "Tarih", category: "Duraklama Dönemi", title: "Köprülüler Dönemi", desc: "Sadrazam Köprülü Mehmet Paşa'nın saraya şartlar sunarak göreve gelmesiyle başlayan dönemdir.", kpssNote: "Devlet yönetiminde disiplin ve huzur sağlandığı için duraklama içinde bir 'yükselme' dönemi kabul edilir." },
    { subject: "Tarih", category: "Gerileme Dönemi", title: "Prut ve Belgrat Antlaşmaları", desc: "Prut (1711) ile kaybedilen yerleri geri alma umudu doğmuş; Belgrat (1739) ise XVIII. yüzyıldaki son kazançlı antlaşma olmuştur.", kpssNote: "Belgrat Antlaşması ile Karadeniz'in Türk gölü olduğu son kez onaylanmıştır." },
    { subject: "Tarih", category: "Gerileme Dönemi", title: "İlk Müslüman Toprak Kaybı", desc: "1774 Küçük Kaynarca Antlaşması ile Kırım bağımsız olmuş ve dini açıdan Osmanlı halifesine bağlı kalması kararlaştırılmıştır.", kpssNote: "Halkı Müslüman olan bir toprak parçası ilk kez kaybedilmiş ve halifelik siyasi alanda ilk kez kullanılmıştır." },
    { subject: "Tarih", category: "Gerileme Dönemi", title: "Nizam-ı Cedit Ordusu", desc: "III. Selim döneminde kurulan Fransa modelli modern ordu ve onun giderleri için kurulan İrad-ı Cedit hazinesidir.", kpssNote: "Nizam-ı Cedit ordusu ilk ve tek büyük başarısını Akka'da Napolyon'a karşı kazanmıştır." },
    { subject: "Tarih", category: "Gerileme Dönemi", title: "İlk Daimi Elçilik", desc: "III. Selim döneminde Londra'da ilk daimi (sürekli) elçilik açılmıştır.", kpssNote: "Osmanlı'nın ilk daimi elçisi Yusuf Agah Efendi'dir (Lale devrindeki geçici elçi ise 28 Mehmet Çelebi'dir)." },

    // --- 14. ÜNİTE: I. DÜNYA SAVAŞI - LOZAN KRONOLOJİSİ ---
    { subject: "Tarih", category: "I. Dünya Savaşı - Lozan Kronolojisi", title: "1911", desc: "Trablusgarp Savaşı başladı.", kpssNote: "İtalya saldırdı; Mustafa Kemal and Enver Bey gibi subaylar yerel halkı İtalyanlara karşı örgütledi." },
    { subject: "Tarih", category: "I. Dünya Savaşı - Lozan Kronolojisi", title: "1912", desc: "Uşi Antlaşması imzalandı.", kpssNote: "Trablusgarp ve Bingazi İtalya'ya bırakıldı; 12 Ada geçici olarak İtalya'ya teslim edildi." },
    { subject: "Tarih", category: "I. Dünya Savaşı - Lozan Kronolojisi", title: "1912 - 1913", desc: "I. Balkan Savaşı yaşandı.", kpssNote: "Balkan devletleri Osmanlı'ya saldırdı; Midye-Enez hattının batısı tamamen kaybedildi." },
    { subject: "Tarih", category: "I. Dünya Savaşı - Lozan Kronolojisi", title: "1913", desc: "II. Balkan Savaşı yaşandı.", kpssNote: "Balkan devletleri kendi aralarında savaşırken Osmanlı Edirne ve Kırklareli'yi geri aldı." },
    { subject: "Tarih", category: "I. Dünya Savaşı - Lozan Kronolojisi", title: "1913", desc: "Bükreş Antlaşması imzalandı.", kpssNote: "Balkan devletlerinin kendi aralarındaki savaşın sınırlarını ve toprak paylaşımlarını düzenledi." },
    { subject: "Tarih", category: "I. Dünya Savaşı - Lozan Kronolojisi", title: "28 Temmuz 1914", desc: "I. Dünya Savaşı resmen başladı.", kpssNote: "Savaşın başlamasına Saraybosna Suikastı (Avusturya-Macaristan veliahdının Sırp milliyetçisi tarafından öldürülmesi) kıvılcım olmuştur." },
    { subject: "Tarih", category: "I. Dünya Savaşı - Lozan Kronolojisi", title: "29 Ekim 1914", desc: "Osmanlı Devleti I. Dünya Savaşı'na fiilen girdi.", kpssNote: "Almanya'dan kaçan Goben ve Breslau (Yavuz ve Midilli) gemilerinin Rusya'nın Sivastopol ve Odessa limanlarını bombalamasıyla savaşa dahil olmuştur." },
    { subject: "Tarih", category: "I. Dünya Savaşı - Lozan Kronolojisi", title: "1914 - 1915 (Sarıkamış)", desc: "Sarıkamış Harekâtı düzenlendi.", kpssNote: "Rusya'ya karşı açılan ilk taarruz cephesi olan Kafkas Cephesi'ndeki bu harekât, dondurucu soğuklar ve salgın hastalıklar nedeniyle ağır kayıplarla (başarısızlıkla) sonuçlanmıştır." },
    { subject: "Tarih", category: "I. Dünya Savaşı - Lozan Kronolojisi", title: "1915 (Çanakkale)", desc: "Çanakkale Savaşları yapıldı.", kpssNote: "İtilaf Devletlerinin İstanbul'a ulaşıp Rusya'ya yardım götürme planları suya düştü. Mustafa Kemal Anafartalar, Conkbayırı ve Arıburnu'nda gösterdiği kahramanlıklarla askeri deha olarak öne çıktı." },
    { subject: "Tarih", category: "I. Dünya Savaşı - Lozan Kronolojisi", title: "26 Nisan 1915 (Londra)", desc: "Londra Gizli Antlaşması imzalandı.", kpssNote: "İngiltere ve Fransa, İtalya'ya 12 Ada ve Akdeniz kıyılarını vadetti. Bu antlaşmanın ardından İtalya taraf değiştirerek İtilaf Devletleri safına katıldı." },
    { subject: "Tarih", category: "I. Dünya Savaşı - Lozan Kronolojisi", title: "29 Nisan 1916 (Kut)", desc: "Osmanlı ordusu Irak Cephesi'nde Kutü'l-Amare zaferini kazandı.", kpssNote: "Halil Paşa (Kut) komutasındaki birliklerimiz, General Townshend dahil olmak üzere 5'i general 13 subay ve 13 bin İngiliz askerini esir alarak büyük bir zafer elde etti." },
    { subject: "Tarih", category: "I. Dünya Savaşı - Lozan Kronolojisi", title: "1916 (Sykes-Picot)", desc: "Sykes-Picot Gizli Antlaşması yapıldı.", kpssNote: "İngiltere ve Fransa, Osmanlı İmparatorluğu'nun Orta Doğu topraklarını kendi aralarında paylaşmak üzere gizli bir mutabakata vardı." },
    { subject: "Tarih", category: "I. Dünya Savaşı - Lozan Kronolojisi", title: "Ağustos 1916 (Kafkas)", desc: "Mustafa Kemal, Muş ve Bitlis'i Ruslardan geri aldı.", kpssNote: "Kafkas Cephesi'nde 16. Kolordu Komutanı olarak görevlendirilen Mustafa Kemal, Rus işgalindeki bu iki kritik şehri kurtararak Tuğgeneralliğe yükseltildi." },
    { subject: "Tarih", category: "I. Dünya Savaşı - Lozan Kronolojisi", title: "Nisan 1917 (St. Jean)", desc: "St. Jean de Maurienne Gizli Antlaşması yapıldı.", kpssNote: "İtalya'ya, Sykes-Picot antlaşmasına onay vermesi karşılığında Konya, Aydın, Muğla ve İzmir bölgeleri vadedildi." },
    { subject: "Tarih", category: "I. Dünya Savaşı - Lozan Kronolojisi", title: "2 Kasım 1917 (Balfour)", desc: "Balfour Deklarasyonu ilan edildi.", kpssNote: "İngiliz Dışişleri Bakanı Arthur Balfour yayımladığı resmi bildiri ile Filistin topraklarında bir Yahudi vatanı kurulmasını desteklediklerini açıkladı." },
    { subject: "Tarih", category: "I. Dünya Savaşı - Lozan Kronolojisi", title: "3 Mart 1918 (Brest)", desc: "Rusya savaştan resmen çekildi.", kpssNote: "Bolşevik İhtilali sonrası yeni Rus yönetimi İttifak Devletleri ile barış yaptı. Kars, Ardahan ve Batum (Elviye-i Selase) savaşsız olarak Osmanlı Devleti'ne iade edildi." },
    { subject: "Tarih", category: "I. Dünya Savaşı - Lozan Kronolojisi", title: "30 Ekim 1918 (Mondros)", desc: "Mondros Ateşkes Antlaşması imzalandı.", kpssNote: "Bahriye Nazırı Rauf Orbay tarafından imzalandı. 7. ve 24. maddeleriyle Anadolu'nun tamamı işgale açık hale getirildi; Osmanlı ordusu terhis edildi." },
    { subject: "Tarih", category: "I. Dünya Savaşı - Lozan Kronolojisi", title: "3 Kasım 1918 (Musul)", desc: "İngilizler Musul'u işgal etti.", kpssNote: "Mondros Ateşkesi'nin hemen ardından imzalanan hükümlere aykırı olarak ilk işgal edilen Osmanlı toprağı zengin petrol yataklarına sahip Musul olmuştur." },
    { subject: "Tarih", category: "I. Dünya Savaşı - Lozan Kronolojisi", title: "13 Kasım 1918 (İstanbul)", desc: "İtilaf Devletleri donanması İstanbul limanlarına demirledi.", kpssNote: "Suriye cephesinden dönen Mustafa Kemal, limandaki düşman zırhlılarını görünce yaveri Cevat Abbas'a tarihe geçen o sözü söyledi: 'Geldikleri gibi giderler!'" },
    { subject: "Tarih", category: "I. Dünya Savaşı - Lozan Kronolojisi", title: "15 Mayıs 1919 (İzmir)", desc: "İzmir Yunanlılar tarafından işgal edildi.", kpssNote: "Paris Barış Konrenası kararıyla İzmir Rumlara bırakıldı. İşgale karşı ilk kurşunu sıkan Hukuk-u Beşer gazetesi yazarı Hasan Tahsin şehit edildi." },
    { subject: "Tarih", category: "I. Dünya Savaşı - Lozan Kronolojisi", title: "19 Mayıs 1919 (Samsun)", desc: "Mustafa Kemal Samsun'a ayak bastı.", kpssNote: "9. Ordu Müfettişi sıfatıyla Bandırma Vapuru ile Samsun'a ulaşan Mustafa Kemal, Anadolu'daki halk hareketini birleştirmek için resmi olarak Milli Mücadele'yi başlattı." },
    { subject: "Tarih", category: "I. Dünya Savaşı - Lozan Kronolojisi", title: "28 Mayıs 1919 (Havza)", desc: "Havza Genelgesi yayımlandı.", kpssNote: "Mustafa Kemal'in tek başına yayımladığı bu ilk genelge ile işgallere karşı protesto mitingleri yapılması ve milli bilincin uyandırılması istendi." },
    { subject: "Tarih", category: "I. Dünya Savaşı - Lozan Kronolojisi", title: "22 Haziran 1919 (Amasya)", desc: "Amasya Genelgesi yayımlandı.", kpssNote: "Milli Mücadele'nin gerekçesi, amacı ve yöntemi belirlendi. 'Milletin istiklalini yine milletin azim ve kararı kurtaracaktır' denilerek ihtilal ve milli egemenlik çağrısı yapıldı." },
    { subject: "Tarih", category: "I. Dünya Savaşı - Lozan Kronolojisi", title: "23 Temmuz - 7 Ağustos 1919", desc: "Erzurum Kongresi toplandı.", kpssNote: "Bölgesel toplanmasına karşın milli sınırlar ('Vatan bir bütündür bölünemez') ve manda/himayenin reddi yönünde ulusal kararlar aldı. Temsil Heyeti kuruldu." },
    { subject: "Tarih", category: "I. Dünya Savaşı - Lozan Kronolojisi", title: "4 - 11 Eylül 1919 (Sivas)", desc: "Sivas Kongresi toplandı.", kpssNote: "Her yönden ulusal tek kongredir. Tüm bölgesel cemiyetler 'Anadolu ve Rumeli Müdafaa-i Hukuk Cemiyeti' altında birleştirildi. Manda ve himaye kesin olarak reddedildi." },
    { subject: "Tarih", category: "I. Dünya Savaşı - Lozan Kronolojisi", title: "20 - 22 Ekim 1919", desc: "Amasya Görüşmeleri gerçekleştirildi.", kpssNote: "Temsil Heyeti ile İstanbul Hükümeti (Salih Paşa) arasında yapıldı. İstanbul Hükümeti, Temsil Heyeti'ni hukuken ilk kez tanımış oldu." },
    { subject: "Tarih", category: "I. Dünya Savaşı - Lozan Kronolojisi", title: "27 Aralık 1919 (Ankara)", desc: "Temsil Heyeti Ankara'ya ulaştı.", kpssNote: "Ankara, ulaşım, haberleşme kolaylığı ve Batı Cephesi'ne yakınlığı nedeniyle Milli Mücadele'nin merkezi ve yönetim üssü olarak seçildi." },
    { subject: "Tarih", category: "I. Dünya Savaşı - Lozan Kronolojisi", title: "28 Ocak 1920 (Misak-ı Milli)", desc: "Misak-ı Milli Kararları kabul edildi.", kpssNote: "Son Osmanlı Mebusan Meclisi gizli oturumunda kabul edilen kararlarla, milli sınırlarımızın kırmızı çizgileri ('Kapitülasyonlar kabul edilemez', 'Sınırlar bölünemez') ilan edildi." },
    { subject: "Tarih", category: "I. Dünya Savaşı - Lozan Kronolojisi", title: "16 Mart 1920 (İstanbul)", desc: "İstanbul, İtilaf Devletleri tarafından resmen işgal edildi.", kpssNote: "Misak-ı Milli kararlarına tepki olarak İtilaf güçleri Mebusan Meclisi'ni basıp milletvekillerini sürgün etti. Bu olay Ankara'da yeni bir meclis kurulmasının yolunu açtı." },
    { subject: "Tarih", category: "I. Dünya Savaşı - Lozan Kronolojisi", title: "23 Nisan 1920 (TBMM)", desc: "I. Büyük Millet Meclisi (TBMM) açıldı.", kpssNote: "Meclisin açılış konuşmasını en yaşlı üye sıfatıyla Sinop Mebusu Şerif Bey yaptı. Egemenliğin kayıtsız şartsız millete ait olduğu ilan edildi." },
    { subject: "Tarih", category: "I. Dünya Savaşı - Lozan Kronolojisi", title: "29 Nisan 1920 (Hıyanet)", desc: "Hıyanet-i Vataniye Kanunu çıkarıldı.", kpssNote: "TBMM'nin meşruiyetini tanımayan, ayaklanmalara katılan veya milli direnişi baltalayan kişileri vatan haini sayan ve yargılayan kanundur." },
    { subject: "Tarih", category: "I. Dünya Savaşı - Lozan Kronolojisi", title: "1920 (İsyanlar & Mahkemeler)", desc: "İç İsyanlar bastırıldı ve İstiklal Mahkemeleri kuruldu.", kpssNote: "İstanbul Hükümeti ve İtilaf Devletlerince çıkarılan iç isyanları bastırmak, asker kaçaklarını cezalandırmak amacıyla üyeleri milletvekillerinden oluşan İstiklal Mahkemeleri kuruldu." },
    { subject: "Tarih", category: "I. Dünya Savaşı - Lozan Kronolojisi", title: "10 Ağustos 1920 (Sevr)", desc: "Sevr Barış Antlaşması imzalandı.", kpssNote: "Saltanat Şurası tarafından imzalanan ölüm fermanı niteliğindeki antlaşmadır. TBMM tarafından reddedilmiş, imzalayanlar vatan haini ilan edilmiştir." },
    { subject: "Tarih", category: "I. Dünya Savaşı - Lozan Kronolojisi", title: "28 Eylül - 30 Ekim 1920", desc: "Ermeni Harekâtı düzenlendi.", kpssNote: "Doğu Cephesi Komutanı Kazım Karabekir komutasındaki 15. Kolordu, Ermeni kuvvetlerini yenilgiye uğratarak Kars, Sarıkamış ve Iğdır'ı geri aldı." },
    { subject: "Tarih", category: "I. Dünya Savaşı - Lozan Kronolojisi", title: "3 Düzül 1920 (Gümrü)", desc: "Gümrü Antlaşması imzalandı.", kpssNote: "Ermenistan ile imzalanan antlaşma, TBMM'nin ilk askeri ve siyasi başarısıdır. Ermenistan Sevr'deki hak iddialarından vazgeçen ilk devlet olmuştur." },
    { subject: "Tarih", category: "I. Dünya Savaşı - Lozan Kronolojisi", title: "Ekim 1920 (Gediz)", desc: "Gediz Taarruzu başarısız oldu.", kpssNote: "Ali Fuat Cebesoy yönetimindeki Kuvayımilliye birliklerinin Yunan ordusuna karşı yaptığı bu saldırı yenilgiyle bitince Batı Cephesi ikiye bölündü ve düzenli orduya geçildi." },
    { subject: "Tarih", category: "I. Dünya Savaşı - Lozan Kronolojisi", title: "6 - 10 Ocak 1921 (I. İnönü)", desc: "I. İnönü Muharebesi kazanıldı.", kpssNote: "Albay İsmet Bey komutasındaki düzenli ordunun Batı cephesindeki ilk askeri zaferidir. Meclise duyulan güven artmıştır." },
    { subject: "Tarih", category: "I. Dünya Savaşı - Lozan Kronolojisi", title: "20 Ocak 1921 (Anayasa)", desc: "Teşkilat-ı Esasiye Kanunu kabul edildi.", kpssNote: "TBMM'nin kabul ettiği ilk anayasa olup, güçler birliği ilkesi ve 'Egemenlik kayıtsız şartsız milletindir' maddesiyle yeni Türk devletinin hukuki temelini oluşturmuştur." },
    { subject: "Tarih", category: "I. Dünya Savaşı - Lozan Kronolojisi", title: "12 Mart 1921 (Milli Marş)", desc: "İstiklal Marşı kabul edildi.", kpssNote: "Mehmet Akif Ersoy'un kahraman ordumuza ithafen yazdığı şiir, TBMM'de milli marş olarak kabul edildi. Şiir ilk kez Açıksöz ve Sebilürreşad yayınlarında yer almıştır." },
    { subject: "Tarih", category: "I. Dünya Savaşı - Lozan Kronolojisi", title: "16 Mart 1921 (Moskova)", desc: "Moskova Antlaşması imzalandı.", kpssNote: "Sovyet Rusya ile imzalandı. Rusya TBMM'yi tanıyan ilk büyük Avrupa devleti oldu. Batum Gürcistan'a verilerek Misak-ı Milli'den ilk taviz verilmiş oldu." },
    { subject: "Tarih", category: "I. Dünya Savaşı - Lozan Kronolojisi", title: "Şubat-Mart 1921 (Londra)", desc: "Londra Konferansı toplandı.", kpssNote: "İtilaf Devletleri Sevr'i yumuşatarak kabul ettirmek istedi. TBMM barış yanlısı olduğunu ve Misak-ı Milli'yi dünyaya duyurmak için katıldı. TBMM hukuken ilk kez tanındı." },
    { subject: "Tarih", category: "I. Dünya Savaşı - Lozan Kronolojisi", title: "23 Mart - 1 Nisan 1921", desc: "II. İnönü Muharebesi kazanıldı.", kpssNote: "Yunan taarruzu tekrar durduruldu. İsmet Paşa komutasındaki düzenli ordunun ikinci başarısı üzerine İtalya ve Fransa Anadolu'dan çekilme hazırlıklarına başladı." },
    { subject: "Tarih", category: "I. Dünya Savaşı - Lozan Kronolojisi", title: "Temmuz 1921 (Eskişehir)", desc: "Kütahya-Eskişehir Savaşları kaybedildi.", kpssNote: "Yunanlılara karşı alınan bu tek büyük yenilgiyle Türk ordusu Sakarya Nehri'nin doğusuna çekildi. Afyon, Eskişehir ve Kütahya elden çıktı." },
    { subject: "Tarih", category: "I. Dünya Savaşı - Lozan Kronolojisi", title: "5 Ağustos 1921 (Başkomutan)", desc: "Mustafa Kemal'e Başkomutanlık yetkisi verildi.", kpssNote: "Meclisin yetkileri 3 aylığına bizzat Mustafa Kemal'e devredildi. Bu karar, hızlı kararlar alıp Sakarya savaşına hazırlanmak amacıyla çıkarılmıştır." },
    { subject: "Tarih", category: "I. Dünya Savaşı - Lozan Kronolojisi", title: "7 - 8 Ağustos 1921", desc: "Tekalif-i Milliye Emirleri yayımlandı.", kpssNote: "Başkomutan Mustafa Kemal'in yayımladığı emirlerle, halktan yiyecek, giyecek, binek hayvanı ve cephane yardımı toplanarak ordunun savaşa hazır hale gelmesi sağlandı." },
    { subject: "Tarih", category: "I. Dünya Savaşı - Lozan Kronolojisi", title: "23 Ağustos - 13 Eylül 1921", desc: "Sakarya Meydan Muharebesi kazanıldı.", kpssNote: "Melhame-i Kübra veya Subaylar Savaşı olarak anılır. Mustafa Kemal: 'Hattı müdafaa yoktur, sathı müdafaa vardır. O satıh bütün vatandır' demiştir." },
    { subject: "Tarih", category: "I. Dünya Savaşı - Lozan Kronolojisi", title: "13 Ekim 1921 (Kars)", desc: "Kars Antlaşması imzalandı.", kpssNote: "Azerbaycan, Ermenistan ve Gürcistan ile imzalandı. Kars Antlaşması ile doğu sınırımız kesin ve nihai halini almıştır." },
    { subject: "Tarih", category: "I. Dünya Savaşı - Lozan Kronolojisi", title: "20 Ekim 1921 (Ankara)", desc: "Ankara Antlaşması imzalandı.", kpssNote: "Fransa ile imzalandı. Fransa, TBMM'yi tanıyan ilk İtilaf devleti oldu. Güney Cephesi kapandı. Ancak Hatay'ın dışarıda kalmasıyla Misak-ı Milli'den ikinci taviz verilmiş oldu." },
    { subject: "Tarih", category: "I. Dünya Savaşı - Lozan Kronolojisi", title: "26 - 30 Ağustos 1922", desc: "Büyük Taarruz ve Başkomutanlık Meydan Muharebesi yapıldı.", kpssNote: "Afyon Kocatepe'den başlayan taarruz Dumlupınar'da Yunan ordusunun imhasıyla sonuçlandı. Mustafa Kemal: 'Ordular, ilk hedefiniz Akdeniz'dir, ileri!' emrini verdi." },
    { subject: "Tarih", category: "I. Dünya Savaşı - Lozan Kronolojisi", title: "9 Eylül 1922 (Kurtuluş)", desc: "İzmir Yunan işgalinden kurtarıldı.", kpssNote: "Türk süvarilerinin İzmir'e girmesiyle Batı Anadolu'da 3 yıldır süren Yunan mezalimi ve işgali resmen son buldu." },
    { subject: "Tarih", category: "I. Dünya Savaşı - Lozan Kronolojisi", title: "18 Eylül 1922 (Temizlik)", desc: "Batı Anadolu tamamen düşman işgalinden temizlendi.", kpssNote: "Son Yunan kalıntılarının da Erdek kıyılarından denize dökülmesiyle Kurtuluş Savaşı'nın askeri safhası tamamlandı." },
    { subject: "Tarih", category: "I. Dünya Savaşı - Lozan Kronolojisi", title: "11 Ekim 1922 (Mudanya)", desc: "Mudanya Ateşkes Antlaşması imzalandı.", kpssNote: "Temsilcimiz İsmet Paşa'dır. Doğu Trakya, İstanbul ve Boğazlar savaş yapılmadan kurtarılmıştır. Kurtuluş Savaşı'nın askeri safhası bitti." },
    { subject: "Tarih", category: "I. Dünya Savaşı - Lozan Kronolojisi", title: "1 Kasım 1922 (Saltanat)", desc: "Saltanat kaldırıldı.", kpssNote: "İtilaf Devletlerinin Lozan barış görüşmelerine hem İstanbul hem Ankara hükümetlerini davet ederek ikilik çıkarma planlarını bozmak amacıyla saltanat kaldırılmıştır." },
    { subject: "Tarih", category: "I. Dünya Savaşı - Lozan Kronolojisi", title: "24 Temmuz 1923 (Lozan)", desc: "Lozan Barış Antlaşması imzalandı.", kpssNote: "İsmet İnönü başdelegedir. Sevr geçersiz kılınmış, kapitülasyonlar tamamen kaldırılmış, azınlıklar Türk vatandaşı sayılmış ve Türkiye'nin bağımsızlığı tescillenmiştir." },

    { subject: "Tarih", category: "I. Dünya Savaşı - Lozan Kronolojisi", title: "24 Temmuz 1923 (Lozan)", desc: "Lozan Barış Antlaşması imzalandı.", kpssNote: "İsmet İnönü başdelegedir. Sevr geçersiz kılınmış, kapitülasyonlar tamamen kaldırılmış, azınlıklar Türk vatandaşı sayılmış ve Türkiye'nin bağımsızlığı tescillenmiştir." },

    // --- 15. ÜNİTE: OSMANLI DEVLETİ GENEL KRONOLOJİSİ ---
    // Kuruluş Dönemi
    { subject: "Tarih", category: "Osmanlı Genel Kronolojisi", eraGroup: "Kuruluş", title: "1299", desc: "Osmanlı Beyliği kuruldu.", kpssNote: "Osman Bey liderliğinde bağımsız bir yapı haline geldi." },
    { subject: "Tarih", category: "Osmanlı Genel Kronolojisi", eraGroup: "Kuruluş", title: "1302", desc: "Koyunhisar Savaşı kazanıldı.", kpssNote: "Bizans'a karşı kazanılan ilk önemli Osmanlı zaferidir. Halil İnalcık tarafından beyliğin fiili kuruluşu kabul edilir." },
    { subject: "Tarih", category: "Osmanlı Genel Kronolojisi", eraGroup: "Kuruluş", title: "1326", desc: "Bursa fethedildi.", kpssNote: "Osmanlı'nın ilk önemli başkentlerinden biri oldu." },
    { subject: "Tarih", category: "Osmanlı Genel Kronolojisi", eraGroup: "Kuruluş", title: "1329", desc: "Maltepe (Palekanon) Savaşı yapıldı.", kpssNote: "Bizans yenildi ve İznik ile İzmit'in alınmasının önü açıldı." },
    { subject: "Tarih", category: "Osmanlı Genel Kronolojisi", eraGroup: "Kuruluş", title: "1331", desc: "İznik fethedildi.", kpssNote: "İlk Osmanlı medresesi burada açıldı (Müderris: Davud-ı Kayseri)." },
    { subject: "Tarih", category: "Osmanlı Genel Kronolojisi", eraGroup: "Kuruluş", title: "1337", desc: "İzmit fethedildi.", kpssNote: "Kocaeli Yarımadası büyük ölçüde Osmanlı kontrolüne girdi." },
    { subject: "Tarih", category: "Osmanlı Genel Kronolojisi", eraGroup: "Kuruluş", title: "1345", desc: "Karesioğulları Beyliği alındı.", kpssNote: "İlk kez donanma gücüne sahip olundu. Anadolu Türk siyasi birliğinin ilk adımı atıldı ve Rumeli'ye geçiş kolaylaştı." },
    { subject: "Tarih", category: "Osmanlı Genel Kronolojisi", eraGroup: "Kuruluş", title: "1353", desc: "Çimpe Kalesi hediye alındı.", kpssNote: "Osmanlı'nın Rumeli'deki ilk toprak parçasıdır. Fethi Süleyman Paşa (Gelibolu Fatihi) yönetmiştir." },
    { subject: "Tarih", category: "Osmanlı Genel Kronolojisi", eraGroup: "Kuruluş", title: "1361", desc: "Edirne fethedildi.", kpssNote: "Rumeli'deki fetihlerin yönetim merkezi ve yeni başkent yapıldı." },
    { subject: "Tarih", category: "Osmanlı Genel Kronolojisi", eraGroup: "Kuruluş", title: "1364", desc: "Sırpsındığı Savaşı kazanıldı.", kpssNote: "Haçlı ordusuna karşı kazanılan tarihteki ilk büyük zaferdir." },
    { subject: "Tarih", category: "Osmanlı Genel Kronolojisi", eraGroup: "Kuruluş", title: "1371", desc: "Çirmen Savaşı yapıldı.", kpssNote: "Sırp kuvvetleri yenilerek Balkanlar'daki Osmanlı ilerleyişi hızlandı." },
    { subject: "Tarih", category: "Osmanlı Genel Kronolojisi", eraGroup: "Kuruluş", title: "1389", desc: "I. Kosova Savaşı kazanıldı.", kpssNote: "Haçlılar yenildi, I. Murat savaş meydanında şehit düştü (Savaş alanında şehit düşen tek Osmanlı padişahıdır)." },
    { subject: "Tarih", category: "Osmanlı Genel Kronolojisi", eraGroup: "Kuruluş", title: "1396", desc: "Niğbolu Savaşı kazanıldı.", kpssNote: "Haçlı ordusu ağır yenilgiye uğratıldı. Yıldırım Bayezit'e Halife tarafından 'Sultan-ı İklim-i Rum' unvanı verildi." },
    { subject: "Tarih", category: "Osmanlı Genel Kronolojisi", eraGroup: "Kuruluş", title: "1402", desc: "Ankara Savaşı kaybedildi.", kpssNote: "Timur, Osmanlı'yı yendi ve 11 yıl sürecek Fetret Devri başladı." },
    { subject: "Tarih", category: "Osmanlı Genel Kronolojisi", eraGroup: "Kuruluş", title: "1402 - 1413", desc: "Fetret Devri yaşandı.", kpssNote: "Şehzadeler arasında taht mücadeleleri nedeniyle devlet parçalanma eşiğine geldi." },
    { subject: "Tarih", category: "Osmanlı Genel Kronolojisi", eraGroup: "Kuruluş", title: "1413", desc: "Çelebi Mehmet tahta tek başına geçti.", kpssNote: "Fetret Devri'ne son verdiği için devletin 'İkinci Kurucusu' kabul edilir." },
    { subject: "Tarih", category: "Osmanlı Genel Kronolojisi", eraGroup: "Kuruluş", title: "1444", desc: "Varna Savaşı kazanıldı.", kpssNote: "Haçlı ordusu büyük bozguna uğratılarak Macar taarruzu durduruldu." },
    { subject: "Tarih", category: "Osmanlı Genel Kronolojisi", eraGroup: "Kuruluş", title: "1448", desc: "II. Kosova Savaşı kazanıldı.", kpssNote: "Balkanlarda Osmanlı üstünlüğü kesinleşti; Avrupalıların Türkleri Balkanlar'dan atma ümidi bitti." },
    { subject: "Tarih", category: "Osmanlı Genel Kronolojisi", eraGroup: "Kuruluş", title: "1453", desc: "İstanbul fethedildi.", kpssNote: "Bizans İmparatorluğu sona erdi. İstanbul yeni başkent yapıldı. Osmanlı Kuruluş'tan Yükselme dönemine geçti." },

    // Yükselme Dönemi
    { subject: "Tarih", category: "Osmanlı Genel Kronolojisi", eraGroup: "Yükselme", title: "1453 - 1481", desc: "Fatih Sultan Mehmet dönemi.", kpssNote: "İmparatorluk teşkilatlanması kuruldu, kardeş katli yasallaştı, kanunnameler hazırlandı." },
    { subject: "Tarih", category: "Osmanlı Genel Kronolojisi", eraGroup: "Yükselme", title: "1459", desc: "Sırbistan tamamen fethedildi.", kpssNote: "Belgrad hariç tüm Sırp toprakları Osmanlı topraklarına katıldı." },
    { subject: "Tarih", category: "Osmanlı Genel Kronolojisi", eraGroup: "Yükselme", title: "1461", desc: "Trabzon Rum İmparatorluğu'na son verildi.", kpssNote: "Aynı yıl Candaroğulları Beyliği alınarak Anadolu'da sınırlar genişletildi." },
    { subject: "Tarih", category: "Osmanlı Genel Kronolojisi", eraGroup: "Yükselme", title: "1473", desc: "Otlukbeli Savaşı kazanıldı.", kpssNote: "Akkoyunlu Devleti hükümdarı Uzun Hasan yenilerek Doğu Anadolu güvenliği sağlandı." },
    { subject: "Tarih", category: "Osmanlı Genel Kronolojisi", eraGroup: "Yükselme", title: "1475", desc: "Kırım Osmanlı hakimiyetine girdi.", kpssNote: "Gedik Ahmet Paşa tarafından fethedildi, Karadeniz bir Türk gölü haline geldi ve İpek Yolu kontrolü sağlandı." },
    { subject: "Tarih", category: "Osmanlı Genel Kronolojisi", eraGroup: "Yükselme", title: "1514", desc: "Çaldıran Savaşı kazanıldı.", kpssNote: "Yavuz Sultan Selim liderliğinde Safeviler mağlup edilerek Şii tehlikesi önlendi." },
    { subject: "Tarih", category: "Osmanlı Genel Kronolojisi", eraGroup: "Yükselme", title: "1515", desc: "Turnadağ Savaşı kazanıldı.", kpssNote: "Dulkadiroğulları beyliğine son verildi; Anadolu Türk siyasi birliği kesin olarak sağlandı." },
    { subject: "Tarih", category: "Osmanlı Genel Kronolojisi", eraGroup: "Yükselme", title: "1516", desc: "Mercidabık Savaşı kazanıldı.", kpssNote: "Memlükler yenildi; Suriye ve Filistin Osmanlı hakimiyetine girdi." },
    { subject: "Tarih", category: "Osmanlı Genel Kronolojisi", eraGroup: "Yükselme", title: "1517", desc: "Ridaniye Savaşı kazanıldı.", kpssNote: "Memlük Devleti yıkılarak Mısır ve Hicaz Osmanlı'ya bağlandı; halifelik makamı Osmanlılara geçti." },
    { subject: "Tarih", category: "Osmanlı Genel Kronolojisi", eraGroup: "Yükselme", title: "1521", desc: "Belgrad fethedildi.", kpssNote: "Avrupa seferleri için önemli bir askeri üs kazanıldı." },
    { subject: "Tarih", category: "Osmanlı Genel Kronolojisi", eraGroup: "Yükselme", title: "1522", desc: "Rodos adası fethedildi.", kpssNote: "St. Jean şövalyelerinden alınarak Doğu Akdeniz'in güvenliği pekiştirildi." },
    { subject: "Tarih", category: "Osmanlı Genel Kronolojisi", eraGroup: "Yükselme", title: "1526", desc: "Mohaç Meydan Savaşı kazanıldı.", kpssNote: "Macaristan ordusu yenilgiye uğratıldı; Orta Avrupa'da Osmanlı gücü zirveye ulaştı (Tarihin en kısa süren savaşı)." },
    { subject: "Tarih", category: "Osmanlı Genel Kronolojisi", eraGroup: "Yükselme", title: "1529", desc: "I. Viyana Kuşatması yapıldı.", kpssNote: "Viyana ilk kez kuşatıldı ancak kış şartlarından ötürü netice alınamadı." },
    { subject: "Tarih", category: "Osmanlı Genel Kronolojisi", eraGroup: "Yükselme", title: "1533", desc: "İstanbul Antlaşması imzalandı.", kpssNote: "Avusturya arşidükü protokolde Osmanlı sadrazamına denk sayıldı (Üstünlük sağlandı)." },
    { subject: "Tarih", category: "Osmanlı Genel Kronolojisi", eraGroup: "Yükselme", title: "1538", desc: "Preveze Deniz Savaşı kazanıldı.", kpssNote: "Barbaros Hayreddin Paşa Haçlı donanmasını bozguna uğrattı; Akdeniz Türk gölü haline geldi." },
    { subject: "Tarih", category: "Osmanlı Genel Kronolojisi", eraGroup: "Yükselme", title: "1541", desc: "Budin Osmanlı eyaletine dönüştü.", kpssNote: "Macaristan'ın ortası doğrudan Osmanlı toprağı yapıldı." },
    { subject: "Tarih", category: "Osmanlı Genel Kronolojisi", eraGroup: "Yükselme", title: "1565", desc: "Malta Kuşatması yapıldı.", kpssNote: "Kuşatma sırasında Turgut Reis şehit düştü ve kuşatma kaldırıldı." },
    { subject: "Tarih", category: "Osmanlı Genel Kronolojisi", eraGroup: "Yükselme", title: "1566", desc: "Zigetvar Seferi yapıldı.", kpssNote: "Kanuni Sultan Süleyman'ın son seferidir; kuşatma sırasında padişah vefat etmiştir." },

    // Duraklama Dönemi
    { subject: "Tarih", category: "Osmanlı Genel Kronolojisi", eraGroup: "Duraklama", title: "1571", desc: "Kıbrıs adası fethedildi.", kpssNote: "Lala Mustafa Paşa tarafından alınarak Doğu Akdeniz ticaret yollarının güvenliği tam olarak sağlandı." },
    { subject: "Tarih", category: "Osmanlı Genel Kronolojisi", eraGroup: "Duraklama", title: "1571", desc: "İnebahtı Deniz Savaşı kaybedildi.", kpssNote: "Kıbrıs'ın fethine karşılık Haçlılar Osmanlı donanmasını ilk kez yaktı." },
    { subject: "Tarih", category: "Osmanlı Genel Kronolojisi", eraGroup: "Duraklama", title: "1596", desc: "Haçova Meydan Savaşı kazanıldı.", kpssNote: "Avusturya'ya karşı kazanılan son büyük meydan savaşıdır." },
    { subject: "Tarih", category: "Osmanlı Genel Kronolojisi", eraGroup: "Duraklama", title: "1606", desc: "Zitvatorok Antlaşması imzalandı.", kpssNote: "Avusturya kralı Osmanlı padişahına denk sayıldı; diplomatik üstünlük kaybedildi (Eşitlik ilkesi)." },
    { subject: "Tarih", category: "Osmanlı Genel Kronolojisi", eraGroup: "Duraklama", title: "1639", desc: "Kasr-ı Şirin Antlaşması imzalandı.", kpssNote: "Osmanlı-Safevi sınırı büyük ölçüde bugünkü Türkiye-İran sınırına yakın şekilde belirlendi." },
    { subject: "Tarih", category: "Osmanlı Genel Kronolojisi", eraGroup: "Duraklama", title: "1683", desc: "II. Viyana Kuşatması yapıldı.", kpssNote: "Merzifonlu Kara Mustafa Paşa başarısız oldu; Avrupalı devletler Kutsal İttifak'ı kurarak Osmanlı'ya saldırdı." },

    // Gerileme Dönemi
    { subject: "Tarih", category: "Osmanlı Genel Kronolojisi", eraGroup: "Gerileme", title: "1699", desc: "Karlofça Antlaşması imzalandı.", kpssNote: "Osmanlı Batı'da ilk kez çok büyük miktarda toprak kaybetti (Gerileme dönemi başladı)." },
    { subject: "Tarih", category: "Osmanlı Genel Kronolojisi", eraGroup: "Gerileme", title: "1711", desc: "Prut Savaşı kazanıldı.", kpssNote: "Ruslar yenilerek Azak Kalesi geri alındı; kaybedilen toprakları geri alma umudu doğdu." },
    { subject: "Tarih", category: "Osmanlı Genel Kronolojisi", eraGroup: "Gerileme", title: "1718", desc: "Pasarofça Antlaşması imzalandı.", kpssNote: "Avusturya'ya toprak kaybedildi; toprak kurtarma ümidi bitip savunma politikası ve Lale Devri başladı." },
    { subject: "Tarih", category: "Osmanlı Genel Kronolojisi", eraGroup: "Gerileme", title: "1739", desc: "Belgrat Antlaşması imzalandı.", kpssNote: "XVIII. yüzyıldaki son kazançlı antlaşmadır; Belgrat geri alınarak Karadeniz'in Türk gölü olduğu son kez onaylandı." },
    { subject: "Tarih", category: "Osmanlı Genel Kronolojisi", eraGroup: "Gerileme", title: "1774", desc: "Küçük Kaynarca Antlaşması imzalandı.", kpssNote: "Kırım bağımsız oldu (İlk kez halkı Müslüman bir toprak kaybedildi). Rusya iç işlerimize karışma hakkı elde etti." },
    { subject: "Tarih", category: "Osmanlı Genel Kronolojisi", eraGroup: "Gerileme", title: "1783", desc: "Kırım Rusya tarafından ilhak edildi.", kpssNote: "Aynalıkavak Tenkihnamesi sonrasındaki fiili işgal resmileştirildi." },
    { subject: "Tarih", category: "Osmanlı Genel Kronolojisi", eraGroup: "Gerileme", title: "1787 - 1792", desc: "Osmanlı-Rusya/Avusturya Savaşları yapıldı.", kpssNote: "Fransız İhtilali (1789) nedeniyle Avusturya Ziştovi antlaşmasıyla çekildi; Rusya ile Yaş antlaşması imzalandı." },
    { subject: "Tarih", category: "Osmanlı Genel Kronolojisi", eraGroup: "Gerileme", title: "1792", desc: "Yaş Antlaşması imzalandı.", kpssNote: "Osmanlı, Kırım'ın Rusya'ya ait olduğunu resmen kabul etti; Gerileme bitti, Çöküş süreci başladı." },

    // Dağılma Dönemi
    { subject: "Tarih", category: "Osmanlı Genel Kronolojisi", eraGroup: "Dağılma", title: "1798", desc: "Fransa (Napolyon) Mısır'ı işgal etti.", kpssNote: "İlk kez denge politikası güdülerek İngiltere ve Rusya'nın askeri desteği alındı." },
    { subject: "Tarih", category: "Osmanlı Genel Kronolojisi", eraGroup: "Dağılma", title: "1808", desc: "Sened-i İttifak imzalandı.", kpssNote: "Ayanlarla yapıldı. Osmanlı tarihinde padişahın yetkilerini sınırlandıran ilk belgedir (Demokratikleşme adımı)." },
    { subject: "Tarih", category: "Osmanlı Genel Kronolojisi", eraGroup: "Dağılma", title: "1821", desc: "Mora'da Yunan İsyanı başladı.", kpssNote: "Büyük devletlerin desteğiyle milliyetçilik kaynaklı en büyük isyandır." },
    { subject: "Tarih", category: "Osmanlı Genel Kronolojisi", eraGroup: "Dağılma", title: "1826", desc: "Yeniçeri Ocağı kaldırıldı (Vaka-i Hayriye).", kpssNote: "Yerine modern Asakir-i Mansure-i Muhammediye ordusu kuruldu." },
    { subject: "Tarih", category: "Osmanlı Genel Kronolojisi", eraGroup: "Dağılma", title: "1827", desc: "Navarin Baskını yapıldı.", kpssNote: "İngiltere, Fransa ve Rusya, Osmanlı-Mısır donanmasını Navarin limanında yaktı." },
    { subject: "Tarih", category: "Osmanlı Genel Kronolojisi", eraGroup: "Dağılma", title: "1828 - 1829", desc: "Osmanlı-Rus Savaşı kaybedildi.", kpssNote: "Osmanlı ağır kayıplarla yenilerek Edirne Antlaşması'nı imzalamak zorunda kaldı." },
    { subject: "Tarih", category: "Osmanlı Genel Kronolojisi", eraGroup: "Dağılma", title: "1829", desc: "Edirne Antlaşması imzalandı.", kpssNote: "Yunanistan bağımsızlığını kazanarak Osmanlı'dan ayrılan ilk azınlık devleti oldu." },
    { subject: "Tarih", category: "Osmanlı Genel Kronolojisi", eraGroup: "Dağılma", title: "1831", desc: "Mısır Valisi Kavalalı Mehmet Ali Paşa isyan etti.", kpssNote: "İç sorun iken Osmanlı'nın dış devletlerden yardım istemesiyle uluslararası bir krize dönüştü." },
    { subject: "Tarih", category: "Osmanlı Genel Kronolojisi", eraGroup: "Dağılma", title: "1833", desc: "Kütahya Antlaşması imzalandı.", kpssNote: "Kavalalı'ya Mısır valiliğinin yanı sıra Suriye, Adana, Girit ve Cidde valilikleri verildi." },
    { subject: "Tarih", category: "Osmanlı Genel Kronolojisi", eraGroup: "Dağılma", title: "1833", desc: "Hünkâr İskelesi Antlaşması imzalandı.", kpssNote: "Rusya ile imzalandı. Boğazlar ilk kez uluslararası bir sorun haline geldi." },
    { subject: "Tarih", category: "Osmanlı Genel Kronolojisi", eraGroup: "Dağılma", title: "1838", desc: "Balta Limanı Ticaret Antlaşması imzalandı.", kpssNote: "İngiltere'ye çok geniş kapitülasyonlar verildi; Osmanlı iç pazarı yabancı malların işgaline uğradı (açık pazar)." },
    { subject: "Tarih", category: "Osmanlı Genel Kronolojisi", eraGroup: "Dağılma", title: "1839", desc: "Nizip Savaşı kaybedildi.", kpssNote: "Osmanlı ordusu Mısır kuvvetlerine karşı tekrar mağlup oldu." },
    { subject: "Tarih", category: "Osmanlı Genel Kronolojisi", eraGroup: "Dağılma", title: "1839", desc: "Tanzimat Fermanı ilan edildi.", kpssNote: "Gülhane Parkı'nda okundu. Hukukun üstünlüğü ve can/mal/namus güvencesi tüm tebaaya tanındı." },
    { subject: "Tarih", category: "Osmanlı Genel Kronolojisi", eraGroup: "Dağılma", title: "1840", desc: "Londra Sözleşmesi imzalandı.", kpssNote: "Mısır sorunu uluslararası düzeyde çözüldü; Mısır valiliği Kavalalı ailesine bırakıldı." },
    { subject: "Tarih", category: "Osmanlı Genel Kronolojisi", eraGroup: "Dağılma", title: "1841", desc: "Londra Boğazlar Sözleşmesi imzalandı.", kpssNote: "Boğazlar uluslararası statüye bağlandı; Osmanlı'nın tek başına karar verme yetkisi sona erdi." },
    { subject: "Tarih", category: "Osmanlı Genel Kronolojisi", eraGroup: "Dağılma", title: "1853 - 1856", desc: "Kırım Savaşı kazanıldı.", kpssNote: "Rusya'ya karşı İngiltere ve Fransa desteği alındı; ilk kez dış borç (İngiltere'den) alındı." },
    { subject: "Tarih", category: "Osmanlı Genel Kronolojisi", eraGroup: "Dağılma", title: "1856", desc: "Paris Antlaşması imzalandı.", kpssNote: "Osmanlı bir Avrupa devleti kabul edildi. Aynı yıl gayrimüslimlere geniş haklar tanıyan Islahat Fermanı ilan edildi." },
    { subject: "Tarih", category: "Osmanlı Genel Kronolojisi", eraGroup: "Dağılma", title: "1876", desc: "I. Meşrutiyet ilan edildi.", kpssNote: "Kanun-ı Esasi yürürlüğe girdi (Osmanlı'nın ilk anayasası). Parlamento açıldı." },
    { subject: "Tarih", category: "Osmanlı Genel Kronolojisi", eraGroup: "Dağılma", title: "1877 - 1878", desc: "93 Harbi (Osmanlı-Rus Savaşı) kaybedildi.", kpssNote: "Ağır yenilgi sonrasında Ruslarla önce Ayastefanos, sonra Berlin antlaşmaları imzalandı." },
    { subject: "Tarih", category: "Osmanlı Genel Kronolojisi", eraGroup: "Dağılma", title: "1878", desc: "Berlin Antlaşması imzalandı.", kpssNote: "Sırbistan, Karadağ ve Romanya bağımsız oldu. Kars, Ardahan ve Batum Rusya'ya bırakıldı." },
    { subject: "Tarih", category: "Osmanlı Genel Kronolojisi", eraGroup: "Dağılma", title: "1878", desc: "Meclis kapatıldı.", kpssNote: "II. Abdülhamit 93 Harbi'ni bahane ederek meclisi kapattı; 30 yıl sürecek İstibdat Dönemi başladı." },
    { subject: "Tarih", category: "Osmanlı Genel Kronolojisi", eraGroup: "Dağılma", title: "1881", desc: "Düyun-u Umumiye kuruldu.", kpssNote: "Osmanlı'nın dış borçlarının tahsilini denetlemek amacıyla kurulan Genel Borçlar İdaresi ile ekonomik bağımsızlık yitirildi." },
    { subject: "Tarih", category: "Osmanlı Genel Kronolojisi", eraGroup: "Dağılma", title: "1908", desc: "II. Meşrutiyet ilan edildi.", kpssNote: "Anayasa yeniden yürürlüğe girdi, İttihat ve Terakki'nin devlet yönetimindeki etkisi arttı." },
    { subject: "Tarih", category: "Osmanlı Genel Kronolojisi", eraGroup: "Dağılma", title: "1909", desc: "31 Mart Olayı bastırıldı.", kpssNote: "Meşrutiyet rejimine karşı çıkan ilk büyük irticai ayaklanmadır; Selanik'ten gelen Hareket Ordusu bastırdı." },

    // --- COĞRAFYA DERS NOTLARI ---
    { subject: "Coğrafya", category: "Bölgesel Kodlamalar", title: "Marmara Bölgesi", desc: "Marmara Bölgesi: Alçak (yükselti en az), Zengin (sanayi ve ekonomi en gelişmiş), Kalabalık (nüfus en fazla) özellikleri taşır.", kpssNote: "Ortalama yükseltinin en az olduğu coğrafi bölgedir." },
    { subject: "Coğrafya", category: "Bölgesel Kodlamalar", title: "Karadeniz Bölgesi", desc: "Karadeniz Bölgesi: 'Ters' (dağların uzanışından dolayı kıyı ile iç kesimler her açıdan zıttır).", kpssNote: "Nemlilik ve yağış fazladır, kıyı ile iç kesim arası geçiş zordur." },
    { subject: "Coğrafya", category: "Bölgesel Kodlamalar", title: "Ege Bölgesi", desc: "Ege Bölgesi: Kırık (kırıklı dağ yapısı), Rahat (ulaşım ve geçiş kolay), Geniş (kıta sahanlığı geniştir).", kpssNote: "Kıta sahanlığı en geniş bölgedir, kıyıda girinti çıkıntı fazladır." },
    { subject: "Coğrafya", category: "Bölgesel Kodlamalar", title: "Akdeniz Bölgesi", desc: "Akdeniz Bölgesi: Karstik (eriyebilen kireçtaşları, polyeler, mağaralar yaygındır).", kpssNote: "Teke ve Taşeli platoları en önemli karstik sahalarıdır." },
    { subject: "Coğrafya", category: "Bölgesel Kodlamalar", title: "Güneydoğu Anadolu Bölgesi", desc: "Güneydoğu Anadolu Bölgesi: Düz (sade yer şekilleri), Kurak (buharlaşma şiddetiyle kuraklık en fazla).", kpssNote: "En az yağış alan değil, buharlaşmadan dolayı en kurak olan bölgedir." },
    { subject: "Coğrafya", category: "Bölgesel Kodlamalar", title: "Doğu Anadolu Bölgesi", desc: "Doğu Anadolu Bölgesi: Yüksek (ortalama yükselti en fazla), Volkanik (volkanik dağlar ve araziler en fazla).", kpssNote: "Kuzeydoğu Anadolu'da yaz yağışları ve çernezyom topraklar görülür." },
    { subject: "Coğrafya", category: "Bölgesel Kodlamalar", title: "İç Anadolu Bölgesi", desc: "İç Anadolu Bölgesi: 'Gariban' (sade yer şekilleri, az yağış ve kuraklık).", kpssNote: "Türkiye'nin en az yağış alan bölgesidir." },

    { subject: "Coğrafya", category: "Mutlak Konum", title: "Orta Kuşak Sonuçları (A-B-C-D)", desc: "Türkiye'nin Orta Kuşakta olmasının sonuçları: Akdeniz ikliminin görülmesi, Batı rüzgarları, Cephe yağışları, Dört mevsimin belirgin yaşanması.", kpssNote: "Bu özellikleri A-B-C-D olarak kodlayabilirsiniz." },
    { subject: "Coğrafya", category: "Mutlak Konum", title: "Yengeç Dönencesinin Kuzeyinde Olmak", desc: "Güneş ışınları hiçbir zaman 90 dereceyle gelmez (gölge boyu sıfır olmaz). Güneş öğle vakti daima güneyden gelir. Güney bakı yamaçlar daima daha çok ısınır.", kpssNote: "İstisna: Karadeniz'de kışın denizellikten dolayı kuzey yamaçlar daha sıcaktır." },
    { subject: "Coğrafya", category: "Mutlak Konum", title: "Güneyden Kuzeye Gidildikçe", desc: "Güneş ışınları daralır, gölge boyu uzar, sıcaklık/buharlaşma/tuzluluk azalır, tarım olgunlaşma süresi uzar, çizgisel hız azalır, gece-gündüz süre farkı artar.", kpssNote: "Güney-kuzey yönlü bir değişim süreci soruluyorsa cevap enlem (mutlak konum) etkisidir." },
    { subject: "Coğrafya", category: "Mutlak Konum", title: "Aynı Enlem Üzerindeki Merkezler", desc: "Yıl boyunca güneş ışınlarının geliş açısı, gölge boyları, çizgisel hız, güneş ışınlarının atmosferde katettiği yol ve gece-gündüz süre farkları tamamen aynıdır.", kpssNote: "Sıcaklıkları aynı olmak zorunda değildir (özel konum/yükselti farkı bozabilir)." },

    { subject: "Coğrafya", category: "Ekinokslar & Gündüz", title: "21 Mart Ekinoksu", desc: "İlkbahar başlangıcıdır. Gece-gündüz eşittir. Bu tarihten sonra gündüzler gecelerden daha uzun olmaya başlar.", kpssNote: "Tüm dünyada 12 saat gece, 12 saat gündüz yaşanır." },
    { subject: "Coğrafya", category: "Ekinokslar & Gündüz", title: "21 Haziran Solstisi", desc: "Yaz başlangıcıdır. En uzun gündüz yaşanır. Bu tarihten sonra gündüzler kısalmaya başlar. Güneş açısı en büyük, gölge en kısadır.", kpssNote: "Kuzeye doğru gidildikçe gündüz süresi uzar." },
    { subject: "Coğrafya", category: "Ekinokslar & Gündüz", title: "23 Eylül Ekinoksu", desc: "Sonbahar başlangıcıdır. Gece-gündüz eşittir. Bu tarihten sonra geceler gündüzlerden daha uzun olmaya başlar.", kpssNote: "Aydınlanma çemberi kutup noktalarından teğet geçer." },
    { subject: "Coğrafya", category: "Ekinokslar & Gündüz", title: "21 Aralık Solstisi", desc: "Kış başlangıcıdır. En uzun gece yaşanır. Bu tarihten sonra geceler kısalmaya başlar. Güneş açısı en küçük, gölge en uzundur.", kpssNote: "Güneye doğru gidildikçe gündüz süresi uzar." },

    { subject: "Coğrafya", category: "Boylam Etkisi", title: "Aynı Boylam Üzerindeki Merkezler", desc: "Yerel saat aynıdır, öğle vakti aynıdır, gün içinde gölge boyunun en kısa olduğu an aynıdır.", kpssNote: "Güneş yalnızca ekinokslarda (21 Mart - 23 Eylül) aynı anda doğup aynı anda batar." },
    { subject: "Coğrafya", category: "Boylam Etkisi", title: "Boylam Soruları İpucu", desc: "Eğer soruda 'saat, zaman, vakit, an' kelimeleri geçiyorsa cevap daima boylam etkisi ile ilgilidir.", kpssNote: "Başlangıç meridyenine olan km mesafesi kutuplara gidildikçe azalır." },

    { subject: "Coğrafya", category: "Yer Şekilleri & Güçler", title: "Göreceli Konum", desc: "Matematik konumla (enlem-boylam) açıklanamayan; yükselti, yer şekilleri, karasallık, nemlilik ve yer yapısı gibi özelliklerin tamamıdır.", kpssNote: "Türkiye'nin batıdan doğuya sıcaklığının azalması enlemle çelişir, göreceli konumdur (yükselti)." },
    { subject: "Coğrafya", category: "Yer Şekilleri & Güçler", title: "İç Kuvvetler: Orojenez (Dağ Oluşumu)", desc: "Kırıklı dağlarda yüksek kısımlar Horst, alçak çöküntüler Graben adını alır. Kıvrımlı dağlarda yüksekler Antiklinal, alçaklar Senklinal adını alır.", kpssNote: "Ege'deki dağlar kırıklı (horst-graben), Karadeniz ve Akdeniz dağları kıvrımlıdır." },
    { subject: "Coğrafya", category: "Yer Şekilleri & Güçler", title: "İç Kuvvetler: Volkanizma", desc: "Derinlik volkanizmasının en iyi örneği Uludağ'dır (Batolit). Patlama çukurlarına Krater/Kaldera, gaz patlaması çukurlarına Maar (Meke gibi) denir.", kpssNote: "Volkanik araziler mineralce zengindir; buralarda patates ve bağcılık (üzüm) tarımı çok gelişmiştir." },
    { subject: "Coğrafya", category: "Yer Şekilleri & Güçler", title: "Dış Kuvvetler Etki Derecesi", desc: "Türkiye'nin yer şekillerinde en etkili dış kuvvet Akarsulardır. Kurak bölgelerde Rüzgarlar, karstik sahalarda Yer Altı Suları etkilidir. En az etkili olan ise Buzullardır.", kpssNote: "Buzulların en az etkili olması matematik konumumuz (orta kuşak) ile ilgilidir." },

    { subject: "Coğrafya", category: "Jeolojik Zamanlar", title: "1. Jeolojik Zaman (Paleozoik)", desc: "Masif denilen sert eski temel bloklar oluştu. Zonguldak çevresindeki taş kömürü yatakları bu zamanda meydana geldi.", kpssNote: "Taş kömürü 1. zaman, linyit ise 3. zaman ürünüdür (Karıştırmayın!)." },
    { subject: "Coğrafya", category: "Jeolojik Zamanlar", title: "2. Jeolojik Zaman (Mezozoik)", desc: "Büyük ölçüde durgunluk ve denizlerde tortulanma yaşandı. Alp-Himalaya kıvrımına hazırlık yapıldı. Fosil (Hacı balık) tabakaları birikti.", kpssNote: "Tetis denizinin tabanında büyük birikimler olmuştur." },
    { subject: "Coğrafya", category: "Jeolojik Zamanlar", title: "3. Jeolojik Zaman (Tersiyer)", desc: "Alp-Himalaya kıvrımı gerçekleşti, dağlar ve fay hatları oluştu. Tuz, bor, linyit, petrol ve doğal gaz yatakları bu zamanda oluştu.", kpssNote: "Türkiye arazisinin büyük kısmı bu zamanda oluştuğu için genç oluşumludur ve deprem riski yüksektir." },
    { subject: "Coğrafya", category: "Jeolojik Zamanlar", title: "4. Jeolojik Zaman (Kuvaterner)", desc: "Bugünkü 4 deniz oluştu, İstanbul ve Çanakkale boğazları açıldı. Anadolu toptan yükseldi (epirojenez) ve bugünkü halini aldı.", kpssNote: "Egeid karasının çökmesiyle Ege Denizi ve Boğazlar oluşmuştur." },

    { subject: "Coğrafya", category: "Dönemsel Ekonomi & Tarım", title: "1923 - 1929 Dönemi", desc: "Liberal ekonomi uygulandı. Köylüyü rahatlatmak için Aşar Vergisi kaldırıldı. Tarımda makineleşmeye geçiş başladı.", kpssNote: "Cumhuriyetin ilk yıllarında tarımı destekleme en büyük öncelikti." },
    { subject: "Coğrafya", category: "Dönemsel Ekonomi & Tarım", title: "1930 - 1950 Dönemi", desc: "Devletçilik politikası ön plana çıktı. Sümerbank, Etibank ve Karabük Demir Çelik kuruldu. I. ve II. beş yıllık sanayi planları yapıldı.", kpssNote: "Dünya ekonomik buhranı (1929) nedeniyle devletçilik zorunlu olmuştur." },
    { subject: "Coğrafya", category: "Dönemsel Ekonomi & Tarım", title: "1950 - 1960 Dönemi", desc: "İkinci liberal dönem yaşandı. Tarım ve sanayide büyük yatırımlar oldu ancak ciddi dış ticaret açığı oluştu.", kpssNote: "Karayolları yapımına bu dönemde büyük önem verilmiştir." },
    { subject: "Coğrafya", category: "Dönemsel Ekonomi & Tarım", title: "1960 - 1980 Dönemi", desc: "DPT kuruldu ve planlı kalkınmaya geçildi. Boğaziçi Köprüsü (15 Temmuz Şehitler) hizmete açıldı.", kpssNote: "DPT planlı kalkınma döneminin en önemli kurumudur." },
    { subject: "Coğrafya", category: "Dönemsel Ekonomi & Tarım", title: "1980 - Günümüz", desc: "Döviz serbest bırakıldı, açık ekonomi modeli benimsendi. İlk doğal gaz ithalatı ve serbest bölgeler kuruldu. İthalat ve krizler (1994, 2001) yaşandı.", kpssNote: "24 Ocak Kararları ile dışa açık büyüme modeli hedeflenmiştir." },
    { subject: "Coğrafya", category: "Dönemsel Ekonomi & Tarım", title: "Ekstansif ve İntansif Tarım", desc: "Ekstansif tarım ilkeldir, verim düşüktür (Doğu Anadolu/Karadeniz). İntansif tarım moderndir, sulama/gübre/makine kullanılır ve verim çok yüksektir.", kpssNote: "İntansif tarım kıyı bölgelerimizde ve GAP ile Güneydoğu'da gelişmektedir." },
    { subject: "Coğrafya", category: "Dönemsel Ekonomi & Tarım", title: "Nadas ve Nöbetleşe Tarım", desc: "Nadas toprağı boş bırakmaktır, erozyonu ve üretim dalgalanmasını artırır. Nöbetleşe tarım (münavebeli) toprağa her yıl farklı ürün ekmektir, erozyonu azaltır.", kpssNote: "Nadası azaltmanın tek kesin çözümü sulamayı geliştirmektir." },
    
    // Category: Madenler & Enerji
    { subject: "Coğrafya", category: "Madenler & Enerji", title: "Türkiye'de Madencilik", desc: "Türkiye'de maden çeşidi fazladır fakat rezerv miktarı azdır. Volkanizma nedeniyle maden çeşitliliğinin en fazla olduğu yer Yukarı Fırat Bölümü (Elazığ)'dur.", kpssNote: "Rezerv yeraltındaki toplam miktar, tenör ise cevherdeki saf metal oranıdır." },
    { subject: "Coğrafya", category: "Madenler & Enerji", title: "Bakır ve Mermer Dağılımı", desc: "Bakır en fazla Karadeniz'de (Küre, Murgul); mermer ise en fazla Marmara ve Ege'de (Marmara Adası, Afyonkarahisar) yoğunlaşmıştır.", kpssNote: "Mermer ve taş kömürü 1. jeolojik zamana aittir." },
    { subject: "Coğrafya", category: "Madenler & Enerji", title: "Barit, Boksit ve Kükürt", desc: "Barit (sondajcılıkta ağırlık yapıcı), boksit (alüminyum hammaddesi) ve kükürt (ilaç/tarım) en fazla Akdeniz Bölgesi'nde yoğunlaşmıştır.", kpssNote: "Boksit Konya Seydişehir ve Antalya Akseki'de çıkarılır." },
    { subject: "Coğrafya", category: "Madenler & Enerji", title: "Trona ve Volfram", desc: "Trona (soda külü) en fazla İç Anadolu'da (Ankara Beypazarı/Kazan); Volfram (tungsten) ise en fazla Marmara'da (Bursa Uludağ) bulunur.", kpssNote: "Trona cam ve deterjan sanayisinin temel girdilerindendir." },
    { subject: "Coğrafya", category: "Madenler & Enerji", title: "Fosfat ve Zımpara Taşı", desc: "Fosfat gübre yapımında kullanılır ve en fazla Güneydoğu Anadolu'da (Mardin Mazıdağı) çıkar. Zımpara taşı ise en fazla Ege'de çıkar.", kpssNote: "Fosfat ithal ettiğimiz madenlerden biridir." },
    { subject: "Coğrafya", category: "Madenler & Enerji", title: "Taş Kömürü (I. Zaman)", desc: "Zonguldak'tan çıkarılır. Demir-çelik sanayisinde enerji kaynağıdır. Çatalağzı yerli kömürle, Adana Sugözü ise ithal kömürle çalışır.", kpssNote: "Taş kömürü rezervi az olduğu için ithal edilir." },
    { subject: "Coğrafya", category: "Madenler & Enerji", title: "Linyit Kömürü (III. Zaman)", desc: "Rezervi çok, yaygın ve kalitesizdir. Ege'de en fazla çıkar (Soma, Yatağan). En büyük linyit rezervimiz Kahramanmaraş Afşin-Elbistan'dadır.", kpssNote: "Linyit elektrik üretiminde en yaygın kullanılan fosil kaynaktır." },
    { subject: "Coğrafya", category: "Madenler & Enerji", title: "Petrol ve Rafineriler", desc: "Güneydoğu Anadolu'da (Batman Raman) çıkar. Rafineriler: Batman (yerli petrolü işler), İzmit İpraş, İzmir Aliağa/Star, Mersin Ataş ve Kırıkkale Orta Anadolu.", kpssNote: "İzmit, İzmir ve Mersin kıyı/ulaşım avantajıyla kurulurken, Kırıkkale pazar ve güvenlik nedeniyle kurulmuştur." },
    { subject: "Coğrafya", category: "Madenler & Enerji", title: "Doğal Gaz ve Boru Hatları", desc: "Kırklareli Hamitabat, Düzce Akçakoca ve Karadeniz Sakarya sahasından çıkar. TANAP, Bakü-Tiflis-Erzurum (BTE), Türk Akımı, Mavi Akım önemli hatlardır.", kpssNote: "Hamitabat, Ambarlı, Ovaakça ve Aliağa önemli gaz çevrim santralleridir." },
    { subject: "Coğrafya", category: "Madenler & Enerji", title: "Asfaltit ve Nükleer Güç", desc: "Asfaltit katı petrol artığıdır (Şırnak Silopi). Nükleer enerji uranyum ve toryuma dayalıdır. İlk santral Mersin Akkuyu'da kurulmaktadır.", kpssNote: "Akkuyu ve Sinop nükleer santralleri deprem riski düşük ve su kaynağı olan deniz kenarlarında yer alır." },
    { subject: "Coğrafya", category: "Madenler & Enerji", title: "Yenilenebilir Enerji Kaynakları", desc: "Hidroelektrik potansiyeli en çok Doğu Anadolu'da, rüzgar Ege'de, güneş Güneydoğu'da, jeotermal (sıcak su) ise Ege'dedir (Germencik, Sarayköy).", kpssNote: "Jeotermal ve nükleer enerji iklim/hava durumundan etkilenmeyen kaynaklardır." },

    // --- VATANDAŞLIK DERS NOTLARI ---
    { subject: "Vatandaşlık", category: "Temel Hukuk", title: "Sosyal Düzen ve Yaptırım", desc: "Din, ahlak ve görgü kurallarının yaptırımı manevi iken, hukuk kurallarının yaptırımı devlet gücüne dayanan maddidir.", kpssNote: "Hukuk kuralları genel, soyut, emredici ve süreklidir." },
    { subject: "Vatandaşlık", category: "Temel Hukuk", title: "Hukuki Yaptırım Türleri", desc: "Hukuka aykırılığın sonuçları: Ceza, İptal (idari işlemi mahkemeyle iptal etme), Cebri İcra (zorla yaptırma), Tazminat (zararı ödetme) ve Hükümsüzlük.", kpssNote: "Tazminat bir ceza değil, yaptırım türüdür. Görevden uzaklaştırma ise ceza değil, idari tedbirdir." },
    { subject: "Vatandaşlık", category: "Temel Hukuk", title: "Hükümsüzlük Çeşitleri", desc: "Yokluk (kurucu unsur eksikliği, örn: memursuz nikah), Mutlak Butlan (işlem var ama baştan geçersiz, örn: akıl hastasının evlenmesi), Nisbi Butlan (irade sakatlığı, örn: hile/tehdit) ve Tek Taraflı Bağlamazlık.", kpssNote: "15 yaşından küçüklerin veli izni olmadan yaptığı alım-satımlar askıda geçersizlik (tek taraflı bağlamazlık) örneğidir." },
    { subject: "Vatandaşlık", category: "Temel Hukuk", title: "Hısımlık Dereceleri", desc: "Çocuk/anne-baba 1. derece; kardeşler, dede/nine ve torun 2. derece; amca, hala, teyze, dayı ise 3. derece hısımdır. Kardeşler yansoy, dede-torun altsoy-üstsoydur.", kpssNote: "Eşler arasında hısımlık ilişkisi yoktur. Sıhri (kayın) hısımlık evlilik bitse bile alt-üst soy için ömür boyu devam eder." },
    { subject: "Vatandaşlık", category: "Temel Hukuk", title: "Hukukun Kaynakları", desc: "Yazılı (Anayasa, Kanun, CBK, Yönetmelik) ve Yazısız (Örf-Adet) kaynaklar asli kaynaklardır. Doktrin ve içtihatlar yardımcı (tali) kaynaklardır.", kpssNote: "İçtihadı birleştirme kararları resmi gazetede yayınlanarak bağlayıcı hale gelir, yani yazılı kaynak sayılır." },
    { subject: "Vatandaşlık", category: "Temel Hukuk", title: "Boşluk Türleri", desc: "Kanun Boşluğu yazılı kaynaklarda hüküm bulunmamasıdır. Hukuk Boşluğu ise hem yazılı hem yazısız kaynaklarda hüküm bulunmamasıdır.", kpssNote: "Hukuk boşluğu durumunda hakim 'hukuk yaratır' (kendi kural koyar)." },
    { subject: "Vatandaşlık", category: "Kişilik & Ehliyet", title: "Kişiliğin Başlangıcı ve Bitişi", desc: "Gerçek kişilik sağ ve tam doğumla başlar. Ölüm, ölüm karinesi (kesin gözle bakılan kayboluş, mülki amir yazar) ve gaiplikle biter.", kpssNote: "Ölüm karinesinde mahkeme kararı gerekmez, gaiplikte ise Sulh Hukuk Mahkemesi kararı şarttır." },
    { subject: "Vatandaşlık", category: "Kişilik & Ehliyet", title: "Gaiplik Süreleri", desc: "Ölüm tehlikesiyle kaybolmada 1 yıl (miras teminatı 5 yıl); uzun süre haber alınamamada 5 yıl (miras teminatı 15 yıl) beklenir.", kpssNote: "Gaiplik evliliği kendiliğinden düşürmez, gaibin eşi ayrıca evliliğin feshini talep etmelidir." },
    { subject: "Vatandaşlık", category: "Kişilik & Ehliyet", title: "Ehliyet Türleri", desc: "Hak Ehliyeti pasiftir, ana rahmine düşüldüğü an başlar. Fiil Ehliyeti aktiftir; reşit olmak (18 yaş, evlenmeyle veya 15 yaşında kaza-i rüşt ile), mümeyyiz olmak ve kısıtlı olmamak şarttır.", kpssNote: "Mümeyyiz (ayırt etme gücü olan) kısıtlı veya reşit olmayanlar sınırlı ehliyetsizdir. Kefil olamaz, bağış yapamazlar." },
    { subject: "Vatandaşlık", category: "Haklar & Borçlar", title: "Meşru Müdafaa ve Zaruret Hali", desc: "Meşru müdafaa haksız saldırıya karşı orantılı savunmadır (ceza ve tazminat verilmez). Zaruret tehlikeden kaçarken başkasının malına zarar vermektir (ceza verilmez ama tazminat ödenir).", kpssNote: "Zaruret halinde malına zarar verilen üçüncü şahsın mağduriyeti tazminatla giderilir." },
    { subject: "Vatandaşlık", category: "Haklar & Borçlar", title: "Borçlar Hukuku Genel Kuralları", desc: "Borcun unsurları alacaklı, borçlu ve edimdir. Genel zamanaşımı 10 yıldır. Zamanaşımına uğrayan borç 'eksik borç' niteliği kazanır.", kpssNote: "Eksik borçlar dava yoluyla talep edilemez ancak borçlu kendi rızasıyla öderse geçerlidir." },

    // Section 2: Devlet Yapısı & Anayasa Hukuku
    { subject: "Vatandaşlık", category: "Devlet Organları", title: "Devlet Yapıları ve Federalizm", desc: "Üniter devlette tek anayasa, tek yargı ve tek meclis bulunur (Türkiye, Fransa). Federal devlette ise federe devletlerin ayrı anayasa, meclis ve kanunları vardır (ABD, Almanya).", kpssNote: "Federal devletlerde iç işlerinde bağımsız federe yapılar bulunur, dış işlerinde ise merkeze bağlıdırlar." },
    { subject: "Vatandaşlık", category: "Devlet Organları", title: "Hükümet Sistemleri", desc: "Parlementer sistemde yürütme çift başlıdır (dualist: Cumhurbaşkanı + Bakanlar Kurulu). Başkanlık sisteminde ise yürütme tek başlıdır (monist: Başkan).", kpssNote: "Cumhurbaşkanlığı Hükümet Sistemi'nde yürütme monisttir (sadece Cumhurbaşkanı vardır)." },
    { subject: "Vatandaşlık", category: "Devlet Organları", title: "Demokrasi Modelleri", desc: "Çoğulcu demokrasi modeli azınlık ve muhalefet haklarını koruyan, çok sesli bir sistemdir (1961 Anayasası). Çoğunlukçu demokrasi ise çoğunluğun mutlak üstünlüğünü savunur (1924 Anayasası).", kpssNote: "Yarı doğrudan demokraside referandum, halk girişimi, halk vetosu ve temsilcinin azli araçları bulunur." },
    { subject: "Vatandaşlık", category: "Anayasa Hukuku", title: "Anayasa Türleri", desc: "Yumuşak anayasa kolay değiştirilebilen anayasadır (1921). Sert anayasa değiştirilmesi zor kurallara sahiptir (1982). Çerçeve anayasa kısa ve özet (1921), kazuistik anayasa uzun ve detaylıdır (1982).", kpssNote: "1921 Anayasası hem yumuşak hem çerçeve olan tek anayasamızdır." },
    { subject: "Vatandaşlık", category: "Anayasa Hukuku", title: "Anayasal Gelişmeler ve İlkler", desc: "Sened-i İttifak (1808) ilk anayasal belgedir, padişah yetkilerini kısıtlar. Tanzimat Fermanı (1839) hukukun üstünlüğünü başlatan fermandı. Kanuni Esasi (1876) ilk yazılı anayasamızdır.", kpssNote: "1921 Anayasası'nda meclis hükümeti sistemi benimsenmiştir, laiklikten veya yargıdan hiç bahsedilmemiştir." },
    { subject: "Vatandaşlık", category: "Anayasa Hukuku", title: "Cumhuriyet Dönemi Anayasaları", desc: "1924 Anayasası çoğunlukçu ve serttir; 1934'te kadınlara seçme/seçilme hakkı verilmiştir. 1961 Anayasası güçler ayrılığını ve Anayasa Mahkemesi'ni kurmuştur. 1982 Anayasası ise en sert ve detaylı anayasadır.", kpssNote: "DDK (Devlet Denetleme Kurulu) ve YÖK ilk kez 1982 Anayasası ile kurulmuştur." },
    { subject: "Vatandaşlık", category: "Anayasa Hukuku", title: "Cumhuriyetin Nitelikleri", desc: "Sosyal devlet fırsat eşitliği ve gelir adaleti hedefler (istimlak/kamulaştırma yapar). Laik devlette resmi din yoktur. Hukuk devletinde ise kanuni hakim güvencesi esastır.", kpssNote: "İstimval olağanüstü dönemlerde taşınır mallara, geçici işgal ise taşınmaz mallara el koyma yetkisidir." },

    // Section 3: Yasama, Yürütme ve Yargı Organları
    { subject: "Vatandaşlık", category: "Yasama & Yürütme", title: "Milletvekili Seçilme Şartları", desc: "T.C. vatandaşı olmak, 18 yaşını doldurmuş olmak, askerlikle ilişiği olmamak, taksirli suçlar hariç 1 yıldan fazla hapis cezası almamış olmak.", kpssNote: "Hakimler, savcılar ve TSK mensupları seçilemezlerse görevlerine geri dönemezler." },
    { subject: "Vatandaşlık", category: "Yasama & Yürütme", title: "Milletvekilliğinin Sona Ermesi", desc: "Milletvekilliği; ölüm, CB seçilme, bakan atanma durumlarında kendiliğinden; istifa, devamsızlık durumlarında TBMM kararıyla düşer.", kpssNote: "Kesin hüküm giyme ve kısıtlanma durumlarında mahkeme kararının genel kurulda okunmasıyla düşer." },
    { subject: "Vatandaşlık", category: "Yasama & Yürütme", title: "Meclis Denetim Yolları", desc: "Yazılı Soru (15 günde cevaplanır), Genel Görüşme, Meclis Araştırması ve Meclis Soruşturması. Soruşturma CB yardımcısı ve bakanlar için açılır.", kpssNote: "Soruşturma istemi için 301, açılması için 360, Yüce Divan'a sevk için 400 vekilin gizli oyu gerekir." },
    { subject: "Vatandaşlık", category: "Yasama & Yürütme", title: "Cumhurbaşkanı Seçilme Şartları", desc: "40 yaşını doldurmuş, yükseköğrenim mezunu ve milletvekili seçilme yeterliliğine sahip T.C. vatandaşları arasından halk tarafından seçilir.", kpssNote: "CB görev süresi 5 yıldır, en fazla 2 dönem seçilebilir. Bütçe kanununu veto edemez." },
    { subject: "Vatandaşlık", category: "Yasama & Yürütme", title: "Milli Güvenlik Kurulu (MGK)", desc: "MGK, Cumhurbaşkanı başkanlığında iki ayda bir toplanır. Sivil üyeler: CB yardımcıları, Adalet, İçişleri, Dışişleri ve Milli Savunma Bakanları.", kpssNote: "Genelkurmay Başkanı ve üç kuvvet komutanı askeri üyelerdir. Jandarma Genel Komutanı MGK'dan çıkarılmıştır." },
    { subject: "Vatandaşlık", category: "Yargı", title: "Anayasa Mahkemesi (AYM)", desc: "AYM 15 üyeden oluşur, üyeler 12 yıllığına seçilir (adaylar tekrar seçilemez). İptal davaları kanunların yayımlanmasından itibaren 60 gün içinde açılmalıdır.", kpssNote: "Soyut norm denetimini CB, meclisteki en çok üyeli iki parti grubu veya 120 milletvekili açabilir." },
    { subject: "Vatandaşlık", category: "Yargı", title: "Yüksek Mahkemeler & HSK", desc: "Yargıtay adli yargının, Danıştay idari yargının en üst mahkemesidir. Uyuşmazlık Mahkemesi yargı yolları uyuşmazlığını çözer.", kpssNote: "HSK 13 üyeden oluşur, başkanı Adalet Bakanı'dır. Sayıştay bir yüksek mahkeme değildir, meclis adına denetleme yapar." },

    // Section 4: İdare Hukuku & İnsan Hakları Hukuku
    { subject: "Vatandaşlık", category: "İdare Hukuku", title: "Hiyerarşi ve İdari Vesayet", desc: "Hiyerarşi aynı kamu tüzel kişisindeki ast-üst ilişkisidir (Vali-Kaymakam). İdari vesayet ise merkezin yerinden yönetimleri hukukilik denetimidir (Vali-Belediye).", kpssNote: "İdari vesayet istisnai ve kanunda yazan bir yetkidir. Hiyerarşide ise emir/talimat yetkisi mutlaktır." },
    { subject: "Vatandaşlık", category: "İdare Hukuku", title: "Kamu Tüzel Kişilikleri", desc: "Kanunla veya CBK ile kurulurlar. Anayasada adı geçen kamu tüzel kişileri: İl Özel İdaresi, Belediye, Köy, Üniversite, TRT, Atatürk Kültür Yüksek Kurumu, meslek odaları/barolar.", kpssNote: "Bakanlıklar devlet tüzel kişiliğine dahildir, kendi başlarına kamu tüzel kişilikleri yoktur." },
    { subject: "Vatandaşlık", category: "İdare Hukuku", title: "İl ve Belediye Kurulma Usulleri", desc: "Büyükşehir belediyesi kanunla nüfusu 750.000+ olan illerde kurulur. Normal belediye CB kararı ile nüfusu 5000+ yerlerde, köy ise İçişleri Bakanı kararı ile nüfusu 150-2000 arasına kurulur.", kpssNote: "İller ve ilçeler sadece kanunla kurulup kaldırılabilir." },
    { subject: "Vatandaşlık", category: "İdare Hukuku", title: "657 Memur Disiplin Cezaları", desc: "Cezalar: Uyarma, Kınama, Aylıktan kesme (1/30 - 1/8 arası), Kademe ilerlemesini durdurma (1-3 yıl) ve Devlet memurluğundan çıkarma.", kpssNote: "Görevden uzaklaştırma (açığa alma) bir disiplin cezası değil, idari tedbirdir. Tüm disiplin cezalarına yargı yolu açıktır." },
    { subject: "Vatandaşlık", category: "İdare Hukuku", title: "Devlet Memurluğu İlkeleri", desc: "657 Sayılı Kanun'a göre memurluk mesleği üç temel ilkeye dayanır: Sınıflandırma (12 hizmet sınıfı), Kariyer (ilerleme olanağı) ve Liyakat (yetenek/yeterlilik).", kpssNote: "Aday memurluk süresi en az 1 yıl, en fazla 2 yıldır." },
    { subject: "Vatandaşlık", category: "İdare Hukuku", title: "İnsan Hakları Kuşakları", desc: "I. Kuşak: Kişisel/Siyasi haklar. II. Kuşak: Sosyal/Ekonomik haklar (eğitim, sendika). III. Kuşak: Dayanışma hakları (çevre, barış). IV. Kuşak: Bilim/teknoloji hakları (kişisel veriler).", kpssNote: "Jellinek sınıflandırmasında koruyucu haklar negatif, isteme hakları pozitif, katılma hakları aktif statülüdür." },
    { subject: "Vatandaşlık", category: "İdare Hukuku", title: "AİHM Başvuru Süreleri", desc: "Merkezi Fransa Strazburg'dur. AİHM'e başvuru yapabilmek için iç hukuk yollarının tamamen tüketilmiş olması ve son karardan itibaren en geç 4 ay geçmiş olması gerekir.", kpssNote: "İç hukukta Anayasa Mahkemesi'ne bireysel başvuru süresi ise 30 gündür." },

    // --- SON KISA NOTLAR (HIZLI TEKRAR & HATIRLATMALAR) ---
    { subject: "Tarih", category: "Son Notlar", title: "İlteriş Kağan (2. Göktürk)", desc: "II. Göktürk (Kutluk) Devleti'nin kurucusudur. Çin esaretine son verip dağınık Türk boylarını derleyip toparladığı için 'İlteriş' (İli/Devleti derleyen) unvanını almıştır.", kpssNote: "İlteriş Kağan = II. Göktürk Devleti kurucusu." },
    { subject: "Tarih", category: "Son Notlar", title: "Manas Destanı (Kırgızlar)", desc: "Kırgızlara ait, dünyanın yaşayan ve halen eklemeler yapılan en uzun destanıdır.", kpssNote: "Yaşayan en uzun destan Kırgızların Manas Destanı'dır." },
    { subject: "Tarih", category: "Son Notlar", title: "Maniheizm & Yerleşik Yaşam (Uygurlar)", desc: "Bögü Kağan döneminde Maniheizm dinini kabul ederek yerleşik yaşama geçen ilk Türk devletidir.", kpssNote: "Maniheizm savaşçılığı zayıflatmış fakat mimari, şehircilik, minyatür ve matbaayı geliştirmiştir." },
    { subject: "Tarih", category: "Son Notlar", title: "Musevilik & Hazarlar", desc: "Tarihte Musevilik dinini kabul eden ilk ve tek Türk devletidir. Hazar Barış Çağı (Pax Hazarica) yaşanmıştır.", kpssNote: "Ordusunda ücretli asker bulunduran ilk Türk devletidir." },
    { subject: "Tarih", category: "Son Notlar", title: "Mete Han (Asya Hun Devleti)", desc: "Asya Hun Devleti'nin en parlak dönemidir. M.Ö. 209'da Onlu Sistemi kurmuş ve düzenli orduyu oluşturmuştur.", kpssNote: "M.Ö. 209 Türk Kara Kuvvetleri'nin kuruluşu kabul edilir; ıslıklı oku bulmuştur." },
    { subject: "Tarih", category: "Son Notlar", title: "Kurgan (İslam Öncesi Mezar)", desc: "İslamiyet öncesi Türklerde oda şeklinde yapılan ve içine ölünün kişisel eşyalarının konulduğu mezarlardır.", kpssNote: "Eşyalarla gömülme ahiret inancının (öldükten sonra yaşam) kesin göstergesidir." },
    { subject: "Tarih", category: "Son Notlar", title: "Ayuki (Hükümet Teşkilatı)", desc: "İslamiyet öncesi Türk devletlerinde hükümet teşkilatına 'Ayuki' adı verilirdi. Hükümet başkanı ise Aygucı'dır.", kpssNote: "Hakan = Devlet başkanı, Ayuki = Hükümet, Aygucı = Vezir/Başbakan." },
    { subject: "Tarih", category: "Son Notlar", title: "Ağılığ (Hazine Görevlisi)", desc: "İslamiyet öncesi Türk devletlerinde devlet hazinesinden ve değerli mallardan sorumlu saray/devlet görevlisidir.", kpssNote: "Devlet hazinesinden sorumlu görevli = Ağılığ." },
    { subject: "Tarih", category: "Son Notlar", title: "Tutuk (Askeri Vali)", desc: "İslamiyet öncesi Türk devletlerinde taşra teşkilatında görevlendirilen askeri valilere verilen addır.", kpssNote: "Taşradaki askeri vali = Tutuk." },
    { subject: "Tarih", category: "Son Notlar", title: "Tudun (Vergi Görevlisi / Mali Vali)", desc: "İslamiyet öncesi Türk devletlerinde vergi toplamakla ve mali idareyi denetlemekle görevli memurlardır.", kpssNote: "Vergi denetçisi ve mali görevli = Tudun." },
    { subject: "Tarih", category: "Son Notlar", title: "Aygucı (Vezir / Başbakan)", desc: "İslamiyet öncesi Türk devletlerinde hükümetin (Ayuki) başında bulunan ve hakan adına icraat yapan vezirdir.", kpssNote: "Hükümdardan sonraki en yetkili yönetici = Aygucı (Örn: Vezir Tonyukuk)." },
    { subject: "Tarih", category: "Son Notlar", title: "Kurultay / Kengeş / Toy (Devlet Meclisi)", desc: "Eski Türklerde siyasi, askeri ve ekonomik tüm kararların görüşülüp alındığı devlet meclisidir.", kpssNote: "Kurultay, Toy ve Kengeş eş anlamlı olarak meclisi ifade eder." },
    { subject: "Tarih", category: "Son Notlar", title: "Toygun (Meclis Üyesi)", desc: "Kurultay (Toy) toplantılarına katılma hakkı ve oy yetkisi bulunan meclis üyelerine verilen isimdir.", kpssNote: "Kurultay üyesi = Toygun." },
    { subject: "Tarih", category: "Son Notlar", title: "Orun (Protokol Oturma Düzeni)", desc: "Kurultayda boy beylerinin ve üyelerin hiyerarşik mevki ve derecelerine göre belirlenen oturma sırasıdır.", kpssNote: "Devlet protokolündeki hiyerarşik oturma yeri = Orun." },
    { subject: "Tarih", category: "Son Notlar", title: "Ülüş (Ekonomik Güç & Pay Alma)", desc: "Hükümdarın devletteki zenginlikleri, ganimetleri ve ekonomik gücü halka ve boylara paylaştırma ilkesidir.", kpssNote: "Sosyal devlet anlayışının ve ekonomik paylaşımın simgesidir." },
    { subject: "Tarih", category: "Son Notlar", title: "Uzluk (İyilik / Adalet İlkesi)", desc: "Törenin değişmez 4 ilkesinden biridir; iyilik, kamu faydası ve yararlılığı temsil eder.", kpssNote: "Törenin değişmez 4 ilkesi: Könilik (Adalet), Tüzlük (Eşitlik), Uzluk (İyilik), Kişilik (İnsanlık)." },
    { subject: "Tarih", category: "Son Notlar", title: "Yuğ (Cenaze Töreni)", desc: "İslamiyet öncesi Türklerde ölen kişinin ardından düzenlenen dini cenaze ve yas törenine 'Yuğ' denir.", kpssNote: "Yuğ törenlerinde yakılan ağıtlara 'Sagu' denir." },
    { subject: "Tarih", category: "Son Notlar", title: "Sultan Mahmut & Gazneliler", desc: "Tarihte 'Sultan' unvanını kullanan ilk Türk hükümdarı Gazneli Mahmut'tur. Hindistan'a 17 sefer düzenlemiştir.", kpssNote: "Abbasî halifesini koruduğu için bu unvanı almıştır. Sarayında Biruni için 'Sarayımın en değerli hazinesi' demiştir." },
    { subject: "Tarih", category: "Son Notlar", title: "Karahanlılar (Bilge Kül Kadir Han & Semerkant)", desc: "Kurucusu Bilge Kül Kadir Han'dır. Satuk Buğra Han İslamiyet'i kabul edip Abdülkerim adını almıştır. Tamgaç Buğra Han Semerkant Medresesi'ni açmıştır.", kpssNote: "Orta Asya'da kurulan ilk Müslüman Türk devletidir. İlk burslu öğrencilik sistemi Semerkant Medresesi'ndedir." },
    { subject: "Tarih", category: "Son Notlar", title: "Gulam Sistemi (Savaş Esirleri)", desc: "Savaş esirlerinin beşte birinin (Pençik) orduya alınması veya sarayda yetiştirilerek askeri/idari kadro yapılmasıdır.", kpssNote: "Hükümdarın muhafız ordusunu (Gulamân-ı Saray) oluştururlar ve 3 ayda bir 'Biştegâni' maaşı alırlar." },
    { subject: "Tarih", category: "Son Notlar", title: "Kubilay Hanlığı & Marco Polo", desc: "Moğol İmparatorluğu parçalanınca Çin'de kurulan ve Budizm'i kabul eden devlettir. Seyyah Marco Polo uzun yıllar bu sarayda yaşamıştır.", kpssNote: "Türkleşmeyen tek Moğol devletidir; Marco Polo'nun bahsettiği doğu sarayı Kubilay'dır." },
    { subject: "Tarih", category: "Son Notlar", title: "Anadolu Selçuklu Başkentleri (İznik & Konya)", desc: "Süleyman Şah tarafından İznik'te kurulmuş; I. Haçlı Seferi'nde İznik düşünce I. Kılıçarslan başkenti Konya'ya taşımıştır.", kpssNote: "Haçlı seferleri nedeniyle başkenti batıdan iç Anadolu'ya taşınan devlet Anadolu Selçuklu'dur." },
    { subject: "Tarih", category: "Son Notlar", title: "Tahrir Defterleri (Vergi Gelirleri)", desc: "Fethedilen arazilerin nüfusunun, vergilerinin ve tımar dağılımlarının ayrıntılı kaydedildiği resmi tescil defterleridir.", kpssNote: "Tahrir defterlerini Nişancı tutar; tımar ve vergi dağılımının ana kaynağıdır." },
    { subject: "Tarih", category: "Son Notlar", title: "Mühimme Defterleri (Divan Kayıtları)", desc: "Divan-ı Hümayun'da görüşülen tüm devlet meselelerinin, padişah ferman ve hükümlerinin kaydedildiği ana defterdir.", kpssNote: "Divanda alınan tüm kararların yazıldığı resmi defter = Mühimme." },
    { subject: "Tarih", category: "Son Notlar", title: "Ruznamçe (Günlük Plan & Gelir-Gider)", desc: "Kazasker ve Defterdarlık dairelerinde günlük gelir-gider hesaplarının, dava ve atamaların günü gününe tutulduğu defterdir.", kpssNote: "Kazasker ve defterdarın günlük plan ve kayıt defteri = Ruznamçe." },
    { subject: "Tarih", category: "Son Notlar", title: "Azablar (Bekar Çiftçi Gençler)", desc: "Osmanlı kara ordusunda eyalet askeri grubunda yer alan, gönüllü bekar ve çiftçi Türk erkeklerinden oluşan hafif piyade birlikleridir.", kpssNote: "Ordunun ön saflarında savaşan bekar Türk gençleri = Azablar." },
    { subject: "Tarih", category: "Son Notlar", title: "Paşmaklık Arazi (Saray Kadınları)", desc: "Geliri padişahın annesi, eşleri ve kızları gibi saray kadınlarının giyim ve şahsi masraflarına ayrılan miri arazidir.", kpssNote: "Geliri saray kadınlarına ayrılan arazi = Paşmaklık." },
    { subject: "Tarih", category: "Son Notlar", title: "İlk Rasathane (Takiyüddin Mehmet)", desc: "Osmanlı Devleti'nde ilk rasathane (gözlemevi) III. Murat döneminde İstanbul Tophane'de Takiyüddin Mehmet tarafından kurulmuştur.", kpssNote: "İlk Osmanlı rasathanesini Takiyüddin Mehmet kurmuştur." },
    { subject: "Tarih", category: "Son Notlar", title: "Akşemseddin & Mikrop Teorisi", desc: "Fatih Sultan Mehmet'in hocasıdır. 'Maddetü'l-Hayat' adlı eserinde hastalıkların gözle görülmeyen canlı tohumlardan (mikrop) bulaştığını açıklamıştır.", kpssNote: "Pastör'den asırlar önce mikrop teorisini ortaya atmıştır." },
    { subject: "Tarih", category: "Son Notlar", title: "İlk Resmi Tarih Yazıcısı (Naima Efendi)", desc: "Osmanlı Devleti'nde saray tarafından resmi olarak görevlendirilen ilk vakanüvis (devlet tarihçisi) Naima Efendi'dir.", kpssNote: "İlk resmi vakanüvis: Naima Efendi. Son resmi vakanüvis: Abdurrahman Şeref Efendi." },
    { subject: "Tarih", category: "Son Notlar", title: "Şühûdü'l-Hâl (Mahkeme Jüri Heyeti)", desc: "Osmanlı kadı mahkemelerinde duruşmayı izleyen, adaletin sağlanmasına ve karara şahitlik eden halktan oluşan jüri heyetidir.", kpssNote: "Kadı mahkemelerindeki halk jürisi/şahitler = Şühûdü'l-Hâl." },
    { subject: "Tarih", category: "Son Notlar", title: "Nâib (Kadı Yardımcısı & Vekili)", desc: "Osmanlı hukuk sisteminde kadının bulunmadığı yerlerde veya kadı adına davaları yürüten vekil ve yardımcılara verilen addır.", kpssNote: "Kadı yardımcısı ve vekili = Nâib." },
    { subject: "Tarih", category: "Son Notlar", title: "Narh Sistemi (Fiyat Belirleme)", desc: "Osmanlı Devleti'nde çarşı pazarda fahiş fiyat artışlarını ve karaborsayı engellemek için devlet eliyle azami satış fiyatı koyulmasıdır.", kpssNote: "Devletin mallara koyduğu tavan-taban fiyat sınırına Narh denir." },
    { subject: "Tarih", category: "Son Notlar", title: "Fiskalizm İlkesi (Gelir Üstte, Gider Altta)", desc: "Osmanlı maliye anlayışında devlet gelirlerini en yüksek düzeye çıkarmayı, devlet harcamalarını ise en alt seviyede tutmayı amaçlayan ilkedir.", kpssNote: "Gelirleri maksimize, giderleri minimize etme politikası = Fiskalizm." },
    { subject: "Tarih", category: "Son Notlar", title: "Muhtesip (Çarşı Pazar Denetçisi)", desc: "Osmanlı kentlerinde çarşı, pazar, esnaf, tartı aletleri ve narh kurallarına uyulup uyulmadığını denetleyen belediye zabıta görevlisidir.", kpssNote: "Çarşı-pazar ve esnaf denetleyicisi = Muhtesip." },
    { subject: "Tarih", category: "Son Notlar", title: "Nakkaş Sinan Bey (Fatih Portresi)", desc: "Fatih Sultan Mehmet'in ünlü 'Gül Koklayan Fatih' portresini yapan, minyatür ile Batı portre resmini birleştiren ilk Türk ressam/nakkaştır.", kpssNote: "Padişah portresini minyatür tekniğiyle çizen ilk nakkaş Nakkaş Sinan Bey'dir." },
    { subject: "Tarih", category: "Son Notlar", title: "Kıbrıs'ın Fethi & İnebahtı (1571)", desc: "1571'de Lala Mustafa Paşa Kıbrıs'ı fethetmiş; buna misilleme yapan Haçlılar aynı yıl İnebahtı'da Osmanlı donanmasını ilk kez yakmıştır.", kpssNote: "Sokullu: 'Biz Kıbrıs'ı alarak sizin kolunuzu kestik, siz İnebahtı'da sakalımızı tıraş ettiniz' demiştir." },
    { subject: "Tarih", category: "Son Notlar", title: "Vaka-i Vakvakiyye (Çınar Vakası - 1656)", desc: "IV. Mehmet döneminde isyan eden yeniçerilerin talebi üzerine sarayda görevli yaklaşık 30 devlet adamının Sultanahmet meydanındaki çınar ağacına asılması olayıdır.", kpssNote: "Mitolojide meyvesi insan olan Vakvak ağacından esinlenilerek bu isim verilmiştir." },
    { subject: "Tarih", category: "Son Notlar", title: "Nizam-ı Cedit & İrad-ı Cedit (III. Selim)", desc: "III. Selim'in yaptığı tüm köklü reformların ve kurduğu batı tarzı ordunun adı 'Nizam-ı Cedit', bu ordunun masrafları için kurulan özel hazine 'İrad-ı Cedit'tir.", kpssNote: "Nizam-ı Cedit ordusu Akka'da Napolyon'u mağlup etmiştir." },
    { subject: "Tarih", category: "Son Notlar", title: "Girit Kuşatması (24 Yıl)", desc: "1645'te Sultan İbrahim döneminde başlayan Girit kuşatması tam 24 yıl sürmüş ve 1669'da IV. Mehmet döneminde Sadrazam Fazıl Ahmet Paşa tarafından fethedilmiştir.", kpssNote: "24 yıl boyunca alınamayıp sonunda alınan ada Girit'tir (Osmanlı deniz gücünün zayıfladığının göstergesi)." },
    { subject: "Tarih", category: "Son Notlar", title: "Sancağa Çıkma Sisteminin Kaldırılması (III. Mehmet)", desc: "Şehzadelerin taşraya vali olarak gönderilip devlet tecrübesi kazanması sistemini kaldıran ve Kafes Usulü'nü getiren padişahtır.", kpssNote: "Sancağa çıkan son padişah III. Mehmet'tir; bundan sonra şehzadeler sarayda tecrit edilmiştir." },
    { subject: "Tarih", category: "Son Notlar", title: "İlk Geçici Elçilik (Viyana / İbrahim Paşa)", desc: "Osmanlı tarihinde ilk geçici elçilik girişimi Avusturya/Viyana'ya gönderilen İbrahim Paşa ile başlamıştır.", kpssNote: "Batı diplomasisiyle ilk geçici elçilik temasları Viyana'ya yapılmıştır." },
    { subject: "Tarih", category: "Son Notlar", title: "28 Çelebi Mehmet (Paris Sefaretnamesi)", desc: "Lale Devri'nde III. Ahmet tarafından Paris'e gönderilen ve gördüğü Batı medeniyetini 'Paris Sefaretnamesi' ile saraya raporlayan ilk önemli elçidir.", kpssNote: "Batı'ya açılan ilk kültür penceresidir; oğlu Sait Efendi matbaanın kurucularındandır." },
    { subject: "Tarih", category: "Son Notlar", title: "İlk Daimi Elçilik (Londra / Yusuf Agah Efendi)", desc: "Osmanlı Devleti'nde ilk sürekli (daimi) elçilik III. Selim döneminde Londra'da açılmış ve ilk daimi elçi Yusuf Agah Efendi olmuştur.", kpssNote: "Geçici elçi: III. Ahmet (Paris). Daimi elçi: III. Selim (Londra / Yusuf Agah)." },
    { subject: "Tarih", category: "Son Notlar", title: "Ayastefanos & Kıbrıs'ın Bırakılması (1878)", desc: "93 Harbi sonrası imzalanan ağır Ayastefanos Antlaşması'nı Berlin Konferansı'nda hafifletmek için İngiltere'nin desteği karşılığında Kıbrıs'ın idaresi geçici olarak İngiltere'ye verilmiştir.", kpssNote: "Kıbrıs'ın İngiliz idaresine bırakılması Doğu Akdeniz kontrolünü zayıflatmıştır." },
    { subject: "Tarih", category: "Son Notlar", title: "Saltanat Vagonu (Sultan Abdülaziz)", desc: "Avrupa seyahatine çıkan ilk ve tek Osmanlı padişahı olan Sultan Abdülaziz için özel olarak üretilen saltanat tren vagonudur.", kpssNote: "Sultan Abdülaziz 1867'de Fransa ve İngiltere'ye seyahat etmiştir." },
    { subject: "Tarih", category: "Son Notlar", title: "Dârü'l-Hayr-ı Âlî (1903 Yetim Çocuklar)", desc: "II. Abdülhamit döneminde 1903 yılında özellikle Balkan ve Kafkas göçlerinde yetim ve öksüz kalan Müslüman çocukların barınması ve meslek eğitimi için kurulan kurumdur.", kpssNote: "1903 yılında yetim ve kimsesiz çocuklar için açılan hayır kurumu = Dârü'l-Hayr-ı Âlî." },
    { subject: "Tarih", category: "Son Notlar", title: "Hamidiye Kahramanı (Rauf Orbay)", desc: "Balkan Savaşları sırasında Hamidiye Kruvazörü ile Yunan donanmasına karşı tek başına başarılı deniz akınları düzenleyen Rauf Orbay'a verilen unvandır.", kpssNote: "Hamidiye Kahramanı = Rauf Orbay." },
    { subject: "Tarih", category: "Son Notlar", title: "Babıali Baskını (I. ve II. Balkan Arası)", desc: "1913 yılında I. Balkan Savaşı hezimetinin ardından Enver Paşa ve İttihatçıların hükümet konağını basarak Kamil Paşa hükümetini devirdiği hükümet darbesidir.", kpssNote: "I. ve II. Balkan Savaşları arasında gerçekleşmiştir; padişah değişmemiş, hükümet değişmiştir." },
    { subject: "Tarih", category: "Son Notlar", title: "İlk Türk Kadın Hemşire (Safiye Hüseyin Elbi)", desc: "Çanakkale ve Balkan Savaşları'nda yaralı askerleri tedavi eden, Reşit Paşa hastane gemisinde görev yapan ilk Türk profesyonel hemşiredir.", kpssNote: "Kızılay'ın ilk kadın hemşiresi ve Florence Nightingale madalyası sahibi = Safiye Hüseyin Elbi." },
    { subject: "Tarih", category: "Son Notlar", title: "İlk Türk Kadın Doktor (Safiye Ali)", desc: "Türkiye Cumhuriyeti'nin ilk Türk kadın tıp doktorudur. Almanya'da tıp eğitimi almış, kadın ve çocuk sağlığı alanında öncülük etmiştir.", kpssNote: "İlk Türk kadın hekim = Safiye Ali." },
    { subject: "Tarih", category: "Son Notlar", title: "Selman-ı Pak Muharebesi (Irak Cephesi)", desc: "I. Dünya Savaşı Irak Cephesi'nde Türk ordusunun İngiliz kuvvetlerini durdurduğu ve Kut'ül Amare'ye çekilmeye mecbur bıraktığı kritik muharebedir.", kpssNote: "Kut'ül Amare kuşatmasının yolunu açan Selman-ı Pak zaferidir." },
    { subject: "Tarih", category: "Son Notlar", title: "18 Mart Kahramanı (Cevat Çobanlı)", desc: "18 Mart 1915 Çanakkale Deniz Zaferi'nde Çanakkale Müstahkem Mevkii Komutanı olarak boğaz savunmasını ve tabyaları yöneten komutandır.", kpssNote: "18 Mart Çanakkale Deniz Kahramanı = Cevat Çobanlı Paşa." },
    { subject: "Tarih", category: "Son Notlar", title: "Müstecip Onbaşı (Denizaltı Avcısı)", desc: "Çanakkale Savaşı'nda top atışıyla Fransız denizaltısı Turquoise'ı periskopundan vurarak teslim alan kahraman Türk topçu neferidir.", kpssNote: "Çanakkale'de denizaltı vuran kahraman = Müstecip Onbaşı." },
    { subject: "Tarih", category: "Son Notlar", title: "Paris Barış Konferansı (18 Ocak 1919)", desc: "Milletler Cemiyeti kuruldu, Wilson ilkeleri çiğnendi. İzmir İtalya'dan alınıp Yunanistan'a verilince İtalya konferansı terk etti ve İtilaf bloku arasında ilk görüş ayrılığı çıktı.", kpssNote: "İtilaf devletleri arasındaki ilk açık görüş ayrılığı İzmir meselesiyle bu konferansta çıkmıştır." },
    { subject: "Tarih", category: "Son Notlar", title: "Rıfat Börekçi (İlk Diyanet İşleri Başkanı)", desc: "Milli Mücadele'de Ankara Müftüsü iken İstanbul hükümetinin fetvasına karşı Milli Mücadele'yi destekleyen fetvayı yayınlayan ve ilk Diyanet İşleri Başkanı olan zattır.", kpssNote: "Türkiye Cumhuriyeti'nin ilk Diyanet İşleri Başkanı = Rıfat Börekçi." },
    { subject: "Tarih", category: "Son Notlar", title: "Müftü Ahmet Hulusi Efendi (Denizli Direnişi)", desc: "İzmir'in işgalinden sadece saatler sonra Denizli'de sancağı açıp miting düzenleyerek halkı silahlı direnişe ve cihada çağıran ilk din adamıdır.", kpssNote: "Ege direnişinin ilk miting ve cihat çağrısı Denizli Müftüsü Ahmet Hulusi Efendi'den gelmiştir." },
    { subject: "Tarih", category: "Son Notlar", title: "Ali Galip Olayı (Elazığ Valisi)", desc: "Damat Ferit Hükümeti ve İngilizlerin kışkırtmasıyla Sivas Kongresi'ni basıp Mustafa Kemal'i tutuklamak isteyen Elazığ Valisi Ali Galip'in girişimdir.", kpssNote: "Bu olayın başarısızlığı Damat Ferit'in istifasını getirmiş, Temsil Heyeti ilk siyasi zaferini kazanmıştır." },
    { subject: "Tarih", category: "Son Notlar", title: "Felah-ı Vatan Grubu (Son Mebusan Meclisi)", desc: "Son Osmanlı Mebusan Meclisi'nde kurulan ve Misak-ı Milli kararlarının oy birliğiyle kabul edilmesini sağlayan meclis grubudur (Başkanı Rauf Orbay).", kpssNote: "Misak-ı Milli'yi kabul ettiren grup = Felah-ı Vatan." },
    { subject: "Tarih", category: "Son Notlar", title: "Ali Saip Bey / Namık Bey (Urfa Direnişi)", desc: "Milli Mücadele'de Urfa savunmasını 'Namık' takma adıyla organize eden, Fransız işgaline karşı 12 kişilik Onikiler Grubu ile halkı ayaklandıran kahramandır.", kpssNote: "Urfa Kuvayımilliye komutanı = Ali Saip (Ursavaş) / Namık Bey." },
    { subject: "Tarih", category: "Son Notlar", title: "Patrikhane & Medeni Kanun (1926)", desc: "1926 Türk Medeni Kanunu ile Fener Rum Patrikhanesi'nin ve tüm gayrimüslim dini kurumların mahkeme, nikah, miras gibi dünyevi/hukuki yetkilerine son verilmiştir.", kpssNote: "Patrikhanenin hukuki yetkileri Medeni Kanun ile tamamen kaldırılmıştır." },
    { subject: "Tarih", category: "Son Notlar", title: "Dokuz Umde (CHP'nin Parti Programı)", desc: "Mustafa Kemal tarafından 1923 yılında II. TBMM seçimleri öncesinde ilan edilen ve Cumhuriyet Halk Fırkası'nın temelini oluşturan dokuz ilkedir.", kpssNote: "CHP'nin temeli olan ilk seçim beyannamesi = Dokuz Umde." },
    { subject: "Tarih", category: "Son Notlar", title: "1921 & 1922 Savaşlar Kronolojisi", desc: "1921: Ocak (I. İnönü), Mart-Nisan (II. İnönü), Temmuz (Kütahya-Eskişehir / Meclisin Kayseri'ye taşınması tartışıldı), Ağustos-Eylül (Sakarya). 1922: Ağustos-Eylül (Büyük Taarruz).", kpssNote: "Kurtuluş Savaşı Batı Cephesi muharebeleri sırasıyla: I. İnönü, II. İnönü, Kütahya-Eskişehir, Sakarya, Büyük Taarruz." },
    { subject: "Tarih", category: "Son Notlar", title: "Milletler Cemiyeti'ne Götürülen Konular", desc: "Türkiye'nin Milletler Cemiyeti gündemine taşıdığı konular: Nüfus Mübadelesi, Musul Sorunu (1926), Bozkurt-Lotus Olayı (Mahmut Esat savundu), Boğazlar ve Hatay Meselesi.", kpssNote: "Bozkurt-Lotus davasında Türkiye'yi Lahey'de Mahmut Esat Bozkurt temsil etmiştir." },
    { subject: "Tarih", category: "Son Notlar", title: "Basmacı Harekâtı (Türkistan)", desc: "Sovyet Rusya'nın Türkistan'daki Bolşevik işgaline ve baskısına karşı Türklerin başlattığı milli kurtuluş hareketidir. Korbaşılar ve Enver Paşa liderlik etmiştir.", kpssNote: "Enver Paşa 1922'de Türkistan'da şehit düşmüştür." },
    { subject: "Tarih", category: "Son Notlar", title: "1929 Ekonomik Buhranı & Türkiye'nin Önlemleri", desc: "1929 krizi sonrası Türkiye: Milli İktisat ve Tasarruf Cemiyeti'ni kurmuş, yerli malı kullanımını özendirmiş ve dış ticarette Kliring (takas) sistemini uygulamıştır.", kpssNote: "Kliring sistemi ve Milli İktisat ve Tasarruf Cemiyeti 1929 Buhranı önlemleridir." },
    { subject: "Tarih", category: "Son Notlar", title: "Ekmek Karnesi (II. Dünya Savaşı)", desc: "II. Dünya Savaşı şartlarında temel gıda maddelerinin karaborsaya düşmesini engellemek için İsmet İnönü döneminde ekmek karnesi uygulaması başlatılmıştır.", kpssNote: "II. Dünya Savaşı Türkiye tedbirleri: Ekmek Karnesi, Milli Korunma Kanunu, Varlık Vergisi." },
    { subject: "Tarih", category: "Son Notlar", title: "Pearl Harbor Baskını (1941)", desc: "Japonya'nın 7 Aralık 1941'de ABD donanma üssü Pearl Harbor'a düzenlediği ani hava baskınıdır. Bu olay üzerine ABD savaşa fiilen girmiştir.", kpssNote: "ABD'nin II. Dünya Savaşı'na girmesine yol açan baskındır." },
    { subject: "Tarih", category: "Son Notlar", title: "Varlık Vergisi (1942)", desc: "II. Dünya Savaşı yıllarında aşırı ve haksız savaş kazancı elde eden büyük servet ve ticaret sahiplerinden bir defaya mahsus alınan olağanüstü vergidir.", kpssNote: "Vergiyi ödeyemeyenler Erzurum Aşkale'ye çalışma kampına sevk edilmiştir." },
    { subject: "Tarih", category: "Son Notlar", title: "1912 Trablusgarp & I. Balkan Savaşları", desc: "1912 Ekim'inde Uşi Antlaşması ile Trablusgarp Savaşı biterken, hemen ardından 1912 sonlarında Balkan devletleri Osmanlı'ya saldırarak I. Balkan Savaşı'nı başlattı.", kpssNote: "Trablusgarp Savaşı biterken Balkan Savaşı patlak vermiştir." },
    { subject: "Tarih", category: "Son Notlar", title: "Sultan Abdülaziz (4 Önemli KPSS Bilgisi)", desc: "1) Şura-yı Devlet (Danıştay), 2) Dîvân-ı Ahkâm-ı Adliyye (Yargıtay), 3) Mecelle'nin hazırlanması (Ahmet Cevdet Paşa), 4) Dünyanın 3. büyük deniz filosunun kurulması.", kpssNote: "KPSS'de Sultan Abdülaziz dendiğinde sorulan 4 vazgeçilmez temel bilgidir." },
    { subject: "Tarih", category: "Son Notlar", title: "Ebu'l-Hayrât (II. Murat)", desc: "Çok sayıda cami, medrese, köprü ve hayır kurumu inşa ettirdiği, hayırseverliğiyle tanındığı için 'Ebu'l-Hayrât' (Hayırların Babası) olarak anılan padişahtır.", kpssNote: "Ebu'l-Hayrât unvanı II. Murat'a aittir." },
    { subject: "Tarih", category: "Son Notlar", title: "İlk Celali İsyanı (Yavuz Sultan Selim)", desc: "Osmanlı tarihindeki ilk Celali İsyanı, Yavuz Sultan Selim döneminde Tokat yöresinde 'Bozoklu Celal' tarafından çıkarılmıştır.", kpssNote: "Sonraki tüm Anadolu isyanları bu isyandan esinle 'Celali İsyanları' adını almıştır." },
    { subject: "Tarih", category: "Son Notlar", title: "Turnadağ Savaşı (Yavuz Sultan Selim)", desc: "1515 yılında Dulkadiroğulları Beyliği ile yapılmıştır. Bu zaferle Dulkadiroğulları yıkılmış ve Anadolu Türk Siyasi Birliği (ATSB) KESİN olarak sağlanmıştır.", kpssNote: "Anadolu Türk Siyasi Birliğini kesinleştiren savaş = Turnadağ Savaşı." }
];

const customNotesQuestionsPool = [
    { text: "Uşi Antlaşması ile Kuzey Afrika’daki son toprağımızı hangi devlete verdik?", options: ["Fransa", "İngiltere", "İtalya", "İspanya"], answer: "İtalya" },
    { text: "Trablusgarp Savaşı'nı sonlandıran ve İsviçre'de imzalanan antlaşma hangisidir?", options: ["Londra Antlaşması", "Bükreş Antlaşması", "Uşi Antlaşması", "Atina Antlaşması"], answer: "Uşi Antlaşması" },
    { text: "Tarihte ilk kez savaş uçağının kullanıldığı askeri mücadele hangisidir?", options: ["Dömeke Meydan Muharebesi", "Trablusgarp Savaşı", "I. Balkan Savaşı", "I. Dünya Savaşı"], answer: "Trablusgarp Savaşı" },
    { text: "Mustafa Kemal, Trablusgarp Savaşı'na yerel halkı örgütlemek amacıyla hangi gizli takma adla katılmıştır?", options: ["Kuyumcu Hamdi", "Tüccar Asım", "Gazeteci Şerif", "Öğretmen Kemal"], answer: "Gazeteci Şerif" },
    { text: "Mustafa Kemal, Trablusgarp Savaşı'nda gösterdiği askeri başarılardan sonra hangi rütbeye terfi etmiştir?", options: ["Yüzbaşı", "Binbaşı", "Yarbay", "Albay"], answer: "Binbaşı" },
    { text: "Milli Mücadele'nin (Kurtuluş Savaşı) kazanılacağının ilk işaretleri hangi savaşın teşkilatlandırma başarısında görülmüştür?", options: ["I. Balkan Savaşı", "Trablusgarp Savaşı", "Çanakkale Savaşı", "Sakarya Meydan Muharebesi"], answer: "Trablusgarp Savaşı" },
    { text: "Mustafa Kemal'in kendisinden çok daha büyük bir orduyu yeneceğinin anlaşıldığı ve katıldığı ilk savaş hangisidir?", options: ["31 Mart Vakası", "Trablusgarp Savaşı", "II. Balkan Savaşı", "Çanakkale Savaşı"], answer: "Trablusgarp Savaşı" },
    { text: "Osmanlı Devleti'ne I. Balkan Savaşı'nda saldıran devletler arasında hangisi yer almaz?", options: ["Bulgaristan", "Yunanistan", "Karadağ", "Romanya"], answer: "Romanya" },
    { text: "Ordunun içine siyaset girmesi ve savaştan hemen önce 75.000 askerin terhis edilmesi hangi savaşın kaybedilmesinde temel nedendir?", options: ["Trablusgarp Savaşı", "I. Balkan Savaşı", "I. Dünya Savaşı", "Kırım Savaşı"], answer: "I. Balkan Savaşı" },
    { text: "I. Balkan Savaşı'nın kaybedilmesi sonrası İttihat ve Terakki Cemiyeti'nin hükümeti devirerek yönetimi ele geçirdiği darbenin adı nedir?", options: ["Babıali Baskını", "31 Mart Vakası", "Çırağan Baskını", "Kuleli Vakası"], answer: "Babıali Baskını" },
    { text: "Osmanlı Devleti'nden ayrılan ve bağımsızlığını ilan eden en son Balkan devleti hangisidir?", options: ["Bulgaristan", "Sırbistan", "Arnavutluk", "Karadağ"], answer: "Arnavutluk" },
    { text: "Ege Denizi'nde gösterdiği kahramanlıklardan ötürü 'Hamidiye Kahramanı' ünvanını alan Osmanlı subayı kimdir?", options: ["Enver Paşa", "Rauf Orbay", "Cevat Çobanlı", "Fahrettin Paşa"], answer: "Rauf Orbay" },
    { text: "II. Balkan Savaşı'nda Osmanlı Devleti sadece hangi bölgeyi geri alabilmiştir?", options: ["Batı Trakya", "Doğu Trakya (Edirne-Kırklareli)", "Selanik", "Arnavutluk"], answer: "Doğu Trakya (Edirne-Kırklareli)" },
    { text: "II. Balkan Savaşı'nda Edirne ve Kırklareli'yi geri alarak 'Edirne Fatihi' ünvanını alan komutan kimdir?", options: ["Mustafa Kemal", "Enver Paşa", "Cemal Paşa", "Kazım Karabekir"], answer: "Enver Paşa" },
    { text: "I. Balkan Savaşı'nda yer almayıp, II. Balkan Savaşı'na sonradan dahil olan Balkan devleti hangisidir?", options: ["Yunanistan", "Sırbistan", "Romanya", "Karadağ"], answer: "Romanya" },
    { text: "I. Dünya Savaşı'ndan ilk ayrılan İtilaf devleti hangisidir?", options: ["İtalya", "Japonya", "Rusya", "ABD"], answer: "Japonya" },
    { text: "I. Dünya Savaşı'nda ittifak grubundayken gizli antlaşmalarla İtilaf grubuna geçen (saf değiştiren) devlet hangisidir?", options: ["Rusya", "Bulgaristan", "İtalya", "Romanya"], answer: "İtalya" },
    { text: "Goben ve Breslau gemilerinin Türk bayrağı çekilip Yavuz ve Midilli adıyla hangi devletin limanlarını bombalamasıyla savaşa girilmiştir?", options: ["İngiltere", "Fransa", "Rusya", "İtalya"], answer: "Rusya" },
    { text: "Osmanlı Devleti'nin tek taraflı kapitülasyonları kaldırma kararına en çok tepkiyi gösteren devlet hangisidir?", options: ["İngiltere", "Almanya", "Fransa", "Rusya"], answer: "Almanya" },
    { text: "I. Dünya Savaşı sırasında Ermenilerin Ruslarla iş birliği yapması üzerine çıkarılan zorunlu göç kanunu hangisidir?", options: ["Takrir-i Sükun Kanunu", "Tehcir (Sevk ve İskân) Kanunu", "Meniisrafat Kanunu", "Hıyanet-i Vataniye Kanunu"], answer: "Tehcir (Sevk ve İskân) Kanunu" },
    { text: "I. Dünya Savaşı'nda Osmanlı Devleti'nin askeri olarak başarısız olmasına rağmen toprak kazandığı tek cephe hangisidir?", options: ["Çanakkale Cephesi", "Kafkasya Cephesi", "Irak Cephesi", "Hicaz-Yemen Cephesi"], answer: "Kafkasya Cephesi" },
    { text: "Mustafa Kemal, Kafkas Cephesi'nde hangi iki şehri Ruslardan geri alarak Tuğgeneral rütbesine yükselmiş ve Altın Kılıç madalyası almıştır?", options: ["Kars ve Ardahan", "Muş ve Bitlis", "Erzurum ve Trabzon", "Van ve Hakkari"], answer: "Muş ve Bitlis" },
    { text: "İngilizlerin kontrolündeki Mısır'ı geri almak amacıyla açılan ancak başarısızlıkla sonuçlanan Osmanlı taarruz cephesi hangisidir?", options: ["Kanal Cephesi", "Kafkasya Cephesi", "Galiçya Cephesi", "Irak Cephesi"], answer: "Kanal Cephesi" },
    { text: "18 Mart Deniz Zaferi'nin asıl mimarı olan ve 'İstanbul'u kurtaran birinci kişi' olarak bilinen kahraman komutan kimdir?", options: ["Süleyman Askeri Bey", "Rauf Orbay", "Cevat Çobanlı", "Yakup Şevki Paşa"], answer: "Cevat Çobanlı" },
    { text: "Mustafa Kemal, Çanakkale Cephesi Conkbayırı'nda askerlerine hangi tarihi emri vermiştir?", options: ["Ordular, ilk hedefiniz Akdeniz'dir, ileri!", "Hattı müdafaa yoktur, sathı müdafaa vardır.", "Ben size taarruzu değil, ölmeyi emrediyorum!", "Geldikleri gibi giderler."], answer: "Ben size taarruzu değil, ölmeyi emrediyorum!" },
    { text: "I. Dünya Savaşı'nda Irak Cephesi'ndeki Kut'ül Amare kuşatmasında İngiliz ordusunu tümeniyle teslim alan kahraman kimdir?", options: ["Enver Paşa", "Halil Kut Paşa", "Fahrettin Paşa", "Cemal Paşa"], answer: "Halil Kut Paşa" },
    { text: "İngiliz ajanı Lawrence'ın kışkırtmalarına rağmen Medine'yi açlık ve zorluklara rağmen kahramanca savunan 'Çöl Aslanı/Medine Müdafi' kimdir?", options: ["Fahrettin Paşa", "Kazım Karabekir", "Ali Fuat Cebesoy", "Cemal Paşa"], answer: "Fahrettin Paşa" },
    { text: "Mondros Ateşkes Antlaşması'nı imzalayan Osmanlı Sadrazamı (Hükümet Başkanı) kimdir?", options: ["Damat Ferit Paşa", "Ahmet İzzet Paşa", "Salih Paşa", "Ali Rıza Paşa"], answer: "Ahmet İzzet Paşa" },
    { text: "Osmanlı Devleti adına Mondros Ateşkes Antlaşması'nı imzalayan Bahriye Nazırı subay kimdir?", options: ["Enver Paşa", "Rauf Orbay", "Ali Fethi Okyar", "İsmet İnönü"], answer: "Rauf Orbay" },
    { text: "Mondros'un 'İtilaf devletleri güvenliklerini tehdit eden herhangi bir stratejik noktayı işgal edebilir' diyen en tehlikeli maddesi hangisidir?", options: ["5. Madde", "7. Madde", "15. Madde", "24. Madde"], answer: "7. Madde" },
    { text: "Mondros'un Doğu'da bir Ermeni Devleti kurulmasını amaçlayan, 'Vilayet-i Sitte'de karışıklık çıkarsa işgal edilebilir' diyen maddesi hangisidir?", options: ["7. Madde", "24. Madde", "12. Madde", "30. Madde"], answer: "24. Madde" },
    { text: "Mondros Ateşkes Antlaşması imzalandıktan sonra işgal edilen ilk Osmanlı toprağı neresidir?", options: ["İzmir", "Musul", "Hatay", "Adana"], answer: "Musul" },
    { text: "İzmir'in işgalinde ilk kurşunu sıkarak direnişi başlatan, gerçek adı Osman Nevres olan Hukuk-u Beşer gazetesi yazarı kimdir?", options: ["Hasan Tahsin", "Kara Mehmet Çavuş", "Süleyman Fethi Bey", "Şahin Bey"], answer: "Hasan Tahsin" },
    { text: "İzmir'in işgali sırasında Yunan askerlerine 'Yaşasın Venizelos' demeyi reddettiği için süngülenerek şehit edilen kahraman subay kimdir?", options: ["Süleyman Askeri Bey", "Albay Süleyman Fethi Bey", "Yörük Ali Efe", "Şefik Bey"], answer: "Albay Süleyman Fethi Bey" },
    { text: "Batı Anadolu'da Yunan işgalinin haksızlığını ve Türklerin haklılığını ortaya koyan ilk uluslararası rapor hangisidir?", options: ["Harbord Raporu", "Amiral Bristol Raporu", "Milne Hattı Raporu", "Sandler Raporu"], answer: "Amiral Bristol Raporu" },
    { text: "Milli Mücadele'de ilk kurşunun Hatay Dörtyol'da sıkıldığı direnişçi vatansever kimdir?", options: ["Sütçü İmam", "Kara Mehmet Çavuş", "Hasan Tahsin", "Yörük Ali"], answer: "Kara Mehmet Çavuş" },
    { text: "İngiltere ve Fransa arasında Osmanlı'nın Orta Doğu topraklarını gizlice paylaşmak amacıyla imzalanan en kritik gizli anlaşma hangisidir?", options: ["Londra Anlaşması", "Sykes-Picot Anlaşması", "St. Jean de Maurienne", "Petrograd Protokolü"], answer: "Sykes-Picot Anlaşması" },
    { text: "Milli Mücadele döneminde Çukurova (Adana) bölgesini Fransız ve Ermenilere karşı savunmak amacıyla kurulan yararlı cemiyet hangisidir?", options: ["Trakya-Paşaeli Cemiyeti", "Kilikyalılar Cemiyeti", "Reddi İlhak Cemiyeti", "Milli Kongre Cemiyeti"], answer: "Kilikyalılar Cemiyeti" },
    { text: "Ankara hükümetine ve Milli Mücadele'ye karşı en sert muhalefeti yapan, en zararlı yayın organı kabul edilen gazete hangisidir?", options: ["İrade-i Milliye", "Peyam-ı Sabah", "Açıksöz", "Minber"], answer: "Peyam-ı Sabah" },
    { text: "Mustafa Kemal, Havza Genelgesi'nde halkı işgalleri protesto etmeye çağırırken azınlıklara dokunulmamasını hangi sözlerle uyarmıştır?", options: ["Geldikleri gibi giderler.", "Haklıyken haksız duruma düşmeyin.", "Vatan bir bütündür bölünemez.", "Egemenlik kayıtsız şartsız milletindir."], answer: "Haklıyken haksız duruma düşmeyin." },
    { text: "Milli Mücadele'nin gerekçesi, amacı ve yönteminin ilk kez açıkça ortaya konduğu, ulusal egemenlikten ilk kez bahsedilen belge hangisidir?", options: ["Havza Genelgesi", "Amasya Genelgesi", "Erzurum Kongresi Kararları", "Amasya Görüşmeleri Protokolü"], answer: "Amasya Genelgesi" },
    { text: "Mustafa Kemal, hangi gelişmeden hemen önce Erzurum'da resmi askerlik görevinden (9. Ordu Müfettişliği) istifa etmiştir?", options: ["Havza Genelgesi", "Erzurum Kongresi", "Sivas Kongresi", "Amasya Görüşmeleri"], answer: "Erzurum Kongresi" },
    { text: "Temsil Heyeti'nin ilk kez oluşturulduğu, toplanış yönüyle bölgesel fakat aldığı kararlarla ulusal olan kongre hangisidir?", options: ["Erzurum Kongresi", "Sivas Kongresi", "Balıkesir Kongresi", "Alaşehir Kongresi"], answer: "Erzurum Kongresi" },
    { text: "Tüm milli/yararlı cemiyetlerin 'Anadolu ve Rumeli Müdafaa-i Hukuk Cemiyeti' adı altında tek bir çatı altında birleştirildiği kongre hangisidir?", options: ["Erzurum Kongresi", "Sivas Kongresi", "Pozantı Kongresi", "Amasya Görüşmeleri"], answer: "Sivas Kongresi" },
    { text: "Temsil Heyeti'nin Ali Fuat Paşa'yı Batı Cephesi Kuvayı Milliye komutanlığına ataması, heyetin hangi gücü kullandığını gösterir?", options: ["Yasama", "Yürütme", "Yargı", "Karar alma"], answer: "Yürütme" },
    { text: "Damat Ferit hükümetinin düşürülerek yerine Ali Rıza Paşa hükümetinin gelmesi Temsil Heyeti'nin hangi zaferini ifade eder?", options: ["İlk askeri zafer", "İlk siyasi zafer", "İlk hukuki zafer", "Uluslararası diplomatik zafer"], answer: "İlk siyasi zafer" },
    { text: "İstanbul Hükümeti'nin Temsil Heyeti'ni hukuken ve resmen ilk kez tanıdığı tarihi gelişme hangisidir?", options: ["Amasya Genelgesi", "Erzurum Kongresi", "Amasya Görüşmeleri", "Sivas Kongresi"], answer: "Amasya Görüşmeleri" },
    { text: "Son Osmanlı Mebusan Meclisi'nde kabul edilerek ilan edilen, Milli Mücadele'nin siyasi programı niteliğindeki tarihi belge hangisidir?", options: ["Teşkilat-ı Esasiye", "Misak-ı Milli", "Milli Yemin Belgesi", "Kanun-i Esasi"], answer: "Misak-ı Milli" },
    { text: "Misak-ı Milli kararlarının Mebusan Meclisi'nde kabul edilmesine tepki olarak İtilaf Devletleri 16 Mart 1920'de nereyi resmen işgal etmiştir?", options: ["İzmir", "İstanbul", "Maraş", "Antep"], answer: "İstanbul" },
    { text: "İstanbul'un resmen işgali sırasında İtilaf askerleri tarafından ilk baskına uğrayan yer neresidir?", options: ["Yıldız Sarayı", "Mebusan Meclisi Binası", "Şehzadebaşı Karakolu", "Harbiye Nezareti"], answer: "Şehzadebaşı Karakolu" },
    { text: "Mustafa Kemal'e İstanbul'un işgal edildiği ve karakolların basıldığı haberini telgrafla ilk ulaştıran kahraman kimdir?", options: ["Manastırlı Hamdi", "Yahya Kaptan", "Karakol Cemiyeti Başkanı", "Ali Rıza Paşa"], answer: "Manastırlı Hamdi" },

    // Bölüm 2: TBMM Dönemi, Kurtuluş Savaşı ve Lozan Antlaşması
    { text: "Mustafa Kemal, 23 Nisan 1920'de Ankara'da açılan yeni meclisin ismini aşağıdakilerden hangisi olarak düşünmüştür?", options: ["Mebusan", "Müessesiyan", "Kurultay", "Milli Şura"], answer: "Müessesiyan", part: 2 },
    { text: "23 Nisan 1920'de açılan TBMM'nin ilk açılış konuşmasını en yaşlı üye sıfatıyla yapan Sinop Milletvekili kimdir?", options: ["Şerif Bey", "Rıfat Börekçi", "Abdurrahman Şeref", "Celalettin Arif Bey"], answer: "Şerif Bey", part: 2 },
    { text: "I. TBMM döneminde kabul edilen 24 Nisan Önergesi'ne göre aşağıdakilerden hangisi yanlıştır?", options: ["Hükümet kurmak zorunludur.", "Geçici hükümet başkanı veya padişah vekili atamak doğru değildir.", "TBMM'nin üstünde hiçbir güç yoktur.", "Padişah meclisin kararlarını onaylama yetkisine sahiptir."], answer: "Padişah meclisin kararlarını onaylama yetkisine sahiptir.", part: 2 },
    { text: "I. TBMM hükümetinin ilk Genelkurmay Başkanı aşağıdakilerden hangisidir?", options: ["Fevzi Çakmak", "İsmet İnönü", "Ali Fuat Cebesoy", "Kazım Karabekir"], answer: "İsmet İnönü", part: 2 },
    { text: "Milli Mücadele'nin ilk meclisi olan I. TBMM'nin çıkardığı ilk kanun aşağıdakilerden hangisidir?", options: ["Hıyanet-i Vataniye Kanunu", "Ağnam Vergisi Kanunu", "Nisab-ı Müzakere Kanunu", "Men-i Müskirat Kanunu"], answer: "Ağnam Vergisi Kanunu", part: 2 },
    { text: "I. TBMM'nin açılışından Cumhuriyet'in ilanına kadarki süreçte gerçekleştirdiği tek inkılap hareketi hangisidir?", options: ["Teşkilat-ı Esasiye'nin kabulü", "Saltanatın Kaldırılması", "Halifeliğin Kaldırılması", "Ankara'nın başkent yapılması"], answer: "Saltanatın Kaldırılması", part: 2 },
    { text: "Milli Mücadele karşıtı isyanları ve asker kaçaklarını önlemek amacıyla meclis kararlarıyla kurulan özel mahkemeler hangileridir?", options: ["Divan-ı Harp", "İstiklal Mahkemeleri", "Yargıtay", "Sıkıyönetim Mahkemeleri"], answer: "İstiklal Mahkemeleri", part: 2 },
    { text: "TBMM'ye karşı doğrudan İstanbul Hükümeti tarafından çıkarılan isyanlar aşağıdakilerin hangisinde birlikte verilmiştir?", options: ["Cemil Çeto - Koçgiri isyanları", "Ahmet Anzavur - Kuvayı İnzibatiye (Hilafet Ordusu)", "Delibaş Mehmet - Çopur Musa isyanları", "Çerkez Ethem - Demirci Efe isyanları"], answer: "Ahmet Anzavur - Kuvayı İnzibatiye (Hilafet Ordusu)", part: 2 },
    { text: "TBMM'ye karşı çıkarılan isyanları bastırmak amacıyla 29 Nisan 1920'de yürürlüğe konan kanun hangisidir?", options: ["Hıyanet-i Vataniye Kanunu", "Takrir-i Sükun Kanunu", "Tekalif-i Milliye Kanunu", "Men-i İsrafat Kanunu"], answer: "Hıyanet-i Vataniye Kanunu", part: 2 },
    { text: "Milli Mücadele döneminde milli haklılığımızı dünyaya duyurmak ve halkı doğru bilgilendirmek amacıyla kurulan ajans hangisidir?", options: ["Türk Haber Ajansı", "Anadolu Ajansı", "Hakimiyet-i Milliye Ajansı", "Telsiz Telgraf Ajansı"], answer: "Anadolu Ajansı", part: 2 },
    { text: "Sevr Antlaşması'nın taslağını hazırlamak amacıyla İtilaf devletlerinin toplandığı konferans hangisidir?", options: ["Paris Barış Konferansı", "San Remo Konferansı", "Londra Konferansı", "Spa Konferansı"], answer: "San Remo Konferansı", part: 2 },
    { text: "Doğu Cephesi'nde Ermenileri mağlup ederek TBMM'nin ilk askeri ve siyasi zaferi olan Gümrü Antlaşması'nı imzalayan 'Şark Fatihi' komutan kimdir?", options: ["Ali Fuat Cebesoy", "Kazım Karabekir", "Fevzi Çakmak", "İsmet İnönü"], answer: "Kazım Karabekir", part: 2 },
    { text: "Kurtuluş Savaşı Güney Cephesi'ndeki savunma direnişiyle ilgili aşağıdakilerden hangisi doğrudur?", options: ["Düzenli ordu birlikleri savaşmıştır.", "Sadece Fransızlara karşı mücadele edilmiştir.", "Kuvayımilliye ve halk direnişi etkili olmuştur.", "Gümrü Antlaşması ile kapanmıştır."], answer: "Kuvayımilliye ve halk direnişi etkili olmuştur.", part: 2 },
    { text: "Kurtuluş Savaşı'nda cephane ve mühimmat taşınmasında kullanılan 'İstiklal Yolu' hangi güzergahı kapsar?", options: ["Samsun - Amasya - Sivas - Ankara", "İnebolu - Kastamonu - Çankırı - Ankara", "İzmir - Afyon - Eskişehir - Ankara", "Trabzon - Erzurum - Sivas - Ankara"], answer: "İnebolu - Kastamonu - Çankırı - Ankara", part: 2 },
    { text: "Kuvayımilliye'nin kaldırılarak düzenli ordunun kurulma sürecini hızlandıran askeri gelişme hangisidir?", options: ["Gediz Muharebesi yenilgisi", "I. İnönü Savaşı", "Kütahya-Eskişehir Savaşları", "Sakarya Meydan Muharebesi"], answer: "Gediz Muharebesi yenilgisi", part: 2 },
    { text: "I. İnönü Zaferi sonrasında Sovyet Rusya ile imzalanan Moskova Antlaşması'na göre Misakımilli'den verilen ilk taviz neresidir?", options: ["Hatay", "Batum", "Musul", "Selanik"], answer: "Batum", part: 2 },
    { text: "Kütahya-Eskişehir Savaşları devam ederken Mustafa Kemal'in cephane sıkıntısına rağmen Ankara'da topladığı kongre hangisidir?", options: ["İktisat Kongresi", "Maarif (Eğitim) Kongresi", "Sağlık Kongresi", "Hukuk Kongresi"], answer: "Maarif (Eğitim) Kongresi", part: 2 },
    { text: "Ordunun yiyecek, kıyafet, araç-gereç ihtiyaçlarını halktan toplamak amacıyla Mustafa Kemal'in Başkomutanlık yetkisine dayanarak çıkardığı emirler hangileridir?", options: ["Takrir-i Sükun Emirleri", "Tekalif-i Milliye Emirleri", "Tehcir Emirleri", "Kanun-i Esasi Kararları"], answer: "Tekalif-i Milliye Emirleri", part: 2 },
    { text: "Türk ordusunun Sakarya Meydan Muharebesi'ndeki başarısından sonra Fransa ile imzaladığı, Hatay'ın dışarıda kalmasıyla Misakımilli'den ikinci tavizin verildiği antlaşma hangisidir?", options: ["Moskova Antlaşması", "Kars Antlaşması", "Ankara Antlaşması (1921)", "Gümrü Antlaşması"], answer: "Ankara Antlaşması (1921)", part: 2 },
    { text: "Kurtuluş Savaşı'nın askeri safhasını tamamen bitiren, Doğu Trakya, İstanbul ve Boğazlar'ın savaşılmadan alınmasını sağlayan ateşkes antlaşması hangisidir?", options: ["Mondros Ateşkesi", "Mudanya Ateşkesi", "Lozan Barış Antlaşması", "Atina Antlaşması"], answer: "Mudanya Ateşkesi", part: 2 },
    { text: "Lozan Barış Antlaşması'nda çözülemeyerek ileriye (İngiltere ile ikili görüşmelere) bırakılan en önemli sınır konusu hangisidir?", options: ["Suriye Sınırı", "Irak Sınırı (Musul)", "Batı Trakya Sınırı", "Boğazlar Statüsü"], answer: "Irak Sınırı (Musul)", part: 2 },

    // Bölüm 3: Çok Partili Hayat & İsyanlar, Dış Politika ve İnkılaplar
    { text: "Terakkiperver Cumhuriyet Fırkası'nın kurucuları arasında (KARAR) yer alan isimlerden biri aşağıdakilerden hangisi değildir?", options: ["Kazım Karabekir", "Ali Fethi Okyar", "Refet Bele", "Rauf Orbay"], answer: "Ali Fethi Okyar", part: 3 },
    { text: "Türkiye Cumhuriyeti'nin ilk muhalefet partisi olan Terakkiperver Cumhuriyet Fırkası, hangi ekonomik modeli savunmuştur?", options: ["Devletçilik", "Liberalizm", "Sosyalizm", "Merkantilizm"], answer: "Liberalizm", part: 3 },
    { text: "Cumhuriyet tarihinin laikliğe ve rejime karşı çıkan ilk büyük isyanı aşağıdakilerden hangisidir?", options: ["Menemen Olayı", "Şeyh Sait İsyanı", "Bozkır İsyanı", "Koçgiri İsyanı"], answer: "Şeyh Sait İsyanı", part: 3 },
    { text: "Şeyh Sait İsyanı'nın bastırılmasında Ali Fethi Okyar hükümetinin başarısız olması üzerine kurulan yeni hükümetin başbakanı kimdir?", options: ["Celal Bayar", "İsmet İnönü", "Adnan Menderes", "Refik Saydam"], answer: "İsmet İnönü", part: 3 },
    { text: "Şeyh Sait İsyanı sonrasında ülkede düzen ve güvenliği sağlamak amacıyla çıkarılan olağanüstü kanun hangisidir?", options: ["Takrir-i Sükûn Kanunu", "Hıyanet-i Vataniye Kanunu", "Nisab-ı Müzakere Kanunu", "Tehcir Kanunu"], answer: "Takrir-i Sükûn Kanunu", part: 3 },
    { text: "Türkiye'nin Musul sorunu konusunda İngiltere karşısında askeri bir harekât yapmasını zorlaştırarak Musul'un kaybedilmesine neden olan iç gelişme hangisidir?", options: ["Menemen Olayı", "Şeyh Sait İsyanı", "Anzavur İsyanı", "Çerkez Ethem İsyanı"], answer: "Şeyh Sait İsyanı", part: 3 },
    { text: "Cumhuriyet döneminde suikastçıların yargılandığı İzmir Suikast Girişimi (1926) davası, hangi mahkemelerin son kez kullanılmasına sahne olmuştur?", options: ["Divan-ı Harp", "İstiklal Mahkemeleri", "Devlet Güvenlik Mahkemeleri", "Nizamiye Mahkemeleri"], answer: "İstiklal Mahkemeleri", part: 3 },
    { text: "Atatürk'ün isteği üzerine Paris Büyükelçisi Ali Fethi Okyar tarafından kurulan ve kurucuları arasında Atatürk'ün kız kardeşi Makbule Atadan'ın da yer aldığı parti hangisidir?", options: ["Terakkiperver Cumhuriyet Fırkası", "Serbest Cumhuriyet Fırkası", "Millet Partisi", "Hürriyet Partisi"], answer: "Serbest Cumhuriyet Fırkası", part: 3 },
    { text: "Asteğmen Mustafa Fehmi Kubilay'ın şehit edildiği rejim karşıtı olay hangisidir?", options: ["Şeyh Sait İsyanı", "Menemen Olayı", "Bozkurt-Lotus Olayı", "Haliç Olayı"], answer: "Menemen Olayı", part: 3 },
    { text: "Lozan'da çözülemeyerek sonraya bırakılan Musul sorununun görüşüldüğü 1924 Haliç Konferansı'nda Türkiye'yi kim temsil etmiştir?", options: ["İsmet İnönü", "Ali Fethi Okyar", "Tevfik Rüştü Aras", "Mahmut Esat Bozkurt"], answer: "Ali Fethi Okyar", part: 3 },
    { text: "Musul sorunu görüşmelerinde taraflar arasında sınır çizmek amacıyla belirlenen geçici sınır hattına ne ad verilir?", options: ["Milne Hattı", "Brüksel Hattı", "MacMahon Hattı", "Suriye Sınır Hattı"], answer: "Brüksel Hattı", part: 3 },
    { text: "Dış politikada Fransa ile yaşanan ve Türkiye'nin masaya oturmadan kendi iç hukuku çerçevesinde çözerek elde ettiği ilk siyasi başarı hangisidir?", options: ["Bozkurt-Lotus Sorunu", "Yabancı Okullar Sorunu", "Musul Sorunu", "Hatay Sorunu"], answer: "Yabancı Okullar Sorunu", part: 3 },
    { text: "Türkiye, 18 Temmuz 1932'de hangi ülkenin resmi teklifi (daveti) üzerine Milletler Cemiyeti'ne üye olmuştur?", options: ["Yunanistan", "İspanya", "İngiltere", "Fransa"], answer: "İspanya", part: 3 },
    { text: "Balkan Antantı'na (1934) İtalya'nın baskısından ötürü katılmayan devlet hangisidir?", options: ["Bulgaristan", "Arnavutluk", "Romanya", "Yugoslavya"], answer: "Arnavutluk", part: 3 },
    { text: "Montrö Boğazlar Sözleşmesi'nde (1936) Türkiye'yi başarıyla temsil eden ve sözleşmeyi imzalayan dönemin Dışişleri Bakanı kimdir?", options: ["Bekir Sami Bey", "Tevfik Rüştü Aras", "Yusuf Kemal Tengirşenk", "Celal Bayar"], answer: "Tevfik Rüştü Aras", part: 3 },
    { text: "Türkiye, İran, Irak ve Afganistan arasında sınırların güvenliğini sağlamak amacıyla 1937'de imzalanan pakt hangisidir?", options: ["Sadabat Paktı", "Balkan Antantı", "Akdeniz Paktı", "Bağdat Paktı"], answer: "Sadabat Paktı", part: 3 },
    { text: "Hatay'ın Türk nüfusu barındırdığını kanıtlayarak bağımsızlığına zemin hazırlayan Milletler Cemiyeti raporu hangisidir?", options: ["Bristol Raporu", "Sandler Raporu", "Milne Raporu", "Harbord Raporu"], answer: "Sandler Raporu", part: 3 },
    { text: "Lahey Adalet Divanı'na taşınan Bozkurt-Lotus davasında Türkiye'yi başarıyla savunarak haklılığımızı kanıtlayan ve sonrasında Bozkurt soyadını alan devlet adamı kimdir?", options: ["Mahmut Esat Bey", "Ali Fethi Okyar", "Tevfik Rüştü Aras", "Şükrü Saracoğlu"], answer: "Mahmut Esat Bey", part: 3 },
    { text: "TBMM tarafından seçilen Osmanlı hanedanının son halifesi aşağıdakilerden hangisidir?", options: ["Vahdettin", "Abdülmecid Efendi", "Mehmed Reşad", "II. Abdülhamid"], answer: "Abdülmecid Efendi", part: 3 },
    { text: "Halifeliğin kaldırıldığı 3 Mart 1924 günü kabul edilen ve eğitimde birliği sağlayan tarihi kanun hangisidir?", options: ["Tevhid-i Tedrisat Kanunu", "Teşkilat-ı Esasiye Kanunu", "Takrir-i Sükun Kanunu", "Kabotaj Kanunu"], answer: "Tevhid-i Tedrisat Kanunu", part: 3 },
    { text: "Kadınlara siyasi hakların verilme sırası (Belediye - Muhtar - Vekil) aşağıdakilerden hangisinde kronolojik olarak doğru verilmiştir?", options: ["1930 - 1933 - 1934", "1926 - 1930 - 1934", "1930 - 1934 - 1935", "1928 - 1930 - 1933"], answer: "1930 - 1933 - 1934", part: 3 },

    // Bölüm 4: Osmanlı Kültür ve Medeniyeti
    { text: "Osmanlı Devleti'nde tahta çıkacak hanedan üyesinin belirlenmesinde 'en yaşlı ve en olgun (aklı başında)' erkek üyenin tahta geçmesi esasına dayanan Ekber ve Erşed sistemi hangi padişah döneminde getirilmiştir?", options: ["I. Murat", "Fatih Sultan Mehmet", "I. Ahmet", "II. Mahmut"], answer: "I. Ahmet", part: 4 },
    { text: "Osmanlı Devleti'nde ilk kez 'Sultan' unvanını kullanan hükümdar aşağıdakilerden hangisidir?", options: ["Osman Bey", "Orhan Bey", "I. Murat", "Fatih Sultan Mehmet"], answer: "Orhan Bey", part: 4 },
    { text: "Osmanlı Devleti'nde devlet memurları ve idarecilerinin yetiştirildiği, devşirme kökenlilerin eğitim aldığı ve sadece Müslüman olanların kabul edildiği saray okulu hangisidir?", options: ["Sıbyan Mektebi", "Enderun", "Şehzadegan Mektebi", "Harem"], answer: "Enderun", part: 4 },
    { text: "Divan-ı Hümayun'da padişah fermanlarına tuğra çekmek, fethedilen toprakları tahrir defterlerine kaydetmek ve örfi hukuk konularında uzman olmakla görevli divan üyesi kimdir?", options: ["Sadrazam", "Kazasker", "Nişancı", "Defterdar"], answer: "Nişancı", part: 4 },
    { text: "Osmanlı Devleti'nde hem adalet ve hukuk hem de eğitim işlerinden sorumlu olan, kadıların ve müderrislerin atamasını gerçekleştiren divan üyesi kimdir?", options: ["Şeyhülislam", "Kazasker (Kadıasker)", "Nişancı", "Reisülküttab"], answer: "Kazasker (Kadıasker)", part: 4 },
    { text: "Osmanlı Devleti'nde padişahın resmi yazıları, atamaları veya memurlara verdiği yetki ve ayrıcalıkları içeren belgeye ne ad verilir?", options: ["Ferman", "Berat", "Hatt-ı Hümayun", "Adaletname"], answer: "Berat", part: 4 },
    { text: "Osmanlı toplum yapısında eğitim, adalet ve din (Şeyhülislam, Kazasker, Kadı, Müderris) işleriyle uğraşan yönetici sınıf hangisidir?", options: ["Seyfiye", "İlmiye", "Kalemiye", "Reaya"], answer: "İlmiye", part: 4 },
    { text: "Osmanlı Devleti'nde ölen bir kişinin geride bıraktığı mirasçılarını ve mal varlığını gösteren, kadılar tarafından tutulan ve kişilerin fiziksel özelliklerini barındırmayan defter hangisidir?", options: ["Tahrir Defteri", "Şer'iyye Sicili", "Tereke Defteri", "Mühimme Defteri"], answer: "Tereke Defteri", part: 4 },
    { text: "Osmanlı Devleti'nde merkeze uzak olan eyaletlerde vergilerin ihale usulüyle peşin toplanması esasına dayanan sistem ve bu ihaleyi alan kişiye ne ad verilir?", options: ["Tımar - Cebelü", "İltizam - Mültezim", "Müsadere - Mütevelli", "Malikane - Voyvoda"], answer: "İltizam - Mültezim", part: 4 },
    { text: "İmtiyazlı (özerk) eyaletlerden biri olan ve kutsal topraklar olması nedeniyle Osmanlı Devleti'ne ne vergi veren ne de asker gönderen eyalet hangisidir?", options: ["Kırım", "Eflak", "Boğdan", "Hicaz"], answer: "Hicaz", part: 4 },
    { text: "Kapıkulu askerlerinin üç ayda bir aldıkları maaş ve taht değişikliği sırasında padişah tarafından dağıtılan bahşiş sırasıyla hangileridir?", options: ["Ulufe - Cülus", "Cülus - Ulufe", "Mangır - Akçe", "Salıyane - İltizam"], answer: "Ulufe - Cülus", part: 4 },
    { text: "Eyalet ordusunun en kalabalık sınıfını oluşturan, devletten doğrudan maaş almayan ve dirlik gelirleri karşılığında atlı asker yetiştiren birim hangisidir?", options: ["Yeniçeriler", "Tımarlı Sipahiler", "Akıncılar", "Azaplar"], answer: "Tımarlı Sipahiler", part: 4 },
    { text: "Osmanlı Devleti'nde ilk tersane Orhan Bey döneminde nerede kurulmuştur?", options: ["Gelibolu", "Karamürsel", "Haliç", "Bursa"], answer: "Karamürsel", part: 4 },
    { text: "Osmanlı Devleti'nde gayrimüslim sağlıklı erkeklerden, askere gitmedikleri ve devletin koruması altında yaşadıkları için alınan şer'i vergi hangisidir?", options: ["Öşür", "Haraç", "Cizye", "Avarız"], answer: "Cizye", part: 4 },
    { text: "Osmanlı iktisadi anlayışında, piyasada halkın ihtiyacı olan malların uygun fiyata, kaliteli ve yeterli miktarda bulundurulmasını amaçlayan ilke hangisidir?", options: ["İaşecilik", "Fiskalizm", "Gelenekçilik", "Narh"], answer: "İaşecilik", part: 4 },
    { text: "Mithat Paşa tarafından memleket sandıklarının birleştirilmesiyle temelleri atılan ve çiftçileri desteklemeyi amaçlayan günümüz bankası hangisidir?", options: ["Bank-ı Dersaadet", "Bank-ı Osmani", "Ziraat Bankası", "Halkbank"], answer: "Ziraat Bankası", part: 4 },
    { text: "Gelirleri padişahın eşlerine, kızlarına ve kız kardeşlerine saray giderleri için ayrılan miri toprak çeşidi hangisidir?", options: ["Ocaklık", "Yurtluk", "Paşmaklık", "Arpalık"], answer: "Paşmaklık", part: 4 },
    { text: "Mimar Sinan'ın UNESCO Dünya Mirası Listesi'nde yer alan ve kendisi tarafından 'ustalık eserim' olarak nitelendirilen Edirne'deki cami hangisidir?", options: ["Şehzade Camii", "Süleymaniye Camii", "Selimiye Camii", "Nuruosmaniye Camii"], answer: "Selimiye Camii", part: 4 },
    { text: "Osmanlı Devleti'nde cerrahi alanda yaptığı tıp çalışmalarıyla bilinen ve Fatih döneminde deneysel tıp çalışmaları yürüten tıp bilgini kimdir?", options: ["Ali Kuşçu", "Sabuncuoğlu Şerafeddin", "Akşemsettin", "Kayserili Davud"], answer: "Sabuncuoğlu Şerafeddin", part: 4 },
    { text: "Batılıların 'Hacı Halife' veya 'Hacı Kalfa' olarak adlandırdığı, Keşfü'z-Zünun ve Cihannüma gibi ünlü eserleri yazan Osmanlı bibliyograf ve coğrafya bilgini kimdir?", options: ["Evliya Çelebi", "Katip Çelebi", "Ahmet Cevdet Paşa", "Piri Reis"], answer: "Katip Çelebi", part: 4 },

    // Bölüm 5: Dağılma Dönemi Siyasi Gelişmeleri, Islahatlar & Fikir Akımları
    { text: "Sırpların Osmanlı Devleti'ne karşı 1804 yılında başlattığı ilk isyanın önderi kimdir?", options: ["Kara Yorgi", "İpsilanti", "Kavalalı Mehmet Ali", "Mençikof"], answer: "Kara Yorgi", part: 5 },
    { text: "Osmanlı Devleti, Sırplara ilk kez imtiyaz ve ayrıcalığı hangi antlaşma ile vermiştir?", options: ["Edirne Antlaşması", "Bükreş Antlaşması (1812)", "Ayastefanos Antlaşması", "Paris Antlaşması"], answer: "Bükreş Antlaşması (1812)", part: 5 },
    { text: "1820-1829 yılları arasındaki Yunan İsyanı sırasında, isyanı bastıramayan II. Mahmut kimden yardım istemiştir?", options: ["Rus Çarı I. Nikola", "Mısır Valisi Kavalalı Mehmet Ali Paşa", "Avusturya Başbakanı Metternich", "Alemdar Mustafa Paşa"], answer: "Mısır Valisi Kavalalı Mehmet Ali Paşa", part: 5 },
    { text: "1827 yılında İngiltere, Fransa ve Rusya, Kavalalı'nın güçlenmesini engellemek için Osmanlı ve Mısır donanmalarını nerede yakmıştır?", options: ["Sinop Baskını", "Navarin Baskını", "Çeşme Baskını", "İnebahtı Baskını"], answer: "Navarin Baskını", part: 5 },
    { text: "Osmanlı Devleti'nden bağımsızlığını kazanarak ayrılan ilk azınlık devleti ve bu bağımsızlığın tanındığı antlaşma hangisidir?", options: ["Sırbistan - Berlin Antlaşması", "Yunanistan - Edirne Antlaşması (1829)", "Bulgaristan - Berlin Antlaşması", "Romanya - Bükreş Antlaşması"], answer: "Yunanistan - Edirne Antlaşması (1829)", part: 5 },
    { text: "Mısır valisi Kavalalı Mehmet Ali Paşa isyanı üzerine Kütahya'ya kadar ilerleyen tehdide karşı Osmanlı'nın 'Denize düşen yılana sarılır' diyerek Rusya ile imzaladığı antlaşma hangisidir?", options: ["Hünkar İskelesi Antlaşması (1833)", "Kütahya Antlaşması", "Balta Limanı Antlaşması", "Londra Boğazlar Antlaşması"], answer: "Hünkar İskelesi Antlaşması (1833)", part: 5 },
    { text: "Osmanlı Devleti'nin boğazlar konusunda tek başına karar verebildiği son antlaşma hangisidir?", options: ["Londra Boğazlar Antlaşması", "Hünkar İskelesi Antlaşması", "Edirne Antlaşması", "Kütahya Antlaşması"], answer: "Hünkar İskelesi Antlaşması", part: 5 },
    { text: "II. Mahmut döneminde İngiltere'ye en geniş kapitülasyonların verilmesiyle Osmanlı'yı yarı sömürge haline getiren antlaşma hangisidir?", options: ["Balta Limanı Antlaşması (1838)", "Hünkar İskelesi Antlaşması", "Edirne Antlaşması", "Paris Antlaşması"], answer: "Balta Limanı Antlaşması (1838)", part: 5 },
    { text: "Boğazlar konusunun ilk kez uluslararası bir konferansta ele alındığı ve boğazların ilk uluslararası statü kazandığı antlaşma hangisidir?", options: ["Hünkar İskelesi Antlaşması", "1841 Londra Boğazlar Antlaşması", "Paris Antlaşması", "Berlin Antlaşması"], answer: "1841 Londra Boğazlar Antlaşması", part: 5 },
    { text: "Kırım Savaşı (1853-1856) sırasında Rus donanmasının Osmanlı donanmasını yaktığı baskın hangisidir?", options: ["Sinop Baskını", "Navarin Baskını", "Çeşme Baskını", "İnebahtı Baskını"], answer: "Sinop Baskını", part: 5 },
    { text: "Osmanlı Devleti, tarihinin ilk dış borcunu hangi savaş sırasında ve hangi devletten almıştır?", options: ["Kırım Savaşı - İngiltere", "93 Harbi - Rusya", "I. Dünya Savaşı - Almanya", "Trablusgarp Savaşı - Fransa"], answer: "Kırım Savaşı - İngiltere", part: 5 },
    { text: "Kırım Savaşı sırasında İstanbul Selimiye Kışlası'nda yaralı askerlere gönüllü bakıcılık yapan, lambalı kadın olarak bilinen hemşire kimdir?", options: ["Florence Nightingale", "Nene Hatun", "Halide Edib", "Şerife Bacı"], answer: "Florence Nightingale", part: 5 },
    { text: "Osmanlı Devleti'nin ilk kez bir Avrupa devleti sayıldığı ve topraklarının Avrupa devletleri koruması altına alındığı antlaşma hangisidir?", options: ["Paris Antlaşması (1856)", "Berlin Antlaşması", "Bükreş Antlaşması", "Hünkar İskelesi Antlaşması"], answer: "Paris Antlaşması (1856)", part: 5 },
    { text: "93 Harbi (1877-1878 Osmanlı-Rus Savaşı) sırasında Erzurum Aziziye tabyalarında gösterdiği kahramanlıkla simgeleşen kadın halk kahramanımız kimdir?", options: ["Şerife Bacı", "Nene Hatun", "Halime Çavuş", "Gördesli Makbule"], answer: "Nene Hatun", part: 5 },
    { text: "93 Harbi'nde Plevne Savunması ile büyük bir askeri direnç gösteren ve 'Plevne Kahramanı' ünvanını alan komutan kimdir?", options: ["Gazi Osman Paşa", "Enver Paşa", "Cevat Çobanlı", "Fahrettin Paşa"], answer: "Gazi Osman Paşa", part: 5 },
    { text: "Rusya'nın Ege ve Akdeniz'e inmesini sağlayan Ayastefanos Antlaşması'nın yerine, İngiltere'nin baskısıyla imzalanan ve Sırbistan, Karadağ ile Romanya'nın bağımsız olduğu antlaşma hangisidir?", options: ["Bükreş Antlaşması", "Berlin Antlaşması (1878)", "Paris Antlaşması", "Londra Antlaşması"], answer: "Berlin Antlaşması (1878)", part: 5 },
    { text: "Berlin Antlaşması ile Rusya'ya bırakılan Elviye-i Selase (üç vilayet) aşağıdakilerden hangisinde doğru verilmiştir?", options: ["Kars - Ardahan - Batum", "Kars - Erzurum - Van", "Trabzon - Rize - Artvin", "Sivas - Diyarbakır - Bitlis"], answer: "Kars - Ardahan - Batum", part: 5 },
    { text: "Osmanlı Devleti'nin, Giritli Rumların isyanları üzerine Girit adasında ıslahat yapmayı kabul ettiği ferman hangisidir?", options: ["Halepa Fermanı (1878)", "Tanzimat Fermanı", "Islahat Fermanı", "Babıali Fermanı"], answer: "Halepa Fermanı (1878)", part: 5 },
    { text: "Osmanlı Devleti'nin kazanan taraf olarak imzaladığı son meydan savaşı olan ve lise yıllarında Mustafa Kemal'in de katılmak istediği savaş hangisidir?", options: ["Dömeke Meydan Savaşı", "Nizip Savaşı", "Plevne Savaşı", "Kırım Savaşı"], answer: "Dömeke Meydan Savaşı", part: 5 },
    { text: "Jön Türklerin baskısıyla ilan edilen ve Türk tarihinin ilk anayasası Kanun-ı Esasi'nin yürürlüğe girmesini sağlayan rejim değişikliği hangisidir?", options: ["I. Meşrutiyet (1876)", "II. Meşrutiyet", "Tanzimat Fermanı", "Saltanatın Kaldırılması"], answer: "I. Meşrutiyet (1876)", part: 5 },
    { text: "Osmanlı Devleti'nde anayasal monarşiye karşı çıkan, mevcut rejimi yıkmayı amaçlayan ilk gerici irticai ayaklanma hangisidir?", options: ["Babıali Baskını", "31 Mart Olayı (1909)", "Şeyh Sait İsyanı", "Kuleli Vakası"], answer: "31 Mart Olayı (1909)", part: 5 },
    { text: "31 Mart Olayı'nı bastırmak üzere Selanik'ten gelen ve Mustafa Kemal'in de kurmay başkanlığını yaptığı ordunun adı nedir?", options: ["Hareket Ordusu", "Kuvay-ı İnzibatiye", "Asakir-i Mansure-i Muhammediye", "Redif Birlikleri"], answer: "Hareket Ordusu", part: 5 },
    { text: "Türk dünyasındaki tüm Türkleri tek bir çatı altında birleştirmeyi amaçlayan, İttihat ve Terakki liderlerinin de benimsediği fikir akımı hangisidir?", options: ["Türkçülük", "Turancılık (Pantürkizm)", "İslamcılık", "Osmanlıcılık"], answer: "Turancılık (Pantürkizm)", part: 5 },
    { text: "İlk kez 'Şark Sorunu' (Doğu Sorunu) ifadesinin Osmanlı topraklarının paylaşılması bağlamında kullanıldığı uluslararası kongre hangisidir?", options: ["Viyana Kongresi (1815)", "Berlin Kongresi", "Paris Kongresi", "Londra Kongresi"], answer: "Viyana Kongresi (1815)", part: 5 },

    // --- BÖLÜM 6: KURULUŞ DÖNEMİ (1299-1453) ---
    { text: "Osmanlı Devleti'nin kısa sürede büyümesinde etkili olan ve 'Anadolu Kadınları' anlamına gelen sosyal destek grubu hangisidir?", options: ["Gaziyân-ı Rum", "Bâcıyân-ı Rum", "Ahiyân-ı Rum", "Abdalân-ı Rum"], answer: "Bâcıyân-ı Rum", part: 6 },
    { text: "Osmanlı Devleti'nde Karacahisar'ın fethi sonrası atanan ilk Osmanlı kadısı kimdir?", options: ["Davud-ı Kayseri", "Dursun Fakih", "Şeref Bey", "Alaaddin Paşa"], answer: "Dursun Fakih", part: 6 },
    { text: "Tarihçi Halil İnalcık'ın Osmanlı Devleti'nin fiili kuruluş tarihi olarak kabul ettiği, Bizans ile yapılan ilk savaş hangisidir?", options: ["Sırpsındığı Savaşı", "Koyunhisar (Bafeus) Savaşı", "Malazgirt Savaşı", "Pelekanon Savaşı"], answer: "Koyunhisar (Bafeus) Savaşı", part: 6 },
    { text: "Osmanlı Devleti'de ilk bakır para (mangır) hangi hükümdar döneminde bastırılmıştır?", options: ["Osman Bey", "Orhan Bey", "I. Murat", "Yıldırım Bayezit"], answer: "Osman Bey", part: 6 },
    { text: "1345 yılında Osmanlı topraklarına katılarak Anadolu Türk siyasi birliğinin kurulmasında ilk adımı oluşturan ve Osmanlı'ya denizcilik gücü kazandıran beylik hangisidir?", options: ["Germiyanoğulları", "Karesioğulları", "Karamanoğulları", "Hamitoğulları"], answer: "Karesioğulları", part: 6 },
    { text: "Osmanlı Devleti'nin Bizans'taki taht kavgalarına yardım karşılığında hediye aldığı ve Rumeli'deki ilk toprak parçası olan kale hangisidir?", options: ["Kulacahisar", "Çimpe Kalesi", "Kilitbahir", "Gelibolu Kalesi"], answer: "Çimpe Kalesi", part: 6 },
    { text: "Çimpe Kalesi'ni alarak Rumeli'ye ilk geçişi sağlayan ve 'Gelibolu Fatihi' olarak anılan Osmanlı devlet adamı kimdir?", options: ["Süleyman Paşa", "Orhan Bey", "Lala Şahin Paşa", "Evrenos Bey"], answer: "Süleyman Paşa", part: 6 },
    { text: "Osmanlı Devleti'nde Divan-ı Hümayun'un kurulması, ilk vezir ataması ve ilk düzenli ordunun kurulması hangi padişah döneminde gerçekleşmiştir?", options: ["Osman Bey", "Orhan Bey", "I. Murat", "II. Murat"], answer: "Orhan Bey", part: 6 },
    { text: "Osmanlı Devleti'nin ilk veziri kimdir?", options: ["Alaaddin Paşa", "Çandarlı Halil Paşa", "Köprülü Mehmet Paşa", "Sokullu Mehmet Paşa"], answer: "Alaaddin Paşa", part: 6 },
    { text: "Osmanlı Devleti'nin ilk medresesi nerede açılmış ve ilk müderrisi kim olmuştur?", options: ["Bursa - Dursun Fakih", "İznik - Davud-ı Kayseri", "Edirne - Akşemsettin", "İstanbul - Ali Kuşçu"], answer: "İznik - Davud-ı Kayseri", part: 6 },
    { text: "Osman Bey ve Orhan Bey döneminde para basımı ve unvan kullanımında görülen gelişim sırasıyla hangisinde doğru verilmiştir?", options: ["Altın Para-Hakan / Gümüş Para-Sultan", "Bakır Para-Bey / Gümüş Para-Sultan", "Gümüş Para-Sultan / Altın Para-Kayser", "Bakır Para-Kağan / Altın Para-Sultan"], answer: "Bakır Para-Bey / Gümüş Para-Sultan", part: 6 },
    { text: "Edirne'nin fethedilerek başkent yapıldığı ve I. Murat döneminde gerçekleşen savaş hangisidir?", options: ["Sazlıdere Savaşı", "Sırpsındığı Savaşı", "Çirmen Savaşı", "I. Kosova Savaşı"], answer: "Sazlıdere Savaşı", part: 6 },
    { text: "Osmanlı Devleti ile Haçlı orduları arasında yapılan tarihteki ilk savaş hangisidir?", options: ["Pelekanon Savaşı", "Sırpsındığı Savaşı", "I. Kosova Savaşı", "Varna Savaşı"], answer: "Sırpsındığı Savaşı", part: 6 },
    { text: "I. Murat döneminde çeyiz ve satın alma yoluyla toprakları Osmanlı'ya katılan Anadolu beylikleri sırasıyla hangileridir?", options: ["Karesioğulları - Dulkadiroğulları", "Germiyanoğulları - Hamitoğulları", "Karamanoğulları - Aydınoğulları", "Saruhanoğulları - Candaroğulları"], answer: "Germiyanoğulları - Hamitoğulları", part: 6 },
    { text: "Savaş meydanında ilk kez top sesinden yararlanılarak Haçlıların yenildiği ve padişah I. Murat'ın şehit düştüğü savaş hangisidir?", options: ["Niğbolu Savaşı", "I. Kosova Savaşı", "II. Kosova Savaşı", "Varna Savaşı"], answer: "I. Kosova Savaşı", part: 6 },
    { text: "Osmanlı veraset sisteminde 'Ülke padişah ve oğullarınındır' esasıyla ilk değişikliği yapan hükümdar kimdir?", options: ["Osman Bey", "I. Murat", "Fatih Sultan Mehmet", "I. Ahmet"], answer: "I. Murat", part: 6 },
    { text: "1396 Niğbolu Savaşı zaferi sonrasında Abbasi Halifesi tarafından Yıldırım Bayezit'e verilen unvan hangisidir?", options: ["Sultan-ı İklim-i Rum", "Hadimü'l Haremeyn", "Kayser-i Rum", "Ebul Hayrat"], answer: "Sultan-ı İklim-i Rum", part: 6 },
    { text: "1402 Ankara Savaşı'nda Yıldırım Bayezit'in Timur'a yenilmesinde aşağıdakilerden hangisi doğrudan etkili olmuştur?", options: ["Fransa'nın Timur'u desteklemesi", "Karatatarların ve bazı beylik askerlerinin saf değiştirmesi", "Yeniçeri Ocağı'nın isyan etmesi", "Osmanlı donanmasının yakılması"], answer: "Karatatarların ve bazı beylik askerlerinin saf değiştirmesi", part: 6 },
    { text: "Osmanlı Devleti'nde kardeşleriyle taht mücadelelerini kazanarak Fetret Devri'ne son veren ve devletin ikinci kurucusu kabul edilen padişah kimdir?", options: ["I. Mehmet (Çelebi)", "II. Murat", "II. Mehmet (Fatih)", "Yıldırım Bayezit"], answer: "I. Mehmet (Çelebi)", part: 6 },
    { text: "Balkanların kesin olarak Türk yurdu haline geldiği ve Haçlıların taarruzdan savunmaya çekildiği savaş hangisidir?", options: ["Varna Savaşı", "II. Kosova Savaşı", "Sırpsındığı Savaşı", "Niğbolu Savaşı"], answer: "II. Kosova Savaşı", part: 6 },

    // --- BÖLÜM 7: YÜKSELME DÖNEMİ (1453-1579) ---
    { text: "İstanbul'un kuşatılması sırasında 'İstanbul'da Latin külahı görmektense Osmanlı sarığı görmeyi tercih ederim' diyen Bizanslı devlet adamı kimdir?", options: ["İmparator Konstantin", "Grandük Notaras", "Mikhail Palaiologos", "Georgios Sphrantzes"], answer: "Grandük Notaras", part: 7 },
    { text: "Fatih Sultan Mehmet döneminde fethedilerek Karadeniz'in bir Türk gölü haline gelmesini sağlayan stratejik yer hangisidir?", options: ["Kırım", "Trabzon", "Amasra", "Sinop"], answer: "Kırım", part: 7 },
    { text: "Fatih döneminde Doğu Anadolu sınır güvenliğini sağlamak için Akkoyunlu Devleti hükümdarı Uzun Hasan'a karşı kazanılan savaş hangisidir?", options: ["Çaldıran Savaşı", "Otlukbeli Savaşı", "Turnadağ Savaşı", "Ridaniye Savaşı"], answer: "Otlukbeli Savaşı", part: 7 },
    { text: "Fatih Sultan Mehmet'in kuşattığı ancak alamadığı, sonradan Kanuni Sultan Süleyman tarafından fethedilen ada hangisidir?", options: ["Kıbrıs", "Rodos", "Girit", "Sakız"], answer: "Rodos", part: 7 },
    { text: "Fatih döneminde Venedik ile yapılan ticaret antlaşması gereği İstanbul'da bulunan Venedik elçilerine ne ad verilirdi?", options: ["Balyos", "Sefir", "Konsolos", "Nasi"], answer: "Balyos", part: 7 },
    { text: "Yükselme döneminde taht mücadelesi yaşayan Cem Sultan'ın önce Memlüklere, sonra Rodos şövalyelerine sığınmasıyla devlet içinde çıkan bir iç sorun hangi hükümdar döneminde dış soruna dönüşmüştür?", options: ["Fatih Sultan Mehmet", "II. Bayezit", "Yavuz Sultan Selim", "Kanuni Sultan Süleyman"], answer: "II. Bayezit", part: 7 },
    { text: "Osmanlı Devleti'nde Safevi tehlikesine karşı Yavuz Sultan Selim komutasında kazanılan 1514 tarihli savaş hangisidir?", options: ["Otlukbeli Savaşı", "Çaldıran Savaşı", "Turnadağ Savaşı", "Mercidabık Savaşı"], answer: "Çaldıran Savaşı", part: 7 },
    { text: "Yavuz Sultan Selim döneminde 1515 Turnadağ Savaşı ile hangi beyliğin alınmasıyla Anadolu Türk siyasi birliği kesin olarak sağlanmıştır?", options: ["Karamanoğulları", "Dulkadiroğulları", "Germiyanoğulları", "Hamitoğulları"], answer: "Dulkadiroğulları", part: 7 },
    { text: "Osmanlı Devleti'nin Memlük Devleti'ni ortadan kaldırarak halifelik makamını ele geçirdiği savaşlar sırasıyla hangileridir?", options: ["Çaldıran - Turnadağ", "Mercidabık - Ridaniye", "Otlukbeli - Çaldıran", "Mohaç - Preveze"], answer: "Mercidabık - Ridaniye", part: 7 },
    { text: "Mısır Seferi sonrasında kutsal toprakların hizmetkarı anlamına gelen 'Hadimü'l Haremeyn-i Şerifeyn' unvanını alan Osmanlı padişahı kimdir?", options: ["Fatih Sultan Mehmet", "Yavuz Sultan Selim", "Kanuni Sultan Süleyman", "II. Selim"], answer: "Yavuz Sultan Selim", part: 7 },
    { text: "Osmanlı tarihinde tımar sisteminin bozulması ve ağır vergilerden dolayı Yavuz döneminde Yozgat'ta başlayan ve taşra isyanlarının genel adı haline gelen ilk isyan hangisidir?", options: ["Şahkulu İsyanı", "Bozoklu Celal İsyanı", "Şeyh Bedrettin İsyanı", "Kabakçı Mustafa İsyanı"], answer: "Bozoklu Celal İsyanı", part: 7 },
    { text: "Osmanlı Devleti'nin Macaristan ordusunu yenilgiye uğrattığı, tarihin en kısa süren meydan savaşı hangisidir?", options: ["Ridaniye Savaşı", "Mohaç Meydan Savaşı", "Çaldıran Savaşı", "Niğbolu Savaşı"], answer: "Mohaç Meydan Savaşı", part: 7 },
    { text: "Avusturya Arşidükü'nün protokol bakımından Osmanlı sadrazamına eşit sayıldığı ve Avusturya'ya karşı büyük üstünlük sağlanan antlaşma hangisidir?", options: ["1533 İstanbul (İbrahim Paşa) Antlaşması", "Zitvatorok Antlaşması", "Pasarofça Antlaşması", "Vasvar Antlaşması"], answer: "1533 İstanbul (İbrahim Paşa) Antlaşması", part: 7 },
    { text: "Kanuni Sultan Süleyman'ın ömrünün son seferi olan ve savaş sırasında vefat ettiği 1566 tarihli sefer hangisidir?", options: ["I. Viyana Kuşatması", "Zigetvar Seferi", "Bağdat Seferi", "Estergon Seferi"], answer: "Zigetvar Seferi", part: 7 },
    { text: "Barbaros Hayreddin Paşa komutasındaki donanmanın Haçlı ittifakını mağlup ederek Akdeniz'i Türk gölü haline getirdiği deniz zaferi hangisidir?", options: ["İnebahtı Deniz Savaşı", "Preveze Deniz Savaşı", "Cerbe Deniz Savaşı", "Çeşme Baskını"], answer: "Preveze Deniz Savaşı", part: 7 },
    { text: "Sokullu Mehmet Paşa döneminde 1571'de Kıbrıs'ın fethedilmesi üzerine Haçlıların Osmanlı donanmasını tarihte ilk kez yaktığı deniz savaşı hangisidir?", options: ["Çeşme Baskını", "İnebahtı Deniz Savaşı", "Navarin Baskını", "Sinop Baskını"], answer: "İnebahtı Deniz Savaşı", part: 7 },
    { text: "Osmanlı donanmasının tarih boyunca yakıldığı yerlerin kronolojik sıralaması olan 'İÇİNAS' kodlamasında 'İ' ve 'Ç' harfleri hangi olayları temsil eder?", options: ["İstanbul - Çanakkale", "İnebahtı - Çeşme", "İzmir - Çorlu", "İnebahtı - Çorlu"], answer: "İnebahtı - Çeşme", part: 7 },
    { text: "Orta Asya Türkleri ile bağlantı kurmak, Rusların güneye inmesini engellemek ve İpek Yolu'nu canlandırmak amacıyla tasarlanan Sokullu projesi hangisidir?", options: ["Süveyş Kanalı Projesi", "Don-Volga Kanal Projesi", "Karadeniz-Marmara Kanal Projesi", "Hazar-Aral Projesi"], answer: "Don-Volga Kanal Projesi", part: 7 },
    { text: "Akdeniz ticaretini canlandırmak ve Portekiz'in Hint Okyanusu'ndaki baskısını kırmak amacıyla planlanan Süveyş Kanalı projesi hangi yüzyılda açılabilmiştir?", options: ["16. Yüzyıl", "19. Yüzyıl", "17. Yüzyıl", "18. Yüzyıl"], answer: "19. Yüzyıl", part: 7 },
    { text: "Osmanlı tarihinde Kanuni Sultan Süleyman, II. Selim ve III. Murat dönemlerinde sadrazamlık yaparak devlete büyük hizmetlerde bulunan devlet adamı kimdir?", options: ["Pargalı İbrahim Paşa", "Sokullu Mehmet Paşa", "Köprülü Mehmet Paşa", "Merzifonlu Kara Mustafa Paşa"], answer: "Sokullu Mehmet Paşa", part: 7 },

    // --- BÖLÜM 8: DURAKLAMA VE GERİLEME DÖNEMLERİ (XVII. & XVIII. YÜZYIL) ---
    { text: "XVII. yüzyılda eğitim sisteminin bozulmasıyla ortaya çıkan ve 'Alimin oğlu alimdir' anlayışını getiren sistem hangisidir?", options: ["Mültezim Sistemi", "Beşik Ulemalığı", "Ekber ve Erşed Sistemi", "Gedik Sistemi"], answer: "Beşik Ulemalığı", part: 8 },
    { text: "Osmanlı Devleti'nde IV. Mehmet döneminde yeniçerilerin isyanı sonucu 30'a yakın devlet adamının çınar ağacına asılması olayı hangisidir?", options: ["Babıali Baskını", "Vaka-i Vakvakiye (Çınar Vakası)", "Kabakçı Mustafa İsyanı", "Patrona Halil İsyanı"], answer: "Vaka-i Vakvakiye (Çınar Vakası)", part: 8 },
    { text: "Osmanlı Devleti'nin Doğu'da en geniş sınırlara ulaştığı antlaşma hangisidir?", options: ["Kasr-ı Şirin Antlaşması", "Ferhat Paşa Antlaşması", "Amasya Antlaşması", "Serav Antlaşması"], answer: "Ferhat Paşa Antlaşması", part: 8 },
    { text: "1606 Zitvatorok Antlaşması ile Avusturya kralının Osmanlı padişahına denk sayılmasıyla hangi antlaşmada kazanılan siyasi üstünlük kaybedilmiştir?", options: ["1533 İstanbul Antlaşması", "Pasarofça Antlaşması", "Karlofça Antlaşması", "Vasvar Antlaşması"], answer: "1533 İstanbul Antlaşması", part: 8 },
    { text: "Günümüz Türkiye-İran sınırını büyük oranda çizen ve Zağros Dağları'nı sınır kabul eden 1639 tarihli antlaşma hangisidir?", options: ["Ferhat Paşa Antlaşması", "Kasr-ı Şirin Antlaşması", "Serav Antlaşması", "Nasuh Paşa Antlaşması"], answer: "Kasr-ı Şirin Antlaşması", part: 8 },
    { text: "Osmanlı Devleti'nin Batı'da en geniş sınırlara ulaştığı antlaşma hangisidir?", options: ["Vasvar Antlaşması", "Bucaş Antlaşması", "Karlofça Antlaşması", "Pasarofça Antlaşması"], answer: "Bucaş Antlaşması", part: 8 },
    { text: "Merzifonlu Kara Mustafa Paşa'nın başarısızlığıyla sonuçlanan ve Kutsal İttifak'ın kurulmasına yol açan 1683 tarihli olay hangisidir?", options: ["I. Viyana Kuşatması", "II. Viyana Kuşatması", "Bağdat Kuşatması", "Girit Kuşatması"], answer: "II. Viyana Kuşatması", part: 8 },
    { text: "Osmanlı Devleti'nin Batı'da ilk kez çok büyük miktarda toprak kaybettiği ve Gerileme dönemini başlatan antlaşma hangisidir?", options: ["Pasarofça Antlaşması", "Karlofça Antlaşması", "İstanbul Antlaşması (1700)", "Bucaş Antlaşması"], answer: "Karlofça Antlaşması", part: 8 },
    { text: "Osmanlı Devleti'nde Yeniçeri Ocağı'nı kaldırmayı planladığı için yeniçeriler tarafından öldürülen ilk reformcu padişah kimdir?", options: ["IV. Murat", "Genç (II.) Osman", "III. Selim", "Tarhuncu Ahmet Paşa"], answer: "Genç (II.) Osman", part: 8 },
    { text: "İçki, tütün ve kahvehane yasakları uygulayan, Koçi Bey ve Katip Çelebi'ye risaleler (raporlar) hazırlatan XVII. yüzyıl padişahı kimdir?", options: ["Genç Osman", "IV. Murat", "IV. Mehmet", "II. Mustafa"], answer: "IV. Murat", part: 8 },
    { text: "Osmanlı tarihinde saray masraflarını kısarak devletin ilk modern denk bütçesini hazırlayan devlet adamı kimdir?", options: ["Köprülü Mehmet Paşa", "Tarhuncu Ahmet Paşa", "Kemankeş Mustafa Paşa", "Merzifonlu Kara Mustafa Paşa"], answer: "Tarhuncu Ahmet Paşa", part: 8 },
    { text: "Osmanlı Devleti'nde sadrazamlığı kendi şartlarını öne sürerek kabul eden ilk devlet adamı kimdir?", options: ["Tarhuncu Ahmet Paşa", "Köprülü Mehmet Paşa", "Köprülü Fazıl Ahmet Paşa", "Sokullu Mehmet Paşa"], answer: "Köprülü Mehmet Paşa", part: 8 },
    { text: "1711 Prut Savaşı sonrasında Rusya'dan geri alınan ve Karlofça'da kaybedilen yerleri geri alma ümidini doğuran kale hangisidir?", options: ["Belgrat Kalesi", "Azak Kalesi", "Kamanice Kalesi", "Kırım Kalesi"], answer: "Azak Kalesi", part: 8 },
    { text: "Osmanlı Devleti'nin 18. yüzyıldaki son kazançlı antlaşması kabul edilen ve Karadeniz'in bir Türk gölü olduğunu son kez onaylayan antlaşma hangisidir?", options: ["Pasarofça Antlaşması", "Belgrat Antlaşması (1739)", "Küçük Kaynarca Antlaşması", "Yaş Antlaşması"], answer: "Belgrat Antlaşması (1739)", part: 8 },
    { text: "1774 Küçük Kaynarca Antlaşması ile bağımsız olan ve halkı Müslüman olup ilk kez kaybedilen toprak parçası hangisidir?", options: ["Cezayir", "Kırım", "Mısır", "Trablusgarp"], answer: "Kırım", part: 8 },
    { text: "Küçük Kaynarca Antlaşması ile kaybedilen toprak parçasının dini açıdan Osmanlı halifesine bağlı kalmasının kararlaştırılması neyi gösterir?", options: ["Halifeliğin siyasi gücünden ilk kez yararlanılmak istendiğini", "Ortodoksların koruyuculuğunun üstlenildiğini", "İltizam sisteminin yaygınlaştırıldığını", "Kırım'ın Osmanlı'ya vergi ödemeye devam edeceğini"], answer: "Halifeliğin siyasi gücünden ilk kez yararlanılmak istendiğini", part: 8 },
    { text: "Rus yanlısı Şahin Giray'ın Kırım hanı olmasının Osmanlı Devleti tarafından kabul edildiği tenkihname hangisidir?", options: ["Aynalıkavak Tenkihnamesi", "Yaş Antlaşması", "Prut Antlaşması", "Ziştovi Antlaşması"], answer: "Aynalıkavak Tenkihnamesi", part: 8 },
    { text: "Kırım'ın Rusya'ya ait olduğunun resmen kabul edildiği ve Gerileme dönemini bitirip Çöküş dönemini başlatan 1792 tarihli antlaşma hangisidir?", options: ["Küçük Kaynarca Antlaşması", "Yaş Antlaşması", "Ziştovi Antlaşması", "Berlin Antlaşması"], answer: "Yaş Antlaşması", part: 8 },
    { text: "Lale Devri'nde Paris'e gönderilen ilk geçici elçimiz 28 Mehmet Çelebi'nin yazdığı ve elçilik izlenimlerini içeren ünlü eser hangisidir?", options: ["Seyahatname", "Sefaretname", "Miratül Memalik", "Keşfüz Zünün"], answer: "Sefaretname", part: 8 },
    { text: "III. Selim (Nizam-ı Cedit) döneminde kurulan yeni ordunun masraflarını karşılamak üzere oluşturulan özel hazine hangisidir?", options: ["Mansure Hazinesi", "İrad-ı Cedit", "Hazine-i Amire", "Mukataa Hazinesi"], answer: "İrad-ı Cedit", part: 8 }
];

const customGeographyQuestionsPool = [
    { text: "Ortalama yükseltinin en az olduğu, ekonomik faaliyetlerin en gelişmiş ve nüfusun en yoğun olduğu coğrafi bölgemiz hangisidir?", options: ["Ege", "İç Anadolu", "Marmara", "Akdeniz"], answer: "Marmara" },
    { text: "Kıyı ile iç kesimleri arasında iklim, tarım ve ulaşım yönüyle en belirgin 'terslik' (zıtlık) görülen coğrafi bölgemiz hangisidir?", options: ["Akdeniz", "Karadeniz", "Ege", "Doğu Anadolu"], answer: "Karadeniz" },
    { text: "Kırıklı dağ yapısı, horst-graben oluşumları ve en geniş kıta sahanlığı ile öne çıkan coğrafi bölgemiz hangisidir?", options: ["Akdeniz", "Marmara", "Ege", "Karadeniz"], answer: "Ege" },
    { text: "Eriyebilen karstik kireçtaşları, polyeler ve kireçli toprak yapısı hangi coğrafi bölgemizin belirleyici özelliğidir?", options: ["Güneydoğu Anadolu", "İç Anadolu", "Akdeniz", "Doğu Anadolu"], answer: "Akdeniz" },
    { text: "Yer şekilleri son derece sade ve düz olmasına rağmen, şiddetli buharlaşmadan ötürü kuraklığın en fazla yaşandığı bölge hangisidir?", options: ["İç Anadolu", "Güneydoğu Anadolu", "Doğu Anadolu", "Marmara"], answer: "Güneydoğu Anadolu" },
    { text: "Ortalama yükseltisi en fazla olan ve volkanik arazilerin/dağların en geniş alan kapladığı coğrafi bölgemiz hangisidir?", options: ["Doğu Anadolu", "İç Anadolu", "Akdeniz", "Karadeniz"], answer: "Doğu Anadolu" },
    { text: "Türkiye'nin en az yağış alan, sade yer şekilleri ve kuraklıkla karakterize 'gariban' bölgesi hangisidir?", options: ["Güneydoğu Anadolu", "İç Anadolu", "Doğu Anadolu", "Ege"], answer: "İç Anadolu" },
    { text: "Türkiye'nin Akdeniz iklim kuşağında olması, Batı rüzgarları ve Cephe yağışlarının görülmesi neyin sonucudur?", options: ["Göreceli Konumun", "Orta Kuşakta Olmanın", "Kuzey Yarım Kürede Olmanın", "Yengeç Dönencesi Kuzeyinde Olmanın"], answer: "Orta Kuşakta Olmanın" },
    { text: "Türkiye'de güneş ışınlarının hiçbir zaman 90 derece açıyla gelmemesi ve gölge boyunun asla sıfır olmaması ne ile açıklanır?", options: ["Yengeç Dönencesinin Kuzeyinde Olmasıyla", "Ekvatora Yakın Olmasıyla", "Aynı Boylam Üzerinde Olmasıyla", "Epirojenezle"], answer: "Yengeç Dönencesinin Kuzeyinde Olmasıyla" },
    { text: "Dağların daima güney bakı yamaçlarının daha sıcak olması kuralına kış aylarında denizellikten dolayı uymayan bölgemiz hangisidir?", options: ["Akdeniz", "Ege", "Marmara", "Karadeniz"], answer: "Karadeniz" },
    { text: "Türkiye'de güneyden kuzeye doğru gidildikçe çizgisel hızın azalması ve gece-gündüz süre farkının artması neyin sonucudur?", options: ["Kuzey Yarım Kürede Olmanın (Enlem)", "Göreceli Konumun", "Boylam Etkisinin", "Dağların Uzanışının"], answer: "Kuzey Yarım Kürede Olmanın (Enlem)" },
    { text: "Türkiye'de güneyden kuzeye gidildikçe denizlerin tuzluluk oranının azalmasının temel nedeni hangisidir?", options: ["Buharlaşmanın azalması (Enlem etkisi)", "Akarsu beslenmesinin artması", "Yükseltinin artması", "Karasallık"], answer: "Buharlaşmanın azalması (Enlem etkisi)" },
    { text: "Bir coğrafi soruda güney-kuzey yönlü düzenli bir değişimden bahsediliyorsa, bu durum öncelikle hangisiyle açıklanır?", options: ["Boylam", "Yükselti", "Enlem (Mutlak Konum)", "Karasallık"], answer: "Enlem (Mutlak Konum)" },
    { text: "Aynı enlem üzerindeki iki merkezde yıl boyunca aşağıdakilerden hangisi kesinlikle aynı kalır?", options: ["Sıcaklık değerleri", "Nemlilik oranları", "Çizgisel hız ve gölge boyları", "Yıllık yağış miktarı"], answer: "Çizgisel hız ve gölge boyları" },
    { text: "21 Mart ekinoksundan sonra Türkiye'de hangi durum yaşanmaya başlar?", options: ["Geceler gündüzlerden daha uzun olur", "Gündüzler gecelerden daha uzun olmaya başlar", "Kış mevsimi başlar", "Gölge boyları en uzun seviyeye ulaşır"], answer: "Gündüzler gecelerden daha uzun olmaya başlar" },
    { text: "Türkiye'de en uzun gündüzün yaşandığı, güneş ışınlarının en büyük açıyla geldiği ve gölge boylarının en kısa olduğu tarih hangisidir?", options: ["21 Mart", "21 Haziran", "23 Eylül", "21 Aralık"], answer: "21 Haziran" },
    { text: "Türkiye'de en uzun gecenin yaşandığı, kış başlangıcı kabul edilen ve bu tarihten sonra gecelerin kısalıp gündüzlerin uzadığı tarih hangisidir?", options: ["21 Aralık", "21 Haziran", "21 Mart", "23 Eylül"], answer: "21 Aralık" },
    { text: "Yaz mevsiminde Türkiye içinde hangi yöne doğru gidildikçe gündüz süresi uzar?", options: ["Güneye", "Kuzeye", "Doğuya", "Batıya"], answer: "Kuzeye" },
    { text: "Kış mevsiminde Türkiye içinde hangi yöne doğru gidildikçe gündüz süresi uzar?", options: ["Güneye", "Kuzeye", "Doğuya", "Batıya"], answer: "Güneye" },
    { text: "Aynı boylam üzerindeki tüm noktalarda yıl boyunca aşağıdakilerden hangisi kesinlikle aynıdır?", options: ["Güneşin doğuş ve batış saati", "Yerel saat ve öğle vakti", "Greenwich'e olan kuşuçuşu uzaklık", "Gündüz süresi"], answer: "Yerel saat ve öğle vakti" },
    { text: "Aynı boylam üzerindeki noktalarda güneş sadece hangi tarihlerde aynı anda doğup aynı anda batar?", options: ["21 Haziran - 21 Aralık", "21 Mart - 23 Eylül (Ekinoks)", "Her ayın 1'inde", "Yaz aylarında"], answer: "21 Mart - 23 Eylül (Ekinoks)" },
    { text: "Aynı boylam üzerinde yer alan iki merkezden kuzeyde olanın başlangıç meridyenine daha yakın olması neyin sonucudur?", options: ["Dünyanın şekli nedeniyle meridyenlerin kutuplarda birleşmesinin", "Dünyanın günlük hareketinin", "Eksen eğikliğinin", "Yükselti farkının"], answer: "Dünyanın şekli nedeniyle meridyenlerin kutuplarda birleşmesinin" },
    { text: "Coğrafyada 'saat, zaman, vakit, an' kavramları geçiyorsa bu durum hangisiyle doğrudan ilgilidir?", options: ["Enlem", "Boylam", "Yükselti", "Eksen Eğikliği"], answer: "Boylam" },
    { text: "Enlem ve boylamla açıklanamayan; yükselti, dağların uzanışı, denizellik ve jeolojik yapı gibi özellikleri kapsayan konum hangisidir?", options: ["Mutlak Konum", "Göreceli Konum", "Jeopolitik Konum", "Matematik Konum"], answer: "Göreceli Konum" },
    { text: "Kırıklı dağ oluşumlarında (orojenez) yükselen kısımlara ve alçalan çöküntü alanlarına sırasıyla ne ad verilir?", options: ["Antiklinal - Senklinal", "Horst - Graben", "Kaldera - Maar", "Batolit - Krater"], answer: "Horst - Graben" },
    { text: "Kıvrımlı dağ oluşumlarında yüksekte kalan kubbe yapılara ve alçakta kalan çanak yapılara sırasıyla ne ad verilir?", options: ["Horst - Graben", "Antiklinal - Senklinal", "Krater - Kaldera", "Maar - Batolit"], answer: "Antiklinal - Senklinal" },
    { text: "Derinlik volkanizmasının en belirgin örneği olan ve içinde batolit kaya kütlesi barındıran dağımız hangisidir?", options: ["Erciyes", "Nemrut", "Uludağ", "Ağrı"], answer: "Uludağ" },
    { text: "Volkanik patlama ağzının genişlemesiyle oluşan dev çukurlara ve gaz patlaması çukurlarına sırasıyla ne ad verilir?", options: ["Kaldera - Maar", "Maar - Krater", "Batolit - Horst", "Senklinal - Graben"], answer: "Kaldera - Maar" },
    { text: "Volkanik araziler mineral yönünden zengin olduğu için buralarda en çok hangi tarım ürünlerinin üretimi gelişmiştir?", options: ["Zeytin - Pamuk", "Patates - Üzüm (Bağcılık)", "Çay - Fındık", "Tütün - Buğday"], answer: "Patates - Üzüm (Bağcılık)" },
    { text: "Türkiye'nin yer şekillerinin oluşmasında en fazla ve en az etkili olan dış kuvvetler sırasıyla hangileridir?", options: ["Akarsular - Buzullar", "Rüzgarlar - Dalgalar", "Buzullar - Rüzgarlar", "Akarsular - Rüzgarlar"], answer: "Akarsular - Buzullar" },
    { text: "Türkiye'de buzul etkisinin en az olmasının temel nedeni aşağıdakilerden hangisidir?", options: ["Orta kuşakta yer alması (Matematik Konum)", "Yarımada ülkesi olması", "Ortalama yükseltinin fazla olması", "Batı rüzgarları esmesi"], answer: "Orta kuşakta yer alması (Matematik Konum)" },
    { text: "Zonguldak çevresindeki taş kömürü yataklarının oluşması ve masif arazilerin meydana gelmesi hangi jeolojik zamana aittir?", options: ["1. Jeolojik Zaman (Paleozoik)", "2. Jeolojik Zaman (Mezozoik)", "3. Jeolojik Zaman (Tersiyer)", "4. Jeolojik Zaman (Kuvaterner)"], answer: "1. Jeolojik Zaman (Paleozoik)" },
    { text: "Alp-Himalaya kıvrımının gerçekleştiği, linyit, tuz, bor ve petrol yataklarının oluştuğu jeolojik zaman hangisidir?", options: ["1. Jeolojik Zaman", "2. Jeolojik Zaman", "3. Jeolojik Zaman (Tersiyer)", "4. Jeolojik Zaman (Kuvaterner)"], answer: "3. Jeolojik Zaman (Tersiyer)" },
    { text: "Bugünkü 4 denizin oluştuğu, Boğazların açıldığı ve Anadolu'nun toptan yükseldiği (epirojenez) en son jeolojik zaman hangisidir?", options: ["1. Jeolojik Zaman", "2. Jeolojik Zaman", "3. Jeolojik Zaman", "4. Jeolojik Zaman (Kuvaterner)"], answer: "4. Jeolojik Zaman (Kuvaterner)" },
    { text: "Cumhuriyetin ilk yıllarında (1923-1929) liberal ekonomiyi canlandırmak ve köylüyü rahatlatmak amacıyla kaldırılan vergi hangisidir?", options: ["Aşar Vergisi", "Haraç Vergisi", "Cizye Vergisi", "Ağıl Vergisi"], answer: "Aşar Vergisi" },
    { text: "1930-1950 yılları arasında devletçilik ilkesi doğrultusunda sanayiyi desteklemek amacıyla kurulan bankalar hangileridir?", options: ["İş Bankası - Ziraat Bankası", "Sümerbank - Etibank", "Halkbank - Vakıfbank", "Merkez Bankası - İller Bankası"], answer: "Sümerbank - Etibank" },
    { text: "Türkiye'de planlı kalkınma dönemine geçişi sağlamak üzere 1960 sonrasında kurulan kurum hangisidir?", options: ["DPT (Devlet Planlama Teşkilatı)", "TÜİK", "MTA", "KOSGEB"], answer: "DPT (Devlet Planlama Teşkilatı)" },
    { text: "Engebeli alanlarda uygulanan, doğaya bağımlı ve verimi düşük olan geleneksel/ilkel tarım metoduna ne ad verilir?", options: ["İntansif Tarım", "Ekstansif Tarım", "Nadas Tarımı", "Nöbetleşe Tarım"], answer: "Ekstansif Tarım" },
    { text: "Sulama, gübreleme, makineleşme gibi modern yöntemlerin kullanıldığı ve verimi en yüksek olan yoğun tarım metodu hangisidir?", options: ["Ekstansif Tarım", "İntansif Tarım", "Nadas Tarımı", "Nöbetleşe Tarım"], answer: "İntansif Tarım" },
    { text: "Kurak bölgelerde toprağın 1 yıl boş bırakılması olan, erozyonu ve üretim dalgalanmalarını artıran tarım metodu hangisidir?", options: ["Münavebeli Tarım", "Yoğun Tarım", "Nadas Tarımı", "Nöbetleşe Tarım"], answer: "Nadas Tarımı" },
    { text: "Nadas tarımının olumsuzluklarını (erozyon vb.) önlemek amacıyla toprağa her yıl farklı ürün ekilmesi yöntemine ne denir?", options: ["Ekstansif Tarım", "Nöbetleşe (Münavebeli) Tarım", "İlkel Tarım", "Nadas Tarımı"], answer: "Nöbetleşe (Münavebeli) Tarım" },
    
    // Madenler & Enerji Questions
    { text: "Maden çeşitliliğinin en fazla olduğu coğrafi bölüm ve ilimiz volkanizmanın da etkisiyle aşağıdakilerden hangisidir?", options: ["Doğu Karadeniz - Artvin", "Yukarı Fırat - Elazığ", "Kıyı Ege - İzmir", "Orta Fırat - Gaziantep"], answer: "Yukarı Fırat - Elazığ" },
    { text: "Maden yatağından çıkarılan cevherin içindeki saf metal oranına ne ad verilir?", options: ["Rezerv", "Tenör", "Kalibre", "Katkı"], answer: "Tenör" },
    { text: "Türkiye'de bakır madeninin en fazla çıkarıldığı coğrafi bölgemiz aşağıdakilerden hangisidir?", options: ["Ege", "Karadeniz", "Akdeniz", "Doğu Anadolu"], answer: "Karadeniz" },
    { text: "Alüminyum sanayisinin hammaddesi olan, Konya Seydişehir ve Antalya Akseki'de çıkarılan maden hangisidir?", options: ["Demir", "Boksit", "Barit", "Krom"], answer: "Boksit" },
    { text: "Mardin Mazıdağı'nda çıkarılan ve kimyasal gübre üretiminde kullanılan maden hangisidir?", options: ["Asfaltit", "Barit", "Fosfat", "Kükürt"], answer: "Fosfat" },
    { text: "Cam ve deterjan sanayisinde kullanılan, Türkiye'de en fazla Ankara Beypazarı ve Kazan'da çıkarılan trona madeninin diğer adı nedir?", options: ["Sodyum sülfat", "Soda külü", "Alçı taşı", "Tuz"], answer: "Soda külü" },
    { text: "Antalya Alanya/Gazipaşa ve Kahramanmaraş'ta çıkarılan, sondaj kuyularında ağırlık yapıcı olarak kullanılan maden hangisidir?", options: ["Bor", "Barit", "Krom", "Fosfat"], answer: "Barit" },
    { text: "Bursa Uludağ'da en fazla bulunan, ısıya dayanıklı ampul teli ve zırh kaplamasında kullanılan maden hangisidir?", options: ["Volfram (Tungsten)", "Krom", "Bakır", "Asbest"], answer: "Volfram (Tungsten)" },
    { text: "Paslanmaz çelik üretiminde kullanılan, Elazığ Guleman ve Muğla Köyceğiz'de en fazla çıkarılan maden hangisidir?", options: ["Demir", "Bakır", "Krom", "Çinko"], answer: "Krom" },
    { text: "Zonguldak Çatalağzı termik santrali yerli kömürle çalışırken, Adana Sugözü termik santrali hangi enerji kaynağıyla çalışmaktadır?", options: ["Linyit kömürü", "İthal taş kömürü", "Doğal gaz", "Fuel-oil"], answer: "İthal taş kömürü" },
    { text: "Türkiye'de linyit kömürünün en fazla çıkarıldığı coğrafi bölgemiz ve en büyük linyit rezervine sahip alan sırasıyla hangileridir?", options: ["Ege Bölgesi - Afşin-Elbistan", "Marmara Bölgesi - Çan", "Karadeniz Bölgesi - Çayırhan", "Doğu Anadolu - Oltu"], answer: "Ege Bölgesi - Afşin-Elbistan" },
    { text: "Türkiye'de yerli petrolü işlemek amacıyla doğrudan ham maddenin yakınına kurulan tek rafineri hangisidir?", options: ["İzmit İpraş Rafinerisi", "İzmir Aliağa Rafinerisi", "Batman Rafinerisi", "Kırıkkale Orta Anadolu Rafinerisi"], answer: "Batman Rafinerisi" },
    { text: "Kırıkkale Orta Anadolu Rafinerisinin yer seçiminde liman veya ulaşım avantajından ziyade hangi faktör etkili olmuştur?", options: ["Ham maddeye yakınlık", "Güvenlik ve iç pazar tüketim merkezine yakınlık", "Ucuz iş gücü", "Su kaynaklarına yakınlık"], answer: "Güvenlik ve iç pazar tüketim merkezine yakınlık" },
    { text: "Kırklareli Hamitabat, İstanbul Ambarlı, Bursa Ovaakça ve İzmir Aliağa santralleri hangi enerji kaynağı ile elektrik üretir?", options: ["Linyit kömürü", "Doğal gaz (Gaz çevrim)", "Petrol", "Akarsu (Su gücü)"], answer: "Doğal gaz (Gaz çevrim)" },
    { text: "Şırnak Silopi'de çıkarılan ve elektrik enerjisi üretmek üzere burada kurulan tek santralde kullanılan katı petrol artığı hangisidir?", options: ["Linyit", "Asfaltit", "Taş kömürü", "Katran"], answer: "Asfaltit" },
    { text: "Türkiye'de elektrik üretiminde kullanılan jeotermal ve nükleer enerji santrallerinin en önemli ortak özelliği hangisidir?", options: ["Üretimlerinin iklim/hava koşullarından etkilenmemesi", "Aynı jeolojik zamanda oluşmuş olmaları", "Tüm bölgelerimizde yaygın olmaları", "Potansiyellerinin en fazla Karadeniz'de olması"], answer: "Üretimlerinin iklim/hava koşullarından etkilenmemesi" },
    { text: "Azerbaycan doğal gazını Türkiye üzerinden geçerek Avrupa'ya taşımayı amaçlayan uluslararası doğal gaz boru hattı hangisidir?", options: ["Bakü-Tiflis-Ceyhan (BTC)", "Trans-Anadolu (TANAP)", "Mavi Akım", "Türk Akımı"], answer: "Trans-Anadolu (TANAP)" },
    { text: "Türkiye'nin ilk rüzgar enerji santrali İzmir'in hangi ilçesinde kurulmuştur?", options: ["Urla", "Çeşme (Alaçatı)", "Seferihisar", "Foça"], answer: "Çeşme (Alaçatı)" },
    { text: "Konya Karapınar'da kurulan devasa tesis Türkiye'nin hangi yenilenebilir enerji kaynağındaki en büyük üreticisidir?", options: ["Rüzgar gücü", "Güneş enerjisi", "Jeotermal enerji", "Biyokütle"], answer: "Güneş enerjisi" },
    { text: "Türkiye'de sıcak suya (yer ısısına) dayalı jeotermal enerji santralleri (Sarayköy, Germencik) en çok hangi bölgemizde yoğunlaşmıştır?", options: ["Akdeniz", "İç Anadolu", "Ege", "Marmara"], answer: "Ege" }
];

const customVatandaslikQuestionsPool = [
    { text: "Yaptırımı devlet gücüne dayanan, genel, soyut ve emredici niteliğe sahip olan sosyal düzen kuralları aşağıdakilerden hangisidir?", options: ["Din Kuralları", "Ahlak Kuralları", "Hukuk Kuralları", "Görgü Kuralları"], answer: "Hukuk Kuralları" },
    { text: "Aşağıdakilerden hangisi bir disiplin cezası veya asli yaptırım değil, sadece geçici bir idari 'tedbir' niteliğindedir?", options: ["Uyarma", "Görevden uzaklaştırma (açığa alma)", "Aylıktan kesme", "Devlet memurluğundan çıkarma"], answer: "Görevden uzaklaştırma (açığa alma)" },
    { text: "Hukuk kurallarını ihlal eden bir kimsenin, o hukuk kuralının emrini yerine getirmeye devlet gücüyle zorlanması yaptırımı hangisidir?", options: ["Ceza", "İptal", "Cebri İcra", "Tazminat"], answer: "Cebri İcra" },
    { text: "Hukuki bir işlemin kurucu unsurlarından en az birinin eksik olması durumunda ortaya çıkan hükümsüzlük türü hangisidir?", options: ["Yokluk", "Mutlak Butlan", "Nisbi Butlan", "Tek Taraflı Bağlamazlık"], answer: "Yokluk" },
    { text: "Resmi evlilik memuru önünde yapılmayan bir evlilik töreni, hukuken hangi yaptırımla karşı karşıyadır?", options: ["Mutlak Butlan", "Yokluk", "Nisbi Butlan", "Tek Taraflı Bağlamazlık"], answer: "Yokluk" },
    { text: "Ayırt etme gücüne sahip olmayan bir kişinin yaptığı evlilik veya resmi işlemler hangi yaptırıma tabidir?", options: ["Yokluk", "Mutlak Butlan", "Nisbi Butlan", "Tek Taraflı Bağlamazlık"], answer: "Mutlak Butlan" },
    { text: "Hata, hile, tehdit (ikrah) veya gabin (aşırı yararlanma) gibi irade sakatlıkları durumunda uygulanan hükümsüzlük türü hangisidir?", options: ["Yokluk", "Mutlak Butlan", "Nisbi Butlan (İptal Edilebilirlik)", "Tek Taraflı Bağlamazlık"], answer: "Nisbi Butlan (İptal Edilebilirlik)" },
    { text: "Aşağıdakilerden hangisi doğrudan kan hısımlığında 1. dereceden 'üstsoy' hısımlığı ifade eder?", options: ["Kardeş", "Çocuk", "Anne ve Baba", "Dede ve Nine"], answer: "Anne ve Baba" },
    { text: "Hukuken eşler arasında hısımlık derecesiyle ilgili hangisi doğrudur?", options: ["Eşler birbirinin 1. derece sıhri hısımıdır", "Eşler arasında hiçbir hısımlık ilişkisi kurulmaz", "Eşler 2. derece yansoy hısımıdır", "Eşler 1. derece kan hısımıdır"], answer: "Eşler arasında hiçbir hısımlık ilişkisi kurulmaz" },
    { text: "Evlat edinen ile evlatlık arasında hukuk kurallarına göre en az kaç yaş farkı bulunması zorunludur?", options: ["10", "15", "18", "30"], answer: "18" },
    { text: "Hakim, önüne gelen bir davada hem yazılı hem de yazısız kaynaklarda hiçbir hüküm bulamazsa hangi durum ortaya çıkar?", options: ["Kanun Boşluğu", "Hukuk Boşluğu", "Kural İçi Boşluk", "Örtülü Boşluk"], answer: "Hukuk Boşluğu" },
    { text: "Hakim, önüne gelen davada bir 'Hukuk Boşluğu' ile karşılaşırsa izleyeceği anayasal yol hangisidir?", options: ["Davayı reddeder", "Hukuk yaratır", "Takdir yetkisini kullanır", "Meclise başvurur"], answer: "Hukuk yaratır" },
    { text: "Bir kişinin ölümüne kesin gözüyle bakılacak bir olayda kaybolması durumunda uygulanan yasal statü hangisidir?", options: ["Gaiplik kararı", "Ölüm Karinesi", "Birlikte Ölüm Karinesi", "Yokluk"], answer: "Ölüm Karinesi" },
    { text: "Ölümüne muhtemel gözüyle bakılacak bir kaza veya olayda kaybolan kişi hakkında gaiplik kararı istenebilmesi için en az kaç yıl geçmelidir?", options: ["1 yıl", "3 yıl", "5 yıl", "15 yıl"], answer: "1 yıl" },
    { text: "Uzun süredir haber alınamayan bir kişi hakkında gaiplik kararı verilebilmesi için son haber tarihinden itibaren en az kaç yıl geçmelidir?", options: ["1 yıl", "3 yıl", "5 yıl", "15 yıl"], answer: "5 yıl" },
    { text: "Veli veya vasisinin onayı olmadan kefil olma, vakıf kurma veya bağışlama gibi işlemleri yapması kesin olarak yasaklanmış olan ehliyet sınıfı hangisidir?", options: ["Tam Ehliyetliler", "Sınırlı Ehliyetliler", "Sınırlı Ehliyetsizler", "Tam Ehliyetsizler"], answer: "Sınırlı Ehliyetsizler" },
    { text: "Bir kimsenin kendisini veya bir başkasını tehlikeden kurtarmak için üçüncü bir şahsın malına orantılı olarak zarar vermesi haline ne denir?", options: ["Meşru Müdafaa", "Zaruret (Iztırar) Hali", "Kuvvet Kullanma", "Haksız Fiil"], answer: "Zaruret (Iztırar) Hali" },
    { text: "Borçlar Hukukuna göre borcun ifasında ve hakların kullanılmasında uyulması gereken temel objektif iyi niyet kuralı hangisidir?", options: ["Ahde Vefa", "Dürüstlük İlkesi", "Muvazaa", "Def'i hakkı"], answer: "Dürüstlük İlkesi" },
    { text: "Borçlar Hukukunda genel zamanaşımı süresi kaç yıldır ve bu süre dolunca borç ne tür bir borca dönüşür?", options: ["5 yıl - Muaccel borç", "10 yıl - Eksik borç", "15 yıl - Tabii borç", "20 yıl - Nisbi borç"], answer: "10 yıl - Eksik borç" },
    { text: "Sağır ve dilsiz bireylerde Türk Ceza Kanunu'na göre ceza ehliyeti sınırı kaç yaşın doldurulmasıyla başlar?", options: ["12", "15", "18", "21"], answer: "15" },
    
    // Section 2: Devlet Yapısı & Anayasa Tarihi
    { text: "Aşağıdakilerden hangisi devletin kurucu 'maddi' veya 'manevi' unsurlarından biri değildir?", options: ["Toprak", "Millet", "Egemenlik", "Anayasa"], answer: "Anayasa" },
    { text: "İç işlerinde tamamen bağımsız olan devletlerin, dış işlerinde tek bir merkeze bağlı olduğu birleşik yapılı devlet biçimi hangisidir?", options: ["Üniter Devlet", "Bölgeli Devlet", "Federal Devlet (Federasyon)", "Konfederasyon"], answer: "Federal Devlet (Federasyon)" },
    { text: "Başkanlık sisteminde yürütme gücü tek bir organda toplandığı için yürütme yapısı aşağıdakilerden hangisiyle nitelendirilir?", options: ["Dualist (Çift başlı)", "Monist (Tek başlı)", "Çoğulcu", "Parlementer"], answer: "Monist (Tek başlı)" },
    { text: "Cumhurbaşkanlığı Hükümet Sistemi'ne göre yürütme yetkisi ve görevi kime aittir ve yapısı nasıldır?", options: ["Cumhurbaşkanı ve Başbakan - Dualist", "Sadece Cumhurbaşkanı - Monist", "Bakanlar Kurulu - Çoğulcu", "TBMM ve Cumhurbaşkanı - Dualist"], answer: "Sadece Cumhurbaşkanı - Monist" },
    { text: "Halkın doğrudan karar alma süreçlerine katılmasını sağlayan referandum, halk vetosu ve halk girişimi gibi yöntemler hangi demokrasi türünün araçlarıdır?", options: ["Doğrudan Demokrasi", "Temsili Demokrasi", "Yarı Doğrudan Demokrasi", "Çoğunlukçu Demokrasi"], answer: "Yarı Doğrudan Demokrasi" },
    { text: "Muhalefetin haklarını güvenceye alan, azınlık haklarını koruyan ve çok sesliliği savunan demokrasi modeli hangisidir?", options: ["Çoğunlukçu Demokrasi", "Çoğulcu Demokrasi", "Doğrudan Demokrasi", "Temsili Demokrasi"], answer: "Çoğulcu Demokrasi" },
    { text: "Anayasayı tamamen sıfırdan yapma veya devrim/darbe gibi hukuk dışı yollarla yeni bir anayasa kurma yetkisine ne ad verilir?", options: ["Asli Kurucu İktidar", "Tali Kurucu İktidar", "Kurulmuş İktidar", "Yasama Yetkisi"], answer: "Asli Kurucu İktidar" },
    { text: "Türk anayasa tarihinde hem yumuşak (kolay değiştirilebilen) hem de çerçeve (kısa ve özet) olan tek anayasamız hangisidir?", options: ["Kanuni Esasi (1876)", "1921 Anayasası", "1961 Anayasası", "1982 Anayasası"], answer: "1921 Anayasası" },
    { text: "Türk tarihinin padişah yetkilerini sınırlandıran ve Magna Carta'ya benzetilen ilk anayasal belgesi hangisidir?", options: ["Tanzimat Fermanı (1839)", "Sened-i İttifak (1808)", "Islahat Fermanı (1856)", "Kanuni Esasi (1876)"], answer: "Sened-i İttifak (1808)" },
    { text: "Padişahın kanun gücünün üstünlüğünü ve hukukun üstünlüğü ilkesini ilk kez resmen kabul ettiği belge hangisidir?", options: ["Sened-i İttifak", "Tanzimat Fermanı (1839)", "Islahat Fermanı", "Kanuni Esasi"], answer: "Tanzimat Fermanı (1839)" },
    { text: "Osmanlı Devleti'nin ve Türk tarihinin ilk yazılı anayasası aşağıdakilerden hangisidir?", options: ["Sened-i İttifak", "Kanuni Esasi (1876)", "Teşkilat-ı Esasiye", "1924 Anayasası"], answer: "Kanuni Esasi (1876)" },
    { text: "1921 Anayasası'nda yapılan 1923 değişiklikleri ile devletin yönetim şekli aşağıdakilerden hangisi olarak ilan edilmiştir?", options: ["Meşrutiyet", "Cumhuriyet", "Oligarşi", "Teokrasi"], answer: "Cumhuriyet" },
    { text: "Kadınlara ilk kez seçme ve seçilme hakkı tanıyan, seçmen yaşını da 18'den 22'ye çıkaran anayasal değişiklik hangi yıl yapılmıştır?", options: ["1928", "1934", "1937", "1946"], answer: "1934" },
    { text: "Türkiye'de çok partili hayata geçiş ve tek dereceli seçim sistemi ilk kez hangi anayasal değişiklik yılıyla uygulanmıştır?", options: ["1934", "1937", "1946", "1950"], answer: "1946" },
    { text: "İlk kez kuvvetler ayrılığı ilkesini benimseyen ve en büyük yenilik olarak Anayasa Mahkemesi'ni kuran anayasamız hangisidir?", options: ["1921 Anayasası", "1924 Anayasası", "1961 Anayasası", "1982 Anayasası"], answer: "1961 Anayasası" },
    { text: "Milli Güvenlik Kurulu (MGK) ve Diyanet İşleri Başkanlığı ilk kez hangi anayasa ile anayasal birer kuruluş haline getirilmiştir?", options: ["1924 Anayasası", "1961 Anayasası", "1982 Anayasası", "1921 Anayasası"], answer: "1961 Anayasası" },
    { text: "Devlet Denetleme Kurulu (DDK) ve Yükseköğretim Kurulu (YÖK) ilk kez hangi anayasamızla kurulmuştur?", options: ["1924 Anayasası", "1961 Anayasası", "1982 Anayasası", "1921 Anayasası"], answer: "1982 Anayasası" },
    { text: "Devletin kamu yararı amacıyla özel mülkiyetteki taşınmazlara el koyup bedelini ödemesi işlemine ne ad verilir?", options: ["Devletleştirme", "İstimval", "Kamulaştırma (İstimlak)", "Geçici İşgal"], answer: "Kamulaştırma (İstimlak)" },
    { text: "Olağanüstü durumlarda devletin özel kişilere ait taşınır (mobil) mallara geçici el koyması yetkisine ne ad verilir?", options: ["Kamulaştırma", "İstimval", "Geçici İşgal", "Devletleştirme"], answer: "İstimval" },
    { text: "Hiç kimsenin tabi olduğu mahkemeden başka bir merci önünde yargılanamayacağını garanti eden hukuk devleti ilkesi hangisidir?", options: ["Kazanılmış haklara saygı", "Kanuni hakim güvencesi", "Hak arama hürriyeti", "Mahkemelerin bağımsızlığı"], answer: "Kanuni hakim güvencesi" },
    
    // Section 3: Yasama, Yürütme ve Yargı Organları
    { text: "Türk seçim kanunlarına göre aşağıdakilerden hangisi milletvekili seçimlerinde oy kullanma hakkına sahiptir?", options: ["Silah altındaki er ve erbaşlar", "Askeri okullarda okuyan öğrenciler", "Tutuklu bulunan kişiler", "Kısıtlı (mahcür) olanlar"], answer: "Tutuklu bulunan kişiler" },
    { text: "TBMM'de boşalan milletvekilliklerinin doldurulması amacıyla yapılan ara seçimler, genel seçimlere kaç ay kala kesinlikle yapılamaz?", options: ["6 ay", "1 yıl", "18 ay", "2 yıl"], answer: "1 yıl" },
    { text: "Siyasi partilerin TBMM genel seçimlerinde milletvekili çıkarabilmesi için aşması gereken genel ülke barajı yüzde kaçtır?", options: ["%3", "%5", "%7", "%10"], answer: "%7" },
    { text: "Siyasi partilerin kapatılması davasını açmaya yetkili olan merci aşağıdakilerden hangisidir?", options: ["Anayasa Mahkemesi Başkanı", "Yargıtay Cumhuriyet Başsavcısı", "TBMM Başkanı", "Adalet Bakanı"], answer: "Yargıtay Cumhuriyet Başsavcısı" },
    { text: "Anayasa'ya göre milletvekili seçilebilmek için kaç yaşını doldurmuş olmak gerekir?", options: ["18", "21", "25", "30"], answer: "18" },
    { text: "TBMM üyesi iken Cumhurbaşkanı yardımcısı veya bakan olarak atanan bir kişinin milletvekilliği sıfatı ne zaman sona erer?", options: ["Bakanlık görevi bittiğinde", "Atandığı an kendiliğinden", "TBMM Genel Kurulu kararıyla", "Yemin ettiğinde"], answer: "Atandığı an kendiliğinden" },
    { text: "Yasama Dokunulmazlığı kaldırılan bir milletvekili, bu karara karşı kaç gün içinde Anayasa Mahkemesi'ne itiraz edebilir?", options: ["7 gün", "15 gün", "30 gün", "45 gün"], answer: "7 gün" },
    { text: "Bir milletvekilinin mazeretsiz ve izinsiz olarak 1 ay içinde toplam kaç birleşim gününe katılmaması durumunda milletvekilliği meclis kararıyla düşürülür?", options: ["3", "5", "10", "15"], answer: "5" },
    { text: "Milletvekilinin meclis çalışmalarındaki oy, söz ve açıklamalarından dolayı meclis dışında sorumlu tutulamamasına ne ad verilir?", options: ["Yasama Dokunulmazlığı", "Yasama Sorumsuzluğu", "Yasama Muafiyeti", "Yasama Dokunulmazlığının Kaldırılması"], answer: "Yasama Sorumsuzluğu" },
    { text: "Kanun tekliflerinin oylanmasında toplantıya katılanların salt çoğunluğu aranır, ancak bu sayı hiçbir şekilde en az kaç milletvekilinden az olamaz?", options: ["139", "151", "200", "301"], answer: "151" },
    { text: "Bakan ve Cumhurbaşkanı yardımcılarının görevleriyle ilgili suç işledikleri iddiasıyla 'Yüce Divan'a sevk' kararı en az kaç milletvekilinin gizli oyuyla alınır?", options: ["301 (Salt çoğunluk)", "360 (3/5 çoğunluk)", "400 (2/3 çoğunluk)", "450"], answer: "400 (2/3 çoğunluk)" },
    { text: "Cumhurbaşkanlığı seçiminde ilk turda geçerli oyların salt çoğunluğu sağlanamazsa, ikinci tura en çok oy alan kaç aday katılır?", options: ["2", "3", "4", "5"], answer: "2" },
    { text: "Milli Güvenlik Kurulu (MGK) anayasal düzenlemelere göre olağan şartlarda kaç ayda bir toplanır?", options: ["Her ay", "2 ayda bir", "3 ayda bir", "6 ayda bir"], answer: "2 ayda bir" },
    { text: "Aşağıdakilerden hangisi Milli Güvenlik Kurulu'nun (MGK) askeri üyeleri arasında yer almaz?", options: ["Genelkurmay Başkanı", "Jandarma Genel Komutanı", "Kara Kuvvetleri Komutanı", "Hava Kuvvetleri Komutanı"], answer: "Jandarma Genel Komutanı" },
    { text: "Anayasa Mahkemesi (AYM) toplam kaç üyeden oluşur ve üyelerin görev süresi kaç yıldır?", options: ["11 üye - 9 yıl", "15 üye - 12 yıl", "17 üye - 10 yıl", "21 üye - Ömür boyu"], answer: "15 üye - 12 yıl" },
    { text: "Kanunların ve Cumhurbaşkanlığı Kararnamelerinin anayasaya şekil veya esas bakımından aykırılığı gerekçesiyle AYM'ye soyut norm denetimi davası en geç kaç gün içinde açılmalıdır?", options: ["15 gün", "30 gün", "60 gün", "90 gün"], answer: "60 gün" },
    { text: "Adli yargı kolunun en üst temyiz mercii olan Yargıtay'ın tüm üyelerini seçen kurul hangisidir?", options: ["Cumhurbaşkanı", "TBMM Genel Kurulu", "Hakimler ve Savcılar Kurulu (HSK)", "Yargıtay Genel Kurulu"], answer: "Hakimler ve Savcılar Kurulu (HSK)" },
    { text: "İdari yargı kolunun en üst temyiz organı olan Danıştay üyelerinin dörtte birini (1/4) seçme yetkisi kime aittir?", options: ["TBMM", "Cumhurbaşkanı", "Hakimler ve Savcılar Kurulu", "Danıştay Başkanı"], answer: "Cumhurbaşkanı" },
    { text: "TBMM adına kamu kurumlarının bütçe harcamalarını denetleyen, kararları kesin olan ancak anayasal olarak yüksek mahkeme sayılmayan kurum hangisidir?", options: ["Sayıştay", "Danıştay", "Yargıtay", "Kamu Denetçiliği Kurumu"], answer: "Sayıştay" },
    { text: "Hakimler ve Savcılar Kurulu (HSK) toplam kaç üyeden oluşur ve kurulun başkanı kimdir?", options: ["11 üye - Yargıtay Başkanı", "13 üye - Adalet Bakanı", "15 üye - Cumhurbaşkanı", "7 üye - HSK Başkanvekili"], answer: "13 üye - Adalet Bakanı" },

    // Section 4: İdare Hukuku & İnsan Hakları Hukuku
    { text: "İl ve ilçelerin kurulması, kaldırılması, adlarının ve merkezlerinin değiştirilmesi aşağıdakilerden hangisi ile gerçekleştirilebilir?", options: ["Cumhurbaşkanlığı Kararnamesi", "Cumhurbaşkanı Kararı", "Kanun", "İçişleri Bakanlığı Genelgesi"], answer: "Kanun" },
    { text: "Büyükşehir belediyeleri kurabilmek için o ilin toplam nüfusunun en az kaç kişi olması yasal bir zorunluluktur?", options: ["250 bin", "500 bin", "750 bin", "1 milyon"], answer: "750 bin" },
    { text: "Belediyelerin kurulabilmesi için nüfus sınırının en az kaç olması ve hangi organın kararı gereklidir?", options: ["2000 - İçişleri Bakanı Kararı", "5000 - Cumhurbaşkanı Kararı", "10000 - Kanun", "50000 - Cumhurbaşkanı Kararnamesi"], answer: "5000 - Cumhurbaşkanı Kararı" },
    { text: "Köy kurulabilmesi için nüfusun hangi sınırlar arasında olması aranır ve köyün kuruluşu hangi merciin kararıyla gerçekleşir?", options: ["150 ile 2000 arası - İçişleri Bakanı Kararı", "500 ile 5000 arası - Cumhurbaşkanı Kararı", "100 ile 1000 arası - Vali Kararı", "150 ile 5000 arası - TBMM Kanunu"], answer: "150 ile 2000 arası - İçişleri Bakanı Kararı" },
    { text: "Merkezi yönetimin yerinden yönetim kuruluşları (Örn: Belediyeler) üzerindeki anayasal denetim yetkisine ne ad verilir?", options: ["Hiyerarşi", "İdari Vesayet", "Yetki Genişliği", "Kamu Denetimi"], answer: "İdari Vesayet" },
    { text: "Aşağıdakilerden hangisi doğrudan bir 'hiyerarşi' ilişkisine örnek gösterilemez?", options: ["Bakanın, bakanlık müsteşarını denetlemesi", "Valinin, ilçedeki kaymakamı denetlemesi", "Rektörün, üniversite dekanını denetlemesi", "Valinin, büyükşehir belediye başkanını denetlemesi"], answer: "Valinin, büyükşehir belediye başkanını denetlemesi" },
    { text: "İçişleri Bakanlığı'nın, görevleri ile ilgili bir suç soruşturması açılan büyükşehir belediye başkanını geçici bir tedbir olarak uzaklaştırma yetkisi hangi denetim türüne dayanır?", options: ["Hiyerarşik Yetki", "İdari Vesayet Yetkisi", "Yargısal Yetki", "Yasama Denetimi"], answer: "İdari Vesayet Yetkisi" },
    { text: "Aşağıdakilerden hangisi Türkiye Cumhuriyeti Anayasası'nda kamu tüzel kişiliği açıkça belirtilen (anayasal KTK) kurumlardan biri değildir?", options: ["İl Özel İdaresi", "Belediyeler", "Üniversiteler", "Bakanlıklar"], answer: "Bakanlıklar" },
    { text: "657 sayılı Devlet Memurları Kanunu'na göre memuriyete giriş ve sınıflar içinde ilerleme yetenek esasına bağlayan ilke hangisidir?", options: ["Kariyer", "Liyakat", "Sınıflandırma", "Sadakat"], answer: "Liyakat" },
    { text: "Devlet memurluğuna ilk kez kabul edilen bir adayın 'aday memurluk' süresi en az ve en fazla kaç yıldır?", options: ["En az 6 ay - En fazla 1 yıl", "En az 1 yıl - En fazla 2 yıl", "En az 2 yıl - En fazla 3 yıl", "En az 1 yıl - En fazla 3 yıl"], answer: "En az 1 yıl - En fazla 2 yıl" },
    { text: "Görev ve davranışlarında memurun daha dikkatli olması gerektiğinin yazılı olarak bildirilmesi hangi disiplin cezasıdır?", options: ["Kınama", "Uyarma", "Aylıktan kesme", "Kademe durdurma"], answer: "Uyarma" },
    { text: "Hizmet süresi 1 yıldan 10 yıla kadar (10 yıl dahil) olan bir devlet memurunun yıllık izin hakkı kaç gündür?", options: ["15 gün", "20 gün", "25 gün", "30 gün"], answer: "20 gün" },
    { text: "657 Sayılı DMK'ya göre memurun maaşından aylıktan kesme cezası brüt aylığının hangi oranları arasında yapılır?", options: ["1/10 ile 1/5 arası", "1/20 ile 1/10 arası", "1/30 ile 1/8 arası", "1/50 ile 1/30 arası"], answer: "1/30 ile 1/8 arası" },
    { text: "Aşağıdakilerden hangisi bir devlet memuruna verilebilecek disiplin cezalarından biri değildir?", options: ["Görevden uzaklaştırma (açığa alma)", "Aylıktan kesme", "Kademe ilerlemesinin durdurulması", "Kınama"], answer: "Görevden uzaklaştırma (açığa alma)" },
    { text: "Jellinek sınıflandırmasına göre, kişinin devletten bir olumlu hizmet veya edim talep etmesini sağlayan haklara ne denir?", options: ["Negatif Statü Hakları", "Pozitif Statü Hakları (İsteme Hakları)", "Aktif Statü Hakları", "Katılma Hakları"], answer: "Pozitif Statü Hakları (İsteme Hakları)" },
    { text: "Bilimsel gelişmeler, teknoloji ve bilişim çağıyla birlikte ortaya çıkan kişisel verilerin korunması ve ekosistem hakları hangi kuşak haklar kapsamındadır?", options: ["I. Kuşak", "II. Kuşak", "III. Kuşak", "IV. Kuşak"], answer: "IV. Kuşak" },
    { text: "İnsan haklarını koruma amacıyla kurulan Avrupa İnsan Hakları Mahkemesi'nin (AİHM) merkezi hangi şehirde yer alır?", options: ["Lahey (Hollanda)", "Cenevre (İsviçre)", "Strazburg (Fransa)", "Brüksel (Belçika)"], answer: "Strazburg (Fransa)" },
    { text: "AİHM'e bireysel başvuru yapabilmek için iç hukuk yolları tüketildikten sonra en geç kaç ay içinde başvuru yapılmalıdır?", options: ["30 gün", "3 ay", "4 ay", "6 ay"], answer: "4 ay" },
    { text: "Anayasa Mahkemesi'ne iç hukukta bireysel başvuru süresi, iç hukuk yollarının tükendiği tarihten itibaren kaç gündür?", options: ["15 gün", "30 gün", "60 gün", "90 gün"], answer: "30 gün" },
    { text: "İl idaresinde valiyi ve ilçe idaresinde kaymakamı atama usulü sırasıyla nasıldır?", options: ["Vali: Kanunla - Kaymakam: CB Kararı ile", "Vali: CB Kararı ile - Kaymakam: CB Onayı ile", "Vali: İçişleri Bakanı Kararı - Kaymakam: Vali Onayı", "Vali: CB Kararı ile - Kaymakam: Kanunla"], answer: "Vali: CB Kararı ile - Kaymakam: CB Onayı ile" }
];

let customNotesQuizQuestions = [];
let currentCustomNotesIndex = 0;
let customNotesScore = 0;
let currentCustomNotesSubMode = 'list';
let currentCustomNotesCategory = 'All';
let currentCustomNotesSubject = 'Tarih'; // Default subject
let currentCustomQuizSubject = 'Tarih';   // Active quiz subject

function initCustomNotesMode() {
    currentCustomNotesSubMode = 'list';
    currentCustomNotesCategory = 'All';
    currentCustomNotesSubject = 'Tarih';

    // Highlight proper tabs
    document.getElementById("custom-notes-tab-list").classList.add("active");
    document.getElementById("custom-notes-tab-quiz").classList.remove("active");
    document.getElementById("custom-notes-submode-list").classList.add("active");
    document.getElementById("custom-notes-submode-quiz").classList.remove("active");

    // Reset subject buttons
    document.getElementById("custom-notes-btn-subject-tarih").classList.add("active");
    document.getElementById("custom-notes-btn-subject-cografya").classList.remove("active");
    document.getElementById("custom-notes-btn-subject-vatandaslik").classList.remove("active");

    renderCustomNotesFilters();
    renderCustomNotesList();
}

function selectCustomNotesSubject(subject) {
    currentCustomNotesSubject = subject;
    currentCustomNotesCategory = 'All';

    // Highlight subject buttons
    document.getElementById("custom-notes-btn-subject-tarih").classList.remove("active");
    document.getElementById("custom-notes-btn-subject-cografya").classList.remove("active");
    document.getElementById("custom-notes-btn-subject-vatandaslik").classList.remove("active");

    if (subject === 'Tarih') {
        document.getElementById("custom-notes-btn-subject-tarih").classList.add("active");
    } else if (subject === 'Coğrafya') {
        document.getElementById("custom-notes-btn-subject-cografya").classList.add("active");
    } else if (subject === 'Vatandaşlık') {
        document.getElementById("custom-notes-btn-subject-vatandaslik").classList.add("active");
    }

    renderCustomNotesFilters();
    renderCustomNotesList();
}

function toggleCustomNotesSubMode(submode) {
    currentCustomNotesSubMode = submode;
    document.getElementById("custom-notes-tab-list").classList.remove("active");
    document.getElementById("custom-notes-tab-quiz").classList.remove("active");
    document.getElementById("custom-notes-submode-list").classList.remove("active");
    document.getElementById("custom-notes-submode-quiz").classList.remove("active");

    if (submode === 'list') {
        document.getElementById("custom-notes-tab-list").classList.add("active");
        document.getElementById("custom-notes-submode-list").classList.add("active");
        renderCustomNotesList();
    } else {
        document.getElementById("custom-notes-tab-quiz").classList.add("active");
        document.getElementById("custom-notes-submode-quiz").classList.add("active");
        resetCustomNotesQuizSelection();
    }
}

function renderCustomNotesFilters() {
    let categories = ['All'];
    const subjectFiltered = customNotesDatabase.filter(note => note.subject === currentCustomNotesSubject);
    const uniqueCats = [...new Set(subjectFiltered.map(note => note.category))].filter(Boolean);
    categories = categories.concat(uniqueCats);


    const filterContainer = document.getElementById("custom-notes-filters");
    filterContainer.innerHTML = categories.map(cat => {
        const isActive = currentCustomNotesCategory === cat;
        return `
            <button class="lit-tab-btn ${isActive ? 'active' : ''}" style="font-size: 0.8rem; padding: 0.35rem 0.75rem; border-radius: 20px; border: 1px solid var(--border-color); cursor: pointer;" onclick="filterCustomNotes('${cat.replace(/'/g, "\\'")}', this)">
                ${cat === 'All' ? '📂 Tümü' : cat}
            </button>
        `;
    }).join('');
}

let customNotesSearchQuery = '';

function handleCustomNotesSearch() {
    const input = document.getElementById("custom-notes-search-input");
    customNotesSearchQuery = input ? input.value.trim().toLowerCase() : '';
    renderCustomNotesList();
}

function filterCustomNotes(category, btnElement) {
    currentCustomNotesCategory = category;

    const filterButtons = document.querySelectorAll("#custom-notes-filters button");
    filterButtons.forEach(btn => btn.classList.remove("active"));
    btnElement.classList.add("active");

    renderCustomNotesList();
}

function renderCustomNotesList() {
    const listContainer = document.getElementById("custom-notes-cards-list");
    const subjectFiltered = customNotesDatabase.filter(note => note.subject === currentCustomNotesSubject);
    
    let filtered = currentCustomNotesCategory === 'All'
        ? subjectFiltered
        : subjectFiltered.filter(note => note.category === currentCustomNotesCategory);

    if (customNotesSearchQuery) {
        filtered = filtered.filter(note => 
            (note.title && note.title.toLowerCase().includes(customNotesSearchQuery)) ||
            (note.desc && note.desc.toLowerCase().includes(customNotesSearchQuery)) ||
            (note.kpssNote && note.kpssNote.toLowerCase().includes(customNotesSearchQuery))
        );
    }

    let subjectColor = 'var(--color-tarih)';
    let importanceBg = 'rgba(99, 102, 241, 0.03)';
    if (currentCustomNotesSubject === 'Tarih') {
        subjectColor = 'var(--color-tarih)';
        importanceBg = 'rgba(99, 102, 241, 0.03)';
    } else if (currentCustomNotesSubject === 'Coğrafya') {
        subjectColor = 'var(--color-cografya)';
        importanceBg = 'rgba(16, 185, 129, 0.03)';
    } else if (currentCustomNotesSubject === 'Vatandaşlık') {
        subjectColor = 'var(--color-vatandaslik)';
        importanceBg = 'rgba(245, 158, 11, 0.03)';
    }

    if (currentCustomNotesCategory === 'I. Dünya Savaşı - Lozan Kronolojisi') {
        listContainer.innerHTML = `
            <div class="kpss-timeline-wrapper" style="position: relative; padding: 1rem 0; margin-left: 1.5rem; border-left: 2px dashed ${subjectColor};">
                ${filtered.map(note => `
                    <div class="kpss-timeline-item" style="position: relative; margin-bottom: 2rem; padding-left: 2rem;">
                        <div style="position: absolute; left: -9px; top: 18px; width: 16px; height: 16px; border-radius: 50%; background-color: ${subjectColor}; border: 3px solid var(--bg-primary); box-shadow: 0 0 0 3px rgba(99,102,241,0.1);"></div>
                        
                        <div class="lit-card" style="border-left: 4px solid ${subjectColor}; margin: 0;">
                            <div class="lit-card-header" style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem;">
                                <div class="lit-title-area" style="display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap;">
                                    <span class="lit-book-title" style="color: ${subjectColor}; font-weight: 700; font-size: 1rem;">📅 ${note.title}</span>
                                </div>
                            </div>
                            <p class="lit-card-desc" style="margin: 0.5rem 0; font-size: 0.9rem; line-height: 1.6;"><strong>Olay:</strong> ${note.desc}</p>
                            ${note.kpssNote ? `
                                <div class="lit-importance-box" style="border-left-color: ${subjectColor}; background-color: ${importanceBg}; margin-top: 0.5rem; padding: 0.5rem 0.75rem; border-radius: 4px; font-size: 0.85rem;">
                                    <strong>KPSS Püf Noktası / Detay:</strong> ${note.kpssNote}
                                </div>
                            ` : ''}
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
        return;
    }

    if (currentCustomNotesCategory === 'Osmanlı Genel Kronolojisi') {
        const eras = ['Kuruluş', 'Yükselme', 'Duraklama', 'Gerileme', 'Dağılma'];
        const eraTitles = {
            'Kuruluş': '🌅 1. Kuruluş Dönemi (1299-1453)',
            'Yükselme': '☀️ 2. Yükselme Dönemi (1453-1579)',
            'Duraklama': '🍂 3. Duraklama Dönemi (1579-1699)',
            'Gerileme': '❄️ 4. Gerileme Dönemi (1699-1792)',
            'Dağılma': '⚡ 5. Dağılma Dönemi (1792-1913)'
        };
        const eraColors = {
            'Kuruluş': '#2e7d32',
            'Yükselme': '#f9a825',
            'Duraklama': '#d84315',
            'Gerileme': '#1565c0',
            'Dağılma': '#37474f'
        };

        listContainer.innerHTML = eras.map(era => {
            const eraItems = filtered.filter(note => note.eraGroup === era);
            if (eraItems.length === 0) return '';
            
            const color = eraColors[era] || subjectColor;
            return `
                <div class="kpss-era-group" style="margin-bottom: 2.5rem;">
                    <h3 style="background-color: ${color}; color: #fff; padding: 0.5rem 1rem; border-radius: var(--border-radius-sm); margin-bottom: 1.5rem; font-size: 1.1rem; font-weight: 700; display: flex; align-items: center; gap: 0.5rem;">
                        ${eraTitles[era]}
                    </h3>
                    <div class="kpss-timeline-wrapper" style="position: relative; padding: 0.5rem 0; margin-left: 1.5rem; border-left: 2px dashed ${color};">
                        ${eraItems.map(note => `
                            <div class="kpss-timeline-item" style="position: relative; margin-bottom: 1.5rem; padding-left: 2rem;">
                                <div style="position: absolute; left: -9px; top: 18px; width: 16px; height: 16px; border-radius: 50%; background-color: ${color}; border: 3px solid var(--bg-primary); box-shadow: 0 0 0 3px rgba(99,102,241,0.05);"></div>
                                
                                <div class="lit-card" style="border-left: 4px solid ${color}; margin: 0; box-shadow: 0 2px 4px rgba(0,0,0,0.02);">
                                    <div class="lit-card-header" style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem;">
                                        <div class="lit-title-area" style="display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap;">
                                            <span class="lit-book-title" style="color: ${color}; font-weight: 700; font-size: 0.95rem;">📅 ${note.title}</span>
                                        </div>
                                    </div>
                                    <p class="lit-card-desc" style="margin: 0.4rem 0; font-size: 0.88rem; line-height: 1.5;"><strong>Olay:</strong> ${note.desc}</p>
                                    ${note.kpssNote ? `
                                        <div class="lit-importance-box" style="border-left-color: ${color}; background-color: ${importanceBg}; margin-top: 0.4rem; padding: 0.4rem 0.6rem; border-radius: 4px; font-size: 0.82rem;">
                                            <strong>KPSS Püf Noktası / Detay:</strong> ${note.kpssNote}
                                        </div>
                                    ` : ''}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }).join('');
        return;
    }

    listContainer.innerHTML = filtered.map(note => `
        <div class="lit-card" style="border-left: 4px solid ${subjectColor};">
            <div class="lit-card-header">
                <div class="lit-title-area">
                    <span class="lit-book-title" style="color: ${subjectColor};">⭐ ${note.title}</span>
                    <span class="favorite-btn" style="color: white; font-size:0.75rem; background-color: ${subjectColor}; padding: 0.15rem 0.4rem; border-radius: 4px;">${note.category}</span>
                </div>
            </div>
            <p class="lit-card-desc"><strong>Ders Notu:</strong> ${note.desc}</p>
            <div class="lit-importance-box" style="border-left-color: ${subjectColor}; background-color: ${importanceBg};">
                <strong>KPSS Püf Noktası:</strong> ${note.kpssNote}
            </div>
        </div>
    `).join('');
}

function resetCustomNotesQuizSelection() {
    document.getElementById("custom-notes-quiz-selector").classList.remove("hidden");
    document.getElementById("custom-notes-quiz-play-box").classList.add("hidden");
    document.getElementById("custom-notes-results").classList.add("hidden");
    document.getElementById("custom-notes-explanation").classList.add("hidden");

    // Hide parts container
    document.getElementById("custom-notes-quiz-parts-container").classList.add("hidden");

    // Reset subject buttons
    const subjects = ['tarih', 'cografya', 'vatandaslik'];
    subjects.forEach(sub => {
        const btn = document.getElementById(`quiz-btn-${sub}`);
        if (btn) {
            btn.style.backgroundColor = 'transparent';
            btn.style.color = `var(--color-${sub})`;
        }
    });
}

function launchCustomNotesQuiz(subject, selectedParts) {
    currentCustomQuizSubject = subject;
    
    // Choose pool
    let pool = [];
    if (subject === 'Tarih') {
        pool = customNotesQuestionsPool;
    } else if (subject === 'Coğrafya') {
        pool = customGeographyQuestionsPool;
    } else if (subject === 'Vatandaşlık') {
        pool = customVatandaslikQuestionsPool;
    }

    // Filter by selected parts if provided
    if (selectedParts && selectedParts.length > 0) {
        pool = pool.filter(q => selectedParts.includes(q.part));
    }

    customNotesQuizQuestions = [...pool];

    if (customNotesQuizQuestions.length === 0) {
        alert("Seçilen bölümlerde hiç soru bulunmamaktadır!");
        return;
    }

    // Shuffle pool
    for (let i = customNotesQuizQuestions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [customNotesQuizQuestions[i], customNotesQuizQuestions[j]] = [customNotesQuizQuestions[j], customNotesQuizQuestions[i]];
    }

    // Pick 15 questions
    customNotesQuizQuestions = customNotesQuizQuestions.slice(0, 15);
    currentCustomNotesIndex = 0;
    customNotesScore = 0;

    // Apply color styling to explanation box & title
    const quizPlayBox = document.getElementById("custom-notes-quiz-play-box");
    const expBox = document.getElementById("custom-notes-explanation");
    
    let subjectColor = 'var(--color-tarih)';
    let importanceBg = 'rgba(99, 102, 241, 0.03)';
    if (subject === 'Tarih') {
        subjectColor = 'var(--color-tarih)';
        importanceBg = 'rgba(99, 102, 241, 0.03)';
    } else if (subject === 'Coğrafya') {
        subjectColor = 'var(--color-cografya)';
        importanceBg = 'rgba(16, 185, 129, 0.03)';
    } else if (subject === 'Vatandaşlık') {
        subjectColor = 'var(--color-vatandaslik)';
        importanceBg = 'rgba(245, 158, 11, 0.03)';
    }
    
    expBox.style.borderLeftColor = subjectColor;
    expBox.style.backgroundColor = importanceBg;

    // Show/Hide divs
    document.getElementById("custom-notes-quiz-selector").classList.add("hidden");
    quizPlayBox.classList.remove("hidden");
    document.getElementById("custom-notes-results").classList.add("hidden");
    expBox.classList.add("hidden");

    renderCustomNotesQuestion();
}

function renderCustomNotesQuestion() {
    const q = customNotesQuizQuestions[currentCustomNotesIndex];
    document.getElementById("custom-notes-q-num").textContent = `Soru: ${currentCustomNotesIndex + 1} / 15`;
    document.getElementById("custom-notes-score-correct").textContent = customNotesScore;
    document.getElementById("custom-notes-question-text").textContent = q.text;
    document.getElementById("custom-notes-explanation").classList.add("hidden");

    // Shuffle options
    const shuffledOptions = [...q.options];
    for (let i = shuffledOptions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledOptions[i], shuffledOptions[j]] = [shuffledOptions[j], shuffledOptions[i]];
    }

    const optionsGrid = document.getElementById("custom-notes-options-grid");
    optionsGrid.innerHTML = shuffledOptions.map(opt => `
        <button class="results-btn secondary-btn" onclick="submitCustomNotesAnswer('${opt.replace(/'/g, "\\'")}')">${opt}</button>
    `).join('');
}

function submitCustomNotesAnswer(userAns) {
    const q = customNotesQuizQuestions[currentCustomNotesIndex];
    const isCorrect = userAns === q.answer;

    if (isCorrect) {
        customNotesScore++;
    }

    const buttons = document.querySelectorAll("#custom-notes-options-grid button");
    buttons.forEach(btn => {
        btn.style.pointerEvents = "none";
        if (btn.textContent === q.answer) {
            btn.style.backgroundColor = "rgba(16, 185, 129, 0.2)";
            btn.style.borderColor = "var(--color-success)";
        } else if (btn.textContent === userAns) {
            btn.style.backgroundColor = "rgba(239, 68, 68, 0.2)";
            btn.style.borderColor = "var(--color-danger)";
        }
    });

    const expBox = document.getElementById("custom-notes-explanation");
    expBox.innerHTML = `<strong>${isCorrect ? '✔️ Doğru Cevap!' : '❌ Yanlış Cevap!'}</strong> Doğru cevap: <span style="font-weight: 700;">${q.answer}</span>.`;
    expBox.classList.remove("hidden");

    setTimeout(() => {
        if (currentCustomNotesIndex + 1 < 15) {
            currentCustomNotesIndex++;
            renderCustomNotesQuestion();
        } else {
            showCustomNotesResults();
        }
    }, 2000);
}

function showCustomNotesResults() {
    document.getElementById("custom-notes-quiz-play-box").classList.add("hidden");
    document.getElementById("custom-notes-results").classList.remove("hidden");

    const pct = Math.round((customNotesScore / 15) * 100);
    document.getElementById("custom-notes-res-pct").textContent = `${pct}%`;

    // Dynamic Title & Icon based on subject
    const titleEl = document.getElementById("custom-notes-results-title");
    const iconEl = document.getElementById("custom-notes-results-icon");
    if (currentCustomQuizSubject === 'Tarih') {
        titleEl.textContent = "Özel Tarih Testi Tamamlandı!";
        iconEl.textContent = "📜";
    } else if (currentCustomQuizSubject === 'Coğrafya') {
        titleEl.textContent = "Özel Coğrafya Testi Tamamlandı!";
        iconEl.textContent = "🌍";
    } else if (currentCustomQuizSubject === 'Vatandaşlık') {
        titleEl.textContent = "Özel Vatandaşlık Testi Tamamlandı!";
        iconEl.textContent = "🏛️";
    }
}

// === PART SELECTION SETUP & LOGIC ===
let customQuizSetupSubject = '';

function initQuestionParts() {
    // Tarih (customNotesQuestionsPool)
    customNotesQuestionsPool.forEach((q, idx) => {
        if (q.part === undefined) {
            if (idx < 52) q.part = 1;
            else if (idx < 73) q.part = 2;
            else q.part = 3;
        }
    });

    // Coğrafya (customGeographyQuestionsPool)
    customGeographyQuestionsPool.forEach((q, idx) => {
        if (q.part === undefined) {
            if (idx < 41) q.part = 1;
            else q.part = 2;
        }
    });

    // Vatandaşlık (customVatandaslikQuestionsPool)
    customVatandaslikQuestionsPool.forEach((q, idx) => {
        if (q.part === undefined) {
            if (idx < 20) q.part = 1;
            else if (idx < 40) q.part = 2;
            else if (idx < 60) q.part = 3;
            else q.part = 4;
        }
    });
}

function selectCustomQuizSubjectForSetup(subject) {
    customQuizSetupSubject = subject;

    // Highlight selected button, unhighlight others
    const subjects = ['Tarih', 'Coğrafya', 'Vatandaşlık'];
    const keys = { 'Tarih': 'tarih', 'Coğrafya': 'cografya', 'Vatandaşlık': 'vatandaslik' };

    subjects.forEach(sub => {
        const key = keys[sub];
        const btn = document.getElementById(`quiz-btn-${key}`);
        if (sub === subject) {
            btn.style.backgroundColor = `var(--color-${key})`;
            btn.style.color = '#ffffff';
        } else {
            btn.style.backgroundColor = 'transparent';
            btn.style.color = `var(--color-${key})`;
        }
    });

    // Show parts container
    const partsContainer = document.getElementById("custom-notes-quiz-parts-container");
    partsContainer.classList.remove("hidden");

    // Dynamic headers
    const headerIcon = document.getElementById("parts-header-icon");
    const headerText = document.getElementById("parts-header-text");
    const startBtn = document.getElementById("start-custom-quiz-btn");

    if (subject === 'Tarih') {
        headerIcon.textContent = '📜';
        headerText.textContent = 'Tarih Sınav Bölümleri';
        startBtn.style.backgroundColor = 'var(--color-tarih)';
        startBtn.style.borderColor = 'var(--color-tarih)';
    } else if (subject === 'Coğrafya') {
        headerIcon.textContent = '🌍';
        headerText.textContent = 'Coğrafya Sınav Bölümleri';
        startBtn.style.backgroundColor = 'var(--color-cografya)';
        startBtn.style.borderColor = 'var(--color-cografya)';
    } else if (subject === 'Vatandaşlık') {
        headerIcon.textContent = '🏛️';
        headerText.textContent = 'Vatandaşlık Sınav Bölümleri';
        startBtn.style.backgroundColor = 'var(--color-vatandaslik)';
        startBtn.style.borderColor = 'var(--color-vatandaslik)';
    }

    // Find all unique part IDs in the selected subject's question pool
    let pool = [];
    if (subject === 'Tarih') {
        pool = customNotesQuestionsPool;
    } else if (subject === 'Coğrafya') {
        pool = customGeographyQuestionsPool;
    } else if (subject === 'Vatandaşlık') {
        pool = customVatandaslikQuestionsPool;
    }

    const uniqueParts = [...new Set(pool.map(q => q.part || 1))].sort((a, b) => a - b);

    const partNamesMap = {
        'Tarih': {
            1: 'Bölüm 1: Trablusgarp, Balkan, I. Dünya Savaşı & Genelgeler/Misakımilli',
            2: 'Bölüm 2: I. TBMM Dönemi, Kurtuluş Savaşı Cepheleri & Lozan',
            3: 'Bölüm 3: Çok Partili Hayat & İsyanlar, Dış Politika ve İnkılaplar',
            4: 'Bölüm 4: Osmanlı Kültür ve Medeniyeti',
            5: 'Bölüm 5: Dağılma Dönemi Siyasi Gelişmeleri, Islahatlar & Fikir Akımları',
            6: 'Bölüm 6: Osmanlı Kuruluş Dönemi (1299-1453)',
            7: 'Bölüm 7: Osmanlı Yükselme Dönemi (1453-1579)',
            8: 'Bölüm 8: Osmanlı Duraklama ve Gerileme Dönemleri (XVII. & XVIII. Yüzyıl)'
        },
        'Coğrafya': {
            1: 'Bölüm 1: Genel Coğrafya Notları & Kodlamalar',
            2: 'Bölüm 2: Madenler ve Enerji Kaynakları'
        },
        'Vatandaşlık': {
            1: 'Bölüm 1: Temel Hukuk Kavramları & Kişilik ve Haklar',
            2: 'Bölüm 2: Devlet Yapısı & Anayasa Tarihi',
            3: 'Bölüm 3: Yasama, Yürütme ve Yargı Organları',
            4: 'Bölüm 4: İdare Hukuku & İnsan Hakları Hukuku'
        }
    };

    const listElement = document.getElementById("custom-notes-quiz-parts-list");
    listElement.innerHTML = uniqueParts.map(pId => {
        const name = (partNamesMap[subject] && partNamesMap[subject][pId]) || `Bölüm ${pId}: Genel Soru Havuzu`;
        return `
            <label style="display: flex; align-items: flex-start; gap: 0.65rem; color: var(--text-primary); cursor: pointer; font-size: 0.85rem; user-select: none;">
                <input type="checkbox" name="custom-quiz-part" value="${pId}" checked style="margin-top: 0.2rem; transform: scale(1.1); accent-color: var(--color-${keys[subject]});">
                <span>${name}</span>
            </label>
        `;
    }).join('');
}

function toggleAllQuizParts(state) {
    const checkboxes = document.querySelectorAll('input[name="custom-quiz-part"]');
    checkboxes.forEach(cb => cb.checked = state);
}

function startCustomNotesQuizWithParts() {
    const checkboxes = document.querySelectorAll('input[name="custom-quiz-part"]:checked');
    if (checkboxes.length === 0) {
        alert("Lütfen sınava dahil etmek için en az bir bölüm seçin!");
        return;
    }

    const selectedParts = Array.from(checkboxes).map(cb => parseInt(cb.value));
    launchCustomNotesQuiz(customQuizSetupSubject, selectedParts);
}

// Run parts initialization on script load
initQuestionParts();

// === TARİH REHBERİ, OSMANLI TERİMLERİ VE DEFTERLERİ DATABASE ===
const termsDatabase = [
    { name: "Tereke", def: "Ölen kişinin mal varlığı, borçları ve vasiyetinin kaydedildiği miras kayıt defteridir.", info: "Belediye ve adalet işlerinden sorumlu kadı tarafından tutulur. Mirasçıların paylaşımlarını içerir." },
    { name: "Tahrir", def: "Tımar sisteminin uygulandığı eyaletlerdeki nüfus, toprak ve vergi gelirlerinin yazıldığı defterdir.", info: "Nişancı tarafından tutulan bu defterler, devletin vergi ve asker potansiyelini saptamakta temel belgedir." },
    { name: "Esame", def: "Kapıkulu askerlerinin (Yeniçerilerin) isimlerinin, rütbelerinin ve özelliklerinin yazıldığı maaş defteridir.", info: "Maaş (ulufe) ödemeleri bu defterdeki kayıtlara göre yapılırdı." },
    { name: "Ruzname", def: "Günlük divan kayıtlarının, mali işlemlerin veya medreseden mezun olan adayların sırayla yazıldığı defterdir.", info: "Günlük yapılan işlerin ve harcamaların kaydedildiği ruznamçe defterleri hazine işlerinde çok önemlidir." },
    { name: "Mühimme", def: "Divan-ı Hümayun'da görüşülüp karara bağlanan devlet işlerinin ve padişah emirlerinin yazıldığı defterlerdir.", info: "Nişancı denetiminde kâtipler tarafından tutulur. Osmanlı devlet yönetiminin en önemli arşiv kaynağidir." },
    { name: "İhtisap", def: "Çarşı ve pazarda damga, ölçü, tartı denetimi ve esnaf kontrolü karşılığında toplanan belediye vergisidir.", info: "Bu denetimleri yapan görevliye Muhtesip denir. Tüketiciyi korumayı ve haksız rekabeti önlemeyi amaçlar." },
    { name: "İcazetname", def: "Medrese mezunlarına verilen diploma veya lonca teşkilatında kalfalıktan ustalığa geçiş yetki belgesidir.", info: "Osmanlı'da eğitim ve meslek alanında yeterliliği gösteren en temel belgedir." },
    { name: "Gedik", def: "Lonca teşkilatında esnafın iş yeri açma, dükkan işletme ve mesleğini icra etme ruhsatıdır.", info: "Bu ruhsat olmadan hiç kimse çarşıda bağımsız dükkan açamaz veya ticaret yapamazdı." },
    { name: "Narh", def: "Devletin enflasyonu önlemek ve halkı korumak amacıyla temel tüketim maddelerine koyduğu alt ve üst fiyat sınırıdır.", info: "Esnafın belirlenen fiyatın dışına çıkması yasaktır. İaşecilik ve gelenekçilik ilkeleriyle uyumludur." },
    { name: "Kapan", def: "Osmanlı şehirlerinde un, yağ, şeker, tütün gibi tek cins ticaret mallarının toptan satıldığı hallerdir.", info: "Ürünlerin adil dağıtımı ve fiyat kontrolü kapanlarda toplanan kapan emini tarafından yapılırdı." },
    { name: "Mültezim", def: "İltizam sisteminde, devletin vergi toplama hakkını açık artırmayla peşin para ödeyerek satın alan kişidir.", info: "Vergiyi hazineye peşin öder, taşrada halktan kendisi tahsil ederek kar elde etmeyi amaçlar." },
    { name: "Malikane", def: "İltizam sistemindeki vergi toplama ihalesinin mültezime yıllık değil, ömür boyu verilmesi sistemidir.", info: "Hazinenin nakit para ihtiyacını karşılamak için 17. yüzyıldan itibaren yaygınlaştırılmıştır." },
    { name: "Müsadere", def: "Ölen veya suç işleyen/haksız kazanç sağlayan memurların mallarına devletin el koyması sistemidir.", info: "Güçlü ailelerin ortaya çıkmasını ve miras yoluyla feodalleşmeyi önlemeyi amaçlar. II. Mahmut kaldırmıştır." },
    { name: "Cülus", def: "Tahta yeni geçen padişahın kapıkulu askerlerine ve devlet memurlarına dağıttığı tahta çıkış bahşişidir.", info: "İlk kez I. Bayezid (Yıldırım) döneminde dağıtılmış, Fatih döneminde kanunlaşmıştır." },
    { name: "Ulufe", def: "Kapıkulu askerlerine (Yeniçeriler, cebeciler vb.) devlet tarafından üç ayda bir verilen maaştır.", info: "Galebe Divanı'nda yabancı elçilerin huzurunda dağıtılarak devletin mali gücü gövde gösterisi yapılırdı." },
    { name: "Cebelü", def: "Tımar sahiplerinin dirlik gelirleri (Has, zeamet, tımar) karşılığında yetiştirmekle yükümlü olduğu atlı askerdir.", info: "Bu askerlerin tüm masrafları tımar sahibi tarafından karşılanır, hazineye hiçbir yükü olmazdı." },
    { name: "Reaya", def: "Osmanlı toplumunda vergi veren, üretim yapan yönetilen halk sınıfıdır.", info: "Irk veya dil ayrımı olmaksızın tüm Müslüman ve gayrimüslim tebaa bu sınıfa dahildir." },
    { name: "Berat", def: "Padişah tarafından verilen memur atama, unvan veya imtiyaz belgesidir.", info: "Padişahın yürütme yetkisini gösteren resmi bir nişandır." },
    { name: "Hatt-ı Hümayun", def: "Padişahın bizzat kendi el yazısıyla kaleme aldığı resmi emir ve kanun hükmündeki yazılardır.", info: "Padişahın iradesini doğrudan yansıtır ve kesin kanun hükmündedir." },
    { name: "Adaletname", def: "Yöneticilerin halka haksızlık yapmasını önlemek ve halkın haklarını korumak amacıyla padişahın yayınladığı belgedir.", info: "Taşra yönetimindeki suistimalleri engellemek için doğrudan halka hitaben yazılır." }
];

let currentHistorySubMode = 'timeline';
let currentTermsSubMode = 'list';
let termsQuizQuestions = [];
let currentTermsQuizIndex = 0;
let termsQuizScore = 0;

function initHistoryGuideMode() {
    toggleHistorySubMode('timeline');
}

function toggleHistorySubMode(submode) {
    currentHistorySubMode = submode;
    
    // Reset active tab button classes
    document.getElementById("history-tab-timeline").classList.remove("active");
    document.getElementById("history-tab-principles").classList.remove("active");
    document.getElementById("history-tab-osmanli").classList.remove("active");
    document.getElementById("history-tab-terms").classList.remove("active");
    document.getElementById("history-tab-reforms").classList.remove("active");
    document.getElementById("history-tab-emperors").classList.remove("active");
    document.getElementById("history-tab-sultan-quiz").classList.remove("active");
    
    // Reset active content section classes
    document.getElementById("history-submode-timeline").classList.remove("active");
    document.getElementById("history-submode-principles").classList.remove("active");
    document.getElementById("history-submode-osmanli").classList.remove("active");
    document.getElementById("history-submode-terms").classList.remove("active");
    document.getElementById("history-submode-reforms").classList.remove("active");
    document.getElementById("history-submode-emperors").classList.remove("active");
    document.getElementById("history-submode-sultan-quiz").classList.remove("active");
    
    // Set active
    document.getElementById(`history-tab-${submode}`).classList.add("active");
    document.getElementById(`history-submode-${submode}`).classList.add("active");
    
    if (submode === 'timeline') {
        startNewTimelineGame();
    } else if (submode === 'principles') {
        startPrinciplesQuiz();
    } else if (submode === 'osmanli') {
        initOsmanliMode();
    } else if (submode === 'terms') {
        initTermsMode();
    } else if (submode === 'reforms') {
        initReformsMode();
    } else if (submode === 'emperors') {
        initEmperorsMode();
    } else if (submode === 'sultan-quiz') {
        initSultanQuizMode();
    }
}

function initTermsMode() {
    currentTermsSubMode = 'list';
    document.getElementById("terms-tab-list").classList.add("active");
    document.getElementById("terms-tab-quiz").classList.remove("active");
    document.getElementById("terms-submode-list").classList.add("active");
    document.getElementById("terms-submode-quiz").classList.remove("active");
    
    renderTermsList();
}

function toggleTermsSubMode(submode) {
    currentTermsSubMode = submode;
    document.getElementById("terms-tab-list").classList.remove("active");
    document.getElementById("terms-tab-quiz").classList.remove("active");
    document.getElementById("terms-submode-list").classList.remove("active");
    document.getElementById("terms-submode-quiz").classList.remove("active");
    
    if (submode === 'list') {
        document.getElementById("terms-tab-list").classList.add("active");
        document.getElementById("terms-submode-list").classList.add("active");
        renderTermsList();
    } else {
        document.getElementById("terms-tab-quiz").classList.add("active");
        document.getElementById("terms-submode-quiz").classList.add("active");
        startTermsQuiz();
    }
}

function renderTermsList() {
    const listContainer = document.getElementById("terms-cards-list");
    listContainer.innerHTML = termsDatabase.map(term => `
        <div class="lit-card" style="border-left: 4px solid var(--color-tarih);">
            <div class="lit-card-header">
                <div class="lit-title-area">
                    <span class="lit-book-title" style="color: var(--color-tarih);">📖 ${term.name}</span>
                </div>
            </div>
            <p class="lit-card-desc"><strong>Tanımı:</strong> ${term.def}</p>
            <div class="lit-importance-box" style="border-left-color: var(--color-tarih); background-color: rgba(99, 102, 241, 0.03); margin-top: 0.5rem; font-size: 0.85rem;">
                <strong>KPSS Püf Noktası:</strong> ${term.info}
            </div>
        </div>
    `).join('');
}

function startTermsQuiz() {
    termsQuizQuestions = [...termsDatabase];
    // Shuffle
    for (let i = termsQuizQuestions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [termsQuizQuestions[i], termsQuizQuestions[j]] = [termsQuizQuestions[j], termsQuizQuestions[i]];
    }
    
    termsQuizQuestions = termsQuizQuestions.slice(0, 10); // 10 questions
    currentTermsQuizIndex = 0;
    termsQuizScore = 0;
    
    document.getElementById("terms-quiz-box").classList.remove("hidden");
    document.getElementById("terms-results").classList.add("hidden");
    document.getElementById("terms-explanation").classList.add("hidden");
    
    renderTermsQuestion();
}

function renderTermsQuestion() {
    const q = termsQuizQuestions[currentTermsQuizIndex];
    document.getElementById("terms-q-num").textContent = `Soru: ${currentTermsQuizIndex + 1} / 10`;
    document.getElementById("terms-score-correct").textContent = termsQuizScore;
    document.getElementById("terms-question-text").textContent = `"${q.def}" tanımı hangi Osmanlı terimi/defteri ile ilgilidir?`;
    document.getElementById("terms-explanation").classList.add("hidden");
    
    // Choose 3 random wrong answers + 1 correct answer
    let wrongOptions = termsDatabase
        .filter(t => t.name !== q.name)
        .map(t => t.name);
        
    // Shuffle wrong options and pick 3
    for (let i = wrongOptions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [wrongOptions[i], wrongOptions[j]] = [wrongOptions[j], wrongOptions[i]];
    }
    let options = [q.name, ...wrongOptions.slice(0, 3)];
    
    // Shuffle options
    for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
    }
    
    const optionsGrid = document.getElementById("terms-options-grid");
    optionsGrid.innerHTML = options.map(opt => `
        <button class="results-btn secondary-btn" onclick="submitTermsAnswer('${opt.replace(/'/g, "\\'")}')">${opt}</button>
    `).join('');
}

function submitTermsAnswer(userAns) {
    const q = termsQuizQuestions[currentTermsQuizIndex];
    const isCorrect = userAns === q.name;
    
    if (isCorrect) {
        termsQuizScore++;
    }
    
    const buttons = document.querySelectorAll("#terms-options-grid button");
    buttons.forEach(btn => {
        btn.style.pointerEvents = "none";
        if (btn.textContent === q.name) {
            btn.style.backgroundColor = "rgba(16, 185, 129, 0.2)";
            btn.style.borderColor = "var(--color-success)";
        } else if (btn.textContent === userAns) {
            btn.style.backgroundColor = "rgba(239, 68, 68, 0.2)";
            btn.style.borderColor = "var(--color-danger)";
        }
    });
    
    const expBox = document.getElementById("terms-explanation");
    expBox.innerHTML = `<strong>${isCorrect ? '✔️ Doğru!' : '❌ Yanlış!'}</strong> ${q.info}`;
    expBox.classList.remove("hidden");
    
    setTimeout(() => {
        if (currentTermsQuizIndex + 1 < 10) {
            currentTermsQuizIndex++;
            renderTermsQuestion();
        } else {
            showTermsResults();
        }
    }, 2000);
}

function showTermsResults() {
    document.getElementById("terms-quiz-box").classList.add("hidden");
    document.getElementById("terms-results").classList.remove("hidden");
    
    const pct = Math.round((termsQuizScore / 10) * 100);
    document.getElementById("terms-res-pct").textContent = `${pct}%`;
}

// === OSMANLI ISLAHATLARI DATABASE ===
const reformsDatabase = [
    // II. MAHMUT
    { name: "Sened-i İttifak", sultan: "II. Mahmut" },
    { name: "Tımar sisteminin kaldırılması", sultan: "II. Mahmut" },
    { name: "Devlet memurlarına maaş bağlanması", sultan: "II. Mahmut" },
    { name: "Redif birliklerinin kurulması", sultan: "II. Mahmut" },
    { name: "Fes, ceket ve pantolon zorunluluğu", sultan: "II. Mahmut" },
    { name: "Müsadere sisteminin kaldırılması (sınırlandırılması)", sultan: "II. Mahmut" },
    { name: "Posta teşkilatının kurulması", sultan: "II. Mahmut" },
    { name: "Muhtar atamalarının yapılması", sultan: "II. Mahmut" },
    { name: "Divan-ı Hümayun'un kaldırılarak Nazırlıkların kurulması", sultan: "II. Mahmut" },
    { name: "Sadaret Kethüdalığının Dahiliye Nezaretine dönüştürülmesi", sultan: "II. Mahmut" },
    { name: "Reisülküttablığın Hariciye Nezaretine dönüştürülmesi", sultan: "II. Mahmut" },
    { name: "Şeyhülislamlığın Bab-ı Meşihat makamına dönüştürülmesi", sultan: "II. Mahmut" },
    { name: "Hazine-i Amirenin Maliye Nezaretine dönüştürülmesi", sultan: "II. Mahmut" },
    { name: "Sadrazamlığın Başvekalete dönüştürülmesi", sultan: "II. Mahmut" },
    { name: "Sekban-ı Cedit ve Eşkinci Ocaklarının kurulması", sultan: "II. Mahmut" },
    { name: "Yeniçeri Ocağının kaldırılması (Vaka-i Hayriye)", sultan: "II. Mahmut" },
    { name: "Mehter Takımının kapatılarak Mızıka-i Hümayun'un kurulması", sultan: "II. Mahmut" },
    { name: "İlk nüfus sayımının yapılması (askeri amaçlı)", sultan: "II. Mahmut" },
    { name: "Asakir-i Mansure-i Muhammediye ordusunun kurulması", sultan: "II. Mahmut" },
    { name: "Mansure Hazinesinin kurulması", sultan: "II. Mahmut" },
    { name: "Yerli malı kullanımının teşvik edilmesi", sultan: "II. Mahmut" },
    { name: "Balta Limanı Ticaret Antlaşması", sultan: "II. Mahmut" },
    { name: "İlköğretimin (İstanbul'da) zorunlu hale getirilmesi", sultan: "II. Mahmut" },
    { name: "Mekteb-i Tıbbiye, Harbiye ve Adliye'nin açılması", sultan: "II. Mahmut" },
    { name: "Avrupa'ya ilk kez öğrenci gönderilmesi", sultan: "II. Mahmut" },
    { name: "Takvim-i Vekayi (İlk resmi gazete)", sultan: "II. Mahmut" },
    { name: "Karantina uygulamasının başlatılması", sultan: "II. Mahmut" },
    { name: "Mürur Tezkeresi (iç pasaport) uygulaması", sultan: "II. Mahmut" },
    { name: "Seraskerlik makamının kurulması", sultan: "II. Mahmut" },

    // ABDÜLMECİT
    { name: "Tanzimat Fermanı'nın ilanı (1839)", sultan: "Abdülmecit" },
    { name: "Islahat Fermanı'nın ilanı (1856)", sultan: "Abdülmecit" },
    { name: "İlk belediye örgütünün kurulması", sultan: "Abdülmecit" },
    { name: "Zaptiye Teşkilatı'nın (Polis) kurulması", sultan: "Abdülmecit" },
    { name: "Jandarma Teşkilatı'nın kurulması", sultan: "Abdülmecit" },
    { name: "Rüsumat Emaneti'nin kurulması", sultan: "Abdülmecit" },
    { name: "Muhassıllık Meclisleri'nin kurulması", sultan: "Abdülmecit" },
    { name: "Kaime (İlk kağıt para) basılması", sultan: "Abdülmecit" },
    { name: "Mecidiye (Gümüş para) basılması", sultan: "Abdülmecit" },
    { name: "İlk dış borcun alınması (Kırım Savaşı)", sultan: "Abdülmecit" },
    { name: "İlk demiryollarının yapılması", sultan: "Abdülmecit" },
    { name: "Bank-ı Dersaadet (İlk Osmanlı bankası)", sultan: "Abdülmecit" },
    { name: "Şirket-i Hayriye'nin (Vapur şirketi) kurulması", sultan: "Abdülmecit" },
    { name: "Mekteb-i Mülkiye'nin açılması", sultan: "Abdülmecit" },
    { name: "Darülmuallimin (Erkek öğretmen okulu) açılması", sultan: "Abdülmecit" },
    { name: "Darülmaarif'in açılması", sultan: "Abdülmecit" },
    { name: "Heybeliada Ruhban Okulu'nun açılması", sultan: "Abdülmecit" },
    { name: "İlk kız rüştiyesinin açılması", sultan: "Abdülmecit" },
    { name: "Telgraf Mektebi'nin açılması", sultan: "Abdülmecit" },
    { name: "Encümen-i Daniş'in (Bilim heyeti) kurulması", sultan: "Abdülmecit" },
    { name: "Ceride-i Havadis (Yarı resmi gazete)", sultan: "Abdülmecit" },
    { name: "Tercüman-ı Ahval (İlk özel gazete)", sultan: "Abdülmecit" },
    { name: "Muhacirun Kanunnamesi'nin çıkarılması", sultan: "Abdülmecit" },
    { name: "Arazi Kanunnamesi'nin çıkarılması", sultan: "Abdülmecit" },
    { name: "Kuleli Vakası (Kuleli Olayı)", sultan: "Abdülmecit" },

    // ABDÜLAZİZ
    { name: "Avrupa'ya ilk seyahat eden padişah olunması", sultan: "Abdülaziz" },
    { name: "Mekteb-i Sultani'nin (Galatasaray Lisesi) açılması", sultan: "Abdülaziz" },
    { name: "Düstur ve Mirat dergilerinin çıkarılması", sultan: "Abdülaziz" },
    { name: "Bank-ı Osmani-i Şahane'nin kurulması", sultan: "Abdülaziz" },
    { name: "Nizamiye Mahkemeleri'nin kurulması", sultan: "Abdülaziz" },
    { name: "Islah-ı Sanayi Komisyonu'nun kurulması", sultan: "Abdülaziz" },
    { name: "Islahhane Mektebi'nin kurulması", sultan: "Abdülaziz" },
    { name: "Dünyanın 3. büyük deniz donanmasının kurulması", sultan: "Abdülaziz" },
    { name: "Divan-ı Ahkam-ı Adliye'nin (Yargıtay) kurulması", sultan: "Abdülaziz" },
    { name: "Şura-yı Devlet'in (Danıştay) kurulması", sultan: "Abdülaziz" },
    { name: "Divan-ı Ali-i Muhasebat'ın (Sayıştay) kurulması", sultan: "Abdülaziz" },
    { name: "Vilayet Nizamnameleri (1864-1871)", sultan: "Abdülaziz" },
    { name: "Darülfünun'un açılması", sultan: "Abdülaziz" },
    { name: "İlk resim sergisinin açılması (Şeker Ahmet Paşa)", sultan: "Abdülaziz" },
    { name: "Darüşşafaka'nın kurulması", sultan: "Abdülaziz" },
    { name: "Darülmuallimat'ın (Kız öğretmen okulu) açılması", sultan: "Abdülaziz" },
    { name: "Mecelle'nin hazırlanmaya başlanması", sultan: "Abdülaziz" },
    { name: "Memleket Sandıkları'nın kurulması", sultan: "Abdülaziz" },
    { name: "İlk Osmanlı posta pulunun basılması", sultan: "Abdülaziz" },
    { name: "Süveyş Kanalı'nın açılması", sultan: "Abdülaziz" },
    { name: "Sergi-i Umumi-i Osmani'nin açılması", sultan: "Abdülaziz" },

    // II. ABDÜLHAMİT
    { name: "I. ve II. Meşrutiyet'in ilanı / Kanun-ı Esasi", sultan: "II. Abdülhamit" },
    { name: "Darülaceze'nin kurulması", sultan: "II. Abdülhamit" },
    { name: "Sanayi-i Nefise Mektebi'nin açılması", sultan: "II. Abdülhamit" },
    { name: "Darülhayr-ı Ali'nin kurulması", sultan: "II. Abdülhamit" },
    { name: "Himaye-i Etfal Cemiyeti'nin kurulması", sultan: "II. Abdülhamit" },
    { name: "Maarifperver unvanının kullanılması", sultan: "II. Abdülhamit" },
    { name: "Darülfünun'un tam olarak açılması", sultan: "II. Abdülhamit" },
    { name: "Basına sansürün uygulanması (İstibdat)", sultan: "II. Abdülhamit" },
    { name: "Jurnal (Yıldız İstihbarat) Teşkilatı'nın kurulması", sultan: "II. Abdülhamit" },
    { name: "Berlin - Bağdat Demiryolu yapımı", sultan: "II. Abdülhamit" },
    { name: "Hicaz Demiryolu yapımı", sultan: "II. Abdülhamit" },
    { name: "Mecelle'nin uygulanmaya başlanması", sultan: "II. Abdülhamit" },
    { name: "Sirkeci ve Haydarpaşa Garları'nın yapılması", sultan: "II. Abdülhamit" },
    { name: "Hamidiye Etfal Hastanesi'nin kurulması", sultan: "II. Abdülhamit" },
    { name: "Ziraat Bankası'nın kurulması (1888)", sultan: "II. Abdülhamit" },
    { name: "Ertuğrul Fırkateyni faciası/seferi", sultan: "II. Abdülhamit" },
    { name: "Muharrem Kararnamesi'nin ilanı (Mali iflas)", sultan: "II. Abdülhamit" },
    { name: "Düyun-u Umumiye İdaresi'nin kurulması", sultan: "II. Abdülhamit" },
    { name: "Hamidiye Alayları'nın kurulması", sultan: "II. Abdülhamit" },
    { name: "II. Abdülhamit'e Ermeni Suikast Girişimi", sultan: "II. Abdülhamit" },
    { name: "Çırağan Baskını", sultan: "II. Abdülhamit" }
];

let currentReformsSubMode = 'table';
let reformsSearchQuery = '';
let activeReformsGameItems = [];
let selectedReformName = null;
let selectedReformElement = null;
let selectedReformSultan = null;
let selectedSultanName = null;
let selectedSultanElement = null;
let reformsGameMatchedCount = 0;
let isReformsGameBlocked = false;

function initReformsMode() {
    currentReformsSubMode = 'table';
    reformsSearchQuery = '';
    
    document.getElementById("reforms-tab-table").classList.add("active");
    document.getElementById("reforms-tab-match").classList.remove("active");
    
    document.getElementById("reforms-submode-table").classList.add("active");
    document.getElementById("reforms-submode-match").classList.remove("active");
    
    const searchInput = document.getElementById("reforms-search-input");
    if (searchInput) searchInput.value = '';
    
    renderReformsTable();
}

function toggleReformsSubMode(submode) {
    currentReformsSubMode = submode;
    document.getElementById("reforms-tab-table").classList.remove("active");
    document.getElementById("reforms-tab-match").classList.remove("active");
    document.getElementById("reforms-submode-table").classList.remove("active");
    document.getElementById("reforms-submode-match").classList.remove("active");
    
    if (submode === 'table') {
        document.getElementById("reforms-tab-table").classList.add("active");
        document.getElementById("reforms-submode-table").classList.add("active");
        renderReformsTable();
    } else {
        document.getElementById("reforms-tab-match").classList.add("active");
        document.getElementById("reforms-submode-match").classList.add("active");
        startNewReformsMatchGame();
    }
}

function renderReformsTable() {
    const container = document.getElementById("reforms-grid-container");
    if (!container) return;
    
    const sultans = ["II. Mahmut", "Abdülmecit", "Abdülaziz", "II. Abdülhamit"];
    
    const columnsHtml = sultans.map(sultan => {
        const list = reformsDatabase.filter(r => {
            if (r.sultan !== sultan) return false;
            if (reformsSearchQuery === '') return true;
            return r.name.toLowerCase().includes(reformsSearchQuery) || r.sultan.toLowerCase().includes(reformsSearchQuery);
        });
        
        const listItemsHtml = list.map(r => {
            return `<li style="padding: 0.35rem 0.5rem; background-color: var(--bg-secondary); border-radius: var(--border-radius-sm); border: 1px solid var(--border-color); display: flex; align-items: center; gap: 0.5rem;">
                <span style="color: var(--color-tarih); font-weight: bold;">▸</span>
                <span>${r.name}</span>
            </li>`;
        }).join('');
        
        return `
            <div class="lit-card" style="border-left: 4px solid var(--color-tarih); background-color: var(--bg-primary); display: flex; flex-direction: column;">
                <div class="lit-card-header" style="margin-bottom: 0.75rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.5rem;">
                    <span class="lit-book-title" style="color: var(--color-tarih); font-size: 1.1rem; font-weight: 700; text-align: center; width: 100%; display: block;">${sultan}</span>
                </div>
                <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.5rem; flex: 1; max-height: 500px; overflow-y: auto;">
                    ${listItemsHtml || '<li style="text-align: center; color: var(--text-muted); font-size: 0.8rem; padding: 1rem;">Eşleşen ıslahat yok.</li>'}
                </ul>
            </div>
        `;
    }).join('');
    
    container.innerHTML = columnsHtml;
}

function handleReformsSearch() {
    const input = document.getElementById("reforms-search-input");
    if (input) {
        reformsSearchQuery = input.value.toLowerCase().trim();
    }
    renderReformsTable();
}

function startNewReformsMatchGame() {
    // 1. Pick 6 random reforms
    const pool = [...reformsDatabase];
    // Shuffle pool
    for (let i = pool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    
    // Pick 6 reforms and assign a unique game ID (0 to 5) to each
    activeReformsGameItems = pool.slice(0, 6).map((item, idx) => {
        return {
            id: `reform_${idx}`,
            name: item.name,
            sultan: item.sultan
        };
    });
    
    // Shuffled left column (reforms)
    const leftItems = [...activeReformsGameItems];
    for (let i = leftItems.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [leftItems[i], leftItems[j]] = [leftItems[j], leftItems[i]];
    }
    
    // Shuffled right column (sultans for these reforms)
    const rightItems = [...activeReformsGameItems];
    for (let i = rightItems.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [rightItems[i], rightItems[j]] = [rightItems[j], rightItems[i]];
    }
    
    // Render left column
    const leftCol = document.getElementById("reforms-match-left-col");
    leftCol.innerHTML = leftItems.map(item => `
        <div class="game-item" data-id="${item.id}" onclick="selectReformsMatchItem('reform', '${item.id}', this)">
            ${item.name}
        </div>
    `).join('');
    
    // Render right column
    const rightCol = document.getElementById("reforms-match-right-col");
    rightCol.innerHTML = rightItems.map(item => `
        <div class="game-item" style="text-align: center; font-weight: 700;" data-id="${item.id}" onclick="selectReformsMatchItem('sultan', '${item.id}', this)">
            ${item.sultan}
        </div>
    `).join('');
    
    // Reset states
    selectedReformName = null;
    selectedReformElement = null;
    selectedSultanName = null;
    selectedSultanElement = null;
    reformsGameMatchedCount = 0;
    isReformsGameBlocked = false;
    
    document.getElementById("reforms-score-correct").textContent = "0";
    document.getElementById("reforms-score-total").textContent = activeReformsGameItems.length;
    document.getElementById("reforms-match-success-message").classList.add("hidden");
}

function selectReformsMatchItem(type, id, element) {
    if (isReformsGameBlocked) return;
    if (element.classList.contains("correct")) return;
    
    if (type === 'reform') {
        if (selectedReformElement) {
            selectedReformElement.classList.remove("selected");
        }
        selectedReformName = id;
        selectedReformElement = element;
        element.classList.add("selected");
    } else {
        if (selectedSultanElement) {
            selectedSultanElement.classList.remove("selected");
        }
        selectedSultanName = id;
        selectedSultanElement = element;
        element.classList.add("selected");
    }
    
    // If both selected
    if (selectedReformName && selectedSultanName) {
        isReformsGameBlocked = true;
        
        if (selectedReformName === selectedSultanName) {
            // MATCH!
            setTimeout(() => {
                selectedReformElement.classList.remove("selected");
                selectedSultanElement.classList.remove("selected");
                
                selectedReformElement.classList.add("correct");
                selectedSultanElement.classList.add("correct");
                
                reformsGameMatchedCount++;
                document.getElementById("reforms-score-correct").textContent = reformsGameMatchedCount;
                
                selectedReformName = null;
                selectedReformElement = null;
                selectedSultanName = null;
                selectedSultanElement = null;
                isReformsGameBlocked = false;
                
                if (reformsGameMatchedCount === activeReformsGameItems.length) {
                    document.getElementById("reforms-match-success-message").classList.remove("hidden");
                }
            }, 300);
        } else {
            // MISMATCH!
            setTimeout(() => {
                selectedReformElement.classList.add("incorrect");
                selectedSultanElement.classList.add("incorrect");
                
                setTimeout(() => {
                    selectedReformElement.classList.remove("selected", "incorrect");
                    selectedSultanElement.classList.remove("selected", "incorrect");
                    
                    selectedReformName = null;
                    selectedReformElement = null;
                    selectedSultanName = null;
                    selectedSultanElement = null;
                    isReformsGameBlocked = false;
                }, 800);
            }, 300);
        }
    }
}

// === PADİŞAHLAR & OLAYLAR MODÜLÜ ===
let currentEmperorsEra = 'All';

const emperorsDatabase = [
    {
        name: "Osman Bey",
        era: "Kuruluş",
        years: "1299-1326",
        keyFacts: [
            "İlk kadı ataması yapıldı (Dursun Fakih Karacahisar'a atandı).",
            "İlk bakır para (mangır) bastırıldı.",
            "Aşiret yapısından beylik yapısına geçiş adımları atıldı.",
            "Domaniç Beli Savaşı ile Kulacahisar, Yunthisar ve Karacahisar tekfurlardan alındı."
        ],
        warsAndEvents: [
            "<strong>1302 Koyunhisar (Bafeus) Savaşı</strong>: Bizans ile yapılan tarihteki ilk savaştır. Halil İnalcık tarafından beyliğin fiili kuruluşu kabul edilir."
        ]
    },
    {
        name: "Orhan Bey",
        era: "Kuruluş",
        years: "1326-1362",
        keyFacts: [
            "İlk kez 'Sultan' unvanını kullandı.",
            "Divan-ı Hümayun kuruldu, ilk vezir (Alaaddin Paşa) atandı.",
            "Yaya ve Müsellem adıyla ilk düzenli ordu kuruldu.",
            "İlk gümüş para basıldı.",
            "İlk medrese İznik'te açıldı (İlk müderris: Davud-ı Kayseri).",
            "Vakıf teşkilatı kuruldu.",
            "Karamürsel'de ilk Osmanlı tersanesi açıldı."
        ],
        warsAndEvents: [
            "<strong>1326 Bursa'nın Fethi</strong>: Bursa fethedilerek başkent yapıldı.",
            "<strong>1331 İznik & 1337 İzmit Fethi</strong>: Kocaeli yarımadası kontrol altına alındı.",
            "<strong>1345 Karesioğulları Beyliği'nin Alınması</strong>: Anadolu Türk siyasi birliğini sağlamada atılan ilk adımdır, donanma gücü ekledi.",
            "<strong>1353 Çimpe Kalesi'nin Hediye Alınması</strong>: Rumeli'deki ilk toprak parçasıdır. Fethi Süleyman Paşa (Gelibolu Fatihi) yönetmiştir."
        ]
    },
    {
        name: "I. Murat (Hüdavendigar)",
        era: "Kuruluş",
        years: "1362-1389",
        keyFacts: [
            "Rumeli Beylerbeyliği kuruldu (Merkez: Manastır).",
            "Kapıkulu Ocağı (Acemi Ocağı, Yeniçeri Ocağı) kuruldu.",
            "Veziriazamlık, Defterdarlık ve Kazaskerlik makamları kuruldu.",
            "Veraset sistemi ilk kez değiştirildi: Ülke 'padişah ve oğullarınındır' kabul edildi.",
            "Pençik sistemi uygulandı (esirlerin 5'te 1'i orduya)."
        ],
        warsAndEvents: [
            "<strong>1363 Sazlıdere Savaşı</strong>: Edirne fethedildi ve başkent yapıldı.",
            "<strong>1364 Sırpsındığı Savaşı</strong>: İlk Osmanlı-Haçlı savaşı kazanıldı.",
            "Germiyanoğullarından çeyiz yoluyla (Kütahya vb.), Hamitoğullarından satın alma yoluyla toprak alındı.",
            "<strong>1371 Çirmen Savaşı</strong>: Sırplar mağlup edildi.",
            "<strong>1389 I. Kosova Savaşı</strong>: Haçlılar yenildi, savaşta ilk kez top sesinden yararlanıldı. I. Murat savaş meydanını gezerken bir Sırp (Miloş Obiliç) tarafından şehit edildi (Savaş meydanında şehit düşen tek Osmanlı padişahıdır)."
        ]
    },
    {
        name: "Yıldırım Bayezit (I. Bayezit)",
        era: "Kuruluş",
        years: "1389-1402",
        keyFacts: [
            "İstanbul'u 4 kez kuşatan ilk Osmanlı padişahıdır.",
            "Kuşatma için Güzelcehisar (Anadolu Hisarı) ve Gelibolu Tersanesi'ni yaptırdı.",
            "Anadolu Türk birliğini büyük oranda ilk kez sağladı."
        ],
        warsAndEvents: [
            "<strong>1396 Niğbolu Savaşı</strong>: Büyük Haçlı ordusu yenildi. Abbasi Halifesi tarafından 'Sultan-ı İklim-i Rum' unvanı verildi.",
            "<strong>1402 Ankara Savaşı</strong>: Timur'a yenildi, esir düştü. 11 yıllık Fetret Devri başladı."
        ]
    },
    {
        name: "I. Mehmet (Çelebi)",
        era: "Kuruluş",
        years: "1413-1421",
        keyFacts: [
            "Devleti taht kavgalarından ve parçalanmaktan kurtardığı için devletin 'İkinci Kurucusu' kabul edilir.",
            "Şeyh Bedrettin İsyanı (dini-sosyal nitelikli ilk isyan) bastırıldı."
        ],
        warsAndEvents: [
            "Venedik ile ilk deniz savaşı olan <strong>Çalıbey (Lapseki) Savaşı</strong> yapıldı.",
            "Bizans destekli Düzmece Mustafa isyanı bastırıldı."
        ]
    },
    {
        name: "II. Murat",
        era: "Kuruluş",
        years: "1421-1451",
        keyFacts: [
            "Devleti kendi isteğiyle 12 yaşındaki oğlu II. Mehmet'e devrederek feragat eden ilk padişahtır.",
            "Hayır eserlerinden dolayı 'Ebul Hayrat' unvanını almıştır.",
            "Devşirme kanununu ilk kez sistematik uyguladı."
        ],
        warsAndEvents: [
            "<strong>1444 Edirne-Segedin Antlaşması</strong>: Macar/Sırplarla imzalandı (Tuna Nehri sınır).",
            "<strong>1444 Varna Savaşı</strong>: Tahta tekrar geçerek Haçlıları yendi.",
            "<strong>1448 II. Kosova Savaşı</strong>: Haçlılar yenildi. Balkanlar kesin Türk yurdu oldu, savunmadan taarruza geçildi."
        ]
    },
    {
        name: "II. Mehmet (Fatih Sultan Mehmet)",
        era: "Yükselme",
        years: "1451-1481",
        keyFacts: [
            "Sahn-ı Seman medreselerini açtı, ilk altın para bastırıldı.",
            "Verasette ikinci değişikliği yaptı: Ülke 'padişahındır' anlayışını getirdi, kardeş katlini yasallaştırdı.",
            "Kanunname-i Ali Osman ile devlet işlerini kurumsallaştırdı.",
            "Kendi portresini yaptıran ilk Osmanlı padişahıdır.",
            "Şahi toplarını döktürdü, Rumeli Hisarı'nı (Boğazkesen) yaptırdı."
        ],
        warsAndEvents: [
            "<strong>29 Mayıs 1453 İstanbul'un Fethi</strong>: Bizans yıkıldı, Orta Çağ kapandı, Yeni Çağ başladı.",
            "Trabzon Rum İmparatorluğu'na son verildi (1461), Mora fethedildi (Bizans'ın yeniden canlanma umutları söndürüldü).",
            "<strong>1473 Otlukbeli Savaşı</strong>: Akkoyunlular yenildi.",
            "<strong>1474 Kırım'ın Fethi</strong>: Karadeniz Türk gölü oldu, İpek Yolu kontrol altına alındı.",
            "Rodos kuşatıldı ancak alınamadı, 1480 Otranto (İtalya) seferi yapıldı."
        ]
    },
    {
        name: "II. Bayezit",
        era: "Yükselme",
        years: "1481-1512",
        keyFacts: [
            "Safevilerin etkisiyle Antalya civarında çıkan Şahkulu İsyanı bastırıldı.",
            "İspanya'da zulüm gören Müslüman ve Yahudilere yardım edildi."
        ],
        warsAndEvents: [
            "<strong>Cem Sultan Olayı</strong>: İç sorun iken dış soruna dönüştü. Fetihlerin yavaşlamasına ve dönemin duraklama gibi geçmesine sebep oldu."
        ]
    },
    {
        name: "I. Selim (Yavuz Sultan Selim)",
        era: "Yükselme",
        years: "1512-1520",
        keyFacts: [
            "8 yıllık saltanatına 80 yıllık iş sığdıran padişah olarak anılır.",
            "Hazineyi ağzına kadar doldurdu (Hazine kapısını kendi mührüyle mühürledi).",
            "Hadimü'l Haremeyn-i Şerifeyn (Mekke ve Medine'nin hizmetkarı) unvanını aldı.",
            "Ağır vergiler yüzünden ilk Celali isyanı olan Bozoklu Celal isyanı çıktı."
        ],
        warsAndEvents: [
            "<strong>1514 Çaldıran Savaşı</strong>: Safeviler yenilgiye uğratıldı.",
            "<strong>1515 Turnadağ Savaşı</strong>: Dulkadiroğulları beyliği yıkıldı, Anadolu Türk siyasi birliği kesin olarak sağlandı.",
            "<strong>Mısır Seferi (1516 Mercidabık, 1517 Ridaniye)</strong>: Memlük devleti yıkıldı, Baharat yolu ve halifelik Osmanlı'ya geçti."
        ]
    },
    {
        name: "I. Süleyman (Kanuni Sultan Süleyman)",
        era: "Yükselme",
        years: "1520-1566",
        keyFacts: [
            "Osmanlı tahtında en uzun süre (46 yıl) kalan padişahtır.",
            "Fransızlara ilk kez resmi geniş kapitülasyonlar verildi.",
            "Hukuki düzenlemelerinden dolayı Batı'da 'Muhteşem', Doğu'da 'Kanuni' olarak anılır."
        ],
        warsAndEvents: [
            "<strong>1521 Belgrat'ın Fethi</strong> (Darül Cihat).",
            "<strong>1522 Rodos Adası</strong> şövalyelerden alındı.",
            "<strong>1526 Mohaç Meydan Savaşı</strong>: Macaristan 2 saatte yenildi.",
            "<strong>1529 I. Viyana Kuşatması</strong>: Kış şartlarından dolayı başarısız oldu.",
            "<strong>1533 İstanbul Antlaşması</strong>: Avusturya kralı Osmanlı sadrazamına eşit sayıldı (Siyasi üstünlük).",
            "<strong>1538 Preveze Deniz Savaşı</strong>: Barbaros Hayreddin Paşa komutasındaki donanma Haçlıları yendi, Akdeniz Türk gölü oldu.",
            "<strong>1560 Cerbe Deniz Savaşı</strong> kazanıldı. Hint Deniz Seferleri yapıldı.",
            "<strong>1566 Zigetvar Seferi</strong>: Kanuni'nin son seferidir, kuşatma sırasında vefat etmiştir."
        ]
    },
    {
        name: "Genç Osman (II. Osman)",
        era: "Duraklama",
        years: "1618-1622",
        keyFacts: [
            "İlk radikal ıslahatçıdır. Saray dışından evlenerek sarayı halka açtı.",
            "Şeyhülislamın yetkilerini kısıtladı. Başkenti Anadolu'ya taşımak istedi.",
            "Yeniçeri Ocağı'nı kaldırmak istediği duyulunca yeniçeriler tarafından Yedikule zindanlarında öldürüldü."
        ],
        warsAndEvents: [
            "<strong>Hotin Seferi</strong>: Yeniçerilerin isteksizliği üzerine Hotin kalesi alınsa da Yeniçeri Ocağı'nı kaldırma fikri doğdu."
        ]
    },
    {
        name: "IV. Murat",
        era: "Duraklama",
        years: "1623-1640",
        keyFacts: [
            "İçki, tütün ve gece sokağa çıkma yasakları koydu (İstanbul yangınlarını önlemek için). Kahvehaneleri kapattı.",
            "Koçi Bey ve Katip Çelebi'ye devletin bozulma nedenlerini içeren risaleler (raporlar) hazırlattı.",
            "Baskı ve şiddet kullanarak asayişi sağladı."
        ],
        warsAndEvents: [
            "Revan ve Bağdat Seferleri: Bağdat'ı geri aldığı için <strong>'Bağdat Fatihi'</strong> unvanını aldı.",
            "<strong>1639 Kasr-ı Şirin Antlaşması</strong>: İran ile imzalandı, bugünkü Türkiye-İran sınırını büyük oranda çizdi (Zağros Dağları sınır)."
        ]
    },
    {
        name: "III. Ahmet",
        era: "Gerileme",
        years: "1703-1730",
        keyFacts: [
            "Pasarofça antlaşması ile Lale Devri (1718-1730) başladı.",
            "Askeri ıslahat yapılmayan tek dönemdir. Matbaa kuruldu, çiçek aşısı uygulandı, ilk itfaiye (Tulumbacılar) kuruldu.",
            "Lale Devri, Patrona Halil İsyanı ile kanlı bir şekilde sona erdi."
        ],
        warsAndEvents: [
            "<strong>1711 Prut Savaşı</strong>: Ruslar yenilgiye uğratıldı, Azak Kalesi geri alındı. Kaybedilen toprakları geri alma umudu doğdu.",
            "<strong>1718 Pasarofça Antlaşması</strong>: Avusturya'ya Belgrat kaybedildi, toprak koruma ve Lale Devri başladı."
        ]
    },
    {
        name: "III. Selim",
        era: "Gerileme",
        years: "1789-1807",
        keyFacts: [
            "Nizam-ı Cedit ordusunu kurdu, ordunun masrafları için İrad-ı Cedit hazinesini oluşturdu.",
            "Londra'da ilk daimi elçilik açıldı (Yusuf Agah Efendi). İlk devlet matbaası (Matbaa-i Amire) kuruldu.",
            "Kabakçı Mustafa İsyanı ile tahttan indirilerek öldürüldü."
        ],
        warsAndEvents: [
            "Napolyon'un Mısır'ı işgali üzerine Nizam-ı Cedit ordusu <strong>Akka'da</strong> Fransızları mağlup etti (İlk askeri başarı)."
        ]
    },
    {
        name: "II. Mahmut",
        era: "Dağılma",
        years: "1808-1839",
        keyFacts: [
            "Sened-i İttifak'ı imzalayarak Ayanların varlığını tanıdı (Padişah yetkilerini ilk kısıtlayan demokratikleşme belgesi).",
            "Yeniçeri Ocağı'nı kaldırdı (Vaka-i Hayriye, 1826), yerine Asakir-i Mansure-i Muhammediye ordusunu kurdu.",
            "Divan-ı Hümayun'u kaldırdı, yerine Nazırlıkları (Bakanlıkları) kurdu.",
            "Müsadereyi kaldırdı, memurlara maaş ve kıyafet (fes, ceket, pantolon) zorunluluğu getirdi. İlk nüfus sayımını yaptı."
        ],
        warsAndEvents: [
            "Sırp İsyanı ve Yunan İsyanı (<strong>1829 Edirne Antlaşması</strong> ile Yunanistan bağımsız oldu).",
            "Kavalalı Mehmet Ali Paşa İsyanı (Mısır Sorunu).",
            "<strong>1833 Hünkar İskelesi Antlaşması</strong> (Rusya ile, boğazlar sorunu başladı).",
            "<strong>1838 Balta Limanı Antlaşması</strong> (İngiltere ile, Osmanlı açık pazar oldu)."
        ]
    },
    {
        name: "Sultan Abdülmecit",
        era: "Dağılma",
        years: "1839-1861",
        keyFacts: [
            "Tanzimat Fermanı (1839) ve Islahat Fermanı'nı (1856) ilan etti (Osmanlıcılık, hukukun üstünlüğü).",
            "Kaime adıyla ilk kağıt para basıldı, ilk Osmanlı bankası (Bank-ı Dersaadet) açıldı.",
            "İlk erkek öğretmen okulu (Darülmuallimin) ve bilim heyeti (Encümen-i Daniş) kuruldu."
        ],
        warsAndEvents: [
            "<strong>Kırım Savaşı (1853-1856)</strong>: İngiltere'den ilk kez dış borç alındı, telgraf hatları kuruldu. Florence Nightingale yaralılara baktı.",
            "<strong>1856 Paris Antlaşması</strong>: Osmanlı Avrupa devleti sayıldı, toprakları güvence altına alındı."
        ]
    },
    {
        name: "Sultan Abdülaziz",
        era: "Dağılma",
        years: "1861-1876",
        keyFacts: [
            "Avrupa'ya seyahat eden ilk ve tek Osmanlı padişahıdır.",
            "Dünyanın 3. büyük donanmasını oluşturdu. Galatasaray Lisesi açıldı.",
            "Ahmet Cevdet Paşa başkanlığında Mecelle (ilk Türk medeni kanunu) yazılmaya başlandı.",
            "Şura-yı Devlet (Danıştay) ve Divan-ı Ahkam-ı Adliye (Yargıtay) kuruldu."
        ],
        warsAndEvents: [
            "Avrupa seyahati gerçekleştirilerek dış ilişkiler pekiştirildi."
        ]
    },
    {
        name: "II. Abdülhamit",
        era: "Dağılma",
        years: "1876-1909",
        keyFacts: [
            "Jön Türklerin baskısıyla I. Meşrutiyet'i ilan etti ve ilk anayasa Kanun-ı Esasi yürürlüğe girdi.",
            "93 Harbi'ni bahane ederek meclisi kapattı ve 30 yıl sürecek İstibdat Dönemi başladı.",
            "Ziraat Bankası (1888) kuruldu, Düyun-u Umumiye (Genel Borçlar) İdaresi kuruldu (Muharrem Kararnamesi ile).",
            "Darülaceze, Sanayi-i Nefise Mektebi ve Darülfünun kuruldu."
        ],
        warsAndEvents: [
            "<strong>93 Harbi (1877-1878 Osmanlı-Rus Savaşı)</strong>: Berlin Antlaşması ile Sırbistan, Karadağ ve Romanya bağımsız oldu. Kars, Ardahan, Batum Rusya'ya verildi.",
            "II. Meşrutiyet'in ilanı (1908) ve <strong>31 Mart Olayı (1909)</strong>. Hareket Ordusu tarafından tahttan indirildi."
        ]
    }
];

function initEmperorsMode() {
    filterEmperorsEra('All');
}

function filterEmperorsEra(era, btnElement) {
    currentEmperorsEra = era;
    
    // Manage active state of filter buttons
    const filterButtons = document.querySelectorAll("#emperors-era-filters button");
    filterButtons.forEach(btn => btn.classList.remove("active"));
    
    if (btnElement) {
        btnElement.classList.add("active");
    } else {
        // Fallback to "All" button
        const allBtn = document.querySelector("#emperors-era-filters button[onclick*='All']");
        if (allBtn) allBtn.classList.add("active");
    }
    
    renderEmperorsList();
}

function renderEmperorsList() {
    const container = document.getElementById("emperors-list-container");
    if (!container) return;
    
    const filtered = currentEmperorsEra === 'All' 
        ? emperorsDatabase 
        : emperorsDatabase.filter(emp => emp.era === currentEmperorsEra);
        
    if (filtered.length === 0) {
        container.innerHTML = `<p style="text-align: center; color: var(--text-muted); padding: 2rem;">Bu döneme ait padişah kaydı bulunmamaktadır.</p>`;
        return;
    }
    
    const getEraBadgeColor = (era) => {
        switch(era) {
            case 'Kuruluş': return 'background-color: #2e7d32; color: #ffffff;';
            case 'Yükselme': return 'background-color: #f9a825; color: #000000;';
            case 'Duraklama': return 'background-color: #d84315; color: #ffffff;';
            case 'Gerileme': return 'background-color: #1565c0; color: #ffffff;';
            case 'Dağılma': return 'background-color: #37474f; color: #ffffff;';
            default: return 'background-color: var(--color-primary); color: #ffffff;';
        }
    };
    
    container.innerHTML = filtered.map(emp => `
        <div class="emperor-card" style="border: 1px solid var(--border-color); border-radius: var(--border-radius-md); background-color: var(--bg-primary); padding: 1.5rem; box-shadow: 0 2px 4px rgba(0,0,0,0.05); transition: transform 0.2s;">
            <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid var(--border-color); padding-bottom: 0.75rem; margin-bottom: 1rem; flex-wrap: wrap; gap: 0.5rem;">
                <h3 style="margin: 0; color: var(--text-primary); font-size: 1.2rem; font-weight: 700;">
                    👑 ${emp.name} <span style="font-size: 0.9rem; color: var(--text-muted); font-weight: normal; margin-left: 0.5rem;">(${emp.years})</span>
                </h3>
                <span style="font-size: 0.75rem; font-weight: 700; padding: 0.25rem 0.6rem; border-radius: 12px; text-transform: uppercase; ${getEraBadgeColor(emp.era)}">
                    ${emp.era} Dönemi
                </span>
            </div>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem;">
                <div>
                    <h4 style="margin: 0 0 0.5rem 0; color: var(--color-success); font-size: 0.95rem; font-weight: 700; display: flex; align-items: center; gap: 0.25rem;">
                        📋 Önemli Bilgiler & Teşkilatlanma
                    </h4>
                    <ul style="margin: 0; padding-left: 1.2rem; font-size: 0.85rem; color: var(--text-secondary); line-height: 1.5;">
                        ${emp.keyFacts.map(fact => `<li style="margin-bottom: 0.4rem;">${fact}</li>`).join('')}
                    </ul>
                </div>
                
                <div>
                    <h4 style="margin: 0 0 0.5rem 0; color: var(--color-danger); font-size: 0.95rem; font-weight: 700; display: flex; align-items: center; gap: 0.25rem;">
                        ⚔️ Savaşlar & Siyasi Gelişmeler
                    </h4>
                    <ul style="margin: 0; padding-left: 1.2rem; font-size: 0.85rem; color: var(--text-secondary); line-height: 1.5;">
                        ${emp.warsAndEvents.map(event => `<li style="margin-bottom: 0.4rem;">${event}</li>`).join('')}
                    </ul>
                </div>
            </div>
        </div>
    `).join('');
}

// === TARİH REHBERİ: PADİŞAHINI SEÇ (İLKLER, SAVAŞLAR & YENİLİKLER TESTİ) ===
const sultanQuizDatabase = [
    // --- KURULUŞ DÖNEMİ ---
    { q: "İlk kadı ataması (Dursun Fakih Karacahisar'a atanmıştır)", sultan: "Osman Bey", category: "İlk & Teşkilatlanma", era: "Kuruluş", info: "Osmanlı'nın ilk kadısı ve ilk imamı Dursun Fakih'tir; Osman Bey döneminde Karacahisar'a tayin edilmiştir." },
    { q: "İlk Osmanlı bakır parasının (Mangır) bastırılması", sultan: "Osman Bey", category: "İlk & Teşkilatlanma", era: "Kuruluş", info: "Osmanlı'da bağımsızlığın sembolü olan ilk bakır para Osman Bey döneminde basılmıştır." },
    { q: "Bizans ile yapılan tarihteki ilk savaş olan Koyunhisar (Bafeus) Savaşı (1302)", sultan: "Osman Bey", category: "Savaş & Olay", era: "Kuruluş", info: "Bizans tekfurlarına karşı kazanılan ilk büyük zaferdir. Halil İnalcık beyliğin gerçek kuruluşunu bu savaşa dayandırır." },
    { q: "İlk Osmanlı vergisi olan 'Baç Vergisi'nin (Pazar vergisi) konulması", sultan: "Osman Bey", category: "İlk & Teşkilatlanma", era: "Kuruluş", info: "Pazar esnafından alınan ilk şer'i/örfi pazar vergisi Baç vergisidir ve Osman Bey tarafından getirilmiştir." },
    { q: "İlk Osmanlı gümüş parasının (Akçe) bastırılması ve Bursa'nın fethedilerek başkent yapılması", sultan: "Orhan Bey", category: "İlk & Teşkilatlanma", era: "Kuruluş", info: "Orhan Bey 1326'da Bursa'yı fethedip başkent yapmış ve ilk gümüş akçeyi kestirmiştir." },
    { q: "İlk Osmanlı medresesinin açılması (İznik Orhaniyesi)", sultan: "Orhan Bey", category: "İlk & Teşkilatlanma", era: "Kuruluş", info: "İznik fethedildikten sonra ilk medrese açılmış, ilk müderris olarak Davud-ı Kayseri atanmıştır." },
    { q: "İlk düzenli ordunun kurulması (Yaya ve Müsellem birlikleri)", sultan: "Orhan Bey", category: "İlk & Teşkilatlanma", era: "Kuruluş", info: "Gönüllü alplardan düzenli askeri sisteme geçiş Orhan Bey ve veziri Alaeddin Paşa öncülüğünde gerçekleşmiştir." },
    { q: "Karesioğulları Beyliği'nin alınması (İlk donanma ve ATSB yolundaki ilk adım)", sultan: "Orhan Bey", category: "Savaş & Olay", era: "Kuruluş", info: "Karesioğulları'nın alınmasıyla Osmanlı ilk kez donanma gücüne kavuşmuş, Rumeli'ye geçiş kolaylaşmış ve ATSB'nin ilk adımı atılmıştır." },
    { q: "Rumeli'deki ilk toprak parçası olan Çimpe Kalesi'nin üs olarak alınması (1353)", sultan: "Orhan Bey", category: "Savaş & Olay", era: "Kuruluş", info: "Bizans İmparatoru Kantakuzen'e yapılan yardım karşılığında Gelibolu'daki Çimpe Kalesi üs olarak hediye alınmıştır." },
    { q: "İlk Divan-ı Hümayun'un kurulması ve ilk vezirlik (Alaeddin Paşa) makamının oluşturulması", sultan: "Orhan Bey", category: "İlk & Teşkilatlanma", era: "Kuruluş", info: "Devlet teşkilatlanmasının temeli olan Divan teşkilatı ve vezirlik makamı Orhan Bey döneminde ihdas edilmiştir." },
    { q: "Haçlılar ile yapılan ilk savaş olan Sırpsındığı Savaşı (1364)", sultan: "I. Murat", category: "Savaş & Olay", era: "Kuruluş", info: "Edirne'nin fethi sonrası Papa'nın teşvikiyle toplanan Haçlı ordusu Hacı İlbeyi komutasında gece baskınıyla yok edilmiştir." },
    { q: "İlk veraset değişikliği yapılarak 'Ülke hükümdar ve oğullarınındır' kuralının getirilmesi", sultan: "I. Murat", category: "İlk & Teşkilatlanma", era: "Kuruluş", info: "I. Murat, eski Türk verasetindeki 'ülke hanedanın ortak malıdır' anlayışını daraltarak merkezi otoriteyi güçlendirmiştir." },
    { q: "Kapıkulu Ocağı, Yeniçeri Ocağı ve Pençik Sistemi'nin kurulması", sultan: "I. Murat", category: "İlk & Teşkilatlanma", era: "Kuruluş", info: "Kazasker Çandarlı Kara Halil'in tavsiyesiyle savaş esirlerinin 1/5'inin orduya alındığı Pençik sistemi ve Yeniçeri Ocağı kurulmuştur." },
    { q: "İlk Defterdarlık ve Kazaskerlik makamlarının kurulması ile Rumeli Beylerbeyliği'nin (Manastır) ihdası", sultan: "I. Murat", category: "İlk & Teşkilatlanma", era: "Kuruluş", info: "I. Murat teşkilatlanmayı genişletmiş, Rumeli Beylerbeyliği'ni kurup başına Lala Şahin Paşa'yı atamıştır." },
    { q: "Savaş meydanında şehit düşen ilk ve tek Osmanlı padişahı (I. Kosova Savaşı - 1389)", sultan: "I. Murat", category: "Savaş & Olay", era: "Kuruluş", info: "I. Kosova zaferinin ardından savaş alanını gezerken yaralı Sırp soylusu Milos Obilic tarafından hançerlenerek şehit edilmiştir." },
    { q: "Niğbolu Savaşı (1396) zaferi üzerine Halife tarafından 'Sultan-ı İklim-i Rum' unvanı verilen padişah", sultan: "Yıldırım Bayezid", category: "Savaş & Olay", era: "Kuruluş", info: "Abbasi halifesi I. Mütevekkil, büyük Haçlı ordusunu imha eden Yıldırım Bayezid'e Anadolu Sultanı unvanını vermiştir." },
    { q: "İstanbul'u ilk kez kuşatan Osmanlı padişahı ve Anadolu Hisarı'nı (Güzelcehisar) yaptıran padişah", sultan: "Yıldırım Bayezid", category: "Savaş & Olay", era: "Kuruluş", info: "İstanbul'u 4 kez kuşatan Yıldırım Bayezid, boğazın kontrolü için Anadolu Hisarı'nı inşa ettirmiştir." },
    { q: "Ankara Savaşı (1402) ile Timur'a esir düşen ve 11 yıllık Fetret Devri'ne neden olan padişah", sultan: "Yıldırım Bayezid", category: "Savaş & Olay", era: "Kuruluş", info: "Ankara Savaşı'nda esir düşmüş, beylikler yeniden kurulmuş ve 1402-1413 arası Fetret Devri yaşanmıştır." },
    { q: "Fetret Devri'ne son vererek devleti toparlayan ve 'Devletin İkinci Kurucusu' sayılan padişah", sultan: "Çelebi Mehmet", category: "İlk & Teşkilatlanma", era: "Kuruluş", info: "Kardeşleri İsa, Musa ve Süleyman'ı bertaraf ederek birliği sağladığı için devletin ikinci kurucusu kabul edilir." },
    { q: "Venedik ile yapılan ilk deniz savaşı (Çalı Bey Savaşı / 1416) ve Şeyh Bedrettin İsyanı", sultan: "Çelebi Mehmet", category: "Savaş & Olay", era: "Kuruluş", info: "Osmanlı donanması Venedik'e yenilse de ilk deniz savaşı yapılmış; tarihin ilk sosyo-dini isyanı Şeyh Bedrettin bastırılmıştır." },
    { q: "Haçlılar ile imzalanan ilk resmi barış antlaşması: Edirne-Segedin Antlaşması (1444)", sultan: "II. Murat", category: "Antlaşma & Diplomasi", era: "Kuruluş", info: "Macarlarla 10 yıl savaşmama şartıyla imzalanmış, ardından II. Murat tahtı 12 yaşındaki oğlu II. Mehmet'e bırakmıştır." },
    { q: "Balkanların kesin Türk yurdu olduğunu tescilleyen II. Kosova Savaşı (1448)", sultan: "II. Murat", category: "Savaş & Olay", era: "Kuruluş", info: "Avrupalıların Türkleri Balkanlar'dan atma ümidi tamamen sona ermiş ve Osmanlı savunmadan taarruza geçmiştir." },
    { q: "Tarihteki ilk Yeniçeri isyanı olan Buçuktepe İsyanı hangi padişah döneminde gerçekleşmiştir?", sultan: "II. Murat", category: "Savaş & Olay", era: "Kuruluş", info: "1446 yılında genç padişah II. Mehmet'e karşı çıkan ilk asker ayaklanması sonucu II. Murat tekrar tahta davet edilmiştir." },

    // --- YÜKSELME DÖNEMİ ---
    { q: "İstanbul'u fethederek Orta Çağ'ı kapatıp Yeni Çağ'ı açan padişah", sultan: "Fatih Sultan Mehmet", category: "Savaş & Olay", era: "Yükselme", info: "29 Mayıs 1453'te İstanbul fethedilmiş, Bizans yıkılmış ve Fatih 'Kayser-i Rum' unvanını almıştır." },
    { q: "Kardeş katlini devletin bekası için yasallaştıran Kanunname-i Ali Osman'ı yayımlayan padişah", sultan: "Fatih Sultan Mehmet", category: "İlk & Teşkilatlanma", era: "Yükselme", info: "Kanunname-i Ali Osman ile kardeş katli, müsadere, cülus ve divan başkanlığı kanunlaştırılmıştır." },
    { q: "Kırım'ı fethederek Karadeniz'i bir 'Türk Gölü' haline getiren padişah", sultan: "Fatih Sultan Mehmet", category: "Savaş & Olay", era: "Yükselme", info: "Gedik Ahmet Paşa komutasındaki donanma 1475'te Kırım'ı almış ve İpek Yolu kontrolü Osmanlı'ya geçmiştir." },
    { q: "İlk altın paranın (Sultani / Sikke-i Hasene) bastırılması", sultan: "Fatih Sultan Mehmet", category: "İlk & Teşkilatlanma", era: "Yükselme", info: "Ekonomik gücün ve zenginliğin göstergesi olarak ilk altın sikke Fatih döneminde basılmıştır." },
    { q: "Devlet adamlarının mallarına el koyma usulü olan 'Müsadere Sistemi'ni ilk kez uygulayan (Çandarlı Halil Paşa)", sultan: "Fatih Sultan Mehmet", category: "İlk & Teşkilatlanma", era: "Yükselme", info: "Merkezi otoriteyi tek elde toplamak amacıyla köklü Çandarlı ailesinin mallarına el koydurmuştur." },
    { q: "Divan-ı Hümayun başkanlığını Sadrazamlara devreden ve Kasr-ı Adil penceresinden divanı izleyen padişah", sultan: "Fatih Sultan Mehmet", category: "İlk & Teşkilatlanma", era: "Yükselme", info: "Sadrazamların daha rahat karar alabilmesi ve padişahın mutlak otoritesini korumak için divan başkanlığı sadrazama devredilmiştir." },
    { q: "Akkoyunlu Devleti hükümdarı Uzun Hasan'ın yenilgiye uğratıldığı Otlukbeli Savaşı (1473)", sultan: "Fatih Sultan Mehmet", category: "Savaş & Olay", era: "Yükselme", info: "Doğu Anadolu'nun güvenliği sağlanmış ve Akkoyunlu devleti yıkılış sürecine girmiştir." },
    { q: "Topkapı Sarayı'nı inşa ettiren ve yükseköğretim kurumu Sahn-ı Seman Medreselerini kuran padişah", sultan: "Fatih Sultan Mehmet", category: "İlk & Teşkilatlanma", era: "Yükselme", info: "Devletin yaklaşık 400 yıl idare edildiği Topkapı Sarayı ve dönemin en ileri üniversitesi Sahn-ı Seman kurulmuştur." },
    { q: "İç sorun iken Rodos Şövalyeleri ve Papa'nın müdahalesiyle dış sorun haline gelen Cem Sultan Olayı", sultan: "II. Bayezit", category: "Savaş & Olay", era: "Yükselme", info: "Cem Sultan'ın esareti sebebiyle Batı seferleri durmuş, bu dönem 'Yükselme içinde duraklama' olarak anılmıştır." },
    { q: "Safevi Devleti kışkırtmasıyla Antalya yöresinde çıkan Şahkulu Baba Tekeli İsyanı", sultan: "II. Bayezit", category: "Savaş & Olay", era: "Yükselme", info: "Şii nitelikli bu büyük isyan güçlükle bastırılmış ve Yavuz'un babasına karşı taht mücadelesini tetiklemiştir." },
    { q: "Olağanüstü hallerde toplanan Avarız Vergisini ilk kez uygulamaya koyan padişah (1509 Küçük Kıyamet Depremi)", sultan: "II. Bayezit", category: "İlk & Teşkilatlanma", era: "Yükselme", info: "Büyük İstanbul depreminde şehir yeniden inşa edilirken hane başına Avarız vergisi toplanmıştır." },
    { q: "Safevi Şahı İsmail'i mağlup ederek Doğu Anadolu ve Şii tehlikesini önleyen Çaldıran Savaşı (1514)", sultan: "Yavuz Sultan Selim", category: "Savaş & Olay", era: "Yükselme", info: "Topçu ve tüfekli birliklerin üstünlüğüyle Safeviler ezilmiş, Doğu Anadolu güvenceye alınmıştır." },
    { q: "Dulkadiroğulları Beyliği'ne son verilerek Anadolu Türk Siyasi Birliğinin (ATSB) KESİN olarak sağlandığı Turnadağ Savaşı (1515)", sultan: "Yavuz Sultan Selim", category: "Savaş & Olay", era: "Yükselme", info: "Turnadağ Savaşı ile Anadolu'daki son beylik de Osmanlı'ya katılmış ve ATSB kesinleşmiştir." },
    { q: "Memlük Devleti'nin yıkıldığı, Suriye, Filistin ve Mısır'ın fethedildiği Mercidabık (1516) ve Ridaniye (1517) Savaşları", sultan: "Yavuz Sultan Selim", category: "Savaş & Olay", era: "Yükselme", info: "Memlükler yıkılmış, Hicaz Osmanlı'ya bağlanmış ve Halifelik Osmanlı hanedanına geçmiştir." },
    { q: "Osmanlı Hazine-i Hümayun'unu tek başına ağzına kadar altınla doldurup kendi mührüyle mühürleten padişah", sultan: "Yavuz Sultan Selim", category: "İlk & Teşkilatlanma", era: "Yükselme", info: "'Torunlarımdan her kim hazineyi benim kadar doldurursa mühür onundur, yoksa hazine benim mührümle mühürlensin' vasiyeti vardır." },
    { q: "Avrupa seferlerinin kilit üssü olan Belgrad'ı (1521) ve Rodos adasını (1522) fetheden padişah", sultan: "Kanuni Sultan Süleyman", category: "Savaş & Olay", era: "Yükselme", info: "Orta Avrupa kapıları Belgrad'ın fethiyle açılmış, Doğu Akdeniz güvenliği Rodos'la pekişmiştir." },
    { q: "Tarihin en kısa süren (yaklaşık 2 saat) meydan savaşı olan ve Macaristan'ı fetheden Mohaç Meydan Muharebesi (1526)", sultan: "Kanuni Sultan Süleyman", category: "Savaş & Olay", era: "Yükselme", info: "Kral II. Layoş yenilmiş ve Macar Krallığı Osmanlı'ya bağlı bir krallık haline gelmiştir." },
    { q: "Avusturya kralının protokolde Osmanlı Sadrazamına denk sayıldığı 1533 İstanbul (İbrahim Paşa) Antlaşması", sultan: "Kanuni Sultan Süleyman", category: "Antlaşma & Diplomasi", era: "Yükselme", info: "Osmanlı, Avrupa diplomasisinde müthiş bir siyasi ve protokol üstünlüğü elde etmiştir." },
    { q: "Barbaros Hayreddin Paşa'nın Haçlı donanmasını yenerek Akdeniz'i Türk Gölü haline getirdiği Preveze Deniz Zaferi (1538)", sultan: "Kanuni Sultan Süleyman", category: "Savaş & Olay", era: "Yükselme", info: "Andrea Doria komutasındaki Haçlı donanması hezimete uğratılmış ve Akdeniz hâkimiyeti kesinleşmiştir. Günümüzde Donanma Günüdür." },
    { q: "İran (Safeviler) ile imzalanan tarihteki İLK resmi barış antlaşması: 1555 Amasya Antlaşması", sultan: "Kanuni Sultan Süleyman", category: "Antlaşma & Diplomasi", era: "Yükselme", info: "Irak, Tebriz ve Doğu Anadolu Osmanlı egemenliğinde kalmış, ilk resmi Osmanlı-İran antlaşması olmuştur." },
    { q: "Ordunun başında sefere çıkma geleneğini terk eden ilk padişah ve Kıbrıs'ın fethedildiği dönem", sultan: "II. Selim", category: "İlk & Teşkilatlanma", era: "Yükselme", info: "Devlet işlerini damadı Sadrazam Sokullu Mehmet Paşa yürütmüş, Lala Mustafa Paşa 1571'de Kıbrıs'ı fethetmiştir." },
    { q: "Osmanlı donanmasının tarihte İLK kez yakıldığı İnebahtı Deniz Bozgunu (1571)", sultan: "II. Selim", category: "Savaş & Olay", era: "Yükselme", info: "Kıbrıs'ın fethine misilleme olarak Haçlı donanması İnebahtı'da Osmanlı donanmasını yakmıştır." },

    // --- DURAKLAMA DÖNEMİ ---
    { q: "Osmanlı'nın Doğu'da en geniş sınırlara ulaştığı Ferhat Paşa Antlaşması (1590) hangi padişah dönemindedir?", sultan: "III. Murat", category: "Antlaşma & Diplomasi", era: "Duraklama", info: "İran (Safeviler) ile imzalanmış; Azerbaycan, Gürcistan ve Dağıstan alınarak Hazar Denizi'ne ulaşılmıştır." },
    { q: "Fas'ın Osmanlı himayesine girdiği ve Portekiz sömürgeciliğinin darbe aldığı Vadi'üs-Seyl (Üç Kral) Savaşı (1578)", sultan: "III. Murat", category: "Savaş & Olay", era: "Duraklama", info: "Ramazan Paşa komutasında kazanılan zaferle Fas Osmanlı nüfuzuna girmiş ve Atlas Okyanusu'na ulaşılmıştır." },
    { q: "Sancağa çıkma usulünü kaldıran ve yerine 'Kafes Usulü / Şimşirlik' sistemini getiren padişah", sultan: "III. Mehmet", category: "İlk & Teşkilatlanma", era: "Duraklama", info: "Sancağa çıkan son padişah III. Mehmet'tir; şehzadelerin taşrada tecrübe kazanması bitmiş, sarayda tecrit başlamıştır." },
    { q: "Avusturya'ya karşı kazanılan son büyük meydan savaşı olan Haçova Meydan Savaşı (1596 - Eğri Fatihi)", sultan: "III. Mehmet", category: "Savaş & Olay", era: "Duraklama", info: "III. Mehmet bizzat sefere çıkmış ve 'Eğri Fatihi' unvanını almıştır." },
    { q: "Veraset sisteminde son değişikliği yaparak 'Ekber ve Erşed' (En yaşlı ve olgun üye) kuralını getiren padişah", sultan: "I. Ahmet", category: "İlk & Teşkilatlanma", era: "Duraklama", info: "Taht kavgalarını ve kardeş katlini önlemek amacıyla hanedanın en yaşlı ve olgun üyesinin tahta geçmesi kuralı getirilmiştir." },
    { q: "1533 İstanbul Antlaşması ile kazanılan protokol üstünlüğünün kaybedildiği ve eşitlik ilkesine dönülen 1606 Zitvatorok Antlaşması", sultan: "I. Ahmet", category: "Antlaşma & Diplomasi", era: "Duraklama", info: "Avusturya kralı protokolde sadrazama değil, doğrudan Osmanlı padişahına denk sayılmıştır." },
    { q: "Mimar Sedefkar Mehmet Ağa'ya Avrupa'da 'Blue Mosque (Mavi Cami)' olarak bilinen Sultanahmet Camii'ni yaptıran padişah", sultan: "I. Ahmet", category: "İlk & Teşkilatlanma", era: "Duraklama", info: "İstanbul'un ilk 6 minareli camisidir ve devrin en muazzam mimari eserlerindendir." },
    { q: "İlk köklü ıslahat girişimini başlatan, saray dışından evlenen ve yeniçeriler tarafından şehit edilen ilk padişah", sultan: "Genç Osman (II. Osman)", category: "Islahat & Yenilik", era: "Duraklama", info: "Hotin Seferi'ndeki disiplinsizlikleri görüp Yeniçeri Ocağı'nı kaldırmak ve başkenti Anadolu'ya taşımak istemiştir." },
    { q: "Bağdat Fatihi unvanını alan ve bugünkü Türkiye-İran sınırını çizen 1639 Kasr-ı Şirin Antlaşması'nı imzalayan padişah", sultan: "IV. Murat", category: "Antlaşma & Diplomasi", era: "Duraklama", info: "Bağdat ve Revan'ı geri almış; Zağros Dağları sınır kabul edilerek bugünkü İran sınırımızın temeli atılmıştır." },
    { q: "İlk kez içki, tütün yasağı ve gece sokağa çıkma yasağı koyan, Koçi Bey ve Katip Çelebi'ye risaleler hazırlatan padişah", sultan: "IV. Murat", category: "Islahat & Yenilik", era: "Duraklama", info: "Sert disiplini ve otoriter yönetimiyle İstanbul'daki asayişi sağlamış, ilk kez şeyhülislam (Ahizade Hüseyin) idam ettirmiştir." },
    { q: "30 devlet adamının Sultanahmet meydanındaki çınar ağacına asıldığı Vaka-i Vakvakiye (Çınar Vakası) hangi padişah dönemindedir?", sultan: "IV. Mehmet", category: "Savaş & Olay", era: "Duraklama", info: "Yeniçerilerin saraya sunduğu listedeki devlet adamları asılmış, bu olaya meyvesi insan olan ağaçtan esinle Vakvak denmiştir." },
    { q: "Osmanlı'nın Batı'da en geniş sınırlara ulaştığı Bucaş Antlaşması (1672) hangi padişah döneminde imzalanmıştır?", sultan: "IV. Mehmet", category: "Antlaşma & Diplomasi", era: "Duraklama", info: "Lehistan'dan Podolya ve Kamaniçe alınarak Batı'da en geniş kara sınırına ulaşılmıştır." },
    { q: "Rusya ile imzalanan İLK resmi antlaşma olan 1681 Bahçesaray (Çehrin) Antlaşması", sultan: "IV. Mehmet", category: "Antlaşma & Diplomasi", era: "Duraklama", info: "Merzifonlu Kara Mustafa Paşa'nın Çehrin kalesini alması sonrası imzalanan ilk Türk-Rus antlaşmasıdır." },
    { q: "Saray şartlar sunarak sadrazamlığa gelen Köprülü Mehmet Paşa ve Köprülüler Dönemi hangi padişah zamanında başlamıştır?", sultan: "IV. Mehmet", category: "İlk & Teşkilatlanma", era: "Duraklama", info: "Köprülü Mehmet Paşa can ve icraat güvencesi alarak göreve gelmiş, duraklama içinde yükselme dönemi yaşatmıştır." },
    { q: "İlk kez modern anlamda denk bütçe (Tarhuncu Bütçesi) hazırlayan Tarhuncu Ahmet Paşa hangi padişahın sadrazamıdır?", sultan: "IV. Mehmet", category: "Islahat & Yenilik", era: "Duraklama", info: "Saray masraflarını kısıp gelir-gider dengesini kuran ilk bütçedir." },
    { q: "Merzifonlu Kara Mustafa Paşa'nın başarısız olduğu II. Viyana Kuşatması (1683) hangi padişah dönemindedir?", sultan: "IV. Mehmet", category: "Savaş & Olay", era: "Duraklama", info: "Lehistan Kralı Jan Sobieski'nin arkadan vurmasıyla bozgun yaşanmış ve Kutsal İttifak kurulmuştur." },
    { q: "Batı'da ilk kez çok büyük toprak kaybedilen ve Gerileme Dönemi'ni başlatan 1699 Karlofça Antlaşması", sultan: "II. Mustafa", category: "Antlaşma & Diplomasi", era: "Duraklama", info: "Avusturya, Venedik ve Lehistan ile imzalanmış; Macaristan, Mora ve Podolya kaybedilmiştir." },
    { q: "Rusya'nın ilk kez Karadeniz'e inmesine ve Azak Kalesi'ni almasına neden olan 1700 İstanbul Antlaşması", sultan: "II. Mustafa", category: "Antlaşma & Diplomasi", era: "Duraklama", info: "Karlofça'nın devamı niteliğindedir. Rusya İstanbul'da elçi bulundurma hakkı elde etmiştir." },

    // --- GERİLEME DÖNEMİ ---
    { q: "1718 Pasarofça Antlaşması ile başlayıp 1730 Patrona Halil İsyanı ile sona eren Lale Devri padişahı", sultan: "III. Ahmet", category: "Islahat & Yenilik", era: "Gerileme", info: "Sadrazamı Nevşehirli Damat İbrahim Paşa, şairi Nedim'dir. Batı'nın üstünlüğü ilk kez kabul edilmiştir." },
    { q: "İlk geçici Türk elçisi olarak 28 Mehmet Çelebi'nin Paris'e gönderilmesi ve Sefaretname yazması", sultan: "III. Ahmet", category: "Antlaşma & Diplomasi", era: "Gerileme", info: "Avrupa'nın askeri, teknik ve kültürel kurumlarını inceleyip raporlaması için Lale Devri'nde gönderilmiştir." },
    { q: "İlk Müslüman Türk matbaasının kurulması (İbrahim Müteferrika & Sait Efendi)", sultan: "III. Ahmet", category: "Islahat & Yenilik", era: "Gerileme", info: "Şeyhülislam Abdullah Efendi dini kitaplar hariç fetva vermiş, ilk basılan eser Vankulu Lügati olmuştur." },
    { q: "Yeniçerilerden Tulumbacılar Ocağı adıyla ilk itfaiye teşkilatının kurulması ve çiçek aşısının uygulanması", sultan: "III. Ahmet", category: "Islahat & Yenilik", era: "Gerileme", info: "Gerçek Davut önderliğinde tulumbacılar ocağı kurulmuş, İran'dan getirilen çiçek aşısı uygulanmıştır." },
    { q: "Batı tarzında açılan İLK askeri teknik okul olan Hendesehane (1734)", sultan: "I. Mahmut", category: "Islahat & Yenilik", era: "Gerileme", info: "Askeri ıslahatlarda Batı'nın örnek alındığı ilk kurumdur." },
    { q: "Fransız asıllı Comte de Bonneval'i (Humbaracı Ahmet Paşa) getirerek Humbaracı Ocağı'nı ıslah ettiren padişah", sultan: "I. Mahmut", category: "Islahat & Yenilik", era: "Gerileme", info: "İlk yabancı uzman transferidir; Bonneval Müslüman olup Ahmet adını almıştır." },
    { q: "Osmanlı'nın 18. yüzyıldaki SON kazançlı antlaşması olan ve Karadeniz'in Türk gölü olduğunu son kez tescilleyen 1739 Belgrat Antlaşması", sultan: "I. Mahmut", category: "Antlaşma & Diplomasi", era: "Gerileme", info: "Avusturya ve Rusya'ya karşı kazanılan zafer sonrası imzalanmış, Belgrat geri alınmıştır." },
    { q: "1740 yılında Fransa'ya verilen kapitülasyonları padişahların ömrüyle sınırlı olmaktan çıkarıp SÜREKLİ hale getiren padişah", sultan: "I. Mahmut", category: "Antlaşma & Diplomasi", era: "Gerileme", info: "Belgrat Antlaşması'ndaki arabuluculuğu sebebiyle Fransa'ya bu tarihi ticari imtiyaz tanınmıştır." },
    { q: "Fransız subay Baron de Tott'a Sürat Topçuları Ocağı'nı kurduran ve Mühendishane-i Bahr-i Hümayun'un temelini atan padişah", sultan: "III. Mustafa", category: "Islahat & Yenilik", era: "Gerileme", info: "Deniz subayı ve mühendis yetiştirmek amacıyla Deniz Mühendishanesi kurulmuştur." },
    { q: "Halkı Müslüman olan bir toprağın (Kırım) ilk kez elden çıktığı 1774 Küçük Kaynarca Antlaşması", sultan: "I. Abdülhamit", category: "Antlaşma & Diplomasi", era: "Gerileme", info: "Kırım bağımsız olmuş, dini bakımdan Halifeye bağlı kalması kabul edilerek halifelik ilk kez siyasi koz yapılmıştır." },
    { q: "İç borçlanma senetleri olan Esham Sistemini fiilen ilk kez uygulamaya koyan padişah", sultan: "I. Abdülhamit", category: "Islahat & Yenilik", era: "Gerileme", info: "Fikri III. Mustafa zamanında ortaya atılmış, iç borçlanma I. Abdülhamit'te fiilen uygulanmıştır." },
    { q: "Cülus bahşişini tamamen kaldıran ve ulufe alım-satımını yasaklayan padişah", sultan: "I. Abdülhamit", category: "Islahat & Yenilik", era: "Gerileme", info: "Devlet hazinesini korumak için yeniçeri maaş senetleri yasaklanmış ve ilk kez yeniçeri sayımı yapılmıştır." },
    { q: "Köklü ve planlı ıslahatların yapıldığı Nizam-ı Cedit Dönemi ve modern Nizam-ı Cedit ordusunu kuran padişah", sultan: "III. Selim", category: "Islahat & Yenilik", era: "Gerileme", info: "Tüm ıslahatları için layihalar (raporlar) hazırlatmış, İrad-ı Cedit hazinesini kurmuştur." },
    { q: "Nizam-ı Cedit ordusunun Akka Zaferi'nde Napolyon'u mağlup eden komutanı (Cezzar Ahmet Paşa) hangi padişah dönemindedir?", sultan: "III. Selim", category: "Savaş & Olay", era: "Gerileme", info: "Napolyon: 'Kader beni bir ihtiyarın elinde oyuncak etti' demiştir." },
    { q: "Avrupa'da (Londra) İLK DAİMİ (sürekli) elçiliğin açılması ve ilk daimi elçi Yusuf Agah Efendi", sultan: "III. Selim", category: "Antlaşma & Diplomasi", era: "Gerileme", info: "Geçici elçilikler III. Ahmet (Paris), daimi elçilikler ise III. Selim (Londra) dönemindedir." },
    { q: "Fransızca'yı ilk resmi zorunlu yabancı dil ilan eden ve Mühendishane-i Berr-i Hümayun'u (Kara Mühendishanesi) kuran padişah", sultan: "III. Selim", category: "Islahat & Yenilik", era: "Gerileme", info: "Askeri okullarda Fransızca zorunlu tutulmuş, batı askeri literatürü tercüme edilmiştir." },

    // --- DAĞILMA DÖNEMİ ---
    { q: "1808 yılında Ayanlar ile Sened-i İttifak'ı imzalayarak padişah otoritesini ilk kez sınırlandıran padişah", sultan: "II. Mahmut", category: "İlk & Teşkilatlanma", era: "Dağılma", info: "Magna Carta'ya benzetilir. Sadrazam Alemdar Mustafa Paşa öncülüğünde imzalanmıştır." },
    { q: "Yeniçeri Ocağı'nı kaldırarak (1826 Vaka-i Hayriye) yerine Asakir-i Mansure-i Muhammediye ordusunu kuran padişah", sultan: "II. Mahmut", category: "Islahat & Yenilik", era: "Dağılma", info: "Hayırlı Olay olarak adlandırılan bu devrimle ıslahatların önündeki en büyük engel kalkmıştır." },
    { q: "Divan-ı Hümayun'u kaldırarak yerine Heyet-i Vükela'yı (Nazırlıklar / Bakanlıklar) kuran ve Sadrazamlığı Başvekalete çeviren padişah", sultan: "II. Mahmut", category: "İlk & Teşkilatlanma", era: "Dağılma", info: "Hariciye, Dahiliye gibi nezaretler kurularak modern hükümet kabinesi sistemine geçilmiştir." },
    { q: "Tımar ve Müsadere sistemlerini resmi olarak kaldıran, memurlara maaş bağlayan padişah", sultan: "II. Mahmut", category: "İlk & Teşkilatlanma", era: "Dağılma", info: "Özel mülkiyet güvence altına alınmış, devlet memurları doğrudan merkeze bağlanmıştır." },
    { q: "İlk askeri amaçlı nüfus sayımını yaptıran ve ilk resmi gazete olan Takvim-i Vekayi'yi çıkaran padişah", sultan: "II. Mahmut", category: "İlk & Teşkilatlanma", era: "Dağılma", info: "Sadece erkekler ve hayvanlar sayılmıştır; resmi devlet gazetesi Takvim-i Vekayi basılmıştır." },
    { q: "İlköğretimi İstanbul'da zorunlu kılan, Mekteb-i Tıbbiye ve Harbiye'yi açan, memurlara fes ve ceket mecburiyeti getiren padişah", sultan: "II. Mahmut", category: "Islahat & Yenilik", era: "Dağılma", info: "Kendi resmini (Tasvir-i Hümayun) devlet dairelerine astıran ilk padişahtır." },
    { q: "Yunanistan'ın bağımsızlığını kazandığı ve Osmanlı'dan ayrılan ilk azınlık olduğu 1829 Edirne Antlaşması", sultan: "II. Mahmut", category: "Antlaşma & Diplomasi", era: "Dağılma", info: "Navarin Baskını ve Osmanlı-Rus Savaşı sonrası imzalanmıştır; Sırplara özerklik verilmiştir." },
    { q: "İngiltere ile imzalanıp Osmanlı pazarını Avrupa'nın açık pazarı haline getiren 1838 Balta Limanı Ticaret Antlaşması", sultan: "II. Mahmut", category: "Antlaşma & Diplomasi", era: "Dağılma", info: "Mısır Valisi Kavalalı'ya karşı İngiliz desteğini almak için gümrük vergileri yerli esnaf aleyhine düşürülmüştür." },
    { q: "Gülhane Parkı'nda Tanzimat Fermanı'nı (1839) ilan ettirerek kanun üstünlüğünü getiren padişah", sultan: "Sultan Abdülmecit", category: "Islahat & Yenilik", era: "Dağılma", info: "Hariciye Nazırı Mustafa Reşit Paşa okumuştur; padişah ilk kez kanun gücünün üstünlüğünü kabul etmiştir." },
    { q: "Kırım Savaşı sonrası gayrimüslimlere çok geniş haklar ve memuriyet yolu açan 1856 Islahat Fermanı'nı ilan eden padişah", sultan: "Sultan Abdülmecit", category: "Islahat & Yenilik", era: "Dağılma", info: "Avrupalı devletlerin iç işlerimize karışmasını önlemek için Paris Antlaşması öncesi ilan edilmiştir." },
    { q: "Osmanlı Devleti'nin tarihteki İLK dış borcunu aldığı (1854 Kırım Savaşı - İngiltere) padişah", sultan: "Sultan Abdülmecit", category: "İlk & Teşkilatlanma", era: "Dağılma", info: "Kırım Savaşı finansmanı için İngiltere'den Palmerston hükümetinden borç alınmıştır." },
    { q: "İlk kağıt paranın (Kaime) basılması, ilk demiryolu (İzmir-Aydın) ve ilk telgraf hattının çekilmesi", sultan: "Sultan Abdülmecit", category: "Islahat & Yenilik", era: "Dağılma", info: "Osmanlı'da modern altyapı adımları hızlanmış, Edirne-Varna-Şumnu telgrafı ve Kaime tedavüle girmiştir." },
    { q: "Dolmabahçe Sarayı'nı yaptıran ve ilk bilim akademisi olan Encümen-i Daniş'i kurduran padişah", sultan: "Sultan Abdülmecit", category: "İlk & Teşkilatlanma", era: "Dağılma", info: "Garabet Balyan tarafından Dolmabahçe Sarayı inşa edilmiş, Cevdet Paşa öncülüğünde bilim kurulu kurulmuştur." },
    { q: "Avrupa'ya resmi seyahat düzenleyen ilk ve tek Osmanlı padişahı", sultan: "Sultan Abdülaziz", category: "İlk & Teşkilatlanma", era: "Dağılma", info: "Fransa, İngiltere, Belçika, Prusya ve Avusturya'yı ziyaret etmiştir." },
    { q: "Dünyanın 3. büyük deniz donanmasını kurduran, Beylerbeyi ve Çırağan Saraylarını inşa ettiren padişah", sultan: "Sultan Abdülaziz", category: "İlk & Teşkilatlanma", era: "Dağılma", info: "İngiltere ve Fransa'dan modern zırhlı gemiler satın alarak donanmayı güçlendirmiştir." },
    { q: "Ziraat Bankası'nın temeli sayılan Memleket Sandıkları (Mithat Paşa) ve Darüşşafaka'nın açıldığı dönem", sultan: "Sultan Abdülaziz", category: "Islahat & Yenilik", era: "Dağılma", info: "Çiftçiyi tefeciden korumak için Memleket Sandıkları kurulmuş, öksüz ve yetimler için Darüşşafaka açılmıştır." },
    { q: "İlk Türk anayasası olan Kanun-ı Esasi'yi kabul ederek I. Meşrutiyet'i (1876) ilan eden padişah", sultan: "II. Abdülhamit", category: "İlk & Teşkilatlanma", era: "Dağılma", info: "Genç Osmanlıların (Jön Türkler) baskısıyla meşrutiyet ilan edilmiş, Meclis-i Mebusan açılmıştır." },
    { q: "93 Harbi'ni bahane ederek Meclis-i Mebusan'ı tatil eden ve 30 yıl sürecek İstibdat Dönemi'ni başlatan padişah", sultan: "II. Abdülhamit", category: "Savaş & Olay", era: "Dağılma", info: "1878'den 1908'e kadar devleti Yıldız Sarayı'ndan merkezi ve sıkı bir denetimle yönetmiştir." },
    { q: "Dış borçların tahsili için 1881 Muharrem Kararnamesi ile Düyun-u Umumiye İdaresi'nin (Genel Borçlar) kurulduğu dönem", sultan: "II. Abdülhamit", category: "Antlaşma & Diplomasi", era: "Dağılma", info: "Osmanlı maliyesinin önemli gelir kaynaklarına yabancı alacaklılar doğrudan el koymuştur." },
    { q: "Osman Hamdi Bey'e Sanayi-i Nefise Mektebi'ni (Güzel Sanatlar) ve Asar-ı Atika Müzesi'ni kurduran padişah", sultan: "II. Abdülhamit", category: "Islahat & Yenilik", era: "Dağılma", info: "Mimar Sinan Güzel Sanatlar Üniversitesi'nin temeli Sanayi-i Nefise Mektebi açılmıştır." },
    { q: "Hicaz Demiryolları, Berlin-Bağdat-Basra (3B) projesi, Darülaceze ve Hamidiye Alayları'nı kuran padişah", sultan: "II. Abdülhamit", category: "Islahat & Yenilik", era: "Dağılma", info: "İslamcılık politikası doğrultusunda Alman iş birliğiyle Hicaz demiryolu ve Darülaceze kurulmuştur." },
    { q: "31 Mart Vakası (1909) sonrası Meclis kararıyla tahttan indirilen ilk Osmanlı padişahı", sultan: "II. Abdülhamit", category: "Savaş & Olay", era: "Dağılma", info: "Meşrutiyet rejimine karşı çıkan isyanı Hareket Ordusu bastırmış, meclis kararıyla II. Abdülhamit tahttan indirilmiştir." },
    { q: "Trablusgarp Savaşı (1911), Balkan Savaşları (1912-1913) ve I. Dünya Savaşı'nda 'Cihat-ı Ekber' ilan eden padişah", sultan: "V. Mehmet Reşat", category: "Savaş & Olay", era: "Dağılma", info: "İttihat ve Terakki kontrolünde hükümdarlık yapmış, 1918'de Mondros öncesi vefat etmiştir." },
    { q: "Mondros ve Sevr antlaşmalarının imzalandığı dönemde tahtta bulunan ve Saltanatın kaldırılmasıyla (1 Kasım 1922) ülkeyi terk eden SON Osmanlı padişahı", sultan: "VI. Mehmet (Vahdettin)", category: "Savaş & Olay", era: "Dağılma", info: "Son Osmanlı padişahıdır. Malaya zırhlısıyla İstanbul'dan ayrılmıştır." }
];

let sultanQuizQuestions = [];
let currentSultanQuizIndex = 0;
let sultanQuizScoreCorrect = 0;
let sultanQuizScoreIncorrect = 0;
let currentSultanQuizCategory = 'All';
let isSultanAnswerSubmitted = false;

const allSultansList = [
    "Osman Bey", "Orhan Bey", "I. Murat", "Yıldırım Bayezid", "Çelebi Mehmet", "II. Murat",
    "Fatih Sultan Mehmet", "II. Bayezit", "Yavuz Sultan Selim", "Kanuni Sultan Süleyman", "II. Selim", "III. Murat",
    "III. Mehmet", "I. Ahmet", "Genç Osman (II. Osman)", "IV. Murat", "IV. Mehmet", "II. Mustafa",
    "III. Ahmet", "I. Mahmut", "III. Mustafa", "I. Abdülhamit", "III. Selim",
    "II. Mahmut", "Sultan Abdülmecit", "Sultan Abdülaziz", "II. Abdülhamit", "V. Mehmet Reşat", "VI. Mehmet (Vahdettin)"
];

const eraSultansMap = {
    "Kuruluş": ["Osman Bey", "Orhan Bey", "I. Murat", "Yıldırım Bayezid", "Çelebi Mehmet", "II. Murat", "Fatih Sultan Mehmet"],
    "Yükselme": ["Fatih Sultan Mehmet", "II. Bayezit", "Yavuz Sultan Selim", "Kanuni Sultan Süleyman", "II. Selim", "III. Murat"],
    "Duraklama": ["III. Mehmet", "I. Ahmet", "Genç Osman (II. Osman)", "IV. Murat", "IV. Mehmet", "II. Mustafa", "III. Murat"],
    "Gerileme": ["III. Ahmet", "I. Mahmut", "III. Mustafa", "I. Abdülhamit", "III. Selim", "II. Mustafa"],
    "Dağılma": ["II. Mahmut", "Sultan Abdülmecit", "Sultan Abdülaziz", "II. Abdülhamit", "V. Mehmet Reşat", "VI. Mehmet (Vahdettin)"]
};

function initSultanQuizMode() {
    startSultanQuiz('All');
}

function filterSultanQuizCategory(cat, btnElement) {
    currentSultanQuizCategory = cat;
    
    // Update active tab button
    const buttons = document.querySelectorAll("#sultan-quiz-category-filters .lit-tab-btn");
    buttons.forEach(btn => btn.classList.remove("active"));
    if (btnElement) {
        btnElement.classList.add("active");
    }
    
    startSultanQuiz(cat);
}

function startSultanQuiz(category = currentSultanQuizCategory) {
    currentSultanQuizCategory = category;
    
    let pool = currentSultanQuizCategory === 'All'
        ? [...sultanQuizDatabase]
        : sultanQuizDatabase.filter(item => item.category.includes(currentSultanQuizCategory));
        
    if (pool.length < 5) pool = [...sultanQuizDatabase];
    
    // Shuffle pool
    for (let i = pool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    
    sultanQuizQuestions = pool.slice(0, 15); // 15 questions per session
    currentSultanQuizIndex = 0;
    sultanQuizScoreCorrect = 0;
    sultanQuizScoreIncorrect = 0;
    isSultanAnswerSubmitted = false;
    
    document.getElementById("sultan-quiz-active-box").classList.remove("hidden");
    document.getElementById("sultan-quiz-results-box").classList.add("hidden");
    document.getElementById("sultan-quiz-explanation").classList.add("hidden");
    
    renderSultanQuestion();
}

function renderSultanQuestion() {
    isSultanAnswerSubmitted = false;
    const q = sultanQuizQuestions[currentSultanQuizIndex];
    
    document.getElementById("sultan-quiz-q-num").textContent = `Soru: ${currentSultanQuizIndex + 1} / ${sultanQuizQuestions.length}`;
    document.getElementById("sultan-quiz-score-correct").textContent = sultanQuizScoreCorrect;
    document.getElementById("sultan-quiz-score-incorrect").textContent = sultanQuizScoreIncorrect;
    
    document.getElementById("sultan-quiz-category-badge").textContent = q.category;
    document.getElementById("sultan-quiz-era-badge").textContent = `${q.era} Dönemi`;
    document.getElementById("sultan-quiz-question-title").textContent = q.q;
    
    document.getElementById("sultan-quiz-explanation").classList.add("hidden");
    
    // Choose 3 realistic wrong sultans from same or neighboring eras
    const candidateList = eraSultansMap[q.era] || allSultansList;
    let wrongPool = candidateList.filter(s => s !== q.sultan);
    if (wrongPool.length < 3) {
        wrongPool = allSultansList.filter(s => s !== q.sultan);
    }
    
    // Shuffle wrong options
    for (let i = wrongPool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [wrongPool[i], wrongPool[j]] = [wrongPool[j], wrongPool[i]];
    }
    
    const options = [q.sultan, wrongPool[0], wrongPool[1], wrongPool[2]];
    
    // Shuffle options A, B, C, D
    for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
    }
    
    const optionsGrid = document.getElementById("sultan-quiz-options-grid");
    const optionLetters = ['A', 'B', 'C', 'D'];
    optionsGrid.innerHTML = options.map((opt, idx) => `
        <button class="results-btn secondary-btn" onclick="submitSultanAnswer(\`${opt.replace(/`/g, '\\`')}\`, this)" style="display: flex; align-items: center; justify-content: flex-start; text-align: left; padding: 0.85rem 1.2rem; font-size: 0.95rem; font-weight: 600; gap: 0.75rem; border-radius: var(--border-radius-sm); transition: all 0.2s ease;">
            <span style="display: inline-flex; align-items: center; justify-content: center; width: 26px; height: 26px; border-radius: 50%; background: var(--bg-secondary); border: 1px solid var(--border-color); font-size: 0.8rem; font-weight: 700;">${optionLetters[idx]}</span>
            <span>${opt}</span>
        </button>
    `).join('');
}

function submitSultanAnswer(selectedSultan, clickedBtn) {
    if (isSultanAnswerSubmitted) return;
    isSultanAnswerSubmitted = true;
    
    const q = sultanQuizQuestions[currentSultanQuizIndex];
    const isCorrect = selectedSultan === q.sultan;
    
    if (isCorrect) {
        sultanQuizScoreCorrect++;
        document.getElementById("sultan-quiz-score-correct").textContent = sultanQuizScoreCorrect;
    } else {
        sultanQuizScoreIncorrect++;
        document.getElementById("sultan-quiz-score-incorrect").textContent = sultanQuizScoreIncorrect;
    }
    
    // Update button styles
    const buttons = document.querySelectorAll("#sultan-quiz-options-grid button");
    buttons.forEach(btn => {
        btn.style.pointerEvents = "none";
        const btnSultan = btn.querySelector("span:last-child").textContent.trim();
        if (btnSultan === q.sultan) {
            btn.style.backgroundColor = "rgba(16, 185, 129, 0.2)";
            btn.style.borderColor = "var(--color-success)";
            btn.style.color = "var(--color-success)";
        } else if (btnSultan === selectedSultan && !isCorrect) {
            btn.style.backgroundColor = "rgba(239, 68, 68, 0.2)";
            btn.style.borderColor = "var(--color-danger)";
            btn.style.color = "var(--color-danger)";
        }
    });
    
    // Show explanation box
    const expBox = document.getElementById("sultan-quiz-explanation");
    const feedbackText = document.getElementById("sultan-quiz-feedback-text");
    const infoText = document.getElementById("sultan-quiz-info-text");
    
    if (isCorrect) {
        feedbackText.innerHTML = `<span style="color: var(--color-success); font-weight: 700;">✔️ Harika! Doğru Cevap: ${q.sultan}</span>`;
    } else {
        feedbackText.innerHTML = `<span style="color: var(--color-danger); font-weight: 700;">❌ Yanlış! Doğru Cevap: ${q.sultan}</span>`;
    }
    
    infoText.innerHTML = `<strong>💡 KPSS Bilgisi:</strong> ${q.info}`;
    expBox.classList.remove("hidden");
}

function nextSultanQuestion() {
    if (currentSultanQuizIndex + 1 < sultanQuizQuestions.length) {
        currentSultanQuizIndex++;
        renderSultanQuestion();
    } else {
        showSultanQuizResults();
    }
}

function showSultanQuizResults() {
    document.getElementById("sultan-quiz-active-box").classList.add("hidden");
    document.getElementById("sultan-quiz-results-box").classList.remove("hidden");
    
    const total = sultanQuizQuestions.length;
    const pct = Math.round((sultanQuizScoreCorrect / total) * 100);
    
    document.getElementById("sultan-quiz-res-pct").textContent = `${pct}%`;
    document.getElementById("sultan-quiz-res-correct").textContent = sultanQuizScoreCorrect;
    document.getElementById("sultan-quiz-res-incorrect").textContent = sultanQuizScoreIncorrect;
    
    let feedback = "Biraz daha tekrar yaparak Osmanlı padişahlarını ve olaylarını pekiştirebilirsiniz.";
    if (pct >= 85) {
        feedback = "🏆 Muhteşem! Osmanlı padişahları, savaşları ve ilkleri konusuna tam anlamıyla hakimsiniz!";
    } else if (pct >= 60) {
        feedback = "👏 Gayet başarılı! Birkaç tekrar ile tüm padişah-olay eşleşmelerini kusursuz yapabilirsiniz.";
    }
    document.getElementById("sultan-quiz-res-feedback").textContent = feedback;
}

/* =============================================================
   KPSS DENEME SINAVI MOTORU (120 SORU - GERÇEK ÖSYM FORMATI)
   ============================================================= */

// Exam State
let examUserAnswers = {}; // { questionId: 'A' | 'B' | 'C' | 'D' | 'E' }
let examCurrentPage = 1;
const EXAM_QUESTIONS_PER_PAGE = 8;
let examTimerSeconds = 130 * 60; // 130 minutes
let examTimerInterval = null;
let isExamTimerRunning = false;
let isExamFinished = false;
let examActiveSubjectFilter = 'all';

// Drawing & Canvas State
let currentDrawingTool = 'select'; // 'select', 'pen', 'highlighter', 'eraser'
let currentDrawColor = '#1e293b';
let currentLineWidth = 4;
let isDrawing = false;
let lastDrawPos = { x: 0, y: 0 };
let pageCanvasesData = {}; // { pageNum: dataURL }
let isExamInitialized = false;

// Initialize Exam Mode
function initExamMockMode() {
    if (!isExamInitialized) {
        if (typeof kpssExam120Data === 'undefined' || !Array.isArray(kpssExam120Data)) {
            console.error("kpssExam120Data not loaded!");
            return;
        }
        renderOpticalSheet();
        initExamCanvasListeners();
        updatePageSelectDropdown();
        startExamTimer();
        isExamInitialized = true;
    }
    
    // Default tool: select
    setDrawingTool('select');
    renderExamPage(examCurrentPage);
}

// Get Questions according to subject filter
function getFilteredExamQuestions() {
    if (typeof kpssExam120Data === 'undefined') return [];
    if (examActiveSubjectFilter === 'all') return kpssExam120Data;
    if (examActiveSubjectFilter === 'turkce') {
        return kpssExam120Data.filter(q => q.subject === 'Türkçe');
    }
    if (examActiveSubjectFilter === 'matematik') {
        return kpssExam120Data.filter(q => q.subject.includes('Matematik'));
    }
    if (examActiveSubjectFilter === 'tarih') {
        return kpssExam120Data.filter(q => q.subject === 'Tarih');
    }
    if (examActiveSubjectFilter === 'cografya') {
        return kpssExam120Data.filter(q => q.subject === 'Coğrafya');
    }
    if (examActiveSubjectFilter === 'vatandaslik') {
        return kpssExam120Data.filter(q => q.subject === 'Vatandaşlık');
    }
    if (examActiveSubjectFilter === 'guncel') {
        return kpssExam120Data.filter(q => q.subject === 'Güncel Bilgiler');
    }
    return kpssExam120Data;
}

// Update Page Select Dropdown
function updatePageSelectDropdown() {
    const questions = getFilteredExamQuestions();
    const totalPages = Math.ceil(questions.length / EXAM_QUESTIONS_PER_PAGE) || 1;
    const pageSelect = document.getElementById("exam-page-select");
    const totalPagesNumEl = document.getElementById("total-pages-num");
    
    if (totalPagesNumEl) totalPagesNumEl.textContent = totalPages;
    if (pageSelect) {
        pageSelect.innerHTML = "";
        for (let i = 1; i <= totalPages; i++) {
            const startQ = (i - 1) * EXAM_QUESTIONS_PER_PAGE + 1;
            const endQ = Math.min(i * EXAM_QUESTIONS_PER_PAGE, questions.length);
            const opt = document.createElement("option");
            opt.value = i;
            opt.textContent = `Sayfa ${i} (Soru ${startQ} - ${endQ})`;
            pageSelect.appendChild(opt);
        }
        pageSelect.value = examCurrentPage;
    }
}

// Subject Tab Filtering
function filterExamPageBySubject(subjectKey) {
    saveCurrentPageCanvas(examCurrentPage);
    examActiveSubjectFilter = subjectKey;
    examCurrentPage = 1;
    
    // Update button states
    const tabs = document.querySelectorAll(".exam-sec-tab");
    tabs.forEach(tab => tab.classList.remove("active"));
    const activeTab = Array.from(tabs).find(t => t.getAttribute("onclick").includes(`'${subjectKey}'`));
    if (activeTab) activeTab.classList.add("active");
    
    updatePageSelectDropdown();
    renderExamPage(1);
}

// Page Navigation
function changeExamPage(delta) {
    const questions = getFilteredExamQuestions();
    const totalPages = Math.ceil(questions.length / EXAM_QUESTIONS_PER_PAGE) || 1;
    const newPage = examCurrentPage + delta;
    if (newPage >= 1 && newPage <= totalPages) {
        saveCurrentPageCanvas(examCurrentPage);
        examCurrentPage = newPage;
        renderExamPage(newPage);
    }
}

function goToExamPage(page) {
    const questions = getFilteredExamQuestions();
    const totalPages = Math.ceil(questions.length / EXAM_QUESTIONS_PER_PAGE) || 1;
    if (page >= 1 && page <= totalPages) {
        saveCurrentPageCanvas(examCurrentPage);
        examCurrentPage = page;
        renderExamPage(page);
    }
}

// Render Page Content (Two Columns Layout)
function renderExamPage(page) {
    const questions = getFilteredExamQuestions();
    const totalPages = Math.ceil(questions.length / EXAM_QUESTIONS_PER_PAGE) || 1;
    
    // Indicators
    const pageNumEl = document.getElementById("current-page-num");
    const pageSelect = document.getElementById("exam-page-select");
    const btnPrev = document.getElementById("btn-prev-page");
    const btnNext = document.getElementById("btn-next-page");
    
    if (pageNumEl) pageNumEl.textContent = page;
    if (pageSelect) pageSelect.value = page;
    if (btnPrev) btnPrev.disabled = (page <= 1);
    if (btnNext) btnNext.disabled = (page >= totalPages);
    
    // Slice questions for this page
    const startIndex = (page - 1) * EXAM_QUESTIONS_PER_PAGE;
    const pageQuestions = questions.slice(startIndex, startIndex + EXAM_QUESTIONS_PER_PAGE);
    
    // Split into Column 1 and Column 2
    const half = Math.ceil(pageQuestions.length / 2);
    const col1Questions = pageQuestions.slice(0, half);
    const col2Questions = pageQuestions.slice(half);
    
    const gridContainer = document.getElementById("exam-questions-grid");
    if (!gridContainer) return;
    
    gridContainer.innerHTML = `
        <div class="exam-column" id="exam-col-1">
            ${col1Questions.map(q => renderSingleQuestionHTML(q)).join('')}
        </div>
        <div class="exam-column" id="exam-col-2">
            ${col2Questions.map(q => renderSingleQuestionHTML(q)).join('')}
        </div>
    `;
    
    // Sync Canvas resolution with questions container
    setTimeout(() => {
        syncCanvasWithPaper();
        restorePageCanvas(page);
    }, 50);
}

// Generate HTML for Single Question Card
function renderSingleQuestionHTML(q) {
    const userAnswer = examUserAnswers[q.id];
    const letters = ['A', 'B', 'C', 'D', 'E'];
    const isMath = q.subject.includes('Matematik');
    
    let explanationHTML = "";
    if (isExamFinished) {
        const isUserCorrect = userAnswer === q.answer;
        explanationHTML = `
            <div class="exam-explanation-box">
                <div style="font-weight: 800; margin-bottom: 0.35rem; display: flex; align-items: center; gap: 0.5rem;">
                    <span>${isUserCorrect ? '✔️ Doğru Cevap Verildi' : (userAnswer ? '❌ Yanlış Cevap' : '➖ Boş Bırakıldı')}</span>
                    <span style="background: var(--bg-secondary); border: 1px solid var(--border-color); padding: 0.1rem 0.5rem; border-radius: 4px; font-size: 0.78rem;">Doğru Seçenek: ${q.answer}</span>
                </div>
                <div><strong>💡 Çözüm:</strong> ${q.explanation}</div>
            </div>
        `;
    }
    
    return `
        <div class="exam-q-card" id="exam-q-card-${q.id}">
            <div class="exam-q-meta">
                <div style="display: flex; align-items: center; gap: 0.5rem;">
                    <span class="exam-q-num">${q.id}</span>
                    <span class="exam-q-badge" style="background: rgba(99, 102, 241, 0.1); color: var(--color-tarih);">${q.subject}</span>
                </div>
                <span class="exam-q-badge">${q.topic}</span>
            </div>
            
            <div class="exam-q-text">${escapeExamHtml(q.question)}</div>
            
            <div class="exam-q-options">
                ${letters.map(letter => {
                    const optText = q.options[letter];
                    let extraClass = "";
                    let customStyle = "";
                    
                    if (userAnswer === letter) {
                        extraClass += " selected";
                    }
                    
                    if (isExamFinished) {
                        if (letter === q.answer) {
                            customStyle = "border-color: var(--color-success); background: rgba(16, 185, 129, 0.15); font-weight: 700;";
                        } else if (userAnswer === letter && letter !== q.answer) {
                            customStyle = "border-color: var(--color-danger); background: rgba(239, 68, 68, 0.15); font-weight: 700;";
                        }
                    }
                    
                    return `
                        <div class="exam-option-row${extraClass}" style="${customStyle}" onclick="handleOptionClick(${q.id}, '${letter}')">
                            <span class="exam-option-letter">${letter}</span>
                            <span class="exam-option-text">${escapeExamHtml(optText)}</span>
                        </div>
                    `;
                }).join('')}
            </div>
            
            ${isMath && !isExamFinished ? `
                <div class="exam-scratch-space">
                    <span>✏️ İşlem & Çözüm Karalama Alanı (Kalem modunda üzerine yazabilirsiniz)</span>
                </div>
            ` : ''}
            
            ${explanationHTML}
        </div>
    `;
}

function escapeExamHtml(str) {
    if (!str) return "";
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

// Option Click Handler
function handleOptionClick(questionId, letter) {
    selectExamOption(questionId, letter);
}

function selectExamOption(questionId, letter) {
    if (isExamFinished) return;
    
    // Toggle if same option clicked
    if (examUserAnswers[questionId] === letter) {
        delete examUserAnswers[questionId];
    } else {
        examUserAnswers[questionId] = letter;
    }
    
    // Update Question Card UI on current page
    const qCard = document.getElementById(`exam-q-card-${questionId}`);
    if (qCard) {
        const optionRows = qCard.querySelectorAll(".exam-option-row");
        optionRows.forEach(row => {
            const rowLetter = row.querySelector(".exam-option-letter").textContent.trim();
            if (examUserAnswers[questionId] === rowLetter) {
                row.classList.add("selected");
            } else {
                row.classList.remove("selected");
            }
        });
    }
    
    // Update Optical Sheet UI
    updateOpticalBubbleUI(questionId);
    
    // Update Answered Count Badge
    updateAnsweredCountBadge();
}

function updateAnsweredCountBadge() {
    const answeredCount = Object.keys(examUserAnswers).length;
    const badge = document.getElementById("optical-badge-count");
    if (badge) badge.textContent = `${answeredCount}/120`;
}

// Render Optical Form Drawer
function renderOpticalSheet() {
    const opticalBody = document.getElementById("exam-optical-body");
    if (!opticalBody || typeof kpssExam120Data === 'undefined') return;
    
    // Groups:
    // 1: Türkçe (1-30)
    // 2: Matematik (31-60)
    // 3: Tarih & Coğrafya (61-105)
    // 4: Vatandaşlık & Güncel (106-120)
    const groups = [
        { title: "Genel Yetenek — Türkçe", start: 1, end: 30 },
        { title: "Genel Yetenek — Matematik", start: 31, end: 60 },
        { title: "Genel Kültür — Tarih & Coğrafya", start: 61, end: 105 },
        { title: "Genel Kültür — Vatandaşlık & Güncel", start: 106, end: 120 }
    ];
    
    const letters = ['A', 'B', 'C', 'D', 'E'];
    
    opticalBody.innerHTML = groups.map(grp => `
        <div class="optical-column-group">
            <div class="optical-column-title">
                <span>${grp.title}</span>
                <span>Soru ${grp.start} - ${grp.end}</span>
            </div>
            <div class="optical-rows-container">
                ${Array.from({ length: grp.end - grp.start + 1 }, (_, i) => {
                    const qId = grp.start + i;
                    return `
                        <div class="optical-row" id="opt-row-${qId}">
                            <span class="optical-q-no" onclick="jumpToQuestion(${qId})" title="Bu soruya git">${String(qId).padStart(2, '0')}.</span>
                            <div class="optical-bubbles">
                                ${letters.map(let => `
                                    <span class="optical-bubble" id="opt-bubble-${qId}-${let}" onclick="selectExamOption(${qId}, '${let}')">${let}</span>
                                `).join('')}
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
    `).join('');
    
    updateAllOpticalBubbles();
}

function updateOpticalBubbleUI(questionId) {
    const letters = ['A', 'B', 'C', 'D', 'E'];
    const currentAnswer = examUserAnswers[questionId];
    
    letters.forEach(let => {
        const bubble = document.getElementById(`opt-bubble-${questionId}-${let}`);
        if (bubble) {
            if (currentAnswer === let) {
                bubble.classList.add("filled");
            } else {
                bubble.classList.remove("filled");
            }
        }
    });
}

function updateAllOpticalBubbles() {
    for (let qId = 1; qId <= 120; qId++) {
        updateOpticalBubbleUI(qId);
    }
    updateAnsweredCountBadge();
}

function toggleOpticalDrawer() {
    const drawer = document.getElementById("exam-optical-drawer");
    if (drawer) {
        drawer.classList.toggle("open");
    }
}

// Jump directly to page containing question
function jumpToQuestion(qId) {
    // If filtered, switch to 'all' first
    if (examActiveSubjectFilter !== 'all') {
        filterExamPageBySubject('all');
    }
    
    const targetPage = Math.ceil(qId / EXAM_QUESTIONS_PER_PAGE);
    goToExamPage(targetPage);
    
    // Close optical drawer on mobile for better view
    if (window.innerWidth <= 850) {
        toggleOpticalDrawer();
    }
    
    // Scroll smoothly to question
    setTimeout(() => {
        const card = document.getElementById(`exam-q-card-${qId}`);
        if (card) {
            card.scrollIntoView({ behavior: 'smooth', block: 'center' });
            card.style.transition = 'box-shadow 0.3s ease';
            card.style.boxShadow = '0 0 15px rgba(99, 102, 241, 0.4)';
            setTimeout(() => { card.style.boxShadow = ''; }, 1500);
        }
    }, 200);
}

// -------------------------------------------------------------
// CANVAS DRAWING ENGINE (PEN, HIGHLIGHTER, ERASER, CLEAR)
// -------------------------------------------------------------

function syncCanvasWithPaper() {
    const canvas = document.getElementById("exam-drawing-canvas");
    const container = document.getElementById("exam-canvas-container");
    if (!canvas || !container) return;
    
    const rect = container.getBoundingClientRect();
    if (canvas.width !== rect.width || canvas.height !== rect.height) {
        canvas.width = rect.width;
        canvas.height = rect.height;
    }
}

function saveCurrentPageCanvas(page) {
    const canvas = document.getElementById("exam-drawing-canvas");
    if (canvas && canvas.width > 0) {
        pageCanvasesData[page] = canvas.toDataURL();
    }
}

function restorePageCanvas(page) {
    const canvas = document.getElementById("exam-drawing-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    if (pageCanvasesData[page]) {
        const img = new Image();
        img.onload = () => {
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        };
        img.src = pageCanvasesData[page];
    }
}

function clearCurrentPageDrawings() {
    const canvas = document.getElementById("exam-drawing-canvas");
    if (canvas) {
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        delete pageCanvasesData[examCurrentPage];
    }
}

function setDrawingTool(tool) {
    currentDrawingTool = tool;
    
    const btnSelect = document.getElementById("btn-tool-select");
    const btnPen = document.getElementById("btn-tool-pen");
    const btnHighlighter = document.getElementById("btn-tool-highlighter");
    const btnEraser = document.getElementById("btn-tool-eraser");
    const canvas = document.getElementById("exam-drawing-canvas");
    
    [btnSelect, btnPen, btnHighlighter, btnEraser].forEach(b => {
        if (b) b.classList.remove("active");
    });
    
    if (tool === 'select') {
        if (btnSelect) btnSelect.classList.add("active");
        if (canvas) {
            canvas.style.pointerEvents = "none";
            canvas.classList.remove("drawing-active");
        }
    } else {
        if (canvas) {
            canvas.style.pointerEvents = "auto";
            canvas.classList.add("drawing-active");
        }
        if (tool === 'pen' && btnPen) btnPen.classList.add("active");
        if (tool === 'highlighter' && btnHighlighter) btnHighlighter.classList.add("active");
        if (tool === 'eraser' && btnEraser) btnEraser.classList.add("active");
    }
}

function setDrawColor(color, el) {
    currentDrawColor = color;
    document.querySelectorAll(".color-dot").forEach(dot => dot.classList.remove("active"));
    if (el) el.classList.add("active");
    
    // Automatically switch to pen if user selects a color while in select mode
    if (currentDrawingTool === 'select' || currentDrawingTool === 'eraser') {
        setDrawingTool('pen');
    }
}

function setLineWidth(width) {
    currentLineWidth = parseInt(width, 10);
}

function initExamCanvasListeners() {
    const canvas = document.getElementById("exam-drawing-canvas");
    if (!canvas) return;
    
    function getCanvasCoords(e) {
        const rect = canvas.getBoundingClientRect();
        const clientX = e.touches && e.touches.length > 0 ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches && e.touches.length > 0 ? e.touches[0].clientY : e.clientY;
        const scaleX = canvas.width / rect.width;
        const scaleY = canvas.height / rect.height;
        return {
            x: (clientX - rect.left) * scaleX,
            y: (clientY - rect.top) * scaleY
        };
    }
    
    function startDrawing(e) {
        if (currentDrawingTool === 'select') return;
        isDrawing = true;
        lastDrawPos = getCanvasCoords(e);
        e.preventDefault();
    }
    
    function draw(e) {
        if (!isDrawing || currentDrawingTool === 'select') return;
        const ctx = canvas.getContext('2d');
        const pos = getCanvasCoords(e);
        
        ctx.beginPath();
        ctx.moveTo(lastDrawPos.x, lastDrawPos.y);
        ctx.lineTo(pos.x, pos.y);
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        
        if (currentDrawingTool === 'pen') {
            ctx.globalCompositeOperation = 'source-over';
            ctx.strokeStyle = currentDrawColor;
            ctx.lineWidth = currentLineWidth;
        } else if (currentDrawingTool === 'highlighter') {
            ctx.globalCompositeOperation = 'multiply';
            let highColor = currentDrawColor;
            if (highColor === '#1e293b') highColor = 'rgba(255, 235, 59, 0.45)';
            else highColor = highColor + '66';
            ctx.strokeStyle = highColor;
            ctx.lineWidth = currentLineWidth * 3.5;
        } else if (currentDrawingTool === 'eraser') {
            ctx.globalCompositeOperation = 'destination-out';
            ctx.lineWidth = currentLineWidth * 5;
        }
        
        ctx.stroke();
        lastDrawPos = pos;
        e.preventDefault();
    }
    
    function stopDrawing() {
        if (isDrawing) {
            isDrawing = false;
            saveCurrentPageCanvas(examCurrentPage);
        }
    }
    
    // Mouse events
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    window.addEventListener('mouseup', stopDrawing);
    
    // Touch & Stylus events
    canvas.addEventListener('touchstart', startDrawing, { passive: false });
    canvas.addEventListener('touchmove', draw, { passive: false });
    canvas.addEventListener('touchend', stopDrawing);
    canvas.addEventListener('touchcancel', stopDrawing);
    
    // Window resize
    window.addEventListener('resize', () => {
        if (currentMode === 'exam-mock') {
            syncCanvasWithPaper();
            restorePageCanvas(examCurrentPage);
        }
    });
}

// -------------------------------------------------------------
// TIMER ENGINE (130 MINUTES COUNTDOWN)
// -------------------------------------------------------------

function startExamTimer() {
    if (examTimerInterval) clearInterval(examTimerInterval);
    isExamTimerRunning = true;
    updateExamTimerButton();
    
    examTimerInterval = setInterval(() => {
        if (examTimerSeconds > 0) {
            examTimerSeconds--;
            updateExamTimerDisplay();
        } else {
            clearInterval(examTimerInterval);
            isExamTimerRunning = false;
            finishExam();
            alert("⏰ Sınav süreniz (130 Dakika) dolmuştur! Sınavınız otomatik olarak sonlandırıldı.");
        }
    }, 1000);
}

function pauseExamTimer() {
    if (examTimerInterval) {
        clearInterval(examTimerInterval);
        examTimerInterval = null;
    }
    isExamTimerRunning = false;
    updateExamTimerButton();
}

function toggleExamTimer() {
    if (isExamFinished) return;
    if (isExamTimerRunning) {
        pauseExamTimer();
    } else {
        startExamTimer();
    }
}

function updateExamTimerButton() {
    const icon = document.getElementById("exam-timer-icon");
    if (icon) {
        icon.textContent = isExamTimerRunning ? "⏸️" : "▶️";
    }
}

function updateExamTimerDisplay() {
    const textEl = document.getElementById("exam-timer-text");
    const widget = document.getElementById("exam-timer-display");
    if (!textEl) return;
    
    const minutes = Math.floor(examTimerSeconds / 60);
    const seconds = examTimerSeconds % 60;
    textEl.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    
    if (examTimerSeconds <= 600 && widget) { // Less than 10 mins
        widget.classList.add("warning");
    } else if (widget) {
        widget.classList.remove("warning");
    }
}

// -------------------------------------------------------------
// FINISH EXAM & EVALUATION ENGINE
// -------------------------------------------------------------

function confirmFinishExam() {
    if (isExamFinished) {
        document.getElementById("exam-results-modal").classList.remove("hidden");
        return;
    }
    
    const answeredCount = Object.keys(examUserAnswers).length;
    const confirmMsg = `Sınavı bitirmek istediğinize emin misiniz?\n\nToplam 120 sorudan ${answeredCount} soru işaretlediniz, ${120 - answeredCount} soru boş.\n\nSınavı bitirdiğinizde detaylı netleriniz ve cevap anahtarı açıklanacaktır.`;
    
    if (confirm(confirmMsg)) {
        finishExam();
    }
}

function finishExam() {
    pauseExamTimer();
    isExamFinished = true;
    
    // Subject stats
    const subjectStats = {
        'Türkçe': { total: 30, correct: 0, incorrect: 0, empty: 0, net: 0 },
        'Matematik': { total: 30, correct: 0, incorrect: 0, empty: 0, net: 0 },
        'Tarih': { total: 27, correct: 0, incorrect: 0, empty: 0, net: 0 },
        'Coğrafya': { total: 18, correct: 0, incorrect: 0, empty: 0, net: 0 },
        'Vatandaşlık': { total: 9, correct: 0, incorrect: 0, empty: 0, net: 0 },
        'Güncel Bilgiler': { total: 6, correct: 0, incorrect: 0, empty: 0, net: 0 }
    };
    
    let totalCorrect = 0;
    let totalIncorrect = 0;
    let totalEmpty = 0;
    
    kpssExam120Data.forEach(q => {
        const userAns = examUserAnswers[q.id];
        let subKey = q.subject;
        if (subKey.includes('Matematik')) subKey = 'Matematik';
        
        const stat = subjectStats[subKey];
        if (!userAns) {
            stat.empty++;
            totalEmpty++;
        } else if (userAns === q.answer) {
            stat.correct++;
            totalCorrect++;
        } else {
            stat.incorrect++;
            totalIncorrect++;
        }
    });
    
    // Net calculations (Net = D - Y/4)
    let gyNet = 0;
    let gkNet = 0;
    
    Object.keys(subjectStats).forEach(key => {
        const s = subjectStats[key];
        s.net = Math.round((s.correct - (s.incorrect / 4)) * 100) / 100;
        if (key === 'Türkçe' || key === 'Matematik') {
            gyNet += s.net;
        } else {
            gkNet += s.net;
        }
    });
    
    const totalNet = Math.round((totalCorrect - (totalIncorrect / 4)) * 100) / 100;
    
    // Estimated KPSS Score (P3 / P93 Standard formula)
    // Formula: 40 + (GY_Net * 0.5) + (GK_Net * 0.5) -> scaled between 40 and 100
    const rawScore = 40 + (gyNet * 0.5) + (gkNet * 0.5);
    const estimatedScore = Math.max(40, Math.min(100, Math.round(rawScore * 10) / 10));
    
    // Render Results Modal
    document.getElementById("res-total-net").textContent = totalNet.toFixed(2);
    document.getElementById("res-correct-count").textContent = totalCorrect;
    document.getElementById("res-incorrect-count").textContent = totalIncorrect;
    document.getElementById("res-empty-count").textContent = totalEmpty;
    document.getElementById("res-estimated-score").textContent = estimatedScore.toFixed(1);
    
    // Render Net Table
    const tableBody = document.getElementById("exam-net-table-body");
    tableBody.innerHTML = `
        ${Object.keys(subjectStats).map(key => {
            const s = subjectStats[key];
            const pct = Math.max(0, Math.round((s.net / s.total) * 100));
            return `
                <tr>
                    <td style="text-align: left; font-weight: 600;">${key}</td>
                    <td>${s.total}</td>
                    <td style="color: var(--color-success); font-weight: 700;">${s.correct}</td>
                    <td style="color: var(--color-danger); font-weight: 700;">${s.incorrect}</td>
                    <td style="color: var(--text-muted);">${s.empty}</td>
                    <td style="font-weight: 800; color: #6366f1;">${s.net.toFixed(2)}</td>
                    <td><strong>%${pct}</strong></td>
                </tr>
            `;
        }).join('')}
        <tr>
            <td style="text-align: left; font-size: 1rem;">🏆 TOPLAM (GENEL)</td>
            <td style="font-size: 1rem;">120</td>
            <td style="color: var(--color-success); font-size: 1rem;">${totalCorrect}</td>
            <td style="color: var(--color-danger); font-size: 1rem;">${totalIncorrect}</td>
            <td style="color: var(--text-muted); font-size: 1rem;">${totalEmpty}</td>
            <td style="color: #6366f1; font-size: 1.1rem;">${totalNet.toFixed(2)} Net</td>
            <td style="font-size: 1rem;">%${Math.max(0, Math.round((totalNet / 120) * 100))}</td>
        </tr>
    `;
    
    // Render 1-120 Answer Key Grid
    const akGrid = document.getElementById("exam-answer-key-grid");
    akGrid.innerHTML = kpssExam120Data.map(q => {
        const userAns = examUserAnswers[q.id];
        let statusClass = "empty";
        let statusIcon = "➖";
        
        if (userAns) {
            if (userAns === q.answer) {
                statusClass = "correct";
                statusIcon = "✔️";
            } else {
                statusClass = "incorrect";
                statusIcon = "❌";
            }
        }
        
        return `
            <div class="ak-cell ${statusClass}" title="Soru ${q.id} - ${q.subject}">
                <span style="font-weight: 800; font-family: 'Outfit', monospace;">${String(q.id).padStart(2, '0')}.</span>
                <span>Doğru: <strong>${q.answer}</strong></span>
                <span style="font-weight: 700;">${userAns ? userAns : 'Boş'} ${statusIcon}</span>
            </div>
        `;
    }).join('');
    
    // Show Modal
    document.getElementById("exam-results-modal").classList.remove("hidden");
    
    // Re-render current page to show explanations
    renderExamPage(examCurrentPage);
}

function closeExamResultsModal() {
    document.getElementById("exam-results-modal").classList.add("hidden");
}

function reviewExamQuestions() {
    closeExamResultsModal();
    filterExamPageBySubject('all');
    goToExamPage(1);
    setDrawingTool('select');
    
    // Scroll smoothly to top of booklet
    const paper = document.getElementById("exam-booklet-paper");
    if (paper) paper.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function restartExamMock() {
    if (confirm("Deneme sınavını sıfırlayıp baştan başlatmak istediğinize emin misiniz?")) {
        examUserAnswers = {};
        pageCanvasesData = {};
        examTimerSeconds = 130 * 60;
        isExamFinished = false;
        examCurrentPage = 1;
        examActiveSubjectFilter = 'all';
        
        closeExamResultsModal();
        updateAllOpticalBubbles();
        clearCurrentPageDrawings();
        updateExamTimerDisplay();
        startExamTimer();
        filterExamPageBySubject('all');
        renderExamPage(1);
    }
}


