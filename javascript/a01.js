// var rulesre = /^[0-9] .?[0-9]*/;  //數字正規表達法
 var frequency = document.getElementsByName('frequency')  //計次器
 const inputClick = document.getElementsByName('a1')    //監聽修改紀錄
 console.log(inputClick)
//題目一 請你分別用 for loop 以及 while 迴圈，印出 1~9
const button1 = document.getElementById('button1')
button1.addEventListener('click',
    function (e) {
        var c = document.getElementById('answer')
        c.innerHTML = ""
        for (let i = 1; i < 10; i += 1) {
            console.log(i);
            c.innerHTML = c.innerHTML + i + " ";
        }
        // console.log(e.cancelable)
        //   e.stopPropagation()               
    }, false)
button1.addEventListener('mouseover', function () {
    var e = document.getElementById("form1");
    e.setAttribute("class", "noneDisplay");

}, false)

//題目二 請寫一個函式，接收一個是數字的參數 n，並且印出 1~n。
const button2 = document.getElementById('button2')
button2.addEventListener('click', function () {
    var c = document.getElementById('answer')
    var e = (document.getElementsByName('a1')[0].value);
    c.innerHTML = ""
    if (parseFloat(e).toString() == "NaN") {
        alert("請輸入數字");
        document.getElementsByName('a1')[0].value = 10;
        // console.log(e);
    } else {
        for (let i = 1; i < (parseFloat(e) + 1); i++) {
            // console.log(e);
            c.innerHTML = c.innerHTML + i + " ";
        }
    }
}, false)

button2.addEventListener('mouseover', function () {
    var e = document.getElementById("form1");
    var f = document.getElementsByName('a1');
    e.classList.remove("noneDisplay");
    f[0].classList.remove("noneDisplay");
   
}, false)

//題目3 接收一個參數 n，並印出 n 個 *
const button3 = document.getElementById('button3')

button3.addEventListener('click', function () {
    var c = document.getElementById('answer')
    var e = parseInt(document.getElementsByName('a1')[0].value);
    let star = '';
    c.innerHTML = ""

    if (e.toString() == "NaN") {
        alert("請輸入數字");
        document.getElementsByName('a1')[0].value = 1;
    } else {
        for (let i = 0; i < e; i++) {
            star = star + '*';
        }
        c.innerHTML = star;
    }
}, false)
button3.addEventListener('mouseover', function () {
    valueget(button3)
    var f = document.getElementsByName('a1');
    f[1].setAttribute("class", "noneDisplay")
}, false)


// 題目四  請寫一個functuon，並且接收一個字串，回傳這個字串的第一個字母是否為大寫
const button4 = document.getElementById('button4')
button4.addEventListener('click', function () {
    var c = document.getElementById('answer')
    var e = document.getElementsByName('a1')[0].value;
    // 65 為 A 的 ASCII CODE 90 為 Z
    // 可以直接比字母 if (str[0] >= 'A' && str[0] <= 'Z')
    // if (str[0].charCodeAt() >= 65 && str[0].charCodeAt() <= 90) {
    //   return true
    // } else {
    //   return false;
    // }
    // 邏輯簡化後只需一行
    // return   
    if (e[0] >= 'A' && e[0] <= 'Z'){
        c.innerHTML =`${e} 這個字串的第一個字是大寫子母`
    }else{
        c.innerHTML =`${e} 這個字串的第一個字不是大寫`
    }
}, false)
button4.addEventListener('mouseover', function () {
    valueget(button4)
    var f = document.getElementsByName('a1');
    f[1].setAttribute("class", "noneDisplay")
    
}, false)

const button5 = document.getElementById('button5')
button5.addEventListener('click', function () {
    var c = document.getElementById('answer')
    var e = document.getElementsByName('a1');
    // var e = document.getElementsByName('a1')[0].value;
    for (let i = 0; i < e[0].value.length; i++) {
        // 檢查是否大寫
        if (e[0].value[i].charCodeAt() >= 65 && e[0].value[i].charCodeAt() <= 90) {
            return c.innerHTML = `第一個大寫字母為${e[0].value[i]}__${i}`
        }
    }
    return c.innerHTML = (-1);
}, false)
button5.addEventListener('mouseover', function () {
    valueget(button5)
    var f = document.getElementsByName('a1');
    f[1].setAttribute("class", "noneDisplay")
}, false)

//取值函數
function valueget(e) {
    // console.log(e);
    var c = document.getElementById("form1");
    var f = document.getElementsByName('a1');
    c.classList.remove("noneDisplay");
    f[0].classList.remove("noneDisplay");
    f[1].classList.remove("noneDisplay");
}

//欄位判斷 數字
// onchange

inputClick[0].addEventListener('mouseover', function () {
    console.log('輸入框已被改變')
   
}, false)
// //備用
// const button1 = document.getElementById('button1')
// button1.addEventListener('click',function(){},false)
// button1.addEventListener('mouseover', function () {}, false)

