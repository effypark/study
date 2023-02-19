## TypeScript 4.9

<br />

### satisfies 연산자

- 일부 표현식이 타입과 일치하는지 확인하고 싶지만, 추론을 위해 표현식의 가장 구체적인 타입을 유지해야할 때가 있습니다.

<br />

```
// 각 프로퍼티는 문자열 또는 RGB 튜플일 수 있습니다.
const palette = {
    red: [255, 0, 0],
    green: "#00ff00",
    bleu: [0, 0, 255]
//  ^^^^ sacrebleu - 오타를 냈습니다!
};

// 배열 메서드를 'red'에 사용할 때
const redComponent = palette.red.at(0);

// 혹은 'green'에 문자열 메서드를 사용할 때
const greenNormalized = palette.green.toUpperCase();
```

- bleu 대신, blue를 썼어야 했습니다. palette에 타입을 표기해서 bleu 오타를 잡을 수도 있지만, 그렇게 되면 각 프로퍼티에 대한 정보를 잃게 됩니다.

```
type Colors = "red" | "green" | "blue";
type RGB = [red: number, green: number, blue: number];

const palette: Record<Colors, string | RGB> = {
    red: [255, 0, 0],
    green: "#00ff00",
    bleu: [0, 0, 255]
//  ~~~~ 이제 오타를 올바르게 감지했습니다.
};

// 하지만 여기서 원치 않는 문제가 발생했습니다. 'palette.red'가 문자열이 "될 수 있다" 는 것 입니다.
const redComponent = palette.red.at(0);
```

- `satisfies 연산자`를 사용하면 표현식의 결과 타입을 변경하지 않고 표현식의 타입이 특정 타입과 일치하는지 검증할 수 있습니다. 예를 들어, `satisfies`를 사용하여 palette의 모든 프로퍼티가 `string | number[]`와 호환되는지 검증할 수 있습니다.

```
type Colors = "red" | "green" | "blue";
type RGB = [red: number, green: number, blue: number];

const palette = {
    red: [255, 0, 0],
    green: "#00ff00",
    bleu: [0, 0, 255]
//  ~~~~ 오타가 잡혔습니다!
} satisfies Record<Colors, string | RGB>;

// 두 메서드 모두 여전히 접근할 수 있습니다
const redComponent = palette.red.at(0);
const greenNormalized = palette.green.toUpperCase();
```

<br />

- satisfies는 많은 오류를 탐지하는데 사용할 수 있습니다. 예를 들면, 객체가 특정 타입의 모든 키를 가지지만, 그 이상은 가지지 않도록 할 수 있습니다.

```
type Colors = "red" | "green" | "blue";
// 'Colors' 키가 정확한지 확인합니다.

const favoriteColors = {
    "red": "yes",
    "green": false,
    "blue": "kinda",
    "platypus": false
//  ~~~~~~~~~~ 에러 - "platypus"는 'Colors' 리스트에 없습니다.
} satisfies Record<Colors, unknown>;

// 'red', 'green' 및 'blue' 프로퍼티의 모든 정보가 유지됩니다.
const g: boolean = favoriteColors.green;
```

- 프로퍼티 이름 일치 여부보다 각 프로퍼티의 타입에 관심이 있을 수 있습니다. 이 경우 개체의 모든 프로퍼티 값이 일부 타입을 준수하는지 확인할 수도 있습니다.

```
type RGB = [red: number, green: number, blue: number];
const palette = {
    red: [255, 0, 0],
    green: "#00ff00",
    blue: [0, 0]
    //    ~~~~~~ 에러!
} satisfies Record<string, string | RGB>;

// 각 프로퍼티에 대한 정보는 계속 유지됩니다.
const redComponent = palette.red.at(0);
const greenNormalized = palette.green.toUpperCase();
```

<br />

### “in” 연산자를 사용하여 정의되지 않은 프로퍼티로 타입 좁히기

- 개발자들은 자주 런타임에서 알 수 없는 값을 처리해야 할 때가 있습니다. 서버에서 응답받거나 설정 파일을 읽는 경우처럼 실제로 프로퍼티가 존재하는지 알 수 없는 경우가 흔하게 있습니다. JavaScript의 in 연산자를 사용하면 객체에 프로퍼티가 존재하는지 알 수 있습니다.
- 이전 TypeScript 버전에서는 명시적으로 프로퍼티가 타입 목록에 없다면 범위를 좁힐 수 있었습니다.

```
interface RGB {
red: number;
green: number;
blue: number;
}

interface HSV {
hue: number;
saturation: number;
value: number;
}

function setColor(color: RGB | HSV) {
if ("hue" in color) {
// 이제 'color'의 타입은 HSV 입니다.
}
// ...
}
```

- 여기서, RGB 타입에 정의되지 않은 hue에 의해 타입이 좁혀지게 되어, HSV 타입이 되었습니다.
- 그러나 프로퍼티가 주어진 타입이 없는 경우에는 어떨까?

```
function tryGetPackageName(context) {
const packageJSON = context.packageJSON;

// 객체 여부를 확인합니다.
if (packageJSON && typeof packageJSON === "object") {

// 문자열 타입의 name 프로퍼티를 가지고 있는지 확인합니다.
if ("name" in packageJSON && typeof packageJSON.name === "string") {
return packageJSON.name;
}
}
return undefined;
}
```

- 이것을 표준 TypeScript로 다시 작성한다면 context 타입을 정의해서 사용할 수 있습니다.
- 하지만 packageJSON의 프로퍼티에 unknown과 같은 안전한 타입을 사용하면 이전 TypeScript 버전에서 문제가 발생할 수 있습니다.

<br />

```
interface Context {
packageJSON: unknown;
}

function tryGetPackageName(context: Context) {
const packageJSON = context.packageJSON;
// 객체 여부를 확인합니다.
if (packageJSON && typeof packageJSON === "object") {
// 문자열 타입의 name 프로퍼티를 가지고 있는지 확인합니다.
if ("name" in packageJSON && typeof packageJSON.name === "string") {
// ~~~~
// error! Property 'name' does not exist on type 'object.
return packageJSON.name;
// ~~~~
// error! Property 'name' does not exist on type 'object.
}
}
return undefined;
}
```

- packageJSON의 타입이 unknown에서 object로 좁혀졌지만, in 연산자는 실제 정의한 타입으로 엄격하게 좁혔기 때문입니다. 결과적으로 packageJSON의 타입은 object가 되었습니다.

📌TypeScript 4.9는 프로퍼티가 전혀 정의되지 않은 타입으로 좁힐 때, `in 연산자`를 사용하여 조금 더 강력하게 만듭니다. 이전과 차이는 없지만, 언어 내부적으로 Record<"property-key-being-checked", unknown> 타입을 교차합니다.

- 따라서 위 예시에서, `packageJSON` 타입은 unknown에서 object로, 그다음 object & Record<"name", unknown>로 타입이 좁혀집니다. 이를 통해 packageJSON.name에 직접 접근이 가능해지고 독립적으로 좁혀집니다.

```
interface Context {
packageJSON: unknown;
}

function tryGetPackageName(context: Context): string | undefined {
const packageJSON = context.packageJSON;

// 객체 여부를 확인합니다.
if (packageJSON && typeof packageJSON === "object") {

// 문자열 타입의 name 프로퍼티를 가지고 있는지 확인합니다.
if ("name" in packageJSON && typeof packageJSON.name === "string") {

// 정상 동작합니다!
return packageJSON.name;
}
}
return undefined;
}
```

<br />

### 클래스의 자동 접근자

- TypeScript 4.9는 자동 접근자라고 하는 ECMAScript의 향후 기능을 지원합니다.
- 자동 접근자는 `accessor` 키워드로 선언된다는 점을 제외하면 클래스의 속성처럼 선언됩니다.

<br />

```
class Person {
    accessor name: string;
    constructor(name: string) {
        this.name = name;
    }
}
```

- 내부적으로 이러한 자동 접근자는 도달할 수 없는 private 프로퍼티의 get 및 set 접근자로 “de-sugar”됩니다.

```
class Person {
    #__name: string;

    get name() {
        return this.#__name;
    }

    set name(value: string) {
        this.#__name = name;
    }

    constructor(name: string) {
        this.name = name;
    }
}
```

<br />

### NaN 동등성 검사

- JavaScript 로 개발을 할 때 주요 문제는 내장된 동등 연산자를 사용해서 NaN 값을 확인하는 점입니다.
- NaN은 특수 숫자 값으로 “Not a Number”를 의미합니다. NaN과 동일한 것은 없습니다. 심지어 NaN도 마찬가지입니다.

```
console.log(NaN == 0)  // false
console.log(NaN === 0) // false
console.log(NaN == NaN)  // false
console.log(NaN === NaN) // false
```

- 하지만 적어도 대칭적으로 모든 것 은 항상 NaN과 동일하지 않습니다.

```
console.log(NaN != 0)  // true
console.log(NaN !== 0) // true
console.log(NaN != NaN)  // true
console.log(NaN !== NaN) // true
```

- IEEE-754 float를 포함하는 모든 언어가 동일하게 동작하므로, 기술적으로 JavaScript만의 문제는 아닙니다.
- JavaScript의 기본 숫자 타입은 부동소수점 숫자이며, JavaScript는 숫자 구문을 종종 NaN으로 분석할 수 있습니다. 그러므로 NaN 값 확인은 일반적이며, Number.isNaN를 사용하면 올바르게 확인할 수 있습니다. 하지만 위에서 언급했듯이 많은 사람들이 실수로 someValue === NaN을 사용해서 확인하게 됩니다.

<br />

- TypeScript는 이제 NaN 값을 직접 비교하면 오류를 보여주고 Number.isNaN 사용을 제안합니다.

```
function validate(someValue: number) {
    return someValue !== NaN;
    //     ~~~~~~~~~~~~~~~~~
    // error: This condition will always return 'true'.
    //        Did you mean '!Number.isNaN(someValue)'?
}
```

- 이번 변경(Number.isNaN)은 TypeScript가 현재 객체 및 배열 리터럴에 대한 비교에서 오류를 발생시키는 방식과 유사하게, 초보자 오류를 잡는 데 큰 도움이 될 수 있습니다.
