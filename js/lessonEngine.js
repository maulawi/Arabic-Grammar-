/* ==========================================================================
   QURRA Grammar — Lesson engine (Phase 3)
   In-memory session state for the real, interactive lesson experience.
   Only the final completion is persisted (via progress.js /
   LocalStorage) — step position and answers live only for the current
   visit, per the Phase 2/3 "basic state model" scope.
   ========================================================================== */

// The full step vocabulary a lesson can draw from. Phase 6 (Part 1 batch):
// not every lesson uses all of them — a lesson declares its own ordered
// subset as content.steps, and this default is only a fallback for a
// lesson that doesn't (keeps Lessons 1.1/1.2, authored before this
// existed, working unchanged).
const QG_LESSON_STEPS = ["intro", "concept", "example", "quran", "notice", "practice", "challenge", "summary", "completion"];

// Which of the QURRA learning-loop segments each step belongs to.
// Segment labels: Learn / See / Notice / Practice / Apply / Complete
const QG_LESSON_SEGMENTS = ["Learn", "See", "Notice", "Practice", "Apply", "Complete"];
const QG_STEP_SEGMENT = {
  intro: 0, concept: 0, example: 0,
  quran: 1,
  notice: 2,
  practice: 3,
  challenge: 4,
  summary: 5, completion: 5
};

let qgLessonSession = null;

function qgInitLessonSession(part, lesson, content) {
  qgLessonSession = {
    part,
    lesson,
    content,
    steps: Array.isArray(content.steps) && content.steps.length ? content.steps : QG_LESSON_STEPS,
    stepIndex: 0,
    noticeAnswer: null,
    noticeChecked: false,
    practiceAnswers: {},
    challengeAnswer: null,
    challengeChecked: false
  };
  // Phase 4: a fresh lesson entry also resets any Qur'an Explore-mode
  // state (selected word, mode) from a previous visit.
  qgResetAllQuranViews();
}

function qgCurrentStep() {
  return qgLessonSession.steps[qgLessonSession.stepIndex];
}

/**
 * Whether the learner is allowed to move forward from the current step.
 * Reading-only steps are always open; the three interactive checkpoints
 * require an answer first (per Phase 3 spec section 5).
 */
function qgCanAdvance() {
  const step = qgCurrentStep();
  const content = qgLessonSession.content;

  if (step === "notice") {
    const n = content.noticeInteraction;
    // Phase 6: a "targeted" word-tap Notice (Lesson 1.5 — identify WHICH
    // word is the فعل among several) requires the learner to land on the
    // specific correctWordId, not merely tap any word. A word-tap Notice
    // with no correctWordId (e.g. Lesson 1.2, where every word is equally
    // correct to tap) keeps the old "any answer given" behavior.
    if (n && n.type === "word-tap" && n.correctWordId) {
      return qgLessonSession.noticeAnswer === n.correctWordId;
    }
    return qgLessonSession.noticeAnswer !== null;
  }
  if (step === "practice") {
    return content.practiceQuestions.every((q) => qgLessonSession.practiceAnswers[q.id] !== undefined);
  }
  if (step === "challenge") return qgLessonSession.challengeAnswer !== null;
  return true;
}

function qgGoNext() {
  if (!qgCanAdvance()) return;
  if (qgLessonSession.stepIndex >= qgLessonSession.steps.length - 1) return;

  const leavingStep = qgCurrentStep();
  qgLessonSession.stepIndex += 1;

  // Fire real completion the moment the learner reaches the completion
  // screen — not gated behind the "Continue to Lesson 02" click, so
  // progress is saved even if they close the tab right here.
  if (qgCurrentStep() === "completion") {
    qgMarkLessonComplete(qgLessonSession.lesson.id);
  }
}

function qgGoPrevious() {
  if (qgLessonSession.stepIndex === 0) return; // handled by a real link to the Part page
  qgLessonSession.stepIndex -= 1;
}

function qgSetNoticeAnswer(optionId) {
  qgLessonSession.noticeAnswer = optionId;
  qgLessonSession.noticeChecked = true;
}

/**
 * Phase 5: bridges a Qur'an word tap (js/quranInteraction.js) into the
 * Notice checkpoint when a lesson's Notice interaction IS word-tapping
 * (content.noticeInteraction.type === "word-tap") — e.g. Lesson 1.2,
 * where "notice" means tapping a word to see it's a single كلمة, not
 * picking between two labeled options like Lesson 1.1. Reuses the same
 * noticeAnswer field qgCanAdvance() already checks, so the step-gating
 * logic needed no changes at all — only what SETS it differs per lesson.
 * A tap on any OTHER Qur'an instance (e.g. the "quran" step's read-only
 * demonstration) just selects the word normally and doesn't touch it.
 */
function qgHandleQuranWordTap(instanceId, wordId) {
  qgSelectQuranWord(instanceId, wordId);
  const content = qgLessonSession.content;
  const n = content.noticeInteraction;
  if (n && n.type === "word-tap" && n.instanceId === instanceId && qgCurrentStep() === "notice") {
    qgLessonSession.noticeAnswer = wordId;
    qgLessonSession.noticeChecked = true;
  }
}

function qgSetPracticeAnswer(questionId, optionOrBool) {
  qgLessonSession.practiceAnswers[questionId] = optionOrBool;
}

function qgSetChallengeAnswer(optionId) {
  qgLessonSession.challengeAnswer = optionId;
  qgLessonSession.challengeChecked = true;
}
