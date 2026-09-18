/* -------------------------------------------------------------
   KPSS Tam Kapsamlı Deneme Sınavı Veri Tabanı (120 Soru)
   Genel Yetenek: 30 Türkçe, 30 Matematik
   Genel Kültür: 27 Tarih, 18 Coğrafya, 9 Vatandaşlık, 6 Güncel Bilgiler
   ÖSYM Gerçek Sınav Formatı & Standart Dağılımı
   ------------------------------------------------------------- */

const kpssExam120Data = [
  {
    "id": 1,
    "section": "Genel Yetenek",
    "subject": "Türkçe",
    "topic": "Sözcükte Anlam",
    "question": "Aşağıdaki cümlelerin hangisinde \"ağır\" sözcüğü \"ciddi, ağırbaşlı, vakar sahibi\" anlamında kullanılmıştır?",
    "options": {
      "A": "Fabrikadaki ağır çalışma koşulları işçileri günden güne yıpratıyordu.",
      "B": "Odaya girdiğimizde genzimizi yakan ağır bir boya kokusuyla karşılaştık.",
      "C": "Yıllardır tanıdığımız bu mahalle esnafı, çevresinde her zaman ağır bir insan olarak bilinirdi.",
      "D": "Toplantıda yapılan ağır eleştiriler komisyon üyelerini oldukça rahatsız etti.",
      "E": "Kamyona yüklenen ağır çuvalları indirmek için takviye işçi çağrıldı."
    },
    "answer": "C",
    "explanation": "\"Ağır\" sözcüğü C seçeneğinde vakar sahibi, ciddi ve temkinli davranan kişilik anlamında mecaz-yan anlamıyla kullanılmıştır. A'da yorucu, B'de keskin/rahatsız edici, D'de kırıcı/sert, E'de ise tartıda çok çeken (gerçek anlam) anlamındadır."
  },
  {
    "id": 2,
    "section": "Genel Yetenek",
    "subject": "Türkçe",
    "topic": "Söz Öbeklerinde Anlam (Deyimler)",
    "question": "Aşağıdaki cümlelerin hangisinde deyim, anlamına uygun kullanılmamıştır?",
    "options": {
      "A": "Uzun saatler boyunca alışveriş merkezinde dolaşınca dizlerinin bağı çözüldü, hemen bir banka oturdu.",
      "B": "Sınav sonucunu öğrenene kadar içi içine sığmadı, yerinde duramayıp sürekli salonda turladı.",
      "C": "Yaptığı fedakarlıkları herkesin yüzüne vurunca nihayetinde gözden düştü.",
      "D": "Rakibinin zayıf noktalarını önceden tespit edip hazırlıklı gelince işi tereyağından kıl çeker gibi halletti.",
      "E": "Beklediği önemli haber gecikince sabırsızlıktan etekleri zil çaldı, derin bir endişeye kapıldı."
    },
    "answer": "E",
    "explanation": "\"Etekleri zil çalmak\" deyimi çok sevinmek, neşelenmek anlamındadır. Cümlede ise \"derin bir endişeye kapıldı\" denilerek sevinç değil telaş/kaygı durumundan bahsedilmiştir; burada \"etekleri tutuştu\" deyimi kullanılmalıydı."
  },
  {
    "id": 3,
    "section": "Genel Yetenek",
    "subject": "Türkçe",
    "topic": "Cümlede Anlam (Kesin Çıkarım)",
    "question": "\"20. yüzyılın başlarında yazdığı romanlarla edebiyat dünyasında yankı uyandıran yazar, eserlerinde yalnızca kırsal insanın çilesini değil, şehir hayatına uyum sağlayamayan bireyin yabancılaşmasını da ustaca yansıtmıştır.\"\n\nBu cümleden hareketle söz konusu yazarla ilgili olarak aşağıdakilerden hangisine kesin olarak ulaşılabilir?",
    "options": {
      "A": "20. yüzyıldan önce hiç eser vermediğine",
      "B": "Yalnızca roman türünde eser kaleme aldığına",
      "C": "Eserlerinde birden fazla toplumsal ve bireysel temayı ele aldığına",
      "D": "Döneminin en çok okunan ve satan yazarı olduğuna",
      "E": "Kırsal kesim insanını kent insanından daha başarılı anlattığına"
    },
    "answer": "C",
    "explanation": "Cümlede yazarın hem \"kırsal insanın çilesini\" hem de \"şehir hayatına uyum sağlayamayan bireyin yabancılaşmasını\" anlattığı açıkça belirtilmiştir. Bu durum yazarın birden fazla tema işlediğini kesin olarak kanıtlar."
  },
  {
    "id": 4,
    "section": "Genel Yetenek",
    "subject": "Türkçe",
    "topic": "Cümle Anlam İlişkileri",
    "question": "Aşağıdaki cümlelerin hangisinde \"koşula bağlılık\" söz konusudur?",
    "options": {
      "A": "Kitabın ikinci baskısı geciktiği için okuyuculardan gelen sorular cevapsız kaldı.",
      "B": "Geçmişin hatalarından ders çıkardıkça geleceği daha sağlam inşa edebilirsin.",
      "C": "Son teslim tarihine yetişebilmek amacıyla ekip arkadaşlarıyla gece gündüz çalıştı.",
      "D": "Yağmurun şiddetini artırmasıyla birlikte sokaktaki esnaf kepenklerini kapattı.",
      "E": "Konuşmacı kürsüye çıktığında salondaki kalabalık büyük bir sessizliğe büründü."
    },
    "answer": "B",
    "explanation": "B seçeneğindeki \"-dıkça / -dikçe\" zarf-fiil eki cümleye koşul anlamı katmıştır: Geleceği sağlam inşa etmenin koşulu geçmişin hatalarından ders çıkarmaktır (ders çıkarırsan geleceği sağlam inşa edersin)."
  },
  {
    "id": 5,
    "section": "Genel Yetenek",
    "subject": "Türkçe",
    "topic": "Ses Bilgisi",
    "question": "\"Aklımı başımdan alan o eşsiz manzarayı seyrederken içimdeki hüznün yavaşça dağıldığını hissettim.\"\n\nBu cümlede aşağıdaki ses olaylarından hangisi yoktur?",
    "options": {
      "A": "Ünlü düşmesi",
      "B": "Ünsüz yumuşaması",
      "C": "Ünsüz benzeşmesi (sertleşmesi)",
      "D": "Ünlü daralması",
      "E": "Ünsüz türemesi"
    },
    "answer": "D",
    "explanation": "Cümlede:\n- Ünlü düşmesi: akıl-ı -> aklı, seyir-etmek -> seyretmek, hüzün-ün -> hüznün\n- Ünsüz yumuşaması: dağıldık-ı -> dağıldığı\n- Ünsüz sertleşmesi: yavaş-ca -> yavaşça\n- Ünsüz türemesi: his-etmek -> hissetmek\nÜnlü daralması (-yor veya 'y' kaynaştırma etkisiyle e/a'nın i/ı/u/ü olması) ise metinde yoktur."
  },
  {
    "id": 6,
    "section": "Genel Yetenek",
    "subject": "Türkçe",
    "topic": "Yazım Kuralları",
    "question": "Aşağıdaki cümlelerin hangisinde yazım yanlışı vardır?",
    "options": {
      "A": "Tarihî süreç boyunca pek çok medeniyet bu topraklarda varlığını sürdürmüştür.",
      "B": "Toplantı tutanaklarını dosyalayıp Türk Dil Kurumuna resmî bir yazıyla teslim etti.",
      "C": "Uzmanlar, Akdeniz Bölgesi'nin bu mevsimde aşırı sıcak dalgalarına maruz kalacağını belirtiyor.",
      "D": "Öğrenciler laboratuvarda yaptıkları deneyin sonuçlarını göz ardı etmeden kaydettiler.",
      "E": "Her şey yolunda giderse önümüzdeki hafta sonu İçişleri Bakanlığı'nca yeni genelge yayımlanacak."
    },
    "answer": "E",
    "explanation": "Kurum, kuruluş ve kurul adlarına gelen ekler kesme işaretiyle ayrılmaz (TDK Kuralı). Dolayısıyla \"İçişleri Bakanlığınca\" şeklinde kesme işareti olmadan yazılmalıdır. Cümlede kesme işareti kullanılarak yazım yanlışı yapılmıştır."
  },
  {
    "id": 7,
    "section": "Genel Yetenek",
    "subject": "Türkçe",
    "topic": "Noktalama İşaretleri",
    "question": "Sanatçı ( ) doğayı olduğu gibi kopyalayan bir fotoğrafçı değildir ( ) o ( ) gerçeği kendi hayal süzgecinden geçirerek yeniden yorumlayan bir yaratıcıdır ( )\n\nBu cümlede yay ayraçlarla ( ) belirtilen yerlere sırasıyla hangi noktalama işaretleri getirilmelidir?",
    "options": {
      "A": "(,) (;) (,) (.)",
      "B": "(,) (,) (,) (.)",
      "C": "(;) (,) (;) (!)",
      "D": "(,) (:) (,) (.)",
      "E": "(;) (;) (,) (...)"
    },
    "answer": "A",
    "explanation": "Özneden sonra virgül (Sanatçı,), sıralı cümleleri ayırmak ve kendi içinde virgül bulunan cümleleri ayırmak için noktalı virgül (değildir;), ikinci cümlenin öznesinden sonra virgül (o,), cümlenin bitimine ise nokta (.) getirilmelidir."
  },
  {
    "id": 8,
    "section": "Genel Yetenek",
    "subject": "Türkçe",
    "topic": "Sözcükte Yapı",
    "question": "Aşağıdaki altı çizili sözcüklerden hangisi hem yapım eki hem de çekim eki almıştır?",
    "options": {
      "A": "Bahçedeki sararmış yapraklar rüzgarın etkisiyle savruluyordu.",
      "B": "Köyün dar sokaklarında çocuk sesleri yankılanıyordu.",
      "C": "Günün yorgunluğu göz kapaklarından açıkça okunuyordu.",
      "D": "Masadaki evrakları özenle klasöre yerleştirdi.",
      "E": "Deniz kıyısında martıların çığlıkları duyuluyordu."
    },
    "answer": "C",
    "explanation": "\"Yorgunluğu\" sözcüğünün kökü \"yor-\" fiilidir. \"yor-gun\" (-gun fiilden isim yapım eki), \"yorgun-luk\" (-luk isimden isim yapım eki), \"yorgunluğ-u\" (3. tekil iyelik/çekim eki). Dolayısıyla hem yapım hem çekim eki almıştır."
  },
  {
    "id": 9,
    "section": "Genel Yetenek",
    "subject": "Türkçe",
    "topic": "Sözcük Türleri",
    "question": "\"İnsanlar (I) bazen en (II) değerli hazinelerini (III) sessizce kaybeder ama bunu (IV) fark edemezler.\"\n\nNumaralanmış sözcüklerin türleri aşağıdakilerin hangisinde sırasıyla doğru verilmiştir?",
    "options": {
      "A": "Zarf - Sıfat - İsim - Zamir",
      "B": "Zarf - Zarf - Zarf - Zamir",
      "C": "Zamir - Sıfat - İsim - Zarf",
      "D": "İsim - Zarf - Sıfat - Zamir",
      "E": "Zarf - Zarf - Sıfat - İsim"
    },
    "answer": "B",
    "explanation": "I. \"bazen\" (Zaman zarfı)\nII. \"en\" (Miktar/üstünlük zarfı - \"değerli\" sıfatını derecelendirir)\nIII. \"sessizce\" (Durum zarfı - \"kaybeder\" fiilini niteler)\nIV. \"bunu\" (İşaret zamiri)\nDolayısıyla doğru sıra: Zarf - Zarf - Zarf - Zamir şeklindedir."
  },
  {
    "id": 10,
    "section": "Genel Yetenek",
    "subject": "Türkçe",
    "topic": "Fiilimsiler",
    "question": "Aşağıdaki cümlelerin hangisinde fiilimsinin üç türüne de (isim-fiil, sıfat-fiil, zarf-fiil) yer verilmiştir?",
    "options": {
      "A": "Güneş batarken kızıla boyanan ufuk çizgisini izlemek insana tarifsiz bir huzur veriyordu.",
      "B": "Okuldan dönen çocukların neşeli kahkahaları tüm mahalleyi neşeyle doldurdu.",
      "C": "Sabah erkenden yola çıkıp akşama doğru kasabaya ulaşmayı planlıyorduk.",
      "D": "Yıllardır görmediği eski dostunu karşısında bulunca sevinçten ne yapacağını şaşırdı.",
      "E": "Kitap okumak, insanın düşünce ufkunu genişleten en etkili faaliyettir."
    },
    "answer": "A",
    "explanation": "A seçeneğinde:\n- Zarf-fiil: \"batarken\" (-ken)\n- Sıfat-fiil: \"boyanan\" (-an)\n- İsim-fiil: \"izlemek\" (-mek)\nÜç tür fiilimsi de aynı cümlede yer almaktadır."
  },
  {
    "id": 11,
    "section": "Genel Yetenek",
    "subject": "Türkçe",
    "topic": "Cümlenin Ögeleri",
    "question": "\"Köy meydanındaki asırlık çınar ağacı, kavurucu yaz sıcaklarında köy sakinlerine serin bir sığınak sunardı.\"\n\nBu cümlenin öge dizilişi aşağıdakilerin hangisinde doğru verilmiştir?",
    "options": {
      "A": "Özne - Yer Tamlayıcısı - Zarf Tümleci - Nesne - Yüklem",
      "B": "Özne - Zarf Tümleci - Yer Tamlayıcısı - Belirtisiz Nesne - Yüklem",
      "C": "Zarf Tümleci - Özne - Belirtili Nesne - Yüklem",
      "D": "Özne - Zarf Tümleci - Belirtili Nesne - Yer Tamlayıcısı - Yüklem",
      "E": "Yer Tamlayıcısı - Özne - Zarf Tümleci - Belirtisiz Nesne - Yüklem"
    },
    "answer": "B",
    "explanation": "- Sunardı: Yüklem\n- Sunan ne? \"Köy meydanındaki asırlık çınar ağacı\" (Özne)\n- Ne zaman? \"kavurucu yaz sıcaklarında\" (Zarf Tümleci)\n- Kime? \"köy sakinlerine\" (Yer Tamlayıcısı / Dolaylı Tümleç)\n- Ne sunardı? \"serin bir sığınak\" (Belirtisiz Nesne)\nDiziliş: Özne - Zarf Tümleci - Yer Tamlayıcısı - Belirtisiz Nesne - Yüklem."
  },
  {
    "id": 12,
    "section": "Genel Yetenek",
    "subject": "Türkçe",
    "topic": "Cümle Türleri",
    "question": "\"Güneş dağların ardında kaybolunca vadideki köylüler yavaş yavaş evlerine çekildi.\"\n\nBu cümleyle ilgili olarak aşağıdakilerden hangisi söylenemez?",
    "options": {
      "A": "Yükleminin türüne göre fiil cümlesidir.",
      "B": "Yükleminin yerine göre kurallı bir cümledir.",
      "C": "Anlamına göre olumlu bir cümledir.",
      "D": "Yapısına göre sıralı bir cümledir.",
      "E": "İçinde zarf-fiil bulunan girişik birleşik bir cümledir."
    },
    "answer": "D",
    "explanation": "Cümlede tek bir yüklem (\"çekildi\") ve yan cümlecik kuran fiilimsi (\"kaybolunca\") vardır. Dolayısıyla yapıca \"sıralı cümle\" değil, \"girişik birleşik cümle\"dir. D seçeneğindeki ifade yanlıştır."
  },
  {
    "id": 13,
    "section": "Genel Yetenek",
    "subject": "Türkçe",
    "topic": "Anlatım Bozukluğu",
    "question": "Aşağıdaki cümlelerin hangisinde bir anlatım bozukluğu vardır?",
    "options": {
      "A": "Konferansa katılan tüm dinleyiciler konuşmacının sözlerini dikkatle dinledi.",
      "B": "Kuşkusuz onun bu zorlu sınavı başarıyla tamamlayacağını tahmin ediyorum.",
      "C": "Trafik kurallarına uymak hem can hem mal güvenliğimizi korur.",
      "D": "Genç yazar son kitabında çocukluk yıllarındaki anılarını kaleme almış.",
      "E": "Şehir merkezinde açılan yeni sergi sanatseverlerin büyük ilgisini çekti."
    },
    "answer": "B",
    "explanation": "\"Kuşkusuz\" sözcüğü kesinlik bildirirken \"tahmin ediyorum\" ifadesi ihtimal/olasılık bildirir. Anlamca birbiriyle çelişen sözcüklerin bir arada kullanılması anlatım bozukluğuna yol açmıştır."
  },
  {
    "id": 14,
    "section": "Genel Yetenek",
    "subject": "Türkçe",
    "topic": "Anlatım Biçimleri",
    "question": "\"Hafif bir rüzgâr dalların arasındaki sarı yaprakları usulca titretiyordu. Uzakta, sislerin ardında kaybolmuş tepeler birer dev gibi heybetle yükseliyordu. Patikayı takip eden dar dere, berrak sularıyla beyaz çakıl taşlarının üzerinden adeta fısıldayarak akıyordu.\"\n\nBu parçanın anlatımında aşağıdakilerden hangisi ağır basmaktadır?",
    "options": {
      "A": "Açıklama - Örnekleme",
      "B": "Tartışma - Tanık gösterme",
      "C": "Betimleme - Benzetme",
      "D": "Öyküleme - Sayısal verilerden yararlanma",
      "E": "Karşılaştırma - Tanımlama"
    },
    "answer": "C",
    "explanation": "Parçada görsel ögeler ve niteleyici sözcüklerle sözcüklerle resim çizme sanatı olan \"betimleme\" yapılmış; \"birer dev gibi heybetle yükseliyordu\" ifadesinde ise \"benzetme\"ye başvurulmuştur."
  },
  {
    "id": 15,
    "section": "Genel Yetenek",
    "subject": "Türkçe",
    "topic": "Paragrafta Ana Düşünce",
    "question": "Edebi eserler, yalnızca yaşanmış olayları kaydeden kuru birer tarih vesikası değildir. Sanatçı, çevresinde olup bitenleri gözlemlerken onları kendi duygu ve düşünce dünyasında yoğurur; insanoğlunun evrensel sevinçlerini, kederlerini ve korkularını harmanlar. Bu yüzdendir ki yüzyıllar önce yazılmış bir tragedyayı veya bir mesneviyi okuduğumuzda, bugün yaşayan bir insanın yürek çarpıntısını derinden hissederiz.\n\nBu parçada asıl vurgulanmak istenen düşünce aşağıdakilerden hangisidir?",
    "options": {
      "A": "Tarih ile edebiyat birbirinden tamamen bağımsız disiplinlerdir.",
      "B": "Gerçek sanat eserleri, evrensel insan duygularını işlediği için kalıcılığa ve zamana meydan okuma gücüne sahiptir.",
      "C": "Klasik eserleri anlamak için yazıldığı dönemin tarihini bilmek zorunludur.",
      "D": "Sanatçılar eserlerinde toplumsal gerçekleri değil yalnızca bireysel kaygıları yansıtmalıdır.",
      "E": "Günümüz okuru geçmişte yazılan eserlere yeterli ilgiyi göstermemektedir."
    },
    "answer": "B",
    "explanation": "Parçada edebi eserlerin yüzyıllar geçse bile evrensel insan duygularını aktarabilmesi ve günümüz insanına ulaşabilmesi üzerinde durulmuştur. Bu durum sanatın kalıcılığını ve evrenselliğini vurgular."
  },
  {
    "id": 16,
    "section": "Genel Yetenek",
    "subject": "Türkçe",
    "topic": "Paragrafta Yardımcı Düşünce",
    "question": "Geleneksel Türk kahvesi, yalnızca bir içecek değil, aynı zamanda köklü bir sosyal kültürün taşıyıcısıdır. Çekirdeklerin incecik öğütülmesi, bakır cezvede kısık ateşte ve köpüğü taşırılmadan pişirilmesi kendine has bir ustalık gerektirir. Lokum ve su eşliğinde sunulması, misafire verilen kıymeti ve zarif bir ikram anlayışını simgeler. 2013 yılında UNESCO Somut Olmayan Kültürel Miras Temsili Listesi'ne giren bu gelenek, dostluk ve muhabbetin en samimi aracı olmayı sürdürmektedir.\n\nBu parçaya göre Türk kahvesi ile ilgili olarak aşağıdakilerden hangisine değinilmemiştir?",
    "options": {
      "A": "Hazırlanışının özel bir incelik ve ustalık barındırdığına",
      "B": "Uluslararası alanda kültürel bir miras olarak tescillendiğine",
      "C": "Sunum şeklinin konuğa duyulan saygıyı yansıttığına",
      "D": "Dünyada en çok tüketilen kahve türü olduğuna",
      "E": "Sosyal ilişkilerde ve dostluk bağlarında önemli bir rol oynadığına"
    },
    "answer": "D",
    "explanation": "Parçada Türk kahvesinin pişirilme tarzı (A), UNESCO mirası oluşu (B), sunumu ve misafire hürmeti (C), muhabbet aracı oluşu (E) belirtilmiştir; ancak dünyada en çok tüketilen kahve olduğuna dair hiçbir ifade yer almamaktadır."
  },
  {
    "id": 17,
    "section": "Genel Yetenek",
    "subject": "Türkçe",
    "topic": "Paragraf Tamamlama",
    "question": "Başarılı bir eleştirmen, esere yaklaşırken kişisel sempatilerini ya da kırgınlıklarını kapının dışında bırakmalıdır. Yazarın kişiliği, siyasi görüşü veya popülaritesi değerlendirme cetvelinin bir parçası olamaz. Eleştirmen, ne yazarın avukatı ne de savcısıdır; o yalnızca eserin niteliğini tartıya koyan tarafsız bir hakemdir. Bu tarafsızlık yitirildiğinde ----.\n\nBu parçanın sonuna düşüncenin akışına göre aşağıdakilerden hangisi getirilmelidir?",
    "options": {
      "A": "yazarın yeni eserler üretme şevki daha da kamçılanır",
      "B": "eleştiri sanatı nesnelliğini kaybedip dedikoduya ve sübjektif yargılara dönüşür",
      "C": "okuyucular klasikleşmiş metinleri yeniden keşfetme imkanı bulurlar",
      "D": "kitabın satış rakamları hızla tırmanışa geçer",
      "E": "eleştirmenin edebi zevki ve üslubu zenginleşmiş olur"
    },
    "answer": "B",
    "explanation": "Paragraf eleştirmenin tarafsızlığı ve nesnelliği üzerine kuruludur. \"Bu tarafsızlık yitirildiğinde\" ifadesini en mantıklı ve tutarlı şekilde tamamlayan olumsuz sonuç \"eleştiri sanatı nesnelliğini kaybedip sübjektif yargılara dönüşür\" yargısıdır."
  },
  {
    "id": 18,
    "section": "Genel Yetenek",
    "subject": "Türkçe",
    "topic": "Akışı Bozan Cümle",
    "question": "(I) Şehir hayatının getirdiği gürültü ve keşmekeş, günümüz insanını her geçen gün daha fazla strese sürüklemektedir. (II) Sürekli bir koşturmaca içinde olan bireyler, ruhsal ve bedensel açıdan dinlenebilecekleri alanlar aramaktadır. (III) Doğayla baş başa geçirilen kısa hafta sonu tatilleri bu yorgunluğu hafifletmede önemli bir sığınak işlevi görmektedir. (IV) Büyük metropollerde konut fiyatlarının hızla artması aile bütçelerini derinden sarsmaktadır. (V) Yeşillikler içinde yapılan bir yürüyüş ya da göl kenarında geçirilen sessiz bir gün insan zihnini yenilemeye yetmektedir.\n\nBu parçadaki numaralanmış cümlelerden hangisi düşüncenin akışını bozmaktadır?",
    "options": {
      "A": "I",
      "B": "II",
      "C": "III",
      "D": "IV",
      "E": "V"
    },
    "answer": "D",
    "explanation": "Parçada genel olarak modern şehir stresinden kaçış, dinlenme ve doğayla temasın ruhsal dinginlik sağlaması ele alınmaktadır. IV. cümlede ise aniden \"konut fiyatları ve aile bütçesi\" konusuna geçilerek konunun odağı ve akışı bozulmuştur."
  },
  {
    "id": 19,
    "section": "Genel Yetenek",
    "subject": "Türkçe",
    "topic": "Paragrafı İkiye Bölme",
    "question": "(I) Kütüphaneler, geçmişin bilgi birikimini geleceğe taşıyan sessiz hafıza merkezleridir. (II) Tozlu raflar arasında saklanan her kitap, insanlığın düşünce serüvenine tanıklık eden paha biçilmez bir belgedir. (III) Bu kurumlar, yüzyıllardır araştırmacıların, öğrencilerin ve meraklı zihinlerin en güvenli bilgi limanı olmuştur. (IV) Günümüzde ise dijital teknolojilerin hızla gelişmesiyle birlikte bilginin üretilme ve saklanma biçimi köklü bir değişime uğramıştır. (V) Artık milyonlarca sayfalık dijital arşivlere tek bir tıkla dünyanın her köşesinden erişilebilmektedir. (VI) Bu dönüşüm, fiziki mekan sınırlarını ortadan kaldırarak bilgiye ulaşımı evrensel boyutta demokratikleştirmektedir.\n\nBu parça iki paragrafa bölünmek istense ikinci paragraf numaralanmış cümlelerin hangisiyle başlar?",
    "options": {
      "A": "II",
      "B": "III",
      "C": "IV",
      "D": "V",
      "E": "VI"
    },
    "answer": "C",
    "explanation": "I, II ve III. cümlelerde geleneksel fiziki kütüphanelerin tarihi ve önemi anlatılırken IV. cümleden itibaren \"dijitalleşme ve bilginin yeni saklanma/erişilme biçimi\"ne geçilmektedir. Dolayısıyla yeni paragraf IV numaralı cümle ile başlamalıdır."
  },
  {
    "id": 20,
    "section": "Genel Yetenek",
    "subject": "Türkçe",
    "topic": "Cümle Yerleştirme",
    "question": "(I) Yazarlık, ilham perilerinin gelmesini beklemekten ziyade disiplinli bir çalışma alışkanlığı gerektirir. (II) Her gün düzenli olarak masanın başına oturmak ve zihni kelimelerle yoğurmak bu mesleğin vazgeçilmez kuralıdır. (III) Birçok usta yazar, eserlerini masa başındaki bu amansız ve sabırlı mesaiye borçlu olduğunu dile getirir. (IV) Oysa dışarıdan bakan biri için bu süreç tamamen kendiliğinden gelişen büyülü bir an gibi algılanır. (V) İşte bu yanılgı, yazarlığa heveslenen birçok gencin ilk tıkanmada kalemi elinden bırakmasına neden olur.\n\n\"Oysa gerçekte sabırla örülmeyen hiçbir metin kalıcı bir başarıya ulaşamaz.\" cümlesi, bu parçadaki numaralanmış yerlerden hangisine getirilirse parçanın anlam bütünlüğü sağlanır?",
    "options": {
      "A": "I'den sonra",
      "B": "II'den sonra",
      "C": "III'ten sonra",
      "D": "IV'ten sonra",
      "E": "V'ten sonra"
    },
    "answer": "C",
    "explanation": "III. cümlede yazarların eserlerini bu amansız ve sabırlı mesaiye borçlu oldukları ifade edilmektedir. Ardından \"Oysa gerçekte sabırla örülmeyen hiçbir metin kalıcı bir başarıya ulaşamaz.\" cümlesi gelerek düşünce pekiştirilir ve IV. cümledeki \"Oysa dışarıdan bakan biri için...\" algısıyla tezat kurulur."
  },
  {
    "id": 21,
    "section": "Genel Yetenek",
    "subject": "Türkçe",
    "topic": "Paragrafta Anlam / Yorum",
    "question": "\"Kendi eksikliklerini görmezden gelip başkalarının kusurlarını büyüteçle inceleyen bir sanatçı, hiçbir zaman olgunlaşamaz. Çünkü gerçek ustalık, başkalarının ne yaptığıyla değil, kendi kumaşının sınırlarıyla yüzleşebilme cesaretine dayanır.\"\n\nBu sözleri söyleyen bir yazarın sanatçılarda bulunmasını istediği en temel nitelik aşağıdakilerden hangisidir?",
    "options": {
      "A": "Özgünlük",
      "B": "Öz eleştiri yetisi ve dürüstlük",
      "C": "Toplumsal faydayı gözetme",
      "D": "Geleneksel motifleri modernleştirme",
      "E": "Geniş kitlelere hitap edebilme"
    },
    "answer": "B",
    "explanation": "Parçada \"kendi eksikliklerini görmezden gelmemek\" ve \"kendi sınırlarıyla yüzleşme cesareti\" vurgulanmaktadır; bu doğrudan öz eleştiri ve dürüstlük erdemine işaret eder."
  },
  {
    "id": 22,
    "section": "Genel Yetenek",
    "subject": "Türkçe",
    "topic": "Paragrafta Anlam / Çıkarım",
    "question": "Çocuk edebiyatı, yetişkinler için yazılan metinlerin basit bir özeti veya basitleştirilmiş hali değildir. Aksine çocuğun muhayyilesine seslenebilen, dünyayı onun gözleriyle görebilen ancak onu asla küçümsemeyen özel bir hassasiyet alanıdır. Bir çocuğa hayatın zorluklarını didaktik bir dille parmak sallayarak değil; estetik bir hikayenin sıcaklığında sunabilmek, belki de edebiyatın en çetin sınavıdır.\n\nBu parçadan hareketle çocuk edebiyatı ile ilgili aşağıdakilerden hangisi söylenebilir?",
    "options": {
      "A": "Öğretici unsurların estetik unsurlardan her zaman daha baskın olması gerektiği",
      "B": "Çocuk dünyasını kavrayan, buyurgan olmayan ve yüksek estetik özen gerektiren bir alan olduğu",
      "C": "Yalnızca mutlu ve tasasız konuların işlenmesinin zorunlu olduğu",
      "D": "Yetişkin edebiyatından daha az emek gerektiren bir başlangıç basamağı olduğu",
      "E": "Görsel unsurların metnin içeriğinden daha belirleyici olduğu"
    },
    "answer": "B",
    "explanation": "Parçada çocuk edebiyatının yetişkin edebiyatının basit hali olmadığı, didaktik/parmak sallayan değil estetik ve çocuğun dünyasını anlayan bir titizlik gerektirdiği açıkça ifade edilmektedir."
  },
  {
    "id": 23,
    "section": "Genel Yetenek",
    "subject": "Türkçe",
    "topic": "Paragrafta Anlam / Vurgu",
    "question": "Bir dilin zenginliği, yalnızca sözlüklerindeki madde sayısıyla ölçülmez. O dilin deyimlerindeki derinlik, atasözlerindeki nükte, şiirdeki ses ve çağrışım kapasitesi, kavramlar arasındaki ince ayrımları ifade edebilme kudreti dilin gerçek zenginliğini belirler. Kendi dilinin bu zenginliğinden habersiz bir toplum, düşünce dünyasında da sığ kalmaya mahkumdur.\n\nBu parçada dil ile ilgili vurgulanan temel husus aşağıdakilerden hangisidir?",
    "options": {
      "A": "Yabancı dillerden sözcük alımının tamamen yasaklanması gerektiği",
      "B": "Dilin zenginliğinin sözcük sayısından ziyade kavramsal derinlik ve anlatım gücünde yattığı",
      "C": "Dillerin ancak bilimsel araştırmalarla korunabileceği",
      "D": "Sözlük çalışmalarının edebi eserlerden daha önemli olduğu",
      "E": "Genç kuşakların dil bilgisi kurallarına uymadığı"
    },
    "answer": "B",
    "explanation": "Metin dilin yalnızca kelime çokluğuyla değil, duygu, nükte, derinlik ve incelikleri ifade edebilme gücüyle zengin sayılabileceğini açıkça savunmaktadır."
  },
  {
    "id": 24,
    "section": "Genel Yetenek",
    "subject": "Türkçe",
    "topic": "Çoklu Paragraf Sorusu (24-25)",
    "question": "(24 ve 25. soruları aşağıdaki parçaya göre cevaplayınız.)\n\nYapay zekâ teknolojilerinin sanat ve edebiyat alanındaki hızlı yükselişi, estetik kavramını yeniden tartışmaya açtı. Bugün algoritmalar beste yapabiliyor, şiir yazabiliyor ve resim çizebiliyor. Kimi eleştirmenler bu durumu sanatın ruhunun ölümü olarak nitelendirirken kimileri de yapay zekâyı sanatçının yaratıcılığını artıran yeni bir fırça veya enstrüman olarak görüyor. Ancak unutulmaması gereken nokta, bir sanat eserini değerli kılan şeyin yalnızca kusursuz biçimsel yapısı değil, onun arkasındaki yaşanmışlık, ıstırap, arayış ve insani bilinç olduğudur. Bir makine kusursuz bir sonat çalabilir ama o sonatı bestelerken yüreğinde hiçbir acı duyamaz.\n\nBu parçaya göre bir eseri gerçek anlamda sanat kılan temel unsur aşağıdakilerden hangisidir?",
    "options": {
      "A": "Biçimsel kusursuzluk ve teknik mükemmeliyet",
      "B": "Yapay zekâ algoritmalarının karmaşıklığı",
      "C": "Geniş kitleler tarafından beğenilmesi",
      "D": "İnsani bilinç, yaşanmışlık ve samimi duygusal derinlik",
      "E": "Klasik dönem kurallarına sıkı sıkıya bağlı kalınması"
    },
    "answer": "D",
    "explanation": "Metnin son cümlelerinde eseri değerli kılan şeyin biçimsel mükemmellik değil; arkasındaki yaşanmışlık, ıstırap, arayış ve insani bilinç olduğu açıkça belirtilmiştir."
  },
  {
    "id": 25,
    "section": "Genel Yetenek",
    "subject": "Türkçe",
    "topic": "Çoklu Paragraf Sorusu (24-25)",
    "question": "Bu parçadan yapay zekâ ile ilgili olarak aşağıdakilerden hangisi çıkarılamaz?",
    "options": {
      "A": "Müzik, resim ve edebiyat gibi farklı sanat disiplinlerinde üretim yapabildiği",
      "B": "Sanat dünyasında farklı ve zıt bakış açılarının doğmasına yol açtığı",
      "C": "Sanatçıların yerini tamamen alarak insan emeğini bütünüyle gereksiz kılacağı",
      "D": "Biçimsel ve teknik açıdan kusursuz üretimler ortaya koyabildiği",
      "E": "İnsana özgü acı çekme ve duygu hissetme yetisinden yoksun olduğu"
    },
    "answer": "C",
    "explanation": "Parçada yapay zekânın sanatçıların yerini tamamen alacağı ve insanı gereksiz kılacağı söylenmemiştir; aksine bazıları onu yaratıcılığı artıran bir araç olarak görmektedir ve insani bilincin yerini alamayacağı vurgulanmıştır."
  },
  {
    "id": 26,
    "section": "Genel Yetenek",
    "subject": "Türkçe",
    "topic": "Paragrafta Diyalog",
    "question": "Gazeteci:\n(I) ----\nYazar:\n— Bir kurguyu inşa ederken karakterlerimin beni yönlendirmesine izin veririm. Önceden katı planlar yapıp kahramanlarımı o kalıplara hapsetmem. Onların zaafları, korkuları ve arzuları hikâyenin yönünü kendiliğinden belirler.\n\nGazeteci:\n(II) ----\nYazar:\n— Aslında günümüz okuru artık uzun ve ağdalı cümlelerden çabuk yoruluyor. Ancak ben yine de anlatımın sadeliği ile düşüncenin derinliğini buluşturma gayretindeyim. Anlaşılır olmak, basite kaçmak anlamına gelmez.\n\nBu diyalogda boş bırakılan yerlere sırasıyla aşağıdakilerden hangisi getirilmelidir?",
    "options": {
      "A": "(I) Romanlarınızdaki olay örgüsünü nasıl kurgularsınız? / (II) Okurlarınızın üslubunuza yaklaşımını ve dil tercihinizi nasıl değerlendiriyorsunuz?",
      "B": "(I) Karakterlerinizi seçerken gerçek hayattan mı esinlenirsiniz? / (II) Eserlerinizin çok satması dilinizin sadeliğine mi bağlıdır?",
      "C": "(I) Yazmaya başlamadan önce ne kadar süre araştırma yaparsınız? / (II) Günümüz okurunun kitap tercihlerini nasıl buluyorsunuz?",
      "D": "(I) Karakterlerinizin psikolojik durumunu nasıl analiz edersiniz? / (II) Klasik yazarların üslubundan etkilenir misiniz?",
      "E": "(I) Kurguda mekanın rolü nedir? / (II) Gelecekte dili nasıl kullanmayı düşünüyorsunuz?"
    },
    "answer": "A",
    "explanation": "İlk yanıtta yazar kurguyu inşa ederken karakterlerin yönlendirmesine izin verdiğinden bahseder (kurgulama süreci). İkinci yanıtta ise günümüz okurunun dil ve üslup beklentisi ile kendi sade ama derin dil tercihi arasındaki dengeyi açıklar."
  },
  {
    "id": 27,
    "section": "Genel Yetenek",
    "subject": "Türkçe",
    "topic": "Sözel Mantık (27-30 Ortak Metin)",
    "question": "(27, 28, 29 ve 30. soruları aşağıdaki bilgilere göre birbirinden bağımsız olarak cevaplayınız.)\n\nBir üniversitenin edebiyat sempozyumunda Ahmet, Burak, Ceren, Derya, Emre, Fatma ve Gizem adlı 7 araştırmacı Pazartesi ve Salı günleri sunum yapmıştır.\nSunumlar Dil Bilimi, Halk Edebiyatı ve Çağdaş Türk Edebiyatı alanlarındadır.\n\nAraştırmacılar ve sunumlarıyla ilgili bilinenler şunlardır:\n• Her araştırmacı yalnızca bir sunum yapmıştır.\n• Pazartesi günü 4, Salı günü 3 araştırmacı sunum yapmıştır.\n• Dil Bilimi alanında toplam 2 kişi sunum yapmıştır ve ikisi de Salı günü sunum yapmıştır.\n• Ahmet ve Ceren aynı gün sunum yapmış ancak alanları farklıdır.\n• Burak ve Gizem aynı gün ve Çağdaş Türk Edebiyatı alanında sunum yapmıştır.\n• Derya, Pazartesi günü Halk Edebiyatı alanında sunum yapmıştır.\n• Fatma, Salı günü sunum yapmamıştır.\n\nBuna göre Salı günü sunum yapan üç araştırmacı aşağıdakilerin hangisinde birlikte verilmiştir?",
    "options": {
      "A": "Ahmet, Ceren ve Emre",
      "B": "Burak, Gizem ve Emre",
      "C": "Derya, Fatma ve Ahmet",
      "D": "Ceren, Fatma ve Burak",
      "E": "Ahmet, Burak ve Derya"
    },
    "answer": "A",
    "explanation": "Analiz:\n- Fatma Salı günü yapmadığına göre Pazartesi sunum yapmıştır.\n- Derya Pazartesi Halk Edebiyatı sunumu yapmıştır.\n- Burak ve Gizem Çağdaş Türk Edebiyatı alanında aynı gün sunum yapmıştır. Eğer Salı olsalardı Salı kontenjanı (3 kişi) dolar ve Salı'ya sadece 1 kişi kalırdı; oysa Salı günü 2 Dil Bilimi sunumu vardır. Bu nedenle Burak ve Gizem kesinlikle Pazartesi'dir.\n- Pazartesi: Fatma, Derya, Burak, Gizem (4 kişi doldu).\n- Salı: Ahmet, Ceren, Emre (3 kişi).\nDolayısıyla Salı günü sunum yapanlar Ahmet, Ceren ve Emre'dir."
  },
  {
    "id": 28,
    "section": "Genel Yetenek",
    "subject": "Türkçe",
    "topic": "Sözel Mantık (27-30 Ortak Metin)",
    "question": "Yukarıdaki bilgilere göre Emre'nin sunum yaptığı alan aşağıdakilerden hangisidir?",
    "options": {
      "A": "Dil Bilimi",
      "B": "Halk Edebiyatı",
      "C": "Çağdaş Türk Edebiyatı",
      "D": "Tiyatro Tarihi",
      "E": "Metin Şerhi"
    },
    "answer": "A",
    "explanation": "Salı günü sunum yapanlar Ahmet, Ceren ve Emre'dir. Salı günü Dil Bilimi alanında toplam 2 sunum yapılmıştır. Ahmet ve Ceren farklı alanlarda olduğuna göre ikisi birden Dil Bilimi olamaz. Dolayısıyla Emre kesinlikle Dil Bilimi alanında sunum yapmıştır."
  },
  {
    "id": 29,
    "section": "Genel Yetenek",
    "subject": "Türkçe",
    "topic": "Sözel Mantık (27-30 Ortak Metin)",
    "question": "Aşağıdakilerden hangisi KESİNLİKLE YANLIŞTIR?",
    "options": {
      "A": "Fatma, Pazartesi günü sunum yapmıştır.",
      "B": "Burak ve Gizem, Pazartesi günü sunum yapmıştır.",
      "C": "Ahmet, Salı günü sunum yapmıştır.",
      "D": "Emre, Pazartesi günü sunum yapmıştır.",
      "E": "Ceren ve Emre, aynı gün sunum yapmıştır."
    },
    "answer": "D",
    "explanation": "Pazartesi günü sunum yapan 4 kişi Fatma, Derya, Burak ve Gizem'dir. Emre ise kesinlikle Salı günü sunum yapmıştır. Dolayısıyla Emre'nin Pazartesi günü sunum yaptığı yargısı kesinlikle yanlıştır."
  },
  {
    "id": 30,
    "section": "Genel Yetenek",
    "subject": "Türkçe",
    "topic": "Sözel Mantık (27-30 Ortak Metin)",
    "question": "Ahmet'in Dil Bilimi alanında sunum yaptığı biliniyorsa, aşağıdakilerden hangisi KESİNLİKLE YANLIŞTIR?",
    "options": {
      "A": "Ceren, Halk Edebiyatı alanında sunum yapmıştır.",
      "B": "Ceren, Çağdaş Türk Edebiyatı alanında sunum yapmıştır.",
      "C": "Fatma, Çağdaş Türk Edebiyatı alanında sunum yapmıştır.",
      "D": "Ceren, Dil Bilimi alanında sunum yapmıştır.",
      "E": "Emre, Salı günü sunum yapmıştır."
    },
    "answer": "D",
    "explanation": "Dil Bilimi alanında toplam 2 kişi sunum yapmıştır. Emre'nin Dil Bilimi olduğu kesin olduğuna göre, Ahmet de Dil Bilimi yaparsa 2 kişilik Dil Bilimi kontenjanı dolar. Bu durumda Ceren kesinlikle Dil Bilimi alanında sunum yapamaz."
  },
  {
    "id": 31,
    "section": "Genel Yetenek",
    "subject": "Matematik",
    "topic": "Rasyonel Sayılar ve İşlem Önceliği",
    "question": "[(2/3 - 1/4) : (5/6)] + 1/2 işleminin sonucu kaçtır?",
    "options": {
      "A": "1",
      "B": "3/2",
      "C": "5/4",
      "D": "2",
      "E": "7/6"
    },
    "answer": "A",
    "explanation": "Önce parantez içi yapılır:\n2/3 - 1/4 = 8/12 - 3/12 = 5/12.\nBölme işlemi:\n(5/12) : (5/6) = (5/12) * (6/5) = 6/12 = 1/2.\nToplama:\n1/2 + 1/2 = 1 bulunur."
  },
  {
    "id": 32,
    "section": "Genel Yetenek",
    "subject": "Matematik",
    "topic": "Temel Kavramlar (Tek - Çift Sayılar)",
    "question": "a, b ve c pozitif tam sayılar olmak üzere,\n(3a + 5b) / 2 = c\nolduğuna göre aşağıdakilerden hangisi kesinlikle doğrudur?",
    "options": {
      "A": "c çift sayıdır.",
      "B": "c tek sayıdır.",
      "C": "a ve b'nin her ikisi de tek sayıdır.",
      "D": "a ve b'nin her ikisi de çift sayıdır.",
      "E": "a ve b aynı işaretli tek veya çifttir (biri tek ise diğeri de tektir)."
    },
    "answer": "E",
    "explanation": "(3a + 5b) / 2 = c => 3a + 5b = 2c.\n2c her durumda ÇİFT bir sayıdır.\nDolayısıyla 3a + 5b toplamı ÇİFT olmalıdır.\nİki ifadenin toplamının çift olması için:\nTek + Tek = Çift veya Çift + Çift = Çift olmalıdır.\n3 ve 5 tek katsayılar olduğundan, a ile b aynı türden olmalıdır (ikisi de tek veya ikisi de çift)."
  },
  {
    "id": 33,
    "section": "Genel Yetenek",
    "subject": "Matematik",
    "topic": "Faktöriyel",
    "question": "(8! - 7!) / 6! işleminin sonucu kaçtır?",
    "options": {
      "A": "42",
      "B": "48",
      "C": "49",
      "D": "56",
      "E": "64"
    },
    "answer": "C",
    "explanation": "Payı 7! parantezine alalım:\n8! - 7! = 8 * 7! - 7! = 7! * (8 - 1) = 7! * 7.\nŞimdi 6!'e bölelim:\n(7! * 7) / 6! = (7 * 6! * 7) / 6! = 7 * 7 = 49."
  },
  {
    "id": 34,
    "section": "Genel Yetenek",
    "subject": "Matematik",
    "topic": "Basamak Kavramı ve Bölünebilme",
    "question": "Rakamları farklı üç basamaklı 4AB sayısı hem 5 hem de 9 ile tam bölünebilmektedir.\nBuna göre A'nın alabileceği değerler toplamı kaçtır?",
    "options": {
      "A": "5",
      "B": "9",
      "C": "14",
      "D": "7",
      "E": "12"
    },
    "answer": "C",
    "explanation": "5 ile bölünebilmesi için son basamak B = 0 veya B = 5 olmalıdır.\nDurum 1: B = 0 ise sayı 4A0 olur. 9 ile bölünmesi için rakamları toplamı: 4 + A + 0 = 9'un katı => A = 5 olur (450 sayısı, rakamları farklıdır).\nDurum 2: B = 5 ise sayı 4A5 olur. 9 ile bölünmesi için rakamları toplamı: 4 + A + 5 = 9 + A = 9'un katı => A = 0 veya A = 9 olabilir. A = 0 için 405 (rakamları farklı, uygundur), A = 9 için 495 (rakamları farklı, uygundur).\nA'nın alabileceği farklı değerler: 5, 0 ve 9'dur.\nDeğerler toplamı = 5 + 0 + 9 = 14 bulunur."
  },
  {
    "id": 35,
    "section": "Genel Yetenek",
    "subject": "Matematik",
    "topic": "Ondalık ve Devirli Sayılar",
    "question": "a = 0,345\nb = 0,34(5) [5 devirli]\nc = 0,3(45) [45 devirli]\nsayılarının doğru sıralanışı aşağıdakilerden hangisidir?",
    "options": {
      "A": "a < b < c",
      "B": "a < c < b",
      "C": "c < b < a",
      "D": "b < c < a",
      "E": "c < a < b"
    },
    "answer": "B",
    "explanation": "Virgülden sonraki basamakları yan yana yazalım:\na = 0,34500...\nb = 0,34555...\nc = 0,34545...\nİlk üç basamak hepsinde 345'tir. 4. basamaklara bakalım:\na'nın 4. basamağı: 0\nc'nin 4. basamağı: 4\nb'nin 4. basamağı: 5\n0 < 4 < 5 olduğundan a < c < b sıralaması elde edilir."
  },
  {
    "id": 36,
    "section": "Genel Yetenek",
    "subject": "Matematik",
    "topic": "Basit Eşitsizlikler",
    "question": "x ve y gerçel (reel) sayılar olmak üzere,\n-2 < x < 4\n1 < y < 3\nolduğuna göre, 3x - 2y ifadesinin alabileceği EN BÜYÜK tam sayı değeri kaçtır?",
    "options": {
      "A": "7",
      "B": "8",
      "C": "9",
      "D": "10",
      "E": "11"
    },
    "answer": "C",
    "explanation": "3x için eşitsizliği 3 ile çarpalım: -6 < 3x < 12.\n-2y için eşitsizliği -2 ile çarpalım (yön değişir): -6 < -2y < -2.\nTaraf tarafa toplayalım:\n(-6) + (-6) < 3x - 2y < 12 + (-2)\n-12 < 3x - 2y < 10.\n10'dan küçük en büyük tam sayı 9'dur."
  },
  {
    "id": 37,
    "section": "Genel Yetenek",
    "subject": "Matematik",
    "topic": "Mutlak Değer",
    "question": "|2x - 6| + |3 - x| = 15\ndenklemini sağlayan x değerlerinin çarpımı kaçtır?",
    "options": {
      "A": "-16",
      "B": "-12",
      "C": "8",
      "D": "-8",
      "E": "16"
    },
    "answer": "A",
    "explanation": "|2x - 6| = 2|x - 3| ve |3 - x| = |x - 3|'tür.\nToplam: 2|x - 3| + |x - 3| = 3|x - 3| = 15.\n|x - 3| = 5.\n1) x - 3 = 5 => x1 = 8\n2) x - 3 = -5 => x2 = -2\nx değerlerinin çarpımı: 8 * (-2) = -16 bulunur."
  },
  {
    "id": 38,
    "section": "Genel Yetenek",
    "subject": "Matematik",
    "topic": "Üslü Sayılar",
    "question": "(2^(x+2) + 2^(x+1) + 2^x) / (2^(x-1)) işleminin sonucu kaçtır?",
    "options": {
      "A": "7",
      "B": "12",
      "C": "14",
      "D": "16",
      "E": "28"
    },
    "answer": "C",
    "explanation": "Payı 2^x parantezine alalım:\n2^x * (2^2 + 2^1 + 1) = 2^x * (4 + 2 + 1) = 7 * 2^x.\nPaydayı yazalım: 2^(x-1) = 2^x / 2.\nBölme: (7 * 2^x) / (2^x / 2) = 7 * 2 = 14."
  },
  {
    "id": 39,
    "section": "Genel Yetenek",
    "subject": "Matematik",
    "topic": "Köklü Sayılar",
    "question": "kök(48) - kök(27) + 6 / kök(3) işleminin sonucu kaçtır?",
    "options": {
      "A": "kök(3)",
      "B": "2*kök(3)",
      "C": "3*kök(3)",
      "D": "4*kök(3)",
      "E": "5*kök(3)"
    },
    "answer": "C",
    "explanation": "kök(48) = kök(16 * 3) = 4*kök(3)\nkök(27) = kök(9 * 3) = 3*kök(3)\n6 / kök(3) = (6 * kök(3)) / 3 = 2*kök(3)\nİşlem: 4*kök(3) - 3*kök(3) + 2*kök(3) = (4 - 3 + 2)*kök(3) = 3*kök(3)."
  },
  {
    "id": 40,
    "section": "Genel Yetenek",
    "subject": "Matematik",
    "topic": "Çarpanlara Ayırma",
    "question": "[(x^2 - 16) / (x^2 + 5x + 4)] : [(x - 4) / (x + 1)]\nifadesinin en sade hali aşağıdakilerden hangisidir?",
    "options": {
      "A": "1",
      "B": "x - 4",
      "C": "x + 4",
      "D": "(x-4)/(x+4)",
      "E": "x + 1"
    },
    "answer": "A",
    "explanation": "x^2 - 16 = (x - 4)(x + 4)\nx^2 + 5x + 4 = (x + 4)(x + 1)\nİlk kesir: [(x - 4)(x + 4)] / [(x + 4)(x + 1)] = (x - 4) / (x + 1).\nİkinci kesre bölmek ters çevirip çarpmaktır:\n[(x - 4) / (x + 1)] * [(x + 1) / (x - 4)] = 1 bulunur."
  },
  {
    "id": 41,
    "section": "Genel Yetenek",
    "subject": "Matematik",
    "topic": "Oran - Orantı",
    "question": "a / 2 = b / 3 = c / 5 ve 2a + 3b - c = 32 olduğuna göre b kaçtır?",
    "options": {
      "A": "8",
      "B": "12",
      "C": "15",
      "D": "18",
      "E": "24"
    },
    "answer": "B",
    "explanation": "a / 2 = b / 3 = c / 5 = k diyelim.\na = 2k, b = 3k, c = 5k.\nDenklemde yerine koyalım:\n2(2k) + 3(3k) - 5k = 32\n4k + 9k - 5k = 32 => 8k = 32 => k = 4.\nb = 3k = 3 * 4 = 12."
  },
  {
    "id": 42,
    "section": "Genel Yetenek",
    "subject": "Matematik",
    "topic": "Sayı Problemleri",
    "question": "Bir sınıftaki öğrenciler sıralara ikişer ikişer oturursa 7 öğrenci ayakta kalıyor. Üçer üçer otururlarsa 3 sıra boş kalıyor.\nBuna göre bu sınıfta kaç öğrenci vardır?",
    "options": {
      "A": "29",
      "B": "31",
      "C": "33",
      "D": "35",
      "E": "39"
    },
    "answer": "E",
    "explanation": "Sıra sayısına x diyelim.\nİkişer otururlarsa öğrenci sayısı: 2x + 7.\nÜçer otururlarsa 3 sıra boş kalıyorsa dolu sıra sayısı (x - 3)'tür: 3(x - 3).\nÖğrenci sayısı değişmeyeceğinden:\n2x + 7 = 3(x - 3)\n2x + 7 = 3x - 9 => x = 16 sıra vardır.\nÖğrenci sayısı = 2(16) + 7 = 32 + 7 = 39."
  },
  {
    "id": 43,
    "section": "Genel Yetenek",
    "subject": "Matematik",
    "topic": "Kesir Problemleri",
    "question": "Bir telin bir ucundan 1/6'sı kesildiğinde telin orta noktası 4 cm kaymaktadır.\nBuna göre telin kesilmeden önceki ilk boyu kaç cm'dir?",
    "options": {
      "A": "36",
      "B": "48",
      "C": "54",
      "D": "60",
      "E": "72"
    },
    "answer": "B",
    "explanation": "Bir telin bir ucundan kesilen miktarın YARISI kadar orta nokta kayar.\nOrta noktanın kayma miktarı = (Kesilen Parça) / 2 = 4 cm => Kesilen parça = 8 cm'dir.\nTelin 1/6'sı kesildiğine göre: Tel / 6 = 8 => Tel = 48 cm'dir."
  },
  {
    "id": 44,
    "section": "Genel Yetenek",
    "subject": "Matematik",
    "topic": "Yaş Problemleri",
    "question": "Bir babanın bugünkü yaşı, iki çocuğunun yaşları farkının 7 katına eşittir.\n6 yıl sonra babanın yaşı çocuklarının yaşları farkının 8 katı olacağına göre, babanın bugünkü yaşı kaçtır?",
    "options": {
      "A": "35",
      "B": "42",
      "C": "49",
      "D": "56",
      "E": "63"
    },
    "answer": "B",
    "explanation": "İki insanın yaşları farkı yıllar geçse de ASLA DEĞİŞMEZ!\nÇocukların yaş farkına 'f' diyelim.\nBabanın bugünkü yaşı = 7f.\n6 yıl sonra baba = 7f + 6 yaşında olur.\nBu yaş farkın 8 katı olacağına göre: 7f + 6 = 8f => f = 6 bulunur.\nBabanın bugünkü yaşı = 7 * 6 = 42'dir."
  },
  {
    "id": 45,
    "section": "Genel Yetenek",
    "subject": "Matematik",
    "topic": "Yüzde ve Kâr-Zarar Problemleri",
    "question": "Bir tüccar bir malı %20 kârla 360 TL'ye satmaktadır.\nBu tüccar aynı malı %15 zararla satsaydı satış fiyatı kaç TL olurdu?",
    "options": {
      "A": "245",
      "B": "255",
      "C": "265",
      "D": "275",
      "E": "285"
    },
    "answer": "B",
    "explanation": "Maliyet 100x olsun.\n%20 karlı satış fiyatı = 120x = 360 TL => x = 3 TL.\nMaliyet = 100 * 3 = 300 TL'dir.\n%15 zararlı satış fiyatı = Maliyetin %85'i = 300 * (85 / 100) = 3 * 85 = 255 TL'dir."
  },
  {
    "id": 46,
    "section": "Genel Yetenek",
    "subject": "Matematik",
    "topic": "Karışım Problemleri",
    "question": "Tuz oranı %20 olan 40 kg tuzlu su ile tuz oranı %40 olan 60 kg tuzlu su karıştırılıyor.\nBuna göre oluşan yeni karışımın tuz oranı yüzde kaçtır?",
    "options": {
      "A": "28",
      "B": "30",
      "C": "32",
      "D": "34",
      "E": "36"
    },
    "answer": "C",
    "explanation": "Karışım denklemi: (Miktar1 * Yüzde1) + (Miktar2 * Yüzde2) = Toplam Miktar * Son Yüzde\n(40 * 20) + (60 * 40) = (40 + 60) * x\n800 + 2400 = 100 * x\n3200 = 100x => x = %32."
  },
  {
    "id": 47,
    "section": "Genel Yetenek",
    "subject": "Matematik",
    "topic": "Hareket (Hız) Problemleri",
    "question": "Aralarındaki uzaklık 540 km olan A ve B şehirlerinden hızları saatte 80 km ve 100 km olan iki araç aynı anda birbirlerine doğru yola çıkıyorlar.\nBu iki araç hareketlerinden kaç saat sonra karşılaşırlar?",
    "options": {
      "A": "2,5",
      "B": "3",
      "C": "3,5",
      "D": "4",
      "E": "4,5"
    },
    "answer": "B",
    "explanation": "Birbirine doğru gelen araçlarda hızlar toplanır: Vtoplam = 80 + 100 = 180 km/s.\nYol = Hız * Zaman => 540 = 180 * t => t = 540 / 180 = 3 saat sonra karşılaşırlar."
  },
  {
    "id": 48,
    "section": "Genel Yetenek",
    "subject": "Matematik",
    "topic": "İşçi Problemleri",
    "question": "Bir işi Can tek başına 15 günde, Cem ise aynı işi 30 günde bitirebilmektedir.\nİkisi birlikte 4 gün çalıştıktan sonra Can işi bırakıyor. Kalan işi Cem tek başına kaç günde bitirir?",
    "options": {
      "A": "16",
      "B": "18",
      "C": "20",
      "D": "22",
      "E": "24"
    },
    "answer": "B",
    "explanation": "Can'ın 1 günlük işi = 1/15, Cem'in 1 günlük işi = 1/30.\nİkisinin 1 günlük işi = 1/15 + 1/30 = 3/30 = 1/10.\n4 gün birlikte çalışırlarsa yapılan iş: 4 * (1/10) = 4/10 = 2/5.\nGeriye kalan iş = 1 - 2/5 = 3/5.\nKalan işi Cem tek başına günde 1/30 hızla t günde bitirir:\nt * (1/30) = 3/5 => t = (3/5) * 30 = 18 gün."
  },
  {
    "id": 49,
    "section": "Genel Yetenek",
    "subject": "Matematik",
    "topic": "Grafik ve Tablo Yorumlama",
    "question": "Bir çiftlikteki koyun, keçi ve ineklerin dağılımı bir dairesel grafikle gösterildiğinde koyunlara ait merkez açı 180°, keçilere ait merkez açı 120° olmaktadır.\nÇiftlikte toplam 24 adet inek olduğuna göre, bu çiftlikteki koyun sayısı kaçtır?",
    "options": {
      "A": "48",
      "B": "60",
      "C": "72",
      "D": "84",
      "E": "96"
    },
    "answer": "C",
    "explanation": "Daire grafiğinin tamamı 360°'dir.\nİneklere ait merkez açı = 360° - (180° + 120°) = 360° - 300° = 60°.\n60°'ye 24 inek düşüyorsa:\n180° (koyunlar) 60°'nin tam 3 katıdır.\nKoyun sayısı = 24 * 3 = 72 bulunur."
  },
  {
    "id": 50,
    "section": "Genel Yetenek",
    "subject": "Matematik",
    "topic": "Kümeler",
    "question": "A ve B aynı evrensel kümenin iki alt kümesidir.\ns(A) = 14, s(B) = 11 ve s(A kesişim B) = 4 olduğuna göre, s(A birleşim B) kaçtır?",
    "options": {
      "A": "19",
      "B": "21",
      "C": "23",
      "D": "25",
      "E": "27"
    },
    "answer": "B",
    "explanation": "Kümelerde birleşim formülü:\ns(A birleşim B) = s(A) + s(B) - s(A kesişim B)\ns(A birleşim B) = 14 + 11 - 4 = 25 - 4 = 21."
  },
  {
    "id": 51,
    "section": "Genel Yetenek",
    "subject": "Matematik",
    "topic": "Fonksiyonlar",
    "question": "f(2x - 3) = 4x + 5 olduğuna göre, f(7) değeri kaçtır?",
    "options": {
      "A": "21",
      "B": "23",
      "C": "25",
      "D": "27",
      "E": "29"
    },
    "answer": "C",
    "explanation": "Parantez içinin 7 olmasını istiyoruz:\n2x - 3 = 7 => 2x = 10 => x = 5 yazılmalıdır.\nx yerine 5 yazalım:\nf(7) = 4(5) + 5 = 20 + 5 = 25."
  },
  {
    "id": 52,
    "section": "Genel Yetenek",
    "subject": "Matematik",
    "topic": "Periyodik Durumlar (Mod)",
    "question": "Bugün günlerden Çarşamba olduğuna göre, 152 gün sonra günlerden hangisi olur?",
    "options": {
      "A": "Pazartesi",
      "B": "Salı",
      "C": "Çarşamba",
      "D": "Perşembe",
      "E": "Cuma"
    },
    "answer": "A",
    "explanation": "Hafta 7 günden oluşur, bu nedenle 152'yi 7'ye böleriz:\n152 = 7 * 21 + 5 (Kalan = 5).\nÇarşamba gününün üzerine 5 gün sayarız:\n1. gün: Perşembe\n2. gün: Cuma\n3. gün: Cumartesi\n4. gün: Pazar\n5. gün: Pazartesi bulunur."
  },
  {
    "id": 53,
    "section": "Genel Yetenek",
    "subject": "Matematik",
    "topic": "Olasılık",
    "question": "Bir torbada 4 beyaz, 6 mavi ve 5 kırmızı bilye vardır. Torbadan rastgele çekilen bir bilyenin MAVİ OLMAMA olasılığı kaçtır?",
    "options": {
      "A": "2/5",
      "B": "3/5",
      "C": "1/3",
      "D": "4/15",
      "E": "2/3"
    },
    "answer": "B",
    "explanation": "Toplam bilye sayısı = 4 + 6 + 5 = 15.\nMavi olmayan bilye sayısı (beyaz + kırmızı) = 4 + 5 = 9.\nOlasılık = 9 / 15 = 3 / 5 bulunur."
  },
  {
    "id": 54,
    "section": "Genel Yetenek",
    "subject": "Matematik",
    "topic": "Permütasyon ve Kombinasyon",
    "question": "5 mühendis ve 4 teknisyen arasından 2 mühendis ve 1 teknisyenden oluşan 3 kişilik bir ekip kaç farklı şekilde oluşturulabilir?",
    "options": {
      "A": "20",
      "B": "30",
      "C": "40",
      "D": "50",
      "E": "60"
    },
    "answer": "C",
    "explanation": "5 mühendis arasından 2 mühendis seçimi: C(5, 2) = (5 * 4) / (2 * 1) = 10.\n4 teknisyen arasından 1 teknisyen seçimi: C(4, 1) = 4.\nToplam farklı seçim = 10 * 4 = 40 farklı şekilde oluşturulabilir."
  },
  {
    "id": 55,
    "section": "Genel Yetenek",
    "subject": "Matematik",
    "topic": "Sayısal Mantık (Özel Tanımlı Sayı)",
    "question": "Rakamları çarpımı ile rakamları toplamının toplamına eşit olan iki basamaklı sayılara \"Uyumlu Sayı\" denir.\nÖrneğin: 29 sayısı için Rakamları Çarpımı (2 * 9 = 18) + Rakamları Toplamı (2 + 9 = 11) = 18 + 11 = 29'dur.\nBuna göre iki basamaklı EN KÜÇÜK Uyumlu Sayı kaçtır?",
    "options": {
      "A": "19",
      "B": "29",
      "C": "39",
      "D": "49",
      "E": "59"
    },
    "answer": "A",
    "explanation": "İki basamaklı sayı 10a + b olsun.\nŞart: (a * b) + (a + b) = 10a + b\na*b + a + b = 10a + b\na*b + a = 10a => a*b = 9a.\na sıfırdan farklı bir rakam olduğuna göre her iki tarafı a'ya bölersek: b = 9 olmalıdır!\nDemek ki birler basamağı 9 olan TÜM iki basamaklı sayılar Uyumlu Sayıdır (19, 29, 39, ..., 99).\nBunların en küçüğü a = 1 için 19'dur."
  },
  {
    "id": 56,
    "section": "Genel Yetenek",
    "subject": "Matematik",
    "topic": "Sayısal Mantık (Özel İşlem)",
    "question": "Gerçel sayılar kümesi üzerinde (*) işlemi,\na * b = 2a + 3b - ab\nşeklinde tanımlanıyor.\nBuna göre 4 * 5 işleminin sonucu kaçtır?",
    "options": {
      "A": "1",
      "B": "3",
      "C": "5",
      "D": "7",
      "E": "9"
    },
    "answer": "B",
    "explanation": "a = 4 ve b = 5 değerlerini işlemde yerine koyalım:\n4 * 5 = 2(4) + 3(5) - (4 * 5)\n4 * 5 = 8 + 15 - 20 = 23 - 20 = 3."
  },
  {
    "id": 57,
    "section": "Genel Yetenek",
    "subject": "Matematik (Geometri)",
    "topic": "Üçgende Açı",
    "question": "Bir ABC üçgeninde m(BAC) = 70° ve |AB| = |AC| olduğuna göre, ABC açısının ölçüsü kaç derecedir?",
    "options": {
      "A": "50°",
      "B": "55°",
      "C": "60°",
      "D": "65°",
      "E": "70°"
    },
    "answer": "B",
    "explanation": "|AB| = |AC| olduğundan ABC üçgeni ikizkenar üçgendir ve taban açıları eşittir: m(ABC) = m(ACB).\nÜçgenin iç açıları toplamı 180°'dir:\n70° + 2 * m(ABC) = 180°\n2 * m(ABC) = 110° => m(ABC) = 55°."
  },
  {
    "id": 58,
    "section": "Genel Yetenek",
    "subject": "Matematik (Geometri)",
    "topic": "Dik Üçgen ve Alan",
    "question": "ABC dik üçgeninde AB diktir BC, |AB| = 9 cm ve |BC| = 12 cm olduğuna göre, hipotenüse ait yüksekliğin uzunluğu (h) kaç cm'dir?",
    "options": {
      "A": "6",
      "B": "6,8",
      "C": "7,2",
      "D": "7,5",
      "E": "8"
    },
    "answer": "C",
    "explanation": "Özel 3-4-5 üçgeninin 3 katı: |AB| = 9, |BC| = 12 ise hipotenüs |AC| = 15 cm'dir.\nÜçgenin alanı iki farklı yoldan yazılabilir:\nAlan = (Dik Kenarlar Çarpımı) / 2 = (Hipotenüs * Yükseklik) / 2\n(9 * 12) / 2 = (15 * h) / 2\n108 = 15h => h = 108 / 15 = 7,2 cm."
  },
  {
    "id": 59,
    "section": "Genel Yetenek",
    "subject": "Matematik (Geometri)",
    "topic": "Dörtgenler ve Çokgenler (Paralelkenar)",
    "question": "Bir ABCD paralelkenarında kenar uzunlukları |AB| = 10 cm ve |BC| = 6 cm'dir.\nBu paralelkenarın bir iç açısının ölçüsü 30° olduğuna göre, paralelkenarın alanı kaç cm²'dir?",
    "options": {
      "A": "15",
      "B": "25",
      "C": "30",
      "D": "30*kök(3)",
      "E": "60"
    },
    "answer": "C",
    "explanation": "Paralelkenarın alanı = a * b * sin(alfa) formülüyle bulunur:\nAlan = 10 * 6 * sin(30°)\nsin(30°) = 1/2 olduğuna göre:\nAlan = 60 * (1/2) = 30 cm² bulunur."
  },
  {
    "id": 60,
    "section": "Genel Yetenek",
    "subject": "Matematik (Geometri)",
    "topic": "Analitik Geometri",
    "question": "Analitik düzlemde A(1, 4) ve B(5, 12) noktalarından geçen doğrunun eğimi kaçtır?",
    "options": {
      "A": "1",
      "B": "2",
      "C": "3",
      "D": "4",
      "E": "5"
    },
    "answer": "B",
    "explanation": "İki noktası bilinen doğrunun eğimi: m = (y2 - y1) / (x2 - x1)\nm = (12 - 4) / (5 - 1) = 8 / 4 = 2 bulunur."
  },
  {
    "id": 61,
    "section": "Genel Kültür",
    "subject": "Tarih",
    "topic": "İslamiyet Öncesi Türk Devletleri",
    "question": "Çin esaretine son vererek Türk boylarını yeniden bir bayrak altında toplayan (\"derleyen, toplayan\" anlamına gelen unvanı alan) ve II. Göktürk (Kutluk) Devleti'ni kuran hükümdar kimdir?",
    "options": {
      "A": "Mete Han",
      "B": "Bumin Kağan",
      "C": "İlteriş (Kutluk) Kağan",
      "D": "Bilge Kağan",
      "E": "Mukan Kağan"
    },
    "answer": "C",
    "explanation": "II. Göktürk Devleti'nin kurucusu Kutluk Kağan'dır. Dağınık Türk boylarını bir araya toplayıp devleti yeniden kurduğu için kendisine \"derleyen, toplayan\" manasına gelen \"İlteriş\" unvanı verilmiştir."
  },
  {
    "id": 62,
    "section": "Genel Kültür",
    "subject": "Tarih",
    "topic": "İslamiyet Öncesi Türk Kültür ve Medeniyeti",
    "question": "İslamiyet öncesi Türk devlet teşkilatıyla ilgili olarak aşağıda verilen eşleştirmelerden hangisi YANLIŞTIR?",
    "options": {
      "A": "Ayuki — Hükümet teşkilatı",
      "B": "Aygucı — Hükümet başkanı / Vezir",
      "C": "Toygun — Kurultay / Toy toplantılarına katılma hakkı olan üye",
      "D": "Tudun — Askeri vali",
      "E": "Ağılığ — Devlet hazinesinden sorumlu görevli"
    },
    "answer": "D",
    "explanation": "\"Tudun\", vergi memuru veya vergi denetçisidir. Askeri vali için İslamiyet öncesi Türklerde \"Tutuk\" unvanı kullanılırdı."
  },
  {
    "id": 63,
    "section": "Genel Kültür",
    "subject": "Tarih",
    "topic": "İslamiyet Öncesi Türk Toplumu ve İnanç",
    "question": "İslamiyet öncesi Türk devletlerinde kurultaydaki protokol oturma sırasına \"----\", kağanın halka ekonomik pay ve refah payı dağıtma yetkisine \"----\", ölen kişinin arkasından düzenlenen cenaze törenine ise \"----\" adı verilirdi.\n\nBu cümlede boş bırakılan yerlere sırasıyla aşağıdakilerden hangisi getirilmelidir?",
    "options": {
      "A": "Orun — Ülüş — Yuğ",
      "B": "Ülüş — Orun — Kurgan",
      "C": "Kengeş — Balbal — Yuğ",
      "D": "Orun — Kut — Balbal",
      "E": "Toygun — Töre — Sagu"
    },
    "answer": "A",
    "explanation": "Kurultaydaki oturma düzenine ve mevki hiyerarşisine 'Orun', hükümdarın kaynakları halka paylaştırma ve ekonomik güç yetkisine 'Ülüş', cenaze törenlerine ise 'Yuğ' denir."
  },
  {
    "id": 64,
    "section": "Genel Kültür",
    "subject": "Tarih",
    "topic": "İlk Türk-İslam Devletleri",
    "question": "Orta Asya'da kurulan ilk Müslüman Türk devleti olan, Bilge Kül Kadir Han tarafından kurulan, Abdülkerim Satuk Buğra Han döneminde İslamiyeti resmi din kabul eden ve Türk-İslam tarihinin ilk medresesi olan Semerkant Medresesi'ni (Tabgaç Buğra Han) inşa eden devlet aşağıdakilerden hangisidir?",
    "options": {
      "A": "Gazneliler",
      "B": "Karahanlılar",
      "C": "Büyük Selçuklu Devleti",
      "D": "Tolunoğulları",
      "E": "Harzemşahlar"
    },
    "answer": "B",
    "explanation": "Karahanlılar (Afrasiyaboğulları); Bilge Kül Kadir Han tarafından kurulmuş, Satuk Buğra Han (Abdülkerim) döneminde İslamiyeti kabul etmiş, Semerkant Medresesi'ni açarak burslu öğrencilik sistemini ilk kez uygulamış Türk-İslam devletidir."
  },
  {
    "id": 65,
    "section": "Genel Kültür",
    "subject": "Tarih",
    "topic": "Gazneliler Devleti",
    "question": "Hindistan üzerine 17 büyük sefer düzenleyerek İslamiyet'in bu coğrafyada yayılmasını sağlayan ve Abbasi halifesini Şii Büveyhoğulları baskısından kurtardığı için Türk-İslam tarihinde \"Sultan\" unvanını kullanan İLK hükümdar aşağıdakilerden hangisidir?",
    "options": {
      "A": "Alp Arslan",
      "B": "Tuğrul Bey",
      "C": "Gazneli Mahmut",
      "D": "Melikşah",
      "E": "Sebük Tegin"
    },
    "answer": "C",
    "explanation": "Abbasi halifesini koruyarak halifeden hilat ve menşur alan, Türk tarihinde ilk defa \"Sultan\" unvanını kullanan ve Hindistan'a 17 sefer yapan ünlü hükümdar Gazneli Mahmut'tur."
  },
  {
    "id": 66,
    "section": "Genel Kültür",
    "subject": "Tarih",
    "topic": "Türk-İslam Ordu Teşkilatı",
    "question": "Karahanlı, Gazneli ve Selçuklu devletlerinde uygulanan; savaş esirlerinden veya küçük yaşta satın alınan gayrimüslim çocukların özel bir askeri eğitimden geçirilerek doğrudan hükümdarın muhafız ordusuna ve devlet hizmetine kazandırıldığı sistem aşağıdakilerden hangisidir?",
    "options": {
      "A": "İkta sistemi",
      "B": "Gulam sistemi",
      "C": "İltizam sistemi",
      "D": "Tımar sistemi",
      "E": "Ayanlık sistemi"
    },
    "answer": "B",
    "explanation": "Osmanlı'daki kapıkulu/devşirme sisteminin temeli olan, savaş esirlerinin 1/5'inin eğitilip doğrudan hükümdarın saray muhafızı (Gulamân-ı Saray) yapıldığı sisteme Gulam sistemi denir."
  },
  {
    "id": 67,
    "section": "Genel Kültür",
    "subject": "Tarih",
    "topic": "Türkiye Selçuklu Devleti",
    "question": "I. Haçlı Seferi sırasında Haçlı ordularının İznik'i ele geçirmesi üzerine, Türkiye Selçuklu Devleti'nin başkentini İznik'ten Konya'ya taşıyan Selçuklu hükümdarı aşağıdakilerden hangisidir?",
    "options": {
      "A": "Süleyman Şah",
      "B": "I. Kılıç Arslan",
      "C": "I. Mesut",
      "D": "II. Kılıç Arslan",
      "E": "I. Alaeddin Keykubad"
    },
    "answer": "B",
    "explanation": "1096-1099 I. Haçlı Seferi sırasında İznik Haçlıların eline geçince I. Kılıç Arslan başkenti Konya'ya taşımış ve devletin varlığını buradan sürdürmüştür."
  },
  {
    "id": 68,
    "section": "Genel Kültür",
    "subject": "Tarih",
    "topic": "Osmanlı Kuruluş Dönemi (Beylikler)",
    "question": "Orhan Bey döneminde Osmanlı topraklarına katılan;\n• Osmanlı Devleti'nin İLK KEZ deniz gücüne ve donanmaya sahip olmasını sağlayan,\n• Hacı İlbey, Evrenos Bey ve Ece Halil gibi komutanların Osmanlı hizmetine girmesine vesile olan,\n• Osmanlı'nın Rumeli'ye geçişini son derece kolaylaştıran\nAnadolu beyliği aşağıdakilerden hangisidir?",
    "options": {
      "A": "Saruhanoğulları",
      "B": "Karesioğulları",
      "C": "Aydınoğulları",
      "D": "Candaroğulları",
      "E": "Menteşeoğulları"
    },
    "answer": "B",
    "explanation": "1345 yılında Orhan Bey tarafından barışçıl yollarla Osmanlı'ya katılan Karesioğulları Beyliği, Osmanlı'nın denizciliğe adım atmasını ve Rumeli fetihlerinin başlamasını sağlamıştır."
  },
  {
    "id": 69,
    "section": "Genel Kültür",
    "subject": "Tarih",
    "topic": "Osmanlı Kuruluş Dönemi",
    "question": "Osmanlı Devleti'nin Rumeli topraklarındaki İLK askeri üssü ve toprağı olan, Bizans'taki taht mücadelesinde Kantakuzen'e yapılan yardım karşılığında Orhan Bey döneminde (1353) alınan kale aşağıdakilerden hangisidir?",
    "options": {
      "A": "Kilitbahir Kalesi",
      "B": "Çimpe Kalesi",
      "C": "Biga Kalesi",
      "D": "Aydos Kalesi",
      "E": "Gelibolu Kalesi"
    },
    "answer": "B",
    "explanation": "1353 yılında Orhan Gazi zamanında Bizans İmparatoru Kantakuzen'e sağlanan askeri yardım karşılığında Gelibolu Yarımadası'ndaki Çimpe Kalesi üs olarak verilmiş, burası Osmanlı'nın Rumeli'deki ilk toprağı olmuştur."
  },
  {
    "id": 70,
    "section": "Genel Kültür",
    "subject": "Tarih",
    "topic": "Osmanlı Kuruluş Savaşları",
    "question": "I. Murat döneminde 1389 yılında Haçlı ordusuna karşı kazanılan;\n• Osmanlı ordusunda İLK KEZ topun sesinden yararlanıldığı,\n• Savaş meydanını gezerken Sırp askeri Miloş Obiliç tarafından I. Murat'ın şehit edildiği\nmuharebe aşağıdakilerden hangisidir?",
    "options": {
      "A": "Sırpsındığı Savaşı",
      "B": "Çirmen Savaşı",
      "C": "I. Kosova Savaşı",
      "D": "Niğbolu Savaşı",
      "E": "Varna Savaşı"
    },
    "answer": "C",
    "explanation": "1389 I. Kosova Savaşı'nda ilk kez top kullanılmış ve zafer sonrasında Sultan I. Murat şehit düşmüştür. Savaş meydanında şehit olan tek Osmanlı padişahıdır."
  },
  {
    "id": 71,
    "section": "Genel Kültür",
    "subject": "Tarih",
    "topic": "Osmanlı Kuruluş Dönemi (Fetret Devri)",
    "question": "1402 Ankara Savaşı'nda Yıldırım Bayezid'in Timur'a mağlup olup esir düşmesiyle başlayan ve kardeşler arasında 11 yıl süren taht kavgaları dönemine (Fetret Devri) son vererek devleti yeniden toparladığı için \"Osmanlı'nın İkinci Kurucusu\" sayılan padişah kimdir?",
    "options": {
      "A": "I. Mehmet (Çelebi)",
      "B": "II. Murat",
      "C": "Fatih Sultan Mehmet",
      "D": "Şehzade Mustafa",
      "E": "Şehzade İsa"
    },
    "answer": "A",
    "explanation": "1402-1413 yılları arasındaki 11 yıllık Fetret Devri'ne son veren ve kardeşlerini bertaraf ederek devleti dağılmaktan kurtaran Çelebi Mehmet (I. Mehmet), Osmanlı'nın ikinci kurucusu kabul edilir."
  },
  {
    "id": 72,
    "section": "Genel Kültür",
    "subject": "Tarih",
    "topic": "Osmanlı Kuruluş Savaşları",
    "question": "II. Murat komutasındaki Osmanlı ordusunun 1448 yılında Haçlıları ağır bir yenilgiye uğrattığı, Avrupalıların Türkleri Balkanlardan atma ümidini kesin olarak yok eden ve Türklerin Balkan hakimiyetini KESİNLEŞTİREN zafer aşağıdakilerden hangisidir?",
    "options": {
      "A": "Varna Savaşı",
      "B": "II. Kosova Savaşı",
      "C": "Niğbolu Savaşı",
      "D": "Mohaç Meydan Muharebesi",
      "E": "Otlukbeli Savaşı"
    },
    "answer": "B",
    "explanation": "1448 II. Kosova Savaşı ile Haçlılar tamamen savunmaya geçmiş, Osmanlı'nın Balkan hakimiyeti kesinleşmiştir. (Miryokefalon'un Anadolu için yaptığı etkiyi, II. Kosova Balkanlar için yapmıştır)."
  },
  {
    "id": 73,
    "section": "Genel Kültür",
    "subject": "Tarih",
    "topic": "Osmanlı Kültür ve Medeniyeti (Divan Kayıtları)",
    "question": "Osmanlı Devleti'nde Divan-ı Hümayun'da görüşülen siyasi, askeri, idari ve hukuki tüm kararların ve padişah fermanlarının Nişancı denetiminde kaydedildiği resmi defterlere ne ad verilir?",
    "options": {
      "A": "Tahrir Defteri",
      "B": "Mühimme Defteri",
      "C": "Ruznamçe",
      "D": "Tereke Defteri",
      "E": "Salname"
    },
    "answer": "B",
    "explanation": "Divan-ı Hümayun kararlarının kaydedildiği defterlere 'Mühimme Defterleri' denir. Beylikçi Kalemi tarafından tutulur ve devletin en üst düzey arşiv belgeleridir."
  },
  {
    "id": 74,
    "section": "Genel Kültür",
    "subject": "Tarih",
    "topic": "Osmanlı Mali ve Toprak Teşkilatı",
    "question": "Osmanlı Devleti'nde yeni fethedilen bir sancağın vergi kaynaklarının, arazilerinin ve nüfusunun tespit edilerek kaydedildiği deftere \"----\"; kazasker veya defterdarlıkça tutulan günlük mali gelir-gider kayıt defterine ise \"----\" adı verilirdi.\n\nBu cümlede boş bırakılan yerlere sırasıyla aşağıdakilerden hangisi getirilmelidir?",
    "options": {
      "A": "Mühimme — Salname",
      "B": "Tahrir — Ruznamçe",
      "C": "Tereke — Tahrir",
      "D": "Ruznamçe — İcmal",
      "E": "Mufassal — Mühimme"
    },
    "answer": "B",
    "explanation": "Fethedilen yerlerin vergi ve tımar dökümünün yapıldığı defter 'Tahrir Defteri'dir. Günlük bütçe ve harcama hesaplarının tutulduğu kayıt ise 'Ruznamçe'dir."
  },
  {
    "id": 75,
    "section": "Genel Kültür",
    "subject": "Tarih",
    "topic": "Osmanlı Sosyal ve İdari Yapısı",
    "question": "Osmanlı Devleti'nde geliri doğrudan padişahın annesine, kızlarına ve saray kadınlarına ayrılan arazi türü aşağıdakilerden hangisidir?",
    "options": {
      "A": "Yurtluk",
      "B": "Ocaklık",
      "C": "Paşmaklık",
      "D": "Malikane",
      "E": "Mukataa"
    },
    "answer": "C",
    "explanation": "Paşmaklık arazilerin gelirleri saray kadınlarına (valide sultan, hanım sultanlar ve kızlara) giyim ve kişisel masrafları için tahsis edilirdi."
  },
  {
    "id": 76,
    "section": "Genel Kültür",
    "subject": "Tarih",
    "topic": "Osmanlı Bilim ve Düşünce Dünyası",
    "question": "Fatih Sultan Mehmet'in hocası olan, Risaletü'n-Nuriye adlı eserinde mikrobun varlığından ilk kez söz ederek \"mikrobiyolojinin babası\" sayılan Türk-İslam bilgini kimdir?",
    "options": {
      "A": "Ali Kuşçu",
      "B": "Takiyüddin Mehmet",
      "C": "Akşemseddin",
      "D": "Sabuncuoğlu Şerefeddin",
      "E": "Katip Çelebi"
    },
    "answer": "C",
    "explanation": "Akşemseddin, Fatih'in hocası olup tıp alanında mikropların varlığından ve bulaşıcı hastalıklardan bahseden öncü bir hekim ve mutasavvıftır."
  },
  {
    "id": 77,
    "section": "Genel Kültür",
    "subject": "Tarih",
    "topic": "Osmanlı Bilim ve Kültür Tarihi",
    "question": "III. Murat döneminde İstanbul Tophane sırtlarında Osmanlı Devleti'nin İLK rasathanesini (gözlemevi) kuran ancak daha sonra Şeyhülislam fetvasıyla rasathanesi yıktırılan ünlü astronom ve matematikçi kimdir?",
    "options": {
      "A": "Takiyüddin Mehmet",
      "B": "Ali Kuşçu",
      "C": "Kadızade-i Rumi",
      "D": "Matrakçı Nasuh",
      "E": "Piri Reis"
    },
    "answer": "A",
    "explanation": "Osmanlı'nın ilk resmi rasathanesini 1577 yılında kuran bilim insanı Takiyüddin Mehmet'tir."
  },
  {
    "id": 78,
    "section": "Genel Kültür",
    "subject": "Tarih",
    "topic": "Osmanlı Hukuk Teşkilatı",
    "question": "Osmanlı mahkemelerinde kadıların yanında yer alan, mahkeme kayıtlarının tarafsızlığına tanıklık eden ve bir nevi jüri heyeti görevi gören halk temsilcilerine ne ad verilirdi?",
    "options": {
      "A": "Naib",
      "B": "Kassam",
      "C": "Şuhudü'l-Hâl",
      "D": "Muhtesip",
      "E": "Subaşı"
    },
    "answer": "C",
    "explanation": "Şuhudü'l-Hâl; mahkemede hazır bulunan, duruşmanın hakkaniyetine ve kadının kararına tanıklık eden saygın vatandaşlar/tanıklar heyetidir (Osmanlı jürisi olarak nitelendirilir)."
  },
  {
    "id": 79,
    "section": "Genel Kültür",
    "subject": "Tarih",
    "topic": "Osmanlı Islahat ve Diplomasi Tarihi",
    "question": "Osmanlı Devleti'nin Avusturya ve Venedik ile 1718 yılında imzaladığı, Batı'nın askeri ve teknik üstünlüğünü kabul ederek Avrupa'yı örnek almaya başladığı ve Lale Devri'ni başlatan antlaşma aşağıdakilerden hangisidir?",
    "options": {
      "A": "Karlofça Antlaşması",
      "B": "Pasarofça Antlaşması",
      "C": "Belgrat Antlaşması",
      "D": "Küçük Kaynarca Antlaşması",
      "E": "Yaş Antlaşması"
    },
    "answer": "B",
    "explanation": "1718 Pasarofça Antlaşması ile Osmanlı Devleti ilk kez Batı'nın üstünlüğünü kabul etmiş, savunma ve barış politikasına geçerek Lale Devri yeniliklerini başlatmıştır."
  },
  {
    "id": 80,
    "section": "Genel Kültür",
    "subject": "Tarih",
    "topic": "Osmanlı Dağılma Dönemi",
    "question": "1774 yılında Rusya ile imzalanan;\n• Kırım'ın bağımsız olduğu ve Osmanlı'nın ilk kez halkı tamamen Müslüman bir toprağı kaybettiği,\n• Osmanlı Devleti'nin tarihinde İLK KEZ savaş tazminatı ödemek zorunda kaldığı\nantlaşma aşağıdakilerden hangisidir?",
    "options": {
      "A": "Prut Antlaşması",
      "B": "Küçük Kaynarca Antlaşması",
      "C": "Bükreş Antlaşması",
      "D": "Edirne Antlaşması",
      "E": "Hünkar İskelesi Antlaşması"
    },
    "answer": "B",
    "explanation": "1774 Küçük Kaynarca Antlaşması ile Kırım bağımsız olmuş (halifelik dini bağ olarak kullanılmıştır) ve Osmanlı ilk defa savaş tazminatı ödemiştir."
  },
  {
    "id": 81,
    "section": "Genel Kültür",
    "subject": "Tarih",
    "topic": "XX. Yüzyıl Başlarında Osmanlı",
    "question": "1911 Trablusgarp Savaşı'nda Mustafa Kemal ve Enver Bey gibi vatanperver subayların Derne ve Tobruk'ta yerel halkı İtalyanlara karşı örgütlemesine rağmen; Balkan Savaşları'nın patlak vermesi üzerine İtalya ile imzalanan ve Trablusgarp ile Bingazi'nin kaybedildiği, 12 Ada'nın ise geçici olarak İtalya'ya bırakıldığı antlaşma aşağıdakilerden hangisidir?",
    "options": {
      "A": "Londra Antlaşması",
      "B": "Uşi Antlaşması",
      "C": "Atina Antlaşması",
      "D": "İstanbul Antlaşması",
      "E": "Ouchy (Lozan) Protokolü"
    },
    "answer": "B",
    "explanation": "1912 Uşi (Ouchy) Antlaşması ile Osmanlı Kuzey Afrika'daki son toprak parçasını (Trablusgarp ve Bingazi) İtalya'ya bırakmış, 12 Ada ise geçici olarak İtalya'ya teslim edilmiştir."
  },
  {
    "id": 82,
    "section": "Genel Kültür",
    "subject": "Tarih",
    "topic": "Balkan Savaşları",
    "question": "I. Balkan Savaşı'nda Midye-Enez hattının batısındaki topraklar kaybedilmişken, Balkan devletlerinin Makedonya topraklarını paylaşamayarak birbirine düşmesi (II. Balkan Savaşı) fırsat bilinerek Edirne ve Kırklareli'yi geri alan ve \"Edirne Fatihi\" unvanını kazanan Osmanlı komutanı kimdir?",
    "options": {
      "A": "Mahmut Şevket Paşa",
      "B": "Enver Paşa",
      "C": "Mustafa Kemal Paşa",
      "D": "Fevzi Çakmak",
      "E": "Rauf Orbay"
    },
    "answer": "B",
    "explanation": "II. Balkan Savaşı sırasında ordunun başına geçen Enver Paşa, Edirne ve Kırklareli'yi Bulgaristan'dan geri alarak 'Edirne Fatihi' unvanını almıştır."
  },
  {
    "id": 83,
    "section": "Genel Kültür",
    "subject": "Tarih",
    "topic": "I. Dünya Savaşı Cepheleri",
    "question": "I. Dünya Savaşı sırasında Irak Cephesi'nde Halil (Kut) Paşa komutasındaki Osmanlı ordusunun İngiliz tümenini ve General Townshend'i esir alarak tarihe büyük bir zafer olarak geçtiği muharebe aşağıdakilerden hangisidir?",
    "options": {
      "A": "Kutü'l-Amare Zaferi",
      "B": "Sarıkamış Harekâtı",
      "C": "Kanal Harekâtı",
      "D": "Medine Müdafaası",
      "E": "Anafartalar Zaferi"
    },
    "answer": "A",
    "explanation": "1916 yılında Irak Cephesi'nde kazanılan Kutü'l-Amare Zaferi'nde General Townshend dahil 13 binden fazla İngiliz askeri esir alınmıştır."
  },
  {
    "id": 84,
    "section": "Genel Kültür",
    "subject": "Tarih",
    "topic": "Kurtuluş Savaşı Hazırlık Dönemi",
    "question": "\"Milletin bağımsızlığını, yine milletin azim ve kararı kurtaracaktır.\"\n\nKurtuluş Savaşı'nın amacı, gerekçesi ve yöntemini belirten, aynı zamanda milli mücadelenin ilk ihtilal bildirisi sayılan bu tarihi madde aşağıdaki belgelerin hangisinde yer almıştır?",
    "options": {
      "A": "Havza Genelgesi",
      "B": "Amasya Genelgesi",
      "C": "Erzurum Kongresi Kararları",
      "D": "Sivas Kongresi Kararları",
      "E": "Misakımilli Kararları"
    },
    "answer": "B",
    "explanation": "22 Haziran 1919 Amasya Genelgesi'nin 3. maddesi olan bu ifade, Kurtuluş Savaşı'nın yöntemini ve milli egemenliğe dayalı yeni bir yönetimin kurulacağını müjdeleyen temel belgedir."
  },
  {
    "id": 85,
    "section": "Genel Kültür",
    "subject": "Tarih",
    "topic": "Kurtuluş Savaşı Muharebeler Dönemi",
    "question": "Batı Cephesi'nde düzenli ordunun aldığı tek yenilgi olan, Türk ordusunun imha olmasını önlemek amacıyla Mustafa Kemal'in emriyle ordunun Sakarya Nehri'nin doğusuna çekildiği ve ardından TBMM tarafından Mustafa Kemal Paşa'ya \"Başkomutanlık Yetkisi\" ile \"Tekalif-i Milliye Emirleri\"ni çıkarma hakkının verildiği muharebe aşağıdakilerden hangisidir?",
    "options": {
      "A": "I. İnönü Muharebesi",
      "B": "II. İnönü Muharebesi",
      "C": "Kütahya - Eskişehir Muharebeleri",
      "D": "Sakarya Meydan Muharebesi",
      "E": "Büyük Taarruz"
    },
    "answer": "C",
    "explanation": "Kütahya-Eskişehir Savaşları sonrasında ordu Sakarya'nın doğusuna çekilmiş; mecliste yaşanan tartışmaların ardından 5 Ağustos 1921'de Başkomutanlık Kanunu çıkarılmıştır."
  },
  {
    "id": 86,
    "section": "Genel Kültür",
    "subject": "Tarih",
    "topic": "Lozan Barış Antlaşması",
    "question": "24 Temmuz 1923'te imzalanan Lozan Barış Antlaşması ile ilgili olarak aşağıdakilerden hangisi YANLIŞTIR?",
    "options": {
      "A": "Adli, mali ve idari kapitülasyonlar tamamen kaldırılmıştır.",
      "B": "Düyun-ı Umumiye idaresinin Türkiye üzerindeki yetkilerine son verilmiştir.",
      "C": "Yabancı okulların tamamı Türk kanunlarına ve Milli Eğitim Bakanlığı'na bağlanmıştır.",
      "D": "Boğazlar tamamen Türk hakimiyetine geçmiş ve Boğazlar Komisyonu lağvedilmiştir.",
      "E": "Türkiye'nin savaş tazminatı olarak Yunanistan'dan Karaağaç ve Bosnaköy'ü alması kararlaştırılmıştır."
    },
    "answer": "D",
    "explanation": "Lozan'da Boğazlar için başkanı Türk olan uluslararası bir komisyon kurulmuştur. Boğazlar üzerindeki komisyonun kaldırılması ve tam Türk egemenliğinin sağlanması 1936 Montrö Boğazlar Sözleşmesi ile gerçekleşmiştir."
  },
  {
    "id": 87,
    "section": "Genel Kültür",
    "subject": "Tarih",
    "topic": "Atatürk İlkeleri",
    "question": "Özel teşebbüsün yetersiz kaldığı ya da milli menfaatlerin gerektirdiği büyük yatırımların bizzat devlet eliyle yapılmasını, planlı kalkınmayı ve Merkez Bankası ile Sümerbank gibi milli kuruluşların kurulmasını doğrudan destekleyen Atatürk ilkesi aşağıdakilerden hangisidir?",
    "options": {
      "A": "Cumhuriyetçilik",
      "B": "Halkçılık",
      "C": "Devletçilik",
      "D": "Laiklik",
      "E": "Milliyetçilik"
    },
    "answer": "C",
    "explanation": "Ekonomik yatırımların devlet eliyle yürütülmesi, fabrikaların ve bankaların kurulması doğrudan 'Devletçilik' ilkesi kapsamındadır."
  },
  {
    "id": 88,
    "section": "Genel Kültür",
    "subject": "Coğrafya",
    "topic": "Türkiye'nin Coğrafi Konumu",
    "question": "Türkiye 36° - 42° Kuzey paralelleri ile 26° - 45° Doğu meridyenleri arasında yer almaktadır.\nAşağıdakilerden hangisi Türkiye'nin yalnızca MATEMATİK (MUTLAK) KONUMUNUN bir sonucudur?",
    "options": {
      "A": "Aynı anda farklı iklim özelliklerinin yaşanabilmesi",
      "B": "Batıdan doğuya doğru gidildikçe yükseltinin ve sıcaklık farklarının artması",
      "C": "Güneyden kuzeye doğru gidildikçe çizgisel hızın azalması ve yer çekiminin artması",
      "D": "Üç tarafının denizlerle çevrili olması nedeniyle kıyılarda nem oranının yüksek olması",
      "E": "Transit ticaret ve enerji nakil hatları üzerinde bir kavşak noktası olması"
    },
    "answer": "C",
    "explanation": "Güneyden kuzeye doğru gidildikçe çizgisel hızın azalması ve yer çekiminin artması Dünya'nın geoit şekli ve Türkiye'nin Kuzey Yarımküre orta kuşakta yer almasıyla (yani enlemle / matematik konumla) ilgilidir. Diğer seçenekler Türkiye'nin özel (göreceli) konumunun sonuçlarıdır."
  },
  {
    "id": 89,
    "section": "Genel Kültür",
    "subject": "Coğrafya",
    "topic": "Yerel Saat ve Boylam",
    "question": "Türkiye'de tüm yıl boyunca 45° Doğu (Iğdır) meridyeninin yerel saati ulusal saat (ortak saat) olarak kullanılmaktadır.\nBuna göre 29° Doğu meridyeninde yer alan İstanbul'da yerel saat 14.00 iken, Türkiye'nin ulusal saati kaçtır?",
    "options": {
      "A": "12.56",
      "B": "13.04",
      "C": "14.16",
      "D": "15.04",
      "E": "15.16"
    },
    "answer": "D",
    "explanation": "Boylam farkı: 45° - 29° = 16 meridyen.\nZaman farkı: 16 * 4 dakika = 64 dakika (1 saat 4 dakika).\nIğdır (45° D) daha doğuda olduğu için yerel saati daha ileridir:\nUlusal saat = 14.00 + 01.04 = 15.04 bulunur."
  },
  {
    "id": 90,
    "section": "Genel Kültür",
    "subject": "Coğrafya",
    "topic": "Türkiye'nin Yerşekilleri (Orojenez)",
    "question": "Aşağıdaki dağlardan hangisinin oluşum kökeni diğerlerinden FARKLIDIR?",
    "options": {
      "A": "Kaçkar Dağları",
      "B": "Bolu Dağları",
      "C": "Kaz Dağları",
      "D": "Toros Dağları",
      "E": "Ilgaz Dağları"
    },
    "answer": "C",
    "explanation": "Kaçkar, Bolu, Ilgaz ve Toros Dağları esnek tortul tabakaların sıkışmasıyla oluşan KIVRIM dağlarıdır. Kaz Dağları ise sert kütlelerin kırılmasıyla (kırıklı hat/horst) oluşmuş bir KIRIK dağıdır."
  },
  {
    "id": 91,
    "section": "Genel Kültür",
    "subject": "Coğrafya",
    "topic": "Türkiye'nin Platoları",
    "question": "Akdeniz Bölgesi'nde yer alan Teke ve Taşeli platolarında nüfusun seyrek olmasında ve tarımsal faaliyetlerin kısıtlı kalmasında etkili olan temel faktör aşağıdakilerden hangisidir?",
    "options": {
      "A": "İklimin aşırı soğuk ve kar yağışlı olması",
      "B": "Arazinin karstik (kalkerli) yapıda olması ve suyun yer altına hızla sızması",
      "C": "Sanayi ve ulaşım yatırımlarının aşırı yoğunlaşması",
      "D": "Volkanik lav örtüsünün geniş yer kaplaması",
      "E": "Yıllık toplam yağış miktarının 200 mm'nin altına düşmesi"
    },
    "answer": "B",
    "explanation": "Teke ve Taşeli platoları kalkerli (karstik) yapıdadır. Yağan yağmur suyu geçirgen çatlaklardan yer altına hızla sızdığı için yüzey suları yetersizdir ve tarım ile yerleşmeyi sınırlandırır."
  },
  {
    "id": 92,
    "section": "Genel Kültür",
    "subject": "Coğrafya",
    "topic": "Kıyı Tipleri",
    "question": "Türkiye kıyılarında Fiyort ve Skyer tipi kıyıların GÖRÜLMEMESİNİN temel nedeni aşağıdakilerden hangisidir?",
    "options": {
      "A": "İç denizlere kıyısının olması",
      "B": "Kıyı boyunca dağların denize paralel uzanması",
      "C": "Matematiksel konumu nedeniyle kıyılarında buzul aşındırma ve biriktirmesinin etkili olmaması",
      "D": "Akıntıların ve dalga aşındırmasının çok güçlü olması",
      "E": "Gelgit genliğinin okyanus kıyılarına göre çok az olması"
    },
    "answer": "C",
    "explanation": "Fiyort ve Skyer kıyı tipleri kutup kuşağına yakın alanlarda buzulların deniz seviyesine kadar inmesiyle oluşur. Türkiye orta kuşakta (enlem/matematik konum) yer aldığı için kıyılarında buzul etkili olmamıştır."
  },
  {
    "id": 93,
    "section": "Genel Kültür",
    "subject": "Coğrafya",
    "topic": "Türkiye'nin İklimi ve Yağış Rejimleri",
    "question": "Türkiye'de görülen iklim tipleri ve en fazla yağış aldıkları mevsim eşleştirmelerinden hangisi DOĞRUDUR?",
    "options": {
      "A": "Akdeniz İklimi — İlkbahar",
      "B": "İç Anadolu Karasal İklimi — Yaz",
      "C": "Karadeniz İklimi — Sonbahar",
      "D": "Erzurum-Kars Sert Karasal İklimi — Kış",
      "E": "Güneydoğu Anadolu İklimi — Yaz"
    },
    "answer": "C",
    "explanation": "Karadeniz iklimi en fazla yağışı Sonbahar'da alır. (Akdeniz kışın, İç Anadolu ilkbaharda, Erzurum-Kars ise yazın en fazla yağışı alır)."
  },
  {
    "id": 94,
    "section": "Genel Kültür",
    "subject": "Coğrafya",
    "topic": "Rüzgarlar ve Basınç Merkezleri",
    "question": "Türkiye'ye kuzeydoğu yönünden esen, kış aylarında kuru soğuk ve ayaz getiren, yazın ise serinletici etki yapan yerel rüzgar aşağıdakilerden hangisidir?",
    "options": {
      "A": "Lodos",
      "B": "Samyeli (Keşişleme)",
      "C": "Poyraz",
      "D": "Karayel",
      "E": "Kıble"
    },
    "answer": "C",
    "explanation": "\"Kayıp Sakal\" kodlamasına göre: Kuzeybatıdan Karayel, Kuzeyden Yıldız, Kuzeydoğudan Poyraz eser. Dolayısıyla kuzeydoğudan esen rüzgar Poyraz'dır."
  },
  {
    "id": 95,
    "section": "Genel Kültür",
    "subject": "Coğrafya",
    "topic": "Türkiye'de Nüfus Dağılışı",
    "question": "Aşağıdaki yörelerden hangisinde nüfusun seyrek olmasının temel sebebi diğerlerinden FARKLI olarak \"iklim koşullarının kurak ve yağışın az olması\"dır?",
    "options": {
      "A": "Hakkari Yöresi",
      "B": "Menteşe Yöresi",
      "C": "Tuz Gölü ve Çevresi",
      "D": "Teke Platosu",
      "E": "Doğu Karadeniz Dağlık Kuşağı"
    },
    "answer": "C",
    "explanation": "Hakkari, Menteşe ve Doğu Karadeniz engebeli yerşekilleri nedeniyle; Teke karstik yapı nedeniyle seyrektir. Tuz Gölü çevresi ise yerşekilleri düz olmasına rağmen aşırı kuraklık ve yetersiz yağış nedeniyle seyrektir."
  },
  {
    "id": 96,
    "section": "Genel Kültür",
    "subject": "Coğrafya",
    "topic": "Kırsal Yerleşmeler",
    "question": "Aşağıdaki köy altı yerleşmelerinden hangisi ekonomik fonksiyonu ve kullanım süresi bakımından \"SÜREKLİ\" yerleşmeler arasında yer alır?",
    "options": {
      "A": "Yayla",
      "B": "Kom",
      "C": "Ağıl",
      "D": "Çiftlik",
      "E": "Oba"
    },
    "answer": "D",
    "explanation": "Sürekli köy altı yerleşmeleri: Çiftlik, Mahalle, Divan, Mezra'dır. Yayla, kom, ağıl, oba ve dam ise hayvancılık amaçlı geçici yerleşmelerdir."
  },
  {
    "id": 97,
    "section": "Genel Kültür",
    "subject": "Coğrafya",
    "topic": "Türkiye'de Tarım",
    "question": "Pirinç (çeltik) ekim alanlarının devlet kontrolünde belirlenmesi ve yerleşim yerlerinin hemen bitişiğinde ekimine izin verilmemesinin TEMEL GEREKÇESİ aşağıdakilerden hangisidir?",
    "options": {
      "A": "Aşırı su tüketimini engelleyerek kuraklıkla mücadele etmek",
      "B": "Bataklık alanların sıtma hastalığına (sivrisineklere) neden olmasını önlemek",
      "C": "İthalat dengesini ve gümrük vergilerini korumak",
      "D": "Toprakta taban suyu tuzlanmasını engellemek",
      "E": "Fiyat dalgalanmalarının önüne geçmek"
    },
    "answer": "B",
    "explanation": "Çeltik bol su içinde bataklık ortamında yetiştirildiğinden sivrisinek üremesine ve sıtma salgınına yol açma riski taşır; bu nedenle Sağlık Bakanlığı izniyle yerleşim alanlarından uzakta devlet kontrolünde ekilir."
  },
  {
    "id": 98,
    "section": "Genel Kültür",
    "subject": "Coğrafya",
    "topic": "Toprak Tipleri",
    "question": "Erzurum-Kars platosunda gür dağ çayırları altında gelişen, organik madde (humus) bakımından son derece zengin olduğu için \"kara toprak\" olarak da bilinen verimli toprak türü aşağıdakilerden hangisidir?",
    "options": {
      "A": "Terra-Rossa",
      "B": "Podzol",
      "C": "Çernezyom",
      "D": "Alüvyal",
      "E": "Vertisol"
    },
    "answer": "C",
    "explanation": "Erzurum-Kars çevresinde yaz yağışlarıyla yeşeren çayırların altında oluşan koyu renkli, humusu çok yüksek topraklara Çernezyom denir."
  },
  {
    "id": 99,
    "section": "Genel Kültür",
    "subject": "Coğrafya",
    "topic": "Türkiye'de Hayvancılık",
    "question": "Akdeniz iklim bölgesinde maki bitki örtüsünün yaygın olduğu kalkerli ve engebeli dağlık alanlarda (özellikle Teke ve Taşeli yörelerinde) en yaygın olarak yetiştirilen hayvancılık türü aşağıdakilerden hangisidir?",
    "options": {
      "A": "Koyun",
      "B": "Kıl Keçisi",
      "C": "Manda",
      "D": "İpek Böceği",
      "E": "Tiftik Keçisi"
    },
    "answer": "B",
    "explanation": "Makiliklerin taze sürgünleriyle beslenebilen ve sarp kayalık arazide çevikçe hareket eden hayvan türü Kıl Keçisidir (Teke-Taşeli)."
  },
  {
    "id": 100,
    "section": "Genel Kültür",
    "subject": "Coğrafya",
    "topic": "Türkiye'nin Madenleri",
    "question": "Türkiye'nin dünya rezervlerinin yaklaşık %72'sine sahip olduğu;\n• Balıkesir (Susurluk, Bigadiç), Kütahya (Emet), Eskişehir (Seyitgazi) ve Bursa (Kestelek)'ta çıkarılan,\n• Roket yakıtı, cam, seramik, deterjan ve nükleer sanayide kullanılan\nstratejik maden aşağıdakilerden hangisidir?",
    "options": {
      "A": "Krom",
      "B": "Boksit",
      "C": "Bor mineralleri",
      "D": "Barit",
      "E": "Fosfat"
    },
    "answer": "C",
    "explanation": "Türkiye'nin dünyada 1 numara olduğu, Susurluk, Bigadiç, Emet, Seyitgazi ve Kestelek havzalarında çıkarılan milli maden Bor mineralleridir."
  },
  {
    "id": 101,
    "section": "Genel Kültür",
    "subject": "Coğrafya",
    "topic": "Enerji Kaynakları",
    "question": "Fay hatlarına ve genç kırıklı jeolojik yapıya bağlı olarak yer altındaki sıcak su buharından elektrik üreten İLK jeotermal santralimiz aşağıdaki yerleşim yerlerinden hangisinde kurulmuştur?",
    "options": {
      "A": "Denizli — Sarayköy",
      "B": "Manisa — Soma",
      "C": "Zonguldak — Çatalağzı",
      "D": "Kütahya — Tunçbilek",
      "E": "Muğla — Yatağan"
    },
    "answer": "A",
    "explanation": "Türkiye'nin ilk jeotermal elektrik santrali Denizli - Sarayköy'de kurulmuştur. Daha sonra Aydın Germencik'te de büyük santraller açılmıştır."
  },
  {
    "id": 102,
    "section": "Genel Kültür",
    "subject": "Coğrafya",
    "topic": "Türkiye'de Sanayi",
    "question": "Karabük ve Ereğli'de demir-çelik sanayisinin kurulmasında belirleyici olan temel faktör aşağıdakilerden hangisidir?",
    "options": {
      "A": "Demir cevheri yataklarının zengin olması",
      "B": "Geniş bir tüketici pazarının bulunması",
      "C": "Enerji kaynağına (taş kömürüne) yakınlık",
      "D": "İş gücü temininin çok kolay olması",
      "E": "İklim koşullarının elverişli olması"
    },
    "answer": "C",
    "explanation": "Karabük ve Ereğli'de demir çıkarılmaz (demir Sivas Divriği ve Malatya Hekimhan'dan gelir). Burada fabrikanın kurulma nedeni Zonguldak havzasındaki taş kömürü (yüksek ısı veren enerji kaynağı) varlığıdır."
  },
  {
    "id": 103,
    "section": "Genel Kültür",
    "subject": "Coğrafya",
    "topic": "Ulaşım ve Geçitler",
    "question": "Doğu Karadeniz kıyı kuşağını (Trabzon limanını) Gümüşhane ve Erzurum üzerinden Doğu Anadolu'ya bağlayan ve tarihi İpek Yolu güzergahında yer alan önemli geçit aşağıdakilerden hangisidir?",
    "options": {
      "A": "Gülek Geçidi",
      "B": "Zigana Geçidi",
      "C": "Çubuk Geçidi",
      "D": "Belen Geçidi",
      "E": "Sertavul Geçidi"
    },
    "answer": "B",
    "explanation": "Trabzon ile Gümüşhane arasında yer alan ve Doğu Karadeniz'i iç kesimlere bağlayan stratejik geçit Zigana Geçidi'dir."
  },
  {
    "id": 104,
    "section": "Genel Kültür",
    "subject": "Coğrafya",
    "topic": "Bölgesel Kalkınma Projeleri",
    "question": "Fırat ve Dicle nehirlerinin sularını tarımsal sulamada kullanarak bölgede pamuk, mısır ve ayçiçeği üretiminde patlama yaşanmasını sağlayan, Türkiye'nin en kapsamlı bölgesel kalkınma projesi aşağıdakilerden hangisidir?",
    "options": {
      "A": "DOKAP",
      "B": "GAP",
      "C": "DAP",
      "D": "KOP",
      "E": "ZBK"
    },
    "answer": "B",
    "explanation": "Güneydoğu Anadolu Projesi (GAP), sulama ve hidroelektrik santralleriyle Şanlıurfa ve çevresinde sulu tarımı geliştirmiş ve pamuk üretiminde Güneydoğu'yu 1. sıraya yükseltmiştir."
  },
  {
    "id": 105,
    "section": "Genel Kültür",
    "subject": "Coğrafya",
    "topic": "Kültür ve Turizm Varlıkları",
    "question": "UNESCO Dünya Mirası Listesi'nde hem DOĞAL hem de KÜLTÜREL (karma) miras alanı olarak tescillenen Türkiye'deki iki varlık aşağıdakilerden hangisinde birlikte verilmiştir?",
    "options": {
      "A": "Göreme Milli Parkı / Kapadokya — Pamukkale / Hierapolis",
      "B": "Divriği Ulu Camii — Nemrut Dağı",
      "C": "Safranbolu Şehri — Truva Antik Kenti",
      "D": "Efes Antik Kenti — Ani Arkeolojik Alanı",
      "E": "Çatalhöyük — Arslantepe Höyüğü"
    },
    "answer": "A",
    "explanation": "Türkiye'nin UNESCO Karma (Doğal + Kültürel) miras listesindeki iki eşsiz değeri: Göreme Milli Parkı ve Kapadokya ile Pamukkale-Hierapolis'tir."
  },
  {
    "id": 106,
    "section": "Genel Kültür",
    "subject": "Vatandaşlık",
    "topic": "Hukukun Temel Kavramları (Ehliyetler)",
    "question": "Haklara ve borçlara sahip olabilme yeteneğini ifade eden, kişinin sağ ve tam doğmasıyla kendiliğinden başlayan ve pasif nitelik taşıyan ehliyet türü aşağıdakilerden hangisidir?",
    "options": {
      "A": "Fiil ehliyeti",
      "B": "Hak ehliyeti",
      "C": "Sınırlı ehliyet",
      "D": "Ceza ehliyeti",
      "E": "Dava ehliyeti"
    },
    "answer": "B",
    "explanation": "Hak ehliyeti; sağ ve tam doğumla başlayan, herkesin sahip olduğu, hak ve borç sahibi olabilme pasif yeteneğidir. Kendi eylemleriyle hak kazanıp borç altına girme ise 'Fiil ehliyeti'dir."
  },
  {
    "id": 107,
    "section": "Genel Kültür",
    "subject": "Vatandaşlık",
    "topic": "Hukuki Yaptırımlar (Hükümsüzlük)",
    "question": "Bir hukuki işlemin kanunun aradığı zorunlu kurucu unsurlarından birinin eksikliği sebebiyle hukuk aleminde hiç doğmamış, yok sayılması durumuna (örneğin resmi evlendirme memuru olmadan yapılan evlilik) ne ad verilir?",
    "options": {
      "A": "Mutlak butlan",
      "B": "Nisbi butlan",
      "C": "Yokluk",
      "D": "Tek taraflı bağlamazlık",
      "E": "Askıda hükümsüzlük"
    },
    "answer": "C",
    "explanation": "Hukuki işlemin kurucu unsurlarından biri eksikse o işlem hukuk dünyasında hiç doğmamıştır, buna 'Yokluk' denir."
  },
  {
    "id": 108,
    "section": "Genel Kültür",
    "subject": "Vatandaşlık",
    "topic": "Demokrasi ve Hükümet Sistemleri",
    "question": "Halkın temsilcilerini seçtikten sonra da belirli yöntemlerle yönetime doğrudan katılabildiği;\n• Referandum (halk oylaması),\n• Halk vetosu,\n• Halk teşebbüsü,\n• Temsilcilerin azli\ngibi araçların uygulandığı demokrasi tipi aşağıdakilerden hangisidir?",
    "options": {
      "A": "Doğrudan demokrasi",
      "B": "Yarı doğrudan demokrasi",
      "C": "Temsili demokrasi",
      "D": "Otokratik demokrasi",
      "E": "Monarşik demokrasi"
    },
    "answer": "B",
    "explanation": "Hem temsilcilerin seçildiği hem de referandum, halk vetosu, halk teşebbüsü ve azil gibi doğrudan denetim araçlarının bulunduğu sistem 'Yarı doğrudan demokrasi'dir."
  },
  {
    "id": 109,
    "section": "Genel Kültür",
    "subject": "Vatandaşlık",
    "topic": "Türk Anayasa Tarihi",
    "question": "Türk anayasa tarihinde yürürlüğe girmiş olan;\n• Değiştirilmesi diğer kanunlarla aynı usule tabi olan tek YUMUŞAK anayasa,\n• Yalnızca 23 madde ve 1 ek maddeden oluşan tek ÇERÇEVE anayasa\nözelliğini taşıyan anayasa aşağıdakilerden hangisidir?",
    "options": {
      "A": "1876 Kanun-ı Esasi",
      "B": "1921 Teşkilat-ı Esasiye",
      "C": "1924 Anayasası",
      "D": "1961 Anayasası",
      "E": "1982 Anayasası"
    },
    "answer": "B",
    "explanation": "1921 Anayasası (Teşkilat-ı Esasiye), olağanüstü savaş şartlarında hazırlandığı için kısa ve genel ilkeleri içeren tek 'Çerçeve' ve değiştirilmesi için nitelikli çoğunluk aramayan tek 'Yumuşak' anayasamızdır."
  },
  {
    "id": 110,
    "section": "Genel Kültür",
    "subject": "Vatandaşlık",
    "topic": "1982 Anayasası (Yasama)",
    "question": "1982 Anayasası'na göre Türkiye Büyük Millet Meclisi'nin seçimleri kural olarak kaç yılda bir yapılır ve Meclis üye tamsayısı kaçtır?",
    "options": {
      "A": "4 yıl — 550 milletvekili",
      "B": "4 yıl — 600 milletvekili",
      "C": "5 yıl — 550 milletvekili",
      "D": "5 yıl — 600 milletvekili",
      "E": "5 yıl — 450 milletvekili"
    },
    "answer": "D",
    "explanation": "2017 anayasa değişikliği ile TBMM seçim dönemi 5 yıla çıkarılmış ve milletvekili sayısı 600 olarak belirlenmiştir."
  },
  {
    "id": 111,
    "section": "Genel Kültür",
    "subject": "Vatandaşlık",
    "topic": "1982 Anayasası (Kanun Yapımı)",
    "question": "1982 Anayasası'na göre kanun teklif etmeye yetkili makam aşağıdakilerden hangisidir?",
    "options": {
      "A": "Cumhurbaşkanı",
      "B": "Bakanlar",
      "C": "Milletvekilleri",
      "D": "Anayasa Mahkemesi Başkanı",
      "E": "Yargıtay Cumhuriyet Başsavcısı"
    },
    "answer": "C",
    "explanation": "1982 Anayasası'na göre kanun teklif etmeye yalnızca milletvekilleri yetkilidir. (Cumhurbaşkanının yalnızca Bütçe Kanun Teklifini sunma yetkisi vardır, genel kanun teklif edemez)."
  },
  {
    "id": 112,
    "section": "Genel Kültür",
    "subject": "Vatandaşlık",
    "topic": "1982 Anayasası (Yürütme)",
    "question": "1982 Anayasası'na göre Cumhurbaşkanı seçilebilmek için aranan şartlarla ilgili olarak aşağıdakilerden hangisi YANLIŞTIR?",
    "options": {
      "A": "Kırk yaşını doldurmuş olmak",
      "B": "Yükseköğrenim yapmış olmak",
      "C": "Türk vatandaşı olmak",
      "D": "Milletvekili seçilme yeterliliğine sahip olmak",
      "E": "Halen Türkiye Büyük Millet Meclisi üyesi (milletvekili) olmak"
    },
    "answer": "E",
    "explanation": "Cumhurbaşkanı seçilmek için milletvekili olma şartı yoktur; meclis dışından da aday gösterilebilir. Milletvekili olan biri seçilirse milletvekilliği kendiliğinden sona erer."
  },
  {
    "id": 113,
    "section": "Genel Kültür",
    "subject": "Vatandaşlık",
    "topic": "1982 Anayasası (Yargı)",
    "question": "1982 Anayasası'na göre Anayasa Mahkemesi kaç üyeden oluşur ve üyelerin görev süresi kaç yıldır?",
    "options": {
      "A": "12 üye — 12 yıl",
      "B": "15 üye — 12 yıl",
      "C": "15 üye — 9 yıl",
      "D": "17 üye — 12 yıl",
      "E": "15 üye — Ömür boyu (65 yaş)"
    },
    "answer": "B",
    "explanation": "Anayasa Mahkemesi 15 üyeden oluşur. Üyeler 12 yıl için seçilirler ve bir kimse iki defa Anayasa Mahkemesi üyesi seçilemez."
  },
  {
    "id": 114,
    "section": "Genel Kültür",
    "subject": "Vatandaşlık",
    "topic": "İdare Hukuku",
    "question": "Merkezi idarenin (devlet tüzel kişiliğinin), yerel yönetimlerin (belediye, il özel idaresi, köy) eylem ve işlemlerinin hukuka uygunluğunu denetleme ve kamu hizmetlerinin aksamasını önleme yetkisine (örneğin İçişleri Bakanlığı'nın soruşturma açılan bir belediye başkanını geçici olarak görevden uzaklaştırması) ne ad verilir?",
    "options": {
      "A": "Hiyerarşi yetkisi",
      "B": "İdari vesayet yetkisi",
      "C": "Düzenleme yetkisi",
      "D": "Takdir yetkisi",
      "E": "Yaptırım yetkisi"
    },
    "answer": "B",
    "explanation": "Ayrı kamu tüzel kişileri arasındaki denetime 'İdari Vesayet' denir. Devlet tüzel kişiliğinin mahalli idareler üzerindeki denetimi idari vesayetin en tipik örneğidir."
  },
  {
    "id": 115,
    "section": "Genel Kültür",
    "subject": "Güncel Bilgiler",
    "topic": "Uluslararası Kuruluşlar",
    "question": "Türk dünyasının entegrasyonunu sağlamak amacıyla kurulan; Türkiye, Azerbaycan, Kazakistan, Kırgızistan ve Özbekistan'ın kurucu üye olduğu, genel sekreterliği İstanbul'da bulunan uluslararası teşkilat aşağıdakilerden hangisidir?",
    "options": {
      "A": "TÜRKSOY",
      "B": "Türk Devletleri Teşkilatı (TDT)",
      "C": "Ekonomik İşbirliği Teşkilatı (EİT)",
      "D": "Karadeniz Ekonomik İşbirliği (KEİ)",
      "E": "İslam İşbirliği Teşkilatı (İİT)"
    },
    "answer": "B",
    "explanation": "2009 Nahçıvan Anlaşması ile Türk Keneşi adıyla temelleri atılan ve 2021 İstanbul Zirvesi'nde adı 'Türk Devletleri Teşkilatı' olarak değiştirilen kuruluşun genel merkezi İstanbul'dadır."
  },
  {
    "id": 116,
    "section": "Genel Kültür",
    "subject": "Güncel Bilgiler",
    "topic": "UNESCO Dünya Mirası",
    "question": "2023 yılında Suudi Arabistan'da düzenlenen UNESCO Dünya Miras Komitesi toplantısında, Türkiye'nin 20. kültür varlığı olarak UNESCO Dünya Miras Listesi'ne dahil edilen Ankara'nın Polatlı ilçesindeki antik Frigya kenti aşağıdakilerden hangisidir?",
    "options": {
      "A": "Hattuşaş",
      "B": "Gordion Antik Kenti",
      "C": "Çatalhöyük",
      "D": "Arslantepe Höyüğü",
      "E": "Sardes Antik Kenti"
    },
    "answer": "B",
    "explanation": "Ankara'nın Polatlı ilçesinde bulunan Frig uygarlığının başkenti Gordion Antik Kenti, Eylül 2023'te Türkiye'nin 20. UNESCO Dünya Mirası olarak tescil edilmiştir."
  },
  {
    "id": 117,
    "section": "Genel Kültür",
    "subject": "Güncel Bilgiler",
    "topic": "Uzay ve Bilim Tarihi",
    "question": "Ocak 2024'te Axiom Mission 3 (Ax-3) göreviyle Uluslararası Uzay İstasyonu'na (ISS) giderek uzayda 13 farklı bilimsel deney gerçekleştiren ve \"İstikbal göklerdedir!\" sözüyle tarihe geçen TÜRKİYE'NİN İLK ASTRONOTU kimdir?",
    "options": {
      "A": "Tuva Cihangir Atasever",
      "B": "Alper Gezeravcı",
      "C": "Halil Kayıkçı",
      "D": "Selçuk Bayraktar",
      "E": "Umut Yıldız"
    },
    "answer": "B",
    "explanation": "Hava Pilot Albay Alper Gezeravcı, Ax-3 misyonu ile uzaya çıkan ilk Türk astronot olarak tarihe geçmiştir."
  },
  {
    "id": 118,
    "section": "Genel Kültür",
    "subject": "Güncel Bilgiler",
    "topic": "Türk Dünyası Kültür Başkenti",
    "question": "Uluslararası Türk Kültürü Teşkilatı (TÜRKSOY) tarafından \"2024 Yılı Türk Dünyası Kültür Başkenti\" ilan edilen Türkmenistan şehri aşağıdakilerden hangisidir?",
    "options": {
      "A": "Anev",
      "B": "Şuşa",
      "C": "Bursa",
      "D": "Hiva",
      "E": "Semerkant"
    },
    "answer": "A",
    "explanation": "TÜRKSOY Kültür Bakanları Daimi Konseyi kararıyla 2024 yılı Türk Dünyası Kültür Başkenti Türkmenistan'ın kadim Anev şehri seçilmiştir. (2022 Bursa, 2023 Şuşa idi)."
  },
  {
    "id": 119,
    "section": "Genel Kültür",
    "subject": "Güncel Bilgiler",
    "topic": "Milli Teknoloji ve Uzay",
    "question": "TÜBİTAK UZAY, TUSAŞ, ASELSAN ve C2TECH ortaklığıyla üretilen, yerlilik oranı %80'in üzerinde olan ve Temmuz 2024'te uzaya fırlatılan TÜRKİYE'NİN İLK YERLİ VE MİLLİ HABERLEŞME UYDUSU aşağıdakilerden hangisidir?",
    "options": {
      "A": "Göktürk-1",
      "B": "Göktürk-2",
      "C": "TÜRKSAT 5B",
      "D": "TÜRKSAT 6A",
      "E": "İMECE"
    },
    "answer": "D",
    "explanation": "Türkiye'nin yerli mühendislik imkanlarıyla ürettiği ilk yerli ve milli haberleşme uydusu TÜRKSAT 6A'dır. (İMECE ise yerli yer gözlem uydusudur)."
  },
  {
    "id": 120,
    "section": "Genel Kültür",
    "subject": "Güncel Bilgiler",
    "topic": "Türk Sanat ve Müzecilik Tarihi",
    "question": "Ünlü \"Kaplumbağa Terbiyecisi\" ve \"Silah Taciri\" tablolarının ressamı olan, Sanayi-i Nefise Mektebi'nin (Güzel Sanatlar Akademisi) ve İstanbul Arkeoloji Müzeleri'nin kurucusu sayılan öncü Türk sanatçı ve arkeolog kimdir?",
    "options": {
      "A": "Şeker Ahmet Paşa",
      "B": "İbrahim Çallı",
      "C": "Osman Hamdi Bey",
      "D": "Hoca Ali Rıza",
      "E": "Abidin Dino"
    },
    "answer": "C",
    "explanation": "Osman Hamdi Bey; Türk müzeciliğinin kurucusu, Sanayi-i Nefise Mektebi'nin banisi, Sayda kazılarını yürüten arkeolog ve meşhur Kaplumbağa Terbiyecisi tablosunun ressamıdır."
  }
];
