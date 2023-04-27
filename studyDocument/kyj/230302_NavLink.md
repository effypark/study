# react-router-dom: NavLink

## 1. Link 컴포넌트를 이용한 페이지 이동
```
import { Link } from 'react-router-dom';

~
<Link to="/about">About</Link>
```

## 2. NavLink를 사용한 active check
"활성"여부를 확인할 수 있어 `<NavLink>`는 현재 선택된 메뉴를 표시하려는 탭 집합과 같은 탐색 메뉴를 만들 때 유용합니다.

case 1. style
```
<NavLink
    to="경로"
    style={({ isActive }) =>
        isActive ? activeStyle : undefined
    }
>
    Messages
</NavLink>
```

case 2. className
```
<NavLink
    to="경로"
    className={({ isActive }) =>
        isActive ? activeClassName : undefined
    }
>
    Tasks
</NavLink>
```

case 2-1. isActive
```
<NavLink
    to="경로"
    isActive={({ isActive }) =>
        isActive ? activeClassName : undefined
    }
>
    Tasks
</NavLink>
```

case 3. use location.pathname
```
<NavLink 
    to="/contact"
    isActive={(match, location) => {
    return match || location.pathname === "/contact";
}}>
    Contact
</NavLink>
```

case 4. activeClassName
```
<NavLink 
    to="/contact"
    activeClassName="active"
>
    Contact
</NavLink>



option
exact: 딱 지정해준 경로만 인정합니다.
```
ex) exact가 없다면 '/'가 포함된 모든 경로가 true로 인지합니다.
<NavLink 
    to="/"
>
   main
</NavLink>

ex) exact 옵션 추가시 '/'에 대해서만 true로 인지합니다.
<NavLink 
    to="/"
    exact
>
   main
</NavLink>
```