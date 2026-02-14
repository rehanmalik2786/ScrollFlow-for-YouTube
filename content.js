function setupRightOnlyScroll() {
  const secondary = document.querySelector("#secondary");

  if (!secondary) return;

  document.addEventListener(
    "wheel",
    (e) => {
      const rect = secondary.getBoundingClientRect();
      const x = e.clientX;

      // Agar mouse RIGHT sidebar par hai
      if (x >= rect.left && x <= rect.right) {
        secondary.scrollTop += e.deltaY; // sidebar scroll
        e.preventDefault(); // page scroll rok do
      }
      // LEFT side par kuch mat karo → normal page scroll chalega
    },
    { passive: false }
  );
}

window.addEventListener("load", setupRightOnlyScroll);

