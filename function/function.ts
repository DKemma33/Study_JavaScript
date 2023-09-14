
// npm install typescript --save-dev
// npm install -g typescript
// npm install -g ts-node @types/node
// npx tsc
// Set-ExecutionPolicy Unrestricted
// tsc --init

// tsc 파일명.ts
// node 파일명.js

function add(num1: number, num2: number): number{
  return num1 + num2;
}

let result: number = add(1, 2)
console.log(result)

// 디폴트 파라미터
// 값이 전달되지 않았을 경우 초기값을 설정할 수 있다.

// function add(num1, num2, num3 = 0){
//   return num1 + num2 + num3
// }

// result = add(1, 3)
// console.log(result)

// 아이디, 비밀번호, 닉네임을 전달받되, 닉네임은 기본 값을 '없음'으로 설정한다.
// function getInfo(id, password, nickname = '없음'){
//   console.log(id, password, nickname)
// }

// getInfo('hds1234', '1234')
// getInfo('hds1234', '1234', '엄지')

// 가변인자
// function add(...args) {
//   for(let i in args){
//     console.log(`index: ${i}`)
//   }

//   for(let i of args){
//     console.log(`value: ${i}`)
//   }
// }

// add(5, 4, 3, 2, 1)

// function info(...infos){
//   console.log(`이름: ${infos[0]}`)
//   console.log(`나이: ${infos[1]}살`)
// }

// info("한동석", 20)