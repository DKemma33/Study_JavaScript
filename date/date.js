// Date객체
// var 객체명 = new Date();

// Date객체의 주요 메소드
// getFullYear(): 4자리 년도
// getMonth(): 0~11사이의 정수(0: 1월, 1: 2월, ..., 11: 12월)
// getDate(): 한 달 내의 날짜(28~31)
// getDay(): 한 주 내 요일(0: 일요일, 1: 월요일, ..., 6: 토요일)
// getHours(): 0~23사이의 정수
// getMinutes(): 0~59사이의 정수
// getSeconds(): 0~59사이의 정수
// getMilliseconds(): 0~999사이의 정수
// getTime(): 1970년 1월 1일 0시 0분 0초 기준 현재까지의 밀리초
// setFullYear(year): 년도 저장
// setMonth(month): 월 저장
// setDate(date): 한 달 내의 날짜 값 지정
// setHours(hour): 시간 저장
// setMinutes(minute): 분 저장
// setSeconds(second): 초 저장
// setMilliseconds(ms): 밀리초 저장
// setTime(t): 밀리초 단위인 t값으로 시간 저장

// let now = new Date("2023-07-24T10:00:00Z");
// let now = new Date();
// now.setFullYear(2023);
// // Month는 0부터 시작한다.
// now.setMonth(6);
// now.setDate(24);
// now.setHours(10);
// now.setMinutes(30);
// now.setSeconds(0);
// // 세팅된 값을 그대로 가져온다(UTC 신경 X)
// console.log(now.getHours());
// // 기본 now객체는 UTC 시간이다.
// console.log(now.toUTCString());
// // 현재 운영체제에 등록된 로컬 시간은 toLocaleString()으로 확인한다.
// console.log(now.toLocaleString());


let date1 = new Date(); 
// -> Thu May 19 2022 18:11:13 GMT+0900 (한국 표준시)

let date2 = new Date(2022, 5, 19, 21, 0, 50, 10); 
// -> Sun Jun 19 2022 21:00:50 GMT+0900 (한국 표준시)

let date3 = new Date('2022-05-20');
// -> Fri May 20 2022 09:00:00 GMT+0900 (한국 표준시)

let date4 = new Date('2022-05-20 10:30:20');
// -> Fri May 20 2022 10:30:20 GMT+0900 (한국 표준시)

let date5 = new Date('2022-5-20 10:30:20');
// -> Fri May 20 2022 10:30:20 GMT+0900 (한국 표준시)

let date6 = new Date('1 2022-05-20 10:30:20');
// -> InValid Date

let date7 = new Date('fdskjksdlfjklsdf 2022-05-20 10:30:20');
// -> Fri May 20 2022 10:30:20 GMT+0900 (한국 표준시)

let date8 = new Date('2022.05.20 10:30:20');
// -> Fri May 20 2022 10:30:20 GMT+0900 (한국 표준시)

let date9 = new Date('May 20, 2022 10:30:20');
// -> Fri May 20 2022 10:30:20 GMT+0900 (한국 표준시)

let date10 = new Date(1653091200000);
// -> Sat May 21 2022 09:00:00 GMT+0900 (한국 표준시)