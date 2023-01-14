/*
100이하의 자연수 A, B, C를 입력받아 세 수 중 가장 작은 값을 출력하는 프로그램을 작성하 세요.(정렬을 사용하면 안됩니다)

▣ 입력설명
첫 번째 줄에 100이하의 세 자연수가 입력된다.

▣ 출력설명
첫 번째 줄에 가장 작은 수를 출력한다.

▣ 입력예제 1 6 5 11

▣ 출력예제 1 5
*/

const numArr = [6, 5, 11];

const mySolution = (numArr) => {
  return Math.min(...numArr);
};

const solution = (numArr) => {
  let result = 0;

  if (numArr[0] < numArr[1]) result = numArr[0];
  else result = numArr[1];
  if (numArr[2] < result) numArr[2];

  return result;
};

console.log("me", mySolution(numArr));
console.log("lecture", solution(numArr));
