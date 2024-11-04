for (var i = 100; i < 105; i++) {
 console.log("ループ" + i + "回⽬");
};

var items = ["月", "水", "金"];
for (index in items) {
 console.log(items[index]);
};

var items = ["オムライス", "ラーメン", "フランクフルト"];
for (index of items) {
 console.log(items[index]);
};
