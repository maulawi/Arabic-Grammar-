/* ==========================================================================
   QURRA Grammar — Lesson content (Phase 3: 1.1 · Phase 5: 1.2 · Phase 6:
   1.3–1.8 · Phase 7: 2.1–2.7)

   SOURCE FIDELITY NOTE — LESSON 1.1 (read before touching it):
   The user's uploaded reference book (a scan of "Mutammimat al-Ajurrumiyyah")
   could not be read reliably in this environment — its extracted text has a
   font-encoding corruption (confirmed: common Arabic letters are stored as
   rare, unrelated Unicode codepoints, e.g. every ك is stored as U+063D).
   Re-uploading the PDF reproduced the identical corrupted extraction, so the
   book's actual wording could not be verified.
   The user explicitly chose (after being shown this problem) to proceed
   using the general classical Ajurrumiyyah-tradition treatment of الكلام
   instead — the same foundational primer this book is a Mutammimah
   ("completion") of — with everything below clearly marked as such rather
   than presented as book-cited. See sourceNote on the lesson object and the
   "kind" field on each content block below.

   SOURCE FIDELITY NOTE — LESSON 1.2 (Phase 5):
   For this lesson the user supplied clean page images of the reference
   book (pages 11–14 of "Mutammimat al-Ajurrumiyyah fi 'Ilm al-'Arabiyyah"),
   sidestepping the PDF-extraction corruption entirely. Page 11 ("الكلمة
   وأنواعها") is the source for this lesson. Preserved verbatim: the matn
   definition "الكلمة: قول مفرد، وهي: اسمٌ، وفعلٌ، وحرفٌ جاء لمعنى", the
   gloss of مفرد as "غير مركب", and the book's own two examples (زيد،
   قُمْ — a third, عبدالله, was in the source but omitted here only to
   avoid a redundant third instance of the same "single name" example
   type; nothing about it was changed). Deliberately deferred (present in
   the source but out of scope for a beginner's first look at الكلمة —
   see the Phase 5 completion report for the full list): the "مستقلٌّ أو
   منويٌّ معه" ellipsis nuance in the footnote definition of الكلمة, the
   "فائدة" note that الكلمة can loosely mean الكلام (e.g. "كلمة الإخلاص"),
   the three dialectal pronunciations of الكلمة, and all "علامة" (sign)
   content on pages 12–14 (اسم/فعل/حرف signs), which belongs to later
   lessons (03, 07, 08) per the curriculum, not this one.
   NOTE ON TERMINOLOGY ACROSS LESSONS: this book defines الكلمة using
   "قول" (qawl) as its genus term, while Lesson 1.1's unverified content
   uses "لفظ" (lafẓ) for الكلام. These are not silently harmonized — each
   lesson keeps its own source's wording. Once Lesson 1.1 can be verified
   against this same book (its own definition of الكلام is likely a page
   or two earlier than page 11, not yet supplied), the two should be
   reconciled.

   SOURCE FIDELITY NOTE — LESSONS 1.3–1.8 (Phase 6, section-by-section
   batch): all six lessons are drawn from the same already-supplied page
   images (pages 11–14 of "Mutammimat al-Ajurrumiyyah"), re-read fresh this
   phase rather than trusted from memory. No new source material was
   required or requested. Mapping:
     - 1.3 أقسام الكلمة  — page 11 (the same three-way split from 1.2),
       plus the pages 12/14 section headers themselves as the source for
       "each type gets its own test."
     - 1.4 الاسم         — page 12, footnote (١).
     - 1.5 الفعل         — page 12, footnote (٥); the three verb types and
       قَامَ / قُومي examples — pages 13–14.
     - 1.6 الحرف         — page 14 ("ثالثًا: علامة الحرف"), definition by
       exclusion, examples هَلْ / في / لَمْ.
     - 1.7 علامات الاسم  — page 12 ("أولاً: علامات الاسم"). All five signs
       are named; only ال and التنوين are taught in depth (see sourceNote)
       since the other three (الإسناد، الخفض، حروف الخفض) depend on i'rab
       and sentence roles, out of Part 1's scope.
     - 1.8 علامات الفعل  — page 12 ("ثانيًا: علامات الفعل") and its footnote
       (٧), continuing onto page 13, which supplies the book's OWN two
       Qur'anic citations (سَيَصْلَىٰ — Al-Masad 3; سَوْفَ نُصْلِيهِمْ —
       An-Nisa 4:56) — not QURRA-selected verses.
   Every Qur'anic verse used that is NOT one of those two book-cited
   citations is a QURRA supplementary example (see sourceLabel in
   js/quranData.js for each). Labeling قُلْ (112:1) as فعل أمر in Lesson
   1.5 is QURRA's own reasoned application of the book's stated definition
   of أمر to a word the book itself never explicitly categorizes — flagged
   inline in that lesson's content, not presented as a direct citation.

   SOURCE FIDELITY NOTE — LESSONS 2.1–2.7 (Phase 7, Part 2: الإعراب
   والبناء): sourced from pages 15–20 of the same book ("باب الإعراب
   والبناء"), supplied as five clean page images this phase. Mapping:
     - 2.1 معرب أم مبني؟   — pp.16–17 (الاسم ضربان.../ الفعل ضربان...),
       an overview/bridge lesson paralleling 1.3's role in Part 1.
     - 2.2 الإعراب والمعرب — p.15 (definition + لفظًا/تقديرًا) + p.16
       (زَيْدٌ، مُوسَى، الفَتَى).
     - 2.3 البناء والمبني  — p.15 footnote 5 (lexical definition) + pp.16–17
       (the four marks; مضمرات as the first مبني category; حَيْثُ، أَيْنَ،
       أَمْسِ، كَمْ). One clause of page 15's full technical بناء definition
       was not confidently legible in the supplied image, so this lesson
       relies on the book's unambiguous lexical definition and worked
       examples instead of guessing at that clause — flagged in the
       lesson's own sourceNote, not silently smoothed over.
     - 2.4 الفرق بين المعرب والمبني — QURRA's own side-by-side synthesis of
       2.2 + 2.3's already-cited facts, plus one new one: وأما الحروف
       فمبنية كلها (p.20) — the book's own closing rule for this chapter.
     - 2.5 حالات الإعراب  — p.15 (أقسامه أربعة: رفع، نصب، خفض، جزم),
       states named and classified only — no علامات (markers) taught yet;
       those belong to the book's next chapter (this project's Part 3).
     - 2.6 حالات الاسم المعرب — p.15 (فللأسماء: الرفع والنصب والخفض، ولا
       جزم فيها).
     - 2.7 حالات الفعل المعرب — p.15 (وللأفعال: الرفع والنصب والجزم، ولا
       خفض فيها) + p.17 (الفعل ضربان: مبني وهو الأصل، ومعرب وهو الفرع) +
       p.19 (شرط إعراب المضارع وكلا استثنائيه، مع شاهدي القرآن الآتيين من
       الكتاب نفسه) + p.20 (وإنما أُعرب المضارع؛ لمشابهته للاسم).
   Book-cited Qur'anic citations used in this Part: ﴿وَالْوَالِدَاتُ
   يُرْضِعْنَ﴾ (Al-Baqarah 233) and ﴿لَنَسْفَعًا بِالنَّاصِيَةِ﴾ (Al-'Alaq
   15) — both the book's own examples (p.19), not QURRA-selected. Every
   other Qur'anic verse in this Part is a QURRA supplementary example
   (reused instances of verses already in js/quranData.js from Part 1),
   labeled as such in that file.

   CONTENT-CORRECTION PASS — LESSONS 1.2–1.8 (pages 12–14 re-read fresh
   from clean page images): this pass (1) rewrote every learner-facing
   "your book" / "couldn't be read" / retrieval-commentary phrase in
   Lessons 1.1–1.8 into plain scholarly language — sourceNote fields keep
   their page-citation facts but no longer narrate the retrieval process;
   (2) replaced "test" with "sign" (علامة) throughout 1.3–1.8, since the
   source's own word is a recognition-sign, not an exam; (3) corrected
   Lesson 1.2's treatment of قُمْ: it is no longer taught as proof that "a
   single word can't be كلام" — see the lesson's own concept.lead,
   example.contrast, and practice p5/p6 for the corrected explanation
   (قُمْ is one كلمة, and also a complete كلام because its subject أَنْتَ
   is grammatically understood, not because it's a command). Lesson 1.1's
   absolute "a single word can never be كلام" framing (definitionBreakdown
   + practice p3/p5) was softened to match, since 1.2 directly builds on
   1.1 and an uncorrected absolute there would silently contradict the
   fix one lesson later; (4) strengthened Lesson 1.6's هَلْ example into an
   explicit two-step exclusion (not an اسم because X; not a فعل because Y;
   therefore حرف) and added a one-line مبني / Part 10 forward-note; (5)
   added a simple conceptTree to Lesson 1.3 (الكلمة → اسم/فعل/حرف). Fuller
   rationale lives in this correction pass's own report, not restated here.
   Parts 2–10 still contain the same "your reference book" phrasing this
   pass removed from Part 1 — intentionally left untouched; out of this
   pass's scope.
   ========================================================================== */

const QG_LESSON_CONTENT = {

  "1.1": {
    id: "1.1",

    sourceNote: {
      status: "unverified-general-tradition",
      label: "Classical Ajurrumiyyah tradition",
      detail: "The definition of الكلام here follows the standard treatment found throughout the Ajurrumiyyah tradition — the foundational primer that Mutammimat al-Ajurrumiyyah itself builds on and completes. Its own definition sits a little earlier in the text than the pages used for the rest of Part 1."
    },

    intro: {
      titleAr: "الكلام",
      titleEn: "What is al-Kalam?",
      statement: "Before we learn how Arabic words function in a sentence, we first need to understand what grammarians mean by الكلام."
    },

    objective: [
      "explain what الكلام means in Arabic grammar",
      "distinguish الكلام from a single الكلمة",
      "recognize the basic idea behind grammatical الكلام"
    ],

    concept: {
      termAr: "الكلام",
      kind: "unverified-general-tradition",
      definitionAr: "الكلام: هو اللفظ المركب المفيد بالوضع",
      definitionEn: "Kalam is speech made of connected words that, together, give a complete meaning.",
      lead: "Traditional Arabic grammar (the tradition this book itself builds on) defines الكلام with four conditions packed into one line. Each one rules something out — tap a term below to see what it excludes."
    },

    definitionBreakdown: [
      {
        termAr: "اللفظ",
        termEn: "al-Lafẓ",
        glossEn: "Utterance",
        explanation: "A sound actually spoken with the human voice. This is what makes it speech at all — not a gesture, not something only written, an actual spoken sound."
      },
      {
        termAr: "المركب",
        termEn: "al-Murakkab",
        glossEn: "Composed",
        explanation: "Built from more than one part joined together. A standalone word usually fails this condition — though as the next lesson shows, a single spoken word can sometimes still count, if part of its structure is understood rather than pronounced."
      },
      {
        termAr: "المفيد",
        termEn: "al-Mufīd",
        glossEn: "Complete in meaning",
        explanation: "The listener understands it fully as soon as it's said, with nothing left hanging. A phrase like \"if you study\" — waiting for what happens next — isn't مفيد yet."
      },
      {
        termAr: "بالوضع",
        termEn: "bil-Waḍʿ",
        glossEn: "By (linguistic) convention",
        explanation: "It's real Arabic speech, meant to communicate — not a parrot's mimicry or a random noise that happens to sound like words."
      }
    ],

    example: {
      kind: "traditional-grammar-example",
      kindLabel: "Traditional grammar example — the standard illustration this tradition itself uses, not from the Qur'an",
      arabic: "قَامَ زَيْدٌ",
      transliteration: "Qāma Zaydun",
      translation: "Zayd stood up.",
      explanation: "Two words — قَامَ (\"stood\") and زَيْدٌ (\"Zayd\") — joined together, and the meaning is complete: you know exactly what happened, with nothing left waiting. That's كلام.",
      contrast: {
        arabic: "زَيْدٌ",
        translation: "“Zayd” (on its own)",
        explanation: "One word by itself. It names someone, but it isn't مركب — nothing is joined to it — so on its own it's a كلمة, not كلام."
      }
    },

    quranExample: {
      surahAr: "الإخلاص",
      surahEn: "Al-Ikhlas",
      ayahRef: "112:2",
      arabic: "اللَّهُ الصَّمَدُ",
      translation: "Allah, the Eternal Refuge.",
      notice: "Two words: اللَّهُ (a name) and الصَّمَدُ (a description of Him). Together they give one complete meaning that needs nothing else added — exactly what makes an expression كلام.",
      // Phase 5: relocated here from js/quranData.js (unchanged wording) so
      // this lesson's own framing of these two words ("part of the كلام")
      // lives with this lesson's content, not in the shared Qur'an data —
      // Lesson 1.2 reuses the same verse with its own, different framing.
      wordNotes: {
        "112-2-w1": {
          conceptLabel: "Part of the كلام",
          explanation: "One of the two words that, together, form this كلام — a complete expression, not standing alone."
        },
        "112-2-w2": {
          conceptLabel: "Part of the كلام",
          explanation: "Joined to the word before it, this is what completes the meaning — together the two leave nothing hanging."
        }
      }
    },

    noticeInteraction: {
      promptAr: "اللَّهُ الصَّمَدُ",
      promptContext: "Al-Ikhlas 112:2",
      question: "Is this expression كلام or كلمة؟",
      options: [
        { id: "kalam", labelAr: "كلام", labelEn: "Kalam" },
        { id: "kalimah", labelAr: "كلمة", labelEn: "Kalimah" }
      ],
      correctOptionId: "kalam",
      correctFeedback: "Exactly. Two words, joined together, and the meaning is complete — this is كلام.",
      incorrectFeedback: "Not quite. A كلمة is a single word. Here there are two — اللَّهُ and الصَّمَدُ — joined together in one complete meaning. That combination is كلام."
    },

    practiceQuestions: [
      {
        id: "p1",
        type: "true-false",
        prompt: "قَامَ زَيْدٌ is كلام.",
        correct: true,
        explanation: "Right — two words, joined together, giving a complete meaning."
      },
      {
        id: "p2",
        type: "multiple-choice",
        prompt: "Which of these is كلام?",
        options: [
          { id: "a", labelAr: "زَيْدٌ" },
          { id: "b", labelAr: "قَامَ" },
          { id: "c", labelAr: "قَامَ زَيْدٌ" },
          { id: "d", labelAr: "الصَّمَدُ" }
        ],
        correctOptionId: "c",
        explanation: "The other three are each a single word — a كلمة on its own, not كلام."
      },
      {
        id: "p3",
        type: "true-false",
        prompt: "A single word counts as كلام just because it's an important word.",
        correct: false,
        explanation: "Importance has nothing to do with it. What matters is whether the expression is مركب and مفيد — composed and complete in meaning. A standalone word usually isn't, unless (as you'll see next lesson) something in its structure is understood even though it isn't pronounced."
      },
      {
        id: "p4",
        type: "multiple-choice",
        prompt: "اللَّهُ الصَّمَدُ — is this كلمة or كلام?",
        options: [
          { id: "kalimah", labelAr: "كلمة" },
          { id: "kalam", labelAr: "كلام" }
        ],
        correctOptionId: "kalam",
        explanation: "Composed of two words, and the meaning is complete — this is كلام."
      },
      {
        id: "p5",
        type: "multiple-choice",
        prompt: "A single spoken word (مفرد), on its own, is usually not كلام. Which condition does it typically lack?",
        options: [
          { id: "a", labelAr: "", labelEn: "It isn't مركب (composed of more than one part)" },
          { id: "b", labelAr: "", labelEn: "It's too short to pronounce" },
          { id: "c", labelAr: "", labelEn: "It has no meaning at all" },
          { id: "d", labelAr: "", labelEn: "It isn't Arabic" }
        ],
        correctOptionId: "a",
        explanation: "A single pronounced word usually isn't مركب — that's the piece it typically lacks. (The next lesson shows one way a single word can still satisfy it: by containing something grammatically understood, not spoken.)"
      }
    ],

    quranChallenge: {
      surahAr: "الكوثر",
      surahEn: "Al-Kawthar",
      ayahRef: "108:1",
      arabic: "إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ",
      translation: "Indeed, We have granted you al-Kawthar.",
      question: "Does this qualify as كلام according to what you learned?",
      options: [
        { id: "yes", labelEn: "Yes" },
        { id: "no", labelEn: "No" }
      ],
      correctOptionId: "yes",
      explanation: "Yes — it's composed of several words (إِنَّا، أَعْطَيْنَاكَ، الْكَوْثَرَ) and gives one complete meaning on its own. That's كلام."
    },

    summary: [
      "What الكلام means: speech composed of two or more words that gives a complete meaning.",
      "How it differs from a single word (كلمة): a كلمة can stand alone, but on its own it isn't كلام.",
      "How to recognize it: check whether it's composed of 2+ words, and whether it leaves nothing hanging.",
      "How it appears in Qur'anic Arabic: even a short ayah like اللَّهُ الصَّمَدُ is a complete كلام."
    ],

    completion: {
      titleAr: "الكلام",
      statement: "You've completed your first step into Arabic grammar."
    }
  },

  "1.2": {
    id: "1.2",

    sourceNote: {
      status: "book-cited",
      label: "Sourced from the reference text — page 11",
      detail: "This lesson follows page 11 of Mutammimat al-Ajurrumiyyah (“الكلمة وأنواعها”). The definition, the gloss of مفرد, and the examples below are the text's own."
    },

    intro: {
      titleAr: "الكلمة",
      titleEn: "What is al-Kalimah?",
      statement: "In Lesson 1 you learned what makes a group of words a complete كلام. Now zoom in on the single building block that combines to form one: الكلمة — and see why the two categories aren't simply \"one word\" versus \"more than one.\""
    },

    objective: [
      "explain what الكلمة means: a single, uncomposed word",
      "distinguish الكلمة (a single word) from الكلام (a complete expression) without relying on word-counting alone",
      "recognize that every كلمة is one of three types — you'll start telling them apart in the next lesson"
    ],

    concept: {
      termAr: "الكلمة",
      kind: "book-cited",
      definitionAr: "الكلمة: قَوْلٌ مُفرَدٌ، وَهِيَ: اسمٌ، وَفِعْلٌ، وَحَرْفٌ جَاءَ لِمَعنَى",
      definitionEn: "Al-Kalimah is a single utterance — and it's always one of three things: a noun, a verb, or a particle that carries a meaning.",
      lead: "The reference text defines الكلمة in one line. The key word is مُفرَد — tap it below to see exactly what that means. Keep in mind: الكلمة is just a count of words, while الكلام (Lesson 1) is about whether the meaning is grammatically complete. They don't map onto \"one word\" versus \"many\" as neatly as that sounds — the example ahead shows why."
    },

    definitionBreakdown: [
      {
        termAr: "قَوْل",
        termEn: "Qawl",
        glossEn: "Utterance",
        explanation: "A spoken expression — the general word for anything said that carries meaning. It's the same idea as الكلام's \"لفظ\" from Lesson 1, just the term this book uses for it."
      },
      {
        termAr: "مُفرَد",
        termEn: "Mufrad",
        glossEn: "Single, uncomposed",
        explanation: "غَيْرُ مُرَكَّب — \"not composed.\" الكلمة is a count of spoken words: one word, joined to nothing else, is مفرد. This is a different question from whether something counts as كلام — see the note below."
      }
    ],

    threeTypes: {
      lead: "The definition also says every كلمة is one of three things:",
      items: [
        { termAr: "اسم", glossEn: "a noun" },
        { termAr: "فعل", glossEn: "a verb" },
        { termAr: "حرف", glossEn: "a particle — meaningful only together with other words" }
      ],
      note: "You don't need to tell these apart yet — that's the next lesson. For now: whichever of the three it is, if it's one word, it's a كلمة."
    },

    example: {
      kind: "book-example",
      kindLabel: "Example from the reference text (p. 11)",
      arabic: "زَيْدٌ",
      transliteration: "Zaydun",
      translation: "Zayd (a name)",
      explanation: "One word, standing alone — the same word Lesson 1 used to show what isn't a complete كلام. Here, it's exactly what a كلمة is: a single, uncomposed word, and nothing about its structure implies anything beyond itself.",
      contrast: {
        arabic: "قُمْ",
        translation: "“Stand!” (a command)",
        explanation: "Also one كلمة — a single word, a completely different type from زيد. But don't take زيد and قُمْ as proof that \"one word\" and \"not كلام\" always go together: unlike زيد, قُمْ carries an understood subject (أَنْتَ), so it also stands as a complete كلام by itself. As a كلمة, though, it's still just one word — that part doesn't change."
      }
    },

    quranExample: {
      surahAr: "الإخلاص",
      surahEn: "Al-Ikhlas",
      ayahRef: "112:2",
      arabic: "اللَّهُ الصَّمَدُ",
      translation: "Allah, the Eternal Refuge.",
      notice: "You already met this ayah in Lesson 1, as one كلام. Look again: how many separate words is it actually built from?",
      // Different framing of the same two words for this lesson — see the
      // note in js/quranData.js on why this isn't stored on the verse itself.
      wordNotes: {
        "112-2-w1": {
          conceptLabel: "One كلمة",
          explanation: "By itself, this single word is a كلمة — مفرد، غير مركب."
        },
        "112-2-w2": {
          conceptLabel: "One كلمة",
          explanation: "This one too — a separate, single word. Put the two together and you get the كلام from Lesson 1."
        }
      }
    },

    noticeInteraction: {
      type: "word-tap",
      ayahRef: "112:2",
      instanceId: "1.2-notice",
      promptContext: "Al-Ikhlas 112:2",
      question: "Tap each word below.",
      // Every word in this verse genuinely is a كلمة, so there's no wrong
      // tap to give incorrect feedback for — tapping IS the "notice" here.
      correctFeedback: "Right — each word you tap is a single, uncomposed كلمة. Put the two together and they form one كلام, exactly like you saw in Lesson 1.",
      wordNotes: {
        "112-2-w1": {
          conceptLabel: "One كلمة",
          explanation: "مفرد — a single word, joined to nothing on its own."
        },
        "112-2-w2": {
          conceptLabel: "One كلمة",
          explanation: "Also مفرد — its own separate word, joined to the one before it to form the كلام."
        }
      }
    },

    practiceQuestions: [
      {
        id: "p1",
        type: "true-false",
        prompt: "زَيْدٌ is a كلمة.",
        correct: true,
        explanation: "Right — a single word by itself, exactly like the example from Lesson 1."
      },
      {
        id: "p2",
        type: "true-false",
        prompt: "قَامَ زَيْدٌ is a كلمة.",
        correct: false,
        explanation: "Not quite — قَامَ زَيْدٌ is two words joined together, so it's مركب. That makes it a كلام, not a single كلمة."
      },
      {
        id: "p3",
        type: "multiple-choice",
        prompt: "Which of these is a single كلمة?",
        options: [
          { id: "a", labelAr: "اللَّهُ الصَّمَدُ" },
          { id: "b", labelAr: "الصَّمَدُ" },
          { id: "c", labelAr: "قَامَ زَيْدٌ" }
        ],
        correctOptionId: "b",
        explanation: "الصَّمَدُ on its own is one word — a كلمة. The other two are each built from two words joined together, so they're كلام."
      },
      {
        id: "p4",
        type: "true-false",
        prompt: "Every كلمة is either an اسم, a فعل, or a حرف.",
        correct: true,
        explanation: "Right — those are the three types every single Arabic word falls into. You'll learn to tell them apart in the next lesson."
      },
      {
        id: "p5",
        type: "true-false",
        prompt: "قُمْ (“Stand!”) is a single كلمة — one spoken word.",
        correct: true,
        explanation: "Right — however it's classified as كلام, it's still just one pronounced word, so as a كلمة it's مفرد."
      },
      {
        id: "p6",
        type: "multiple-choice",
        prompt: "قُمْ is only one spoken word, yet grammarians also count it as a complete كلام. Why?",
        options: [
          { id: "a", labelEn: "Because every command is automatically كلام, regardless of word count" },
          { id: "b", labelEn: "Because its subject, أَنْتَ (\"you\"), is understood even though it isn't pronounced" },
          { id: "c", labelEn: "It isn't really كلام — only كلمة" }
        ],
        correctOptionId: "b",
        explanation: "Right — قُمْ carries an understood أَنْتَ, which supplies the rest of the grammatical structure. That's what lets a single pronounced word still be كلام — not simply because it's a command."
      }
    ],

    quranChallenge: {
      surahAr: "الإخلاص",
      surahEn: "Al-Ikhlas",
      ayahRef: "112:1",
      arabic: "قُلْ هُوَ اللَّهُ أَحَدٌ",
      translation: "Say, \"He is Allah, [who is] One.\"",
      question: "Is this ayah made of more than one كلمة?",
      options: [
        { id: "yes", labelEn: "Yes" },
        { id: "no", labelEn: "No" }
      ],
      correctOptionId: "yes",
      explanation: "Yes — four separate kalimahs (قُلْ، هُوَ، اللَّهُ، أَحَدٌ), each one a single word, joined together into one كلام."
    },

    summary: [
      "What الكلمة means: a single, uncomposed word — قول مفرد.",
      "How it differs from الكلام: الكلمة counts words; الكلام asks whether the meaning is grammatically complete. A كلام is usually built from more than one كلمة — but not always: a single word like قُمْ can be كلام too, when a part of its structure (here, أَنْتَ) is understood rather than spoken.",
      "Every كلمة is one of three types — اسم, فعل, or حرف — which you'll start telling apart in the next lesson.",
      "How it appears in Qur'anic Arabic: even a short ayah like اللَّهُ الصَّمَدُ is built from two separate kalimahs."
    ],

    completion: {
      titleAr: "الكلمة",
      statement: "You can now tell a single word from a complete expression — and you know better than to judge either one just by counting."
    }
  },

  "1.3": {
    id: "1.3",
    steps: ["intro", "concept", "example", "quran", "practice", "summary", "completion"],

    sourceNote: {
      status: "book-cited",
      label: "Sourced from the reference text — pages 11–14",
      detail: "The three-way classification (اسم، فعل، حرف) is the same line from page 11 you met in Lesson 2. The idea that each type has its own distinguishing signs comes directly from how the text organizes pages 12–14 itself: “أولاً: علامات الاسم” (p.12), “ثانيًا: علامات الفعل” (p.12), and “ثالثًا: علامة الحرف” (p.14) — those three headings are this lesson's roadmap for Lessons 4–6."
    },

    intro: {
      titleAr: "أقسام الكلمة",
      titleEn: "The Three Word Types",
      statement: "You already know every كلمة is one of three types. Now let's understand why that distinction is the single most important idea in all of Arabic grammar."
    },

    objective: [
      "explain why every Arabic word must be one of three types",
      "name the three types: اسم, فعل, and حرف",
      "know that each type has its own distinguishing signs (علامات), covered in the next few lessons"
    ],

    concept: {
      termAr: "أقسام الكلمة",
      kind: "book-cited",
      definitionAr: "الكلمةُ ... وهي: اسمٌ، وفعلٌ، وحرفٌ جاء لمعنى",
      definitionEn: "Every kalimah is one of three things: a noun, a verb, or a particle that carries a meaning.",
      lead: "You met this line in Lesson 2. Now it becomes the roadmap for everything ahead — three types, three lessons, and a set of distinguishing signs (علامات) for recognizing each one."
    },

    definitionBreakdown: [
      {
        termAr: "اسم",
        termEn: "Ism",
        glossEn: "Noun — Lesson 4",
        explanation: "The text groups the noun's signs under the heading “أولاً: علامات الاسم” (p. 12) — “First: the signs of the noun.”"
      },
      {
        termAr: "فعل",
        termEn: "Fi'l",
        glossEn: "Verb — Lesson 5",
        explanation: "The text groups the verb's signs under “ثانيًا: علامات الفعل” (p. 12) — “Second: the signs of the verb.”"
      },
      {
        termAr: "حرف",
        termEn: "Harf",
        glossEn: "Particle — Lesson 6",
        explanation: "The text introduces the particle under “ثالثًا: علامة الحرف” (p. 14) — “Third: the sign of the particle” — and defines it by what it ISN'T: neither of the other two."
      }
    ],

    conceptTree: {
      root: { ar: "الكلمة", en: "Every Arabic word" },
      branches: [
        { ar: "اسم", en: "Noun — Lesson 4" },
        { ar: "فعل", en: "Verb — Lesson 5" },
        { ar: "حرف", en: "Particle — Lesson 6" }
      ]
    },

    example: {
      kind: "book-example",
      kindLabel: "Familiar example, plus one from the reference text (p. 14)",
      arabic: "قَامَ زَيْدٌ",
      transliteration: "Qāma Zaydun",
      translation: "Zayd stood up.",
      explanation: "قَامَ is a فعل — it reports something happening. زَيْدٌ is an اسم — it names someone. Together they're the familiar كلام from Lesson 1 — but now look at each word as its own type, not just as a complete expression.",
      contrast: {
        arabic: "هَلْ",
        translation: "“Is…?” (a question particle)",
        explanation: "A single حرف — the text's own example on page 14. It doesn't name anything on its own (not اسم) and doesn't report an event with a time (not فعل). It only makes sense attached to a sentence."
      }
    },

    quranExample: {
      surahAr: "الكوثر",
      surahEn: "Al-Kawthar",
      ayahRef: "108:1",
      arabic: "إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ",
      translation: "Indeed, We have granted you al-Kawthar.",
      notice: "Even this short ayah is built entirely from the three types you just learned: إِنَّا (a pronoun — an اسم), أَعْطَيْنَاكَ (a verb — a فعل, with a pronoun attached to it), and الْكَوْثَرَ (a noun — an اسم). Every word you'll ever read is one of these three."
    },

    practiceQuestions: [
      {
        id: "p1",
        type: "true-false",
        prompt: "Every single Arabic word must be either اسم, فعل, or حرف.",
        correct: true,
        explanation: "Right — the text's own definition of كلمة (Lesson 2) says exactly this: وهي اسمٌ، وفعلٌ، وحرفٌ جاء لمعنى."
      },
      {
        id: "p2",
        type: "multiple-choice",
        prompt: "زَيْدٌ names a person. What type of كلمة is it?",
        options: [
          { id: "a", labelAr: "اسم" },
          { id: "b", labelAr: "فعل" },
          { id: "c", labelAr: "حرف" }
        ],
        correctOptionId: "a",
        explanation: "Right — it names something. You'll learn the exact sign for this in the next lesson."
      },
      {
        id: "p3",
        type: "multiple-choice",
        prompt: "قَامَ reports something happening. What type is it?",
        options: [
          { id: "a", labelAr: "فعل" },
          { id: "b", labelAr: "اسم" },
          { id: "c", labelAr: "حرف" }
        ],
        correctOptionId: "a",
        explanation: "Right — it reports an event. You'll learn the exact sign for this in Lesson 5."
      },
      {
        id: "p4",
        type: "true-false",
        prompt: "حرف has its own full, positive definition — a description of what it IS.",
        correct: false,
        explanation: "Not quite — the text defines حرف by exclusion: ما لا يصلح معه دليل الاسم ولا دليل الفعل (Lesson 6). It's identified by what it ISN'T, not by what it is."
      }
    ],

    summary: [
      "Every single Arabic كلمة is one of exactly three types: اسم، فعل، or حرف — no exceptions.",
      "Each type has its own distinguishing signs (علامات): the noun's in Lesson 4, the verb's in Lesson 5, and the particle's in Lesson 6.",
      "حرف is unusual: it's defined by exclusion — whatever isn't an اسم and isn't a فعل.",
      "This three-way split is the foundation everything else in Arabic grammar builds on."
    ],

    completion: {
      titleAr: "أقسام الكلمة",
      statement: "You know the map now. Next: learning to read it."
    }
  },

  "1.4": {
    id: "1.4",
    steps: ["intro", "concept", "example", "quran", "notice", "practice", "challenge", "summary", "completion"],

    sourceNote: {
      status: "book-cited",
      label: "Sourced from the reference text — page 12 (footnote 1)",
      detail: "The definition (“الاسم: كلمة دلت على معنى في نفسها ولم تقترن بزمن”) is the text's own footnote on page 12. زَيْدٌ is the text's example from page 11, reused here as the noun illustration."
    },

    intro: {
      titleAr: "الاسم",
      titleEn: "The Noun (Ism)",
      statement: "You know every word is اسم, فعل, or حرف. Now meet the first type — and the simple sign that identifies it."
    },

    objective: [
      "explain what الاسم means and the sign that identifies it",
      "distinguish an اسم from a فعل by whether it's tied to a time",
      "recognize nouns inside a Qur'anic expression"
    ],

    concept: {
      termAr: "الاسم",
      kind: "book-cited",
      definitionAr: "الاسمُ: كَلِمَةٌ دَلَّتْ عَلَى مَعْنًى فِي نَفْسِهَا وَلَمْ تَقْتَرِنْ بِزَمَنٍ",
      definitionEn: "A noun is a word that indicates a meaning in itself, without being tied to any particular time.",
      lead: "The reference text packs this into one line. The second half — لم تقترن بزمن — is the real sign to look for. Tap each part below."
    },

    definitionBreakdown: [
      {
        termAr: "دَلَّت على معنى في نفسها",
        termEn: "dallat ʿala maʿnan fī nafsihā",
        glossEn: "indicates a meaning by itself",
        explanation: "It doesn't need another word attached to make sense — زَيْدٌ already means something all on its own."
      },
      {
        termAr: "لم تقترن بزمن",
        termEn: "lam taqtarin bi-zaman",
        glossEn: "not tied to a time",
        explanation: "This is what separates a noun from a verb. زَيْدٌ doesn't tell you WHEN anything happened — it just names something. Contrast with الفعل in the next lesson, which always carries a time."
      }
    ],

    example: {
      kind: "book-example",
      kindLabel: "Example from the reference text (p. 11)",
      arabic: "زَيْدٌ",
      transliteration: "Zaydun",
      translation: "Zayd (a name)",
      explanation: "A name — it means something (a specific person) entirely on its own, and it says nothing about when anything happened. That's exactly what makes it اسم.",
      contrast: {
        arabic: "قَامَ",
        translation: "“stood” (an action)",
        explanation: "This word DOES carry a time — it tells you something already happened. That's not اسم — that's فعل, which you'll meet next lesson."
      }
    },

    quranExample: {
      surahAr: "الإخلاص",
      surahEn: "Al-Ikhlas",
      ayahRef: "112:2",
      arabic: "اللَّهُ الصَّمَدُ",
      translation: "Allah, the Eternal Refuge.",
      notice: "Both words in this ayah are nouns — a name (اللَّهُ) and a description (الصَّمَدُ). Neither tells you WHEN anything happened; each simply means something on its own.",
      wordNotes: {
        "112-2-w1": {
          conceptLabel: "اسم",
          explanation: "اللَّهُ is a name — it means something by itself, with no time attached. A noun."
        },
        "112-2-w2": {
          conceptLabel: "اسم",
          explanation: "الصَّمَدُ describes Him — it also just means something on its own, with no time attached. Also a noun."
        }
      }
    },

    noticeInteraction: {
      type: "word-tap",
      ayahRef: "112:2",
      instanceId: "1.4-notice",
      promptContext: "Al-Ikhlas 112:2",
      question: "Tap each word. Both are the same type you just learned — can you see why?",
      correctFeedback: "Right — both اللَّهُ and الصَّمَدُ are nouns: each means something on its own, and neither carries a time.",
      wordNotes: {
        "112-2-w1": { conceptLabel: "اسم", explanation: "A name. Means something by itself — no time attached." },
        "112-2-w2": { conceptLabel: "اسم", explanation: "A description. Also means something by itself — no time attached." }
      }
    },

    practiceQuestions: [
      {
        id: "p1",
        type: "true-false",
        prompt: "الاسم is a word tied to a specific time.",
        correct: false,
        explanation: "The opposite — لم تقترن بزمن: a noun is NOT tied to any time. That's actually the sign that separates it from a verb."
      },
      {
        id: "p2",
        type: "multiple-choice",
        prompt: "Which of these is an اسم?",
        options: [
          { id: "a", labelAr: "زَيْدٌ" },
          { id: "b", labelAr: "قَامَ" },
          { id: "c", labelAr: "هَلْ" }
        ],
        correctOptionId: "a",
        explanation: "زَيْدٌ names someone, with no time attached — an اسم. قَامَ carries a time (فعل); هَلْ is a حرف."
      },
      {
        id: "p3",
        type: "true-false",
        prompt: "اللَّهُ and الصَّمَدُ are both nouns.",
        correct: true,
        explanation: "Right — both simply mean something on their own, without any time attached."
      },
      {
        id: "p4",
        type: "multiple-choice",
        prompt: "What is the sign that tells you a word is NOT an اسم?",
        options: [
          { id: "a", labelEn: "It's tied to a time" },
          { id: "b", labelEn: "It's short" },
          { id: "c", labelEn: "It has no vowels" },
          { id: "d", labelEn: "It's used often" }
        ],
        correctOptionId: "a",
        explanation: "Exactly — if a word carries a time (past, present, or command), it's a فعل, not an اسم."
      }
    ],

    quranChallenge: {
      surahAr: "الفاتحة",
      surahEn: "Al-Fatihah",
      ayahRef: "1:2",
      arabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
      translation: "All praise is due to Allah, Lord of the worlds.",
      question: "الْحَمْدُ (“praise”) means something on its own, with no time attached. Is it an اسم?",
      options: [
        { id: "yes", labelEn: "Yes" },
        { id: "no", labelEn: "No" }
      ],
      correctOptionId: "yes",
      explanation: "Yes — it means something on its own and carries no time. That's exactly the sign of اسم, wherever you find it."
    },

    summary: [
      "الاسم: a word that means something on its own, without being tied to any time.",
      "The sign: does it carry a time (past, present, command)? If yes, it's not a noun.",
      "زَيْدٌ names something with no time attached — the text's own example.",
      "Every noun you'll meet — names, descriptions, pronouns — shows this same sign."
    ],

    completion: {
      titleAr: "الاسم",
      statement: "You can now recognize the first of the three word types."
    }
  },

  "1.5": {
    id: "1.5",
    steps: ["intro", "concept", "example", "quran", "notice", "practice", "challenge", "summary", "completion"],

    sourceNote: {
      status: "book-cited",
      label: "Sourced from the reference text — pages 12–14",
      detail: "The definition of الفعل (“كلمة دلت على معنى في نفسها واقترنت بأحد الأزمنة الثلاثة”) is the text's own footnote on page 12. The three verb types — ماضٍ، مضارع، أمر — and the examples قَامَ and قُومي are drawn directly from pages 13–14. Labeling قُلْ (in the Qur'an example below) as فعل أمر is QURRA's own application of the text's stated definition to a word the text itself doesn't explicitly categorize — flagged clearly in the lesson content itself, not presented as a direct citation."
    },

    intro: {
      titleAr: "الفعل",
      titleEn: "The Verb (Fi'l)",
      statement: "You can already spot an اسم. Now meet the second type: the word that always carries a time."
    },

    objective: [
      "explain what الفعل means and the sign that identifies it",
      "name the three verb types: ماضٍ, مضارع, and أمر",
      "identify the one فعل among several أسماء in a Qur'anic expression"
    ],

    concept: {
      termAr: "الفعل",
      kind: "book-cited",
      definitionAr: "الفِعلُ: كَلِمَةٌ دَلَّتْ عَلَى مَعْنًى فِي نَفْسِهَا وَاقْتَرَنَتْ بِأَحَدِ الْأَزْمِنَةِ الثَّلَاثَةِ",
      definitionEn: "A verb is a word that indicates a meaning in itself, associated with one of the three tenses.",
      lead: "Where اسم carries NO time, فعل always carries one of three. Tap each type below."
    },

    definitionBreakdown: [
      {
        termAr: "ماضٍ",
        termEn: "Madi",
        glossEn: "Past",
        explanation: "An action that already happened. Example from the text: قَامَ — “stood” (already happened)."
      },
      {
        termAr: "مضارع",
        termEn: "Mudari'",
        glossEn: "Present / future",
        explanation: "An action happening now or about to happen. Example from the text: يَقُومُ — “is standing / stands.”"
      },
      {
        termAr: "أمر",
        termEn: "Amr",
        glossEn: "Command",
        explanation: "An action being requested to happen after the moment of speaking — the text's own definition: “ما يدل على حدث يُطلب حصوله بعد زمن التكلم.” Example from the text: قُومي — “Stand!” (to a woman)."
      }
    ],

    example: {
      kind: "book-example",
      kindLabel: "Example from the reference text (p. 13)",
      arabic: "قَامَ",
      transliteration: "Qāma",
      translation: "He stood (already happened)",
      explanation: "This word carries a time — it happened in the past. That's what makes it فعل, unlike زَيْدٌ (اسم) which carries no time at all.",
      contrast: {
        arabic: "زَيْدٌ",
        translation: "“Zayd” (a name, no time)",
        explanation: "The same noun you already know — no time attached, so not a فعل."
      }
    },

    quranExample: {
      surahAr: "الإخلاص",
      surahEn: "Al-Ikhlas",
      ayahRef: "112:1",
      arabic: "قُلْ هُوَ اللَّهُ أَحَدٌ",
      translation: "Say, He is Allah, [who is] One.",
      notice: "Look closely: three of these four words are أسماء (nouns) — you can already spot those. Only one carries a time, a request for something to happen. Which one is the فعل?",
      wordNotes: {
        "112-1-w1": {
          conceptLabel: "فعل أمر",
          explanation: "قُلْ means “Say!” — it requests an action after the moment of speaking. That fits the text's own definition of أمر — this is QURRA's own reading of this particular word using that definition; the text doesn't categorize this specific word itself."
        },
        "112-1-w2": { conceptLabel: "اسم", explanation: "هُوَ (“He”) — a pronoun. It means something by itself, with no time attached — an اسم, like you learned last lesson." },
        "112-1-w3": { conceptLabel: "اسم", explanation: "اللَّهُ — a name, no time attached — اسم." },
        "112-1-w4": { conceptLabel: "اسم", explanation: "أَحَدٌ — a description, no time attached — اسم." }
      }
    },

    noticeInteraction: {
      type: "word-tap",
      ayahRef: "112:1",
      instanceId: "1.5-notice",
      promptContext: "Al-Ikhlas 112:1",
      question: "Tap the one word in this ayah that is a فعل.",
      correctWordId: "112-1-w1",
      correctFeedback: "Right — قُلْ (“Say!”) is the فعل. It requests something happen after the moment of speaking — the text's own definition of أمر, applied here.",
      incorrectFeedback: "Not quite — that word is an اسم (it means something on its own, with no time attached). Look for the one word that carries a time or a request.",
      wordNotes: {
        "112-1-w1": { conceptLabel: "فعل أمر", explanation: "قُلْ — “Say!” Requests an action after the moment of speaking." },
        "112-1-w2": { conceptLabel: "اسم", explanation: "هُوَ — a pronoun. No time attached." },
        "112-1-w3": { conceptLabel: "اسم", explanation: "اللَّهُ — a name. No time attached." },
        "112-1-w4": { conceptLabel: "اسم", explanation: "أَحَدٌ — a description. No time attached." }
      }
    },

    practiceQuestions: [
      {
        id: "p1",
        type: "true-false",
        prompt: "الفعل always carries a time (past, present, or command).",
        correct: true,
        explanation: "Right — واقترنت بأحد الأزمنة الثلاثة: a verb is always tied to one of the three tenses."
      },
      {
        id: "p2",
        type: "multiple-choice",
        prompt: "قَامَ (“he stood”) — which type of فعل is it?",
        options: [
          { id: "a", labelAr: "ماضٍ" },
          { id: "b", labelAr: "مضارع" },
          { id: "c", labelAr: "أمر" }
        ],
        correctOptionId: "a",
        explanation: "Right — it already happened. That's ماضٍ."
      },
      {
        id: "p3",
        type: "multiple-choice",
        prompt: "قُومي (“Stand!”, to a woman) — which type of فعل is it?",
        options: [
          { id: "a", labelAr: "أمر" },
          { id: "b", labelAr: "ماضٍ" },
          { id: "c", labelAr: "مضارع" }
        ],
        correctOptionId: "a",
        explanation: "Right — it's the text's own example of أمر: requesting an action after the moment of speaking."
      },
      {
        id: "p4",
        type: "true-false",
        prompt: "In قُلْ هُوَ اللَّهُ أَحَدٌ, هُوَ is a فعل.",
        correct: false,
        explanation: "No — هُوَ is a pronoun, an اسم. It means something by itself with no time attached. قُلْ is the only فعل in this ayah."
      },
      {
        id: "p5",
        type: "multiple-choice",
        prompt: "What separates فعل from اسم?",
        options: [
          { id: "a", labelEn: "فعل carries a time, اسم doesn't" },
          { id: "b", labelEn: "فعل is longer" },
          { id: "c", labelEn: "اسم is always a name" },
          { id: "d", labelEn: "There's no real difference" }
        ],
        correctOptionId: "a",
        explanation: "Exactly — the presence of a time (or a request for one) is the whole sign to look for."
      }
    ],

    quranChallenge: {
      surahAr: "الكوثر",
      surahEn: "Al-Kawthar",
      ayahRef: "108:1",
      arabic: "إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ",
      translation: "Indeed, We have granted you al-Kawthar.",
      question: "أَعْطَيْنَاكَ (“We granted you”) tells you something already happened. Is it a فعل?",
      options: [
        { id: "yes", labelEn: "Yes" },
        { id: "no", labelEn: "No" }
      ],
      correctOptionId: "yes",
      explanation: "Yes — it carries a time (already happened, ماضٍ), which is exactly the sign of فعل."
    },

    summary: [
      "الفعل: a word tied to one of three tenses — ماضٍ (past), مضارع (present), or أمر (command).",
      "The sign: does it carry a time or a request for one? If yes, it's a فعل.",
      "قَامَ (ماضٍ) and قُومي (أمر) are the text's own examples.",
      "In قُلْ هُوَ اللَّهُ أَحَدٌ, only قُلْ is a فعل — the other three words are أسماء."
    ],

    completion: {
      titleAr: "الفعل",
      statement: "You can now spot a verb — and tell its three types apart."
    }
  },

  "1.6": {
    id: "1.6",
    steps: ["intro", "concept", "example", "quran", "notice", "practice", "challenge", "summary", "completion"],

    sourceNote: {
      status: "book-cited",
      label: "Sourced from the reference text — page 14",
      detail: "The definition (“ما لا يصلح معه دليل الاسم ولا دليل الفعل”) and all three examples — هَلْ، في، لَمْ — are the text's own, from page 14. لَمْ also happens to be the exact particle in the Qur'an example below, which is QURRA's own supplementary choice of verse (112:3)."
    },

    intro: {
      titleAr: "الحرف",
      titleEn: "The Particle (Harf)",
      statement: "اسم and فعل each have a real, positive definition. حرف is different — it's defined by what it ISN'T."
    },

    objective: [
      "explain how الحرف is defined — by exclusion, not by a positive description",
      "recognize the text's own حرف examples: هَلْ، في، لَمْ",
      "identify a حرف inside a Qur'anic expression"
    ],

    concept: {
      termAr: "الحرف",
      kind: "book-cited",
      definitionAr: "الحَرْفُ: مَا لَا يَصْلُحُ مَعَهُ دَلِيلُ الِاسْمِ وَلَا دَلِيلُ الْفِعْلِ",
      definitionEn: "A particle is whatever admits neither the sign of a noun nor the sign of a verb.",
      lead: "Unlike the last two lessons, there's nothing new to spot here — only what's missing. Tap each half below."
    },

    definitionBreakdown: [
      {
        termAr: "ما لا يصلح معه دليل الاسم",
        termEn: "mā lā yaṣluḥu maʿahu dalīl al-ism",
        glossEn: "admits no sign of a noun",
        explanation: "It doesn't just mean something on its own, the way زَيْدٌ does — so none of the noun's distinguishing signs apply to it."
      },
      {
        termAr: "ولا دليل الفعل",
        termEn: "wa lā dalīl al-fiʿl",
        glossEn: "and no sign of a verb",
        explanation: "It also carries no time and requests nothing, the way قَامَ does — so none of the verb's signs apply either. Unlike اسم and فعل, which you can confirm by their own signs, حرف is only ever what's left once both are ruled out."
      }
    ],

    example: {
      kind: "book-example",
      kindLabel: "Examples from the reference text (p. 14)",
      arabic: "هَلْ",
      transliteration: "Hal",
      translation: "Is…? / Does…? (a question particle)",
      explanation: "Walk through the exclusion: is هَلْ an اسم? No — unlike زَيْدٌ, it doesn't mean something fixed on its own, with no time attached. Is it a فعل? No — unlike قَامَ, it carries no time and asks for nothing. Since it fails both, it belongs to the third category: حرف. (Lessons 7–8 will give you the full, formal signs for each — for now, the logic of exclusion is the point.)",
      contrast: {
        arabic: "فِي",
        translation: "“in” (a preposition)",
        explanation: "Also from the text's own list — فِي doesn't mean anything complete by itself either. “فِي” what? It needs a noun after it (فِي الْبَيْتِ — “in the house”) to complete its meaning, which is exactly why it fails the noun and verb signs and falls into حرف too."
      }
    },

    quranExample: {
      surahAr: "الإخلاص",
      surahEn: "Al-Ikhlas",
      ayahRef: "112:3",
      arabic: "لَمْ يَلِدْ وَلَمْ يُولَدْ",
      translation: "He neither begets nor is born.",
      notice: "لَمْ appears twice in this ayah — and it's the exact particle the reference text uses as its own example of حرف (page 14). Notice how it never means anything by itself; it only works attached to the verb after it.",
      wordNotes: {
        "112-3-w1": { conceptLabel: "حرف", explanation: "لَمْ — this is the text's own example of a حرف (page 14). By itself it means nothing; it only works attached to a verb, making it negative." },
        "112-3-w2": { conceptLabel: "فعل", explanation: "يَلِدْ (“he begets”) — carries a time/action. A فعل, made negative by the لَمْ before it." },
        "112-3-w3": { conceptLabel: "حرف + حرف", explanation: "وَلَمْ — و (“and”) joins two حروف together here: the conjunction و and the same لَمْ you just saw, written as one word." },
        "112-3-w4": { conceptLabel: "فعل", explanation: "يُولَدْ (“he is born”) — also a فعل, negated by the لَمْ attached before it." }
      }
    },

    noticeInteraction: {
      type: "word-tap",
      ayahRef: "112:3",
      instanceId: "1.6-notice",
      promptContext: "Al-Ikhlas 112:3",
      question: "Tap the word that's a pure حرف — the same one the reference text uses as its own example.",
      correctWordId: "112-3-w1",
      correctFeedback: "Right — لَمْ is the text's own حرف example. It means nothing alone; it only works attached to the فعل after it, making it negative. (وَلَمْ later in the ayah is the same حرف again, just joined to و — “and.”)",
      incorrectFeedback: "Not quite — that word either carries a time (فعل) or is joined with another particle. Look for the standalone لَمْ.",
      wordNotes: {
        "112-3-w1": { conceptLabel: "حرف", explanation: "لَمْ — means nothing on its own. The text's own example (p. 14)." },
        "112-3-w2": { conceptLabel: "فعل", explanation: "يَلِدْ — carries a time/action." },
        "112-3-w3": { conceptLabel: "حرف + حرف", explanation: "وَلَمْ — the same لَمْ, joined to the حرف و." },
        "112-3-w4": { conceptLabel: "فعل", explanation: "يُولَدْ — carries a time/action." }
      }
    },

    practiceQuestions: [
      {
        id: "p1",
        type: "true-false",
        prompt: "حرف has a positive definition — a description of what it IS, like اسم and فعل do.",
        correct: false,
        explanation: "No — حرف is defined only by exclusion: ما لا يصلح معه دليل الاسم ولا دليل الفعل. It's whatever admits neither sign."
      },
      {
        id: "p2",
        type: "multiple-choice",
        prompt: "Which of these is the reference text's own example of a حرف?",
        options: [
          { id: "a", labelAr: "هَلْ" },
          { id: "b", labelAr: "زَيْدٌ" },
          { id: "c", labelAr: "قَامَ" }
        ],
        correctOptionId: "a",
        explanation: "Right — هَلْ، في، and لَمْ are the text's own three examples (p. 14)."
      },
      {
        id: "p3",
        type: "true-false",
        prompt: "فِي (“in”) means something complete all by itself.",
        correct: false,
        explanation: "No — it needs a noun after it (فِي الْبَيْتِ — “in the house”) to complete its meaning. That incompleteness is exactly what makes it حرف."
      },
      {
        id: "p4",
        type: "multiple-choice",
        prompt: "In لَمْ يَلِدْ, what does لَمْ do?",
        options: [
          { id: "a", labelEn: "Attaches to the فعل and negates it" },
          { id: "b", labelEn: "Names something" },
          { id: "c", labelEn: "Carries its own time" },
          { id: "d", labelEn: "Nothing — it's decorative" }
        ],
        correctOptionId: "a",
        explanation: "Right — it attaches to يَلِدْ and negates it. On its own, لَمْ means nothing."
      },
      {
        id: "p5",
        type: "multiple-choice",
        prompt: "هَلْ is not an اسم, and it is not a فعل. What follows?",
        options: [
          { id: "a", labelEn: "It must be a حرف — those are the only three categories" },
          { id: "b", labelEn: "It isn't a real كلمة at all" },
          { id: "c", labelEn: "It's a mix of اسم and فعل" }
        ],
        correctOptionId: "a",
        explanation: "Right — every كلمة is اسم, فعل, or حرف (Lesson 3). Ruling out the first two is itself enough to place a word in the third category."
      }
    ],

    quranChallenge: {
      surahAr: "الإخلاص",
      surahEn: "Al-Ikhlas",
      ayahRef: "112:2",
      arabic: "اللَّهُ الصَّمَدُ",
      translation: "Allah, the Eternal Refuge.",
      question: "Is either word in this ayah a حرف؟",
      options: [
        { id: "yes", labelEn: "Yes" },
        { id: "no", labelEn: "No" }
      ],
      correctOptionId: "no",
      explanation: "No — both اللَّهُ and الصَّمَدُ mean something on their own, with no time attached. Both are أسماء, not حروف."
    },

    summary: [
      "الحرف: defined by exclusion — whatever admits the sign of neither اسم nor فعل.",
      "The text's own examples: هَلْ، في، and لَمْ.",
      "لَمْ never stands alone — it attaches to a فعل and negates it, as in لَمْ يَلِدْ.",
      "حرف is مبني — its form never changes — and a few particles carry grammatical effects of their own, which you'll meet much later, in Part 10.",
      "All three word types are now yours: اسم (a time-free meaning), فعل (a time or request), and حرف (neither)."
    ],

    completion: {
      titleAr: "الحرف",
      statement: "All three word types are now yours."
    }
  },

  "1.7": {
    id: "1.7",
    steps: ["intro", "concept", "example", "quran", "notice", "practice", "challenge", "summary", "completion"],

    sourceNote: {
      status: "book-cited",
      label: "Sourced from the reference text — page 12",
      detail: "All five signs (الإسناد إليه، الخفض، التنوين، دخول الألف واللام، حروف الخفض) are the text's own list, page 12. This lesson teaches ال and تنوين in full — the two that don't require i'rab or sentence-role knowledge — and names the other three so nothing is hidden, deferring them to a later Part where case (الخفض) and sentence roles (الإسناد) are properly covered. الكَلِمَةُ is used as a ال-example because it's a genuine word from the text's own page 11 heading."
    },

    intro: {
      titleAr: "علامات الاسم",
      titleEn: "Signs of a Noun",
      statement: "You already know what an اسم means. Now learn the actual signs the reference text gives for spotting one."
    },

    objective: [
      "name the reference text's five signs of an اسم",
      "apply the two visual signs — ال and تنوين — to real words",
      "recognize the ال sign inside a Qur'anic expression"
    ],

    concept: {
      termAr: "علامات الاسم",
      kind: "book-cited",
      definitionAr: "الاسمُ يُعرَفُ بـ: الإسنادِ إليه، وبالخَفْض، وبالتنوين، وبدخولِ الألفِ واللام، وحروفِ الخَفْض",
      definitionEn: "A noun is recognized by: being predicated of, accepting the genitive case, accepting nunation, taking the definite article (al-), or following a preposition.",
      lead: "The reference text lists five signs. Two of them — ال and تنوين — you can spot immediately just by looking at a word. The other three depend on grammar you haven't learned yet, so this lesson focuses on the two visual ones and simply names the rest."
    },

    definitionBreakdown: [
      {
        termAr: "الألف واللام (ال)",
        termEn: "al-",
        glossEn: "the definite article — taught now",
        explanation: "If ال can attach to the front of a word, it's an اسم. You'll practice this sign in this lesson."
      },
      {
        termAr: "التنوين",
        termEn: "tanwin",
        glossEn: "nunation (ـٌ ـً ـٍ) — taught now",
        explanation: "A final ن sound, written but not spelled with the letter ن, that only ever attaches to a noun — never a verb or particle. Example from the text: زَيْدٌ."
      },
      {
        termAr: "الإسناد إليه",
        termEn: "isnād ilayh",
        glossEn: "being predicated of — later",
        explanation: "Having something said ABOUT it, like زيد in قَامَ زَيْدٌ. This sign needs sentence roles you haven't learned yet — you'll meet it properly in a later Part."
      },
      {
        termAr: "الخفض",
        termEn: "khafḍ",
        glossEn: "the genitive case — later",
        explanation: "A case-ending sign — this depends on إعراب, which is a later Part of this course, not Part 1."
      },
      {
        termAr: "حروف الخفض",
        termEn: "ḥurūf al-khafḍ",
        glossEn: "following a preposition — later",
        explanation: "If a preposition (like مِنْ or إلى) can come right before it, it's a noun. A useful, visual sign — but it pairs closely with الخفض above, so it's deferred to the same later lesson."
      }
    ],

    example: {
      kind: "book-example",
      kindLabel: "Examples from the reference text (pp. 11–12)",
      arabic: "زَيْدٌ",
      transliteration: "Zaydun",
      translation: "Zayd — note the ٌ ending",
      explanation: "That small ٌ mark at the end is تنوين — and تنوين only ever attaches to a noun. Its presence alone tells you زَيْدٌ is an اسم.",
      contrast: {
        arabic: "الكَلِمَةُ",
        translation: "“the word” (the exact word from the text's own heading, p. 11)",
        explanation: "ال is attached directly to the front — only a noun can take ال, so that alone identifies it too. (Notice it has no تنوين here — a definite noun with ال never takes تنوين, a small extra detail beyond this lesson.)"
      }
    },

    quranExample: {
      surahAr: "الإخلاص",
      surahEn: "Al-Ikhlas",
      ayahRef: "112:2",
      arabic: "اللَّهُ الصَّمَدُ",
      translation: "Allah, the Eternal Refuge.",
      notice: "Look at how both words in this ayah begin: ال. That's not decoration — it's literally one of the reference text's own signs of اسم.",
      wordNotes: {
        "112-2-w1": { conceptLabel: "اسم — بال", explanation: "اللَّهُ starts with ال — one of the two visual noun-signs you just learned." },
        "112-2-w2": { conceptLabel: "اسم — بال", explanation: "الصَّمَدُ also starts with ال — same sign." }
      }
    },

    noticeInteraction: {
      type: "word-tap",
      ayahRef: "112:2",
      instanceId: "1.7-notice",
      promptContext: "Al-Ikhlas 112:2",
      question: "Tap each word — both show the same sign. Which one do they share?",
      correctFeedback: "Right — both start with ال, one of the reference text's own signs of an اسم (p. 12).",
      wordNotes: {
        "112-2-w1": { conceptLabel: "اسم — بال", explanation: "ال is attached to the front. That alone confirms اسم." },
        "112-2-w2": { conceptLabel: "اسم — بال", explanation: "Same sign here too — ال attached to the front." }
      }
    },

    practiceQuestions: [
      {
        id: "p1",
        type: "true-false",
        prompt: "تنوين can attach to a فعل.",
        correct: false,
        explanation: "No — تنوين only ever attaches to an اسم. Its presence alone tells you a word is a noun."
      },
      {
        id: "p2",
        type: "multiple-choice",
        prompt: "Which sign does زَيْدٌ show?",
        options: [
          { id: "a", labelEn: "تنوين" },
          { id: "b", labelEn: "ال" },
          { id: "c", labelEn: "Both" }
        ],
        correctOptionId: "a",
        explanation: "Right — زَيْدٌ ends in تنوين but doesn't start with ال."
      },
      {
        id: "p3",
        type: "true-false",
        prompt: "ال can attach to the front of a فعل or a حرف.",
        correct: false,
        explanation: "No — ال only ever attaches to an اسم. That's why it's one of the text's five signs."
      },
      {
        id: "p4",
        type: "multiple-choice",
        prompt: "The reference text lists five total signs for اسم. How many does this lesson teach in depth?",
        options: [
          { id: "a", labelEn: "Two — ال and تنوين" },
          { id: "b", labelEn: "All five" },
          { id: "c", labelEn: "Just one" },
          { id: "d", labelEn: "None yet" }
        ],
        correctOptionId: "a",
        explanation: "Right — الإسناد، الخفض، and حروف الخفض all depend on grammar (i'rab, sentence roles) you haven't learned yet. They're named here, taught properly later."
      },
      {
        id: "p5",
        type: "multiple-choice",
        prompt: "الكَلِمَةُ shows which sign?",
        options: [
          { id: "a", labelEn: "ال" },
          { id: "b", labelEn: "تنوين" }
        ],
        correctOptionId: "a",
        explanation: "Right — ال is attached to its front. (It has no تنوين because it's already definite.)"
      }
    ],

    quranChallenge: {
      surahAr: "الفاتحة",
      surahEn: "Al-Fatihah",
      ayahRef: "1:2",
      arabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
      translation: "All praise is due to Allah, Lord of the worlds.",
      question: "الْحَمْدُ begins with ال. Does that make it an اسم؟",
      options: [
        { id: "yes", labelEn: "Yes" },
        { id: "no", labelEn: "No" }
      ],
      correctOptionId: "yes",
      explanation: "Yes — ال only ever attaches to a noun. That's exactly the sign at work here."
    },

    summary: [
      "The reference text lists five signs of اسم: الإسناد إليه، الخفض، التنوين، ال، and حروف الخفض.",
      "This lesson taught the two you can spot on sight: تنوين (زَيْدٌ) and ال (الكَلِمَةُ).",
      "The other three signs depend on grammar (i'rab, sentence roles) you'll learn in later Parts.",
      "اللَّهُ and الصَّمَدُ both show the ال sign — easy to spot once you know to look for it."
    ],

    completion: {
      titleAr: "علامات الاسم",
      statement: "You can now check a word against real signs for اسم — not just guess."
    }
  },

  "1.8": {
    id: "1.8",
    steps: ["intro", "concept", "example", "quran", "notice", "practice", "challenge", "summary", "completion"],

    sourceNote: {
      status: "book-cited",
      label: "Sourced from the reference text — pages 12–13",
      detail: "All four signs (قَدْ، السين، سوف، تاء التأنيث) and their examples (قَدْ قَامَ، قَامَتْ) are the text's own, page 12. سَيَصْلَىٰ (Al-Masad 3) and سَوْفَ نُصْلِيهِمْ (An-Nisa 4:56) are the text's own Qur'anic citations for السين and سوف respectively — footnote 7, continuing from page 12 onto page 13 — not QURRA's selection. Both citations happen to be verses about the Fire; that's the text's own choice, illustrating a purely grammatical point."
    },

    intro: {
      titleAr: "علامات الفعل",
      titleEn: "Signs of a Verb",
      statement: "One more set of signs, and Part 1 is complete: the four that confirm a فعل."
    },

    objective: [
      "name the reference text's four signs of a فعل: قَدْ، السين، سوف، تاء التأنيث",
      "apply the السين/سوف signs to two of the text's own Qur'anic citations",
      "recognize that any single one of the four signs is enough to confirm a فعل"
    ],

    concept: {
      termAr: "علامات الفعل",
      kind: "book-cited",
      definitionAr: "الفعلُ يُعرَفُ بـ: (قَدْ)، و(السِّينِ)، و(سَوْفَ)، وتاءِ التأنيثِ",
      definitionEn: "A verb is recognized by: قَدْ, السين, سوف, or تاء التأنيث (the feminine ت).",
      lead: "Four signs, and you only ever need ONE of them to confirm a فعل. Tap each below."
    },

    definitionBreakdown: [
      {
        termAr: "قَدْ",
        termEn: "qad",
        glossEn: "attaches to the front",
        explanation: "Example from the text: قَدْ قَامَ زَيْدٌ — “Zayd had (indeed) stood.”"
      },
      {
        termAr: "السين",
        termEn: "sa-",
        glossEn: "attaches to the front",
        explanation: "A single س attached to the front of a مضارع verb, pushing its meaning toward the near future. The text's own Qur'anic citation: سَيَصْلَىٰ — “he will burn” (Al-Masad 3)."
      },
      {
        termAr: "سوف",
        termEn: "sawfa",
        glossEn: "a separate word before it",
        explanation: "Placed before a مضارع verb, for the further future. The text's own Qur'anic citation: سَوْفَ نُصْلِيهِمْ — “We will burn them” (An-Nisa 4:56)."
      },
      {
        termAr: "تاء التأنيث",
        termEn: "tā' al-ta'nīth",
        glossEn: "attaches to the end",
        explanation: "A ـتْ ending attached to a ماضي verb when its doer is feminine. Example from the text: قَامَتْ — “she stood.”"
      }
    ],

    example: {
      kind: "book-example",
      kindLabel: "Example from the reference text (p. 12)",
      arabic: "قَدْ قَامَ",
      transliteration: "Qad qāma",
      translation: "[he] had indeed stood",
      explanation: "قَدْ attaches directly before قَامَ. Only a فعل accepts قَدْ in front of it — that alone identifies it.",
      contrast: {
        arabic: "قَامَتْ",
        translation: "“she stood”",
        explanation: "Here the sign is at the END instead: ـتْ, تاء التأنيث, attached because the one who stood is feminine. Different position, same idea — a marker that only ever attaches to a فعل."
      }
    },

    quranExample: {
      surahAr: "المسد",
      surahEn: "Al-Masad",
      ayahRef: "111:3",
      arabic: "سَيَصْلَىٰ نَارًا ذَاتَ لَهَبٍ",
      translation: "He will [enter to] burn in a Fire of blazing flame.",
      notice: "This is the reference text's own Qur'anic citation for السين (pp. 12–13, footnote). Look at the very first word: سَيَصْلَىٰ. The س attached to its front is exactly the sign you just learned — and it's what identifies this as a فعل, pushing its meaning toward the future.",
      wordNotes: {
        "111-3-w1": { conceptLabel: "فعل — بالسين", explanation: "سَيَصْلَىٰ — the س at the front is the sign. The text's own citation for this exact sign." },
        "111-3-w2": { conceptLabel: "اسم", explanation: "نَارًا — a noun (and notice its تنوين ending — the sign from Lesson 7!)." },
        "111-3-w3": { conceptLabel: "— جزء من الوصف", explanation: "ذَاتَ — part of the phrase “ذَاتَ لَهَبٍ” (“of blazing flame”), describing the fire." },
        "111-3-w4": { conceptLabel: "اسم", explanation: "لَهَبٍ — a noun, “flame.”" }
      }
    },

    noticeInteraction: {
      type: "word-tap",
      ayahRef: "111:3",
      instanceId: "1.8-notice",
      promptContext: "Al-Masad 111:3",
      question: "Tap the one word carrying the سين sign of a فعل.",
      correctWordId: "111-3-w1",
      correctFeedback: "Right — سَيَصْلَىٰ. The س prefix is the reference text's own sign of a فعل, right here in its own Qur'anic citation.",
      incorrectFeedback: "Not quite — that word doesn't carry the س prefix. Look for the one word that begins with سَ.",
      wordNotes: {
        "111-3-w1": { conceptLabel: "فعل — بالسين", explanation: "سَيَصْلَىٰ — carries the سين sign at its front." },
        "111-3-w2": { conceptLabel: "اسم", explanation: "نَارًا — a noun, with تنوين." },
        "111-3-w3": { conceptLabel: "— جزء من الوصف", explanation: "ذَاتَ — part of the descriptive phrase." },
        "111-3-w4": { conceptLabel: "اسم", explanation: "لَهَبٍ — a noun, “flame.”" }
      }
    },

    practiceQuestions: [
      {
        id: "p1",
        type: "true-false",
        prompt: "قَدْ can attach before a فعل.",
        correct: true,
        explanation: "Right — قَدْ قَامَ is the text's own example."
      },
      {
        id: "p2",
        type: "multiple-choice",
        prompt: "سَيَصْلَىٰ — what does the س prefix tell you?",
        options: [
          { id: "a", labelEn: "It's a فعل, pushed toward the future" },
          { id: "b", labelEn: "It's an اسم" },
          { id: "c", labelEn: "It's a حرف" },
          { id: "d", labelEn: "Nothing — it's decorative" }
        ],
        correctOptionId: "a",
        explanation: "Right — السين is one of the four signs of a فعل, and it pushes the meaning toward the future."
      },
      {
        id: "p3",
        type: "true-false",
        prompt: "تاء التأنيث (ـتْ) attaches to the FRONT of a verb, like قَدْ does.",
        correct: false,
        explanation: "No — تاء التأنيث attaches to the END: قَامَتْ. قَدْ and السين attach to the front."
      },
      {
        id: "p4",
        type: "multiple-choice",
        prompt: "سوف نُصْلِيهِمْ — which sign identifies نُصْلِيهِمْ as a فعل?",
        options: [
          { id: "a", labelEn: "سوف before it" },
          { id: "b", labelEn: "تنوين after it" },
          { id: "c", labelEn: "ال before it" }
        ],
        correctOptionId: "a",
        explanation: "Right — سوف is a word placed directly before the مضارع verb it marks."
      },
      {
        id: "p5",
        type: "true-false",
        prompt: "A verb needs ALL four signs at once to be confirmed as a فعل.",
        correct: false,
        explanation: "No — any ONE of قَدْ، السين، سوف، or تاء التأنيث is enough on its own to confirm a word is a فعل."
      }
    ],

    quranChallenge: {
      surahAr: "النساء",
      surahEn: "An-Nisa",
      ayahRef: "4:56",
      arabic: "سَوْفَ نُصْلِيهِمْ نَارًا",
      translation: "We will [in time] burn them in a Fire.",
      question: "سوف comes right before نُصْلِيهِمْ. Is نُصْلِيهِمْ a فعل؟",
      options: [
        { id: "yes", labelEn: "Yes" },
        { id: "no", labelEn: "No" }
      ],
      correctOptionId: "yes",
      explanation: "Yes — سوف is the text's own second sign of a فعل (same footnote as السين), and this is the text's own citation for it."
    },

    summary: [
      "الفعل has four possible signs: قَدْ، السين، سوف، and تاء التأنيث — any ONE confirms it.",
      "قَدْ and السين attach to the FRONT; تاء التأنيث attaches to the END; سوف is a separate word before it.",
      "The reference text cites its own Qur'anic examples for السين (سَيَصْلَىٰ, Al-Masad 3) and سوف (سَوْفَ نُصْلِيهِمْ, An-Nisa 4:56).",
      "Between Lessons 4–8, you now have real signs — not guesses — for all three word types."
    ],

    completion: {
      titleAr: "علامات الفعل",
      statement: "You've completed Part 1 — Foundations."
    }
  },

  "2.1": {
    id: "2.1",
    steps: ["intro", "concept", "example", "practice", "summary", "completion"],

    sourceNote: {
      status: "book-cited",
      label: "Sourced from your reference book — pages 16–17",
      detail: "“الاسم ضربان... معرب... ومبني” (p.16) and “الفعل ضربان: مبني... ومعرب” (p.17) are the book's own framing, word for word. مَنْ as a مبني example is the book's own (p.16, footnote 3)."
    },

    intro: {
      titleAr: "معرب أم مبني؟",
      titleEn: "Mu'rab or Mabni?",
      statement: "You've met all three word types. Now meet the question that applies to every single one of them: does this word's ending ever change?"
    },

    objective: [
      "explain the basic difference between معرب and مبني",
      "recognize that both nouns and verbs can be either kind",
      "preview the two lessons ahead: الإعراب (Lesson 2) and البناء (Lesson 3)"
    ],

    concept: {
      termAr: "معرب أم مبني؟",
      kind: "book-cited",
      definitionAr: "الاسمُ ضِربانِ: مُعرَبٌ ومَبنِيٌّ. والفِعلُ ضِربانِ: مَبنِيٌّ ومُعرَبٌ.",
      definitionEn: "Both nouns and verbs come in two kinds: one whose ending changes (mu'rab), and one whose ending stays fixed (mabni).",
      lead: "You've met all three word types — اسم, فعل, حرف. Now a new question, cutting across all three: does this word's ENDING ever change, or does it always stay the same?"
    },

    definitionBreakdown: [
      {
        termAr: "معرب",
        termEn: "Mu'rab",
        glossEn: "changeable ending",
        explanation: "Its ending shifts depending on its role in the sentence. Most nouns work this way."
      },
      {
        termAr: "مبني",
        termEn: "Mabni",
        glossEn: "fixed ending",
        explanation: "Its ending stays exactly the same no matter its role. Pronouns, question words, and — as you'll see later — every single حرف work this way."
      }
    ],

    conceptTree: {
      root: { ar: "الكلمة", en: "kalimah" },
      branches: [
        { ar: "معرب", en: "mu'rab — ending changes", note: "You'll meet this in Lesson 2." },
        { ar: "مبني", en: "mabni — ending fixed", note: "You'll meet this in Lesson 3." }
      ]
    },

    example: {
      kind: "book-example",
      kindLabel: "A preview from your reference book (pp. 16–17)",
      arabic: "زَيْدٌ",
      transliteration: "Zaydun",
      translation: "Zayd (a name)",
      explanation: "Its ending changes depending on its role: زَيْدٌ (a doer), زَيْدًا (an object), زَيْدٍ (after “of/from”). That shifting ending is what makes it مُعرب — you'll see exactly how in the next lesson.",
      contrast: {
        arabic: "مَنْ",
        translation: "“who / whoever”",
        explanation: "However it's used in a sentence, مَنْ never changes its form. That fixed shape is what makes it مبني — your book's own example (p. 16)."
      }
    },

    practiceQuestions: [
      {
        id: "p1",
        type: "true-false",
        prompt: "Every Arabic word is either معرب or مبني.",
        correct: true,
        explanation: "Right — your book describes both الاسم and الفعل this way: كل منهما ضربان، معرب ومبني."
      },
      {
        id: "p2",
        type: "multiple-choice",
        prompt: "زَيْدٌ's ending changes depending on its role (زيدٌ / زيدًا / زيدٍ). What does that make it?",
        options: [
          { id: "a", labelAr: "معرب" },
          { id: "b", labelAr: "مبني" }
        ],
        correctOptionId: "a",
        explanation: "Right — a changing ending is exactly what معرب means."
      },
      {
        id: "p3",
        type: "multiple-choice",
        prompt: "مَنْ never changes, whatever its role. What does that make it?",
        options: [
          { id: "a", labelAr: "مبني" },
          { id: "b", labelAr: "معرب" }
        ],
        correctOptionId: "a",
        explanation: "Right — a fixed, unchanging ending is exactly what مبني means."
      },
      {
        id: "p4",
        type: "true-false",
        prompt: "Only nouns can be مبني — every فعل is معرب.",
        correct: false,
        explanation: "Not quite — your book says الفعل ضربان أيضًا: مبني (the original/default) ومعرب (the exception). You'll see exactly which verb type is معرب in Lesson 7."
      }
    ],

    summary: [
      "Every كلمة — noun or verb — is one of two kinds: معرب (its ending changes) or مبني (its ending stays fixed).",
      "زَيْدٌ is معرب — its ending shifts with its role. مَنْ is مبني — it never changes, your book's own example.",
      "الاسم ضربان: معرب ومبني. والفعل ضربان أيضًا: مبني ومعرب — notice the order is reversed, a hint about which is the “default” for each.",
      "Next: what الإعراب itself actually means, and how to recognize a معرب word."
    ],

    completion: {
      titleAr: "معرب أم مبني؟",
      statement: "You know the question now. Time to learn the answer."
    }
  },

  "2.2": {
    id: "2.2",
    steps: ["intro", "concept", "example", "quran", "notice", "practice", "challenge", "summary", "completion"],

    sourceNote: {
      status: "book-cited",
      label: "Sourced from your reference book — pages 15–16",
      detail: "The definition of الإعراب and the لفظًا/تقديرًا distinction are the book's own, page 15 (and its footnotes 3–4). زَيْدٌ، مُوسَى، and الْفَتَى are the book's own examples, page 16."
    },

    intro: {
      titleAr: "الإعراب",
      titleEn: "I'rab and the Mu'rab Word",
      statement: "Time for the real definition: what does it actually mean for a word's ending to “change”?"
    },

    objective: [
      "explain الإعراب: what changes, and why",
      "distinguish تغيير لفظًا from تغيير تقديرًا using the book's own examples",
      "recognize a معرب word doesn't need تنوين to qualify"
    ],

    concept: {
      termAr: "الإعراب",
      kind: "book-cited",
      definitionAr: "الإعرابُ: تغييرُ أواخرِ الكَلِمِ؛ لاختلافِ العواملِ الداخلةِ عليها لفظًا أو تقديرًا.",
      definitionEn: "I'rab is the changing of the ends of words, due to the different grammatical factors (ʿawāmil) acting on them — either audibly/visibly, or only in principle.",
      lead: "Two new ideas packed into one line: WHAT changes (أواخر الكلم), and HOW (لفظًا vs. تقديرًا). Tap each below."
    },

    definitionBreakdown: [
      {
        termAr: "تغيير أواخر الكلم",
        termEn: "taghyīr awākhir al-kalim",
        glossEn: "the ending changes",
        explanation: "Not the whole word — just its very end. The rest of the word stays the same; only the last letter's vowel (or the presence of تنوين) shifts."
      },
      {
        termAr: "لفظًا",
        termEn: "lafẓan",
        glossEn: "audibly / visibly",
        explanation: "The change is actually heard and written, like زَيْدٌ → زَيْدًا → زَيْدٍ."
      },
      {
        termAr: "تقديرًا",
        termEn: "taqdīran",
        glossEn: "only in principle",
        explanation: "The change is understood to happen, but isn't pronounced or written — because the word's own shape won't allow it. Book examples: مُوسَى and الْفَتَى keep the exact same spelling in every role; the change is “there” grammatically, just invisible."
      }
    ],

    example: {
      kind: "book-example",
      kindLabel: "Example from your reference book (p. 16)",
      arabic: "زَيْدٌ",
      transliteration: "Zaydun",
      translation: "Zayd",
      explanation: "A مُعرب word: تغيّر آخره لفظًا — you can hear and see the ending change: زَيْدٌ (as a doer), زَيْدًا (as an object), زَيْدٍ (after a preposition).",
      contrast: {
        arabic: "مُوسَى",
        translation: "“Musa”",
        explanation: "Also مُعرب — but تقديرًا. Its spelling never changes (مُوسَى stays مُوسَى in every role), yet grammatically its case IS changing underneath; you just can't see or hear it, because of how the word ends."
      }
    },

    quranExample: {
      surahAr: "الإخلاص",
      surahEn: "Al-Ikhlas",
      ayahRef: "112:2",
      arabic: "اللَّهُ الصَّمَدُ",
      translation: "Allah, the Eternal Refuge.",
      notice: "Both words here are مُعرب — their endings CAN change depending on role. اللَّهُ ends in ـُ here (no تنوين, since it's a definite name), and الصَّمَدُ carries a ـُ too. Neither ending is fixed the way a مبني word's would be.",
      wordNotes: {
        "112-2-w1": { conceptLabel: "معرب", explanation: "اللَّهُ — no تنوين (it's definite), but still معرب: its ending vowel can change with its grammatical role." },
        "112-2-w2": { conceptLabel: "معرب", explanation: "الصَّمَدُ — also معرب, and here it DOES carry تنوين too." }
      }
    },

    noticeInteraction: {
      type: "word-tap",
      ayahRef: "112:2",
      instanceId: "2.2-notice",
      promptContext: "Al-Ikhlas 112:2",
      question: "Tap each word — both share the property you just learned. Which one?",
      correctFeedback: "Right — both are معرب: their endings can change depending on their grammatical role, even though only one of them shows تنوين.",
      wordNotes: {
        "112-2-w1": { conceptLabel: "معرب", explanation: "No تنوين here, but the ending vowel can still change with role." },
        "112-2-w2": { conceptLabel: "معرب", explanation: "Carries تنوين too — also معرب." }
      }
    },

    practiceQuestions: [
      {
        id: "p1",
        type: "true-false",
        prompt: "الإعراب only ever changes the very END of a word — never the rest of it.",
        correct: true,
        explanation: "Right — تغيير أواخر الكلم: only the ending changes."
      },
      {
        id: "p2",
        type: "multiple-choice",
        prompt: "زَيْدٌ → زَيْدًا → زَيْدٍ. Can you hear/see the ending change each time?",
        options: [
          { id: "a", labelEn: "Yes — this is تغيير لفظًا" },
          { id: "b", labelEn: "No — this is تغيير تقديرًا" }
        ],
        correctOptionId: "a",
        explanation: "Right — you can hear and see each ending. That's لفظًا."
      },
      {
        id: "p3",
        type: "multiple-choice",
        prompt: "مُوسَى keeps the exact same spelling in every grammatical role. What kind of change is that?",
        options: [
          { id: "a", labelEn: "تقديرًا — understood, not seen" },
          { id: "b", labelEn: "لفظًا — seen and heard" },
          { id: "c", labelEn: "No change at all — it's مبني" }
        ],
        correctOptionId: "a",
        explanation: "Right — تقديرًا: the case change is real, just invisible in مُوسَى's spelling."
      },
      {
        id: "p4",
        type: "true-false",
        prompt: "اللَّهُ has no تنوين, so it must be مبني.",
        correct: false,
        explanation: "No — تنوين and معرب are related but different. اللَّهُ is معرب (its case CAN change) even without تنوين, because it's a definite name."
      },
      {
        id: "p5",
        type: "multiple-choice",
        prompt: "What do العوامل (the “factors”) mentioned in the definition of الإعراب do?",
        options: [
          { id: "a", labelEn: "They're what causes the ending to change" },
          { id: "b", labelEn: "They're a type of تنوين" },
          { id: "c", labelEn: "They only apply to حروف" },
          { id: "d", labelEn: "Nothing — they're decorative" }
        ],
        correctOptionId: "a",
        explanation: "Right — العوامل are what act on a معرب word to determine its ending."
      }
    ],

    quranChallenge: {
      surahAr: "الفاتحة",
      surahEn: "Al-Fatihah",
      ayahRef: "1:2",
      arabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
      translation: "All praise is due to Allah, Lord of the worlds.",
      question: "الْحَمْدُ ends in ـُ here. Could that ending change if its role in the sentence changed? Is it معرب?",
      options: [
        { id: "yes", labelEn: "Yes" },
        { id: "no", labelEn: "No" }
      ],
      correctOptionId: "yes",
      explanation: "Yes — الْحَمْدُ is a regular noun, and like almost every regular noun, it's معرب: its ending can change with its role."
    },

    summary: [
      "الإعراب: the changing of a word's ENDING, due to the grammatical factor acting on it.",
      "Two kinds of change: لفظًا (seen/heard, like زَيْدٌ) and تقديرًا (understood, not seen, like مُوسَى).",
      "معرب doesn't require تنوين — اللَّهُ is معرب despite having none, because it's definite.",
      "Most nouns — and, as you'll see, one type of verb — are معرب."
    ],

    completion: {
      titleAr: "الإعراب",
      statement: "You can now explain what الإعراب actually means — not just define the word."
    }
  },

  "2.3": {
    id: "2.3",
    steps: ["intro", "concept", "example", "quran", "notice", "practice", "challenge", "summary", "completion"],

    sourceNote: {
      status: "book-cited",
      label: "Sourced from your reference book — pages 15–17",
      detail: "البناء's lexical definition (الثبوت واللزوم) is the book's own, page 15, footnote 5. The four marks (ضم/فتح/كسر/سكون) and the examples حَيْثُ، أَيْنَ، أَمْسِ، كَمْ, plus المضمرات as the first مبني category, are drawn directly from pages 16–17. One clause of page 15's full technical بناء definition wasn't confidently legible in the supplied image, so this lesson relies on the book's unambiguous lexical definition and worked examples rather than guessing at that clause."
    },

    intro: {
      titleAr: "البناء",
      titleEn: "Bina' and the Mabni Word",
      statement: "You just learned what makes a word معرب. Now its opposite: what makes a word مبني — permanently."
    },

    objective: [
      "explain البناء and how it differs from الإعراب",
      "name the four marks a مبني word can be fixed on",
      "recognize a مبني pronoun inside a Qur'anic expression"
    ],

    concept: {
      termAr: "البناء",
      kind: "book-cited",
      definitionAr: "الْبِنَاءُ لُغَةً: وَضْعُ شَيْءٍ عَلَى شَيْءٍ عَلَى جِهَةٍ يُرَادُ بِهَا الثُّبُوتُ وَاللُّزُومُ.",
      definitionEn: "Literally, binā' means placing one thing upon another in a way meant to convey fixedness and permanence.",
      lead: "Where الإعراب means the ending CHANGES, البناء means the opposite: the ending STAYS — fixed, whatever the word's role."
    },

    definitionBreakdown: [
      {
        termAr: "الثبوت واللزوم",
        termEn: "al-thubūt wal-luzūm",
        glossEn: "fixedness and permanence",
        explanation: "The literal sense of البناء (p. 15) — something set in place and staying there. Applied to a word: its ending is set and doesn't move."
      },
      {
        termAr: "حركات البناء الأربع",
        termEn: "the four fixed marks",
        glossEn: "ضمّ، فتح، كسر، سكون",
        explanation: "A مبني word settles permanently on one of four marks: ضمّ (كـ: كَمْ), فتح (كـ: أَيْنَ), كسر (كـ: أَمْسِ), or سكون — the most common, which the book calls الأصل في المبني, “the default.”"
      }
    ],

    example: {
      kind: "book-example",
      kindLabel: "Examples from your reference book (pp. 16–17)",
      arabic: "حَيْثُ",
      transliteration: "Ḥaythu",
      translation: "where (fixed on ـُ)",
      explanation: "حَيْثُ always ends the same way — ضمّ — whatever role it plays. That's بناء: one fixed mark, permanently.",
      contrast: {
        arabic: "أَيْنَ",
        translation: "“where?” (fixed on ـَ — a different mabni mark)",
        explanation: "A different question word, fixed on a different mark (فتح) — but just as permanently fixed. Two مبني words don't have to share the SAME mark; they just each have to be stuck on theirs."
      }
    },

    quranExample: {
      surahAr: "الإخلاص",
      surahEn: "Al-Ikhlas",
      ayahRef: "112:1",
      arabic: "قُلْ هُوَ اللَّهُ أَحَدٌ",
      translation: "Say, He is Allah, [who is] One.",
      notice: "هُوَ is a pronoun — the book's own first example of a مبني category (المضمرات, “the pronouns,” p. 16). Its form never changes, whatever role it plays in a sentence. Compare that to اللَّهُ and أَحَدٌ right beside it, both معرب.",
      wordNotes: {
        "112-1-w2": { conceptLabel: "مبني — ضمير", explanation: "هُوَ never changes form. A pronoun — the book's own first مبني category (p. 16)." }
      }
    },

    noticeInteraction: {
      type: "word-tap",
      ayahRef: "112:1",
      instanceId: "2.3-notice",
      promptContext: "Al-Ikhlas 112:1",
      question: "Tap the one word in this ayah that is مبني.",
      correctWordId: "112-1-w2",
      correctFeedback: "Right — هُوَ is مبني. It's a pronoun, and pronouns never change form, whatever role they play.",
      incorrectFeedback: "Not quite — that word's ending CAN change depending on its role (معرب). Look for the pronoun.",
      wordNotes: {
        "112-1-w1": { conceptLabel: "فعل", explanation: "قُلْ — a verb (you met this in Part 1)." },
        "112-1-w2": { conceptLabel: "مبني — ضمير", explanation: "هُوَ — a pronoun. Never changes form." },
        "112-1-w3": { conceptLabel: "معرب", explanation: "اللَّهُ — its ending can change with its role." },
        "112-1-w4": { conceptLabel: "معرب", explanation: "أَحَدٌ — also معرب, and carries تنوين too." }
      }
    },

    practiceQuestions: [
      {
        id: "p1",
        type: "true-false",
        prompt: "البناء means a word's ending changes depending on its role.",
        correct: false,
        explanation: "That's الإعراب. البناء is the opposite: the ending stays fixed."
      },
      {
        id: "p2",
        type: "multiple-choice",
        prompt: "حَيْثُ always ends the same way. What mark is it fixed on?",
        options: [
          { id: "a", labelAr: "ضمّ" },
          { id: "b", labelAr: "فتح" },
          { id: "c", labelAr: "كسر" }
        ],
        correctOptionId: "a",
        explanation: "Right — حَيْثُ is fixed on ضمّ."
      },
      {
        id: "p3",
        type: "multiple-choice",
        prompt: "Which of these is the book's own example of a مبني pronoun (ضمير)?",
        options: [
          { id: "a", labelAr: "هُوَ" },
          { id: "b", labelAr: "زَيْدٌ" },
          { id: "c", labelAr: "مُوسَى" }
        ],
        correctOptionId: "a",
        explanation: "Right — هُوَ is a pronoun, the book's first مبني category."
      },
      {
        id: "p4",
        type: "true-false",
        prompt: "Two مبني words must always be fixed on the exact same mark (e.g. both on فتح).",
        correct: false,
        explanation: "No — أَيْنَ is fixed on فتح, حَيْثُ is fixed on ضمّ. Each مبني word has ITS OWN fixed mark; they don't have to match."
      },
      {
        id: "p5",
        type: "multiple-choice",
        prompt: "According to your book, what is “the default” mark most مبني words settle on?",
        options: [
          { id: "a", labelEn: "سكون" },
          { id: "b", labelEn: "ضمّ" },
          { id: "c", labelEn: "كسر" }
        ],
        correctOptionId: "a",
        explanation: "Right — الأصل في المبني أن يُبنى على السكون: the default is سكون; ضمّ/فتح/كسر are the exceptions."
      }
    ],

    quranChallenge: {
      surahAr: "الكوثر",
      surahEn: "Al-Kawthar",
      ayahRef: "108:1",
      arabic: "إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ",
      translation: "Indeed, We have granted you al-Kawthar.",
      question: "إِنَّا contains a pronoun (نَا, “We”) attached to إنّ. Is that pronoun مبني?",
      options: [
        { id: "yes", labelEn: "Yes" },
        { id: "no", labelEn: "No" }
      ],
      correctOptionId: "yes",
      explanation: "Yes — every pronoun is مبني, attached or standing alone. Its form is fixed; it never changes with its grammatical role."
    },

    summary: [
      "البناء: an ending that STAYS fixed — one mark, permanently, whatever the word's role.",
      "A مبني word settles on one of four marks: ضمّ، فتح، كسر، or (most often) سكون — the book's own “default.”",
      "المضمرات (pronouns) are the book's first مبني category — هُوَ never changes, wherever it appears.",
      "حَيْثُ (ضمّ) and أَيْنَ (فتح) show that مبني words don't all share the same mark — each is just fixed on its own."
    ],

    completion: {
      titleAr: "البناء",
      statement: "You now know both halves of the picture: معرب and مبني."
    }
  },

  "2.4": {
    id: "2.4",
    steps: ["intro", "concept", "example", "quran", "notice", "practice", "challenge", "summary", "completion"],

    sourceNote: {
      status: "book-cited",
      label: "Sourced from your reference book — pages 15–20",
      detail: "This lesson is QURRA's own side-by-side comparison, built entirely from facts already cited in Lessons 2 and 3 — plus one new one: وأما الحروف فمبنية كلها (“as for particles, they are all مبني”), the book's own closing rule on page 20, right where its الإعراب والبناء chapter ends."
    },

    intro: {
      titleAr: "الفرق بين المعرب والمبني",
      titleEn: "Telling Mu'rab from Mabni",
      statement: "Time to put معرب and مبني side by side — and meet the one word type where the answer is always certain."
    },

    objective: [
      "compare معرب and مبني words directly and explain why the difference matters",
      "state with certainty that every حرف is مبني",
      "identify معرب and مبني words together inside one Qur'anic expression"
    ],

    concept: {
      termAr: "الفرق بين المعرب والمبني",
      kind: "qurra-comparison",
      definitionAr: "مُعرَب: تتغيّرُ أواخرُه. مَبنِيّ: تلزَمُ أواخرُه حالةً واحدةً.",
      definitionEn: "Mu'rab: its ending changes. Mabni: its ending stays fixed on one state.",
      lead: "You've met each one alone. Now put them side by side — and meet the one word type where the answer is always the same."
    },

    definitionBreakdown: [
      {
        termAr: "زَيْدٌ / زَيْدًا / زَيْدٍ",
        termEn: "Zaydun / Zaydan / Zaydin",
        glossEn: "معرب",
        explanation: "Same word, three different endings, depending on role. That CHANGE is exactly what معرب means."
      },
      {
        termAr: "هُوَ",
        termEn: "huwa",
        glossEn: "مبني",
        explanation: "Doer, object, after a preposition — however it's used, هُوَ never changes. That's مبني."
      },
      {
        termAr: "لماذا يهمّ الفرق؟",
        termEn: "Why it matters",
        glossEn: "the practical payoff",
        explanation: "Once you know a word is مبني, you never need to ask what its ending should be — it's always the same. For معرب words, the ending itself becomes a clue to the word's role in the sentence — which is exactly what the rest of this course teaches you to read."
      }
    ],

    conceptTree: {
      root: { ar: "الحرف", en: "every particle" },
      branches: [
        { ar: "مبني", en: "always — no exceptions", note: "وأما الحروف فمبنية كلها — your book's own rule, page 20." }
      ]
    },

    example: {
      kind: "book-example",
      kindLabel: "Comparing your book's own examples (pp. 16, 20)",
      arabic: "زَيْدٌ",
      transliteration: "Zaydun",
      translation: "معرب",
      explanation: "Its ending shifts: زَيْدٌ، زَيْدًا، زَيْدٍ — three different roles, three different endings.",
      contrast: {
        arabic: "هَلْ",
        translation: "مبني",
        explanation: "From Part 1 (Lesson 1.6) you know this is a حرف — and now you know something certain about EVERY حرف: وأما الحروف فمبنية كلها (p. 20). هَلْ isn't just an example of مبني — it COULDN'T be anything else."
      }
    },

    quranExample: {
      surahAr: "الإخلاص",
      surahEn: "Al-Ikhlas",
      ayahRef: "112:3",
      arabic: "لَمْ يَلِدْ وَلَمْ يُولَدْ",
      translation: "He neither begets nor is born.",
      notice: "All three of your Part 1 word types are here, and each behaves exactly as you'd now predict: لَمْ is a حرف — مبني, no exceptions. يَلِدْ and يُولَدْ are فعل مضارع — the one verb type that's usually معرب (you'll see exactly which states in Lessons 5–7).",
      wordNotes: {
        "112-3-w1": { conceptLabel: "حرف — مبني دائمًا", explanation: "لَمْ. Every حرف is مبني — no exceptions, ever." },
        "112-3-w2": { conceptLabel: "فعل مضارع — معرب", explanation: "يَلِدْ. The مضارع is the one verb type that's usually معرب." },
        "112-3-w4": { conceptLabel: "فعل مضارع — معرب", explanation: "يُولَدْ. Also مضارع, also usually معرب." }
      }
    },

    noticeInteraction: {
      type: "word-tap",
      ayahRef: "112:3",
      instanceId: "2.4-notice",
      promptContext: "Al-Ikhlas 112:3",
      question: "Tap the one word that's GUARANTEED مبني — no exceptions possible.",
      correctWordId: "112-3-w1",
      correctFeedback: "Right — لَمْ is a حرف, and وأما الحروف فمبنية كلها: every single حرف is مبني, with zero exceptions. The other two words are فعل مضارع — usually معرب.",
      incorrectFeedback: "Not quite — that word is a فعل مضارع, which is USUALLY معرب (not guaranteed). Look for the حرف.",
      wordNotes: {
        "112-3-w1": { conceptLabel: "حرف — مبني دائمًا", explanation: "لَمْ — guaranteed مبني." },
        "112-3-w2": { conceptLabel: "فعل مضارع", explanation: "يَلِدْ — usually معرب." },
        "112-3-w3": { conceptLabel: "حرف + فعل", explanation: "وَلَمْ — the same حرف, joined to و." },
        "112-3-w4": { conceptLabel: "فعل مضارع", explanation: "يُولَدْ — usually معرب." }
      }
    },

    practiceQuestions: [
      {
        id: "p1",
        type: "true-false",
        prompt: "معرب and مبني can both apply to nouns AND verbs.",
        correct: true,
        explanation: "Right — both word types can be either kind."
      },
      {
        id: "p2",
        type: "multiple-choice",
        prompt: "Which word type is ALWAYS مبني, with zero exceptions?",
        options: [
          { id: "a", labelAr: "حرف" },
          { id: "b", labelAr: "اسم" },
          { id: "c", labelAr: "فعل" }
        ],
        correctOptionId: "a",
        explanation: "Right — وأما الحروف فمبنية كلها (p. 20). أسماء and أفعال can go either way; حروف never do."
      },
      {
        id: "p3",
        type: "true-false",
        prompt: "Since هَلْ is a حرف, you don't even need to check — it's definitely مبني.",
        correct: true,
        explanation: "Right — that's exactly the point of حكم الحرف: for particles, the answer is certain before you even look."
      },
      {
        id: "p4",
        type: "multiple-choice",
        prompt: "زَيْدٌ changes its ending; هُوَ never does. What's the PRACTICAL difference this makes?",
        options: [
          { id: "a", labelEn: "معرب words' endings can tell you their role; مبني words' endings can't" },
          { id: "b", labelEn: "There's no real practical difference" },
          { id: "c", labelEn: "مبني words are always nouns" },
          { id: "d", labelEn: "معرب words are always verbs" }
        ],
        correctOptionId: "a",
        explanation: "Right — that's why the rest of this course studies معرب endings so closely."
      },
      {
        id: "p5",
        type: "true-false",
        prompt: "الفعل الماضي (the past-tense verb) is usually معرب, just like الاسم.",
        correct: false,
        explanation: "No — from Lesson 1 (this Part) you know الفعل الأصل مبني؛ specifically, only الفعل المضارع is usually معرب. You'll see this properly in Lesson 7."
      }
    ],

    quranChallenge: {
      surahAr: "الفاتحة",
      surahEn: "Al-Fatihah",
      ayahRef: "1:2",
      arabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
      translation: "All praise is due to Allah, Lord of the worlds.",
      question: "لِ (the “لِ” attached to اللَّهِ, meaning “belongs to”) is a حرف جر. Is it definitely مبني?",
      options: [
        { id: "yes", labelEn: "Yes" },
        { id: "no", labelEn: "No" }
      ],
      correctOptionId: "yes",
      explanation: "Yes — it's a حرف, and every single حرف is مبني. No exceptions, ever."
    },

    summary: [
      "معرب: the ending changes with role (زَيْدٌ). مبني: the ending stays fixed (هُوَ).",
      "Both اسم and فعل can be EITHER — you have to check each word.",
      "حرف is different: وأما الحروف فمبنية كلها — every particle is مبني, guaranteed, no exceptions.",
      "Knowing معرب vs. مبني matters practically: a معرب word's ending becomes a clue to its role — which the rest of this course teaches you to read."
    ],

    completion: {
      titleAr: "الفرق بين المعرب والمبني",
      statement: "You can now tell the two apart — and you know the one word type that's never in doubt."
    }
  },

  "2.5": {
    id: "2.5",
    steps: ["intro", "concept", "example", "quran", "practice", "summary", "completion"],

    sourceNote: {
      status: "book-cited",
      label: "Sourced from your reference book — page 15",
      detail: "The four states (رفع، نصب، خفض، جزم) are the book's own list, page 15 — this lesson introduces them by name and by which word types they belong to, without yet teaching their markers (علامات), which the book covers in its next chapter (this project's Part 3)."
    },

    intro: {
      titleAr: "حالات الإعراب",
      titleEn: "The States of I'rab",
      statement: "You know a معرب word's ending changes. Now: changes into WHAT? Four possible states."
    },

    objective: [
      "name the four states of الإعراب: رفع، نصب، خفض، جزم",
      "know which two states are exclusive to one word type",
      "recognize that these states only ever apply to معرب words"
    ],

    concept: {
      termAr: "حالات الإعراب",
      kind: "book-cited",
      definitionAr: "أَقْسَامُ الْإِعْرَابِ أَرْبَعَةٌ: رَفْعٌ، وَنَصْبٌ، وَخَفْضٌ، وَجَزْمٌ.",
      definitionEn: "I'rab has four possible states: raf', nasb, khafd, and jazm.",
      lead: "Only معرب words take these states — remember, a مبني word's ending never changes at all. Tap each below for a first, plain-language feel; you'll meet the actual MARKERS for each in a later Part."
    },

    definitionBreakdown: [
      {
        termAr: "رفع",
        termEn: "Raf'",
        glossEn: "state 1",
        explanation: "The most common, “default” state for a معرب word — roughly, its resting position."
      },
      {
        termAr: "نصب",
        termEn: "Nasb",
        glossEn: "state 2",
        explanation: "A different state — certain roles in the sentence push a معرب word here instead."
      },
      {
        termAr: "خفض",
        termEn: "Khafd",
        glossEn: "state 3 — nouns only",
        explanation: "Only ever happens to a noun — never a verb. You'll see exactly why in Lesson 6."
      },
      {
        termAr: "جزم",
        termEn: "Jazm",
        glossEn: "state 4 — verbs only",
        explanation: "Only ever happens to a verb — never a noun. You'll see exactly why in Lesson 7."
      }
    ],

    conceptTree: {
      root: { ar: "المُعرَب", en: "a mu'rab word's ending" },
      branches: [
        { ar: "رفع", en: "raf'" },
        { ar: "نصب", en: "nasb" },
        { ar: "خفض", en: "khafd — nouns only" },
        { ar: "جزم", en: "jazm — verbs only" }
      ]
    },

    example: {
      kind: "book-example",
      kindLabel: "Your reference book's own list (p. 15)",
      arabic: "رفعٌ، نصبٌ، خفضٌ، جزمٌ",
      transliteration: "raf', nasb, khafd, jazm",
      translation: "the four أقسام of الإعراب",
      explanation: "Your book lists all four together, then immediately narrows down which apply to which word type — that's exactly what Lessons 6 and 7 will do.",
      contrast: {
        arabic: "هُوَ",
        translation: "مبني — none of the four apply",
        explanation: "A مبني word doesn't have a رفع/نصب/خفض/جزم “state” to speak of — its ending is simply fixed, full stop. These four states are ONLY a معرب word's concern."
      }
    },

    quranExample: {
      surahAr: "الإخلاص",
      surahEn: "Al-Ikhlas",
      ayahRef: "112:2",
      arabic: "اللَّهُ الصَّمَدُ",
      translation: "Allah, the Eternal Refuge.",
      notice: "Both اللَّهُ and الصَّمَدُ are معرب, so each one's ending IS in one of the four states you just learned. Which one, and exactly how you'd recognize it, is what a later Part will teach you — for now, just know: every معرب word's ending is always in ONE of these four, never zero, never more than one."
    },

    practiceQuestions: [
      {
        id: "p1",
        type: "true-false",
        prompt: "الإعراب has four possible states.",
        correct: true,
        explanation: "Right — رفع، نصب، خفض، جزم."
      },
      {
        id: "p2",
        type: "multiple-choice",
        prompt: "Which state applies ONLY to nouns, never to verbs?",
        options: [
          { id: "a", labelAr: "خفض" },
          { id: "b", labelAr: "جزم" },
          { id: "c", labelAr: "رفع" }
        ],
        correctOptionId: "a",
        explanation: "Right — خفض is exclusive to nouns."
      },
      {
        id: "p3",
        type: "multiple-choice",
        prompt: "Which state applies ONLY to verbs, never to nouns?",
        options: [
          { id: "a", labelAr: "جزم" },
          { id: "b", labelAr: "خفض" },
          { id: "c", labelAr: "نصب" }
        ],
        correctOptionId: "a",
        explanation: "Right — جزم is exclusive to verbs."
      },
      {
        id: "p4",
        type: "true-false",
        prompt: "رفع and نصب can apply to BOTH nouns and verbs.",
        correct: true,
        explanation: "Right — only خفض (nouns-only) and جزم (verbs-only) are exclusive. رفع and نصب are shared by both, as you'll see in Lessons 6 and 7."
      },
      {
        id: "p5",
        type: "true-false",
        prompt: "A مبني word can be in one of these four states too, just like a معرب word.",
        correct: false,
        explanation: "No — these four states are the exclusive concern of معرب words. A مبني word's ending is simply fixed; the question doesn't even apply to it."
      }
    ],

    summary: [
      "الإعراب has exactly four states: رفع، نصب، خفض، جزم — your book's own list (p. 15).",
      "Only معرب words are ever IN one of these states; a مبني word's ending doesn't participate at all.",
      "خفض belongs ONLY to nouns; جزم belongs ONLY to verbs — رفع and نصب are shared by both.",
      "Next: exactly which of these apply to nouns (Lesson 6), then to verbs (Lesson 7)."
    ],

    completion: {
      titleAr: "حالات الإعراب",
      statement: "Four states, and you already know which are shared and which aren't."
    }
  },

  "2.6": {
    id: "2.6",
    steps: ["intro", "concept", "example", "quran", "notice", "practice", "challenge", "summary", "completion"],

    sourceNote: {
      status: "book-cited",
      label: "Sourced from your reference book — page 15",
      detail: "فللأسماء من ذلك: الرفع، والنصب، والخفض، ولا جزم فيها is the book's own line, page 15, stated immediately after it lists all four states."
    },

    intro: {
      titleAr: "حالات الاسم المعرب",
      titleEn: "I'rab States of the Noun",
      statement: "Of the four states you just met, one is permanently off-limits for every noun in the language. Which one — and why?"
    },

    objective: [
      "state which three of the four الإعراب states apply to nouns",
      "state with certainty that a noun is never مجزوم",
      "recognize noun states inside a Qur'anic expression without yet naming the exact marker"
    ],

    concept: {
      termAr: "حالات الاسم المعرب",
      kind: "book-cited",
      definitionAr: "فَلِلْأَسْمَاءِ مِنْ ذَلِكَ: الرَّفْعُ، وَالنَّصْبُ، وَالْخَفْضُ، وَلَا جَزْمَ فِيهَا.",
      definitionEn: "Nouns take three of the four states: raf', nasb, and khafd — never jazm.",
      lead: "Of the four states from Lesson 5, a معرب noun can only ever be in three of them. Tap below to see which one is permanently off-limits — and why."
    },

    definitionBreakdown: [
      {
        termAr: "رفع",
        termEn: "Raf'",
        glossEn: "possible for nouns",
        explanation: "Yes — a معرب noun can be مرفوع."
      },
      {
        termAr: "نصب",
        termEn: "Nasb",
        glossEn: "possible for nouns",
        explanation: "Yes — a معرب noun can be منصوب."
      },
      {
        termAr: "خفض",
        termEn: "Khafd",
        glossEn: "possible for nouns",
        explanation: "Yes — خفض is, in fact, a noun-only state (you met this in Lesson 5). أسماء معربة can be مجرور."
      },
      {
        termAr: "جزم",
        termEn: "Jazm",
        glossEn: "NEVER for nouns",
        explanation: "No — ولا جزمَ فيها: your book states this directly. جزم belongs exclusively to verbs (Lesson 7)."
      }
    ],

    conceptTree: {
      root: { ar: "الاسمُ المُعرَب", en: "a mu'rab noun" },
      branches: [
        { ar: "مرفوع", en: "raf' ✓" },
        { ar: "منصوب", en: "nasb ✓" },
        { ar: "مجرور", en: "khafd ✓" }
      ]
    },

    example: {
      kind: "book-example",
      kindLabel: "From your reference book's own classification (p. 15)",
      arabic: "زَيْدٌ",
      transliteration: "Zaydun",
      translation: "a معرب noun",
      explanation: "As a doer: زَيْدٌ (مرفوع). As an object: زَيْدًا (منصوب). After a preposition: زَيْدٍ (مجرور/خفض). Three different roles, three different endings — and notice: never a fourth, جزم-shaped ending. That option simply doesn't exist for a noun.",
      contrast: {
        arabic: "مَنْ",
        translation: "مبني — none of these four apply at all",
        explanation: "A reminder from Lesson 3: a مبني word like مَنْ isn't in ANY of these states — the question of رفع/نصب/خفض/جزم doesn't even apply to it. Only a معرب noun has this three-way choice."
      }
    },

    quranExample: {
      surahAr: "الفاتحة",
      surahEn: "Al-Fatihah",
      ayahRef: "1:2",
      arabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
      translation: "All praise is due to Allah, Lord of the worlds.",
      notice: "الْحَمْدُ، اللَّهِ، and رَبِّ are all معرب nouns, each currently sitting in one of your three possible noun states — never in the fourth (جزم), because that option doesn't exist for a noun. Exactly which state each one is in, and why, is a question for a later Part."
    },

    noticeInteraction: {
      promptAr: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
      promptContext: "Al-Fatihah 1:2",
      question: "رَبِّ is a معرب noun. Could its state ever be جزم?",
      options: [
        { id: "no", labelAr: "لا", labelEn: "No — never" },
        { id: "yes", labelAr: "نعم", labelEn: "Yes — possibly" }
      ],
      correctOptionId: "no",
      correctFeedback: "Right — ولا جزمَ فيها: جزم simply doesn't exist as an option for any noun, ever. رَبِّ must be رفع، نصب، أو خفض.",
      incorrectFeedback: "Not quite — your book states directly that nouns never take جزم. Whatever state رَبِّ is actually in, جزم isn't a possibility."
    },

    practiceQuestions: [
      {
        id: "p1",
        type: "true-false",
        prompt: "A معرب noun can be مرفوع، منصوب، أو مجرور.",
        correct: true,
        explanation: "Right — those are the three states a noun can take."
      },
      {
        id: "p2",
        type: "true-false",
        prompt: "A معرب noun can be مجزومًا.",
        correct: false,
        explanation: "No — ولا جزمَ فيها: your book states this directly. جزم is exclusively a verb state."
      },
      {
        id: "p3",
        type: "multiple-choice",
        prompt: "How many of the four الإعراب states can a معرب noun actually take?",
        options: [
          { id: "a", labelEn: "Three" },
          { id: "b", labelEn: "Four" },
          { id: "c", labelEn: "Two" },
          { id: "d", labelEn: "One" }
        ],
        correctOptionId: "a",
        explanation: "Right — رفع، نصب، خفض. Never جزم."
      },
      {
        id: "p4",
        type: "multiple-choice",
        prompt: "زَيْدٌ (as a doer), زَيْدًا (as an object), زَيْدٍ (after a preposition) — which state is missing from this list entirely?",
        options: [
          { id: "a", labelAr: "جزم" },
          { id: "b", labelAr: "رفع" },
          { id: "c", labelAr: "نصب" }
        ],
        correctOptionId: "a",
        explanation: "Right — جزم never applies to a noun."
      },
      {
        id: "p5",
        type: "true-false",
        prompt: "خفض is a state that ONLY nouns can take — verbs never take it.",
        correct: true,
        explanation: "Right — from Lesson 5: خفض is exclusively a noun state, just as جزم is exclusively a verb state."
      }
    ],

    quranChallenge: {
      surahAr: "الإخلاص",
      surahEn: "Al-Ikhlas",
      ayahRef: "112:2",
      arabic: "اللَّهُ الصَّمَدُ",
      translation: "Allah, the Eternal Refuge.",
      question: "Both words here are معرب nouns. Is it possible that either one is مجزومًا؟",
      options: [
        { id: "no", labelEn: "No — impossible" },
        { id: "yes", labelEn: "Yes — possible" }
      ],
      correctOptionId: "no",
      explanation: "No — impossible for any noun, anywhere, ever. جزم belongs exclusively to verbs."
    },

    summary: [
      "أسماء معربة take exactly three states: رفع، نصب، خفض.",
      "ولا جزمَ فيها — your book's own words: nouns NEVER take جزم. Not rare — impossible.",
      "زَيْدٌ / زَيْدًا / زَيْدٍ shows all three noun states on the same word.",
      "Next: the mirror image — which states a معرب verb can take, and which is impossible FOR it."
    ],

    completion: {
      titleAr: "حالات الاسم المعرب",
      statement: "You know exactly which three states a noun can take — and the one it never can."
    }
  },

  "2.7": {
    id: "2.7",
    steps: ["intro", "concept", "example", "quran", "notice", "practice", "challenge", "summary", "completion"],

    sourceNote: {
      status: "book-cited",
      label: "Sourced from your reference book — pages 15, 17, 19–20",
      detail: "وللأفعال من ذلك: الرفع، والنصب، والجزم، ولا خفض فيها (p. 15); الفعل ضربان: مبني وهو الأصل، ومعرب وهو الفرع (p. 17); the المضارع's condition and both exceptions, with the book's own Qur'anic citations (وَالْوَالِدَاتُ يُرْضِعْنَ — Al-Baqarah 233; لَنَسْفَعًا بِالنَّاصِيَةِ — Al-'Alaq 15) (p. 19); and وإنما أُعرب المضارع؛ لمشابهته للاسم (p. 20) — all the book's own, not QURRA's."
    },

    intro: {
      titleAr: "حالات الفعل المعرب",
      titleEn: "I'rab States of the Verb",
      statement: "One more mirror image, and Part 2 is complete: which states a verb can take — and which verb type takes them at all."
    },

    objective: [
      "state which three of the four الإعراب states apply to verbs",
      "explain why only المضارع is usually معرب, using the book's own reason",
      "recognize the مضارع's two مبني exceptions in the book's own Qur'anic citations"
    ],

    concept: {
      termAr: "حالات الفعل المعرب",
      kind: "book-cited",
      definitionAr: "وَلِلْأَفْعَالِ مِنْ ذَلِكَ: الرَّفْعُ، وَالنَّصْبُ، وَالْجَزْمُ، وَلَا خَفْضَ فِيهَا.",
      definitionEn: "Verbs take three of the four states too — but a DIFFERENT three: raf', nasb, and jazm — never khafd.",
      lead: "Nouns and verbs share two states (رفع، نصب) — but their third state swaps places. Nouns can never be جزم؛ verbs can never be خفض. Tap below."
    },

    definitionBreakdown: [
      {
        termAr: "رفع",
        termEn: "Raf'",
        glossEn: "shared with nouns",
        explanation: "Both أسماء and أفعال can be مرفوع."
      },
      {
        termAr: "نصب",
        termEn: "Nasb",
        glossEn: "shared with nouns",
        explanation: "Both أسماء and أفعال can be منصوب."
      },
      {
        termAr: "جزم",
        termEn: "Jazm",
        glossEn: "verbs only",
        explanation: "The mirror image of Lesson 6's خفض: جزم belongs exclusively to verbs. A noun can never be مجزومًا."
      },
      {
        termAr: "لكن أوّلًا: أيّ فعل أصلًا؟",
        termEn: "But which verb, first?",
        glossEn: "the catch",
        explanation: "These three states only apply to a معرب فعل — and from Lesson 1 (this Part), you know الفعل الأصل مبني. So which verb type is actually معرب? Just one."
      }
    ],

    conceptTree: {
      root: { ar: "الفعل", en: "every verb" },
      branches: [
        { ar: "ماضٍ", en: "always مبني", note: "بناؤه على الفتح غالبًا (p. 17)." },
        { ar: "أمر", en: "always مبني", note: "بناؤه على السكون غالبًا (pp. 17–18)." },
        { ar: "مضارع", en: "usually معرب", note: "the ONE verb type that takes رفع/نصب/جزم — unless نون الإناث or نون التوكيد المباشرة attaches." }
      ]
    },

    example: {
      kind: "book-example",
      kindLabel: "Your reference book's own examples (pp. 17, 19)",
      arabic: "ضَرَبَ",
      transliteration: "Ḍaraba",
      translation: "he hit — ماضٍ, always مبني",
      explanation: "بناؤه على الفتح — fixed on فتح, permanently, whatever role it plays. The past-tense verb never takes رفع/نصب/جزم at all.",
      contrast: {
        arabic: "يَضْرِبُ",
        translation: "“he hits / is hitting” — مضارع, usually معرب",
        explanation: "Same root, different form — and THIS one IS معرب: مرفوع here, with a visible ـُ ending (الضمة الظاهرة), your book's own example (p. 19)."
      }
    },

    quranExample: {
      surahAr: "البقرة",
      surahEn: "Al-Baqarah",
      ayahRef: "2:233",
      arabic: "وَالْوَالِدَاتُ يُرْضِعْنَ",
      translation: "And mothers nurse [their children].",
      notice: "يُرْضِعْنَ is a فعل مضارع — normally معرب. But look closely: نون الإناث (ـْنَ) is attached to it. Your book states directly: attach نون الإناث, and the مضارع becomes مبني instead — fixed on سكون. This is the book's own citation for exactly that exception (p. 19)."
    },

    noticeInteraction: {
      promptAr: "وَالْوَالِدَاتُ يُرْضِعْنَ",
      promptContext: "Al-Baqarah 2:233",
      question: "يُرْضِعْنَ has نون الإناث attached to it. What does that make it here?",
      options: [
        { id: "mabni", labelAr: "مبني", labelEn: "Mabni — fixed" },
        { id: "murab", labelAr: "معرب", labelEn: "Mu'rab — changeable" }
      ],
      correctOptionId: "mabni",
      correctFeedback: "Right — attaching نون الإناث turns even the مضارع مبني, fixed on سكون. This is your book's own example of that exact exception (p. 19).",
      incorrectFeedback: "Not quite — your book states that نون الإناث attaching to the مضارع makes it مبني instead of معرب. That's exactly what's happening here."
    },

    practiceQuestions: [
      {
        id: "p1",
        type: "true-false",
        prompt: "Verbs take the exact same three states as nouns: رفع، نصب، خفض.",
        correct: false,
        explanation: "No — verbs take رفع، نصب، جزم (not خفض). Nouns take رفع، نصب، خفض (not جزم). They share two, not three."
      },
      {
        id: "p2",
        type: "multiple-choice",
        prompt: "Which verb TYPE is usually معرب?",
        options: [
          { id: "a", labelAr: "المضارع" },
          { id: "b", labelAr: "الماضي" },
          { id: "c", labelAr: "الأمر" }
        ],
        correctOptionId: "a",
        explanation: "Right — المضارع is the one verb type that's usually معرب."
      },
      {
        id: "p3",
        type: "true-false",
        prompt: "الماضي and الأمر are always مبني, with no exceptions.",
        correct: true,
        explanation: "Right — from your book: الفعل الأصل مبني؛ only المضارع is the الفرع (exception) that's usually معرب."
      },
      {
        id: "p4",
        type: "multiple-choice",
        prompt: "According to your book, WHY is the مضارع the one verb type that's معرب?",
        options: [
          { id: "a", labelEn: "لمشابهته للاسم — because it resembles the noun" },
          { id: "b", labelEn: "Because it's used more often" },
          { id: "c", labelEn: "Because it's shorter" },
          { id: "d", labelEn: "There's no reason given" }
        ],
        correctOptionId: "a",
        explanation: "Right — p. 20: وإنما أُعرب المضارع؛ لمشابهته للاسم."
      },
      {
        id: "p5",
        type: "true-false",
        prompt: "Nothing can ever turn a مضارع verb مبني — it's always معرب, guaranteed.",
        correct: false,
        explanation: "Not quite — your book gives two exceptions: نون الإناث attaching (→ مبني على السكون) and نون التوكيد المباشرة attaching (→ مبني على الفتح)."
      }
    ],

    quranChallenge: {
      surahAr: "العلق",
      surahEn: "Al-'Alaq",
      ayahRef: "96:15",
      arabic: "لَنَسْفَعًا بِالنَّاصِيَةِ",
      translation: "We will surely drag him by the forelock.",
      question: "نَسْفَعًا has نون التوكيد المباشرة attached (the emphatic ـًا ending). Your book says that makes the مضارع مبني على الفتح here. Does that match what you just learned?",
      options: [
        { id: "yes", labelEn: "Yes — matches" },
        { id: "no", labelEn: "No — contradicts it" }
      ],
      correctOptionId: "yes",
      explanation: "Yes — exactly the second exception from this lesson: نون التوكيد المباشرة attaching to the مضارع makes it مبني على الفتح, just like نون الإناث makes it مبني على السكون. Two different attachments, two different fixed marks, same underlying rule: the exception overrides the default."
    },

    summary: [
      "أفعال معربة take رفع، نصب، جزم — never خفض (the mirror image of nouns).",
      "But only ONE verb type is usually معرب at all: المضارع. الماضي and الأمر are always مبني.",
      "لماذا؟ وإنما أُعرب المضارع لمشابهته للاسم — your book's own reason, page 20.",
      "Even المضارع can become مبني: نون الإناث attaching → مبني على السكون (وَالْوَالِدَاتُ يُرْضِعْنَ); نون التوكيد المباشرة attaching → مبني على الفتح (لَنَسْفَعًا) — both the book's own Qur'anic citations."
    ],

    completion: {
      titleAr: "حالات الفعل المعرب",
      statement: "Part 2 complete — you understand the whole معرب/مبني system, for every word type."
    }
  },

  /* ========================================================================
     PART 3 — علامات الإعراب (Signs of I'rab) — Phase 8
     Source: pages 21-35 of the same reference book ("باب معرفة علامات
     الإعراب"), five clean page images covering the chapter almost in full
     (it ends in the book's own two-part summary on p.35; the second half of
     that summary continues onto an unsupplied p.36 — noted in 3.8 below).
     Every Qur'anic citation used as an interactive widget below was
     independently re-verified against an authoritative Qur'an text (not
     just pixel-read from the source image) before being used, given how
     visually dense this chapter's stacked citations are. The one exception
     — 65:2, in Lesson 3.7 — is disclosed as QURRA's own pick, not the
     book's, because that specific worked example fell inside a footnote
     block that wasn't confidently legible.
     ======================================================================== */

  "3.1": {
    id: "3.1",
    steps: ["intro", "concept", "example", "quran", "practice", "summary", "completion"],

    sourceNote: {
      status: "book-cited",
      label: "Sourced from your reference book — pages 20–21",
      detail: "The chapter title (بَابُ مَعْرِفَةِ عَلَامَاتِ الْإِعْرَابِ, p. 20) and its opening line for رفع — لِلرَّفْعِ أَرْبَعُ عَلَامَاتٍ: الضَّمَّةُ وَهِيَ الْأَصْلُ، وَالْوَاوُ، وَالْأَلِفُ، وَالنُّونُ، وَهِيَ نَائِبَةٌ عَنِ الضَّمَّةِ (p. 21) — are the book's own, and set the pattern every other state in this Part follows: one أصل (original) sign, plus one or more نائبة (substitute) signs for the word-types that can't take the original."
    },

    intro: {
      titleAr: "ما هي علامات الإعراب؟",
      titleEn: "What Are the Signs of I'rab?",
      statement: "Part 2 gave you the four states — رفع، نصب، خفض، جزم. Now: how do you actually SEE one on a word? Meet the full map."
    },

    objective: [
      "explain the difference between an الأصل (original) sign and a نائبة (substitute) sign",
      "state how many signs your book gives for each of the four states",
      "recognize that every state still has exactly ONE default sign, whatever word type carries it"
    ],

    concept: {
      termAr: "الأصل والنائب",
      kind: "book-cited",
      definitionAr: "لِلرَّفْعِ أَرْبَعُ عَلَامَاتٍ: الضَّمَّةُ وَهِيَ الْأَصْلُ، وَالْوَاوُ، وَالْأَلِفُ، وَالنُّونُ، وَهِيَ نَائِبَةٌ عَنِ الضَّمَّةِ.",
      definitionEn: "Raf' has four signs: damma, which is the original — and waw, alif, and nun, which stand in for it.",
      lead: "Every state works the same way: ONE default sign (الأصل) — but some word shapes simply can't carry it, so a stand-in (نائبة) takes its place instead. Learn the pattern once here; you'll see it four times over the rest of this Part."
    },

    definitionBreakdown: [
      {
        termAr: "الأصل",
        termEn: "al-aṣl",
        glossEn: "the original sign",
        explanation: "The default marker for a state — الضمة for رفع, for instance. Most مُعرَب words that reach this state use it."
      },
      {
        termAr: "النائبة",
        termEn: "an-nā'ibah",
        glossEn: "a substitute sign",
        explanation: "A different mark that steps in for the original, for word-shapes that structurally can't carry it — e.g. a dual noun can't visibly take a short damma, so الألف marks its رفع instead."
      },
      {
        termAr: "لماذا التنوّع؟",
        termEn: "Why the variety?",
        glossEn: "one rule, one exception at a time",
        explanation: "You'll meet this same pattern for all four states: one clear default, and a short, specific list of word-types that use something else. Nothing here is random — every substitute is tied to a named word category (المثنى، جمع المذكر السالم، الأسماء الستة، الأفعال الخمسة…)."
      }
    ],

    conceptTree: {
      root: { ar: "علامات الإعراب", en: "signs, by state" },
      branches: [
        {
          ar: "رفع", en: "4 signs",
          children: [
            { ar: "الضمة", en: "الأصل" },
            { ar: "و  /  ا  /  ن", en: "نائبة" }
          ]
        },
        {
          ar: "نصب", en: "5 signs",
          children: [
            { ar: "الفتحة", en: "الأصل" },
            { ar: "ا  /  كسرة  /  ي  /  حذف ن", en: "نائبة" }
          ]
        },
        {
          ar: "خفض", en: "3 signs",
          children: [
            { ar: "الكسرة", en: "الأصل" },
            { ar: "ي  /  فتحة", en: "نائبة" }
          ]
        },
        {
          ar: "جزم", en: "2 signs",
          children: [
            { ar: "السكون", en: "الأصل" },
            { ar: "الحذف", en: "نائبة" }
          ]
        }
      ]
    },

    example: {
      kind: "book-example",
      kindLabel: "A first, plain illustration",
      arabic: "زَيْدٌ",
      transliteration: "Zaydun",
      translation: "مرفوع بالضمة — the default sign, on an ordinary singular noun",
      explanation: "زَيْدٌ is exactly the kind of word that CAN take the original sign — a plain مفرد noun, so الضمة marks its رفع directly, no substitute needed.",
      contrast: {
        arabic: "الْمُسْلِمُونَ",
        translation: "مرفوع بالواو — a substitute sign, on a different word shape",
        explanation: "This word is also مرفوع — but it's a جمع مذكر سالم, a shape that takes الواو instead of الضمة. Same STATE (رفع), different SIGN — exactly the pattern this whole Part is built on. You'll meet this pair properly in Lesson 3."
      }
    },

    quranExample: {
      surahAr: "الإخلاص",
      surahEn: "Al-Ikhlas",
      ayahRef: "112:2",
      arabic: "اللَّهُ الصَّمَدُ",
      translation: "Allah, the Eternal Refuge.",
      notice: "You already know both these words are معرب and مرفوع (Part 2). Now you can go one step further: both are plain مفرد nouns, so their رفع is marked the default way — بالضمة. Nothing substitute-shaped about either of them."
    },

    practiceQuestions: [
      {
        id: "p1",
        type: "true-false",
        prompt: "Every state of الإعراب has exactly one 'default' sign, called الأصل.",
        correct: true,
        explanation: "Right — رفع's أصل is الضمة، نصب's is الفتحة، خفض's is الكسرة، جزم's is السكون."
      },
      {
        id: "p2",
        type: "multiple-choice",
        prompt: "How many signs does your book give for رفع in total (original + substitutes)?",
        options: [
          { id: "a", labelEn: "4" },
          { id: "b", labelEn: "2" },
          { id: "c", labelEn: "5" }
        ],
        correctOptionId: "a",
        explanation: "Right — الضمة (الأصل) plus الواو، الألف، النون (نائبة) — four in total."
      },
      {
        id: "p3",
        type: "multiple-choice",
        prompt: "Which state has the MOST signs, according to your book?",
        options: [
          { id: "a", labelAr: "النصب" },
          { id: "b", labelAr: "الجزم" },
          { id: "c", labelAr: "الخفض" }
        ],
        correctOptionId: "a",
        explanation: "Right — النصب has five: الفتحة (الأصل) plus four substitutes."
      },
      {
        id: "p4",
        type: "true-false",
        prompt: "A نائبة sign means something has gone grammatically wrong.",
        correct: false,
        explanation: "No — a substitute sign is completely normal and correct. It's simply how certain word-shapes (المثنى، الأسماء الستة، etc.) mark that same state."
      },
      {
        id: "p5",
        type: "multiple-choice",
        prompt: "Which state has the FEWEST signs?",
        options: [
          { id: "a", labelAr: "الجزم" },
          { id: "b", labelAr: "الرفع" },
          { id: "c", labelAr: "الخفض" }
        ],
        correctOptionId: "a",
        explanation: "Right — الجزم has only two: السكون (الأصل) and الحذف (نائب)."
      }
    ],

    summary: [
      "Every state of الإعراب has exactly one default sign (الأصل) — plus, for word-shapes that can't carry it, one or more substitute signs (نائبة).",
      "رفع: 4 signs (الضمة + و/ا/ن). نصب: 5 signs (الفتحة + ا/كسرة/ي/حذف ن). خفض: 3 signs (الكسرة + ي/فتحة). جزم: 2 signs (السكون + الحذف).",
      "Nothing here is random — every substitute sign is tied to a specific, named word category, which the next six lessons will introduce one at a time.",
      "Next: الضمة in full detail — رفع's original sign, and the four word-positions where it appears."
    ],

    completion: {
      titleAr: "ما هي علامات الإعراب؟",
      statement: "You have the whole map. Now let's fill it in, sign by sign."
    }
  },

  "3.2": {
    id: "3.2",
    steps: ["intro", "concept", "example", "quran", "notice", "practice", "challenge", "summary", "completion"],

    sourceNote: {
      status: "book-cited",
      label: "Sourced from your reference book — pages 21–22",
      detail: "فَأَمَّا الضَّمَّةُ فَتَكُونُ عَلَامَةً لِلرَّفْعِ فِي أَرْبَعَةِ مَوَاضِعَ (p. 21) and its four positions, each with the book's own Qur'anic citations: الاسم المفرد (آل عمران:55), جمع التكسير (الشعراء:61), جمع المؤنث السالم (الممتحنة:12, p. 22), والفعل المضارع الذي لم يتصل بآخره شيء (الأنعام:83, p. 22)."
    },

    intro: {
      titleAr: "علامات الرفع: الضمة",
      titleEn: "Signs of Raf': the Damma",
      statement: "The first sign, in full: الضمة — رفع's default — and the four kinds of word that carry it."
    },

    objective: [
      "name the four word-positions where الضمة marks رفع",
      "match each position to the book's own Qur'anic citation for it",
      "recognize الضمة on a word inside a Qur'anic ayah"
    ],

    concept: {
      termAr: "مواضع الضمة",
      kind: "book-cited",
      definitionAr: "فَأَمَّا الضَّمَّةُ فَتَكُونُ عَلَامَةً لِلرَّفْعِ فِي أَرْبَعَةِ مَوَاضِعَ.",
      definitionEn: "Damma marks raf' in exactly four positions.",
      lead: "Tap each position below — every one comes with the book's own Qur'anic example."
    },

    definitionBreakdown: [
      {
        termAr: "الاسم المفرد",
        termEn: "the singular noun",
        glossEn: "position 1",
        explanation: "Your book's own example: ﴿قَالَ اللَّهُ﴾ [آل عمران:55] — اللَّهُ is a plain مفرد noun, مرفوع بالضمة (فاعل)."
      },
      {
        termAr: "جمع التكسير",
        termEn: "the broken plural",
        glossEn: "position 2",
        explanation: "﴿قَالَ أَصْحَابُ مُوسَىٰ إِنَّا لَمُدْرَكُونَ﴾ [الشعراء:61] — أَصْحَابُ is a جمع تكسير (broken plural of صاحب), مرفوع بالضمة."
      },
      {
        termAr: "جمع المؤنث السالم",
        termEn: "the sound feminine plural",
        glossEn: "position 3",
        explanation: "﴿إِذَا جَاءَكَ الْمُؤْمِنَاتُ يُبَايِعْنَكَ﴾ [الممتحنة:12] — الْمُؤْمِنَاتُ is مرفوع بالضمة, a sound feminine plural (ـَات)."
      },
      {
        termAr: "الفعل المضارع الذي لم يتصل بآخره شيء",
        termEn: "the bare mudari' verb",
        glossEn: "position 4",
        explanation: "﴿نَرْفَعُ دَرَجَاتٍ مَّن نَّشَاءُ﴾ [الأنعام:83] — نَرْفَعُ is a plain مضارع verb with nothing attached to its end, مرفوع بالضمة الظاهرة."
      }
    ],

    example: {
      kind: "book-example",
      kindLabel: "A worked pair",
      arabic: "زَيْدٌ",
      transliteration: "Zaydun",
      translation: "مفرد، مرفوع بالضمة",
      explanation: "A plain singular noun — position 1, the simplest case.",
      contrast: {
        arabic: "رِجَالٌ",
        translation: "جمع تكسير، مرفوع بالضمة أيضًا",
        explanation: "A completely different word-shape (a broken plural) — but the SAME sign. الضمة doesn't care about shape here; it marks رفع across four different positions."
      }
    },

    quranExample: {
      surahAr: "آل عمران",
      surahEn: "Aal 'Imran",
      ayahRef: "3:55",
      arabic: "قَالَ اللَّهُ",
      translation: "Allah said…",
      notice: "The book's own citation for position 1 (الاسم المفرد). اللَّهُ is فاعل مرفوع, and its رفع is marked the default way — الضمة الظاهرة.",
      wordNotes: {
        "3-55-w2": { conceptLabel: "مرفوع بالضمة", explanation: "اللَّهُ — فاعل, الاسم المفرد, مرفوع بالضمة الظاهرة." }
      }
    },

    noticeInteraction: {
      type: "word-tap",
      ayahRef: "3:55",
      instanceId: "3.2-notice",
      promptContext: "Aal 'Imran 3:55",
      question: "Tap the word that is مرفوع بالضمة here.",
      correctWordId: "3-55-w2",
      correctFeedback: "Right — اللَّهُ is فاعل, a plain مفرد noun, مرفوع بالضمة الظاهرة. Exactly position 1.",
      incorrectFeedback: "Not quite — قَالَ is a فعل ماضٍ (مبني, no رفع to speak of). Look for the مفرد noun beside it.",
      wordNotes: {
        "3-55-w1": { conceptLabel: "فعل ماضٍ", explanation: "قَالَ — مبني, not معرب. No رفع sign applies to it at all." },
        "3-55-w2": { conceptLabel: "مرفوع بالضمة", explanation: "اللَّهُ — فاعل, الاسم المفرد, مرفوع بالضمة الظاهرة." }
      }
    },

    practiceQuestions: [
      {
        id: "p1",
        type: "multiple-choice",
        prompt: "Which position does ﴿قَالَ أَصْحَابُ مُوسَىٰ﴾ [الشعراء:61] illustrate?",
        options: [
          { id: "a", labelEn: "جمع التكسير" },
          { id: "b", labelEn: "الاسم المفرد" },
          { id: "c", labelEn: "الفعل المضارع" }
        ],
        correctOptionId: "a",
        explanation: "Right — أَصْحَابُ is a broken plural (جمع تكسير)."
      },
      {
        id: "p2",
        type: "true-false",
        prompt: "الضمة only ever marks رفع on singular nouns.",
        correct: false,
        explanation: "No — it marks رفع in four positions: مفرد, جمع تكسير, جمع مؤنث سالم, and the bare مضارع verb."
      },
      {
        id: "p3",
        type: "multiple-choice",
        prompt: "﴿نَرْفَعُ دَرَجَاتٍ مَّن نَّشَاءُ﴾ [الأنعام:83] — what kind of word is نَرْفَعُ?",
        options: [
          { id: "a", labelEn: "الفعل المضارع" },
          { id: "b", labelEn: "جمع المؤنث السالم" },
          { id: "c", labelEn: "الاسم المفرد" }
        ],
        correctOptionId: "a",
        explanation: "Right — a plain مضارع verb, nothing attached to its end, مرفوع بالضمة."
      },
      {
        id: "p4",
        type: "true-false",
        prompt: "الْمُؤْمِنَاتُ in ﴿إِذَا جَاءَكَ الْمُؤْمِنَاتُ يُبَايِعْنَكَ﴾ is a جمع مؤنث سالم, مرفوع بالضمة.",
        correct: true,
        explanation: "Right — position 3, exactly as your book cites it (p. 22)."
      }
    ],

    quranChallenge: {
      surahAr: "الإخلاص",
      surahEn: "Al-Ikhlas",
      ayahRef: "112:2",
      arabic: "اللَّهُ الصَّمَدُ",
      translation: "Allah, the Eternal Refuge.",
      question: "Both words here are مفرد nouns, مرفوعان. Which sign marks that رفع?",
      options: [
        { id: "damma", labelAr: "الضمة" },
        { id: "waw", labelAr: "الواو" },
        { id: "alif", labelAr: "الألف" }
      ],
      correctOptionId: "damma",
      explanation: "Right — plain مفرد nouns take the default sign, الضمة الظاهرة. No substitute needed here."
    },

    summary: [
      "الضمة is رفع's default sign, and it covers four positions: الاسم المفرد، جمع التكسير، جمع المؤنث السالم، والفعل المضارع الذي لم يتصل بآخره شيء.",
      "Each position has its own Qur'anic citation in your book: آل عمران:55، الشعراء:61، الممتحنة:12، الأنعام:83.",
      "Next: the three word-shapes that CAN'T take الضمة, and what steps in for it instead."
    ],

    completion: {
      titleAr: "علامات الرفع: الضمة",
      statement: "Four positions, one sign. Now: what happens when الضمة can't be used at all."
    }
  },

  "3.3": {
    id: "3.3",
    steps: ["intro", "concept", "example", "quran", "notice", "practice", "challenge", "summary", "completion"],

    sourceNote: {
      status: "book-cited",
      label: "Sourced from your reference book — pages 23, 25, 26",
      detail: "نِيَابَةُ الوَاوِ عَنِ الضَّمَّةِ (p. 23, جمع المذكر السالم والأسماء الستة, citing يوسف:94), نِيَابَةُ الأَلِفِ عَنِ الضَّمَّةِ (p. 25, المثنى, citing المائدة:23), and نِيَابَةُ النُّونِ عَنِ الضَّمَّةِ (p. 26, الأفعال الخمسة, citing الرحمن:6) — all book-cited positions and citations."
    },

    intro: {
      titleAr: "نيابة الواو والألف والنون عن الضمة",
      titleEn: "Raf's Substitute Signs",
      statement: "Three word-shapes can't carry الضمة at all. Each gets its own stand-in sign instead."
    },

    objective: [
      "name which word-shape takes الواو, which takes الألف, and which takes النون for رفع",
      "recognize each substitute sign inside a Qur'anic citation",
      "tell الضمة (الأصل) apart from its three substitutes at a glance"
    ],

    concept: {
      termAr: "نيابة الواو، والألف، والنون",
      kind: "book-cited",
      definitionAr: "وَأَمَّا الوَاوُ فَتَكُونُ عَلَامَةً لِلرَّفْعِ فِي مَوْضِعَيْنِ: فِي جَمْعِ الْمُذَكَّرِ السَّالِمِ، وَفِي الْأَسْمَاءِ السِّتَّةِ. وَأَمَّا الأَلِفُ فَفِي الْمُثَنَّى. وَأَمَّا النُّونُ فَفِي الفِعْلِ الْمُضَارِعِ إِذَا اتَّصَلَ بِهِ ضَمِيرُ تَثْنِيَةٍ أَوْ جَمْعِ الْمُذَكَّرِ أَوِ الْمُؤَنَّثَةِ الْمُخَاطَبَةِ.",
      definitionEn: "Waw marks raf' in two places (the sound masculine plural, and the Six Nouns). Alif marks it in the dual. Nun marks it on a mudari' verb carrying a dual, plural, or feminine-you pronoun.",
      lead: "Three different shapes, three different stand-ins. Tap each below."
    },

    definitionBreakdown: [
      {
        termAr: "نيابة الواو — الأسماء الستة",
        termEn: "waw, for the Six Nouns",
        glossEn: "أب، أخ، حم، فو، ذو، هن",
        explanation: "Your book calls this group الأسماء السّتّة (six nouns, not the more commonly taught five). ﴿قَالَ أَبُوهُمْ﴾ [يوسف:94] — أَبُوهُمْ is مرفوع بالواو نيابة عن الضمة."
      },
      {
        termAr: "نيابة الواو — جمع المذكر السالم",
        termEn: "waw, for the sound masculine plural",
        glossEn: "e.g. المسلمون، المؤمنون",
        explanation: "Any regular masculine plural ending in ـُونَ takes واو for رفع instead of a damma — the damma would be swallowed by the long و anyway."
      },
      {
        termAr: "نيابة الألف — المثنى",
        termEn: "alif, for the dual",
        glossEn: "any noun meaning 'two of'",
        explanation: "﴿قَالَ رَجُلَانِ مِنَ الَّذِينَ يَخَافُونَ﴾ [المائدة:23] — رَجُلَانِ is مرفوع بالألف نيابة عن الضمة, a dual noun (ـَانِ)."
      },
      {
        termAr: "نيابة النون — الأفعال الخمسة",
        termEn: "nun, for the Five Verbs",
        glossEn: "مضارع + تثنية / جمع مذكر / مخاطبة",
        explanation: "﴿وَالنَّجْمُ وَالشَّجَرُ يَسْجُدَانِ﴾ [الرحمن:6] — يَسْجُدَانِ is مرفوع بثبوت النون, because it's a مضارع verb with a dual pronoun attached. This whole verb category is called الأفعال الخمسة."
      }
    ],

    conceptTree: {
      root: { ar: "نائبة الرفع", en: "raf's substitutes" },
      branches: [
        { ar: "الواو", en: "جمع مذكر سالم، أسماء ستة", note: "pp. 23–24" },
        { ar: "الألف", en: "المثنى", note: "p. 25" },
        { ar: "النون", en: "الأفعال الخمسة", note: "p. 26" }
      ]
    },

    example: {
      kind: "book-example",
      kindLabel: "Three shapes, three signs",
      arabic: "الْمُسْلِمُونَ",
      transliteration: "al-Muslimūn",
      translation: "مرفوع بالواو — جمع مذكر سالم",
      explanation: "A regular masculine plural — its رفع is الواو, not الضمة.",
      contrast: {
        arabic: "الْمُسْلِمَانِ",
        translation: "مرفوع بالألف — المثنى",
        explanation: "The dual form of the SAME word — one added ن, but now a completely different substitute sign marks its رفع. The word-shape decides which stand-in applies."
      }
    },

    quranExample: {
      surahAr: "يوسف",
      surahEn: "Yusuf",
      ayahRef: "12:94",
      arabic: "قَالَ أَبُوهُمْ",
      translation: "…their father said…",
      notice: "أَبُوهُمْ is one of الأسماء الستة (أب، أخ، حم، فو، ذو، هن) — a category that takes واو for رفع instead of ضمة. The book's own citation for this position (p. 24).",
      wordNotes: {
        "12-94-w2": { conceptLabel: "مرفوع بالواو", explanation: "أَبُوهُمْ — فاعل, من الأسماء الستة, مرفوع بالواو نيابة عن الضمة." }
      }
    },

    noticeInteraction: {
      type: "word-tap",
      ayahRef: "12:94",
      instanceId: "3.3-notice",
      promptContext: "Yusuf 12:94",
      question: "Tap the word that is مرفوع بالواو here.",
      correctWordId: "12-94-w2",
      correctFeedback: "Right — أَبُوهُمْ, one of الأسماء الستة, is مرفوع بالواو نيابة عن الضمة.",
      incorrectFeedback: "Not quite — قَالَ is a فعل ماضٍ (مبني). Look for the noun from الأسماء الستة.",
      wordNotes: {
        "12-94-w1": { conceptLabel: "فعل ماضٍ", explanation: "قَالَ — مبني, no رفع sign applies to it." },
        "12-94-w2": { conceptLabel: "مرفوع بالواو", explanation: "أَبُوهُمْ — من الأسماء الستة, مرفوع بالواو نيابة عن الضمة." }
      }
    },

    practiceQuestions: [
      {
        id: "p1",
        type: "multiple-choice",
        prompt: "Which sign marks رفع on a dual noun (المثنى)?",
        options: [
          { id: "a", labelAr: "الألف" },
          { id: "b", labelAr: "الواو" },
          { id: "c", labelAr: "النون" }
        ],
        correctOptionId: "a",
        explanation: "Right — المثنى takes الألف, e.g. رَجُلَانِ."
      },
      {
        id: "p2",
        type: "multiple-choice",
        prompt: "﴿قَالَ رَجُلَانِ مِنَ الَّذِينَ يَخَافُونَ﴾ [المائدة:23] — what sign marks رَجُلَانِ's رفع?",
        options: [
          { id: "a", labelAr: "الألف" },
          { id: "b", labelAr: "الضمة" },
          { id: "c", labelAr: "الواو" }
        ],
        correctOptionId: "a",
        explanation: "Right — a dual noun, مرفوع بالألف نيابة عن الضمة."
      },
      {
        id: "p3",
        type: "true-false",
        prompt: "الأسماء الستة take الواو for رفع, just like جمع المذكر السالم.",
        correct: true,
        explanation: "Right — your book groups both under نيابة الواو (p. 23)."
      },
      {
        id: "p4",
        type: "multiple-choice",
        prompt: "يَسْجُدَانِ in ﴿وَالنَّجْمُ وَالشَّجَرُ يَسْجُدَانِ﴾ is مرفوع by which sign?",
        options: [
          { id: "a", labelEn: "ثبوت النون — nun staying attached" },
          { id: "b", labelEn: "الضمة" },
          { id: "c", labelEn: "الألف" }
        ],
        correctOptionId: "a",
        explanation: "Right — a مضارع verb with a dual pronoun attached (الأفعال الخمسة) is مرفوع بثبوت النون."
      },
      {
        id: "p5",
        type: "true-false",
        prompt: "The same word can take different substitute signs depending on its shape — e.g. singular vs. dual vs. plural.",
        correct: true,
        explanation: "Right — as المسلم / المسلمان / المسلمون just showed: one root, three shapes, three different رفع signs."
      }
    ],

    quranChallenge: {
      surahAr: "المائدة",
      surahEn: "Al-Ma'idah",
      ayahRef: "5:23",
      arabic: "قَالَ رَجُلَانِ مِنَ الَّذِينَ يَخَافُونَ",
      translation: "Two men from those who feared [Allah] said…",
      question: "رَجُلَانِ is a dual noun, مرفوع. Which sign marks that here?",
      options: [
        { id: "alif", labelAr: "الألف" },
        { id: "waw", labelAr: "الواو" },
        { id: "nun", labelAr: "النون" }
      ],
      correctOptionId: "alif",
      explanation: "Right — المثنى takes الألف for رفع, نيابة عن الضمة."
    },

    summary: [
      "الواو marks رفع on جمع المذكر السالم and الأسماء الستة (your book's own six: أب، أخ، حم، فو، ذو، هن).",
      "الألف marks رفع on المثنى — any dual noun.",
      "النون (ثبوت النون) marks رفع on الأفعال الخمسة — a مضارع verb with a dual, plural-masculine, or feminine-you pronoun attached.",
      "Every substitute is tied to one named word category — never random. Next: نصب's own default sign, الفتحة."
    ],

    completion: {
      titleAr: "نيابة الواو والألف والنون عن الضمة",
      statement: "رفع is complete — all four signs. Now the second state: النصب."
    }
  },

  "3.4": {
    id: "3.4",
    steps: ["intro", "concept", "example", "quran", "notice", "practice", "challenge", "summary", "completion"],

    sourceNote: {
      status: "book-cited",
      label: "Sourced from your reference book — pages 26–28",
      detail: "وَلِلنَّصْبِ خَمْسُ عَلَامَاتٍ: الفَتْحَةُ -وَهِيَ الأَصْلُ- ... (p. 26) and مَوَاضِعُ الفَتْحَةِ's three positions with the book's own citations: الاسم المفرد (البقرة:189), جمع التكسير (النمل:88), والفعل المضارع المنصوب (الحج:37, p. 28)."
    },

    intro: {
      titleAr: "علامات النصب: الفتحة",
      titleEn: "Signs of Nasb: the Fatha",
      statement: "The second state: نصب. Its default sign is الفتحة — and it covers three positions."
    },

    objective: [
      "name the three word-positions where الفتحة marks نصب",
      "match each position to the book's own Qur'anic citation for it",
      "recognize الفتحة on a word inside a Qur'anic ayah"
    ],

    concept: {
      termAr: "مواضع الفتحة",
      kind: "book-cited",
      definitionAr: "وَلِلنَّصْبِ خَمْسُ عَلَامَاتٍ: الفَتْحَةُ -وَهِيَ الأَصْلُ- وَالأَلِفُ، وَالكَسْرَةُ، وَالْيَاءُ، وَحَذْفُ النُّونِ. فَأَمَّا الفَتْحَةُ فَتَكُونُ عَلَامَةً لِلنَّصْبِ فِي ثَلَاثَةِ مَوَاضِعَ.",
      definitionEn: "Nasb has five signs in total; fatha is the original, and marks nasb in exactly three positions.",
      lead: "Nasb has the most signs of any state — five in total. Start with its default, الفتحة, in its three positions."
    },

    definitionBreakdown: [
      {
        termAr: "الاسم المفرد",
        termEn: "the singular noun",
        glossEn: "position 1",
        explanation: "﴿وَاتَّقُوا اللَّهَ لَعَلَّكُمْ تُفْلِحُونَ﴾ [البقرة:189] — اللَّهَ is مفعول به, مفرد, منصوب بالفتحة الظاهرة."
      },
      {
        termAr: "جمع التكسير",
        termEn: "the broken plural",
        glossEn: "position 2",
        explanation: "﴿وَتَرَى الْجِبَالَ تَحْسَبُهَا جَامِدَةً﴾ [النمل:88] — الْجِبَالَ is مفعول به, جمع تكسير, منصوب بالفتحة."
      },
      {
        termAr: "الفعل المضارع إذا دخل عليه ناصب",
        termEn: "the mudari' verb after a nasb-particle",
        glossEn: "position 3",
        explanation: "﴿لَن يَنَالَ اللَّهَ لُحُومُهَا وَلَا دِمَاؤُهَا﴾ [الحج:37] — يَنَالَ is مضارع, منصوب بـ«لن» وعلامة نصبه الفتحة الظاهرة."
      }
    ],

    example: {
      kind: "book-example",
      kindLabel: "A worked pair",
      arabic: "رَأَيْتُ زَيْدًا",
      transliteration: "Ra'aytu Zaydan",
      translation: "\"I saw Zayd\" — زيدًا مفعول به منصوب بالفتحة",
      explanation: "زَيْدًا is a مفرد noun, and its role here (مفعول به, the object) makes it منصوب — marked, as always for a plain noun, بالفتحة.",
      contrast: {
        arabic: "قَالَ اللَّهُ",
        translation: "اللَّهُ مرفوع — a completely different state",
        explanation: "Same word-shape as اللَّهَ above (مفرد), but a different ROLE — فاعل, not مفعول به — so a different STATE (رفع, not نصب), and therefore a different sign (ضمة, not فتحة). The sign always follows the state, not the word itself."
      }
    },

    quranExample: {
      surahAr: "البقرة",
      surahEn: "Al-Baqarah",
      ayahRef: "2:189",
      arabic: "وَاتَّقُوا اللَّهَ لَعَلَّكُمْ تُفْلِحُونَ",
      translation: "And fear Allah that you may succeed.",
      notice: "The book's own citation for position 1. اللَّهَ is مفعول به, a plain مفرد noun, منصوب بالفتحة الظاهرة.",
      wordNotes: {
        "2-189-w2": { conceptLabel: "منصوب بالفتحة", explanation: "اللَّهَ — مفعول به, الاسم المفرد, منصوب بالفتحة الظاهرة." }
      }
    },

    noticeInteraction: {
      type: "word-tap",
      ayahRef: "2:189",
      instanceId: "3.4-notice",
      promptContext: "Al-Baqarah 2:189",
      question: "Tap the word that is منصوب بالفتحة here.",
      correctWordId: "2-189-w2",
      correctFeedback: "Right — اللَّهَ is مفعول به, a plain مفرد noun, منصوب بالفتحة الظاهرة.",
      incorrectFeedback: "Not quite — وَاتَّقُوا is a فعل أمر (مبني). Look for the مفرد noun right after it.",
      wordNotes: {
        "2-189-w1": { conceptLabel: "فعل أمر", explanation: "وَاتَّقُوا — مبني, no نصب sign applies to it." },
        "2-189-w2": { conceptLabel: "منصوب بالفتحة", explanation: "اللَّهَ — مفعول به, الاسم المفرد, منصوب بالفتحة الظاهرة." },
        "2-189-w3": { conceptLabel: "—", explanation: "لَعَلَّكُمْ — a separate particle-plus-pronoun, outside this lesson's focus." },
        "2-189-w4": { conceptLabel: "مرفوع", explanation: "تُفْلِحُونَ — مضارع مرفوع بثبوت النون (you'll meet this fully in Lesson 3.3's territory, applied here to رفع, not نصب)." }
      }
    },

    practiceQuestions: [
      {
        id: "p1",
        type: "true-false",
        prompt: "الفتحة is نصب's original sign, just as الضمة is رفع's.",
        correct: true,
        explanation: "Right — every state has one أصل sign, and الفتحة is نصب's."
      },
      {
        id: "p2",
        type: "multiple-choice",
        prompt: "﴿وَتَرَى الْجِبَالَ تَحْسَبُهَا جَامِدَةً﴾ [النمل:88] — what position does الْجِبَالَ illustrate?",
        options: [
          { id: "a", labelEn: "جمع التكسير" },
          { id: "b", labelEn: "الاسم المفرد" },
          { id: "c", labelEn: "الفعل المضارع" }
        ],
        correctOptionId: "a",
        explanation: "Right — الْجِبَالَ is a broken plural (جمع تكسير), منصوب بالفتحة."
      },
      {
        id: "p3",
        type: "multiple-choice",
        prompt: "﴿لَن يَنَالَ اللَّهَ لُحُومُهَا وَلَا دِمَاؤُهَا﴾ [الحج:37] — why is يَنَالَ منصوب?",
        options: [
          { id: "a", labelEn: "A نصب-particle (لن) came before it" },
          { id: "b", labelEn: "It's a جمع تكسير" },
          { id: "c", labelEn: "It's مبني" }
        ],
        correctOptionId: "a",
        explanation: "Right — لن is a ناصب; it pushes the following مضارع verb into نصب."
      },
      {
        id: "p4",
        type: "true-false",
        prompt: "نصب has more signs in total than رفع.",
        correct: true,
        explanation: "Right — نصب has five signs; رفع has four."
      }
    ],

    quranChallenge: {
      surahAr: "الكوثر",
      surahEn: "Al-Kawthar",
      ayahRef: "108:1",
      arabic: "إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ",
      translation: "Indeed, We have granted you al-Kawthar.",
      question: "الْكَوْثَرَ is مفعول به, a plain مفرد noun, منصوب. Which sign marks that?",
      options: [
        { id: "fatha", labelAr: "الفتحة" },
        { id: "damma", labelAr: "الضمة" },
        { id: "alif", labelAr: "الألف" }
      ],
      correctOptionId: "fatha",
      explanation: "Right — a plain مفرد noun takes the default sign, الفتحة الظاهرة."
    },

    summary: [
      "الفتحة is نصب's default sign, marking three positions: الاسم المفرد، جمع التكسير، والفعل المضارع بعد ناصب (لم يتصل بآخره شيء).",
      "Each position has its own Qur'anic citation: البقرة:189، النمل:88، الحج:37.",
      "The SIGN always follows the STATE, not the word itself — the same word can be مرفوع here, منصوب there.",
      "Next: نصب's four substitute signs — الألف، الكسرة، الياء، وحذف النون."
    ],

    completion: {
      titleAr: "علامات النصب: الفتحة",
      statement: "One state down to its default sign. Now: the four word-shapes that need something else."
    }
  },

  "3.5": {
    id: "3.5",
    steps: ["intro", "concept", "example", "quran", "notice", "practice", "challenge", "summary", "completion"],

    sourceNote: {
      status: "book-cited",
      label: "Sourced from your reference book — pages 28–31",
      detail: "نِيَابَةُ الأَلِفِ عَنِ الفَتْحَةِ (p. 28–29, الأسماء الستة, citing الأحزاب:40), نِيَابَةُ الكَسْرَةِ عَنِ الفَتْحَةِ (p. 29, جمع المؤنث السالم, citing العنكبوت:44), نِيَابَةُ اليَاءِ عَنِ الفَتْحَةِ (p. 30–31, المثنى وجمع المذكر السالم, citing البقرة:128 والأنبياء:88), and نِيَابَةُ حَذْفِ النُّونِ عَنِ الفَتْحَةِ (p. 31, الأفعال الخمسة, citing البقرة:184) — all book-cited positions and citations."
    },

    intro: {
      titleAr: "علامات النصب الفرعية",
      titleEn: "Nasb's Substitute Signs",
      statement: "Nasb's biggest lesson: four different word-shapes, four different stand-ins for الفتحة."
    },

    objective: [
      "name which sign substitutes for الفتحة on each of four word-shapes",
      "recognize a نصب substitute sign inside a Qur'anic citation",
      "connect each substitute back to the same word-categories met in Lesson 3.3"
    ],

    concept: {
      termAr: "نيابة الألف، الكسرة، الياء، وحذف النون",
      kind: "book-cited",
      definitionAr: "وَأَمَّا الأَلِفُ فَتَكُونُ عَلَامَةً لِلنَّصْبِ فِي الْأَسْمَاءِ السِّتَّةِ. وَأَمَّا الكَسْرَةُ فَنِيَابَةً عَنِ الفَتْحَةِ فِي جَمْعِ الْمُؤَنَّثِ السَّالِمِ. وَأَمَّا اليَاءُ فَفِي الْمُثَنَّى وَجَمْعِ الْمُذَكَّرِ السَّالِمِ. وَأَمَّا حَذْفُ النُّونِ فَفِي الْأَفْعَالِ الَّتِي رَفْعُهَا بِثُبُوتِ النُّونِ.",
      definitionEn: "Alif substitutes on the Six Nouns; kasra on the sound feminine plural; ya' on the dual and sound masculine plural; and a dropped nun on the Five Verbs.",
      lead: "Notice something: these are the SAME four word-categories from Lesson 3.3 (الأسماء الستة، جمع مؤنث سالم، المثنى وجمع مذكر سالم، الأفعال الخمسة) — just now in نصب instead of رفع, with different stand-in signs."
    },

    definitionBreakdown: [
      {
        termAr: "نيابة الألف — الأسماء الستة",
        termEn: "alif, for the Six Nouns",
        glossEn: "e.g. أب، أخ، ذو",
        explanation: "﴿مَّا كَانَ مُحَمَّدٌ أَبَا أَحَدٍ مِّن رِّجَالِكُمْ﴾ [الأحزاب:40] — أَبَا is منصوب بالألف نيابة عن الفتحة."
      },
      {
        termAr: "نيابة الكسرة — جمع المؤنث السالم",
        termEn: "kasra, for the sound feminine plural",
        glossEn: "e.g. المؤمنات، السماوات",
        explanation: "﴿خَلَقَ اللَّهُ السَّمَاوَاتِ وَالْأَرْضَ بِالْحَقِّ﴾ [العنكبوت:44] — السَّمَاوَاتِ is منصوب بالكسرة نيابة عن الفتحة."
      },
      {
        termAr: "نيابة الياء — المثنى وجمع المذكر السالم",
        termEn: "ya', for the dual and sound masculine plural",
        glossEn: "e.g. مسلمَيْن، مؤمنِين",
        explanation: "﴿رَبَّنَا وَاجْعَلْنَا مُسْلِمَيْنِ لَكَ﴾ [البقرة:128] — مُسْلِمَيْنِ (dual) منصوب بالياء. ﴿وَكَذَٰلِكَ نُنجِي الْمُؤْمِنِينَ﴾ [الأنبياء:88] — الْمُؤْمِنِينَ (sound masculine plural) منصوب بالياء too — the same substitute sign covers both shapes."
      },
      {
        termAr: "نيابة حذف النون — الأفعال الخمسة",
        termEn: "a dropped nun, for the Five Verbs",
        glossEn: "the mirror of ثبوت النون in رفع",
        explanation: "﴿وَأَن تَصُومُوا خَيْرٌ لَّكُمْ﴾ [البقرة:184] — تَصُومُوا is منصوب بحذف النون: exactly the verb-category that took ثبوت النون for رفع (Lesson 3.3) now marks نصب by DROPPING that same نون."
      }
    ],

    conceptTree: {
      root: { ar: "نائبة النصب", en: "nasb's substitutes" },
      branches: [
        { ar: "الألف", en: "أسماء ستة", note: "p. 28" },
        { ar: "الكسرة", en: "جمع مؤنث سالم", note: "p. 29" },
        { ar: "الياء", en: "مثنى، جمع مذكر سالم", note: "pp. 30–31" },
        { ar: "حذف النون", en: "أفعال خمسة", note: "p. 31" }
      ]
    },

    example: {
      kind: "book-example",
      kindLabel: "The same verb, two signs",
      arabic: "أَنْتُمْ تَصُومُونَ",
      transliteration: "Antum taṣūmūna",
      translation: "مرفوع بثبوت النون — plain statement",
      explanation: "الأفعال الخمسة, رفع: the نون stays attached (ثبوت النون) — you met this sign in Lesson 3.3.",
      contrast: {
        arabic: "أَن تَصُومُوا خَيْرٌ لَّكُمْ",
        translation: "منصوب بحذف النون — after أنْ",
        explanation: "Same verb-family, but now أنْ (a ناصب) pushes it into نصب — and the SAME نون that marked رفع by staying is now دُروپed to mark نصب instead. One consistent rule, running in both directions."
      }
    },

    quranExample: {
      surahAr: "الأحزاب",
      surahEn: "Al-Ahzab",
      ayahRef: "33:40",
      arabic: "مَّا كَانَ مُحَمَّدٌ أَبَا أَحَدٍ مِّن رِّجَالِكُمْ",
      translation: "Muhammad is not the father of [any] one of your men…",
      notice: "أَبَا is خبر كان, one of الأسماء الستة — منصوب بالألف نيابة عن الفتحة. The book's own citation for this position (pp. 28–29).",
      wordNotes: {
        "33-40-w4": { conceptLabel: "منصوب بالألف", explanation: "أَبَا — خبر كان, من الأسماء الستة, منصوب بالألف نيابة عن الفتحة." }
      }
    },

    noticeInteraction: {
      type: "word-tap",
      ayahRef: "33:40",
      instanceId: "3.5-notice",
      promptContext: "Al-Ahzab 33:40",
      question: "Tap the word that is منصوب بالألف here.",
      correctWordId: "33-40-w4",
      correctFeedback: "Right — أَبَا, one of الأسماء الستة, is منصوب بالألف نيابة عن الفتحة.",
      incorrectFeedback: "Not quite — look for the word from الأسماء الستة (أب، أخ، حم، فو، ذو، هن).",
      wordNotes: {
        "33-40-w3": { conceptLabel: "مرفوع", explanation: "مُحَمَّدٌ — اسم كان, مرفوع بالضمة (outside this lesson's نصب focus)." },
        "33-40-w4": { conceptLabel: "منصوب بالألف", explanation: "أَبَا — خبر كان, من الأسماء الستة, منصوب بالألف نيابة عن الفتحة." },
        "33-40-w5": { conceptLabel: "—", explanation: "أَحَدٍ — مضاف إليه مجرور, outside this lesson's نصب focus." }
      }
    },

    practiceQuestions: [
      {
        id: "p1",
        type: "multiple-choice",
        prompt: "Which sign substitutes for الفتحة on الأسماء الستة?",
        options: [
          { id: "a", labelAr: "الألف" },
          { id: "b", labelAr: "الكسرة" },
          { id: "c", labelAr: "الياء" }
        ],
        correctOptionId: "a",
        explanation: "Right — الأسماء الستة take الألف for نصب, just as they took الواو for رفع."
      },
      {
        id: "p2",
        type: "multiple-choice",
        prompt: "﴿خَلَقَ اللَّهُ السَّمَاوَاتِ وَالْأَرْضَ بِالْحَقِّ﴾ [العنكبوت:44] — what marks السَّمَاوَاتِ's نصب?",
        options: [
          { id: "a", labelAr: "الكسرة" },
          { id: "b", labelAr: "الفتحة" },
          { id: "c", labelAr: "الياء" }
        ],
        correctOptionId: "a",
        explanation: "Right — جمع مؤنث سالم takes الكسرة نيابة عن الفتحة for نصب."
      },
      {
        id: "p3",
        type: "true-false",
        prompt: "الياء marks نصب on BOTH the dual and the sound masculine plural.",
        correct: true,
        explanation: "Right — مُسْلِمَيْنِ (dual) and الْمُؤْمِنِينَ (sound masculine plural) both take الياء."
      },
      {
        id: "p4",
        type: "multiple-choice",
        prompt: "﴿وَأَن تَصُومُوا خَيْرٌ لَّكُمْ﴾ [البقرة:184] — what marks تَصُومُوا's نصب?",
        options: [
          { id: "a", labelEn: "حذف النون — the nun is dropped" },
          { id: "b", labelEn: "ثبوت النون — the nun stays" },
          { id: "c", labelAr: "الفتحة" }
        ],
        correctOptionId: "a",
        explanation: "Right — الأفعال الخمسة mark نصب by dropping the نون that marked their رفع."
      },
      {
        id: "p5",
        type: "true-false",
        prompt: "The four word-categories that take substitute نصب signs are different from the ones that took substitute رفع signs.",
        correct: false,
        explanation: "No — they're the exact same four categories (الأسماء الستة، جمع مؤنث سالم، المثنى وجمع مذكر سالم، الأفعال الخمسة). Only the actual sign changes between رفع and نصب."
      }
    ],

    quranChallenge: {
      surahAr: "البقرة",
      surahEn: "Al-Baqarah",
      ayahRef: "2:128",
      arabic: "رَبَّنَا وَاجْعَلْنَا مُسْلِمَيْنِ لَكَ",
      translation: "Our Lord, and make us Muslims [in submission] to You…",
      question: "مُسْلِمَيْنِ is a dual noun, منصوب. Which sign marks that here?",
      options: [
        { id: "ya", labelAr: "الياء" },
        { id: "alif", labelAr: "الألف" },
        { id: "kasra", labelAr: "الكسرة" }
      ],
      correctOptionId: "ya",
      explanation: "Right — المثنى takes الياء for نصب (and for خفض too, as you'll see next lesson) — only رفع uses الألف for the dual."
    },

    summary: [
      "الألف substitutes for الفتحة on الأسماء الستة. الكسرة substitutes on جمع المؤنث السالم.",
      "الياء substitutes on BOTH المثنى and جمع المذكر السالم — one sign, two shapes.",
      "حذف النون substitutes on الأفعال الخمسة — the same نون that marked رفع by staying now marks نصب by being dropped.",
      "Same four word-categories as Lesson 3.3, different state, different signs. Next: خفض — a state that only ever applies to nouns."
    ],

    completion: {
      titleAr: "علامات النصب الفرعية",
      statement: "نصب complete — all five signs. Now: خفض, and the third and fourth states."
    }
  },

  "3.6": {
    id: "3.6",
    steps: ["intro", "concept", "example", "quran", "notice", "practice", "challenge", "summary", "completion"],

    sourceNote: {
      status: "book-cited",
      label: "Sourced from your reference book — pages 31–34",
      detail: "وَلِلْخَفْضِ ثَلَاثُ عَلَامَاتٍ (p. 31) with مَوَاضِعُ الكَسْرَةِ's three positions (citing النمل:30, النساء:32, النور:31), نِيَابَةُ اليَاءِ عَنِ الكَسْرَةِ (p. 32–34, الأسماء الستة والمثنى وجمع المذكر السالم, citing يوسف:81), and نِيَابَةُ الفَتْحَةِ عَنِ الكَسْرَةِ (p. 34, الاسم الممنوع من الصرف, citing النساء:163)."
    },

    intro: {
      titleAr: "علامات الخفض",
      titleEn: "Signs of Khafd",
      statement: "The third state, and — remember from Part 2 — one that only ever happens to a noun, never a verb."
    },

    objective: [
      "name the three positions where الكسرة marks خفض",
      "name what substitutes for الكسرة, and on which two word-categories",
      "recognize خفض's signs inside a Qur'anic citation"
    ],

    concept: {
      termAr: "علامات الخفض",
      kind: "book-cited",
      definitionAr: "وَلِلْخَفْضِ ثَلَاثُ عَلَامَاتٍ: الكَسْرَةُ -وَهِيَ الأَصْلُ- وَالْيَاءُ، وَالفَتْحَةُ، وَهُمَا نَائِبَتَانِ عَنِ الكَسْرَةِ.",
      definitionEn: "Khafd has three signs: kasra, the original; and ya' and fatha, both substitutes for it.",
      lead: "Khafd is simpler than نصب was — only one substitute-carrying category each for its two stand-ins. Start with الكسرة's three positions."
    },

    definitionBreakdown: [
      {
        termAr: "الاسم المفرد المنصرف",
        termEn: "the singular, declinable noun",
        glossEn: "position 1",
        explanation: "﴿بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ﴾ — اللَّهِ، الرَّحْمَٰنِ، الرَّحِيمِ are all مجرورة بالكسرة, plain مفرد nouns."
      },
      {
        termAr: "جمع التكسير المنصرف",
        termEn: "the broken plural",
        glossEn: "position 2",
        explanation: "﴿لِّلرِّجَالِ نَصِيبٌ مِّمَّا اكْتَسَبُوا﴾ [النساء:32] — لِلرِّجَالِ مجرور بالكسرة, جمع تكسير."
      },
      {
        termAr: "جمع المؤنث السالم",
        termEn: "the sound feminine plural",
        glossEn: "position 3",
        explanation: "﴿وَقُل لِّلْمُؤْمِنَاتِ يَغْضُضْنَ مِنْ أَبْصَارِهِنَّ﴾ [النور:31] — لِلْمُؤْمِنَاتِ مجرور بالكسرة."
      },
      {
        termAr: "نيابة الياء",
        termEn: "ya' substitutes",
        glossEn: "أسماء ستة، مثنى، جمع مذكر سالم",
        explanation: "﴿ارْجِعُوا إِلَىٰ أَبِيكُمْ﴾ [يوسف:81] — أَبِيكُمْ مجرور بالياء نيابة عن الكسرة, من الأسماء الستة. The SAME three categories that took الياء for نصب (Lesson 3.5) take it for خفض too."
      },
      {
        termAr: "نيابة الفتحة",
        termEn: "fatha substitutes",
        glossEn: "الاسم الممنوع من الصرف",
        explanation: "﴿وَأَوْحَيْنَا إِلَىٰ إِبْرَاهِيمَ وَإِسْمَاعِيلَ﴾ [النساء:163] — إِبْرَاهِيمَ وَإِسْمَاعِيلَ are مجروران بالفتحة نيابة عن الكسرة, because both are ممنوع من الصرف (a category of noun — often a foreign name — too irregular to carry تنوين or كسرة)."
      }
    ],

    conceptTree: {
      root: { ar: "علامات الخفض", en: "3 signs" },
      branches: [
        { ar: "الكسرة", en: "الأصل — مفرد، جمع تكسير، جمع مؤنث سالم", note: "pp. 31–32" },
        { ar: "الياء", en: "نائبة — أسماء ستة، مثنى، جمع مذكر سالم", note: "p. 32" },
        { ar: "الفتحة", en: "نائبة — الممنوع من الصرف", note: "p. 34" }
      ]
    },

    example: {
      kind: "book-example",
      kindLabel: "The default sign, three shapes",
      arabic: "بِسْمِ اللَّهِ",
      transliteration: "Bismillāh",
      translation: "اللَّهِ مجرور بالكسرة — مضاف إليه",
      explanation: "The most familiar phrase in the whole language, and a perfect position-1 example: اللَّهِ is a plain مفرد noun, مجرور بالكسرة الظاهرة after بِ.",
      contrast: {
        arabic: "إِبْرَاهِيمَ",
        translation: "مجرور بالفتحة — ممنوع من الصرف",
        explanation: "Also مجرور — but a completely different sign. إِبْرَاهِيمَ can't carry a visible كسرة (it's ممنوع من الصرف), so الفتحة steps in instead."
      }
    },

    quranExample: {
      surahAr: "الفاتحة",
      surahEn: "Al-Fatihah",
      ayahRef: "1:1",
      arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
      translation: "In the name of Allah, the Entirely Merciful, the Especially Merciful.",
      notice: "The book's own citation for position 1. اللَّهِ، الرَّحْمَٰنِ، and الرَّحِيمِ are all مجرورة, marked the default way — بالكسرة الظاهرة.",
      wordNotes: {
        "1-1-w2": { conceptLabel: "مجرور بالكسرة", explanation: "اللَّهِ — مضاف إليه, الاسم المفرد, مجرور بالكسرة الظاهرة." }
      }
    },

    noticeInteraction: {
      type: "word-tap",
      ayahRef: "1:1",
      instanceId: "3.6-notice",
      promptContext: "Al-Fatihah 1:1",
      question: "Tap a word that is مجرور بالكسرة here.",
      correctWordId: "1-1-w2",
      correctFeedback: "Right — اللَّهِ is مضاف إليه, a plain مفرد noun, مجرور بالكسرة الظاهرة. (الرَّحْمَٰنِ and الرَّحِيمِ, right after it, are مجرورة the same way.)",
      incorrectFeedback: "Not quite — بِسْمِ is مجرور too, but by a different route (مضاف). Look for the noun مضاف إليه right after it.",
      wordNotes: {
        "1-1-w1": { conceptLabel: "—", explanation: "بِسْمِ — مجرور بالباء, مضاف (outside this lesson's focus on the مضاف إليه)." },
        "1-1-w2": { conceptLabel: "مجرور بالكسرة", explanation: "اللَّهِ — مضاف إليه, الاسم المفرد, مجرور بالكسرة الظاهرة." },
        "1-1-w3": { conceptLabel: "مجرور بالكسرة", explanation: "الرَّحْمَٰنِ — نعت, تابع في الإعراب لما قبله, مجرور بالكسرة." },
        "1-1-w4": { conceptLabel: "مجرور بالكسرة", explanation: "الرَّحِيمِ — نعت ثانٍ, مجرور بالكسرة أيضًا." }
      }
    },

    practiceQuestions: [
      {
        id: "p1",
        type: "true-false",
        prompt: "خفض only ever happens to a noun — never a verb.",
        correct: true,
        explanation: "Right — a fact you already know from Part 2, and it's exactly why خفض's signs only ever apply to nouns."
      },
      {
        id: "p2",
        type: "multiple-choice",
        prompt: "﴿لِّلرِّجَالِ نَصِيبٌ مِّمَّا اكْتَسَبُوا﴾ [النساء:32] — what position does لِلرِّجَالِ illustrate?",
        options: [
          { id: "a", labelEn: "جمع التكسير" },
          { id: "b", labelEn: "جمع المؤنث السالم" },
          { id: "c", labelEn: "الأسماء الستة" }
        ],
        correctOptionId: "a",
        explanation: "Right — رِجَال is a broken plural (جمع تكسير), مجرور بالكسرة."
      },
      {
        id: "p3",
        type: "multiple-choice",
        prompt: "﴿ارْجِعُوا إِلَىٰ أَبِيكُمْ﴾ [يوسف:81] — what marks أَبِيكُمْ's خفض?",
        options: [
          { id: "a", labelAr: "الياء" },
          { id: "b", labelAr: "الكسرة" },
          { id: "c", labelAr: "الفتحة" }
        ],
        correctOptionId: "a",
        explanation: "Right — الأسماء الستة take الياء نيابة عن الكسرة for خفض, just as they did for نصب."
      },
      {
        id: "p4",
        type: "true-false",
        prompt: "إِبْرَاهِيمَ and إِسْمَاعِيلَ in ﴿وَأَوْحَيْنَا إِلَىٰ إِبْرَاهِيمَ وَإِسْمَاعِيلَ﴾ are مجرورة بالفتحة because they're ممنوعان من الصرف.",
        correct: true,
        explanation: "Right — the book's own citation for خفض's second substitute sign (p. 34)."
      }
    ],

    quranChallenge: {
      surahAr: "يوسف",
      surahEn: "Yusuf",
      ayahRef: "12:81",
      arabic: "ارْجِعُوا إِلَىٰ أَبِيكُمْ",
      translation: "Return to your father…",
      question: "أَبِيكُمْ is مجرور here. Which sign marks that?",
      options: [
        { id: "ya", labelAr: "الياء" },
        { id: "kasra", labelAr: "الكسرة" },
        { id: "fatha", labelAr: "الفتحة" }
      ],
      correctOptionId: "ya",
      explanation: "Right — أَبِيكُمْ is one of الأسماء الستة, so الياء substitutes for الكسرة here."
    },

    summary: [
      "الكسرة is خفض's default sign, marking three positions: مفرد، جمع تكسير، جمع مؤنث سالم.",
      "الياء substitutes for الكسرة on الأسماء الستة، المثنى، وجمع المذكر السالم — the same three categories as نصب's الياء.",
      "الفتحة substitutes for الكسرة on الاسم الممنوع من الصرف.",
      "Next: جزم — the fourth and final state, and the mirror image of خفض: a verbs-only state."
    ],

    completion: {
      titleAr: "علامات الخفض",
      statement: "Three states down. One left: جزم, verbs-only."
    }
  },

  "3.7": {
    id: "3.7",
    steps: ["intro", "concept", "example", "quran", "notice", "practice", "challenge", "summary", "completion"],

    sourceNote: {
      status: "book-cited",
      label: "Sourced from your reference book — page 35",
      detail: "وَلِلْجَزْمِ عَلَامَتَانِ: السُّكُونُ وَهُوَ الْأَصْلُ، وَالحَذْفُ وَهُوَ نَائِبٌ عَنْهُ, with مَوْضِعُ السُّكُونِ citing the book's own الإخلاص:3-4. One caveat: نِيَابَةُ الحَذْفِ عَنِ السُّكُونِ's own worked example fell inside a footnote block that (in the supplied image) carried over from the previous page and wasn't confidently legible — so the الحذف example below (الطلاق:2) is QURRA's own pick, clearly labeled, illustrating the same book-stated rule (حذف حرف العلة) rather than reproducing an uncertain citation."
    },

    intro: {
      titleAr: "علامتا الجزم",
      titleEn: "Signs of Jazm",
      statement: "The fourth and final state — and, like خفض, exclusive to one word type. جزم only ever happens to a verb."
    },

    objective: [
      "name جزم's two signs, and which is الأصل",
      "recognize السكون marking جزم on a صحيح الآخر مضارع verb",
      "recognize حذف حرف العلة marking جزم on a معتل الآخر مضارع verb"
    ],

    concept: {
      termAr: "علامتا الجزم",
      kind: "book-cited",
      definitionAr: "وَلِلْجَزْمِ عَلَامَتَانِ: السُّكُونُ وَهُوَ الْأَصْلُ، وَالحَذْفُ وَهُوَ نَائِبٌ عَنْهُ.",
      definitionEn: "Jazm has two signs: sukun, the original — and a dropped letter, its substitute.",
      lead: "The simplest state, sign-wise — just two. Both only ever apply to a مضارع verb (the only verb type that's usually معرب at all, remember from Part 2)."
    },

    definitionBreakdown: [
      {
        termAr: "السكون — الفعل المضارع الصحيح الآخر",
        termEn: "sukun, on a sound-final verb",
        glossEn: "the default",
        explanation: "﴿لَمْ يَلِدْ وَلَمْ يُولَدْ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ﴾ [الإخلاص:3-4] — يَلِدْ، يُولَدْ، and يَكُن are all مجزومة بالسكون, each ending in a solid consonant."
      },
      {
        termAr: "الحذف — الفعل المضارع المعتل الآخر",
        termEn: "a dropped letter, on a weak-final verb",
        glossEn: "the substitute",
        explanation: "When a مضارع verb ends in a weak letter (ا، و، or ي — e.g. يَخْشَى، يَدْعُو، يَرْمِي), السكون can't be pronounced on it. So جزم is marked instead by simply DROPPING that final letter."
      }
    ],

    conceptTree: {
      root: { ar: "علامتا الجزم", en: "2 signs" },
      branches: [
        { ar: "السكون", en: "صحيح الآخر", note: "الأصل" },
        { ar: "الحذف", en: "معتل الآخر", note: "نائب" }
      ]
    },

    example: {
      kind: "book-example",
      kindLabel: "Sound vs. weak-final",
      arabic: "لَمْ يَلِدْ",
      transliteration: "Lam yalid",
      translation: "مجزوم بالسكون — صحيح الآخر",
      explanation: "يَلِدْ ends in a solid consonant (د) — جزم is simply marked بالسكون, the default.",
      contrast: {
        arabic: "لَمْ يَخْشَ",
        translation: "مجزوم بحذف حرف العلة — معتل الآخر",
        explanation: "أصله يَخْشَى — but a weak final ى can't carry a سكون, so جزم is marked by dropping it entirely instead. Same مضارع verb pattern, different final letter, different sign."
      }
    },

    quranExample: {
      surahAr: "الإخلاص",
      surahEn: "Al-Ikhlas",
      ayahRef: "112:3",
      arabic: "لَمْ يَلِدْ وَلَمْ يُولَدْ",
      translation: "He neither begets nor is born.",
      notice: "The book's own citation for موضع السكون (p. 35). يَلِدْ is مجزوم بـ«لم» وعلامة جزمه السكون — a صحيح الآخر مضارع verb, marked the default way.",
      wordNotes: {
        "112-3-w2": { conceptLabel: "مجزوم بالسكون", explanation: "يَلِدْ — مضارع صحيح الآخر, مجزوم بـ«لم» وعلامة جزمه السكون." }
      }
    },

    noticeInteraction: {
      type: "word-tap",
      ayahRef: "112:3",
      instanceId: "3.7-notice",
      promptContext: "Al-Ikhlas 112:3",
      question: "Tap the word that is مجزوم بالسكون here.",
      correctWordId: "112-3-w2",
      correctFeedback: "Right — يَلِدْ is مجزوم بـ«لم» وعلامة جزمه السكون, a صحيح الآخر مضارع verb.",
      incorrectFeedback: "Not quite — لَمْ is the جازم particle itself (مبني), not the verb it affects. Look for the مضارع verb right after it.",
      wordNotes: {
        "112-3-w1": { conceptLabel: "حرف جزم", explanation: "لَمْ — the جازم particle, مبني (a حرف, so بناء applies automatically — from Part 2)." },
        "112-3-w2": { conceptLabel: "مجزوم بالسكون", explanation: "يَلِدْ — مضارع صحيح الآخر, مجزوم بـ«لم» وعلامة جزمه السكون." }
      }
    },

    practiceQuestions: [
      {
        id: "p1",
        type: "true-false",
        prompt: "جزم, like خفض, is exclusive to one word type.",
        correct: true,
        explanation: "Right — خفض is nouns-only; جزم is verbs-only (specifically, the مضارع)."
      },
      {
        id: "p2",
        type: "multiple-choice",
        prompt: "السكون marks جزم on which kind of مضارع verb?",
        options: [
          { id: "a", labelEn: "صحيح الآخر — sound-final" },
          { id: "b", labelEn: "معتل الآخر — weak-final" },
          { id: "c", labelEn: "Both equally" }
        ],
        correctOptionId: "a",
        explanation: "Right — السكون is the default, for verbs ending in a solid consonant."
      },
      {
        id: "p3",
        type: "multiple-choice",
        prompt: "How does حذف حرف العلة mark جزم?",
        options: [
          { id: "a", labelEn: "By dropping the weak final letter entirely" },
          { id: "b", labelEn: "By adding a سكون" },
          { id: "c", labelEn: "By adding a نون" }
        ],
        correctOptionId: "a",
        explanation: "Right — a weak final letter (ا، و، ي) simply can't carry a pronounced سكون, so it's dropped instead."
      },
      {
        id: "p4",
        type: "true-false",
        prompt: "يَلِدْ، يُولَدْ، and يَكُن in Al-Ikhlas 3–4 are all مجزومة بالسكون.",
        correct: true,
        explanation: "Right — all three end in a solid consonant, and all three follow a جازم particle (لم)."
      }
    ],

    quranChallenge: {
      surahAr: "الطلاق",
      surahEn: "At-Talaq",
      ayahRef: "65:2",
      arabic: "وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا",
      translation: "And whoever fears Allah - He will make for him a way out.",
      question: "يَتَّقِ (أصله يَتَّقِي) follows the جازم مَن. Its final ي has been dropped. What sign marks its جزم?",
      options: [
        { id: "hadhf", labelEn: "الحذف — a dropped letter" },
        { id: "sukun", labelAr: "السكون" }
      ],
      correctOptionId: "hadhf",
      explanation: "Right — يَتَّقِ is معتل الآخر (its أصل ends in ي), so جزم is marked by dropping that weak final letter, exactly the rule from this lesson. (This particular citation is QURRA's own pick, illustrating the book's own rule — see this lesson's source note.)"
    },

    summary: [
      "جزم has two signs: السكون (الأصل), for a صحيح الآخر مضارع verb — and الحذف (نائب), for a معتل الآخر one.",
      "الإخلاص:3–4 is your book's own citation for موضع السكون — لَمْ يَلِدْ وَلَمْ يُولَدْ وَلَمْ يَكُن.",
      "All four states are now complete: رفع (4 signs), نصب (5 signs), خفض (3 signs), جزم (2 signs) — 14 signs in total.",
      "Next: bring the whole map together in one final lesson."
    ],

    completion: {
      titleAr: "علامتا الجزم",
      statement: "All four states, all fourteen signs. One lesson left: the complete map."
    }
  },

  "3.8": {
    id: "3.8",
    steps: ["intro", "concept", "example", "quran", "practice", "summary", "completion"],

    sourceNote: {
      status: "book-cited",
      label: "Sourced from your reference book — page 35",
      detail: "The book closes this chapter with its own two-part summary (مُجْمَلُ الْمُعْرَبَاتِ السَّابِقَةِ). The second part opens: جَمِيعُ الْمُعْرَبَاتِ مِنَ الْأَسْمَاءِ قِسْمَانِ: قِسْمٌ يُعْرَبُ بِالْحَرَكَاتِ، وَقِسْمٌ يُعْرَبُ بِالْحُرُوفِ — but that sentence is cut off at the very bottom of page 35 and continues onto an unsupplied page 36, so its full wording isn't available here. Nothing is missing content-wise, though: every sign in both of the book's own two categories (رفع/نصب/خفض marked by حركات — the plain vowel-marks — versus the letter-marked substitutes: و/ا/ي/ن) was already taught in full, book-cited detail across Lessons 3.2–3.7. This lesson uses the book's own two-way split as the organizing frame for that recap."
    },

    intro: {
      titleAr: "الخريطة الكاملة لعلامات الإعراب",
      titleEn: "The Complete Map",
      statement: "Every state, every sign, one map — using the book's own closing framework."
    },

    objective: [
      "recall all fourteen signs across the four states of الإعراب",
      "restate the book's own two-way split: مُعرَب بالحركات vs. مُعرَب بالحروف",
      "recognize which sign applies to a familiar word at a glance"
    ],

    concept: {
      termAr: "قسمان: بالحركات، وبالحروف",
      kind: "book-cited",
      definitionAr: "جَمِيعُ الْمُعْرَبَاتِ مِنَ الْأَسْمَاءِ قِسْمَانِ: قِسْمٌ يُعْرَبُ بِالْحَرَكَاتِ، وَقِسْمٌ يُعْرَبُ بِالْحُرُوفِ.",
      definitionEn: "Every mu'rab noun falls into one of two kinds: one marked by the ordinary vowel-marks, and one marked by letters instead.",
      lead: "That's the book's own final lens on everything you've just learned. Every sign you met in this Part sorts cleanly into one side or the other."
    },

    definitionBreakdown: [
      {
        termAr: "يُعرَب بالحركات",
        termEn: "marked by vowel-marks",
        glossEn: "ضمة، فتحة، كسرة، سكون",
        explanation: "The default sign for every state — زَيْدٌ، رِجَالٌ، الْمُؤْمِنَاتُ and the like all belong here, whatever their state."
      },
      {
        termAr: "يُعرَب بالحروف",
        termEn: "marked by letters",
        glossEn: "و، ا، ي، ن",
        explanation: "The substitute signs — reserved for a short, named list of shapes: المثنى، جمع المذكر السالم، جمع المؤنث السالم (partly), الأسماء الستة، الأفعال الخمسة، والاسم الممنوع من الصرف."
      }
    ],

    conceptTree: {
      root: { ar: "علامات الإعراب", en: "the complete map" },
      branches: [
        {
          ar: "رفع", en: "4 signs",
          children: [
            { ar: "الضمة", en: "الأصل — مفرد، جمع تكسير، جمع مؤنث سالم، مضارع" },
            { ar: "و / ا / ن", en: "نائبة — جمع مذكر + أسماء ستة / مثنى / أفعال خمسة" }
          ]
        },
        {
          ar: "نصب", en: "5 signs",
          children: [
            { ar: "الفتحة", en: "الأصل — مفرد، جمع تكسير، مضارع" },
            { ar: "ا / كسرة / ي / حذف ن", en: "نائبة — أسماء ستة / جمع مؤنث سالم / مثنى+جمع مذكر / أفعال خمسة" }
          ]
        },
        {
          ar: "خفض", en: "3 signs — نوعان فقط",
          children: [
            { ar: "الكسرة", en: "الأصل — مفرد، جمع تكسير، جمع مؤنث سالم" },
            { ar: "ي / فتحة", en: "نائبة — أسماء ستة+مثنى+جمع مذكر / ممنوع من الصرف" }
          ]
        },
        {
          ar: "جزم", en: "2 signs — أفعال فقط",
          children: [
            { ar: "السكون", en: "الأصل — صحيح الآخر" },
            { ar: "الحذف", en: "نائب — معتل الآخر" }
          ]
        }
      ]
    },

    example: {
      kind: "book-example",
      kindLabel: "One word, all four states",
      arabic: "زَيْدٌ  /  زَيْدًا  /  زَيْدٍ",
      transliteration: "Zaydun / Zaydan / Zaydin",
      translation: "مرفوع بالضمة  /  منصوب بالفتحة  /  مجرور بالكسرة",
      explanation: "The same مفرد noun, three roles, three of the four states — every one marked بالحركات, the default. This is the simplest side of the book's two-way split.",
      contrast: {
        arabic: "أَبُوهُمْ  /  أَبَا  /  أَبِيكُمْ",
        translation: "مرفوع بالواو  /  منصوب بالألف  /  مجرور بالياء",
        explanation: "الأسماء الستة, the same three states — but every single one marked بالحروف instead. One category, three different letters, one per state."
      }
    },

    quranExample: {
      surahAr: "الإخلاص",
      surahEn: "Al-Ikhlas",
      ayahRef: "112:2",
      arabic: "اللَّهُ الصَّمَدُ",
      translation: "Allah, the Eternal Refuge.",
      notice: "Where this Part started, back in Lesson 3.1 — and now you can say exactly why: both plain مفرد nouns, both مرفوعان, both يُعربان بالحركات, بالضمة الظاهرة specifically. The whole map, in two words."
    },

    practiceQuestions: [
      {
        id: "p1",
        type: "true-false",
        prompt: "Your book sorts every مُعرَب noun into exactly two kinds: مُعرَب بالحركات and مُعرَب بالحروف.",
        correct: true,
        explanation: "Right — the book's own closing framework for this whole chapter (p. 35)."
      },
      {
        id: "p2",
        type: "multiple-choice",
        prompt: "How many total signs did this Part cover, across all four states?",
        options: [
          { id: "a", labelEn: "14" },
          { id: "b", labelEn: "10" },
          { id: "c", labelEn: "4" }
        ],
        correctOptionId: "a",
        explanation: "Right — 4 (رفع) + 5 (نصب) + 3 (خفض) + 2 (جزم) = 14."
      },
      {
        id: "p3",
        type: "multiple-choice",
        prompt: "Which category is مُعرَب بالحروف for ALL three of its states (رفع، نصب، خفض)?",
        options: [
          { id: "a", labelAr: "الأسماء الستة" },
          { id: "b", labelAr: "جمع التكسير" },
          { id: "c", labelAr: "الاسم المفرد" }
        ],
        correctOptionId: "a",
        explanation: "Right — و في الرفع، ا في النصب، ي في الخفض: الأسماء الستة use a letter for every state they take."
      },
      {
        id: "p4",
        type: "true-false",
        prompt: "جزم and خفض both belong exclusively to one word type each.",
        correct: true,
        explanation: "Right — خفض is nouns-only; جزم is verbs-only. رفع and نصب are shared by both."
      },
      {
        id: "p5",
        type: "multiple-choice",
        prompt: "المضارع verb's جزم is marked بالحركات or بالحروف?",
        options: [
          { id: "a", labelEn: "بالحركات — السكون is a vowel-mark (or its absence)" },
          { id: "b", labelEn: "بالحروف — always a letter" },
          { id: "c", labelEn: "Neither — verbs are outside this split" }
        ],
        correctOptionId: "a",
        explanation: "Right — السكون belongs with the حركات group; only its substitute (الحذف) sits apart, closer to the حروف side conceptually — the book's split is about NOUNS specifically, but the same حركة/بديل pattern runs through الأفعال too."
      }
    ],

    summary: [
      "Fourteen signs, four states, one underlying pattern: an الأصل sign (a vowel-mark) plus نائبة signs for the word-shapes that can't carry it.",
      "Your book's own final lens: every مُعرَب noun is either مُعرَب بالحركات (the ordinary case) or مُعرَب بالحروف (a short, named list of shapes — المثنى، الجموع السالمة، الأسماء الستة، والممنوع من الصرف).",
      "You now have the full system Part 2 promised: not just WHICH state a word is in, but exactly how to SEE it.",
      "What's still ahead: WHICH grammatical role puts a word into which state in the first place (الفاعل، المفعول به، المبتدأ...) — that's Part 4 and beyond."
    ],

    completion: {
      titleAr: "الخريطة الكاملة لعلامات الإعراب",
      statement: "Part 3 complete — you can now see every i'rab sign, and name why it's there."
    }
  },

  /* ========================================================================
     PART 4 — الاسم المعرب (batch 1: المرفوعات)
     Source: reference book pp. 74–90 (بَابُ المَرْفُوعَاتِ مِنَ الأَسْمَاءِ through
     the tail of بَابُ المُبْتَدَأِ وَالخَبَرِ, just before العوامل الداخلة على
     المبتدأ والخبر / النواسخ, which are reserved for a later, separate part
     per the user's explicit 2026-09-30 decision — see
     SOURCE_NOTES_PART5_NAWASIKH.md). ظن وأخواتها and the remaining
     منصوبات/مجرورات babs are still pending further source pages.

     New pedagogical layer introduced here (per the Part 4 spec): every
     lesson from this point on follows ROLE → STATE → SIGN — a grammatical
     role (this Part) determines an i'rab state (Part 2) which is marked by
     a sign (Part 3). Detailed word-by-word i'rab stays out of scope (that
     belongs to a future QURRA I'rab product); the aim is the relationship,
     not the full parse.
     ======================================================================== */

  "4.1": {
    id: "4.1",
    steps: ["intro", "concept", "example", "quran", "practice", "summary", "completion"],

    sourceNote: {
      status: "book-cited",
      label: "Sourced from your reference book — the chapter-opening page, immediately before p. 75",
      detail: "المَرْفُوعَاتُ عَشَرَةٌ: وَهِيَ: الفَاعِلُ، وَالمَفْعُولُ الَّذِي لَمْ يُسَمَّ فَاعِلُهُ، وَالمُبْتَدَأُ، وَخَبَرُهُ، وَاسْمُ كَانَ وَأَخَوَاتِهَا، وَخَبَرُ (إِنَّ) وَأَخَوَاتِهَا، وَخَبَرُ (لَا) الَّتِي لِنَفْيِ الجِنْسِ، وَالتَّابِعُ لِلْمَرْفُوعِ، وَهُوَ أَرْبَعَةُ أَشْيَاءَ: النَّعْتُ، وَالعَطْفُ، وَالتَّوْكِيدُ، وَالبَدَلُ. — the book's own opening line for this chapter, listing all ten مرفوعات categories at once."
    },

    intro: {
      titleAr: "المرفوعات: نظرة عامة",
      titleEn: "Marfu'at: an Overview",
      statement: "Part 2 taught you رفع as a state. Part 3 taught you its signs. Now: the actual grammatical jobs a word can hold that make it مرفوع in the first place."
    },

    objective: [
      "state how many مرفوعات categories your book lists, and name them",
      "explain the three-step logic: ROLE → STATE → SIGN",
      "know which categories this lesson set covers now, and which are reserved for later parts"
    ],

    concept: {
      termAr: "الدور، ثم الحالة، ثم العلامة",
      kind: "book-cited",
      definitionAr: "المَرْفُوعَاتُ عَشَرَةٌ.",
      definitionEn: "There are ten grammatical roles that put a noun in raf'.",
      lead: "Every role below answers one question: WHY is this word مرفوع? Once you know the role, you already know the state (Part 2) and, from there, the sign (Part 3). فاعل، مثلاً: الفاعل ↓ مرفوع ↓ علامة الرفع بحسب نوعه — a plain مفرد noun takes الضمة, a جمع مذكر سالم takes الواو, and so on, exactly as Part 3 already taught you."
    },

    definitionBreakdown: [
      {
        termAr: "الفاعل",
        termEn: "the doer",
        glossEn: "Lesson 4.2",
        explanation: "The noun that performs its verb's action — قَامَ زَيْدٌ, زَيْدٌ is الفاعل."
      },
      {
        termAr: "نائب الفاعل",
        termEn: "the substitute doer",
        glossEn: "Lesson 4.3",
        explanation: "المَفْعُولُ الَّذِي لَمْ يُسَمَّ فَاعِلُهُ — when the فاعل is dropped, another noun rises to take its grammatical place."
      },
      {
        termAr: "المبتدأ",
        termEn: "the topic",
        glossEn: "Lesson 4.4",
        explanation: "The مرفوع noun that opens a nominal sentence, free of any verbal عامل — الْحَمْدُ in الْحَمْدُ لِلَّهِ."
      },
      {
        termAr: "الخبر",
        termEn: "the comment",
        glossEn: "Lesson 4.5",
        explanation: "What completes the مبتدأ's sentence and gives it meaning — لِلَّهِ in الْحَمْدُ لِلَّهِ."
      },
      {
        termAr: "اسم كان، خبر إن، خبر لا النافية للجنس",
        termEn: "Nawasikh",
        glossEn: "a later, separate part",
        explanation: "Particles and verbs that ENTER a مبتدأ/خبر sentence and reshape its case pattern — a genuinely different mechanism from the four roles above, so it gets its own dedicated part rather than being folded in here."
      },
      {
        termAr: "التابع للمرفوع: النعت، العطف، التوكيد، البدل",
        termEn: "followers",
        glossEn: "a future lesson",
        explanation: "Four ways a word can simply COPY another word's case rather than earning it independently — not yet covered by the source pages in hand."
      }
    ],

    conceptTree: {
      root: { ar: "المرفوعات", en: "10 categories" },
      branches: [
        { ar: "الفاعل", en: "this lesson set", note: "Lesson 4.2" },
        { ar: "نائب الفاعل", en: "this lesson set", note: "Lesson 4.3" },
        { ar: "المبتدأ", en: "this lesson set", note: "Lesson 4.4" },
        { ar: "الخبر", en: "this lesson set", note: "Lesson 4.5" },
        { ar: "اسم كان، خبر إن، خبر لا", en: "النواسخ", note: "a later part" },
        { ar: "النعت، العطف، التوكيد، البدل", en: "التوابع", note: "a future lesson" }
      ]
    },

    example: {
      kind: "book-example",
      kindLabel: "The pattern ahead",
      arabic: "قَامَ زَيْدٌ",
      transliteration: "Qāma Zaydun",
      translation: "Zayd stood",
      explanation: "زَيْدٌ is the فاعل — the noun performing قَامَ's action. That ROLE is why it's مرفوع; Part 3 already taught you HOW رفع gets marked (الضمة الظاهرة here, since زيد is a plain مفرد noun). Lesson 4.2 gives you the role itself, properly.",
      contrast: {
        arabic: "زُرْتُ زَيْدًا",
        translation: "I visited Zayd",
        explanation: "Same name, a completely different job: here زَيْدًا receives the visiting, so it plays a different role — and takes منصوب instead. Role determines state; that's the whole idea behind this Part."
      }
    },

    quranExample: {
      surahAr: "الفاتحة",
      surahEn: "Al-Fatihah",
      ayahRef: "1:2",
      arabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
      translation: "All praise is due to Allah, Lord of the worlds.",
      notice: "الْحَمْدُ and لِلَّهِ are both مرفوعات in this sentence, but for two different reasons — الْحَمْدُ is المبتدأ (Lesson 4.4), and لِلَّهِ is functioning as خبره (Lesson 4.5). Same state, different roles. That's exactly the distinction this Part exists to teach."
    },

    practiceQuestions: [
      {
        id: "p1",
        type: "true-false",
        prompt: "Your book lists exactly ten مرفوعات categories.",
        correct: true,
        explanation: "Right — الفاعل، نائب الفاعل، المبتدأ، خبره، اسم كان وأخواتها، خبر إن وأخواتها، خبر لا النافية للجنس، and the four التابع types."
      },
      {
        id: "p2",
        type: "multiple-choice",
        prompt: "What determines a noun's i'rab STATE, according to this Part's model?",
        options: [
          { id: "a", labelEn: "Its grammatical ROLE in the sentence" },
          { id: "b", labelEn: "How long the word is" },
          { id: "c", labelEn: "Whether it appears in a Qur'anic verse" }
        ],
        correctOptionId: "a",
        explanation: "Right — ROLE (this Part) determines STATE (Part 2), which is then marked by a SIGN (Part 3)."
      },
      {
        id: "p3",
        type: "true-false",
        prompt: "كان وأخواتها and إن وأخواتها are covered in this lesson set.",
        correct: false,
        explanation: "No — they're reserved for a later, separate part, since they work by a genuinely different mechanism (entering and reshaping an existing مبتدأ/خبر sentence)."
      },
      {
        id: "p4",
        type: "multiple-choice",
        prompt: "In ﴿الْحَمْدُ لِلَّهِ﴾, what role does الْحَمْدُ play?",
        options: [
          { id: "a", labelAr: "المبتدأ" },
          { id: "b", labelAr: "الفاعل" },
          { id: "c", labelAr: "نائب الفاعل" }
        ],
        correctOptionId: "a",
        explanation: "Right — الْحَمْدُ opens the sentence with no verbal عامل acting on it: that's المبتدأ."
      }
    ],

    summary: [
      "Your book lists ten مرفوعات categories in total. This lesson set covers four of them: الفاعل، نائب الفاعل، المبتدأ، والخبر.",
      "اسم كان/خبر إن/خبر لا النافية للجنس (النواسخ) are reserved for their own later part; التابع للمرفوع isn't yet covered by the source pages in hand.",
      "From here on: ROLE → STATE → SIGN. Learn the role; you already know the rest.",
      "Next: الفاعل — the first, and most basic, of the four."
    ],

    completion: {
      titleAr: "المرفوعات: نظرة عامة",
      statement: "You have the map for this batch. Now: the roles themselves, one at a time."
    }
  },

  "4.2": {
    id: "4.2",
    steps: ["intro", "concept", "example", "quran", "notice", "practice", "challenge", "summary", "completion"],

    sourceNote: {
      status: "book-cited",
      label: "Sourced from your reference book — pages 75–76",
      detail: "الفَاعِلُ: هُوَ الاسْمُ المَرْفُوعُ الَّذِي ذُكِرَ قَبْلَهُ فِعْلُهُ [-كـ\"قَامَ زَيْدٌ\"-] أَوْ مَا فِي تَأْوِيلِ الفِعْلِ (p. 75), وَهُوَ عَلَى قِسْمَيْنِ: ظَاهِرٌ، وَمُضْمَرٌ — with the book's own ظاهر citations (وَجَاءَ المُعَذِّرُونَ [التوبة:90]، قَالَ رَجُلَانِ [المائدة:23]، يَقُومُ النَّاسُ [المطففين:6]) and its own مضمر examples on p. 76 (قَامَا / قَامُوا, ألف الاثنين and واو الجماعة as attached فاعل pronouns; the hidden ضمير مستتر in a bare قَامَ). أَحْكَامُ الفَاعِل (p. 76) are summarized at headline level only — its deeper morphological sub-cases are left for a future, more advanced part."
    },

    intro: {
      titleAr: "الفاعل",
      titleEn: "The Doer (Fa'il)",
      statement: "The first, and most basic, of the ten مرفوعات: the noun that performs its verb's own action."
    },

    objective: [
      "define الفاعل and recognize it after its verb",
      "tell ظاهر (an explicit noun) apart from مضمر (a pronoun) فاعل",
      "state the three headline rules (أحكام) that always hold for a فاعل"
    ],

    concept: {
      termAr: "الفاعل",
      kind: "book-cited",
      definitionAr: "الفَاعِلُ: هُوَ الاسْمُ المَرْفُوعُ الَّذِي ذُكِرَ قَبْلَهُ فِعْلُهُ، أَوْ مَا فِي تَأْوِيلِ الفِعْلِ.",
      definitionEn: "The فاعل is the مرفوع noun whose verb is mentioned before it — or whatever behaves like a verb.",
      lead: "Role: فاعل. State (Part 2): مرفوع, always. Sign (Part 3): whichever one fits its shape — a plain noun takes الضمة, a dual takes الألف, and so on."
    },

    definitionBreakdown: [
      {
        termAr: "الفاعل الظاهر",
        termEn: "an explicit noun",
        glossEn: "a visible noun doing the action",
        explanation: "قَالَ رَجُلَانِ [المائدة:23] — رَجُلَانِ is a مثنى فاعل. وَجَاءَ المُعَذِّرُونَ [التوبة:90] — a جمع مذكر سالم فاعل. Two different word-shapes, two different signs (Part 3), same role."
      },
      {
        termAr: "الفاعل المضمر",
        termEn: "a pronoun",
        glossEn: "attached or hidden",
        explanation: "قَامَا — the attached ألف الاثنين is الفاعل. قَامُوا — the attached واو الجماعة is الفاعل. A bare قَامَ on its own still has a فاعل — a hidden ضمير مستتر تقديره هو (\"he\"). A فاعل is never truly absent, even when nothing visible follows the verb."
      },
      {
        termAr: "أحكام الفاعل",
        termEn: "three fixed rules",
        glossEn: "always true, whatever the sentence",
        explanation: "(١) لا يُحذف — a فاعل is never dropped from its sentence. (٢) لا يتقدّم على فعله — it never comes before its own verb (that would make it a مبتدأ instead). (٣) يُؤنَّث الفعل إن كان الفاعل مؤنثًا — the verb itself picks up a feminine marker when its فاعل is feminine."
      }
    ],

    example: {
      kind: "book-example",
      kindLabel: "The book's own pair",
      arabic: "قَامَ زَيْدٌ",
      transliteration: "Qāma Zaydun",
      translation: "Zayd stood",
      explanation: "قَامَ: فعل ماضٍ. زَيْدٌ: فاعل مرفوع، وعلامة رفعه الضمة الظاهرة على آخره — exactly as your book's own أحكام section explains it.",
      contrast: {
        arabic: "قَامَ الزَّيْدَانِ",
        translation: "The two Zayds stood",
        explanation: "Same role, same state — but a different shape means a different sign (Part 3): a dual فاعل takes الألف, not الضمة."
      }
    },

    quranExample: {
      surahAr: "المطففين",
      surahEn: "Al-Mutaffifin",
      ayahRef: "83:6",
      arabic: "يَوْمَ يَقُومُ النَّاسُ لِرَبِّ الْعَالَمِينَ",
      translation: "The Day when mankind will stand before the Lord of the worlds.",
      notice: "The book's own citation (p. 75) for a ظاهر فاعل on a plain مفرد noun in a مضارع sentence. النَّاسُ performs يَقُومُ's action — that's الفاعل — and it's مرفوع بالضمة, exactly the default sign Part 3 taught you.",
      wordNotes: {
        "83-6-w3": { conceptLabel: "فاعل مرفوع", explanation: "النَّاسُ — الفاعل, يقوم's own doer, مرفوع بالضمة الظاهرة." }
      }
    },

    noticeInteraction: {
      type: "word-tap",
      ayahRef: "83:6",
      instanceId: "4.2-notice",
      promptContext: "Al-Mutaffifin 83:6",
      question: "Tap the word that is الفاعل here.",
      correctWordId: "83-6-w3",
      correctFeedback: "Right — النَّاسُ performs يَقُومُ's action, so it's الفاعل, مرفوع بالضمة.",
      incorrectFeedback: "Not quite — check which word comes AFTER the verb يَقُومُ and is doing its action.",
      wordNotes: {
        "83-6-w2": { conceptLabel: "الفعل", explanation: "يَقُومُ — الفعل المضارع itself; a verb isn't its own فاعل." },
        "83-6-w3": { conceptLabel: "فاعل مرفوع", explanation: "النَّاسُ — الفاعل, يقوم's own doer, مرفوع بالضمة الظاهرة." }
      }
    },

    practiceQuestions: [
      {
        id: "p1",
        type: "true-false",
        prompt: "A فاعل can come before its own verb.",
        correct: false,
        explanation: "No — a فاعل always follows its verb. A noun that precedes a verb and acts on it is a مبتدأ instead."
      },
      {
        id: "p2",
        type: "multiple-choice",
        prompt: "In قَامُوا, what is الفاعل?",
        options: [
          { id: "a", labelAr: "واو الجماعة (attached)" },
          { id: "b", labelAr: "قَامُ (the verb stem)" },
          { id: "c", labelEn: "There isn't one" }
        ],
        correctOptionId: "a",
        explanation: "Right — the attached واو الجماعة is a مضمر فاعل, standing for \"they.\""
      },
      {
        id: "p3",
        type: "true-false",
        prompt: "A verb whose فاعل is feminine must itself carry a feminine marker.",
        correct: true,
        explanation: "Right — one of the three fixed أحكام: يُؤنَّث الفعل إن كان الفاعل مؤنثًا."
      },
      {
        id: "p4",
        type: "multiple-choice",
        prompt: "﴿قَالَ رَجُلَانِ﴾ [المائدة:23] — what shape is this فاعل?",
        options: [
          { id: "a", labelAr: "مثنى" },
          { id: "b", labelAr: "جمع مذكر سالم" },
          { id: "c", labelAr: "مفرد" }
        ],
        correctOptionId: "a",
        explanation: "Right — رَجُلَانِ is dual (مثنى); Part 3 already taught you it takes الألف, not الضمة."
      }
    ],

    quranChallenge: {
      surahAr: "المائدة",
      surahEn: "Al-Ma'idah",
      ayahRef: "5:23",
      arabic: "قَالَ رَجُلَانِ",
      translation: "Two men said…",
      question: "رَجُلَانِ is الفاعل here. Which sign marks its رفع?",
      options: [
        { id: "alif", labelAr: "الألف" },
        { id: "damma", labelAr: "الضمة" },
        { id: "waw", labelAr: "الواو" }
      ],
      correctOptionId: "alif",
      explanation: "Right — رَجُلَانِ is مثنى, so it takes الألف, رفع's substitute sign for the dual, exactly as Part 3 taught."
    },

    summary: [
      "الفاعل: الاسم المرفوع الذي ذُكر قبله فعله — the noun that performs its verb's action, always after it.",
      "ظاهر (an explicit noun, in any of رفع's shapes) or مضمر (attached, like ألف الاثنين/واو الجماعة, or hidden, like a bare هو).",
      "Three fixed rules: never dropped, never fronted, and the verb agrees in gender when الفاعل is feminine.",
      "Next: what happens when الفاعل is dropped from the sentence entirely."
    ],

    completion: {
      titleAr: "الفاعل",
      statement: "One role down. Next: what fills the فاعل's spot when it's missing."
    }
  },

  "4.3": {
    id: "4.3",
    steps: ["intro", "concept", "example", "quran", "notice", "practice", "challenge", "summary", "completion"],

    sourceNote: {
      status: "book-cited",
      label: "Sourced from your reference book — pages 80–83",
      detail: "المفعول الذي لم يسم فاعله (نائب الفاعل): الاسْمُ المَرْفُوعُ الَّذِي لَمْ يُذْكَرْ مَعَهُ فَاعِلُهُ، وَأُقِيمَ مَقَامَهُ، فَصَارَ مَرْفُوعًا بَعْدَ أَنْ كَانَ مَنْصُوبًا، وَصَارَ عُمْدَةً بَعْدَ أَنْ كَانَ فَضْلَةً (p. 80), with \"لِمَا يَنُوبُ عَنِ الفَاعِلِ\" (p. 83) naming four categories: المفعول به، الظرف، الجار والمجرور، والمصدر. Of the book's own citations for these four, المصدر's — فَإِذَا نُفِخَ فِي الصُّورِ نَفْخَةً وَاحِدَةً [الحاقة:13] — was the clearest and most confidently legible in the supplied image, so it anchors this lesson's worked example and Notice. The جار والمجرور Challenge below (الأعراف:149) is QURRA's own citation illustrating that same book-stated category, not a reproduction of the book's own example for it, which wasn't confidently legible on the page — see that citation's note in the Challenge below. The deeper morphological detail of HOW a verb is reshaped for the passive (pp. 81–82, تغيير الفعل الماضي/المضارع لبناء المجهول) is intentionally left out here — that's Sarf (morphology), not the noun-role system this Part teaches."
    },

    intro: {
      titleAr: "نائب الفاعل",
      titleEn: "The Substitute Doer",
      statement: "Sometimes a sentence names the ACTION without naming who did it. Arabic still needs a مرفوع word to anchor that sentence — so something else steps into الفاعل's empty seat."
    },

    objective: [
      "explain WHY نائب الفاعل exists (a dropped فاعل, and the verb reshaped to match)",
      "name the four categories that can rise to fill الفاعل's seat",
      "recognize نائب الفاعل in a Qur'anic sentence"
    ],

    concept: {
      termAr: "نائب الفاعل",
      kind: "book-cited",
      definitionAr: "الاسْمُ المَرْفُوعُ الَّذِي لَمْ يُذْكَرْ مَعَهُ فَاعِلُهُ، وَأُقِيمَ مَقَامَهُ، فَصَارَ مَرْفُوعًا بَعْدَ أَنْ كَانَ مَنْصُوبًا.",
      definitionEn: "The مرفوع noun whose own فاعل went unmentioned, and which was raised to take its place — becoming مرفوع after having been منصوب.",
      lead: "Role: نائب الفاعل. State (Part 2): مرفوع — literally promoted into الفاعل's old seat. Sign (Part 3): the same system, applied to whatever word now sits there."
    },

    definitionBreakdown: [
      {
        termAr: "لماذا يُحذف الفاعل؟",
        termEn: "why drop the doer at all",
        glossEn: "the sentence still needs an anchor",
        explanation: "The doer might be unknown, obvious from context, or simply unimportant to the point being made. Arabic doesn't just leave a gap — it reshapes the verb (مبني للمجهول) and promotes another element into رفع so the sentence still has its anchor."
      },
      {
        termAr: "لما ينوب عن الفاعل",
        termEn: "four categories",
        glossEn: "p. 83",
        explanation: "المفعول به الأول (a direct object, promoted), الظرف (a time/place expression), الجار والمجرور (a preposition phrase), والمصدر (the verb's own noun-form). Whichever of these is present takes the seat — and becomes مرفوع the moment it does."
      }
    ],

    conceptTree: {
      root: { ar: "نائب الفاعل", en: "4 categories" },
      branches: [
        { ar: "المفعول به", en: "a direct object, promoted", note: "p. 83" },
        { ar: "الظرف", en: "a time/place expression", note: "p. 83" },
        { ar: "الجار والمجرور", en: "a preposition phrase", note: "p. 83" },
        { ar: "المصدر", en: "the verb's own noun-form", note: "p. 83" }
      ]
    },

    example: {
      kind: "book-example",
      kindLabel: "A before-and-after pair",
      arabic: "ضَرَبَ زيدٌ عَمْرًا",
      transliteration: "Ḍaraba Zaydun 'Amran",
      translation: "Zayd hit 'Amr",
      explanation: "The normal sentence: زيدٌ is الفاعل (مرفوع), عَمْرًا is المفعول به (منصوب).",
      contrast: {
        arabic: "ضُرِبَ عَمْرٌو",
        translation: "'Amr was hit",
        explanation: "Drop زيدٌ, and the verb reshapes (ضَرَبَ → ضُرِبَ). عَمْرٌو — the old المفعول به — is promoted into the empty seat: منصوبًا أصبح مرفوعًا, exactly as your book's definition states."
      }
    },

    quranExample: {
      surahAr: "الحاقة",
      surahEn: "Al-Haqqah",
      ayahRef: "69:13",
      arabic: "فَإِذَا نُفِخَ فِي الصُّورِ نَفْخَةً وَاحِدَةً",
      translation: "Then when the Horn is blown with one blast.",
      notice: "The book's own citation (p. 83) for نائب الفاعل as المصدر. نُفِخَ is مبني للمجهول (no named blower); نَفْخَةً — the verb's own noun-form — is promoted into رفع to anchor the sentence: نائب الفاعل مرفوع بالضمة.",
      wordNotes: {
        "69-13-w5": { conceptLabel: "نائب الفاعل مرفوع", explanation: "نَفْخَةً — المصدر, promoted into رفع since نُفِخَ's own فاعل went unmentioned." }
      }
    },

    noticeInteraction: {
      type: "word-tap",
      ayahRef: "69:13",
      instanceId: "4.3-notice",
      promptContext: "Al-Haqqah 69:13",
      question: "Tap the word that is نائب الفاعل here.",
      correctWordId: "69-13-w5",
      correctFeedback: "Right — نَفْخَةً is المصدر, promoted into رفع because نُفِخَ's own doer went unnamed.",
      incorrectFeedback: "Not quite — نُفِخَ itself is the reshaped verb (مبني للمجهول), not its own نائب. Look at what comes right after it.",
      wordNotes: {
        "69-13-w2": { conceptLabel: "فعل مبني للمجهول", explanation: "نُفِخَ — the verb, reshaped since its فاعل (whoever blows the Horn) went unnamed." },
        "69-13-w5": { conceptLabel: "نائب الفاعل مرفوع", explanation: "نَفْخَةً — المصدر, promoted into رفع since نُفِخَ's own فاعل went unمentioned." }
      }
    },

    practiceQuestions: [
      {
        id: "p1",
        type: "true-false",
        prompt: "نائب الفاعل is always منصوب, just like the object it used to be.",
        correct: false,
        explanation: "No — the whole point is that it's PROMOTED: it becomes مرفوع after having been منصوب (or whatever its old role was)."
      },
      {
        id: "p2",
        type: "multiple-choice",
        prompt: "How many categories can rise to become نائب الفاعل, per your book?",
        options: [
          { id: "a", labelEn: "4" },
          { id: "b", labelEn: "2" },
          { id: "c", labelEn: "6" }
        ],
        correctOptionId: "a",
        explanation: "Right — المفعول به، الظرف، الجار والمجرور، والمصدر."
      },
      {
        id: "p3",
        type: "true-false",
        prompt: "In ﴿فَإِذَا نُفِخَ فِي الصُّورِ نَفْخَةً وَاحِدَةً﴾, نَفْخَةً is المصدر acting as نائب الفاعل.",
        correct: true,
        explanation: "Right — exactly the book's own citation for that category."
      },
      {
        id: "p4",
        type: "multiple-choice",
        prompt: "Why does Arabic promote something into الفاعل's seat at all?",
        options: [
          { id: "a", labelEn: "The sentence still needs a مرفوع anchor" },
          { id: "b", labelEn: "It's optional stylistic decoration" },
          { id: "c", labelEn: "Every verb requires two فاعل-shaped words" }
        ],
        correctOptionId: "a",
        explanation: "Right — dropping الفاعل doesn't remove the sentence's need for an anchor; something else has to fill that grammatical seat."
      }
    ],

    quranChallenge: {
      surahAr: "الأعراف",
      surahEn: "Al-A'raf",
      ayahRef: "7:149",
      arabic: "وَلَمَّا سُقِطَ فِي أَيْدِيهِمْ",
      translation: "And when regret overcame them…",
      question: "سُقِطَ is مبني للمجهول here, with no named doer. Which category from this lesson's list does في أَيْدِيهِمْ (a preposition phrase) illustrate?",
      options: [
        { id: "jarr", labelAr: "الجار والمجرور" },
        { id: "masdar", labelAr: "المصدر" },
        { id: "zarf", labelAr: "الظرف" }
      ],
      correctOptionId: "jarr",
      explanation: "Right — الجار والمجرور. (This particular citation is QURRA's own pick, not a reproduction of the book's own example for this category — see this lesson's source note.)"
    },

    summary: [
      "نائب الفاعل: a مرفوع noun promoted into الفاعل's empty seat, once the true فاعل goes unmentioned and its verb reshapes (مبني للمجهول).",
      "Four categories can fill that seat: المفعول به، الظرف، الجار والمجرور، والمصدر.",
      "Same STATE as الفاعل (مرفوع) — its SIGN follows Part 3's system exactly, based on whatever word now occupies the role.",
      "Next: المبتدأ — a مرفوع role that needs no verb at all."
    ],

    completion: {
      titleAr: "نائب الفاعل",
      statement: "Two verb-linked roles done. Next: the noun-sentence roles — starting with المبتدأ."
    }
  },

  "4.4": {
    id: "4.4",
    steps: ["intro", "concept", "example", "quran", "notice", "practice", "challenge", "summary", "completion"],

    sourceNote: {
      status: "book-cited",
      label: "Sourced from your reference book — pages 84–85",
      detail: "المُبْتَدَأُ: هُوَ الاسْمُ المَرْفُوعُ العَارِي عَنِ العَوَامِلِ اللَّفْظِيَّةِ (p. 84) — رافعه عامل معنوي، هو الابتداء, on two kinds: 1) عامل في الاسم إلا أن يكون في موضع الابتداء (مبتدأ زيد-type), 2) عامل في المضارع كذلك (يضرب-type). وَهُوَ قِسْمَانِ: ظَاهِرٌ، وَمُضْمَرٌ (p. 85), plus \"بعض مسوغات الابتداء بالنكرة\" (when a نكرة can still open a sentence — p. 85's list of eight conditions) is summarized at headline level only, since its full case-by-case detail belongs to a more advanced treatment than this foundational lesson needs."
    },

    intro: {
      titleAr: "المبتدأ",
      titleEn: "The Topic (Mubtada')",
      statement: "الفاعل and نائب الفاعل both need a verb. المبتدأ doesn't — it opens a sentence entirely on its own."
    },

    objective: [
      "define المبتدأ and recognize why it needs no verb to be مرفوع",
      "tell ظاهر from مضمر مبتدأ",
      "recognize المبتدأ in a Qur'anic sentence"
    ],

    concept: {
      termAr: "المبتدأ",
      kind: "book-cited",
      definitionAr: "المُبْتَدَأُ: هُوَ الاسْمُ المَرْفُوعُ العَارِي عَنِ العَوَامِلِ اللَّفْظِيَّةِ.",
      definitionEn: "The مبتدأ is the مرفوع noun free of any spoken (verbal) grammatical trigger.",
      lead: "Role: المبتدأ. State (Part 2): مرفوع — but for a genuinely different reason than الفاعل's. Nothing spoken makes it مرفوع; the raising trigger (عامل) here is معنوي — the very act of using it to open a sentence (الابتداء)."
    },

    definitionBreakdown: [
      {
        termAr: "العامل المعنوي",
        termEn: "an unspoken trigger",
        glossEn: "الابتداء itself",
        explanation: "الفاعل is مرفوع because a verb precedes it — a spoken (لفظي) trigger. المبتدأ has no such word acting on it; what makes it مرفوع is simply the ACT of opening a sentence with it (الابتداء) — a معنوي (conceptual) trigger, not a visible one."
      },
      {
        termAr: "ظاهر ومضمر",
        termEn: "explicit or pronoun",
        glossEn: "the same two-way split as الفاعل",
        explanation: "الْحَمْدُ لِلَّهِ — الْحَمْدُ is a ظاهر مبتدأ. أَنْتَ مُجْتَهِدٌ — أَنْتَ is a مضمر مبتدأ (a detached pronoun, standing on its own)."
      }
    ],

    example: {
      kind: "book-example",
      kindLabel: "A worked pair",
      arabic: "زَيْدٌ قَائِمٌ",
      transliteration: "Zaydun qā'imun",
      translation: "Zayd is standing",
      explanation: "زَيْدٌ opens the sentence with no verb acting on it at all — that's المبتدأ, مرفوع بالضمة.",
      contrast: {
        arabic: "أَنْتَ مُجْتَهِدٌ",
        translation: "You are hard-working",
        explanation: "Same role, but مضمر this time: أَنْتَ is a detached pronoun functioning as المبتدأ, not an explicit noun."
      }
    },

    quranExample: {
      surahAr: "الفاتحة",
      surahEn: "Al-Fatihah",
      ayahRef: "1:2",
      arabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
      translation: "All praise is due to Allah, Lord of the worlds.",
      notice: "الْحَمْدُ opens the sentence with nothing spoken acting on it — that's المبتدأ, مرفوع بالضمة, raised by الابتداء itself rather than by any verb.",
      wordNotes: {
        "1-2-w1": { conceptLabel: "مبتدأ مرفوع", explanation: "الْحَمْدُ — المبتدأ, مرفوع بالضمة الظاهرة, raised by العامل المعنوي (الابتداء)، لا بفعل." }
      }
    },

    noticeInteraction: {
      type: "word-tap",
      ayahRef: "1:2",
      instanceId: "4.4-notice",
      promptContext: "Al-Fatihah 1:2",
      question: "Tap the word that is المبتدأ here.",
      correctWordId: "1-2-w1",
      correctFeedback: "Right — الْحَمْدُ opens the sentence with no verb acting on it. That's المبتدأ.",
      incorrectFeedback: "Not quite — لِلَّهِ is a جار ومجرور, not the sentence's opening noun. Look at the very first word.",
      wordNotes: {
        "1-2-w1": { conceptLabel: "مبتدأ مرفوع", explanation: "الْحَمْدُ — المبتدأ, مرفوع بالضمة الظاهرة." },
        "1-2-w2": { conceptLabel: "جار ومجرور", explanation: "لِلَّهِ — not المبتدأ itself; it will turn out to be الخبر, next lesson." }
      }
    },

    practiceQuestions: [
      {
        id: "p1",
        type: "true-false",
        prompt: "المبتدأ is مرفوع because a verb precedes it, just like الفاعل.",
        correct: false,
        explanation: "No — المبتدأ's رفع comes from a معنوي (unspoken) trigger, الابتداء itself, not from any verb."
      },
      {
        id: "p2",
        type: "multiple-choice",
        prompt: "In أَنْتَ مُجْتَهِدٌ, what is المبتدأ?",
        options: [
          { id: "a", labelAr: "أَنْتَ" },
          { id: "b", labelAr: "مُجْتَهِدٌ" },
          { id: "c", labelEn: "There isn't one" }
        ],
        correctOptionId: "a",
        explanation: "Right — أَنْتَ is a مضمر مبتدأ, a detached pronoun opening the sentence."
      },
      {
        id: "p3",
        type: "true-false",
        prompt: "المبتدأ can be either ظاهر or مضمر, exactly like الفاعل.",
        correct: true,
        explanation: "Right — the same explicit/pronoun split applies to both roles."
      }
    ],

    quranChallenge: {
      surahAr: "الإخلاص",
      surahEn: "Al-Ikhlas",
      ayahRef: "112:2",
      arabic: "اللَّهُ الصَّمَدُ",
      translation: "Allah, the Eternal Refuge.",
      question: "Which word is المبتدأ here?",
      options: [
        { id: "allah", labelAr: "اللَّهُ" },
        { id: "samad", labelAr: "الصَّمَدُ" }
      ],
      correctOptionId: "allah",
      explanation: "Right — اللَّهُ opens the sentence with nothing spoken acting on it. الصَّمَدُ is its خبر — next lesson's role."
    },

    summary: [
      "المبتدأ: الاسم المرفوع العاري عن العوامل اللفظية — مرفوع by a معنوي trigger (الابتداء itself), not by any verb.",
      "ظاهر (an explicit noun) or مضمر (a detached pronoun) — the same split you already know from الفاعل.",
      "A مبتدأ never stands alone in meaning — it always needs a خبر to complete its sentence.",
      "Next: الخبر — what completes المبتدأ, and the different shapes it can take."
    ],

    completion: {
      titleAr: "المبتدأ",
      statement: "المبتدأ opens the sentence. Next: what completes it."
    }
  },

  "4.5": {
    id: "4.5",
    steps: ["intro", "concept", "example", "quran", "notice", "practice", "challenge", "summary", "completion"],

    sourceNote: {
      status: "book-cited",
      label: "Sourced from your reference book — pages 87–90",
      detail: "الخَبَرُ: هُوَ الجُزْءُ الَّذِي تَتِمُّ بِهِ الفَائِدَةُ مَعَ المُبْتَدَأِ (p. 87/88), divided into الخبر المفرد (p. 88) and الخبر شبه الجملة / الجملة (pp. 88–89), with the book's own Qur'anic citations for the جملة/شبه الجملة types: وَاللَّهُ يَقْبِضُ وَيَبْسُطُ [البقرة:245], اللَّهُ يَتَوَفَّى الأَنفُسَ [الزمر:42] (جملة فعلية), and وَالرَّكْبُ أَسْفَلَ مِنكُمْ [الأنفال:42] (شبه جملة ظرف), both on p. 88–89. \"بعض أحكام خبر المبتدأ\" (p. 90, rules about when خبر must precede its مبتدأ) is summarized at headline level only — its case-by-case detail belongs to a more advanced treatment."
    },

    intro: {
      titleAr: "الخبر",
      titleEn: "The Comment (Khabar)",
      statement: "المبتدأ alone isn't a complete thought. الخبر is what finishes it — and it can take three different shapes."
    },

    objective: [
      "define الخبر and its job relative to المبتدأ",
      "name and recognize its three shapes: مفرد، جملة، شبه جملة",
      "recognize الخبر in a Qur'anic sentence, whatever shape it takes"
    ],

    concept: {
      termAr: "الخبر",
      kind: "book-cited",
      definitionAr: "الخَبَرُ: هُوَ الجُزْءُ الَّذِي تَتِمُّ بِهِ الفَائِدَةُ مَعَ المُبْتَدَأِ.",
      definitionEn: "The خبر is the part that, together with the مبتدأ, completes the sentence's meaning.",
      lead: "Role: الخبر. State (Part 2): مرفوع — but only when it's a single word (مفرد). When it's a whole جملة or a شبه جملة (a prepositional or adverbial phrase), رفع applies to its POSITION in the sentence (في محل رفع), not to a visible word-ending — there's simply no single word left to mark."
    },

    definitionBreakdown: [
      {
        termAr: "الخبر المفرد",
        termEn: "a single word",
        glossEn: "genuinely مرفوع, with a visible sign",
        explanation: "زَيْدٌ قَائِمٌ — قَائِمٌ is a single word, مرفوع بالضمة exactly like any other مرفوع noun. This is the only خبر shape Part 3's signs directly apply to."
      },
      {
        termAr: "الخبر شبه الجملة",
        termEn: "a phrase",
        glossEn: "ظرف or جار ومجرور",
        explanation: "وَالرَّكْبُ أَسْفَلَ مِنكُمْ [الأنفال:42] — أَسْفَلَ (a ظرف) stands in for the خبر. الْحَمْدُ لِلَّهِ — لِلَّهِ (جار ومجرور) does the same job. Neither is a single مرفوع word — the phrase as a whole holds الخبر's position (في محل رفع خبر)."
      },
      {
        termAr: "الخبر الجملة",
        termEn: "a whole clause",
        glossEn: "اسمية or فعلية",
        explanation: "وَاللَّهُ يَقْبِضُ وَيَبْسُطُ [البقرة:245] — the verbal clause يَقْبِضُ وَيَبْسُطُ is itself الخبر (خبر جملة فعلية), sitting في محل رفع as a whole."
      }
    ],

    example: {
      kind: "book-example",
      kindLabel: "The three shapes, side by side",
      arabic: "زَيْدٌ قَائِمٌ",
      transliteration: "Zaydun qā'imun",
      translation: "Zayd is standing",
      explanation: "قَائِمٌ — الخبر المفرد, a single مرفوع word.",
      contrast: {
        arabic: "زَيْدٌ عِنْدَكَ",
        translation: "Zayd is with you",
        explanation: "عِنْدَكَ — الخبر شبه الجملة (a ظرف this time). Nothing here is visibly مرفوع; the whole phrase HOLDS رفع's position instead, في محل رفع خبر."
      }
    },

    quranExample: {
      surahAr: "الأنفال",
      surahEn: "Al-Anfal",
      ayahRef: "8:42",
      arabic: "وَالرَّكْبُ أَسْفَلَ مِنكُمْ",
      translation: "…while the caravan was lower [in position] than you.",
      notice: "The book's own citation (p. 89) for الخبر شبه الجملة. الرَّكْبُ is المبتدأ; أَسْفَلَ مِنكُمْ (a ظرف phrase) completes it — في محل رفع خبر, with no single word visibly مرفوع.",
      wordNotes: {
        "8-42-w2": { conceptLabel: "خبر شبه جملة", explanation: "أَسْفَلَ — ظرف, الخبر's position-holder, في محل رفع." }
      }
    },

    noticeInteraction: {
      type: "word-tap",
      ayahRef: "8:42",
      instanceId: "4.5-notice",
      promptContext: "Al-Anfal 8:42",
      question: "Tap the word that carries الخبر's position here.",
      correctWordId: "8-42-w2",
      correctFeedback: "Right — أَسْفَلَ (a ظرف) is الخبر's position-holder, في محل رفع.",
      incorrectFeedback: "Not quite — الرَّكْبُ is المبتدأ itself, not what completes it. Look at what comes after.",
      wordNotes: {
        "8-42-w1": { conceptLabel: "مبتدأ مرفوع", explanation: "الرَّكْبُ — المبتدأ, مرفوع بالضمة." },
        "8-42-w2": { conceptLabel: "خبر شبه جملة", explanation: "أَسْفَلَ — ظرف, الخبر's position-holder, في محل رفع." }
      }
    },

    practiceQuestions: [
      {
        id: "p1",
        type: "multiple-choice",
        prompt: "How many shapes can الخبر take, per your book?",
        options: [
          { id: "a", labelEn: "3 — مفرد, جملة, شبه جملة" },
          { id: "b", labelEn: "1 — always a single word" },
          { id: "c", labelEn: "2 — مفرد and جملة only" }
        ],
        correctOptionId: "a",
        explanation: "Right — الخبر المفرد، الخبر الجملة (اسمية أو فعلية)، والخبر شبه الجملة (ظرف أو جار ومجرور)."
      },
      {
        id: "p2",
        type: "true-false",
        prompt: "Every خبر has a visible رفع sign on it, exactly like الفاعل does.",
        correct: false,
        explanation: "No — only الخبر المفرد does. A جملة or شبه جملة خبر holds رفع's POSITION (في محل رفع) with no single word to mark."
      },
      {
        id: "p3",
        type: "true-false",
        prompt: "﴿وَاللَّهُ يَقْبِضُ وَيَبْسُطُ﴾ [البقرة:245] — يَقْبِضُ وَيَبْسُطُ together are الخبر, a جملة فعلية.",
        correct: true,
        explanation: "Right — exactly the book's own citation for that shape (p. 88–89)."
      },
      {
        id: "p4",
        type: "multiple-choice",
        prompt: "﴿وَالرَّكْبُ أَسْفَلَ مِنكُمْ﴾ — what shape is this خبر?",
        options: [
          { id: "a", labelEn: "شبه جملة (a ظرف)" },
          { id: "b", labelEn: "مفرد" },
          { id: "c", labelEn: "جملة اسمية" }
        ],
        correctOptionId: "a",
        explanation: "Right — أَسْفَلَ مِنكُمْ is a ظرف phrase, holding الخبر's position."
      }
    ],

    quranChallenge: {
      surahAr: "البقرة",
      surahEn: "Al-Baqarah",
      ayahRef: "2:245",
      arabic: "وَاللَّهُ يَقْبِضُ وَيَبْسُطُ",
      translation: "…while it is Allah who withholds and grants abundance…",
      question: "يَقْبِضُ وَيَبْسُطُ together are الخبر here. Which shape is that?",
      options: [
        { id: "verbal", labelAr: "جملة فعلية" },
        { id: "single", labelAr: "خبر مفرد" },
        { id: "phrase", labelAr: "شبه جملة" }
      ],
      correctOptionId: "verbal",
      explanation: "Right — a full verbal clause (جملة فعلية) is الخبر here, في محل رفع as a whole."
    },

    summary: [
      "الخبر: the part that, with المبتدأ, completes the sentence's meaning.",
      "Three shapes: الخبر المفرد (genuinely مرفوع, a visible sign), الخبر شبه الجملة (ظرف أو جار ومجرور, في محل رفع), and الخبر الجملة (اسمية أو فعلية, في محل رفع).",
      "Only الخبر المفرد takes one of Part 3's visible signs directly — the other two shapes hold رفع's POSITION instead.",
      "This closes the first batch of الاسم المعرب — المرفوعات proper. Next: المنصوبات, once the source pages for it are in hand."
    ],

    completion: {
      titleAr: "الخبر",
      statement: "Four مرفوعات roles complete — الفاعل، نائب الفاعل، المبتدأ، والخبر. المنصوبات is next, once its source pages arrive."
    }
  },

  /* ========================================================================
     PART 4 — الاسم المعرب (batch 2: المنصوبات)
     Source: reference book pp. 136–168 (بَابُ المَنْصُوبَاتِ مِنَ الأَسْمَاءِ
     through المستثنى). الاشتغال (p. 138) is intentionally left out of this
     foundational batch — it's a narrow, advanced construction (تنازع
     العمل بين عاملين) that doesn't fit the ROLE → STATE → SIGN model this
     Part teaches, and isn't one of the fifteen headline المنصوبات
     categories anyway. ظن وأخواتها was not included in the pages supplied
     for this batch (the user noted it would arrive separately).
     ======================================================================== */

  "4.6": {
    id: "4.6",
    steps: ["intro", "concept", "example", "quran", "practice", "summary", "completion"],

    sourceNote: {
      status: "book-cited",
      label: "Sourced from your reference book — pages 136–137",
      detail: "المَنْصُوبَاتُ خَمْسَةَ عَشَرَ: وَهِيَ: المَفْعُولُ بِهِ، وَالمَصْدَرُ -وَيُسَمَّى المَفْعُولَ المُطْلَقَ-، وَظَرْفُ الزَّمَانِ، وَظَرْفُ المَكَانِ -وَيُسَمَّى المَفْعُولَ فِيهِ-، وَالحَالُ، وَالتَّمْيِيزُ، وَالمُسْتَثْنَى، وَاسْمُ (لَيْسَ)، وَخَبَرُ (كَانَ)، وَالمَفْعُولُ لِأَجْلِهِ، وَالمَفْعُولُ مَعَهُ، وَخَبَرُ (إِنَّ) وَأَخَوَاتِهَا، وَاسْمُ (لَا) الَّتِي لِنَفْيِ الجِنْسِ، وَالتَّابِعُ لِلْمَنْصُوبِ، وَهُوَ أَرْبَعَةُ أَشْيَاءَ: النَّعْتُ، وَالعَطْفُ، وَالتَّوْكِيدُ، وَالبَدَلُ — the book's own opening line, listing all fifteen منصوبات categories at once."
    },

    intro: {
      titleAr: "المنصوبات: نظرة عامة",
      titleEn: "Mansubat: an Overview",
      statement: "Four مرفوعات roles done. Now the much larger half of الاسم المعرب: the roles that take نصب."
    },

    objective: [
      "state how many منصوبات categories your book lists",
      "name which ones this lesson set covers now, and which are reserved for later",
      "recognize that نصب, like رفع, is earned by a specific ROLE, not assigned at random"
    ],

    concept: {
      termAr: "المنصوبات",
      kind: "book-cited",
      definitionAr: "المَنْصُوبَاتُ خَمْسَةَ عَشَرَ.",
      definitionEn: "There are fifteen grammatical roles that put a noun in nasb.",
      lead: "Same logic as Part 4's first half: ROLE → STATE → SIGN. Eight of these fifteen are genuinely new roles this lesson set will cover; the rest are either Nawasikh (reserved for Part 5) or التابع (a future lesson)."
    },

    definitionBreakdown: [
      {
        termAr: "ثمانية أدوار جديدة",
        termEn: "this lesson set",
        glossEn: "Lessons 4.7–4.14",
        explanation: "المفعول به، المفعول المطلق (المصدر)، المفعول فيه (ظرفا الزمان والمكان)، المفعول لأجله، المفعول معه، المنادى، الحال، والتمييز، ثم المستثنى — eight new roles, each answering a different WHY for نصب."
      },
      {
        termAr: "محجوز لاحقًا",
        termEn: "reserved for later",
        glossEn: "Part 5 and a future lesson",
        explanation: "اسم لَيْسَ، خَبَرُ كَانَ، خَبَرُ إِنَّ، واسم لا النافية للجنس هي النواسخ — جزء من Part 5. التابع للمنصوب (النعت، العطف، التوكيد، البدل) تابعٌ أيضًا لنفس الدرس المستقبلي المذكور في خريطة المرفوعات."
      }
    ],

    conceptTree: {
      root: { ar: "المنصوبات", en: "15 categories" },
      branches: [
        { ar: "المفعول به، المطلق، فيه", en: "this lesson set", note: "Lessons 4.7–4.9" },
        { ar: "لأجله، معه، المنادى", en: "this lesson set", note: "Lessons 4.10–4.11" },
        { ar: "الحال، التمييز، المستثنى", en: "this lesson set", note: "Lessons 4.12–4.14" },
        { ar: "اسم ليس، خبر كان، خبر إن، اسم لا", en: "النواسخ", note: "a later part" },
        { ar: "النعت، العطف، التوكيد، البدل", en: "التوابع", note: "a future lesson" }
      ]
    },

    example: {
      kind: "book-example",
      kindLabel: "Eight roles, one state",
      arabic: "ضَرَبْتُ زَيْدًا ضَرْبًا شَدِيدًا يَوْمَ الْجُمُعَةِ",
      transliteration: "Ḍarabtu Zaydan ḍarban shadīdan yawma l-jumu'ati",
      translation: "I struck Zayd a severe blow on Friday",
      explanation: "Three different منصوبات roles in one sentence: زَيْدًا (مفعول به — who was struck), ضَرْبًا (مفعول مطلق — the verb's own noun-form, for emphasis), يَوْمَ (ظرف زمان — when). Three different WHYs, the same نصب state.",
      contrast: {
        arabic: "قَامَ زَيْدٌ",
        translation: "Zayd stood",
        explanation: "Compare Lesson 4.2's own example: زَيْدٌ there was مرفوع (الفاعل). Same name, same action-family — but a completely different grammatical job changes everything."
      }
    },

    quranExample: {
      surahAr: "النساء",
      surahEn: "An-Nisa",
      ayahRef: "4:164",
      arabic: "وَكَلَّمَ اللَّهُ مُوسَىٰ تَكْلِيمًا",
      translation: "…and Allah spoke to Moses with [direct] speech.",
      notice: "مُوسَىٰ (مفعول به) وتَكْلِيمًا (مفعول مطلق) كلاهما منصوبان — لكن لسببين مختلفين تمامًا. ستتعلم كل واحد منهما في درس مستقل."
    },

    practiceQuestions: [
      {
        id: "p1",
        type: "true-false",
        prompt: "Your book lists exactly fifteen منصوبات categories.",
        correct: true,
        explanation: "Right — though several of them (النواسخ، التوابع) are reserved for later parts or lessons."
      },
      {
        id: "p2",
        type: "multiple-choice",
        prompt: "How many new roles does THIS lesson set cover?",
        options: [
          { id: "a", labelEn: "8" },
          { id: "b", labelEn: "15" },
          { id: "c", labelEn: "4" }
        ],
        correctOptionId: "a",
        explanation: "Right — المفعول به، المطلق، فيه، لأجله، معه، المنادى، الحال، والتمييز، plus المستثنى makes nine lessons in total covering eight-plus roles."
      },
      {
        id: "p3",
        type: "true-false",
        prompt: "خبر كان and خبر إن are covered in this lesson set.",
        correct: false,
        explanation: "No — they're Nawasikh, reserved for their own later part, exactly like Lesson 4.1 already told you for the مرفوعات side."
      }
    ],

    summary: [
      "المنصوبات: fifteen roles that put a noun in نصب. This lesson set covers eight of them, in eight short lessons.",
      "Nawasikh-linked categories (اسم ليس، خبر كان، خبر إن، اسم لا) stay reserved for Part 5; التابع stays reserved for a future lesson.",
      "Same model as always: ROLE → STATE → SIGN. Next: المفعول به, the most basic منصوب role."
    ],

    completion: {
      titleAr: "المنصوبات: نظرة عامة",
      statement: "The map is set. Now the roles themselves, starting with المفعول به."
    }
  },

  "4.7": {
    id: "4.7",
    steps: ["intro", "concept", "example", "quran", "notice", "practice", "challenge", "summary", "completion"],

    sourceNote: {
      status: "book-cited",
      label: "Sourced from your reference book — pages 137–139",
      detail: "المفعول به: هُوَ الِاسْمُ الَّذِي يَقَعُ عَلَيْهِ فِعْلُ الفَاعِلِ (p. 137), with its own book-cited citation وَيُقِيمُونَ الصَّلَاةَ [البقرة:3]، وَهُوَ عَلَى قِسْمَيْنِ: ظَاهِرٌ، وَمُضْمَرٌ (p. 138, the same ظاهر/مضمر split already familiar from الفاعل). باب الاشتغال (p. 138) is intentionally left out of this lesson — see this batch's own header note."
    },

    intro: {
      titleAr: "المفعول به",
      titleEn: "The Direct Object",
      statement: "The most basic منصوب role: the noun that RECEIVES its verb's action, rather than performing it."
    },

    objective: [
      "define المفعول به and tell it apart from الفاعل",
      "recognize ظاهر vs. مضمر مفعول به",
      "recognize المفعول به in a Qur'anic sentence"
    ],

    concept: {
      termAr: "المفعول به",
      kind: "book-cited",
      definitionAr: "المفعول به: هُوَ الِاسْمُ الَّذِي يَقَعُ عَلَيْهِ فِعْلُ الفَاعِلِ.",
      definitionEn: "The مفعول به is the noun that its فاعل's action lands on.",
      lead: "Role: المفعول به. State (Part 2): منصوب. Sign (Part 3): whichever fits its shape — الفتحة by default."
    },

    definitionBreakdown: [
      {
        termAr: "الفاعل مقابل المفعول به",
        termEn: "doer vs. receiver",
        glossEn: "the same action, two different jobs",
        explanation: "ضَرَبَ زَيْدٌ عَمْرًا — زَيْدٌ performs the hitting (الفاعل، مرفوع); عَمْرًا receives it (المفعول به، منصوب). Same verb, two opposite roles."
      },
      {
        termAr: "ظاهر ومضمر",
        termEn: "explicit or pronoun",
        glossEn: "the same split as الفاعل",
        explanation: "عَمْرًا (above) is a ظاهر مفعول به. ضَرَبَنِي زَيْدٌ — the attached ـنِي (\"me\") is a مضمر مفعول به."
      }
    ],

    example: {
      kind: "book-example",
      kindLabel: "A worked pair",
      arabic: "رَكِبْتُ الْفَرَسَ",
      transliteration: "Rakibtu l-farasa",
      translation: "I rode the horse",
      explanation: "الْفَرَسَ receives رَكِبْتُ's action — المفعول به، منصوب بالفتحة.",
      contrast: {
        arabic: "ضَرَبَنِي زَيْدٌ",
        translation: "Zayd hit me",
        explanation: "Here المفعول به is مضمر — the attached ـنِي. Still منصوب, just with nothing visibly declined (a pronoun doesn't carry a separate نصب sign the way a noun does)."
      }
    },

    quranExample: {
      surahAr: "البقرة",
      surahEn: "Al-Baqarah",
      ayahRef: "2:3",
      arabic: "وَيُقِيمُونَ الصَّلَاةَ",
      translation: "…and establish prayer…",
      notice: "الصَّلَاةَ — المفعول به, receiving يُقِيمُونَ's action (\"establishing\"), منصوبة بالفتحة الظاهرة. The book's own citation (p. 137) for this role.",
      wordNotes: {
        "2-3-w2": { conceptLabel: "مفعول به منصوب", explanation: "الصَّلَاةَ — المفعول به, منصوبة بالفتحة الظاهرة." }
      }
    },

    noticeInteraction: {
      type: "word-tap",
      ayahRef: "2:3",
      instanceId: "4.7-notice",
      promptContext: "Al-Baqarah 2:3",
      question: "Tap the word that is المفعول به here.",
      correctWordId: "2-3-w2",
      correctFeedback: "Right — الصَّلَاةَ receives يُقِيمُونَ's action. That's المفعول به.",
      incorrectFeedback: "Not quite — يُقِيمُونَ is the verb itself (with its own attached فاعل, واو الجماعة). Look at what comes after it.",
      wordNotes: {
        "2-3-w1": { conceptLabel: "فعل وفاعل", explanation: "يُقِيمُونَ — الفعل, مع فاعله المتصل (واو الجماعة)." },
        "2-3-w2": { conceptLabel: "مفعول به منصوب", explanation: "الصَّلَاةَ — المفعول به, منصوبة بالفتحة الظاهرة." }
      }
    },

    practiceQuestions: [
      {
        id: "p1",
        type: "true-false",
        prompt: "المفعول به performs its verb's action, just like الفاعل.",
        correct: false,
        explanation: "No — المفعول به RECEIVES the action. الفاعل performs it."
      },
      {
        id: "p2",
        type: "multiple-choice",
        prompt: "In ﴿وَيُقِيمُونَ الصَّلَاةَ﴾, what is الصَّلَاةَ's role?",
        options: [
          { id: "a", labelAr: "المفعول به" },
          { id: "b", labelAr: "الفاعل" },
          { id: "c", labelAr: "المبتدأ" }
        ],
        correctOptionId: "a",
        explanation: "Right — it receives يُقِيمُونَ's action."
      },
      {
        id: "p3",
        type: "true-false",
        prompt: "المفعول به can be مضمر (a pronoun), just like الفاعل can.",
        correct: true,
        explanation: "Right — e.g. the attached ـنِي in ضَرَبَنِي زَيْدٌ."
      }
    ],

    quranChallenge: {
      surahAr: "البقرة",
      surahEn: "Al-Baqarah",
      ayahRef: "2:3",
      arabic: "وَيُقِيمُونَ الصَّلَاةَ",
      translation: "…and establish prayer…",
      question: "Which sign marks الصَّلَاةَ's نصب here?",
      options: [
        { id: "fatha", labelAr: "الفتحة" },
        { id: "kasra", labelAr: "الكسرة" },
        { id: "waw", labelAr: "الواو" }
      ],
      correctOptionId: "fatha",
      explanation: "Right — a plain مفرد noun takes نصب's default sign, الفتحة الظاهرة, exactly as Part 3 taught."
    },

    summary: [
      "المفعول به: الاسم الذي يقع عليه فعل الفاعل — the noun receiving the action, not performing it.",
      "ظاهر (an explicit noun) or مضمر (an attached pronoun) — the same split you know from الفاعل.",
      "Next: المفعول المطلق — a verb's own noun-form, used to emphasize or describe itself."
    ],

    completion: {
      titleAr: "المفعول به",
      statement: "The receiver of the action. Next: the verb's own noun-form."
    }
  },

  "4.8": {
    id: "4.8",
    steps: ["intro", "concept", "example", "quran", "notice", "practice", "challenge", "summary", "completion"],

    sourceNote: {
      status: "book-cited",
      label: "Sourced from your reference book — pages 146–147",
      detail: "المصدر -ويسمى المفعول المطلق-: هُوَ اسْمُ الحَدَثِ الصَّادِرُ مِنَ الفَاعِلِ، وَتَقْرِيبُهُ أَنْ يُقَالَ: هُوَ الَّذِي يَجِيءُ ثَالِثًا فِي تَصْرِيفِ الفِعْلِ (p. 146), وَالمُؤَكِّدُ لِعَامِلِهِ ثَلَاثَةٌ: كَوْنُهُ مَصْدَرًا، وَاتِّحَادُهُ زَمَانُهُ وَعَامِلُهُ وَفَاعِلُهُ (p. 146), with the book's own citation وَكَلَّمَ اللَّهُ مُوسَىٰ تَكْلِيمًا [النساء:164]. Its three purposes (توكيد لعامله، بيان نوعه، بيان عدده) are given at headline level only."
    },

    intro: {
      titleAr: "المفعول المطلق",
      titleEn: "The Absolute Object",
      statement: "A verb that uses its OWN noun-form, right after itself — for emphasis, to describe its kind, or to count it."
    },

    objective: [
      "define المفعول المطلق as a verb's own مصدر",
      "name its three purposes: توكيد، نوع، عدد",
      "recognize المفعول المطلق in a Qur'anic sentence"
    ],

    concept: {
      termAr: "المفعول المطلق",
      kind: "book-cited",
      definitionAr: "المصدر -ويسمى المفعول المطلق-: هُوَ اسْمُ الحَدَثِ الصَّادِرُ مِنَ الفَاعِلِ.",
      definitionEn: "The مفعول المطلق (also called المصدر) is the noun-form of the very event the verb names.",
      lead: "Role: المفعول المطلق. State (Part 2): منصوب. Sign (Part 3): الفتحة by default — it's almost always a plain مفرد noun."
    },

    definitionBreakdown: [
      {
        termAr: "التوكيد",
        termEn: "emphasis",
        glossEn: "purpose 1",
        explanation: "وَكَلَّمَ اللَّهُ مُوسَىٰ تَكْلِيمًا [النساء:164] — تَكْلِيمًا adds nothing new in meaning; it simply emphasizes that the speaking genuinely happened, directly."
      },
      {
        termAr: "بيان النوع والعدد",
        termEn: "describing kind or count",
        glossEn: "purposes 2 and 3",
        explanation: "ضَرَبْتُهُ ضَرْبَ الأَمِيرِ (what KIND of hitting) أو ضَرَبْتُهُ ضَرْبَتَيْنِ (HOW MANY times) — the same مصدر shape, now carrying extra information instead of pure emphasis."
      }
    ],

    example: {
      kind: "book-example",
      kindLabel: "The pattern",
      arabic: "فَهِمْتُ الدَّرْسَ فَهْمًا",
      transliteration: "Fahimtu d-darsa fahman",
      translation: "I understood the lesson, [a real] understanding",
      explanation: "فَهْمًا is فَهِمْتُ's own noun-form — same root, used right after the verb purely for emphasis.",
      contrast: {
        arabic: "فَهِمْتُ الدَّرْسَ",
        translation: "I understood the lesson",
        explanation: "Grammatically complete without it — المفعول المطلق is never required to complete a sentence; it only adds emphasis, kind, or count."
      }
    },

    quranExample: {
      surahAr: "النساء",
      surahEn: "An-Nisa",
      ayahRef: "4:164",
      arabic: "وَكَلَّمَ اللَّهُ مُوسَىٰ تَكْلِيمًا",
      translation: "…and Allah spoke to Moses with [direct] speech.",
      notice: "تَكْلِيمًا is كَلَّمَ's own noun-form, placed right after the sentence for توكيد — emphasizing that the speaking was real and direct. The book's own citation (p. 146) for this role.",
      wordNotes: {
        "4-164-w4": { conceptLabel: "مفعول مطلق منصوب", explanation: "تَكْلِيمًا — المفعول المطلق, مصدر كَلَّمَ نفسه, منصوب بالفتحة للتوكيد." }
      }
    },

    noticeInteraction: {
      type: "word-tap",
      ayahRef: "4:164",
      instanceId: "4.8-notice",
      promptContext: "An-Nisa 4:164",
      question: "Tap the word that is المفعول المطلق here.",
      correctWordId: "4-164-w4",
      correctFeedback: "Right — تَكْلِيمًا is كَلَّمَ's own noun-form, placed there for pure emphasis.",
      incorrectFeedback: "Not quite — مُوسَىٰ is المفعول به (who was spoken to), a different role. Look at the very last word.",
      wordNotes: {
        "4-164-w3": { conceptLabel: "مفعول به", explanation: "مُوسَىٰ — المفعول به, who was spoken to." },
        "4-164-w4": { conceptLabel: "مفعول مطلق منصوب", explanation: "تَكْلِيمًا — المفعول المطلق, مصدر كَلَّمَ نفسه, منصوب بالفتحة." }
      }
    },

    practiceQuestions: [
      {
        id: "p1",
        type: "true-false",
        prompt: "المفعول المطلق is always a different root from its own verb.",
        correct: false,
        explanation: "No — it's the SAME root as its verb, just in noun form (e.g. كَلَّمَ / تَكْلِيمًا)."
      },
      {
        id: "p2",
        type: "multiple-choice",
        prompt: "How many purposes can المفعول المطلق serve?",
        options: [
          { id: "a", labelEn: "3 — توكيد, نوع, عدد" },
          { id: "b", labelEn: "1 — emphasis only" },
          { id: "c", labelEn: "5" }
        ],
        correctOptionId: "a",
        explanation: "Right — emphasis, describing kind, or stating count."
      },
      {
        id: "p3",
        type: "true-false",
        prompt: "A sentence becomes grammatically incomplete without its المفعول المطلق.",
        correct: false,
        explanation: "No — it's always optional extra information, never required to complete the sentence."
      }
    ],

    quranChallenge: {
      surahAr: "النساء",
      surahEn: "An-Nisa",
      ayahRef: "4:164",
      arabic: "وَكَلَّمَ اللَّهُ مُوسَىٰ تَكْلِيمًا",
      translation: "…and Allah spoke to Moses with [direct] speech.",
      question: "What purpose does تَكْلِيمًا serve here?",
      options: [
        { id: "toukid", labelAr: "التوكيد" },
        { id: "naw", labelAr: "بيان النوع" },
        { id: "adad", labelAr: "بيان العدد" }
      ],
      correctOptionId: "toukid",
      explanation: "Right — pure emphasis, confirming the speaking genuinely, directly happened."
    },

    summary: [
      "المفعول المطلق (المصدر): a verb's own noun-form, placed right after it.",
      "Three purposes: توكيد (emphasis), بيان النوع (what kind), بيان العدد (how many).",
      "Always optional — never needed to complete the sentence.",
      "Next: المفعول فيه — naming WHEN or WHERE an action happened."
    ],

    completion: {
      titleAr: "المفعول المطلق",
      statement: "A verb's own echo of itself. Next: naming when or where."
    }
  },

  "4.9": {
    id: "4.9",
    steps: ["intro", "concept", "example", "quran", "notice", "practice", "challenge", "summary", "completion"],

    sourceNote: {
      status: "book-cited",
      label: "Sourced from your reference book — pages 148–149",
      detail: "ظرف الزمان والمكان -ويسمى المفعول فيه-: هُوَ اسْمُ الزَّمَانِ أَوِ المَكَانِ المَنْصُوبُ بِتَقْدِيرِ \"فِي\" (p. 148), divided into المختص (a specific, bounded span: يَوْمَ) and المبهم (a vague one: حِين). The fuller breakdown of أسماء الجهات الست and الظرفية بنزع الخافض (pp. 149–151) is summarized at headline level only."
    },

    intro: {
      titleAr: "المفعول فيه",
      titleEn: "The Adverbial of Time and Place",
      statement: "Two more منصوب roles that work the same way: naming WHEN (ظرف زمان) or WHERE (ظرف مكان) something happened."
    },

    objective: [
      "define ظرف الزمان والمكان as \"في\" in disguise",
      "tell المختص (bounded) from المبهم (vague) time/place nouns",
      "recognize a ظرف in a Qur'anic sentence"
    ],

    concept: {
      termAr: "المفعول فيه",
      kind: "book-cited",
      definitionAr: "هُوَ اسْمُ الزَّمَانِ أَوِ المَكَانِ المَنْصُوبُ بِتَقْدِيرِ \"فِي\".",
      definitionEn: "A time or place noun, منصوب, standing in for an implied \"في\" (in/at/during).",
      lead: "Role: ظرف زمان (WHEN) or ظرف مكان (WHERE). State (Part 2): منصوب. Sign (Part 3): الفتحة — almost always a plain noun."
    },

    definitionBreakdown: [
      {
        termAr: "المختص",
        termEn: "bounded",
        glossEn: "a specific, countable span",
        explanation: "يَوْمَ الجُمُعَةِ، سَاعَةً — you can point to exactly when it starts and ends."
      },
      {
        termAr: "المبهم",
        termEn: "vague",
        glossEn: "no fixed boundary",
        explanation: "حِينًا، وَقْتًا — a span with no specific edges, unless clarified by something else in the sentence."
      }
    ],

    example: {
      kind: "book-example",
      kindLabel: "Time and place, side by side",
      arabic: "اعْتَكَفْتُ أُسْبُوعًا",
      transliteration: "I'takaftu usbū'an",
      translation: "I secluded myself for a week",
      explanation: "أُسْبُوعًا — ظرف زمان, منصوب بتقدير \"في\" (\"during a week\").",
      contrast: {
        arabic: "جَلَسْتُ أَمَامَ الأَمِيرِ",
        translation: "I sat in front of the prince",
        explanation: "أَمَامَ — ظرف مكان this time (one of the أسماء الجهات الست, the six fixed direction-nouns), same logic, same سign."
      }
    },

    quranExample: {
      surahAr: "المزمل",
      surahEn: "Al-Muzzammil",
      ayahRef: "73:2",
      arabic: "قُمِ اللَّيْلَ إِلَّا قَلِيلًا",
      translation: "Stand [in prayer] the night, except for a little.",
      notice: "اللَّيْلَ — ظرف زمان, منصوب بتقدير \"في\" (\"during the night\"), مختص (a bounded, nameable span).",
      wordNotes: {
        "73-2-w2": { conceptLabel: "ظرف زمان منصوب", explanation: "اللَّيْلَ — ظرف زمان, منصوب بالفتحة, بتقدير في." }
      }
    },

    noticeInteraction: {
      type: "word-tap",
      ayahRef: "73:2",
      instanceId: "4.9-notice",
      promptContext: "Al-Muzzammil 73:2",
      question: "Tap the word that is ظرف زمان here.",
      correctWordId: "73-2-w2",
      correctFeedback: "Right — اللَّيْلَ names WHEN, standing in for \"في الليل\".",
      incorrectFeedback: "Not quite — قُمِ is the verb itself (فعل أمر). Look at the word right after it.",
      wordNotes: {
        "73-2-w1": { conceptLabel: "فعل أمر", explanation: "قُمِ — فعل أمر, وفاعله ضمير مستتر تقديره أنتَ." },
        "73-2-w2": { conceptLabel: "ظرف زمان منصوب", explanation: "اللَّيْلَ — ظرف زمان, منصوب بالفتحة، بتقدير في." }
      }
    },

    practiceQuestions: [
      {
        id: "p1",
        type: "true-false",
        prompt: "A ظرف stands in for an implied \"في\" (in/at/during).",
        correct: true,
        explanation: "Right — that's exactly the book's own definition."
      },
      {
        id: "p2",
        type: "multiple-choice",
        prompt: "أَمَامَ (\"in front of\") is an example of which category?",
        options: [
          { id: "a", labelEn: "ظرف مكان" },
          { id: "b", labelEn: "ظرف زمان" },
          { id: "c", labelEn: "مفعول به" }
        ],
        correctOptionId: "a",
        explanation: "Right — one of the six fixed direction-nouns (أسماء الجهات الست)."
      },
      {
        id: "p3",
        type: "true-false",
        prompt: "يَوْمَ الجُمُعَةِ is المختص (bounded) rather than المبهم (vague).",
        correct: true,
        explanation: "Right — you can point to exactly which day it names."
      }
    ],

    quranChallenge: {
      surahAr: "المزمل",
      surahEn: "Al-Muzzammil",
      ayahRef: "73:2",
      arabic: "قُمِ اللَّيْلَ إِلَّا قَلِيلًا",
      translation: "Stand [in prayer] the night, except for a little.",
      question: "اللَّيْلَ here is:",
      options: [
        { id: "mukhtass", labelAr: "مختص" },
        { id: "mubham", labelAr: "مبهم" }
      ],
      correctOptionId: "mukhtass",
      explanation: "Right — \"the night\" is a specific, nameable span, not a vague one."
    },

    summary: [
      "المفعول فيه = ظرف الزمان (WHEN) أو ظرف المكان (WHERE), منصوب بتقدير \"في\".",
      "المختص (a bounded span) vs. المبهم (a vague one).",
      "Next: المفعول لأجله والمفعول معه — two more, smaller منصوب roles."
    ],

    completion: {
      titleAr: "المفعول فيه",
      statement: "When and where, both covered. Next: why, and alongside whom."
    }
  },

  "4.10": {
    id: "4.10",
    steps: ["intro", "concept", "example", "quran", "notice", "practice", "challenge", "summary", "completion"],

    sourceNote: {
      status: "book-cited",
      label: "Sourced from your reference book — pages 152–154",
      detail: "المفعول لأجله: المَنْصُوبُ الَّذِي يُذْكَرُ بَيَانًا لِسَبَبِ وُقُوعِ الفِعْلِ (p. 152), with its three شروط (كونه مصدرًا، قلبيًا، واتحاد زمانه وفاعله مع عامله — p. 152) summarized at headline level. المفعول معه: الِاسْمُ المَنْصُوبُ الَّذِي يُذْكَرُ بَعْدَ \"وَاو\" بِمَعْنَى \"مَعَ\"؛ لِبَيَانِ مَن فُعِلَ مَعَهُ الفِعْلُ (p. 153), with the book's own invented example جَاءَ الأَمِيرُ وَالجَيْشَ. This page's own مفعول لأجله Qur'anic citation wasn't confidently legible in the supplied image, so this lesson's Qur'an widget uses QURRA's own independently-verified citation for the same book-stated category instead — see the note on its verse."
    },

    intro: {
      titleAr: "المفعول لأجله والمفعول معه",
      titleEn: "Causative & Comitative Objects",
      statement: "Two smaller منصوب roles, each answering its own question: WHY did the action happen, and WHO was it alongside?"
    },

    objective: [
      "define المفعول لأجله (WHY) and recognize it",
      "define المفعول معه (ALONGSIDE WHOM/WHAT) and recognize it",
      "recognize المفعول لأجله in a Qur'anic sentence"
    ],

    concept: {
      termAr: "لأجله ومعه",
      kind: "book-cited",
      definitionAr: "المفعول لأجله: المنصوب الذي يُذكر بيانًا لسبب وقوع الفعل. المفعول معه: الاسم المنصوب الذي يُذكر بعد واو بمعنى \"مع\".",
      definitionEn: "المفعول لأجله explains WHY the action happened. المفعول معه names who or what the action happened ALONGSIDE.",
      lead: "Two different questions, the same state (منصوب) and usually the same sign (الفتحة)."
    },

    definitionBreakdown: [
      {
        termAr: "المفعول لأجله",
        termEn: "the reason",
        glossEn: "answers WHY",
        explanation: "ابْتِغَاءَ مَرْضَاتِ اللَّهِ [البقرة:207] — \"[he sells himself] SEEKING Allah's pleasure\": ابْتِغَاءَ names the reason behind the action, منصوب."
      },
      {
        termAr: "المفعول معه",
        termEn: "the accompaniment",
        glossEn: "answers ALONGSIDE WHOM/WHAT",
        explanation: "جَاءَ الأَمِيرُ وَالجَيْشَ — \"the prince came, ALONG WITH the army\": الجَيْشَ isn't a second doer (that would need وَ to mean \"and\"); it's who the coming happened alongside, منصوب."
      }
    ],

    example: {
      kind: "book-example",
      kindLabel: "Two roles, one sentence each",
      arabic: "قَصَدْتُكَ ابْتِغَاءَ مَعْرُوفِكَ",
      transliteration: "Qaṣadtuka btighā'a ma'rūfika",
      translation: "I came to you seeking your kindness",
      explanation: "ابْتِغَاءَ — المفعول لأجله, explaining WHY قَصَدْتُكَ happened.",
      contrast: {
        arabic: "جَاءَ الأَمِيرُ وَالجَيْشَ",
        translation: "The prince came, along with the army",
        explanation: "الجَيْشَ — المفعول معه this time, منصوب, naming who accompanied the coming (not a second فاعل)."
      }
    },

    quranExample: {
      surahAr: "البقرة",
      surahEn: "Al-Baqarah",
      ayahRef: "2:207",
      arabic: "وَمِنَ النَّاسِ مَن يَشْرِي نَفْسَهُ ابْتِغَاءَ مَرْضَاتِ اللَّهِ",
      translation: "And among the people is he who sells himself seeking the pleasure of Allah…",
      notice: "ابْتِغَاءَ — المفعول لأجله, explaining WHY he sells himself: seeking (ابتغاء) Allah's pleasure. منصوب بالفتحة.",
      wordNotes: {
        "2-207-w6": { conceptLabel: "مفعول لأجله منصوب", explanation: "ابْتِغَاءَ — المفعول لأجله, منصوب بالفتحة, يبيّن سبب الفعل." }
      }
    },

    noticeInteraction: {
      type: "word-tap",
      ayahRef: "2:207",
      instanceId: "4.10-notice",
      promptContext: "Al-Baqarah 2:207",
      question: "Tap the word that is المفعول لأجله here.",
      correctWordId: "2-207-w6",
      correctFeedback: "Right — ابْتِغَاءَ explains WHY: seeking Allah's pleasure.",
      incorrectFeedback: "Not quite — نَفْسَهُ is المفعول به (who is sold), a different role. Look further along.",
      wordNotes: {
        "2-207-w5": { conceptLabel: "مفعول به", explanation: "نَفْسَهُ — المفعول به, who is sold." },
        "2-207-w6": { conceptLabel: "مفعول لأجله منصوب", explanation: "ابْتِغَاءَ — المفعول لأجله, منصوب بالفتحة, يبيّن سبب الفعل." }
      }
    },

    practiceQuestions: [
      {
        id: "p1",
        type: "multiple-choice",
        prompt: "المفعول لأجله answers which question?",
        options: [
          { id: "a", labelEn: "WHY did it happen?" },
          { id: "b", labelEn: "WHO did it?" },
          { id: "c", labelEn: "WHEN did it happen?" }
        ],
        correctOptionId: "a",
        explanation: "Right — it names the reason behind the action."
      },
      {
        id: "p2",
        type: "true-false",
        prompt: "In جَاءَ الأَمِيرُ وَالجَيْشَ, الجَيْشَ is a second فاعل alongside الأَمِيرُ.",
        correct: false,
        explanation: "No — it's المفعول معه, منصوب, naming who accompanied the action, not a second doer."
      },
      {
        id: "p3",
        type: "true-false",
        prompt: "﴿ابْتِغَاءَ مَرْضَاتِ اللَّهِ﴾ [البقرة:207] explains WHY he sells himself.",
        correct: true,
        explanation: "Right — exactly what المفعول لأجله does."
      }
    ],

    quranChallenge: {
      surahAr: "البقرة",
      surahEn: "Al-Baqarah",
      ayahRef: "2:207",
      arabic: "ابْتِغَاءَ مَرْضَاتِ اللَّهِ",
      translation: "…seeking the pleasure of Allah.",
      question: "ابْتِغَاءَ's role here is:",
      options: [
        { id: "liajlihi", labelAr: "مفعول لأجله" },
        { id: "bihi", labelAr: "مفعول به" },
        { id: "maah", labelAr: "مفعول معه" }
      ],
      correctOptionId: "liajlihi",
      explanation: "Right — it explains WHY, the hallmark of المفعول لأجله."
    },

    summary: [
      "المفعول لأجله: منصوب, answers WHY an action happened.",
      "المفعول معه: منصوب, names who or what the action happened alongside (after a وَ meaning \"مع\").",
      "Next: المنادى — the noun you call out to directly."
    ],

    completion: {
      titleAr: "المفعول لأجله والمفعول معه",
      statement: "Why, and alongside whom. Next: calling someone directly."
    }
  },

  "4.11": {
    id: "4.11",
    steps: ["intro", "concept", "example", "quran", "notice", "practice", "challenge", "summary", "completion"],

    sourceNote: {
      status: "book-cited",
      label: "Sourced from your reference book — pages 140–141, 145",
      detail: "المنادى: ومنها: المنادى، نحو: يا عبدَ الله (p. 140), with خمسة أنواع (p. 140–141): المفرد العلم، النكرة المقصودة، النكرة غير المقصودة، المضاف، والشبيه بالمضاف. وإعرابه: المفرد العلم والنكرة المقصودة مبنيان على الضم في محل نصب، والباقي منصوب لفظًا. The book's own citation يَا بُنَيَّ لَا تُشْرِكْ بِاللَّهِ [لقمان:13, p. 145] is used for this lesson. The fuller detail of نداء المضاف إلى ياء المتكلم's many accepted pronunciations (pp. 144–145) is summarized at headline level only."
    },

    intro: {
      titleAr: "المنادى",
      titleEn: "The Called-To Noun (Munada)",
      statement: "A different kind of منصوب altogether: not a role inside a sentence's action, but the noun you call out to, directly."
    },

    objective: [
      "define المنادى and recognize the particle يا that introduces it",
      "name its five types",
      "state the headline إعراب rule: which types are مبني, which are منصوب"
    ],

    concept: {
      termAr: "المنادى",
      kind: "book-cited",
      definitionAr: "المنادى: الاسم الذي يُطلب إقباله بحرف نداء، نحو: يا عبدَ الله.",
      definitionEn: "المنادى is the noun you call out to, introduced by a particle of address like يا.",
      lead: "Role: المنادى. State: either منصوب OR مبني في محل نصب, depending on its type — a genuinely different pattern from every other role in this Part."
    },

    definitionBreakdown: [
      {
        termAr: "المفرد العلم والنكرة المقصودة",
        termEn: "a plain name, or a specific unnamed someone",
        glossEn: "مبني على الضم",
        explanation: "يَا مُحَمَّدُ (calling a specific name) أو يَا رَجُلُ (calling one specific, known man) — both مبنيان على الضم، في محل نصب. No visible نصب sign at all; the بناء itself holds the position."
      },
      {
        termAr: "النكرة غير المقصودة، المضاف، والشبيه بالمضاف",
        termEn: "the other three types",
        glossEn: "منصوب لفظًا",
        explanation: "يَا رَجُلًا (calling out to no one specific), يَا بُنَيَّ (p. 145 — addressed AND possessed, \"my son\"), يَا طَالِعًا جَبَلًا (\"you, climbing a mountain\") — all genuinely منصوب, with a visible sign."
      }
    ],

    example: {
      kind: "book-example",
      kindLabel: "Two patterns, side by side",
      arabic: "يَا عَبْدَ اللَّهِ",
      transliteration: "Yā 'Abda llāh",
      translation: "O 'Abdullah",
      explanation: "عَبْدَ is المضاف (addressed AND possessed — \"servant of Allah\"), منصوب بالفتحة الظاهرة.",
      contrast: {
        arabic: "يَا رَجُلُ",
        translation: "O man",
        explanation: "رَجُلُ here is النكرة المقصودة (one specific, known man) — مبني على الضم، في محل نصب. No visible فتحة at all, unlike عَبْدَ above."
      }
    },

    quranExample: {
      surahAr: "لقمان",
      surahEn: "Luqman",
      ayahRef: "31:13",
      arabic: "وَإِذْ قَالَ لُقْمَانُ لِابْنِهِ وَهُوَ يَعِظُهُ يَا بُنَيَّ لَا تُشْرِكْ بِاللَّهِ",
      translation: "And [mention] when Luqman said to his son while he was advising him, \"O my son, do not associate [anything] with Allah…\"",
      notice: "بُنَيَّ — المنادى, المضاف إلى ياء المتكلم (\"my little son\"), منصوب. The book's own citation (p. 145) for this type.",
      wordNotes: {
        "31-13-w2": { conceptLabel: "منادى منصوب", explanation: "بُنَيَّ — المنادى, مضاف إلى ياء المتكلم, منصوب." }
      }
    },

    noticeInteraction: {
      type: "word-tap",
      ayahRef: "31:13",
      instanceId: "4.11-notice",
      promptContext: "Luqman 31:13",
      question: "Tap the word that is المنادى here.",
      correctWordId: "31-13-w2",
      correctFeedback: "Right — بُنَيَّ is who Luqman is calling out to: his own son.",
      incorrectFeedback: "Not quite — يَا is the particle of address itself, not المنادى. Look at the word right after it.",
      wordNotes: {
        "31-13-w1": { conceptLabel: "حرف نداء", explanation: "يَا — حرف نداء, يطلب إقبال المنادى." },
        "31-13-w2": { conceptLabel: "منادى منصوب", explanation: "بُنَيَّ — المنادى, مضاف إلى ياء المتكلم, منصوب." }
      }
    },

    practiceQuestions: [
      {
        id: "p1",
        type: "true-false",
        prompt: "Every المنادى is genuinely منصوب, with a visible sign.",
        correct: false,
        explanation: "No — المفرد العلم والنكرة المقصودة are مبني على الضم في محل نصب instead, with no visible sign at all."
      },
      {
        id: "p2",
        type: "multiple-choice",
        prompt: "How many types of المنادى does your book list?",
        options: [
          { id: "a", labelEn: "5" },
          { id: "b", labelEn: "3" },
          { id: "c", labelEn: "7" }
        ],
        correctOptionId: "a",
        explanation: "Right — المفرد العلم، النكرة المقصودة، النكرة غير المقصودة، المضاف، والشبيه بالمضاف."
      },
      {
        id: "p3",
        type: "true-false",
        prompt: "بُنَيَّ in ﴿يَا بُنَيَّ﴾ is المضاف إلى ياء المتكلم, and it's منصوب.",
        correct: true,
        explanation: "Right — exactly the book's own citation (p. 145)."
      }
    ],

    quranChallenge: {
      surahAr: "لقمان",
      surahEn: "Luqman",
      ayahRef: "31:13",
      arabic: "يَا بُنَيَّ",
      translation: "O my son…",
      question: "What type of المنادى is بُنَيَّ?",
      options: [
        { id: "mudaf", labelAr: "المضاف" },
        { id: "alam", labelAr: "المفرد العلم" },
        { id: "nakira", labelAr: "النكرة غير المقصودة" }
      ],
      correctOptionId: "mudaf",
      explanation: "Right — addressed AND possessed (\"my son\"), so it's المضاف, genuinely منصوب."
    },

    summary: [
      "المنادى: the noun you call out to, introduced by يا.",
      "Five types — but only two outcomes: المفرد العلم والنكرة المقصودة are مبني على الضم في محل نصب; the other three are منصوب لفظًا.",
      "Next: الحال — describing the STATE a noun is in when the action happens."
    ],

    completion: {
      titleAr: "المنادى",
      statement: "Calling out, covered. Next: describing a noun's state."
    }
  },

  "4.12": {
    id: "4.12",
    steps: ["intro", "concept", "example", "quran", "notice", "practice", "challenge", "summary", "completion"],

    sourceNote: {
      status: "book-cited",
      label: "Sourced from your reference book — pages 155–156",
      detail: "الحال: هُوَ الاسْمُ المَنْصُوبُ المُفَسِّرُ لِمَا انْبَهَمَ مِنَ الهَيْئَاتِ (p. 155), وضوابطه: أن يكون وصفًا منصوبًا بعد اسم معرفة، بشرط كون الاسم مشبهة فهو حال وإلا فهو تمييز (p. 155). الحال يكون إما من الفاعل أو من المفعول، كما تقدم (p. 156), with the book's own citation فَخَرَجَ مِنْهَا خَائِفًا يَتَرَقَّبُ [القصص:21]. The fuller detail of وقوع الحال جملة أو شبه جملة (pp. 157–159) is summarized at headline level only."
    },

    intro: {
      titleAr: "الحال",
      titleEn: "The Circumstantial State (Hal)",
      statement: "A منصوب role that describes HOW — the condition a noun is in exactly when the action happens."
    },

    objective: [
      "define الحال and recognize the question it answers: كيف؟",
      "state its basic ضابط: a نكرة description, after a معرفة noun",
      "recognize الحال in a Qur'anic sentence"
    ],

    concept: {
      termAr: "الحال",
      kind: "book-cited",
      definitionAr: "الحال: هُوَ الاسْمُ المَنْصُوبُ المُفَسِّرُ لِمَا انْبَهَمَ مِنَ الهَيْئَاتِ.",
      definitionEn: "الحال is the منصوب noun that clarifies an otherwise-vague MANNER or condition.",
      lead: "Role: الحال. State: منصوب. It answers: in what CONDITION was the فاعل (or المفعول به) when the action happened?"
    },

    definitionBreakdown: [
      {
        termAr: "صاحب الحال",
        termEn: "whose state it describes",
        glossEn: "usually الفاعل or المفعول به",
        explanation: "فَخَرَجَ مِنْهَا خَائِفًا [القصص:21] — خَائِفًا describes the الفاعل (the hidden \"he\" in خَرَجَ): WHAT STATE was he in while leaving? Fearful."
      },
      {
        termAr: "الضابط الأساسي",
        termEn: "the basic rule",
        glossEn: "نكرة بعد معرفة",
        explanation: "الحال is always نكرة, describing a معرفة (a definite, already-identified) noun — unlike التمييز, next lesson's role, which clarifies something still ambiguous."
      }
    ],

    example: {
      kind: "book-example",
      kindLabel: "A worked pair",
      arabic: "جَاءَ زَيْدٌ رَاكِبًا",
      transliteration: "Jā'a Zaydun rākiban",
      translation: "Zayd came, riding",
      explanation: "رَاكِبًا — الحال, describing زَيْدٌ's condition (صاحب الحال) at the exact moment of coming.",
      contrast: {
        arabic: "جَاءَ زَيْدٌ",
        translation: "Zayd came",
        explanation: "Complete without it — like المفعول المطلق, الحال only ever adds extra description; it's never required to complete the sentence."
      }
    },

    quranExample: {
      surahAr: "القصص",
      surahEn: "Al-Qasas",
      ayahRef: "28:21",
      arabic: "فَخَرَجَ مِنْهَا خَائِفًا يَتَرَقَّبُ",
      translation: "So he left it, fearful and anticipating [exposure].",
      notice: "خَائِفًا — الحال, describing صاحب الحال (the hidden فاعل \"he\" in خَرَجَ): what condition was he in while leaving? The book's own citation (p. 156).",
      wordNotes: {
        "28-21-w3": { conceptLabel: "حال منصوب", explanation: "خَائِفًا — الحال, منصوب بالفتحة, يصف هيئة الفاعل وقت الخروج." }
      }
    },

    noticeInteraction: {
      type: "word-tap",
      ayahRef: "28:21",
      instanceId: "4.12-notice",
      promptContext: "Al-Qasas 28:21",
      question: "Tap the word that is الحال here.",
      correctWordId: "28-21-w3",
      correctFeedback: "Right — خَائِفًا describes his condition at the moment of leaving.",
      incorrectFeedback: "Not quite — مِنْهَا is a جار ومجرور (from it), not a description of his state. Look at the next word.",
      wordNotes: {
        "28-21-w2": { conceptLabel: "جار ومجرور", explanation: "مِنْهَا — جار ومجرور، متعلقان بـخَرَجَ." },
        "28-21-w3": { conceptLabel: "حال منصوب", explanation: "خَائِفًا — الحال, منصوب بالفتحة." }
      }
    },

    practiceQuestions: [
      {
        id: "p1",
        type: "multiple-choice",
        prompt: "الحال answers which question?",
        options: [
          { id: "a", labelEn: "In what CONDITION/MANNER?" },
          { id: "b", labelEn: "WHY?" },
          { id: "c", labelEn: "WHEN?" }
        ],
        correctOptionId: "a",
        explanation: "Right — it clarifies the manner or state something was in."
      },
      {
        id: "p2",
        type: "true-false",
        prompt: "الحال is always a نكرة describing a معرفة noun (صاحب الحال).",
        correct: true,
        explanation: "Right — exactly the book's own basic ضابط (p. 155)."
      },
      {
        id: "p3",
        type: "true-false",
        prompt: "﴿فَخَرَجَ مِنْهَا خَائِفًا يَتَرَقَّبُ﴾ — خَائِفًا describes صاحب الحال's condition while leaving.",
        correct: true,
        explanation: "Right — exactly the book's own citation."
      }
    ],

    quranChallenge: {
      surahAr: "القصص",
      surahEn: "Al-Qasas",
      ayahRef: "28:21",
      arabic: "فَخَرَجَ مِنْهَا خَائِفًا",
      translation: "So he left it, fearful…",
      question: "صاحب الحال here (whose condition خَائِفًا describes) is:",
      options: [
        { id: "hidden", labelAr: "الفاعل المستتر (هو)" },
        { id: "visible", labelAr: "اسم ظاهر" },
        { id: "maf3ul", labelAr: "المفعول به" }
      ],
      correctOptionId: "hidden",
      explanation: "Right — خَرَجَ's فاعل here is a hidden ضمير مستتر (\"he\"), and خَائِفًا describes that hidden doer's state."
    },

    summary: [
      "الحال: a منصوب نكرة describing the MANNER or CONDITION of a معرفة noun (صاحب الحال) at the moment of the action.",
      "Always optional, like المفعول المطلق — never needed to complete the sentence.",
      "Next: التمييز — clarifying something still genuinely ambiguous, rather than describing a known noun's state."
    ],

    completion: {
      titleAr: "الحال",
      statement: "How something happened, covered. Next: clearing up what's ambiguous."
    }
  },

  "4.13": {
    id: "4.13",
    steps: ["intro", "concept", "example", "quran", "notice", "practice", "challenge", "summary", "completion"],

    sourceNote: {
      status: "book-cited",
      label: "Sourced from your reference book — pages 160–161",
      detail: "التمييز: هُوَ الِاسْمُ المَنْصُوبُ المُفَسِّرُ لِمَا انْبَهَمَ مِنَ الذَّوَاتِ (p. 160), with the book's own citation وَفَجَّرْنَا الأَرْضَ عُيُونًا [القمر:12]. ويسمى تمييز الذات، والذوات التي يفسرها هي المبهمة المفردة، نحو: عشرون، ورطل، ومثقال (p. 160). تمييز النسبة (p. 161–162, clarifying a whole سentence rather than a single word) is summarized at headline level only."
    },

    intro: {
      titleAr: "التمييز",
      titleEn: "The Specifier (Tamyiz)",
      statement: "One word prior (الحال) described a KNOWN noun's state. التمييز instead clears up something still genuinely vague — most often, a number or quantity."
    },

    objective: [
      "define التمييز and distinguish it from الحال",
      "recognize its most common trigger: a number or quantity word",
      "recognize التمييز in a Qur'anic sentence"
    ],

    concept: {
      termAr: "التمييز",
      kind: "book-cited",
      definitionAr: "التمييز: هُوَ الاسْمُ المَنْصُوبُ المُفَسِّرُ لِمَا انْبَهَمَ مِنَ الذَّوَاتِ.",
      definitionEn: "التمييز is the منصوب noun that clarifies an otherwise-ambiguous THING (not a manner — that's الحال).",
      lead: "Role: التمييز. State: منصوب. Classic trigger: a number, weight, or measure that, alone, doesn't say what's being counted."
    },

    definitionBreakdown: [
      {
        termAr: "تمييز الذات",
        termEn: "clarifying a thing",
        glossEn: "after a number or measure",
        explanation: "عِشْرُونَ غُلَامًا — عِشْرُونَ alone just means \"twenty\"; غُلَامًا (التمييز) says twenty WHAT. Without it, the sentence stays genuinely ambiguous — unlike الحال, which merely adds optional color."
      },
      {
        termAr: "الفرق عن الحال",
        termEn: "how it differs from الحال",
        glossEn: "ambiguity vs. description",
        explanation: "الحال describes a noun you already know (صاحب الحال is معرفة). التمييز clarifies something that would otherwise stay unclear — the sentence genuinely needs it to make sense."
      }
    ],

    example: {
      kind: "book-example",
      kindLabel: "The classic trigger",
      arabic: "اشْتَرَيْتُ عِشْرِينَ كِتَابًا",
      transliteration: "Ishtaraytu 'ishrīna kitāban",
      translation: "I bought twenty books",
      explanation: "كِتَابًا — التمييز, clarifying what عِشْرِينَ actually counts. Without it, \"twenty\" of WHAT stays unknown.",
      contrast: {
        arabic: "جَاءَ زَيْدٌ رَاكِبًا",
        translation: "Zayd came, riding",
        explanation: "Compare Lesson 4.12's own example: رَاكِبًا there (الحال) merely described ALREADY-KNOWN زَيْدٌ — removing it loses color, not clarity. Removing التمييز loses clarity itself."
      }
    },

    quranExample: {
      surahAr: "القمر",
      surahEn: "Al-Qamar",
      ayahRef: "54:12",
      arabic: "وَفَجَّرْنَا الْأَرْضَ عُيُونًا",
      translation: "And caused the earth to burst with springs…",
      notice: "عُيُونًا — التمييز, clarifying HOW the earth burst forth — specifically, into springs. The book's own citation (p. 161).",
      wordNotes: {
        "54-12-w3": { conceptLabel: "تمييز منصوب", explanation: "عُيُونًا — التمييز, منصوب بالفتحة, يفسر ما انبهم." }
      }
    },

    noticeInteraction: {
      type: "word-tap",
      ayahRef: "54:12",
      instanceId: "4.13-notice",
      promptContext: "Al-Qamar 54:12",
      question: "Tap the word that is التمييز here.",
      correctWordId: "54-12-w3",
      correctFeedback: "Right — عُيُونًا clarifies what the bursting-forth actually was.",
      incorrectFeedback: "Not quite — الْأَرْضَ is المفعول به (what burst forth). Look at the final word.",
      wordNotes: {
        "54-12-w2": { conceptLabel: "مفعول به", explanation: "الْأَرْضَ — المفعول به." },
        "54-12-w3": { conceptLabel: "تمييز منصوب", explanation: "عُيُونًا — التمييز, منصوب بالفتحة." }
      }
    },

    practiceQuestions: [
      {
        id: "p1",
        type: "multiple-choice",
        prompt: "التمييز most classically follows what kind of word?",
        options: [
          { id: "a", labelEn: "A number, weight, or measure" },
          { id: "b", labelEn: "A verb of motion" },
          { id: "c", labelEn: "A particle of address" }
        ],
        correctOptionId: "a",
        explanation: "Right — عشرون، رطل، مثقال and similar words are its classic trigger."
      },
      {
        id: "p2",
        type: "true-false",
        prompt: "Removing التمييز leaves a sentence just as clear as removing الحال does.",
        correct: false,
        explanation: "No — removing التمييز genuinely loses clarity (what's being counted); removing الحال only loses optional descriptive color."
      },
      {
        id: "p3",
        type: "true-false",
        prompt: "﴿وَفَجَّرْنَا الْأَرْضَ عُيُونًا﴾ — عُيُونًا is التمييز, clarifying what the earth burst forth into.",
        correct: true,
        explanation: "Right — exactly the book's own citation (p. 161)."
      }
    ],

    quranChallenge: {
      surahAr: "القمر",
      surahEn: "Al-Qamar",
      ayahRef: "54:12",
      arabic: "وَفَجَّرْنَا الْأَرْضَ عُيُونًا",
      translation: "And caused the earth to burst with springs…",
      question: "What would stay ambiguous without عُيُونًا?",
      options: [
        { id: "a", labelEn: "WHAT the earth burst forth into" },
        { id: "b", labelEn: "WHO caused the bursting" },
        { id: "c", labelEn: "WHEN it happened" }
      ],
      correctOptionId: "a",
      explanation: "Right — without التمييز, \"We caused the earth to burst forth\" would leave WHAT genuinely unclear."
    },

    summary: [
      "التمييز: منصوب, clarifies an otherwise-ambiguous THING — classically after a number, weight, or measure.",
      "Different from الحال: التمييز resolves real ambiguity; الحال adds optional description to an already-known noun.",
      "Next: المستثنى — the noun excluded from a statement by إلا."
    ],

    completion: {
      titleAr: "التمييز",
      statement: "Ambiguity resolved. Next: what gets excepted."
    }
  },

  "4.14": {
    id: "4.14",
    steps: ["intro", "concept", "example", "quran", "notice", "practice", "challenge", "summary", "completion"],

    sourceNote: {
      status: "book-cited",
      label: "Sourced from your reference book — pages 163–166",
      detail: "أدوات الاستثناء ثمانية: إلا، وغير، وسوى، وخلا، وعدا، وحاشا، وليس، ولا يكون (p. 163). حكم المستثنى بـ«إلا» (p. 166): إِنْ كَانَ الكَلَامُ تَامًّا مُوجَبًا وَجَبَ نَصْبُ مَا بَعْدَ «إِلَّا»، with the book's own citation فَشَرِبُوا مِنْهُ إِلَّا قَلِيلًا مِّنْهُمْ [البقرة:249]. The fuller case-by-case detail for تام منفي، ناقص (مفرّغ), and for غير/سوى/خلا/عدا/حاشا/ليس/لا يكون (pp. 163–168) is summarized at headline level only — a more advanced treatment than this foundational lesson needs."
    },

    intro: {
      titleAr: "المستثنى",
      titleEn: "The Excepted Noun",
      statement: "The last منصوب role in this batch: the noun pulled OUT of an otherwise general statement, usually by إلا."
    },

    objective: [
      "define المستثنى and name إلا as its main tool",
      "state the core rule: a تام موجب sentence forces نصب after إلا",
      "recognize المستثنى in a Qur'anic sentence"
    ],

    concept: {
      termAr: "المستثنى",
      kind: "book-cited",
      definitionAr: "أدوات الاستثناء ثمانية: إلا، وغير، وسوى، وخلا، وعدا، وحاشا، وليس، ولا يكون.",
      definitionEn: "Eight tools can introduce an exception; إلا is by far the most common.",
      lead: "Role: المستثنى. State: منصوب — at least in the clearest case, a تام موجب sentence (a complete, POSITIVE statement with a full مستثنى منه before إلا)."
    },

    definitionBreakdown: [
      {
        termAr: "تام موجب: واجب النصب",
        termEn: "complete + positive",
        glossEn: "the clearest, most basic case",
        explanation: "فَشَرِبُوا مِنْهُ إِلَّا قَلِيلًا مِّنْهُمْ [البقرة:249] — the sentence is complete and positive (\"they drank\"), so قَلِيلًا after إلا MUST be منصوب. This is the one rule this lesson focuses on."
      },
      {
        termAr: "ما وراء ذلك",
        termEn: "beyond this",
        glossEn: "more advanced cases",
        explanation: "A منفي (negated) or ناقص (incomplete) sentence changes the rule — المستثنى can become optional-نصب, or take whatever role the missing word would have had. Those cases, and غير/سوى/خلا/عدا/حاشا as separate tools, are left for a more advanced treatment."
      }
    ],

    example: {
      kind: "book-example",
      kindLabel: "The core rule",
      arabic: "حَضَرَ الطُّلَّابُ إِلَّا زَيْدًا",
      transliteration: "Ḥaḍara ṭ-ṭullābu illā Zaydan",
      translation: "The students attended, except Zayd",
      explanation: "تام موجب (complete, positive) — so زَيْدًا after إلا is واجب النصب, no other option.",
      contrast: {
        arabic: "مَا حَضَرَ إِلَّا زَيْدٌ",
        translation: "Only Zayd attended",
        explanation: "A different (منفي ناقص) pattern — here زَيْدٌ actually becomes مرفوع instead, filling الفاعل's own seat. This more advanced case is left for later; this lesson's rule covers the tام موجب pattern only."
      }
    },

    quranExample: {
      surahAr: "البقرة",
      surahEn: "Al-Baqarah",
      ayahRef: "2:249",
      arabic: "فَشَرِبُوا مِنْهُ إِلَّا قَلِيلًا مِّنْهُمْ",
      translation: "…and they drank from it, except a few of them.",
      notice: "قَلِيلًا — المستثنى, منصوب بالفتحة. الجملة تامة (فيها مستثنى منه محذوف يفهم من السياق: \"منهم\") وموجبة، فوجب النصب. The book's own citation (p. 166).",
      wordNotes: {
        "2-249-w4": { conceptLabel: "مستثنى منصوب", explanation: "قَلِيلًا — المستثنى بإلا, منصوب بالفتحة وجوبًا." }
      }
    },

    noticeInteraction: {
      type: "word-tap",
      ayahRef: "2:249",
      instanceId: "4.14-notice",
      promptContext: "Al-Baqarah 2:249",
      question: "Tap the word that is المستثنى here.",
      correctWordId: "2-249-w4",
      correctFeedback: "Right — قَلِيلًا is excepted from the general statement, منصوب بإلا.",
      incorrectFeedback: "Not quite — إِلَّا is the tool itself (أداة الاستثناء), not المستثنى. Look at the word right after it.",
      wordNotes: {
        "2-249-w3": { conceptLabel: "أداة استثناء", explanation: "إِلَّا — أداة الاستثناء." },
        "2-249-w4": { conceptLabel: "مستثنى منصوب", explanation: "قَلِيلًا — المستثنى, منصوب بالفتحة وجوبًا." }
      }
    },

    practiceQuestions: [
      {
        id: "p1",
        type: "true-false",
        prompt: "إلا is the only tool your book lists for الاستثناء.",
        correct: false,
        explanation: "No — eight tools in total: إلا، غير، سوى، خلا، عدا، حاشا، ليس، ولا يكون. إلا is simply the most common."
      },
      {
        id: "p2",
        type: "multiple-choice",
        prompt: "In a تام موجب (complete, positive) sentence, what happens after إلا?",
        options: [
          { id: "a", labelEn: "نصب is required (واجب)" },
          { id: "b", labelEn: "رفع is required" },
          { id: "c", labelEn: "Either works freely" }
        ],
        correctOptionId: "a",
        explanation: "Right — exactly the rule this lesson covers."
      },
      {
        id: "p3",
        type: "true-false",
        prompt: "﴿فَشَرِبُوا مِنْهُ إِلَّا قَلِيلًا مِّنْهُمْ﴾ is a تام موجب sentence, so قَلِيلًا is واجب النصب.",
        correct: true,
        explanation: "Right — exactly the book's own citation (p. 166)."
      }
    ],

    quranChallenge: {
      surahAr: "البقرة",
      surahEn: "Al-Baqarah",
      ayahRef: "2:249",
      arabic: "فَشَرِبُوا مِنْهُ إِلَّا قَلِيلًا مِّنْهُمْ",
      translation: "…and they drank from it, except a few of them.",
      question: "Why is قَلِيلًا واجب النصب here?",
      options: [
        { id: "a", labelEn: "The sentence is تام موجب (complete and positive)" },
        { id: "b", labelEn: "قَلِيلًا is a proper name" },
        { id: "c", labelEn: "إلا always forces نصب, in every sentence type" }
      ],
      correctOptionId: "a",
      explanation: "Right — it's specifically the تام موجب pattern that makes نصب mandatory here, not a blanket rule for every sentence type."
    },

    summary: [
      "المستثنى: the noun excluded from a general statement, usually by إلا — eight tools exist in total.",
      "Core rule covered here: in a تام موجب sentence, المستثنى after إلا is واجب النصب.",
      "This closes the second batch of الاسم المعرب — المنصوبات. المجرورات is next, once its source pages arrive, and ظن وأخواتها once sent."
    ],

    completion: {
      titleAr: "المستثنى",
      statement: "Nine منصوبات roles complete. المجرورات is next, once its source pages arrive."
    }
  },

  /* ----------------------------------------------------------------------
     PART 4 — الاسم المعرب (batch 3: المجرورات)
     Source: pages 169–172 (المخفوض بالحرف), 179–181 (المخفوض بالإضافة).
     Pages 173–176 (oath-particle shawahid, زيادة "ما" after certain
     particles) are real book content but narrow, advanced sub-detail —
     summarized at headline level only, same discipline already used for
     المنادى's pronunciation variants (4.11) and المستثنى's eight tools
     (4.14). Page 181's own closing lines move into المراد بالصفة — the
     start of التابع للمخفوض (النعت) — which is intentionally NOT built
     here: it's the same تابع category already deferred in 4.6's and 4.1's
     concept trees, reserved for one future cross-case lesson.
     This batch's own three ظن وأخواتها images (pp. 126–127, 131–132,
     134–135) are NOT Part 4 content — per the earlier curriculum decision
     (AskUserQuestion), all النواسخ stay reserved for Part 5, where
     ظن وأخواتها is already slot 5.5. Set aside, not built here.
     ---------------------------------------------------------------------- */

  "4.15": {
    id: "4.15",
    steps: ["intro", "concept", "example", "quran", "practice", "summary", "completion"],

    sourceNote: {
      status: "book-cited",
      label: "Sourced from your reference book — page 169",
      detail: "المَخْفُوضَاتُ ثَلَاثَةٌ: مَخْفُوضٌ بِالحَرْفِ، وَمَخْفُوضٌ بِالإِضَافَةِ، وَتَابِعٌ لِلْمَخْفُوضِ (p. 169) — the book's own opening line for this chapter, mirroring the exact three-way split already familiar from المرفوعات and المنصوبات."
    },

    intro: {
      titleAr: "المجرورات: نظرة عامة",
      titleEn: "Majrurat: an Overview",
      statement: "Two case-chapters down. Now the third and final one: the ways a noun becomes مجرور (خفض)."
    },

    objective: [
      "state the three ways a noun becomes مجرور, per your book",
      "name which ones this lesson set covers now, and which is reserved for later",
      "recognize that خفض, like رفع and نصب, is earned by a specific ROLE"
    ],

    concept: {
      termAr: "المجرورات",
      kind: "book-cited",
      definitionAr: "المَخْفُوضَاتُ ثَلَاثَةٌ: مَخْفُوضٌ بِالحَرْفِ، وَمَخْفُوضٌ بِالإِضَافَةِ، وَتَابِعٌ لِلْمَخْفُوضِ.",
      definitionEn: "A noun becomes مجرور in exactly three ways: by a preposition, by idafah (possession), or by following another مجرور word as its تابع.",
      lead: "Same logic one more time: ROLE → STATE → SIGN. Two of these three are genuinely new roles this lesson set covers; the third (تابع) is the same category already reserved in the مرفوعات and منصوبات maps."
    },

    definitionBreakdown: [
      {
        termAr: "بالحرف وبالإضافة",
        termEn: "this lesson set",
        glossEn: "Lessons 4.16–4.17",
        explanation: "مخفوض بالحرف — a preposition puts the noun after it in خفض. مخفوض بالإضافة — a noun becomes خفض simply by being added (أُضيف) to the noun right before it, no preposition at all."
      },
      {
        termAr: "تابع للمخفوض",
        termEn: "reserved for later",
        glossEn: "the same future lesson as التوابع",
        explanation: "النعت، والعطف، والتوكيد، والبدل — when any of these follows a مجرور word, it becomes مجرور too, by agreement rather than by its own preposition or idafah. The exact same four-part تابع category already set aside in the مرفوعات and منصوبات maps (Lessons 4.1, 4.6) — one future lesson will cover all three cases of it together."
      }
    ],

    conceptTree: {
      root: { ar: "المجرورات", en: "3 categories" },
      branches: [
        { ar: "بالحرف", en: "this lesson set", note: "Lesson 4.16" },
        { ar: "بالإضافة", en: "this lesson set", note: "Lesson 4.17" },
        { ar: "بالتبعية: النعت، العطف، التوكيد، البدل", en: "التوابع", note: "a future lesson" }
      ]
    },

    example: {
      kind: "traditional-grammar-example",
      kindLabel: "Both paths, one sentence",
      arabic: "سِرْتُ إِلَى بَيْتِ زَيْدٍ",
      transliteration: "Sirtu ila bayti Zaydin",
      translation: "I walked to Zayd's house",
      explanation: "بَيْتِ is مخفوض بالحرف (إِلَى puts it into خفض). زَيْدٍ right after it is مخفوض بالإضافة — added directly to بَيْتِ, no preposition needed. Two different paths, the same خفض state, one sentence.",
      contrast: {
        arabic: "زَيْدٌ رَجُلٌ كَرِيمٌ",
        translation: "Zayd is a generous man",
        explanation: "Same name, a completely different job here: زَيْدٌ opens this sentence as المبتدأ — مرفوع, not مجرور at all. Role determines state, exactly as every Part 4 lesson has shown."
      }
    },

    quranExample: {
      surahAr: "الفاتحة",
      surahEn: "Al-Fatihah",
      ayahRef: "1:1",
      arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
      translation: "In the name of Allah, the Entirely Merciful, the Especially Merciful.",
      notice: "One phrase, both new roles at once: بِسْمِ (بِ + اسْمِ) is مخفوض بالحرف — مجرور بالباء. اللَّهِ right after it is مخفوض بالإضافة — مضاف إليه لـ(اسْمِ)، مجرور بالإضافة لا بحرف. You'll meet each one in its own lesson next."
    },

    practiceQuestions: [
      {
        id: "p1",
        type: "true-false",
        prompt: "Your book lists exactly three ways a noun becomes مجرور.",
        correct: true,
        explanation: "Right — بالحرف، بالإضافة، وبالتبعية (following a مجرور word as its تابع)."
      },
      {
        id: "p2",
        type: "multiple-choice",
        prompt: "In ﴿بِسْمِ اللَّهِ﴾, how does اللَّهِ become مجرور?",
        options: [
          { id: "a", labelEn: "By idafah — it's مضاف إليه" },
          { id: "b", labelEn: "By a preposition directly before it" },
          { id: "c", labelEn: "By following a تابع" }
        ],
        correctOptionId: "a",
        explanation: "Right — اللَّهِ is مضاف إليه to اسْمِ, no preposition needed."
      },
      {
        id: "p3",
        type: "true-false",
        prompt: "تابع للمخفوض (النعت، العطف، التوكيد، البدل) is covered in this lesson set.",
        correct: false,
        explanation: "No — it's the same تابع category already reserved for a future lesson in the مرفوعات and منصوبات maps."
      }
    ],

    summary: [
      "المجرورات: three ways a noun becomes مجرور. This lesson set covers two of them.",
      "تابع للمخفوض stays reserved for the same future cross-case تابع lesson already flagged in Lessons 4.1 and 4.6.",
      "Same model as always: ROLE → STATE → SIGN. Next: المخفوض بالحرف, the most common one."
    ],

    completion: {
      titleAr: "المجرورات: نظرة عامة",
      statement: "Three ways to earn خفض. Next: المخفوض بالحرف."
    }
  },

  "4.16": {
    id: "4.16",
    steps: ["intro", "concept", "example", "quran", "notice", "practice", "challenge", "summary", "completion"],

    sourceNote: {
      status: "book-cited",
      label: "Sourced from your reference book — pages 169–172",
      detail: "المخفوض بالحرف: هُوَ مَا يُخْفَضُ بِـ«مِنْ، وَإِلَى، وَعَنْ، وَعَلَى، وَفِي» (p. 169), with the longer list on p. 170 adding «الباء، واللام، والكاف، وحتى، والواو، والتاء، ورُبَّ، ومُذْ، ومُنذُ». This lesson covers the common separate-word particles (من، إلى، عن، على، في) and the always-fused single-letter ones (الباء، اللام، الكاف) at headline level. The oath-particle shawahid and the detail on which particles تختص بالظاهر (pp. 170–173), plus زيادة \"ما\" after certain particles (pp. 174–176), are real book content but narrow sub-detail beyond this foundational lesson's scope — summarized here only as a passing note, not drilled. The book's own citations for this role are short oath-swearing fragments (تَاللَّهِ، وَرَبِّ الكَعْبَةِ، etc.) that don't make a clean single teaching example, so this lesson's Qur'an widget uses QURRA's own independently-verified citation instead — see the note on its verse."
    },

    intro: {
      titleAr: "المخفوض بالحرف",
      titleEn: "The Object of a Preposition",
      statement: "The most common way a noun becomes مجرور: a preposition — حرف جر — placed right before it."
    },

    objective: [
      "define المخفوض بالحرف and name its most common particles",
      "tell apart a separate-word particle (من، إلى، عن، على، في) from an always-fused one (الباء، اللام، الكاف)",
      "recognize المخفوض بالحرف in a Qur'anic sentence"
    ],

    concept: {
      termAr: "المخفوض بالحرف",
      kind: "book-cited",
      definitionAr: "المخفوض بالحرف: هُوَ مَا يُخْفَضُ بِـ«مِنْ، وَإِلَى، وَعَنْ، وَعَلَى، وَفِي»، وَ«الْبَاءِ، وَاللَّامِ، وَالْكَافِ»، وَغَيْرِهَا.",
      definitionEn: "A noun put into خفض by a preposition placed directly before it.",
      lead: "Role: مخفوض بالحرف (object of a preposition). State (Part 2): مجرور. Sign (Part 3): whichever fits its shape — الكسرة by default."
    },

    definitionBreakdown: [
      {
        termAr: "مِن، إلى، عن، على، في",
        termEn: "separate words",
        glossEn: "stand on their own before the noun",
        explanation: "ذَهَبْتُ إِلَى الْمَسْجِدِ — إِلَى is its own word, and الْمَسْجِدِ right after it is مجرور."
      },
      {
        termAr: "الباء، اللام، الكاف",
        termEn: "always fused",
        glossEn: "attach directly, no space",
        explanation: "مَرَرْتُ بِزَيْدٍ — بِ isn't a separate word; it's written joined to زَيْدٍ, the same way بِ joins اسْمِ in بِسْمِ اللَّهِ."
      }
    ],

    example: {
      kind: "traditional-grammar-example",
      kindLabel: "Traditional grammar example — the standard illustration this tradition itself uses, not from the Qur'an",
      arabic: "ذَهَبْتُ إِلَى الْمَسْجِدِ",
      transliteration: "Dhahabtu ila l-masjidi",
      translation: "I went to the mosque",
      explanation: "إِلَى — a separate-word حرف جر. الْمَسْجِدِ right after it is مخفوض, بالكسرة الظاهرة.",
      contrast: {
        arabic: "مَرَرْتُ بِزَيْدٍ",
        translation: "I passed by Zayd",
        explanation: "بِ this time — fused directly onto زَيْدٍ, no space between them. Still the exact same job: زَيْدٍ is مخفوض بالحرف."
      }
    },

    quranExample: {
      surahAr: "النصر",
      surahEn: "An-Nasr",
      ayahRef: "110:2",
      arabic: "وَرَأَيْتَ النَّاسَ يَدْخُلُونَ فِي دِينِ اللَّهِ أَفْوَاجًا",
      translation: "And you see the people entering into the religion of Allah in multitudes.",
      notice: "دِينِ — المخفوض بالحرف, مجرورة بـ«في» (a separate-word particle), بالكسرة الظاهرة. The same phrase's اللَّهِ is a different مجرورات role entirely — you'll meet it in the next lesson.",
      wordNotes: {
        "110-2-w5": { conceptLabel: "مخفوض بالحرف", explanation: "دِينِ — مجرورة بحرف الجر «في»، وعلامة جرها الكسرة الظاهرة." }
      }
    },

    noticeInteraction: {
      type: "word-tap",
      ayahRef: "110:2",
      instanceId: "4.16-notice",
      promptContext: "An-Nasr 110:2",
      question: "Tap the word that is المخفوض بالحرف here.",
      correctWordId: "110-2-w5",
      correctFeedback: "Right — في is the preposition; دِينِ is what it puts into خفض.",
      incorrectFeedback: "Not quite — look for the word directly after في, the preposition itself.",
      wordNotes: {
        "110-2-w4": { conceptLabel: "حرف جر", explanation: "في — حرف جر، كلمة منفصلة لا محل لها من الإعراب." },
        "110-2-w5": { conceptLabel: "مخفوض بالحرف", explanation: "دِينِ — مجرورة بحرف الجر «في»، وعلامة جرها الكسرة الظاهرة." },
        "110-2-w6": { conceptLabel: "مخفوض بالإضافة", explanation: "اللَّهِ — مضاف إليه لـ(دِينِ)، مجرورة بالإضافة لا بحرف الجر. Lesson 4.17's own role." }
      }
    },

    practiceQuestions: [
      {
        id: "p1",
        type: "true-false",
        prompt: "الباء، اللام، and الكاف are written as separate words before the noun they govern.",
        correct: false,
        explanation: "No — they're always fused directly onto the following word, like بِ in بِسْمِ."
      },
      {
        id: "p2",
        type: "multiple-choice",
        prompt: "In ﴿فِي دِينِ اللَّهِ﴾, what makes دِينِ مجرورة?",
        options: [
          { id: "a", labelAr: "حرف الجر «في»" },
          { id: "b", labelAr: "الإضافة" },
          { id: "c", labelAr: "التبعية" }
        ],
        correctOptionId: "a",
        explanation: "Right — في is the preposition putting دِينِ into خفض."
      },
      {
        id: "p3",
        type: "true-false",
        prompt: "من، إلى، عن، على، and في are the only prepositions your book lists.",
        correct: false,
        explanation: "No — your book lists several more (الباء، اللام، الكاف، حتى، الواو، التاء، رُبَّ، مُذْ، مُنذُ), summarized here at headline level only."
      }
    ],

    quranChallenge: {
      surahAr: "النصر",
      surahEn: "An-Nasr",
      ayahRef: "110:2",
      arabic: "وَرَأَيْتَ النَّاسَ يَدْخُلُونَ فِي دِينِ اللَّهِ أَفْوَاجًا",
      translation: "And you see the people entering into the religion of Allah in multitudes.",
      question: "Which sign marks دِينِ's خفض here?",
      options: [
        { id: "kasra", labelAr: "الكسرة" },
        { id: "fatha", labelAr: "الفتحة" },
        { id: "ya", labelAr: "الياء" }
      ],
      correctOptionId: "kasra",
      explanation: "Right — a plain مفرد noun takes خفض's default sign, الكسرة الظاهرة, exactly as Part 3 taught."
    },

    summary: [
      "المخفوض بالحرف: a noun put into خفض by a preposition right before it — either a separate word (من، إلى، عن، على، في) or an always-fused one (الباء، اللام، الكاف).",
      "The full particle list is longer still (pp. 169–176); this lesson keeps to the common ones.",
      "Next: المخفوض بالإضافة — خفض with no preposition at all."
    ],

    completion: {
      titleAr: "المخفوض بالحرف",
      statement: "The most common path to خفض. Next: خفض with no preposition at all."
    }
  },

  "4.17": {
    id: "4.17",
    steps: ["intro", "concept", "example", "quran", "notice", "practice", "challenge", "summary", "completion"],

    sourceNote: {
      status: "book-cited",
      label: "Sourced from your reference book — pages 179–180",
      detail: "وَأَمَّا المَخْفُوضُ بِالْإِضَافَةِ، فَنَحْوُ: «غُلَامُ زَيْدٍ»، وَيَجِبُ تَجْرِيدُ المُضَافِ مِنَ التَّنْوِينِ، وَمِنْ نُونَيِ التَّثْنِيَةِ وَالجَمْعِ (p. 179), with أقسام الإضافة من حيث تقدير حرف الجر (باللام، وبِمن، وبِفي) and أنواعها من حيث الفائدة (لفظية ومعنوية) (p. 180) summarized at headline level. Page 181's own continuation moves into المراد بالصفة — the start of التابع للمخفوض (النعت) — intentionally not built here; see this batch's own header note."
    },

    intro: {
      titleAr: "المخفوض بالإضافة",
      titleEn: "The Genitive by Idafah",
      statement: "A completely different path to خفض: no preposition at all — just one noun added directly to another."
    },

    objective: [
      "define الإضافة and recognize المضاف إليه",
      "state the one rule every مضاف must follow: drop its تنوين (or its نون)",
      "recognize المخفوض بالإضافة in a Qur'anic sentence"
    ],

    concept: {
      termAr: "المخفوض بالإضافة",
      kind: "book-cited",
      definitionAr: "وَأَمَّا المَخْفُوضُ بِالْإِضَافَةِ، فَنَحْوُ: «غُلَامُ زَيْدٍ».",
      definitionEn: "A noun made مجرور simply by being added (أُضيف) right after another noun — no preposition in sight.",
      lead: "Role: مضاف إليه. State (Part 2): مجرور. Sign (Part 3): usually الكسرة — or الياء for a مثنى or جمع مذكر سالم, exactly as Part 3's علامات الخفض already taught, using this very same phrase's اللَّهِ."
    },

    definitionBreakdown: [
      {
        termAr: "تجريد المضاف",
        termEn: "the one firm rule",
        glossEn: "no تنوين, no نون",
        explanation: "غُلَامُ زَيْدٍ — غُلَامٌ drops its تنوين the moment it becomes مضاف. In the dual/plural: غُلَامَا زَيْدٍ (drops نون التثنية), كَاتِبُو عَمْرٍو (drops نون الجمع)."
      },
      {
        termAr: "لفظية أم معنوية",
        termEn: "two types",
        glossEn: "by what the idafah actually does",
        explanation: "معنوية (most common) — the مضاف إليه makes the whole phrase تعريفًا (definite, if مضاف إليه is definite) or تخصيصًا (narrower, if indefinite). لفظية — the مضاف is itself a صفة (ضَارِبُ زَيْدٍ، \"one who hits Zayd\"), and the phrase stays exactly as definite or indefinite as the صفة alone was."
      }
    ],

    example: {
      kind: "book-example",
      kindLabel: "The book's own example",
      arabic: "غُلَامُ زَيْدٍ",
      transliteration: "Ghulāmu Zaydin",
      translation: "Zayd's boy / Zayd's servant",
      explanation: "غُلَامُ (مضاف — no تنوين) + زَيْدٍ (مضاف إليه، مجرور بالكسرة). Idafah alone makes زَيْدٍ مجرور — no preposition anywhere in the phrase.",
      contrast: {
        arabic: "غُلَامٌ",
        translation: "\"a boy / a servant\" (on its own)",
        explanation: "Without a مضاف إليه, غُلَامٌ keeps its own تنوين and stays indefinite. Adding زَيْدٍ right after it is what strips the تنوين and makes the whole phrase definite."
      }
    },

    quranExample: {
      surahAr: "النصر",
      surahEn: "An-Nasr",
      ayahRef: "110:2",
      arabic: "وَرَأَيْتَ النَّاسَ يَدْخُلُونَ فِي دِينِ اللَّهِ أَفْوَاجًا",
      translation: "And you see the people entering into the religion of Allah in multitudes.",
      notice: "اللَّهِ — المخفوض بالإضافة, مضاف إليه لـ(دِينِ)، مجرورة بالكسرة. The same phrase's دِينِ was Lesson 4.16's own role — مخفوض بالحرف. Two different paths to خفض, one phrase.",
      wordNotes: {
        "110-2-w6": { conceptLabel: "مخفوض بالإضافة", explanation: "اللَّهِ — مضاف إليه لـ(دِينِ)، مجرورة بالكسرة الظاهرة." }
      }
    },

    noticeInteraction: {
      type: "word-tap",
      ayahRef: "110:2",
      instanceId: "4.17-notice",
      promptContext: "An-Nasr 110:2",
      question: "Tap the word that is المخفوض بالإضافة here.",
      correctWordId: "110-2-w6",
      correctFeedback: "Right — اللَّهِ is added directly to دِينِ, with no preposition between them. That's الإضافة.",
      incorrectFeedback: "Not quite — دِينِ is مخفوض too, but by a preposition (في), not by idafah. Look at the word added directly after it.",
      wordNotes: {
        "110-2-w5": { conceptLabel: "مخفوض بالحرف", explanation: "دِينِ — مجرورة بحرف الجر «في». Lesson 4.16's own role, not this one." },
        "110-2-w6": { conceptLabel: "مخفوض بالإضافة", explanation: "اللَّهِ — مضاف إليه لـ(دِينِ)، مجرورة بالكسرة الظاهرة." }
      }
    },

    practiceQuestions: [
      {
        id: "p1",
        type: "true-false",
        prompt: "المضاف keeps its تنوين even after becoming مضاف.",
        correct: false,
        explanation: "No — the one firm rule: a مضاف drops its تنوين (or its نون, in the dual/plural)."
      },
      {
        id: "p2",
        type: "multiple-choice",
        prompt: "In ﴿غُلَامُ زَيْدٍ﴾, why is زَيْدٍ مجرورة?",
        options: [
          { id: "a", labelAr: "لأنه مضاف إليه" },
          { id: "b", labelAr: "لأنه مسبوق بحرف جر" },
          { id: "c", labelAr: "لأنه تابع" }
        ],
        correctOptionId: "a",
        explanation: "Right — idafah alone makes it مجرور, with no preposition anywhere in the phrase."
      },
      {
        id: "p3",
        type: "true-false",
        prompt: "اللَّهِ in ﴿فِي دِينِ اللَّهِ﴾ is مجرورة by the same preposition that makes دِينِ مجرورة.",
        correct: false,
        explanation: "No — دِينِ is مخفوض بحرف الجر «في»; اللَّهِ right after it is مخفوض بالإضافة, a different path entirely."
      }
    ],

    quranChallenge: {
      surahAr: "النصر",
      surahEn: "An-Nasr",
      ayahRef: "110:2",
      arabic: "وَرَأَيْتَ النَّاسَ يَدْخُلُونَ فِي دِينِ اللَّهِ أَفْوَاجًا",
      translation: "And you see the people entering into the religion of Allah in multitudes.",
      question: "What role does اللَّهِ play here?",
      options: [
        { id: "mudafilayh", labelAr: "مضاف إليه" },
        { id: "mafulbih", labelAr: "مفعول به" },
        { id: "fail", labelAr: "فاعل" }
      ],
      correctOptionId: "mudafilayh",
      explanation: "Right — اللَّهِ is مضاف إليه for دِينِ, مخفوض بالإضافة."
    },

    summary: [
      "المخفوض بالإضافة: a noun made مجرور simply by being added right after another noun — غُلَامُ زَيْدٍ, no preposition in sight.",
      "One firm rule: المضاف drops its تنوين (or its نون in the dual/plural). Two types: لفظية and معنوية.",
      "All sixteen of Part 4's own roles are now taught — مرفوعات، منصوبات، ومجرورات. تابع للمخفوض stays reserved for a future lesson, and النواسخ for Part 5, exactly as the maps in Lessons 4.1, 4.6, and 4.15 said all along."
    ],

    completion: {
      titleAr: "المخفوض بالإضافة",
      statement: "Part 4 complete — المرفوعات، المنصوبات، والمجرورات, every role now taught. التوابع is next, in Part 5."
    }
  },

  /* ----------------------------------------------------------------------
     PART 5 — التوابع
     Source: pages 201–224 (14 images, pp. 201–207 النعت, 208–215 العطف,
     216–221 التوكيد, 221–224 البدل). All 14 images individually read and
     verified legible before any lesson content was written; no illegible
     or ambiguous pages. Lesson boundaries follow the source's own natural
     breaks rather than the task brief's non-binding six-lesson sketch:
     النعت alone spans three lessons (its own agreement-grid detail, pp.
     202–205, and its سببي/أغراض material, pp. 205–207, are substantial
     enough to need the room); العطف's ten-particle semantic detail (pp.
     211–215) is split into its own headline-level lesson rather than
     folded into 5.5, consistent with the "do not over-teach" instruction;
     a closing map lesson (5.9) follows the same pattern already
     established by Lesson 3.8. Net: nine lessons, 5.1–5.9, not six.

     IMPORTANT renumbering note (read alongside js/data.js): per the task
     brief, the existing نواسخ curriculum stub — previously Part 5 — moves
     to Part 6 in this same change, and this new التوابع content becomes
     the real Part 5. See the "CURRICULUM RENUMBERING" comment in
     js/data.js for the full accounting.
     ---------------------------------------------------------------------- */

  "5.1": {
    id: "5.1",
    steps: ["intro", "concept", "example", "practice", "summary", "completion"],

    sourceNote: {
      status: "book-cited",
      label: "Sourced from your reference book — pages 201, 208–211, 221–222",
      detail: "Your book never states a single, general \"التابع is...\" sentence up front. Instead, the same two words — التَّابِعُ ... مَتْبُوعِهِ — reappear inside three of the four categories' own opening definitions: النعت (p. 201), عطف البيان (p. 208), and عطف النسق (p. ~211), plus البدل's own \"التَّابِعُ الْمَقْصُودُ بِالْحُكْمِ بِلَا وَاسِطَةٍ\" (pp. 221–222). This lesson's concept is built directly from that repeated pattern across the book's own four lines, not from an invented general theory. التوكيد (pp. 216–221) sits in the same chapter and follows the identical rule in practice, but its own opening line doesn't repeat that exact phrasing — see the honest note on it below."
    },

    intro: {
      titleAr: "ما هي التوابع؟",
      titleEn: "What Are the Tawabi'?",
      statement: "A new kind of relationship: a word that doesn't earn its own grammatical state — it simply follows another word's."
    },

    objective: [
      "state the general idea: a تابع follows its متبوع's grammatical state, rather than earning its own",
      "name the four تابع categories your book covers, in the order it covers them",
      "apply متبوع → حالته الإعرابية → تابع → يتبعه to a worked example"
    ],

    concept: {
      termAr: "التابع والمتبوع",
      kind: "book-cited",
      definitionAr: "النَّعْتُ: هُوَ التَّابِعُ الْمُشْتَقُّ، أَوِ الْمُؤَوَّلُ بِهِ، لِلدَّلَالَةِ عَلَى مَعْنًى فِي مَتْبُوعِهِ.",
      definitionEn: "Your book's very first التوابع definition already contains the whole idea: a تابع describes something about its متبوع — it doesn't carry a separate grammatical state of its own.",
      lead: "Watch the same two words — التَّابِعُ ... مَتْبُوعِهِ — reappear in the book's own opening line for three more categories. That repetition, not a textbook theory, is this lesson's whole point."
    },

    definitionBreakdown: [
      {
        termAr: "النعت",
        termEn: "p. 201",
        glossEn: "التابع المشتق أو المؤوَّل به",
        explanation: "«هُوَ التَّابِعُ الْمُشْتَقُّ، أَوِ الْمُؤَوَّلُ بِهِ، لِلدَّلَالَةِ عَلَى مَعْنًى فِي مَتْبُوعِهِ.» — a تابع describing a quality already in its متبوع."
      },
      {
        termAr: "عطف البيان",
        termEn: "p. 208",
        glossEn: "التابع المشبه الصفة",
        explanation: "«هُوَ التَّابِعُ الْمُشَبَّهُ الصِّفَةِ فِي تَوْضِيحِ مَتْبُوعِهِ إِنْ كَانَ مَعْرِفَةً.» — a تابع clarifying exactly who or what its متبوع is."
      },
      {
        termAr: "عطف النسق",
        termEn: "p. ~211",
        glossEn: "التابع بحرف من حروف العشرة",
        explanation: "«هُوَ التَّابِعُ الَّذِي يَتَوَسَّطُ بَيْنَهُ وَبَيْنَ مَتْبُوعِهِ حَرْفٌ مِنْ حُرُوفِ الْعَشَرَةِ.» — the same تابع/متبوع pattern, this time linked by a particle."
      },
      {
        termAr: "البدل",
        termEn: "pp. 221–222",
        glossEn: "التابع المقصود بالحكم",
        explanation: "«هُوَ: التَّابِعُ الْمَقْصُودُ بِالْحُكْمِ بِلَا وَاسِطَةٍ.» — the same genus word one more time, this time for the تابع that's actually meant by the sentence."
      },
      {
        termAr: "التوكيد",
        termEn: "pp. 216–221 — stated honestly",
        glossEn: "same chapter, different phrasing",
        explanation: "التوكيد sits in the very same التوابع chapter and behaves by the identical rule — المؤكِّد takes on المؤكَّد's own إعراب exactly — but its own opening line doesn't repeat the literal phrase التابع...متبوعه the way the other three do. Same relationship, a different sentence; this lesson won't pretend otherwise."
      }
    ],

    conceptTree: {
      root: { ar: "التوابع", en: "four categories" },
      branches: [
        { ar: "النعت", en: "describes", note: "Lessons 5.2–5.4" },
        { ar: "العطف", en: "links by a particle, or clarifies", note: "Lessons 5.5–5.6" },
        { ar: "التوكيد", en: "strengthens", note: "Lesson 5.7" },
        { ar: "البدل", en: "replaces in meaning", note: "Lesson 5.8" }
      ]
    },

    example: {
      kind: "traditional-grammar-example",
      kindLabel: "A constructed teaching example — not from your reference book's own text",
      arabic: "جَاءَ زَيْدٌ الْعَالِمُ",
      transliteration: "Jā'a Zaydun al-'ālim",
      translation: "The learned Zayd came",
      explanation: "زَيْدٌ → فاعل (Part 4's own role) → مرفوع (Part 2's state) — it earns مرفوع entirely on its own, by being الفاعل. الْعَالِمُ right after it is different: it isn't فاعل, مفعول, or any independent role at all. It's نعت — a تابع. It takes مرفوع too, but only because it FOLLOWS زَيْدٌ's own مرفوع state: متبوع → حالته الإعرابية → تابع → يتبعه.",
      contrast: {
        arabic: "رَأَيْتُ زَيْدًا الْعَالِمَ",
        translation: "I saw the learned Zayd",
        explanation: "Change زيد's job — now مفعول به, منصوب — and العالم changes with it automatically, منصوبًا too. العالم never asked a verb or an عامل for its own state; it simply follows زيد wherever زيد's state goes."
      }
    },

    practiceQuestions: [
      {
        id: "p1",
        type: "true-false",
        prompt: "A تابع earns its grammatical state independently, the same way الفاعل or المفعول به does.",
        correct: false,
        explanation: "No — a تابع has no independent role at all. It simply follows its متبوع's state, whatever that state is."
      },
      {
        id: "p2",
        type: "multiple-choice",
        prompt: "ما المتبوع في «جَاءَ زَيْدٌ الْعَالِمُ»؟",
        options: [
          { id: "a", labelAr: "زَيْدٌ" },
          { id: "b", labelAr: "الْعَالِمُ" },
          { id: "c", labelAr: "جَاءَ" }
        ],
        correctOptionId: "a",
        explanation: "Right — زَيْدٌ earns فاعل/مرفوع on its own; الْعَالِمُ is its تابع, following it."
      },
      {
        id: "p3",
        type: "multiple-choice",
        prompt: "كم قسمًا للتوابع يذكرها كتابك؟",
        options: [
          { id: "a", labelEn: "3" },
          { id: "b", labelEn: "4" },
          { id: "c", labelEn: "5" }
        ],
        correctOptionId: "b",
        explanation: "Right — four: النعت، العطف، التوكيد، والبدل."
      }
    ],

    summary: [
      "التابع يتبع المتبوع: it follows its متبوع's grammatical state rather than earning one of its own.",
      "The pattern: متبوع → حالته الإعرابية → تابع → يتبعه — proven across the book's own النعت، عطف البيان، عطف النسق، and البدل definitions.",
      "Four categories ahead, starting with the richest one: النعت."
    ],

    completion: {
      titleAr: "ما هي التوابع؟",
      statement: "متبوع → تابع. Next: the first category — النعت."
    }
  },

  "5.2": {
    id: "5.2",
    steps: ["intro", "concept", "example", "quran", "notice", "practice", "challenge", "summary", "completion"],

    sourceNote: {
      status: "book-cited",
      label: "Sourced from your reference book — page 201",
      detail: "النَّعْتُ: هُوَ التَّابِعُ الْمُشْتَقُّ، أَوِ الْمُؤَوَّلُ بِهِ، لِلدَّلَالَةِ عَلَى مَعْنًى فِي مَتْبُوعِهِ (p. 201), with المراد بالمشتق (اسم الفاعل، اسم المفعول، الصفة المشبهة، اسم التفضيل), المراد بالمؤوَّل بالمشتق (اسم الإشارة، الاسم الموصول), and شرط الجملة المنعوت بها (أن يكون منعوتها نكرة) — the book's own worked example for that last condition, البقرة 281, is used directly below."
    },

    intro: {
      titleAr: "النعت: التعريف والشروط",
      titleEn: "An-Na'at: Definition and Conditions",
      statement: "The first — and richest — تابع category: a word (or a جملة) that describes its متبوع."
    },

    objective: [
      "define النعت exactly as your book gives it",
      "name the two shapes a نعت can take: مشتق or مؤوَّل بمشتق",
      "state the one condition a جملة must meet before it can serve as a نعت"
    ],

    concept: {
      termAr: "النعت",
      kind: "book-cited",
      definitionAr: "النَّعْتُ: هُوَ التَّابِعُ الْمُشْتَقُّ، أَوِ الْمُؤَوَّلُ بِهِ، لِلدَّلَالَةِ عَلَى مَعْنًى فِي مَتْبُوعِهِ.",
      definitionEn: "النعت is the تابع that is either مشتق (derived) or treated like one — and its whole job is to describe a quality already present in its متبوع.",
      lead: "Two different shapes, one job: describing. The book names exactly what counts as مشتق, and what else gets treated as if it were one."
    },

    definitionBreakdown: [
      {
        termAr: "المشتق",
        termEn: "genuinely derived",
        glossEn: "p. 201",
        explanation: "اسم الفاعل (ضَارِبٌ), اسم المفعول (مَضْرُوبٌ), الصفة المشبهة (حَسَنٌ), واسم التفضيل (أَعْلَمُ) — all four count as مشتق for النعت's purposes."
      },
      {
        termAr: "المؤوَّل بالمشتق",
        termEn: "treated the same way",
        glossEn: "not literally derived",
        explanation: "اسم الإشارة (هَذَا) واسم الموصول (الَّذِي) — neither is a true مشتق, but your book treats both as able to serve as نعت all the same."
      },
      {
        termAr: "شرط الجملة المنعوت بها",
        termEn: "the one condition",
        glossEn: "المنعوت نكرة",
        explanation: "A whole جملة can serve as نعت — but only when the منعوت it describes is نكرة (indefinite). The book's own example: ﴿وَاتَّقُوا يَوْمًا تُرْجَعُونَ فِيهِ إِلَى اللَّهِ﴾."
      }
    ],

    conceptTree: {
      root: { ar: "النعت", en: "two shapes" },
      branches: [
        { ar: "مشتق", en: "genuinely derived", note: "اسم فاعل، اسم مفعول، صفة مشبهة، اسم تفضيل" },
        { ar: "مؤوَّل بالمشتق", en: "treated the same way", note: "اسم إشارة، اسم موصول" },
        { ar: "جملة", en: "only if منعوتها نكرة", note: "البقرة 281" }
      ]
    },

    example: {
      kind: "book-example",
      kindLabel: "The book's own recurring model phrase",
      arabic: "مَرَرْتُ بِرَجُلٍ عَاقِلٍ",
      transliteration: "Marartu bi-rajulin 'āqilin",
      translation: "I passed by a sensible man",
      explanation: "رَجُلٍ — المنعوت, نكرة. عَاقِلٍ right after it — the نعت, a صفة مشبهة (مشتق), following رجل in its جر.",
      contrast: {
        arabic: "مَرَرْتُ بِرَجُلٍ",
        translation: "I passed by a man",
        explanation: "Drop عَاقِلٍ and the sentence is still complete. النعت is optional extra description — not a required role like الفاعل or الخبر."
      }
    },

    quranExample: {
      surahAr: "البقرة",
      surahEn: "Al-Baqarah",
      ayahRef: "2:281",
      arabic: "وَاتَّقُوا يَوْمًا تُرْجَعُونَ فِيهِ إِلَى اللَّهِ",
      translation: "And fear a Day when you will be returned to Allah.",
      notice: "يَوْمًا — نكرة. تُرْجَعُونَ فِيهِ إِلَى اللَّهِ right after it is a whole جملة فعلية serving as its نعت — valid precisely because يومًا is نكرة, exactly the condition your book states."
    },

    noticeInteraction: {
      type: "choice",
      promptContext: "Al-Baqarah 2:281",
      promptAr: "وَاتَّقُوا يَوْمًا تُرْجَعُونَ فِيهِ إِلَى اللَّهِ",
      question: "أي كلمة هي المنعوت الذي وُصِف بالجملة التي بعده؟",
      options: [
        { id: "a", labelAr: "يَوْمًا", labelEn: "a Day" },
        { id: "b", labelAr: "تُرْجَعُونَ", labelEn: "you will be returned" },
        { id: "c", labelAr: "اللَّهِ", labelEn: "Allah" }
      ],
      correctOptionId: "a",
      correctFeedback: "Right — يَوْمًا is نكرة, and the جملة right after it (تُرجعون فيه إلى الله) is its نعت.",
      incorrectFeedback: "Not quite — look for the نكرة noun right before the جملة begins."
    },

    practiceQuestions: [
      {
        id: "p1",
        type: "true-false",
        prompt: "اسم الإشارة واسم الموصول من المشتقات الحقيقية.",
        correct: false,
        explanation: "No — هما مؤوَّلان بالمشتق، وليسا مشتقين حقيقيين؛ لكن كتابك يعاملهما نفس معاملة المشتق."
      },
      {
        id: "p2",
        type: "multiple-choice",
        prompt: "ما شرط الجملة لتصح نعتًا؟",
        options: [
          { id: "a", labelAr: "أن يكون منعوتها نكرة" },
          { id: "b", labelAr: "أن تبدأ بفعل ماضٍ" },
          { id: "c", labelAr: "لا شرط لها" }
        ],
        correctOptionId: "a",
        explanation: "Right — a جملة can only serve as نعت when its منعوت is نكرة."
      },
      {
        id: "p3",
        type: "multiple-choice",
        prompt: "اسم التفضيل مثل «أَعْلَم» يندرج تحت:",
        options: [
          { id: "a", labelAr: "المشتق" },
          { id: "b", labelAr: "المؤوَّل بالمشتق" },
          { id: "c", labelAr: "لا شيء مما سبق" }
        ],
        correctOptionId: "a",
        explanation: "Right — اسم التفضيل is one of the four shapes your book lists under المشتق."
      }
    ],

    quranChallenge: {
      surahAr: "البقرة",
      surahEn: "Al-Baqarah",
      ayahRef: "2:281",
      arabic: "وَاتَّقُوا يَوْمًا تُرْجَعُونَ فِيهِ إِلَى اللَّهِ",
      translation: "And fear a Day when you will be returned to Allah.",
      question: "ما نوع الجملة «تُرجعون فيه إلى الله» هنا؟",
      options: [
        { id: "naat", labelAr: "نعت لـ«يومًا»" },
        { id: "hal", labelAr: "حال" },
        { id: "sila", labelAr: "صلة موصول" }
      ],
      correctOptionId: "naat",
      explanation: "Right — نعت لـ«يومًا» (نكرة), exactly the condition your book gives."
    },

    summary: [
      "النعت: a تابع describing its متبوع, either مشتق or مؤوَّل بالمشتق.",
      "A whole جملة can serve as نعت too — but only when its منعوت is نكرة.",
      "Next: النعت الحقيقي's full agreement pattern — four dimensions at once."
    ],

    completion: {
      titleAr: "النعت: التعريف والشروط",
      statement: "Defined and conditioned. Next: how exactly a نعت matches its متبوع."
    }
  },

  "5.3": {
    id: "5.3",
    steps: ["intro", "concept", "example", "quran", "notice", "practice", "challenge", "summary", "completion"],

    sourceNote: {
      status: "book-cited",
      label: "Sourced from your reference book — pages 202–205",
      detail: "وَالنَّعْتُ يَتْبَعُ مَنْعُوتَهُ فِي رَفْعِهِ، وَنَصْبِهِ، وَخَفْضِهِ، وَفِي تَعْرِيفِهِ وَتَنْكِيرِهِ، وَفِي تَذْكِيرِهِ وَتَأْنِيثِهِ، وَفِي إِفْرَادِهِ وَتَثْنِيَتِهِ وَجَمْعِهِ (pp. 202–203). The book then works through this across a large grid of examples (pp. 204–205: رجلٌ عاقلٌ، رجلان عاقلان، رجال عاقلون، امرأة عاقلة، and more besides). That full grid is real book content but highly repetitive once the pattern is clear — this lesson teaches the four dimensions with one representative pair rather than drilling every combination, the same 'do not over-teach' discipline already used elsewhere in this project."
    },

    intro: {
      titleAr: "النعت الحقيقي: المطابقة في أربعة أمور",
      titleEn: "True Na't: Agreement in Four Things",
      statement: "The main pattern: a نعت matches its متبوع in four separate ways, all at once."
    },

    objective: [
      "list the four agreement dimensions your book gives for النعت الحقيقي",
      "apply all four to a single phrase",
      "recognize a matching نعت in a Qur'anic phrase"
    ],

    concept: {
      termAr: "النعت الحقيقي",
      kind: "book-cited",
      definitionAr: "وَالنَّعْتُ يَتْبَعُ مَنْعُوتَهُ فِي رَفْعِهِ، وَنَصْبِهِ، وَخَفْضِهِ، وَفِي تَعْرِيفِهِ وَتَنْكِيرِهِ، وَفِي تَذْكِيرِهِ وَتَأْنِيثِهِ، وَفِي إِفْرَادِهِ وَتَثْنِيَتِهِ وَجَمْعِهِ.",
      definitionEn: "A true (direct) نعت matches its متبوع in four separate things at once: its إعراب state, its definiteness, its gender, and its number.",
      lead: "Four dimensions, matched simultaneously — not just the case ending. Change any one of the four on the متبوع, and the نعت changes with it."
    },

    definitionBreakdown: [
      {
        termAr: "الإعراب",
        termEn: "رفع، نصب، خفض",
        glossEn: "رَجُلٌ عَاقِلٌ / رَجُلًا عَاقِلًا / رَجُلٍ عَاقِلٍ",
        explanation: "Whatever state المنعوت takes, النعت takes the exact same one."
      },
      {
        termAr: "التعريف والتنكير",
        termEn: "definite or indefinite",
        glossEn: "رَجُلٌ عَاقِلٌ / الرَّجُلُ الْعَاقِلُ",
        explanation: "A نكرة منعوت takes a نكرة نعت; a معرفة منعوت takes a معرفة نعت — never mixed."
      },
      {
        termAr: "التذكير والتأنيث",
        termEn: "gender",
        glossEn: "رَجُلٌ عَاقِلٌ / امْرَأَةٌ عَاقِلَةٌ",
        explanation: "النعت matches المنعوت's gender exactly."
      },
      {
        termAr: "الإفراد والتثنية والجمع",
        termEn: "number",
        glossEn: "رَجُلٌ عَاقِلٌ / رَجُلَانِ عَاقِلَانِ / رِجَالٌ عَاقِلُونَ",
        explanation: "مفرد، مثنى، أو جمع — النعت follows المنعوت's number too."
      }
    ],

    conceptTree: {
      root: { ar: "أربعة أمور", en: "all at once" },
      branches: [
        { ar: "الإعراب", en: "رفع / نصب / خفض" },
        { ar: "التعريف والتنكير", en: "معرفة / نكرة" },
        { ar: "التذكير والتأنيث", en: "مذكر / مؤنث" },
        { ar: "العدد", en: "مفرد / مثنى / جمع" }
      ]
    },

    example: {
      kind: "book-example",
      kindLabel: "The book's own agreement grid, one pair from it",
      arabic: "جَاءَ رَجُلَانِ عَاقِلَانِ",
      transliteration: "Jā'a rajulāni 'āqilāni",
      translation: "Two sensible men came",
      explanation: "رَجُلَانِ — مثنى، مرفوع، نكرة، مذكر. عَاقِلَانِ matches it in all four at once: مثنى، مرفوع، نكرة، مذكر.",
      contrast: {
        arabic: "جَاءَتِ امْرَأَتَانِ عَاقِلَتَانِ",
        translation: "Two sensible women came",
        explanation: "Change the gender and number together, and النعت follows both changes at once — عَاقِلَتَانِ is now مثنى ومؤنث too."
      }
    },

    quranExample: {
      surahAr: "الفاتحة",
      surahEn: "Al-Fatihah",
      ayahRef: "1:1",
      arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
      translation: "In the name of Allah, the Entirely Merciful, the Especially Merciful.",
      notice: "الرَّحْمَٰنِ and الرَّحِيمِ are both نعت لـ(اللَّهِ) — both مجرورتان (تتبعانه في الجر), معرفتان (تتبعانه في التعريف), مفردتان ومذكّرتان (تتبعانه في العدد والتذكير). Two تابع words, matching their متبوع in all four dimensions at once.",
      wordNotes: {
        "1-1-w2": { conceptLabel: "المنعوت", explanation: "اللَّهِ — مجرور، معرفة، مفرد، مذكر." },
        "1-1-w3": { conceptLabel: "نعت أول", explanation: "الرَّحْمَٰنِ — يطابق اللَّهِ في الأربعة كلها." },
        "1-1-w4": { conceptLabel: "نعت ثانٍ", explanation: "الرَّحِيمِ — نعت ثانٍ، يطابق اللَّهِ أيضًا." }
      }
    },

    noticeInteraction: {
      type: "word-tap",
      ayahRef: "1:1",
      instanceId: "5.3-notice",
      promptContext: "Al-Fatihah 1:1",
      question: "Tap the word that comes right after اللَّهِ as its first نعت.",
      correctWordId: "1-1-w3",
      correctFeedback: "Right — الرَّحْمَٰنِ is the first نعت, matching اللَّهِ in جر، تعريف، إفراد، and تذكير all at once.",
      incorrectFeedback: "Not quite — look for the word immediately after اللَّهِ.",
      wordNotes: {
        "1-1-w2": { conceptLabel: "المنعوت", explanation: "اللَّهِ — مجرور، معرفة، مفرد، مذكر." },
        "1-1-w3": { conceptLabel: "نعت أول", explanation: "الرَّحْمَٰنِ — يطابق اللَّهِ في الأربعة كلها." },
        "1-1-w4": { conceptLabel: "نعت ثانٍ", explanation: "الرَّحِيمِ — نعت ثانٍ، نفس النمط." }
      }
    },

    practiceQuestions: [
      {
        id: "p1",
        type: "true-false",
        prompt: "يتبع النعتُ الحقيقي منعوته في أربعة أمور معًا: الإعراب، التعريف والتنكير، التذكير والتأنيث، والعدد.",
        correct: true,
        explanation: "Right — exactly the book's own four-way list."
      },
      {
        id: "p2",
        type: "multiple-choice",
        prompt: "في «امْرَأَتَانِ عَاقِلَتَانِ»، كيف يتبع النعت المنعوت في العدد والتذكير؟",
        options: [
          { id: "a", labelAr: "مثنى ومؤنث، مثلها تمامًا" },
          { id: "b", labelAr: "مفرد ومذكر" },
          { id: "c", labelAr: "جمع ومؤنث" }
        ],
        correctOptionId: "a",
        explanation: "Right — النعت الحقيقي always matches منعوته's own gender and number."
      },
      {
        id: "p3",
        type: "multiple-choice",
        prompt: "في البسملة، ماذا تبع «الرَّحْمَٰنِ» و«الرَّحِيمِ» من «اللَّهِ» في الإعراب؟",
        options: [
          { id: "a", labelAr: "الجر" },
          { id: "b", labelAr: "الرفع" },
          { id: "c", labelAr: "النصب" }
        ],
        correctOptionId: "a",
        explanation: "Right — اللَّهِ مجرور بالإضافة لـ(اسْمِ), فتبعه نعتاه في الجر."
      }
    ],

    quranChallenge: {
      surahAr: "الفاتحة",
      surahEn: "Al-Fatihah",
      ayahRef: "1:1",
      arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
      translation: "In the name of Allah, the Entirely Merciful, the Especially Merciful.",
      question: "ما إعراب الرَّحِيمِ هنا؟",
      options: [
        { id: "a", labelAr: "نعت ثانٍ مجرور" },
        { id: "b", labelAr: "بدل مرفوع" },
        { id: "c", labelAr: "خبر منصوب" }
      ],
      correctOptionId: "a",
      explanation: "Right — نعت ثانٍ لـ(اللَّهِ), مجرور مثله."
    },

    summary: [
      "النعت الحقيقي matches its متبوع in all four dimensions at once: الإعراب، التعريف والتنكير، التذكير والتأنيث، والعدد.",
      "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ shows two نعت words doing exactly this, back to back.",
      "Next: النعت السببي — the one real twist, where two of the four dimensions switch targets."
    ],

    completion: {
      titleAr: "النعت الحقيقي",
      statement: "Four dimensions, matched at once. Next: the twist — النعت السببي."
    }
  },

  "5.4": {
    id: "5.4",
    steps: ["intro", "concept", "example", "quran", "notice", "practice", "challenge", "summary", "completion"],

    sourceNote: {
      status: "book-cited",
      label: "Sourced from your reference book — pages 205–207",
      detail: "النَّعْتُ السَّبَبِيُّ يَتْبَعُ مَنْعُوتَهُ فِي وَجْهٍ مِنَ الْإِعْرَابِ، وَفِي التَّعْرِيفِ أَوِ التَّنْكِيرِ، وَيَلْزَمُ الْإِفْرَادَ غَالِبًا، لَكِنَّهُ يُطَابِقُ مَا بَعْدَهُ فِي التَّذْكِيرِ وَالتَّأْنِيثِ — synthesized from the book's own rule and its worked examples (القَائِمُ أَبُوهُمَا، pp. 204–205). أغراض النعت وفوائده (p. 207) lists six: تخصيص، توضيح، مدح، ذم، ترحم، توكيد — each with the book's own example, reused below."
    },

    intro: {
      titleAr: "النعت السببي وأغراضه",
      titleEn: "Sababi Na't & Its Purposes",
      statement: "A نعت that describes its متبوع indirectly — by matching what comes AFTER it instead."
    },

    objective: [
      "tell النعت السببي apart from النعت الحقيقي by what it actually agrees with",
      "state the one dimension where السببي breaks step with its متبوع",
      "name the six purposes your book lists for النعت in general"
    ],

    concept: {
      termAr: "النعت السببي",
      kind: "book-cited",
      definitionAr: "النَّعْتُ السَّبَبِيُّ يَتْبَعُ مَنْعُوتَهُ فِي وَجْهٍ مِنَ الْإِعْرَابِ، وَفِي التَّعْرِيفِ أَوِ التَّنْكِيرِ، وَيَلْزَمُ الْإِفْرَادَ غَالِبًا، لَكِنَّهُ يُطَابِقُ -فِي التَّذْكِيرِ وَالتَّأْنِيثِ- مَا بَعْدَهُ لَا مَنْعُوتَهُ.",
      definitionEn: "Unlike النعت الحقيقي, a سببي نعت still matches its متبوع in case and definiteness — but for gender, it agrees with the word that comes AFTER it instead, and it almost always stays singular itself.",
      lead: "This is the one real twist in النعت: two of the four dimensions switch targets."
    },

    definitionBreakdown: [
      {
        termAr: "ما يبقى كما هو",
        termEn: "unchanged",
        glossEn: "الإعراب + التعريف/التنكير",
        explanation: "These two still follow المنعوت directly, exactly like النعت الحقيقي."
      },
      {
        termAr: "ما يتغيّر",
        termEn: "the twist",
        glossEn: "التذكير/التأنيث + العدد",
        explanation: "These now follow the اسم that comes right after النعت (usually its own فاعل), not المنعوت — and النعت itself almost always stays مفرد لفظًا."
      },
      {
        termAr: "القَائِمُ أَبُوهُمَا",
        termEn: "the book's own example",
        glossEn: "pp. 204–205",
        explanation: "القَائِمُ — نعت سببي, مفرد مذكر, regardless of what أَبُوهُمَا's owner is — it matches أَبُوهُمَا itself (مفرد مذكر) in gender."
      }
    ],

    conceptTree: {
      root: { ar: "النعت", en: "two patterns" },
      branches: [
        { ar: "حقيقي", en: "يطابق المنعوت في كل شيء", note: "Lesson 5.3" },
        { ar: "سببي", en: "يطابق المنعوت في اثنين، وما بعده في الباقي" }
      ]
    },

    example: {
      kind: "book-example",
      kindLabel: "The book's own agreement pattern, applied",
      arabic: "جَاءَ رَجُلٌ قَائِمٌ أَبُوهُ",
      transliteration: "Jā'a rajulun qā'imun abūhu",
      translation: "A man whose father is standing came",
      explanation: "قَائِمٌ — نعت سببي, مرفوع ونكرة (يتبع رَجُلٌ). لكنه مفرد مذكر لأن «أَبُوهُ» — الاسم الذي بعده — مفرد مذكر، لا لأن رجلٌ كذلك.",
      contrast: {
        arabic: "جَاءَتِ امْرَأَةٌ قَائِمٌ أَبُوهَا",
        translation: "A woman whose father is standing came",
        explanation: "المنعوت تأنّث (امْرَأَةٌ)، لكن النعت السببي بقي «قَائِمٌ» — مذكر مفرد — لأنه يطابق «أَبُوهَا» لا «امرأة». هذا بالضبط ما يميزه عن النعت الحقيقي."
      }
    },

    threeTypes: {
      lead: "p. 207 — your book's own six أغراض النعت, each with its own example:",
      items: [
        { termAr: "تخصيص", glossEn: "مَرَرْتُ بِرَجُلٍ صَالِحٍ" },
        { termAr: "توضيح", glossEn: "جَاءَ زَيْدٌ الْعَالِمُ" },
        { termAr: "مدح", glossEn: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ" },
        { termAr: "ذم", glossEn: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ" },
        { termAr: "ترحم", glossEn: "اللَّهُمَّ ارْحَمْ عَبْدَكَ الْمِسْكِينَ" },
        { termAr: "توكيد", glossEn: "ذَٰلِكَ تَقْدِيرُ الْعَزِيزِ الْعَلِيمِ" }
      ],
      note: "The middle four are Arabic formulas and supplications, not standalone Qur'anic ayat in their own right — this lesson's live Qur'an widget below reuses بِسْمِ اللَّهِ for the مدح purpose specifically, exactly as your book frames it."
    },

    quranExample: {
      surahAr: "الفاتحة",
      surahEn: "Al-Fatihah",
      ayahRef: "1:1",
      arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
      translation: "In the name of Allah, the Entirely Merciful, the Especially Merciful.",
      notice: "Lesson 5.3 looked at الرَّحْمَٰنِ والرَّحِيمِ as agreement in action. Your book also names this exact phrase for a second reason (p. 207): it's the given example for نعتٌ غرضه المدح — a نعت whose purpose is praise, not just distinguishing the منعوت from others."
    },

    noticeInteraction: {
      type: "choice",
      promptContext: "النعت السببي",
      promptAr: "جَاءَتِ امْرَأَةٌ قَائِمٌ أَبُوهَا",
      question: "لماذا بقي النعت «قَائِمٌ» بصيغة المذكر المفرد مع أن المنعوت «امرأة» مؤنثة؟",
      options: [
        { id: "a", labelAr: "لأنه نعت سببي، يطابق «أَبُوهَا» لا «امرأة»", labelEn: "It's سببي — matches أَبُوهَا, not امرأة" },
        { id: "b", labelAr: "لأن هذا خطأ لغوي", labelEn: "It's a grammatical error" },
        { id: "c", labelAr: "لأن كل نعت يلزم صيغة واحدة دائمًا", labelEn: "Every نعت always keeps one fixed form" }
      ],
      correctOptionId: "a",
      correctFeedback: "Right — النعت السببي matches the word after it (أَبُوهَا) in gender and number, not its own منعوت.",
      incorrectFeedback: "Not quite — this is exactly the twist النعت السببي introduces. Look at what أَبُوهَا's own gender and number are."
    },

    practiceQuestions: [
      {
        id: "p1",
        type: "true-false",
        prompt: "النعت السببي يطابق منعوته في التذكير والتأنيث دائمًا، تمامًا كالنعت الحقيقي.",
        correct: false,
        explanation: "No — this is exactly where النعت السببي differs: it matches the word AFTER it in gender, not its منعوت."
      },
      {
        id: "p2",
        type: "multiple-choice",
        prompt: "كم من الأمور الأربعة يطابق فيها النعت السببي منعوته مباشرة؟",
        options: [
          { id: "a", labelAr: "اثنان فقط — الإعراب والتعريف" },
          { id: "b", labelAr: "أربعة كلها" },
          { id: "c", labelAr: "واحد فقط" }
        ],
        correctOptionId: "a",
        explanation: "Right — الإعراب والتعريف/التنكير still match المنعوت; التذكير/التأنيث and العدد switch to the following word."
      },
      {
        id: "p3",
        type: "multiple-choice",
        prompt: "«بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ» مثال كتابك لأي غرض من أغراض النعت؟",
        options: [
          { id: "a", labelAr: "المدح" },
          { id: "b", labelAr: "الذم" },
          { id: "c", labelAr: "التخصيص" }
        ],
        correctOptionId: "a",
        explanation: "Right — p. 207 names this exact phrase for المدح."
      }
    ],

    quranChallenge: {
      surahAr: "الفاتحة",
      surahEn: "Al-Fatihah",
      ayahRef: "1:1",
      arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
      translation: "In the name of Allah, the Entirely Merciful, the Especially Merciful.",
      question: "ما الغرض الذي يذكره كتابك لنعتي «الرَّحْمَٰنِ» و«الرَّحِيمِ» هنا؟",
      options: [
        { id: "a", labelAr: "المدح" },
        { id: "b", labelAr: "التخصيص" },
        { id: "c", labelAr: "الذم" }
      ],
      correctOptionId: "a",
      explanation: "Right — المدح, per p. 207."
    },

    summary: [
      "النعت السببي: matches منعوته only in الإعراب and التعريف/التنكير — gender and number come from the word AFTER it instead.",
      "النعت also serves six purposes beyond mere description: تخصيص، توضيح، مدح، ذم، ترحم، توكيد — each with the book's own example.",
      "النعت is done — حقيقي وسببي وأغراضه. Next: a second تابع category, العطف."
    ],

    completion: {
      titleAr: "النعت السببي وأغراضه",
      statement: "النعت complete, in all its forms. Next: العطف."
    }
  },

  "5.5": {
    id: "5.5",
    steps: ["intro", "concept", "example", "quran", "notice", "practice", "challenge", "summary", "completion"],

    sourceNote: {
      status: "book-cited",
      label: "Sourced from your reference book — pages 208–211",
      detail: "عَطْفُ الْبَيَانِ: هُوَ التَّابِعُ الْمُشَبَّهُ الصِّفَةِ فِي تَوْضِيحِ مَتْبُوعِهِ إِنْ كَانَ مَعْرِفَةً (p. 208), with the book's own example أَقْسَمَ بِاللَّهِ أَبُو حَفْصٍ عُمَرُ and its own إعراب note. وَأَمَّا عَطْفُ النَّسَقِ: فَهُوَ التَّابِعُ الَّذِي يَتَوَسَّطُ بَيْنَهُ وَبَيْنَ مَتْبُوعِهِ حَرْفٌ مِنْ حُرُوفِ الْعَشَرَةِ (p. ~211), with the ten particles listed by name: الوَاوُ، وَالفَاءُ، وَثُمَّ، وَحَتَّى، وَأَوْ، وَأَمْ، وَإِمَّا، وَلَا، وَبَلْ، وَلَكِنْ."
    },

    intro: {
      titleAr: "العطف: عطف البيان وعطف النسق",
      titleEn: "Al-'Atf: Bayan and Nasaq",
      statement: "A second تابع category, with two very different shapes: one that clarifies, and one that links by a particle."
    },

    objective: [
      "define عطف البيان and see what makes عمر clarify, not just describe, in the book's own example",
      "define عطف النسق and name المعطوف، المعطوف عليه، and حرف العطف",
      "list all ten حروف العطف your book gives, in order"
    ],

    concept: {
      termAr: "العطف: بيانٌ ونسق",
      kind: "book-cited",
      definitionAr: "عَطْفُ الْبَيَانِ: هُوَ التَّابِعُ الْمُشَبَّهُ الصِّفَةِ فِي تَوْضِيحِ مَتْبُوعِهِ إِنْ كَانَ مَعْرِفَةً. وَعَطْفُ النَّسَقِ: هُوَ التَّابِعُ الَّذِي يَتَوَسَّطُ بَيْنَهُ وَبَيْنَ مَتْبُوعِهِ حَرْفٌ مِنْ حُرُوفِ الْعَشَرَةِ.",
      definitionEn: "Two very different mechanisms, both تابع. عطف بيان clarifies its متبوع directly, no particle involved. عطف نسق links to its متبوع through one of ten specific particles standing between them.",
      lead: "Don't let the shared name fool you — your book treats these as genuinely different تابع types."
    },

    definitionBreakdown: [
      {
        termAr: "عطف البيان",
        termEn: "no particle",
        glossEn: "p. 208",
        explanation: "A second, clearer noun placed right after a معرفة متبوع, with nothing between them. الشاهد: أَقْسَمَ بِاللَّهِ أَبُو حَفْصٍ عُمَرُ — عُمَرُ clarifies exactly who «أَبُو حَفْصٍ» is."
      },
      {
        termAr: "عطف النسق",
        termEn: "needs a particle",
        glossEn: "p. ~211",
        explanation: "المعطوف follows المعطوف عليه, joined by one حرف عطف standing between them."
      },
      {
        termAr: "حروف العطف العشرة",
        termEn: "the exact list",
        glossEn: "p. ~211",
        explanation: "الوَاوُ، وَالفَاءُ، وَثُمَّ، وَحَتَّى، وَأَوْ، وَأَمْ، وَإِمَّا، وَلَا، وَبَلْ، وَلَكِنْ — your book's own ten, in this order."
      }
    ],

    conceptTree: {
      root: { ar: "العطف", en: "two shapes" },
      branches: [
        { ar: "عطف البيان", en: "no particle — clarifies" },
        { ar: "عطف النسق", en: "10 particles — links", note: "و، ف، ثم، حتى، أو، أم، إما، لا، بل، لكن" }
      ]
    },

    example: {
      kind: "book-example",
      kindLabel: "The book's own example",
      arabic: "أَقْسَمَ بِاللَّهِ أَبُو حَفْصٍ عُمَرُ",
      transliteration: "Aqsama billāhi Abū Hafsin 'Umaru",
      translation: "Abu Hafs — 'Umar — swore by Allah",
      explanation: "عُمَرُ هو عطف بيان، وضّح من هو «أَبُو حَفْصٍ» (اسمه الحقيقي)، بلا أي حرف عطف بينهما، وتبعه في الإعراب — مرفوع مثله.",
      contrast: {
        arabic: "جَاءَ زَيْدٌ وَعَمْرٌو",
        translation: "Zayd and 'Amr came",
        explanation: "الواو هنا حرف عطف — عطف نسق. عَمْرٌو معطوف على زَيْدٌ, تبعه في رفعه, لكن بحرف هذه المرة لا بيانًا مباشرًا."
      }
    },

    quranExample: {
      surahAr: "الأحزاب",
      surahEn: "Al-Ahzab",
      ayahRef: "33:22",
      arabic: "وَصَدَقَ اللَّهُ وَرَسُولُهُ",
      translation: "...and Allah and His Messenger spoke the truth.",
      notice: "وَرَسُولُهُ معطوفٌ بالواو على لفظ الجلالة «اللَّهُ» — عطف نسق، تبعه في رفعه، تمامًا كما يصف كتابك."
    },

    noticeInteraction: {
      type: "word-tap",
      ayahRef: "33:22",
      instanceId: "5.5-notice",
      promptContext: "Al-Ahzab 33:22",
      question: "Tap المعطوف — the word joined by و — here.",
      correctWordId: "33-22-w3",
      correctFeedback: "Right — وَرَسُولُهُ is المعطوف, joined to اللَّهُ by الواو.",
      incorrectFeedback: "Not quite — look for the word right after الواو.",
      wordNotes: {
        "33-22-w2": { conceptLabel: "المعطوف عليه", explanation: "اللَّهُ — مرفوع، فاعل لـ«صدق»." },
        "33-22-w3": { conceptLabel: "المعطوف", explanation: "وَرَسُولُهُ — معطوف على اللَّهُ بالواو، مرفوع مثله." }
      }
    },

    practiceQuestions: [
      {
        id: "p1",
        type: "true-false",
        prompt: "عطف البيان يحتاج دائمًا إلى حرف عطف بين التابع والمتبوع.",
        correct: false,
        explanation: "No — عطف البيان has no particle at all; that's exactly what sets it apart from عطف النسق."
      },
      {
        id: "p2",
        type: "multiple-choice",
        prompt: "كم حرف عطف يذكرها كتابك؟",
        options: [
          { id: "a", labelEn: "10" },
          { id: "b", labelEn: "7" },
          { id: "c", labelEn: "5" }
        ],
        correctOptionId: "a",
        explanation: "Right — ten: و، ف، ثم، حتى، أو، أم، إما، لا، بل، لكن."
      },
      {
        id: "p3",
        type: "multiple-choice",
        prompt: "في «وَصَدَقَ اللَّهُ وَرَسُولُهُ»، ما إعراب «وَرَسُولُهُ»؟",
        options: [
          { id: "a", labelAr: "معطوف مرفوع" },
          { id: "b", labelAr: "معطوف منصوب" },
          { id: "c", labelAr: "بدل مجرور" }
        ],
        correctOptionId: "a",
        explanation: "Right — معطوف على لفظ الجلالة, مرفوع مثله."
      }
    ],

    quranChallenge: {
      surahAr: "الأحزاب",
      surahEn: "Al-Ahzab",
      ayahRef: "33:22",
      arabic: "وَصَدَقَ اللَّهُ وَرَسُولُهُ",
      translation: "...and Allah and His Messenger spoke the truth.",
      question: "ما حرف العطف المستخدم هنا؟",
      options: [
        { id: "a", labelAr: "الواو" },
        { id: "b", labelAr: "الفاء" },
        { id: "c", labelAr: "ثم" }
      ],
      correctOptionId: "a",
      explanation: "Right — الواو."
    },

    summary: [
      "العطف has two shapes: عطف بيان (بلا حرف، يوضّح) and عطف نسق (بأحد عشرة حروف، يربط).",
      "المعطوف follows المعطوف عليه's إعراب exactly, whichever shape links them.",
      "Next: what each of the ten حروف العطف actually means."
    ],

    completion: {
      titleAr: "العطف: عطف البيان وعطف النسق",
      statement: "Two shapes of العطف, defined. Next: what each particle means."
    }
  },

  "5.6": {
    id: "5.6",
    steps: ["intro", "concept", "example", "practice", "summary", "completion"],

    sourceNote: {
      status: "book-cited",
      label: "Sourced from your reference book — pages 211–215",
      detail: "Your book devotes several dense pages to the fine semantic conditions of each of the ten حروف العطف — multiple sub-cases per particle, several with their own footnoted exceptions (e.g. أو's تخيير vs. إباحة vs. شك, بل's الإضراب conditions). That full detail is real book content but goes well beyond what a foundational lesson needs — this lesson keeps to each particle's core, headline meaning only, the same 'do not over-teach' discipline already used for المنادى's pronunciation variants (4.11) and المخفوض بالحرف's fuller particle list (4.16)."
    },

    intro: {
      titleAr: "معاني حروف العطف",
      titleEn: "What Each Particle Means",
      statement: "Ten particles, ten different relationships between المعطوف and المعطوف عليه."
    },

    objective: [
      "state the core, headline meaning of each of the ten حروف العطف",
      "tell a sequencing particle (ثم) apart from a simultaneous one (الواو)",
      "recognize بل and لكن as correcting particles, not simply linking ones"
    ],

    concept: {
      termAr: "عشرة حروف، عشرة معانٍ",
      kind: "book-cited",
      definitionAr: "هَذِهِ الْحُرُوفُ الْعَشَرَةُ: الْوَاوُ، وَالْفَاءُ، وَثُمَّ، وَحَتَّى، وَأَوْ، وَأَمْ، وَإِمَّا، وَلَا، وَبَلْ، وَلَكِنْ.",
      definitionEn: "Each particle links its معطوف to its متبوع — but each adds its own shade of meaning on top of the link.",
      lead: "Headline meanings only here — your book's own fuller conditions for each one (pp. 211–215) go well beyond this foundational pass."
    },

    definitionBreakdown: [
      {
        termAr: "الواو، الفاء، ثم",
        termEn: "link vs. sequence",
        glossEn: "جمع، تعقيب، تراخٍ",
        explanation: "الواو تجمع بلا ترتيب. الفاء تفيد الترتيب مع التعقيب (فورًا). ثم تفيد الترتيب مع التراخي (بمهلة)."
      },
      {
        termAr: "أو، أم",
        termEn: "choice vs. equivalence-question",
        glossEn: "تخيير أو شك، تسوية",
        explanation: "أو للتخيير أو الشك. أم تأتي غالبًا بعد همزة التسوية أو الاستفهام، سائلة عن أيّ الأمرين."
      },
      {
        termAr: "إما",
        termEn: "doubled alternative",
        glossEn: "تتكرر غالبًا",
        explanation: "إما...وإما — تفيد التخيير أو الشك بوضوح أكبر من أو."
      },
      {
        termAr: "لا، بل، لكن",
        termEn: "negating / correcting the first",
        glossEn: "نفي، إضراب، استدراك",
        explanation: "لا تنفي الحكم عن الثاني. بل ولكن للإضراب أو الاستدراك — تصحّح أو تستثني ما قبلها."
      }
    ],

    conceptTree: {
      root: { ar: "حروف العطف", en: "10 particles" },
      branches: [
        { ar: "الواو", en: "جمع بلا ترتيب" },
        { ar: "الفاء", en: "ترتيب فوري" },
        { ar: "ثم", en: "ترتيب بمهلة" },
        { ar: "حتى", en: "غاية" },
        { ar: "أو", en: "تخيير أو شك" },
        { ar: "أم", en: "تسوية أو استفهام" },
        { ar: "إما", en: "تخيير مكرر" },
        { ar: "لا", en: "نفي عن الثاني" },
        { ar: "بل", en: "إضراب" },
        { ar: "لكن", en: "استدراك" }
      ]
    },

    example: {
      kind: "traditional-grammar-example",
      kindLabel: "Traditional grammar example — contrasting two of the ten",
      arabic: "جَاءَ الطُّلَّابُ ثُمَّ الْمُعَلِّمُ",
      transliteration: "Jā'a al-ṭullābu thumma al-mu'allimu",
      translation: "The students came, then the teacher",
      explanation: "ثم هنا تفيد ترتيبًا مع فاصل زمني — المعلم جاء بعد الطلاب بمهلة، لا فورًا.",
      contrast: {
        arabic: "جَاءَ الطُّلَّابُ فَالْمُعَلِّمُ",
        translation: "The students came, and right after, the teacher",
        explanation: "الفاء رتّبت الحدثين أيضًا، لكن بلا مهلة — تعقيبًا فوريًا، بخلاف ثم."
      }
    },

    practiceQuestions: [
      {
        id: "p1",
        type: "multiple-choice",
        prompt: "أي الحروف يفيد الترتيب مع مهلة (فاصل زمني)؟",
        options: [
          { id: "a", labelAr: "ثم" },
          { id: "b", labelAr: "الفاء" },
          { id: "c", labelAr: "الواو" }
        ],
        correctOptionId: "a",
        explanation: "Right — ثم تفيد الترتيب مع التراخي؛ الفاء ترتب بلا مهلة؛ الواو لا ترتب أصلًا."
      },
      {
        id: "p2",
        type: "true-false",
        prompt: "بل ولكن تُستخدمان للإضراب أو الاستدراك، لا لمجرد الجمع.",
        correct: true,
        explanation: "Right — both correct or except what came before them, unlike the simple joining particles."
      },
      {
        id: "p3",
        type: "multiple-choice",
        prompt: "الواو في العطف تفيد:",
        options: [
          { id: "a", labelAr: "جمعًا بلا ترتيب" },
          { id: "b", labelAr: "ترتيبًا بمهلة" },
          { id: "c", labelAr: "تخييرًا" }
        ],
        correctOptionId: "a",
        explanation: "Right — الواو just joins; it says nothing about order."
      }
    ],

    summary: [
      "Ten particles, each adding its own shade of meaning on top of the basic عطف link.",
      "الواو/الفاء/ثم differ in order and timing; أو/أم/إما differ in how they offer alternatives; لا/بل/لكن correct or negate what came before.",
      "Next: a third تابع category — التوكيد."
    ],

    completion: {
      titleAr: "معاني حروف العطف",
      statement: "Ten shades of meaning, mapped. Next: التوكيد."
    }
  },

  "5.7": {
    id: "5.7",
    steps: ["intro", "concept", "example", "quran", "notice", "practice", "challenge", "summary", "completion"],

    sourceNote: {
      status: "book-cited",
      label: "Sourced from your reference book — pages 216–221",
      detail: "وَالتَّوْكِيدُ: ضَرْبَانِ: لَفْظِيٌّ، وَمَعْنَوِيٌّ، فَاللَّفْظِيُّ: إِعَادَةُ اللَّفْظِ الْأَوَّلِ بِعَيْنِهِ (p. 216). وَالتَّوْكِيدُ الْمَعْنَوِيُّ: وَلَهُ أَلْفَاظٌ مَعْلُومَةٌ: النَّفْسُ، وَالْعَيْنُ، وَكُلٌّ، وَجَمِيعٌ، وَعَامَّةٌ، وَكِلَا، وَكِلْتَا (p. 217), with the requirement of a matching attached pronoun stated and worked through across an extensive agreement grid (pp. 218–220: الزيدان أنفسهما، الزيدون أنفسهم، الجيش كله، القبيلة كلها، etc.). That grid is condensed here to one representative example per dimension, same discipline as Lesson 5.3's النعت grid."
    },

    intro: {
      titleAr: "التوكيد: لفظي ومعنوي",
      titleEn: "At-Tawkid: Verbal and Abstract",
      statement: "A تابع whose only job is to strengthen — by repeating a word, or with one of seven fixed strengthening words."
    },

    objective: [
      "tell التوكيد اللفظي apart from التوكيد المعنوي",
      "name the seven fixed ألفاظ your book gives for التوكيد المعنوي",
      "state the one rule every معنوي توكيد must follow"
    ],

    concept: {
      termAr: "التوكيد",
      kind: "book-cited",
      definitionAr: "وَالتَّوْكِيدُ: ضَرْبَانِ: لَفْظِيٌّ، وَمَعْنَوِيٌّ. فَاللَّفْظِيُّ: إِعَادَةُ اللَّفْظِ الْأَوَّلِ بِعَيْنِهِ، سَوَاءٌ كَانَ اسْمًا، أَوْ فِعْلًا، أَوْ حَرْفًا.",
      definitionEn: "Two kinds, both reinforcing the same المؤكَّد. لفظي simply repeats the exact word (or phrase). معنوي reinforces it with one of a short, fixed list of special words instead.",
      lead: "One kind repeats outright; the other names the whole, or ties firmly to a matching pronoun."
    },

    definitionBreakdown: [
      {
        termAr: "التوكيد اللفظي",
        termEn: "exact repetition",
        glossEn: "اسمًا، فعلًا، أو حتى حرفًا",
        explanation: "جَاءَ زَيْدٌ زَيْدٌ (اسم) — قَامَ قَامَ (فعل) — نَعَمْ نَعَمْ (حرف) — even a whole جملة can repeat: أَتَاكَ أَتَاكَ اللَّاحِقُونَ."
      },
      {
        termAr: "التوكيد المعنوي",
        termEn: "seven fixed words",
        glossEn: "p. 217",
        explanation: "النَّفْسُ، الْعَيْنُ، كُلٌّ، جَمِيعٌ، عَامَّةٌ، كِلَا، كِلْتَا — each must connect to a ضمير matching المؤكَّد (أَنْتَ نَفْسُكَ، الْقَوْمُ كُلُّهُمْ)."
      },
      {
        termAr: "كلا وكلتا",
        termEn: "mathna-only",
        glossEn: "pp. 218–219",
        explanation: "خاصتان بالمثنى (مذكر/مؤنث) فقط، ويجب إضافتهما إلى ضمير يطابق المؤكَّد."
      }
    ],

    conceptTree: {
      root: { ar: "التوكيد", en: "two kinds" },
      branches: [
        { ar: "لفظي", en: "إعادة اللفظ بعينه" },
        { ar: "معنوي", en: "7 ألفاظ ثابتة + ضمير مطابق", note: "النفس، العين، كل، جميع، عامة، كلا، كلتا" }
      ]
    },

    example: {
      kind: "book-example",
      kindLabel: "The book's own example",
      arabic: "جَاءَ الْقَوْمُ كُلُّهُمْ",
      transliteration: "Jā'a al-qawmu kulluhum",
      translation: "The people — all of them — came",
      explanation: "كُلُّ — توكيد معنوي، اتصل بضمير (هم) يطابق المؤكَّد (الْقَوْمُ) في جمعه.",
      contrast: {
        arabic: "جَاءَ زَيْدٌ زَيْدٌ",
        translation: "Zayd — Zayd — came",
        explanation: "توكيد لفظي هذه المرة — نفس اللفظ أُعيد بعينه، بلا ضمير توكيد على الإطلاق."
      }
    },

    quranExample: {
      surahAr: "الحجر",
      surahEn: "Al-Hijr",
      ayahRef: "15:30",
      arabic: "فَسَجَدَ الْمَلَائِكَةُ كُلُّهُمْ أَجْمَعُونَ",
      translation: "So the angels prostrated, all of them entirely.",
      notice: "This verse isn't from your reference book's own pages for this chapter — a QURRA supplementary example, chosen because it stacks two توكيد معنوي words on one مؤكَّد, exactly as your book says is possible. كُلُّهُمْ (ضمير «هم» يطابق الملائكة في الجمع) is the first; أَجْمَعُونَ right after it is a second, reinforcing توكيد."
    },

    noticeInteraction: {
      type: "word-tap",
      ayahRef: "15:30",
      instanceId: "5.7-notice",
      promptContext: "Al-Hijr 15:30",
      question: "Tap the first توكيد معنوي word here.",
      correctWordId: "15-30-w3",
      correctFeedback: "Right — كُلُّهُمْ, with its matching ضمير (هم), is the first توكيد معنوي.",
      incorrectFeedback: "Not quite — look for the word right after الملائكة that carries a matching pronoun.",
      wordNotes: {
        "15-30-w2": { conceptLabel: "المؤكَّد", explanation: "الْمَلَائِكَةُ — جمع، مرفوع، فاعل لـ«سجد»." },
        "15-30-w3": { conceptLabel: "توكيد معنوي أول", explanation: "كُلُّهُمْ — ضميره (هم) يطابق الملائكة في الجمع." },
        "15-30-w4": { conceptLabel: "توكيد معنوي ثانٍ", explanation: "أَجْمَعُونَ — توكيد ثانٍ، يقوّي الأول." }
      }
    },

    practiceQuestions: [
      {
        id: "p1",
        type: "true-false",
        prompt: "يجب أن يتصل لفظ التوكيد المعنوي (مثل كل أو نفس) بضمير يطابق المؤكَّد.",
        correct: true,
        explanation: "Right — without a matching pronoun, these words don't function as توكيد معنوي."
      },
      {
        id: "p2",
        type: "multiple-choice",
        prompt: "كلا وكلتا تستخدمان لتوكيد:",
        options: [
          { id: "a", labelAr: "المثنى فقط" },
          { id: "b", labelAr: "الجمع فقط" },
          { id: "c", labelAr: "المفرد فقط" }
        ],
        correctOptionId: "a",
        explanation: "Right — كلا (مذكر) وكلتا (مؤنث) are reserved for the مثنى."
      },
      {
        id: "p3",
        type: "multiple-choice",
        prompt: "«جَاءَ زَيْدٌ زَيْدٌ» مثال على:",
        options: [
          { id: "a", labelAr: "توكيد لفظي" },
          { id: "b", labelAr: "توكيد معنوي" },
          { id: "c", labelAr: "عطف نسق" }
        ],
        correctOptionId: "a",
        explanation: "Right — plain repetition of the exact word, no ألفاظ معنوية involved."
      }
    ],

    quranChallenge: {
      surahAr: "الحجر",
      surahEn: "Al-Hijr",
      ayahRef: "15:30",
      arabic: "فَسَجَدَ الْمَلَائِكَةُ كُلُّهُمْ أَجْمَعُونَ",
      translation: "So the angels prostrated, all of them entirely.",
      question: "ما نوع «أَجْمَعُونَ» هنا؟",
      options: [
        { id: "a", labelAr: "توكيد معنوي ثانٍ" },
        { id: "b", labelAr: "نعت" },
        { id: "c", labelAr: "بدل" }
      ],
      correctOptionId: "a",
      explanation: "Right — a second توكيد معنوي, reinforcing كُلُّهُمْ."
    },

    summary: [
      "التوكيد: لفظي (repeats exactly) or معنوي (one of seven fixed words + a matching pronoun).",
      "كِلَا وكِلْتَا are reserved for the مثنى alone.",
      "النعت، العطف، والتوكيد complete. Last category: البدل."
    ],

    completion: {
      titleAr: "التوكيد: لفظي ومعنوي",
      statement: "Strengthened, two ways. Next: the last category — البدل."
    }
  },

  "5.8": {
    id: "5.8",
    steps: ["intro", "concept", "example", "quran", "notice", "practice", "challenge", "summary", "completion"],

    sourceNote: {
      status: "book-cited",
      label: "Sourced from your reference book — pages 221–224",
      detail: "البَدَلُ: هُوَ التَّابِعُ الْمَقْصُودُ بِالْحُكْمِ بِلَا وَاسِطَةٍ (pp. 221–222), وَالبَدَلُ عَلَى أَرْبَعَةِ أَقْسَامٍ: بَدَلُ الكُلِّ مِنَ الكُلِّ (ويسمى أيضًا بدل المطابقة), بَدَلُ البَعْضِ مِنَ الكُلِّ, بَدَلُ الِاشْتِمَالِ, وَالبَدَلُ المُبَايِنُ (بأنواعه الثلاثة: الغلط، النسيان، الإضراب) (pp. 222–224). Page 224's closing note that بدل also applies to أفعال (with its own Qur'anic citation, الفرقان 68–69) is real book content but a narrower extension beyond this foundational lesson's four noun-based types — documented here, not built as its own teaching example, per 'do not over-teach'."
    },

    intro: {
      titleAr: "البدل",
      titleEn: "Al-Badal",
      statement: "The last of the four — and the only one where the تابع genuinely stands in for its متبوع in meaning."
    },

    objective: [
      "define البدل and see how it differs from the other three تابع categories",
      "name all four types your book gives, with one example each",
      "recognize بدل الكل من الكل across two linked Qur'anic ayat"
    ],

    concept: {
      termAr: "البدل",
      kind: "book-cited",
      definitionAr: "البَدَلُ: هُوَ التَّابِعُ الْمَقْصُودُ بِالْحُكْمِ بِلَا وَاسِطَةٍ.",
      definitionEn: "البدل is the تابع that's actually MEANT by the sentence's point — directly, with nothing standing between it and the intended meaning. The متبوع before it is really just a lead-in.",
      lead: "Unlike النعت (which describes) or التوكيد (which strengthens), البدل effectively redirects the sentence's real meaning onto itself."
    },

    definitionBreakdown: [
      {
        termAr: "بدل الكل من الكل",
        termEn: "full equivalence",
        glossEn: "ويسمى أيضًا بدل المطابقة",
        explanation: "البدل يساوي المبدل منه تمامًا. مثال الكتاب: جَاءَ زَيْدٌ أَخُوكَ."
      },
      {
        termAr: "بدل البعض من الكل",
        termEn: "part of the whole",
        glossEn: "يحتاج ضميرًا غالبًا",
        explanation: "البدل جزء حقيقي من المبدل منه, ويحتاج ضميرًا يربطه به: أَكَلْتُ الرَّغِيفَ ثُلُثَهُ."
      },
      {
        termAr: "بدل الاشتمال",
        termEn: "an inherent quality",
        glossEn: "ليس كلًا ولا جزءًا حسيًّا",
        explanation: "البدل معنى أو صفة ملازمة للمبدل منه, لا كلّه ولا جزء منه حسيًّا: أَعْجَبَنِي زَيْدٌ عِلْمُهُ."
      },
      {
        termAr: "البدل المباين",
        termEn: "three sub-types",
        glossEn: "غلط، نسيان، إضراب",
        explanation: "البدل مختلف تمامًا عن المبدل منه. بدل الغلط (سبق لسان), بدل النسيان (تغيّر القصد), بدل الإضراب (عدول متعمد عن الأول إلى الثاني)."
      }
    ],

    conceptTree: {
      root: { ar: "البدل", en: "4 types" },
      branches: [
        { ar: "الكل من الكل", en: "بدل المطابقة" },
        { ar: "البعض من الكل", en: "يحتاج ضميرًا" },
        { ar: "الاشتمال", en: "معنى ملازم" },
        {
          ar: "المباين", en: "مختلف تمامًا",
          children: [
            { ar: "الغلط", en: "سبق لسان" },
            { ar: "النسيان", en: "تغيّر القصد" },
            { ar: "الإضراب", en: "عدول متعمد" }
          ]
        }
      ]
    },

    example: {
      kind: "book-example",
      kindLabel: "The book's own example",
      arabic: "جَاءَ زَيْدٌ أَخُوكَ",
      transliteration: "Jā'a Zaydun akhūka",
      translation: "Zayd — your brother — came",
      explanation: "أَخُوكَ بدل كل من كل — يساوي زيدًا تمامًا، ويتبعه في رفعه. نفس الشخص، اسمان.",
      contrast: {
        arabic: "أَعْجَبَنِي زَيْدٌ عِلْمُهُ",
        translation: "Zayd's knowledge amazed me",
        explanation: "عِلْمُهُ بدل اشتمال — ليس زيدًا نفسه ولا جزءًا منه، بل معنى ملازم له، واتصل بضمير (الهاء) يربطه بالمبدل منه."
      }
    },

    quranExample: {
      surahAr: "الفاتحة",
      surahEn: "Al-Fatihah",
      ayahRef: "1:6",
      arabic: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",
      translation: "Guide us to the straight path.",
      notice: "The very next ayah (1:7) continues: «صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ...» — your book cites exactly this pair (p. 222) as بدل كل من كل: صراط الذين... stands directly for الصراط المستقيم here, clarifying precisely which صراط is meant, with no عطف particle or linking word at all."
    },

    noticeInteraction: {
      type: "choice",
      promptContext: "Al-Fatihah 1:6–7",
      promptAr: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ — صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ",
      question: "ما العلاقة بين «صِرَاطَ الَّذِينَ...» وبين «الصِّرَاطَ الْمُسْتَقِيمَ» قبلها؟",
      options: [
        { id: "a", labelAr: "بدل كل من كل — يوضّح ذات الصراط نفسه", labelEn: "بدل كل من كل — the same صراط, clarified" },
        { id: "b", labelAr: "عطف نسق بواو محذوفة", labelEn: "عطف نسق with an omitted واو" },
        { id: "c", labelAr: "نعت لـ«الصراط»", labelEn: "نعت for الصراط" }
      ],
      correctOptionId: "a",
      correctFeedback: "Right — بدل كل من كل, exactly as your book names this pair (p. 222).",
      incorrectFeedback: "Not quite — there's no particle linking them at all, and صراط الذين doesn't describe a quality; it stands directly for the same صراط."
    },

    practiceQuestions: [
      {
        id: "p1",
        type: "true-false",
        prompt: "بدل البعض من الكل يحتاج غالبًا إلى ضمير يربطه بالمبدل منه.",
        correct: true,
        explanation: "Right — e.g. أَكَلْتُ الرَّغِيفَ ثُلُثَهُ, where الهاء connects ثلثه back to الرغيف."
      },
      {
        id: "p2",
        type: "multiple-choice",
        prompt: "«أَعْجَبَنِي زَيْدٌ عِلْمُهُ» مثال على أي نوع من البدل؟",
        options: [
          { id: "a", labelAr: "بدل الاشتمال" },
          { id: "b", labelAr: "بدل الكل من الكل" },
          { id: "c", labelAr: "بدل الغلط" }
        ],
        correctOptionId: "a",
        explanation: "Right — علمه is a quality inherent to زيد, not زيد himself or a physical part of him."
      },
      {
        id: "p3",
        type: "multiple-choice",
        prompt: "بدل الإضراب يعني:",
        options: [
          { id: "a", labelAr: "عدول متعمد عن الأول إلى الثاني" },
          { id: "b", labelAr: "سبق لسان" },
          { id: "c", labelAr: "نسيان القصد الأول" }
        ],
        correctOptionId: "a",
        explanation: "Right — الإضراب is the deliberate shift; الغلط is a slip of the tongue, النسيان a change of mind."
      }
    ],

    quranChallenge: {
      surahAr: "الفاتحة",
      surahEn: "Al-Fatihah",
      ayahRef: "1:6",
      arabic: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",
      translation: "Guide us to the straight path.",
      question: "في الآية التالية، «صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ» بدلٌ من أي عبارة في هذه الآية؟",
      options: [
        { id: "a", labelAr: "الصِّرَاطَ الْمُسْتَقِيمَ" },
        { id: "b", labelAr: "اهْدِنَا" },
        { id: "c", labelAr: "لا شيء — إنها آية منفصلة تمامًا" }
      ],
      correctOptionId: "a",
      explanation: "Right — بدل كل من كل من «الصراط المستقيم»، كما يذكر كتابك (p. 222)."
    },

    summary: [
      "البدل: four types — الكل من الكل، البعض من الكل، الاشتمال، والمباين (بأنواعه الثلاثة: غلط، نسيان، إضراب).",
      "The Fatihah's own اهدنا الصراط المستقيم → صراط الذين أنعمت عليهم is your book's own بدل كل من كل example.",
      "All four التوابع categories are now complete: النعت، العطف، التوكيد، والبدل. Next: a map pulling them all together."
    ],

    completion: {
      titleAr: "البدل",
      statement: "Four types of البدل. Next: the complete map of all four التوابع."
    }
  },

  "5.9": {
    id: "5.9",
    steps: ["intro", "concept", "example", "quran", "practice", "summary", "completion"],

    sourceNote: {
      status: "book-cited",
      label: "A closing synthesis across pp. 201–224 — the whole باب التوابع",
      detail: "This lesson introduces no new book content of its own. It's a QURRA-organized recap of the four categories taught in Lessons 5.1–5.8, in the same spirit as Lesson 3.8's own closing map for علامات الإعراب — pulling together material that's already been individually sourced and cited."
    },

    intro: {
      titleAr: "الخريطة الكاملة للتوابع",
      titleEn: "The Complete Map of Tawabi'",
      statement: "Four categories, one relationship. Everything from this Part, in a single map."
    },

    objective: [
      "recall all four تابع categories and what distinguishes each one",
      "restate the one idea every one of them shares",
      "connect a تابع back to its متبوع's Part 4 role at a glance"
    ],

    concept: {
      termAr: "التوابع الأربعة",
      kind: "qurra-comparison",
      definitionAr: "التَّوَابِعُ أَرْبَعَةٌ: النَّعْتُ، وَالْعَطْفُ، وَالتَّوْكِيدُ، وَالْبَدَلُ — وَكُلُّهَا تَتْبَعُ مَتْبُوعَهَا، وَلَا تَسْتَقِلُّ بِحَالَتِهَا الْإِعْرَابِيَّةِ.",
      definitionEn: "Four categories, one shared rule: none of them earns its own grammatical state. Each one simply follows its متبوع's.",
      lead: "متبوع → حالته الإعرابية → تابع → يتبعه — the same pattern from Lesson 5.1, now proven across all four categories."
    },

    definitionBreakdown: [
      {
        termAr: "النعت",
        termEn: "describes",
        glossEn: "Lessons 5.2–5.4",
        explanation: "حقيقي: يطابق المنعوت في أربعة أمور معًا. سببي: يطابقه في اثنين فقط، ويطابق ما بعده في الباقي."
      },
      {
        termAr: "العطف",
        termEn: "links or clarifies",
        glossEn: "Lessons 5.5–5.6",
        explanation: "بيان بلا حرف، أو نسق بأحد عشرة حروف — كلٌّ منهما يحمل التابع إعراب متبوعه."
      },
      {
        termAr: "التوكيد",
        termEn: "strengthens",
        glossEn: "Lesson 5.7",
        explanation: "لفظي (إعادة اللفظ) أو معنوي (سبعة ألفاظ ثابتة + ضمير مطابق)."
      },
      {
        termAr: "البدل",
        termEn: "replaces in meaning",
        glossEn: "Lesson 5.8",
        explanation: "يحل محل متبوعه فعليًا: الكل من الكل، البعض من الكل، الاشتمال، أو المباين."
      }
    ],

    conceptTree: {
      root: { ar: "التوابع", en: "the complete map" },
      branches: [
        { ar: "النعت", en: "describes", children: [{ ar: "حقيقي", en: "4 أمور" }, { ar: "سببي", en: "2 فقط" }] },
        { ar: "العطف", en: "links or clarifies", children: [{ ar: "بيان", en: "بلا حرف" }, { ar: "نسق", en: "10 حروف" }] },
        { ar: "التوكيد", en: "strengthens", children: [{ ar: "لفظي", en: "إعادة" }, { ar: "معنوي", en: "7 ألفاظ" }] },
        { ar: "البدل", en: "replaces", children: [{ ar: "الكل من الكل", en: "" }, { ar: "البعض من الكل", en: "" }, { ar: "الاشتمال", en: "" }, { ar: "المباين", en: "" }] }
      ]
    },

    example: {
      kind: "traditional-grammar-example",
      kindLabel: "Full circle — two تابع types, one متبوع",
      arabic: "جَاءَ زَيْدٌ نَفْسُهُ الْعَالِمُ",
      transliteration: "Jā'a Zaydun nafsuhu al-'ālim",
      translation: "Zayd himself, the learned, came",
      explanation: "نَفْسُهُ — توكيد معنوي لزيد. الْعَالِمُ — نعت لزيد. Two different تابع types, the same متبوع, both following its مرفوع state at once.",
      contrast: {
        arabic: "جَاءَ زَيْدٌ الْعَالِمُ",
        translation: "The learned Zayd came",
        explanation: "Lesson 5.1's own worked example — one تابع this time. The relationship is identical either way: متبوع → حالته الإعرابية → تابع → يتبعه."
      }
    },

    quranExample: {
      surahAr: "الفاتحة",
      surahEn: "Al-Fatihah",
      ayahRef: "1:1",
      arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
      translation: "In the name of Allah, the Entirely Merciful, the Especially Merciful.",
      notice: "A fitting close: the same آية that opened Lesson 5.3's look at النعت — الرَّحْمَٰنِ والرَّحِيمِ, two نعت words matching اللَّهِ in all four dimensions at once. Now that all four التوابع categories are behind you, this single phrase already shows one of them in full."
    },

    practiceQuestions: [
      {
        id: "p1",
        type: "multiple-choice",
        prompt: "أي التوابع الأربعة يطابق متبوعه في أربعة أمور معًا؟",
        options: [
          { id: "a", labelAr: "النعت الحقيقي" },
          { id: "b", labelAr: "التوكيد اللفظي" },
          { id: "c", labelAr: "بدل الاشتمال" }
        ],
        correctOptionId: "a",
        explanation: "Right — النعت الحقيقي matches الإعراب، التعريف/التنكير، التذكير/التأنيث، والعدد, all at once."
      },
      {
        id: "p2",
        type: "multiple-choice",
        prompt: "أي التوابع يحتاج دائمًا ضميرًا مطابقًا للمؤكَّد؟",
        options: [
          { id: "a", labelAr: "التوكيد المعنوي" },
          { id: "b", labelAr: "عطف البيان" },
          { id: "c", labelAr: "بدل الكل من الكل" }
        ],
        correctOptionId: "a",
        explanation: "Right — كل، نفس، جميع، and the rest must connect to a matching ضمير."
      },
      {
        id: "p3",
        type: "multiple-choice",
        prompt: "أي التوابع يحل محل متبوعه في القصد الفعلي للجملة؟",
        options: [
          { id: "a", labelAr: "البدل" },
          { id: "b", labelAr: "النعت" },
          { id: "c", labelAr: "العطف" }
        ],
        correctOptionId: "a",
        explanation: "Right — البدل is the تابع actually meant by the sentence, with its متبوع effectively a lead-in."
      },
      {
        id: "p4",
        type: "true-false",
        prompt: "عطف البيان يحتاج حرف عطف مثل عطف النسق.",
        correct: false,
        explanation: "No — عطف البيان has no particle at all; that's exactly what distinguishes it from عطف النسق."
      }
    ],

    summary: [
      "Four التوابع categories, one shared idea: a تابع follows its متبوع's state rather than earning one of its own.",
      "النعت describes، العطف links or clarifies، التوكيد strengthens، والبدل replaces in meaning.",
      "Every one of them connects straight back to Part 4's own roles — a تابع's state always traces back to its متبوع's ROLE → STATE → SIGN.",
      "Part 5 complete. Next: Part 6 — النواسخ, particles and verbs that change a nominal sentence's whole case pattern."
    ],

    completion: {
      titleAr: "الخريطة الكاملة للتوابع",
      statement: "Part 5 complete — النعت، العطف، التوكيد، والبدل, every تابع now understood. النواسخ is next, in Part 6."
    }
  },

  /* ==========================================================================
     PART 6 — النواسخ (Phase 13)
     Source: the same reference book's "باب العوامل الداخلة على المبتدأ
     والخبر" (pp. 93–132, non-consecutive — the user supplied only the pages
     covering the four categories this Part teaches; pages on أفعال المقاربة
     were explicitly excluded from this version per direct instruction, and
     the advanced الإعمال/الإلغاء/التعليق nuance on p. 132 is scoped out as
     "beyond this stage," disclosed in the final report rather than taught).

     The source gives its OWN threefold structural classification up front
     (p. 93) — رافع للمبتدأ ناصب للخبر / ناصب للمبتدأ رافع للخبر / ناصب
     لهما معًا — which this Part uses as its organizing map instead of
     inventing one, exactly matching the spec's "teach the structural
     transformation, not a flat list" instruction.

     Every Qur'an citation below was independently re-verified against the
     full ayah text (not just the source's own excerpt) before use. Three
     citations corrected a misreading of the source page photos themselves
     (و/ا and ض/ص look near-identical in this print at this resolution):
     2:109 ("لو يردونكم", not "لا يردونكم"), 4:125 ("واتخذ الله إبراهيم
     خليلا", not the garbled fragment first read), and 26:50 ("لا ضير",
     not "لا صبر"). Documented in the Part 6 final report.
     ========================================================================== */

  "6.1": {
    id: "6.1",
    steps: ["intro", "concept", "example", "practice", "summary", "completion"],

    sourceNote: {
      status: "book-cited",
      label: "Sourced from your reference book — page 93",
      detail: "باب العوامل الداخلة على المبتدأ والخبر، وتُسمى: النواسخ، ونواسخ الابتداء (p. 93). The threefold classification taught in this lesson — رافع للمبتدأ/ناصب للخبر، ناصب للمبتدأ/رافع للخبر، ناصب لهما معًا — is the book's own opening map, quoted directly, not a QURRA invention. The source's own version of the first group also names الحروف المشبهة بـ'ليس' وأفعال المقاربة alongside كان وأخواتها; أفعال المقاربة is intentionally not built in this version, per direct instruction — noted honestly rather than silently dropped."
    },

    intro: {
      titleAr: "ما هي النواسخ؟",
      titleEn: "What Are the Nawasikh?",
      statement: "A new kind of relationship: something that enters a complete nominal sentence and changes it."
    },

    objective: [
      "recall the nominal sentence's baseline state from Part 4: مبتدأ and خبر, both مرفوعان",
      "state the book's own name and definition for النواسخ, and what النسخ means",
      "name the book's own threefold map of how النواسخ reshape a sentence"
    ],

    concept: {
      termAr: "النواسخ",
      kind: "book-cited",
      definitionAr: "العَوَامِلُ الدَّاخِلَةُ عَلَى الْمُبْتَدَأِ وَالْخَبَرِ، وَتُسَمَّى: النَّوَاسِخَ، وَنَوَاسِخَ الِابْتِدَاءِ.",
      definitionEn: "النواسخ are operators that enter the nominal sentence — مبتدأ + خبر — and change something about it. ناسخ means exactly what it sounds like: a remover. Your book glosses النسخ itself as الإزالة, \"removal.\"",
      lead: "Start from where Part 4 left you: زَيْدٌ قَائِمٌ — مبتدأ مرفوع، خبر مرفوع, both earning رفع independently, with nothing standing between them. A ناسخ is what enters that sentence and changes that."
    },

    definitionBreakdown: [
      {
        termAr: "الجملة الاسمية قبل الناسخ",
        termEn: "before",
        glossEn: "زَيْدٌ قَائِمٌ",
        explanation: "مبتدأ مرفوع + خبر مرفوع — Part 4's own baseline. Nothing has entered yet."
      },
      {
        termAr: "النوع الأول",
        termEn: "raises مبتدأ, makes خبر منصوب",
        glossEn: "كان وأخواتها (+ الحروف المشبهة بليس، وأفعال المقاربة)",
        explanation: "كَانَ زَيْدٌ قَائِمًا — زيد stays مرفوعًا (now اسمها instead of مبتدأ), قائمًا becomes منصوبًا (خبرها). Lessons 6.2–6.3. (أفعال المقاربة — not built in this version, see source note.)"
      },
      {
        termAr: "النوع الثاني",
        termEn: "makes مبتدأ منصوب, raises خبر",
        glossEn: "إنّ وأخواتها، و'لا' التي لنفي الجنس",
        explanation: "إِنَّ زَيْدًا قَائِمٌ — the exact reverse of Type 1. زيد is now منصوبًا (اسمها), قائمٌ stays مرفوعًا (خبرها). Lessons 6.4–6.6."
      },
      {
        termAr: "النوع الثالث",
        termEn: "makes both مبتدأ and خبر منصوبين",
        glossEn: "ظنّ وأخواتها",
        explanation: "ظَنَنْتُ زَيْدًا قَائِمًا — both words become منصوبين, but now as مفعول أول and مفعول ثانٍ — a bridge straight back to Part 4's المفعول به. Lessons 6.7–6.8."
      }
    ],

    conceptTree: {
      root: { ar: "النواسخ", en: "three structural effects" },
      branches: [
        { ar: "النوع الأول", en: "اسمها مرفوع، خبرها منصوب", children: [{ ar: "كان وأخواتها", en: "Lessons 6.2–6.3" }] },
        { ar: "النوع الثاني", en: "اسمها منصوب، خبرها مرفوع", children: [{ ar: "إنّ وأخواتها", en: "Lesson 6.4" }, { ar: "لا النافية للجنس", en: "Lesson 6.6" }] },
        { ar: "النوع الثالث", en: "الاثنان منصوبان (مفعولان)", children: [{ ar: "ظنّ وأخواتها", en: "Lessons 6.7–6.8" }] }
      ]
    },

    example: {
      kind: "traditional-grammar-example",
      kindLabel: "The one sentence this whole Part keeps coming back to",
      arabic: "زَيْدٌ قَائِمٌ",
      transliteration: "Zaydun qā'im",
      translation: "Zayd is standing",
      explanation: "A complete جملة اسمية, exactly as Part 4 taught it: زَيْدٌ مبتدأ مرفوع، قَائِمٌ خبر مرفوع. Every lesson in this Part enters a ناسخ into this same sentence and asks: ماذا يحدث إذا دخل الناسخ على هذه الجملة؟ — what happens when a ناسخ enters it?",
      contrast: {
        arabic: "كَانَ زَيْدٌ قَائِمًا",
        translation: "Zayd was standing",
        explanation: "One preview, from Lesson 6.2: كان enters, زيد stays مرفوعًا, and قائمٌ becomes قائمًا — منصوبًا. The sentence's content is unchanged; its grammar has shifted."
      }
    },

    practiceQuestions: [
      {
        id: "p1",
        type: "true-false",
        prompt: "في الجملة الاسمية الأصلية «زَيْدٌ قَائِمٌ»، كلا الكلمتين مرفوعتان.",
        correct: true,
        explanation: "Right — مبتدأ مرفوع وخبر مرفوع, Part 4's own baseline, before any ناسخ enters."
      },
      {
        id: "p2",
        type: "multiple-choice",
        prompt: "ما معنى «النسخ» بحسب كتابك؟",
        options: [
          { id: "a", labelEn: "Removal (الإزالة)" },
          { id: "b", labelEn: "Addition" },
          { id: "c", labelEn: "Repetition" }
        ],
        correctOptionId: "a",
        explanation: "Right — النسخ: الإزالة. A ناسخ removes the sentence's original اسمي pattern and installs its own."
      },
      {
        id: "p3",
        type: "multiple-choice",
        prompt: "أي نوع من أنواع النواسخ الثلاثة ينصب المبتدأ والخبر معًا؟",
        options: [
          { id: "a", labelAr: "النوع الأول" },
          { id: "b", labelAr: "النوع الثاني" },
          { id: "c", labelAr: "النوع الثالث" }
        ],
        correctOptionId: "c",
        explanation: "Right — النوع الثالث (ظنّ وأخواتها) is the only one that makes both منصوبين."
      }
    ],

    summary: [
      "النواسخ enter a complete جملة اسمية (مبتدأ + خبر, both مرفوعان) and change its grammar.",
      "ناسخ = remover; النسخ = الإزالة, per your book's own gloss.",
      "Three structural effects, exactly as the book classifies them: رفع المبتدأ/نصب الخبر (كان)، نصب المبتدأ/رفع الخبر (إنّ ولا)، نصب الاثنين معًا (ظنّ).",
      "Next: the richest group — كان وأخواتها."
    ],

    completion: {
      titleAr: "ما هي النواسخ؟",
      statement: "الجملة الاسمية ← ناسخ ← تغيّر في البنية. Next: كان وأخواتها."
    }
  },

  "6.2": {
    id: "6.2",
    steps: ["intro", "concept", "example", "quran", "notice", "practice", "challenge", "summary", "completion"],

    sourceNote: {
      status: "book-cited",
      label: "Sourced from your reference book — page 95",
      detail: "فَأَمَّا 'كَانَ' وَأَخَوَاتُهَا: فَإِنَّهَا تَرْفَعُ الْمُبْتَدَأَ تَشْبِيهًا بِالْفَاعِلِ، وَيُسَمَّى اسْمَهَا، وَتَنْصِبُ الْخَبَرَ تَشْبِيهًا بِالْمَفْعُولِ، وَيُسَمَّى خَبَرَهَا (p. 95). The eight-verb unconditional list and the الفرقان:٧٠ citation are both the book's own. English glosses on each verb are QURRA's own addition — standard classical-Arabic meanings, not grammatical content, added for an English-reading learner."
    },

    intro: {
      titleAr: "كان وأخواتها: المجموعة غير المشروطة",
      titleEn: "Kana and Her Unconditional Sisters",
      statement: "The first, largest family of النواسخ — and the one with no conditions attached at all."
    },

    objective: [
      "state كان's own grammatical effect: ترفع المبتدأ، وتنصب الخبر",
      "name the eight verbs that work this way with no condition at all",
      "apply the transformation to زَيْدٌ قَائِمٌ, and recognize it in a Qur'anic phrase"
    ],

    concept: {
      termAr: "كان وأخواتها",
      kind: "book-cited",
      definitionAr: "فَأَمَّا 'كَانَ' وَأَخَوَاتُهَا: فَإِنَّهَا تَرْفَعُ الْمُبْتَدَأَ تَشْبِيهًا بِالْفَاعِلِ، وَيُسَمَّى اسْمَهَا، وَتَنْصِبُ الْخَبَرَ تَشْبِيهًا بِالْمَفْعُولِ، وَيُسَمَّى خَبَرَهَا.",
      definitionEn: "كان and her sisters raise the مبتدأ — likening it to a فاعل — and now call it اسمها. They put the خبر in نصب — likening it to a مفعول — and now call it خبرها.",
      lead: "اسمها stays مرفوعًا, exactly where مبتدأ already was. خبرها is the one that moves — مرفوع becomes منصوب. That's the whole transformation."
    },

    definitionBreakdown: [
      {
        termAr: "اسمها",
        termEn: "كان's \"name\"",
        glossEn: "was المبتدأ, stays مرفوعًا",
        explanation: "The same word that was مبتدأ — it keeps رفع, it just changes title."
      },
      {
        termAr: "خبرها",
        termEn: "كان's \"predicate\"",
        glossEn: "was الخبر, becomes منصوبًا",
        explanation: "The one real change: الخبر's own رفع is replaced with نصب."
      }
    ],

    conceptTree: {
      root: { ar: "أخوات كان — بلا شرط", en: "no condition required" },
      branches: [
        { ar: "كَانَ", en: "was / to be" },
        { ar: "أَمْسَى", en: "became (in the evening)" },
        { ar: "أَصْبَحَ", en: "became (in the morning)" },
        { ar: "أَضْحَى", en: "became (in the forenoon)" },
        { ar: "ظَلَّ", en: "remained (through the day)" },
        { ar: "بَاتَ", en: "became (overnight)" },
        { ar: "صَارَ", en: "turned into" },
        { ar: "لَيْسَ", en: "is not" }
      ]
    },

    example: {
      kind: "traditional-grammar-example",
      kindLabel: "The Part's running example, after كان enters",
      arabic: "كَانَ زَيْدٌ قَائِمًا",
      transliteration: "Kāna Zaydun qā'iman",
      translation: "Zayd was standing",
      explanation: "زَيْدٌ — اسم كان, still مرفوعًا, exactly as it was مبتدأ. قَائِمًا — خبر كان, now منصوبًا, where it used to be مرفوعًا as plain خبر.",
      contrast: {
        arabic: "زَيْدٌ قَائِمٌ",
        translation: "Zayd is standing",
        explanation: "The baseline, with no ناسخ at all — both words مرفوعان. كان is what changes قَائِمٌ into قَائِمًا, and nothing else about the sentence."
      }
    },

    quranExample: {
      surahAr: "الفرقان",
      surahEn: "Al-Furqan",
      ayahRef: "25:70",
      arabic: "وَكَانَ اللَّهُ غَفُورًا رَحِيمًا",
      translation: "And Allah is ever Forgiving and Merciful.",
      notice: "اللَّهُ — اسم كان, مرفوع. غَفُورًا — خبر كان, منصوب. A second خبر, رَحِيمًا, follows it — also منصوب, matching the first.",
      wordNotes: {
        "25-70-w2": { conceptLabel: "اسم كان", explanation: "اللَّهُ — مرفوع، يحمل نفس رفع المبتدأ الأصلي." },
        "25-70-w3": { conceptLabel: "خبر كان", explanation: "غَفُورًا — منصوب؛ كان خبرًا مرفوعًا قبل دخول كان." }
      }
    },

    noticeInteraction: {
      type: "word-tap",
      ayahRef: "25:70",
      instanceId: "6.2-notice",
      promptContext: "Al-Furqan 25:70",
      question: "Tap اسم كان — the word that stayed مرفوعًا.",
      correctWordId: "25-70-w2",
      correctFeedback: "Right — اللَّهُ is اسم كان, still مرفوعًا, just as it was مبتدأ before كان entered.",
      incorrectFeedback: "Not quite — اسم كان is the word right after كان itself.",
      wordNotes: {
        "25-70-w2": { conceptLabel: "اسم كان", explanation: "اللَّهُ — مرفوع." },
        "25-70-w3": { conceptLabel: "خبر كان", explanation: "غَفُورًا — منصوب." }
      }
    },

    practiceQuestions: [
      {
        id: "p1",
        type: "true-false",
        prompt: "كان وأخواتها ترفع الخبر وتنصب المبتدأ.",
        correct: false,
        explanation: "No — the reverse: ترفع المبتدأ (اسمها) وتنصب الخبر (خبرها)."
      },
      {
        id: "p2",
        type: "multiple-choice",
        prompt: "في «كَانَ زَيْدٌ قَائِمًا»، ما إعراب «زَيْدٌ»؟",
        options: [
          { id: "a", labelAr: "اسم كان، مرفوع" },
          { id: "b", labelAr: "خبر كان، منصوب" },
          { id: "c", labelAr: "مفعول به" }
        ],
        correctOptionId: "a",
        explanation: "Right — زَيْدٌ keeps the رفع it had as مبتدأ; it's just renamed اسم كان."
      },
      {
        id: "p3",
        type: "multiple-choice",
        prompt: "أي الأفعال التالية من أخوات كان غير المشروطة؟",
        options: [
          { id: "a", labelAr: "أَصْبَحَ" },
          { id: "b", labelAr: "زَالَ" },
          { id: "c", labelAr: "دَامَ" }
        ],
        correctOptionId: "a",
        explanation: "Right — أَصْبَحَ needs no condition. زَالَ and دَامَ belong to the two conditional groups in Lesson 6.3."
      }
    ],

    quranChallenge: {
      surahAr: "الفرقان",
      surahEn: "Al-Furqan",
      ayahRef: "25:70",
      arabic: "وَكَانَ اللَّهُ غَفُورًا رَحِيمًا",
      translation: "And Allah is ever Forgiving and Merciful.",
      question: "ما إعراب «رَحِيمًا» هنا؟",
      options: [
        { id: "a", labelAr: "خبر ثانٍ لكان، منصوب" },
        { id: "b", labelAr: "اسم كان" },
        { id: "c", labelAr: "فاعل" }
      ],
      correctOptionId: "a",
      explanation: "Right — a second خبر لكان, منصوب like the first."
    },

    summary: [
      "كان وأخواتها: ترفع المبتدأ (اسمها)، وتنصب الخبر (خبرها) — اسمها stays where مبتدأ was; خبرها is what shifts from رفع to نصب.",
      "Eight verbs work this way unconditionally: كان، أمسى، أصبح، أضحى، ظلّ، بات، صار، ليس.",
      "Next: two more أخوات كان groups — these ones only work under a condition."
    ],

    completion: {
      titleAr: "كان وأخواتها",
      statement: "اسمها مرفوع، خبرها منصوب. Next: أخوات كان المشروطة."
    }
  },

  "6.3": {
    id: "6.3",
    steps: ["intro", "concept", "example", "quran", "notice", "practice", "challenge", "summary", "completion"],

    sourceNote: {
      status: "book-cited",
      label: "Sourced from your reference book — pages 95–97",
      detail: "وَالثَّانِي: مَا يَعْمَلُ هَذَا الْعَمَلَ بِشَرْطِ أَنْ يَتَقَدَّمَهُ نَفْيٌ، أَوْ شِبْهُهُ، أَوْ نَهْيٌ، وَهُوَ: 'زَالَ'، وَ'بَرِحَ'، وَ'فَتِئَ'، وَ'انْفَكَّ' (p. 96). وَالثَّالِثُ: مَا يَعْمَلُ هَذَا الْعَمَلَ بِشَرْطِ أَنْ يَتَقَدَّمَهُ 'مَا' الْمَصْدَرِيَّةُ الظَّرْفِيَّةُ، وَهُوَ: 'دَامَ' (p. 97). All three Qur'an citations (هود:١١٨، طه:٩١، مريم:٣١) are the book's own, given on these same pages."
    },

    intro: {
      titleAr: "أخوات كان المشروطة",
      titleEn: "Kana's Conditional Sisters",
      statement: "Same effect as كان — اسمها مرفوع، خبرها منصوب — but these five only work under a specific condition."
    },

    objective: [
      "name the four verbs that require a preceding نفي، شبهه، or نهي",
      "name the one verb that requires a preceding ما المصدرية الظرفية",
      "recognize both groups in Qur'anic phrases"
    ],

    concept: {
      termAr: "زَالَ، بَرِحَ، فَتِئَ، انْفَكَّ — ودَامَ",
      kind: "book-cited",
      definitionAr: "وَالثَّانِي: مَا يَعْمَلُ هَذَا الْعَمَلَ بِشَرْطِ أَنْ يَتَقَدَّمَهُ نَفْيٌ، أَوْ شِبْهُهُ، أَوْ نَهْيٌ... وَالثَّالِثُ: مَا يَعْمَلُ هَذَا الْعَمَلَ بِشَرْطِ أَنْ يَتَقَدَّمَهُ 'مَا' الْمَصْدَرِيَّةُ الظَّرْفِيَّةُ.",
      definitionEn: "Two more groups, same عمل as Lesson 6.2 (اسمها مرفوع، خبرها منصوب) — but each needs a specific word in front of it to switch on.",
      lead: "Group 2 needs a نفي (لا/لن/لم) or نهي (لا الناهية) right before it. Group 3 — just دَامَ — needs ما المصدرية الظرفية (\"as long as\") right before it."
    },

    definitionBreakdown: [
      {
        termAr: "زَالَ، بَرِحَ، فَتِئَ، انْفَكَّ",
        termEn: "condition: preceding negation",
        glossEn: "لا يَزَالُ، لَنْ يَبْرَحَ...",
        explanation: "All four mean roughly \"to not cease\" — and all four only work as a ناسخ once a نفي، شبهه، or نهي comes before them."
      },
      {
        termAr: "دَامَ",
        termEn: "condition: preceding ما المصدرية الظرفية",
        glossEn: "ما دُمْتُ...",
        explanation: "\"As long as...\" — دام only works as a ناسخ in the shape ما + دام."
      }
    ],

    conceptTree: {
      root: { ar: "أخوات كان المشروطة", en: "two conditions" },
      branches: [
        { ar: "شرط: نفي أو شبهه أو نهي", en: "", children: [{ ar: "زَالَ", en: "" }, { ar: "بَرِحَ", en: "" }, { ar: "فَتِئَ", en: "" }, { ar: "انْفَكَّ", en: "" }] },
        { ar: "شرط: ما المصدرية الظرفية", en: "", children: [{ ar: "دَامَ", en: "ما دُمْتُ = as long as I" }] }
      ]
    },

    example: {
      kind: "traditional-grammar-example",
      kindLabel: "The same running example, this time with a negation first",
      arabic: "لَا يَزَالُ زَيْدٌ قَائِمًا",
      transliteration: "Lā yazālu Zaydun qā'iman",
      translation: "Zayd is still standing",
      explanation: "لا — the required نفي, right before يزال. زَيْدٌ — اسم يزال, مرفوع. قَائِمًا — خبرها, منصوب — the exact same transformation as كان, once the condition is met.",
      contrast: {
        arabic: "زَالَ زَيْدٌ قَائِمًا",
        translation: "(not valid without a preceding negation)",
        explanation: "Without a نفي، شبهه، or نهي first, زال cannot act as a ناسخ this way at all — the condition isn't optional."
      }
    },

    quranExample: {
      surahAr: "هود",
      surahEn: "Hud",
      ayahRef: "11:118",
      arabic: "وَلَا يَزَالُونَ مُخْتَلِفِينَ",
      translation: "And they will not cease to differ.",
      notice: "لا — النفي الذي يشترطه يزال. واو الجماعة in يَزَالُونَ — اسمها, في محل رفع. مُخْتَلِفِينَ — خبرها, منصوب (علامة نصبه الياء؛ جمع مذكر سالم). A second book-cited example from the same page: ﴿لَن نَّبْرَحَ عَلَيْهِ عَاكِفِينَ﴾ [طه:٩١] — same pattern, with بَرِحَ instead, after the نفي لَن. A third: ﴿مَا دُمْتُ حَيًّا﴾ [مريم:٣١] — دام after ما المصدرية.",
      wordNotes: {
        "11-118-w2": { conceptLabel: "اسمها", explanation: "واو الجماعة في يَزَالُونَ — في محل رفع اسمها." },
        "11-118-w3": { conceptLabel: "خبرها", explanation: "مُخْتَلِفِينَ — منصوب، علامة نصبه الياء." }
      }
    },

    noticeInteraction: {
      type: "choice",
      promptContext: "Ta-Ha 20:91",
      promptAr: "لَن نَّبْرَحَ عَلَيْهِ عَاكِفِينَ",
      question: "ما الشرط الذي سمح لـ«نَبْرَحَ» بالعمل عمل كان هنا؟",
      options: [
        { id: "a", labelAr: "لَن (نفي)", labelEn: "a preceding negation" },
        { id: "b", labelAr: "لا شيء، تعمل دائمًا", labelEn: "nothing — it always works" },
        { id: "c", labelAr: "عَلَيْهِ", labelEn: "the preposition عَلَيْهِ" }
      ],
      correctOptionId: "a",
      correctFeedback: "Right — لَن is the preceding negation that switches بَرِحَ's عمل on.",
      incorrectFeedback: "Not quite — بَرِحَ needs a نفي، شبهه، or نهي right before it; look at the word right before نَبْرَحَ."
    },

    practiceQuestions: [
      {
        id: "p1",
        type: "true-false",
        prompt: "تعمل «زَالَ» و«بَرِحَ» و«فَتِئَ» و«انْفَكَّ» عمل كان بلا أي شرط.",
        correct: false,
        explanation: "No — كلها تشترط تقدم نفي أو شبهه أو نهي عليها، بخلاف المجموعة غير المشروطة في الدرس السابق."
      },
      {
        id: "p2",
        type: "multiple-choice",
        prompt: "ما الشرط الذي تحتاجه «دَامَ» لتعمل عمل كان؟",
        options: [
          { id: "a", labelAr: "أن يتقدمها 'ما' المصدرية الظرفية" },
          { id: "b", labelAr: "أن يتقدمها نفي" },
          { id: "c", labelAr: "لا تحتاج أي شرط" }
        ],
        correctOptionId: "a",
        explanation: "Right — دام only works as ما دُمْتُ / ما دَامَ, with ما المصدرية الظرفية right before it."
      },
      {
        id: "p3",
        type: "multiple-choice",
        prompt: "في ﴿وَلَا يَزَالُونَ مُخْتَلِفِينَ﴾، ما إعراب «مُخْتَلِفِينَ»؟",
        options: [
          { id: "a", labelAr: "خبر يزال، منصوب" },
          { id: "b", labelAr: "اسم يزال، مرفوع" },
          { id: "c", labelAr: "مفعول به" }
        ],
        correctOptionId: "a",
        explanation: "Right — خبرها, منصوب, علامة نصبه الياء لأنه جمع مذكر سالم."
      }
    ],

    quranChallenge: {
      surahAr: "مريم",
      surahEn: "Maryam",
      ayahRef: "19:31",
      arabic: "وَأَوْصَانِي بِالصَّلَاةِ وَالزَّكَاةِ مَا دُمْتُ حَيًّا",
      translation: "And He has enjoined upon me prayer and charity as long as I remain alive.",
      question: "ما الذي سبق «دُمْتُ» هنا وسمح لها بالعمل؟",
      options: [
        { id: "a", labelAr: "مَا المصدرية الظرفية" },
        { id: "b", labelAr: "نفي" },
        { id: "c", labelAr: "لا شيء" }
      ],
      correctOptionId: "a",
      explanation: "Right — ما دُمْتُ حَيًّا = \"as long as I remain alive\" — ما المصدرية الظرفية is دام's one and only condition."
    },

    summary: [
      "Same عمل as كان (اسمها مرفوع، خبرها منصوب) — but switched on only by a condition.",
      "Group 2 — زال، برح، فتئ، انفك — needs a preceding نفي، شبهه، or نهي.",
      "Group 3 — دام — needs a preceding ما المصدرية الظرفية (\"as long as\").",
      "All thirteen أخوات كان now covered. Next: the opposite effect — إنّ وأخواتها."
    ],

    completion: {
      titleAr: "أخوات كان المشروطة",
      statement: "Same عمل as كان, switched on by a condition. Next: إنّ وأخواتها."
    }
  },

  "6.4": {
    id: "6.4",
    steps: ["intro", "concept", "example", "quran", "notice", "practice", "challenge", "summary", "completion"],

    sourceNote: {
      status: "book-cited",
      label: "Sourced from your reference book — page 108",
      detail: "وَأَمَّا 'إِنَّ' وَأَخَوَاتُهَا: فَتَنْصِبُ الْمُبْتَدَأَ، وَيُسَمَّى اسْمَهَا، وَتَرْفَعُ الْخَبَرَ، وَيُسَمَّى خَبَرَهَا، وَهِيَ سِتَّةُ أَحْرُفٍ (p. 108). The six particles, their individual meaning-glosses (توكيد، تشبيه، استدراك، تمنٍّ، ترجٍّ/توقع), and the البقرة:١٩٢ citation are all the book's own."
    },

    intro: {
      titleAr: "إنّ وأخواتها",
      titleEn: "Inna and Her Sisters",
      statement: "The exact reverse of كان: this family makes المبتدأ منصوبًا, and leaves الخبر مرفوعًا."
    },

    objective: [
      "state إنّ's effect: تنصب المبتدأ، وترفع الخبر",
      "name all six particles and the meaning your book gives each one",
      "apply the transformation to زَيْدٌ قَائِمٌ, and recognize it in a Qur'anic phrase"
    ],

    concept: {
      termAr: "إنّ وأخواتها",
      kind: "book-cited",
      definitionAr: "وَأَمَّا 'إِنَّ' وَأَخَوَاتُهَا: فَتَنْصِبُ الْمُبْتَدَأَ، وَيُسَمَّى اسْمَهَا، وَتَرْفَعُ الْخَبَرَ، وَيُسَمَّى خَبَرَهَا.",
      definitionEn: "إنّ and her sisters put the مبتدأ in نصب — now called اسمها — and leave الخبر مرفوعًا — now called خبرها.",
      lead: "The exact mirror image of كان: there, اسمها stayed مرفوعًا and خبرها became منصوبًا. Here, اسمها becomes منصوبًا, and خبرها stays مرفوعًا."
    },

    definitionBreakdown: [
      {
        termAr: "إِنَّ، أَنَّ",
        termEn: "توكيد النسبة ونفي الشك",
        glossEn: "indeed, certainly",
        explanation: "The two most common sisters — emphasizing the sentence and removing any doubt about it."
      },
      {
        termAr: "كَأَنَّ",
        termEn: "تشبيه مؤكَّد",
        glossEn: "as if, like",
        explanation: "كَأَنَّ زَيْدًا أَسَدٌ — \"Zayd is like a lion\": an emphatic comparison."
      },
      {
        termAr: "لَكِنَّ",
        termEn: "استدراك",
        glossEn: "but, however",
        explanation: "زَيْدٌ شُجَاعٌ لَكِنَّهُ بَخِيلٌ — correcting or qualifying what came before."
      },
      {
        termAr: "لَيْتَ",
        termEn: "تمنٍّ",
        glossEn: "if only, I wish",
        explanation: "لَيْتَ الشَّبَابَ عَائِدٌ — wishing for something, usually out of reach."
      },
      {
        termAr: "لَعَلَّ",
        termEn: "ترجٍّ أو توقُّع",
        glossEn: "perhaps, hopefully",
        explanation: "Hoping for, or expecting, something to happen."
      }
    ],

    conceptTree: {
      root: { ar: "إنّ وأخواتها", en: "six particles" },
      branches: [
        { ar: "إِنَّ / أَنَّ", en: "توكيد" },
        { ar: "كَأَنَّ", en: "تشبيه" },
        { ar: "لَكِنَّ", en: "استدراك" },
        { ar: "لَيْتَ", en: "تمنٍّ" },
        { ar: "لَعَلَّ", en: "ترجٍّ / توقع" }
      ]
    },

    example: {
      kind: "traditional-grammar-example",
      kindLabel: "The same running example, with إنّ entering instead",
      arabic: "إِنَّ زَيْدًا قَائِمٌ",
      transliteration: "Inna Zaydan qā'im",
      translation: "Indeed, Zayd is standing",
      explanation: "زَيْدًا — اسم إنّ, now منصوبًا — the opposite of what كان did to the same word. قَائِمٌ — خبر إنّ, stays مرفوعًا, exactly as it was plain خبر before إنّ entered.",
      contrast: {
        arabic: "كَانَ زَيْدٌ قَائِمًا",
        translation: "Zayd was standing",
        explanation: "Lesson 6.2's own transformation, for direct comparison: there زيد stayed مرفوعًا and قائم became منصوبًا — the exact reverse of what إنّ does."
      }
    },

    quranExample: {
      surahAr: "البقرة",
      surahEn: "Al-Baqarah",
      ayahRef: "2:192",
      arabic: "فَإِنَّ اللَّهَ غَفُورٌ رَحِيمٌ",
      translation: "Then indeed, Allah is Forgiving and Merciful.",
      notice: "اللَّهَ — اسم إنّ, منصوب. غَفُورٌ — خبر إنّ, مرفوع. Compare this directly with Lesson 6.2's وَكَانَ اللَّهُ غَفُورًا رَحِيمًا — same two words, الله and غفور, opposite إعراب, because a different ناسخ entered.",
      wordNotes: {
        "2-192-w2": { conceptLabel: "اسم إنّ", explanation: "اللَّهَ — منصوب، بخلاف اللَّهُ المرفوعة بعد كان." },
        "2-192-w3": { conceptLabel: "خبر إنّ", explanation: "غَفُورٌ — مرفوع." }
      }
    },

    noticeInteraction: {
      type: "word-tap",
      ayahRef: "2:192",
      instanceId: "6.4-notice",
      promptContext: "Al-Baqarah 2:192",
      question: "Tap اسم إنّ — the word that became منصوبًا.",
      correctWordId: "2-192-w2",
      correctFeedback: "Right — اللَّهَ is اسم إنّ, منصوب — the same word that stayed مرفوعًا after كان in Lesson 6.2.",
      incorrectFeedback: "Not quite — اسم إنّ is the word right after إنّ itself.",
      wordNotes: {
        "2-192-w2": { conceptLabel: "اسم إنّ", explanation: "اللَّهَ — منصوب." },
        "2-192-w3": { conceptLabel: "خبر إنّ", explanation: "غَفُورٌ — مرفوع." }
      }
    },

    practiceQuestions: [
      {
        id: "p1",
        type: "true-false",
        prompt: "إنّ وأخواتها تنصب المبتدأ وترفع الخبر.",
        correct: true,
        explanation: "Right — تنصب الاسم (اسمها)، وترفع الخبر (خبرها) — عكس كان تمامًا."
      },
      {
        id: "p2",
        type: "multiple-choice",
        prompt: "أي الأحرف التالية للتمنّي؟",
        options: [
          { id: "a", labelAr: "لَيْتَ" },
          { id: "b", labelAr: "لَعَلَّ" },
          { id: "c", labelAr: "لَكِنَّ" }
        ],
        correctOptionId: "a",
        explanation: "Right — لَيْتَ للتمنّي؛ لَعَلَّ للترجّي أو التوقع؛ لَكِنَّ للاستدراك."
      },
      {
        id: "p3",
        type: "multiple-choice",
        prompt: "في «إِنَّ زَيْدًا قَائِمٌ»، ما إعراب «قَائِمٌ»؟",
        options: [
          { id: "a", labelAr: "خبر إنّ، مرفوع" },
          { id: "b", labelAr: "اسم إنّ، منصوب" },
          { id: "c", labelAr: "نعت" }
        ],
        correctOptionId: "a",
        explanation: "Right — خبرها stays مرفوعًا, exactly as plain الخبر was before إنّ entered."
      }
    ],

    quranChallenge: {
      surahAr: "البقرة",
      surahEn: "Al-Baqarah",
      ayahRef: "2:192",
      arabic: "فَإِنَّ اللَّهَ غَفُورٌ رَحِيمٌ",
      translation: "Then indeed, Allah is Forgiving and Merciful.",
      question: "ما إعراب «رَحِيمٌ» هنا؟",
      options: [
        { id: "a", labelAr: "خبر ثانٍ لإنّ، مرفوع" },
        { id: "b", labelAr: "اسم إنّ" },
        { id: "c", labelAr: "منصوب" }
      ],
      correctOptionId: "a",
      explanation: "Right — خبر ثانٍ, مرفوع مثل الأول — غَفُورٌ ورَحِيمٌ كلاهما خبران لإنّ."
    },

    summary: [
      "إنّ وأخواتها: تنصب المبتدأ (اسمها)، وترفع الخبر (خبرها) — عكس كان تمامًا.",
      "ستة أحرف: إنّ/أنّ (توكيد)، كأنّ (تشبيه)، لكنّ (استدراك)، ليت (تمنٍّ)، لعلّ (ترجٍّ/توقع).",
      "Next: a direct, side-by-side comparison of كان and إنّ — one of the most important contrasts in this whole Part."
    ],

    completion: {
      titleAr: "إنّ وأخواتها",
      statement: "اسمها منصوب، خبرها مرفوع — عكس كان. Next: المقارنة بين كان وإنّ."
    }
  },

  "6.5": {
    id: "6.5",
    steps: ["intro", "concept", "example", "quran", "notice", "practice", "challenge", "summary", "completion"],

    sourceNote: {
      status: "qurra-comparison",
      label: "A QURRA-built contrast — reusing material the book already cites individually on pp. 95 and 108",
      detail: "Your book presents كان (p. 95) and إنّ (p. 108) as two separate sections, 13 pages apart, each with its own Qur'anic citation. It never places them side by side itself. This lesson does — reusing the exact two book-cited verses from Lessons 6.2 and 6.4, which happen to share the same two words (الله، غفور/رحيم), making the contrast unusually clean. No new content is introduced; this is organization, not invention."
    },

    intro: {
      titleAr: "المقارنة: كان ↔ إنّ",
      titleEn: "Kana vs. Inna: The Key Contrast",
      statement: "Same baseline sentence, two opposite transformations. This is the comparison to really hold onto."
    },

    objective: [
      "state both patterns side by side: كان (رفع/نصب) and إنّ (نصب/رفع)",
      "recognize which ناسخ is at work just from looking at which word is منصوب",
      "see the same real Qur'anic pair — الله غفور/رحيم — transformed two different ways"
    ],

    concept: {
      termAr: "كان مقابل إنّ",
      kind: "qurra-comparison",
      definitionAr: "كَانَ: اسْمُهَا مَرْفُوعٌ، خَبَرُهَا مَنْصُوبٌ. إِنَّ: اسْمُهَا مَنْصُوبٌ، خَبَرُهَا مَرْفُوعٌ.",
      definitionEn: "Two families, two opposite effects on the exact same نواسخ baseline. Knowing one automatically tells you the other.",
      lead: "If اسمها is مرفوع, you're looking at كان's family. If اسمها is منصوب, you're looking at إنّ's family (or لا النافية للجنس, next lesson). The منصوب one always tells you which word changed."
    },

    definitionBreakdown: [
      {
        termAr: "كان",
        termEn: "اسمها مرفوع، خبرها منصوب",
        glossEn: "كَانَ زَيْدٌ قَائِمًا",
        explanation: "اسمها keeps مبتدأ's own رفع; خبرها is the one that shifts."
      },
      {
        termAr: "إنّ",
        termEn: "اسمها منصوب، خبرها مرفوع",
        glossEn: "إِنَّ زَيْدًا قَائِمٌ",
        explanation: "اسمها is the one that shifts this time; خبرها keeps الخبر's own رفع."
      }
    ],

    conceptTree: {
      root: { ar: "كان ↔ إنّ", en: "mirror-image effects" },
      branches: [
        { ar: "كان", en: "اسمها مرفوع / خبرها منصوب", children: [{ ar: "كَانَ زَيْدٌ قَائِمًا", en: "" }] },
        { ar: "إنّ", en: "اسمها منصوب / خبرها مرفوع", children: [{ ar: "إِنَّ زَيْدًا قَائِمٌ", en: "" }] }
      ]
    },

    example: {
      kind: "traditional-grammar-example",
      kindLabel: "Both transformations, side by side",
      arabic: "كَانَ زَيْدٌ قَائِمًا",
      transliteration: "Kāna Zaydun qā'iman",
      translation: "Zayd was standing",
      explanation: "زَيْدٌ مرفوع (اسم كان)، قَائِمًا منصوب (خبر كان).",
      contrast: {
        arabic: "إِنَّ زَيْدًا قَائِمٌ",
        translation: "Indeed, Zayd is standing",
        explanation: "زَيْدًا منصوب الآن (اسم إنّ)، قَائِمٌ مرفوع (خبر إنّ) — نفس الجملة الأصلية، نفس الكلمتين، إعراب معكوس تمامًا."
      }
    },

    quranExample: {
      surahAr: "الفرقان",
      surahEn: "Al-Furqan",
      ayahRef: "25:70",
      arabic: "وَكَانَ اللَّهُ غَفُورًا رَحِيمًا",
      translation: "And Allah is ever Forgiving and Merciful.",
      notice: "Set this beside Lesson 6.4's ﴿فَإِنَّ اللَّهَ غَفُورٌ رَحِيمٌ﴾ [البقرة:١٩٢]. Same two concepts — الله، غفور/رحيم — but here اللَّهُ is مرفوع (اسم كان) and غَفُورًا منصوب (خبرها); there اللَّهَ was منصوب (اسم إنّ) and غَفُورٌ مرفوع (خبرها). Two real, independent Qur'anic citations from your own book, forming a perfect natural contrast pair.",
      wordNotes: {
        "25-70-w2": { conceptLabel: "اسم كان", explanation: "اللَّهُ — مرفوع. قارن باللَّهَ المنصوبة بعد إنّ." },
        "25-70-w3": { conceptLabel: "خبر كان", explanation: "غَفُورًا — منصوب. قارن بغَفُورٌ المرفوعة بعد إنّ." }
      }
    },

    noticeInteraction: {
      type: "choice",
      promptContext: "Comparing both verses",
      promptAr: "وَكَانَ اللَّهُ غَفُورًا رَحِيمًا — فَإِنَّ اللَّهَ غَفُورٌ رَحِيمٌ",
      question: "لماذا جاءت «اللَّهُ» مرفوعة في الأولى و«اللَّهَ» منصوبة في الثانية؟",
      options: [
        { id: "a", labelAr: "لأن الناسخ مختلف: كان ترفع اسمها، وإنّ تنصب اسمها", labelEn: "a different ناسخ entered each sentence" },
        { id: "b", labelAr: "خطأ إملائي", labelEn: "a spelling mistake" },
        { id: "c", labelAr: "لا فرق في المعنى بينهما", labelEn: "there's no real difference" }
      ],
      correctOptionId: "a",
      correctFeedback: "Right — كان رفعت اسمها، وإنّ نصبت اسمها. نفس الكلمة، ناسخ مختلف، إعراب مختلف.",
      incorrectFeedback: "Not quite — look at which ناسخ opens each sentence: كان في الأولى، إنّ في الثانية."
    },

    practiceQuestions: [
      {
        id: "p1",
        type: "true-false",
        prompt: "إذا كان اسم الناسخ مرفوعًا، فالناسخ على الأرجح من أخوات كان لا من أخوات إنّ.",
        correct: true,
        explanation: "Right — اسمها مرفوع هو بالضبط أثر كان وأخواتها، لا إنّ."
      },
      {
        id: "p2",
        type: "multiple-choice",
        prompt: "في «إِنَّ زَيْدًا قَائِمٌ» مقابل «كَانَ زَيْدٌ قَائِمًا»، ما الذي تغيّر؟",
        options: [
          { id: "a", labelAr: "إعراب الكلمتين انعكس تمامًا" },
          { id: "b", labelAr: "لا شيء تغيّر" },
          { id: "c", labelAr: "المعنى فقط، لا الإعراب" }
        ],
        correctOptionId: "a",
        explanation: "Right — زيد: مرفوع ← منصوب. قائم: منصوب ← مرفوع. انعكاس كامل."
      },
      {
        id: "p3",
        type: "multiple-choice",
        prompt: "ما القاعدة السريعة لمعرفة أي ناسخ دخل، بالنظر إلى اسمه فقط؟",
        options: [
          { id: "a", labelAr: "اسمه مرفوع ← كان؛ اسمه منصوب ← إنّ" },
          { id: "b", labelAr: "اسمه مرفوع ← إنّ؛ اسمه منصوب ← كان" },
          { id: "c", labelAr: "لا توجد قاعدة" }
        ],
        correctOptionId: "a",
        explanation: "Right — هذا هو بالضبط الفرق البنيوي بين العائلتين."
      }
    ],

    quranChallenge: {
      surahAr: "البقرة",
      surahEn: "Al-Baqarah",
      ayahRef: "2:192",
      arabic: "فَإِنَّ اللَّهَ غَفُورٌ رَحِيمٌ",
      translation: "Then indeed, Allah is Forgiving and Merciful.",
      question: "لو حُذفت «إنّ» ودخلت «كان» بدلًا منها، ماذا سيحدث لإعراب «اللَّهَ»؟",
      options: [
        { id: "a", labelAr: "تصبح «اللَّهُ»، مرفوعة" },
        { id: "b", labelAr: "تبقى منصوبة كما هي" },
        { id: "c", labelAr: "تصبح مجرورة" }
      ],
      correctOptionId: "a",
      explanation: "Right — كان ترفع اسمها دائمًا، بعكس إنّ."
    },

    summary: [
      "كان: اسمها مرفوع، خبرها منصوب. إنّ: اسمها منصوب، خبرها مرفوع — صورتان متعاكستان تمامًا لنفس الجملة الاسمية الأصلية.",
      "القاعدة السريعة: اسم الناسخ مرفوع ← من أخوات كان؛ اسمه منصوب ← من أخوات إنّ (أو 'لا' في الدرس القادم).",
      "Next: a second member of إنّ's family effect — لا النافية للجنس."
    ],

    completion: {
      titleAr: "المقارنة: كان ↔ إنّ",
      statement: "رفع مقابل نصب، في نفس الجملة بالضبط. Next: لا النافية للجنس."
    }
  },

  "6.6": {
    id: "6.6",
    steps: ["intro", "concept", "example", "quran", "notice", "practice", "challenge", "summary", "completion"],

    sourceNote: {
      status: "book-cited",
      label: "Sourced from your reference book — pages 120, 124",
      detail: "وَأَمَّا (لَا) الَّتِي لِنَفْيِ الْجِنْسِ: فَهِيَ الَّتِي يُرَادُ بِهَا نَفْيُ الْجِنْسِ عَلَى سَبِيلِ التَّنْصِيصِ (p. 120); تَعْمَلُ عَمَلَ 'إِنَّ': تَنْصِبُ الِاسْمَ، وَتَرْفَعُ الْخَبَرَ، بِشَرْطِ أَنْ يَكُونَ اسْمُهَا وَخَبَرُهَا نَكِرَتَيْنِ، وَأَنْ يَكُونَ اسْمُهَا مُتَّصِلًا بِهَا. Your book further splits اسمها's بناء by whether it's مضاف, مشبّه بالمضاف, مفرد, مثنى, or a sound plural — this lesson teaches the two clearest, highest-confidence cases (مضاف/مشبّه بالمضاف → معرب منصوب; مفرد → مبني على الفتح) directly from the page image. The dual- and plural-form sub-cases are genuinely present in the source but the print was too dense at this resolution to transcribe with full confidence, so they're left for a future pass rather than risk stating a wrong بناء vowel — flagged in the final report, not silently dropped. خبرها's حذف rule (pp. 124) and both Qur'anic citations are the book's own."
    },

    intro: {
      titleAr: "لا النافية للجنس",
      titleEn: "La of Categorical Negation",
      statement: "A second route to إنّ's own effect — but this one denies an entire category in a single word."
    },

    objective: [
      "state لا النافية للجنس's effect: تنصب الاسم، وترفع الخبر — same as إنّ",
      "name its two conditions, and the two clearest اسم patterns your book teaches",
      "recognize when its خبر is dropped, and recognize it in two Qur'anic phrases"
    ],

    concept: {
      termAr: "لا النافية للجنس",
      kind: "book-cited",
      definitionAr: "وَأَمَّا (لَا) الَّتِي لِنَفْيِ الْجِنْسِ: فَهِيَ الَّتِي يُرَادُ بِهَا نَفْيُ الْجِنْسِ عَلَى سَبِيلِ التَّنْصِيصِ. تَعْمَلُ عَمَلَ 'إِنَّ': تَنْصِبُ الِاسْمَ، وَتَرْفَعُ الْخَبَرَ.",
      definitionEn: "This لا doesn't just negate one thing — it denies the entire category at once, explicitly. \"لا رجلَ في الدار\" doesn't mean \"one man isn't there\"; it means not a single man is there, full stop. And it works exactly like إنّ: تنصب الاسم، وترفع الخبر.",
      lead: "Two conditions, both required: اسمها وخبرها نكرتان (indefinite), and اسمها متصل بها — nothing at all may come between لا and its اسم."
    },

    definitionBreakdown: [
      {
        termAr: "الشرط الأول",
        termEn: "نكرتان",
        glossEn: "both اسمها and خبرها indefinite",
        explanation: "لا النافية للجنس only works on نكرة + نكرة. A definite noun switches it off entirely (see إهمالها below)."
      },
      {
        termAr: "الشرط الثاني",
        termEn: "اتصال مباشر",
        glossEn: "nothing between لا and اسمها",
        explanation: "No جار ومجرور, no ظرف, nothing at all may separate لا from the noun right after it."
      },
      {
        termAr: "اسمها: مضاف أو شبيه بالمضاف",
        termEn: "معرب منصوب",
        glossEn: "لا صَاحِبَ عِلْمٍ مَمْقُوتٌ",
        explanation: "If اسمها is itself a مضاف (or acts like one), it stays fully إعراب-able — just منصوب, with a normal نصب sign."
      },
      {
        termAr: "اسمها: مفرد",
        termEn: "مبني على الفتح",
        glossEn: "لا رَجُلَ حَاضِرٌ",
        explanation: "A plain مفرد اسم (not مضاف, not شبيه بالمضاف) is built — مبني — on الفتح, in محل نصب."
      }
    ],

    conceptTree: {
      root: { ar: "لا النافية للجنس", en: "عمل إنّ" },
      branches: [
        { ar: "الشروط", en: "", children: [{ ar: "اسمها وخبرها نكرتان", en: "" }, { ar: "اتصال اسمها بها", en: "" }] },
        { ar: "اسمها مضاف / شبيه بالمضاف", en: "معرب منصوب" },
        { ar: "اسمها مفرد", en: "مبني على الفتح" },
        { ar: "خبرها", en: "", children: [{ ar: "جُهل: وجب ذكره", en: "" }, { ar: "عُلم: كثر حذفه", en: "" }] }
      ]
    },

    example: {
      kind: "book-example",
      kindLabel: "Both اسم patterns, straight from the book",
      arabic: "لَا صَاحِبَ عِلْمٍ مَمْقُوتٌ",
      transliteration: "Lā ṣāḥiba 'ilmin mamqūt",
      translation: "No possessor of knowledge is ever despised",
      explanation: "صَاحِبَ — مضاف (إلى عِلْمٍ), فاسمها معرب منصوب بالفتحة الظاهرة. مَمْقُوتٌ — خبرها, مرفوع.",
      contrast: {
        arabic: "لَا رَجُلَ حَاضِرٌ",
        translation: "No man is present",
        explanation: "رَجُلَ هنا مفرد — ليس مضافًا ولا شبيهًا بالمضاف — فهو مبني على الفتح في محل نصب، لا معربًا."
      }
    },

    quranExample: {
      surahAr: "سبأ",
      surahEn: "Saba",
      ayahRef: "34:51",
      arabic: "فَلَا فَوْتَ",
      translation: "There will be no escape.",
      notice: "فَوْتَ — اسم لا, مبني على الفتح في محل نصب (مفرد). خبرها محذوف هنا — تقديره: لهم — لأنه معلوم من السياق. كتابك يعطي مثالًا آخر لهذا الحذف أيضًا: ﴿لَا ضَيْرَ﴾ [الشعراء:٥٠] — خبرها محذوف تقديره: علينا.",
      wordNotes: {
        "34-51-w2": { conceptLabel: "اسم لا", explanation: "فَوْتَ — مبني على الفتح في محل نصب؛ خبرها محذوف تقديره: لهم." }
      }
    },

    noticeInteraction: {
      type: "word-tap",
      ayahRef: "34:51",
      instanceId: "6.6-notice",
      promptContext: "Saba 34:51",
      question: "Tap اسم لا — the word built on الفتح.",
      correctWordId: "34-51-w2",
      correctFeedback: "Right — فَوْتَ is اسم لا, مبني على الفتح في محل نصب. Its خبر isn't even written here — it's محذوف, تقديره: لهم.",
      incorrectFeedback: "Not quite — اسم لا is the word right after لا itself.",
      wordNotes: {
        "34-51-w2": { conceptLabel: "اسم لا", explanation: "فَوْتَ — مبني على الفتح في محل نصب." }
      }
    },

    practiceQuestions: [
      {
        id: "p1",
        type: "true-false",
        prompt: "لا النافية للجنس تعمل حتى لو كان اسمها وخبرها معرفتين.",
        correct: false,
        explanation: "No — تشترط أن يكون اسمها وخبرها نكرتين؛ وإلا وجب إهمالها."
      },
      {
        id: "p2",
        type: "multiple-choice",
        prompt: "في «لَا رَجُلَ حَاضِرٌ»، ما إعراب «رَجُلَ»؟",
        options: [
          { id: "a", labelAr: "اسم لا، مبني على الفتح في محل نصب" },
          { id: "b", labelAr: "اسم لا، معرب منصوب" },
          { id: "c", labelAr: "خبر لا، مرفوع" }
        ],
        correctOptionId: "a",
        explanation: "Right — رجل مفرد، غير مضاف، فهو مبني على الفتح، لا معربًا."
      },
      {
        id: "p3",
        type: "multiple-choice",
        prompt: "متى يجب ذكر خبر «لا» بدل حذفه؟",
        options: [
          { id: "a", labelAr: "إذا كان الخبر مجهولًا من السياق" },
          { id: "b", labelAr: "إذا كان الخبر معلومًا من السياق" },
          { id: "c", labelAr: "لا يُذكر أبدًا" }
        ],
        correctOptionId: "a",
        explanation: "Right — إذا جُهل خبرها وجب ذكره؛ أما إذا عُلم من السياق فالأكثر حذفه، كما في فَلَا فَوْتَ."
      }
    ],

    quranChallenge: {
      surahAr: "الشعراء",
      surahEn: "Ash-Shu'ara",
      ayahRef: "26:50",
      arabic: "لَا ضَيْرَ",
      translation: "No harm.",
      question: "ما إعراب «ضَيْرَ» هنا؟",
      options: [
        { id: "a", labelAr: "اسم لا، مبني على الفتح في محل نصب" },
        { id: "b", labelAr: "فاعل" },
        { id: "c", labelAr: "خبر لا" }
      ],
      correctOptionId: "a",
      explanation: "Right — ضَيْرَ مفرد، اسم لا مبني على الفتح؛ وخبرها محذوف هنا تقديره: علينا."
    },

    summary: [
      "لا النافية للجنس تعمل عمل إنّ: تنصب الاسم، وترفع الخبر — بشرط أن يكونا نكرتين، وأن يتصل اسمها بها مباشرة.",
      "اسمها: مضاف أو شبيه بالمضاف ← معرب منصوب؛ مفرد ← مبني على الفتح في محل نصب.",
      "خبرها يُحذف كثيرًا إذا عُلم من السياق — كما في فَلَا فَوْتَ ولَا ضَيْرَ.",
      "Next: a completely different kind of ناسخ — ظنّ وأخواتها, which نصب both words at once."
    ],

    completion: {
      titleAr: "لا النافية للجنس",
      statement: "عمل إنّ، بشرط النكرة والاتصال. Next: ظنّ وأخواتها."
    }
  },

  "6.7": {
    id: "6.7",
    steps: ["intro", "concept", "example", "quran", "notice", "practice", "challenge", "summary", "completion"],

    sourceNote: {
      status: "book-cited",
      label: "Sourced from your reference book — pages 125–127",
      detail: "وَأَمَّا 'ظَنَّ' وَأَخَوَاتُهَا: فَإِنَّهَا تَدْخُلُ عَلَى الْمُبْتَدَأِ وَالْخَبَرِ فَتَنْصِبُهُمَا (p. 125). The twelve verbs below are read directly from the book's own enumerated list on p. 125. A footnote on the same page describes this group as 'أربعة عشر فعلًا' (fourteen verbs) — our direct count of the clearly legible prose list reaches twelve; rather than guess at the missing two, this is flagged honestly as a source ambiguity in the final report. The المعارج:٦-٧ citation is the book's own."
    },

    intro: {
      titleAr: "ظنّ وأخواتها: أفعال القلوب",
      titleEn: "Zanna and Her Sisters: The Heart-Verbs",
      statement: "A different kind of ناسخ entirely: this one doesn't just reshape المبتدأ والخبر — it turns them into two مفعولان."
    },

    objective: [
      "state ظنّ's effect: تدخل على المبتدأ والخبر فتنصبهما، مفعولين لها",
      "name the heart-verbs your book lists, and connect مفعول أول/ثانٍ back to Part 4's المفعول به",
      "apply the transformation to زَيْدٌ قَائِمٌ, and recognize it in a Qur'anic pair of verses"
    ],

    concept: {
      termAr: "ظنّ وأخواتها",
      kind: "book-cited",
      definitionAr: "وَأَمَّا 'ظَنَّ' وَأَخَوَاتُهَا: فَإِنَّهَا تَدْخُلُ عَلَى الْمُبْتَدَأِ وَالْخَبَرِ فَتَنْصِبُهُمَا عَلَى أَنَّهُمَا مَفْعُولَانِ لَهَا.",
      definitionEn: "ظنّ and her sisters are نواسخ من نوع ثالث: they don't leave one word مرفوعًا the way كان or إنّ do. Both المبتدأ والخبر become منصوبين — and change title entirely, into مفعول أول and مفعول ثانٍ.",
      lead: "This is the bridge back to Part 4's own المفعول به: ظننت doesn't invent a new kind of نصب. It's the same مفعول به you already know — ظنّ just takes two of them at once."
    },

    definitionBreakdown: [
      {
        termAr: "مفعول أول",
        termEn: "was المبتدأ",
        glossEn: "ظَنَنْتُ زَيْدًا...",
        explanation: "The word that was مبتدأ is now مفعول أول — منصوب, the ordinary مفعول به ending."
      },
      {
        termAr: "مفعول ثانٍ",
        termEn: "was الخبر",
        glossEn: "...قَائِمًا",
        explanation: "The word that was الخبر is now مفعول ثانٍ — also منصوب."
      }
    ],

    conceptTree: {
      root: { ar: "أفعال القلوب", en: "النوع الأول من ظنّ وأخواتها" },
      branches: [
        { ar: "ظَنَنْتُ", en: "" }, { ar: "حَسِبْتُ", en: "" }, { ar: "خِلْتُ", en: "" }, { ar: "رَأَيْتُ", en: "" },
        { ar: "عَلِمْتُ", en: "" }, { ar: "جَعَلْتُ", en: "" }, { ar: "عَدَدْتُ", en: "" }, { ar: "هَبْ", en: "(افرِض)" },
        { ar: "تَعَلَّمْ", en: "(اعلَمْ)" }, { ar: "أَلْفَيْتُ", en: "" }, { ar: "دَرَيْتُ", en: "" }, { ar: "وَجَدْتُ", en: "" }
      ]
    },

    example: {
      kind: "traditional-grammar-example",
      kindLabel: "The running example, now with ظنّ entering",
      arabic: "ظَنَنْتُ زَيْدًا قَائِمًا",
      transliteration: "Ẓanantu Zaydan qā'iman",
      translation: "I thought Zayd was standing",
      explanation: "زَيْدًا — مفعول أول, منصوب (كان مبتدأ مرفوعًا). قَائِمًا — مفعول ثانٍ, منصوب (كان خبرًا مرفوعًا). Both words moved from رفع to نصب — unlike كان or إنّ, where only one word changed each time.",
      contrast: {
        arabic: "زَيْدٌ قَائِمٌ",
        translation: "Zayd is standing",
        explanation: "The original baseline, with nothing yet entered — both مرفوعان. ظننت is what pulls both of them into نصب at once."
      }
    },

    quranExample: {
      surahAr: "المعارج",
      surahEn: "Al-Ma'arij",
      ayahRef: "70:6",
      arabic: "إِنَّهُمْ يَرَوْنَهُ بَعِيدًا",
      translation: "Indeed, they see it [as] distant.",
      notice: "يَرَوْنَهُ — رأى من أفعال القلوب؛ الهاء الملحقة به: مفعول أول, في محل نصب. بَعِيدًا — مفعول ثانٍ, منصوب. كتابك يذكر هذه الآية مع الآية التالية مباشرة: ﴿وَنَرَاهُ قَرِيبًا﴾ [المعارج:٧] — نفس البنية بالضبط: الهاء مفعول أول، قَرِيبًا مفعول ثانٍ — تناقض مقصود بين كيف يراه الكافرون وكيف يراه الله.",
      wordNotes: {
        "70-6-w2": { conceptLabel: "رأى + مفعول أول", explanation: "يَرَوْنَهُ — الهاء: مفعول أول في محل نصب." },
        "70-6-w3": { conceptLabel: "مفعول ثانٍ", explanation: "بَعِيدًا — منصوب." }
      }
    },

    noticeInteraction: {
      type: "word-tap",
      ayahRef: "70:6",
      instanceId: "6.7-notice",
      promptContext: "Al-Ma'arij 70:6",
      question: "Tap المفعول الثاني — the word that was الخبر before رأى entered.",
      correctWordId: "70-6-w3",
      correctFeedback: "Right — بَعِيدًا is مفعول ثانٍ, منصوب — it would have been الخبر without رأى.",
      incorrectFeedback: "Not quite — المفعول الثاني comes last in the phrase, after the pronoun attached to يَرَوْنَهُ.",
      wordNotes: {
        "70-6-w2": { conceptLabel: "مفعول أول", explanation: "الهاء في يَرَوْنَهُ — في محل نصب." },
        "70-6-w3": { conceptLabel: "مفعول ثانٍ", explanation: "بَعِيدًا — منصوب." }
      }
    },

    practiceQuestions: [
      {
        id: "p1",
        type: "true-false",
        prompt: "ظنّ وأخواتها تترك أحد العنصرين مرفوعًا، كما تفعل كان وإنّ.",
        correct: false,
        explanation: "No — ظنّ تنصب الاثنين معًا، بخلاف كان وإنّ اللتين تتركان أحد العنصرين مرفوعًا."
      },
      {
        id: "p2",
        type: "multiple-choice",
        prompt: "في «ظَنَنْتُ زَيْدًا قَائِمًا»، ما كان «قَائِمًا» قبل دخول ظنّ؟",
        options: [
          { id: "a", labelAr: "خبرًا مرفوعًا" },
          { id: "b", labelAr: "مبتدأ مرفوعًا" },
          { id: "c", labelAr: "فاعلًا" }
        ],
        correctOptionId: "a",
        explanation: "Right — كان خبرًا مرفوعًا، وأصبح مفعولًا ثانيًا منصوبًا بعد دخول ظنّ."
      },
      {
        id: "p3",
        type: "multiple-choice",
        prompt: "أي الأفعال التالية من أفعال القلوب التي يذكرها كتابك؟",
        options: [
          { id: "a", labelAr: "حَسِبْتُ" },
          { id: "b", labelAr: "كَانَ" },
          { id: "c", labelAr: "إِنَّ" }
        ],
        correctOptionId: "a",
        explanation: "Right — حَسِبْتُ من أفعال القلوب التي تعمل عمل ظنّ."
      }
    ],

    quranChallenge: {
      surahAr: "المعارج",
      surahEn: "Al-Ma'arij",
      ayahRef: "70:6",
      arabic: "إِنَّهُمْ يَرَوْنَهُ بَعِيدًا",
      translation: "Indeed, they see it [as] distant.",
      question: "ما إعراب الهاء المتصلة بـ«يَرَوْنَهُ»؟",
      options: [
        { id: "a", labelAr: "مفعول أول، في محل نصب" },
        { id: "b", labelAr: "فاعل" },
        { id: "c", labelAr: "مفعول ثانٍ" }
      ],
      correctOptionId: "a",
      explanation: "Right — الهاء هي المفعول الأول لرأى؛ بَعِيدًا هو المفعول الثاني."
    },

    summary: [
      "ظنّ وأخواتها تدخل على المبتدأ والخبر فتنصبهما، كمفعولين: مفعول أول (كان مبتدأ) ومفعول ثانٍ (كان خبرًا).",
      "هذا يربط مباشرة بمفعول به من Part 4 — نفس النصب، مجرد اسم جديد ودور جديد.",
      "أفعال القلوب (اثنا عشر فعلًا واضحًا في كتابك؛ حاشيته تذكر أربعة عشر): ظننت، حسبت، خلت، رأيت، علمت، جعلت، عددت، هب، تعلّم، ألفيت، دريت، وجدت.",
      "Next: ظنّ's second family — أفعال التصيير, verbs of turning one thing into another."
    ],

    completion: {
      titleAr: "ظنّ وأخواتها: أفعال القلوب",
      statement: "مفعول أول + مفعول ثانٍ. Next: أفعال التصيير."
    }
  },

  "6.8": {
    id: "6.8",
    steps: ["intro", "concept", "example", "quran", "notice", "practice", "challenge", "summary", "completion"],

    sourceNote: {
      status: "book-cited",
      label: "Sourced from your reference book — pages 131–132",
      detail: "النَّوْعُ الثَّانِي: أَفْعَالُ التَّصْيِيرِ، نَحْوُ: 'جَعَلَ'، وَ'رَدَّ'، وَ'تَرَكَ'، وَ'اتَّخَذَ'، وَ'صَيَّرَ' (p. 131), سُمِّيَتْ بِذَلِكَ لِدَلَالَتِهَا عَلَى تَحْوِيلِ الشَّيْءِ مِنْ حَالَةٍ إِلَى حَالَةٍ أُخْرَى. All three Qur'an citations (الفيل:٥، البقرة:١٠٩، النساء:١٢٥) are the book's own, given on the same page. Two of these citations were re-read directly from the source image to correct a first-pass misreading (و/ا confusion) — see the Part 6 final report."
    },

    intro: {
      titleAr: "ظنّ وأخواتها: أفعال التصيير",
      titleEn: "Zanna and Her Sisters: The Verbs of Transformation",
      statement: "Same نصب effect on both مفعولين — but this family means something different: actually turning one thing into another."
    },

    objective: [
      "name the five أفعال التصيير your book lists",
      "state what distinguishes them in meaning from أفعال القلوب, per your book's own gloss",
      "recognize the pattern in three separate Qur'anic citations"
    ],

    concept: {
      termAr: "أفعال التصيير",
      kind: "book-cited",
      definitionAr: "النَّوْعُ الثَّانِي: أَفْعَالُ التَّصْيِيرِ، نَحْوُ: 'جَعَلَ'، وَ'رَدَّ'، وَ'تَرَكَ'، وَ'اتَّخَذَ'، وَ'صَيَّرَ' — سُمِّيَتْ بِذَلِكَ لِدَلَالَتِهَا عَلَى تَحْوِيلِ الشَّيْءِ مِنْ حَالَةٍ إِلَى حَالَةٍ أُخْرَى.",
      definitionEn: "Same عمل as أفعال القلوب — نصب both مفعولين — but a different meaning entirely: these verbs describe actually turning or rendering one thing into another, not just thinking or believing something about it.",
      lead: "جَعَلَ، رَدَّ، تَرَكَ، اتَّخَذَ، صَيَّرَ — five verbs, one shared idea: من حالة إلى حالة أخرى."
    },

    definitionBreakdown: [
      {
        termAr: "جَعَلَ",
        termEn: "to make, render",
        glossEn: "فَجَعَلَهُمْ كَعَصْفٍ مَّأْكُولٍ",
        explanation: "He made them like eaten straw — an actual transformation, not an opinion."
      },
      {
        termAr: "اتَّخَذَ",
        termEn: "to take as",
        glossEn: "وَاتَّخَذَ اللَّهُ إِبْرَاهِيمَ خَلِيلًا",
        explanation: "Allah took Ibrahim as an intimate friend — a real, enduring relationship, not a fleeting thought."
      },
      {
        termAr: "رَدَّ، تَرَكَ، صَيَّرَ",
        termEn: "to turn back, to leave as, to turn into",
        glossEn: "صَيَّرْتُ الطِّينَ خَزَفًا",
        explanation: "I turned the clay into pottery — your book's own constructed example for صيّر, matching the same pattern."
      }
    ],

    conceptTree: {
      root: { ar: "أفعال التصيير", en: "النوع الثاني من ظنّ وأخواتها" },
      branches: [
        { ar: "جَعَلَ", en: "to make/render" },
        { ar: "رَدَّ", en: "to turn back" },
        { ar: "تَرَكَ", en: "to leave as" },
        { ar: "اتَّخَذَ", en: "to take as" },
        { ar: "صَيَّرَ", en: "to turn into" }
      ]
    },

    example: {
      kind: "book-example",
      kindLabel: "The book's own constructed example",
      arabic: "صَيَّرْتُ الطِّينَ خَزَفًا",
      transliteration: "Ṣayyartu aṭ-ṭīna khazafan",
      translation: "I turned the clay into pottery",
      explanation: "الطِّينَ — مفعول أول, منصوب. خَزَفًا — مفعول ثانٍ, منصوب. An actual change of state — clay physically became pottery — which is exactly what distinguishes أفعال التصيير from أفعال القلوب.",
      contrast: {
        arabic: "ظَنَنْتُ الطِّينَ خَزَفًا",
        translation: "I thought the clay was pottery",
        explanation: "Same نصب على المفعولين, identical إعراب — but now it's only a belief, possibly wrong. The clay itself never changed."
      }
    },

    quranExample: {
      surahAr: "النساء",
      surahEn: "An-Nisa",
      ayahRef: "4:125",
      arabic: "وَاتَّخَذَ اللَّهُ إِبْرَاهِيمَ خَلِيلًا",
      translation: "And Allah took Abraham as an intimate friend.",
      notice: "إِبْرَاهِيمَ — مفعول أول, منصوب. خَلِيلًا — مفعول ثانٍ, منصوب. كتابك يذكر مثالين آخرين لنفس المجموعة: ﴿فَجَعَلَهُمْ كَعَصْفٍ مَّأْكُولٍ﴾ [الفيل:٥]، و﴿لَوْ يَرُدُّونَكُم مِّن بَعْدِ إِيمَانِكُمْ كُفَّارًا﴾ [البقرة:١٠٩].",
      wordNotes: {
        "4-125-w3": { conceptLabel: "مفعول أول", explanation: "إِبْرَاهِيمَ — منصوب." },
        "4-125-w4": { conceptLabel: "مفعول ثانٍ", explanation: "خَلِيلًا — منصوب." }
      }
    },

    noticeInteraction: {
      type: "word-tap",
      ayahRef: "4:125",
      instanceId: "6.8-notice",
      promptContext: "An-Nisa 4:125",
      question: "Tap المفعول الأول لـ«اتَّخَذَ».",
      correctWordId: "4-125-w3",
      correctFeedback: "Right — إِبْرَاهِيمَ is مفعول أول, منصوب.",
      incorrectFeedback: "Not quite — المفعول الأول comes right after اللَّهُ, before خَلِيلًا.",
      wordNotes: {
        "4-125-w3": { conceptLabel: "مفعول أول", explanation: "إِبْرَاهِيمَ — منصوب." },
        "4-125-w4": { conceptLabel: "مفعول ثانٍ", explanation: "خَلِيلًا — منصوب." }
      }
    },

    practiceQuestions: [
      {
        id: "p1",
        type: "true-false",
        prompt: "أفعال التصيير تدل على اعتقاد أو ظنّ، لا على تحويل فعلي.",
        correct: false,
        explanation: "No — العكس تمامًا: سُمِّيت بذلك لدلالتها على تحويل الشيء فعلًا من حالة إلى حالة أخرى، لا على مجرد اعتقاد."
      },
      {
        id: "p2",
        type: "multiple-choice",
        prompt: "ما إعراب «خَزَفًا» في «صَيَّرْتُ الطِّينَ خَزَفًا»؟",
        options: [
          { id: "a", labelAr: "مفعول ثانٍ، منصوب" },
          { id: "b", labelAr: "فاعل" },
          { id: "c", labelAr: "خبر" }
        ],
        correctOptionId: "a",
        explanation: "Right — مفعول ثانٍ, منصوب, مثل كل أفعال التصيير وأفعال القلوب."
      },
      {
        id: "p3",
        type: "multiple-choice",
        prompt: "أي الأفعال التالية من أفعال التصيير التي يذكرها كتابك؟",
        options: [
          { id: "a", labelAr: "اتَّخَذَ" },
          { id: "b", labelAr: "ظَنَّ" },
          { id: "c", labelAr: "كَانَ" }
        ],
        correctOptionId: "a",
        explanation: "Right — اتَّخَذَ من أفعال التصيير؛ ظَنَّ من أفعال القلوب؛ كَانَ من أخواتها لا من ظنّ."
      }
    ],

    quranChallenge: {
      surahAr: "الفيل",
      surahEn: "Al-Fil",
      ayahRef: "105:5",
      arabic: "فَجَعَلَهُمْ كَعَصْفٍ مَّأْكُولٍ",
      translation: "And He made them like eaten straw.",
      question: "ما إعراب الهاء والميم المتصلتين بـ«جَعَلَهُمْ»؟",
      options: [
        { id: "a", labelAr: "مفعول أول، في محل نصب" },
        { id: "b", labelAr: "فاعل" },
        { id: "c", labelAr: "مفعول ثانٍ" }
      ],
      correctOptionId: "a",
      explanation: "Right — هم: مفعول أول في محل نصب؛ كَعَصْفٍ مَّأْكُولٍ (الجار والمجرور) متعلق بمحذوف هو المفعول الثاني."
    },

    summary: [
      "أفعال التصيير: نفس عمل أفعال القلوب (نصب مفعولين)، لكن المعنى مختلف — تحويل فعلي من حالة إلى أخرى، لا مجرد اعتقاد.",
      "خمسة أفعال: جَعَلَ، رَدَّ، تَرَكَ، اتَّخَذَ، صَيَّرَ.",
      "Next: the complete map, all three types of النواسخ in one view."
    ],

    completion: {
      titleAr: "ظنّ وأخواتها: أفعال التصيير",
      statement: "نصب مفعولين، تحويل فعلي من حالة لأخرى. Next: الخريطة الكاملة للنواسخ."
    }
  },

  "6.9": {
    id: "6.9",
    steps: ["intro", "concept", "example", "quran", "practice", "summary", "completion"],

    sourceNote: {
      status: "book-cited",
      label: "A closing synthesis across pp. 93–132 — the whole باب العوامل الداخلة على المبتدأ والخبر",
      detail: "This lesson introduces no new book content of its own. It's a QURRA-organized recap of the three النواسخ types taught in Lessons 6.1–6.8, in the same spirit as Lesson 5.9's own closing map for التوابع — pulling together material that's already been individually sourced and cited."
    },

    intro: {
      titleAr: "الخريطة الكاملة للنواسخ",
      titleEn: "The Complete Map of the Nawasikh",
      statement: "One nominal sentence, three different transformations. Everything from this Part, in a single map."
    },

    objective: [
      "recall all three النواسخ types and their structural effect on المبتدأ والخبر",
      "restate the one idea every one of them shares: الجملة الاسمية ← ناسخ ← تغيّر في البنية",
      "connect each type back to the ROLE → STATE → SIGN model from Parts 2–4"
    ],

    concept: {
      termAr: "النواسخ الثلاثة",
      kind: "qurra-comparison",
      definitionAr: "ثَلَاثَةُ أَنْوَاعٍ: مَا يَرْفَعُ الْمُبْتَدَأَ وَيَنْصِبُ الْخَبَرَ (كَانَ)، وَمَا يَنْصِبُ الْمُبْتَدَأَ وَيَرْفَعُ الْخَبَرَ (إِنَّ وَلَا)، وَمَا يَنْصِبُهُمَا مَعًا (ظَنَّ).",
      definitionEn: "Three structural effects, one shared story: a ناسخ enters a complete الجملة الاسمية — مبتدأ مرفوع + خبر مرفوع — and reshapes it.",
      lead: "الجملة الاسمية ← ناسخ ← تغيّر في البنية والعلاقات الإعرابية — the same sentence, زَيْدٌ قَائِمٌ, reshaped three completely different ways across this Part."
    },

    definitionBreakdown: [
      {
        termAr: "كان وأخواتها",
        termEn: "Lessons 6.2–6.3",
        glossEn: "اسمها مرفوع، خبرها منصوب",
        explanation: "ثلاثة عشر فعلًا: ثمانية بلا شرط، وأربعة بشرط النفي، وواحد (دام) بشرط «ما» المصدرية."
      },
      {
        termAr: "إنّ وأخواتها، ولا النافية للجنس",
        termEn: "Lessons 6.4–6.6",
        glossEn: "اسمها منصوب، خبرها مرفوع",
        explanation: "ستة أحرف لإنّ، وأداة سابعة بشرطين (لا النافية للجنس) — نفس الأثر البنيوي بالضبط."
      },
      {
        termAr: "ظنّ وأخواتها",
        termEn: "Lessons 6.7–6.8",
        glossEn: "الاثنان منصوبان (مفعولان)",
        explanation: "أفعال القلوب (اعتقاد) وأفعال التصيير (تحويل فعلي) — كلاهما ينصب مفعولين، معنى مختلف."
      }
    ],

    conceptTree: {
      root: { ar: "النواسخ", en: "the complete map" },
      branches: [
        { ar: "النوع الأول", en: "اسمها مرفوع / خبرها منصوب", children: [{ ar: "كان (بلا شرط)", en: "8 أفعال" }, { ar: "زال ونحوه (شرط نفي)", en: "4 أفعال" }, { ar: "دام (شرط ما)", en: "فعل واحد" }] },
        { ar: "النوع الثاني", en: "اسمها منصوب / خبرها مرفوع", children: [{ ar: "إنّ وأخواتها", en: "6 أحرف" }, { ar: "لا النافية للجنس", en: "" }] },
        { ar: "النوع الثالث", en: "الاثنان منصوبان", children: [{ ar: "أفعال القلوب", en: "اعتقاد" }, { ar: "أفعال التصيير", en: "تحويل فعلي" }] }
      ]
    },

    example: {
      kind: "traditional-grammar-example",
      kindLabel: "The same sentence, all three transformations at once",
      arabic: "كَانَ زَيْدٌ قَائِمًا",
      transliteration: "Kāna Zaydun qā'iman",
      translation: "Zayd was standing",
      explanation: "النوع الأول: اسمها (زَيْدٌ) مرفوع، خبرها (قَائِمًا) منصوب.",
      contrast: {
        arabic: "إِنَّ زَيْدًا قَائِمٌ — ظَنَنْتُ زَيْدًا قَائِمًا",
        translation: "Indeed Zayd is standing — I thought Zayd was standing",
        explanation: "النوع الثاني (إنّ): زَيْدًا منصوب، قَائِمٌ مرفوع. النوع الثالث (ظنّ): كلاهما منصوب، مفعولان. ثلاث بنى مختلفة تمامًا، من نفس الجملة الاسمية الواحدة."
      }
    },

    quranExample: {
      surahAr: "الفرقان",
      surahEn: "Al-Furqan",
      ayahRef: "25:70",
      arabic: "وَكَانَ اللَّهُ غَفُورًا رَحِيمًا",
      translation: "And Allah is ever Forgiving and Merciful.",
      notice: "A fitting close: the same آية that opened Lesson 6.2's look at كان وأخواتها. Now that all three النواسخ types are behind you, you can trace this exact phrase's mirror-image from this Part alone: فَإِنَّ اللَّهَ غَفُورٌ رَحِيمٌ [البقرة:١٩٢] from Lesson 6.4/6.5, with اللَّهَ flipped to منصوب instead."
    },

    practiceQuestions: [
      {
        id: "p1",
        type: "multiple-choice",
        prompt: "أي أنواع النواسخ الثلاثة يترك المبتدأ (اسمه) مرفوعًا؟",
        options: [
          { id: "a", labelAr: "كان وأخواتها" },
          { id: "b", labelAr: "إنّ وأخواتها" },
          { id: "c", labelAr: "ظنّ وأخواتها" }
        ],
        correctOptionId: "a",
        explanation: "Right — النوع الأول وحده يترك اسمه مرفوعًا؛ النوعان الآخران ينصبانه."
      },
      {
        id: "p2",
        type: "multiple-choice",
        prompt: "أي الأنواع الثلاثة ينصب كلا العنصرين معًا؟",
        options: [
          { id: "a", labelAr: "ظنّ وأخواتها" },
          { id: "b", labelAr: "كان وأخواتها" },
          { id: "c", labelAr: "إنّ وأخواتها" }
        ],
        correctOptionId: "a",
        explanation: "Right — ظنّ وحدها تنصب الاثنين معًا، كمفعولين."
      },
      {
        id: "p3",
        type: "multiple-choice",
        prompt: "أي أداتين من هذا الباب تشتركان في نفس الأثر البنيوي (نصب الاسم ورفع الخبر)؟",
        options: [
          { id: "a", labelAr: "إنّ ولا النافية للجنس" },
          { id: "b", labelAr: "كان ودام" },
          { id: "c", labelAr: "ظنّ وجعل" }
        ],
        correctOptionId: "a",
        explanation: "Right — إنّ ولا النافية للجنس كلاهما من النوع الثاني: تنصبان الاسم وترفعان الخبر."
      },
      {
        id: "p4",
        type: "true-false",
        prompt: "جميع النواسخ تحوّل المبتدأ والخبر إلى مفعولين.",
        correct: false,
        explanation: "No — هذا أثر ظنّ وأخواتها فقط. كان تترك اسمها مرفوعًا، وإنّ ولا ترفعان الخبر، لا تنصبانه."
      }
    ],

    summary: [
      "ثلاثة أنواع من النواسخ، أثر بنيوي واحد في كل نوع: الجملة الاسمية ← ناسخ ← تغيّر في البنية.",
      "كان (اسمها مرفوع/خبرها منصوب)، إنّ ولا (اسمها منصوب/خبرها مرفوع)، ظنّ (الاثنان منصوبان، مفعولان).",
      "كل تغيّر في الإعراب يعود مباشرة إلى ROLE → STATE → SIGN من Parts 2–4 — النواسخ تغيّر الدور، لا تخترع نظامًا جديدًا.",
      "Part 6 complete. Next: Part 7."
    ],

    completion: {
      titleAr: "الخريطة الكاملة للنواسخ",
      statement: "Part 6 complete — كان، إنّ ولا، وظنّ, three structural transformations now understood. Part 7 is next."
    }
  },

  "7.1": {
    id: "7.1",
    steps: ["intro", "concept", "example", "practice", "summary", "completion"],

    sourceNote: {
      status: "book-cited",
      label: "Sourced from your reference book — the opening of باب إعراب الأفعال (p. 182)",
      detail: "تَقَدَّمَ أَنَّ الْفِعْلَ ثَلَاثَةُ أَنْوَاعٍ: مَاضٍ، وَأَمْرٌ، وَمُضَارِعٌ، وَأَنَّ الْمَاضِيَ وَالْأَمْرَ مَبْنِيَّانِ، وَأَنَّ الْمُعْرَبَ مِنَ الْأَفْعَالِ هُوَ الْمُضَارِعُ إِذَا لَمْ يَتَّصِلْ بِنُونِ الْإِنَاثِ، وَلَا بِنُونِ التَّوْكِيدِ الْمُبَاشِرَةِ لَهُ... فَالْإِعْرَابُ خَاصٌّ بِالْمُضَارِعِ، وَهُوَ مَرْفُوعٌ أَبَدًا حَتَّى يَدْخُلَ عَلَيْهِ نَاصِبٌ فَيَنْصِبَهُ، أَوْ جَازِمٌ فَيَجْزِمَهُ (chapter opener, directly quoted — this is the book's own opening statement for the whole باب). The page number itself is not fully legible in the supplied image, but its position directly before the clearly-numbered p. 183 makes p. 182 all but certain."
    },

    intro: {
      titleAr: "ما هو الفعل المعرب؟",
      titleEn: "What Is the Mu'rab Verb?",
      statement: "One verb type carries almost the whole weight of إعراب. This Part is entirely about that one type."
    },

    objective: [
      "recall from Part 1 that الفعل has three types, and from Part 2 that only المضارع is usually معرب",
      "state the book's own exact condition for when المضارع stops being معرب",
      "state the central model this whole Part will repeat: المضارع مرفوع أبدًا حتى يدخل عليه ناصب أو جازم"
    ],

    concept: {
      termAr: "الفعل المعرب",
      kind: "book-cited",
      definitionAr: "تَقَدَّمَ أَنَّ الْفِعْلَ ثَلَاثَةُ أَنْوَاعٍ: مَاضٍ، وَأَمْرٌ، وَمُضَارِعٌ، وَأَنَّ الْمَاضِيَ وَالْأَمْرَ مَبْنِيَّانِ، وَأَنَّ الْمُعْرَبَ مِنَ الْأَفْعَالِ هُوَ الْمُضَارِعُ. فَالْإِعْرَابُ خَاصٌّ بِالْمُضَارِعِ، وَهُوَ مَرْفُوعٌ أَبَدًا حَتَّى يَدْخُلَ عَلَيْهِ نَاصِبٌ فَيَنْصِبَهُ، أَوْ جَازِمٌ فَيَجْزِمَهُ.",
      definitionEn: "You already know this from Part 2: الماضي and الأمر are always مبني; المضارع is the one verb type that's usually معرب. Your book now adds the central rule for this whole Part: المضارع is مرفوع by default, forever — until a ناصب enters and makes it منصوب, or a جازم enters and makes it مجزوم.",
      lead: "رفع is not one option among three. It's the resting state. نصب and جزم only ever happen because something — a عامل — reached in and changed it."
    },

    definitionBreakdown: [
      {
        termAr: "الماضي والأمر",
        termEn: "always مبني",
        glossEn: "Part 2 recap",
        explanation: "No إعراب ever touches them — their ending is fixed, whatever role they play in the sentence."
      },
      {
        termAr: "المضارع — الحالة الافتراضية",
        termEn: "مرفوع أبدًا",
        glossEn: "until something changes it",
        explanation: "يَكْتُبُ, on its own, with nothing before it: مرفوع. That's not a choice being made — it's simply what happens when no عامل has entered yet."
      },
      {
        termAr: "متى يتوقف المضارع عن كونه معربًا؟",
        termEn: "the one exception",
        glossEn: "Part 2.7's own exception, reactivated",
        explanation: "إِذَا لَمْ يَتَّصِلْ بِنُونِ الْإِنَاثِ، وَلَا بِنُونِ التَّوْكِيدِ الْمُبَاشِرَةِ لَهُ — attach نون الإناث (وَالْوَالِدَاتُ يُرْضِعْنَ) or a directly-attached نون التوكيد (لَنَسْفَعًا), and the مضارع becomes مبني instead. You met both exceptions already, in Lesson 2.7."
      },
      {
        termAr: "العامل → الحالة",
        termEn: "what this whole Part tracks",
        glossEn: "ناصب أو جازم",
        explanation: "A ناصب enters → المضارع becomes منصوبًا. A جازم enters → المضارع becomes مجزومًا. Every lesson from here asks the same question: ما الذي دخل على هذا المضارع، وماذا فعل به؟"
      }
    ],

    conceptTree: {
      root: { ar: "الفعل المضارع", en: "the one verb type that's معرب" },
      branches: [
        { ar: "مرفوع", en: "الحالة الافتراضية", children: [{ ar: "لا عامل دخل عليه", en: "Lesson 7.2" }] },
        { ar: "منصوب", en: "دخل عليه ناصب", children: [{ ar: "أن، لن، كي، إذن", en: "Lesson 7.3" }] },
        { ar: "مجزوم", en: "دخل عليه جازم", children: [{ ar: "لم، لمّا، لا الناهية...", en: "Lessons 7.4–7.5" }] }
      ]
    },

    example: {
      kind: "traditional-grammar-example",
      kindLabel: "The transformation this whole Part keeps coming back to",
      arabic: "يَكْتُبُ",
      transliteration: "Yaktubu",
      translation: "he writes / is writing — مرفوع",
      explanation: "Nothing has entered yet. يَكْتُبُ sits in its default state: مرفوع, marked by الضمة الظاهرة — exactly as Part 3 already taught رفع's default sign.",
      contrast: {
        arabic: "لَنْ يَكْتُبَ",
        translation: "he will not write — منصوب",
        explanation: "لن enters — a ناصب — and يكتب changes shape: يَكْتُبَ, منصوب بالفتحة. Same verb, same root, different عامل, different حالة, different علامة."
      }
    },

    practiceQuestions: [
      {
        id: "p1",
        type: "multiple-choice",
        prompt: "أي نوع من أنواع الفعل الثلاثة هو المعرب؟",
        options: [
          { id: "a", labelAr: "المضارع" },
          { id: "b", labelAr: "الماضي" },
          { id: "c", labelAr: "الأمر" }
        ],
        correctOptionId: "a",
        explanation: "Right — الماضي والأمر مبنيّان دائمًا؛ المضارع هو الوحيد الذي يكون معربًا."
      },
      {
        id: "p2",
        type: "true-false",
        prompt: "المضارع معرب دائمًا بلا استثناء.",
        correct: false,
        explanation: "No — إذا اتصل بنون الإناث أو بنون التوكيد المباشرة له، صار مبنيًا (Part 2.7)."
      },
      {
        id: "p3",
        type: "multiple-choice",
        prompt: "بحسب كتابك، ما الحالة الإعرابية الافتراضية للمضارع قبل دخول أي عامل؟",
        options: [
          { id: "a", labelAr: "مرفوع" },
          { id: "b", labelAr: "منصوب" },
          { id: "c", labelAr: "مجزوم" }
        ],
        correctOptionId: "a",
        explanation: "Right — وَهُوَ مَرْفُوعٌ أَبَدًا حَتَّى يَدْخُلَ عَلَيْهِ نَاصِبٌ أَوْ جَازِمٌ."
      },
      {
        id: "p4",
        type: "multiple-choice",
        prompt: "ما الذي يحوّل يَكْتُبُ (مرفوع) إلى يَكْتُبَ (منصوب)؟",
        options: [
          { id: "a", labelAr: "دخول عامل ناصب" },
          { id: "b", labelAr: "تغيير المعنى فقط" },
          { id: "c", labelAr: "لا شيء — تغيّر عشوائي" }
        ],
        correctOptionId: "a",
        explanation: "Right — العامل (هنا ناصب) هو ما يغيّر الحالة الإعرابية؛ لا شيء عشوائي في الإعراب."
      }
    ],

    summary: [
      "من بين ماضٍ وأمر ومضارع، المضارع وحده هو المعرب — الماضي والأمر مبنيّان دائمًا.",
      "المضارع مرفوع أبدًا حتى يدخل عليه ناصب فينصبه، أو جازم فيجزمه — كتابك نفسه.",
      "الاستثناء الوحيد: اتصال نون الإناث أو نون التوكيد المباشرة يجعله مبنيًا (Part 2.7).",
      "النموذج المركزي لهذا الباب كله: العامل ← الحالة ← العلامة."
    ],

    completion: {
      titleAr: "ما هو الفعل المعرب؟",
      statement: "النموذج المركزي راسخ. التالي: رفع المضارع — الحالة الافتراضية نفسها."
    }
  },

  "7.2": {
    id: "7.2",
    steps: ["intro", "concept", "example", "quran", "notice", "practice", "challenge", "summary", "completion"],

    sourceNote: {
      status: "book-cited",
      label: "Sourced from your reference book — pages 182 (rule), 26 (p. 3.3, الأفعال الخمسة, reactivated)",
      detail: "وَهُوَ مَرْفُوعٌ أَبَدًا حَتَّى يَدْخُلَ عَلَيْهِ نَاصِبٌ فَيَنْصِبَهُ، أَوْ جَازِمٌ فَيَجْزِمَهُ (p. 182) establishes رفع as the default. Its two signs — الضمة (already taught in Lesson 3.2) and ثبوت النون for الأفعال الخمسة (already taught in Lesson 3.3) — are reactivated here, applied specifically to المضارع's default state, not retaught from scratch."
    },

    intro: {
      titleAr: "رفع الفعل المضارع",
      titleEn: "Raf' of the Mudari'",
      statement: "The easiest state to explain: it's simply what happens when nothing has interfered."
    },

    objective: [
      "state why المضارع is مرفوع by default — not a rule to memorize, but the absence of an entering عامل",
      "recognize الضمة الظاهرة as رفع's ordinary sign on المضارع (Part 3 reactivated)",
      "recognize ثبوت النون as رفع's sign on الأفعال الخمسة (Part 3.3 reactivated)"
    ],

    concept: {
      termAr: "رفع الفعل المضارع",
      kind: "book-cited",
      definitionAr: "وَهُوَ مَرْفُوعٌ أَبَدًا حَتَّى يَدْخُلَ عَلَيْهِ نَاصِبٌ فَيَنْصِبَهُ، أَوْ جَازِمٌ فَيَجْزِمَهُ.",
      definitionEn: "المضارع is مرفوع — forever — until a ناصب or جازم enters. رفع isn't something that happens TO the مضارع; it's simply what the مضارع already is, left alone.",
      lead: "You already know رفع's signs from Part 3 — الضمة الظاهرة, and ثبوت النون for الأفعال الخمسة. Nothing new to learn here except WHERE they apply: the مضارع, when no عامل has touched it."
    },

    definitionBreakdown: [
      {
        termAr: "الضمة الظاهرة",
        termEn: "the ordinary sign",
        glossEn: "Lesson 3.2, reactivated",
        explanation: "يَكْتُبُ، يَذْهَبُ، يَعْلَمُ — a صحيح الآخر مضارع verb, مرفوع بالضمة الظاهرة, exactly as Part 3 already taught."
      },
      {
        termAr: "ثبوت النون",
        termEn: "for الأفعال الخمسة",
        glossEn: "Lesson 3.3, reactivated",
        explanation: "يَسْجُدَانِ — a مضارع verb carrying a dual, plural-masculine, or feminine-you pronoun (الأفعال الخمسة) is مرفوع بثبوت النون, not الضمة. You met this exact citation in Lesson 3.3."
      },
      {
        termAr: "لماذا لا عامل = رفع؟",
        termEn: "the logic",
        glossEn: "from Lesson 7.1",
        explanation: "رفع isn't a state that needs a cause. It's what remains when no ناصب and no جازم has reached the مضارع. Only نصب and جزم need a عامل to explain them — that's exactly what Lessons 7.3–7.5 are for."
      }
    ],

    conceptTree: {
      root: { ar: "رفع المضارع", en: "no عامل interfered" },
      branches: [
        { ar: "الضمة الظاهرة", en: "صحيح الآخر", note: "يَكْتُبُ" },
        { ar: "ثبوت النون", en: "الأفعال الخمسة", note: "يَسْجُدَانِ" }
      ]
    },

    example: {
      kind: "traditional-grammar-example",
      kindLabel: "Three ordinary مضارع verbs, same default state",
      arabic: "يَذْهَبُ، يَكْتُبُ، يَعْلَمُ",
      transliteration: "Yadhhabu, yaktubu, ya'lamu",
      translation: "he goes, he writes, he knows — all مرفوع",
      explanation: "Three different roots, same ending pattern: الضمة الظاهرة. Nothing has entered any of these sentences yet.",
      contrast: {
        arabic: "يَسْجُدَانِ",
        translation: "they two prostrate — مرفوع بثبوت النون",
        explanation: "A different word-shape (الأفعال الخمسة, from Lesson 3.3) takes a different رفع sign — but it's still the SAME default state, nothing having entered to change it."
      }
    },

    quranExample: {
      surahAr: "الفاتحة",
      surahEn: "Al-Fatihah",
      ayahRef: "1:5",
      arabic: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
      translation: "It is You we worship and You we ask for help.",
      notice: "Your book's own opening example for this entire باب (p. 182). نَعْبُدُ and نَسْتَعِينُ are both مضارع — and both مرفوع بالضمة الظاهرة. No ناصب, no جازم — just the default state.",
      wordNotes: {
        "1-5-w2": { conceptLabel: "مضارع مرفوع", explanation: "نَعْبُدُ — فعل مضارع, مرفوع بالضمة الظاهرة؛ لا عامل دخل عليه." },
        "1-5-w4": { conceptLabel: "مضارع مرفوع", explanation: "نَسْتَعِينُ — نفس الحالة: مضارع مرفوع بالضمة الظاهرة." }
      }
    },

    noticeInteraction: {
      type: "word-tap",
      ayahRef: "1:5",
      instanceId: "7.2-notice",
      promptContext: "Al-Fatihah 1:5",
      question: "Tap a مضارع verb that is مرفوع here.",
      correctWordId: "1-5-w2",
      correctFeedback: "Right — نَعْبُدُ is مضارع مرفوع بالضمة الظاهرة. (نَسْتَعِينُ right after it is the same thing.)",
      incorrectFeedback: "Not quite — إِيَّاكَ is a pronoun, not a verb. Look for the مضارع verb right after it.",
      wordNotes: {
        "1-5-w1": { conceptLabel: "ضمير منفصل", explanation: "إِيَّاكَ — ضمير نصب منفصل، مفعول به مقدّم — not the verb this question is about." },
        "1-5-w2": { conceptLabel: "مضارع مرفوع", explanation: "نَعْبُدُ — فعل مضارع مرفوع بالضمة الظاهرة." },
        "1-5-w4": { conceptLabel: "مضارع مرفوع", explanation: "نَسْتَعِينُ — نفس الحالة: مرفوع بالضمة الظاهرة." }
      }
    },

    practiceQuestions: [
      {
        id: "p1",
        type: "true-false",
        prompt: "رفع هو حالة يحتاج المضارع فيها إلى عامل يدخل عليه.",
        correct: false,
        explanation: "No — رفع هو الحالة الافتراضية؛ النصب والجزم هما اللذان يحتاجان عاملًا."
      },
      {
        id: "p2",
        type: "multiple-choice",
        prompt: "ما علامة رفع المضارع الصحيح الآخر؟",
        options: [
          { id: "a", labelAr: "الضمة الظاهرة" },
          { id: "b", labelAr: "ثبوت النون" },
          { id: "c", labelAr: "الفتحة" }
        ],
        correctOptionId: "a",
        explanation: "Right — الضمة الظاهرة هي العلامة الأصلية لرفع المضارع."
      },
      {
        id: "p3",
        type: "multiple-choice",
        prompt: "ما علامة رفع الأفعال الخمسة؟",
        options: [
          { id: "a", labelAr: "ثبوت النون" },
          { id: "b", labelAr: "الضمة" },
          { id: "c", labelAr: "حذف النون" }
        ],
        correctOptionId: "a",
        explanation: "Right — من Lesson 3.3: الأفعال الخمسة مرفوعة بثبوت النون، لا بالضمة."
      },
      {
        id: "p4",
        type: "true-false",
        prompt: "نَعْبُدُ ونَسْتَعِينُ في الفاتحة:5 كلاهما مضارع مرفوع بالضمة الظاهرة.",
        correct: true,
        explanation: "Right — لا عامل دخل على أيٍّ منهما."
      }
    ],

    quranChallenge: {
      surahAr: "الرحمن",
      surahEn: "Ar-Rahman",
      ayahRef: "55:6",
      arabic: "وَالنَّجْمُ وَالشَّجَرُ يَسْجُدَانِ",
      translation: "And the stars and trees prostrate.",
      question: "يَسْجُدَانِ is مرفوع. By which sign?",
      options: [
        { id: "nun", labelEn: "ثبوت النون — the nun staying attached" },
        { id: "damma", labelAr: "الضمة" }
      ],
      correctOptionId: "nun",
      explanation: "Right — يَسْجُدَانِ carries a dual pronoun (الأفعال الخمسة), so رفع is marked بثبوت النون, exactly as Lesson 3.3 taught."
    },

    summary: [
      "رفع هو الحالة الافتراضية للمضارع — لا يحتاج عاملًا؛ هو ما يبقى حين لا يدخل شيء.",
      "علامته الأصلية: الضمة الظاهرة (يَكْتُبُ). وعلامته للأفعال الخمسة: ثبوت النون (يَسْجُدَانِ) — كلاهما من Part 3.",
      "الفاتحة:5 — نَعْبُدُ ونَسْتَعِينُ، كتابك نفسه، مثالان على الحالة الافتراضية.",
      "التالي: ما الذي يُخرج المضارع من هذه الحالة الافتراضية؟ — النواصب."
    ],

    completion: {
      titleAr: "رفع الفعل المضارع",
      statement: "الحالة الافتراضية مفهومة. التالي: أول عامل يغيّرها — النواصب."
    }
  },

  "7.3": {
    id: "7.3",
    steps: ["intro", "concept", "example", "quran", "notice", "practice", "challenge", "summary", "completion"],

    sourceNote: {
      status: "book-cited",
      label: "Sourced from your reference book — page 183",
      detail: "النَّوَاصِبُ الَّتِي تَنْصِبُهُ قِسْمَانِ: قِسْمٌ يَنْصِبُ بِنَفْسِهِ، وَقِسْمٌ يَنْصِبُ بِ«أَنْ» مُضْمَرَةً بَعْدَهُ، فَالْأَوَّلُ أَرْبَعَةٌ: «أَنْ» ... وَ«لَنْ» ... وَ«كَيْ» ... وَ«إِذَنْ» (p. 183). This lesson teaches only القسم الأول — the four نواصب that put المضارع into نصب by themselves — in their default/clearest usage. القسم الثاني (particles that nasb المضارع only through a HIDDEN «أن», pp. 184–189: لام الجحود، لام كي بلا لفظ اللام، حتى، فاء السببية، واو المعية، أو) is genuinely advanced material — each with its own conditions, several argued only from poetic shawāhid rather than plain usage — and is intentionally not built in this version, noted honestly rather than silently dropped. Two further nuances inside القسم الأول are also scoped out for the same reason: «أن» preceded by عِلْم (where it becomes مخففة من الثقيلة with a different parsing) and preceded by ظَنّ (where the book itself notes two valid readings, وجهان)."
    },

    intro: {
      titleAr: "نصب الفعل المضارع",
      titleEn: "Nasb of the Mudari'",
      statement: "The first way المضارع leaves its default state: a ناصب enters."
    },

    objective: [
      "name the four نواصب that put المضارع into نصب by themselves",
      "recognize نصب's default sign, الفتحة, on a transformed مضارع",
      "see the full عامل → حالة → علامة chain on one verb"
    ],

    concept: {
      termAr: "نواصب المضارع",
      kind: "book-cited",
      definitionAr: "النَّوَاصِبُ الَّتِي تَنْصِبُهُ قِسْمَانِ: قِسْمٌ يَنْصِبُ بِنَفْسِهِ، وَقِسْمٌ يَنْصِبُ بِ«أَنْ» مُضْمَرَةً بَعْدَهُ، فَالْأَوَّلُ أَرْبَعَةٌ: «أَنْ»، وَ«لَنْ»، وَ«كَيْ»، وَ«إِذَنْ».",
      definitionEn: "The particles that cause نصب split into two kinds: those that نصب by themselves, and those that نصب only through a hidden «أن». This lesson covers the first kind — four particles, each نصب-causing on its own: أن، لن، كي، إذن.",
      lead: "Same model as Lesson 7.1: عامل enters → حالة changes → علامة appears. Watch it happen four times, with four different نواصب."
    },

    definitionBreakdown: [
      {
        termAr: "أنْ",
        termEn: "the first",
        glossEn: "يُرِيدُ اللَّهُ أَنْ يُخَفِّفَ عَنكُمْ [النساء:28]",
        explanation: "The most common ناصب. يُخَفِّفَ — منصوب بالفتحة, after أنْ."
      },
      {
        termAr: "لَنْ",
        termEn: "the second",
        glossEn: "لَن نَّبْرَحَ عَلَيْهِ عَاكِفِينَ [طه:91]",
        explanation: "نَبْرَحَ — منصوب بالفتحة, after لن. Used for emphatic future negation."
      },
      {
        termAr: "كَيْ",
        termEn: "the third",
        glossEn: "لِّكَيْلَا تَأْسَوْا عَلَىٰ مَا فَاتَكُمْ [الحديد:23]",
        explanation: "كي المصدرية الناصبة, here preceded literally by لام (لِكَيْلَا = لِ + كَيْ + لَا). تَأْسَوْا — منصوب, and since it's من الأفعال الخمسة, علامة نصبه حذف النون, not الفتحة (more on this in Lesson 7.6)."
      },
      {
        termAr: "إِذَنْ",
        termEn: "the fourth",
        glossEn: "the book's own (non-Qur'anic) example",
        explanation: "أُكْرِمَكَ، إِذَنْ لَا أُخَيِّبَكَ (\"I will honor you — in that case, I will not disappoint you\") — your book's own illustration (p. 184), used when إذن opens the response and the verb after it is future-referring. No Qur'anic citation for this one appears in the pages provided, so it's taught with the book's own example rather than a forced Qur'anic substitute."
      }
    ],

    conceptTree: {
      root: { ar: "نصب المضارع", en: "دخل ناصب" },
      branches: [
        { ar: "أنْ", en: "النساء:28" },
        { ar: "لَنْ", en: "طه:91" },
        { ar: "كَيْ", en: "الحديد:23" },
        { ar: "إِذَنْ", en: "the book's own example" }
      ]
    },

    example: {
      kind: "traditional-grammar-example",
      kindLabel: "The central model, with لن as the ناصب",
      arabic: "يَكْتُبُ",
      transliteration: "Yaktubu",
      translation: "he writes — مرفوع",
      explanation: "The default state from Lesson 7.2: no عامل, الضمة الظاهرة.",
      contrast: {
        arabic: "لَنْ يَكْتُبَ",
        translation: "he will not write — منصوب",
        explanation: "لن enters: a ناصب. يكتب → يَكْتُبَ. العامل (لن) ← الحالة (نصب) ← العلامة (الفتحة)."
      }
    },

    quranExample: {
      surahAr: "طه",
      surahEn: "Taha",
      ayahRef: "20:91",
      arabic: "قَالُوا لَن نَّبْرَحَ عَلَيْهِ عَاكِفِينَ",
      translation: "They said, \"We will never cease being devoted to it.\"",
      notice: "Your book's own citation for «لن» (p. 183). نَّبْرَحَ follows لن directly — منصوب بالفتحة. لن is the عامل; the فتحة on نبرح is the علامة it leaves behind.",
      wordNotes: {
        "20-91-w3": { conceptLabel: "مضارع منصوب", explanation: "نَّبْرَحَ — فعل مضارع منصوب بـ«لن» وعلامة نصبه الفتحة." }
      }
    },

    noticeInteraction: {
      type: "word-tap",
      ayahRef: "20:91",
      instanceId: "7.3-notice",
      promptContext: "Taha 20:91",
      question: "Tap the مضارع verb that لن has put into نصب.",
      correctWordId: "20-91-w3",
      correctFeedback: "Right — نَّبْرَحَ is منصوب بالفتحة, right after لن.",
      incorrectFeedback: "Not quite — لن is the ناصب itself (مبني, a حرف). Look for the مضارع verb right after it.",
      wordNotes: {
        "20-91-w2": { conceptLabel: "حرف ناصب", explanation: "لَن — حرف نصب مبني، يدخل على المضارع فينصبه." },
        "20-91-w3": { conceptLabel: "مضارع منصوب", explanation: "نَّبْرَحَ — منصوب بـ«لن»، علامة نصبه الفتحة." }
      }
    },

    practiceQuestions: [
      {
        id: "p1",
        type: "multiple-choice",
        prompt: "كم عدد النواصب التي تنصب المضارع بنفسها (بحسب هذا الدرس)؟",
        options: [
          { id: "a", labelAr: "أربعة" },
          { id: "b", labelAr: "سبعة" },
          { id: "c", labelAr: "اثنا عشر" }
        ],
        correctOptionId: "a",
        explanation: "Right — أنْ، لنْ، كيْ، إذنْ. (كتابك يذكر طريقة ثانية — بإضمار «أن» — متقدمة، خارج نطاق هذا الدرس.)"
      },
      {
        id: "p2",
        type: "multiple-choice",
        prompt: "﴿قَالُوا لَن نَّبْرَحَ عَلَيْهِ عَاكِفِينَ﴾ — ما علامة نصب نَّبْرَحَ؟",
        options: [
          { id: "a", labelAr: "الفتحة" },
          { id: "b", labelAr: "الضمة" },
          { id: "c", labelAr: "حذف النون" }
        ],
        correctOptionId: "a",
        explanation: "Right — نَّبْرَحَ صحيح الآخر، فعلامة نصبه الفتحة الظاهرة."
      },
      {
        id: "p3",
        type: "true-false",
        prompt: "جميع النواصب الأربعة تعمل بنفس القوة في كل سياق، بلا أي شرط.",
        correct: false,
        explanation: "No — كتابك نفسه يذكر شروطًا لبعضها (مثل «أنْ» إذا لم تُسبق بعلمٍ أو ظنٍّ) — هذا الدرس اقتصر على الاستخدام الأوضح لكل أداة."
      },
      {
        id: "p4",
        type: "multiple-choice",
        prompt: "﴿لِّكَيْلَا تَأْسَوْا عَلَىٰ مَا فَاتَكُمْ﴾ — ما الناصب هنا؟",
        options: [
          { id: "a", labelAr: "كي" },
          { id: "b", labelAr: "لن" },
          { id: "c", labelAr: "إذن" }
        ],
        correctOptionId: "a",
        explanation: "Right — كي المصدرية الناصبة، مسبوقة هنا باللام لفظًا (لِكَيْلَا)."
      }
    ],

    quranChallenge: {
      surahAr: "النساء",
      surahEn: "An-Nisa",
      ayahRef: "4:28",
      arabic: "يُرِيدُ اللَّهُ أَن يُخَفِّفَ عَنكُمْ",
      translation: "Allah wants to lighten for you [your difficulties].",
      question: "يُخَفِّفَ follows أنْ. What state and sign does it take?",
      options: [
        { id: "a", labelAr: "منصوب بالفتحة" },
        { id: "b", labelAr: "مرفوع بالضمة" },
        { id: "c", labelAr: "مجزوم بالسكون" }
      ],
      correctOptionId: "a",
      explanation: "Right — أنْ ناصب، فـ يُخَفِّفَ منصوب بالفتحة الظاهرة. This is your book's own citation for «أن» (p. 183)."
    },

    summary: [
      "أربعة نواصب تنصب المضارع بأنفسها: أنْ، لنْ، كيْ، إذنْ — كلها من p. 183 من كتابك.",
      "علامة النصب الافتراضية: الفتحة الظاهرة (طه:91 — نَّبْرَحَ).",
      "العامل (الناصب) ← الحالة (نصب) ← العلامة (فتحة) — نفس النموذج المركزي من Lesson 7.1.",
      "لم يُبنَ في هذا الدرس: النواصب التي تعمل بإضمار «أن» (قسمٌ ثانٍ متقدّم) — موثّق في ملاحظة المصدر."
    ],

    completion: {
      titleAr: "نصب الفعل المضارع",
      statement: "أول عامل مفهوم. التالي: الجوازم — العامل الذي يجزم المضارع."
    }
  },

  "7.4": {
    id: "7.4",
    steps: ["intro", "concept", "example", "quran", "notice", "practice", "challenge", "summary", "completion"],

    sourceNote: {
      status: "book-cited",
      label: "Sourced from your reference book — pages 190–192",
      detail: "وَالجَوَازِمُ ثَمَانِيَةَ عَشَرَ، وَهِيَ نَوْعَانِ: جَازِمٌ لِفِعْلٍ وَاحِدٍ، وَجَازِمٌ لِفِعْلَيْنِ. فَالْأَوَّلُ سَبْعَةٌ (pp. 190–192). This lesson covers the first type — single-verb jawazim — teaching six of the book's seven directly: لم، لمّا، ألم، ألمّا، لام الأمر والدعاء، لا الناهية والدعائية. The seventh (الطلب إذا سقطت الفاء منه وقُصد به الجزاء, p. 192) is a genuinely advanced construction — a command-clause read as an implied condition — and is noted here rather than built, consistent with this Part's standing policy of not expanding into advanced exceptions. ألم and ألمّا are the book's own separate list entries (الهمزة + لم / لمّا), taught here as a brief variant of لم/لمّا rather than a fully separate drill, to avoid redundant repetition of the same jazm effect."
    },

    intro: {
      titleAr: "جزم الفعل المضارع: الجوازم لفعل واحد",
      titleEn: "Jazm of the Mudari': One-Verb Jawazim",
      statement: "The second way المضارع leaves its default state: a جازم enters."
    },

    objective: [
      "name لم، لمّا، ألم/ألمّا، لام الأمر, and لا الناهية as جوازم that act on a single مضارع verb",
      "recognize السكون as جزم's default sign — reactivating Lesson 3.7",
      "tell لم from لمّا, and لام الأمر from لا الناهية, by what each one does to meaning"
    ],

    concept: {
      termAr: "الجوازم لفعل واحد",
      kind: "book-cited",
      definitionAr: "وَالجَوَازِمُ ثَمَانِيَةَ عَشَرَ، وَهِيَ نَوْعَانِ: جَازِمٌ لِفِعْلٍ وَاحِدٍ، وَجَازِمٌ لِفِعْلَيْنِ. فَالْأَوَّلُ سَبْعَةٌ: «لَمْ»، وَ«لَمَّا»، وَ«أَلَمْ»، وَ«أَلَمَّا»، وَ«لَام» الأَمْرِ وَالدُّعَاءِ، وَ«لَا» فِي النَّهْيِ وَالدُّعَاءِ...",
      definitionEn: "جوازم are eighteen in total, of two kinds: those that جزم a single verb, and those that جزم two (the شرط group — Lesson 7.5). This lesson covers the single-verb kind.",
      lead: "Same chain again: عامل (a جازم this time) enters → المضارع becomes مجزومًا → a sign appears. You already met one of these signs in Lesson 3.7 — السكون."
    },

    definitionBreakdown: [
      {
        termAr: "لَمْ",
        termEn: "plain negation of the past",
        glossEn: "لَمْ يَلِدْ وَلَمْ يُولَدْ [الإخلاص:3]",
        explanation: "Negates a completed action — \"did not happen.\" يَلِدْ، يُولَدْ — مجزومان بالسكون. Already your book's own citation, from Lesson 3.7."
      },
      {
        termAr: "لَمَّا",
        termEn: "negation still in force",
        glossEn: "لَمَّا يَقْضِ مَا أَمَرَهُ [عبس:23]",
        explanation: "Unlike لم, لمّا implies the negated action is still expected — \"hasn't happened YET.\" يَقْضِ — أصله يَقْضِي؛ مجزوم بحذف حرف العلة (معتل الآخر — more in Lesson 7.6)."
      },
      {
        termAr: "أَلَمْ / أَلَمَّا",
        termEn: "the same two, as a question",
        glossEn: "أَلَمْ نَشْرَحْ لَكَ صَدْرَكَ [الشرح:1]",
        explanation: "Your book counts these as two further list entries: الهمزة (a question-mark prefix) attached to لم or لمّا. نَشْرَحْ — مجزوم بالسكون, exactly like plain لم — the همزة only adds a rhetorical question, it doesn't change the جزم."
      },
      {
        termAr: "لَام الأمر والدعاء",
        termEn: "turning a statement into a request",
        glossEn: "لِيُنفِقْ ذُو سَعَةٍ [الطلاق:7]",
        explanation: "لام الأمر converts the مضارع from إخبار (stating) to طلب (requesting/commanding). يُنفِقْ — مجزوم بالسكون."
      },
      {
        termAr: "لَا النَّاهِيَة والدعائية",
        termEn: "\"don't\"",
        glossEn: "لَا تَحْزَنْ إِنَّ اللَّهَ مَعَنَا [التوبة:40]",
        explanation: "لا الناهية turns a مضارع into a prohibition. تَحْزَنْ — مجزوم بالسكون. (The same لا also works as a prayer/plea — لا تؤاخذنا — same effect.)"
      }
    ],

    conceptTree: {
      root: { ar: "الجوازم لفعل واحد", en: "7 بحسب كتابك" },
      branches: [
        { ar: "لَمْ", en: "الإخلاص:3" },
        { ar: "لَمَّا", en: "عبس:23" },
        { ar: "أَلَمْ / أَلَمَّا", en: "الشرح:1" },
        { ar: "لَام الأمر", en: "الطلاق:7" },
        { ar: "لَا الناهية", en: "التوبة:40" },
        { ar: "الطلب بسقوط الفاء", en: "not built — advanced, see source note" }
      ]
    },

    example: {
      kind: "traditional-grammar-example",
      kindLabel: "The central model, with لم as the جازم",
      arabic: "يَكْتُبُ",
      transliteration: "Yaktubu",
      translation: "he writes — مرفوع",
      explanation: "The default state, unchanged — no عامل has entered yet.",
      contrast: {
        arabic: "لَمْ يَكْتُبْ",
        translation: "he did not write — مجزوم",
        explanation: "لم enters: a جازم. يكتب → يَكْتُبْ. العامل (لم) ← الحالة (جزم) ← العلامة (السكون) — Lesson 3.7's sign, now tied to its عامل."
      }
    },

    quranExample: {
      surahAr: "الشرح",
      surahEn: "Ash-Sharh",
      ayahRef: "94:1",
      arabic: "أَلَمْ نَشْرَحْ لَكَ صَدْرَكَ",
      translation: "Did We not expand for you, [O Muhammad], your breast?",
      notice: "أَلَمْ = الهمزة (question) + لم. نَشْرَحْ right after it is مجزوم بالسكون — the exact same effect as plain لم, just phrased as a rhetorical question.",
      wordNotes: {
        "94-1-w2": { conceptLabel: "مضارع مجزوم", explanation: "نَشْرَحْ — فعل مضارع مجزوم بـ«ألم» وعلامة جزمه السكون." }
      }
    },

    noticeInteraction: {
      type: "word-tap",
      ayahRef: "94:1",
      instanceId: "7.4-notice",
      promptContext: "Ash-Sharh 94:1",
      question: "Tap the مضارع verb that ألم has put into جزم.",
      correctWordId: "94-1-w2",
      correctFeedback: "Right — نَشْرَحْ is مجزوم بالسكون, right after ألم.",
      incorrectFeedback: "Not quite — أَلَمْ is the جازم itself (مبني — الهمزة + لم). Look for the مضارع verb right after it.",
      wordNotes: {
        "94-1-w1": { conceptLabel: "حرف جزم + استفهام", explanation: "أَلَمْ — الهمزة للاستفهام + لم الجازمة، مبني." },
        "94-1-w2": { conceptLabel: "مضارع مجزوم", explanation: "نَشْرَحْ — مجزوم بـ«ألم»، علامة جزمه السكون." }
      }
    },

    practiceQuestions: [
      {
        id: "p1",
        type: "multiple-choice",
        prompt: "ما الفرق الأساسي بين لم ولمّا؟",
        options: [
          { id: "a", labelAr: "لمّا تعني أن النفي ما زال مستمرًا — \"لم يحدث بعد\"" },
          { id: "b", labelAr: "لا فرق بينهما" },
          { id: "c", labelAr: "لمّا تجزم فعلين، ولم تجزم واحدًا" }
        ],
        correctOptionId: "a",
        explanation: "Right — لمّا تفيد استمرار النفي إلى الآن؛ لم تنفي مجرد الماضي."
      },
      {
        id: "p2",
        type: "multiple-choice",
        prompt: "أي أداة تحوّل المضارع من الإخبار إلى الطلب (الأمر)؟",
        options: [
          { id: "a", labelAr: "لام الأمر" },
          { id: "b", labelAr: "لم" },
          { id: "c", labelAr: "لا الناهية" }
        ],
        correctOptionId: "a",
        explanation: "Right — لام الأمر: يُطلب بها الفعل، فتقلبه من الإخبار إلى الطلب."
      },
      {
        id: "p3",
        type: "true-false",
        prompt: "لا الناهية تعني \"لا تفعل\" — نهيًا عن الفعل.",
        correct: true,
        explanation: "Right — لا تَحْزَنْ = don't grieve, نهي صريح."
      },
      {
        id: "p4",
        type: "multiple-choice",
        prompt: "علامة جزم المضارع الصحيح الآخر؟",
        options: [
          { id: "a", labelAr: "السكون" },
          { id: "b", labelAr: "الفتحة" },
          { id: "c", labelAr: "حذف حرف العلة" }
        ],
        correctOptionId: "a",
        explanation: "Right — السكون هو الأصل في علامتي الجزم (Lesson 3.7)."
      }
    ],

    quranChallenge: {
      surahAr: "التوبة",
      surahEn: "At-Tawbah",
      ayahRef: "9:40",
      arabic: "إِذْ يَقُولُ لِصَاحِبِهِ لَا تَحْزَنْ إِنَّ اللَّهَ مَعَنَا",
      translation: "[Remember] when he said to his companion, \"Do not grieve; indeed Allah is with us.\"",
      question: "تَحْزَنْ follows لا الناهية. What state and sign does it take?",
      options: [
        { id: "a", labelAr: "مجزوم بالسكون" },
        { id: "b", labelAr: "منصوب بالفتحة" },
        { id: "c", labelAr: "مرفوع بالضمة" }
      ],
      correctOptionId: "a",
      explanation: "Right — لا الناهية جازمة، فـ تَحْزَنْ مجزوم بالسكون — your book's own citation (p. 192)."
    },

    summary: [
      "الجوازم لفعل واحد (من كتابك): لم، لمّا، ألم، ألمّا، لام الأمر، لا الناهية — وسابع متقدّم (الطلب بسقوط الفاء) موثّق لا مبني.",
      "علامة الجزم الافتراضية: السكون (الشرح:1 — نَشْرَحْ)، كما في Lesson 3.7.",
      "لم تنفي الماضي؛ لمّا تنفيه مع استمرار التوقع؛ لام الأمر تطلب؛ لا الناهية تنهى.",
      "التالي: الجوازم التي تجزم فعلين معًا — أدوات الشرط."
    ],

    completion: {
      titleAr: "جزم الفعل المضارع: الجوازم لفعل واحد",
      statement: "ستة من سبعة مفهومة. التالي: الجازم من نوع مختلف تمامًا — ما يجزم فعلين."
    }
  },

  "7.5": {
    id: "7.5",
    steps: ["intro", "concept", "example", "quran", "notice", "practice", "challenge", "summary", "completion"],

    sourceNote: {
      status: "book-cited",
      label: "Sourced from your reference book — pages 193–198",
      detail: "وَالثَّانِي – وَهُوَ مَا يَجْزِمُ فِعْلَيْنِ – أَحَدَ عَشَرَ (p. 193); the closing recap on p. 198 confirms: وَهَذِهِ الأَدَوَاتُ الإِحْدَى عَشَرَ كُلُّهَا أَسْمَاءٌ، إِلَّا «إِنْ» وَ«إِذْمَا»، فَإِنَّهُمَا حَرْفَانِ. This lesson deep-teaches four with clean Qur'anic citations from the supplied pages (إنْ، ما، مَنْ، أينَ) and lists the rest by name in the concept tree without individual drilling, since most of their book-given examples are poetic shawāhid rather than Qur'anic. One honest gap: the recap names 11 tools — 2 حروف (إنْ، إذما) + 9 أسماء — but the pages supplied contain only 8 أسماء (ما، مَنْ، مهما، أيّ، متى، أيّان، أين، أنّى). The missing 9th اسم almost certainly appears on p. 197, a page not included in the material provided — it has not been guessed or filled in from outside knowledge, consistent with this project's source-first discipline."
    },

    intro: {
      titleAr: "جزم الفعل المضارع: أدوات الشرط الجازمة",
      titleEn: "Jazm of the Mudari': the Conditional Jawazim",
      statement: "A different shape of جازم entirely: one that doesn't just affect a verb — it links two of them."
    },

    objective: [
      "name فعل الشرط and جواب الشرط/الجزاء, and state that BOTH are مجزومان",
      "recognize إنْ، ما، مَنْ, and أينَ as أدوات شرط جازمة, each with its own book-cited Qur'anic example",
      "tell إنْ الشرطية (this lesson) apart from إنّ الناسخة (Part 6) — same spelling in English, different particles entirely"
    ],

    concept: {
      termAr: "أدوات الشرط الجازمة",
      kind: "book-cited",
      definitionAr: "وَالثَّانِي – وَهُوَ مَا يَجْزِمُ فِعْلَيْنِ – أَحَدَ عَشَرَ، وَهُوَ: «إِنْ» ... وَ«مَا» ... وَ«مَنْ» ... وَيُسَمَّى الفِعْلُ الأَوَّلُ «شَرْطًا»، وَيُسَمَّى الثَّانِي «جَوَابًا وَجَزَاءً».",
      definitionEn: "This second kind of جازم doesn't act on one verb — it links two: فعل الشرط (the condition) and جواب الشرط / الجزاء (the result). Both verbs are مجزومان, by the SAME أداة.",
      lead: "إِن يَشَأْ يُذْهِبْكُمْ — one أداة (إنْ), two مجزومان verbs (يَشَأْ، يُذْهِبْكُمْ), one cause-and-effect relationship."
    },

    definitionBreakdown: [
      {
        termAr: "إنْ",
        termEn: "the plainest شرط particle",
        glossEn: "إِن يَشَأْ يُذْهِبْكُمْ [النساء:133]",
        explanation: "يَشَأْ (فعل الشرط) ويُذْهِبْكُمْ (جواب الشرط/الجزاء) — كلاهما مجزوم بإنْ. Careful: this إنْ (سكون, شرطية) is a completely different particle from إنّ (شدّة, from Part 6's النواسخ) — same English spelling, nothing else in common."
      },
      {
        termAr: "مَا",
        termEn: "\"whatever\"",
        glossEn: "وَمَا تَفْعَلُوا مِنْ خَيْرٍ يَعْلَمْهُ اللَّهُ [البقرة:197]",
        explanation: "تَفْعَلُوا (الشرط) ويَعْلَمْهُ (الجزاء) — both مجزومان. تَفْعَلُوا is also من الأفعال الخمسة — its جزم shows up as حذف النون, not سكون (Lesson 7.6)."
      },
      {
        termAr: "مَنْ",
        termEn: "\"whoever\"",
        glossEn: "مَن يَعْمَلْ سُوءًا يُجْزَ بِهِ [النساء:123]",
        explanation: "يَعْمَلْ (الشرط) ويُجْزَ (الجزاء — معتل الآخر, جزمه بحذف حرف العلة). Same two-verb pattern, third أداة."
      },
      {
        termAr: "أينَ",
        termEn: "\"wherever\"",
        glossEn: "أَيْنَمَا تَكُونُوا يُدْرِككُّمُ الْمَوْتُ [النساء:78]",
        explanation: "تَكُونُوا (الشرط، من الأفعال الخمسة) ويُدْرِككُّمُ (الجزاء). A أداة of place, same جزم behavior as the others."
      },
      {
        termAr: "الباقي",
        termEn: "the rest, by name",
        glossEn: "مهما، إذما، أيّ، متى، أيّان، أنّى",
        explanation: "Your book counts eleven in total — these six complete the list but are mostly illustrated with poetry rather than Qur'anic citations in the pages supplied, so they're named here rather than drilled individually. (See this lesson's source note for one further honestly-disclosed gap.)"
      }
    ],

    conceptTree: {
      root: { ar: "أدوات الشرط الجازمة", en: "11 بحسب كتابك" },
      branches: [
        { ar: "حروف", en: "ليست أسماء", children: [{ ar: "إنْ", en: "النساء:133" }, { ar: "إذما", en: "not individually drilled" }] },
        { ar: "أسماء", en: "8 مؤكدة من المصدر + فجوة واحدة", children: [{ ar: "ما", en: "البقرة:197" }, { ar: "مَنْ", en: "النساء:123" }, { ar: "أينَ", en: "النساء:78" }, { ar: "مهما، أيّ، متى، أيّان، أنّى", en: "named, not drilled" }] }
      ]
    },

    example: {
      kind: "traditional-grammar-example",
      kindLabel: "Two verbs, one أداة, one جزم",
      arabic: "إِن يَشَأْ يُذْهِبْكُمْ",
      transliteration: "In yasha' yudhhibkum",
      translation: "If He wills, He will do away with you",
      explanation: "إنْ enters once, but reaches TWO verbs: يَشَأْ (فعل الشرط) and يُذْهِبْكُمْ (جواب الشرط). Both مجزومان بإنْ — the same أداة causing jazm twice over.",
      contrast: {
        arabic: "يَشَاءُ، يُذْهِبُكُمْ",
        translation: "(without إنْ — both simply مرفوعان)",
        explanation: "Remove إنْ, and both verbs fall back to رفع, their default state. One أداة, entering once, is responsible for both مجزومين."
      }
    },

    quranExample: {
      surahAr: "النساء",
      surahEn: "An-Nisa",
      ayahRef: "4:133",
      arabic: "إِن يَشَأْ يُذْهِبْكُمْ أَيُّهَا النَّاسُ",
      translation: "If He wills, he can do away with you, O people.",
      notice: "Your book's own first citation for «إنْ» (p. 193). يَشَأْ is فعل الشرط; يُذْهِبْكُمْ is جوابه. Both مجزومان — by the same إنْ.",
      wordNotes: {
        "4-133-w2": { conceptLabel: "فعل الشرط، مجزوم", explanation: "يَشَأْ — فعل الشرط، مجزوم بإنْ وعلامة جزمه السكون." },
        "4-133-w3": { conceptLabel: "جواب الشرط، مجزوم", explanation: "يُذْهِبْكُمْ — جواب الشرط/الجزاء، مجزوم بإنْ أيضًا." }
      }
    },

    noticeInteraction: {
      type: "word-tap",
      ayahRef: "4:133",
      instanceId: "7.5-notice",
      promptContext: "An-Nisa 4:133",
      question: "Tap جواب الشرط — the verb that is the RESULT, not the condition.",
      correctWordId: "4-133-w3",
      correctFeedback: "Right — يُذْهِبْكُمْ is جواب الشرط (the result/جزاء). يَشَأْ right before it is فعل الشرط (the condition) — both مجزومان, but they play different roles.",
      incorrectFeedback: "Not quite — يَشَأْ is فعل الشرط (the condition itself). The result/جزاء comes right after it.",
      wordNotes: {
        "4-133-w1": { conceptLabel: "أداة شرط جازمة", explanation: "إِنْ — حرف شرط جازم، يجزم فعلين." },
        "4-133-w2": { conceptLabel: "فعل الشرط", explanation: "يَشَأْ — فعل الشرط، مجزوم." },
        "4-133-w3": { conceptLabel: "جواب الشرط", explanation: "يُذْهِبْكُمْ — جواب الشرط/الجزاء، مجزوم." }
      }
    },

    practiceQuestions: [
      {
        id: "p1",
        type: "true-false",
        prompt: "أدوات الشرط الجازمة تجزم فعلًا واحدًا فقط، كما تفعل لم.",
        correct: false,
        explanation: "No — هذا النوع من الجوازم يجزم فعلين: فعل الشرط وجوابه/جزاءه."
      },
      {
        id: "p2",
        type: "multiple-choice",
        prompt: "ماذا يسمى الفعل الأول بعد أداة الشرط؟",
        options: [
          { id: "a", labelAr: "فعل الشرط" },
          { id: "b", labelAr: "جواب الشرط" },
          { id: "c", labelAr: "خبر الشرط" }
        ],
        correctOptionId: "a",
        explanation: "Right — الفعل الأول: فعل الشرط. الثاني: جواب وجزاء."
      },
      {
        id: "p3",
        type: "multiple-choice",
        prompt: "إنْ (الشرطية الجازمة) وإنّ (الناسخة من Part 6) — ما العلاقة بينهما؟",
        options: [
          { id: "a", labelAr: "لا علاقة — أداتان مختلفتان تمامًا، رغم تشابه النطق بالإنجليزية" },
          { id: "b", labelAr: "نفس الأداة بالضبط" },
          { id: "c", labelAr: "إنْ هي شكل مخفف من إنّ" }
        ],
        correctOptionId: "a",
        explanation: "Right — إنْ (سكون) شرطية جازمة تدخل على الفعل؛ إنّ (شدّة) ناسخة تدخل على الجملة الاسمية. أداتان مختلفتان كليًا."
      },
      {
        id: "p4",
        type: "true-false",
        prompt: "في ﴿مَن يَعْمَلْ سُوءًا يُجْزَ بِهِ﴾، كل من يَعْمَلْ ويُجْزَ مجزوم.",
        correct: true,
        explanation: "Right — يَعْمَلْ فعل الشرط، يُجْزَ جوابه — كلاهما مجزوم بـ«مَن»."
      }
    ],

    quranChallenge: {
      surahAr: "النساء",
      surahEn: "An-Nisa",
      ayahRef: "4:123",
      arabic: "مَن يَعْمَلْ سُوءًا يُجْزَ بِهِ",
      translation: "Whoever does a wrong will be recompensed for it.",
      question: "يُجْزَ (أصله يُجْزَى) is جواب الشرط. Its final weak letter has been dropped. What sign marks its جزم?",
      options: [
        { id: "a", labelEn: "حذف حرف العلة — a dropped weak letter" },
        { id: "b", labelAr: "السكون" }
      ],
      correctOptionId: "a",
      explanation: "Right — يُجْزَ is معتل الآخر (أصله يُجْزَى), so جزم is marked بحذف حرف العلة, same rule as Lesson 3.7 — more on this in Lesson 7.6."
    },

    summary: [
      "أدوات الشرط الجازمة تجزم فعلين: فعل الشرط وجوابه/جزاءه — نوع مختلف تمامًا عن الجوازم لفعل واحد.",
      "أربع أدوات مُدرَّسة بمثال قرآني من كتابك: إنْ (النساء:133)، ما (البقرة:197)، مَنْ (النساء:123)، أينَ (النساء:78).",
      "إنْ الشرطية ليست إنّ الناسخة — أداتان مختلفتان، رغم تشابه الاسم بالإنجليزية.",
      "11 أداة إجمالًا بحسب كتابك؛ 8 أسماء منها مؤكدة من الصفحات المتوفرة، والتاسعة موثّقة كفجوة لا كتخمين."
    ],

    completion: {
      titleAr: "جزم الفعل المضارع: أدوات الشرط الجازمة",
      statement: "النصب والجزم مفهومان بعواملهما. التالي: علامتان خاصتان تتغيران عبر الحالات الثلاث كلها."
    }
  },

  "7.6": {
    id: "7.6",
    steps: ["intro", "concept", "example", "quran", "notice", "practice", "challenge", "summary", "completion"],

    sourceNote: {
      status: "book-cited",
      label: "Sourced from your reference book — pages 26 (3.3, reactivated), 35 (3.7, reactivated), plus the نواصب/جوازم citations from pp. 183, 193",
      detail: "Each piece of this lesson is independently book-cited — نيابة النون في الفعل المضارع...الأفعال الخمسة (p. 26), علامتا الجزم: السكون والحذف (p. 35) — but the side-by-side framing across all three states (رفع/نصب/جزم) is QURRA's own organizing structure, assembling citations the book presents separately across the chapter, the same approach used for Lesson 6.5's كان/إنّ contrast."
    },

    intro: {
      titleAr: "الأفعال الخمسة والأفعال المعتلة الآخر",
      titleEn: "The Five Verbs and Weak-Final Verbs",
      statement: "Two special word-shapes that don't follow the ordinary signs — and keep reappearing across every state you've just learned."
    },

    objective: [
      "track الأفعال الخمسة's sign across all three states: ثبوت النون (رفع) → حذف النون (نصب/جزم)",
      "track معتل الآخر's جزم sign — حذف حرف العلة — reactivating Lesson 3.7",
      "recognize both patterns inside real Qur'anic citations already met in this Part"
    ],

    concept: {
      termAr: "الأفعال الخمسة والمعتل الآخر عبر الحالات الثلاث",
      kind: "book-cited",
      definitionAr: "وَأَمَّا النُّونُ فَفِي الفِعْلِ الْمُضَارِعِ إِذَا اتَّصَلَ بِهِ ضَمِيرُ تَثْنِيَةٍ أَوْ جَمْعِ الْمُذَكَّرِ أَوِ الْمُؤَنَّثَةِ الْمُخَاطَبَةِ (p. 26). وَلِلْجَزْمِ عَلَامَتَانِ: السُّكُونُ وَهُوَ الْأَصْلُ، وَالحَذْفُ وَهُوَ نَائِبٌ عَنْهُ (p. 35).",
      definitionEn: "You've already met both of these signs separately — ثبوت النون in Lesson 3.3, حذف حرف العلة in Lesson 3.7. This lesson puts them to work specifically across نصب and جزم, where they behave in a way Part 3 didn't yet show you.",
      lead: "الأفعال الخمسة never take الفتحة or السكون at all — رفع، نصب، وجزم are all marked by whether the ن stays or goes. Weak-final verbs follow ordinary نصب and رفع — but when جزم enters, their final letter simply disappears."
    },

    definitionBreakdown: [
      {
        termAr: "الأفعال الخمسة — رفع",
        termEn: "ثبوت النون",
        glossEn: "وَالنَّجْمُ وَالشَّجَرُ يَسْجُدَانِ [الرحمن:6]",
        explanation: "No عامل entered — يَسْجُدَانِ stays مرفوعًا, and رفع shows up as the ن staying attached. Lesson 3.3's own citation."
      },
      {
        termAr: "الأفعال الخمسة — نصب / جزم",
        termEn: "حذف النون",
        glossEn: "لِّكَيْلَا تَأْسَوْا [الحديد:23] · وَمَا تَفْعَلُوا [البقرة:197]",
        explanation: "The moment a ناصب (كي) or جازم (ما) enters, the ن is simply DROPPED instead — تَأْسَوْا، تَفْعَلُوا. Same category of verb, same underlying rule, whether نصب or جزم enters: the نون goes."
      },
      {
        termAr: "معتل الآخر — جزم",
        termEn: "حذف حرف العلة",
        glossEn: "لَمَّا يَقْضِ مَا أَمَرَهُ [عبس:23] · وَمَن يَتَّقِ اللَّهَ [الطلاق:2]",
        explanation: "Reactivating Lesson 3.7 exactly: a مضارع ending in ا، و، or ي can't carry a pronounced سكون, so جزم drops that weak final letter instead — يَقْضِ (أصله يَقْضِي)، يَتَّقِ (أصله يَتَّقِي)."
      },
      {
        termAr: "معتل الآخر — نصب ورفع",
        termEn: "a brief, honest note",
        glossEn: "scope note",
        explanation: "Weak-final verbs take رفع and نصب too (with فتحة/ضمة مُقدَّرة — \"estimated\" rather than visibly pronounced), but no clean Qur'anic citation for that specific combination appears in the pages supplied for this Part, so none is forced in here."
      }
    ],

    conceptTree: {
      root: { ar: "شكلان خاصان", en: "signs that change with the حالة" },
      branches: [
        { ar: "الأفعال الخمسة", en: "ثبوت / حذف النون", children: [{ ar: "رفع: ثبوت النون", en: "الرحمن:6" }, { ar: "نصب: حذف النون", en: "الحديد:23" }, { ar: "جزم: حذف النون", en: "البقرة:197" }] },
        { ar: "المعتل الآخر", en: "حذف حرف العلة عند الجزم فقط", children: [{ ar: "عبس:23", en: "يَقْضِ" }, { ar: "الطلاق:2", en: "يَتَّقِ" }] }
      ]
    },

    example: {
      kind: "traditional-grammar-example",
      kindLabel: "الأفعال الخمسة: the same sign-pair, two different states",
      arabic: "يَسْجُدَانِ",
      transliteration: "Yasjudāni",
      translation: "they two prostrate — مرفوع بثبوت النون",
      explanation: "No عامل entered. النون ثابتة — ذلك وحده هو علامة الرفع هنا.",
      contrast: {
        arabic: "تَأْسَوْا",
        translation: "(so that) you grieve — منصوب بحذف النون",
        explanation: "كي دخلت كناصب (الحديد:23). نفس شكل الفعل (الأفعال الخمسة)، لكن الآن النون غابت — وذلك هو علامة النصب."
      }
    },

    quranExample: {
      surahAr: "الرحمن",
      surahEn: "Ar-Rahman",
      ayahRef: "55:6",
      arabic: "وَالنَّجْمُ وَالشَّجَرُ يَسْجُدَانِ",
      translation: "And the stars and trees prostrate.",
      notice: "The same citation from Lesson 3.3, now explicitly placed beside its نصب/جزم counterparts (تَأْسَوْا، تَفْعَلُوا) so the full رفع ↔ نصب/جزم contrast is visible in one place.",
      wordNotes: {
        "55-6-w3": { conceptLabel: "الأفعال الخمسة، مرفوع", explanation: "يَسْجُدَانِ — مرفوع بثبوت النون؛ لو دخل عليه ناصب أو جازم، لحُذفت النون بدلًا من ذلك." }
      }
    },

    noticeInteraction: {
      type: "word-tap",
      ayahRef: "55:6",
      instanceId: "7.6-notice",
      promptContext: "Ar-Rahman 55:6",
      question: "Tap the الأفعال الخمسة verb here.",
      correctWordId: "55-6-w3",
      correctFeedback: "Right — يَسْجُدَانِ carries a dual pronoun, so it's من الأفعال الخمسة — مرفوع هنا بثبوت النون.",
      incorrectFeedback: "Not quite — وَالنَّجْمُ and وَالشَّجَرُ are the two subjects (nouns), not the verb. The verb comes last in this phrase.",
      wordNotes: {
        "55-6-w3": { conceptLabel: "الأفعال الخمسة", explanation: "يَسْجُدَانِ — مضارع + ألف الاثنين = من الأفعال الخمسة، مرفوع بثبوت النون." }
      }
    },

    practiceQuestions: [
      {
        id: "p1",
        type: "true-false",
        prompt: "الأفعال الخمسة تُرفع بالضمة مثل أي مضارع آخر.",
        correct: false,
        explanation: "No — ترفع بثبوت النون، لا بالضمة (Lesson 3.3)."
      },
      {
        id: "p2",
        type: "multiple-choice",
        prompt: "عندما يدخل ناصب أو جازم على فعل من الأفعال الخمسة، ماذا يحدث لعلامته؟",
        options: [
          { id: "a", labelAr: "حذف النون — نفس العلامة لكلا الحالتين" },
          { id: "b", labelAr: "تضاف نون جديدة" },
          { id: "c", labelAr: "لا يتغيّر شيء" }
        ],
        correctOptionId: "a",
        explanation: "Right — سواء نصب أو جزم، العلامة نفسها: حذف النون (تَأْسَوْا، تَفْعَلُوا)."
      },
      {
        id: "p3",
        type: "multiple-choice",
        prompt: "ما علامة جزم المضارع المعتل الآخر؟",
        options: [
          { id: "a", labelAr: "حذف حرف العلة" },
          { id: "b", labelAr: "السكون" },
          { id: "c", labelAr: "حذف النون" }
        ],
        correctOptionId: "a",
        explanation: "Right — Lesson 3.7's own rule, reactivated: السكون لا يمكن نطقه على حرف علة، فيُحذف بدلًا منه."
      },
      {
        id: "p4",
        type: "true-false",
        prompt: "يَقْضِ في ﴿لَمَّا يَقْضِ مَا أَمَرَهُ﴾ أصله يَقْضِي، وحُذفت الياء جزمًا.",
        correct: true,
        explanation: "Right — نفس قاعدة Lesson 3.7: حذف حرف العلة علامة الجزم للمعتل الآخر."
      }
    ],

    quranChallenge: {
      surahAr: "عبس",
      surahEn: "Abasa",
      ayahRef: "80:23",
      arabic: "كَلَّا لَمَّا يَقْضِ مَا أَمَرَهُ",
      translation: "No! He has not yet accomplished what He commanded him.",
      question: "يَقْضِ (أصله يَقْضِي) follows لمّا. What sign marks its جزم?",
      options: [
        { id: "a", labelEn: "حذف حرف العلة — a dropped weak letter" },
        { id: "b", labelAr: "السكون" }
      ],
      correctOptionId: "a",
      explanation: "Right — يَقْضِ معتل الآخر، فعلامة جزمه حذف حرف العلة، تمامًا كما في Lesson 3.7."
    },

    summary: [
      "الأفعال الخمسة: ثبوت النون للرفع (الرحمن:6) ↔ حذف النون للنصب والجزم (الحديد:23، البقرة:197) — نفس العلامة لكلتا الحالتين غير الافتراضية.",
      "المعتل الآخر: حذف حرف العلة علامة الجزم فقط (عبس:23، الطلاق:2) — إعادة تنشيط Lesson 3.7 لا إعادة تدريس.",
      "نصب ورفع المعتل الآخر يتبعان القواعد المعتادة (فتحة/ضمة مقدّرة)؛ لم يُفرض مثال قرآني غير موثّق لذلك.",
      "التالي: الخريطة الكاملة — كل هذا الباب في نظرة واحدة."
    ],

    completion: {
      titleAr: "الأفعال الخمسة والأفعال المعتلة الآخر",
      statement: "علامتان خاصتان، مفهومتان عبر الحالات الثلاث. التالي: كل الفعل المضارع، في خريطة واحدة."
    }
  },

  "7.7": {
    id: "7.7",
    steps: ["intro", "concept", "example", "quran", "practice", "summary", "completion"],

    sourceNote: {
      status: "qurra-comparison",
      label: "A closing synthesis across pp. 182–198 — the whole باب إعراب الأفعال",
      detail: "This lesson introduces no new book content of its own. It's a QURRA-organized recap of the three حالات taught in Lessons 7.1–7.6, in the same spirit as Lesson 6.9's own closing map for النواسخ — pulling together material that's already been individually sourced and cited."
    },

    intro: {
      titleAr: "الخريطة الكاملة للفعل المضارع",
      titleEn: "The Complete Map of the Mudari'",
      statement: "One verb, one default state, two ways to leave it. Everything from this Part, in a single map."
    },

    objective: [
      "recall all three حالات of المضارع and what causes each one",
      "restate the central model: العامل ← الحالة ← العلامة",
      "connect every sign back to Part 3's علامات الإعراب, and every state back to Part 2's معرب/مبني"
    ],

    concept: {
      termAr: "الفعل المضارع — الخريطة الكاملة",
      kind: "qurra-comparison",
      definitionAr: "وَهُوَ مَرْفُوعٌ أَبَدًا حَتَّى يَدْخُلَ عَلَيْهِ نَاصِبٌ فَيَنْصِبَهُ، أَوْ جَازِمٌ فَيَجْزِمَهُ.",
      definitionEn: "Three states, one underlying logic: رفع is simply what remains when nothing has entered. نصب and جزم only happen because a عامل reached in and changed it.",
      lead: "العامل ← الحالة ← العلامة — the same chain, every single time, across this entire Part."
    },

    definitionBreakdown: [
      {
        termAr: "رفع",
        termEn: "Lesson 7.2",
        glossEn: "لا عامل",
        explanation: "الضمة الظاهرة (يَكْتُبُ)، أو ثبوت النون للأفعال الخمسة (يَسْجُدَانِ)."
      },
      {
        termAr: "نصب",
        termEn: "Lesson 7.3",
        glossEn: "أنْ، لنْ، كيْ، إذنْ",
        explanation: "الفتحة الظاهرة (نَّبْرَحَ)، أو حذف النون للأفعال الخمسة (تَأْسَوْا)."
      },
      {
        termAr: "جزم",
        termEn: "Lessons 7.4–7.5",
        glossEn: "لفعل واحد، أو لفعلين (شرط)",
        explanation: "السكون (نَشْرَحْ)، أو حذف حرف العلة للمعتل الآخر (يَقْضِ)، أو حذف النون للأفعال الخمسة (تَفْعَلُوا)."
      }
    ],

    conceptTree: {
      root: { ar: "الفعل المضارع", en: "the complete map" },
      branches: [
        { ar: "رفع", en: "لا عامل دخل", children: [{ ar: "الضمة", en: "صحيح الآخر" }, { ar: "ثبوت النون", en: "الأفعال الخمسة" }] },
        { ar: "نصب", en: "دخل ناصب", children: [{ ar: "أنْ / لنْ / كيْ / إذنْ", en: "4 نواصب" }, { ar: "الفتحة / حذف النون", en: "حسب الشكل" }] },
        { ar: "جزم", en: "دخل جازم", children: [{ ar: "لفعل واحد", en: "لم، لمّا، لام الأمر، لا الناهية" }, { ar: "لفعلين (شرط)", en: "إنْ، ما، مَنْ، أينَ..." }, { ar: "السكون / حذف حرف العلة / حذف النون", en: "حسب الشكل" }] }
      ]
    },

    example: {
      kind: "traditional-grammar-example",
      kindLabel: "The central model, all three states on one root",
      arabic: "يَكْتُبُ",
      transliteration: "Yaktubu",
      translation: "he writes — مرفوع",
      explanation: "النوع الأول: لا عامل، مرفوع بالضمة.",
      contrast: {
        arabic: "لَنْ يَكْتُبَ — لَمْ يَكْتُبْ",
        translation: "he will not write — he did not write",
        explanation: "النوع الثاني (لن): منصوب بالفتحة. النوع الثالث (لم): مجزوم بالسكون. نفس الفعل، ثلاث حالات مختلفة تمامًا، بحسب العامل الداخل فقط."
      }
    },

    quranExample: {
      surahAr: "الفاتحة",
      surahEn: "Al-Fatihah",
      ayahRef: "1:5",
      arabic: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
      translation: "It is You we worship and You we ask for help.",
      notice: "A fitting close: the same آية that opened this Part's look at رفع المضارع in Lesson 7.2. Now that نصب and جزم are both behind you, you can see clearly why نَعْبُدُ and نَسْتَعِينُ are مرفوعان here — not because of some special rule, but simply because no ناصب and no جازم ever entered this sentence."
    },

    practiceQuestions: [
      {
        id: "p1",
        type: "multiple-choice",
        prompt: "ما الحالة الإعرابية الافتراضية للمضارع؟",
        options: [
          { id: "a", labelAr: "مرفوع" },
          { id: "b", labelAr: "منصوب" },
          { id: "c", labelAr: "مجزوم" }
        ],
        correctOptionId: "a",
        explanation: "Right — رفع هو ما يبقى حين لا يدخل عامل."
      },
      {
        id: "p2",
        type: "multiple-choice",
        prompt: "كم عدد النواصب التي تنصب المضارع بنفسها، بحسب هذا الباب؟",
        options: [
          { id: "a", labelAr: "أربعة" },
          { id: "b", labelAr: "سبعة" },
          { id: "c", labelAr: "أحد عشر" }
        ],
        correctOptionId: "a",
        explanation: "Right — أنْ، لنْ، كيْ، إذنْ (Lesson 7.3)."
      },
      {
        id: "p3",
        type: "multiple-choice",
        prompt: "الجوازم التي تجزم فعلين تُسمى أدوات ماذا؟",
        options: [
          { id: "a", labelAr: "الشرط" },
          { id: "b", labelAr: "النفي" },
          { id: "c", labelAr: "الاستفهام" }
        ],
        correctOptionId: "a",
        explanation: "Right — أدوات الشرط الجازمة، مثل إنْ وما ومَنْ (Lesson 7.5)."
      },
      {
        id: "p4",
        type: "true-false",
        prompt: "الأفعال الخمسة تأخذ نفس العلامة (حذف النون) سواء دخل عليها ناصب أو جازم.",
        correct: true,
        explanation: "Right — Lesson 7.6: حذف النون يعمل علامةً للنصب والجزم معًا، على عكس الرفع (ثبوت النون)."
      },
      {
        id: "p5",
        type: "multiple-choice",
        prompt: "ما النموذج المركزي الذي تكرر طوال هذا الباب؟",
        options: [
          { id: "a", labelAr: "العامل ← الحالة ← العلامة" },
          { id: "b", labelAr: "حفظ كل الأدوات عن ظهر قلب" },
          { id: "c", labelAr: "الإعراب الكامل لكل كلمة" }
        ],
        correctOptionId: "a",
        explanation: "Right — هذا الباب لا يطلب حفظ قوائم، بل فهم كيف يغيّر العامل الحالة، والحالة العلامة."
      }
    ],

    summary: [
      "المضارع مرفوع أبدًا حتى يدخل عليه ناصب فينصبه، أو جازم فيجزمه — القاعدة المركزية لكل هذا الباب.",
      "رفع: الضمة أو ثبوت النون. نصب: الفتحة أو حذف النون (4 نواصب: أنْ، لنْ، كيْ، إذنْ). جزم: السكون، أو حذف حرف العلة، أو حذف النون (جوازم لفعل واحد، وأخرى لفعلين — أدوات الشرط).",
      "كل تغيّر في العلامة يعود مباشرة إلى Part 3's علامات الإعراب — هذا الباب لم يخترع علامات جديدة، بل طبّق الموجود على المضارع تحديدًا.",
      "Part 7 complete. Next: Part 8."
    ],

    completion: {
      titleAr: "الخريطة الكاملة للفعل المضارع",
      statement: "Part 7 complete — رفع المضارع الافتراضي، نصبه بأربعة نواصب، وجزمه بنوعين من الجوازم, كلها مفهومة الآن. Part 8 is next."
    }
  }
,

"8.1": {
    id: "8.1",
    steps: ["intro", "concept", "example", "quran", "notice", "practice", "challenge", "summary", "completion"],

    sourceNote: {
      status: "book-cited",
      label: "Sourced from your reference book — page 16",
      detail: "The full مبني category list, and both the كم (مبني على السكون) and أين (مبني على الفتح) examples with their footnoted Qur'an citations, are the book's own (p. 16, main text and footnotes 3–8). The كم citation was re-verified against the printed page after an initial QURRA transcription slip — the book's own printed citation (قَالَ كَمْ لَبِثْتُمْ [23:112]) is correct. This Part develops three of the book's six listed categories in depth — الضمائر، أسماء الإشارة، الأسماء الموصولة — because those are the ones the supplied source pages develop in detail; أسماء الشرط، أسماء الأفعال، and the rest of أسماء الاستفهام are named in this overview list but not independently developed in the pages provided, so this course names them without teaching them further (documented below, not guessed at)."
    },

    intro: {
      titleAr: "من المعرب إلى المبني",
      titleEn: "From Mu'rab to Mabni",
      statement: "Every lesson since Part 2 has worked with endings that shift. Now meet the nouns for which that's simply never true."
    },

    objective: [
      "reactivate the معرب/مبني distinction from Lesson 2.1, now applied fully to nouns",
      "see your book's own complete map of مبني noun categories",
      "recognize كم and أين as the book's own مبني examples, each built on a different vowel"
    ],

    concept: {
      termAr: "البناء: ثبات الآخر",
      kind: "book-cited",
      definitionAr: "وَمَبْنِيٌّ... وَهُوَ: مَا لَا يَتَغَيَّرُ آخِرُهُ بِسَبَبِ العَوَامِلِ الدَّاخِلَةِ عَلَيْهِ.",
      definitionEn: "A mabni word: one whose ending never changes, no matter which عامل enters upon it.",
      lead: "Back in Lesson 2.1 you met the question that applies to every كلمة: معرب أم مبني؟ Since then, every lesson has worked with معرب endings — endings that shift with العوامل. Now it's time to meet the other half: nouns whose ending never moves at all."
    },

    definitionBreakdown: [
      {
        termAr: "معرب",
        termEn: "Mu'rab",
        glossEn: "ending changes",
        explanation: "Shifts depending on the عامل — زَيْدٌ، زَيْدًا، زَيْدٍ. Everything from Parts 2–7 has been about THIS kind of word."
      },
      {
        termAr: "مبني",
        termEn: "Mabni",
        glossEn: "ending fixed",
        explanation: "Stays exactly the same no matter the عامل. مَنْ — your book's own example from Lesson 2.1 — never changes, whatever role it plays. This whole Part is about مبني nouns specifically."
      }
    ],

    conceptTree: {
      root: { ar: "الأسماء المبنية", en: "mabni nouns — your book's own map (p. 16)" },
      branches: [
        { ar: "الضمائر", en: "pronouns", note: "Covered in depth: Lessons 8.2–8.4." },
        { ar: "أسماء الإشارة", en: "demonstratives", note: "Covered in depth: Lesson 8.5." },
        { ar: "الأسماء الموصولة", en: "relative nouns", note: "Covered in depth: Lessons 8.6–8.7." },
        { ar: "أسماء الاستفهام", en: "interrogatives", note: "Only كم and أين — the book's own examples, below. The source doesn't develop the rest of this category in the pages provided." },
        { ar: "أسماء الشرط", en: "conditionals", note: "Named in your book's list (p. 16); not independently developed in the pages provided for this Part." },
        { ar: "أسماء الأفعال", en: "verb-nouns", note: "Named in your book's list (p. 16); not independently developed in the pages provided for this Part." }
      ]
    },

    example: {
      kind: "book-example",
      kindLabel: "Reactivating Lesson 2.1 (p. 16)",
      arabic: "زَيْدٌ",
      transliteration: "Zaydun",
      translation: "a معرب noun",
      explanation: "زَيْدٌ (doer), زَيْدًا (object), زَيْدٍ (after a preposition) — three roles, three different endings. You've watched this shift all through Part 2.",
      contrast: {
        arabic: "هذا",
        translation: "“this” — a مبني noun",
        explanation: "هذا طالبٌ، رأيتُ هذا، مررتُ بهذا — the word itself never changes shape, whatever role it plays. That fixed shape, regardless of العامل, is البناء."
      }
    },

    quranExample: {
      surahAr: "المؤمنون",
      surahEn: "Al-Mu'minun",
      ayahRef: "23:112",
      arabic: "قَالَ كَمْ لَبِثْتُمْ",
      translation: "He will say, How long did you remain...",
      notice: "كَمْ here is a question word — “how long / how much.” Watch what happens to it: however it's used, in a question like this or anywhere else, its shape never changes. That's exactly what مبني means.",
      wordNotes: {
        "23-112-w1": { conceptLabel: "فعل", explanation: "قَالَ — “he said.” A plain فعل ماضٍ, not our focus here." },
        "23-112-w2": { conceptLabel: "اسم استفهام، مبني على السكون", explanation: "كَمْ — your book's own example (p. 16): an اسم استفهام مبني على السكون. Its ending never shifts." },
        "23-112-w3": { conceptLabel: "فعل", explanation: "لَبِثْتُمْ — “you remained.” A verb, not our focus here." }
      }
    },

    noticeInteraction: {
      type: "word-tap",
      ayahRef: "23:112",
      instanceId: "8.1-notice",
      promptContext: "Al-Mu'minun 23:112",
      question: "Tap the مبني noun your book cites in this ayah — the one whose ending stays fixed.",
      correctWordId: "23-112-w2",
      correctFeedback: "Right — كَمْ. Your book names it directly (p. 16): اسم استفهام مبني على السكون.",
      incorrectFeedback: "Not quite — look for the question word. Its shape never changes, in this ayah or anywhere else.",
      wordNotes: {
        "23-112-w1": { conceptLabel: "فعل", explanation: "قَالَ — “he said.”" },
        "23-112-w2": { conceptLabel: "اسم استفهام، مبني على السكون", explanation: "كَمْ — fixed, whatever its role." },
        "23-112-w3": { conceptLabel: "فعل", explanation: "لَبِثْتُمْ — “you remained.”" }
      }
    },

    practiceQuestions: [
      {
        id: "p1",
        type: "true-false",
        prompt: "Every مبني noun is built on the same vowel.",
        correct: false,
        explanation: "No — كَمْ is مبني على السكون while أَيْنَ is مبني على الفتح. Same category (اسم استفهام), different بناء."
      },
      {
        id: "p2",
        type: "multiple-choice",
        prompt: "What causes a معرب word's ending to change?",
        options: [
          { id: "a", labelAr: "دخول العوامل عليه" },
          { id: "b", labelAr: "طول الكلمة" },
          { id: "c", labelAr: "لا شيء — تغيّر عشوائي" }
        ],
        correctOptionId: "a",
        explanation: "Right — العوامل الداخلة عليه هي ما يغيّر آخر الكلمة المعربة."
      },
      {
        id: "p3",
        type: "true-false",
        prompt: "البناء means a word has no grammatical role in its sentence at all.",
        correct: false,
        explanation: "Not quite — you'll see in Lesson 8.3 that a مبني word can still occupy a position in the sentence. مبني describes its FORM, not whether it has a job."
      },
      {
        id: "p4",
        type: "multiple-choice",
        prompt: "Which of these is مبني?",
        options: [
          { id: "a", labelAr: "هذا" },
          { id: "b", labelAr: "زَيْدٌ" },
          { id: "c", labelAr: "الكتابُ" }
        ],
        correctOptionId: "a",
        explanation: "Right — هذا never changes shape, unlike زَيْدٌ or الكتابُ."
      },
      {
        id: "p5",
        type: "multiple-choice",
        prompt: "Your book's own list (p. 16) includes المُضمَرَات among the مبني categories. What does that word mean?",
        options: [
          { id: "a", labelAr: "الضمائر" },
          { id: "b", labelAr: "الأفعال" },
          { id: "c", labelAr: "الحروف" }
        ],
        correctOptionId: "a",
        explanation: "Right — المضمرات is another name for الضمائر, pronouns — the very first category coming up next."
      }
    ],

    quranChallenge: {
      surahAr: "الأنعام",
      surahEn: "Al-An'am",
      ayahRef: "6:22",
      arabic: "أَيْنَ شُرَكَاؤُكُمُ",
      translation: "Where are your [claimed] partners?",
      question: "أَيْنَ is your book's own example (p. 16) of a مبني noun built on a different vowel than كَمْ. Which one?",
      options: [
        { id: "a", labelAr: "مبني على الفتح" },
        { id: "b", labelAr: "مبني على السكون" },
        { id: "c", labelAr: "مبني على الضم" }
      ],
      correctOptionId: "a",
      explanation: "Right — أَيْنَ is مبني على الفتح (p. 16), while كَمْ is مبني على السكون. Same category (اسم استفهام), different بناء — a reminder that مبني isn't one fixed vowel."
    },

    summary: [
      "معرب: ending changes with العوامل. مبني: ending stays fixed. Everything up to now has been معرب; this whole Part is about مبني.",
      "Your book's own map (p. 16): المضمرات، أسماء الشرط، أسماء الاستفهام، أسماء الإشارة، أسماء الأفعال، الأسماء الموصولة.",
      "كَمْ (مبني على السكون) and أَيْنَ (مبني على الفتح) — the book's own examples — show البناء isn't one single vowel.",
      "Next: the first full category — الضمائر, starting with the ones you never even see."
    ],

    completion: {
      titleAr: "من المعرب إلى المبني",
      statement: "You know why this chapter exists. Time to meet the first category."
    }
  },

  "8.2": {
    id: "8.2",
    steps: ["intro", "concept", "example", "quran", "notice", "practice", "challenge", "summary", "completion"],

    sourceNote: {
      status: "book-cited",
      label: "Sourced from your reference book — page 55",
      detail: "The الضمير definition, the مستتر وجوبًا/جوازًا distinction, every example (اضرب، قُمْ، تقومُ، تضربُ، أقومُ، أضربُ، نقومُ، نضربُ، زيدٌ يقومُ، هندٌ تقومُ), and the “رفع فقط” rule are the book's own (p. 55). Connecting this rule to قُلْ (Lesson 1.5) and نَشْرَحْ (Lesson 7.4) is QURRA's own application of the book's stated rule to ayahs already met in this course — not the book's own citation for this point."
    },

    intro: {
      titleAr: "الضمير المستتر",
      titleEn: "The Hidden Pronoun",
      statement: "Meet the first — and biggest — category of مبني nouns: words standing in for a speaker, a listener, or someone spoken about. Some of them you'll never even see written."
    },

    objective: [
      "define الضمير and recognize that every single one is مبني",
      "distinguish مستتر وجوبًا from مستتر جوازًا, with the book's own trigger patterns",
      "state the rule that a مستتر pronoun is always رفع, never anything else"
    ],

    concept: {
      termAr: "الضمير",
      kind: "book-cited",
      definitionAr: "الضُّمْرُ وَالضَّمِيرُ: اسْمَانِ لِمَا وُضِعَ لِمُتَكَلِّمٍ كَـ«أَنَا»، أَوْ مُخَاطَبٍ كَـ«أَنْتَ»، أَوْ غَائِبٍ كَـ«هُوَ».",
      definitionEn: "Damir — a noun standing in for a speaker (أنا), a listener (أنتَ), or someone/something spoken about (هو).",
      lead: "Every single ضمير is مبني, without exception — the biggest مبني category in the language. Your book splits it into two kinds: مستتر (hidden — no visible letters) and بارز (visible). This lesson is the hidden one."
    },

    definitionBreakdown: [
      {
        termAr: "مستتر وجوبًا",
        termEn: "Hidden — obligatory",
        glossEn: "4 fixed patterns",
        explanation: "فعل أمر للواحد المذكر (اضرب، قُمْ → hidden أنتَ) · مضارع يبدأ بتاء الخطاب للمذكر (تقومُ، تضربُ → hidden أنتَ) · مضارع يبدأ بالهمزة (أقومُ، أضربُ → hidden أنا) · مضارع يبدأ بالنون (نقومُ، نضربُ → hidden نحن)."
      },
      {
        termAr: "مستتر جوازًا",
        termEn: "Hidden — optional",
        glossEn: "could be replaced by a noun",
        explanation: "زيدٌ يقومُ، هندٌ تقومُ — the hidden هو/هي COULD be swapped for an explicit noun without breaking the sentence. That recoverability is what makes it جوازًا, not وجوبًا."
      },
      {
        termAr: "رفع فقط",
        termEn: "Raf' only",
        glossEn: "never نصب or جر",
        explanation: "ولا يكون المستتر إلا ضمير رفع؛ إما فاعلًا، أو نائب الفاعل — your book's own rule. A hidden pronoun can NEVER be a hidden مفعول به or a hidden مضاف إليه."
      }
    ],

    example: {
      kind: "book-example",
      kindLabel: "From your reference book's own examples (p. 55)",
      arabic: "اضْرِبْ",
      transliteration: "Iḍrib",
      translation: "Hit! (command, to one male)",
      explanation: "There's no separate word for “you” anywhere here — yet the command is clearly directed at someone. فاعله ضمير مستتر وجوبًا تقديره: أنتَ. This is the book's own first pattern.",
      contrast: {
        arabic: "زَيْدٌ يَقُومُ",
        translation: "“Zayd is standing.”",
        explanation: "يقومُ's فاعل is also hidden — تقديره: هو — but this time جوازًا: you could say هو يقومُ or swap in any other noun, and the sentence still works."
      }
    },

    quranExample: {
      surahAr: "الإخلاص",
      surahEn: "Al-Ikhlas",
      ayahRef: "112:1",
      arabic: "قُلْ هُوَ اللَّهُ أَحَدٌ",
      translation: "Say, He is Allah, [who is] One.",
      notice: "You met this ayah back in Lesson 1.5, learning قُلْ is a فعل أمر. Now look closer: who is being commanded to say this? There's no separate word for “you” anywhere in قُلْ — yet the command is clearly directed at someone. That's a hidden ضمير.",
      wordNotes: {
        "112-1-w1": { conceptLabel: "فيه ضمير مستتر وجوبًا", explanation: "قُلْ — فعل أمر للواحد المذكر. فاعله ضمير مستتر وجوبًا تقديره: أنتَ — the book's own first pattern (p. 55)." },
        "112-1-w2": { conceptLabel: "اسم (ضمير بارز)", explanation: "هُوَ — a VISIBLE pronoun, not our focus here (you'll meet it properly in Lesson 8.4)." },
        "112-1-w3": { conceptLabel: "اسم", explanation: "اللَّهُ — a name." },
        "112-1-w4": { conceptLabel: "اسم", explanation: "أَحَدٌ — a description." }
      }
    },

    noticeInteraction: {
      type: "word-tap",
      ayahRef: "112:1",
      instanceId: "8.2-notice",
      promptContext: "Al-Ikhlas 112:1",
      question: "Tap the word that hides an unwritten ضمير فاعل within it.",
      correctWordId: "112-1-w1",
      correctFeedback: "Right — قُلْ. Its فاعل is a hidden أَنْتَ: مستتر وجوبًا, because it's فعل أمر للواحد المذكر — exactly the book's own first pattern (p. 55).",
      incorrectFeedback: "Not quite — look for the command word. Its فاعل isn't written anywhere, but it's clearly there.",
      wordNotes: {
        "112-1-w1": { conceptLabel: "ضمير مستتر وجوبًا: أنتَ", explanation: "قُلْ — فعل أمر للمذكر." },
        "112-1-w2": { conceptLabel: "ضمير بارز", explanation: "هُوَ — visible, not our focus here." },
        "112-1-w3": { conceptLabel: "اسم", explanation: "اللَّهُ." },
        "112-1-w4": { conceptLabel: "اسم", explanation: "أَحَدٌ." }
      }
    },

    practiceQuestions: [
      {
        id: "p1",
        type: "true-false",
        prompt: "A hidden ضمير مستتر can be a hidden مفعول به.",
        correct: false,
        explanation: "No — ولا يكون المستتر إلا ضمير رفع؛ إما فاعلًا، أو نائب الفاعل — your book's own rule (p. 55)."
      },
      {
        id: "p2",
        type: "multiple-choice",
        prompt: "اضْرِبْ (command to one male) hides which ضمير؟",
        options: [
          { id: "a", labelAr: "أنتَ" },
          { id: "b", labelAr: "أنا" },
          { id: "c", labelAr: "هو" }
        ],
        correctOptionId: "a",
        explanation: "Right — فعل الأمر للواحد المذكر يخفي أنتَ وجوبًا."
      },
      {
        id: "p3",
        type: "multiple-choice",
        prompt: "تَقُومُ (مضارع يبدأ بتاء الخطاب, no stated subject) — مستتر وجوبًا أم جوازًا؟",
        options: [
          { id: "a", labelAr: "وجوبًا" },
          { id: "b", labelAr: "جوازًا" }
        ],
        correctOptionId: "a",
        explanation: "Right — المضارع المبدوء بتاء خطاب الواحد المذكر من مواضع الاستتار الوجوبي الأربعة."
      },
      {
        id: "p4",
        type: "true-false",
        prompt: "زيدٌ يقومُ — the hidden هو here is مستتر جوازًا, because زيدٌ could be made explicit.",
        correct: true,
        explanation: "Right — recoverability by an explicit noun is exactly what makes a hidden pronoun جوازًا rather than وجوبًا."
      },
      {
        id: "p5",
        type: "multiple-choice",
        prompt: "Which pattern always hides أنا؟",
        options: [
          { id: "a", labelAr: "مضارع يبدأ بالهمزة" },
          { id: "b", labelAr: "فعل أمر للمذكر" },
          { id: "c", labelAr: "مضارع يبدأ بالنون" }
        ],
        correctOptionId: "a",
        explanation: "Right — أقومُ، أضربُ: مضارع مبدوء بالهمزة يخفي أنا وجوبًا."
      }
    ],

    quranChallenge: {
      surahAr: "الشرح",
      surahEn: "Ash-Sharh",
      ayahRef: "94:1",
      arabic: "أَلَمْ نَشْرَحْ لَكَ صَدْرَكَ",
      translation: "Did We not expand for you, [O Muhammad], your breast?",
      question: "نَشْرَحْ begins with the ن of مضارع. What's its hidden فاعل?",
      options: [
        { id: "a", labelAr: "نحن" },
        { id: "b", labelAr: "أنتم" },
        { id: "c", labelAr: "هم" }
      ],
      correctOptionId: "a",
      explanation: "Right — a مضارع beginning with ن always hides نحن as its فاعل: مستتر وجوبًا, your book's own rule (p. 55)."
    },

    summary: [
      "الضمير: a noun for a speaker (أنا), a listener (أنتَ), or someone spoken about (هو) — every single one مبني.",
      "مستتر: no visible letters at all. وجوبًا in 4 fixed patterns (أمر للمذكر، مضارع بالتاء، بالهمزة، بالنون) — جوازًا when a noun could stand in its place (زيدٌ يقومُ).",
      "ولا يكون المستتر إلا ضمير رفع — always فاعل أو نائب فاعل, never a hidden مفعول به.",
      "Next: the OTHER kind of ضمير — the one you CAN see, attached to the end of a word."
    ],

    completion: {
      titleAr: "الضمير المستتر",
      statement: "You can now spot the pronoun that was there all along, even with nothing written."
    }
  },

  "8.3": {
    id: "8.3",
    steps: ["intro", "concept", "example", "quran", "notice", "practice", "challenge", "summary", "completion"],

    sourceNote: {
      status: "book-cited",
      label: "Sourced from your reference book — page 56",
      detail: "The أقسام المتصل list (مرفوع/منصوب/مجرور) with its examples, the أكرمكم worked footnote (مبني على الضم في محل نصب مفعول به), and the general قاعدة footnote (“الضمير المتصل يأتي في محل رفع، وفي محل نصب، وفي محل جر... فإذا اتصل بالأفعال أعربته مفعولًا... وإذا اتصل بالأسماء أعربته مضافًا إليه”) are the book's own (p. 56). أعطيناك in the Qur'an step is QURRA's own application of this rule to a familiar ayah, not the book's own citation for this point."
    },

    intro: {
      titleAr: "الضمير المتصل",
      titleEn: "The Attached Pronoun",
      statement: "This ضمير you've definitely seen — attached to the end of a verb or noun. And it's about to teach you the single most important idea in this whole Part."
    },

    objective: [
      "identify the three positions a متصل pronoun can take: رفع, نصب, جر",
      "apply the central مبني + في محل pattern to a fully worked book example",
      "state the rule for what a متصل pronoun's محل becomes when it attaches to a فعل vs. an اسم"
    ],

    concept: {
      termAr: "مبني + في محل",
      kind: "book-cited",
      definitionAr: "الضَّمِيرُ المُتَّصِلُ يَأْتِي فِي مَحَلِّ رَفْعٍ، وَفِي مَحَلِّ نَصْبٍ، وَفِي مَحَلِّ جَرٍّ.",
      definitionEn: "The attached pronoun shows up in a raf' position, a nasb position, or a jarr position — depending on what it's attached to.",
      lead: "Here is the idea behind this entire Part, stated as plainly as your book ever states anything: a مبني word has a fixed FORM (مبني على كذا) and, separately, a POSITION (في محل كذا). The two are not the same question."
    },

    definitionBreakdown: [
      {
        termAr: "مبني على الضم",
        termEn: "the FORM",
        glossEn: "never changes",
        explanation: "Describes the word's fixed shape. أَكْرَمَكُمْ's كاف is مبني على الضم — and it stays that way no matter what job it's doing."
      },
      {
        termAr: "في محل نصب مفعول به",
        termEn: "the POSITION",
        glossEn: "depends on its role",
        explanation: "Describes what the word is DOING in the sentence. Here, the same كاف is acting as a مفعول به — a نصب-type role — even though its actual ending shows no نصب marker at all, because it's مبني, not معرب."
      }
    ],

    example: {
      kind: "book-example",
      kindLabel: "From your reference book's own worked example (p. 56)",
      arabic: "أَكْرَمَكُمْ",
      transliteration: "Akramakum",
      translation: "He honored you (pl.).",
      explanation: "الكاف here is a ضمير متصل. Your book's own breakdown: مبني على الضم (its fixed form) في محل نصب مفعول به (its job — the one honored). والميم علامة الجمع — just a marker for “plural,” not part of the pronoun's own case.",
      contrast: {
        arabic: "دَارُهُ",
        translation: "“his house”",
        explanation: "Attach a ضمير متصل to a NOUN instead of a فعل, and its محل changes: في محل جر مضاف إليه — your book's own general rule (p. 56): اتصالها بالأفعال → مفعول، واتصالها بالأسماء → مضاف إليه."
      }
    },

    quranExample: {
      surahAr: "الكوثر",
      surahEn: "Al-Kawthar",
      ayahRef: "108:1",
      arabic: "إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ",
      translation: "Indeed, We have granted you al-Kawthar.",
      notice: "أَعْطَيْنَاكَ carries not one but two attached pronouns at once: نَا (“We”) and كَ (“you”). Both مبني. Both still have a job — exactly like أَكْرَمَكُمْ."
    },

    noticeInteraction: {
      promptAr: "إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ",
      promptContext: "Al-Kawthar 108:1",
      question: "In أَعْطَيْنَاكَ, the attached كَ is the one being given something. What's its محل؟",
      options: [
        { id: "a", labelAr: "في محل نصب مفعول به" },
        { id: "b", labelAr: "في محل رفع فاعل" },
        { id: "c", labelAr: "في محل جر مضاف إليه" }
      ],
      correctOptionId: "a",
      correctFeedback: "Right — كَ is مبني (fixed in form) و في محل نصب مفعول به (the one receiving الكوثر). The exact same pattern as أَكْرَمَكُمْ.",
      incorrectFeedback: "Not quite — كَ is attached to a فعل here, receiving the action. That's a نصب-type role: مفعول به."
    },

    practiceQuestions: [
      {
        id: "p1",
        type: "true-false",
        prompt: "A ضمير متصل attached to a فعل is always في محل نصب مفعول به, with no exceptions.",
        correct: false,
        explanation: "No — it can also be في محل رفع (فاعل أو نائب فاعل), e.g. the تاء in ضَرَبْتُ. The book's own list (p. 56) includes a full مرفوع column."
      },
      {
        id: "p2",
        type: "multiple-choice",
        prompt: "Attach a ضمير متصل to a NOUN instead of a فعل, like دَارُهُ — what's its محل؟",
        options: [
          { id: "a", labelAr: "في محل جر مضاف إليه" },
          { id: "b", labelAr: "في محل نصب مفعول به" },
          { id: "c", labelAr: "في محل رفع فاعل" }
        ],
        correctOptionId: "a",
        explanation: "Right — اتصالها بالأسماء أعربته مضافًا إليه، your book's own rule (p. 56)."
      },
      {
        id: "p3",
        type: "true-false",
        prompt: "مبني describes the word's fixed FORM; في محل describes its grammatical POSITION — two separate questions.",
        correct: true,
        explanation: "Right — this is the central idea of this whole lesson, straight from your book's own worked example."
      },
      {
        id: "p4",
        type: "multiple-choice",
        prompt: "In أَكْرَمَكُمْ, the كاف is مبني على...",
        options: [
          { id: "a", labelAr: "الضم" },
          { id: "b", labelAr: "الفتح" },
          { id: "c", labelAr: "الكسر" }
        ],
        correctOptionId: "a",
        explanation: "Right — your book's own worked example (p. 56): مبني على الضم."
      },
      {
        id: "p5",
        type: "multiple-choice",
        prompt: "مَرَّ بِي — the attached ياء here, after a حرف جر, is في محل...",
        options: [
          { id: "a", labelAr: "جر" },
          { id: "b", labelAr: "نصب" },
          { id: "c", labelAr: "رفع" }
        ],
        correctOptionId: "a",
        explanation: "Right — a متصل pronoun after a حرف جر is في محل جر. مَرَّ بِي is your book's own example (p. 56)."
      }
    ],

    quranChallenge: {
      surahAr: "النساء",
      surahEn: "An-Nisa",
      ayahRef: "4:28",
      arabic: "يُرِيدُ اللَّهُ أَن يُخَفِّفَ عَنكُمْ",
      translation: "Allah wants to lighten for you [your difficulties].",
      question: "عَنكُمْ — the attached كُمْ here, after the حرف جر عَنْ, is في محل...",
      options: [
        { id: "a", labelAr: "جر" },
        { id: "b", labelAr: "نصب" },
        { id: "c", labelAr: "رفع" }
      ],
      correctOptionId: "a",
      explanation: "Right — attached after a حرف جر, كُمْ is في محل جر, exactly like الياء in مَرَّ بِي."
    },

    summary: [
      "الضمير المتصل يأتي في محل رفع، وفي محل نصب، وفي محل جر — your book's own rule (p. 56).",
      "أَكْرَمَكُمْ: الكاف مبني على الضم (الشكل) في محل نصب مفعول به (الوظيفة) — the two-part pattern behind every مبني word.",
      "اتصالها بالأفعال → مفعول به. اتصالها بالأسماء → مضاف إليه. اتصالها بحرف الجر → في محل جر.",
      "Next: the detached pronoun — not attached to anything, standing completely alone."
    ],

    completion: {
      titleAr: "الضمير المتصل",
      statement: "Mabni + fi mahall — you now have the pattern behind every lesson still to come in this Part."
    }
  },

  "8.4": {
    id: "8.4",
    steps: ["intro", "concept", "example", "quran", "notice", "practice", "challenge", "summary", "completion"],

    sourceNote: {
      status: "book-cited",
      label: "Sourced from your reference book — page 57",
      detail: "The full مرفوع (12 words) and منصوب (12 words) lists, the “وليس في المنفصل مجرورًا” rule, and all four worked Qur'an examples (أَنَا رَبُّكُمُ، نَحْنُ الْوَارِثُونَ، أَنتَ مَوْلَانَا، إِيَّاكُمْ كَانُوا يَعْبُدُونَ) with their full إعراب breakdowns are the book's own (p. 57). The إِيَّاكُمْ كَانُوا يَعْبُدُونَ citation was re-verified word-for-word against the printed page after an initial QURRA transcription omitted كَانُوا — the book's own printed citation is correct in full."
    },

    intro: {
      titleAr: "الضمير المنفصل",
      titleEn: "The Detached Pronoun",
      statement: "Not attached to anything — these pronouns stand completely alone. Your book gives you four fully worked Qur'anic examples to prove every claim about them."
    },

    objective: [
      "list the 12 مرفوع and 12 منصوب detached pronouns and what each set can be",
      "state why the detached pronoun has no جر column at all",
      "work through a full مبني + في محل breakdown of a Qur'anic detached pronoun"
    ],

    concept: {
      termAr: "الضمير المنفصل",
      kind: "book-cited",
      definitionAr: "يَنْقَسِمُ المُنْفَصِلُ إِلَى مَرْفُوعٍ وَمَنْصُوبٍ.",
      definitionEn: "The detached pronoun divides into two: 12 words reserved for raf', and 12 reserved for nasb — and none at all for jarr.",
      lead: "24 words total, split cleanly in half. Each half has exactly one job."
    },

    definitionBreakdown: [
      {
        termAr: "المرفوع — 12 كلمة",
        termEn: "Raf' set",
        glossEn: "always مبتدأ when opening a sentence",
        explanation: "أنا، نحن، أنتَ، أنتِ، أنتما، أنتم، أنتنَّ، هو، هي، هما، هم، هنَّ — your book's own rule: whichever one opens a sentence is its مبتدأ."
      },
      {
        termAr: "المنصوب — 12 كلمة",
        termEn: "Nasb set",
        glossEn: "always مفعول به",
        explanation: "إيّايَ، إيّانا، إيّاكَ، إيّاكِ، إيّاكما، إيّاكم، إيّاكنّ، إيّاهُ، إيّاها، إيّاهما، إيّاهم، إيّاهنّ — your book's own rule: these can ONLY ever be a مفعول به."
      },
      {
        termAr: "ليس في المنفصل مجرورًا",
        termEn: "No jarr column",
        glossEn: "24 words, zero جر",
        explanation: "Your book states this directly. A detached pronoun is never مجرور — Arabic uses the متصل kind instead whenever جر is needed."
      }
    ],

    example: {
      kind: "book-example",
      kindLabel: "From your reference book (p. 57)",
      arabic: "أَنَا رَبُّكُمُ",
      transliteration: "Anā rabbukum",
      translation: "I am your Lord.",
      explanation: "أَنَا: a ضمير منفصل مرفوع. Opens the sentence, so — your book's own rule — it's a مبتدأ. رَبُّكُمُ, right after it, is its خبر.",
      contrast: {
        arabic: "إِيَّاكَ نَعْبُدُ",
        translation: "“You alone we worship.”",
        explanation: "إِيَّاكَ is the منصوب counterpart, and it can ONLY ever be a مفعول به, never a مبتدأ — compare: أنا (مرفوع، مبتدأ) vs. إيّاكَ (منصوب، مفعول به)."
      }
    },

    quranExample: {
      surahAr: "البقرة",
      surahEn: "Al-Baqarah",
      ayahRef: "2:286",
      arabic: "أَنتَ مَوْلَانَا",
      translation: "You are our Protector.",
      notice: "أَنْتَ: a ضمير منفصل مرفوع — مبني على الفتح، في محل رفع مبتدأ. مَوْلَانَا is its خبر. Your book even notes: the ت here is just a حرف خطاب (marking “you, male”) — it has no محل of its own at all."
    },

    noticeInteraction: {
      promptAr: "أَنتَ مَوْلَانَا",
      promptContext: "Al-Baqarah 2:286",
      question: "أَنْتَ opens this expression. What's its محل؟",
      options: [
        { id: "a", labelAr: "في محل رفع مبتدأ" },
        { id: "b", labelAr: "في محل نصب مفعول به" },
        { id: "c", labelAr: "في محل جر مضاف إليه" }
      ],
      correctOptionId: "a",
      correctFeedback: "Right — your book's own rule: any of the 12 مرفوع detached pronouns, when it opens a sentence, is a مبتدأ. أَنْتَ: مبني على الفتح في محل رفع مبتدأ.",
      incorrectFeedback: "Not quite — أَنْتَ is from the مرفوع set, and it opens this expression. That makes it a مبتدأ."
    },

    practiceQuestions: [
      {
        id: "p1",
        type: "true-false",
        prompt: "The detached pronoun has a جر column, just like the متصل kind.",
        correct: false,
        explanation: "No — وليس في المنفصل مجرورًا، your book's own words (p. 57). Only متصل pronouns can be في محل جر."
      },
      {
        id: "p2",
        type: "multiple-choice",
        prompt: "How many مرفوع detached pronouns are there?",
        options: [
          { id: "a", labelAr: "اثنا عشر" },
          { id: "b", labelAr: "عشرة" },
          { id: "c", labelAr: "أربعة عشر" }
        ],
        correctOptionId: "a",
        explanation: "Right — twelve, your book's own list (p. 57)."
      },
      {
        id: "p3",
        type: "true-false",
        prompt: "إيّاكَ can be a مبتدأ, just like أنتَ.",
        correct: false,
        explanation: "No — إيّاكَ belongs to the منصوب set. Your book's rule: it can only ever be مفعول به."
      },
      {
        id: "p4",
        type: "multiple-choice",
        prompt: "وَنَحْنُ الْوَارِثُونَ — نَحْنُ's محل؟",
        options: [
          { id: "a", labelAr: "في محل رفع مبتدأ" },
          { id: "b", labelAr: "في محل نصب مفعول به" },
          { id: "c", labelAr: "في محل جر" }
        ],
        correctOptionId: "a",
        explanation: "Right — your book's own worked example (p. 57): نحن: ضمير منفصل مبني على الضم في محل رفع مبتدأ."
      },
      {
        id: "p5",
        type: "multiple-choice",
        prompt: "إِيَّاكُمْ كَانُوا يَعْبُدُونَ — إيّاكم's محل؟",
        options: [
          { id: "a", labelAr: "في محل نصب مفعول به" },
          { id: "b", labelAr: "في محل رفع مبتدأ" },
          { id: "c", labelAr: "في محل رفع فاعل" }
        ],
        correctOptionId: "a",
        explanation: "Right — the منصوب set can only ever be مفعول به, wherever it appears in the sentence."
      }
    ],

    quranChallenge: {
      surahAr: "سبأ",
      surahEn: "Saba'",
      ayahRef: "34:40",
      arabic: "إِيَّاكُمْ كَانُوا يَعْبُدُونَ",
      translation: "Was it you they used to worship?",
      question: "إِيَّاكُمْ — which set does it belong to?",
      options: [
        { id: "a", labelAr: "المنصوب" },
        { id: "b", labelAr: "المرفوع" }
      ],
      correctOptionId: "a",
      explanation: "Right — إيّا + ضمير is always from the 12-word منصوب set, and always a مفعول به, never a subject."
    },

    summary: [
      "12 مرفوع detached pronouns (أنا...هنَّ) — always مبتدأ when they open a sentence. 12 منصوب (إيّايَ...إيّاهنّ) — always مفعول به. No جر column at all.",
      "أنتَ مولانا: أنتَ مبني على الفتح في محل رفع مبتدأ — a full worked example from your book (p. 57).",
      "نَحْنُ الْوَارِثُونَ and إِيَّاكُمْ كَانُوا يَعْبُدُونَ confirm the same pattern on two more Qur'anic pronouns.",
      "Next: the first category outside الضمائر — أسماء الإشارة, the “pointing” words."
    ],

    completion: {
      titleAr: "الضمير المنفصل",
      statement: "24 detached pronouns, two fixed jobs. You know every one."
    }
  },

  "8.5": {
    id: "8.5",
    steps: ["intro", "concept", "example", "quran", "notice", "practice", "challenge", "summary", "completion"],

    sourceNote: {
      status: "book-cited",
      label: "Sourced from your reference book — pages 61–62",
      detail: "The اسم الإشارة definition, the core forms (ذا، ذي/ذه/تي/ته، ذان/ذين، تان/تين، أولاء), the ها التنبيه / كاف الخطاب / لام البعد additions, the مكان expressions (هنا، هنالك), and the ثَمَّ worked footnote (مبني على الفتح في محل نصب ظرف مكان) are the book's own (pp. 61–62). Per your note on the attached images, the dialectal المد/القصر variant of أولاء and the full case/number paradigm are named only lightly here, not drilled — matching how the book itself treats them as a passing remark, not a table to memorize. ذَلِكَ الْكِتَابُ (2:2) is a QURRA supplementary example, clearly labeled as such, illustrating هذا's close relative ذلك."
    },

    intro: {
      titleAr: "اسم الإشارة",
      titleEn: "The Demonstrative Noun",
      statement: "Meet the “pointing” word — your book's simplest definition yet, and a category you already use every day."
    },

    objective: [
      "define اسم الإشارة and recognize its core forms for singular, dual, and plural",
      "recognize ها التنبيه and لام البعد as the near/far markers attached to these words",
      "work through a full مبني + في محل breakdown of a Qur'anic demonstrative"
    ],

    concept: {
      termAr: "اسم الإشارة",
      kind: "book-cited",
      definitionAr: "اسْمُ الْإِشَارَةِ: مَا وُضِعَ لِمُشَارٍ إِلَيْهِ.",
      definitionEn: "A demonstrative noun: a word set in place to point at something.",
      lead: "The simplest definition in this whole Part — and every one of its forms is مبني."
    },

    definitionBreakdown: [
      {
        termAr: "المفرد",
        termEn: "Singular",
        glossEn: "ذا (مذكر) · ذي/ذه/تي/ته (مؤنث)",
        explanation: "هذا and هذه are simply these forms with ها التنبيه attached — the everyday shapes you already recognize."
      },
      {
        termAr: "المثنى",
        termEn: "Dual",
        glossEn: "ذان/ذين (مذكر) · تان/تين (مؤنث)",
        explanation: "ذان رفعًا، ذَيْن نصبًا وجرًّا (مذكر) — تان رفعًا، تَيْن نصبًا وجرًّا (مؤنث)."
      },
      {
        termAr: "الجمع",
        termEn: "Plural",
        glossEn: "أولاء",
        explanation: "هؤلاء. Your book notes a dialectal length variant (بالمد عند الحجازيين، بالقصر عند التميميين) — named here, not drilled."
      },
      {
        termAr: "ها + كاف + لام",
        termEn: "Near / far markers",
        glossEn: "ها التنبيه، كاف الخطاب، لام البعد",
        explanation: "هَذَا (near, with ها) vs. ذَاكَ / ذَلِكَ (far, with كاف and sometimes لام) — your book's own additions (p. 62). للمكان: هُنَا/هَاهُنَا (قريب) مقابل هُنَالِكَ (بعيد)."
      }
    ],

    example: {
      kind: "book-example",
      kindLabel: "From your reference book's own worked example (p. 62)",
      arabic: "وَإِذَا رَأَيْتَ ثَمَّ",
      translation: "And when you look there...",
      explanation: "ثَمَّ here is اسم إشارة — pointing to a place, “there.” Your book's own breakdown: مبني على الفتح (its fixed form) في محل نصب ظرف مكان (its job — a مكان-type نصب role, linked to رأيت). The same two-part pattern as every مبني word: form + position.",
      contrast: {
        arabic: "هذا",
        translation: "“this”",
        explanation: "The everyday demonstrative you already know, pointing at something near — carrying its own محل depending on its role in whichever sentence it's in."
      }
    },

    quranExample: {
      surahAr: "الإنسان",
      surahEn: "Al-Insan",
      ayahRef: "76:20",
      arabic: "وَإِذَا رَأَيْتَ ثَمَّ",
      translation: "And when you look there...",
      notice: "ثَمَّ is a demonstrative pointing to PLACE, not to a thing — “there.” Watch its محل: it's linked to رَأَيْتَ as a ظرف مكان, in محل نصب, even though — being مبني — its own ending never shows a نصب marker.",
      wordNotes: {
        "76-20-w1": { conceptLabel: "", explanation: "وَإِذَا — “and when.”" },
        "76-20-w2": { conceptLabel: "فعل", explanation: "رَأَيْتَ — “you saw / looked.”" },
        "76-20-w3": { conceptLabel: "اسم إشارة، مبني على الفتح في محل نصب ظرف مكان", explanation: "ثَمَّ — your book's own worked example (p. 62): pointing to place, linked to رأيت." }
      }
    },

    noticeInteraction: {
      type: "word-tap",
      ayahRef: "76:20",
      instanceId: "8.5-notice",
      promptContext: "Al-Insan 76:20",
      question: "Tap the اسم إشارة in this ayah — your book's own example of مبني على الفتح في محل نصب ظرف مكان.",
      correctWordId: "76-20-w3",
      correctFeedback: "Right — ثَمَّ. Your book's own breakdown (p. 62): مبني على الفتح في محل نصب ظرف مكان متعلق بـ”رأيت”.",
      incorrectFeedback: "Not quite — look for the word that points to a PLACE, not an action.",
      wordNotes: {
        "76-20-w1": { conceptLabel: "", explanation: "وَإِذَا." },
        "76-20-w2": { conceptLabel: "فعل", explanation: "رَأَيْتَ." },
        "76-20-w3": { conceptLabel: "اسم إشارة، مبني على الفتح في محل نصب ظرف مكان", explanation: "ثَمَّ." }
      }
    },

    practiceQuestions: [
      {
        id: "p1",
        type: "true-false",
        prompt: "اسم الإشارة is defined by your book as “a word set to point at something.”",
        correct: true,
        explanation: "Right — ما وُضِع لمشار إليه, word for word (p. 61)."
      },
      {
        id: "p2",
        type: "multiple-choice",
        prompt: "هؤلاء points to...",
        options: [
          { id: "a", labelAr: "الجمع" },
          { id: "b", labelAr: "المثنى" },
          { id: "c", labelAr: "المفرد" }
        ],
        correctOptionId: "a",
        explanation: "Right — أولاء (هؤلاء) is the book's own plural form."
      },
      {
        id: "p3",
        type: "true-false",
        prompt: "ذَلِكَ points to something farther away than هَذَا.",
        correct: true,
        explanation: "Right — لام البعد (and كاف الخطاب) mark distance; هَذَا (near) vs. ذَلِكَ (far) — your book's own addition (p. 62)."
      },
      {
        id: "p4",
        type: "multiple-choice",
        prompt: "ثَمَّ in وَإِذَا رَأَيْتَ ثَمَّ is مبني على...",
        options: [
          { id: "a", labelAr: "الفتح" },
          { id: "b", labelAr: "السكون" },
          { id: "c", labelAr: "الضم" }
        ],
        correctOptionId: "a",
        explanation: "Right — your book's own worked example (p. 62): مبني على الفتح."
      },
      {
        id: "p5",
        type: "multiple-choice",
        prompt: "هُنَا points to a place that is...",
        options: [
          { id: "a", labelAr: "قريب" },
          { id: "b", labelAr: "بعيد" }
        ],
        correctOptionId: "a",
        explanation: "Right — هُنَا / هَاهُنَا for near, هُنَالِكَ for far — your book's own pair (p. 62)."
      }
    ],

    quranChallenge: {
      surahAr: "البقرة",
      surahEn: "Al-Baqarah",
      ayahRef: "2:2",
      arabic: "ذَلِكَ الْكِتَابُ لَا رَيْبَ فِيهِ",
      translation: "This is the Book about which there is no doubt.",
      question: "ذَلِكَ opens this ayah. What's its محل؟",
      options: [
        { id: "a", labelAr: "في محل رفع مبتدأ" },
        { id: "b", labelAr: "في محل نصب مفعول به" },
        { id: "c", labelAr: "في محل جر مضاف إليه" }
      ],
      correctOptionId: "a",
      explanation: "Right — like any اسم إشارة opening a sentence, ذَلِكَ is مبني في محل رفع مبتدأ. الكِتَابُ is its خبر."
    },

    summary: [
      "اسم الإشارة: ما وُضِع لمشار إليه — every form of it مبني, from هذا to هؤلاء.",
      "ها التنبيه marks “near” (هَذَا), كاف الخطاب + لام البعد mark “far” (ذَلِكَ) — your book's own additions.",
      "ثَمَّ: مبني على الفتح في محل نصب ظرف مكان — a complete worked مبني + في محل example for place, not just for people or things.",
      "Next: a category that needs something extra to be complete — الاسم الموصول."
    ],

    completion: {
      titleAr: "اسم الإشارة",
      statement: "You can now point, place, and parse — near or far, singular or plural."
    }
  },

  "8.6": {
    id: "8.6",
    steps: ["intro", "concept", "example", "quran", "notice", "practice", "challenge", "summary", "completion"],

    sourceNote: {
      status: "book-cited",
      label: "Sourced from your reference book — pages 63–65",
      detail: "The اسم موصول definition (“ما افتقر إلى صلة وعائد”), the full الخاص list (الذي، التي، اللذان/اللذين، اللتان/اللتين، الذين، اللاتي), and the fully worked footnote examples for التي (المجادلة:1) and اللذان (النساء:16) are the book's own (pp. 63–64). The الذين example (الحشر:10) and its worked footnote are also the book's own (p. 65)."
    },

    intro: {
      titleAr: "الاسم الموصول: الخاص",
      titleEn: "The Relative Noun — Specific Forms",
      statement: "Eight words, each locked to one exact gender and number — and none of them can stand alone."
    },

    objective: [
      "define اسم موصول and explain why it always needs a صلة and an عائد",
      "list the eight الخاص relative pronouns and the gender/number each is locked to",
      "recognize that اللذان/اللذين's ا/ي alternation is البناء, not إعراب, despite looking like the مثنى pattern from Lesson 4"
    ],

    concept: {
      termAr: "الاسم الموصول",
      kind: "book-cited",
      definitionAr: "الِاسْمُ المَوْصُولُ: مَا افْتَقَرَ إِلَى صِلَةٍ وَعَائِدٍ.",
      definitionEn: "A relative noun: one that needs a sila (a following clause) and an 'a'id (a link back to it) to complete its meaning.",
      lead: "الموصول is ضربان — خاص (today) ومشترك (next lesson). الخاص means: each word here is locked to exactly one gender and number."
    },

    definitionBreakdown: [
      {
        termAr: "المفرد",
        termEn: "Singular",
        glossEn: "الذي (مذكر) · التي (مؤنث)",
        explanation: "The two most common forms — “he/that who” and “she/that which.”"
      },
      {
        termAr: "اللذان / اللذين",
        termEn: "Dual — a mabni word that LOOKS mu'rab",
        glossEn: "ا للرفع، ي للنصب والجر",
        explanation: "This alternation looks exactly like the مثنى pattern from Lesson 4 (where ا/ي marks إعراب). But a موصول is مبني — this is simply how its fixed shape is built, not a changing case marker. Your book's own worked example confirms it directly: اللذان: اسم موصول مبني على الألف في محل رفع مبتدأ (النساء:16)."
      },
      {
        termAr: "الجمع المذكر",
        termEn: "Masculine plural",
        glossEn: "الذين",
        explanation: "By far the most common plural form — your book's own worked example (الحشر:10) uses it."
      },
      {
        termAr: "الجمع المؤنث",
        termEn: "Feminine plural",
        glossEn: "اللاتي",
        explanation: "Also said اللواتي, with its ياء sometimes dropped — your book names these lightly, without drilling every variant."
      }
    ],

    example: {
      kind: "book-example",
      kindLabel: "From your reference book's own worked example (p. 63–64)",
      arabic: "قَوْلَ الَّتِي تُجَادِلُكَ",
      transliteration: "Qawla allatī tujādiluka",
      translation: "the speech of she who pleads with you...",
      explanation: "التي: اسم موصول — مبني على السكون، في محل جر مضاف إليه. But a موصول is never complete alone: تُجَادِلُكَ right after it is its صلة (the clause completing its meaning), and the hidden فاعل inside تُجَادِلُ — مستتر جوازًا تقديره: هي, exactly like you learned in Lesson 8.2 — is its عائد, linking the صلة back to التي.",
      contrast: {
        arabic: "الذي",
        translation: "“he who” (مفرد مذكر)",
        explanation: "The masculine-singular counterpart to التي — same rule: مبني, and needing its own صلة and عائد to be complete."
      }
    },

    quranExample: {
      surahAr: "المجادلة",
      surahEn: "Al-Mujadilah",
      ayahRef: "58:1",
      arabic: "قَدْ سَمِعَ اللَّهُ قَوْلَ الَّتِي تُجَادِلُكَ فِي زَوْجِهَا",
      translation: "Allah has heard the speech of the one who pleads with you concerning her husband.",
      notice: "Watch الَّتِي: it's مبني على السكون, في محل جر مضاف إليه. But notice what comes right after — تُجَادِلُكَ — is NOT optional. A موصول without a صلة is incomplete; this is what “افتقر إلى صلة وعائد” means in practice.",
      wordNotes: {
        "58-1-w1": { conceptLabel: "", explanation: "قَدْ." },
        "58-1-w2": { conceptLabel: "فعل", explanation: "سَمِعَ." },
        "58-1-w3": { conceptLabel: "اسم", explanation: "اللَّهُ — فاعل." },
        "58-1-w4": { conceptLabel: "اسم، مضاف", explanation: "قَوْلَ — مفعول به، مضاف." },
        "58-1-w5": { conceptLabel: "اسم موصول، مبني على السكون في محل جر مضاف إليه", explanation: "الَّتِي — your book's own worked example (p. 63–64)." },
        "58-1-w6": { conceptLabel: "صلة الموصول", explanation: "تُجَادِلُكَ — فعل وفاعل مستتر (العائد) ومفعول؛ لا محل لها من الإعراب." },
        "58-1-w7": { conceptLabel: "", explanation: "فِي." },
        "58-1-w8": { conceptLabel: "اسم، مضاف إليه", explanation: "زَوْجِهَا." }
      }
    },

    noticeInteraction: {
      type: "word-tap",
      ayahRef: "58:1",
      instanceId: "8.6-notice",
      promptContext: "Al-Mujadilah 58:1",
      question: "Tap the اسم موصول in this ayah — your book's own worked example of مبني على السكون في محل جر مضاف إليه.",
      correctWordId: "58-1-w5",
      correctFeedback: "Right — الَّتِي. Its صلة (تُجَادِلُكَ) and عائد (the hidden هي inside تُجَادِلُ) complete it, exactly as your book's own definition requires.",
      incorrectFeedback: "Not quite — look for the word meaning “she who” or “the one who.”",
      wordNotes: {
        "58-1-w1": { conceptLabel: "", explanation: "قَدْ." },
        "58-1-w2": { conceptLabel: "فعل", explanation: "سَمِعَ." },
        "58-1-w3": { conceptLabel: "اسم", explanation: "اللَّهُ." },
        "58-1-w4": { conceptLabel: "اسم، مضاف", explanation: "قَوْلَ." },
        "58-1-w5": { conceptLabel: "اسم موصول، مبني على السكون في محل جر مضاف إليه", explanation: "الَّتِي." },
        "58-1-w6": { conceptLabel: "صلة الموصول", explanation: "تُجَادِلُكَ." },
        "58-1-w7": { conceptLabel: "", explanation: "فِي." },
        "58-1-w8": { conceptLabel: "اسم، مضاف إليه", explanation: "زَوْجِهَا." }
      }
    },

    practiceQuestions: [
      {
        id: "p1",
        type: "true-false",
        prompt: "An اسم موصول can stand alone without a صلة.",
        correct: false,
        explanation: "No — ما افتقر إلى صلة وعائد: your book's own definition. It NEEDS both to be complete."
      },
      {
        id: "p2",
        type: "multiple-choice",
        prompt: "اللذان is the موصول for...",
        options: [
          { id: "a", labelAr: "مثنى مذكر مرفوع" },
          { id: "b", labelAr: "مفرد مذكر" },
          { id: "c", labelAr: "جمع مذكر" }
        ],
        correctOptionId: "a",
        explanation: "Right — اللذان رفعًا، اللذين نصبًا وجرًّا، للمثنى المذكر."
      },
      {
        id: "p3",
        type: "true-false",
        prompt: "اللذان ⟷ اللذين changing shape between ا and ي is the SAME kind of change as معرب المثنى in Lesson 4.",
        correct: false,
        explanation: "No — this is important: اللذان/اللذين is still مبني. The ا/ي swap is simply how its fixed shape is built, not a changing إعراب marker, even though it looks identical to the مثنى pattern on the surface."
      },
      {
        id: "p4",
        type: "multiple-choice",
        prompt: "In قَوْلَ الَّتِي تُجَادِلُكَ, what is تُجَادِلُكَ called?",
        options: [
          { id: "a", labelAr: "صلة الموصول" },
          { id: "b", labelAr: "عائد الموصول" },
          { id: "c", labelAr: "خبر الموصول" }
        ],
        correctOptionId: "a",
        explanation: "Right — the completing clause after a موصول is its صلة."
      },
      {
        id: "p5",
        type: "multiple-choice",
        prompt: "اللاتي is the موصول for...",
        options: [
          { id: "a", labelAr: "جمع مؤنث" },
          { id: "b", labelAr: "جمع مذكر" },
          { id: "c", labelAr: "مفردة مؤنثة" }
        ],
        correctOptionId: "a",
        explanation: "Right — اللاتي (و اللواتي) for feminine plural — your book's own form (p. 64)."
      }
    ],

    quranChallenge: {
      surahAr: "الحشر",
      surahEn: "Al-Hashr",
      ayahRef: "59:10",
      arabic: "وَالَّذِينَ جَآءُو مِن بَعْدِهِمْ",
      translation: "And those who came after them...",
      question: "الَّذِينَ — which group is it for؟",
      options: [
        { id: "a", labelAr: "جمع مذكر" },
        { id: "b", labelAr: "مثنى مذكر" },
        { id: "c", labelAr: "جمع مؤنث" }
      ],
      correctOptionId: "a",
      explanation: "Right — your book's own worked example (p. 65): اسم موصول لجمع المذكر."
    },

    summary: [
      "اسم موصول: مبني, and never complete alone — it always needs a صلة (completing clause) and an عائد (a link back, often a hidden pronoun).",
      "الخاص: 8 words, each locked to a gender/number — الذي، التي، اللذان/اللذين، اللتان/اللتين، الذين، اللاتي.",
      "اللذان ⟷ اللذين LOOKS like مثنى إعراب (Lesson 4) but isn't — it's مبني; the ا/ي swap is just its fixed shape, your book's own worked example confirms this.",
      "Next: six more موصول words — this time, ones that work for everyone, singular, dual, or plural, without changing shape at all."
    ],

    completion: {
      titleAr: "الاسم الموصول: الخاص",
      statement: "Eight words, eight exact fits — and you know why none of them can stand alone."
    }
  },

  "8.7": {
    id: "8.7",
    steps: ["intro", "concept", "example", "quran", "notice", "practice", "challenge", "summary", "completion"],

    sourceNote: {
      status: "book-cited",
      label: "Sourced from your reference book — pages 65–68",
      detail: "The المشترك list (مَنْ، مَا، أَيّ، أَلْ، ذُو، ذَا) and the “من غير تغيّر” rule are the book's own (p. 65). The مَنْ/مَا pairing (including the reversed-usage note) is the book's own (p. 66). The ما خلقتُ بيدي worked example and the أل الموصولة rule are the book's own (p. 67); ذو/ذا الموصولتان as dialectal/narrow forms are the book's own (p. 68), named here without drilling. IMPORTANT CITATION CORRECTION: your book's own page 67 prints [الأحزاب:٣٥] for ﴿إِنَّ الْمُصَّدِّقِينَ وَالْمُصَّدِّقَاتِ﴾ — re-checked three times against the original page image to rule out a misreading. Independent verification shows Al-Ahzab 33:35 is a different, well-known ayah containing no المصدقين/المصّدّقين at all, while Al-Hadid 57:18 is an exact character-for-character match for this quoted text (including the shadda). This looks like a printing/reference slip in the source; this lesson cites it as الحديد:18, with this correction disclosed rather than silently carried over."
    },

    intro: {
      titleAr: "الاسم الموصول: المشترك",
      titleEn: "The Relative Noun — Shared Forms",
      statement: "Six more relative pronouns — but these never change shape for gender or number at all. One of them is even hiding inside a letter you already know well: أل."
    },

    objective: [
      "list the six المشترك relative pronouns and the “no shape change” rule behind them",
      "distinguish مَنْ (for العاقل) from مَا (for غير العاقل), including when the book notes an exception",
      "recognize أل as a موصول when it enters on an اسم فاعل or اسم مفعول"
    ],

    concept: {
      termAr: "المشترك",
      kind: "book-cited",
      definitionAr: "وَالمُشْتَرَكُ: سِتَّةُ أَلْفَاظٍ: مَنْ، وَمَا، وَأَيٌّ، وَأَلْ، وَذُو، وَذَا، وَهَذِهِ السِّتَّةُ تُطْلَقُ عَلَى المُفْرَدِ وَالمُثَنَّى وَالمَجْمُوعِ المُذَكَّرِ وَالمُؤَنَّثِ مِنْ ذَلِكَ كُلِّهِ مِنْ غَيْرِ تَغَيُّرٍ.",
      definitionEn: "Six words — man, ma, ayy, al, dhu, dha — each used for singular, dual, or plural, masculine or feminine, without changing shape at all.",
      lead: "Where yesterday's eight الخاص words were each locked to one slot, these six work everywhere, unchanged."
    },

    definitionBreakdown: [
      {
        termAr: "مَنْ",
        termEn: "Man",
        glossEn: "عادة للعاقل",
        explanation: "“He/she/those who” — for rational beings, normally. Your book notes it CAN flip to غير العاقل in a specific context (النور:45) — a secondary usage, mentioned only in passing here."
      },
      {
        termAr: "مَا",
        termEn: "Ma",
        glossEn: "عادة لغير العاقل",
        explanation: "“That which” — for non-rational things, normally. Your book notes it CAN flip to العاقل too (ص:75, below) — again a secondary usage, not the default pairing."
      },
      {
        termAr: "أَلْ الموصولة",
        termEn: "Al as a relative",
        glossEn: "a DIFFERENT أل from التعريف",
        explanation: "أَمَّا «أَلْ» فَإِنَّهَا تَكُونُ مَوْصُولًا اسْمِيًّا إِذَا دَخَلَتْ عَلَى اسْمِ الفَاعِلِ أَوِ اسْمِ المَفْعُولِ — your book's own rule (p. 67). الضَّارِب = الَّذِي ضَرَبَ. Easy to mistake for ordinary أل التعريف; context (sitting on an اسم فاعل/مفعول, meaning “the one who...”) is what gives it away."
      },
      {
        termAr: "ذُو / ذَا",
        termEn: "Dhu / Dha",
        glossEn: "named, not drilled",
        explanation: "ذو الموصولة: خاصة بلغة طيّئ — explicitly dialectal, your book's own note (p. 68). ذَا الموصولة has its own narrow condition. Both are real, but rare — named here for completeness, not for memorization."
      }
    ],

    example: {
      kind: "book-example",
      kindLabel: "From your reference book's own worked example (p. 67)",
      arabic: "لِمَا خَلَقْتُ بِيَدَيَّ",
      transliteration: "Limā khalaqtu biyadayya",
      translation: "...to that which I created with My hands?",
      explanation: "ما هنا اسم موصول بمعنى «الذي» — في محل جر باللام. خلقتُ (فعل وفاعل) هي صلة الموصول, والعائد محذوف (تقديره: خلقتُه). The same two ingredients as every موصول — a صلة and an عائد — even when, here, the عائد is dropped and only understood.",
      contrast: {
        arabic: "مَنْ",
        translation: "“he/she/those who” (موصول، للعاقل عادة)",
        explanation: "The counterpart normally used for rational beings — same مشترك behavior: no shape change for singular, dual, or plural."
      }
    },

    quranExample: {
      surahAr: "ص",
      surahEn: "Sad",
      ayahRef: "38:75",
      arabic: "مَا مَنَعَكَ أَن تَسْجُدَ لِمَا خَلَقْتُ بِيَدَيَّ",
      translation: "What prevented you from prostrating to that which I created with My hands?",
      notice: "This ayah actually has TWO ما's — but only one is اسم موصول. The first (مَا مَنَعَكَ) is اسم استفهام — “what prevented you?” The second, inside لِمَا, is the موصول — “that which.” Same word, two different jobs — context decides, exactly like you saw with مَنْ.",
      wordNotes: {
        "38-75-w1": { conceptLabel: "اسم استفهام", explanation: "مَا — “what?” Interrogative, not موصول, here." },
        "38-75-w2": { conceptLabel: "فعل", explanation: "مَنَعَكَ — “prevented you.”" },
        "38-75-w3": { conceptLabel: "", explanation: "أَن." },
        "38-75-w4": { conceptLabel: "فعل", explanation: "تَسْجُدَ." },
        "38-75-w5": { conceptLabel: "اسم موصول بمعنى الذي، في محل جر باللام", explanation: "لِمَا — your book's own worked example (p. 67). THIS ما is the موصول." },
        "38-75-w6": { conceptLabel: "فعل وفاعل، صلة الموصول", explanation: "خَلَقْتُ." },
        "38-75-w7": { conceptLabel: "", explanation: "بِيَدَيَّ." }
      }
    },

    noticeInteraction: {
      type: "word-tap",
      ayahRef: "38:75",
      instanceId: "8.7-notice",
      promptContext: "Sad 38:75",
      question: "This ayah has two ما's. Tap the word containing the موصول ما — not the interrogative one.",
      correctWordId: "38-75-w5",
      correctFeedback: "Right — لِمَا. The FIRST ما (مَا مَنَعَكَ) is استفهامية. This SECOND one, inside لِمَا, is the موصول: “that which I created.”",
      incorrectFeedback: "Not quite — look at the SECOND ما in the ayah, the one meaning “that which.” The first ما is a question word.",
      wordNotes: {
        "38-75-w1": { conceptLabel: "اسم استفهام", explanation: "مَا — not our target." },
        "38-75-w2": { conceptLabel: "فعل", explanation: "مَنَعَكَ." },
        "38-75-w3": { conceptLabel: "", explanation: "أَن." },
        "38-75-w4": { conceptLabel: "فعل", explanation: "تَسْجُدَ." },
        "38-75-w5": { conceptLabel: "اسم موصول بمعنى الذي", explanation: "لِمَا — the target." },
        "38-75-w6": { conceptLabel: "صلة الموصول", explanation: "خَلَقْتُ." },
        "38-75-w7": { conceptLabel: "", explanation: "بِيَدَيَّ." }
      }
    },

    practiceQuestions: [
      {
        id: "p1",
        type: "true-false",
        prompt: "مَنْ، مَا، أيّ، أل، ذو، ذا — all six مشترك words change shape for dual and plural.",
        correct: false,
        explanation: "No — من غير تغيّر: no shape change at all, singular, dual, or plural. That's exactly what “مشترك” means."
      },
      {
        id: "p2",
        type: "multiple-choice",
        prompt: "مَا مَنَعَكَ أن تسجد لِمَا خَلَقْتُ — the FIRST ما is...",
        options: [
          { id: "a", labelAr: "استفهامية" },
          { id: "b", labelAr: "موصولة" }
        ],
        correctOptionId: "a",
        explanation: "Right — “what prevented you?” is a question, not a relative clause."
      },
      {
        id: "p3",
        type: "multiple-choice",
        prompt: "In the same ayah, the SECOND ما (inside لِمَا) is...",
        options: [
          { id: "a", labelAr: "موصولة" },
          { id: "b", labelAr: "استفهامية" }
        ],
        correctOptionId: "a",
        explanation: "Right — “to that which I created” — a relative noun, your book's own worked example (p. 67)."
      },
      {
        id: "p4",
        type: "true-false",
        prompt: "أل can sometimes mean «الذي», when it enters on an اسم فاعل or اسم مفعول.",
        correct: true,
        explanation: "Right — your book's own rule (p. 67). المُصَّدِّقِين = الذين صدّقوا."
      },
      {
        id: "p5",
        type: "multiple-choice",
        prompt: "ذو الموصولة, per your book, belongs to...",
        options: [
          { id: "a", labelAr: "لغة طيّئ خاصة" },
          { id: "b", labelAr: "الفصحى العامة" },
          { id: "c", labelAr: "لغة قريش" }
        ],
        correctOptionId: "a",
        explanation: "Right — your book names it as specific to the dialect of طيّئ (p. 68), not general usage."
      }
    ],

    quranChallenge: {
      surahAr: "الحديد",
      surahEn: "Al-Hadid",
      ayahRef: "57:18",
      arabic: "إِنَّ الْمُصَّدِّقِينَ وَالْمُصَّدِّقَاتِ",
      translation: "Indeed, the men who give charity and the women who give charity...",
      question: "المُصَّدِّقِينَ starts with أل attached to an اسم فاعل (الذي صدّق). What kind of أل is this?",
      options: [
        { id: "a", labelAr: "أل موصولة بمعنى «الذي»" },
        { id: "b", labelAr: "أل تعريف عادية" }
      ],
      correctOptionId: "a",
      explanation: "Right — your book's own rule (p. 67): أل تكون موصولًا اسميًّا إذا دخلت على اسم الفاعل أو اسم المفعول. المُصَّدِّقِين = الذين صدّقوا. (Your book cites this quote as الأحزاب:35 — this course uses the verified reference, الحديد:18, where the text matches exactly; see this lesson's source note.)"
    },

    summary: [
      "المشترك: 6 words — مَنْ، مَا، أيّ، أل، ذو، ذا — none of them change shape for gender or number.",
      "مَنْ عادة للعاقل، ما عادة لغير العاقل — though your book notes both CAN flip in context (p. 66).",
      "أل can mean «الذي» itself, when it attaches to an اسم فاعل or اسم مفعول — المُصَّدِّقِين = الذين صدّقوا.",
      "ذو وذا الموصولتان: real, but narrow and dialectal — named here, not drilled. Next: everything in this Part, on one map."
    ],

    completion: {
      titleAr: "الاسم الموصول: المشترك",
      statement: "Six words, zero shape changes — and you can now tell a موصول ما from an استفهامية ما by context alone."
    }
  },

  "8.8": {
    id: "8.8",
    steps: ["intro", "concept", "example", "quran", "practice", "summary", "completion"],

    sourceNote: {
      status: "qurra-comparison",
      label: "A closing synthesis across pp. 16, 54–57, 61–68 — the whole of this Part's مبني material",
      detail: "This lesson introduces no new book content of its own. It's a QURRA-organized recap of the categories taught in Lessons 8.1–8.7, in the same spirit as Lesson 7.7's own closing map for الفعل المضارع — pulling together material that's already been individually sourced and cited."
    },

    intro: {
      titleAr: "الخريطة الكاملة للأسماء المبنية",
      titleEn: "The Complete Map of Mabni Nouns",
      statement: "Four categories, over 24 individual words, one underlying idea: a fixed ending does not mean an idle word."
    },

    objective: [
      "recall all four مبني noun categories covered in this Part and which lessons taught them",
      "restate the central model: مبني (الشكل) + في محل (الوظيفة)",
      "connect this Part back to Lesson 2.1's معرب/مبني distinction and forward to a full إعراب of a complete sentence"
    ],

    concept: {
      termAr: "الأسماء المبنية — الخريطة الكاملة",
      kind: "qurra-comparison",
      definitionAr: "مَبْنِيٌّ: مَا لَا يَتَغَيَّرُ آخِرُهُ بِسَبَبِ العَوَامِلِ الدَّاخِلَةِ عَلَيْهِ.",
      definitionEn: "A fixed ending — but, as you've now seen again and again, a fixed ending that still does real grammatical work.",
      lead: "مبني (الشكل) + في محل (الوظيفة) — the two-part pattern that ran through every single lesson in this Part."
    },

    definitionBreakdown: [
      {
        termAr: "الضمائر",
        termEn: "Lessons 8.2–8.4",
        glossEn: "مستتر، متصل، منفصل",
        explanation: "مستتر (وجوبًا أو جوازًا، دائمًا رفع) · متصل (في محل رفع/نصب/جر بحسب ما اتصل به) · منفصل (12 مرفوع دائمًا مبتدأ، 12 منصوب دائمًا مفعول به)."
      },
      {
        termAr: "أسماء الإشارة",
        termEn: "Lesson 8.5",
        glossEn: "هذا، هذه، هؤلاء، ذلك...",
        explanation: "تأخذ محلها بحسب موقعها، كـ ثَمَّ: مبني على الفتح في محل نصب ظرف مكان."
      },
      {
        termAr: "الأسماء الموصولة الخاصة",
        termEn: "Lesson 8.6",
        glossEn: "8 ألفاظ",
        explanation: "كل منها مقيّد بجنس وعدد — ولا تكتمل إلا بصلة وعائد."
      },
      {
        termAr: "الأسماء الموصولة المشتركة",
        termEn: "Lesson 8.7",
        glossEn: "6 ألفاظ",
        explanation: "مَنْ، ما، أيّ، أل، ذو، ذا — بلا تغيّر شكل مهما اختلف الجنس أو العدد."
      }
    ],

    conceptTree: {
      root: { ar: "الأسماء المبنية", en: "complete map" },
      branches: [
        { ar: "الضمائر", en: "8.2–8.4", children: [{ ar: "مستتر", en: "" }, { ar: "متصل", en: "" }, { ar: "منفصل", en: "" }] },
        { ar: "أسماء الإشارة", en: "8.5" },
        { ar: "الأسماء الموصولة", en: "8.6–8.7", children: [{ ar: "الخاص", en: "8 ألفاظ" }, { ar: "المشترك", en: "6 ألفاظ" }] },
        { ar: "أسماء الاستفهام (جزئيًا)", en: "كم، أين — 8.1" },
        { ar: "أسماء الشرط / أسماء الأفعال", en: "مذكورة في خريطة كتابك (ص 16) فقط" }
      ]
    },

    example: {
      kind: "qurra-comparison",
      kindLabel: "The pattern behind every lesson in this Part",
      arabic: "هَذَا طَالِبٌ",
      transliteration: "Hādhā ṭālibun",
      translation: "This is a student.",
      explanation: "هَذَا: اسم إشارة — مبني (its form never changes) — في محل رفع مبتدأ (its job: starting the sentence). طَالِبٌ: معرب — خبر مرفوع بالضمة. One مبني, one معرب, side by side, each doing real grammatical work.",
      contrast: {
        arabic: "ضَرَبَهُ",
        translation: "“he hit him”",
        explanation: "الهاء: ضمير متصل — مبني — في محل نصب مفعول به. The same two-part pattern: fixed form, and a محل decided purely by position — exactly what you've seen all through this Part."
      }
    },

    quranExample: {
      surahAr: "الفاتحة",
      surahEn: "Al-Fatihah",
      ayahRef: "1:7",
      arabic: "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ",
      translation: "The path of those upon whom You have bestowed favor.",
      notice: "الَّذِينَ: اسم موصول — مبني — جمع مذكر (Lesson 8.6). أَنْعَمْتَ عَلَيْهِمْ is its صلة, and the هم inside عَلَيْهِمْ is its عائد. A fitting close: the very سورة whose opening lines you met in Lesson 1.1 now shows you a مبني category by name."
    },

    practiceQuestions: [
      {
        id: "p1",
        type: "multiple-choice",
        prompt: "هذا طالبٌ — هذا's محل؟",
        options: [
          { id: "a", labelAr: "في محل رفع مبتدأ" },
          { id: "b", labelAr: "في محل نصب مفعول به" },
          { id: "c", labelAr: "لا محل له" }
        ],
        correctOptionId: "a",
        explanation: "Right — هذا opens the sentence, so it's في محل رفع مبتدأ, exactly like every مرفوع detached pronoun or demonstrative you met this Part."
      },
      {
        id: "p2",
        type: "true-false",
        prompt: "مبني means a word has no grammatical role in its sentence.",
        correct: false,
        explanation: "No — this is the central corrective idea of this whole Part. مبني describes the word's FORM; it can still occupy a real محل."
      },
      {
        id: "p3",
        type: "multiple-choice",
        prompt: "Which منفصل pronoun set can be a مبتدأ?",
        options: [
          { id: "a", labelAr: "المرفوع" },
          { id: "b", labelAr: "المنصوب" }
        ],
        correctOptionId: "a",
        explanation: "Right — the 12-word مرفوع set; the 12-word منصوب set can only ever be مفعول به."
      },
      {
        id: "p4",
        type: "true-false",
        prompt: "An اسم موصول can be complete without a صلة and عائد.",
        correct: false,
        explanation: "No — ما افتقر إلى صلة وعائد: both are required, for every موصول, خاصًّا كان أو مشتركًا."
      },
      {
        id: "p5",
        type: "multiple-choice",
        prompt: "كم و أين (Lesson 8.1) belong to which category?",
        options: [
          { id: "a", labelAr: "أسماء الاستفهام" },
          { id: "b", labelAr: "أسماء الإشارة" },
          { id: "c", labelAr: "أسماء الشرط" }
        ],
        correctOptionId: "a",
        explanation: "Right — your book's own two examples of مبني أسماء استفهام (p. 16)."
      }
    ],

    summary: [
      "مبني: ما لا يتغيّر آخره بسبب العوامل — لكنه، كما رأيت مرارًا، لا يزال يشغل محلًّا إعرابيًّا حقيقيًّا.",
      "أربع فئات غطّاها هذا الباب من مصدرك: الضمائر (مستتر/متصل/منفصل)، أسماء الإشارة، والأسماء الموصولة (الخاصة والمشتركة) — إضافة إلى كم وأين من أسماء الاستفهام.",
      "هذا طالبٌ: هذا مبني في محل رفع مبتدأ — النموذج الذي تكرر، بصورة أو بأخرى، في كل درس من دروس هذا الباب.",
      "Part 8 complete. Next: Part 9."
    ],

    completion: {
      titleAr: "الخريطة الكاملة للأسماء المبنية",
      statement: "Part 8 complete — أربع فئات من الأسماء المبنية، ومبدأ واحد يربطها جميعًا: الشكل الثابت لا يعني غياب الوظيفة. Part 9 is next."
    }
  },


  "9.1": {
    id: "9.1",
    steps: ["intro", "concept", "example", "quran", "notice", "practice", "challenge", "summary", "completion"],

    sourceNote: {
      status: "book-cited",
      label: "Sourced from your reference book — the page immediately before page 18",
      detail: "Your book's own opening classification — \"وَالْفِعْلُ ضَرْبَانِ: مَبْنِيٌّ، وَهُوَ الْأَصْلُ، وَمُعْرَبٌ، وَهُوَ الْفَرْعُ\" — and the مبني-can-still-hold-a-محل note (footnote 3: \"اعلم ... أن المبني لا محل له من الإعراب، إلا إذا سبق بعامل ... نحو: إن قام زيد قمت\") are the book's own, from the page that opens this chapter. That page carries no printed number in the scan, but its final footnote is cut off mid-sentence (\"...بضمير رفع متحرك،=\") and continues directly as the opening line of page 18 (\"والتاء = ضمير متصل...\"), which fixes it as the page immediately before 18 — referred to here as p. 17. The إن قام زيد قمت example is the book's own; connecting it explicitly back to Lesson 8.3's اسم مبني + محل pattern is QURRA's own cross-reference."
    },

    intro: {
      titleAr: "من بناء الاسم إلى بناء الفعل",
      titleEn: "From Noun-Building to Verb-Building",
      statement: "Part 8 showed you nouns that never change shape — and those were the exception among nouns. Now meet the verbs for which that's not the exception. It's the rule."
    },

    objective: [
      "reactivate Part 7's الفعل المضارع معرب في الأصل and Part 8's الاسم المبني",
      "learn your book's own classification: الفعل مبني (الأصل) أو معرب (الفرع) — the reverse of the noun's default",
      "preview the map for this whole Part: الماضي مبني، الأمر مبني، والمضارع معرب في الأصل"
    ],

    concept: {
      termAr: "الفعل: الأصل فيه البناء",
      kind: "book-cited",
      definitionAr: "وَالْفِعْلُ ضَرْبَانِ: مَبْنِيٌّ، وَهُوَ الْأَصْلُ، وَمُعْرَبٌ، وَهُوَ الْفَرْعُ.",
      definitionEn: "The verb is of two kinds: mabni — the origin — and mu'rab — the exception.",
      lead: "Flip Part 8's whole premise. For nouns, معرب was the default and مبني the exception you spent a whole Part learning about. For verbs, your book states the opposite outright: البناء is الأصل, and الإعراب — everything Part 7 taught you about يَكْتُبُ — is الفرع, the exception, and even then it belongs to only one of the three verb types."
    },

    definitionBreakdown: [
      {
        termAr: "الماضي",
        termEn: "Past tense",
        glossEn: "مبني — always",
        explanation: "Every single فعل ماضٍ is مبني, with no exceptions. Lesson 9.2 covers exactly how."
      },
      {
        termAr: "الأمر",
        termEn: "Imperative",
        glossEn: "مبني — always",
        explanation: "Every single فعل أمر is مبني too. Lesson 9.3 covers exactly how."
      },
      {
        termAr: "المضارع",
        termEn: "Present tense",
        glossEn: "معرب في الأصل",
        explanation: "This is the one verb type Part 7 already taught you — مرفوع، منصوب، مجزوم. Lesson 9.4 shows the source-supported cases where even this one becomes مبني."
      },
      {
        termAr: "قد يكون له محل",
        termEn: "Can still hold a position",
        glossEn: "when preceded by a عامل",
        explanation: "Your book adds one more point, right where it states the rule: a مبني verb normally has لا محل له من الإعراب — but if a عامل precedes it, its position becomes محلًّا. Its own example: إِنْ قَامَ زَيْدٌ قُمْتُ — both قَامَ and قُمْتُ are مبنيان, yet both sit في محل جزم (فعل الشرط وجوابه), because إنْ (the عامل) precedes them. Exactly the same idea Lesson 8.3 taught you for مبني nouns."
      }
    ],

    conceptTree: {
      root: { ar: "الفعل", en: "the verb — your book's own classification" },
      branches: [
        { ar: "الماضي", en: "past tense", note: "مبني دائمًا — Lesson 9.2." },
        { ar: "الأمر", en: "imperative", note: "مبني دائمًا — Lesson 9.3." },
        {
          ar: "المضارع",
          en: "present tense",
          note: "معرب في الأصل، ويُبنى في حالات مخصوصة — Lesson 9.4.",
          children: [
            { ar: "معرب", en: "the default — مرفوع / منصوب / مجزوم, exactly as Part 7 taught." },
            { ar: "مبني", en: "only in the source-supported special cases ahead." }
          ]
        }
      ]
    },

    example: {
      kind: "qurra-comparison",
      kindLabel: "Reactivating Part 7 — Lesson 7.1",
      arabic: "يَكْتُبُ",
      transliteration: "yaktubu",
      translation: "a معرب verb — its ending has shifted with every عامل since Part 7",
      explanation: "يَكْتُبُ، لَنْ يَكْتُبَ، لَمْ يَكْتُبْ — same verb, three endings, three عوامل. That shifting ending is الإعراب, and until now it's the only kind of فعل you've worked with.",
      contrast: {
        arabic: "ضَرَبَ",
        translation: "a مبني verb — its ending never moves, whatever role it plays",
        explanation: "فعل ماضٍ — مبني على الفتح, always. No عامل, however strong, can shift ضَرَبَ's ending the way عوامل shifted يَكْتُبُ's. That fixed ending, regardless of العامل, is البناء — and it's what the next two lessons are about."
      }
    },

    quranExample: {
      surahAr: "مريم",
      surahEn: "Maryam",
      ayahRef: "19:30",
      arabic: "قَالَ إِنِّي عَبْدُ اللَّهِ آتَانِيَ الْكِتَابَ وَجَعَلَنِي نَبِيًّا",
      translation: "He said, Indeed, I am the servant of Allah. He has given me the Scripture and made me a prophet.",
      notice: "قَالَ opens the ayah: a plain فعل ماضٍ. Whoever says it, whatever comes before or after it in the sentence, its shape never moves from قَالَ. That fixed shape — not shifting the way يَكْتُبُ shifted — is exactly what البناء means for a verb.",
      wordNotes: {
        "19-30-w1": { conceptLabel: "فعل ماضٍ، مبني على الفتح", explanation: "قَالَ — “he said.” Fixed on الفتح, with no عامل able to move it." },
        "19-30-w5": { conceptLabel: "فعل ماضٍ", explanation: "آتَانِيَ — “He gave me.” Another ماضٍ verb in the same ayah, not our focus here." },
        "19-30-w7": { conceptLabel: "فعل ماضٍ", explanation: "وَجَعَلَنِي — “and made me.” Also ماضٍ — you'll see الماضي's own building rules in the next lesson." }
      }
    },

    noticeInteraction: {
      type: "word-tap",
      ayahRef: "19:30",
      instanceId: "9.1-notice",
      promptContext: "Maryam 19:30",
      question: "Tap the فعل الماضي that opens this ayah — the verb whose shape never shifts, whatever comes before it.",
      correctWordId: "19-30-w1",
      correctFeedback: "Right — قَالَ. A فعل ماضٍ, مبني, with a fixed ending no عامل can touch.",
      incorrectFeedback: "Not quite — look at the very first word of the ayah. It's a plain فعل ماضٍ.",
      wordNotes: {
        "19-30-w1": { conceptLabel: "فعل ماضٍ، مبني", explanation: "قَالَ — “he said.”" },
        "19-30-w5": { conceptLabel: "فعل ماضٍ", explanation: "آتَانِيَ — “He gave me.”" },
        "19-30-w7": { conceptLabel: "فعل ماضٍ", explanation: "وَجَعَلَنِي — “and made me.”" }
      }
    },

    practiceQuestions: [
      {
        id: "p1",
        type: "true-false",
        prompt: "For nouns, البناء is الأصل and الإعراب is الفرع.",
        correct: false,
        explanation: "No — that's the verb's rule, not the noun's. For الاسم, الإعراب is الأصل (Part 8's own premise); for الفعل, your book states the opposite: البناء هو الأصل."
      },
      {
        id: "p2",
        type: "multiple-choice",
        prompt: "Which of the three verb types is مبني دائمًا according to your book?",
        options: [
          { id: "a", labelAr: "الماضي والأمر" },
          { id: "b", labelAr: "المضارع فقط" },
          { id: "c", labelAr: "الثلاثة جميعًا، بلا استثناء" }
        ],
        correctOptionId: "a",
        explanation: "Right — الماضي والأمر مبنيان دائمًا. المضارع معرب في الأصل، ويُبنى فقط في حالات مخصوصة — coming in Lesson 9.4."
      },
      {
        id: "p3",
        type: "true-false",
        prompt: "A مبني verb can never hold a محل من الإعراب, under any condition.",
        correct: false,
        explanation: "Not quite — your book's own example, إِنْ قَامَ زَيْدٌ قُمْتُ, shows a مبني verb (قَامَ) holding محل جزم once a عامل (إنْ) precedes it. Same pattern as Lesson 8.3's مبني nouns."
      },
      {
        id: "p4",
        type: "multiple-choice",
        prompt: "ضَرَبَ and يَكْتُبُ are both verbs. What's the key difference your book draws between them?",
        options: [
          { id: "a", labelAr: "ضَرَبَ مبني الأثر ثابت، ويَكْتُبُ معرب يتغيّر آخره بالعوامل" },
          { id: "b", labelAr: "لا فرق؛ كلاهما معرب" },
          { id: "c", labelAr: "ضَرَبَ معرب، ويَكْتُبُ مبني" }
        ],
        correctOptionId: "a",
        explanation: "Right — ضَرَبَ (ماضٍ) is مبني, fixed; يَكْتُبُ (مضارع) is معرب, shifting with العوامل exactly as Part 7 showed."
      },
      {
        id: "p5",
        type: "multiple-choice",
        prompt: "In إِنْ قَامَ زَيْدٌ قُمْتُ, what makes قَامَ hold a محل من الإعراب even though it's مبني?",
        options: [
          { id: "a", labelAr: "سبقه بعامل، وهو إنْ" },
          { id: "b", labelAr: "كونه فعلًا ماضيًا" },
          { id: "c", labelAr: "اتصاله بزيدٍ" }
        ],
        correctOptionId: "a",
        explanation: "Right — it's the عامل (إنْ) preceding it that gives the مبني verb a محل. Without a عامل like this, a مبني verb simply has لا محل له من الإعراب."
      }
    ],

    quranChallenge: {
      surahAr: "المؤمنون",
      surahEn: "Al-Mu'minun",
      ayahRef: "23:112",
      arabic: "قَالَ كَمْ لَبِثْتُمْ",
      translation: "He will say, How long did you remain...",
      question: "You met this ayah in Lesson 8.1 for كَمْ, its مبني noun. Now look at قَالَ, its opening verb. What's its building state?",
      options: [
        { id: "a", labelAr: "فعل ماضٍ، مبني على الفتح" },
        { id: "b", labelAr: "فعل مضارع، معرب، مرفوع" },
        { id: "c", labelAr: "فعل أمر، مبني على السكون" }
      ],
      correctOptionId: "a",
      explanation: "Right — قَالَ is فعل ماضٍ مبني على الفتح, same as قَالَ in 19:30. Two different ayahs, the same fixed ending — exactly what البناء means."
    },

    summary: [
      "Your book's own rule: الفعل ضربان — مبني (الأصل) ومعرب (الفرع). The reverse of what Part 8 established for الاسم.",
      "الماضي مبني دائمًا، الأمر مبني دائمًا، والمضارع معرب في الأصل — Part 9's whole map.",
      "A مبني verb normally has لا محل له من الإعراب — unless a عامل precedes it, as in إِنْ قَامَ زَيْدٌ قُمْتُ, exactly like Lesson 8.3's مبني nouns.",
      "Next: the first full category — how الفعل الماضي is actually built."
    ],

    completion: {
      titleAr: "من بناء الاسم إلى بناء الفعل",
      statement: "You know why this Part exists, and what it covers. Time to see الماضي's own building rules."
    }
  },

  "9.2": {
    id: "9.2",
    steps: ["intro", "concept", "example", "quran", "notice", "practice", "challenge", "summary", "completion"],

    sourceNote: {
      status: "book-cited",
      label: "Sourced from your reference book — pages 17–18",
      detail: "The core rule (\"أَحَدُهُمَا: الْفِعْلُ الْمَاضِي، وَبِنَاؤُهُ عَلَى الْفَتْحِ، إِلَّا إِذَا اتَّصَلَ بِهِ وَاوُ الْجَمَاعَةِ فَيُضَمُّ ... أَوِ اتَّصَلَ بِهِ ضَمِيرُ رَفْعٍ مُتَحَرِّكٌ فَيُسَكَّنُ\"), the ضَرَبَ/دَعَا ظاهر/مقدر pair, the ضَرَبُوا and ضَرَبْتَ examples, and the four-consecutive-harakat reason for the ضم exception are all the book's own (p. 17, footnotes 4–7). The Qur'anic examples (19:103:3, 5:117) are QURRA's own selections, independently verified — your book's own examples here (ضَرَبَ، دَعَا، ضَرَبُوا، ضَرَبْتَ) are not Qur'anic."
    },

    intro: {
      titleAr: "بناء الفعل الماضي",
      titleEn: "How the Past-Tense Verb Is Built",
      statement: "You know الماضي is مبني. Now see on what — and the two situations where the default changes."
    },

    objective: [
      "state the default بناء of الفعل الماضي: مبني على الفتح",
      "recognize the two conditions that shift it — واو الجماعة (→ ضم) and ضمير رفع متحرك (→ سكون)",
      "distinguish فتح ظاهر from فتح مقدر, using your book's own pair"
    ],

    concept: {
      termAr: "بناء الماضي",
      kind: "book-cited",
      definitionAr: "أَحَدُهُمَا: الْفِعْلُ الْمَاضِي، وَبِنَاؤُهُ عَلَى الْفَتْحِ، إِلَّا إِذَا اتَّصَلَ بِهِ وَاوُ الْجَمَاعَةِ فَيُضَمُّ، أَوِ اتَّصَلَ بِهِ ضَمِيرُ رَفْعٍ مُتَحَرِّكٌ فَيُسَكَّنُ.",
      definitionEn: "The madi verb: its building default is الفتح — except when واو الجماعة attaches (it shifts to الضم), or a moving raf' pronoun attaches (it shifts to السكون).",
      lead: "One verb, one default, two clear exceptions — all stated by your book in a single line. Every فعل ماضٍ starts out مبني على الفتح. Two specific attachments shift that, and nothing else does."
    },

    definitionBreakdown: [
      {
        termAr: "مبني على الفتح",
        termEn: "Built on fatha",
        glossEn: "the default",
        explanation: "ضَرَبَ: مبني على الفتح الظاهر. دَعَا: مبني على فتح مقدّر — the fatha is still there, just not pronounceable on the weak alif at the end, so it's منع من ظهورها التعذر (blocked by sheer impossibility, same term Part 7 used for معتل مضارع)."
      },
      {
        termAr: "مبني على الضم",
        termEn: "Built on damma",
        glossEn: "with واو الجماعة",
        explanation: "ضَرَبُوا: مبني على الضم, because واو الجماعة attached. Your book gives the reason too: avoiding four consecutive harakat in what counts as a single word (لكراهة توالي أربع حركات)."
      },
      {
        termAr: "مبني على السكون",
        termEn: "Built on sukun",
        glossEn: "with a moving raf' pronoun",
        explanation: "ضَرَبْتَ / ضَرَبْتُ / ضَرَبْنَا: مبني على السكون, because a ضمير رفع متحرك (التاء، أو نا) attached. In every one of these, the attached pronoun is itself a ضمير متصل مبني في محل رفع فاعل — exactly Lesson 8.3's pattern, now on a verb instead of a noun."
      }
    ],

    example: {
      kind: "book-example",
      kindLabel: "Your book's own pair — p. 17",
      arabic: "ضَرَبَ",
      transliteration: "daraba",
      translation: "he struck — فعل ماضٍ مبني على الفتح الظاهر",
      explanation: "The fatha is right there, pronounced, visible. لا محل له من الإعراب — no عامل preceded it here.",
      contrast: {
        arabic: "دَعَا",
        translation: "“he called” — فعل ماضٍ مبني على فتح مقدّر",
        explanation: "Same building state, same فتح — but دَعَا ends in a weak alif, so the fatha can't actually be pronounced on it. Your book calls this a فتح مقدّر: the vowel is still there grammatically, just silent."
      }
    },

    quranExample: {
      surahAr: "العصر",
      surahEn: "Al-'Asr",
      ayahRef: "103:3",
      arabic: "إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ وَتَوَاصَوْا بِالْحَقِّ وَتَوَاصَوْا بِالصَّبْرِ",
      translation: "Except for those who have believed and done righteous deeds and advised each other to truth and advised each other to patience.",
      notice: "Four ماضٍ verbs in this one ayah — آمَنُوا، عَمِلُوا، تَوَاصَوْا (twice) — and every single one ends on الضم, not the default فتح. Each one has واو الجماعة attached, exactly the condition your book names.",
      wordNotes: {
        "103-3-w2": { conceptLabel: "اسم موصول، مبني", explanation: "الَّذِينَ — from Lesson 8.6, not our focus here." },
        "103-3-w3": { conceptLabel: "فعل ماضٍ، مبني على الضم", explanation: "آمَنُوا — “they believed.” واو الجماعة attached → بناء على الضم." },
        "103-3-w4": { conceptLabel: "فعل ماضٍ، مبني على الضم", explanation: "وَعَمِلُوا — “and did.” Same pattern." },
        "103-3-w6": { conceptLabel: "فعل ماضٍ، مبني على الضم", explanation: "وَتَوَاصَوْا — “and advised each other.” Same pattern, repeated twice in the ayah." }
      }
    },

    noticeInteraction: {
      type: "word-tap",
      ayahRef: "103:3",
      instanceId: "9.2-notice",
      promptContext: "Al-'Asr 103:3",
      question: "Tap the first ماضٍ verb in the ayah — the one built on الضم instead of the usual فتح.",
      correctWordId: "103-3-w3",
      correctFeedback: "Right — آمَنُوا. واو الجماعة is attached, so it shifts from the default فتح to مبني على الضم — exactly as your book states.",
      incorrectFeedback: "Not quite — look for the verb right after الَّذِينَ, ending in و.",
      wordNotes: {
        "103-3-w3": { conceptLabel: "فعل ماضٍ، مبني على الضم", explanation: "آمَنُوا — واو الجماعة attached." },
        "103-3-w4": { conceptLabel: "فعل ماضٍ، مبني على الضم", explanation: "وَعَمِلُوا — same pattern." },
        "103-3-w6": { conceptLabel: "فعل ماضٍ، مبني على الضم", explanation: "وَتَوَاصَوْا — same pattern." }
      }
    },

    practiceQuestions: [
      {
        id: "p1",
        type: "multiple-choice",
        prompt: "What is الفعل الماضي's default building state?",
        options: [
          { id: "a", labelAr: "مبني على الفتح" },
          { id: "b", labelAr: "مبني على الضم" },
          { id: "c", labelAr: "مبني على الكسر" }
        ],
        correctOptionId: "a",
        explanation: "Right — الفتح is the default. الضم and السكون only appear under the two specific conditions your book names."
      },
      {
        id: "p2",
        type: "true-false",
        prompt: "ضَرَبُوا shifts to مبني على الضم because of واو الجماعة.",
        correct: true,
        explanation: "Correct — exactly your book's stated condition, and the reason given is avoiding four consecutive harakat."
      },
      {
        id: "p3",
        type: "multiple-choice",
        prompt: "دَعَا is مبني على فتح مقدّر rather than فتح ظاهر. Why?",
        options: [
          { id: "a", labelAr: "لأن آخره حرف علة لا يمكن ظهور الفتحة عليه" },
          { id: "b", labelAr: "لأنه فعل أمر لا ماضٍ" },
          { id: "c", labelAr: "لأنه اتصل بواو الجماعة" }
        ],
        correctOptionId: "a",
        explanation: "Right — the weak alif at the end blocks the fatha from being pronounced, even though it's still there grammatically."
      },
      {
        id: "p4",
        type: "true-false",
        prompt: "In ضَرَبْتُ, the تُ at the end is part of the verb's root letters.",
        correct: false,
        explanation: "No — التاء is a separate ضمير متصل مبني في محل رفع فاعل, attached to the verb. It's that attachment that shifts الماضي's بناء to السكون."
      },
      {
        id: "p5",
        type: "multiple-choice",
        prompt: "Which condition shifts الماضي's بناء to السكون?",
        options: [
          { id: "a", labelAr: "اتصاله بضمير رفع متحرك، كالتاء أو نا" },
          { id: "b", labelAr: "اتصاله بواو الجماعة" },
          { id: "c", labelAr: "كونه فعلًا معتلًّا" }
        ],
        correctOptionId: "a",
        explanation: "Right — a moving (متحرك) raf' pronoun attaching, like التاء in ضَرَبْتَ or نا in ضَرَبْنَا, shifts the building state to السكون."
      }
    ],

    quranChallenge: {
      surahAr: "المائدة",
      surahEn: "Al-Ma'idah",
      ayahRef: "5:117",
      arabic: "مَا قُلْتُ لَهُمْ إِلَّا مَا أَمَرْتَنِي بِهِ",
      translation: "I said to them nothing except what You commanded me to say...",
      question: "قُلْتُ appears twice in this clause structure (قُلْتُ and أَمَرْتَنِي, each with a moving raf' pronoun attached). What is قُلْتُ's building state?",
      options: [
        { id: "a", labelAr: "فعل ماضٍ، مبني على السكون" },
        { id: "b", labelAr: "فعل ماضٍ، مبني على الضم" },
        { id: "c", labelAr: "فعل ماضٍ، مبني على الفتح" }
      ],
      correctOptionId: "a",
      explanation: "Right — قُلْتُ is مبني على السكون, because التاء (a moving raf' pronoun, في محل رفع فاعل) is attached. The same shift you saw in ضَرَبْتَ."
    },

    summary: [
      "الفعل الماضي: مبني على الفتح، إلا مع واو الجماعة (→ الضم) أو ضمير رفع متحرك (→ السكون).",
      "ضَرَبَ (فتح ظاهر) مقابل دَعَا (فتح مقدّر) — your book's own pair, same building state, different pronounceability.",
      "The attached pronoun in ضَرَبْتَ or ضَرَبْنَا is itself مبني في محل رفع فاعل — Lesson 8.3's exact pattern, now on a verb.",
      "Next: فعل الأمر — the second verb type that's مبني دائمًا."
    ],

    completion: {
      titleAr: "بناء الفعل الماضي",
      statement: "One mabni verb type down. Next: the imperative, and its own building rules."
    }
  },

  "9.3": {
    id: "9.3",
    steps: ["intro", "concept", "example", "quran", "notice", "practice", "challenge", "summary", "completion"],

    sourceNote: {
      status: "book-cited",
      label: "Sourced from your reference book — page 18",
      detail: "The core rule (\"وَالثَّانِي: فِعْلُ الْأَمْرِ، وَبِنَاؤُهُ عَلَى السُّكُونِ، إِلَّا إِذَا اتَّصَلَ بِهِ ... فَعَلَى حَذْفِ النُّونِ ... وَإِلَّا الْمُعْتَلُّ، فَعَلَى حَذْفِ حَرْفِ الْعِلَّةِ\") and every example (اضرب، اضربا، اضربوا، اضربي، اضربن، اخش، اغز، ارم) are the book's own, p. 18. The fourth building state — مبني على الفتح when a نون توكيد attaches, examples اضربَنَّ / اضربِنْ — is flagged in the book itself as a تنبيه (\"هناك حالة لم يذكرها المصنف رحمه الله\"): the commentary explicitly notes the original author didn't state this case, and adds it. It's included here as that same commentary addition, not silently folded into the main rule. The Qur'anic examples (96:1, 2:21, 33:1) are QURRA's own selections, independently verified."
    },

    intro: {
      titleAr: "بناء فعل الأمر",
      titleEn: "How the Imperative Verb Is Built",
      statement: "الأمر is مبني too — but on a different default, with its own set of shifts."
    },

    objective: [
      "state فعل الأمر's default building state: مبني على السكون",
      "recognize حذف النون as the shift triggered by ألف الاثنين، واو الجماعة، أو ياء المخاطبة",
      "recognize حذف حرف العلة as the shift for a معتل أمر, and the additional فتح state your book flags separately"
    ],

    concept: {
      termAr: "بناء الأمر",
      kind: "book-cited",
      definitionAr: "وَالثَّانِي: فِعْلُ الْأَمْرِ، وَبِنَاؤُهُ عَلَى السُّكُونِ، إِلَّا إِذَا اتَّصَلَ بِهِ ضَمِيرُ تَثْنِيَةٍ، أَوْ ضَمِيرُ جَمْعٍ مُذَكَّرٍ، أَوْ ضَمِيرُ الْمُؤَنَّثَةِ الْمُخَاطَبَةِ، فَعَلَى حَذْفِ النُّونِ؛ وَإِلَّا الْمُعْتَلُّ، فَعَلَى حَذْفِ حَرْفِ الْعِلَّةِ.",
      definitionEn: "The imperative verb: its building default is السكون — except when a dual, masculine-plural, or feminine-addressee pronoun attaches (it shifts to دhذف النون), or the verb is weak (it shifts to حذف حرف العلة).",
      lead: "الأمر has its own default — السكون, not فتح — and its own two shifts. One is about which pronoun attaches; the other is about the verb's own root letters."
    },

    definitionBreakdown: [
      {
        termAr: "مبني على السكون",
        termEn: "Built on sukun",
        glossEn: "the default",
        explanation: "اضْرِبْ: مبني على السكون. فاعله ضمير مستتر وجوبًا تقديره: أنتَ — the same وجوبًا pattern Lesson 8.2 already taught you for every أمر للواحد المذكر."
      },
      {
        termAr: "مبني على حذف النون",
        termEn: "Built on dropping the nun",
        glossEn: "with ألف الاثنين / واو الجماعة / ياء المخاطبة",
        explanation: "اضْرِبَا (+ ألف الاثنين)، اضْرِبُوا (+ واو الجماعة)، اضْرِبِي (+ ياء المخاطبة) — three different attached pronouns, the same shift. In every case, the attached pronoun is ضمير متصل مبني في محل رفع فاعل."
      },
      {
        termAr: "مبني على حذف حرف العلة",
        termEn: "Built on dropping the weak letter",
        glossEn: "when the verb itself is معتل",
        explanation: "اخْشَ (حذف الألف)، اغْزُ (حذف الواو)، ارْمِ (حذف الياء) — the weak letter drops instead of the sukun appearing. فاعل في كل منها: مستتر وجوبًا تقديره أنتَ."
      },
      {
        termAr: "مبني على الفتح",
        termEn: "Built on fatha",
        glossEn: "flagged separately — with a نون توكيد attached",
        explanation: "Your book's own commentary adds a case the original author left unstated: if a نون توكيد (ثقيلة أو خفيفة) attaches to الأمر, it's built on الفتح instead — اضْرِبَنَّ، اضْرِبِنْ. You'll meet this same نون توكيد attaching to المضارع in the next lesson."
      }
    ],

    conceptTree: {
      root: { ar: "بناء فعل الأمر", en: "your book's own building states — p. 18" },
      branches: [
        { ar: "السكون", en: "the default — اضْرِبْ" },
        { ar: "حذف النون", en: "with ألف الاثنين / واو الجماعة / ياء المخاطبة — اضْرِبَا، اضْرِبُوا، اضْرِبِي" },
        { ar: "حذف حرف العلة", en: "when the verb is معتل — اخْشَ، اغْزُ، ارْمِ" },
        { ar: "الفتح", en: "with نون التوكيد attached — the book's own flagged addition, اضْرِبَنَّ، اضْرِبِنْ" }
      ]
    },

    example: {
      kind: "book-example",
      kindLabel: "Your book's own pair — p. 18",
      arabic: "اضْرِبْ",
      transliteration: "idrib",
      translation: "strike! — فعل أمر مبني على السكون",
      explanation: "The default state: السكون, فاعله مستتر وجوبًا تقديره أنتَ. Nothing attached, nothing shifted.",
      contrast: {
        arabic: "اضْرِبُوا",
        translation: "“strike! (plural)” — فعل أمر مبني على حذف النون",
        explanation: "واو الجماعة attached, so the ending نون drops entirely instead of a vowel appearing. واو الجماعة itself: ضمير متصل مبني على السكون في محل رفع فاعل."
      }
    },

    quranExample: {
      surahAr: "العلق",
      surahEn: "Al-'Alaq",
      ayahRef: "96:1",
      arabic: "اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ",
      translation: "Recite in the name of your Lord who created.",
      notice: "اقْرَأْ — the opening word of this surah. A plain فعل أمر, nothing attached to it, so it sits on الأمر's own default: مبني على السكون, فاعله مستتر وجوبًا تقديره أنتَ.",
      wordNotes: {
        "96-1-w1": { conceptLabel: "فعل أمر، مبني على السكون", explanation: "اقْرَأْ — “recite.” Default building state, no attachment." },
        "96-1-w5": { conceptLabel: "فعل ماضٍ، مبني على الفتح", explanation: "خَلَقَ — “[who] created.” From Lesson 9.2, not our focus here." }
      }
    },

    noticeInteraction: {
      type: "word-tap",
      ayahRef: "2:21",
      instanceId: "9.3-notice",
      promptContext: "Al-Baqarah 2:21",
      question: "Tap the فعل أمر in this ayah — the one built on حذف النون rather than the default سكون.",
      correctWordId: "2-21-w4",
      correctFeedback: "Right — اعْبُدُوا. واو الجماعة attached, so النون drops and it's built على حذف النون, just like اضْرِبُوا.",
      incorrectFeedback: "Not quite — look for the command verb right after النَّاسُ, ending in و.",
      wordNotes: {
        "2-21-w4": { conceptLabel: "فعل أمر، مبني على حذف النون", explanation: "اعْبُدُوا — “worship.” واو الجماعة attached." },
        "2-21-w7": { conceptLabel: "فعل ماضٍ، مبني على الفتح", explanation: "خَلَقَكُمْ — “[who] created you.” From Lesson 9.2." },
        "2-21-w12": { conceptLabel: "فعل مضارع، معرب، مرفوع", explanation: "تَتَّقُونَ — a معرب مضارع, exactly Part 7's territory. You'll return to this ayah in the final lesson." }
      }
    },

    practiceQuestions: [
      {
        id: "p1",
        type: "multiple-choice",
        prompt: "What is فعل الأمر's default building state?",
        options: [
          { id: "a", labelAr: "مبني على السكون" },
          { id: "b", labelAr: "مبني على الفتح" },
          { id: "c", labelAr: "مبني على الضم" }
        ],
        correctOptionId: "a",
        explanation: "Right — السكون is the default. Unlike الماضي, whose default is الفتح."
      },
      {
        id: "p2",
        type: "true-false",
        prompt: "اضْرِبِي is مبني على حذف النون because ياء المخاطبة attached.",
        correct: true,
        explanation: "Correct — ياء المخاطبة is one of the three pronouns (alongside ألف الاثنين and واو الجماعة) that trigger حذف النون."
      },
      {
        id: "p3",
        type: "multiple-choice",
        prompt: "اخْشَ drops its final ألف instead of taking a سكون. Why?",
        options: [
          { id: "a", labelAr: "لأنه فعل معتل، فيكون مبنيًّا على حذف حرف العلة" },
          { id: "b", labelAr: "لاتصاله بواو الجماعة" },
          { id: "c", labelAr: "لاتصاله بنون التوكيد" }
        ],
        correctOptionId: "a",
        explanation: "Right — اخشى is معتل (its last root letter is a weak letter), so its أمر form drops that weak letter instead of showing a سكون."
      },
      {
        id: "p4",
        type: "true-false",
        prompt: "اضْرِبَنَّ's بناء على الفتح is stated by the original matn itself, with no added note.",
        correct: false,
        explanation: "Not quite — your book's own commentary explicitly flags this as a case the original author (المصنف) didn't mention, and adds it as a تنبيه."
      },
      {
        id: "p5",
        type: "multiple-choice",
        prompt: "In اضْرِبَا, what is ألف الاثنين itself?",
        options: [
          { id: "a", labelAr: "ضمير متصل مبني على السكون في محل رفع فاعل" },
          { id: "b", labelAr: "حرف زائد لا معنى له" },
          { id: "c", labelAr: "جزء من جذر الفعل" }
        ],
        correctOptionId: "a",
        explanation: "Right — exactly like واو الجماعة and ياء المخاطبة, ألف الاثنين is its own ضمير متصل, مبني, sitting في محل رفع فاعل."
      }
    ],

    quranChallenge: {
      surahAr: "الأحزاب",
      surahEn: "Al-Ahzab",
      ayahRef: "33:1",
      arabic: "يَا أَيُّهَا النَّبِيُّ اتَّقِ اللَّهَ وَلَا تُطِعِ الْكَافِرِينَ وَالْمُنَافِقِينَ",
      translation: "O Prophet, fear Allah and do not obey the disbelievers and the hypocrites.",
      question: "اتَّقِ is from the root وقى, a معتل verb. What is its building state here?",
      options: [
        { id: "a", labelAr: "مبني على حذف حرف العلة" },
        { id: "b", labelAr: "مبني على حذف النون" },
        { id: "c", labelAr: "مبني على السكون" }
      ],
      correctOptionId: "a",
      explanation: "Right — اتَّقِ is فعل أمر معتل, مبني على حذف حرف العلة (the و drops). Same pattern as اخْشَ، اغْزُ، ارْمِ."
    },

    summary: [
      "فعل الأمر: مبني على السكون، إلا مع ألف الاثنين / واو الجماعة / ياء المخاطبة (→ حذف النون)، أو إذا كان معتلًّا (→ حذف حرف العلة).",
      "Your book's own flagged addition: with نون توكيد attached, الأمر shifts to مبني على الفتح — اضْرِبَنَّ، اضْرِبِنْ.",
      "Every attached pronoun in these forms (ألف الاثنين، واو الجماعة، ياء المخاطبة) is itself ضمير متصل مبني في محل رفع فاعل.",
      "Next: المضارع — the one verb type that's معرب في الأصل, and the two cases where even it becomes مبني."
    ],

    completion: {
      titleAr: "بناء فعل الأمر",
      statement: "Both always-mabni verb types are covered. Time for the one that usually isn't."
    }
  },

  "9.4": {
    id: "9.4",
    steps: ["intro", "concept", "example", "quran", "notice", "practice", "challenge", "summary", "completion"],

    sourceNote: {
      status: "book-cited",
      label: "Sourced from your reference book — page 19",
      detail: "The core rule (\"وَالْمُعْرَبُ مِنَ الْأَفْعَالِ: الْفِعْلُ الْمُضَارِعُ؛ بِشَرْطِ: أَلَّا يَتَّصِلَ بِهِ نُونُ التَّوْكِيدِ وَلَا نُونُ الْإِنَاثِ الْمُبَاشِرَةُ ... فَإِنِ اتَّصَلَتْ بِهِ نُونُ الْإِنَاثِ، بُنِيَ عَلَى السُّكُونِ ... فَإِنِ اتَّصَلَتْ بِنُونِ التَّوْكِيدِ الْمُبَاشِرَةِ، بُنِيَ عَلَى الْفَتْحِ\"), both its Qur'anic citations (البقرة:233 and يوسف:32), and the brief note on p. 20 that المضارع is مُعرب لمشابهته للاسم, are the book's own. The نون الإناث / نون النسوة terminology note (footnote 4, p. 19) and the two forms of نون التوكيد (ثقيلة / خفيفة, footnote 6) are also the book's own. The مرفوع contrast example (البقرة:255) is QURRA's own selection, independently verified, chosen to mirror the book's own مرفوع example يَضْرِبُ with a Qur'anic instance."
    },

    intro: {
      titleAr: "حالات بناء الفعل المضارع",
      titleEn: "When the Mudari' Verb Becomes Mabni",
      statement: "Part 7 called المضارع معرب في الأصل — and that's still true. But \"في الأصل\" always meant there was an exception. Here it is."
    },

    objective: [
      "restate why المضارع is normally معرب (لمشابهته للاسم), and recognize this as the one verb type Part 7 already covered",
      "identify the two conditions that build it instead: نون التوكيد المباشرة (→ فتح) and نون الإناث (→ سكون)",
      "hold المعرب and المبني مضارع apart clearly, using the book's own paired examples"
    ],

    concept: {
      termAr: "المضارع بين الإعراب والبناء",
      kind: "book-cited",
      definitionAr: "وَالْمُعْرَبُ مِنَ الْأَفْعَالِ: الْفِعْلُ الْمُضَارِعُ؛ بِشَرْطِ: أَلَّا يَتَّصِلَ بِهِ نُونُ التَّوْكِيدِ وَلَا نُونُ الْإِنَاثِ الْمُبَاشِرَةُ، نَحْوُ: يَضْرِبُ، وَيَخْشَى، فَإِنِ اتَّصَلَتْ بِهِ نُونُ الْإِنَاثِ، بُنِيَ عَلَى السُّكُونِ، نَحْوُ: ﴿وَالْوَالِدَاتُ يُرْضِعْنَ﴾، فَإِنِ اتَّصَلَتْ بِنُونِ التَّوْكِيدِ الْمُبَاشِرَةِ، بُنِيَ عَلَى الْفَتْحِ، نَحْوُ: ﴿لَيُسْجَنَنَّ وَلَيَكُونًا﴾.",
      definitionEn: "Among verbs, only المضارع is mu'rab — on the condition that neither نون التوكيد nor نون الإناث attaches directly to it. If نون الإناث attaches, it's built on السكون. If نون التوكيد attaches directly, it's built on الفتح.",
      lead: "Part 7 was correct — المضارع really is معرب, and your book even explains why: لمشابهته للاسم, because it resembles the noun. But that resemblance holds only under a condition — and two specific attachments break it."
    },

    definitionBreakdown: [
      {
        termAr: "معرب، بشرط",
        termEn: "Mu'rab — conditionally",
        glossEn: "no نون توكيد مباشرة, no نون إناث",
        explanation: "يَضْرِبُ، يَخْشَى — your book's own مرفوع examples, exactly the territory Part 7 already mapped: مرفوع، منصوب، مجزوم, all shifting with العوامل."
      },
      {
        termAr: "مبني على السكون",
        termEn: "Built on sukun",
        glossEn: "with نون الإناث attached",
        explanation: "﴿وَالْوَالِدَاتُ يُرْضِعْنَ﴾ — يُرْضِعْنَ is مبني على السكون because نون الإناث attached directly. Your book prefers the term نون الإناث over نون النسوة, since it's broader — it covers even non-human feminine plurals like شَجَرَاتٍ."
      },
      {
        termAr: "مبني على الفتح",
        termEn: "Built on fatha",
        glossEn: "with نون التوكيد المباشرة attached",
        explanation: "﴿لَيُسْجَنَنَّ وَلَيَكُونًا﴾ — both built على الفتح. نون التوكيد comes in two forms: ثقيلة (heavy, doubled — the ـنّ in لَيُسْجَنَنَّ) and خفيفة (light — written as ا at a pause, as in وَلَيَكُونًا). Both trigger the same shift when مباشرة (attached directly, not through an intervening سcون pronoun)."
      }
    ],

    conceptTree: {
      root: { ar: "الفعل المضارع", en: "the mudari' verb — معرب في الأصل" },
      branches: [
        { ar: "معرب", en: "the default — no نون توكيد مباشرة، no نون إناث attached", note: "مرفوع / منصوب / مجزوم, exactly as Part 7 taught." },
        { ar: "مبني على السكون", en: "with نون الإناث attached", note: "﴿وَالْوَالِدَاتُ يُرْضِعْنَ﴾." },
        { ar: "مبني على الفتح", en: "with نون التوكيد المباشرة attached", note: "﴿لَيُسْجَنَنَّ وَلَيَكُونًا﴾." }
      ]
    },

    example: {
      kind: "book-example",
      kindLabel: "Your book's own pair — p. 19",
      arabic: "يَضْرِبُ",
      transliteration: "yadribu",
      translation: "he strikes — فعل مضارع، معرب، مرفوع",
      explanation: "No نون توكيد, no نون إناث attached — so it stays معرب, and sits مرفوع بالضمة الظاهرة exactly as Part 7 taught.",
      contrast: {
        arabic: "لَيُسْجَنَنَّ",
        translation: "“he will surely be imprisoned” — فعل مضارع، مبني على الفتح",
        explanation: "Same verb category, same تصريف — but نون التوكيد الثقيلة is attached directly, so the condition for إعراب is broken and it becomes مبنيًّا على الفتح instead."
      }
    },

    quranExample: {
      surahAr: "البقرة",
      surahEn: "Al-Baqarah",
      ayahRef: "2:233",
      arabic: "وَالْوَالِدَاتُ يُرْضِعْنَ أَوْلَادَهُنَّ حَوْلَيْنِ كَامِلَيْنِ",
      translation: "Mothers may breastfeed their children two complete years.",
      notice: "يُرْضِعْنَ looks like a plain مضارع verb — but نون الإناث is attached directly to it. That attachment is exactly your book's stated condition for building: مبني على السكون, not معرب.",
      wordNotes: {
        "2-233-w1": { conceptLabel: "اسم، مبتدأ", explanation: "وَالْوَالِدَاتُ — “and the mothers.” مبتدأ, not our focus here." },
        "2-233-w2": { conceptLabel: "فعل مضارع، مبني على السكون", explanation: "يُرْضِعْنَ — “they breastfeed.” نون الإناث attached directly → بناء على السكون، لا إعراب." }
      }
    },

    noticeInteraction: {
      type: "word-tap",
      ayahRef: "12:32",
      instanceId: "9.4-notice",
      promptContext: "Yusuf 12:32",
      question: "Tap the مضارع verb in this ayah that's built on الفتح because of نون التوكيد الثقيلة attached directly to it.",
      correctWordId: "12-32-w6",
      correctFeedback: "Right — لَيُسْجَنَنَّ. نون التوكيد الثقيلة (the doubled ـنّ) is attached directly, so it's مبني على الفتح, not معرب.",
      incorrectFeedback: "Not quite — look for the verb ending in the doubled ـنّ, right in the middle of the ayah.",
      wordNotes: {
        "12-32-w3": { conceptLabel: "فعل مضارع، معرب، مجزوم", explanation: "يَفْعَلْ — مجزوم بـلم, Part 7's own territory, not our focus here." },
        "12-32-w6": { conceptLabel: "فعل مضارع، مبني على الفتح", explanation: "لَيُسْجَنَنَّ — نون التوكيد الثقيلة attached directly." },
        "12-32-w7": { conceptLabel: "فعل مضارع، مبني على الفتح", explanation: "وَلَيَكُونًا — نون التوكيد الخفيفة attached directly, written as ا at the pause." }
      }
    },

    practiceQuestions: [
      {
        id: "p1",
        type: "true-false",
        prompt: "المضارع is مبني by default, the same as الماضي والأمر.",
        correct: false,
        explanation: "No — المضارع is the one verb type that's معرب في الأصل. It only becomes مبني under the two specific conditions this lesson covers."
      },
      {
        id: "p2",
        type: "multiple-choice",
        prompt: "Why is المضارع normally معرب, according to your book?",
        options: [
          { id: "a", labelAr: "لمشابهته للاسم" },
          { id: "b", labelAr: "لأنه أكثر الأفعال استعمالًا" },
          { id: "c", labelAr: "لا سبب مذكور" }
        ],
        correctOptionId: "a",
        explanation: "Right — your book states the reason directly: المضارع resembles الاسم, and that resemblance is what earns it إعراب."
      },
      {
        id: "p3",
        type: "multiple-choice",
        prompt: "يُرْضِعْنَ is مبني على السكون. What caused the shift?",
        options: [
          { id: "a", labelAr: "اتصال نون الإناث" },
          { id: "b", labelAr: "اتصال نون التوكيد" },
          { id: "c", labelAr: "كونه فعلًا معتلًّا" }
        ],
        correctOptionId: "a",
        explanation: "Right — نون الإناث attaching directly is what shifts a مضارع verb to مبني على السكون."
      },
      {
        id: "p4",
        type: "true-false",
        prompt: "نون التوكيد has only one form.",
        correct: false,
        explanation: "No — your book names two: ثقيلة (heavy, doubled, like the ـنّ in لَيُسْجَنَنَّ) and خفيفة (light, like the ا in وَلَيَكُونًا)."
      },
      {
        id: "p5",
        type: "multiple-choice",
        prompt: "يَضْرِبُ stays معرب. What does that tell you about its attachments?",
        options: [
          { id: "a", labelAr: "لا نون توكيد مباشرة ولا نون إناث متصلة به" },
          { id: "b", labelAr: "اتصلت به نون الإناث فقط" },
          { id: "c", labelAr: "اتصلت به نون التوكيد الخفيفة" }
        ],
        correctOptionId: "a",
        explanation: "Right — staying معرب means neither of the two building conditions applies. That's the whole shrط your book states."
      }
    ],

    quranChallenge: {
      surahAr: "البقرة",
      surahEn: "Al-Baqarah",
      ayahRef: "2:255",
      arabic: "يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ",
      translation: "He knows what is before them and what is behind them.",
      question: "يَعْلَمُ — no نون توكيد, no نون إناث attached to it. What is its state?",
      options: [
        { id: "a", labelAr: "معرب، مرفوع بالضمة الظاهرة" },
        { id: "b", labelAr: "مبني على السكون، لاتصاله بنون الإناث" },
        { id: "c", labelAr: "مبني على الفتح، لاتصاله بنون التوكيد" }
      ],
      correctOptionId: "a",
      explanation: "Right — with neither building condition present, يَعْلَمُ stays معرب، مرفوع — the same state يَضْرِبُ is in, and the default for every مضارع verb."
    },

    summary: [
      "المضارع معرب في الأصل، لمشابهته للاسم — the one verb type Part 7 already covers in full.",
      "نون الإناث المباشرة → بناء على السكون، نحو ﴿وَالْوَالِدَاتُ يُرْضِعْنَ﴾.",
      "نون التوكيد المباشرة (ثقيلة أو خفيفة) → بناء على الفتح، نحو ﴿لَيُسْجَنَنَّ وَلَيَكُونًا﴾.",
      "Next: the complete map — الماضي، الأمر، والمضارع — tying every piece of this Part together."
    ],

    completion: {
      titleAr: "حالات بناء الفعل المضارع",
      statement: "Both building conditions for المضارع are covered. One lesson left: the full picture."
    }
  },

  "9.5": {
    id: "9.5",
    steps: ["intro", "concept", "example", "quran", "practice", "summary", "completion"],

    sourceNote: {
      status: "book-cited",
      label: "Synthesis of pages 17–19",
      detail: "Every rule in this closing map is the book's own, drawn from Lessons 9.1–9.4. The one-line bridge to the next Part — \"وَأَمَّا الْحُرُوفُ فَمَبْنِيَّةٌ كُلُّهَا\" (p. 20) — is also the book's own; it's mentioned here only as a pointer, with no further detail, since الحروف themselves belong to Part 10. The combined conceptTree below covers only الفعل, matching what these pages actually establish — it does not merge in Part 8's الاسم map, since the two categories' مبني/معرب distributions aren't identical and the source doesn't give a single combined tree for both."
    },

    intro: {
      titleAr: "الخريطة الكاملة للأفعال",
      titleEn: "The Complete Map of Verb Building",
      statement: "Three verb types, three building stories. Here's the whole picture, in one place."
    },

    objective: [
      "state all three verb types' building status in one sentence: الماضي مبني، الأمر مبني، والمضارع معرب في الأصل ويُبنى في حالات مخصوصة",
      "see الماضي، الأمر، والمضارع المعرب together in a single ayah",
      "connect Part 9 back to Part 7 (المضارع المعرب) and Part 8 (الاسم المبني) as one coherent system"
    ],

    concept: {
      termAr: "الفعل: الخريطة الكاملة",
      kind: "book-cited",
      definitionAr: "الْمَاضِي مَبْنِيٌّ، وَالْأَمْرُ مَبْنِيٌّ، وَالْمُضَارِعُ مُعْرَبٌ فِي الْأَصْلِ، وَيُبْنَى فِي حَالَاتٍ مَخْصُوصَةٍ.",
      definitionEn: "The past tense is mabni. The imperative is mabni. The present tense is mu'rab by default, and is built only in specific stated cases.",
      lead: "المضارع ليس مبنيًّا دائمًا ولا معربًا في كل حالة؛ هو معرب في الأصل، وتوجد حالات مخصوصة لبنائه بحسب ما يقرره المصدر. That one sentence is the center of this whole Part — everything in Lessons 9.1 through 9.4 built toward it."
    },

    definitionBreakdown: [
      {
        termAr: "الماضي",
        termEn: "Lesson 9.2",
        glossEn: "مبني دائمًا",
        explanation: "الفتح (الأصل) · الضم (واو الجماعة) · السكون (ضمير رفع متحرك). Every attached pronoun: مبني في محل رفع فاعل."
      },
      {
        termAr: "الأمر",
        termEn: "Lesson 9.3",
        glossEn: "مبني دائمًا",
        explanation: "السكون (الأصل) · حذف النون (ألف الاثنين، واو الجماعة، ياء المخاطبة) · حذف حرف العلة (معتل) · الفتح (نون التوكيد — الإضافة المذكورة في مصدرك)."
      },
      {
        termAr: "المضارع",
        termEn: "Lesson 9.4",
        glossEn: "معرب في الأصل",
        explanation: "معرب (بشرط خلوّه من نون التوكيد المباشرة ونون الإناث) · مبني على السكون (نون الإناث) · مبني على الفتح (نون التوكيد المباشرة)."
      }
    ],

    conceptTree: {
      root: { ar: "الفعل", en: "the complete verb map — Part 9" },
      branches: [
        { ar: "الماضي", en: "مبني دائمًا", note: "مبني على الفتح؛ أو الضم (واو الجماعة)؛ أو السكون (ضمير رفع متحرك)." },
        { ar: "الأمر", en: "مبني دائمًا", note: "مبني على السكون؛ أو حذف النون (الأفعال الخمسة)؛ أو حذف حرف العلة (معتل)؛ أو الفتح (نون التوكيد)." },
        {
          ar: "المضارع",
          en: "معرب في الأصل",
          note: "يُبنى في حالتين مخصوصتين فقط.",
          children: [
            { ar: "معرب", en: "مرفوع / منصوب / مجزوم — Part 7's own territory." },
            { ar: "مبني على السكون", en: "نون الإناث المباشرة." },
            { ar: "مبني على الفتح", en: "نون التوكيد المباشرة." }
          ]
        }
      ]
    },

    example: {
      kind: "qurra-comparison",
      kindLabel: "Closing recap",
      arabic: "ضَرَبَ",
      transliteration: "daraba",
      translation: "فعل ماضٍ، مبني — fixed, whatever role it plays",
      explanation: "Lessons 9.1–9.2: مبني على الفتح، أصالةً، بلا استثناء.",
      contrast: {
        arabic: "يَكْتُبُ",
        translation: "فعل مضارع، معرب — shifting with العوامل",
        explanation: "Part 7, reactivated one last time: مرفوع، منصوب، مجزوم. The ONE verb state in the entire language where a فعل's ending genuinely moves — and even this one has its own مبني exceptions, from Lesson 9.4."
      }
    },

    quranExample: {
      surahAr: "البقرة",
      surahEn: "Al-Baqarah",
      ayahRef: "2:21",
      arabic: "يَا أَيُّهَا النَّاسُ اعْبُدُوا رَبَّكُمُ الَّذِي خَلَقَكُمْ وَالَّذِينَ مِنْ قَبْلِكُمْ لَعَلَّكُمْ تَتَّقُونَ",
      translation: "O mankind, worship your Lord, who created you and those before you, that you may become righteous.",
      notice: "One ayah, all three verb types. خَلَقَكُمْ: فعل ماضٍ, مبني على الفتح (Lesson 9.2). اعْبُدُوا: فعل أمر, مبني على حذف النون (Lesson 9.3). تَتَّقُونَ: فعل مضارع, معرب, مرفوع بثبوت النون — no نون توكيد, no نون إناث, so it stays exactly where Part 7 left it.",
      wordNotes: {
        "2-21-w4": { conceptLabel: "فعل أمر، مبني على حذف النون", explanation: "اعْبُدُوا — Lesson 9.3." },
        "2-21-w7": { conceptLabel: "فعل ماضٍ، مبني على الفتح", explanation: "خَلَقَكُمْ — Lesson 9.2." },
        "2-21-w12": { conceptLabel: "فعل مضارع، معرب، مرفوع", explanation: "تَتَّقُونَ — Part 7's own territory, still معرب here." }
      }
    },

    practiceQuestions: [
      {
        id: "p1",
        type: "multiple-choice",
        prompt: "Complete your book's own summary: الماضي مبني، الأمر مبني، والمضارع...",
        options: [
          { id: "a", labelAr: "معرب في الأصل، ويُبنى في حالات مخصوصة" },
          { id: "b", labelAr: "مبني دائمًا بلا استثناء" },
          { id: "c", labelAr: "لا إعراب له ولا بناء" }
        ],
        correctOptionId: "a",
        explanation: "Right — المضارع keeps its Part 7 status as the default, with Lesson 9.4's two cases as the only exceptions."
      },
      {
        id: "p2",
        type: "true-false",
        prompt: "In 2:21, اعْبُدُوا and خَلَقَكُمْ share the exact same بناء state.",
        correct: false,
        explanation: "No — اعْبُدُوا is مبني على حذف النون (أمر + واو الجماعة), while خَلَقَكُمْ is مبني على الفتح (ماضٍ, the default). Same مبني status, different بناء."
      },
      {
        id: "p3",
        type: "multiple-choice",
        prompt: "What keeps تَتَّقُونَ معربًا in 2:21?",
        options: [
          { id: "a", labelAr: "خلوّه من نون التوكيد ونون الإناث" },
          { id: "b", labelAr: "كونه آخر كلمة في الآية" },
          { id: "c", labelAr: "اتصاله بواو الجماعة" }
        ],
        correctOptionId: "a",
        explanation: "Right — without either building condition attached, a مضارع verb simply stays معرب, exactly as Part 7 described."
      },
      {
        id: "p4",
        type: "true-false",
        prompt: "الحروف (particles) are sometimes مبني and sometimes معرب, like المضارع.",
        correct: false,
        explanation: "No — your book states الحروف are مبنية كلها, all of them, with no exception at all. That's Part 10's own topic."
      },
      {
        id: "p5",
        type: "multiple-choice",
        prompt: "Across Parts 8 and 9, which statement best matches what the source actually supports?",
        options: [
          { id: "a", labelAr: "في الأسماء والأفعال كليهما توجد كلمات مبنية وأخرى معربة، لكن بنسب مختلفة" },
          { id: "b", labelAr: "كل الأسماء معربة وكل الأفعال مبنية، بلا أي استثناء" },
          { id: "c", labelAr: "البناء خاص بالأفعال فقط، ولا وجود له في الأسماء" }
        ],
        correctOptionId: "a",
        explanation: "Right — Part 8 showed مبني nouns alongside the mostly-معرب majority; Part 9 showed مبني verbs (الماضي والأمر) alongside the one مضارع exception. Both categories mix إعراب and بناء — just not in the same proportions."
      }
    ],

    summary: [
      "المضارع ليس مبنيًّا دائمًا ولا معربًا في كل حالة؛ هو معرب في الأصل، وتوجد حالات مخصوصة لبنائه بحسب ما يقرره المصدر.",
      "الماضي: مبني على الفتح / الضم (واو الجماعة) / السكون (ضمير رفع متحرك).",
      "الأمر: مبني على السكون / حذف النون (الأفعال الخمسة) / حذف حرف العلة (معتل) / الفتح (نون التوكيد).",
      "المضارع: معرب في الأصل (Part 7) — مبني على السكون (نون الإناث) أو الفتح (نون التوكيد) في حالتين فقط.",
      "One line from your book points ahead: وأما الحروف فمبنية كلها — all particles, always mabni. That's next."
    ],

    completion: {
      titleAr: "الخريطة الكاملة للأفعال",
      statement: "الاسم والفعل are both mapped now — what's مبني, what's معرب, and why. One word class is left."
    }
  },

  /* ========================================================================
     PART 10 — الحروف (Particles)
     Final curriculum section. Source-first: every حرف-group taught here
     was already sourced and verified for Parts 4 (حروف الجر), 5 (حروف
     العطف), 6 (إنّ وأخواتها / لا النافية للجنس), 7 (نواصب ⁄ جوازم
     المضارع), and 9 (the p.20 bridge rule). Part 10 does not re-derive
     those citations from new page images — it cites them directly (each
     sourceNote below names the exact lesson and page already on record)
     and re-teaches them through one new lens: الحرف → العامل → المعمول
     → الأثر. 10.2's عامل/غير عامل framing and 10.9's semantic-category
     framing are QURRA's own synthesis over already book-cited facts —
     flagged "qurra-synthesis" below, not "book-cited" — following the
     exact same honest-labeling precedent already used for Lesson 5.1
     (التوابع's general definition, built from a repeated pattern across
     four book definitions, not from one single book sentence) and
     Lesson 2.4 (the مبني/معرب side-by-side comparison). See the Part 10
     final report for the full citation map.
     ======================================================================== */

  "10.1": {
    id: "10.1",
    steps: ["intro", "concept", "example", "quran", "practice", "summary", "completion"],

    sourceNote: {
      status: "book-cited",
      label: "Cross-references Lesson 1.6 (p. 14) and Lesson 2.4 / 9.5 (p. 20) — no new pages",
      detail: "الحرف's own definition — الحَرْفُ: مَا لَا يَصْلُحُ مَعَهُ دَلِيلُ الِاسْمِ وَلَا دَلِيلُ الْفِعْلِ — is the book's own, page 14, already built in Lesson 1.6. The closing rule وَأَمَّا الْحُرُوفُ فَمَبْنِيَّةٌ كُلُّهَا is also the book's own, page 20, already built in Lesson 2.4 and reactivated in Lesson 9.5's own closing line. This lesson introduces no new book material — it is the bridge the book's own page-20 line and Lesson 9.5's closing line both already pointed to, now finally followed."
    },

    intro: {
      titleAr: "ما هو الحرف؟",
      titleEn: "What Is a Particle?",
      statement: "You've met الاسم and الفعل in full. One word class from Lesson 1.3 is still waiting — and you already know two things about it."
    },

    objective: [
      "recall الحرف as the third, by-exclusion type of كلمة from Part 1",
      "restate the one fact Part 9 already gave you about every حرف: وأما الحروف فمبنية كلها",
      "see why الحرف's meaning only shows up through what surrounds it, not from the word alone"
    ],

    concept: {
      termAr: "الحرف",
      kind: "book-cited",
      definitionAr: "الحَرْفُ: مَا لَا يَصْلُحُ مَعَهُ دَلِيلُ الِاسْمِ وَلَا دَلِيلُ الْفِعْلِ. وَأَمَّا الْحُرُوفُ فَمَبْنِيَّةٌ كُلُّهَا.",
      definitionEn: "A particle is whatever admits neither the sign of a noun nor the sign of a verb (p. 14) — and every single one of them is مبني, without exception (p. 20).",
      lead: "Two facts, both already yours. Lesson 1.6: الحرف is defined by what it ISN'T. Lesson 9.5's closing line: whatever it is, its ending never moves. This Part is about what fills the gap those two facts leave open — what a حرف actually DOES inside a sentence."
    },

    definitionBreakdown: [
      {
        termAr: "تعريفه — بالاستثناء",
        termEn: "Lesson 1.6, p. 14",
        glossEn: "هَلْ، فِي، لَمْ",
        explanation: "الاسم has a positive test; الفعل has a positive test. الحرف has neither — it's only ever what's left over once both fail."
      },
      {
        termAr: "بناؤه — بلا استثناء",
        termEn: "Lesson 2.4 / 9.5, p. 20",
        glossEn: "وأما الحروف فمبنية كلها",
        explanation: "الاسم can be مبني or معرب (Part 8 showed you the مبني minority). الفعل can too (Part 9: الماضي والأمر مبنيان، والمضارع معرب في الأصل). الحرف never splits — every one, always, مبني."
      },
      {
        termAr: "ما تبقى — وظيفته",
        termEn: "this Part's own question",
        glossEn: "فِي، لَنْ، إِنَّ، الواو...",
        explanation: "A fixed shape and a negative definition tell you what a حرف ISN'T and that it NEVER moves — neither tells you what it DOES once it's inside a sentence. That's Part 10, lesson by lesson."
      }
    ],

    example: {
      kind: "book-example",
      kindLabel: "Lesson 1.6's own examples, reactivated (p. 14)",
      arabic: "فِي",
      transliteration: "Fī",
      translation: "\"in\" (a preposition)",
      explanation: "فِي means nothing by itself — \"in\" what? Attach it to الْمَسْجِدِ and it suddenly does real grammatical work: it puts the noun after it into خفض. That work is this Part's subject.",
      contrast: {
        arabic: "هَلْ",
        translation: "Is…? / Does…? (a question particle)",
        explanation: "هَلْ also means nothing alone, and attaches to a whole sentence rather than one noun — but unlike فِي, it changes nothing about that sentence's إعراب. Same category, حرف, two completely different jobs. Lesson 10.2 names that difference."
      }
    },

    quranExample: {
      surahAr: "الإخلاص",
      surahEn: "Al-Ikhlas",
      ayahRef: "112:3",
      arabic: "لَمْ يَلِدْ وَلَمْ يُولَدْ",
      translation: "He neither begets nor is born.",
      notice: "You met this exact ayah in Lesson 1.6 — لَمْ is the book's own example of a حرف (p. 14). Now look at it with Part 9's rule in mind: لَمْ never changes shape, whatever it attaches to. That's وأما الحروف فمبنية كلها, confirmed in the same verse you first met it in."
    },

    practiceQuestions: [
      {
        id: "p1",
        type: "true-false",
        prompt: "الحرف has its own positive test, the same way الاسم and الفعل do.",
        correct: false,
        explanation: "No — Lesson 1.6, p. 14: الحرف is defined by exclusion, by failing BOTH other tests. It has no test of its own."
      },
      {
        id: "p2",
        type: "multiple-choice",
        prompt: "Which of these is true of every single حرف, without exception?",
        options: [
          { id: "a", labelAr: "مبني دائمًا" },
          { id: "b", labelAr: "معرب غالبًا" },
          { id: "c", labelAr: "يتغير آخره بحسب موقعه" }
        ],
        correctOptionId: "a",
        explanation: "Right — وأما الحروف فمبنية كلها (p. 20). Unlike الاسم and الفعل, there's no مبني/معرب split for حرف at all."
      },
      {
        id: "p3",
        type: "true-false",
        prompt: "فِي and هَلْ do the exact same kind of grammatical job, since both are حروف.",
        correct: false,
        explanation: "No — sharing a category (حرف) doesn't mean sharing a function. فِي changes a noun's إعراب; هَلْ changes none. That's exactly what the rest of this Part sorts out."
      }
    ],

    summary: [
      "الحرف: مَا لَا يَصْلُحُ مَعَهُ دَلِيلُ الِاسْمِ وَلَا دَلِيلُ الْفِعْلِ — defined by exclusion (Lesson 1.6, p. 14).",
      "وأما الحروف فمبنية كلها — every حرف is مبني, with zero exceptions (Lesson 2.4 / 9.5, p. 20).",
      "Neither fact says what a حرف DOES once it enters a sentence — some change a word's إعراب, some don't. That's this entire Part.",
      "Next: the one distinction that organizes everything else in Part 10 — حروف عاملة vs. حروف غير عاملة."
    ],

    completion: {
      titleAr: "ما هو الحرف؟",
      statement: "Definition and بناء, both already yours. Next: what a حرف actually does."
    }
  },

  "10.2": {
    id: "10.2",
    steps: ["intro", "concept", "example", "practice", "summary", "completion"],

    sourceNote: {
      status: "qurra-synthesis",
      label: "QURRA's own organizing lens, built from facts already cited in Lessons 6.1, 4.16, 5.5, 6.4, 6.6, 7.3–7.5",
      detail: "Your book never gives one single sentence classifying \"حروف\" in general as عاملة/غير عاملة — the same honest situation already documented for Lesson 5.1's general تابع definition. What the book DOES give, repeatedly and explicitly, is the word العامل itself: بَابُ الْعَوَامِلِ الدَّاخِلَةِ عَلَى الْمُبْتَدَأِ وَالْخَبَرِ (p. 93, Lesson 6.1's own opening citation for النواسخ), plus every individual حرف-group already taught telling you exactly what it does: يُخْفَضُ (p. 169, حروف الجر), تَنْصِبُ...وَتَرْفَعُ (p. 108, إنّ), تَنْصِبُ (p. 183, نواصب), تَجْزِمُ (pp. 190–193, جوازم) — against عطف النسق's own, different book-given description: يَتَوَسَّطُ بَيْنَهُ وَبَيْنَ مَتْبُوعِهِ (p. ~211, a LINK, not a stated إعراب-change). This lesson's two-way split — عامل vs. غير عامل — organizes those already-verified, already-cited facts under one lens; it adds no new grammatical claim the book doesn't already support lesson by lesson. See the Part 10 final report for the full source map."
    },

    intro: {
      titleAr: "الحروف العاملة وغير العاملة",
      titleEn: "Operating vs. Non-Operating Particles",
      statement: "The one distinction that organizes every lesson still ahead in this Part."
    },

    objective: [
      "define حرف عامل: a particle that enters a sentence and changes another word's إعراب",
      "define حرف غير عامل: a particle that doesn't — even one that links, like حرف عطف",
      "avoid the trap of reading عامل as \"important\" and غير عامل as \"unimportant\""
    ],

    concept: {
      termAr: "عامل ⁄ غير عامل",
      kind: "qurra-synthesis",
      definitionAr: "العَامِلُ: مَا دَخَلَ عَلَى كَلِمَةٍ فَغَيَّرَ حَالَتَهَا الْإِعْرَابِيَّةَ. وَمِنَ الْحُرُوفِ مَا هُوَ عَامِلٌ، وَمِنْهَا مَا لَيْسَ كَذَلِكَ.",
      definitionEn: "A عامل is anything that enters a structure and changes another word's grammatical state — forces it into رفع، نصب، خفض، or جزم that it wouldn't otherwise have. Some حروف do exactly that. Others — just as real, just as meaningful — don't.",
      lead: "You've already SEEN this split; you just hadn't named it yet. إنّ forces اسمها into نصب — a عامل. الواو in جَاءَ زَيْدٌ وَعَمْرٌو just links عَمْرٌو to زَيْدٌ, who was already مرفوع on his own — not a عامل, even though it's doing real grammatical work."
    },

    definitionBreakdown: [
      {
        termAr: "حرف عامل",
        termEn: "changes إعراب",
        glossEn: "لَنْ، إنّ، مِنْ...",
        explanation: "Enters → the word after it takes on a state it wouldn't otherwise have. لَنْ يَكْتُبَ: يكتب was مرفوع; لن forced it into نصب. That forcing IS عمل."
      },
      {
        termAr: "حرف غير عامل",
        termEn: "doesn't",
        glossEn: "الواو (عطف)، هَلْ...",
        explanation: "جَاءَ زَيْدٌ وَعَمْرٌو: عَمْرٌو is مرفوع — but not because الواو forced it there. It follows زَيْدٌ's already-existing رفع by التبعية (Part 5's own word for it), not by a new عامل reaching in."
      },
      {
        termAr: "ليس حكمًا على القيمة",
        termEn: "important point",
        glossEn: "both carry real meaning",
        explanation: "عامل ≠ \"important\"; غير عامل ≠ \"unimportant.\" حروف العطف (غير عاملة) link entire ideas together — hardly minor. The split is purely about one thing: does it force a NEW إعراب state, or not?"
      }
    ],

    conceptTree: {
      root: { ar: "الحروف", en: "by function, not by shape" },
      branches: [
        { ar: "حروف عاملة", en: "force a new إعراب state", note: "حروف الجر (تخفض) · نواصب المضارع (تنصب) · جوازم المضارع (تجزم) · إنّ وأخواتها (تنصب الاسم، ترفع الخبر) · لا النافية للجنس (نفس عمل إنّ) — Lessons 10.3–10.7." },
        { ar: "حروف غير عاملة", en: "no forced إعراب change", note: "حروف العطف (تربط فقط، Lesson 10.8) وحروف أخرى تحمل معنى بلا عمل إعرابي (Lesson 10.9)." }
      ]
    },

    example: {
      kind: "qurra-comparison",
      kindLabel: "Same sentence shape, two different حروف, two different outcomes",
      arabic: "جَاءَ زَيْدٌ وَعَمْرٌو",
      transliteration: "Jā'a Zaydun wa 'Amrun",
      translation: "Zayd came, and 'Amr",
      explanation: "الواو links عَمْرٌو to زَيْدٌ — عَمْرٌو stays مرفوع because it follows زَيْدٌ's own رفع, already established before الواو even entered. غير عامل: nothing was forced.",
      contrast: {
        arabic: "إِنَّ زَيْدًا قَائِمٌ",
        translation: "Indeed, Zayd is standing",
        explanation: "إنّ enters the exact same kind of sentence and forces زَيْدًا from its baseline رفع into نصب. عامل: something WAS forced. Same word class (حرف), opposite behavior."
      }
    },

    practiceQuestions: [
      {
        id: "p1",
        type: "multiple-choice",
        prompt: "ما الذي يميّز الحرف العامل عن الحرف غير العامل؟",
        options: [
          { id: "a", labelAr: "العامل يغيّر الحالة الإعرابية لكلمة أخرى؛ غير العامل لا يفعل ذلك" },
          { id: "b", labelAr: "العامل أكثر أهمية من غير العامل" },
          { id: "c", labelAr: "العامل يُنطق، وغير العامل لا يُنطق" }
        ],
        correctOptionId: "a",
        explanation: "Right — purely about forcing a new إعراب state or not. Nothing about importance or pronunciation."
      },
      {
        id: "p2",
        type: "true-false",
        prompt: "حرف العطف (مثل الواو) يُعدّ حرفًا عاملًا لأنه يربط كلمتين.",
        correct: false,
        explanation: "No — linking is real work, but it isn't عمل إعرابي. المعطوف follows المعطوف عليه's EXISTING حالة by التبعية, not because حرف العطف forced a new one."
      },
      {
        id: "p3",
        type: "multiple-choice",
        prompt: "في «لَنْ يَكْتُبَ»، ما الذي يجعل «لن» حرفًا عاملًا؟",
        options: [
          { id: "a", labelAr: "أنها دخلت فغيّرت حالة «يكتب» من الرفع إلى النصب" },
          { id: "b", labelAr: "أنها أطول من «في»" },
          { id: "c", labelAr: "أنها تأتي أول الجملة" }
        ],
        correctOptionId: "a",
        explanation: "Right — يكتب was مرفوع by default; لن forced a NEW state, نصب. That forcing is exactly what عامل means."
      }
    ],

    summary: [
      "عامل: a حرف that enters and forces another word into a NEW إعراب state it wouldn't otherwise have.",
      "غير عامل: a حرف that doesn't — even one doing real work, like linking (حروف العطف).",
      "عامل and غير عامل are not a value judgment — both carry genuine grammatical or semantic weight.",
      "Lessons 10.3–10.7 cover the عاملة حروف you've already met: حروف الجر، نواصب، جوازم، إنّ وأخواتها، لا النافية. Lessons 10.8–10.9 cover the rest."
    ],

    completion: {
      titleAr: "الحروف العاملة وغير العاملة",
      statement: "One lens, every lesson ahead organized by it. Next: the first عامل حرف — حروف الجر."
    }
  },

  "10.3": {
    id: "10.3",
    steps: ["intro", "concept", "example", "quran", "notice", "practice", "challenge", "summary", "completion"],

    sourceNote: {
      status: "book-cited",
      label: "Cross-references Lesson 4.16 (pp. 169–172) — no new pages",
      detail: "المخفوض بالحرف: هُوَ مَا يُخْفَضُ بِـ«مِنْ، وَإِلَى، وَعَنْ، وَعَلَى، وَفِي»، وَ«الْبَاءِ، وَاللَّامِ، وَالْكَافِ»، وَغَيْرِهَا (pp. 169–170) — the exact same citation Lesson 4.16 already built in full, including its Qur'anic example (An-Nasr 110:2). This lesson doesn't re-teach that material; it revisits it through Part 10's own lens — حرف الجر as a عامل — and names the عامل → معمول → أثر chain explicitly, which Lesson 4.16 (written before Part 10 existed) didn't yet have the vocabulary for."
    },

    intro: {
      titleAr: "حروف الجر",
      titleEn: "Prepositions as عوامل",
      statement: "You met this role back in Part 4. Now see it for what it structurally is: the first عامل حرف in this course."
    },

    objective: [
      "restate من، إلى، عن، على، في، الباء، اللام، الكاف as حروف جر from Lesson 4.16",
      "state the chain explicitly: حرف الجر (العامل) يدخل على اسم (المعمول) فيخفضه (الأثر)",
      "recognize حرف الجر as a عامل in a Qur'anic phrase, reactivating Lesson 4.16's own ayah"
    ],

    concept: {
      termAr: "حرف الجر: العامل الأول",
      kind: "book-cited",
      definitionAr: "المخفوض بالحرف: هُوَ مَا يُخْفَضُ بِـ«مِنْ، وَإِلَى، وَعَنْ، وَعَلَى، وَفِي»، وَ«الْبَاءِ، وَاللَّامِ، وَالْكَافِ»، وَغَيْرِهَا.",
      definitionEn: "A حرف جر enters right before a noun and puts it into خفض — Lesson 4.16's own material, now named by its role in Lesson 10.2's framework.",
      lead: "العامل: حرف الجر (في، من، الباء...). المعمول: الاسم right after it. الأثر: خفض. Every single one of Lesson 4.16's examples already showed you this chain — this lesson just gives the three links names."
    },

    definitionBreakdown: [
      {
        termAr: "العامل",
        termEn: "the particle itself",
        glossEn: "من، إلى، عن، على، في، الباء، اللام، الكاف...",
        explanation: "Lesson 4.16's full list, p. 169–170 — separate-word particles and always-fused ones alike, all عاملة."
      },
      {
        termAr: "المعمول",
        termEn: "what it enters upon",
        glossEn: "الاسم الواقع بعده مباشرة",
        explanation: "The noun right after the حرف — never a فعل, never another حرف. حروف الجر only ever act on أسماء."
      },
      {
        termAr: "الأثر",
        termEn: "what changes",
        glossEn: "خفض — بالكسرة غالبًا",
        explanation: "The noun's حالة shifts to مجرور (خفض), Part 3's own sign for it — usually الكسرة الظاهرة, unless the noun's own shape calls for a substitute sign."
      }
    ],

    example: {
      kind: "traditional-grammar-example",
      kindLabel: "Lesson 4.16's own worked example, reactivated",
      arabic: "ذَهَبْتُ إِلَى الْمَسْجِدِ",
      transliteration: "Dhahabtu ila l-masjidi",
      translation: "I went to the mosque",
      explanation: "العامل: إِلَى. المعمول: الْمَسْجِدِ. الأثر: خفض, بالكسرة الظاهرة.",
      contrast: {
        arabic: "ذَهَبْتُ الْمَسْجِدَ",
        translation: "(without إلى — not how the sentence actually runs)",
        explanation: "Drop إلى, and nothing forces الْمَسْجِدِ into خفض any more. The عامل is doing real work — remove it, and its أثر disappears with it."
      }
    },

    quranExample: {
      surahAr: "النصر",
      surahEn: "An-Nasr",
      ayahRef: "110:2",
      arabic: "وَرَأَيْتَ النَّاسَ يَدْخُلُونَ فِي دِينِ اللَّهِ أَفْوَاجًا",
      translation: "And you see the people entering into the religion of Allah in multitudes.",
      notice: "Lesson 4.16's own ayah. في is العامل; دِينِ is المعمول; خفض بالكسرة الظاهرة is الأثر. Same chain, every time a حرف جر appears.",
      wordNotes: {
        "110-2-w4": { conceptLabel: "العامل — حرف جر", explanation: "في — دخل فخفض ما بعده." },
        "110-2-w5": { conceptLabel: "المعمول، والأثر: خفض", explanation: "دِينِ — مجرورة بـ«في»، وعلامة جرها الكسرة الظاهرة." }
      }
    },

    noticeInteraction: {
      type: "word-tap",
      ayahRef: "110:2",
      instanceId: "10.3-notice",
      promptContext: "An-Nasr 110:2",
      question: "Tap المعمول — the noun حرف الجر's أثر actually landed on.",
      correctWordId: "110-2-w5",
      correctFeedback: "Right — دِينِ is المعمول; في is the عامل that reached it.",
      incorrectFeedback: "Not quite — المعمول is the noun right after the عامل, not the عامل itself.",
      wordNotes: {
        "110-2-w4": { conceptLabel: "العامل", explanation: "في — حرف جر، كلمة منفصلة لا محل لها من الإعراب." },
        "110-2-w5": { conceptLabel: "المعمول", explanation: "دِينِ — مجرورة بحرف الجر «في»، وعلامة جرها الكسرة الظاهرة." }
      }
    },

    practiceQuestions: [
      {
        id: "p1",
        type: "true-false",
        prompt: "حرف الجر يدخل على الأفعال كما يدخل على الأسماء.",
        correct: false,
        explanation: "No — المعمول لحرف الجر دائمًا اسم، لا فعل ولا حرف آخر."
      },
      {
        id: "p2",
        type: "multiple-choice",
        prompt: "في «ذَهَبْتُ إِلَى الْمَسْجِدِ»، ما الأثر الذي تركه العامل «إلى»؟",
        options: [
          { id: "a", labelAr: "خفض الاسم الذي بعده" },
          { id: "b", labelAr: "نصب الفعل" },
          { id: "c", labelAr: "جزم الفعل" }
        ],
        correctOptionId: "a",
        explanation: "Right — حرف الجر's one job: خفض the noun right after it."
      },
      {
        id: "p3",
        type: "true-false",
        prompt: "جميع حروف الجر كلمات منفصلة، لا تتصل بما بعدها كتابةً.",
        correct: false,
        explanation: "No — Lesson 4.16: الباء، اللام، الكاف تُكتب متصلة دائمًا بالاسم بعدها، خلافًا لـ من، إلى، عن، على، في."
      }
    ],

    quranChallenge: {
      surahAr: "النصر",
      surahEn: "An-Nasr",
      ayahRef: "110:2",
      arabic: "وَرَأَيْتَ النَّاسَ يَدْخُلُونَ فِي دِينِ اللَّهِ أَفْوَاجًا",
      translation: "And you see the people entering into the religion of Allah in multitudes.",
      question: "ما العامل، وما أثره، في هذه الآية؟",
      options: [
        { id: "a", labelAr: "في: حرف جر عامل، خفض ما بعده" },
        { id: "b", labelAr: "في: حرف عطف، ربط ما بعده" },
        { id: "c", labelAr: "في: اسم مجرور" }
      ],
      correctOptionId: "a",
      explanation: "Right — في is a عامل حرف جر; its أثر is خفض on دِينِ, right after it."
    },

    summary: [
      "حرف الجر: أول عامل حرف في هذا الباب — يدخل على اسم (المعمول) فيخفضه (الأثر).",
      "القائمة كاملة من Lesson 4.16: من، إلى، عن، على، في (منفصلة) — الباء، اللام، الكاف (متصلة) — وغيرها (pp. 169–176).",
      "العامل ← المعمول ← الأثر: في ← دِينِ ← خفض (An-Nasr 110:2).",
      "Next: a عامل من نوع مختلف — يدخل على الفعل المضارع لا على الاسم."
    ],

    completion: {
      titleAr: "حروف الجر",
      statement: "أول عامل مفهوم بإطار Part 10. Next: نواصب المضارع."
    }
  },

  "10.4": {
    id: "10.4",
    steps: ["intro", "concept", "example", "quran", "notice", "practice", "challenge", "summary", "completion"],

    sourceNote: {
      status: "book-cited",
      label: "Cross-references Lesson 7.3 (p. 183) — no new pages",
      detail: "النَّوَاصِبُ الَّتِي تَنْصِبُهُ قِسْمَانِ: قِسْمٌ يَنْصِبُ بِنَفْسِهِ... فَالْأَوَّلُ أَرْبَعَةٌ: «أَنْ»، وَ«لَنْ»، وَ«كَيْ»، وَ«إِذَنْ» (p. 183) — the exact citation Lesson 7.3 already built, including all four Qur'anic/book examples (An-Nisa 4:28, Taha 20:91, Al-Hadid 57:23, the book's own إذن example). This lesson doesn't re-derive that material; it names what Lesson 7.3 (written before Part 10 existed) couldn't yet name: these four particles are حروف — this entire Part's subject — and specifically عاملة ones."
    },

    intro: {
      titleAr: "نواصب المضارع",
      titleEn: "The Particles That Nasb the Mudari'",
      statement: "Part 7 taught what happens to المضارع. This lesson names which حروف cause it."
    },

    objective: [
      "restate أنْ، لنْ، كيْ، إذنْ as the four نواصب that نصب المضارع by themselves (Lesson 7.3)",
      "state the chain: الحرف الناصب (العامل) يدخل على المضارع (المعمول) فينصبه (الأثر)",
      "recognize a ناصب doing exactly this in a Qur'anic ayah"
    ],

    concept: {
      termAr: "نواصب المضارع: عوامل تدخل على الفعل",
      kind: "book-cited",
      definitionAr: "فَالْأَوَّلُ أَرْبَعَةٌ: «أَنْ»، وَ«لَنْ»، وَ«كَيْ»، وَ«إِذَنْ».",
      definitionEn: "Four particles put المضارع into نصب on their own — Lesson 7.3's own material, now seen as what it structurally is: a عامل حرف acting on a فعل rather than an اسم.",
      lead: "Lesson 10.3's عامل was a حرف جر, and its معمول was always an اسم. Here the معمول is a فعل مضارع instead — same chain, different target: الحرف الناصب ← المضارع ← نصب."
    },

    definitionBreakdown: [
      {
        termAr: "أنْ، لنْ، كيْ، إذنْ",
        termEn: "four عاملة حروف",
        glossEn: "النساء:28، طه:91، الحديد:23، مثال الكتاب",
        explanation: "All four are حروف (مبنية، بلا استثناء، كما تقرر Lesson 10.1) — and all four عاملة: each one alone forces المضارع out of its default رفع."
      },
      {
        termAr: "المعمول هنا: فعل، لا اسم",
        termEn: "the one difference from 10.3",
        glossEn: "لَنْ يَكْتُبَ",
        explanation: "حرف الجر's معمول was always اسم. A ناصب's معمول is always فعل مضارع — the chain's shape is identical, only its target class changes."
      }
    ],

    conceptTree: {
      root: { ar: "نواصب المضارع", en: "4 حروف عاملة" },
      branches: [
        { ar: "أنْ", en: "النساء:28" },
        { ar: "لَنْ", en: "طه:91" },
        { ar: "كَيْ", en: "الحديد:23" },
        { ar: "إِذَنْ", en: "مثال الكتاب (p. 184)" }
      ]
    },

    example: {
      kind: "traditional-grammar-example",
      kindLabel: "Lesson 7.3's own model, reactivated with Part 10's own labels",
      arabic: "يَكْتُبُ",
      transliteration: "Yaktubu",
      translation: "he writes — مرفوع، لا عامل بعد",
      explanation: "الحالة الافتراضية — no عامل has entered yet.",
      contrast: {
        arabic: "لَنْ يَكْتُبَ",
        translation: "he will not write — منصوب",
        explanation: "العامل (لن) ← المعمول (يكتب) ← الأثر (نصب، بالفتحة). Exactly Lesson 7.3's own chain, now named with Part 10's own vocabulary: لن is a حرف ناصب عامل."
      }
    },

    quranExample: {
      surahAr: "طه",
      surahEn: "Taha",
      ayahRef: "20:91",
      arabic: "قَالُوا لَن نَّبْرَحَ عَلَيْهِ عَاكِفِينَ",
      translation: "They said, \"We will never cease being devoted to it.\"",
      notice: "Lesson 7.3's own citation (p. 183). لن is العامل; نَّبْرَحَ is المعمول; نصب بالفتحة is الأثر.",
      wordNotes: {
        "20-91-w2": { conceptLabel: "العامل — حرف ناصب", explanation: "لَن — حرف نصب مبني، يدخل على المضارع فينصبه." },
        "20-91-w3": { conceptLabel: "المعمول، والأثر: نصب", explanation: "نَّبْرَحَ — منصوب بـ«لن»، علامة نصبه الفتحة." }
      }
    },

    noticeInteraction: {
      type: "word-tap",
      ayahRef: "20:91",
      instanceId: "10.4-notice",
      promptContext: "Taha 20:91",
      question: "Tap المعمول — the فعل لن's عمل actually landed on.",
      correctWordId: "20-91-w3",
      correctFeedback: "Right — نَّبْرَحَ is المعمول, منصوب بالفتحة right after لن.",
      incorrectFeedback: "Not quite — لن is العامل itself. المعمول is the مضارع verb right after it.",
      wordNotes: {
        "20-91-w2": { conceptLabel: "العامل", explanation: "لَن — حرف نصب مبني." },
        "20-91-w3": { conceptLabel: "المعمول", explanation: "نَّبْرَحَ — منصوب بـ«لن»، علامة نصبه الفتحة." }
      }
    },

    practiceQuestions: [
      {
        id: "p1",
        type: "multiple-choice",
        prompt: "ما نوع الكلمة التي يدخل عليها الحرف الناصب دائمًا؟",
        options: [
          { id: "a", labelAr: "الفعل المضارع" },
          { id: "b", labelAr: "الاسم" },
          { id: "c", labelAr: "الفعل الماضي" }
        ],
        correctOptionId: "a",
        explanation: "Right — نواصب المضارع تدخل على المضارع تحديدًا، لا على الاسم ولا على الماضي."
      },
      {
        id: "p2",
        type: "true-false",
        prompt: "أنْ، لنْ، كيْ، إذنْ كلها حروف غير عاملة، تشبه حروف العطف.",
        correct: false,
        explanation: "No — كل واحدة منها عاملة: تدخل على المضارع فتنصبه، تمامًا كما فعلت حروف الجر بالاسم."
      },
      {
        id: "p3",
        type: "multiple-choice",
        prompt: "﴿قَالُوا لَن نَّبْرَحَ عَلَيْهِ عَاكِفِينَ﴾ — ما الأثر الذي تركه العامل «لن»؟",
        options: [
          { id: "a", labelAr: "نصب نَّبْرَحَ بالفتحة" },
          { id: "b", labelAr: "خفض نَّبْرَحَ" },
          { id: "c", labelAr: "جزم نَّبْرَحَ" }
        ],
        correctOptionId: "a",
        explanation: "Right — لن ناصب، فأثره نصب، وعلامته هنا الفتحة الظاهرة."
      }
    ],

    quranChallenge: {
      surahAr: "النساء",
      surahEn: "An-Nisa",
      ayahRef: "4:28",
      arabic: "يُرِيدُ اللَّهُ أَن يُخَفِّفَ عَنكُمْ",
      translation: "Allah wants to lighten for you [your difficulties].",
      question: "حدّد العامل، المعمول، والأثر في هذه الآية.",
      options: [
        { id: "a", labelAr: "العامل: أنْ — المعمول: يُخَفِّفَ — الأثر: نصب بالفتحة" },
        { id: "b", labelAr: "العامل: يُرِيدُ — المعمول: اللَّهُ — الأثر: رفع" },
        { id: "c", labelAr: "العامل: اللَّهُ — المعمول: أنْ — الأثر: خفض" }
      ],
      correctOptionId: "a",
      explanation: "Right — أنْ (العامل) دخلت على يُخَفِّفَ (المعمول) فنصبته (الأثر) بالفتحة. Lesson 7.3's own citation, p. 183."
    },

    summary: [
      "نواصب المضارع: أربعة حروف عاملة تدخل على الفعل المضارع (لا الاسم) فتنصبه: أنْ، لنْ، كيْ، إذنْ.",
      "العامل ← المعمول ← الأثر: لن ← نَّبْرَحَ ← نصب بالفتحة (طه:91).",
      "نفس شكل السلسلة من Lesson 10.3 — لكن المعمول هنا فعل، لا اسم.",
      "Next: عامل آخر يدخل على المضارع — لكن أثره مختلف تمامًا: الجزم، لا النصب."
    ],

    completion: {
      titleAr: "نواصب المضارع",
      statement: "عامل يدخل على الفعل، لا الاسم. Next: الجوازم."
    }
  },

  "10.5": {
    id: "10.5",
    steps: ["intro", "concept", "example", "quran", "notice", "practice", "challenge", "summary", "completion"],

    sourceNote: {
      status: "book-cited",
      label: "Cross-references Lessons 7.4 (pp. 190–192) and 7.5 (pp. 193–198) — no new pages",
      detail: "وَالجَوَازِمُ ثَمَانِيَةَ عَشَرَ، وَهِيَ نَوْعَانِ: جَازِمٌ لِفِعْلٍ وَاحِدٍ، وَجَازِمٌ لِفِعْلَيْنِ (pp. 190, 193) — Lesson 7.4's and 7.5's own citations, reused directly. One distinction this lesson makes explicit, which matters specifically for a Part about حروف: p. 198's own closing recap states وَهَذِهِ الأَدَوَاتُ الإِحْدَى عَشَرَ كُلُّهَا أَسْمَاءٌ، إِلَّا «إِنْ» وَ«إِذْمَا»، فَإِنَّهُمَا حَرْفَانِ — meaning most of the two-verb (شرط) جوازم are grammatically أسماء, not حروف, and so fall outside this Part's own subject even though they share the جزم effect. This lesson follows that book-stated boundary rather than treating \"all جوازم\" as uniformly حروف."
    },

    intro: {
      titleAr: "جوازم المضارع",
      titleEn: "The Particles That Jazm the Mudari'",
      statement: "A second عامل on المضارع — and a boundary your book itself draws, that matters specifically here."
    },

    objective: [
      "restate لم، لمّا، ألم/ألمّا، لام الأمر، لا الناهية as single-verb جوازم (Lesson 7.4) — all حروف",
      "restate إنْ as the one two-verb شرط جازم that is itself a حرف (Lesson 7.5) — unlike ما، مَنْ، أينَ, which are أسماء",
      "state why this Part only fully covers the جوازم that are actually حروف"
    ],

    concept: {
      termAr: "جوازم تقتصر عليها هذه الباب: ما كان منها حرفًا",
      kind: "book-cited",
      definitionAr: "وَالجَوَازِمُ ثَمَانِيَةَ عَشَرَ، وَهِيَ نَوْعَانِ: جَازِمٌ لِفِعْلٍ وَاحِدٍ، وَجَازِمٌ لِفِعْلَيْنِ. ...وَهَذِهِ الأَدَوَاتُ الإِحْدَى عَشَرَ كُلُّهَا أَسْمَاءٌ، إِلَّا «إِنْ» وَ«إِذْمَا»، فَإِنَّهُمَا حَرْفَانِ.",
      definitionEn: "Eighteen جوازم total: seven act on one verb, eleven act on two (الشرط group). Your book's own closing line (p. 198) draws a boundary this Part has to respect: of those eleven شرط tools, only إنْ and إذما are حروف — the other nine (ما، مَنْ، أينَ، مهما...) are grammatically أسماء, even though they جزم exactly the way إنْ does.",
      lead: "This Part is about الحروف specifically — so its subject here is: all seven single-verb جوازم (all حروف) plus إنْ alone from the شرط group. ما، مَنْ، أينَ did real work in Lesson 7.5, but they're أسماء, not this Part's material."
    },

    definitionBreakdown: [
      {
        termAr: "الجوازم لفعل واحد — كلها حروف",
        termEn: "7 particles, Lesson 7.4",
        glossEn: "لم، لمّا، ألم، ألمّا، لام الأمر، لا الناهية",
        explanation: "Every single-verb جازم your book lists is a حرف — all mabni, all عاملة. لَمْ يَلِدْ: لم (العامل) ← يَلِدْ (المعمول) ← جزم بالسكون (الأثر)."
      },
      {
        termAr: "أدوات الشرط الجازمة — حرفان فقط",
        termEn: "11 tools, Lesson 7.5 — only 2 are حروف",
        glossEn: "إنْ، إذما (حرفان) — ما، مَنْ، أينَ ومعظم الباقي (أسماء)",
        explanation: "إِن يَشَأْ يُذْهِبْكُمْ: إنْ هو العامل، حرف شرط جازم. لكن مَن يَعْمَلْ سُوءًا يُجْزَ بِهِ: مَنْ هنا اسم شرط جازم — نفس الأثر (جزم)، نوع كلمة مختلف تمامًا."
      }
    ],

    conceptTree: {
      root: { ar: "جوازم المضارع", en: "18 إجمالًا — هذا الباب يغطي ما كان حرفًا منها فقط" },
      branches: [
        { ar: "جازم لفعل واحد", en: "7 — كلها حروف", children: [{ ar: "لَمْ", en: "الإخلاص:3" }, { ar: "لَمَّا", en: "عبس:23" }, { ar: "أَلَمْ / أَلَمَّا", en: "الشرح:1" }, { ar: "لَام الأمر", en: "الطلاق:7" }, { ar: "لَا الناهية", en: "التوبة:40" }] },
        { ar: "جازم لفعلين (شرط)", en: "11 — حرفان فقط", children: [{ ar: "إنْ (حرف)", en: "النساء:133 — this Part's subject" }, { ar: "ما، مَنْ، أينَ وغيرها (أسماء)", en: "Lesson 7.5 — outside this Part" }] }
      ]
    },

    example: {
      kind: "traditional-grammar-example",
      kindLabel: "Two جوازم, both حروف, same chain",
      arabic: "لَمْ يَكْتُبْ",
      transliteration: "Lam yaktub",
      translation: "he did not write — مجزوم",
      explanation: "العامل (لم، حرف) ← المعمول (يكتب) ← الأثر (جزم بالسكون).",
      contrast: {
        arabic: "إِن يَشَأْ يُذْهِبْكُمْ",
        translation: "If He wills, He will do away with you",
        explanation: "العامل (إنْ، حرف أيضًا) ← المعمول (يَشَأْ ويُذْهِبْكُمْ، فعلان معًا) ← الأثر (جزمهما). Same عامل type as لم — but one حرف يجزم فعلين دفعة واحدة، لا فعلًا واحدًا."
      }
    },

    quranExample: {
      surahAr: "الشرح",
      surahEn: "Ash-Sharh",
      ayahRef: "94:1",
      arabic: "أَلَمْ نَشْرَحْ لَكَ صَدْرَكَ",
      translation: "Did We not expand for you, [O Muhammad], your breast?",
      notice: "Lesson 7.4's own citation (p. 192). أَلَمْ (حرف جزم + استفهام) هو العامل؛ نَشْرَحْ هو المعمول؛ جزم بالسكون هو الأثر.",
      wordNotes: {
        "94-1-w1": { conceptLabel: "العامل — حرف جزم", explanation: "أَلَمْ — الهمزة للاستفهام + لم الجازمة، مبني." },
        "94-1-w2": { conceptLabel: "المعمول، والأثر: جزم", explanation: "نَشْرَحْ — مجزوم بـ«ألم»، علامة جزمه السكون." }
      }
    },

    noticeInteraction: {
      type: "word-tap",
      ayahRef: "94:1",
      instanceId: "10.5-notice",
      promptContext: "Ash-Sharh 94:1",
      question: "Tap المعمول — the فعل ألم's عمل landed on.",
      correctWordId: "94-1-w2",
      correctFeedback: "Right — نَشْرَحْ is المعمول, مجزوم بالسكون right after ألم.",
      incorrectFeedback: "Not quite — أَلَمْ is العامل itself. المعمول is the مضارع verb right after it.",
      wordNotes: {
        "94-1-w1": { conceptLabel: "العامل", explanation: "أَلَمْ — حرف جزم مبني." },
        "94-1-w2": { conceptLabel: "المعمول", explanation: "نَشْرَحْ — مجزوم بـ«ألم»، علامة جزمه السكون." }
      }
    },

    practiceQuestions: [
      {
        id: "p1",
        type: "true-false",
        prompt: "جميع أدوات الشرط الجازمة الإحدى عشر حروف.",
        correct: false,
        explanation: "No — كتابك نفسه (p. 198) يذكر أن تسعًا منها أسماء؛ حرفان فقط: إنْ وإذما."
      },
      {
        id: "p2",
        type: "multiple-choice",
        prompt: "لماذا يقتصر هذا الدرس على إنْ من بين أدوات الشرط الجازمة الإحدى عشر؟",
        options: [
          { id: "a", labelAr: "لأنها الوحيدة (مع إذما) التي هي حرف، وهذا الباب عن الحروف تحديدًا" },
          { id: "b", labelAr: "لأنها الأكثر استخدامًا في القرآن" },
          { id: "c", labelAr: "لأن باقي الأدوات لا تجزم فعلين" }
        ],
        correctOptionId: "a",
        explanation: "Right — ما، مَنْ، أينَ وغيرها تجزم تمامًا مثل إنْ، لكنها أسماء — خارج موضوع هذا الباب."
      },
      {
        id: "p3",
        type: "multiple-choice",
        prompt: "﴿أَلَمْ نَشْرَحْ لَكَ صَدْرَكَ﴾ — ما الأثر الذي تركه العامل «ألم»؟",
        options: [
          { id: "a", labelAr: "جزم نَشْرَحْ بالسكون" },
          { id: "b", labelAr: "نصب نَشْرَحْ بالفتحة" },
          { id: "c", labelAr: "خفض نَشْرَحْ" }
        ],
        correctOptionId: "a",
        explanation: "Right — ألم جازم، فأثره جزم، وعلامته السكون."
      }
    ],

    quranChallenge: {
      surahAr: "التوبة",
      surahEn: "At-Tawbah",
      ayahRef: "9:40",
      arabic: "إِذْ يَقُولُ لِصَاحِبِهِ لَا تَحْزَنْ إِنَّ اللَّهَ مَعَنَا",
      translation: "[Remember] when he said to his companion, \"Do not grieve; indeed Allah is with us.\"",
      question: "حدّد العامل، المعمول، والأثر لـ«لا تحزن» هنا.",
      options: [
        { id: "a", labelAr: "العامل: لا الناهية — المعمول: تَحْزَنْ — الأثر: جزم بالسكون" },
        { id: "b", labelAr: "العامل: تَحْزَنْ — المعمول: لا — الأثر: نصب" },
        { id: "c", labelAr: "العامل: إنّ — المعمول: لا — الأثر: خفض" }
      ],
      correctOptionId: "a",
      explanation: "Right — لا الناهية (العامل) دخلت على تَحْزَنْ (المعمول) فجزمته (الأثر) بالسكون. (الإنّ بعدها عامل مختلف تمامًا — Lesson 10.6's own subject.)"
    },

    summary: [
      "جوازم لفعل واحد: سبعة، كلها حروف عاملة — لم، لمّا، ألم، ألمّا، لام الأمر، لا الناهية.",
      "جوازم لفعلين (الشرط): أحد عشر إجمالًا، لكن حرفان فقط — إنْ وإذما؛ الباقي أسماء شرط (Lesson 7.5)، خارج موضوع هذا الباب.",
      "العامل ← المعمول ← الأثر: ألم ← نَشْرَحْ ← جزم بالسكون (الشرح:1).",
      "Next: عامل من نوع مختلف تمامًا — لا يدخل على فعل، بل على جملة اسمية كاملة."
    ],

    completion: {
      titleAr: "جوازم المضارع",
      statement: "جزم مفهوم، وحدود الباب واضحة. Next: إنّ وأخواتها."
    }
  },

  "10.6": {
    id: "10.6",
    steps: ["intro", "concept", "example", "quran", "notice", "practice", "challenge", "summary", "completion"],

    sourceNote: {
      status: "book-cited",
      label: "Cross-references Lesson 6.4 (p. 108) — no new pages",
      detail: "وَأَمَّا 'إِنَّ' وَأَخَوَاتُهَا: فَتَنْصِبُ الْمُبْتَدَأَ، وَيُسَمَّى اسْمَهَا، وَتَرْفَعُ الْخَبَرَ، وَيُسَمَّى خَبَرَهَا، وَهِيَ سِتَّةُ أَحْرُفٍ (p. 108) — Lesson 6.4's own citation, reused directly, including its Qur'anic example (Al-Baqarah 2:192). This lesson adds nothing new to the grammar; it names what Lesson 6.4 (written before Part 10 existed) already showed without the vocabulary: all six — إنّ، أنّ، كأنّ، لكنّ، ليت، لعلّ — are حروف, and all six عاملة, acting on an entire جملة اسمية rather than one word."
    },

    intro: {
      titleAr: "إنّ وأخواتها",
      titleEn: "Inna and Her Sisters, as عوامل",
      statement: "Every عامل so far has acted on ONE word. This one acts on an entire nominal sentence at once."
    },

    objective: [
      "restate إنّ وأخواتها's effect: تنصب المبتدأ (اسمها)، وترفع الخبر (خبرها) — Lesson 6.4",
      "state the chain at sentence scale: الحرف الناسخ (العامل) يدخل على المبتدأ والخبر معًا (المعمولان) فيعيد تشكيل حالتيهما (الأثر)",
      "recognize إنّ acting on a full جملة اسمية in a Qur'anic ayah"
    ],

    concept: {
      termAr: "إنّ وأخواتها: عامل على جملة كاملة",
      kind: "book-cited",
      definitionAr: "وَأَمَّا 'إِنَّ' وَأَخَوَاتُهَا: فَتَنْصِبُ الْمُبْتَدَأَ، وَيُسَمَّى اسْمَهَا، وَتَرْفَعُ الْخَبَرَ، وَيُسَمَّى خَبَرَهَا، وَهِيَ سِتَّةُ أَحْرُفٍ.",
      definitionEn: "Six حروف — إنّ/أنّ، كأنّ، لكنّ، ليت، لعلّ — each enter a complete nominal sentence (مبتدأ + خبر) and reshape BOTH of its parts at once: اسمها into نصب, خبرها staying مرفوعًا.",
      lead: "Lessons 10.3–10.5's عوامل each reached one word. إنّ reaches two — المبتدأ والخبر — in a single entrance. Same chain, wider reach."
    },

    definitionBreakdown: [
      {
        termAr: "العامل",
        termEn: "حرف ناسخ، واحد من ستة",
        glossEn: "إنّ/أنّ (توكيد) · كأنّ (تشبيه) · لكنّ (استدراك) · ليت (تمنٍّ) · لعلّ (ترجٍّ)",
        explanation: "All six are حروف — مبنية بلا استثناء (Lesson 10.1) — and all six عاملة: each one alone reshapes the sentence it enters."
      },
      {
        termAr: "المعمولان",
        termEn: "both halves of the sentence",
        glossEn: "المبتدأ (يصبح اسمها) والخبر (يصبح خبرها)",
        explanation: "Unlike 10.3–10.5, which each touched a SINGLE word, إنّ's عمل lands on TWO words from the same sentence, simultaneously."
      },
      {
        termAr: "الأثر",
        termEn: "two different effects, one عامل",
        glossEn: "اسمها: نصب — خبرها: يبقى مرفوعًا",
        explanation: "One entrance, two outcomes: المبتدأ shifts from رفع to نصب; الخبر stays exactly where it already was, مرفوعًا — just under a new name."
      }
    ],

    example: {
      kind: "traditional-grammar-example",
      kindLabel: "Lesson 6.4's own running example, reactivated",
      arabic: "زَيْدٌ قَائِمٌ",
      transliteration: "Zaydun qā'im",
      translation: "Zayd is standing — جملة اسمية، لا عامل بعد",
      explanation: "مبتدأ مرفوع + خبر مرفوع — الحالة الافتراضية، قبل دخول أي عامل.",
      contrast: {
        arabic: "إِنَّ زَيْدًا قَائِمٌ",
        translation: "Indeed, Zayd is standing",
        explanation: "العامل (إنّ) ← المعمولان (زيد والخبر قائم معًا) ← الأثر (زيدًا: نصب؛ قائمٌ: يبقى رفعًا). One حرف, two words reshaped in a single entrance."
      }
    },

    quranExample: {
      surahAr: "البقرة",
      surahEn: "Al-Baqarah",
      ayahRef: "2:192",
      arabic: "فَإِنَّ اللَّهَ غَفُورٌ رَحِيمٌ",
      translation: "Then indeed, Allah is Forgiving and Merciful.",
      notice: "Lesson 6.4's own citation (p. 108). إنّ هي العامل؛ اللَّهَ (اسمها) وغَفُورٌ (خبرها) هما المعمولان؛ الأثر: اللَّهَ منصوب، غَفُورٌ يبقى مرفوعًا.",
      wordNotes: {
        "2-192-w2": { conceptLabel: "المعمول الأول — اسم إنّ", explanation: "اللَّهَ — منصوب، أثر دخول إنّ." },
        "2-192-w3": { conceptLabel: "المعمول الثاني — خبر إنّ", explanation: "غَفُورٌ — يبقى مرفوعًا." }
      }
    },

    noticeInteraction: {
      type: "word-tap",
      ayahRef: "2:192",
      instanceId: "10.6-notice",
      promptContext: "Al-Baqarah 2:192",
      question: "Tap the المعمول that إنّ pushed into a NEW state — نصب.",
      correctWordId: "2-192-w2",
      correctFeedback: "Right — اللَّهَ is اسم إنّ, forced into نصب. غَفُورٌ right after it stayed exactly where it already was.",
      incorrectFeedback: "Not quite — look for the word that CHANGED state because of إنّ, not the one that stayed رفع.",
      wordNotes: {
        "2-192-w2": { conceptLabel: "اسم إنّ — تغيّرت حالته", explanation: "اللَّهَ — منصوب." },
        "2-192-w3": { conceptLabel: "خبر إنّ — بقيت حالته", explanation: "غَفُورٌ — مرفوع، كما كان قبل دخول إنّ." }
      }
    },

    practiceQuestions: [
      {
        id: "p1",
        type: "true-false",
        prompt: "إنّ وأخواتها تدخل على كلمة واحدة فقط، تمامًا مثل حرف الجر.",
        correct: false,
        explanation: "No — إنّ تدخل على جملة اسمية كاملة: مبتدأ وخبر معًا، فتعيد تشكيل حالتيهما في آن واحد."
      },
      {
        id: "p2",
        type: "multiple-choice",
        prompt: "ما الأثر الذي يتركه العامل «إنّ» على المبتدأ والخبر معًا؟",
        options: [
          { id: "a", labelAr: "تنصب الاسم (المبتدأ)، وترفع الخبر" },
          { id: "b", labelAr: "تنصبهما معًا" },
          { id: "c", labelAr: "تجزمهما معًا" }
        ],
        correctOptionId: "a",
        explanation: "Right — نصب على اسمها، ورفع يبقى على خبرها — عاملٌ واحد، أثران مختلفان."
      },
      {
        id: "p3",
        type: "true-false",
        prompt: "جميع أخوات إنّ الستة حروف مبنية.",
        correct: true,
        explanation: "Right — Lesson 10.1's own rule ينطبق هنا كما في كل مكان: وأما الحروف فمبنية كلها."
      }
    ],

    quranChallenge: {
      surahAr: "البقرة",
      surahEn: "Al-Baqarah",
      ayahRef: "2:192",
      arabic: "فَإِنَّ اللَّهَ غَفُورٌ رَحِيمٌ",
      translation: "Then indeed, Allah is Forgiving and Merciful.",
      question: "ما إعراب «رَحِيمٌ» هنا، وكيف يرتبط بالعامل «إنّ»؟",
      options: [
        { id: "a", labelAr: "خبر ثانٍ لإنّ، مرفوع — جزء من نفس الأثر الذي تركته إنّ على الخبر" },
        { id: "b", labelAr: "اسم إنّ، منصوب" },
        { id: "c", labelAr: "لا علاقة له بإنّ" }
      ],
      correctOptionId: "a",
      explanation: "Right — غَفُورٌ ورَحِيمٌ خبران لإنّ، كلاهما مرفوع — نفس الأثر الذي تركه العامل على الخبر، مكررًا."
    },

    summary: [
      "إنّ وأخواتها: ستة حروف عاملة — إنّ/أنّ، كأنّ، لكنّ، ليت، لعلّ — تدخل على جملة اسمية كاملة.",
      "الأثر المزدوج: تنصب المبتدأ (اسمها)، وترفع الخبر (خبرها) — عامل واحد، معمولان.",
      "العامل ← المعمولان ← الأثر: إنّ ← اللَّهَ + غَفُورٌ ← نصب + رفع (البقرة:192).",
      "Next: عامل آخر يعمل نفس عمل إنّ بالضبط — لكنه ليس إنّ."
    ],

    completion: {
      titleAr: "إنّ وأخواتها",
      statement: "عامل يدخل على جملة كاملة، لا كلمة واحدة. Next: لا النافية للجنس."
    }
  },

  "10.7": {
    id: "10.7",
    steps: ["intro", "concept", "example", "quran", "notice", "practice", "challenge", "summary", "completion"],

    sourceNote: {
      status: "book-cited",
      label: "Cross-references Lesson 6.6 (pp. 120, 124) — no new pages",
      detail: "وَأَمَّا (لَا) الَّتِي لِنَفْيِ الْجِنْسِ: ...تَعْمَلُ عَمَلَ 'إِنَّ': تَنْصِبُ الِاسْمَ، وَتَرْفَعُ الْخَبَرَ (p. 120) — Lesson 6.6's own citation, reused directly, including both its Qur'anic examples (Saba 34:51، Ash-Shu'ara 26:50). This lesson's only addition is naming what Lesson 6.6 already showed: لا النافية للجنس is a حرف, and — unlike إنّ (Lesson 10.6) — a second, independent route to the EXACT same عمل."
    },

    intro: {
      titleAr: "لا النافية للجنس",
      titleEn: "La of Categorical Negation, as a عامل",
      statement: "A second حرف, a completely different meaning — and the exact same عمل as إنّ."
    },

    objective: [
      "restate لا النافية للجنس's effect: تنصب الاسم، وترفع الخبر — identical to إنّ's own عمل (Lesson 6.6)",
      "state that عمل can repeat across different حروف — the same أثر, reached by more than one عامل",
      "recognize لا النافية للجنس acting on its اسم in a Qur'anic phrase"
    ],

    concept: {
      termAr: "لا النافية للجنس: نفس عمل إنّ، عامل مختلف",
      kind: "book-cited",
      definitionAr: "وَأَمَّا (لَا) الَّتِي لِنَفْيِ الْجِنْسِ: فَهِيَ الَّتِي يُرَادُ بِهَا نَفْيُ الْجِنْسِ عَلَى سَبِيلِ التَّنْصِيصِ. تَعْمَلُ عَمَلَ 'إِنَّ': تَنْصِبُ الِاسْمَ، وَتَرْفَعُ الْخَبَرَ.",
      definitionEn: "This لا denies an entire category outright — and grammatically, it works exactly like إنّ: تنصب الاسم، وترفع الخبر. Two different حروف, two completely different meanings (توكيد vs. categorical negation), the exact same أثر.",
      lead: "This is the first time in Part 10 you've seen the SAME أثر twice, from two unrelated عوامل. عمل isn't tied to one particle's identity — it's a pattern a حرف either produces or doesn't."
    },

    definitionBreakdown: [
      {
        termAr: "العامل",
        termEn: "حرف، بشرطين",
        glossEn: "اسمها وخبرها نكرتان؛ اسمها متصل بها مباشرة",
        explanation: "لا النافية للجنس only triggers this عمل under two conditions Lesson 6.6 already gave — without them, it's a different لا entirely (إهمالها)."
      },
      {
        termAr: "الأثر — نفسه بالضبط",
        termEn: "same as إنّ, two shapes",
        glossEn: "اسمها: معرب منصوب (مضاف) أو مبني على الفتح (مفرد)",
        explanation: "لَا صَاحِبَ عِلْمٍ مَمْقُوتٌ: صَاحِبَ مضاف، فمعرب منصوب. لَا رَجُلَ حَاضِرٌ: رَجُلَ مفرد، فمبني على الفتح. Either way — the same نصب-type أثر إنّ produces, by a completely different حرف."
      }
    ],

    conceptTree: {
      root: { ar: "عمل إنّ", en: "produced by two separate عوامل" },
      branches: [
        { ar: "إنّ وأخواتها", en: "Lesson 10.6 — توكيد ومعانٍ أخرى" },
        { ar: "لا النافية للجنس", en: "هذا الدرس — نفي الجنس، بشرطين" }
      ]
    },

    example: {
      kind: "book-example",
      kindLabel: "The book's own both-pattern example (p. 120)",
      arabic: "لَا صَاحِبَ عِلْمٍ مَمْقُوتٌ",
      transliteration: "Lā ṣāḥiba 'ilmin mamqūt",
      translation: "No possessor of knowledge is ever despised",
      explanation: "العامل: لا. المعمول: صَاحِبَ (مضاف). الأثر: معرب منصوب بالفتحة الظاهرة — عين ما فعلته إنّ بـ زيدًا في Lesson 10.6.",
      contrast: {
        arabic: "لَا رَجُلَ حَاضِرٌ",
        translation: "No man is present",
        explanation: "رَجُلَ هنا مفرد، لا مضافًا — فالأثر يظهر بشكل مختلف: مبني على الفتح، لا معربًا منصوبًا. نفس العامل، شكل آخر لنفس نوع الأثر."
      }
    },

    quranExample: {
      surahAr: "سبأ",
      surahEn: "Saba",
      ayahRef: "34:51",
      arabic: "فَلَا فَوْتَ",
      translation: "There will be no escape.",
      notice: "Lesson 6.6's own citation. لا هي العامل؛ فَوْتَ (مفرد) هي المعمول؛ الأثر: مبني على الفتح في محل نصب — خبرها محذوف هنا، تقديره: لهم.",
      wordNotes: {
        "34-51-w2": { conceptLabel: "المعمول، والأثر: نصب (بناءً)", explanation: "فَوْتَ — مبني على الفتح في محل نصب، اسم لا." }
      }
    },

    noticeInteraction: {
      type: "word-tap",
      ayahRef: "34:51",
      instanceId: "10.7-notice",
      promptContext: "Saba 34:51",
      question: "Tap المعمول — the اسم لا's عمل landed on.",
      correctWordId: "34-51-w2",
      correctFeedback: "Right — فَوْتَ is المعمول, مبني على الفتح في محل نصب — exactly the kind of أثر إنّ also produces.",
      incorrectFeedback: "Not quite — المعمول is the noun right after لا itself.",
      wordNotes: {
        "34-51-w2": { conceptLabel: "المعمول", explanation: "فَوْتَ — مبني على الفتح في محل نصب." }
      }
    },

    practiceQuestions: [
      {
        id: "p1",
        type: "true-false",
        prompt: "لا النافية للجنس تعمل عملًا مختلفًا تمامًا عن إنّ.",
        correct: false,
        explanation: "No — نفس العمل بالضبط: تنصب الاسم، وترفع الخبر. ما يختلف هو المعنى (نفي جنس، لا توكيد) والشروط، لا الأثر الإعرابي."
      },
      {
        id: "p2",
        type: "multiple-choice",
        prompt: "في «لَا رَجُلَ حَاضِرٌ»، لماذا كان «رَجُلَ» مبنيًا على الفتح لا معربًا منصوبًا؟",
        options: [
          { id: "a", labelAr: "لأنه مفرد، لا مضافًا ولا شبيهًا بالمضاف" },
          { id: "b", labelAr: "لأن لا لا تعمل هنا" },
          { id: "c", labelAr: "لأنه نكرة" }
        ],
        correctOptionId: "a",
        explanation: "Right — نوع اسمها (مفرد مقابل مضاف) هو ما يحدد شكل الأثر: بناء على الفتح، أو إعراب بالنصب."
      },
      {
        id: "p3",
        type: "true-false",
        prompt: "يمكن لعاملين مختلفين (مثل إنّ ولا النافية للجنس) أن ينتجا نفس الأثر الإعرابي.",
        correct: true,
        explanation: "Right — هذا بالضبط ما يُظهره هذا الدرس: عاملان، حرفان مختلفان تمامًا بالمعنى، نفس الأثر: نصب الاسم ورفع الخبر."
      }
    ],

    quranChallenge: {
      surahAr: "الشعراء",
      surahEn: "Ash-Shu'ara",
      ayahRef: "26:50",
      arabic: "لَا ضَيْرَ",
      translation: "No harm.",
      question: "حدّد العامل، المعمول، والأثر هنا.",
      options: [
        { id: "a", labelAr: "العامل: لا — المعمول: ضَيْرَ — الأثر: مبني على الفتح في محل نصب" },
        { id: "b", labelAr: "العامل: ضَيْرَ — المعمول: لا — الأثر: رفع" },
        { id: "c", labelAr: "لا يوجد عامل هنا" }
      ],
      correctOptionId: "a",
      explanation: "Right — لا (العامل) دخلت على ضَيْرَ (المعمول، مفرد) فبنته على الفتح في محل نصب (الأثر)؛ خبرها محذوف هنا، تقديره: علينا."
    },

    summary: [
      "لا النافية للجنس تعمل عمل إنّ بالضبط: تنصب الاسم، وترفع الخبر — بشرط النكرة والاتصال المباشر.",
      "اسمها: مضاف/شبيه بالمضاف ← معرب منصوب؛ مفرد ← مبني على الفتح في محل نصب.",
      "العامل ← المعمول ← الأثر: لا ← فَوْتَ ← بناء على الفتح، في محل نصب (سبأ:51).",
      "Next: حروف غير عاملة — تربط بلا أن تفرض حالة إعرابية جديدة."
    ],

    completion: {
      titleAr: "لا النافية للجنس",
      statement: "نفس أثر إنّ، من عامل مختلف تمامًا. Next: حروف العطف."
    }
  },

  "10.8": {
    id: "10.8",
    steps: ["intro", "concept", "example", "quran", "notice", "practice", "challenge", "summary", "completion"],

    sourceNote: {
      status: "book-cited",
      label: "Cross-references Lessons 5.5 (pp. 208–211) and 5.6 (pp. 211–215) — no new pages",
      detail: "وَأَمَّا عَطْفُ النَّسَقِ: فَهُوَ التَّابِعُ الَّذِي يَتَوَسَّطُ بَيْنَهُ وَبَيْنَ مَتْبُوعِهِ حَرْفٌ مِنْ حُرُوفِ الْعَشَرَةِ (p. ~211) — Lesson 5.5's own citation, reused directly, with its Qur'anic example (Al-Ahzab 33:22) and Lesson 5.6's own meaning-glosses for each particle. This lesson's point is specifically what Lessons 5.5–5.6 (written before Part 10's عامل/غير عامل distinction existed) didn't frame explicitly: حروف العطف are this Part's first — and clearest — example of عاملة الحروف ولیسَت غير عاملة: the book's own description is يَتَوَسَّطُ (mediates/links), never يَنْصِبُ or يَرْفَعُ or يَخْفِضُ."
    },

    intro: {
      titleAr: "حروف العطف",
      titleEn: "Conjunctions — Linking, Not Operating",
      statement: "Every عامل so far forced a NEW حالة. This حرف group does real grammatical work — and forces nothing."
    },

    objective: [
      "restate the ten حروف العطف from Lesson 5.5: و، ف، ثم، حتى، أو، أم، إما، لا، بل، لكن",
      "state why حروف العطف are غير عاملة: المعطوف يتبع المعطوف عليه's EXISTING حالة, by التبعية — not a new one forced by the حرف",
      "recognize المعطوف following المعطوف عليه's already-existing حالة in a Qur'anic ayah"
    ],

    concept: {
      termAr: "حرف العطف: يربط، لا يُنشئ حالة",
      kind: "book-cited",
      definitionAr: "وَأَمَّا عَطْفُ النَّسَقِ: فَهُوَ التَّابِعُ الَّذِي يَتَوَسَّطُ بَيْنَهُ وَبَيْنَ مَتْبُوعِهِ حَرْفٌ مِنْ حُرُوفِ الْعَشَرَةِ: الْوَاوُ، وَالْفَاءُ، وَثُمَّ، وَحَتَّى، وَأَوْ، وَأَمْ، وَإِمَّا، وَلَا، وَبَلْ، وَلَكِنْ.",
      definitionEn: "Ten particles stand between المعطوف and المعطوف عليه and link them — Part 5's own تابع/متبوع relationship (Lesson 5.1), reactivated here as Lesson 10.2's own named example of a غير عامل حرف.",
      lead: "تابع follows متبوع — Part 5's own central idea. Here's why that matters for this Part specifically: المعطوف's حالة isn't NEW. It's borrowed — by التبعية — from a حالة المعطوف عليه already had, before حرف العطف even entered."
    },

    definitionBreakdown: [
      {
        termAr: "الحرف — غير عامل",
        termEn: "و، ف، ثم، حتى، أو، أم، إما، لا، بل، لكن",
        glossEn: "p. ~211",
        explanation: "All ten are حروف — مبنية بلا استثناء (Lesson 10.1) — but NONE forces a new إعراب state, unlike every عامل in Lessons 10.3–10.7."
      },
      {
        termAr: "ما يحدث بدلًا من العمل",
        termEn: "التبعية — Part 5's own idea",
        glossEn: "المعطوف يتبع المعطوف عليه",
        explanation: "المعطوف عليه already had its حالة before الحرف arrived. المعطوف simply copies it — not because الحرف forced anything, but because عطف works by تبعية, exactly like Part 5's other three تابع types."
      },
      {
        termAr: "التمييز عن العامل",
        termEn: "10.2's own test, applied here",
        glossEn: "هل تغيّرت الحالة، أم انتقلت فقط؟",
        explanation: "Remove حرف العطف from جَاءَ زَيْدٌ وَعَمْرٌو, and عَمْرٌو's own رفع doesn't vanish — it simply loses its link to زيد. Compare removing إنّ from إِنَّ زَيْدًا قَائِمٌ: زيدًا instantly reverts to رفع. That reversal is what عامل means; its absence is what غير عامل means."
      }
    ],

    example: {
      kind: "traditional-grammar-example",
      kindLabel: "Lesson 5.5's own contrast, reactivated with Part 10's own test",
      arabic: "جَاءَ زَيْدٌ وَعَمْرٌو",
      transliteration: "Jā'a Zaydun wa 'Amrun",
      translation: "Zayd came, and 'Amr",
      explanation: "الواو تربط عَمْرٌو بـ زَيْدٌ. عَمْرٌو مرفوع — لكن ليس لأن الواو \"رفعته\"؛ هو تابعٌ لحالة زَيْدٌ المرفوعة أصلًا.",
      contrast: {
        arabic: "إِنَّ زَيْدًا قَائِمٌ",
        translation: "Indeed, Zayd is standing",
        explanation: "هنا العامل (إنّ) هو ما فرض النصب على زَيْدًا — لم تكن حالته الأصلية. الفرق هو بالضبط الفرق بين عامل وغير عامل."
      }
    },

    quranExample: {
      surahAr: "الأحزاب",
      surahEn: "Al-Ahzab",
      ayahRef: "33:22",
      arabic: "وَصَدَقَ اللَّهُ وَرَسُولُهُ",
      translation: "...and Allah and His Messenger spoke the truth.",
      notice: "Lesson 5.5's own citation. الواو هنا حرف عطف غير عامل؛ وَرَسُولُهُ معطوف، تبع رفع اللَّهُ الموجود أصلًا — لم تُنشئ الواو حالة جديدة، بل مددت حالة قائمة.",
      wordNotes: {
        "33-22-w2": { conceptLabel: "المعطوف عليه — حالته الأصلية", explanation: "اللَّهُ — مرفوع، فاعل لـ«صدق»." },
        "33-22-w3": { conceptLabel: "المعطوف — تابع، لا معمول جديد", explanation: "وَرَسُولُهُ — معطوف على اللَّهُ بالواو، تبعه في رفعه، لا بعملٍ جديد من الواو." }
      }
    },

    noticeInteraction: {
      type: "word-tap",
      ayahRef: "33:22",
      instanceId: "10.8-notice",
      promptContext: "Al-Ahzab 33:22",
      question: "Tap المعطوف — the word that followed, rather than earned, its own حالة.",
      correctWordId: "33-22-w3",
      correctFeedback: "Right — وَرَسُولُهُ simply follows اللَّهُ's already-existing رفع. The واو linked them; it didn't force anything new.",
      incorrectFeedback: "Not quite — look for the word right after الواو.",
      wordNotes: {
        "33-22-w2": { conceptLabel: "المعطوف عليه", explanation: "اللَّهُ — مرفوع، فاعل لـ«صدق»." },
        "33-22-w3": { conceptLabel: "المعطوف", explanation: "وَرَسُولُهُ — معطوف على اللَّهُ بالواو، مرفوع مثله، بالتبعية لا بعملٍ." }
      }
    },

    practiceQuestions: [
      {
        id: "p1",
        type: "true-false",
        prompt: "حرف العطف عامل، لأنه يحدد إعراب المعطوف.",
        correct: false,
        explanation: "No — المعطوف يأخذ إعراب المعطوف عليه بالتبعية، لا لأن حرف العطف فرض حالة جديدة عليه. ليس عاملًا."
      },
      {
        id: "p2",
        type: "multiple-choice",
        prompt: "لو حذفنا الواو من «جَاءَ زَيْدٌ وَعَمْرٌو»، ماذا يحدث لرفع «عَمْرٌو»؟",
        options: [
          { id: "a", labelAr: "يبقى عَمْرٌو مرفوعًا — بوصفه فاعلًا مستقلًا الآن، لا معطوفًا" },
          { id: "b", labelAr: "يتحول عَمْرٌو إلى منصوب" },
          { id: "c", labelAr: "تصبح الجملة بلا إعراب" }
        ],
        correctOptionId: "a",
        explanation: "Right — بخلاف إنّ (التي يعيد غيابها زيدًا فورًا إلى حالته الأصلية بتغيّر الحالة)، غياب الواو هنا لا يُسقط رفع عمرو — لأنه لم يكن \"مفروضًا\" بالواو من الأساس."
      },
      {
        id: "p3",
        type: "true-false",
        prompt: "جميع حروف العطف العشرة غير عاملة.",
        correct: true,
        explanation: "Right — وظيفتها الربط بالتبعية، لا فرض حالة إعرابية جديدة — نفس الأمر لكل العشرة."
      }
    ],

    quranChallenge: {
      surahAr: "الأحزاب",
      surahEn: "Al-Ahzab",
      ayahRef: "33:22",
      arabic: "وَصَدَقَ اللَّهُ وَرَسُولُهُ",
      translation: "...and Allah and His Messenger spoke the truth.",
      question: "لماذا تُعدّ الواو هنا حرفًا غير عامل، رغم أنها فعّلت رفع «وَرَسُولُهُ»؟",
      options: [
        { id: "a", labelAr: "لأن رَسُولُهُ تبع رفع اللَّهُ الموجود أصلًا، لا رفعًا فرضته الواو نفسها" },
        { id: "b", labelAr: "لأن الواو لا تُنطق" },
        { id: "c", labelAr: "لأن رَسُولُهُ اسم مبني" }
      ],
      correctOptionId: "a",
      explanation: "Right — بالضبط: رفع التبعية، لا رفع العمل. هذا هو الفرق الذي بناه Lesson 10.2 كله."
    },

    summary: [
      "حروف العطف العشرة (و، ف، ثم، حتى، أو، أم، إما، لا، بل، لكن) كلها حروف غير عاملة.",
      "المعطوف يتبع حالة المعطوف عليه الموجودة أصلًا (التبعية، من Part 5) — لا حالة جديدة يفرضها الحرف.",
      "الاختبار: أزِل الحرف — إن عادت الكلمة إلى حالتها الأصلية فورًا، فهو عامل؛ إن بقيت كما هي، فهو غير عامل.",
      "Next: حروف أخرى غير عاملة — لكن تحمل معنى لا تحمله حروف العطف إطلاقًا."
    ],

    completion: {
      titleAr: "حروف العطف",
      statement: "أول مثال واضح على حرف غير عامل. Next: حروف الاستفهام والنفي والشرط."
    }
  },

  "10.9": {
    id: "10.9",
    steps: ["intro", "concept", "example", "practice", "summary", "completion"],

    sourceNote: {
      status: "qurra-synthesis",
      label: "QURRA's own cross-reference pass over already-cited material — no new pages",
      detail: "This lesson introduces no new particle. هَلْ is Lesson 1.6's own example (p. 14); لم ولن are Lessons 10.4–10.5's own عاملة حروف (pp. 183, 190–192), reframed here by MEANING rather than by عمل; إنْ and أسماء الشرط are Lesson 10.5's own (p. 198). Nothing here is catalogued beyond what's already verified — per the task's own instruction to keep this lesson light and non-encyclopedic, it deliberately does not introduce a new لا النافية العامة or لو example without a verified book citation for either."
    },

    intro: {
      titleAr: "حروف الاستفهام والنفي والشرط وغيرها",
      titleEn: "Semantic Categories — Not Every حرف Is عامل",
      statement: "One last, important correction, before the final map: not every meaningful حرف is عامل — and not every عامل particle is even a حرف."
    },

    objective: [
      "recognize هَلْ as a حرف استفهام that carries real meaning while being entirely غير عامل",
      "see that لم ولن, already known as عاملة (جزم/نصب), are ALSO حروف نفي by meaning — the two labels overlap, they don't replace each other",
      "recall from Lesson 10.5 that most أدوات الشرط aren't even حروف — a semantic category can span both عامل and أسماء at once"
    ],

    concept: {
      termAr: "معنى الحرف ≠ عمله",
      kind: "qurra-synthesis",
      definitionAr: "لَيْسَ كُلُّ حَرْفٍ لَهُ مَعْنًى مُهِمٌّ عَامِلًا؛ وَلَيْسَتْ كُلُّ أَدَاةٍ تُفِيدُ مَعْنًى وَاحِدًا — كَالشَّرْطِ — حَرْفًا بِالضَّرُورَةِ.",
      definitionEn: "Grammatical function (عامل/غير عامل, Lesson 10.2) and semantic function (what a particle MEANS — a question, a negation, a condition) are two separate axes. A particle can sit anywhere on both at once — and Part 10's own material already proves it.",
      lead: "If you leave this Part thinking \"every حرف that matters is عامل,\" you've missed something your own lessons already showed you twice over. This lesson makes both corrections explicit."
    },

    definitionBreakdown: [
      {
        termAr: "الاستفهام",
        termEn: "هَلْ — غير عامل",
        glossEn: "Lesson 1.6, p. 14",
        explanation: "هَلْ attaches to a whole sentence and asks a real question — genuine meaning — but changes no word's إعراب. Semantically significant; grammatically غير عامل."
      },
      {
        termAr: "النفي",
        termEn: "لم، لن — عاملان، ونافيان في آن",
        glossEn: "Lessons 10.4–10.5",
        explanation: "You already classified لم ولن by their عمل (جزم ونصب). They're ALSO, by meaning, أداتا نفي. One particle, two true labels — grammatical classification and semantic classification simply answer different questions."
      },
      {
        termAr: "الشرط",
        termEn: "إنْ (حرف، عامل) — لكن معظم أدوات الشرط أسماء",
        glossEn: "Lesson 10.5, p. 198",
        explanation: "إنْ is both: a حرف, and عامل (جازم). But ما، مَنْ، أينَ، مهما، أيّ، متى، أيّان، أنّى — the rest of the شرط family — are grammatically أسماء, not حروف at all, even though they share إنْ's exact جزم effect."
      }
    ],

    conceptTree: {
      root: { ar: "معنى ⁄ عمل", en: "two independent axes" },
      branches: [
        { ar: "استفهام", en: "هَلْ", note: "غير عامل" },
        { ar: "نفي", en: "لم، لن", note: "عاملان (جزم، نصب) — ونافيان بالمعنى في آن" },
        { ar: "شرط", en: "إنْ", note: "حرف وعامل — بخلاف معظم أدوات الشرط الأخرى، وهي أسماء" }
      ]
    },

    example: {
      kind: "qurra-comparison",
      kindLabel: "Same lesson's own two particles, same meaning-family, opposite عمل status",
      arabic: "هَلْ",
      transliteration: "Hal",
      translation: "a question particle — غير عامل",
      explanation: "Carries real meaning (turns a statement into a question) and changes nothing's إعراب. Meaning without عمل.",
      contrast: {
        arabic: "لَمْ",
        translation: "a negation particle — عامل (جازم)",
        explanation: "Also carries real meaning (negates the past) — but ALSO forces جزم on the مضارع after it. Meaning AND عمل, together, in the same particle."
      }
    },

    practiceQuestions: [
      {
        id: "p1",
        type: "true-false",
        prompt: "كل حرف يحمل معنى واضحًا (كالاستفهام أو النفي) لا بد أن يكون عاملًا.",
        correct: false,
        explanation: "No — هَلْ تحمل معنى استفهام واضحًا وهي غير عاملة تمامًا. المعنى والعمل محوران مستقلان."
      },
      {
        id: "p2",
        type: "multiple-choice",
        prompt: "لم ولن — كيف تُصنَّفان، بحسب هذا الدرس؟",
        options: [
          { id: "a", labelAr: "عاملتان نحويًا (جزم، نصب) ونافيتان بالمعنى — تصنيفان صحيحان معًا" },
          { id: "b", labelAr: "نافيتان فقط، غير عاملتين" },
          { id: "c", labelAr: "عاملتان فقط، بلا أي معنى" }
        ],
        correctOptionId: "a",
        explanation: "Right — العمل (من Lessons 10.4–10.5) والمعنى (النفي) تصنيفان مختلفان، وكلاهما صحيح لنفس الحرف في آن واحد."
      },
      {
        id: "p3",
        type: "true-false",
        prompt: "جميع أدوات الشرط — بما فيها ما، مَنْ، أينَ — حروف.",
        correct: false,
        explanation: "No — Lesson 10.5 وكتابك (p. 198) كلاهما واضح: إنْ وإذما فقط حرفان؛ الباقي أسماء شرط، رغم مشاركتها نفس عمل الجزم."
      }
    ],

    summary: [
      "المعنى والعمل محوران مستقلان: هَلْ تحمل معنى بلا عمل؛ لم تحمل معنى وعملًا معًا.",
      "النفي كفئة دلالية يشمل عاملَين تعرفهما (لم، لن) — التصنيف الدلالي والتصنيف النحوي يتقاطعان، لا يتطابقان.",
      "الشرط كفئة دلالية يضم حرفًا عاملًا واحدًا (إنْ) وسط غالبية هي أسماء، لا حروف — Lesson 10.5's own boundary، مؤكَّد هنا مجددًا.",
      "Next, and last: كل ما تعلمته في هذا الباب، في خريطة واحدة."
    ],

    completion: {
      titleAr: "حروف الاستفهام والنفي والشرط وغيرها",
      statement: "لا كل حرف عامل — ولا كل عامل حرف. Next: الخريطة الكاملة للحروف."
    }
  },

  "10.10": {
    id: "10.10",
    steps: ["intro", "concept", "example", "quran", "practice", "summary", "completion"],

    sourceNote: {
      status: "book-cited",
      label: "Synthesis of pages 14, 20, 93, 108, 120, 124, 169–172, 183, 190–198, 208–215 — no new pages",
      detail: "Every rule in this closing map is already on record, drawn from Lessons 10.1–10.9 and, through them, directly from the book pages those lessons themselves cite (listed above). This lesson adds no new grammatical claim — it is QURRA's own synthesis map over source-verified material, matching the same precedent already used for Lessons 7.7, 8.8, and 9.5's own closing lessons."
    },

    intro: {
      titleAr: "الخريطة الكاملة للحروف",
      titleEn: "The Complete Map of Particles",
      statement: "Every lesson in this Part, and every Part it reached back into, in one place."
    },

    objective: [
      "state the single chain that organized this entire Part: الحرف → العامل / غير عامل → المعمول → الأثر",
      "place every حرف group from Lessons 10.3–10.9 correctly on the عاملة/غير عاملة map",
      "see all three sides of الكلمة's own triangle — اسم، فعل، حرف — complete at last, and this entire curriculum's own structure in one line"
    ],

    concept: {
      termAr: "الحروف: الخريطة الكاملة",
      kind: "book-cited",
      definitionAr: "الحَرْفُ: مَا لَا يَصْلُحُ مَعَهُ دَلِيلُ الِاسْمِ وَلَا دَلِيلُ الْفِعْلِ، وَهُوَ مَبْنِيٌّ دَائِمًا. وَمِنْهُ مَا هُوَ عَامِلٌ، وَمِنْهُ مَا لَيْسَ كَذَلِكَ.",
      definitionEn: "A particle fails both other tests (p. 14) and is always مبني (p. 20). Some particles are عامل — they force a new إعراب state on what follows; others aren't. Every lesson in this Part placed one more حرف group on that one map.",
      lead: "الحرف → العامل / غير عامل → المعمول → الأثر — one chain, repeated nine times, across nine different particle groups and five different earlier Parts."
    },

    definitionBreakdown: [
      {
        termAr: "تعريفه وبناؤه",
        termEn: "Lesson 10.1",
        glossEn: "p. 14, p. 20",
        explanation: "By exclusion, always مبني — the two facts every other lesson in this Part built on."
      },
      {
        termAr: "عاملة",
        termEn: "Lessons 10.3–10.7",
        glossEn: "تخفض / تنصب / تجزم / تنصب وترفع معًا",
        explanation: "حروف الجر (تخفض الاسم) · نواصب المضارع (تنصب الفعل) · جوازم المضارع (تجزمه) · إنّ وأخواتها ولا النافية للجنس (تنصبان الاسم وترفعان الخبر معًا)."
      },
      {
        termAr: "غير عاملة",
        termEn: "Lessons 10.8–10.9",
        glossEn: "تربط / تحمل معنى بلا عمل",
        explanation: "حروف العطف (تربط بالتبعية) · حروف الاستفهام والنفي والشرط (معنى حقيقي، عمل متفاوت — أحيانًا موجود كما في لم ولن، وأحيانًا غائب كما في هَلْ)."
      }
    ],

    conceptTree: {
      root: { ar: "الحروف", en: "the complete map — Part 10" },
      branches: [
        {
          ar: "حروف عاملة",
          en: "تفرض حالة إعرابية جديدة",
          children: [
            { ar: "حروف الجر", en: "تخفض — Lesson 10.3 / Part 4 (p. 169)" },
            { ar: "نواصب المضارع", en: "تنصب — Lesson 10.4 / Part 7 (p. 183)" },
            { ar: "جوازم المضارع", en: "تجزم — Lesson 10.5 / Part 7 (pp. 190–198)" },
            { ar: "إنّ وأخواتها", en: "تنصب الاسم، ترفع الخبر — Lesson 10.6 / Part 6 (p. 108)" },
            { ar: "لا النافية للجنس", en: "نفس عمل إنّ — Lesson 10.7 / Part 6 (p. 120)" }
          ]
        },
        {
          ar: "حروف غير عاملة",
          en: "لا تفرض حالة جديدة",
          children: [
            { ar: "حروف العطف", en: "تربط بالتبعية — Lesson 10.8 / Part 5 (p. 211)" },
            { ar: "حروف أخرى (استفهام، نفي، شرط...)", en: "معنى حقيقي، عمل متفاوت — Lesson 10.9" }
          ]
        }
      ]
    },

    example: {
      kind: "qurra-comparison",
      kindLabel: "Closing recap",
      arabic: "فِي",
      transliteration: "Fī",
      translation: "حرف جر، عامل — Lesson 10.3",
      explanation: "يدخل على اسم فيخفضه — الأثر الكلاسيكي لحرف عامل، ثابت منذ Lesson 10.3.",
      contrast: {
        arabic: "وَ",
        translation: "حرف عطف، غير عامل — Lesson 10.8",
        explanation: "يربط كلمتين بالتبعية، بلا أن يفرض على أيهما حالة جديدة. نفس الفئة الكبرى (حرف)، الطرف الآخر تمامًا من هذه الخريطة."
      }
    },

    quranExample: {
      surahAr: "التوبة",
      surahEn: "At-Tawbah",
      ayahRef: "9:40",
      arabic: "إِذْ يَقُولُ لِصَاحِبِهِ لَا تَحْزَنْ إِنَّ اللَّهَ مَعَنَا",
      translation: "[Remember] when he said to his companion, \"Do not grieve; indeed Allah is with us.\"",
      notice: "One ayah, two عاملة حروف — the whole chain, twice over. لَا (Lesson 10.5): العامل → تَحْزَنْ (المعمول) → جزم بالسكون (الأثر). إِنَّ (Lesson 10.6): العامل → اللَّهَ ومَعَنَا (المعمولان) → نصب الاسم ورفع الخبر (الأثر). Two completely different عوامل, back to back, each doing exactly what its own lesson in this Part described.",
      wordNotes: {
        "9-40-w4": { conceptLabel: "عامل — حرف جزم (Lesson 10.5)", explanation: "لَا الناهية — تجزم ما بعدها." },
        "9-40-w5": { conceptLabel: "معمول لا — الأثر: جزم", explanation: "تَحْزَنْ — مجزوم بالسكون." },
        "9-40-w6": { conceptLabel: "عامل — حرف ناسخ (Lesson 10.6)", explanation: "إِنَّ — تنصب الاسم وترفع الخبر." },
        "9-40-w7": { conceptLabel: "معمول إنّ الأول — الأثر: نصب", explanation: "اللَّهَ — اسم إنّ، منصوب." }
      }
    },

    practiceQuestions: [
      {
        id: "p1",
        type: "multiple-choice",
        prompt: "ما السلسلة الواحدة التي نظّمت كل درس في هذا الباب؟",
        options: [
          { id: "a", labelAr: "الحرف → عامل أو غير عامل → المعمول (إن وُجد) → الأثر (إن وُجد)" },
          { id: "b", labelAr: "الاسم → الفعل → الحرف" },
          { id: "c", labelAr: "المبتدأ → الخبر → العامل" }
        ],
        correctOptionId: "a",
        explanation: "Right — هذه السلسلة بالذات تكررت من Lesson 10.2 حتى 10.9، على تسع مجموعات حروف مختلفة."
      },
      {
        id: "p2",
        type: "true-false",
        prompt: "في 9:40، كل من «لا» و«إنّ» تؤدي نفس الأثر الإعرابي بالضبط.",
        correct: false,
        explanation: "No — لا تجزم الفعل بعدها؛ إنّ تنصب الاسم وترفع الخبر. عاملان مختلفان تمامًا بالأثر، مجتمعان في آية واحدة."
      },
      {
        id: "p3",
        type: "multiple-choice",
        prompt: "بعد Part 10، ما الذي اكتمل من خريطة أقسام الكلمة (Lesson 1.3)؟",
        options: [
          { id: "a", labelAr: "الأقسام الثلاثة كلها: الاسم (Parts 4، 8)، الفعل (Parts 7، 9)، والحرف (Part 10)" },
          { id: "b", labelAr: "الحرف فقط، والاسم والفعل ما زالا ناقصين" },
          { id: "c", labelAr: "لا علاقة بين هذا الباب و Lesson 1.3" }
        ],
        correctOptionId: "a",
        explanation: "Right — Lesson 1.3 قسّمت الكلمة إلى ثلاثة؛ كل قسم أخذ أبوابه الخاصة عبر هذا المنهج، و Part 10 يغلق آخرها."
      },
      {
        id: "p4",
        type: "true-false",
        prompt: "كل حرف غير عامل عديم المعنى أو عديم الأهمية.",
        correct: false,
        explanation: "No — Lesson 10.2 و Lesson 10.9 كلاهما أوضح هذا صراحة: حروف العطف تربط أفكارًا كاملة؛ هَلْ تطرح سؤالًا حقيقيًا. غير عامل لا يعني عديم المعنى."
      }
    ],

    summary: [
      "السلسلة الواحدة لهذا الباب كله: الحرف → عامل أو غير عامل → المعمول (إن وُجد) → الأثر (إن وُجد).",
      "عاملة: حروف الجر (تخفض) · نواصب (تنصب الفعل) · جوازم (تجزمه) · إنّ وأخواتها ولا النافية للجنس (تنصبان الاسم وترفعان الخبر).",
      "غير عاملة: حروف العطف (تربط بالتبعية) · حروف أخرى (معنى حقيقي، عمل متفاوت).",
      "بإكمال Part 10، أقسام الكلمة الثلاثة من Lesson 1.3 — الاسم، الفعل، الحرف — مكتملة جميعًا عبر هذا المنهج.",
      "هذا هو المنهج الحالي لـQURRA Grammar، كاملًا."
    ],

    completion: {
      titleAr: "الخريطة الكاملة للحروف",
      statement: "الاسم، الفعل، والحرف — ثلاثتها مكتملة الآن. هذا هو منهج QURRA Grammar الحالي، كاملًا."
    }
  }

};






