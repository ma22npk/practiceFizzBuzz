// コード内に存在する潜在的な問題を早期に発見しやすくなります。
// strictモードのコードは高速に実行することができる場合がある（JSエンジンによる最適化処理を困難にする誤りを修正するため
'use strict'

{
  //FizzBuzz問題
  //1から100までの数をプリントするプログラムを書け。


  //3と5の両方の倍数のときには｢FizzBuzz｣とコールする関数
  const btnPlus = document.getElementById('btnPlus');
  const btnMinus = document.getElementById('btnMinus');
  const countNumber = document.getElementById('countNumber');
  let callTxt = document.getElementById('callTxt');


  //countNumberの数字を１つずつ増やして表示する関数
  const countUpNumber = function () {
    countNumber.innerText++;
  }
  //countNumberの数字を１つずつ減らして表示する関数
  const countDownNumber = function () {
    countNumber.innerText--;
  }


  //3の倍数のときは
  //テキストをFizzとコールする関数
  const callFizz = function () {
    callTxt.textContent = "Fizz";
  }
  //5の倍数のときは
  //テキストをBuzzとコールする関数
  const callBuzz = function () {
    callTxt.textContent = "Buzz";
  }
  //テキストをfizzBuzzとコールする関数
  const callFizzBuzz = function () {
    callTxt.textContent = "Fizz Buzz";
  }
  //テキストをfizzBuzzとコールする関数
  const callNon = function () {
    callTxt.textContent = "・・・";
  }

  const checkFizzBuzz = function () {
    let countUpValue = countNumber.innerText;
    //3と5の両方の倍数のときには
    if (countUpValue % 15 === 0) {
      //｢FizzBuzz｣と表示
      callFizzBuzz();
    } //3の倍数のときは
    else if (countUpValue % 3 === 0) {
      //｢Fizz｣と表示
      callFizz();
    }
    //5の倍数のときは
    else if (countUpValue % 5 === 0) {
      //｢Buzz｣と表示
      callBuzz();
    }
    //それ以外だったら特にコールしない
    else {
      callNon();
    }
  }


//プラスボタン
  btnPlus.onclick = function () {
    countUpNumber();
    checkFizzBuzz();
  }

//マイナスボタン
  btnMinus.onclick = function () {
    countDownNumber();
    checkFizzBuzz();
  }






}