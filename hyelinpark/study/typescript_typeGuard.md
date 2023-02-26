## Type Guard

### `typeof`

<br />

- TypeScript는 JavaScript의 `instanceof`, `typeof` 연산자를 이해할 수 있습니다. 즉 조건문에 typeof와 instanceof를 사용하면, TypeScript는 해당 조건문 블록 내에서는 해당 변수의 타입이 다르다는 것(=좁혀진 범위의 타입)을 이해한다는 것입니다.
- 아래 예시를 보시면 TypeScript는 특정 메소드(String.prototype.substr)가 string에 존재하지 않는다는 사실을 인식해 사용자 오타가 있을 수 있음을 지적하고 있습니다.

<br />

```
function doSomething(x: number | string) {
  if (typeof x === 'string') { // TypeScript는 이 조건문 블록 안에 있는 `x`는 백퍼 `string`이란 걸 알고 있습니다.
  console.log(x.subtr(1)); // Error: `subtr`은 `string`에 존재하지 않는 메소드입니다.
  console.log(x.substr(1)); // ㅇㅋ
  }
  x.substr(1); // Error: `x`가 `string`이라는 보장이 없죠.
}
```

<br />

### instanceof

아래는 Class와 instanceof에 관한 예제입니다:

```
class Foo {
  foo = 123;
  common = '123';
}

class Bar {
  bar = 123;
  common = '123';
}

function doStuff(arg: Foo | Bar) {
  if (arg instanceof Foo) {
    console.log(arg.foo); // ㅇㅋ
    console.log(arg.bar); // Error!
  }
  if (arg instanceof Bar) {
    console.log(arg.foo); // Error!
    console.log(arg.bar); // ㅇㅋ
  }

  console.log(arg.common); // ㅇㅋ
  console.log(arg.foo); // Error!
  console.log(arg.bar); // Error!
}

doStuff(new Foo());
doStuff(new Bar());
```

- TypeScript는 else 또한 이해하기 때문에 우리가 if문으로 타입을 하나 좁혀내면, else문 안의 변수 타입은 절대 동일한 타입이 될 수는 없음을 인지합니다. 아래 예시를 살펴보겠습니다

```
class Foo {
  foo = 123;
}

class Bar {
  bar = 123;
}

function doStuff(arg: Foo | Bar) {
  if (arg instanceof Foo) {
    console.log(arg.foo); // ㅇㅋ
    console.log(arg.bar); // Error!
  }
  else {  // 백퍼 Bar겠군.
    console.log(arg.foo); // Error!
    console.log(arg.bar); // ㅇㅋ
  }
}

doStuff(new Foo());
doStuff(new Bar());
```
