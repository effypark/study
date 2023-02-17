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
