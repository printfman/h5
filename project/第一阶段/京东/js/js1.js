/**
 * Created by Administrator on 2019/6/3.
 */

var curIndex = 0;
//时间间隔(单位毫秒)，每秒钟显示一张，数组共有5张图片放在Photos文件夹下。
var timeInterval = 1500;
var arr = new Array();
arr[0] ="../im"
arr[1] = "./images/banner1.jpg";
arr[2] = "./images/banner2.jpg";s
arr[3] = "./images/banner3.jpg";
arr[4] = "./images/banner4.jpg";
arr[4] = "./images/banner5.jpg";
setInterval(changeImg, timeInterval);
function changeImg() {
    var obj = document.getElementById("obj1");
    if (curIndex == arr.length - 1) {
        curIndex = 0;
    }
    else {
        curIndex += 1;
    }
    obj.src = arr[curIndex];
}

