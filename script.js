const images = [
  "images/pic1.jpg",
  "images/pic2.jpg",
  "images/pic3.jpg"
];

let currentIndex = 0;
const slide = document.getElementById("slide");

setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length;
  slide.src = images[currentIndex];
}, 2000);

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <div class="container">
      <h1>Yay! ❤️ Our Memories 💕</h1>
      <div class="slideshow">
        <img id="slide" src="images/pic1.jpg">
      </div>
      <p>I’m so happy you said YES 🥰</p>
    </div>
  `;

  let index = 0;
  setInterval(() => {
    index = (index + 1) % images.length;
    document.getElementById("slide").src = images[index];
  }, 2000);
});


yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <div style="
      height:100vh;
      display:flex;
      justify-content:center;
      align-items:center;
      flex-direction:column;
      background: linear-gradient(#ffafbd, #ffc3a0);
      color:white;
      text-align:center;
    ">
      <h1>Yay! ❤️🥰</h1>
      <p>You said YES!</p>
    </div>
  `;
});

noBtn.addEventListener("mouseover", () => {
  noBtn.style.position = "absolute";
  noBtn.style.top = Math.random() * 80 + "vh";
  noBtn.style.left = Math.random() * 80 + "vw";
});
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

