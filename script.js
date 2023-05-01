// Vimeo Player API:

//stocking the vimeo video url in a variable
const vimeoSrc =
  "./assets/rinegan.gif?autoplay=0&loop=1&background=1&";

//getting the video wrap element
const videoWrap = document.getElementById("video-wrap");

//creating the iframe element
const iframe = document.createElement("iframe");

//setting the attributes of the iframe element
iframe.setAttribute("id", "video-player");
iframe.src = vimeoSrc;

//appending the iframe element to the video wrap element
videoWrap.appendChild(iframe);

//creating the player object
const player = new Vimeo.Player(iframe);

//adding event listeners to the player object
const card = document.getElementById("video-card");

card.addEventListener("mouseenter", (e) => {
  player.play();
});

card.addEventListener("mouseleave", (e) => {
  player.pause();
});

