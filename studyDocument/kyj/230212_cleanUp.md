# react: clean-up function

## 클린업 함수
```
useEffect(() => {
  console.log('mount: show component') ; // mount 시 동작
  
  // 클린업 함수: unmount 시에 동작
  return () => {
    console.log('unmount');
  }  
}); 
```

기존 React의 Class에서는 흔히 componentDidMount에 구독(subscription)을 설정한 뒤 componentWillUnmount에서 이를 정리(clean-up) 하는 것을 말합니다.  

React는 컴포넌트가 마운트 해제되는 때에 정리(clean-up)를 실행하며, 이는 일회성이 아닌, 모든 리렌더링 시 마다 실행합니다.  

정리해보자면 clean-up 함수는 `Component의 unmount 이전 / update 직전에 어떠한 작업을 수행`하는 기능이 필요할 때 사용하게 됩니다.

### \- 왜 필요한가?
네트워크 호출이 반환되기 전에 네트워크 속도를 늦추거나 구성 요소를 마운트 해제하면 unmounted된 컴포넌트에 대해 상태를 업데이트할 수 없다는 메모리 누수 오류가 발생합니다. 

변수로 마운트가 되었는지 아닌지 관리해주면서 setState를 업데이트 해주어야 메모리 누수와 같은 오류를 막을 수 있습니다.

위와 같은 이유로 메모리 누수가 발생하지 않도록 정리(clean-up)해주는 과정이 필요합니다.


### \- 동작 과정
```
re-render 발생 -> 이전 effect clean-up -> effect
```
