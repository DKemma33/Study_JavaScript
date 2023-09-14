// 이행, 거절, 대기, 3가지 상태를 가지고 있다.
// 대기 -> 성공 -> 이행
// 대기 -> 실패 -> 거절

// const DB = [];

// function saveDB(user){
//   let beforeLength = DB.length;
//   let afterLength = DB.push(user);
//   console.log(`save ${user.name} to DB`);
//   return new Promise((resolve, reject) => {
//     if(beforeLength < afterLength){
//       resolve(user);
//     }else {
//       reject(new Error("saveDB() error"));
//     }
    
//   });
// }

// function sendEmail(user){
//   console.log(`email to ${user.email}`);
//   return new Promise((resolve) => {
//     resolve(user);
//   });
// }

// function getResult(user){
//   return new Promise((resolve) => {
//     resolve(`success register ${user.name}`);
//   });
// }

// function register(user){
//   const result = saveDB(user).then(sendEmail).then(getResult);
//   console.log(result);
//   return result;
// }

// const result = register({
//   email: "tedhan1204@gmail.com",
//   password: "1234",
//   name: "hds"
// });

// result.then(console.log)


console.log(1);
console.log(2);
console.log();
setTimeout(function(){console.log(3)}, 5000);
console.log(4);
