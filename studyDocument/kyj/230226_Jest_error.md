# Jest & testing-library

## jsx' flag is provided.ts(17004)
```
Cannot use JSX unless the '--jsx' flag is provided.ts(17004) 
```
VS코드에 TS버전이 내가 global에 설치한 버전과 달라서 발생하는 이슈입니다. 

### 해결1
```
# app\tsconfig.json

"compilerOptions": {
  ...
  "jsx": "react-jsx"
  ...
},
```

"react-jsx" 부분에 에러가 생겨 아래와 같은 문제가 발생한다.
위와 같이 변경하면 잠시 에러가 잡히지만,
다시 vsCode를 실행하면 자동으로 react-jsx로 바뀌며 에러 발생할 수 있습니다.

### 해결2
```
- vsCode의 settings를 열어 settings.json에 "typescript.tsdk": "{global_npm_path}/typescript/lib"을 입력해줍니다.
- F1을 눌러 typescript 입력
- TypeScript : Select TypeScript Version...을 클릭.
- Use VS Code's Version 이 선택되어있다면 Use Workspace Version으로 변경해줍니다. 
- .setting.json 가 변경되면서 해결됩니다.
```

## TS1259 error
```
TS1259: Module '~' can only be default-imported using the esModuleInterop flag
```
런타임 Babel 생태계와의 호환성을 위해서는, 이 프로퍼티를 true로 지정하여 위의 두 헬퍼 함수를 사용하여 컴파일을 진행하게끔 하는 것이 좋다. Babel도 이와 같은 방식으로 컴파일을 하기 때문입니다.

 그리고 타입 시스템의 호환성을 위해서 `--allowSyntheticDefaultImports` 프로퍼티도 true로 지정하는 것이 좋은데, 이는 `esModuleInterop` 프로퍼티를 true로 지정하면 자동으로 true로 지정됩니다.

```
# app\tsconfig.json

"compilerOptions": {
  ...
  "allowSyntheticDefaultImports": true,
  "esModuleInterop": true,
  ...
},
```
