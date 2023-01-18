# mac에서 살아남기: Linux CLI(Command Line Interface) 04

## 1. grep (`G`lobal `R`egular `E`xpression `P`rint)
직역하면 '전역 정규식 출력' 이라는 이상한 말이 되지만  
간단히 말하면 `정규식을 활용한 검색` 정도 되겠습니다.

```
$ grep [OPTION] [PATTERN] [FILE]
```
테스트용 txt 파일입니다.
```
#sample.txt: cat > sample.txt으로 생성해줍니다. 
test test text text tt tT Aa aA Va VA Test TesT test.com
ii
ee
test txt tT 
Ta t.cOm
teei t e
eest testt text Tt

aa

=======================================================

#sample2.txt
test text test tT Tt Aa
tt ee test

ii
asd qwe test teeeee
test.com
```

### [옵션]  
-b: 문서 내 가장 첫글자를 기준으로 공백을 포함하여 카운트합니다. 각 줄마다 검색한 문자와 일치하는 시작점을 출력해줍니다.
```
$ grep -b t sample.txt

0: test test text text tt tT Aa aA Va VA Test TesT test.com
65: test txt tT
79: Ta t.cOm
88: teei t e
93: eest testt text Tt
```

-c : 문자와 일치하는 줄의 수 출력
```
$ grep -c t sample.txt
//result: 모든줄에 t가 포함되어있어 5가 출력됩니다.
```

-h : 여러 파일에서 문자열을 찾을 때, 파일명 출력을 생략합니다.
```
$ grep -h [검색어] [파일명] [파일명]
```
```
grep ii sample.txt sample2.txt // 기본 명령어
sample.txt:ii
sample2.txt:ii
================================================

grep -h ii sample.txt sample2.txt // -h
ii
ii
```

-i : 대소문자를 구분하지 않습니다.
```
$ grep -i t sample.txt
```

-n : 검색어를 포함하고 있는 줄의 번호와 내용을 같이 출력해줍니다.
```
$ grep -n t sample.txt
1: test test text text tt tT Aa aA Va VA Test TesT test.com
4: test txt tT
5: Ta t.cOm
6: teei t e
7: eest testt text Tt
```
-v : 문자가 포함되지 않는 행 출력
```
$ grep -v t sample.txt
ii
ee

aa
```

-w : 검색어 포함이 아닌 한 단어로 정확히 일치하는 부분을 찾아줍니다. `.`은 마침표이기에 바로 뒤에 붙어도 개별단어로 인정되어집니다.
```
$ grep -t t sample.txt
Ta t.cOm
teei t e
```

-r : 현재 디렉토리를 포함하여 하위 디렉토리에서도 검색어를 찾아해줍니다.
```
$ grep -r [검색어]
$ grep -r [검색어] [파일명] // 파일을 특정해 줄 수도 있습니다.
$ grep -r [검색어] [파일명] [파일명] // 복수 파일도 가능합니다.
```

-A, -B : 특정문자가 포함된 행으로부터 N줄까지 출력해줍니다.  
행 갯수를 입력해 주지 않으면 기본값이 지정되있지 않기에 length오류가 납니다.
방향은 아래와 위로 설정이 가능하며 각 A는 아래 B는 위를 위미합니다.
```
$ grep -A [출력할 행 max 갯수] [검색어] [파일명]
```

```
$ grep -A 50 ii sample.txt
ii
ee
test txt tT 
Ta t.cOm
teei t e
eest testt text Tt

aa

=========================================================

$ grep -B 50 ii sample.txt
test test text text tt tT Aa aA Va VA Test TesT test.com
ii
```

