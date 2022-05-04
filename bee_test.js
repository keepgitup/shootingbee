// 來源物件
const obj = {
    id: 0,
    name: "John",
    age: 30,
    address: {
        city: "Taipei",
        country: "Taiwan",
    },
    count: 3,
};

//  {/* 目標物件 */}
const expected = [{
        id: 0,
        name: "John",
        age: 30,
        address: {
            city: "Taipei",
            country: "Taiwan",
        },
        count: 3,
    },
    {
        id: 0,
        name: "John",
        age: 30,
        address: {
            city: "Taipei",
            country: "Taiwan",
        },
        count: 3,
    },
    {
        id: 0,
        name: "John",
        age: 30,
        address: {
            city: "Taipei",
            country: "Taiwan",
        },
        count: 3,
    },
];