const canvas = document.querySelector("canvas");

// canvas에 그림을 그릴 때 사용 - brush 용도 (ctx는 context의 약자)
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

ctx.moveTo(50, 50); // 좌표 이동 시작점(그리기x): 그리기 시작 위치까지 좌표 이동
ctx.lineTo(150, 50); // 좌표 이동(그리기o): 시작 위치로부터 지정 좌표(x, y축) 만큼까지 선 긋기
ctx.lineTo(150, 150);
ctx.lineTo(50, 150);
ctx.lineTo(50, 50);
// ctx.stroke();
ctx.fill();
