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

// for (const key of Object.keys(flt)) {
//     console.log('key', key);
// }

// for (var i = 0; i < flt.Id.length; i++) {
//     console.log(flt.Id[i]);
// }

// for (const Id of flt.Id) {
//     console.log(Id);
// }



var bullet;
var score;
var level;
var gridPixel = 10;
var gridCount = 10;
var canvas = document.getElementById('canvasId');
var ctx = canvas.getContext('2d');
var newY = 10;
var canvasPic = { width: 200, height: 200 };
var fltDetail = [];
// var newFltDetail = [];
// window.onload = onPageLoad();
var number;
var spaceNumber = 3;


// var flyCopy = {
//     // size: 8,
//     Id: 1,
//     begin: [{ x: 0, y: 20 }, { x: 30, y: 20 }, { x: 60, y: 20 }, { x: 90, y: 20 }, { x: 00, y: 60 }, { x: 30, y: 60 }, { x: 60, y: 60 }, { x: 90, y: 60 }]
// }

// shootPlay();


function fltPic() {


    for (var i = 0; i < 8; i++) {
        let flybox = {
            // size: 8,
            // 這裡就是 數值 不用想到陣列取值 過於複雜
            Id: i,
            // Id: [1, 2, 3, 4, 5, 6, 7, 8],
            begin: { x: i * 3 * gridCount, y: 2 * gridCount },
            // location: [0, 3, 6, 9, 12, 15, 18, 21],
            location: i,
            // location: i * 3
            // location: [i * 3]

        }
        console.log("flybox.location", flybox.location);
        //incorrect
        // this.y = flybox[i].begin.y;

        console.log("ctx.fillStyle", ctx.fillStyle);
        console.log("begin.y", flybox.begin.y);
        //錯誤寫法
        // console.log("flybox.begin.y", this.y);
        console.log("flybox", flybox);

        // ctx.fillStyle = "red";
        // ctx.fillRect(flybox[i].begin.x, flybox[i].begin.y, gridPixel, gridPixel);


        //思考 為何知道這裡i拿掉??
        //因為  for回圈裡面的i 是運算值 虛的 存到空陣列後 再push 此時是數值要進來了

        //非一次推完
        fltDetail.push(flybox);
        // console.log("fltDetail", fltDetail);
        // fltDetail=flybox;
        // fltDetail[i].location =
        // 都只能抓到第一個值


        //測試 下為不正確
        // fltDetail.push(flybox.Id[i], flybox.begin[i]);

        //per time print one

        // console.log(flt);
        // ctx.fillStyle = "blue";
        // console.log("fltDetail", fltDetail);
        fltDetail[i].location = i * gridCount * spaceNumber + 1;
        console.log("108行的", fltDetail[i].location);

        // combine object

        // 整理
        // console.log({ Id: flt.Id[i] });


    };
    //回圈外的i 已經跑完到8了..
    //console.log("117行的i", i);

    // console.log("回圈外fltDetail", fltDetail);
    // fltDetail[0].location = 0,
    console.log("fltDetail[0].location = 0", fltDetail[0].location);
    // fltDetail[1].location = 60,
    console.log("fltDetail[1].location = 3", fltDetail[1].location);
    // fltDetail[2].location = 120,
    console.log("fltDetail[2].location = 6", fltDetail[2].location);
    // fltDetail[3].location = 180,
    console.log("fltDetail[3].location = 9", fltDetail[3].location);
    // fltDetail[4].location = 55,
    console.log("fltDetail[4].location = 12", fltDetail[4].location);
    // console.log("fltDetail[i].location", fltDetail.location);


    // fltDetail[5].location = 115;
    // fltDetail[6].location = 175;
    // fltDetail[7].location = 240;
    console.log("fltDetail[5].location", fltDetail[5].location);
    // fltDetail[6].location = 18,

    // console.log("fltDetail[i].location", fltDetail[i].location);
    // console.log("回圈外fltDetail", fltDetail);


    // fltDetail.Id[2].push();
    //畫敵軍


    // 非回圈寫法

    // return fltPic;
    // console.log("fltDetail.push(flybox)", fltDetail);

}
//----------------1. 畫布 格線 蜜蜂--------------
// console.log("fltDetail", fltDetail);

var outPut;
var count = 0;



function allPics() {

    // var newflts = fltPic();

    ctx.fillStyle = "gray";
    // 箱子重疊 不等於 直接等於
    // newFltDetail.push(fltDetail);
    // for (var n = 0; n < canvasDimension.width / gridCount * canvasDimension.height / gridCount; n++) {
    // if (n % 20 == 0) {
    //     document.write("</br>");

    // }
    // for (var n = 0; n < canvasDimension.width / gridCount * canvasDimension.height / gridCount; n++) {
    // console.log("每格編號", n);
    for (var i = 0; i < canvasDimension.width / gridCount; i++) {

        console.log("i是", i);

        for (var j = 0; j < canvasDimension.height / gridCount; j++) {
            ctx.fillStyle = "blue";
            // solution to solve the output sequence
            // outPut += count + "\n";
            // console.log("count", count);
            // console.log("output", outPut);
            // count = count + 1;



            //console.log(i, j);

            //     console.log("fltDetail[i].location", fltDetail[i].location);
            //     console.log("fltDetail[i].begin.x", fltDetail[i].begin.x);
            //     // flybox.begin.x = 6 * gridCount;
            //     // fltDetail[i].begin.x = (i * 3 * gridCount);
            //     // console.log("i* 3 * gridCount", i * 3 * gridCount);
            //     // fltDetail[j].begin.y = j * gridCount;
            //     ctx.fillStyle = "red";
            // }
            // console.log("畫敵機前fltDetail", fltDetail);

            // 這是坐標的列印了
            // console.log("fltDetail.location[i]&[j]", i, j);
            // if (j % 20 == 0) {
            //     document.write("</br>");

            // }


            //solution2
            // console.log("每格編號", outPut);
            // console.log("i編號", i);

            // 解決了重複21次的問題
            // number = ((i + 1) * (j + 1));
            //
            number = (i * canvasDimension.width / gridCount + j);

            // console.log("每格編號", number);

            for (var k = 0; k < 8; k++) {


                // console.log("最新的fltDetail[k].location", fltDetail[k].location);
                // 不是最好寫法 因為j寫死了 下個方向 將每格坐標log出來
                // if (fltDetail[k].location == i && j == 3) {
                //solution original
                // if (fltDetail[k].location == i && j == 0) {
                if (fltDetail[k].location == number) {
                    // console.log("fltDetail[k].location 的j", j);
                    // console.log("fltDetail[k].location = 6 * i;", 6 * i);
                    // console.log("fltDetail[k].location / 3", fltDetail[k].location / 3);
                    // if (fltDetail[k].location > canvasDimension.width / gridCount / 2) {
                    //     j = 6;

                    //     console.log(fltDetail[k].location, j = 6);
                    // }

                    ctx.fillStyle = "red";
                }
                // else if (fltDetail[k].location == 121) {
                //     ctx.fillStyle = "blue";
                //     //     console.log("if內的列印", fltDetail[k].location);
                // }

            }
            // ctx.fillStyle = "blue";


            // }
            // for (var k = 0; k < 8; k++) {
            //     //planB 一直跑一排
            // if (fltDetail[k].location == i) {
            //         //planC
            // if (fltDetail[k].location.x == i && fltDetail[k].location.y == j) {
            //     console.log(fltDetail);
            //     ctx.fillStyle = "red";
            // }

            // }
            //solution
            // outPut = outPut + "\n";
            ctx.fillRect(i * gridCount, j * gridCount, gridCount, gridCount);

        }
    }


    // }
    // }
    // ctx.fillRect(fltDetail[i].begin.x * gridCount, fltDetail[j].begin.y * gridCount, gridPixel, gridPixel);
    // console.log("ctx.fillRect數字", (i * gridCount, j * gridCount, gridCount, gridCount));
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






// 測試用
// function test() {
//     ctx.fillStyle = "yellow";
//     ctx.fillRect(180, 170, gridPixel, gridPixel);
// }

function mapPic(a1, a2) {
    ctx.beginPath();
    ctx.lineWidth = 0.53;
    ctx.strokeStyle = "darkgray";
    ctx.moveTo(a1.x, a1.y);

    ctx.lineTo(a2.x, a2.y);

    ctx.stroke();
}



//畫蜜蜂
function beePic() {
    ctx.fillStyle = "yellow";
    ctx.fillRect(bee.begin[0].x, bee.begin[0].y, gridPixel, gridPixel);
}

function shootPlay() {
    fltPic();
    allPics();
    beePic();
}
// shootPlay = function() {
//     fltPic();
//     allPics();
//     beePic();
//     // pressDown();
// };




//射擊
// function shoot() {

//     //if (bullet.x===flt.x && bullet.y===flt.y) {flt gone & rectfill a empty gridCount}
// };
//----動作 開始---



//----------------2. 蜜蜂左右移動 (pop unshift)----------------

//ffjcy
// function onPageLoad() {
//     document.addEventListener('keydown', pressDown);

// }


// function moveBee() {
//     var newGrid = {
//             x: bee.begin[0].x + bee.direction.x,
//             y: bee.begin[0].y + bee.direction.y
//         }
//         // pressDown(e);

//     bee.begin.unshift(newGrid);
//     //
//     if (bee.begin.length > bee * gridCount) {
//         bee.begin.pop(newGrid);
//     }

// };

//左右移動事件  含 moveBee

// function pressDown(e) {
//     var rightBeeX = bee.direction1.x;
//     var rightBeeY = bee.direction1.y;
//     var leftBeeX = bee.direction2.x;
//     var leftBeeY = bee.direction2.y;

//     if (e.keyCode === 37) {
//         console.log(e);
//         bee.direction1.x = rightBeeX;
//         // console.log("chk", rightBeeX);
//         bee.direction1.y = rightBeeY;
//     } else if (e.keyCode === 39) {
//         // console.log("chk", leftBeeX);
//         bee.direction2.x = leftBeeX;
//         bee.direction2.y = leftBeeY;
//     }
// }
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

// function allPics() {
//     ctx.fillStyle = "gray";
//     for (var i = 0; i < 20; i++) {
//         ctx.lineWidth = 0.33;
//         // ctx.fillRect(i * 10 + i * 10, 10, 10);
//         // ctx.fillRect(10, 10 * i, 10, 10);
//         // ctx.fillRect(20, 20 * i, 10, 10);
//         for (var j = 0; j < 20; j++) {
//             ctx.fillStyle = "blue";
//             if (j % 13 === 0 && i % 5 === 0) {
//                 ctx.fillStyle = "red";
//             }
//             if (j % 17 === 0 && i % 18 === 0 && i !== 0 && j !== 0) {
//                 ctx.fillStyle = "yellow";
//                 // ctx.fillRect(x, y, 10, 10);
//                 console.log("yellow", ctx.fillStyle);

//             }
//             // console.log("red畫了幾次", i * gridCount, j * gridCount);
//             // 留意執行順序的位置 移到了66行
//             ctx.fillRect(i * gridCount, j * gridCount, gridPixel, gridPixel);
//             console.log("ctx.fillRect數字", (i * gridCount), (j * gridCount));
//             test();
//
//