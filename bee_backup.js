//0. 前置
//1. (畫布格線 改成一格格) 蜜蜂 敵機 子彈
//2. 蜜蜂左右移動 (pop unshift)
//3. 射擊(up) 敵機消失(或再出現?)
//4. 蜜蜂異動後重劃 函數排列


//------------------0. 前置----------------------


// 敵機:陣列濃縮

// for (const Id of flt.Id) {
//     console.log(Id);
// }
var outPut;
var count = 0;
var x = 0;
var y = 0;
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
var dx = 10;
var dy = 10;
// var newFltDetail = [];
var beeDistance = 14;
var number;
var spaceNumber = 5;
var fltInterval;
var canvasDimension = { width: 200, height: 200, origin: 0 };
var beeDetail = [];
var newScore;
// var flyCopy = {
//     // size: 8,
//     Id: 1,
//     begin: [{ x: 0, y: 20 }, { x: 30, y: 20 }, { x: 60, y: 20 }, { x: 90, y: 20 }, { x: 00, y: 60 }, { x: 30, y: 60 }, { x: 60, y: 60 }, { x: 90, y: 60 }]
// }

// shootPlay();



window.onload = onPageLoaded();

function drawNewBee() {
    for (var i = 0; i < 1; i++) {
        let bee = {
            size: 1,
            begin: { x: i * gridCount, y: 17 * gridCount },
            direction: { x: i + 1, y: 0 },
            location: i,
            // direction2: { x: 1, y: 0 }
        };
        beeDetail.push(bee);
        // ctx.clearRect(bee.begin[0].x, bee.begin[0].y, gridCount, gridCount);
        // beeDetail[i].location = i * gridCount + beeDistance;
        console.log("bee", bee);
        console.log("beeDetail", beeDetail[0]);
    };
    beeDetail[0].location = 175,

        // beeDetail[i].size = 3;
        console.log("beeDetail[0].location", beeDetail[0].location);
    console.log("beeDetail[0].size)", beeDetail[0].size);
    //完全無法列印
    // console.log("beeDetail[i].size)", beeDetail[i].size);

}


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
            // console.log("flybox", flybox);
        fltDetail.push(flybox);
        fltDetail[i].location = i * gridCount * spaceNumber + 1;


    };
    // fltDetail[0].location = 0,
    console.log("fltDetail[0].location = 0", fltDetail[0].location);
    // fltDetail[1].location = 60,
    console.log("fltDetail[1].location = 3", fltDetail[1].location);
    // fltDetail[2].location = 120,
    console.log("fltDetail[2].location = 6", fltDetail[2].location);

    console.log("fltDetail[5].location", fltDetail[5].location);

    // return fltPic;
    // console.log("fltDetail.push(flybox)", fltDetail);

}
//----------------1. 畫布 格線 蜜蜂--------------
// console.log("fltDetail", fltDetail);
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

        // console.log("i是", i);
        for (var j = 0; j < canvasDimension.height / gridCount; j++) {
            ctx.fillStyle = "blue";
            // solution to solve the output sequence
            // outPut += count + "\n";
            // console.log("count", count);
            // console.log("output", outPut);
            // count = count + 1;
            //console.log(i, j);
            // }
            console.log("畫敵機前fltDetail", fltDetail);
            //solution2
            // console.log("每格編號", outPut);
            // console.log("i編號", i);

            // 解決了重複21次的問題
            // number = ((i + 1) * (j + 1));

            //畫格子 發現 1 21 41 61..的規律
            number = (i * canvasDimension.width / gridCount + j);

            // console.log("每格編號", number);

            for (var k = 0; k < 8; k++) {
                // console.log("最新的fltDetail[k].location", fltDetail[k].location);
                // 不是最好寫法 因為j寫死了 下個方向 將每格坐標log出來
                // if (fltDetail[k].location == i && j == 3) {
                //solution original
                // if (fltDetail[k].location == i && j == 0) {
                if (fltDetail[k].location == number) {
                    // if (fltDetail[k].location > canvasDimension.width / gridCount / 2) {
                    //     j = 6;
                    ctx.fillStyle = "red";
                }

            }
            console.log("beeDetail", beeDetail);
            // 出來就是undefined
            // console.log("beeDetail[0].size)", beeDetail.size);
            for (var b = 0; b < beeDetail[0].size; b++) {
                if (beeDetail[0].location == number) {
                    ctx.fillStyle = "yellow";
                }

            }
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
// }

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





function shootPlay() {
    fltPic();
    drawNewBee();
    allPics();
    updateScore();
}



// setInterval(draw, 1000);
//射擊

//----動作 開始---



//----------------2. 蜜蜂左右移動 (pop unshift)----------------

//old way

function onPageLoaded() {
    document.addEventListener('keydown', keydown);
}

function keydown(event) {

    var originX = beeDetail[0].direction.x;
    //變數不要直接寫負號
    // var -originX = bee.direction.x;
    var originY = beeDetail[0].direction.y;

    if (event.keyCode === 37) {
        console.log("按了<--鍵");
        beeDetail[0].direction.x = originX;
        beeDetail[0].direction.y = originY;
    } else if (event.keyCode === 39) {
        console.log("按了-->鍵");
        (beeDetail[0].direction.x) = originX;
        beeDetail[0].direction.y = originY;
    }
    //也確認 是否beedetail有在按鍵事件裡
    console.log("beeDetail with event", beeDetail);
}




//originalway
function moveBee() {
    var newGrid = {
            x: beeDetail[0].begin.x + beeDetail[0].direction.x,
            //左右暫時不用
            y: beeDetail[0].begin[0].y + beeDetail[0].direction.y
        }
        // pressDown(e);

    beeDetail[0].begin.unshift(newGrid);
    //
    if (beeDetail[0].begin.length > beeDetail[0].size) {
        beeDetail[0].begin.pop(newGrid);
    }

};




// 成绩更新
function updateScore(newScore) {

    score = newScore;
    document.getElementById('scoreId').innerHTML = score;

    if (fltInterval) {
        clearInterval(fltInterval);
    }
    // fltInterval = setInterval(moveBee, 1000 / level);
    score += 1;

}


//左右移動事件  含 moveBee


//-----------------------3 敵軍detail----------------------
//射擊
// function shoot() {

//     //if (bullet.x===flt.x && bullet.y===flt.y) {flt gone & rectfill a empty gridCount}
// };








//============== 原來的 紅格 黃格子 畫法 參考如下=======================