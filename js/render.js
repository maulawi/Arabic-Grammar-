/* ==========================================================================
   QURRA Grammar — Render helpers
   Small template functions returning HTML strings. No framework.
   ========================================================================== */

const QG_ICON_LOCK = `<svg class="qg-badge-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>`;
const QG_ICON_CHECK = `<svg class="qg-badge-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M4 12.5 9.5 18 20 6"/></svg>`;
const QG_ICON_CIRCLE = `<svg class="qg-badge-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="7.5"/></svg>`;
const QG_ICON_ARROW_LEFT = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" style="width:16px;height:16px;"><path d="M15 5 8 12l7 7"/></svg>`;

/**
 * Small state badge used on lesson rows and part cards.
 * status: "completed" | "available" | "locked" | "active" (part-level)
 */
function renderStatusBadge(status) {
  if (status === "completed") {
    return `<span class="qg-badge is-completed">${QG_ICON_CHECK} Completed</span>`;
  }
  if (status === "locked") {
    return `<span class="qg-badge is-locked">${QG_ICON_LOCK} Locked</span>`;
  }
  return `<span class="qg-badge is-available">${QG_ICON_CIRCLE} Not started</span>`;
}

/**
 * A CurriculumCard, used in the Home "Your Learning Path" grid.
 * Lighter-weight than the full PartCard on the Learning Path page.
 */
function renderCurriculumCard(part, status, progressPct) {
  const stateClass = status === "locked" ? "is-locked" : status === "completed" ? "is-completed" : "is-active";
  const badge =
    status === "locked" ? QG_ICON_LOCK :
    status === "completed" ? QG_ICON_CHECK : "";

  return `
    <article class="curriculum-card ${stateClass}" data-part="${part.slug}">
      <a href="#/learn/${part.slug}" class="curriculum-card-link" aria-label="${part.titleEn}">
        <div class="curriculum-card-top">
          <span class="curriculum-card-number">${String(part.id).padStart(2, "0")} ${badge}</span>
          <div class="qg-progress-ring" style="--progress-value:${progressPct}%">${progressPct}%</div>
        </div>
        <div class="curriculum-card-titles">
          <span class="curriculum-card-title-ar ar">${part.titleAr}</span>
          <span class="curriculum-card-title-en">${part.titleEn}</span>
        </div>
        <p class="curriculum-card-desc">${part.desc}</p>
        <div class="curriculum-card-meta">
          <span class="curriculum-card-lessoncount">${part.lessons.length} lessons</span>
        </div>
      </a>
    </article>
  `;
}

/**
 * The richer PartCard used on the Learning Path screen (journey row).
 */
function renderPartCard(part, status, progressPct, completedCount) {
  const stateClass = status === "active" ? "is-active" : status === "locked" ? "is-locked" : status === "completed" ? "is-completed" : "";

  return `
    <li class="journey-item ${stateClass}" data-part="${part.slug}">
      <span class="journey-node">${String(part.id).padStart(2, "0")}</span>
      <div class="journey-card">
        <div class="journey-card-main">
          <div class="journey-card-titles">
            <div class="journey-card-titleline">
              <span class="curriculum-card-title-en">${part.titleEn}</span>
              ${renderStatusBadge(status === "active" ? "available" : status)}
            </div>
            <span class="curriculum-card-title-ar ar">${part.titleAr}</span>
            <p class="journey-card-desc">${part.desc}</p>
            <p class="journey-card-progressline">${completedCount} / ${part.lessons.length} lessons complete</p>
          </div>
        </div>
        <div class="journey-card-meta">
          <div class="qg-progress" style="width:96px">
            <div class="qg-progress-track">
              <div class="qg-progress-fill" style="--progress-value:${progressPct}%"></div>
            </div>
          </div>
          <a class="btn btn-secondary on-light btn-sm" href="#/learn/${part.slug}">
            ${status === "locked" ? "View Part" : "Start Part →"}
          </a>
        </div>
      </div>
    </li>
  `;
}

/**
 * One row in a Part detail page's lesson list.
 */
function renderLessonRow(lesson, part, status) {
  const locked = status === "locked";
  const inner = `
    <div class="lesson-row-top">
      <span class="lesson-row-number">${lesson.number}</span>
      <div class="lesson-row-titles">
        <span class="lesson-row-title-en">${lesson.titleEn}</span>
        <span class="lesson-row-title-ar ar">${lesson.titleAr}</span>
      </div>
      ${renderStatusBadge(status)}
    </div>
    <p class="lesson-row-desc">${lesson.desc}</p>
    <span class="lesson-row-duration">~${lesson.durationMin} min &middot; estimate</span>
  `;

  if (locked) {
    return `<div class="lesson-row is-locked" data-lesson="${lesson.id}">${inner}</div>`;
  }
  return `<a class="lesson-row is-${status}" href="#/lesson/${part.slug}/${lesson.number}" data-lesson="${lesson.id}">${inner}</a>`;
}

/**
 * The Qur'an Example Card, visual only (no word-level interaction).
 */
function renderQuranCard(example) {
  return `
    <div class="quran-card">
      <div class="quran-card-ref">${example.surahEn} &middot; ${example.ayahRef}</div>
      <p class="quran-card-arabic ar-display">${example.arabic}</p>
      <p class="quran-card-translation">&ldquo;${example.translation}&rdquo;</p>
      ${example.topicLabel ? `<span class="quran-card-topic">${example.topicLabel}</span>` : ""}
    </div>
  `;
}

/**
 * The Continue Learning card on Home. `lesson` may be null (curriculum
 * fully complete) — handled by the caller before this is invoked.
 */
function renderContinueCard(lesson, part, progressPct, isFresh) {
  const eyebrow = isFresh ? "Start Here" : "Continue Learning";
  const buttonLabel = isFresh ? "Start Learning" : "Continue Learning";
  const desc = isFresh
    ? "Start your journey into Arabic grammar through the Qur'an."
    : `Part ${String(part.id).padStart(2, "0")} &middot; ${part.titleEn}`;

  return `
    <div class="continue-card">
      <div class="continue-card-info">
        <span class="eyebrow">${eyebrow}</span>
        <div class="continue-card-lesson">
          <span class="eyebrow" style="color:var(--qg-text-onDark-muted); letter-spacing:0.06em;">Lesson ${lesson.number}</span>
          <p class="continue-card-lesson-ar ar">${lesson.titleAr}</p>
        </div>
        <p class="continue-card-desc">${desc}</p>
        <div class="continue-card-progress">
          <div class="qg-progress">
            <div class="qg-progress-track on-dark">
              <div class="qg-progress-fill" style="--progress-value:${progressPct}%"></div>
            </div>
            <span class="qg-progress-label on-dark">${progressPct}%</span>
          </div>
        </div>
      </div>
      <div class="continue-card-side">
        <a class="btn btn-primary" href="#/lesson/${part.slug}/${lesson.number}">${buttonLabel}</a>
      </div>
    </div>
  `;
}

function renderCompletedCard(totalLessons) {
  return `
    <div class="continue-card">
      <div class="continue-card-info">
        <span class="eyebrow">Curriculum Complete</span>
        <p class="continue-card-lesson-ar ar" style="font-size:1.5rem;">تمّ بحمد الله</p>
        <p class="continue-card-desc">You've completed all ${totalLessons} lessons in the QURRA Grammar V1 path. Real lesson content and review tools arrive in later phases.</p>
      </div>
    </div>
  `;
}

/**
 * The subtle typographic curriculum map at the top of Learning Path.
 */
function renderCurriculumMap(parts, completedSet, flatLessons) {
  const items = parts.map((part, i) => {
    const status = qgGetPartStatus(part, completedSet, flatLessons);
    const cls = status === "locked" ? "is-locked" : status === "completed" ? "is-completed" : "is-active";
    return `<span class="curriculum-map-item ${cls}">${part.titleEn}</span>`;
  }).join(`<span class="curriculum-map-sep">&darr;</span>`);

  return `<div class="curriculum-map">${items}</div>`;
}
