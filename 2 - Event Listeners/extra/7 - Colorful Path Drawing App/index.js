const canvas = document.getElementById("drawingArea");
const ctx = canvas.getContext("2d");
let isDrawing = false;

function trackMousePath() {
  let x = null;
  let y = null;

  return {
    draw: function (event) {
      if (!isDrawing) return;

      const hue = Math.random() * 360; // Random hue for HSL color
      ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
      ctx.lineWidth = 5;
      ctx.lineCap = "round";

      ctx.beginPath();
      if (x !== null && y !== null) {
        ctx.moveTo(x, y);
      } else {
        ctx.moveTo(
          event.clientX - canvas.offsetLeft,
          event.clientY - canvas.offsetTop
        );
      }

      ctx.lineTo(
        event.clientX - canvas.offsetLeft,
        event.clientY - canvas.offsetTop
      );
      ctx.stroke();

      x = event.clientX - canvas.offsetLeft;
      y = event.clientY - canvas.offsetTop;
    },
    reset: function () {
      x = null;
      y = null;
    },
  };
}

const pathTracker = trackMousePath();

canvas.addEventListener("mousedown", function () {
  isDrawing = true;
});

canvas.addEventListener("mouseup", function () {
  isDrawing = false;
  pathTracker.reset();
});

canvas.addEventListener("mousemove", pathTracker.draw);
