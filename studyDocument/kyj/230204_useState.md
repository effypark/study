# useState

## 1.useState 동기 처리에 대한 정리
seState는 비동기적으로 작동합니다. 그렇지만 input태그를 다루려다보면 필연적으로 동기적으로 동작해야하는 상황이 오기 마련입니다.

이 때 그냥 사용했다가는 사용자가 입력했다고 생각한 값이 아닌 한템포 느린 데이터가 넘어오게 되며, 이는 기능적 결함으로 이어 질 수 있습니다.

이를 해결해주기 위해서는 실행해주고자 하는 기능을 useEffct에 담아주고 의존성 state를 등록해주는 방식으로 사용할 수 있습니다.

```
useEffect(() => {
    ~code~
}, [dependencyState]);
```

다만 useEffect는 상태를 React 외부의 요소(서버, 브라우저 스토리지 등)와 동기화 하는 경우에만 사용하도록 권장되어지기 때문에 해당 방식은 의외로 편법에 가까운 부분으로 볼 수 있겠습니다.

하여 state setter 함수를 useEffect를 이용하여금 동기적으로 사용하려한다면 그냥 state로 쓰지 않는 것이 더 나을지도 모릅니다.

```
import { fetchData } from './api'
import { computeCategories } from './utils'

const App = () => {
  const [data, setData] = React.useState(null)
-  const [categories, setCategories] = React.useState([])
+  const categories = data ? computeCategories(data) : []

  React.useEffect(() => {
    async function fetch() {
      const response = await fetchData()
        setData(response.data)
      }

      fetch()
    }, [])

-  React.useEffect(() => {
-    if (data) {
-      setCategories(computeCategories(data))
-    }
-  }, [data])

  return <>...</>
}
```