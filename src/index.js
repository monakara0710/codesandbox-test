/**
 * const let等の変数宣言
 */

// // var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "上書き";
// console.log(val1);

// // var1変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);
// val2 = "let変数を上書き";

// console.log(val2)
// let val2 = "再宣言";

// const val3 = "const変数";
// console.log(val3);

// // val3 = "hogehoge";

// // const val3 = "const変数を再宣言";

// // constのオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "hoge",
//   age: 28
// };

// console.log(val4);

// val4.name = "jak";
// console.log(val4);

// // constの配列はプロパティの変更が可能
// const val5 = ["dog", "cat"];
// console.log(val5);
// val5[0] = "bard";
// console.log(val5);

// /**
//  * テンプレート文字列に関して
//  */
// const name = "hoge";
// const age = 35;
// // 「私の名前はhogeです。年齢は３５です」
// // 従来のやり方
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// // テンプレート文字列を用いたやり方
// // const message2 = `私の名前は${name}です。年齢は${age}です。`;

// /**
//  * アロー関数
//  */
// // 従来の関数
// function func1(str) {
//   return str;
// }

// console.log(func1("func1です"));

// // アロー関数
// const func2 = (str) => str;
// console.log(func2("hoge"));

// const func3 = (num1,num2) => {
//   return num1 + num2;
// };
// console.log(func3(10,30));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "ジャケえ",
//   age: 28
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です`;
// console.log(message1);

// const myProfile = ['hoge',35];
// const message3 = `名前は${myProfile[0]}寝です。年齢は${myProfile[1]}です`;
// console.log(message3);

// const[name,age] = myProfile;
// const message4 = `名前は${name}寝です。年齢は${age}です`;
// console.log(message4);

/**
 * デフォルト値,引数など
 */

//  const sayHello = (name = "mutou") => console.log(`こんにちは${name}さん`);
//  sayHello("むとう");

/**
 * スプレッド構文 ...
 */

// 配列の展開

// const arr1 = [1,2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1,num2) => console.log(num1 + num2);
// sumFunc(arr1[0],arr1[1]);
// sumFunc(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピー、結合
const arr4 = [10, 20];
const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);
// const arr8 = arr4;
// console.log(arr8);
// arr8[0] = 100;
// console.log(arr8);
// console.log(arr4);

/**
 *  mapやfilterを使った配列の処理
 *
 */
const nameArr = ["田中", "山田", "じゃけえ"];

// for (let index = 0; index <nameArr.length; index++){
//   console.log(nameArr[index]);
// }

// const nameArr2 = nameArr.map((name)=>{
//   return name == "田中";
// })

// console.log(nameArr2);
// nameArr.map((name, index) => console.log(`${index + 1}は${name}です`));

// const numArr = [1, 2, 3, 4, 5];
// const neNumArr = numArr.filter((num) => {
//   return num % 2 === 0;
// });
// console.log(neNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "じゃけえ") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

/**
 * 三項演算子
 */

// const val1 = 1 > 0 ? "true" : "false";
// console.log(val1);

// const num = "hoge";
// console.log(num.toLocaleString());

// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
// console.log(formattedNum);

const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "100を超えています" : "許容範囲内です";
};

console.log(checkSum(1, 100));

/**
 * 論理演算しの本当の意味を知ろう
 */

const flag1 = true;
const flag2 = false;

if (flag1 || flag2) {
  console.log("1か2はtrue");
}

if (flag1 && flag2) {
  console.log("1と2はtrue");
}

// const num = 100;
// const fee = num || "金額未設定です";
// console.log(fee);

const num = 100;
const fee = num && "設定されています";
console.log(fee);
