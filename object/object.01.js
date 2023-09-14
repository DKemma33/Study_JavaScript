let user = {
  name: "한동석",
  age: 20,
  address: "경기도" ,
  introduce: () => {console.log("안녕하세요.")}
}

console.log(user)
user.introduce()
// .로 직접 접근할 수도 있고, 만약 KEY값의 규칙성이 필요하다면 [""]문법을 사용하여 접근한다.
console.log(user.name, user["name"]);