// 0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어집니다.
// numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성해주세요.

// 나의 풀이
function solution(numbers) {
    let answer = 0;

    // 9까지 돌려봤을 때 포함이 안돼있으면 answer에 넣어주기
    for (let i = 0; i <= 10; i++) {
        if (!numbers.includes(i)) answer += i;
    }

    return answer;
}

// 다른 사람의 풀이... 리듀스 어제 본 건데... ㅎㅎ
function solution(numbers) {
    return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
}
