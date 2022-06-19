//引数で指定した値に文字列を返す関数//
function edit(btn) {
  if(btn.value == "=") {
  //documentでHTMLの要素を取得し、文字列として計算//
    document.dentaku.display.value = eval(document.dentaku.display.value);
  } 
      
  //ACを選択した場合の処理//
  else if (btn.value == "AC") {
    document.dentaku.display.value = "";
  } 
      
  //その他の値（AC,＝以外）を選択した場合の処理//
  else {
  //HTMLの値で、ボタンの値を表示する//
    document.dentaku.display.value += btn.value;
  }
      
}
