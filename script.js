// Get buttons
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

// Change image every 2 seconds
setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length;
  slide.src = images[currentIndex];
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
    ">
      <h1>Yay! ❤️</h1>
      <p>Our memories mean everything to me 💕</p>
    </div>
  `;
});

// NO button runs away
noBtn.addEventListener("mouseover", () => {
  noBtn.style.position = "absolute";
  noBtn.style.top = Math.random() * 80 + "vh";
  noBtn.style.left = Math.random() * 80 + "vw";
});
