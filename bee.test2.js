let flybox = {
    size: 8,
    Id: ["1"],
    begin: [{ x: 0, y: 20 }, { x: 30, y: 20 }, { x: 60, y: 20 }, { x: 90, y: 20 }, { x: 00, y: 60 }, { x: 30, y: 60 }, { x: 60, y: 60 }, { x: 90, y: 60 }]


};
var fltDetail = [];
for (var i = 0; i < 8; i++) {
    let flyboxCopy = [{
        size: 8,
        Id: ["1"],
        begin: [{ x: 0, y: 20 }, { x: 30, y: 20 }, { x: 60, y: 20 }, { x: 90, y: 20 }, { x: 00, y: 60 }, { x: 30, y: 60 }, { x: 60, y: 60 }, { x: 90, y: 60 }]
    }, ]
    fltDetail.push(flyboxCopy[i]);
    console.log("次數", fltDetail);
}