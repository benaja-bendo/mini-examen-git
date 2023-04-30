// Vimeo Player API:
const vimeoSrc =
  "./assets/rinegan.gif?autoplay=0&loop=1&background=1&";

const videoWrap = document.getElementById("video-wrap");

const iframe = document.createElement("iframe");
iframe.setAttribute("id", "video-player");
iframe.src = vimeoSrc;

videoWrap.appendChild(iframe);

const player = new Vimeo.Player(iframe);

const card = document.getElementById("video-card");

card.addEventListener("mouseenter", (e) => {
  player.play();
});

card.addEventListener("mouseleave", (e) => {
  player.pause();
});

