# mac에서 살아남기: Linux CLI(Command Line Interface) 01

## 1. CLI란?
<img src="https://www.linuxjournal.com/sites/default/files/styles/max_650x650/public/u%5Buid%5D/CoolRetroTerm.png" alt=""/><br/>
CLI이란 명령어를 입력하여 원하는 동작을 도출해내는 근본 그 자체인 interface입니다. 단순 텍스트 기반이라 빠르고 GUI환경에 비해 다량의 데이터를 다룰 때 수정 및 편집이 수월합니다.

[참조]
[What is CLI](https://www.w3schools.com/whatis/whatis_cli.asp)

### 1-1. Linux setthing on window
CLI 자체를 경험해 보려면 그냥 cmd를 열어도 되지만 Linux CLI를 경험해 보려면 당연히 Linux를 기반으로 한 OS가 필수 입니다.<br/> 
집에서는 Windows OS 를 사용하고 있기에 가상환경을 이용하여 확인해 보았습니다.

[필요 구성품]<br/>
[VirtualBox-7.0.4-154605-Win](https://www.virtualbox.org/wiki/Downloads) : 가상환경을 셋업 할 수 있는 유틸입니다.<br/>
[Ubuntu](https://ubuntu.com/download/desktop/thank-you?version=22.04.1&architecture=amd64): 리눅스 커널을 기반으로 한 리눅스 배포판 OS입니다.

위 구성품으로 가상환경을 구성 해준 뒤 터미널을 열어 Linux CLI를 맞이해 봅니다.

### 2. CLI Command
시스템 조작
#### 1. pwd (Print Work Directory)
현재 사용자가 있는 디렉터리를 보여줍니다.
```
$ pwd
```

#### 2. ls (list segments)
현재 위치 내 파일과 디렉터리의 모든 정보를 리스트 형식으로 제공합니다. pwd와 연계되어 자주 사용되어집니다.
```
$ ls -al
```

#### 3. cd (change directory)
cd와 좌표만 있다면 어디든 갈 수 있습니다.
```
$ cd 이동할 경로
```

#### 4. mkdir (make directory)
필요한 권한만 가지고 있다면 Linux 시스템에서 원하는 위치에 폴더를 만들 수 있습니다.
```
mkdir [옵션][생성 할 디렉토리명]
```

[자주쓰는 옵션]<br/>
-m(mode)[defualt 755]: 디렉토리를 생성할 때 권한을 설정합니다. 디폴트로 주어지는 권한은 755입니다.
```
mkdir -m 644 test
```

-p : 상위 경로도 함께 생성합니다.
```
mkdir -p test1/test2
```

-v : 디렉토리를 생성하고 생성된 디렉토리에 대한 메시지를 출력합니다.
```
mkdir -v new_folder new_folder2 new_folder3
mkdir: created directory 'new_folder1'
mkdir: created directory 'new_folder2'
mkdir: created directory 'new_folder3'
```
[참조]<br/>
[linux Permission](https://securityspecialist.tistory.com/40)

#### 5. rmdir (remove directory)
디렉터리를 삭제할 때 사용하는 명령어입니다. 나름 안전장치로서 빈 디렉토리만 삭제할 수 있는 것이 특징입니다.
```
mkdir [옵션][생성 할 디렉토리]
```

#### 6. rm (remove)
`rmdir`가 비어있는 디렉토리 한정인 리미트 버전이라면 <span style="text-decoration: line-through">랩몬스터</span>는 조금 더 권한이 주어진 삭제 명령어입니다. 그런만큼 제거하기 위해서는 반드시 '-r'이나 '-d' 옵션이 있어야 합니다.
```
rm [옵션] [디렉토리 경로나 파일명]
```

[자주쓰는 옵션]<br/>
-r : 해당 폴더와 해당 폴더 안에있는 모든 파일, 디렉토리까지 삭제합니다. 하여 제귀적으로 지운다고도 표현 합니다.
```
$ mkdir -p test1
```

-d : 빈 디렉토리를 삭제하는 옵션입니다. dir 3글자를 절약하면서도 안전감은 가지고 갈 수 있습니다.
```
$ mkdir -d test1
```

-i : 각 파일 및 디렉토리를 삭제할 때 삭제여부를 묻도록 하는 옵션입니다. 아묻따 방지입니다.
```
$ mkdir -i test1
```

-f : 모든 오류를 무시하고 강제로 삭제하는 옵션입니다. 아묻따 명령어입니다.
```
$ mkdir -f test1
```

-v : 모든 처리과정 출력해줍니다. 잘못 삭제한 경우 모든과정을 눈으로 보게됩니다.
```
$ mkdir -v test1
```

옵션은 조합형으로 아래와 같이 쓸 수도 있습니다.
```
rm -rf * : 현재 디렉토리의 모든 것을 강제로 삭제
```