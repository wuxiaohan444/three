// 省
let one = template("tpl", {data: data});
document.getElementById("one").innerHTML = one;
// 市
let province = document.querySelector("#one");
let id = 0;
province.onchange = function () {
    let index = province.selectedIndex;
    id = index-1;
    let two = template("tpl2", {data: data[id]});
    document.getElementById("two").innerHTML = two;
}
// 县
let city = document.querySelector("#two");
city.onchange = function () {
    let index = city.selectedIndex;
    let pid = index-1;
    let Arry = data[id].city[pid].district;
    let three = template("tpl3", {Arry: Arry});
    document.getElementById("three").innerHTML = three;
}


