//0. 前置
//1. 畫布 格線 蜜蜂 敵機 子彈
//2. 蜜蜂左右移動 (pop unshift)
//3. 射擊(up) 敵機消失(或再出現?)
//4. 蜜蜂異動後重劃 函數排列

//-----------------------0. 前置----------------------

var bee = {
    size: 4,
    begin: [{ x: 25, y: 250 }],
    direction: { x: 1, y: 0 },

};
var flt = {
    size: 8,
    begin: [{ x: 15, y: 5 }, { x: 20, y: 5 }, { x: 25, y: 5 }, { x: 30, y: 5 }, { x: 15, y: 20 }, { x: 20, y: 20 }, { x: 25, y: 20 }, { x: 30, y: 20 }],
    direction: { x: 0, y: 1 },
};
var bullet;
var score;
var level;
var gridPixel = 10;
var gridCount = 10;
var canvas = document.getElementById('canvasId');
var ctx = canvas.getContext('2d');

var canvasPic = { width: 500, height: 500 };

window.onload = onPageLoad();

function shootPlay() {
    allPics();
    beePic();
    fltPic();

};

//----------------1. 畫布 格線 蜜蜂 敵機 子彈--------------

function allPics() {
    ctx.fillStyle = "#DDA0DD";
    ctx.fillRect(0, 0, 500, 500);
    ctx.strokeRect(0, 0, 500, 500);
    console.log("ctx", ctx);
    let lineAll = (canvasPic.width / gridPixel) + 1;
    for (var i = 0; i < lineAll; i++) {
        let a1 = { x: i * 10, y: 0 };
        let a2 = { x: i * 10, y: 500 };
        let b1 = { x: 0, y: i * 10 };
        let b2 = { x: 500, y: i * 10 };
        gridPic(a1, a2);
        console.log("線第", i + "條");
        gridPic(b1, b2);
        // console.log("線第", i + "條");
    }


};

//畫格子
function gridPic(a1, a2) {
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#F8F8EE";
    ctx.moveTo(a1.x, a1.y);
    ctx.lineTo(a2.x, a2.y);
    ctx.stroke();
};

//畫蜜蜂
function beePic() {
    ctx.fillStyle = "#F89039";
    // for (var i = 0; i < bee.length; i++) {

    //     ctx.fillRect(bee.begin.x * gridPixel, bee.begin.y * gridPixel, gridPixel - 1, gridPixel - 1);
    //     console.log("bee.begin.x * gridPixel + 1, bee.begin.y * gridPixel + 1", bee.begin.x * gridPixel, bee.begin.y * gridPixel);
    ctx.fillRect(235, 450, 50, 25);
    ctx.strokeRect(235, 450, 50, 25);

}

//畫敵軍
function fltPic() {

    ctx.fillStyle = "blue";
    for (var i = 0; i < flt.size; i++) {
        // for (var i = 0; i < flt.begin.length; i++) {
        // ctx.fillRect(flt.begin[i].x * gridCount + 10, flt.begin[i].y * gridCount + 10, gridCount * 3 + 1, gridCount * 2 + 1);
        ctx.fillRect(flt.begin[i].x * gridCount + 10, flt.begin[i].y * gridCount + 10, gridCount * 3 + 1, gridCount * 2 + 1);
        // ctx.fillRect(60, 150, 30, 20);
        // ctx.strokeRect(60, 150, 30, 20);
        console.log("flt[i].y * gridCount", flt.begin[i].y * gridCount);
        console.log("flt[i].x* gridCount", flt.begin[i].x * gridCount);
    }
}


//射擊
// function shoot() {

//     //if (bullet.x===flt.x && bullet.y===flt.y) {flt gone & rectfill a empty gridCount}
// };


//----------------2. 蜜蜂左右移動 (pop unshift)----------------

//ffjcy
function onPageLoad() {
    document.addEventListener('keydown', pressDown);

}

function pressDown(e) {
    console.log(e.keyCode);

}

function moveBee() {
    var newGrid = {
        x: bee.begin[0].x + bee.begin.x,
        y: bee.begin[0].y + bee.begin.y
    }
    pressDown(e);

    bee.begin.unshift(newGrid);
    //
    if (bee.begin.length > gridCount * 2) {
        bee.begin.pop();
    }

}
//左右移動事件  含 moveBee
//-----------------------3 敵軍detail----------------------
//射擊
// function shoot() {

//     //if (bullet.x===flt.x && bullet.y===flt.y) {flt gone & rectfill a empty gridCount}
// };

function pressDown(e) {
    //紀錄原本方向的x值 Y值
    var originX = bee.direction.x;
    var originY = bee.direction.y;

    if (e.keyCode === 37) {
        console.log("按了left");
        bee.direction.x = -originX;
        bee.direction.y = originY * 0;
    } else if (e.keyCode === 39) {
        console.log("按了right鍵");
        bee.direction.x = originX;
        bee.direction.y = originY * 0;
    }
}