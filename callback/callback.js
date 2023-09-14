// function add(number1, number2, callback){
//   // total = number1 + number2
//   if(callback){
//     callback(number1 + number2)
//   }  
//   // return total
// }

// function printTotal(total){
//   console.log(total)
// }

// add(1, 2, printTotal)

// // console.log(add(1, 2))
// // printTotal(add(1, 2))


// // 두 정수의 덧셈 결과 출력
// function add(num1, num2, callback){
//   if(callback){
//     callback(num1 + num2)
//   }
//   return num1 + num2
// }

// function printTotal(result){
//   console.log(result)
// }

// add(1, 2, printTotal)

// 두 정수의 곱셈을 구한 뒤 결과에 2를 곱해서 출력
// function mul(num1, num2, callback){
//   if(callback){
//     callback(num1 * num2) 
//   }
//   return num1*num2
// }
 
// function mul2(result){
//   console.log(result * 2)
// }

// mul(2,3,mul2)
// console.log(mul(2,3))

// mul(3, 4, function(result) {console.log(result * 2)})

// 성과 이름을 전달받아서 풀네임을 만든 뒤 "000님" 출력

// function fileName(lastName, firstName, callback){
//   if (callback){
//     callback(lastName + firstName)
//   }
//   return lastName + firstName
// }


// fileName("장","동혁", function(name) {console.log(`${name}님`)})
// fileName("장","동혁", name => {console.log(`${name}님`)})


// 상품 가격과 총 합을 입력받고 개수를 알아낸뒤 
// 개수가 5개 이하라면  true 아니면 false

// function getCount(price, totalPrice, callback){
//   if (callback){
//     callback(totalPrice / price)
//   }
//   return totalPrice / price
// }

// function lessThanFive(count){
//   console.log(count <= 5)
// }

// getCount(500, 5000, lessThanFive)

// 결제 상품 이름과, 결제 상태를 전달받아서
// 결제 상태가 true일 경우 결제 완료, false일 경우 결제 취소 출력

// function products(productName, payment, callback){
//   result = payment ? "결제 완료" : "결제 취소"
  // let result;
  // if(payment){
  //   result = "결제완료"
  // } else {
  //   result = "결제취소"
  // }
//   if (callback){
//     callback(productName, result);
//   }
// }

// function paid(productName, result){
//   console.log(`${productName}: ${result}`);
// }

// products("감자", false, paid)

function buy(product, payment, callback){
  result = payment ? "입금완료" : "입금 안되셨어요"
  if (callback){
    callback(product, result)
  }
}

function getproduct(product, result){
   goHome = result === "입금완료" ? "잘 사세요." : "그냥 가세요."
   console.log(`${product} ${result}입니다. ${goHome}`);
}

buy("집", false, getproduct)