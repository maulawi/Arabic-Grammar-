/* ==========================================================================
   QURRA Grammar — Curriculum data
   Phase 2 scope: real curriculum structure and navigation data. Lesson
   descriptions are short orientation copy, not authored lesson content —
   that arrives in Phase 3. Lesson counts and durations are placeholders;
   QG_CURRICULUM.provisional stays true until a part's lessons are finalized.
   ========================================================================== */

const QG_CURRICULUM = {
  // True while any part's lesson breakdown may still change.
  // Surfaced in the UI instead of presenting totals as final.
  provisional: true,

  parts: [
    {
      id: 1,
      slug: "foundations",
      titleAr: "الأساسيات",
      titleEn: "Foundations",
      desc: "Build the foundation of Arabic grammar and identify the three types of words.",
      lessons: [
        { id: "1.1", number: "01", titleAr: "ما الكلام؟", titleEn: "What is al-Kalam?", desc: "The building block of every Arabic sentence: what makes a group of words a complete utterance.", durationMin: 8 },
        { id: "1.2", number: "02", titleAr: "ما الكلمة؟", titleEn: "What is al-Kalimah?", desc: "A single word, and how it differs from Kalam.", durationMin: 5 },
        { id: "1.3", number: "03", titleAr: "أقسام الكلمة", titleEn: "The Three Word Types", desc: "Every Arabic word is an ism, a fi'l, or a harf — and everything else follows from knowing which.", durationMin: 5 },
        { id: "1.4", number: "04", titleAr: "الاسم", titleEn: "The Noun (Ism)", desc: "Recognizing nouns and what sets them apart from the other word types.", durationMin: 5 },
        { id: "1.5", number: "05", titleAr: "الفعل", titleEn: "The Verb (Fi'l)", desc: "Recognizing verbs and the three verb forms.", durationMin: 5 },
        { id: "1.6", number: "06", titleAr: "الحرف", titleEn: "The Particle (Harf)", desc: "Particles carry no meaning alone — only in relation to other words.", durationMin: 5 },
        { id: "1.7", number: "07", titleAr: "علامات الاسم", titleEn: "Signs of a Noun", desc: "The tests that identify a noun: tanwin, al-, and more.", durationMin: 5 },
        { id: "1.8", number: "08", titleAr: "علامات الفعل", titleEn: "Signs of a Verb", desc: "The tests that identify a verb, and how they differ from a noun's.", durationMin: 5 }
      ]
    },
    {
      id: 2,
      slug: "irab-bina",
      titleAr: "الإعراب والبناء",
      titleEn: "I'rab & Bina'",
      desc: "Understand why some words change their ending and others never do.",
      lessons: [
        { id: "2.1", number: "01", titleAr: "معرب أم مبني؟", titleEn: "Mu'rab or Mabni?", desc: "Every kalimah is one of two kinds: one whose ending changes, and one whose ending never does.", durationMin: 5 },
        { id: "2.2", number: "02", titleAr: "الإعراب والمعرب", titleEn: "I'rab and the Mu'rab Word", desc: "Why a word's ending changes, and what makes a word mu'rab.", durationMin: 6 },
        { id: "2.3", number: "03", titleAr: "البناء والمبني", titleEn: "Bina' and the Mabni Word", desc: "Why some words never change, and the fixed marks a mabni word can carry.", durationMin: 6 },
        { id: "2.4", number: "04", titleAr: "الفرق بين المعرب والمبني", titleEn: "Telling Mu'rab from Mabni", desc: "Comparing changeable and fixed words side by side — including the one word type that's always mabni.", durationMin: 6 },
        { id: "2.5", number: "05", titleAr: "حالات الإعراب", titleEn: "The States of I'rab", desc: "Raf', nasb, khafd, and jazm — the four states a mu'rab word's ending can take.", durationMin: 5 },
        { id: "2.6", number: "06", titleAr: "حالات الاسم المعرب", titleEn: "I'rab States of the Noun", desc: "Which of the four states a mu'rab noun can actually take — and the one it can't.", durationMin: 5 },
        { id: "2.7", number: "07", titleAr: "حالات الفعل المعرب", titleEn: "I'rab States of the Verb", desc: "Which states a mu'rab verb can take, and why only the mudari' verb takes them at all.", durationMin: 6 }
      ]
    },
    {
      id: 3,
      slug: "signs-of-irab",
      titleAr: "علامات الإعراب",
      titleEn: "Signs of I'rab",
      desc: "Learn how each i'rab state is actually marked on a word — and when the usual marker is replaced by a substitute sign.",
      lessons: [
        { id: "3.1", number: "01", titleAr: "ما هي علامات الإعراب؟", titleEn: "What Are the Signs of I'rab?", desc: "The map: four states, each with an original sign — and substitutes for the words that can't take it.", durationMin: 5 },
        { id: "3.2", number: "02", titleAr: "علامات الرفع: الضمة", titleEn: "Signs of Raf': the Damma", desc: "The original sign of raf', and the four word-positions where it appears.", durationMin: 6 },
        { id: "3.3", number: "03", titleAr: "نيابة الواو والألف والنون عن الضمة", titleEn: "Raf's Substitute Signs", desc: "When damma can't be used, waw, alif, or nun stand in for it — each for its own word type.", durationMin: 7 },
        { id: "3.4", number: "04", titleAr: "علامات النصب: الفتحة", titleEn: "Signs of Nasb: the Fatha", desc: "The original sign of nasb, and the three word-positions where it appears.", durationMin: 6 },
        { id: "3.5", number: "05", titleAr: "علامات النصب الفرعية", titleEn: "Nasb's Substitute Signs", desc: "Alif, kasra, ya', and a dropped nun — nasb's four substitute signs, each for its own word type.", durationMin: 7 },
        { id: "3.6", number: "06", titleAr: "علامات الخفض", titleEn: "Signs of Khafd", desc: "The original sign of khafd, the kasra, and its two substitutes: ya' and fatha.", durationMin: 6 },
        { id: "3.7", number: "07", titleAr: "علامتا الجزم", titleEn: "Signs of Jazm", desc: "Sukun, the original sign of jazm — and when a weak final letter is dropped instead.", durationMin: 6 },
        { id: "3.8", number: "08", titleAr: "الخريطة الكاملة لعلامات الإعراب", titleEn: "The Complete Map", desc: "Every state and every sign, brought together — and the book's own two-way split of every mu'rab noun.", durationMin: 6 }
      ]
    },
    {
      id: 4,
      slug: "ism-murab",
      titleAr: "الاسم المعرب",
      titleEn: "Ism Mu'rab",
      desc: "Every major noun role in a Qur'anic sentence, grouped by case: المرفوعات، المنصوبات، والمجرورات.",
      lessons: [
        { id: "4.1", number: "01", titleAr: "المرفوعات: نظرة عامة", titleEn: "Marfu'at: an Overview", desc: "The noun roles that take raf' — and why.", durationMin: 5 },
        { id: "4.2", number: "02", titleAr: "الفاعل", titleEn: "The Doer (Fa'il)", desc: "The noun that performs the verb's action.", durationMin: 5 },
        { id: "4.3", number: "03", titleAr: "نائب الفاعل", titleEn: "The Substitute Doer", desc: "When the doer is dropped, another noun takes its grammatical place.", durationMin: 5 },
        { id: "4.4", number: "04", titleAr: "المبتدأ", titleEn: "The Topic (Mubtada')", desc: "The noun that opens a sentence needing no verb at all.", durationMin: 5 },
        { id: "4.5", number: "05", titleAr: "الخبر", titleEn: "The Comment (Khabar)", desc: "What completes المبتدأ — and the three shapes it can take.", durationMin: 6 },
        { id: "4.6", number: "06", titleAr: "المنصوبات: نظرة عامة", titleEn: "Mansubat: an Overview", desc: "The noun roles that take nasb — and why there are so many.", durationMin: 5 },
        { id: "4.7", number: "07", titleAr: "المفعول به", titleEn: "The Direct Object", desc: "The noun that receives the verb's action.", durationMin: 5 },
        { id: "4.8", number: "08", titleAr: "المفعول المطلق", titleEn: "The Absolute Object", desc: "A masdar from the verb's own root, used to stress or describe the action.", durationMin: 5 },
        { id: "4.9", number: "09", titleAr: "المفعول فيه", titleEn: "The Adverbial of Time and Place", desc: "The noun that answers when or where the action happened.", durationMin: 5 },
        { id: "4.10", number: "10", titleAr: "المفعول لأجله والمفعول معه", titleEn: "Causative & Comitative Objects", desc: "The noun that gives the reason for an action, and the noun that names who or what was alongside it.", durationMin: 6 },
        { id: "4.11", number: "11", titleAr: "المنادى", titleEn: "The Called-To Noun (Munada)", desc: "The noun used to call out to someone — and when it takes nasb.", durationMin: 5 },
        { id: "4.12", number: "12", titleAr: "الحال", titleEn: "The Circumstantial State (Hal)", desc: "The noun that describes the state of someone or something during the action.", durationMin: 5 },
        { id: "4.13", number: "13", titleAr: "التمييز", titleEn: "The Specifier (Tamyiz)", desc: "The noun that clarifies an otherwise ambiguous quantity or quality.", durationMin: 5 },
        { id: "4.14", number: "14", titleAr: "المستثنى", titleEn: "The Excepted Noun", desc: "The noun excluded from a general statement by illa and its sisters.", durationMin: 5 },
        { id: "4.15", number: "15", titleAr: "المجرورات: نظرة عامة", titleEn: "Majrurat: an Overview", desc: "The three ways a noun becomes genitive — and why.", durationMin: 5 },
        { id: "4.16", number: "16", titleAr: "المخفوض بالحرف", titleEn: "The Object of a Preposition", desc: "The most common path to khafd: a preposition placed right before the noun.", durationMin: 5 },
        { id: "4.17", number: "17", titleAr: "المخفوض بالإضافة", titleEn: "The Genitive by Idafah", desc: "A noun made genitive with no preposition at all — just idafah (possession).", durationMin: 5 }
      ]
    },
    /* ------------------------------------------------------------------
       CURRICULUM RENUMBERING (Part 5 task):
       The نواسخ stub below used to be Part 5. Per the task brief, it is
       now Part 6 — reserved, not built — and the real new Part 5 is
       التوابع, inserted directly below. Every Part after نواسخ shifts by
       one (fil-murab 6→7, asma-mabni 7→8, afal-mabni 8→9, huruf 9→10).
       This is a pure data change: completion-screen "Continue to Part
       N+1" / "Back to Part N" buttons (js/lessonRender.js) and all
       progress/unlock logic (js/progress.js) derive entirely from each
       part's `id` and the curriculum array's own order — nothing else in
       the codebase hardcodes a part number. No LocalStorage reset is
       needed or performed; existing completedLessons ids (1.x–4.x) are
       untouched by this change.
       ------------------------------------------------------------------ */
    {
      id: 5,
      slug: "tawabi",
      titleAr: "التوابع",
      titleEn: "Tawabi' (Dependent Words)",
      desc: "A new kind of relationship: a تابع follows its متبوع's grammatical state rather than earning one of its own. Four categories: النعت، العطف، التوكيد، والبدل.",
      lessons: [
        { id: "5.1", number: "01", titleAr: "ما هي التوابع؟", titleEn: "What Are the Tawabi'?", desc: "The core idea behind every تابع: it follows its متبوع's state instead of earning its own.", durationMin: 5 },
        { id: "5.2", number: "02", titleAr: "النعت: التعريف والشروط", titleEn: "An-Na'at: Definition and Conditions", desc: "The first تابع category — a word, or even a جملة, that describes its متبوع.", durationMin: 6 },
        { id: "5.3", number: "03", titleAr: "النعت الحقيقي", titleEn: "True Na't: Agreement in Four Things", desc: "How a direct نعت matches its متبوع in إعراب, definiteness, gender, and number, all at once.", durationMin: 6 },
        { id: "5.4", number: "04", titleAr: "النعت السببي وأغراضه", titleEn: "Sababi Na't & Its Purposes", desc: "The one real twist in النعت, plus the six purposes a نعت can serve.", durationMin: 6 },
        { id: "5.5", number: "05", titleAr: "العطف: عطف البيان وعطف النسق", titleEn: "Al-'Atf: Bayan and Nasaq", desc: "A second تابع category: one shape that clarifies with no particle, and one that links through ten.", durationMin: 6 },
        { id: "5.6", number: "06", titleAr: "معاني حروف العطف", titleEn: "What Each Particle Means", desc: "The core meaning behind each of the ten حروف العطف.", durationMin: 5 },
        { id: "5.7", number: "07", titleAr: "التوكيد: لفظي ومعنوي", titleEn: "At-Tawkid: Verbal and Abstract", desc: "A تابع that only strengthens — by exact repetition, or by one of seven fixed words.", durationMin: 6 },
        { id: "5.8", number: "08", titleAr: "البدل", titleEn: "Al-Badal", desc: "The last category — and the only one where the تابع genuinely stands in for its متبوع.", durationMin: 6 },
        { id: "5.9", number: "09", titleAr: "الخريطة الكاملة للتوابع", titleEn: "The Complete Map of Tawabi'", desc: "All four تابع categories, brought together in one map.", durationMin: 5 }
      ]
    },

    {
      id: 6,
      slug: "nawasikh",
      titleAr: "النواسخ",
      titleEn: "Nawasikh",
      desc: "The particles and verbs that enter a nominal sentence and reshape its case pattern.",
      lessons: [
        { id: "6.1", number: "01", titleAr: "ما هي النواسخ؟", titleEn: "What Are the Nawasikh?", desc: "How a ناسخ enters a nominal sentence and reshapes the rules of its parts.", durationMin: 5 },
        { id: "6.2", number: "02", titleAr: "كان وأخواتها: المجموعة غير المشروطة", titleEn: "Kana and Her Unconditional Sisters", desc: "The group that always keeps the mubtada' raf' and puts the khabar in nasb.", durationMin: 6 },
        { id: "6.3", number: "03", titleAr: "أخوات كان المشروطة", titleEn: "Kana's Conditional Sisters", desc: "The sisters of kana that only work in negation or under special conditions.", durationMin: 5 },
        { id: "6.4", number: "04", titleAr: "إنّ وأخواتها", titleEn: "Inna and Her Sisters", desc: "The mirror image of kana — putting the ism in nasb and keeping the khabar in raf'.", durationMin: 6 },
        { id: "6.5", number: "05", titleAr: "المقارنة: كان ↔ إنّ", titleEn: "Kana vs. Inna: The Key Contrast", desc: "Two case patterns that run in opposite directions, side by side.", durationMin: 5 },
        { id: "6.6", number: "06", titleAr: "لا النافية للجنس", titleEn: "La of Categorical Negation", desc: "Negating an entire category in a single word.", durationMin: 5 },
        { id: "6.7", number: "07", titleAr: "ظنّ وأخواتها: أفعال القلوب", titleEn: "Zanna and Her Sisters: The Heart-Verbs", desc: "Verbs of thought and perception that turn mubtada' and khabar into two maf'ul.", durationMin: 6 },
        { id: "6.8", number: "08", titleAr: "ظنّ وأخواتها: أفعال التصيير", titleEn: "Zanna and Her Sisters: The Verbs of Transformation", desc: "Verbs of making or rendering something into a new state.", durationMin: 5 },
        { id: "6.9", number: "09", titleAr: "الخريطة الكاملة للنواسخ", titleEn: "The Complete Map of the Nawasikh", desc: "All three structural types of nawasikh, brought together in one map.", durationMin: 5 }
      ]
    },
    {
      id: 7,
      slug: "fil-murab",
      titleAr: "الفعل المعرب",
      titleEn: "Fi'l Mu'rab",
      desc: "The one verb form that takes i'rab, and what changes its ending.",
      lessons: [
        { id: "7.1", number: "01", titleAr: "ما هو الفعل المعرب؟", titleEn: "What Is the Mu'rab Verb?", desc: "Why the mudari' is the one verb type that takes i'rab, and the central model this Part keeps returning to.", durationMin: 5 },
        { id: "7.2", number: "02", titleAr: "رفع الفعل المضارع", titleEn: "Raf' of the Mudari'", desc: "Its default, unmarked state — and the two signs that mark it.", durationMin: 6 },
        { id: "7.3", number: "03", titleAr: "نصب الفعل المضارع", titleEn: "Nasb of the Mudari'", desc: "An, lan, kay, and idhan — the four particles that put it into nasb by themselves.", durationMin: 6 },
        { id: "7.4", number: "04", titleAr: "جزم الفعل المضارع: الجوازم لفعل واحد", titleEn: "Jazm of the Mudari': One-Verb Jawazim", desc: "Lam, lamma, lam al-amr, and la an-nahiya — particles that jazm a single verb.", durationMin: 6 },
        { id: "7.5", number: "05", titleAr: "جزم الفعل المضارع: أدوات الشرط الجازمة", titleEn: "Jazm of the Mudari': the Conditional Jawazim", desc: "In, ma, man, and ayna — particles that jazm two verbs at once, a condition and its result.", durationMin: 6 },
        { id: "7.6", number: "06", titleAr: "الأفعال الخمسة والأفعال المعتلة الآخر", titleEn: "The Five Verbs and Weak-Final Verbs", desc: "Two special verb shapes and how their signs shift across raf', nasb, and jazm.", durationMin: 6 },
        { id: "7.7", number: "07", titleAr: "الخريطة الكاملة للفعل المضارع", titleEn: "The Complete Map of the Mudari'", desc: "All three states of the mudari', brought together in one map.", durationMin: 5 }
      ]
    },
    {
      id: 8,
      slug: "asma-mabni",
      titleAr: "الأسماء المبنية",
      titleEn: "Asma' Mabni",
      desc: "Pronouns, demonstratives, and the relative nouns — every noun whose ending stays fixed, and the grammatical position it can still carry.",
      lessons: [
        { id: "8.1", number: "01", titleAr: "من المعرب إلى المبني", titleEn: "From Mu'rab to Mabni", desc: "Reactivating Part 2's distinction, and your book's own complete map of mabni noun categories.", durationMin: 6 },
        { id: "8.2", number: "02", titleAr: "الضمير المستتر", titleEn: "The Hidden Pronoun", desc: "The pronoun with no visible letters at all — hidden by obligation or by choice.", durationMin: 6 },
        { id: "8.3", number: "03", titleAr: "الضمير المتصل", titleEn: "The Attached Pronoun", desc: "Mabni plus fi mahall — the central pattern behind every lesson in this Part.", durationMin: 6 },
        { id: "8.4", number: "04", titleAr: "الضمير المنفصل", titleEn: "The Detached Pronoun", desc: "24 standalone pronouns, split cleanly between raf' and nasb, proven with four Qur'anic examples.", durationMin: 6 },
        { id: "8.5", number: "05", titleAr: "اسم الإشارة", titleEn: "The Demonstrative Noun", desc: "Hadha, hadhihi, dhalika, and the near/far markers that shape them.", durationMin: 6 },
        { id: "8.6", number: "06", titleAr: "الاسم الموصول: الخاص", titleEn: "Relative Nouns — Specific Forms", desc: "Alladhi, allati, and the rest of the eight words each locked to one gender and number.", durationMin: 6 },
        { id: "8.7", number: "07", titleAr: "الاسم الموصول: المشترك", titleEn: "Relative Nouns — Shared Forms", desc: "Man, ma, and al as a relative noun — six words that never change shape.", durationMin: 6 },
        { id: "8.8", number: "08", titleAr: "الخريطة الكاملة للأسماء المبنية", titleEn: "The Complete Map of Mabni Nouns", desc: "Every category from this Part, brought together on one map.", durationMin: 5 }
      ]
    },
    {
      id: 9,
      slug: "afal-mabni",
      titleAr: "الأفعال المبنية",
      titleEn: "Af'al Mabni",
      desc: "The madi and amr verbs, always mabni — and the two situations where even the mudari' loses its i'rab.",
      lessons: [
        { id: "9.1", number: "01", titleAr: "من بناء الاسم إلى بناء الفعل", titleEn: "From Noun-Building to Verb-Building", desc: "Your book's own classification: for verbs, building is the default and i'rab is the exception.", durationMin: 5 },
        { id: "9.2", number: "02", titleAr: "بناء الفعل الماضي", titleEn: "How the Past-Tense Verb Is Built", desc: "The default fatha, and the two attachments that shift it to damma or sukun.", durationMin: 6 },
        { id: "9.3", number: "03", titleAr: "بناء فعل الأمر", titleEn: "How the Imperative Verb Is Built", desc: "The default sukun, dropping the nun, dropping the weak letter — and the book's own flagged fourth case.", durationMin: 6 },
        { id: "9.4", number: "04", titleAr: "حالات بناء الفعل المضارع", titleEn: "When the Mudari' Verb Becomes Mabni", desc: "Why the present tense is normally mu'rab, and the two attachments that build it instead.", durationMin: 6 },
        { id: "9.5", number: "05", titleAr: "الخريطة الكاملة للأفعال", titleEn: "The Complete Map of Verb Building", desc: "All three verb types, tied together — and a one-line bridge to what's next.", durationMin: 5 }
      ]
    },
    {
      id: 10,
      slug: "huruf",
      titleAr: "الحروف",
      titleEn: "Huruf",
      desc: "The final Part: what particles are, which ones act as grammatical operators, and how every حرف group from Parts 4–9 fits one single chain — الحرف → العامل → المعمول → الأثر.",
      lessons: [
        { id: "10.1", number: "01", titleAr: "ما هو الحرف؟", titleEn: "What Is a Particle?", desc: "Two facts you already have — its by-exclusion definition and its unbroken بناء — and the question this whole Part answers.", durationMin: 5 },
        { id: "10.2", number: "02", titleAr: "الحروف العاملة وغير العاملة", titleEn: "Operating vs. Non-Operating Particles", desc: "The one distinction that organizes every lesson still ahead: does a حرف force a new إعراب state, or not?", durationMin: 6 },
        { id: "10.3", number: "03", titleAr: "حروف الجر", titleEn: "Prepositions as عوامل", desc: "The first عامل حرف — reactivating Part 4 through Part 10's own chain.", durationMin: 5 },
        { id: "10.4", number: "04", titleAr: "نواصب المضارع", titleEn: "The Particles That Nasb the Mudari'", desc: "Part 7's four نواصب, named for what they structurally are: عاملة حروف acting on a فعل.", durationMin: 5 },
        { id: "10.5", number: "05", titleAr: "جوازم المضارع", titleEn: "The Particles That Jazm the Mudari'", desc: "Part 7's جوازم — and the book's own boundary: most أدوات الشرط are أسماء, not حروف at all.", durationMin: 6 },
        { id: "10.6", number: "06", titleAr: "إنّ وأخواتها", titleEn: "Inna and Her Sisters, as عوامل", desc: "The first عامل in this Part to act on a whole جملة اسمية at once, reactivating Part 6.", durationMin: 5 },
        { id: "10.7", number: "07", titleAr: "لا النافية للجنس", titleEn: "La of Categorical Negation, as a عامل", desc: "A second, unrelated حرف — producing the exact same أثر as إنّ.", durationMin: 5 },
        { id: "10.8", number: "08", titleAr: "حروف العطف", titleEn: "Conjunctions — Linking, Not Operating", desc: "The clearest غير عامل حروف in the language: real grammatical work, with no new حالة forced.", durationMin: 5 },
        { id: "10.9", number: "09", titleAr: "حروف الاستفهام والنفي والشرط وغيرها", titleEn: "Semantic Categories — Not Every حرف Is عامل", desc: "A light survey correcting the one trap this Part could otherwise leave you in.", durationMin: 5 },
        { id: "10.10", number: "10", titleAr: "الخريطة الكاملة للحروف", titleEn: "The Complete Map of Particles", desc: "Every lesson in this Part, and the whole QURRA Grammar curriculum, in one place.", durationMin: 6 }
      ]
    }
  ]
};

/**
 * Verified Qur'an example shown on the Home screen's Qur'an Connection
 * card. Reference and text as given directly in the Phase 1 spec
 * (Ayat al-Kursi, Al-Baqarah 2:255, opening clause).
 */
const QG_HOME_QURAN_EXAMPLE = {
  surahEn: "Al-Baqarah",
  ayahRef: "2:255",
  arabic: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ",
  translation: "Allah — there is no deity except Him, the Ever-Living, the Self-Sustaining. Neither drowsiness overtakes Him nor sleep.",
  topicLabel: "Mubtada' & Khabar"
};

/* ---------------------------------------------------------------------- */
/* Small curriculum lookups shared by render.js and router.js             */
/* ---------------------------------------------------------------------- */

function qgGetPartBySlug(slug) {
  return QG_CURRICULUM.parts.find((p) => p.slug === slug) || null;
}

function qgGetLessonInPart(part, lessonNumber) {
  if (!part) return null;
  return part.lessons.find((l) => l.number === lessonNumber) || null;
}

/** Every lesson in curriculum order, each tagged with its part. */
function qgFlattenLessons() {
  const flat = [];
  QG_CURRICULUM.parts.forEach((part) => {
    part.lessons.forEach((lesson) => {
      flat.push({ ...lesson, partId: part.id, partSlug: part.slug, partTitleEn: part.titleEn });
    });
  });
  return flat;
}

function qgTotalLessonCount() {
  return QG_CURRICULUM.parts.reduce((sum, p) => sum + p.lessons.length, 0);
}
