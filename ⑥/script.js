var a = "こんにちは";
if (a == "こんばんわ") { // 条件A
 console.log("条件Aの処理");
 console.log(a);
} else if (a == "こんにちは") { // 条件B
 console.log("条件Bの処理");
 console.log(a);
} else { // 条件Aと条件Bに当てはまらなかった時の処理
 console.log("条件Aと条件以外の処理");
};
