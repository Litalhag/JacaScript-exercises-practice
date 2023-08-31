const characters = document.querySelectorAll("#carousel .character");

const positions = [0, 1, 2];

function updateCarousel() {
  characters.forEach((character, index) => {
    const position = positions[index];

    const translateX = (position - 1) * 180;

    const scaleValue = position === 1 ? "1.2" : "1";

    character.style.transform = `translateX(${translateX}px) scale(${scaleValue})`;

    if (position === 1) {
      character.classList.add("character-center");
      character.style.zIndex = "2";
    } else {
      character.classList.remove("character-center");
      character.style.zIndex = "1";
    }
  });
}

characters.forEach((character, index) => {
  character.addEventListener("click", function () {
    const position = positions[index];
    if (position === 1) {
      return;
    }

    const rotationsNeeded = position === 0 ? 1 : 2;

    for (let i = 0; i < rotationsNeeded; i++) {
      positions.push(positions.shift());
    }

    updateCarousel();
  });
});

updateCarousel();

// let scaleValue;

// if (pos === 1) {
//   scaleValue = "1.2";
// } else {
//   scaleValue = "";
// }

//   const scaleValue = position === 1 ? "1.2" : "";
// -------------------------
// let rotationsNeeded;
// if (position === 0){
//   rotationsNeeded = 2;
// } else {
//   rotationsNeeded = 1
// }

//   const rotationsNeeded = position === 0 ? 2 : 1;
