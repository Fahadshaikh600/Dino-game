let character = document.querySelector(".character");
let obstacle = document.querySelector(".obstacle");
let gameOver = document.querySelector(".gameOver");
let scoreCount = document.querySelector(".scoreCount");
let cross = true;
let score = 0;
let music = new Audio("../music/music.mp3");
let gameoverS = new Audio("../music/gameover.mp3");

setTimeout(() => {
  music.play();
}, 500);

document.onkeydown = function (e) {
  if (e.key == "ArrowUp") {
    character.classList.add("animateCharacter");
    setTimeout(() => {
      character.classList.remove("animateCharacter");
    }, 700);
  }

  if (e.key == "ArrowRight") {
    characterX = parseInt(
      window.getComputedStyle(character, null).getPropertyValue("left")
    );
    character.style.left = cX + 121 + "px";
  } else if (e.key == "ArrowLeft") {
    characterX = parseInt(
      window.getComputedStyle(character, null).getPropertyValue("left")
    );
    character.style.left = cX - 121 + "px";
  }
};

setInterval(() => {
  cX = parseInt(
    window.getComputedStyle(character, null).getPropertyValue("left")
  );
  cY = parseInt(
    window.getComputedStyle(character, null).getPropertyValue("top")
  );

  oX = parseInt(
    window.getComputedStyle(obstacle, null).getPropertyValue("left")
  );
  oY = parseInt(
    window.getComputedStyle(obstacle, null).getPropertyValue("top")
  );

  offsetX = Math.abs(cX - oX);
  offsetY = Math.abs(cY - oY);

  if (offsetX < 93 && offsetY < 52) {
    gameOver.innerHTML = "<h3>Game over - Reload to start</h3>";
    obstacle.classList.remove("obstacleAnimation");
    music.pause();
    gameoverS.play();
    setTimeout(() => {
      gameoverS.pause();
    }, 1000);
  } else if (offsetX < 145 && cross) {
    score += 1;
    cross = false;
    updateScore(score);
    setTimeout(() => {
      cross = true;
    }, 1000);
    setTimeout(() => {
      window;
      aniDur = parseFloat(
        window
          .getComputedStyle(obstacle, null)
          .getPropertyValue("animation-duration")
      );
      newDur = aniDur - 0.1;
      obstacle.style.animationDuration = newDur + "s";
    }, 500);
  }
}, 10);

function updateScore(score) {
  scoreCount.innerHTML = "Your score is: " + score;
}
