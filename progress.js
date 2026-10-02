/* ==========================================================================
   QURRA Grammar — Progress (Phase 2: basic state model only)
   Sequential unlocking across the whole curriculum, persisted to
   LocalStorage. No analytics, no backend, no partial-lesson tracking —
   just enough state to demonstrate locked → available → completed.
   ========================================================================== */

const QG_LS_KEY = "qurra-grammar:progress:v1";

function qgLoadProgress() {
  try {
    const raw = localStorage.getItem(QG_LS_KEY);
    if (!raw) return { completedLessons: [] };
    const parsed = JSON.parse(raw);
    if (!parsed || !Array.isArray(parsed.completedLessons)) return { completedLessons: [] };
    return parsed;
  } catch (e) {
    // Private browsing, storage disabled, or corrupt data — fall back
    // to a clean in-memory default rather than breaking the page.
    return { completedLessons: [] };
  }
}

function qgSaveProgress(progress) {
  try {
    localStorage.setItem(QG_LS_KEY, JSON.stringify(progress));
  } catch (e) {
    // Storage unavailable — state simply won't persist across a reload.
  }
}

function qgCompletedSet() {
  return new Set(qgLoadProgress().completedLessons);
}

function qgMarkLessonComplete(lessonId) {
  const progress = qgLoadProgress();
  if (!progress.completedLessons.includes(lessonId)) {
    progress.completedLessons.push(lessonId);
    qgSaveProgress(progress);
  }
}

function qgResetProgress() {
  qgSaveProgress({ completedLessons: [] });
}

/**
 * A lesson is:
 *  - "completed" if it's in the completed set
 *  - "available" if it's the first lesson overall, or the lesson
 *    immediately before it (in curriculum order) is completed
 *  - "locked" otherwise
 */
function qgGetLessonStatus(lessonId, completedSet, flatLessons) {
  if (completedSet.has(lessonId)) return "completed";
  const idx = flatLessons.findIndex((l) => l.id === lessonId);
  if (idx <= 0) return "available";
  const prev = flatLessons[idx - 1];
  return completedSet.has(prev.id) ? "available" : "locked";
}

/**
 * A part is "completed" once every lesson in it is completed,
 * "active" once at least one lesson in it is reachable or done,
 * and "locked" while its first lesson is still locked.
 */
function qgGetPartStatus(part, completedSet, flatLessons) {
  const total = part.lessons.length;
  const completedCount = part.lessons.filter((l) => completedSet.has(l.id)).length;
  if (completedCount === total) return "completed";
  const firstStatus = qgGetLessonStatus(part.lessons[0].id, completedSet, flatLessons);
  return firstStatus === "locked" ? "locked" : "active";
}

function qgGetPartProgressPercent(part, completedSet) {
  const total = part.lessons.length;
  if (total === 0) return 0;
  const completedCount = part.lessons.filter((l) => completedSet.has(l.id)).length;
  return Math.round((completedCount / total) * 100);
}

/** The next lesson the learner should see on Home — first non-completed
 *  lesson in curriculum order, or null if everything is done. */
function qgGetCurrentLesson(completedSet, flatLessons) {
  return flatLessons.find((l) => !completedSet.has(l.id)) || null;
}
