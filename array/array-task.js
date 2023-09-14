// // 1~10까지 Array객체에 담은 후 짝수만 출력
// let numbers = new Array(10).fill(1).map((number, i) => number + i).forEach((number) => {if(number % 2 == 0){
//   console.log(number);
// }} )
// console.log(numbers);

// let names = new Array(30).fill('장동혁').map((name, i) => name + (i + 1) );
// console.log(names);

// // 한글을 숫자로

// // 숫자를 한글로

// // 1~100까지 합 출력


// ===================================================================
// 1~10까지 Array객체에 담은 후 짝수만 출력
// let datas = new Array(10).fill(0);
// datas 변수에 -> Array 객체에10을 담아주면 10칸의 리스트값이 생긴다 
// .fill(0) 메서드로 10개의 empty item 에 0 값을 넣어주면 10개의 빈칸이 0이  10 개인 리스트로 바뀐다

// datas.forEach((v, i, ar) => {
//   ar[i] = i + 1;
// });
// // datas.객체를 통해 forEach 메서드를 사용 v 벨류값과, i ,에 callback함수를 넣어준다
// // callback 함수 ar 의[i] 번째에 방을 변수(저장공간)에 i + 1 
// let datas = new Array(10).fill(0);
// datas = datas.map((data, i) => i + 1);
// datas.forEach((data) => {
//   if (data % 2 == 0) {
//     console.log(data);
//   }
// });


// console.log(datas.filter((data) => data % 2 == 0));

// 한글을 숫자로
const korean = "공일이삼사오육칠팔구".split("");
const input = "일공이사".split("");
console.log(parseInt(input.map((c) => korean.indexOf(c)).join("")));

// 숫자를 한글로
// const korean = "공일이삼사오육칠팔구";
// let input = "1024".split("");
// console.log(input.map((num) => korean[num]).join(""));

// let result = "";

// while (input != 0) {
//   result = korean[input % 10] + result;
//   input = parseInt(input / 10);
// }

// console.log(result);

// // 1~100까지 합 출력
// const datas = new Array(100).fill().map((v, i) => i + 1);
// let result = 0;
// const total = datas.reduce((x, y) => x + y);
// console.log(total);
// datas.forEach((v) => (result += v));
// console.log(result);