// idで指定したparentを取得
const parent = document.getElementById("parent")
// idで指定したchildを取得
const child = document.getElementById("child")
setTimeout(function () {
 // 3秒後に#child要素が削除される
 parent.removeChild(child)
}, 3000)
