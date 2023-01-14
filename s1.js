/*
1. 세 수 중 최솟값
100이하의 자연수 A, B, C를 입력받아 세 수 중 가장 작은 값을 출력하는 프로그램을 작성하 세요.(정렬을 사용하면 안됩니다)

▣ 입력설명
첫 번째 줄에 100이하의 세 자연수가 입력된다.

▣ 출력설명
첫 번째 줄에 가장 작은 수를 출력한다.

▣ 입력예제 1 6 5 11

▣ 출력예제 1 5

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
*/

/*
2. 삼각형 판별하기
길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어지면 이 세 막대로 삼각형을 만들 수 있 으면 “YES"를 출력하고, 만들 수 없으면 ”NO"를 출력한다.
▣ 입력설명
첫 번째 줄에 100이하의 서로 다른 A, B, C 막대의 길이가 주어진다.
▣ 출력설명
첫 번째 줄에 “YES", "NO"를 출력한다.
▣ 입력예제 1 6 7 11
▣ 출력예제 1 YES
▣ 입력예제 1 13 33 17
▣ 출력예제 1 NO
*/

const mySolution = (a, b, c) => {
  const square = [a, b, c].sort((a, b) => a - b);
  return square[0] + square[1] > square[2] ? "YES" : "NO";
};

const solution = (a, b, c) => {
  let answer = "YES",
    max;
  let sum = a + b + c;

  if (a > b) max = a;
  else max = b;
  if (max < c) max = c;
  if (sum - max <= max) answer = "NO";

  return answer;
};

console.log("me", mySolution(6, 7, 11));
console.log("lecture", solution(13, 33, 17));
