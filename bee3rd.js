//0. 前置
//1. (畫布格線 改成一格格) 蜜蜂 敵機 子彈
//2. 蜜蜂左右移動 (pop unshift)
//3. 射擊(up) 敵機消失(或再出現?)
//4. 蜜蜂異動後重劃 函數排列

var canvasDimension = { width: 200, height: 200, origin: 0 };
//------------------0. 前置----------------------

var bee = {
    size: 1,
    begin: [{ x: 100, y: 170 }],
    direction1: { x: -1, y: 0 },
    direction2: { x: 1, y: 0 }

};
// 敵機:陣列濃縮
var flt = {
    size: 8,
    // begin: [{ x: 0, y: 0 }],
    begin: [{ x: 0, y: 0 }, { x: 0, y: 130 }, { x: 50, y: 0 }, { x: 50, y: 130 }, { x: 100, y: 0 }, { x: 100, y: 130 }, { x: 150, y: 0 }, { x: 150, y: 130 }],
    direction1: { x: -1, y: 0 },
    direction2: { x: 1, y: 0 },
    // Id: "0",
}

// 敵機:拆開寫
var test;

// = {
//     name: [flt1, flt2],
//     size: 1,
//     begin: [{ x: 0, y: 0 }, { x: 0, y: 130 }],
//     direction1: { x: -1, y: 0 },
//     direction2: { x: 1, y: 0 }
// };
// var flt2 = {
//     size: 1,
//     begin: [{ x: 0, y: 130 }],
//     direction1: { x: -1, y: 0 },
//     direction2: { x: 1, y: 0 }
// };
// var flt3 = {
//     size: 1,
//     begin: [{ x: 50, y: 0 }],
//     direction1: { x: -1, y: 0 },
//     direction2: { x: 1, y: 0 }
// };
// var flt4 = {
//     size: 1,
//     begin: [{ x: 50, y: 130 }],
//     direction1: { x: -1, y: 0 },
//     direction2: { x: 1, y: 0 }
// };
// var flt5 = {
//     size: 1,
//     begin: [{ x: 100, y: 0 }],
//     direction1: { x: -1, y: 0 },
//     direction2: { x: 1, y: 0 }
// };
// var flt6 = {
//     size: 1,
//     begin: [{ x: 100, y: 130 }],
//     direction1: { x: -1, y: 0 },
//     direction2: { x: 1, y: 0 }
// };
// var flt7 = {
//     size: 1,
//     begin: [{ x: 150, y: 0 }],
//     direction1: { x: -1, y: 0 },
//     direction2: { x: 1, y: 0 }
// };
// var flt8 = {
//     size: 1,
//     begin: [{ x: 150, y: 130 }],
//     direction1: { x: -1, y: 0 },
//     direction2: { x: 1, y: 0 }
// };
var bullet;
var score;
var level;
var gridPixel = 10;
var gridCount = 10;
var canvas = document.getElementById('canvasId');
var ctx = canvas.getContext('2d');

var canvasPic = { width: 200, height: 200 };

window.onload = onPageLoad();

function shootPlay() {
    allPics();
    fltPic();
    beePic();
    // pressDown();
};

var fltDetail = [];
// var fltId = [];
for (var i = 0; i < 8; i++) {
    fltDetail.push(flt);
    console.log(flt);
    console.log("fltDetail", fltDetail);
};
// console.log("fltDetail", fltDetail[0]);


//----------------1. 畫布 格線 蜜蜂 敵機 子彈--------------

function allPics() {
    ctx.fillStyle = "gray";
    for (var i = 0; i < 20; i++) {
        ctx.lineWidth = 0.33;
        // ctx.fillRect(i * 10 + i * 10, 10, 10);
        // ctx.fillRect(10, 10 * i, 10, 10);
        // ctx.fillRect(20, 20 * i, 10, 10);
        for (var j = 0; j < 20; j++) {
            ctx.fillStyle = "blue";
            if (j % 13 === 0 && i % 5 === 0) {
                ctx.fillStyle = "red";
            }
            if (j % 17 === 0 && i % 18 === 0 && i !== 0 && j !== 0) {
                ctx.fillStyle = "yellow";
                // ctx.fillRect(x, y, 10, 10);
                console.log("yellow", ctx.fillStyle);

            }
            // console.log("red畫了幾次", i * gridCount, j * gridCount);
            // 留意執行順序的位置 移到了66行
            ctx.fillRect(i * gridCount, j * gridCount, gridPixel, gridPixel);
            console.log("ctx.fillRect數字", (i * gridCount), (j * gridCount));

        }
    }


    //畫格子線
    let countLine = (canvasDimension.width / gridCount) + 1;
    for (var i = 0; i < countLine; i++) {
        let a1 = { x: i * gridCount, y: canvasDimension.height };
        let a2 = { x: i * gridCount, y: canvasDimension.origin };
        let b1 = { x: canvasDimension.origin, y: i * gridCount };
        let b2 = { x: canvasDimension.height, y: i * gridCount };
        mapPic(a1, a2);
        // console.log("線第", i + "條");
        mapPic(b1, b2);
        // console.log("線第", i + "條");

    };
}

//畫敵軍
function fltPic() {
    ctx.fillStyle = "red";
    for (var i = 0; i < flt.size; i++) {
        //     ctx.lineWidth = 0.33;
        //     for (var j = 0; j < 20; j++) {

        ctx.fillRect(flt.begin[i].x, flt.begin[i].y, gridPixel, gridPixel);
    }
    // 非回圈寫法
    // ctx.fillStyle = "red";
    //
    // ctx.fillRect(flt1.begin[0].x, flt1.begin[0].y, gridPixel, gridPixel);
    // ctx.fillRect(flt2.begin[0].x, flt2.begin[0].y, gridPixel, gridPixel);
    // ctx.fillRect(flt3.begin[0].x, flt3.begin[0].y, gridPixel, gridPixel);
    // ctx.fillRect(flt4.begin[0].x, flt4.begin[0].y, gridPixel, gridPixel);
    // ctx.fillRect(flt5.begin[0].x, flt5.begin[0].y, gridPixel, gridPixel);
    // ctx.fillRect(flt6.begin[0].x, flt6.begin[0].y, gridPixel, gridPixel);
    // ctx.fillRect(flt7.begin[0].x, flt7.begin[0].y, gridPixel, gridPixel);
    // ctx.fillRect(flt8.begin[0].x, flt8.begin[0].y, gridPixel, gridPixel);

}
// }
// }


// 測試用
// function test() {
//     ctx.fillStyle = "yellow";
//     ctx.fillRect(180, 170, gridPixel, gridPixel);
// }

function mapPic(a1, a2) {
    ctx.beginPath();
    ctx.lineWidth = 0.33;
    ctx.strokeStyle = "lightgray";
    ctx.moveTo(a1.x, a1.y);

    ctx.lineTo(a2.x, a2.y);

    ctx.stroke();
}



//畫蜜蜂
function beePic() {
    ctx.fillStyle = "yellow";
    ctx.fillRect(bee.begin[0].x, bee.begin[0].y, gridPixel, gridPixel);
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


function moveBee() {
    var newGrid = {
            x: bee.begin[0].x + bee.direction.x,
            y: bee.begin[0].y + bee.direction.y
        }
        // pressDown(e);

    bee.begin.unshift(newGrid);
    //
    if (bee.begin.length > bee * gridCount) {
        bee.begin.pop(newGrid);
    }

};

//左右移動事件  含 moveBee

function pressDown(e) {
    var rightBeeX = bee.direction1.x;
    var rightBeeY = bee.direction1.y;
    var leftBeeX = bee.direction2.x;
    var leftBeeY = bee.direction2.y;

    if (e.keyCode === 37) {
        console.log(e);
        bee.direction1.x = rightBeeX;
        // console.log("chk", rightBeeX);
        bee.direction1.y = rightBeeY;
    } else if (e.keyCode === 39) {
        // console.log("chk", leftBeeX);
        bee.direction2.x = leftBeeX;
        bee.direction2.y = leftBeeY;
    }
}
//-----------------------3 敵軍detail----------------------
//射擊
// function shoot() {

//     //if (bullet.x===flt.x && bullet.y===flt.y) {flt gone & rectfill a empty gridCount}
// };

// function pressDown(e) {
//     //紀錄原本方向的x值 Y值
//     var originX = bee.direction.x;
//     var originY = bee.direction.y;

//     if (e.keyCode === 37) {
//         console.log("按了left");
//         bee.direction.x = -originX;
//         bee.direction.y = originY * 0;
//     } else if (e.keyCode === 39) {
//         console.log("按了right鍵");
//         bee.direction.x = originX;
//         bee.direction.y = originY * 0;
//     }
// }




//============== 原來的 紅格 黃格子 畫法 參考如下=======================