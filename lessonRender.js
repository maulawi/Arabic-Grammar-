/* ==========================================================================
   QURRA Grammar — Lesson components (Phase 3)
   Reusable render functions for the real lesson experience. Each function
   is named after the component it stands in for, per the Phase 3 spec:
   LessonHeader, LearningObjective, ConceptCard, DefinitionBreakdown,
   ExampleCard, QuranExampleCard, NoticeInteraction, PracticeQuestion,
   QuranChallenge, LessonSummary, LessonCompletion, LessonProgress.
   ========================================================================== */

/* ---------------------------------------------------------------------- */
/* LessonProgress                                                         */
/* ---------------------------------------------------------------------- */

function renderLessonProgress(part, lesson, stepIndex) {
  const lessonPos = `Lesson ${parseInt(lesson.number, 10)} of ${part.lessons.length}`;
  const steps = qgLessonSession.steps;
  const activeSegment = QG_STEP_SEGMENT[steps[stepIndex]];

  // Part 1 batch: a shorter lesson (e.g. no "quran"/"notice"/"challenge"
  // steps) only shows the segments it actually passes through, so the
  // loop never implies content that isn't there. Steps are always
  // authored in forward order, so this list comes out already sorted.
  const usedSegments = [...new Set(steps.map((s) => QG_STEP_SEGMENT[s]))];

  const segments = usedSegments.map((segIndex) => {
    const label = QG_LESSON_SEGMENTS[segIndex];
    const cls = segIndex < activeSegment ? "is-done" : segIndex === activeSegment ? "is-current" : "";
    return `<span class="lesson-progress-segment ${cls}"><span class="lesson-progress-dot"></span>${label}</span>`;
  }).join("");

  return `
    <div class="lesson-progress">
      <span class="lesson-progress-pos">${lessonPos}</span>
      <div class="lesson-progress-loop">${segments}</div>
    </div>
  `;
}

/* ---------------------------------------------------------------------- */
/* Source note (fidelity disclosure)                                      */
/* ---------------------------------------------------------------------- */

function renderSourceNote(sourceNote) {
  if (!sourceNote) return "";
  if (sourceNote.status === "unverified-general-tradition") {
    return `
      <div class="source-note">
        <span class="source-note-label">${sourceNote.label}</span>
        <p>${sourceNote.detail}</p>
      </div>
    `;
  }
  // Phase 5: a positive counterpart for a lesson that IS sourced directly
  // from the user's book — visually distinct (solid, not dashed; green
  // accent, not amber) so the two states read as opposites at a glance.
  if (sourceNote.status === "book-cited") {
    return `
      <div class="source-note source-note-verified">
        <span class="source-note-label">${sourceNote.label}</span>
        <p>${sourceNote.detail}</p>
      </div>
    `;
  }
  return "";
}

/* ---------------------------------------------------------------------- */
/* Step: Intro (LessonHeader + LearningObjective)                        */
/* ---------------------------------------------------------------------- */

function renderLessonIntroStep(part, lesson, content) {
  return `
    <div class="lesson-step lesson-step-intro">
      <span class="eyebrow">Lesson ${lesson.number}</span>
      <p class="lesson-step-ar ar-display">${content.intro.titleAr}</p>
      <h1 class="lesson-step-title">${content.intro.titleEn}</h1>
      <p class="lesson-step-statement">${content.intro.statement}</p>

      <div class="lesson-meta-row">
        <span class="lesson-meta-item">~${lesson.durationMin} min &middot; estimate</span>
        <span class="lesson-meta-item">Part ${String(part.id).padStart(2, "0")} &middot; ${part.titleEn}</span>
      </div>

      <div class="objective-card">
        <h4>By the end of this lesson, you should be able to:</h4>
        <ul class="objective-list">
          ${content.objective.map((o) => `<li>${o}</li>`).join("")}
        </ul>
      </div>
    </div>
  `;
}

/* ---------------------------------------------------------------------- */
/* Step: Concept (ConceptCard + DefinitionBreakdown)                     */
/* ---------------------------------------------------------------------- */

function renderConceptStep(content) {
  const concept = content.concept;
  const terms = content.definitionBreakdown.map((term) => `
    <details class="term-disclosure">
      <summary>
        <span class="term-disclosure-ar ar">${term.termAr}</span>
        <span class="term-disclosure-en">${term.termEn} &middot; ${term.glossEn}</span>
        <span class="term-disclosure-chevron">+</span>
      </summary>
      <p>${term.explanation}</p>
    </details>
  `).join("");

  return `
    <div class="lesson-step">
      <span class="eyebrow">Concept</span>
      <h2>${concept.termAr}</h2>
      ${renderSourceNote(content.sourceNote)}

      <div class="concept-card">
        <p class="concept-definition-ar ar">${concept.definitionAr}</p>
        <p class="concept-definition-en">${concept.definitionEn}</p>
      </div>

      <p class="lesson-step-lead">${concept.lead}</p>

      <div class="term-disclosure-list">
        ${terms}
      </div>

      ${renderThreeTypesAside(content.threeTypes)}
      ${renderConceptTree(content.conceptTree)}
    </div>
  `;
}

/**
 * A brief, deliberately shallow mention of a concept that belongs to a
 * later lesson (e.g. Lesson 1.2 naming اسم/فعل/حرف without teaching them —
 * that's Lesson 1.3). Optional: only renders when a lesson supplies it,
 * and it's visually a quiet aside, not another DefinitionBreakdown term,
 * so it doesn't read as something to master right now.
 */
function renderThreeTypesAside(threeTypes) {
  if (!threeTypes) return "";
  const items = threeTypes.items.map((t) => `
    <span class="three-types-item">
      <span class="three-types-ar ar">${t.termAr}</span>
      <span class="three-types-gloss">${t.glossEn}</span>
    </span>
  `).join("");
  return `
    <div class="three-types-aside">
      <p class="three-types-lead">${threeTypes.lead}</p>
      <div class="three-types-row">${items}</div>
      <p class="three-types-note">${threeTypes.note}</p>
    </div>
  `;
}

/**
 * ConceptTree — Phase 7 / Part 2's recurring visual device for a word-
 * classification hierarchy (e.g. الكلمة → معرب / مبني, later المعرب →
 * رفع / نصب / خفض / جزم). Deliberately quiet and static — no new colors,
 * no motion — and recursive so a branch may itself carry sub-branches
 * without needing a second component. Renders nothing if a lesson
 * doesn't supply content.conceptTree, so it's a pure opt-in like
 * renderThreeTypesAside.
 * @param {object} tree - { root: {ar, en}, branches: [{ar, en, note?, children?}] }
 */
function renderConceptTree(tree) {
  if (!tree) return "";

  function renderBranches(branches) {
    return `
      <div class="concept-tree-branches">
        ${branches.map((b) => `
          <div class="concept-tree-branch">
            <div class="concept-tree-connector" aria-hidden="true"></div>
            <div class="concept-tree-branch-pill">
              <span class="concept-tree-node-ar ar">${b.ar}</span>
              ${b.en ? `<span class="concept-tree-node-en">${b.en}</span>` : ""}
            </div>
            ${b.note ? `<p class="concept-tree-branch-note">${b.note}</p>` : ""}
            ${b.children && b.children.length ? renderBranches(b.children) : ""}
          </div>
        `).join("")}
      </div>
    `;
  }

  return `
    <div class="concept-tree" role="img" aria-label="${tree.root.ar}${tree.root.en ? " — " + tree.root.en : ""}, branching into ${tree.branches.map((b) => b.en || b.ar).join(", ")}">
      <div class="concept-tree-node-ar ar">${tree.root.ar}</div>
      ${tree.root.en ? `<span class="concept-tree-node-en">${tree.root.en}</span>` : ""}
      <div class="concept-tree-connector" aria-hidden="true"></div>
      ${renderBranches(tree.branches)}
    </div>
  `;
}

/* ---------------------------------------------------------------------- */
/* Step: Example (ExampleCard)                                            */
/* ---------------------------------------------------------------------- */

function renderExampleStep(content) {
  const ex = content.example;
  return `
    <div class="lesson-step">
      <span class="eyebrow">Example</span>
      <h2>Seeing it in practice</h2>
      <span class="example-kind-label">${ex.kindLabel}</span>

      <div class="example-card">
        <p class="example-arabic ar-display">${ex.arabic}</p>
        <p class="example-translit">${ex.transliteration} &mdash; &ldquo;${ex.translation}&rdquo;</p>
        <p class="example-explanation">${ex.explanation}</p>
      </div>

      <div class="example-card example-card-contrast">
        <p class="example-arabic ar-display" style="font-size:1.5rem;">${ex.contrast.arabic}</p>
        <p class="example-translit">${ex.contrast.translation}</p>
        <p class="example-explanation">${ex.contrast.explanation}</p>
      </div>
    </div>
  `;
}

/* ---------------------------------------------------------------------- */
/* Step: Qur'an Connection (QuranExampleCard, extended with "notice")    */
/* ---------------------------------------------------------------------- */

function renderQuranConnectionStep(content) {
  const q = content.quranExample;

  // Phase 4: this step now demonstrates the reusable QuranVerse component
  // (Read/Explore toggle, tap-a-word detail panel) sourced from the
  // dedicated Qur'an data file rather than a static card. If a future
  // lesson's ayahRef hasn't been added to js/quranData.js yet, fall back
  // to the original Phase 3 static card so nothing breaks.
  const verseData = qgGetQuranVerse(q.ayahRef);
  let quranVerseHtml;
  if (verseData) {
    const instanceId = `${content.id}-quran-connection`;
    if (!qgGetQuranView(instanceId)) qgInitQuranView(instanceId, { mode: "read" });
    // Phase 5: overlay this lesson's own per-word framing (if any) onto
    // the shared verse data — see js/quranData.js for why word-level
    // "meaning" lives in lesson content, not in the Qur'an data itself.
    const mergedWords = q.wordNotes ? qgMergeWordNotes(verseData.words, q.wordNotes) : verseData.words;
    quranVerseHtml = qgRenderQuranVerse(instanceId, { ...verseData, words: mergedWords });
  } else {
    quranVerseHtml = `
      <div class="quran-card">
        <div class="quran-card-ref">${q.surahEn} &middot; ${q.ayahRef}</div>
        <p class="quran-card-arabic ar-display">${q.arabic}</p>
        <p class="quran-card-translation">&ldquo;${q.translation}&rdquo;</p>
      </div>
    `;
  }

  return `
    <div class="lesson-step">
      <span class="eyebrow">Qur'an Connection</span>
      <h2>Where this shows up in the Qur'an</h2>

      ${quranVerseHtml}

      <div class="notice-callout">
        <h4>What should you notice?</h4>
        <p>${q.notice}</p>
      </div>
    </div>
  `;
}

/* ---------------------------------------------------------------------- */
/* Step: Notice Interaction                                               */
/* ---------------------------------------------------------------------- */

/**
 * Notice is the one step whose interaction genuinely varies by lesson
 * (per the Phase 5 brief: "the interaction must serve the grammar
 * concept," not the other way around). Dispatch on the content's own
 * declared type rather than forcing every lesson through one shape.
 */
function renderNoticeStep(content) {
  const n = content.noticeInteraction;
  if (n.type === "word-tap") return renderNoticeStepWordTap(content);
  return renderNoticeStepChoice(content);
}

/** Lesson 1.1's shape: pick between labeled options for a whole expression. */
function renderNoticeStepChoice(content) {
  const n = content.noticeInteraction;
  const answered = qgLessonSession.noticeAnswer;

  const options = n.options.map((opt) => {
    const isSelected = answered === opt.id;
    const isCorrectOpt = opt.id === n.correctOptionId;
    let cls = "";
    if (answered) {
      if (isCorrectOpt) cls = "is-correct";
      else if (isSelected) cls = "is-incorrect";
    }
    // Part 8 bugfix: this used to render BOTH spans unconditionally, so an
    // option given in Arabic only (via labelAr — the natural choice once a
    // lesson is testing a grammatical term, e.g. "في محل نصب مفعول به",
    // rather than a yes/no fact) rendered the literal word "undefined" as
    // a second, visible label. No Part 1-7 lesson's choice-type notice had
    // ever used labelAr-only options, so this stayed latent until Lessons
    // 8.3/8.4; matches the same labelAr-preferred fallback already used in
    // renderChallengeStep and renderPracticeQuestion.
    const label = opt.labelAr
      ? `<span class="answer-option-ar ar">${opt.labelAr}</span>`
      : `<span class="answer-option-en">${opt.labelEn}</span>`;
    return `
      <button class="answer-option ${cls}" data-action="notice-answer" data-option-id="${opt.id}" ${answered ? "disabled" : ""}>
        ${label}
      </button>
    `;
  }).join("");

  const feedback = answered
    ? renderAnswerFeedback(answered === n.correctOptionId, n.correctFeedback, n.incorrectFeedback)
    : "";

  return `
    <div class="lesson-step">
      <span class="eyebrow">Notice</span>
      <h2>Look at this expression.</h2>
      <p class="notice-context">${n.promptContext}</p>
      <p class="notice-prompt-ar ar-display">${n.promptAr}</p>
      <p class="lesson-step-lead">${n.question}</p>

      <div class="answer-options">${options}</div>
      ${feedback}
    </div>
  `;
}

/**
 * Lesson 1.2's shape (Phase 5): the concept IS about individual words, so
 * the check-your-understanding moment is tapping them via the Phase 4
 * QuranVerse system, not picking a labeled option. Every word here truly
 * is correct to tap (each one is a كلمة) — see js/lessonEngine.js's
 * qgHandleQuranWordTap for how a tap satisfies this step's gate.
 *
 * Phase 6: a lesson can instead set n.correctWordId (Lesson 1.5 — "which
 * of these words is the فعل?"), making this a TARGETED tap with a real
 * right/wrong answer, rather than every word being equally correct. The
 * learner can keep tapping until they land on the right word; each tap
 * shows correct/incorrect feedback immediately.
 */
function renderNoticeStepWordTap(content) {
  const n = content.noticeInteraction;
  const verseData = qgGetQuranVerse(n.ayahRef);
  const instanceId = n.instanceId;

  // Starts straight in Explore mode — tapping words IS the task here,
  // unlike the "quran" step's Read-first demonstration.
  if (!qgGetQuranView(instanceId)) qgInitQuranView(instanceId, { mode: "explore" });

  const mergedWords = qgMergeWordNotes(verseData.words, n.wordNotes);
  const verseHtml = qgRenderQuranVerse(instanceId, { ...verseData, words: mergedWords });

  const hasTapped = qgLessonSession.noticeAnswer !== null;
  const isTargeted = !!n.correctWordId;
  let feedback = "";
  if (hasTapped) {
    if (isTargeted) {
      const isCorrect = qgLessonSession.noticeAnswer === n.correctWordId;
      feedback = renderAnswerFeedback(isCorrect, n.correctFeedback, n.incorrectFeedback);
    } else {
      feedback = renderAnswerFeedback(true, n.correctFeedback, n.correctFeedback);
    }
  }

  return `
    <div class="lesson-step">
      <span class="eyebrow">Notice</span>
      <h2>${n.question}</h2>
      <p class="notice-context">${n.promptContext}</p>

      ${verseHtml}
      ${feedback}
    </div>
  `;
}

/* ---------------------------------------------------------------------- */
/* Step: Quick Practice (PracticeQuestion x N)                            */
/* ---------------------------------------------------------------------- */

function renderPracticeQuestion(q, index) {
  const given = qgLessonSession.practiceAnswers[q.id];

  if (q.type === "true-false") {
    const options = [
      { id: "true", label: "True", value: true },
      { id: "false", label: "False", value: false }
    ];
    const optsHtml = options.map((opt) => {
      let cls = "";
      if (given !== undefined) {
        const isCorrectOpt = opt.value === q.correct;
        if (isCorrectOpt) cls = "is-correct";
        else if (given === opt.value) cls = "is-incorrect";
      }
      return `<button class="answer-option answer-option-inline ${cls}" data-action="practice-answer" data-question-id="${q.id}" data-value="${opt.value}" ${given !== undefined ? "disabled" : ""}>${opt.label}</button>`;
    }).join("");

    const feedback = given !== undefined
      ? renderAnswerFeedback(given === q.correct, q.explanation, q.explanation)
      : "";

    return `
      <div class="practice-question">
        <p class="practice-question-number">Question ${index + 1}</p>
        <p class="practice-question-prompt ar-mixed">${q.prompt}</p>
        <div class="answer-options answer-options-row">${optsHtml}</div>
        ${feedback}
      </div>
    `;
  }

  // multiple-choice
  const optsHtml = q.options.map((opt) => {
    let cls = "";
    if (given !== undefined) {
      if (opt.id === q.correctOptionId) cls = "is-correct";
      else if (given === opt.id) cls = "is-incorrect";
    }
    const label = opt.labelAr
      ? `<span class="answer-option-ar ar">${opt.labelAr}</span>`
      : `<span class="answer-option-en">${opt.labelEn}</span>`;
    return `<button class="answer-option" data-action="practice-answer" data-question-id="${q.id}" data-value="${opt.id}" ${given !== undefined ? "disabled" : ""}>${label}</button>`;
  }).join("");

  const feedback = given !== undefined
    ? renderAnswerFeedback(given === q.correctOptionId, q.explanation, q.explanation)
    : "";

  return `
    <div class="practice-question">
      <p class="practice-question-number">Question ${index + 1}</p>
      <p class="practice-question-prompt ar-mixed">${q.prompt}</p>
      <div class="answer-options">${optsHtml}</div>
      ${feedback}
    </div>
  `;
}

function renderPracticeStep(content) {
  const questions = content.practiceQuestions.map((q, i) => renderPracticeQuestion(q, i)).join("");
  return `
    <div class="lesson-step">
      <span class="eyebrow">Quick Practice</span>
      <h2>Let's check your understanding</h2>
      <p class="lesson-step-lead">Answer all ${content.practiceQuestions.length} questions to continue. Getting one wrong just shows you the reasoning — there's no penalty.</p>
      ${questions}
    </div>
  `;
}

/* ---------------------------------------------------------------------- */
/* Step: Qur'an Challenge                                                 */
/* ---------------------------------------------------------------------- */

function renderChallengeStep(content) {
  const c = content.quranChallenge;
  const answered = qgLessonSession.challengeAnswer;

  const options = c.options.map((opt) => {
    let cls = "";
    if (answered) {
      if (opt.id === c.correctOptionId) cls = "is-correct";
      else if (answered === opt.id) cls = "is-incorrect";
    }
    // Phase 12 / Part 5 bugfix: this used to read opt.labelEn unconditionally,
    // so a lesson whose challenge options were given in Arabic only (via
    // labelAr — the natural choice once a lesson is testing a grammatical
    // term, not a yes/no fact) rendered the literal word "undefined" as its
    // button text. Lessons 4.16 and 4.17 already shipped with this exact
    // shape and were silently broken; matches renderPracticeQuestion's
    // existing labelAr-preferred fallback so both conventions work.
    const label = opt.labelAr
      ? `<span class="answer-option-ar ar">${opt.labelAr}</span>`
      : `<span class="answer-option-en">${opt.labelEn}</span>`;
    return `<button class="answer-option answer-option-inline ${cls}" data-action="challenge-answer" data-option-id="${opt.id}" ${answered ? "disabled" : ""}>${label}</button>`;
  }).join("");

  const feedback = answered
    ? renderAnswerFeedback(answered === c.correctOptionId, c.explanation, c.explanation)
    : "";

  return `
    <div class="lesson-step">
      <span class="eyebrow">Qur'an Challenge</span>
      <h2>One more — a verse you haven't seen yet.</h2>

      <div class="quran-card">
        <div class="quran-card-ref">${c.surahEn} &middot; ${c.ayahRef}</div>
        <p class="quran-card-arabic ar-display">${c.arabic}</p>
        <p class="quran-card-translation">&ldquo;${c.translation}&rdquo;</p>
      </div>

      <p class="lesson-step-lead">${c.question}</p>
      <div class="answer-options answer-options-row">${options}</div>
      ${feedback}
    </div>
  `;
}

/* ---------------------------------------------------------------------- */
/* Step: Summary                                                          */
/* ---------------------------------------------------------------------- */

function renderSummaryStep(content) {
  const items = content.summary.map((s, i) => `<li><span class="summary-number">${i + 1}</span>${s}</li>`).join("");
  return `
    <div class="lesson-step">
      <span class="eyebrow">Summary</span>
      <h2>Today you learned</h2>
      <ol class="summary-list">${items}</ol>
    </div>
  `;
}

/* ---------------------------------------------------------------------- */
/* Step: Completion                                                       */
/* ---------------------------------------------------------------------- */

function renderCompletionStep(part, lesson, content) {
  const nextLesson = part.lessons.find((l) => parseInt(l.number, 10) === parseInt(lesson.number, 10) + 1);

  // Phase 7 / Part 2: standard behavior for every future Part, not just
  // this one. An intermediate lesson keeps the original single-button
  // shape (primary "Continue to Lesson N", implicit back-nav elsewhere in
  // the shell). The FINAL lesson of a Part gets a primary "Continue to
  // Part N+1" (when a next Part exists) plus an explicit secondary
  // "Back to Part N" — so finishing a whole Part reads as a bigger
  // milestone than finishing one lesson within it.
  let primaryBtn;
  let secondaryBtn = "";

  if (nextLesson) {
    primaryBtn = `<a class="btn btn-primary" href="#/lesson/${part.slug}/${nextLesson.number}">Continue to Lesson ${nextLesson.number} &rarr;</a>`;
    secondaryBtn = `<a class="btn btn-tertiary" href="#/learn/${part.slug}">Back to ${part.titleEn}</a>`;
  } else {
    const nextPart = QG_CURRICULUM.parts.find((p) => p.id === part.id + 1);
    if (nextPart) {
      primaryBtn = `<a class="btn btn-primary" href="#/learn/${nextPart.slug}">Continue to Part ${nextPart.id} &rarr;</a>`;
      secondaryBtn = `<a class="btn btn-tertiary" href="#/learn/${part.slug}">Back to Part ${part.id}</a>`;
    } else {
      // Last lesson of the entire (currently authored) curriculum.
      primaryBtn = `<a class="btn btn-primary" href="#/learn/${part.slug}">Back to ${part.titleEn} &rarr;</a>`;
    }
  }

  return `
    <div class="lesson-step lesson-step-completion">
      <div class="completion-badge">${QG_ICON_CHECK}</div>
      <span class="eyebrow">Lesson Complete</span>
      <p class="lesson-step-ar ar-display">${content.completion.titleAr}</p>
      <p class="completion-statement">${content.completion.statement}</p>
      <div class="completion-actions">
        ${primaryBtn}
        ${secondaryBtn}
      </div>
    </div>
  `;
}

/* ---------------------------------------------------------------------- */
/* Shared: answer feedback                                                */
/* ---------------------------------------------------------------------- */

function renderAnswerFeedback(isCorrect, correctText, incorrectText) {
  const cls = isCorrect ? "is-correct" : "is-incorrect";
  const lead = isCorrect ? "&#10003; Exactly." : "Not quite.";
  const text = isCorrect ? correctText : incorrectText;
  return `
    <div class="answer-feedback ${cls}">
      <strong>${lead}</strong> ${text}
    </div>
  `;
}

/* ---------------------------------------------------------------------- */
/* Orchestrator: shell + step switch                                      */
/* ---------------------------------------------------------------------- */

/**
 * Why the learner can't advance from the current step yet, in plain
 * language — shown right next to the (disabled) Next button so the
 * reason is visible without scrolling back up. Bug found via user
 * report: on the Practice step, all questions are stacked on one long
 * scrolling page; a learner who jumps straight to the last question
 * (or simply overlooks one above) sees Next greyed out with nothing
 * nearby explaining why, and no way to tell which question still
 * needs an answer. Returns "" once the step is actually advanceable.
 */
function qgAdvanceHint() {
  if (qgCanAdvance()) return "";
  const step = qgCurrentStep();
  const content = qgLessonSession.content;

  if (step === "practice") {
    const total = content.practiceQuestions.length;
    const answered = content.practiceQuestions.filter(
      (q) => qgLessonSession.practiceAnswers[q.id] !== undefined
    ).length;
    const remaining = total - answered;
    return `Answer ${remaining} more question${remaining === 1 ? "" : "s"} above to continue — scroll up if you skipped one.`;
  }
  if (step === "notice") return "Choose an answer above to continue.";
  if (step === "challenge") return "Choose an answer above to continue.";
  return "";
}

function qgLessonStepHTML() {
  const { part, lesson, content, stepIndex } = qgLessonSession;
  const step = qgCurrentStep();

  let body;
  switch (step) {
    case "intro": body = renderLessonIntroStep(part, lesson, content); break;
    case "concept": body = renderConceptStep(content); break;
    case "example": body = renderExampleStep(content); break;
    case "quran": body = renderQuranConnectionStep(content); break;
    case "notice": body = renderNoticeStep(content); break;
    case "practice": body = renderPracticeStep(content); break;
    case "challenge": body = renderChallengeStep(content); break;
    case "summary": body = renderSummaryStep(content); break;
    case "completion": body = renderCompletionStep(part, lesson, content); break;
    default: body = "";
  }

  const isFirst = stepIndex === 0;
  const isLast = step === "completion";
  const canAdvance = qgCanAdvance();
  const advanceHint = canAdvance ? "" : qgAdvanceHint();

  const prevControl = isFirst
    ? `<a class="btn btn-tertiary" href="#/learn/${part.slug}">${QG_ICON_ARROW_LEFT} ${part.titleEn}</a>`
    : `<button class="btn btn-tertiary" data-action="lesson-prev">${QG_ICON_ARROW_LEFT} Previous</button>`;

  const nextControl = isLast
    ? ""
    : `<button class="btn btn-primary" data-action="lesson-next" ${canAdvance ? "" : "disabled"}>Next</button>`;

  return `
    ${renderLessonProgress(part, lesson, stepIndex)}
    <div class="lesson-body">${body}</div>
    ${isLast ? "" : `
      ${advanceHint ? `<p class="lesson-nav-hint">${advanceHint}</p>` : ""}
      <div class="lesson-nav-row">${prevControl}${nextControl}</div>
    `}
  `;
}
