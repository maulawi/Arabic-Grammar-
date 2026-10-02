/* ==========================================================================
   QURRA Grammar — Qur'an interaction components (Phase 4)
   Reusable rendering for any Qur'anic verse in the app:

     QuranVerse       — the verse card: reference, source label, optional
                         translation, and a Read / Explore mode toggle
     QuranWordDetail  — the panel shown when a word is selected in
                         Explore mode
     (word relationship — a small prepared helper for a future lesson)

   Purely presentational. Every word rendered here reflects exactly the
   "words" array it's given (js/quranData.js) — this file never invents
   or infers grammatical information; it only displays structured data
   supplied to it, so a lesson that doesn't teach word roles yet simply
   doesn't pass any, and none appear.
   ========================================================================== */

/**
 * QuranVerse
 * @param {string} instanceId - unique id for this instance's interaction state
 * @param {object} data - { surah: {number, nameArabic, nameEnglish},
 *                           verse: {number, arabic, translation},
 *                           sourceLabel (optional), words (optional/null) }
 * @param {object} [options]
 * @param {string} [options.lessonConnection] - optional note tying the verse to the lesson
 */
function qgRenderQuranVerse(instanceId, data, options = {}) {
  if (!data) return "";
  const view = qgGetQuranView(instanceId) || { mode: "read", selectedWordId: null, focusWordIds: [] };
  const hasWords = Array.isArray(data.words) && data.words.length > 0;
  const mode = hasWords ? view.mode : "read";

  const modeToggle = hasWords ? `
    <div class="qv-mode-toggle" role="group" aria-label="Verse display mode">
      <button type="button" class="qv-mode-btn ${mode === "read" ? "is-active" : ""}"
        data-action="quran-set-mode" data-instance="${instanceId}" data-mode="read"
        aria-pressed="${mode === "read"}">Read</button>
      <button type="button" class="qv-mode-btn ${mode === "explore" ? "is-active" : ""}"
        data-action="quran-set-mode" data-instance="${instanceId}" data-mode="explore"
        aria-pressed="${mode === "explore"}">Explore</button>
    </div>
  ` : "";

  const wordsHtml = mode === "explore"
    ? data.words.map((w) => {
        const isSelected = view.selectedWordId === w.id;
        const isFocused = (view.focusWordIds || []).includes(w.id);
        const cls = ["qv-word", isSelected ? "is-selected" : "", isFocused ? "is-focused" : ""].filter(Boolean).join(" ");
        return `<button type="button" class="${cls}" data-action="quran-word-select" data-instance="${instanceId}" data-word-id="${w.id}" aria-pressed="${isSelected}" aria-label="${w.text} — tap to explore this word">${w.text}</button>`;
      }).join(" ")
    : `<span class="qv-static">${data.verse.arabic}</span>`;

  const sourceLabelHtml = data.sourceLabel
    ? `<span class="qv-source-label">${data.sourceLabel}</span>`
    : "";

  const lessonConnectionHtml = options.lessonConnection
    ? `<p class="qv-lesson-connection">${options.lessonConnection}</p>`
    : "";

  const helperText = mode === "explore"
    ? `<p class="qv-helper">Tap a word to explore it.</p>`
    : "";

  const selectedWord = (mode === "explore" && view.selectedWordId)
    ? data.words.find((w) => w.id === view.selectedWordId)
    : null;

  return `
    <div class="quran-verse" data-quran-instance="${instanceId}">
      <div class="qv-header">
        <span class="qv-ref">${data.surah.nameEnglish} &middot; ${data.surah.number}:${data.verse.number}</span>
        ${sourceLabelHtml}
      </div>
      <div class="qv-body ${selectedWord ? "has-detail" : ""}">
        <div class="qv-arabic-wrap">
          ${modeToggle}
          <p class="qv-arabic ar-display" dir="rtl">${wordsHtml}</p>
          ${helperText}
          ${data.verse.translation ? `<p class="qv-translation">&ldquo;${data.verse.translation}&rdquo;</p>` : ""}
          ${lessonConnectionHtml}
        </div>
        ${selectedWord ? qgRenderQuranWordDetail(selectedWord) : ""}
      </div>
    </div>
  `;
}

/**
 * QuranWordDetail — shown beside (desktop) or beneath (mobile) the verse
 * once a word is selected in Explore mode. Renders only the fields it's
 * given; every field is optional except the Arabic text itself.
 * @param {object} word - { text, meaningEn?, conceptLabel?, explanation?, whyMatters? }
 */
function qgRenderQuranWordDetail(word) {
  return `
    <div class="qv-word-detail" role="region" aria-label="Word detail">
      <p class="qv-word-detail-ar ar-display" dir="rtl">${word.text}</p>
      ${word.meaningEn ? `<p class="qv-word-detail-meaning">${word.meaningEn}</p>` : ""}
      ${word.conceptLabel ? `<p class="qv-word-detail-concept">${word.conceptLabel}</p>` : ""}
      ${word.explanation ? `<p class="qv-word-detail-explanation">${word.explanation}</p>` : ""}
      ${word.whyMatters ? `<p class="qv-word-detail-why"><strong>Why does this matter?</strong> ${word.whyMatters}</p>` : ""}
    </div>
  `;
}

/**
 * qgRenderWordRelationship — prepared for future lessons (Phase 4 scope:
 * build the data structure and a simple visual, not every relationship
 * type). Not called anywhere in Lesson 01 yet. Renders a plain
 * word → label → word relationship, e.g. مضاف → مضاف إليه.
 * @param {Array} words - a verse's words array
 * @param {object} relationship - { fromWordId, toWordId, label }
 */
function qgRenderWordRelationship(words, relationship) {
  const fromWord = words.find((w) => w.id === relationship.fromWordId);
  const toWord = words.find((w) => w.id === relationship.toWordId);
  if (!fromWord || !toWord) return "";
  return `
    <div class="qv-relationship" dir="rtl">
      <span class="qv-relationship-word ar">${fromWord.text}</span>
      <span class="qv-relationship-line" aria-hidden="true"></span>
      <span class="qv-relationship-label">${relationship.label}</span>
      <span class="qv-relationship-line" aria-hidden="true"></span>
      <span class="qv-relationship-word ar">${toWord.text}</span>
    </div>
  `;
}
