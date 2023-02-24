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
