// 비동기식인 Promise객체로 리턴하고 싶은 경우
// async 키워드를 함수 선언부 앞에 붙여준다.
async function getName(){
  return "hds";
}

async function printName(){
  // async 함수를 동기식처럼 사용하기 위해서는
  // 함수 사용부 앞에 await 키워드를 붙여준다.
  // 이로써 Promise가 모든 업무를 수행한 뒤에 다음 로직이 실행되도록 해준다.
  // 단, await는 printName()과 같이, async 함수 안에서만 사용 가능하다.
  const name = await getName();
  console.log(name)
}

printName();