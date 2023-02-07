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

````
