var canvas = document.querySelector("#mycanvas");
var ctx = canvas.getContext("2d");
var chartTitle = ["LEAD1", "LEAD2", "LEAD3", "aVR", "aVL", "aVF"];

ctx.strokeStyle = "grey";
ctx.strokeRect(0, 0, 1440, 600);
ctx.beginPath();


for (var i = 1; i < 36; i++) {
    let pos = (i * 100) / 6;
    ctx.moveTo(0, pos);
    ctx.lineTo(1440, pos);
    ctx.lineWidth = 0.1;
    ctx.stroke();
}
// ctx.closePath();

for (var i = 0; i < 145; i++) {
    let pos = 10 * i;
    ctx.moveTo(pos, 0);
    ctx.lineTo(pos, 600);
    ctx.lineWidth = 0.5;
    ctx.stroke();
}

for (var i = 0; i < 6; i++) {
    let pos = i * 100;
    ctx.font = "bold 18px Arial";
    ctx.fillText(chartTitle[i], 20, pos + 28);
}


ctx.beginPath();
ctx.moveTo(0, 30);
dps1.forEach((item, index) => {
    let pos = index;
    // ctx.moveTo(pos, 30);
    ctx.lineTo(pos, item * 100 + 30);
    ctx.strokeStyle = 'blue';
    ctx.stroke();
});

ctx.beginPath();
ctx.moveTo(0, 130);
// ctx.moveTo(0, 30);
dps2.forEach((item, index) => {
    let pos = index;
    // ctx.moveTo(pos, 30);
    ctx.lineTo(pos, item * 100 + 130);
    // ctx.lineTo(pos, item * 100 + 30);
    ctx.strokeStyle = 'red';
    ctx.stroke();
});

ctx.beginPath();
ctx.moveTo(0, 230);
// ctx.moveTo(0, 30);
dps3.forEach((item, index) => {
    let pos = index;
    // ctx.moveTo(pos, 30);
    ctx.lineTo(pos, item * 100 + 230);
    // ctx.lineTo(pos, item * 100 + 30);
    ctx.strokeStyle = 'black';
    ctx.stroke();
});

ctx.beginPath();
ctx.moveTo(0, 330);
// ctx.moveTo(0, 30);
dps4.forEach((item, index) => {
    let pos = index;
    // ctx.moveTo(pos, 30);
    ctx.lineTo(pos, item * 100 + 330);
    // ctx.lineTo(pos, item * 100 + 30);
    ctx.strokeStyle = 'orange';
    ctx.stroke();
});

ctx.beginPath();
ctx.moveTo(0, 430);
// ctx.moveTo(0, 30);
dps5.forEach((item, index) => {
    let pos = index;
    // ctx.moveTo(pos, 30);
    ctx.lineTo(pos, item * 100 + 430);
    // ctx.lineTo(pos, item * 100 + 30);
    ctx.strokeStyle = 'purple';
    ctx.stroke();
});

ctx.beginPath();
ctx.moveTo(0, 530);
// ctx.moveTo(0, 30);
dps6.forEach((item, index) => {
    let pos = index;
    // ctx.moveTo(pos, 30);
    ctx.lineTo(pos, item * 100 + 530);
    // ctx.lineTo(pos, item * 100 + 30);
    ctx.strokeStyle = 'green';
    ctx.stroke();
});