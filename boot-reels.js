(function () {
  function paint() {
    const nav = document.querySelector(".tabbar");
    if (!nav || nav.dataset.reels) return;
    nav.dataset.reels = "1";
    nav.style.gridTemplateColumns = "1fr 1fr 1fr 1fr";
    const a = document.createElement("a");
    a.href = "reels.html";
    a.textContent = "रील";
    a.style.cssText = "display:grid;place-items:center;color:#e8b84a;text-decoration:none;font-weight:800;font-size:12px;";
    nav.appendChild(a);
  }
  setInterval(paint, 300);
  document.addEventListener("DOMContentLoaded", paint);
})();
