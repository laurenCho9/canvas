const canvas = document.querySelector("canvas");

// canvas에 그림을 그릴 때 사용 - brush 용도 (ctx는 context의 약자)
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

const colors = [
  "#ff3838",
  "#ffb8b8",
  "#c56cf0",
  "#ff9f1a",
  "#fff200",
  "#32ff7e",
  "#7efff5",
];

ctx.lineWidth = 2;

function onClick(event) {
  //   console.log(event);
  ctx.beginPath();
  ctx.moveTo(0, 0);
  const color = colors[Math.floor(Math.random() * colors.length)];
  ctx.strokeStyle = color;
  ctx.lineTo(event.offsetX, event.offsetY);
  ctx.stroke();
}

// canvas.addEventListener("click", onClick);
canvas.addEventListener("mousemove", onClick);
