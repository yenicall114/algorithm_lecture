// 문1) 회문 문자열
/*
앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 회문 문자열이라고 합니다.
문자열이 입력되면 해당 문자열이 회문 문자열이면 "YES", 회문 문자열이 아니면 “NO"를 출력 하는 프로그램을 작성하세요.
단 회문을 검사할 때 대소문자를 구분하지 않습니다.
▣ 입력설명
첫 줄에 정수 길이 100을 넘지 않는 공백이 없는 문자열이 주어집니다.
▣ 출력설명
첫 번째 줄에 회문 문자열인지의 결과를 YES 또는 NO로 출력합니다.
▣ 입력예제 1 
gooG
▣ 출력예제 1 
YES

const mySolution = (str) => {
  return str.toLowerCase() === [...str.toLowerCase()].reverse().join("")
    ? "YES"
    : "NO";
};

const solution = (s) => {
  let answer = "YES";
  s = s.toLowerCase();
  let len = s.length;

  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (s[i] !== s[len - 1 - i]) return "NO";
    // if (s.split("").reverse().join("") !== s) return "NO";
  }

  return answer;
};

let str = "gooG";
console.log("me", mySolution(str));
console.log("lecture", solution(str));

// 문2) 유효한 팰린드롬
앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 팰린드롬이라고 합니다.
문자열이 입력되면 해당 문자열이 팰린드롬이면 "YES", 아니면 “NO"를 출력하는 프로그램을 작성하세요.
단 회문을 검사할 때 알파벳만 가지고 회문을 검사하며, 대소문자를 구분하지 않습니다. 알파벳 이외의 문자들의 무시합니다.
▣ 입력설명
첫 줄에 정수 길이 100을 넘지 않는 공백이 없는 문자열이 주어집니다.
▣ 출력설명
첫 번째 줄에 팰린드롬인지의 결과를 YES 또는 NO로 출력합니다.
▣ 입력예제 1
found7, time: study; Yduts; emit, 7Dnuof
▣ 출력예제 1
YES

const mySolution = (str) => {
  const result = str.replace(/[,:;7]/g, "").toLowerCase();
  return result.split("").reverse().join("") === result ? "YES" : "NO";
};

const solution = (s) => {
  let answer = "YES";

  s = s.toLowerCase().replace(/[^a-z]/g, "");
  if (s.split("").reverse().join("") !== s) return "NO";

  return answer;
};

let str = "found7, time: study; Yduts; Emit, 7Dnuof";
console.log("me", mySolution(str));
console.log("lecture", solution(str));

// 문3) 숫자만 추출
문자와 숫자가 섞여있는 문자열이 주어지면 그 중 숫자만 추출하여 그 순서대로 자연수를 만 듭니다.
만약 “tge0a1h205er”에서 숫자만 추출하면 0, 1, 2, 0, 5이고 이것을 자연수를 만들면 1205 이 됩니다.
추출하여 만들어지는 자연수는 100,000,000을 넘지 않습니다.
▣ 입력설명
첫 줄에 숫자가 썩인 문자열이 주어집니다. 문자열의 길이는 50을 넘지 않습니다.
▣ 출력설명
첫 줄에 자연수를 출력합니다.
▣ 입력예제 1 g0en2T0s8eSoft
▣ 출력예제 1 208

const mySolution = (str) => {
  let result = str.toLowerCase().replace(/[^0-9]/g, "");
  return +result;
};

const solution = (s) => {
  //   let answer = "";

  //   for (let x of s) {
  //     if (!isNaN(x)) answer += x;
  //   }

  //   return parseInt(answer);

  // 만약 시험에서 parseInt와 같은 메서드 쓰지 못할 경우
  let answer = 0;

  for (let x of s) {
    if (!isNaN(x)) answer = answer * 10 + Number(x);
  }
  // 0이 앞에 올 경우 0(=answer) * 10 = 0일때 숫자 0 을 더하여도 answer은 0
  // 2가 올 경우 0(=answer) * 10 = 0일때 숫자 2가 더하여져 answer는 2
  // 이후로 0 이상의 수 모두 더하여져 숫자로 return될 수 있다

  return answer;
};

let str = "g0en2T0s8eSoft";
console.log("me", mySolution(str));
console.log("lecture", solution(str));

// 문3) 가장 짧은 문자 거리
한 개의 문자열 s와 문자 t가 주어지면 문자열 s의 각 문자가 문자 t와 떨어진 최소거리를 출 력하는 프로그램을 작성하세요.
▣ 입력설명
첫 번째 줄에 문자열 s와 문자 t가 주어진다. 문자열과 문자는 소문자로만 주어집니다. 문자열의 길이는 100을 넘지 않는다.
▣ 출력설명
첫 번째 줄에 각 문자열 s의 각 문자가 문자 t와 떨어진 거리를 순서대로 출력한다.
▣ 입력예제 1 teachermode e
▣ 출력예제 1 10121012210
*/

const mySolution = (str, e) => {
  let arr1 = [];
  let arr2 = [];
  let num = 1000;

  const result = [];

  for (let x of str) {
    if (x === e) {
      num = 0;
      arr1.push(num);
    } else {
      num++;
      arr1.push(num);
    }
  }

  num = 1000;

  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === e) {
      num = 0;
      arr2.push(num);
    } else {
      num++;
      arr2.push(num);
    }
  }

  arr2.reverse();

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] < arr2[i] || arr1[i] === arr2[i]) result.push(arr1[i]);
    if (arr1[i] > arr2[i]) result.push(arr2[i]);
  }
  return result;
};

const solution = (s, t) => {
  let answer = [];
  let p = 1000;

  for (let x of s) {
    if (x === e) {
      p = 0;
      answer.push(p);
    } else {
      p++;
      answer.push(p);
    }
  }

  p = 1000;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === t) p = 0;
    else {
      p++;
      answer[i] = Math.min(answer[i], p);
    }
  }
  return answer;
};

let str = "teachermode";
let e = "e";
console.log("me", mySolution(str, e));
console.log("lecture", solution(str, e));

// 문4)
