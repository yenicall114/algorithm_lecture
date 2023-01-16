// 문1) 큰 수 출력하기
/*
N(1<=N<=100)개의 정수를 입력받아, 자신의 바로 앞 수보다 큰 수만 출력하는 프로그램을 작 성하세요.(첫 번째 수는 무조건 출력한다)
▣ 입력설명
첫 줄에 자연수 N이 주어지고, 그 다음 줄에 N개의 정수가 입력된다.
▣ 출력설명
자신의 바로 앞 수보다 큰 수만 한 줄로 출력한다.
▣ 입력예제 1 6
7 3 9 5 6 12
▣ 출력예제 1 
7 9 6 12

const mySolution = (arr) => {
  const result = [arr[0]];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i + 1]) result.push(arr[i + 1]);
  }
  return result;
};

const solution = (arr) => {
  let answer = [];
  answer.push(arr[0]);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) answer.push(arr[i]);
  }
  return answer;
};

let arr = [7, 3, 9, 5, 6, 12];
console.log("me", mySolution(arr));
console.log("lecture", solution(arr));

// 문2) 보이는 학생
선생님이 N(1<=N<=1000)명의 학생을 일렬로 세웠습니다. 일렬로 서 있는 학생의 키가 앞에 서부터 순서대로 주어질 때, 맨 앞에 서 있는 선생님이 볼 수 있는 학생의 수를 구하는 프로그 램을 작성하세요. (앞에 서 있는 사람들보다 크면 보이고, 작거나 같으면 보이지 않습니다.)
▣ 입력설명
첫 줄에 정수 N이 입력된다. 그 다음줄에 N명의 학생의 키가 앞에서부터 순서대로 주어진다.
▣ 출력설명
선생님이 볼 수 있는 최대학생수를 출력한다.
▣ 입력예제 1
8
130 135 148 140 145 150 150 153
▣ 출력예제 1
5

const mySolution = (arr) => {
  const result = [arr[0]];
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      result.push(arr[i]);
      max = arr[i];
    }
  }
  return result.length;
};

const solution = (arr) => {
  let answer = 1,
    max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      answer++;
      max = arr[i];
    }
  }
  return answer;
};

let arr = [130, 135, 148, 140, 145, 150, 150, 153];
console.log("me", mySolution(arr));
console.log("lecture", solution(arr));

// 문3) 가위바위보
A, B 두 사람이 가위바위보 게임을 합니다. 총 N번의 게임을 하여 A가 이기면 A를 출력하고, B가 이기면 B를 출력합니다. 비길 경우에는 D를 출력합니다.
가위, 바위, 보의 정보는 1:가위, 2:바위, 3:보로 정하겠습니다.
예를 들어 N=5이면
두 사람의 각 회의 가위, 바위, 보 정보가 주어지면 각 회를 누가 이겼는지 출력하는 프로그램 을 작성하세요.
▣ 입력설명
첫 번째 줄에 게임 횟수인 자연수 N(1<=N<=100)이 주어집니다. 두 번째 줄에는 A가 낸 가위, 바위, 보 정보가 N개 주어집니다. 세 번째 줄에는 B가 낸 가위, 바위, 보 정보가 N개 주어집니다.
▣ 출력설명
각 줄에 각 회의 승자를 출력합니다. 비겼을 경우는 D를 출력합니다.
▣ 입력예제 1 
5
23313
11223
▣ 출력예제 1 
A
B
A
B
D
*/

const mySolution = (arr, arr2) => {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] === 2 && arr2[i] === 1) || (arr[i] === 3 && arr2[i] === 2))
      result.push("A");
    if ((arr[i] === 3 && arr2[i] === 1) || (arr[i] === 1 && arr2[i] === 2))
      result.push("B");
    if (arr[i] === arr2[i]) result.push("D");
  }

  return result.join(" ");
};

const solution = (arr) => {
  let answer = "";

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr2[i]) answer += "D" + " ";
    else if (arr[i] === 1 && arr2[i] === 3) answer += "A" + " ";
    else if (arr[i] === 2 && arr2[i] === 1) answer += "A" + " ";
    else if (arr[i] === 3 && arr2[i] === 2) answer += "A" + " ";
    else answer += "B" + " ";
  }

  return answer;
};

let arr = [2, 3, 3, 1, 3];
let arr2 = [1, 1, 2, 2, 3];
console.log("me", mySolution(arr, arr2));
console.log("lecture", solution(arr, arr2));

// 문4)
// 문5)
// 문6)
// 문7)
