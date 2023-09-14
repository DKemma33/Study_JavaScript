// 제발 함수는 값으로 보자!!!!!!

data = 10
// 이름이 없는 함수를 익명 함수라고 부르고 이를 다른 저장공간에 담을 수 있다.
data = function(){console.log('함수 실행')}
data()

// ES6, 익명함수일 경우 function 키워드를 생략한 뒤 =>로 함수를 선언할 수 있는 문법
data = () => {console.log('Arrow Expression')}
data()

// 함수부분에는 함수가 전달되기 때문에
function add(number1, number2, 함수){
  // 사용 시 ()를 붙여서 사용해준다.
  // 필요하다면 매개변수를 전달해준다.
  함수(number1 + number2)
}

function print(result){
  console.log(result)
}

add(1, 3, (result) => {
  console.log(result)
})



