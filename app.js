const canvas = document.querySelector("canvas");

// canvas에 그림을 그릴 때 사용 - brush 용도 (ctx는 context의 약자)
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

ctx.fillRect(200, 200, 50, 200); // shortCut(지름길) function으로 fill과 rect를 호출
ctx.fillRect(400, 200, 50, 200);
ctx.lineWidth = 2; // context의 스타일이 먼저 와야 적용된다.
ctx.fillRect(300, 300, 50, 100);
ctx.fillRect(200, 200, 200, 20);
ctx.moveTo(200, 200);
ctx.lineTo(325, 100);
ctx.lineTo(450, 200);
ctx.fill();
