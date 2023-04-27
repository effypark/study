// 문자열 my_string이 매개변수로 주어질 때,
// 대문자는 소문자로 소문자는 대문자로 변환한 문자열을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ my_string의 길이 ≤ 1,000
// my_string은 영어 대문자와 소문자로만 구성되어 있습니다.

// 나의 풀이
function solution(my_string) {
    let answer = '';

    for (let i of my_string) {
        if (i === i.toUpperCase()) {
            answer += i.toLowerCase();
        } else {
            answer += i.toUpperCase();
        }
    }

    return answer;
}

// 나의 풀이 바꿔보기
function solution(my_string) {
    return [...my_string]
        .map((str) =>
            str === str.toUpperCase() ? str.toLowerCase() : str.toUpperCase()
        )
        .join('');
}
