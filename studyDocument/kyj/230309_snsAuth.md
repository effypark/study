# sns auth

## 개요
\- 1. 카카오에 인가 코드 발급 요청
\- 2. 인가코드를 백엔드에 보낸다
\- 3. 토큰을 로컬스토리지에 저장한다
\- 4. 로컬 스토리지에 토큰여부 확인하여 로그인확인

### 1. 카카오에 인가코드 발급 요청
아래 코드는 kakao 공식 문서에서 제공하는 코드입니다.
```
 const KAKAO_AUTH_URI = `https://kauth.kakao.com/oauth/authorize?client_id=${kakao_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
```
kakao development 페이지에서 발급된 'kakao_API_KEY'와 
인가코드를 전달받을 'REDIRECT_URI'을 함께 구성하여 요청하면 됩니다.

### 2. 인가코드를 백엔드에 보낸다
앞서 인가코드 요청이 성공하면 REDIRECT_URI에 code 파라메터로 토큰이 전달됩니다. 보통 백엔드에서 제공해준 api에 post 요청으로 해당 토큰을 전달해줍니다.

### 3. 로그인 처리
토큰을 로컬스토리지에 저장합니다.
```
window.localStorage.setItem('token', token);
```

### 4. 로컬 스토리지에 토큰여부 확인하여 로그인 상태를 확인합니다.
```
const token = localStorage.getItem('token');

if (token) {
  // User is logged in
  console.log('User is logged in');
} else {
  // User is not logged in
  console.log('User is not logged in');
}
```