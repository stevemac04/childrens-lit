document.querySelectorAll("[data-fallback]").forEach((img) => {
  const fallback = img.parentElement?.querySelector(".fallback");
  if (!fallback) return;

  const showFallback = () => {
    img.hidden = true;
    fallback.hidden = false;
  };

  const hideFallback = () => {
    fallback.hidden = true;
    img.hidden = false;
  };

  if (img.complete && img.naturalWidth > 0) {
    hideFallback();
  } else if (img.complete) {
    showFallback();
  }

  img.addEventListener("load", hideFallback);
  img.addEventListener("error", showFallback);
});
