// const, let等の変数う宣言
//var val1 = "var変数";
//console.log(val1);

// var変数は上書き可能
//val1 = "var変数を上書き";
//console.log(val1);

// var変数は際宣言可能
//var val1 = "var変数を際宣言";
//console.log(val1);

//let val2 = "let変数";
//console.log(val2);

// letは上書き可能
//val2 = "let変数を上書き";
//console.log(val2);

// letは再宣言不可
//let val2 = "let変数を際宣言";

//const val3 = "const宣言";
//console.log(val3);

// constは上書き不可
//val3 = "const変数を上書き";

//const val3 = "際宣言";


//const val4 = {
//    name: "Ageha",
//    age: 20,
//};
//
//val4.name = "Nana";

//console.log(val4);

//const val5 = ['dog', 'cat'];
//val5[0] = 'dag!';
//val5.push("monkey");

//console.log(val5);

//テンプレート文字列
const Name = "ageha";
const Age = 20;

//従来の方法
const message1 = "私の名前は" + Name + "です。年齢は" + Age + "です。";
console.log(message1);

//テンプレート文字列を用いた方法
const message2 = `私の名前は${Name}です。年齢は${Age}です。`;
console.log(message2);
