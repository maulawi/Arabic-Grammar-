/* ==========================================================================
   QURRA Grammar — Qur'an data (Phase 4, revised Phase 5)
   Verse + word IDENTITY data for the reusable Qur'an interaction system.
   Kept separate from lesson content (js/lessonContent.js) and from
   rendering (js/quranRender.js) per the "data separation" rule — the same
   QuranVerse component reads this file for any lesson that needs it,
   rather than any verse text being hard-coded into a template.

   WHAT LIVES HERE vs. IN LESSON CONTENT (revised in Phase 5):
   This file holds only a word's identity — its id, Arabic text, and
   position in the verse. It deliberately does NOT hold what a word
   *means for a given lesson* (a concept label, an explanation) — that's
   lesson content, not Qur'an data, and two different lessons may want to
   say two different, equally true things about the very same word (e.g.
   Lesson 1.1 uses 112:2 to teach "this is part of a كلام"; Lesson 1.2
   reuses the exact same verse to teach "this word, alone, is a كلمة").
   So each lesson supplies its own per-word notes in its own content
   object, keyed by the word id below, and js/lessonRender.js merges them
   onto this base data at render time via qgMergeWordNotes(). This file
   never changes to fit one lesson's framing — only the merge input does.

   SOURCE FIDELITY (read before adding a verse):
   Every verse below is a verified, labeled "QURRA supplementary example"
   — Qur'anic text used to illustrate a concept, not quoted from the
   user's reference book (the book's own examples for these lessons are
   non-Qur'anic: e.g. زيد، عبدالله، قُمْ). Nothing here is invented —
   surah, verse number and Arabic text are all independently verifiable.
   ========================================================================== */

const QG_QURAN_VERSES = {

  "112:2": {
    surah: { number: 112, nameArabic: "الإخلاص", nameEnglish: "Al-Ikhlas" },
    verse: {
      number: 2,
      arabic: "اللَّهُ الصَّمَدُ",
      translation: "Allah, the Eternal Refuge."
    },
    sourceLabel: "QURRA supplementary example",
    words: [
      { id: "112-2-w1", text: "اللَّهُ", position: 1 },
      { id: "112-2-w2", text: "الصَّمَدُ", position: 2 }
    ]
  },

  "112:1": {
    surah: { number: 112, nameArabic: "الإخلاص", nameEnglish: "Al-Ikhlas" },
    verse: {
      number: 1,
      arabic: "قُلْ هُوَ اللَّهُ أَحَدٌ",
      translation: "Say, He is Allah, [who is] One."
    },
    sourceLabel: "QURRA supplementary example",
    // Phase 6: word data added for Lesson 1.5's targeted word-tap Notice
    // (identify the one فعل among four words). Was words: null through
    // Phase 5, when this verse was only ever used whole as a Challenge.
    words: [
      { id: "112-1-w1", text: "قُلْ", position: 1 },
      { id: "112-1-w2", text: "هُوَ", position: 2 },
      { id: "112-1-w3", text: "اللَّهُ", position: 3 },
      { id: "112-1-w4", text: "أَحَدٌ", position: 4 }
    ]
  },

  "108:1": {
    surah: { number: 108, nameArabic: "الكوثر", nameEnglish: "Al-Kawthar" },
    verse: {
      number: 1,
      arabic: "إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ",
      translation: "Indeed, We have granted you al-Kawthar."
    },
    sourceLabel: "QURRA supplementary example",
    words: null
  },

  // Phase 6 (Part 1 batch) additions below.

  "112:3": {
    surah: { number: 112, nameArabic: "الإخلاص", nameEnglish: "Al-Ikhlas" },
    verse: {
      number: 3,
      arabic: "لَمْ يَلِدْ وَلَمْ يُولَدْ",
      translation: "He neither begets nor is born."
    },
    sourceLabel: "QURRA supplementary example",
    // Lesson 1.6 (الحرف): لَمْ is the book's own حرف example (p.14) — this
    // verse is QURRA's choice, but the particle itself matches the source.
    words: [
      { id: "112-3-w1", text: "لَمْ", position: 1 },
      { id: "112-3-w2", text: "يَلِدْ", position: 2 },
      { id: "112-3-w3", text: "وَلَمْ", position: 3 },
      { id: "112-3-w4", text: "يُولَدْ", position: 4 }
    ]
  },

  "1:2": {
    surah: { number: 1, nameArabic: "الفاتحة", nameEnglish: "Al-Fatihah" },
    verse: {
      number: 2,
      arabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
      translation: "All praise is due to Allah, Lord of the worlds."
    },
    sourceLabel: "QURRA supplementary example",
    // Phase 9: word data added for Lesson 4.4's مبتدأ notice word-tap. Was
    // words: null through Phase 8, when only used whole as a Challenge.
    words: [
      { id: "1-2-w1", text: "الْحَمْدُ", position: 1 },
      { id: "1-2-w2", text: "لِلَّهِ", position: 2 },
      { id: "1-2-w3", text: "رَبِّ", position: 3 },
      { id: "1-2-w4", text: "الْعَالَمِينَ", position: 4 }
    ]
  },

  "111:3": {
    surah: { number: 111, nameArabic: "المسد", nameEnglish: "Al-Masad" },
    verse: {
      number: 3,
      arabic: "سَيَصْلَىٰ نَارًا ذَاتَ لَهَبٍ",
      translation: "He will [enter to] burn in a Fire of blazing flame."
    },
    // Book-cited, not a QURRA choice: this is the reference book's own
    // Qur'anic citation for the السين sign of a verb (p.12–13, footnote 7).
    sourceLabel: "From your reference book (p. 12–13)",
    words: [
      { id: "111-3-w1", text: "سَيَصْلَىٰ", position: 1 },
      { id: "111-3-w2", text: "نَارًا", position: 2 },
      { id: "111-3-w3", text: "ذَاتَ", position: 3 },
      { id: "111-3-w4", text: "لَهَبٍ", position: 4 }
    ]
  },

  // Phase 7 (Part 2) additions below — both book-cited, from page 19's
  // footnote on when the مضارع verb becomes مبني instead of معرب.

  "2:233": {
    surah: { number: 2, nameArabic: "البقرة", nameEnglish: "Al-Baqarah" },
    verse: {
      number: 233,
      arabic: "وَالْوَالِدَاتُ يُرْضِعْنَ",
      translation: "And mothers nurse [their children]."
    },
    // Book-cited (p.19, footnote): the book's own example of a مضارع verb
    // made مبني by نون الإناث attaching to it (يُرْضِعْنَ). Quoted as a
    // fragment, exactly as the book itself cites it.
    sourceLabel: "From your reference book (p. 19)",
    words: null
  },

  "96:15": {
    surah: { number: 96, nameArabic: "العلق", nameEnglish: "Al-'Alaq" },
    verse: {
      number: 15,
      arabic: "لَنَسْفَعًا بِالنَّاصِيَةِ",
      translation: "We will surely drag him by the forelock."
    },
    // Book-cited (p.19, footnote): the book's own example of a مضارع verb
    // made مبني by نون التوكيد المباشرة attaching to it (لَنَسْفَعًا).
    sourceLabel: "From your reference book (p. 19)",
    words: null
  },

  // Phase 8 (Part 3, علامات الإعراب) additions below. All book-cited except
  // 65:2, which is QURRA's own pick for نيابة الحذف عن السكون: the book's
  // own worked example for that one specific position (p.35) fell in a
  // footnote block that carried over from the previous page and wasn't
  // confidently legible in the supplied image — disclosed in Lesson 3.7's
  // own sourceNote and in the Part 3 completion report.

  "3:55": {
    surah: { number: 3, nameArabic: "آل عمران", nameEnglish: "Aal 'Imran" },
    verse: {
      number: 55,
      arabic: "قَالَ اللَّهُ",
      translation: "Allah said…"
    },
    sourceLabel: "From your reference book (p. 21)",
    words: [
      { id: "3-55-w1", text: "قَالَ", position: 1 },
      { id: "3-55-w2", text: "اللَّهُ", position: 2 }
    ]
  },

  "12:94": {
    surah: { number: 12, nameArabic: "يوسف", nameEnglish: "Yusuf" },
    verse: {
      number: 94,
      arabic: "قَالَ أَبُوهُمْ",
      translation: "…their father said…"
    },
    sourceLabel: "From your reference book (p. 24)",
    words: [
      { id: "12-94-w1", text: "قَالَ", position: 1 },
      { id: "12-94-w2", text: "أَبُوهُمْ", position: 2 }
    ]
  },

  "5:23": {
    surah: { number: 5, nameArabic: "المائدة", nameEnglish: "Al-Ma'idah" },
    verse: {
      number: 23,
      arabic: "قَالَ رَجُلَانِ مِنَ الَّذِينَ يَخَافُونَ",
      translation: "Two men from those who feared [Allah] said…"
    },
    sourceLabel: "From your reference book (p. 25)",
    words: [
      { id: "5-23-w1", text: "قَالَ", position: 1 },
      { id: "5-23-w2", text: "رَجُلَانِ", position: 2 },
      { id: "5-23-w3", text: "مِنَ", position: 3 },
      { id: "5-23-w4", text: "الَّذِينَ", position: 4 },
      { id: "5-23-w5", text: "يَخَافُونَ", position: 5 }
    ]
  },

  "2:189": {
    surah: { number: 2, nameArabic: "البقرة", nameEnglish: "Al-Baqarah" },
    verse: {
      number: 189,
      arabic: "وَاتَّقُوا اللَّهَ لَعَلَّكُمْ تُفْلِحُونَ",
      translation: "And fear Allah that you may succeed."
    },
    sourceLabel: "From your reference book (p. 26–27)",
    words: [
      { id: "2-189-w1", text: "وَاتَّقُوا", position: 1 },
      { id: "2-189-w2", text: "اللَّهَ", position: 2 },
      { id: "2-189-w3", text: "لَعَلَّكُمْ", position: 3 },
      { id: "2-189-w4", text: "تُفْلِحُونَ", position: 4 }
    ]
  },

  "33:40": {
    surah: { number: 33, nameArabic: "الأحزاب", nameEnglish: "Al-Ahzab" },
    verse: {
      number: 40,
      arabic: "مَّا كَانَ مُحَمَّدٌ أَبَا أَحَدٍ مِّن رِّجَالِكُمْ",
      translation: "Muhammad is not the father of [any] one of your men…"
    },
    sourceLabel: "From your reference book (p. 28–29)",
    words: [
      { id: "33-40-w1", text: "مَّا", position: 1 },
      { id: "33-40-w2", text: "كَانَ", position: 2 },
      { id: "33-40-w3", text: "مُحَمَّدٌ", position: 3 },
      { id: "33-40-w4", text: "أَبَا", position: 4 },
      { id: "33-40-w5", text: "أَحَدٍ", position: 5 },
      { id: "33-40-w6", text: "مِّن", position: 6 },
      { id: "33-40-w7", text: "رِّجَالِكُمْ", position: 7 }
    ]
  },

  "2:128": {
    surah: { number: 2, nameArabic: "البقرة", nameEnglish: "Al-Baqarah" },
    verse: {
      number: 128,
      arabic: "رَبَّنَا وَاجْعَلْنَا مُسْلِمَيْنِ لَكَ",
      translation: "Our Lord, and make us Muslims [in submission] to You…"
    },
    sourceLabel: "From your reference book (p. 30)",
    words: [
      { id: "2-128-w1", text: "رَبَّنَا", position: 1 },
      { id: "2-128-w2", text: "وَاجْعَلْنَا", position: 2 },
      { id: "2-128-w3", text: "مُسْلِمَيْنِ", position: 3 },
      { id: "2-128-w4", text: "لَكَ", position: 4 }
    ]
  },

  "1:1": {
    surah: { number: 1, nameArabic: "الفاتحة", nameEnglish: "Al-Fatihah" },
    verse: {
      number: 1,
      arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
      translation: "In the name of Allah, the Entirely Merciful, the Especially Merciful."
    },
    sourceLabel: "From your reference book (p. 31)",
    words: [
      { id: "1-1-w1", text: "بِسْمِ", position: 1 },
      { id: "1-1-w2", text: "اللَّهِ", position: 2 },
      { id: "1-1-w3", text: "الرَّحْمَٰنِ", position: 3 },
      { id: "1-1-w4", text: "الرَّحِيمِ", position: 4 }
    ]
  },

  "12:81": {
    surah: { number: 12, nameArabic: "يوسف", nameEnglish: "Yusuf" },
    verse: {
      number: 81,
      arabic: "ارْجِعُوا إِلَىٰ أَبِيكُمْ",
      translation: "Return to your father…"
    },
    sourceLabel: "From your reference book (p. 32–33)",
    words: [
      { id: "12-81-w1", text: "ارْجِعُوا", position: 1 },
      { id: "12-81-w2", text: "إِلَىٰ", position: 2 },
      { id: "12-81-w3", text: "أَبِيكُمْ", position: 3 }
    ]
  },

  "65:2": {
    surah: { number: 65, nameArabic: "الطلاق", nameEnglish: "At-Talaq" },
    verse: {
      number: 2,
      arabic: "وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا",
      translation: "And whoever fears Allah - He will make for him a way out."
    },
    // QURRA supplementary example, not the book's own citation — see the
    // file-level Phase 8 note above and Lesson 3.7's sourceNote.
    sourceLabel: "QURRA supplementary example",
    words: [
      { id: "65-2-w1", text: "وَمَن", position: 1 },
      { id: "65-2-w2", text: "يَتَّقِ", position: 2 },
      { id: "65-2-w3", text: "اللَّهَ", position: 3 },
      { id: "65-2-w4", text: "يَجْعَل", position: 4 },
      { id: "65-2-w5", text: "لَّهُ", position: 5 },
      { id: "65-2-w6", text: "مَخْرَجًا", position: 6 }
    ]
  },

  "4:56": {
    surah: { number: 4, nameArabic: "النساء", nameEnglish: "An-Nisa" },
    verse: {
      number: 56,
      arabic: "سَوْفَ نُصْلِيهِمْ نَارًا",
      translation: "We will [in time] burn them in a Fire."
    },
    // Book-cited, not a QURRA choice: the reference book's own Qur'anic
    // citation for the سوف sign of a verb (p.12–13, footnote 7). Quoted as
    // a fragment, exactly as the book itself cites it — the full ayah
    // continues beyond this clause.
    sourceLabel: "From your reference book (p. 12–13)",
    words: null
  },

  // Phase 9 (Part 4 batch 1, الاسم المعرب: المرفوعات) additions below.
  // All book-cited from the الفاعل / نائب الفاعل / المبتدأ والخبر pages
  // (75–76, 80–83, 84–90), except where noted.

  "5:23": {
    surah: { number: 5, nameArabic: "المائدة", nameEnglish: "Al-Ma'idah" },
    verse: {
      number: 23,
      arabic: "قَالَ رَجُلَانِ مِنَ الَّذِينَ يَخَافُونَ أَنْعَمَ اللَّهُ عَلَيْهِمَا",
      translation: "Said two men from those who feared [to disobey], upon whom Allah had bestowed favor…"
    },
    // Book-cited (p. 75): the book's own example of a ظاهر فاعل that is a
    // مثنى (رَجُلَانِ) — used whole as a Challenge, no word-tap needed.
    sourceLabel: "From your reference book (p. 75)",
    words: null
  },

  "9:90": {
    surah: { number: 9, nameArabic: "التوبة", nameEnglish: "At-Tawbah" },
    verse: {
      number: 90,
      arabic: "وَجَاءَ الْمُعَذِّرُونَ مِنَ الْأَعْرَابِ لِيُؤْذَنَ لَهُمْ",
      translation: "And those with excuses among the bedouins came so they would be permitted [to remain]…"
    },
    // Book-cited (p. 75): the book's own example of a ظاهر فاعل that is a
    // جمع (الْمُعَذِّرُونَ). Cited in lesson prose only — no widget needs it,
    // so words stay null.
    sourceLabel: "From your reference book (p. 75)",
    words: null
  },

  "83:6": {
    surah: { number: 83, nameArabic: "المطففين", nameEnglish: "Al-Mutaffifin" },
    verse: {
      number: 6,
      arabic: "يَوْمَ يَقُومُ النَّاسُ لِرَبِّ الْعَالَمِينَ",
      translation: "The Day when mankind will stand before the Lord of the worlds."
    },
    // Book-cited (p. 75): the book's own example of a ظاهر فاعل on a plain
    // مفرد noun in a مضارع sentence (النَّاسُ). Used for Lesson 4.2's
    // word-tap Notice.
    sourceLabel: "From your reference book (p. 75)",
    words: [
      { id: "83-6-w1", text: "يَوْمَ", position: 1 },
      { id: "83-6-w2", text: "يَقُومُ", position: 2 },
      { id: "83-6-w3", text: "النَّاسُ", position: 3 },
      { id: "83-6-w4", text: "لِرَبِّ", position: 4 },
      { id: "83-6-w5", text: "الْعَالَمِينَ", position: 5 }
    ]
  },

  "69:13": {
    surah: { number: 69, nameArabic: "الحاقة", nameEnglish: "Al-Haqqah" },
    verse: {
      number: 13,
      arabic: "فَإِذَا نُفِخَ فِي الصُّورِ نَفْخَةً وَاحِدَةً",
      translation: "Then when the Horn is blown with one blast."
    },
    // Book-cited (p. 83): the book's own example of نائب الفاعل as a
    // مصدر (نَفْخَةً) — the clearest of the four نائب categories on this
    // page, and the one used for Lesson 4.3's worked example and Notice.
    sourceLabel: "From your reference book (p. 83)",
    words: [
      { id: "69-13-w1", text: "فَإِذَا", position: 1 },
      { id: "69-13-w2", text: "نُفِخَ", position: 2 },
      { id: "69-13-w3", text: "فِي", position: 3 },
      { id: "69-13-w4", text: "الصُّورِ", position: 4 },
      { id: "69-13-w5", text: "نَفْخَةً", position: 5 },
      { id: "69-13-w6", text: "وَاحِدَةً", position: 6 }
    ]
  },

  "7:149": {
    surah: { number: 7, nameArabic: "الأعراف", nameEnglish: "Al-A'raf" },
    verse: {
      number: 149,
      arabic: "وَلَمَّا سُقِطَ فِي أَيْدِيهِمْ وَرَأَوْا أَنَّهُمْ قَدْ ضَلُّوا",
      translation: "And when regret overcame them and they saw that they had gone astray…"
    },
    // QURRA supplementary, not book-cited: this page's وأما نيابة الجار
    // والمجرور worked example fell where the image wasn't confidently
    // legible, so this Challenge illustrates the same book-stated category
    // (نائب الفاعل جار ومجرور) with QURRA's own independently-verified
    // citation instead of guessing the book's. Disclosed in Lesson 4.3's
    // sourceNote too.
    sourceLabel: "QURRA supplementary example",
    words: null
  },

  "8:42": {
    surah: { number: 8, nameArabic: "الأنفال", nameEnglish: "Al-Anfal" },
    verse: {
      number: 42,
      arabic: "وَالرَّكْبُ أَسْفَلَ مِنكُمْ",
      translation: "…while the caravan was lower [in position] than you."
    },
    // Book-cited (p. 89), quoted as a fragment exactly as the book itself
    // cites it — the full ayah continues well beyond this clause.
    sourceLabel: "From your reference book (p. 89)",
    words: [
      { id: "8-42-w1", text: "وَالرَّكْبُ", position: 1 },
      { id: "8-42-w2", text: "أَسْفَلَ", position: 2 },
      { id: "8-42-w3", text: "مِنكُمْ", position: 3 }
    ]
  },

  "2:245": {
    surah: { number: 2, nameArabic: "البقرة", nameEnglish: "Al-Baqarah" },
    verse: {
      number: 245,
      arabic: "وَاللَّهُ يَقْبِضُ وَيَبْسُطُ",
      translation: "…while it is Allah who withholds and grants abundance…"
    },
    // Book-cited (p. 88), quoted as a fragment exactly as the book itself
    // cites it — the full ayah continues beyond this clause.
    sourceLabel: "From your reference book (p. 88)",
    words: null
  },

  // Phase 10 (Part 4 batch 2, الاسم المعرب: المنصوبات) additions below.
  // All book-cited from pages 137–163, except where noted.

  "2:3": {
    surah: { number: 2, nameArabic: "البقرة", nameEnglish: "Al-Baqarah" },
    verse: {
      number: 3,
      arabic: "وَيُقِيمُونَ الصَّلَاةَ",
      translation: "…and establish prayer…"
    },
    // Book-cited (p. 137), quoted as a fragment exactly as the book cites it.
    sourceLabel: "From your reference book (p. 137)",
    words: [
      { id: "2-3-w1", text: "وَيُقِيمُونَ", position: 1 },
      { id: "2-3-w2", text: "الصَّلَاةَ", position: 2 }
    ]
  },

  "4:164": {
    surah: { number: 4, nameArabic: "النساء", nameEnglish: "An-Nisa" },
    verse: {
      number: 164,
      arabic: "وَكَلَّمَ اللَّهُ مُوسَىٰ تَكْلِيمًا",
      translation: "…and Allah spoke to Moses with [direct] speech."
    },
    // Book-cited (p. 146), quoted as a fragment exactly as the book cites it.
    sourceLabel: "From your reference book (p. 146)",
    words: [
      { id: "4-164-w1", text: "وَكَلَّمَ", position: 1 },
      { id: "4-164-w2", text: "اللَّهُ", position: 2 },
      { id: "4-164-w3", text: "مُوسَىٰ", position: 3 },
      { id: "4-164-w4", text: "تَكْلِيمًا", position: 4 }
    ]
  },

  "73:2": {
    surah: { number: 73, nameArabic: "المزمل", nameEnglish: "Al-Muzzammil" },
    verse: {
      number: 2,
      arabic: "قُمِ اللَّيْلَ إِلَّا قَلِيلًا",
      translation: "Stand [in prayer] the night, except for a little."
    },
    // QURRA supplementary: the book's own ظرف citations on this page (p.
    // 148–151) weren't all confidently legible as single, clean examples;
    // this well-known verse illustrates the same book-stated category
    // (ظرف زمان منصوب) independently. Disclosed in Lesson 4.9's source note.
    sourceLabel: "QURRA supplementary example",
    words: [
      { id: "73-2-w1", text: "قُمِ", position: 1 },
      { id: "73-2-w2", text: "اللَّيْلَ", position: 2 },
      { id: "73-2-w3", text: "إِلَّا", position: 3 },
      { id: "73-2-w4", text: "قَلِيلًا", position: 4 }
    ]
  },

  "2:207": {
    surah: { number: 2, nameArabic: "البقرة", nameEnglish: "Al-Baqarah" },
    verse: {
      number: 207,
      arabic: "وَمِنَ النَّاسِ مَن يَشْرِي نَفْسَهُ ابْتِغَاءَ مَرْضَاتِ اللَّهِ",
      translation: "And among the people is he who sells himself seeking the pleasure of Allah…"
    },
    // QURRA supplementary: this page's own مفعول لأجله citation fell where
    // the image wasn't confidently legible; this well-known, independently
    // verified verse illustrates the same book-stated category. Disclosed
    // in Lesson 4.10's source note.
    sourceLabel: "QURRA supplementary example",
    words: [
      { id: "2-207-w1", text: "وَمِنَ", position: 1 },
      { id: "2-207-w2", text: "النَّاسِ", position: 2 },
      { id: "2-207-w3", text: "مَن", position: 3 },
      { id: "2-207-w4", text: "يَشْرِي", position: 4 },
      { id: "2-207-w5", text: "نَفْسَهُ", position: 5 },
      { id: "2-207-w6", text: "ابْتِغَاءَ", position: 6 },
      { id: "2-207-w7", text: "مَرْضَاتِ", position: 7 },
      { id: "2-207-w8", text: "اللَّهِ", position: 8 }
    ]
  },

  "31:13": {
    surah: { number: 31, nameArabic: "لقمان", nameEnglish: "Luqman" },
    verse: {
      number: 13,
      arabic: "وَإِذْ قَالَ لُقْمَانُ لِابْنِهِ وَهُوَ يَعِظُهُ يَا بُنَيَّ لَا تُشْرِكْ بِاللَّهِ",
      translation: "And [mention] when Luqman said to his son while he was advising him, \"O my son, do not associate [anything] with Allah…\""
    },
    // Book-cited (p. 145): the book's own example of المنادى المضاف إلى
    // ياء المتكلم (بُنَيَّ — \"my little son\").
    sourceLabel: "From your reference book (p. 145)",
    words: [
      { id: "31-13-w1", text: "يَا", position: 1 },
      { id: "31-13-w2", text: "بُنَيَّ", position: 2 },
      { id: "31-13-w3", text: "لَا", position: 3 },
      { id: "31-13-w4", text: "تُشْرِكْ", position: 4 },
      { id: "31-13-w5", text: "بِاللَّهِ", position: 5 }
    ]
  },

  "28:21": {
    surah: { number: 28, nameArabic: "القصص", nameEnglish: "Al-Qasas" },
    verse: {
      number: 21,
      arabic: "فَخَرَجَ مِنْهَا خَائِفًا يَتَرَقَّبُ",
      translation: "So he left it, fearful and anticipating [exposure]."
    },
    // Book-cited (p. 156): the book's own example of الحال as a single
    // word (خَائِفًا).
    sourceLabel: "From your reference book (p. 156)",
    words: [
      { id: "28-21-w1", text: "فَخَرَجَ", position: 1 },
      { id: "28-21-w2", text: "مِنْهَا", position: 2 },
      { id: "28-21-w3", text: "خَائِفًا", position: 3 },
      { id: "28-21-w4", text: "يَتَرَقَّبُ", position: 4 }
    ]
  },

  "54:12": {
    surah: { number: 54, nameArabic: "القمر", nameEnglish: "Al-Qamar" },
    verse: {
      number: 12,
      arabic: "وَفَجَّرْنَا الْأَرْضَ عُيُونًا",
      translation: "And caused the earth to burst with springs…"
    },
    // Book-cited (p. 161): the book's own example of تمييز الذات.
    sourceLabel: "From your reference book (p. 161)",
    words: [
      { id: "54-12-w1", text: "وَفَجَّرْنَا", position: 1 },
      { id: "54-12-w2", text: "الْأَرْضَ", position: 2 },
      { id: "54-12-w3", text: "عُيُونًا", position: 3 }
    ]
  },

  "2:249": {
    surah: { number: 2, nameArabic: "البقرة", nameEnglish: "Al-Baqarah" },
    verse: {
      number: 249,
      arabic: "فَشَرِبُوا مِنْهُ إِلَّا قَلِيلًا مِّنْهُمْ",
      translation: "…and they drank from it, except a few of them."
    },
    // Book-cited (p. 166): the book's own example of المستثنى بإلا in a
    // تام موجب sentence (واجب النصب).
    sourceLabel: "From your reference book (p. 166)",
    words: [
      { id: "2-249-w1", text: "فَشَرِبُوا", position: 1 },
      { id: "2-249-w2", text: "مِنْهُ", position: 2 },
      { id: "2-249-w3", text: "إِلَّا", position: 3 },
      { id: "2-249-w4", text: "قَلِيلًا", position: 4 },
      { id: "2-249-w5", text: "مِّنْهُمْ", position: 5 }
    ]
  },

  // Phase 11 (Part 4 batch 3: المجرورات) addition below. QURRA
  // supplementary example — the book's own citations for المخفوض بالحرف
  // are a long run of narrow oath-swearing shawahid (pp. 169–176), better
  // summarized at headline level than used as the primary teaching verse.
  // This one verse conveniently shows BOTH new مجرورات roles at once —
  // دِينِ (مخفوض بالحرف، بـ"في") and اللَّهِ (مخفوض بالإضافة، مضاف إليه
  // دِينِ) — so Lessons 4.16 and 4.17 both reuse it, each pointing at its
  // own word.

  "110:2": {
    surah: { number: 110, nameArabic: "النصر", nameEnglish: "An-Nasr" },
    verse: {
      number: 2,
      arabic: "وَرَأَيْتَ النَّاسَ يَدْخُلُونَ فِي دِينِ اللَّهِ أَفْوَاجًا",
      translation: "And you see the people entering into the religion of Allah in multitudes."
    },
    sourceLabel: "QURRA supplementary example",
    words: [
      { id: "110-2-w1", text: "وَرَأَيْتَ", position: 1 },
      { id: "110-2-w2", text: "النَّاسَ", position: 2 },
      { id: "110-2-w3", text: "يَدْخُلُونَ", position: 3 },
      { id: "110-2-w4", text: "فِي", position: 4 },
      { id: "110-2-w5", text: "دِينِ", position: 5 },
      { id: "110-2-w6", text: "اللَّهِ", position: 6 },
      { id: "110-2-w7", text: "أَفْوَاجًا", position: 7 }
    ]
  },

  // Part 5 (التوابع) additions below. All four verified independently
  // via WebFetch against equran.me before use, per established practice.

  // Book-cited (p. 201) — the source's own citation for شرط الجملة
  // المنعوت بها (a جملة can serve as نعت only when its منعوت is نكرة).
  // Quoted as a fragment exactly as the book itself closes the quotation
  // (up to "إلى الله"), not the full longer ayah.
  "2:281": {
    surah: { number: 2, nameArabic: "البقرة", nameEnglish: "Al-Baqarah" },
    verse: {
      number: 281,
      arabic: "وَاتَّقُوا يَوْمًا تُرْجَعُونَ فِيهِ إِلَى اللَّهِ",
      translation: "And fear a Day when you will be returned to Allah."
    },
    sourceLabel: "From your reference book (p. 201)",
    words: [
      { id: "2-281-w1", text: "وَاتَّقُوا", position: 1 },
      { id: "2-281-w2", text: "يَوْمًا", position: 2 },
      { id: "2-281-w3", text: "تُرْجَعُونَ", position: 3 },
      { id: "2-281-w4", text: "فِيهِ", position: 4 },
      { id: "2-281-w5", text: "إِلَى", position: 5 },
      { id: "2-281-w6", text: "اللَّهِ", position: 6 }
    ]
  },

  // Book-cited (p. 208–209) — the source's own عطف النسق example, shown
  // with its own إعراب breakdown in the margin. Quoted as the fragment
  // the book itself quotes, not the full (longer) ayah.
  "33:22": {
    surah: { number: 33, nameArabic: "الأحزاب", nameEnglish: "Al-Ahzab" },
    verse: {
      number: 22,
      arabic: "وَصَدَقَ اللَّهُ وَرَسُولُهُ",
      translation: "...and Allah and His Messenger spoke the truth."
    },
    sourceLabel: "From your reference book (pp. 208–209)",
    words: [
      { id: "33-22-w1", text: "وَصَدَقَ", position: 1 },
      { id: "33-22-w2", text: "اللَّهُ", position: 2 },
      { id: "33-22-w3", text: "وَرَسُولُهُ", position: 3 }
    ]
  },

  // Book-cited (p. 222) — the source's own body-text example for بدل
  // الكل من الكل / بدل المطابقة. Only 1:6 is given a live verse widget
  // here (clean, universally known); the continuation into 1:7 (the
  // actual بدل word, صِرَاطَ الَّذِينَ...) is explained in Lesson 5.8's
  // prose rather than built as a second widget, since the architecture's
  // verse widgets hold one ayah each and the بدل word itself sits one
  // ayah over — a deliberate, disclosed framing choice, not a gap.
  "1:6": {
    surah: { number: 1, nameArabic: "الفاتحة", nameEnglish: "Al-Fatihah" },
    verse: {
      number: 6,
      arabic: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",
      translation: "Guide us to the straight path."
    },
    sourceLabel: "From your reference book (p. 222)",
    words: [
      { id: "1-6-w1", text: "اهْدِنَا", position: 1 },
      { id: "1-6-w2", text: "الصِّرَاطَ", position: 2 },
      { id: "1-6-w3", text: "الْمُسْتَقِيمَ", position: 3 }
    ]
  },

  // QURRA supplementary example (Lesson 5.7, التوكيد) — not from the
  // reference book's own pages for this chapter (those give only
  // constructed examples, e.g. جاء القوم كله أجمع). A well-known, clean
  // single-ayah illustration of توكيد معنوي stacking كل + أجمعون on the
  // same مؤكَّد, independently verified before use.
  "15:30": {
    surah: { number: 15, nameArabic: "الحجر", nameEnglish: "Al-Hijr" },
    verse: {
      number: 30,
      arabic: "فَسَجَدَ الْمَلَائِكَةُ كُلُّهُمْ أَجْمَعُونَ",
      translation: "So the angels prostrated, all of them entirely."
    },
    sourceLabel: "QURRA supplementary example",
    words: [
      { id: "15-30-w1", text: "فَسَجَدَ", position: 1 },
      { id: "15-30-w2", text: "الْمَلَائِكَةُ", position: 2 },
      { id: "15-30-w3", text: "كُلُّهُمْ", position: 3 },
      { id: "15-30-w4", text: "أَجْمَعُونَ", position: 4 }
    ]
  },

  /* ------------------------------------------------------------------ */
  /* Part 6 (النواسخ) additions — each fragment independently verified   */
  /* against the full ayah text before use (surah/ayah numbers and      */
  /* wording cross-checked), per the project's Qur'an-citation          */
  /* discipline. Several of these corrected a misread in the source     */
  /* page photos themselves (ض/ص and و/ا look alike in the print) —      */
  /* flagged in the Part 6 final report.                                */
  /* ------------------------------------------------------------------ */

  "25:70": {
    surah: { number: 25, nameArabic: "الفرقان", nameEnglish: "Al-Furqan" },
    verse: { number: 70, arabic: "وَكَانَ اللَّهُ غَفُورًا رَحِيمًا", translation: "And Allah is ever Forgiving and Merciful." },
    sourceLabel: "From your reference book (p. 95)",
    words: [
      { id: "25-70-w1", text: "وَكَانَ", position: 1 },
      { id: "25-70-w2", text: "اللَّهُ", position: 2 },
      { id: "25-70-w3", text: "غَفُورًا", position: 3 },
      { id: "25-70-w4", text: "رَحِيمًا", position: 4 }
    ]
  },

  "11:118": {
    surah: { number: 11, nameArabic: "هود", nameEnglish: "Hud" },
    verse: { number: 118, arabic: "وَلَا يَزَالُونَ مُخْتَلِفِينَ", translation: "And they will not cease to differ." },
    sourceLabel: "From your reference book (p. 96)",
    words: [
      { id: "11-118-w1", text: "وَلَا", position: 1 },
      { id: "11-118-w2", text: "يَزَالُونَ", position: 2 },
      { id: "11-118-w3", text: "مُخْتَلِفِينَ", position: 3 }
    ]
  },

  "20:91": {
    surah: { number: 20, nameArabic: "طه", nameEnglish: "Ta-Ha" },
    verse: { number: 91, arabic: "لَن نَّبْرَحَ عَلَيْهِ عَاكِفِينَ", translation: "We will never cease to be devoted to it." },
    sourceLabel: "From your reference book (p. 96)",
    words: [
      { id: "20-91-w1", text: "لَن", position: 1 },
      { id: "20-91-w2", text: "نَّبْرَحَ", position: 2 },
      { id: "20-91-w3", text: "عَلَيْهِ", position: 3 },
      { id: "20-91-w4", text: "عَاكِفِينَ", position: 4 }
    ]
  },

  "19:31": {
    surah: { number: 19, nameArabic: "مريم", nameEnglish: "Maryam" },
    verse: { number: 31, arabic: "وَأَوْصَانِي بِالصَّلَاةِ وَالزَّكَاةِ مَا دُمْتُ حَيًّا", translation: "And He has enjoined upon me prayer and charity as long as I remain alive." },
    sourceLabel: "From your reference book (p. 97)",
    words: [
      { id: "19-31-w1", text: "وَأَوْصَانِي", position: 1 },
      { id: "19-31-w2", text: "بِالصَّلَاةِ", position: 2 },
      { id: "19-31-w3", text: "وَالزَّكَاةِ", position: 3 },
      { id: "19-31-w4", text: "مَا", position: 4 },
      { id: "19-31-w5", text: "دُمْتُ", position: 5 },
      { id: "19-31-w6", text: "حَيًّا", position: 6 }
    ]
  },

  "2:192": {
    surah: { number: 2, nameArabic: "البقرة", nameEnglish: "Al-Baqarah" },
    verse: { number: 192, arabic: "فَإِنَّ اللَّهَ غَفُورٌ رَحِيمٌ", translation: "Then indeed, Allah is Forgiving and Merciful." },
    sourceLabel: "From your reference book (p. 108)",
    words: [
      { id: "2-192-w1", text: "فَإِنَّ", position: 1 },
      { id: "2-192-w2", text: "اللَّهَ", position: 2 },
      { id: "2-192-w3", text: "غَفُورٌ", position: 3 },
      { id: "2-192-w4", text: "رَحِيمٌ", position: 4 }
    ]
  },

  "34:51": {
    surah: { number: 34, nameArabic: "سبأ", nameEnglish: "Saba" },
    verse: { number: 51, arabic: "فَلَا فَوْتَ", translation: "There will be no escape." },
    sourceLabel: "From your reference book (p. 124)",
    words: [
      { id: "34-51-w1", text: "فَلَا", position: 1 },
      { id: "34-51-w2", text: "فَوْتَ", position: 2 }
    ]
  },

  "26:50": {
    surah: { number: 26, nameArabic: "الشعراء", nameEnglish: "Ash-Shu'ara" },
    verse: { number: 50, arabic: "لَا ضَيْرَ", translation: "No harm." },
    sourceLabel: "From your reference book (p. 124)",
    words: [
      { id: "26-50-w1", text: "لَا", position: 1 },
      { id: "26-50-w2", text: "ضَيْرَ", position: 2 }
    ]
  },

  "105:5": {
    surah: { number: 105, nameArabic: "الفيل", nameEnglish: "Al-Fil" },
    verse: { number: 5, arabic: "فَجَعَلَهُمْ كَعَصْفٍ مَّأْكُولٍ", translation: "And He made them like eaten straw." },
    sourceLabel: "From your reference book (p. 131)",
    words: [
      { id: "105-5-w1", text: "فَجَعَلَهُمْ", position: 1 },
      { id: "105-5-w2", text: "كَعَصْفٍ", position: 2 },
      { id: "105-5-w3", text: "مَّأْكُولٍ", position: 3 }
    ]
  },

  "2:109": {
    surah: { number: 2, nameArabic: "البقرة", nameEnglish: "Al-Baqarah" },
    verse: { number: 109, arabic: "لَوْ يَرُدُّونَكُم مِّن بَعْدِ إِيمَانِكُمْ كُفَّارًا", translation: "...that they might turn you back to disbelief after your belief." },
    sourceLabel: "From your reference book (p. 131)",
    words: [
      { id: "2-109-w1", text: "لَوْ", position: 1 },
      { id: "2-109-w2", text: "يَرُدُّونَكُم", position: 2 },
      { id: "2-109-w3", text: "مِّن", position: 3 },
      { id: "2-109-w4", text: "بَعْدِ", position: 4 },
      { id: "2-109-w5", text: "إِيمَانِكُمْ", position: 5 },
      { id: "2-109-w6", text: "كُفَّارًا", position: 6 }
    ]
  },

  "4:125": {
    surah: { number: 4, nameArabic: "النساء", nameEnglish: "An-Nisa" },
    verse: { number: 125, arabic: "وَاتَّخَذَ اللَّهُ إِبْرَاهِيمَ خَلِيلًا", translation: "And Allah took Abraham as an intimate friend." },
    sourceLabel: "From your reference book (p. 131)",
    words: [
      { id: "4-125-w1", text: "وَاتَّخَذَ", position: 1 },
      { id: "4-125-w2", text: "اللَّهُ", position: 2 },
      { id: "4-125-w3", text: "إِبْرَاهِيمَ", position: 3 },
      { id: "4-125-w4", text: "خَلِيلًا", position: 4 }
    ]
  },

  "70:6": {
    surah: { number: 70, nameArabic: "المعارج", nameEnglish: "Al-Ma'arij" },
    verse: { number: 6, arabic: "إِنَّهُمْ يَرَوْنَهُ بَعِيدًا", translation: "Indeed, they see it [as] distant." },
    sourceLabel: "From your reference book (p. 126)",
    words: [
      { id: "70-6-w1", text: "إِنَّهُمْ", position: 1 },
      { id: "70-6-w2", text: "يَرَوْنَهُ", position: 2 },
      { id: "70-6-w3", text: "بَعِيدًا", position: 3 }
    ]
  },

  "70:7": {
    surah: { number: 70, nameArabic: "المعارج", nameEnglish: "Al-Ma'arij" },
    verse: { number: 7, arabic: "وَنَرَاهُ قَرِيبًا", translation: "But We see it [as] near." },
    sourceLabel: "From your reference book (p. 126)",
    words: [
      { id: "70-7-w1", text: "وَنَرَاهُ", position: 1 },
      { id: "70-7-w2", text: "قَرِيبًا", position: 2 }
    ]
  },

  /* ----------------------------------------------------------------------
     Part 7 (الفعل المعرب) additions. Every citation below was independently
     verified against an authoritative Qur'an text (equran.me) before use,
     matching this project's standing discipline. "1:5" and "55:6" extend
     entries already cited in prose elsewhere (Parts 1 and 3) with their
     first full word-level breakdown, used here as interactive widgets for
     the first time.
     ---------------------------------------------------------------------- */

  "1:5": {
    surah: { number: 1, nameArabic: "الفاتحة", nameEnglish: "Al-Fatihah" },
    verse: { number: 5, arabic: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ", translation: "It is You we worship and You we ask for help." },
    sourceLabel: "From your reference book (p. 182)",
    words: [
      { id: "1-5-w1", text: "إِيَّاكَ", position: 1 },
      { id: "1-5-w2", text: "نَعْبُدُ", position: 2 },
      { id: "1-5-w3", text: "وَإِيَّاكَ", position: 3 },
      { id: "1-5-w4", text: "نَسْتَعِينُ", position: 4 }
    ]
  },

  "55:6": {
    surah: { number: 55, nameArabic: "الرحمن", nameEnglish: "Ar-Rahman" },
    verse: { number: 6, arabic: "وَالنَّجْمُ وَالشَّجَرُ يَسْجُدَانِ", translation: "And the stars and trees prostrate." },
    sourceLabel: "From your reference book (p. 26)",
    words: [
      { id: "55-6-w1", text: "وَالنَّجْمُ", position: 1 },
      { id: "55-6-w2", text: "وَالشَّجَرُ", position: 2 },
      { id: "55-6-w3", text: "يَسْجُدَانِ", position: 3 }
    ]
  },

  "20:91": {
    surah: { number: 20, nameArabic: "طه", nameEnglish: "Taha" },
    verse: { number: 91, arabic: "قَالُوا لَن نَّبْرَحَ عَلَيْهِ عَاكِفِينَ حَتَّىٰ يَرْجِعَ إِلَيْنَا مُوسَىٰ", translation: "They said, \"We will never cease being devoted to it, until Moses returns to us.\"" },
    sourceLabel: "From your reference book (p. 183)",
    words: [
      { id: "20-91-w1", text: "قَالُوا", position: 1 },
      { id: "20-91-w2", text: "لَن", position: 2 },
      { id: "20-91-w3", text: "نَّبْرَحَ", position: 3 },
      { id: "20-91-w4", text: "عَلَيْهِ", position: 4 },
      { id: "20-91-w5", text: "عَاكِفِينَ", position: 5 }
    ]
  },

  "94:1": {
    surah: { number: 94, nameArabic: "الشرح", nameEnglish: "Ash-Sharh" },
    verse: { number: 1, arabic: "أَلَمْ نَشْرَحْ لَكَ صَدْرَكَ", translation: "Did We not expand for you, [O Muhammad], your breast?" },
    sourceLabel: "From your reference book (p. 191)",
    words: [
      { id: "94-1-w1", text: "أَلَمْ", position: 1 },
      { id: "94-1-w2", text: "نَشْرَحْ", position: 2 },
      { id: "94-1-w3", text: "لَكَ", position: 3 },
      { id: "94-1-w4", text: "صَدْرَكَ", position: 4 }
    ]
  },

  "4:133": {
    surah: { number: 4, nameArabic: "النساء", nameEnglish: "An-Nisa" },
    verse: { number: 133, arabic: "إِن يَشَأْ يُذْهِبْكُمْ أَيُّهَا النَّاسُ وَيَأْتِ بِآخَرِينَ", translation: "If He wills, he can do away with you, O people, and bring others [in your place]." },
    sourceLabel: "From your reference book (p. 193)",
    words: [
      { id: "4-133-w1", text: "إِن", position: 1 },
      { id: "4-133-w2", text: "يَشَأْ", position: 2 },
      { id: "4-133-w3", text: "يُذْهِبْكُمْ", position: 3 },
      { id: "4-133-w4", text: "أَيُّهَا", position: 4 },
      { id: "4-133-w5", text: "النَّاسُ", position: 5 }
    ]
  },

  "4:123": {
    surah: { number: 4, nameArabic: "النساء", nameEnglish: "An-Nisa" },
    verse: { number: 123, arabic: "مَن يَعْمَلْ سُوءًا يُجْزَ بِهِ", translation: "Whoever does a wrong will be recompensed for it." },
    sourceLabel: "From your reference book (p. 193)",
    words: [
      { id: "4-123-w1", text: "مَن", position: 1 },
      { id: "4-123-w2", text: "يَعْمَلْ", position: 2 },
      { id: "4-123-w3", text: "سُوءًا", position: 3 },
      { id: "4-123-w4", text: "يُجْزَ", position: 4 },
      { id: "4-123-w5", text: "بِهِ", position: 5 }
    ]
  },

  "80:23": {
    surah: { number: 80, nameArabic: "عبس", nameEnglish: "Abasa" },
    verse: { number: 23, arabic: "كَلَّا لَمَّا يَقْضِ مَا أَمَرَهُ", translation: "No! He has not yet accomplished what He commanded him." },
    sourceLabel: "From your reference book (p. 191)",
    words: [
      { id: "80-23-w1", text: "كَلَّا", position: 1 },
      { id: "80-23-w2", text: "لَمَّا", position: 2 },
      { id: "80-23-w3", text: "يَقْضِ", position: 3 },
      { id: "80-23-w4", text: "مَا", position: 4 },
      { id: "80-23-w5", text: "أَمَرَهُ", position: 5 }
    ]
  },

  "9:40": {
    surah: { number: 9, nameArabic: "التوبة", nameEnglish: "At-Tawbah" },
    verse: { number: 40, arabic: "إِذْ يَقُولُ لِصَاحِبِهِ لَا تَحْزَنْ إِنَّ اللَّهَ مَعَنَا", translation: "[Remember] when he said to his companion, \"Do not grieve; indeed Allah is with us.\"" },
    sourceLabel: "From your reference book (p. 192)",
    words: [
      { id: "9-40-w1", text: "إِذْ", position: 1 },
      { id: "9-40-w2", text: "يَقُولُ", position: 2 },
      { id: "9-40-w3", text: "لِصَاحِبِهِ", position: 3 },
      { id: "9-40-w4", text: "لَا", position: 4 },
      { id: "9-40-w5", text: "تَحْزَنْ", position: 5 },
      { id: "9-40-w6", text: "إِنَّ", position: 6 },
      { id: "9-40-w7", text: "اللَّهَ", position: 7 },
      { id: "9-40-w8", text: "مَعَنَا", position: 8 }
    ]
  },

  "4:28": {
    surah: { number: 4, nameArabic: "النساء", nameEnglish: "An-Nisa" },
    verse: { number: 28, arabic: "يُرِيدُ اللَّهُ أَن يُخَفِّفَ عَنكُمْ وَخُلِقَ الْإِنسَانُ ضَعِيفًا", translation: "Allah wants to lighten for you [your difficulties]; and mankind was created weak." },
    sourceLabel: "From your reference book (p. 183)",
    words: [
      { id: "4-28-w1", text: "يُرِيدُ", position: 1 },
      { id: "4-28-w2", text: "اللَّهُ", position: 2 },
      { id: "4-28-w3", text: "أَن", position: 3 },
      { id: "4-28-w4", text: "يُخَفِّفَ", position: 4 },
      { id: "4-28-w5", text: "عَنكُمْ", position: 5 }
    ]
  },

  /* ---- Part 8 (الأسماء المبنية) additions ---- */

  "23:112": {
    surah: { number: 23, nameArabic: "المؤمنون", nameEnglish: "Al-Mu'minun" },
    verse: { number: 112, arabic: "قَالَ كَمْ لَبِثْتُمْ", translation: "He will say, How long did you remain..." },
    sourceLabel: "From your reference book (p. 16)",
    words: [
      { id: "23-112-w1", text: "قَالَ", position: 1 },
      { id: "23-112-w2", text: "كَمْ", position: 2 },
      { id: "23-112-w3", text: "لَبِثْتُمْ", position: 3 }
    ]
  },

  "6:22": {
    surah: { number: 6, nameArabic: "الأنعام", nameEnglish: "Al-An'am" },
    verse: { number: 22, arabic: "أَيْنَ شُرَكَاؤُكُمُ", translation: "Where are your [claimed] partners?" },
    sourceLabel: "From your reference book (p. 16)",
    words: [
      { id: "6-22-w1", text: "أَيْنَ", position: 1 },
      { id: "6-22-w2", text: "شُرَكَاؤُكُمُ", position: 2 }
    ]
  },

  "2:286": {
    surah: { number: 2, nameArabic: "البقرة", nameEnglish: "Al-Baqarah" },
    verse: { number: 286, arabic: "أَنتَ مَوْلَانَا", translation: "You are our Protector." },
    sourceLabel: "From your reference book (p. 57)",
    words: [
      { id: "2-286-w1", text: "أَنتَ", position: 1 },
      { id: "2-286-w2", text: "مَوْلَانَا", position: 2 }
    ]
  },

  "34:40": {
    surah: { number: 34, nameArabic: "سبأ", nameEnglish: "Saba'" },
    verse: { number: 40, arabic: "إِيَّاكُمْ كَانُوا يَعْبُدُونَ", translation: "Was it you they used to worship?" },
    sourceLabel: "From your reference book (p. 57)",
    words: [
      { id: "34-40-w1", text: "إِيَّاكُمْ", position: 1 },
      { id: "34-40-w2", text: "كَانُوا", position: 2 },
      { id: "34-40-w3", text: "يَعْبُدُونَ", position: 3 }
    ]
  },

  "76:20": {
    surah: { number: 76, nameArabic: "الإنسان", nameEnglish: "Al-Insan" },
    verse: { number: 20, arabic: "وَإِذَا رَأَيْتَ ثَمَّ", translation: "And when you look there..." },
    sourceLabel: "From your reference book (p. 62)",
    words: [
      { id: "76-20-w1", text: "وَإِذَا", position: 1 },
      { id: "76-20-w2", text: "رَأَيْتَ", position: 2 },
      { id: "76-20-w3", text: "ثَمَّ", position: 3 }
    ]
  },

  "2:2": {
    surah: { number: 2, nameArabic: "البقرة", nameEnglish: "Al-Baqarah" },
    verse: { number: 2, arabic: "ذَلِكَ الْكِتَابُ لَا رَيْبَ فِيهِ", translation: "This is the Book about which there is no doubt." },
    sourceLabel: "QURRA supplementary example",
    words: null
  },

  "58:1": {
    surah: { number: 58, nameArabic: "المجادلة", nameEnglish: "Al-Mujadilah" },
    verse: { number: 1, arabic: "قَدْ سَمِعَ اللَّهُ قَوْلَ الَّتِي تُجَادِلُكَ فِي زَوْجِهَا", translation: "Allah has heard the speech of the one who pleads with you concerning her husband." },
    sourceLabel: "From your reference book (p. 63–64)",
    words: [
      { id: "58-1-w1", text: "قَدْ", position: 1 },
      { id: "58-1-w2", text: "سَمِعَ", position: 2 },
      { id: "58-1-w3", text: "اللَّهُ", position: 3 },
      { id: "58-1-w4", text: "قَوْلَ", position: 4 },
      { id: "58-1-w5", text: "الَّتِي", position: 5 },
      { id: "58-1-w6", text: "تُجَادِلُكَ", position: 6 },
      { id: "58-1-w7", text: "فِي", position: 7 },
      { id: "58-1-w8", text: "زَوْجِهَا", position: 8 }
    ]
  },

  "59:10": {
    surah: { number: 59, nameArabic: "الحشر", nameEnglish: "Al-Hashr" },
    verse: { number: 10, arabic: "وَالَّذِينَ جَآءُو مِن بَعْدِهِمْ", translation: "And those who came after them..." },
    sourceLabel: "From your reference book (p. 65)",
    words: null
  },

  "38:75": {
    surah: { number: 38, nameArabic: "ص", nameEnglish: "Sad" },
    verse: { number: 75, arabic: "مَا مَنَعَكَ أَن تَسْجُدَ لِمَا خَلَقْتُ بِيَدَيَّ", translation: "What prevented you from prostrating to that which I created with My hands?" },
    sourceLabel: "From your reference book (p. 67)",
    words: [
      { id: "38-75-w1", text: "مَا", position: 1 },
      { id: "38-75-w2", text: "مَنَعَكَ", position: 2 },
      { id: "38-75-w3", text: "أَن", position: 3 },
      { id: "38-75-w4", text: "تَسْجُدَ", position: 4 },
      { id: "38-75-w5", text: "لِمَا", position: 5 },
      { id: "38-75-w6", text: "خَلَقْتُ", position: 6 },
      { id: "38-75-w7", text: "بِيَدَيَّ", position: 7 }
    ]
  },

  "57:18": {
    surah: { number: 57, nameArabic: "الحديد", nameEnglish: "Al-Hadid" },
    verse: { number: 18, arabic: "إِنَّ الْمُصَّدِّقِينَ وَالْمُصَّدِّقَاتِ", translation: "Indeed, the men who give charity and the women who give charity..." },
    sourceLabel: "From your reference book (p. 67) — your book itself prints this citation as [الأحزاب:35]; independent verification shows the quoted text is an exact match for الحديد:18 instead, not Al-Ahzab 33:35 (a different, unrelated ayah). Cited here as الحديد:18, with the correction disclosed rather than silently carried over.",
    words: null
  },

  "1:7": {
    surah: { number: 1, nameArabic: "الفاتحة", nameEnglish: "Al-Fatihah" },
    verse: { number: 7, arabic: "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ", translation: "The path of those upon whom You have bestowed favor." },
    sourceLabel: "QURRA supplementary example",
    words: null
  },

  /* ---- Part 9 (الأفعال المبنية) additions ---- */

  "19:30": {
    surah: { number: 19, nameArabic: "مريم", nameEnglish: "Maryam" },
    verse: { number: 30, arabic: "قَالَ إِنِّي عَبْدُ اللَّهِ آتَانِيَ الْكِتَابَ وَجَعَلَنِي نَبِيًّا", translation: "He said, Indeed, I am the servant of Allah. He has given me the Scripture and made me a prophet." },
    sourceLabel: "QURRA supplementary example",
    words: [
      { id: "19-30-w1", text: "قَالَ", position: 1 },
      { id: "19-30-w2", text: "إِنِّي", position: 2 },
      { id: "19-30-w3", text: "عَبْدُ", position: 3 },
      { id: "19-30-w4", text: "اللَّهِ", position: 4 },
      { id: "19-30-w5", text: "آتَانِيَ", position: 5 },
      { id: "19-30-w6", text: "الْكِتَابَ", position: 6 },
      { id: "19-30-w7", text: "وَجَعَلَنِي", position: 7 },
      { id: "19-30-w8", text: "نَبِيًّا", position: 8 }
    ]
  },

  "103:3": {
    surah: { number: 103, nameArabic: "العصر", nameEnglish: "Al-'Asr" },
    verse: { number: 3, arabic: "إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ وَتَوَاصَوْا بِالْحَقِّ وَتَوَاصَوْا بِالصَّبْرِ", translation: "Except for those who have believed and done righteous deeds and advised each other to truth and advised each other to patience." },
    sourceLabel: "QURRA supplementary example",
    words: [
      { id: "103-3-w1", text: "إِلَّا", position: 1 },
      { id: "103-3-w2", text: "الَّذِينَ", position: 2 },
      { id: "103-3-w3", text: "آمَنُوا", position: 3 },
      { id: "103-3-w4", text: "وَعَمِلُوا", position: 4 },
      { id: "103-3-w5", text: "الصَّالِحَاتِ", position: 5 },
      { id: "103-3-w6", text: "وَتَوَاصَوْا", position: 6 },
      { id: "103-3-w7", text: "بِالْحَقِّ", position: 7 },
      { id: "103-3-w8", text: "وَتَوَاصَوْا", position: 8 },
      { id: "103-3-w9", text: "بِالصَّبْرِ", position: 9 }
    ]
  },

  "5:117": {
    surah: { number: 5, nameArabic: "المائدة", nameEnglish: "Al-Ma'idah" },
    verse: { number: 117, arabic: "مَا قُلْتُ لَهُمْ إِلَّا مَا أَمَرْتَنِي بِهِ", translation: "I said to them nothing except what You commanded me to say..." },
    sourceLabel: "QURRA supplementary example — a portion of ayah 117 (the clause containing قُلْتُ); the full ayah continues beyond this.",
    words: [
      { id: "5-117-w1", text: "مَا", position: 1 },
      { id: "5-117-w2", text: "قُلْتُ", position: 2 },
      { id: "5-117-w3", text: "لَهُمْ", position: 3 },
      { id: "5-117-w4", text: "إِلَّا", position: 4 },
      { id: "5-117-w5", text: "مَا", position: 5 },
      { id: "5-117-w6", text: "أَمَرْتَنِي", position: 6 },
      { id: "5-117-w7", text: "بِهِ", position: 7 }
    ]
  },

  "2:21": {
    surah: { number: 2, nameArabic: "البقرة", nameEnglish: "Al-Baqarah" },
    verse: { number: 21, arabic: "يَا أَيُّهَا النَّاسُ اعْبُدُوا رَبَّكُمُ الَّذِي خَلَقَكُمْ وَالَّذِينَ مِنْ قَبْلِكُمْ لَعَلَّكُمْ تَتَّقُونَ", translation: "O mankind, worship your Lord, who created you and those before you, that you may become righteous." },
    sourceLabel: "QURRA supplementary example",
    words: [
      { id: "2-21-w1", text: "يَا", position: 1 },
      { id: "2-21-w2", text: "أَيُّهَا", position: 2 },
      { id: "2-21-w3", text: "النَّاسُ", position: 3 },
      { id: "2-21-w4", text: "اعْبُدُوا", position: 4 },
      { id: "2-21-w5", text: "رَبَّكُمُ", position: 5 },
      { id: "2-21-w6", text: "الَّذِي", position: 6 },
      { id: "2-21-w7", text: "خَلَقَكُمْ", position: 7 },
      { id: "2-21-w8", text: "وَالَّذِينَ", position: 8 },
      { id: "2-21-w9", text: "مِنْ", position: 9 },
      { id: "2-21-w10", text: "قَبْلِكُمْ", position: 10 },
      { id: "2-21-w11", text: "لَعَلَّكُمْ", position: 11 },
      { id: "2-21-w12", text: "تَتَّقُونَ", position: 12 }
    ]
  },

  "33:1": {
    surah: { number: 33, nameArabic: "الأحزاب", nameEnglish: "Al-Ahzab" },
    verse: { number: 1, arabic: "يَا أَيُّهَا النَّبِيُّ اتَّقِ اللَّهَ وَلَا تُطِعِ الْكَافِرِينَ وَالْمُنَافِقِينَ", translation: "O Prophet, fear Allah and do not obey the disbelievers and the hypocrites." },
    sourceLabel: "QURRA supplementary example — a portion of ayah 1 (the opening clause); the full ayah continues with إِنَّ اللَّهَ كَانَ عَلِيمًا حَكِيمًا.",
    words: [
      { id: "33-1-w1", text: "يَا", position: 1 },
      { id: "33-1-w2", text: "أَيُّهَا", position: 2 },
      { id: "33-1-w3", text: "النَّبِيُّ", position: 3 },
      { id: "33-1-w4", text: "اتَّقِ", position: 4 },
      { id: "33-1-w5", text: "اللَّهَ", position: 5 },
      { id: "33-1-w6", text: "وَلَا", position: 6 },
      { id: "33-1-w7", text: "تُطِعِ", position: 7 },
      { id: "33-1-w8", text: "الْكَافِرِينَ", position: 8 },
      { id: "33-1-w9", text: "وَالْمُنَافِقِينَ", position: 9 }
    ]
  },

  "96:1": {
    surah: { number: 96, nameArabic: "العلق", nameEnglish: "Al-'Alaq" },
    verse: { number: 1, arabic: "اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ", translation: "Recite in the name of your Lord who created." },
    sourceLabel: "QURRA supplementary example",
    words: [
      { id: "96-1-w1", text: "اقْرَأْ", position: 1 },
      { id: "96-1-w2", text: "بِاسْمِ", position: 2 },
      { id: "96-1-w3", text: "رَبِّكَ", position: 3 },
      { id: "96-1-w4", text: "الَّذِي", position: 4 },
      { id: "96-1-w5", text: "خَلَقَ", position: 5 }
    ]
  },

  "2:233": {
    surah: { number: 2, nameArabic: "البقرة", nameEnglish: "Al-Baqarah" },
    verse: { number: 233, arabic: "وَالْوَالِدَاتُ يُرْضِعْنَ أَوْلَادَهُنَّ حَوْلَيْنِ كَامِلَيْنِ", translation: "Mothers may breastfeed their children two complete years." },
    sourceLabel: "From your reference book (p. 19) — cited there as ﴿وَالْوَالِدَاتُ يُرْضِعْنَ﴾; shown here with the next clause (أَوْلَادَهُنَّ حَوْلَيْنِ كَامِلَيْنِ) for context. The full ayah 233 continues well beyond this.",
    words: [
      { id: "2-233-w1", text: "وَالْوَالِدَاتُ", position: 1 },
      { id: "2-233-w2", text: "يُرْضِعْنَ", position: 2 },
      { id: "2-233-w3", text: "أَوْلَادَهُنَّ", position: 3 },
      { id: "2-233-w4", text: "حَوْلَيْنِ", position: 4 },
      { id: "2-233-w5", text: "كَامِلَيْنِ", position: 5 }
    ]
  },

  "12:32": {
    surah: { number: 12, nameArabic: "يوسف", nameEnglish: "Yusuf" },
    verse: { number: 32, arabic: "وَلَئِنْ لَمْ يَفْعَلْ مَا آمُرُهُ لَيُسْجَنَنَّ وَلَيَكُونًا مِنَ الصَّاغِرِينَ", translation: "And if he does not do what I order him, he will surely be imprisoned and will be of those debased." },
    sourceLabel: "From your reference book (p. 19) — cited there as ﴿لَيُسْجَنَنَّ وَلَيَكُونًا﴾; shown here with the preceding clause for context. This is a portion of ayah 32, spoken by al-'Aziz's wife.",
    words: [
      { id: "12-32-w1", text: "وَلَئِنْ", position: 1 },
      { id: "12-32-w2", text: "لَمْ", position: 2 },
      { id: "12-32-w3", text: "يَفْعَلْ", position: 3 },
      { id: "12-32-w4", text: "مَا", position: 4 },
      { id: "12-32-w5", text: "آمُرُهُ", position: 5 },
      { id: "12-32-w6", text: "لَيُسْجَنَنَّ", position: 6 },
      { id: "12-32-w7", text: "وَلَيَكُونًا", position: 7 },
      { id: "12-32-w8", text: "مِنَ", position: 8 },
      { id: "12-32-w9", text: "الصَّاغِرِينَ", position: 9 }
    ]
  },

  "2:255": {
    surah: { number: 2, nameArabic: "البقرة", nameEnglish: "Al-Baqarah" },
    verse: { number: 255, arabic: "يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ", translation: "He knows what is before them and what is behind them." },
    sourceLabel: "QURRA supplementary example — a portion of Ayat al-Kursi (2:255), the clause containing يَعْلَمُ.",
    words: [
      { id: "2-255-w1", text: "يَعْلَمُ", position: 1 },
      { id: "2-255-w2", text: "مَا", position: 2 },
      { id: "2-255-w3", text: "بَيْنَ", position: 3 },
      { id: "2-255-w4", text: "أَيْدِيهِمْ", position: 4 },
      { id: "2-255-w5", text: "وَمَا", position: 5 },
      { id: "2-255-w6", text: "خَلْفَهُمْ", position: 6 }
    ]
  }

};

function qgGetQuranVerse(ayahRef) {
  return QG_QURAN_VERSES[ayahRef] || null;
}

/**
 * Overlays a lesson's own per-word notes (e.g. conceptLabel, explanation)
 * onto a verse's base words, matched by word id. Never mutates the base
 * data — returns a new array. A word with no matching note is returned
 * unchanged (so it simply won't be selectable-with-detail if a lesson
 * doesn't have anything to say about it).
 * @param {Array} words - a verse's base words array (identity only)
 * @param {Object} notesById - { [wordId]: { conceptLabel?, explanation?, meaningEn?, whyMatters? } }
 */
function qgMergeWordNotes(words, notesById) {
  if (!Array.isArray(words) || !notesById) return words;
  return words.map((w) => (notesById[w.id] ? { ...w, ...notesById[w.id] } : w));
}
