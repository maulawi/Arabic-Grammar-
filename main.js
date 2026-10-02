/* ==========================================================================
   QURRA Grammar — App entry point
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  if (!window.location.hash) {
    window.location.hash = "#/home";
  }
  qgRenderRoute();
});
