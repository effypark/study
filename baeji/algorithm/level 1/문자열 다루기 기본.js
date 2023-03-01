// 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요.
// 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.
// s는 길이 1 이상, 길이 8 이하인 문자열입니다.
// s는 영문 알파벳 대소문자 또는 0부터 9까지 숫자로 이루어져 있습니다.

// 나의 첫 시도.... 테스트 절반만 통과함..
function solution(s) {
    if (s.length !== 4 && s.length !== 6) {
        return false;
    } else {
        for (let i = 0; i < s.length; i++) {
            if (s[i] >= 0 && s[i] <= 9) {
                return true;
            } else {
                return false;
            }
        }
    }
}

// 나의 두 번째 시도.... 테스트 절반만 통과함..
function solution(s) {
    if (s.length !== 4 && s.length !== 6) return false;

    for (let i = 0; i < s.length; i++) {
        if (s[i] >= 0 && s[i] <= 9) {
            return true;
        } else {
            return false;
        }
    }
}

// 나의 세 번째 시도... 통과~
function solution(s) {
    if ((s.length == 4 || s.length == 6) && s == parseInt(s)) {
        return true;
    } else {
        return false;
    }
}
