// 이행, 거절, 대기, 3가지 상태를 가지고 있다.
// 대기 -> 성공 -> 이행
// 대기 -> 실패 -> 거절

const DB = [];

function saveDB(user){
  let beforeLength = DB.length;
  let afterLength = DB.push(user);
  return new Promise((resolve, reject) => {
    
    setTimeout(() => {
      if(beforeLength < afterLength){
        console.log(`save ${user.name} to DB`);
        resolve(user);
      }else {
        reject(new Error("saveDB() error"));
      }
    }, 3000);
  });
}

function sendEmail(user){
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`email to ${user.email}`);
      resolve(user);
    }, 2000)
  });
}

function getResult(user){
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("done");
      resolve(`success register ${user.name}`);
    }, 1000)
  });
}

function register(user){
  // const result = saveDB(user).then(sendEmail).then(getResult);
  // Promise.all([])은 여러 개의 Promise 객체를 비동기 형태로 실행하기 때문에 시간을 단축시킬 수 있다.
  // 순서가 필요 없는 Promise 객체들은 Promise.all()을 활용해야 한다.
  const resultAsync = Promise.all([
    saveDB(user),
    sendEmail(user),
    getResult(user)
  ]);
  console.log(resultAsync);
  return resultAsync;
}

const result = register({
  email: "tedhan1204@gmail.com",
  password: "1234",
  name: "hds"
});

result.then(console.log)



//================================================================================================



// async function request(){
//   return fetch("https://jsonplaceholder.typicode.com/users");
// }

// async function printZipcode(){
//   const response = await request();
//   const users = await response.json();
//   const zipcodes = users.map((user) => user.address.zipcode)
//   console.log(zipcodes);
// }

// printZipcode()