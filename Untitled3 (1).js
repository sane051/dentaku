// 合計値
let Total = 0;
// 入力している値
let Input = "";	
// 合計と入力値の演算子
let Calc = "+";	
// １回前に入力したもの 0:数字 1:演算子
let Flg = 1;
//. 一連の計算式
let Work = Total + Calc + Input;

let setresult;




// 0～9ボタンを押す
function edit(data){	
  Flg = 0;
  // 数字を選択したら、入力している値に追加
  Input += data;	
  document.dentaku.display.value = Input;	
 
if (Input ==="0"){
  Input = "";
  
}
}


// 演算子を押す
function Calculate(data){	
  // １回前に入力が数値であるかどうかで変わる
  if (Flg==0){
  // １回前に入力したものが演算子
  Flg = 1;	
  //合計の値と入力している数字を足す
  Work = Total + Calc + Input;
  Total = eval(Work);	
  // 現在入力している値をクリア
  Input = "";	
  document.dentaku.display.value = Total;	
}	




// 演算子が＝のときは、合計値、合計と入力の演算子をクリアし、それ以外は、演算子で入力された値で出力。
if (data == "="){	
  Total = 0;	
  Calc = "+";	
}
else{	
  Calc = data;	
}	
}	



// クリアボタン[AC]を押した時の処理
function AC(){	
  Total = 0;	
  Calc = "+";
  Input = "";
  document.dentaku.display.value = Total;	
}


