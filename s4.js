// 문제1)자릿수의합
/*
N개의 자연수가 입력되면 각 자연수의 자릿수의 합을 구하고, 그 합이 최대인 자연수를 출력 하는 프로그램을 작성하세요. 자릿수의 합이 같은 경우 원래 숫자가 큰 숫자를 답으로 합니다. 만약 235 와 1234가 동시에 답이 될 수 있다면 1234를 답으로 출력해야 합니다.
▣ 입력설명
첫 줄에 자연수의 개수 N(3<=N<=100)이 주어지고, 그 다음 줄에 N개의 자연수가 주어진다. 각 자연수의 크기는 10,000,000를 넘지 않는다.
▣ 출력설명
자릿수의 합이 최대인 자연수를 출력한다.
▣ 입력예제 1
7
128 460 603 40 521 137 123
▣ 출력예제 1
137

const mySolution = (arr) => {
  let newArr = arr.join(" ").toString().split(" ");

  let num = 0;
  let max = 0;

  const result = [];
  const result2 = [];

  for (let i = 0; i < newArr.length; i++) {
    num = 0;
    for (let j = 0; j < newArr[i].length; j++) {
      num += parseInt(newArr[i][j]);
    }
    result.push(num);
  }

  max = Math.max(...result);

  for (let i = 0; i < result.length; i++) {
    if (result[i] === max) {
      result2.push(arr[i]);
    }
  }

  return Math.max(...result2);
};

const solution = (n, arr) => {
  let answer,
    max = Number.MIN_SAFE_INTEGER;

  //   for (let x of arr) {
  //     let sum = 0,
  //       tmp = x;

  //     while (tmp) {
  //       sum += tmp % 10;
  //       tmp = Math.floor(tmp / 10);
  //     }
  //     if (sum > max) {
  //       max = sum;
  //       answer = x;
  //     } else if (sum === max) {
  //       if (x > answer) answer = x;
  //     }
  //   }

  for (let x of arr) {
    let sum = x
      .toString()
      .split("")
      .reduce((a, b) => a + Number(b), 0);
    if (sum > max) {
      max = sum;
      answer = x;
    } else if (sum === max) {
      if (x > answer) answer = x;
    }
  }
  return answer;
};

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log("me", mySolution(arr));
console.log("lecture", solution(7, arr));

// 문제2) 뒤집은 소수
N개의 자연수가 입력되면 각 자연수를 뒤집은 후 그 뒤집은 수가 소수이면 그 소수를 출력하 는 프로그램을 작성하세요. 예를 들어 32를 뒤집으면 23이고, 23은 소수이다. 그러면 23을 출 력한다. 단 910를 뒤집으면 19로 숫자화 해야 한다. 첫 자리부터의 연속된 0은 무시한다.
▣ 입력설명
첫 줄에 자연수의 개수 N(3<=N<=100)이 주어지고, 그 다음 줄에 N개의 자연수가 주어진다. 각 자연수의 크기는 100,000를 넘지 않는다.
▣ 출력설명
첫 줄에 뒤집은 소수를 출력합니다. 출력순서는 입력된 순서대로 출력합니다.
▣ 입력예제 1
9
32 55 62 20 250 370 200 30 100
▣ 출력예제 1 
23 2 73 2 3

const mySolution = (arr) => {
  const result = [];

  for (let x of arr) {
    const reverse = x.toString().split("").reverse().join("");

    let divisor = 2;
    let num = 0;

    while (+reverse > divisor || +reverse === 2) {
      num = +reverse;

      if (+reverse === 2) result.push(+reverse);

      if (reverse % divisor === 0) {
        num = 0;
        break;
      }

      divisor++;
    }

    if (num > 0) result.push(+reverse);
  }
  return result;
};

const solution = (arr) => {
  function isPrime(num) {
    if (num === 1) return false;

    for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
      if (num % i === 0) return false;
    }

    return true;
  }

  let answer = [];

  for (let x of arr) {
    let res = 0;

    while (x) {
      let t = x % 10;
      res = res * 10 + t;
      x = parseInt(x / 10);
    }

    if (isPrime(res)) answer.push(res);
  }

  return answer;
};

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log("me", mySolution(arr));
console.log("lecture", solution(arr));

// 문제3) 멘토링
현수네 반 선생님은 반 학생들의 수학점수를 향상시키기 위해 멘토링 시스템을 만들려고 합니 다. 멘토링은 멘토(도와주는 학생)와 멘티(도움을 받는 학생)가 한 짝이 되어 멘토가 멘티의 수학공부를 도와주는 것입니다.
선생님은 M번의 수학테스트 등수를 가지고 멘토와 멘티를 정합니다.
만약 A학생이 멘토이고, B학생이 멘티가 되는 짝이 되었다면, A학생은 M번의 수학테스트에서 모두 B학생보다 등수가 앞서야 합니다.
M번의 수학성적이 주어지면 멘토와 멘티가 되는 짝을 만들 수 있는 경우가 총 몇 가지 인지 출력하는 프로그램을 작성하세요.
▣ 입력설명
첫 번째 줄에 반 학생 수 N(1<=N<=20)과 M(1<=M<=10)이 주어진다.
두 번째 줄부터 M개의 줄에 걸쳐 수학테스트 결과가 학생번호로 주어진다. 학생번호가 제일 앞에서부터 1등, 2등, ...N등 순으로 표현된다.
만약 한 줄에 N=4이고, 테스트 결과가 3 4 1 2로 입력되었다면 3번 학생이 1등, 4번 학생이 2등, 1번 학생이 3등, 2번 학생이 4등을 의미합니다.
▣ 출력설명
첫 번째 줄에 짝을 만들 수 있는 총 경우를 출력합니다.
*/

// const mySolution = (arr) => {
//   let result = 0;
//   return result;
// };

const solution = (test) => {
  let answer = 0;

  m = test.length;
  n = test[0].length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let cnt = 0;

      for (let k = 0; k < m; k++) {
        let pi = 0;
        let pj = 0;

        for (let s = 0; s < n; s++) {
          if (test[k][s] === i) pi = s;
          if (test[k][s] === j) pj = s;
        }

        if (pi < pj) cnt++;
      }
      if (cnt === m) answer++;
    }
  }

  console.log(answer);
  return answer;
};

let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];

// console.log("me", mySolution(arr));
console.log("lecture", solution(arr));

// 문제4)
// 문제5)
