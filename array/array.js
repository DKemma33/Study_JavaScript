let datas = [20, 5, 6, 12, 10];

// push(): 가장 마지막에 값 추가
datas.push(100);
console.log(datas);
console.log(datas[2]);

// join(): 전달한 값으로 구분한 뒤 문자열로 리턴
console.log(typeof [1, 2, 3, 4, 5].join(","));

// slice(begin, end): 원하는 부분을 추출하기 위해 시작 인덱스(inclusive)와 마지막 인덱스(exclusive)를 전달한다.
// slice(begin): 시작 인덱스부터 마지막까지 추출한다.
console.log(datas.slice(1, 3));
console.log(datas.slice(1));

// pop(): 마지막 요소를 삭제
datas.pop();
console.log(datas);

// shift(): 첫 번째 요소를 삭제
datas.shift();
console.log(datas);

// splice(인덱스, 개수) : 삭제
datas.splice(1, 1);
console.log(datas);

// splice(인덱스, 개수, ...args) : 교체
datas.splice(1, 1, 0);
console.log(datas);

// forEach(callback): 반복문
datas.forEach(function (data) {
  console.log(data);
});
datas.forEach((data) => console.log(data));
datas.forEach(console.log);

// 기존 datas Array에 있는 데이터를 제곱으로 변경!
datas.forEach((data, i, datas) => {
  datas[i] = data * data;
});

console.log(datas);

// indexOf(값): 값을 해당 Array에서 찾은 뒤 인덱스 번호 리턴, 못찾으면 -1 리턴
console.log(datas.indexOf(10));
console.log(datas.indexOf(100));

// map(callback): 기존 값을 원하는 값으로 변경하여 리턴
console.log(
  datas.map(function (data) {
    return data / 2;
  })
);


// filter(callback): callback의 리턴값이 true일 때에만 추출
console.log(datas);
console.log(
  datas.filter(function (data) {
    return data % 2 == 0;
  })
);


// 월~일까지 Array객체에 담은 후 출력

let days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

console.log(days.forEach);
// ----------------------------------------------------------------------------------
"월화수목금토일".split("").forEach((v) => {
  console.log(v);
});

const days = new Array();
days.push("월");

// const numbers = new Array(7);
// console.log(numbers);
// numbers[0] = 10;
// console.log(numbers);
// numbers.push(10);
// console.log(numbers);

// empty는 forEach 등에서 인식이 안되기 때문에
// 반드시 fill()로 초기화 후 사용한다!
const numbers = new Array(7).fill(0);
// numbers[3] = 10;
// console.log(numbers);
numbers.forEach(function (number, i, numbers) {
  numbers[i] = i + 1;
});
console.log(numbers);