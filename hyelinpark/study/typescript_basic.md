## Interface & Type

- Typescript 에서 `interface`와 `type` 은 모두 타입을 정의하는 방법입니다. 그러나 두 가지 개념에는 몇 가지 차이점이 있습니다.

- `interface`는 객체의 형태를 정의하기 위한 것으로, 객체의 속성 이름과 타입을 지정할 수 있습니다.
- `interface`는 extends 나 emplements를 이용하여 상속하거나, 다른 인터페이스와 병합하여 사용할 수 있습니다.

<br />

```
interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  id: number;
}

const john: Employee = {
  name: 'John',
  age: 30,
  id: 123
}
```

<br />

- `type` 은 객체 뿐만 아니라, 어떤 타입이든 정의할 수 있습니다. `type`은 `interface`와 비슷한 역할을 하지만, 다른 타입과 조합해서 새로운 타입을 만드는 것이 가능합니다.
- 또한 `type`은 리터럴 타입, 유니온 타입을 사용할 수 있습니다.

```
type Person = {
  name: string;
  age: number;
}

type Employee = Person & {
  id: number;
}

const john: Employee = {
  name: 'John',
  age: 30,
  id: 123
}
```

<br />

- 두가지 방법 모두 타입을 정의하는 데 사용되며, 상황에 따라 적절한 방법을 사용할 수 있습니다.
- 보통 `interface`는 객체의 형태를 명확하게 표현할 때 사용하고, `type`은 더 일반적인 타입 정의를 할 때 사용하는 경향이 있습니다.

<br />

## 유니언 타입 (Union Type)

- `유니언 타입` 은 둘 이상의 타입 중 하나일 수 있는 타입을 정의하는 방법입니다.
- 유니언 타입은 파이프(`|`) 로 구분된 타입 리스트로 표현됩니다.
- 예를들어, string 또는 number 타입을 가질 수 있는 변수를 선언하려면 다음과 같이 유니언 타입을 사용할 수 있습니다.

```
const example : string | number;
```

위의 예제에서 example 은 string 또는 number 타입 중 하나일 수 있습니다. 이렇게 정의된 변수에는 string 또는 number 타입의 값을 할당할 수 있습니다.

- 유니온 타입은 함수의 매개변수나 반환값으로도 사용될 수 있습니다.
- 예를 들어, string 또는 number를 받아들이는 함수를 선언하려면 다음과 같이 유니온 타입을 사용할 수 있습니다.

```
function printId(id: string | number): void {
  console.log(`ID: ${id}`);
}

printId('ABC123');  // ID: ABC123
printId(456);       // ID: 456
printId(true);      // Error: Argument of type 'boolean' is not assignable to parameter of type 'string | number'.

```

- 유니언 타입은 Typescript 에서 강력한 기능 중 하나이며, 코드를 더 유연하게 만들어줍니다. 하지만 타입이 과도하게 사용되면 코드의 가독성이 떨어지거나 타입 에러가 발생할 가능성이 높아지므로, 적절한 사용을 유지하는 것이 중요합니다.

<br />

### 런타임에서의 열거형 (Enums at runtime)

- 열거형은 런타임에 존재하는 실제 객체입니다. 예를 들어 아래와 같은 열거형은

```
enum E {
  X,
  Y,
  Z,
}
```

실제로 아래와 같이 함수로 전달될 수 있습니다.

```
enum E {
  X,
  Y,
  Z,
}

function f(obj: { X: number }) {
  return obj.X;
}

// E가 X라는 숫자 프로퍼티를 가지고 있기 때문에 동작하는 코드입니다.
f(E);
```

<br />

### 컴파일 시점에서 열거형 (Enums at compile time)

- 열거형이 런타임에 존재하는 실제 객체라고 할지라도, keyof 키워드는 일반적인 객체에서 기대하는 동작과 다르게 동작합니다.
- 대신, keyof typeof 를 사용하면 모든 열거형의 키를 문자열로 나타내는 타입을 가져옵니다.

```
enum LogLevel {
  ERROR,
  WARN,
  INFO,
  DEBUG,
}

/**
 * 이것은 아래와 동일합니다. :
 * type LogLevelStrings = 'ERROR' | 'WARN' | 'INFO' | 'DEBUG';
 */
type LogLevelStrings = keyof typeof LogLevel;

function printImportant(key: LogLevelStrings, message: string) {
  const num = LogLevel[key];
  if (num <= LogLevel.WARN) {
    console.log("Log level key is:", key);
    console.log("Log level value is:", num);
    console.log("Log level message is:", message);
  }
}
printImportant("ERROR", "This is a message");
```
