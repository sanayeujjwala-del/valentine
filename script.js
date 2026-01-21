const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

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
