// コード内に存在する潜在的な問題を早期に発見しやすくなります。
// strictモードのコードは高速に実行することができる場合がある（JSエンジンによる最適化処理を困難にする誤りを修正するため
'use strict'

{
  //FizzBuzz問題
  //1から100までの数をプリントするプログラムを書け。
  //繰り返し文で1~100まで出力する
  //ただし3の倍数のときは数の代わりに｢Fizz｣、5の倍数のときは｢Buzz｣とプリントし、
  //3と5の両方の倍数のときには｢FizzBuzz｣とプリントすること。
  const btn = document.getElementById('btn');
  const countNumber = document.querySelector('countNumber');


  //3と5の両方の倍数のときには｢FizzBuzz｣とコールする関数
  const btnPlus = document.getElementById('btnPlus');
  const btnMinus = document.getElementById('btnMinus');
  const countNumber = document.getElementById('countNumber');
  let callTxt = document.getElementById('callTxt');

//テキストをFizzとコールする関数

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
//テキストをBuzzとコールする関数
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

  //テストボタン//  ===========================
  document.getElementById("btn").onclick = function () {

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