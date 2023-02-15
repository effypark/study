// 두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
// 예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.

function solution(a, b) {
  let answer = 0;

  if (b >= a) {
    for (let i = a; i <= b; i++) {
      answer += i;
    }
  } else {
    for (let j = b; j <= a; j++) {
      answer += j;
    }
  }

  return answer;
}

// 다른 사람의 풀이.......................

function adder(a, b) {
  var result = 0;

  return ((a + b) * (Math.abs(a - b) + 1)) / 2;
}
