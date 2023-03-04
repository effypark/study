// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소의 평균값을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 0 ≤ numbers의 원소 ≤ 1,000
// 1 ≤ numbers의 길이 ≤ 100
// 정답의 소수 부분이 .0 또는 .5인 경우만 입력으로 주어집니다.

// 나의 풀이
function solution(numbers) {
    let answer = 0;
    let sum = 0;
    
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    
    answer = sum / numbers.length;
    return answer;
}

// 나의 풀이 고쳐보기
function solution(numbers) {
    let answer = 0;

    for (i of numbers) {
        answer += i;
    }
    
    return answer / numbers.length;
}

