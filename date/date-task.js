function timeForToday(datetime) {
  const today = new Date();
  const date = new Date(datetime);
  // Math, Array 등 미리 만들어져있는 객체를 코어객체라고 한다.
  let gap = Math.floor((today.getTime() - date.getTime()) / 1000 / 60);

  if (gap < 1) {
    return "방금 전";
  }
  if (gap < 60) {
    return `${gap}분 전`;
  }

  gap = Math.floor(gap / 60);

  if (gap < 24) {
    return `${gap}시간 전`;
  }

  gap = Math.floor(gap / 24);

  if (gap < 32) {
    return `${gap}일 전`;
  }

  gap = Math.floor(gap / 31);
  if (gap < 13) {
    return `${gap}개월 전`;
  }

  return `${Math.floor(gap / 12)}년 전`;
}

console.log(timeForToday("2023-01-24 11:38:01"));