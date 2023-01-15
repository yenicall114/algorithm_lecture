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


/*
문제03) 연필 개수
연필 1 다스는 12자루입니다. 학생 1인당 연필을 1자루씩 나누어 준다고 할 때 N명이 학생수 를 입력하면 필요한 연필의 다스 수를 계산하는 프로그램을 작성하세요.
▣ 입력설명
첫 번째 줄에 1000 이하의 자연수 N이 입력된다.
▣ 출력설명
첫 번째 줄에 필요한 다스 수를 출력합니다.
▣ 입력예제 1 25
▣ 출력예제 1 3
▣ 입력예제 2 178
▣ 출력예제 2 15

const mySolution = (n) => {
  return Number.isInteger(n / 12) ? n / 12 : Math.ceil(n / 12);
};

const solution = (n) => {
  let answer = Math.ceil(n / 12);
  return answer;
};

// 엥 나 바보냐

console.log("me", mySolution(25));
console.log("lecture", solution(24));


/*
4) 
자연수 N이 입력되면 1부터 N까지의 합을 출력하는 프로그램을 작성하세요.
▣ 입력설명
첫 번째 줄에 20이하의 자연수 N이 입력된다..
▣ 출력설명
첫 번째 줄에 1부터 N까지의 합을 출력한다.
▣ 입력예제 1 6
▣ 출력예제 1 21
▣ 입력예제 2 10
▣ 출력예제 2 55
[자바스크립트 알고리즘 문제풀이]
1부터 N까지 합 출력하기

const mySolution = (n) => {
  return Array.from({ length: n }, (v, i) => i + 1).reduce((a, c) => a + c);
};

const solution = (n) => {
  let answer = 0;
  for (let i = 1; i <= n; i++) answer += i;
  return answer;
};

console.log("me", mySolution(10));
console.log("lecture", solution(6));

5) 최솟값 구하기
7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력하는 프로그램을 작성하세요.
▣ 입력설명
첫 번째 줄에 7개의 수가 주어진다.
▣ 출력설명
첫 번째 줄에 가장 작은 값을 출력한다.
▣ 입력예제 1
5 3 7 11 2 15 17
▣ 출력예제 1 2

const mySolution = (arr) => {
  return Math.min(...arr);
};

const solution = (n) => {
  let answer,
    min = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
  }
  answer = min;
  return answer;
};

let arr = [5, 7, 1, 3, 2, 9, 11];
console.log("me", mySolution(arr));
console.log("lecture", solution(arr));


6) 홀수
7개의 자연수가 주어질 때, 이들 중 홀수인 자연수들을 모두 골라 그 합을 구하고, 고른 홀수들 중 최소값을 찾는 프로그램을 작성하세요.
예를 들어, 7개의 자연수 12, 77, 38, 41, 53, 92, 85가 주어지면 이들 중 홀수는 77, 41, 53, 85이므로 그 합은
77 + 41 + 53 + 85 = 256 이 되고,
41 < 53 < 77 < 85 이므로 홀수들 중 최소값은 41이 된다.
▣ 입력설명
첫 번째 줄에 자연수 7개가 주어진다. 주어지는 자연수는 100보다 작다. 홀수가 한 개 이상 반드시 존재한다.
▣ 출력설명
첫째 줄에 홀수들의 합을 출력하고, 둘째 줄에 홀수들 중 최소값을 출력한다.
▣ 입력예제 1
12 77 38 41 53 92 85
▣ 출력예제 1 
256
41

const mySolution = (arr) => {
  const result = [];

  const odd = arr.filter((el) => el % 2 === 1);
  const min = Math.min(...odd);

  result.push(odd.reduce((a, c) => a + c));
  result.push(min);

  return result;
};

const solution = (n) => {
  let answer = [];
  let sum = 0,
    min = Number.MAX_SAFE_INTEGER;

  for (x of arr) {
    if (x % 2 == 1) {
      sum += x;
      if (x < min) min = x;
    }
  }

  answer.push(sum);
  answer.push(min);

  return answer;
};

let arr = [12, 77, 38, 41, 53, 92, 85];
console.log("me", mySolution(arr));
console.log("lecture", solution(arr));

문제7) 10부제
서울시는 6월 1일부터 교통 혼잡을 막기 위해서 자동차 10부제를 시행한다. 자동차 10부제는 자동차 번호의 일의 자리 숫자와 날짜의 일의 자리 숫자가 일치하면 해당 자동차의 운행을 금 지하는 것이다. 예를 들어, 자동차 번호의 일의 자리 숫자가 7이면 7일, 17일, 27일에 운행하 지 못한다. 또한, 자동차 번호의 일의 자리 숫자가 0이면 10일, 20일, 30일에 운행하지 못한 다.
여러분들은 일일 경찰관이 되어 10부제를 위반하는 자동차의 대수를 세는 봉사활동을 하려고 한다. 날짜의 일의 자리 숫자가 주어지고 7대의 자동차 번호의 끝 두 자리 수가 주어졌을 때 위반하는 자동차의 대수를 출력하는 프로그램을 작성하세요.

▣ 입력설명
첫 줄에는 날짜의 일의 자리 숫자가 주어지고 두 번째 줄에는 7대의 자동차 번호의 끝 두 자 리 숫자가 주어진다.

▣ 출력설명
주어진 날짜와 자동차의 일의 자리 숫자를 보고 10부제를 위반하는 차량의 대수를 출력합니 다.

▣ 입력예제 1
3
25 23 11 47 53 17 33

▣ 출력예제 1 
3

▣ 입력예제 2
0
12 20 54 30 87 91 30

▣ 출력예제 2 
3

const mySolution = (arr, n) => {
  let count = 0;
  const str = arr.join(" ").split("");
  const num = str.map(Number);

  if (num[1] === n) count++;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === " " && num[i + 2] === n) count++;
  }

  return count;
};

const solution = (arr, n) => {
  let answer = 0;

  for (x of arr) {
    if (x % 10 === n) answer++;
  }

  return answer;
};

let arr = [12, 20, 54, 30, 87, 91, 30];
let n = 0;
console.log("me", mySolution(arr, n));
console.log("lecture", solution(arr, n));

문8) 일곱난쟁이
왕비를 피해 일곱 난쟁이들과 함께 평화롭게 생활하고 있던 백설공주에게 위기가 찾아왔다. 일과를 마치고 돌아온 난쟁이가 일곱 명이 아닌 아홉 명이었던 것이다.
아홉 명의 난쟁이는 모두 자신이 "백설 공주와 일곱 난쟁이"의 주인공이라고 주장했다. 뛰어난 수학적 직관력을 가지고 있던 백설공주는, 다행스럽게도 일곱 난쟁이의 키의 합이 100이 됨을 기억해 냈다.
아홉 난쟁이의 키가 주어졌을 때, 백설공주를 도와 일곱 난쟁이를 찾는 프로그램을 작성하시 오.
▣ 입력설명
아홉 개의 줄에 걸쳐 난쟁이들의 키가 주어진다. 주어지는 키는 100을 넘지 않는 자연수이며, 아홉 난쟁이의 키는 모두 다르며, 가능한 정답이 여러 가지인 경우에는 아무거나 출력한다.
▣ 출력설명
입력된 순서대로 일곱 난쟁이의 키를 출력한다.
▣ 입력예제 1
20 7 23 19 10 15 25 8 13
▣ 출력예제 1
20 7 23 19 10 8 13

const mySolution = (arr) => {
  let num = [];
  const sum = arr.reduce((a, c) => a + c);

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (sum - (arr[i] + arr[j]) === 100) {
        num.push(arr[i]);
        num.push(arr[j]);
      }
    }
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < num.length; j++) {
      if (arr[i] === num[j]) arr.splice(i, 1);
    }
  }

  return arr;
};

const solution = (arr) => {
  let answer = arr;

  let sum = arr.reduce((a, b) => a + b, 0);

  for (let i = 0; i < 8; i++) {
    for (let j = i + 1; j < 9; j++) {
      if (sum - (arr[i] + arr[j]) === 100) {
        arr.splice(i, 1);
        arr.splice(j, 1);
      }
    }
  }

  return answer;
};

let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log("me", mySolution(arr));
console.log("lecture", solution(arr));

문제9) A를 #으로
대문자로 이루어진 영어단어가 입력되면 단어에 포함된 ‘A'를 모두 ’#‘으로 바꾸어 출력하는 프로그램을 작성하세요.
▣ 입력설명
첫 번째 줄에 문자열이 입력된다.
▣ 출력설명
첫 번째 줄에 바뀐 단어를 출력한다.
▣ 입력예제 1 BANANA
▣ 출력예제 1 B#N#N#

const mySolution = (str) => {
  let arr = str.split("");

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "A") arr.splice(i, 1, "#");
  }

  return arr.join("");
};

const solution = (str) => {
  // let answer = "";

  // for (let x of str) {
  //   if (x === "A") answer += "#";
  //   else answer += x;
  // }

  // return answer;

  let answer = str;

  answer = answer.replace(/A/g, "#");

  return answer;
};

let str = "BANANA";
console.log("me", mySolution(str));
console.log("lecture", solution(str));

문제10) 문자 찾기
한 개의 문자열을 입력받고, 특정 문자를 입력받아 해당 특정문자가 입력받은 문자열에 몇 개 존재하는지 알아내는 프로그램을 작성하세요.
문자열의 길이는 100을 넘지 않습니다.
▣ 입력설명
첫 줄에 문자열이 주어지고, 두 번째 줄에 문자가 주어진다.
▣ 출력설명
첫 줄에 해당 문자의 개수를 출력한다.
▣ 입력예제 1 
COMPUTERPROGRAMMING R
▣ 출력예제 1 
3
*/

const mySolution = (str, n) => {
  let count = 0;

  for (let x of str) {
    if (x === n) count++;
  }

  return count;
};

const solution = (s, t) => {
  let answer = s.split(t).length;
  return answer - 1;
};

let str = "COMPUTERPROGRAMMING";
let n = "R";
console.log("me", mySolution(str, n));
console.log("lecture", solution(str, n));
