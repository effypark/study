# git: .gitAttributes

## gitAttributes 란?
\- 파일마다 다른 Merge 전략을 사용하도록 설정할 수 있다. Merge 할 때 충돌이 날 것 같은 파일이 있다고 할 때, ‘Git Attrbute’에 등록된 특정 파일에 대해서만 항상 현재 브랜치의 버전을 사용하도록 설정할 수 있습니다.  

이 설정은  환경 설정과 관련된 파일은 Merge 하지 않는 것이 편리하기 때문에 다양한 환경에서 운영하려고 만든 환경 브랜치에 Merge 할 때 좋습니다.(ex)main, dev…)  

예를 들자면 브랜치에 database.xml 이라는 파일이 있으며, 이 파일은 특정 환경마다 필요한 내용이 다릅니다. 그렇기 때문에 Merge 되었을 때 내용이 변경되면 안됩니다.  

이 때 Attribute를 아래와 같이 설정하면 해당 파일은 Merge 시에 병합되지 않습니다.

[적용법]
```
.gitattributes를 디렉토리 최상단에 생성 후 아래 내용 입력.
[target file] merge=ours

Ex)
database.xml merge=ours
```

ours merge 전략을 다음과 같이 정의합니다.
```
$ git config --global merge.ours.driver true
$ git config -l //확인
```

다른 브랜치로 이동해서 Merge를 실행했을 때 database.xml 파일에 대해 충돌이 발생하는 대신 아래와 같은 메시지를 보게 됩니다.  
```
$ git merge topic
Auto-merging database.xml
Merge made by recursive.
```
만약 실행 중인 프로젝트에 추가하는 상황이라면, 아래 코드를 입력하여 git이 다시 확인하고 다시 적용하도록 강제합니다.
```
git rm --cached -r .
git add -A
```

[다른 유저의 시도]
'dev' 브랜치에 '.gitattributes'를 생성하고, 추가하고, commit 후, dev에 push.
'main'에 'dev'를 merge합니다. 
'main'으로 push합니다. 

이것은 문제의 파일을 성공적으로 무시했습니다.  

'제외할 파일명 merge=ours'를 사용하여 '.gitattributes' 파일을 'main' 브랜치에 추가한 다음 'git config —global merge.ours.driver true'를 실행하면 훌륭하게 작동했습니다. 

'dev'의 구성파일을 'main'의 구성 파일에 병합되지 않았습니다. 

다만 안타깝게도 병합 중에 '.gitattributes' 파일이 삭제되었습니다(왜냐하면 'dev'에 존재하지 않았기 때문입니다) 

이것을 어떻게 피합니까? 동일한 '.gitattributes' 파일을 'dev'에 추가하시겠습니까? '우리'의 가치가 충돌을 일으킬까요?  

-> dev에도 .gitattributes를 추가함으로서 해결한 것으로 보여집니다.

위 방법은 github에서 테스트 시 동작하였습니다. 다만 gitLab을 통한 시도는 실패했기에 추후 재도전 해볼 예정입니다.

[git 레파지토리 서버별(prod/staging/testing 등) 설정](https://emflant.tistory.com/261)
[[GIT]-Git Attributes 운영, 테스트 서버 속성 파일 각각 저장하기(머지 제외하기)](https://m.blog.naver.com/spring1a/222084657804)