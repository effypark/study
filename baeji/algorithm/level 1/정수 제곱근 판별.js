// 임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
// n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고,
// n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.

// 나의 틀린 풀이
function solution(n) {
    for (let x = 1; x * x <= n; x++) {
        if (x * x === n) {
            return (x + 1) * (x + 1);
        } else return -1;
    }
}

// 다른 케이스는 통과하지만
// n = 121의 케이스에서 121은 11의 제곱이기 때문에 12의 제곱인 144를 리턴해야하는데 -1을 리턴합니다.
console.log('왜 안되지', solution(121));

// 나의 올바른 풀이
// for문 밖에서 리턴해줍니다.
function solution1(n) {
    for (let x = 1; x * x <= n; x++) {
        if (x * x === n) {
            answer = (x + 1) * (x + 1);
        } else answer = -1;
    }

    return answer;
}

console.log('뭔데!!!!!!', solution1(121)); // 제대로 144를 리턴합니다.
