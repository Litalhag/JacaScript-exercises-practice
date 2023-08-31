const tools = document.querySelectorAll(".tool");
const canvas = document.getElementById("drawingArea");

const ctx = canvas.getContext("2d");

function drawShape(shape) {
  return function (event) {
    ctx.beginPath();

    if (shape === "rectangle") {
      // ctx.rect(10, 20, 150, 100);
      ctx.rect(
        event.clientX - canvas.offsetLeft,
        event.clientY - canvas.offsetTop,
        150,
        100
      );
    } else {
      // ctx.arc(100, 75, 50, 0, 2 * Math.PI);
      ctx.arc(
        event.clientX - canvas.offsetLeft,
        event.clientY - canvas.offsetTop,
        50,
        0,
        2 * Math.PI
      );
    }
    ctx.stroke();
  };
}

let shape = null;

tools.forEach((element) => {
  element.addEventListener("click", function () {
    const shape = element.dataset.tool;
    canvas.addEventListener("click", drawShape(shape), { once: true });
  });
});
