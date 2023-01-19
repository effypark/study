> ### **📝 Custom Hook Study**

- 불필요하고 지저분한 코드 정리하자
- react 사이클을 이해하자
- 재사용 가능한 hook 을 만들자

_참고 링크 : <https://usehooks.com/>_

---

<br />

- [x] useInputs : input state 관리 hook
- [x] useConfirm : onConfirm event handling hook
- [x] useAsync : 요청 상태관리 hook
- [x] useToggle : toggler hook
- [ ] useSessionStorage : 세션 스토리지 상태 저장 handling hook
- [x] useLocalStorage : 로컬 스토리지 상태 저장 handling hook
- [x] usePrevious : props 또는 state 의 이전 값을 얻기 위한 hook
- [x] useAnimation : 부드러운 애니메이션 구현 hook (이미지, 선형, 도형 등 애니메이션 사용할 때 useState 나 useEffect 를 사용하지 않고 useAnimationTimer hook 을 사용해서 구현 할수 있음)
- [x] useAnimationTimer : 타이머 로직 hook (이건 잘 활용하면 여기저기 쓸 수 있을 것 같아 좀 더 연습해볼 예정!!)
- [x] useScrollFadeIn : 요소를 fade in-out 시키는 hook (스크롤에 따라 화면에 요소를 노출할 때)
- [x] useTransition : unmount 되는 컴포넌트에 애니메이션을 추가하기 위한 hook (클릭 이벤트로 mount/unmount 시 transition 이 일어나는 컴포넌트를 개발 중에 useScrollFadeIn 으로 스크롤에 의존해서 효과를 주는 것을 변경해서 재사용해보려 했으나, unmount 시 transition 을 주기 어려워 적용해봄)
- [x] useFullScreen
- [x] useStep : 한 모달 내에서 multi step 으로 구현하고자 사용해보았는데, 사용할 때 훨씬 가독성이 좋은 것 같아 기록
