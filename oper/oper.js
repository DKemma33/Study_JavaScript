// == : 값만 비교, 문자열일 경우 자동으로 파싱된다, "1" == 1 == true
// === : 값과 타입 모두 비교  "1" === 1 == false

data1 = "1"
data2 = 1
console.log(data1 === data2)

// let data = undefined;
// 앞에 갚이 false값이면, 뒤에 있는 값이 들어간다.
// "", null, 0, undefined : false로 취급되는 값
// data = data || 10
// console.log(data)
// if(data){
//   console.log("value")
// }else{
//   console.log("undefined")
// }

// &&: 앞에가 false면 뒤로 넘어가지 않고, 앞에가 true면 뒤에 있는 값으로 대체된다.
// 예) true && 10 === 10
//     false && 10 === false

// check = true

// console.log(check && 10)

// 삼항 연산자
// 조건식 ? 참 : 거짓

// check = false
// console.log(check ? 10 : 20)