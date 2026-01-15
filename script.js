const noBtn = document.querySelector(".no");
const msg = document.getElementById("message");

noBtn.addEventListener("mouseenter", runAway);
noBtn.addEventListener("click", runAway);
noBtn.addEventListener("touchstart", runAway);

function runAway() {
  msg.textContent = "Wrong answer, try again 😌";
  msg.style.opacity = "1";

  const container = document.querySelector(".container");
  const rect = container.getBoundingClientRect();

  const x = Math.random() * (rect.width - 100);
  const y = Math.random() * (rect.height - 50);

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;

  noBtn.classList.add("shake");
  setTimeout(() => noBtn.classList.remove("shake"), 300);
}

function yesClicked() {
  launchConfetti();

  document.querySelector(".container").innerHTML = `
    <h1 style="color:white;font-size:3em;">YIPEEEEE!!💕</h1>
    <p style="color:white;font-size:1.5em;margin-top:20px;">
      (Not like you had any other choice🤭)<br>
      Happy Valentines Day🥰 I Love You Baby
    </p>
  `;
}

function launchConfetti() {
  for (let i = 0; i < 150; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.backgroundColor =
      `hsl(${Math.random() * 360}, 100%, 50%)`;
    confetti.style.animationDuration =
      Math.random() * 2 + 2 + "s";

    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 3000);
  }
}
