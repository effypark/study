# Console, Terminal, Shell, TTY

## 1. Terminal
`Terminal`은 명령의 콘솔의 한 종류로서 윈도우에서는 명령프로토콜(cmd)이라고도 부르는 입출력을 표시하는 환경입니다. 간단히 말해서 이것은 단순한 입/출력 환경(interface)이며, 실질적으로 컴퓨터와 상호작용하여 명령을 처리하고 출력하는 것은 `Shell`이다. 

## 2. Console
콘솔은 실제 컴퓨터와 물리적으로 가깝거나 직접 연결된 단말기로, 기본적으로 물리적인 접근을 의미하기 때문에 일반적으로 보안 권한이 높아집니다.
 초창기에는 엄연히 실물 단말기로서 존재하였던 녀석이라 현재까지도 물리적 터미널이라고 불리고 있는 듯 합니다. 여기서 언급하는 콘솔은 이제 가상의 형태인 프로그램으로 진화하였기에 물리적인 의미는 없어졌습니다.

하여 최종적으로는 사용자가 명령 형태로 입력을 주고 커널 메시지, 경고 및 출력을 표시하는 터미널 에뮬레이터와 같은 것입니다.

## 2. TTY(`T`ele`T`y`P`ewriter) 
Ctrl-Alt-F1 ~ F6 키조합으로 사용할수있는 리눅스 OS 에서 제공하는 가상콘솔 입니다. 실제 물리적인 장치가 연결된 것이 아니기 때문에 커널에서 터미널을 emulation하는 방식으로 동작합니다.

```
데스크탑 복귀 : ALT + F2
```

## 3. Shell
쉘은 사용자와 커널 사이에 위치하며 명령 실행 및 제어 관리를 담당합니다.
가장 큰 특징으로 초기화 파일 기능을 이용해 환경변수를 등록하고 사용자의 환경을 설정할 수 있습니다. 로그인 시 이 초기화 파일이 실행되어 사용자의 초기 환경이 설정됩니다.

위 터미널과 TTY은 쉘에게 입력값을 던져주는, 즉 쉘을 이용하는 도구이며, 이를 해석하고 번역하여 실행 후 결과값을 돌려주는 것이 쉘이라고 할 수 있겠습니다.

[종류]  
\- Bash shell(/bin/bash) - 리눅스 표준
\- Korn shell(ksh)  
\- Z shell(zsh)  
\- Windows:PowerShell  

```
echo $SHELL // 사용중인 쉘 확인
```

## 4. 결론
 터미널은 쉘을 가져다 쓰는 텍스트 입출력 환경이고, 콘솔은 가상환경에서 터미널을 돌려주는 에뮬레이터이니 그게 그거라는 말이 많았던 것 같습니다.

[참조]  
[Difference Between a Terminal, Shell, TTY, and Console _ Baeldung on Linux](https://www.baeldung.com/linux/terminal-shell-tty-vs-console)
[Difference Between a Terminal, Shell, TTY, and Console](https://www.linuxshelltips.com/difference-between-terminal-shell-tty-and-console/)  
[What is the difference between shell, console, and terminal_ - Quora](https://www.quora.com/What-is-the-difference-between-shell-console-and-terminal)  
[Linux Terminal - javatpoint](https://www.javatpoint.com/linux-terminal)
[[Linux] Terminal이 무엇일까](https://coding-nyan.tistory.com/51)