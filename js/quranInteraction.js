/* ==========================================================================
   QURRA Grammar — Qur'an interaction state (Phase 4)
   In-memory state for the reusable Qur'an word-selection system: Read vs.
   Explore mode, which word (if any) is selected, and which words (if any)
   are lesson-driven "concept focus" highlights.

   Keyed by an arbitrary "instance id" so more than one QuranVerse
   component can appear on the same page without colliding — this module
   knows nothing about lessons specifically, so it stays reusable for a
   future non-lesson Qur'an page too.

   Nothing here is persisted. This mirrors the "basic state model" already
   used for lesson sessions (js/lessonEngine.js): only real lesson
   completion is ever saved to LocalStorage.
   ========================================================================== */

let qgQuranViewState = {};

/**
 * @param {string} instanceId
 * @param {object} [opts]
 * @param {"read"|"explore"} [opts.mode]
 * @param {string[]} [opts.focusWordIds] - words to highlight without the
 *   learner having selected them (e.g. a future "look at this word" cue).
 */
function qgInitQuranView(instanceId, opts = {}) {
  qgQuranViewState[instanceId] = {
    mode: opts.mode === "explore" ? "explore" : "read",
    selectedWordId: null,
    focusWordIds: Array.isArray(opts.focusWordIds) ? opts.focusWordIds : []
  };
}

function qgGetQuranView(instanceId) {
  return qgQuranViewState[instanceId] || null;
}

/** Clears every instance's state — called when a fresh lesson session starts. */
function qgResetAllQuranViews() {
  qgQuranViewState = {};
}

function qgSetQuranMode(instanceId, mode) {
  const view = qgQuranViewState[instanceId];
  if (!view) return;
  view.mode = mode === "explore" ? "explore" : "read";
  // Leaving Explore mode closes any open word-detail panel.
  if (view.mode === "read") view.selectedWordId = null;
}

/** Tapping the already-selected word again closes its detail panel. */
function qgSelectQuranWord(instanceId, wordId) {
  const view = qgQuranViewState[instanceId];
  if (!view || view.mode !== "explore") return;
  view.selectedWordId = view.selectedWordId === wordId ? null : wordId;
}
