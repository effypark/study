# git: branch rollback 2

![img](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbKybQu%2FbtqDg4SUEx6%2FKdyv2aCtOOnZDtErGKiCEK%2Fimg.png)
## 1. .gitignore
\- Git 버전 관리에서 제외할 파일 목록을 지정하는 파일입니다. git으로 프로젝트를 관리할 때, 그 프로젝트 안의 특정파일들은 Git으로 관리할 필요가 없는 경우가 있습니다. 본 파일은 프로젝트의 최상단에 위치해 있도록 해야 적용됩니다.

주로 용량면에서 `.node-module`, 보안상의 이유로 private key 값 등을 가지고 있는 파일 등을 입력하여 업로드에서 제외 해주도록 합니다.

## 1-1. 주의점
\- 이미 버전 관리에 포함되어 있는 파일들을 추후에 .gitignore 파일에 기록한다고 해서 Git이 알아서 버전 관리에서 제외 하지는 않습니다. 즉 Git이 계속해서 해당 파일을 추적(Track)하고 있다는 뜻입니다. 예를들어, 자신의 원격저장소에 올라가 있는 파일을 삭제하고 더 이상 추적(Track)을 받고 싶지 않다면 수동으로 해당 파일들을 버전 관리에서 제외시켜줘야 합니다.

```
$ git rm -r --cached . (현재 레포지토리의 캐시를 모두 삭제한다.)
$ git add .
$ git status
$ git commit -m "커밋메세지"
$ git push {remote} {branch}
```