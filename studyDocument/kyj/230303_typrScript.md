# typeScript

## 변수
```
let test: string = "test";
```

## object
```
function (prop: type) {
    console.log(prop);
}

ex)
function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });
```

## Optional Properties
여러 객체들 중 서로 대부분 같지만 다른 특정 구성요소를 가진 객체에 대해서도
동일한 검수를 진행하고 싶을 때 해당 값은 옵션이니까 있으면 검사를 해달라는 방식으로
구성할 수 있습니다.

```
대상변수명?: type

ex)
function printName(obj: { first: string; last?: string }) {
  // ...
}
// Both OK
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });
```

## Union
지양해야하지만 전달되는 값의 유형이 N개 이상이어야 할 경우
아래 예시와 같이 사용할 수 있습니다.
```
function printUnion(test: number | string) {
  console.log("typeTest: " + test);
}
// number OK
printUnion(101);
// string OK
printUnion("202");
// object Error
printUnion({ myID: 22342 });
```

## 매개변수(단수)
```
function (prop: type) {
    console.log(prop);
}

ex)
function greet(name: string) {
  console.log("Hello, " + name.toUpperCase() + "!!");
}
```

## 반환 타입
```
function (): type {
  return value;
}

ex)
function getRandomNumber(): number {
  return 26;
}
```
