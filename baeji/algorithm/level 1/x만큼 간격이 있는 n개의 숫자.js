// 함수 solution은 정수 x와 자연수 n을 입력 받아,
// x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다.
// 다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.

function solution(x, n) {
    let answer = [];

    // x가 2, n이 5
    // 2 * 1 = 2
    // 2 * 2 = 4
    // 2 * 3 = 6
    // 2 * 4 = 8
    // 2 * 5 = 10

    for (let i = 1; i <= n; i++) {
        answer.push(x * i);
    }

    return answer;
}

// 다른 사람의 풀이..... 어떻게 이런 생각을
function solution(x, n) {
    return Array(n)
        .fill(x)
        .map((v, i) => (i + 1) * v);
}
