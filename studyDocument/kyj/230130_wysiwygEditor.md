# WYSIWYG Editor

## 1. WYSIWYG(What You See Is What You Get) Editor
![img](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FoUiWm%2FbtrCiQ0r5wR%2F4YPx2YK0IKRBFxIxMWKjnK%2Fimg.png)
보이는 대로 얻는다는 의미 그대로 문서 편집 과정에서 화면에 포맷된 낱말, 문장이 출력물과 동일하게 나오는 방식을 말합니다.

### 1-1.ckeditor
- [GNU General Public License](https://www.gnu.org/licenses/gpl-3.0.html) 필요.
- typescript 지원 하는 것으로 보여지나 적용을 위한 도큐먼트나 레퍼런스 찾는 중.


###ts관련 오류.
```
//오류내용
ERROR in src/Components/WysiwygEditor.tsx:2:22
TS7016: Could not find a declaration file for module '@ckeditor/ckeditor5-react'. 'C:/Users/rhksd/Documents/1d1c/app/node_modules/@ckeditor/ckeditor5-react/dist/ckeditor.js' implicitly has an 'any' type.
  Try `npm i --save-dev @types/ckeditor__ckeditor5-react` if it exists or add a new declaration (.d.ts) file containing `declare module '@ckeditor/ckeditor5-react';`
```

```
//설치 현황.
npm install --save @ckeditor/ckeditor5-react @ckeditor/ckeditor5-build-classic
npm i --save-dev @types/ckeditor__ckeditor5-build-classic
npm i --save-dev @types/ckeditor__ckeditor5-react
```

프로젝트 내 아무 곳에나 `typings.d.ts`파일을 추가해 준 뒤 아래 코드를 입력해주면,
동작 시 해당 파일을 인식하고 정상 동작 하게 됩니다.
```
//typings.d.ts
declare module '@ckeditor/ckeditor5-react';
declare module '@ckeditor/ckeditor5-build-classic';
```
프로젝트 내 아무곳이나 위치하면 되지만 대체로 가장 상위에 놓는 것이 일반적인 것 같습니다.