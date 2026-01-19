document.addEventListener("DOMContentLoaded", () => {

  const enterBtn = document.getElementById("enterBtn");
  const landing = document.getElementById("landing");
  const content = document.getElementById("content");
  const music = document.getElementById("bgMusic");

  enterBtn.addEventListener("click", () => {
    landing.style.display = "none";
    content.classList.remove("hidden");
    music.play();
  });

  const platform = document.getElementById("filterPlatform");
  const price = document.getElementById("filterPrice");
  const cards = document.querySelectorAll(".card");

  function filterCards() {
    cards.forEach(card => {
      const okPlatform =
        platform.value === "all" ||
        card.dataset.platform === platform.value;

      const okPrice =
        price.value === "all" ||
        card.dataset.price === price.value;

      card.style.display = (okPlatform && okPrice) ? "block" : "none";
    });
  }

  platform.addEventListener("change", filterCards);
  price.addEventListener("change", filterCards);
});

function orderWA(name, price) {
  const wa = "6285188724658"; // GANTI NOMOR KAMU
  const text =
`Halo admin, saya ingin order:

Nama SC: ${name}
Harga: Rp ${price}`;

  window.open(
    `https://wa.me/${wa}?text=${encodeURIComponent(text)}`,
    "_blank"
  );
}