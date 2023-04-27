# git: merge

## [동작 방식]
```
A: 원본 브랜치
B: 작업브랜치
```

### 1. Merge
![img](https://raw.githubusercontent.com/ParkJiwoon/PrivateStudy/master/git/images/screen_2022_06_20_03_49_52.png)

가장 일반적인 Merge 방법으로, B의 모든 커밋 로그와 하나로 합친 Merge Commit 로그가 전부 남습니다.  

### 2. Fast-Forward Merge
![img](https://raw.githubusercontent.com/ParkJiwoon/PrivateStudy/master/git/images/screen_2022_06_20_03_50_22.png)

브랜치를 딴 이후로 A에 아무런 커밋이 없었다면 merge 할 때 Fast-Forward 방식으로 합쳐집니다. 역으로 병합하려는 A에 커밋이 존재한다면 Fast-Forward Merge 가 되지 않습니다. 

 
별도의 Merge 기록 없이 원래 main 에서 작업한 것처럼 로그가 남습니다.    

 
### 3. Squash
![img](https://raw.githubusercontent.com/ParkJiwoon/PrivateStudy/master/git/images/screen_2022_06_20_03_48_58.png)

B의 모든 커밋을 하나의 커밋으로 만들어 A에 Merge합니다.

B 여러 수정 등으로 쓸데없는 커밋이 많아진 경우 이를 다 기록하지 않고 하나의 새로운 커밋으로 남길 수 있습니다.

대신 B의 수정사항이 큰 경우 하나의 커밋으로 전부 표현하기 보다 커밋을 잘개 쪼개는게 알아보기 더 편할 수 있기 때문에 신중히 사용해야 합니다.

### 4. Rebase
![img](https://raw.githubusercontent.com/ParkJiwoon/PrivateStudy/master/git/images/screen_2022_06_20_03_51_43.png)

A에 아무런 추가 커밋이 없다면 Fast-Forward 와 동일하게 HEAD 만 이동합니다. 단, 다른 커밋이 있다면 이름 그대로 커밋을 시간순으로 `재배치` 합니다.  

즉 위와 같은 상태에서 git rebase feature 를 했다면 B의 커밋 내역이 먼저 찍히고 이후 A의 커밋이 찍힙니다.

만약 같은 범위를 수정해서 rebase 과정 중 충돌이 발생한다면 각 커밋 별로 충돌을 해결해야 합니다.

별도의 Merge Commit 이 남지 않는다는 점은 Fast-Forward 와 동일하지만 Rebase 는 각 브랜치에 다른 커밋이 있어도 하나의 줄기로 합쳐줄 수 있다는 장점이 있습니다.