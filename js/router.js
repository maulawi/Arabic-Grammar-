/* ==========================================================================
   QURRA Grammar — Hash router
   Phase 2 adds two dynamic routes (Part detail, Lesson preview) on top of
   the Phase 1 static shell routes. Qur'an / Practice / Progress / Settings
   are still placeholders — those screens belong to later phases.
   ========================================================================== */

const QG_STATIC_ROUTES = {
  "#/home": { title: "Home", render: renderHomePage },
  "#/learning-path": { title: "Learning Path", render: renderLearningPathPage },
  "#/quran": { title: "Qur'an", render: () => renderComingSoonPage("Qur'an Explorer", "Browse the Qur'an alongside grammar notes.") },
  "#/practice": { title: "Practice", render: () => renderComingSoonPage("Practice", "Targeted exercises for each grammar concept.") },
  "#/progress": { title: "Progress", render: () => renderComingSoonPage("Progress", "Track mastery across all nine parts of the curriculum.") },
  "#/settings": { title: "Settings", render: () => renderComingSoonPage("Settings", "Preferences for QURRA Grammar.") }
};

/* ---------------------------------------------------------------------- */
/* Page renderers                                                         */
/* ---------------------------------------------------------------------- */

function renderHomePage() {
  const completedSet = qgCompletedSet();
  const flat = qgFlattenLessons();
  const currentLesson = qgGetCurrentLesson(completedSet, flat);

  let continueBlock;
  if (!currentLesson) {
    continueBlock = renderCompletedCard(flat.length);
  } else {
    const part = QG_CURRICULUM.parts.find((p) => p.id === currentLesson.partId);
    const partProgress = qgGetPartProgressPercent(part, completedSet);
    const isFresh = completedSet.size === 0;
    continueBlock = renderContinueCard(currentLesson, part, partProgress, isFresh);
  }

  const partsGrid = QG_CURRICULUM.parts.map((part) => {
    const status = qgGetPartStatus(part, completedSet, flat);
    const pct = qgGetPartProgressPercent(part, completedSet);
    return renderCurriculumCard(part, status, pct);
  }).join("");

  return `
    <section class="hero">
      <h1 class="hero-wordmark">QURRA Grammar</h1>
      <p class="hero-tagline">Arabic Grammar Through the Qur'an</p>
      <p class="hero-desc">Learn the grammar of the Qur'an the traditional way &mdash; one concept at a time, always grounded in a real verse.</p>
    </section>

    ${continueBlock}

    <section>
      <div class="section-header">
        <h2>Your Learning Path</h2>
        <a href="#/learning-path" class="btn btn-tertiary">View full path &rarr;</a>
      </div>
      <div class="card-grid">
        ${partsGrid}
      </div>
    </section>

    <section>
      <div class="section-header">
        <h2>Qur'an Connection</h2>
      </div>
      ${renderQuranCard(QG_HOME_QURAN_EXAMPLE)}
    </section>
  `;
}

function renderLearningPathPage() {
  const completedSet = qgCompletedSet();
  const flat = qgFlattenLessons();
  const totalCompleted = completedSet.size;
  const totalLessons = flat.length;

  const items = QG_CURRICULUM.parts.map((part) => {
    const status = qgGetPartStatus(part, completedSet, flat);
    const pct = qgGetPartProgressPercent(part, completedSet);
    const completedCount = part.lessons.filter((l) => completedSet.has(l.id)).length;
    return renderPartCard(part, status, pct, completedCount);
  }).join("");

  return `
    <div class="page-header">
      <span class="eyebrow">Curriculum</span>
      <h1>Your Learning Path</h1>
      <p>Nine parts, moving from the foundation of a sentence to the smallest particles that shape its meaning. Complete each part in order to unlock the next.</p>
      <p class="overall-progress-line">Overall progress: ${totalCompleted} / ${totalLessons} lessons ${QG_CURRICULUM.provisional ? '<span class="provisional-note">(lesson counts provisional — final counts land as each part is authored)</span>' : ""}</p>
    </div>

    ${renderCurriculumMap(QG_CURRICULUM.parts, completedSet, flat)}

    <ol class="journey">
      ${items}
    </ol>
  `;
}

function renderPartPage(slug) {
  const part = qgGetPartBySlug(slug);
  if (!part) return renderNotFoundPage();

  const completedSet = qgCompletedSet();
  const flat = qgFlattenLessons();
  const completedCount = part.lessons.filter((l) => completedSet.has(l.id)).length;

  const rows = part.lessons.map((lesson) => {
    const status = qgGetLessonStatus(lesson.id, completedSet, flat);
    return renderLessonRow(lesson, part, status);
  }).join("");

  return `
    <a class="back-link" href="#/learning-path">${QG_ICON_ARROW_LEFT} Learning Path</a>
    <div class="page-header part-header">
      <span class="eyebrow">Part ${String(part.id).padStart(2, "0")}</span>
      <h1 class="part-header-titles">
        <span class="part-header-en">${part.titleEn}</span>
        <span class="part-header-ar ar">${part.titleAr}</span>
      </h1>
      <p>${part.desc}</p>
      <p class="overall-progress-line">${completedCount} / ${part.lessons.length} lessons complete</p>
    </div>

    <section>
      <div class="section-header">
        <h2>Your Lessons</h2>
      </div>
      <div class="lesson-list">
        ${rows}
      </div>
    </section>
  `;
}

function renderLessonPage(slug, lessonNumber) {
  const part = qgGetPartBySlug(slug);
  const lesson = qgGetLessonInPart(part, lessonNumber);
  if (!part || !lesson) return renderNotFoundPage();

  const completedSet = qgCompletedSet();
  const flat = qgFlattenLessons();
  const status = qgGetLessonStatus(lesson.id, completedSet, flat);

  if (status === "locked") {
    return `
      <a class="back-link" href="#/learn/${part.slug}">${QG_ICON_ARROW_LEFT} ${part.titleEn}</a>
      <div class="page-header">
        <span class="eyebrow">Locked</span>
        <h1>${lesson.titleEn}</h1>
        <p>Complete the earlier lessons in ${part.titleEn} to unlock this one.</p>
      </div>
    `;
  }

  // Phase 3: lessons with real content get the interactive experience.
  // Everything else still falls through to the Phase 2 placeholder below.
  const content = QG_LESSON_CONTENT[lesson.id];
  if (content) {
    qgInitLessonSession(part, lesson, content);
    return `<div id="lesson-step-mount">${qgLessonStepHTML()}</div>`;
  }

  const isCompleted = status === "completed";

  return `
    <a class="back-link" href="#/learn/${part.slug}">${QG_ICON_ARROW_LEFT} ${part.titleEn}</a>
    <div class="lesson-preview">
      <span class="eyebrow">Lesson ${lesson.number}</span>
      <p class="lesson-preview-ar ar">${lesson.titleAr}</p>
      <h1 class="lesson-preview-title">${lesson.titleEn}</h1>

      <div class="lesson-preview-block">
        <h4>What you'll learn</h4>
        <p>${lesson.desc}</p>
      </div>

      <div class="lesson-preview-grid">
        <div class="lesson-preview-block">
          <h4>Learning objective</h4>
          <p class="placeholder-text">[Placeholder — added in Phase 3]</p>
        </div>
        <div class="lesson-preview-block">
          <h4>Qur'an connection</h4>
          <p class="placeholder-text">[Placeholder — added in Phase 4]</p>
        </div>
        <div class="lesson-preview-block">
          <h4>Estimated time</h4>
          <p>~${lesson.durationMin} min &middot; estimate</p>
        </div>
      </div>

      <div class="lesson-preview-actions">
        <button class="btn btn-primary" disabled title="The real lesson experience arrives in Phase 3">Start Lesson</button>
        ${isCompleted
          ? `<span class="qg-badge is-completed">${QG_ICON_CHECK} Completed</span>`
          : `<button class="btn btn-tertiary" data-action="mark-complete" data-lesson-id="${lesson.id}" data-part-slug="${part.slug}" data-lesson-number="${lesson.number}">Mark lesson complete (demo)</button>`
        }
      </div>
      <p class="lesson-preview-demo-note">The Start Lesson button is disabled on purpose — this screen only proves the navigation flow. "Mark complete" is a Phase 2 demo control standing in for real lesson completion, so you can see the sequential unlock behavior.</p>
    </div>
  `;
}

function renderComingSoonPage(title, desc) {
  return `
    <div class="page-header">
      <span class="eyebrow">Coming soon</span>
      <h1>${title}</h1>
      <p>${desc}</p>
    </div>
    <div class="curriculum-card is-locked" style="max-width:520px;">
      <p class="curriculum-card-desc" style="margin:0;">This screen is planned for a later build phase and isn't part of the current shell.</p>
    </div>
  `;
}

function renderNotFoundPage() {
  return `
    <div class="page-header">
      <span class="eyebrow">Not found</span>
      <h1>That page doesn't exist</h1>
      <p><a href="#/home" class="btn btn-tertiary">Back to Home &rarr;</a></p>
    </div>
  `;
}

/* ---------------------------------------------------------------------- */
/* Route matching                                                         */
/* ---------------------------------------------------------------------- */

function qgMatchRoute(hash) {
  if (QG_STATIC_ROUTES[hash]) {
    return { title: QG_STATIC_ROUTES[hash].title, render: QG_STATIC_ROUTES[hash].render, navRoute: hash };
  }

  const partMatch = hash.match(/^#\/learn\/([a-z0-9-]+)$/);
  if (partMatch) {
    const part = qgGetPartBySlug(partMatch[1]);
    return {
      title: part ? part.titleEn : "Not found",
      render: () => renderPartPage(partMatch[1]),
      navRoute: "#/learning-path"
    };
  }

  const lessonMatch = hash.match(/^#\/lesson\/([a-z0-9-]+)\/(\d+)$/);
  if (lessonMatch) {
    const part = qgGetPartBySlug(lessonMatch[1]);
    const lesson = qgGetLessonInPart(part, lessonMatch[2]);
    return {
      title: lesson ? lesson.titleEn : "Not found",
      render: () => renderLessonPage(lessonMatch[1], lessonMatch[2]),
      navRoute: "#/learning-path"
    };
  }

  return { title: "Home", render: renderHomePage, navRoute: "#/home" };
}

function qgUpdateActiveNav(navRoute) {
  document.querySelectorAll("[data-nav-link]").forEach((el) => {
    const target = el.getAttribute("href");
    el.classList.toggle("is-active", target === navRoute);
  });
}

function qgRenderRoute() {
  const hash = window.location.hash || "#/home";
  const match = qgMatchRoute(hash);
  const mount = document.getElementById("page-content");
  mount.innerHTML = match.render();
  document.title = `${match.title} · QURRA Grammar`;
  qgUpdateActiveNav(match.navRoute);
  window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
}

/* ---------------------------------------------------------------------- */
/* Delegated click handler for in-page demo + lesson actions              */
/* ---------------------------------------------------------------------- */

function qgRerenderLessonBody(scrollTop) {
  const mount = document.getElementById("lesson-step-mount");
  if (!mount) return;
  mount.innerHTML = qgLessonStepHTML();
  if (scrollTop) {
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }
}

document.addEventListener("click", (event) => {
  const markCompleteBtn = event.target.closest('[data-action="mark-complete"]');
  if (markCompleteBtn) {
    qgMarkLessonComplete(markCompleteBtn.getAttribute("data-lesson-id"));
    qgRenderRoute(); // Phase 2 demo control — reflects instantly by re-rendering the whole page.
    return;
  }

  const nextBtn = event.target.closest('[data-action="lesson-next"]');
  if (nextBtn) {
    qgGoNext();
    qgRerenderLessonBody(true);
    return;
  }

  const prevBtn = event.target.closest('[data-action="lesson-prev"]');
  if (prevBtn) {
    qgGoPrevious();
    qgRerenderLessonBody(true);
    return;
  }

  const noticeBtn = event.target.closest('[data-action="notice-answer"]');
  if (noticeBtn) {
    qgSetNoticeAnswer(noticeBtn.getAttribute("data-option-id"));
    qgRerenderLessonBody(false);
    return;
  }

  const practiceBtn = event.target.closest('[data-action="practice-answer"]');
  if (practiceBtn) {
    const raw = practiceBtn.getAttribute("data-value");
    const value = raw === "true" ? true : raw === "false" ? false : raw;
    qgSetPracticeAnswer(practiceBtn.getAttribute("data-question-id"), value);
    qgRerenderLessonBody(false);
    return;
  }

  const challengeBtn = event.target.closest('[data-action="challenge-answer"]');
  if (challengeBtn) {
    qgSetChallengeAnswer(challengeBtn.getAttribute("data-option-id"));
    qgRerenderLessonBody(false);
    return;
  }

  const quranModeBtn = event.target.closest('[data-action="quran-set-mode"]');
  if (quranModeBtn) {
    qgSetQuranMode(quranModeBtn.getAttribute("data-instance"), quranModeBtn.getAttribute("data-mode"));
    qgRerenderLessonBody(false);
    return;
  }

  const quranWordBtn = event.target.closest('[data-action="quran-word-select"]');
  if (quranWordBtn) {
    qgHandleQuranWordTap(quranWordBtn.getAttribute("data-instance"), quranWordBtn.getAttribute("data-word-id"));
    qgRerenderLessonBody(false);
    return;
  }
});

window.addEventListener("hashchange", qgRenderRoute);
