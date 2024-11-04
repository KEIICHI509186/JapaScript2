function sum(x) {
 const result = x + 1
 console.log(result);
};
sum(2)

function sumNum(x, y) {
 const result = x + y
 console.log(result);
};
sumNum(10, 10)

function showText(x) {
 console.log(x);
};
showText(`kannsuu`)

function tomato(price, func) {
 const name = "トマト";
 func(name, price);
}
const price = function price(name, price) {
 console.log(name + " の値段は" + price + "円です。");
}
tomato(100, price);

function tomato(price, func) {
 const name = "トマト";
 func(name, price);
}
const point = function price(name, point) {
 console.log(name + " 税込み" + point + "円です。");
}
tomato(110, point);

function tamanegi(price, func) {
 const name = "玉ねぎ";
 func(name, price);
}
const po = function price(name, po) {
 console.log(name + " 税込み" + po + "円です。");
}
tamanegi(110, po);
