## TypeScript - Function

- 지역 함수이건, 다른 모듈에서 불러온 함수이건, 어떤 클래스의 메서드이건, 함수는 어느 어플리케이션에서도 기초적인 구성 요소의 역할을 합니다. 함수는 값입니다. 그리고 다른 값처럼, TypeScript에서는 함수들이 호출될 수 있는 방법을 서술하는 방법이 많이 있습니다. 함수를 설명하는 타입들을 작성하는 방법들을 알아봅시다.

<br />

### 함수 표현식

> 화살표 함수와 유사하며, 함수를 설명하는 가장 간단한 방법
> <br />

```
function greeter(fn: (a: string) => void) {
  fn("Hello, World");
}

function printToConsole(s: string) {
  console.log(s);
}

greeter(printToConsole);
```

- (a: string) => void 라는 문법은 **“문자열 타입 a를 하나의 매개변수로 가지고 반환값이 없는 함수”** 를 의미합니다.

<br />
 
```
type GreetFunction = (a: string) => void;

function greeter(fn: GreetFunction) {
// ...
}

```

- 타입 별칭을 이용해서 매개변수의 타입을 정해줘서 사용하는 방법도 있습니다.

<br />



### 호출 시그니처

<br />

```

type DescribableFunction = {
description: string;
(someArg: number): boolean;
};

function doSomething(fn: DescribableFunction) {
console.log(fn.description + " returned " + fn(6));
}

````

- JavaScript에서, 함수들은 호출이 가능할 뿐만 아니라, 프로퍼티도 가질 수 있습니다.
- 하지만, 함수 표현식 문법은 **프로퍼티를 정의하는 것을 허락하지 않습니다.** 만약 호출 가능하면서 프로퍼티를 가진 무언가를 설명하려고 하면, 객체 타입의 호출 시그니처를 사용하여 표현할 수 있습니다.
- 필수 프로퍼티가 아니라면 ```?:``` 를 사용합니다.

### 구성 시그니처

<br />

- JavaScript 함수는 **new 연산자**를 통해서도 호출 될 수 있습니다.
- TypeScript 에서는 이런게 주로 새로운 객체를 생성하는데 사용되기 때문에 **생성자**로 간주합니다.
- 호출 시그니처 앞에 new 키워드를 붙임으로서, 구성 시그니처를 작성할 수 있습니다.

<br />

````

type SomeConstructor = {
new (s: string): SomeObject;
};

function fn(ctor: SomeConstructor) {
return new ctor("hello");
}

```

<br />

```

interface CallOrConstruct {
new (s: string): Date;
(n?: number): number;
}

```

- JavaScript의 Date 객체와 같은 몇몇 객체는 new가 있든 없든 호출될 수 있습니다.
- 호출 시그니처와 구성 시그니처를 임의로 같은 타입에서 결합시킬 수 있습니다.

<br />

### 제네릭 함수

<br />

```

function firstElement(arr: any[]) {
return arr[0];
}

```

- 입력 값이 출력 값의 타입과 관련이 있거나, 두 입력값의 타입이 서로 관련이 있는 형태의 함수를 작성하는 것은 흔히 일어나는 일

<br />

```

function firstElement<Type>(arr: Type[]): Type | undefined {
return arr[0];
}

````

- 위의 ```firstElement``` 함수는 반환 타입이 any
- 아래는 제네릭 함수로 수정한 코드입니다.
- 제네릭 문법이 두 값 사이의 상관관계를 표현하기 위해서 사용됩니다.
- 함수 시그니처에서 **타입 매개변수**를 선언함으로서 그런 표현을 할 수 있습니다.

<br />

> 타입 매개변수 ```Type```을 이 함수에 선언하고, 필요한 두 곳에 사용함으로써 함수의 입력 값(배열)과 출력(반환 값) 사이에 연결고리를 만들 수 있습니다. 그러면 이제 이 함수를 호출할 때, 더 명확한 타입을 얻을 수 있습니다.

<br />

- 예시

```
// s는 "string" 타입
const s = firstElement(["a", "b", "c"]);

// n은 "number" 타입
const n = firstElement([1, 2, 3]);

// u는 "undefined" 타입
const u = firstElement([]);
```



<br />

### 추론

<br />

- Type을 특정하지 않고, TypeScript에 의해서 자동적으로 타입이 선택되는 것

<br />

```
function map<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
  return arr.map(func);
}

// 매개변수 'n'의 타입은 'string'
// 'parsed'는 number[] 타입을 하고 있습니다.
const parsed = map(["1", "2", "3"], (n) => parseInt(n));
```

- 이 예제에서 TypeScript는 Input 타입과(입력으로 주어진 string 배열로부터) Output타입을 함수 표현식의 반환 값(number)를 통해서 추론할 수 있는 점을 눈여겨보십시오.


<br />

### 타입 제한 조건

<br />

> - 모든 타입에 대해서 동작하는 제네릭 함수들을 작성하였습니다. 가끔씩 제네릭 함수로 두 값을 연관시키려 하지만 **특정한 값들의 부분집합**에 한해서만 동작하기를 원할 때가 있습니다. 이러한 경우에 타입 제한 조건을 사용하여, **타입 매개변수가 받아들일 수 있는 타입들을 제한**할 수 있습니다.

> - 두 값 중에 더 긴 것을 반환하는 함수를 작성을 하겠습니다. 이 작업을 위해, number인 length 프로퍼티가 필요합니다. ```extends 절```을 이용해서 타입 매개변수를 그 타입으로 제한 할 수 있습니다.

<br />

```
function longest<Type extends { length: number }>(a: Type, b: Type) {
  if (a.length >= b.length) {
    return a;
  } else {
    return b;
  }
}

// longerArray 의 타입은 'number[]' 입니다'
const longerArray = longest([1, 2], [1, 2, 3]);

// longerString 의 타입은 'hyelin' | 'joonha' 입니다.
const longerString = longest("hyelin", "joonha");

// 에러! Number에는 'length' 프로퍼티가 없습니다.
const notOK = longest(10, 100);
Argument of type 'number' is not assignable to parameter of type '{ length: number; }'.
```

- TypeScript가 longest의 반환 타입을 추론 하도록 허용했습니다. 반환 타입 추론은 제네릭 함수에서도 작동합니다.
- Type을 { length: number }로 제한했으므로 a와 b 매개변수에 대해서 ```.length``` 프로퍼티에 접근할 수 있었습니다. 타입 제한이 없다면, 이러한 값들이 length 프로퍼티를 가지지 않는 다른 타입일 수 있기 때문에, 그 프로퍼티에 접근 할 수 없었을 것입니다.
- longerArray와 longerString의 타입은 인수를 기반으로 추론되었습니다. 제네릭은 두 개 이상의 값을 같은 타입으로 연관 짓는 것이라는 사실을 기억해야 합니다!

- 원하는 대로 longest(10,100)은 number타입이 .length 프로퍼티를 가지고 있지 않았기 때문에 호출이 거부된 것을 볼 수 있습니다.

<br />

### 제한된 값으로 작업하기

> 다음은 제네릭 타입 제약 조건을 사용할 때, 흔히 범할 수 있는 실수입니다.

<br />

```
function minimumLength<Type extends { length: number }>(
  obj: Type,
  minimum: number
): Type {
  if (obj.length >= minimum) {
    return obj;
  } else {
    return { length: minimum };

Type '{ length: number; }' is not assignable to type 'Type'.
  '{ length: number; }' is assignable to the constraint of type 'Type', but 'Type' could be instantiated with a different subtype of constraint '{ length: number; }'.
  }
}
```

- 이 함수는 문제가 없는 것처럼 보입니다. Type은 { lenght: number }로 제한되어 있고, 함수는 Type이나 저 제약조건을 만족하는 값을 반환합니다.
- 문제는 이 함수가 제약사항을 만족하는 어떤 객체가 아닌, 입력된 어떤 객체를 반환한다는 점입니다. 만약 이 코드가 유효하다면, 확실히 동작하지 않을 아래의 코드를 작성할 수 있을 것입니다.

<Br />

```
// 'arr' gets value { length: 6 }
const arr = minimumLength([1, 2, 3], 6);
// 여기서 배열은 'slice' 메서드를 가지고 있지만
// 반환된 객체는 그렇지 않기에 에러가 발생합니다!
console.log(arr.slice(0));
```

<br />

### 타입 인수를 명시하기
> TypeScript는 제네릭 호출에서 의도된 타입을 대체로 추론해 내지만, 항상 그렇지는 않습니다. 예를 들어, 두 배열을 결합하는 함수를 하나 작성합니다.

<br />

```
function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
  return arr1.concat(arr2);
}
```

<br>

 ```
const arr = combine([1, 2, 3], ["hello"]);
Type 'string' is not assignable to type 'number'.
 ```

 - 일반적으로 짝이 맞지 않는 배열과 함께 해당 함수를 부르는 것은 잘못된 것

```
const arr = combine<string | number>([1, 2, 3], ["hello"]);
```

- 수동으로 타입을 지정해주어야 합니다.

<br />

### 좋은 제네릭 함수를 작성하기 위한 가이드라인
> 너무 많은 타입 매개변수나 제한 조건을 꼭 필요하지 않은 곳에 사용하는 것은 추론을 잘하지 못하게 해서 함수 호출자를 불만스럽게 만들 수 있습니다.

<br />

- 타입 매개변수를 누르기

<Br />

```
function firstElement1<Type>(arr: Type[]) {
  return arr[0];
}

function firstElement2<Type extends any[]>(arr: Type) {
  return arr[0];
}

// a: number (good)
const a = firstElement1([1, 2, 3]);

// b: any (bad)
const b = firstElement2([1, 2, 3]);
```

- firstElement1이 이 함수를 작성하는데 더 좋은 방법입니다. 이 함수의 추론된 반환 타입은 Type 인데, firstElement2의 추론된 반환 타입은 TypeScript가 호출 중에 타입을 해석하기 위해서 “기다리기” 보다 호출 시점에 arr[0] 표현식을 타입 제한 조건을 이용해서 해석하기 때문에 any가 됩니다

<br />

- 더 적은 타입 매개변수를 사용하기

```
function filter1<Type>(arr: Type[], func: (arg: Type) => boolean): Type[] {
  return arr.filter(func);
}

function filter2<Type, Func extends (arg: Type) => boolean>(
  arr: Type[],
  func: Func
): Type[] {
  return arr.filter(func);
}
```

- 이 두 함수의 차이는 두 값을 연관시키지 않는 타입 매개변수 Func 입니다.
- 이는 타입 인수를 원하는 호출자가 아무 이유 없이 추가 타입 인수를 제공해야 하기 때문에 좋지 않습니다. Func는 함수를 더 읽고 이해하기 어렵게 만들 뿐이지, 아무것도 하지 않습니다

📌 타입 매개변수는 가능한 최소로 사용하는 것이 좋다.

<br />

- 타입 매개변수는 두 번 나타나야 합니다.

<br />

```
function greet<Str extends string>(s: Str) {
  console.log("Hello, " + s);
}

greet("world");

// 수정한 코드

function greet(s: string) {
  console.log("Hello, " + s);
}
```

- 타입 매개변수는 여러 값의 타입을 연관시키는 용도로 사용한다.
- 만약 타입 매개변수가 함수 시그니처에서 한 번만 사용되었다면, 어떤 것도 연관시키지 않고 있는 것.

<br />

### 선택적 매개변수
> TypeScript에서는 매개변수를 ```?```로 표시함으로 선택적으로 만들 수 있습니다.

```
function f(x?: number) {
  // ...
}
f(); // OK
f(10); // OK
```

- 매개변수의 타입이 number로 지정되었지만, JavaScript에서 명시되지 않은 매개변수는 undefined가 되기 때문에, x 매개변수는 실질적으로 number | undefined 타입이 됩니다.
- 매개변수가 선택적일 때, 호출자는 undefined를 넘김으로써, “누락된” 인수를 흉내 낼 수 있습니다.

📌 콜백에 대한 함수 타입을 작성할 때, 해당 인수 없이 호출할 의도가 없는 한 절대로 선택적 매개변수를 사용하면 안된다.

<br />

### 좋은 오버로드 작성하기
> 제네릭처럼, 함수 오버로드를 작성할 때 따라야 할 몇몇 가이드라인이 있습니다. 다음의 규칙을 따르는 것은 함수들을 부르기 쉽고, 이해하기 쉽고, 구현하기 쉽게 만들어 줍니다.

<br />

```
function len(s: string): number;
function len(arr: any[]): number;
function len(x: any) {
  return x.length;
}
```
- 문자열 혹은 배열의 길이를 반환하는 함수
- 이 함수를 문자열이나 배열을 통해서 호출할 수 있습니다. 하지만...

```
// output

len(""); // OK
len([0]); // OK
len(Math.random() > 0.5 ? "hello" : [0]);

No overload matches this call.
  Overload 1 of 2, '(s: string): number', gave the following error.
    Argument of type 'number[] | "hello"' is not assignable to parameter of type 'string'.
      Type 'number[]' is not assignable to type 'string'.
  Overload 2 of 2, '(arr: any[]): number', gave the following error.
    Argument of type 'number[] | "hello"' is not assignable to parameter of type 'any[]'.
      Type 'string' is not assignable to type 'any[]'.

```

- 짠. 이렇게 노 오버로드 매치가 뜹니다.
- TypeScript는 하나의 오버로드를 통해서만 함수를 해석하기에, 우리는 이 함수를 문자열 또는 배열이 될 수 있는 값을 통해서 호출할 수 없습니다.

<br />

```
// 수정된 코드

function len(x: any[] | string) {
  return x.length;
}
```

- 호출자는 이 함수를 두 가지 값 중 하나를 이용하여 호출할 수 있으며, 추가적으로 정확한 구현 시그니처를 찾을 필요도 없어졌습니다.

📌 가능하면 오버로드 대신 유니언 타입을 사용하자

<br />

### 알아야 할 타입
> 함수 타입에 대해서 작업을 할 때, 자주 나타나는 몇 가지 추가 타입들이 더 있습니다. 모든 타입처럼, 이 타입들을 어디서나 사용하실 수 있지만, 이 타입들은 특별히 함수라는 맥락에 관련이 깊습니다.

<br />

> **void**
- void는 값을 반환하지 않는 함수의 반환 값을 의미합니다.
- 함수에 return문이 없거나, 명시적으로 값을 반환하지 않을 때, 추론되는 타입입니다.

<br />

```
// 추론된 반환 타입은 void 입니다.

function noop() {
  return;
}
```

- JavaScript에서는, 아무것도 반환하지 않는 함수는 암묵적으로 undefined 값을 반환합니다. 하지만 TypeScript에서 void와 undefined는 같은 것으로 간주되지 않습니다.

<br />

> object
-  특별한 타입 object는 원시 값(string, number, bigint, boolean, symbol, null, undefined)이 아닌 모든 값을 지칭합니다. 이것은 빈 객체 타입 { }와는 다르고, 전역 타입 Object와도 다릅니다.

📌 object는 Object가 아니다.. 항상 object 를 사용해야 한다!@

- JavaScript에서 함수 값은 객체입니다. 프로퍼티가 있고, 프로토타입 체인에 Object.prototype가 있고, instanceof Object이면서, Object.keys를 호출할 수 있고, 기타 등등이 있습니다. 이러한 이유로, TypeScript에서 함수 타입은 object로 간주됩니다.

<br />

> unknown
- unknown 타입은 모든 값을 나타냅니다.
- any 타입과 유사하지만, unknown 타입에 어떤 것을 대입하는 것이 유효하지 않기 때문에 더 안전합니다.

<br />

```
function f1(a: any) {
  a.b(); // OK
}

function f2(a: unknown) {
  a.b();
Object is of type 'unknown'.
}
```

- 이는 any 형태의 값을 함수 본문에 사용하지 않고도, 아무 값이나 받는 함수를 표현할 수 있기 때문에, 함수 타입을 설명하는 데에 유용하게 쓰입니다.

반대로, unknown 타입의 값을 반환하는 함수를 표현할 수 있습니다.

```
function safeParse(s: string): unknown {
  return JSON.parse(s);
}

// 'obj'를 사용할 때 조심해야 합니다!
const obj = safeParse(someRandomString);
```

<Br />

> never
- 어떤 함수는 결코(never) 값을 반환하지 않습니다

```
function fail(msg: string): never {
  throw new Error(msg);
}
```

- never는 일반적으로 함수의 리턴 타입으로 사용됩니다.
- 함수의 리턴 타입으로 never가 사용될 경우, 항상 오류를 출력하거나 리턴 값을 절대로 내보내지 않음을 의미합니다. 이는 무한 루프(loop)에 빠지는 것과 같습니다.

> **그래서 never 는 무엇인가?**
> - never가 무엇이고 왜 만들어졌는지 이해하기 위해서는, 먼저 타입시스템에서 타입이 무엇을 의미하는지 이해해야 합니다.
> - 타입은 가능한 값의 집합을 의미합니다. 예를 들어서, string이라는 타입은 가능한 모든 문자열의 집합을 의미합니다. 그러므로 변수에 string이라는 타입을 달아둔다는 것은, 이 변수에는 문자열만 할당할 수 있다는 것을 의미합니다.
> - TypeScript에서 never 는 없는 값의 집합입니다. TypeScript 이전에 인기가 있었던 flow에서는, 이와 동일한 역할을 하는 empty라고 하는 것이 존재합니다.
> - 이 집합에는 값이 없기 때문에, never 은 어떠한 값도 가질 수 없으며, 여기에는 any 타입에 해당하는 값들도 포함됩니다. 이러한 특징 때문에, never 는 uninhabitable type bottom type 이라고도 불립니다.

<br />


> **never는 왜 필요한가?**
> - 숫자에서 아무것도 존재하지 않는 것을 표현하기 위해 0이 존재하는 것처럼, 타입 시스템에서도 그 어떤 것도 불가능하다는 것을 나타내는 타입이 필요합니다.

<br />

📌 여기서 불가능하다는 것이란,




1. 어떤 값도 가질 수 없는 빈 타입
- 제네릭 및 함수에서 허용되지 않는 파라미터
- 호환 되지 않는 타입 교차
- 빈 유니언 타입 (유니언 했지만 아무것도 안되는 경우)


2.실행이 완료되면 caller에게 제어 권한을 반환하지 않는 (혹은 의도된) 함수의 반환 유형 (예: node의 ```process.exit()```)
 - void와는 다르다. void는 함수가 caller에게 아무것도 리턴하지 않는 다는 것을 의미한다.

3. rejected된 promise의 fulfill 값
```
const p = Promise.reject('foo') // const p: Promise<never>
```


<br />

> **Never 타입은 어떻게 사용할 수 있을까?**

<br />

1. 허용할 수 없는 함수 파라미터에 제한을 하는 방법
- never 타입에는 값을 할당 할 수 없기 때문에, 함수에 올수 있는 다양한 파라미터에 제한을 거는 용도로 사용할 수 있습니다.

```
함수는 never만 사용 가능하다.
function fn(input: never) {
  // do something...
}

declare let myNever: never
fn(myNever) // ✅

// never 이외에 다른 값은 타입 에러를 야기한다.
fn() // ❌
fn(1) // ❌
fn('foo') // ❌
declare let myAny: any
fn(myAny)
```

<Br />

2. switch if-else 문에서 일치 하지 않는 값이 오는 경우
- 함수가 never 타입만 인수로 받는 경우, 함수는 never외의 다른 값과 함께 실행 될 수 없습니다.
- 이러한 특징을 사용하여, switch 문과 if-else 문장 내부에서 철저한 일치를 보장할 수 있습니다.

```
function unknownColor(x: never): never {
  throw new Error('unknown color')
}

type Color = 'red' | 'green' | 'blue'

function getColorName(c: Color): string {
  switch (c) {
    case 'red':
      return 'is red'
    case 'green':
      return 'is green'
    default:
      return unknownColor(c) // 그 외의 string으 불가능하다.
  }
}
```

<br />

> Function
- 전역 타입 Function은 bind, call, apply 그리고 JavaScript 함수 값에 있는 다른 프로퍼티를 설명하는 데에 사용됩니다.
- 또한 여기에는 Function 타입의 값은 언제나 호출될 수 있다는 값을 가지며, 이러한 호출은 any를 반환합니다.

<br />

```
function doSomething(f: Function) {
  return f(1, 2, 3);
}
```

이는 타입되지 않은 함수 호출 이며, 안전하지 않은 any 타입을 반환하기에 일반적으로 피하는 것이 가장 좋습니다.

만약 임의의 함수를 허용해야 하지만, 호출할 생각이 없다면 () => void 타입이 일반적으로 더 안전합니다.

<br />


### 나머지 매개변수와 인수

> 나머지 매개변수 (Rest Parameter)

- 선택적 매개변수와 오버로드를 사용하여 다양한 정해진 인수들을 받아 들일 수 있지만, 정해지지 않은 수의 인수를 받아 들이는 함수를 나머지 매개변수를 이용하여 정의할 수 있습니다.
- 나머지 매개변수는 다른 모든 매개변수 뒤에 나타나며, ... 구문을 사용합니다.

<br />

```
function multiply(n: number, ...m: number[]) {
  return m.map((x) => n * x);
}

// 'a' gets value [10, 20, 30, 40]
const a = multiply(10, 1, 2, 3, 4);
```

TypeScript에서는, 이러한 매개변수에 대한 타입 표기는 암묵적으로 any가 아닌 any[]를 사용하며, 타입 표현식은 Array<T> 또는 T[] 또는 튜플 타입으로 표현해야 합니다.

<br />

> 나머지 인수(Rest Argument)
- 반대로 전개 구문을 사용하여 배열에서 제공되는 인수의 개수를 제공할 수 있습니다. 예를 들어, 배열의 push 메서드는 인수를 몇 개든 받을 수 있습니다.

<br />

```
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

arr1.push(...arr2);
```

일반적으로 TypeScript는 배열이 불변하다고 간주하지 않습니다. 이로 인해 다음과 같은 놀라운 동작이 발생할 수 있습니다.

```
// 추론된 타입은 0개 이상의 숫자를 가지는 배열인 number[]
// 명시적으로 2개의 숫자를 가지는 배열로 간주되지 않습니다

const args = [8, 5];
const angle = Math.atan2(...args);

A spread argument must either have a tuple type or be passed to a rest parameter.
```

이러한 상황의 최선의 해결책은 코드에 따라서 다르지만, 일반적으로 const 콘텍스트가 가장 간단한 해결책입니다.

```
// 길이가 2인 튜플로 추론됨
const args = [8, 5] as const;
// OK
const angle = Math.atan2(...args);
```

나머지 인수를 사용하는 것은 오래된 런타임을 대상으로 할 때, downlevelIteration을 필요로 할 수 있습니다.

<br />

📌 **튜플 타입** ```as Type```

<br />

### 매개변수 구조 분해(Parameter Destructing)

```
function sum({ a, b, c }: { a: number; b: number; c: number }) {
  console.log(a + b + c);
}
```

구조 분해 할당한 매개변수는 이렇게 따로 이름 붙은 타입을 사용할 수 있습니다.

```
// 이전 예제와 동일
type ABC = { a: number; b: number; c: number };
function sum({ a, b, c }: ABC) {
  console.log(a + b + c);
}
```

혹은 이 부분을 ```Record``` 문법으로 변경해서 사용할 수 있습니다.

```
type ABC = Record<string, number>;
```

<br />

### 함수의 할당가능성

<br />

> ```void``` 반환 타입

- 함수의 void 반환 타입은 몇몇 일반적이지는 않지만 예측할 수 있는 동작을 발생시킬 수 있습니다.

- void 반환 타입으로의 문맥적 타이핑은 함수를 아무것도 반환하지 않도록 강제하지 않습니다.이를 설명하는 또 다른 방법은, void 반환 타입을 가지는 문맥적 함수 타입(type vf = () => void)가 구현되었을 때, 아무값이나 반환될 수 있지만, 무시됩니다.

- 그러므로 후술할 타입 () => void의 구현들은 모두 유효합니다.

<br />

```
type voidFunc = () => void;

const f1: voidFunc = () => {
  return true;
};

const f2: voidFunc = () => true;

const f3: voidFunc = function () {
  return true;
};
```

- 그리고 이러한 함수의 반환값이 다른 변수에 할당될 때, 이들은 여전히 void타입을 유지할 것입니다.

```
const v1 = f1();

const v2 = f2();

const v3 = f3();
```

<br />


- 이러한 동작이 존재하기에, Array.prototype.push가 number를 반환하고,
- Array.prototype.forEach 메서드가 void 반환 타입을 가지는 함수를 예상함에도 다음 코드는 유효할 수 있습니다.

```
const src = [1, 2, 3];
const dst = [0];

src.forEach((el) => dst.push(el));
```

- 유의해야 할 한 가지 다른 경우가 있습니다. 리터럴 함수 정의가 void 반환 값을 가지고 있다면, 그 함수는 어떠한 것도 반환해서는 안됩니다.

```
function f2(): void {
  // @ts-expect-error
  return true;
}

const f3 = function (): void {
  // @ts-expect-error
  return true;
};
```
````
