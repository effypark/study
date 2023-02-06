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

````
