// Buttons
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

// Slideshow images (YOUR photos)
const images = [
  "images/firstphoto.jpeg",
  "images/garba.jpeg",
  "images/photo14.jpeg",
  "images/photo13.jpeg",
  "images/eye.jpeg",
  "images/sunrise.jpeg"
];

let currentIndex = 0;
const slide = document.getElementById("slide");

// Slideshow change every 2 seconds
setInterval(() => {
  slide.style.opacity = 0;

  setTimeout(() => {
    currentIndex = (currentIndex + 1) % images.length;
    slide.src = images[currentIndex];
    slide.style.opacity = 1;
  }, 500);
}, 2000);

// YES button action
yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <div style="
      height:100vh;
      display:flex;
      justify-content:center;
      align-items:center;
      flex-direction:column;
      text-align:center;
      background: linear-gradient(#ffafbd, #ffc3a0);
      color:white;
      padding:20px;
    ">
      <h1>Yay! ❤️🥰</h1>
      <p>Every memory with you is my favorite one 💕</p>
    </div>
  `;
});

// NO button runs away
noBtn.addEventListener("mouseover", () => {
  noBtn.style.position = "absolute";
  noBtn.style.top = Math.random() * 80 + "vh";
  noBtn.style.left = Math.random() * 80 + "vw";
});

// Floating hearts
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 3 + 3 + "s";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

setInterval(createHeart, 500);
