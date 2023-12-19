const canvas = document.querySelector("canvas");

// canvas에 그림을 그릴 때 사용 - brush 용도 (ctx는 context의 약자)
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

// ctx.fillRect(50, 50, 100, 200);
ctx.rect(50, 50, 100, 100);
ctx.rect(150, 150, 100, 100);
ctx.rect(250, 250, 100, 100);
// ctx.stroke();
ctx.fill();

ctx.beginPath(); // 새 경로 만들어 위의 그림과 분리하기
ctx.rect(350, 350, 100, 100);
ctx.rect(450, 450, 100, 100);
ctx.fillStyle = "red";
// setTimeout(() => {
//   ctx.fill();
// }, 3000);
ctx.fill();
