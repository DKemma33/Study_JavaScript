// 마트에 등록되지 않은 고객이 3명이다.
// 고객별 정보는 다음과 같다.

// 1)
// 이름: 홍길동
// 나이: 30
// 포인트: 3500

// 2)
// 이름: 이순신
// 나이: 22
// 포인트: 0

// 3)
// 이름: 장보고
// 나이: 66
// 포인트: 9500

// 3명을 모두 마트에 등록 시킨다.
// 마트 객체를 만들고 각 고객을 프로퍼티로 선언한다.
let mart = new Object();
console.log(mart)

let customer1 = {
  name: "홍길동",
  age: 30,
  point: 0
}

mart.customer1 = customer1

console.log(mart.customer1)
let customer2 = {
  name: "이순신",
  age: 22,
  point: 0
}

mart.customer2 = customer2

let customer3 = {
  name: "장보고",
  age: 66,
  point: 9500
}

mart.customer3 = customer3

console.log(mart)




let Sweden = new Object();

let person = {
  name : "장동혁",
  age  : 28
}

Sweden.person = person 
console.log(Sweden)

