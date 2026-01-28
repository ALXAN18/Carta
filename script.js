const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const card = document.getElementById("card");
const cover = document.getElementById("cover");
const music = document.getElementById("music");

/* ABRIR CARTA */
openBtn.addEventListener("click", () => {
    cover.style.display = "none";
    card.classList.remove("hidden");
    music.play();
});

/* CERRAR CARTA */
closeBtn.addEventListener("click", () => {
    card.classList.add("hidden");
    cover.style.display = "block";
    music.pause();
});

/* CORAZONES OPTIMIZADOS */
const heartsContainer = document.getElementById("hearts");
const emojis = ["💖","💘","💝","💗","💌"];

function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (14 + Math.random() * 10) + "px";
    heart.style.animationDuration = (7 + Math.random() * 4) + "s";
    heartsContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 11000);
}

/* Muy ligero → no lag */
setInterval(createHeart, 1500);
