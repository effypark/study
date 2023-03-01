# Design pattern

## 1. MVC(Model-View-Controller) Design pattern
\- 3가지 형태로 구분하여 개발하는 소프트웨어 개발 방법론입니다.

### 1-1. Model
\- `무엇`을 할지 정의합니다. 내부 비지니스 로직에서의 알고리즘, 데이터 등의 기능을 처리 합니다.

### 1-2. Controller
`어떻게` 할지를 정의합니다. 요청을 받아서 화면과 Model과 View를 연결시켜주는 역할을 합니다.

### 1-3. View
우리에게 익숙한 그 부분입니다. 웹이라면 웹페이지, 모바일이라면 어플의 화면의 `보여지는 부분`입니다.

[동작구성]

![img](https://velog.velcdn.com/images%2Fsssssssssy%2Fpost%2F018000c1-4981-4b9e-85b8-96d73885ca24%2Fimage.png)
```
# input
View -> Controller -> Model

# outPut
Model -> Contoller -> View

리액트에서는 아래와 같이 표현될 수 있습니다.
View: JSX
Controller: 컴포넌트에 있는 로직
Model: State 또는 store
```

## 2. Flux Design pattern
![img](https://velog.velcdn.com/images/bluejoyq/post/ea936cd9-ddf0-4500-a098-1b8e7692ea00/image.png)

\- Flux는 선속 · 라틴어 fluxus에서 나온 단어로 이는 flow(흐름)를 의미합니다.

단방향 데이터 흐름을 사용하여 앱의 여러 구성 요소 뷰 간에 데이터를 전달함으로써 확장성 문제를 해결합니다. 

redux를 활용한다면 해당 디자인 패턴을 추천하고 있습니다.

구성은 크게 store, dispatcher, view로 구분 할 수 있습니다.  

사용자(client)가 view와 상호 작용할 때 뷰는 기본 dispatcher를 통해 모든 애플리케이션 데이터가 보관된 store로 작업을 dispatch하고 store에서 필요한 정보로만 대상 view를 업데이트합니다.

### 2-1. store
메서드를 통해 상태를 관리하는 동작 개체로, 전체 앱의 상태 관리를 담당하고 수신한 dispatch에 따라 view를 업데이트하기 위해 데이터를 보냅니다.

### 2-2. dispatcher
어플리케이션의 중앙허브로서 발생한 action들을 정리해주어 데이터의 흐름을 관리하는 역할을 합니다. 

보통 store의 내장함수인 `dispath()`에 action(event)를 전달하는 `dispath(action)`의 형태로 호출하기 때문에 action을 발생시키는 `action creators` 로서 이용됩니다. 이 함수가 실행되며 변경이 발생하며, 리듀서 함수가 이를 인지하고 상태를 업데이트 해줍니다.

[참조]
[Flux로의 카툰 안내서](https://bestalign.github.io/translation/cartoon-guide-to-flux/)

다시금 되뇌어 보는 redux의 편안함.

기존 데이터관리.
![img](https://blog.kakaocdn.net/dn/zdz53/btrILe9Baby/o6gnWjTJru61vEFeqs63J0/img.gif)

redux의 데이터관리
![img](https://blog.kakaocdn.net/dn/yfpFE/btrINu5cPZg/dmrqRgPprXMRQ40dND2Q70/img.gif)