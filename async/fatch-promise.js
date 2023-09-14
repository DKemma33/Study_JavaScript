// https://jsonplaceholder.typicode.com/users를 fetch로 요청하여
// zipcode만 추출하기


// fatch로 https://jsonplaceholder.typicode.com/users를 요청
fetch("https://jsonplaceholder.typicode.com/users")
// .then 을 사용하여 가져온 정보를 response에 담아준다
.then((response) => {
// 만약 response 비동기화 (ok가 아닐때) throw (exception) 에러를 발생시키도록 한다 
// 에러 객체에 `` 를 사용하여 메세지를 넣어주었다 response : ${response.의 상태가 
// reject(catch 메소드에 있는 콜백함수 error를 실행시킨다)}
// response가 ok 일때는 return response를 json형식으로 가져온다
  if(!response.ok){
    throw new Error(`response: ${response.status}`)
  }
  return response.json();
})

// .then은 위 respons(Promise)의 비동기 작업이 resolve일때 사용한다 
// users 매개변수로 정하고 => 만약(users의 정보가 없거나|| users의 length가 0일때)
// 예외처리(throw) new Error 새로운 에러객체를 생성한다 
// user의 정보가 있을때 return users를 map메서드로 user의 i번째 방[인덱스]에 있는 정보를 가져온다
// {다시 users의 user의 address의 zipcode를 불러오는 콜백 함수를 만든다 }
.then((users) => {
  if(!users || users.length == 0){
    throw new Error("none result");
  }
  return users.map((user, i) => {
    return user.address.zipcode;
  })
// resolve일 경우 .then(console.log로 가져온 값을 출력한다)
})
.then(console.log)
// reject 된 경우 .catch메서드(비동기 작업 오류)로 콜백함수(error를 출력한다)
.catch((error) => {
  console.log(error);
  console.log("error");
});


fetch("https://jsonplaceholder.typicode.com/users")
// .then((response) => {
//   if (!response.ok) {
//     throw new Error(`response: ${response.status}`);
//   }
//   return response.json();
// })
// .then((users) => {
//   if (!users || users.length === 0) {
//     throw new Error(`none result`);
//   }
//   // 수정이 필요한 부분
//   return users.map(user[i]);
// })
// .then(console.log)
// // 삭제된 부분: .catch() 메서드는 마지막에 한 번만 사용되어야 함
// .catch((error) => {
//   console.log(error); // 오류 처리
//   console.log("error");
// });

