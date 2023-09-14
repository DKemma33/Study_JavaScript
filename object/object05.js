// 프로토타입으로 설계한다.

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
function User(name, age, point){
  this.name = name;
  this.age = age;
  this.point = point;
}

let mart = new Object();

han = new User("홍길동", 30, 3500);
lee = new User("이순신", 22, 0);
jang = new User("장보고", 66, 9500);

mart.han = han
mart.lee = lee
mart.jang = jang

console.log(mart);