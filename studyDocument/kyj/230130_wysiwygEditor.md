# network remind

## 1. Osi (`O`pen `S`ystems `I`nterconnection) Model
![img](https://blog.kakaocdn.net/dn/O609U/btrfKAzWkAc/6K0pEkvdHSmADVUTWB34vK/img.png)  

## 5. 세션 계층  
앞서 "3Layer 네트워크 계층"의 IP를 통해 컴퓨터를 찾아가고, "4Layer 전송 계층" 포트 번호를 이용해 컴퓨터의 애플리케이션을 찾아가고, "TCP"로 안전한 연결을 확인했습니다.

그러면 이제 "서버의 애플리케이션"과 "클라이언트 애플리케이션" 사이에 데이터 전송을 위한 논리적인 연결통로가 생깁니다.

이 때 실시간으로 데이터를 주고 받기 위한 두 컴퓨터의 논리적 연결, 만남(Session)을 "세션(Session)"이라 하며 이런 세션을 만들고, 유지, 종료할 때 사용되는 기술과 장비들을 `"세션 계층"`이라고 합니다.


### [주요기능]
\- 세션 계층에서는 응용 프로그램 간의 논리적인 연결 즉 세션 생성 및 제어를 담당합니다. 이를 포트(Port) 연결이라고도 합니다.  

\- 모든 통신 장치 간에 연결을 설정하고 관리 및 종료합니다.
연결이 `전이중`(Full duplex / 양방향), `반이중(half duplex / 단방향)` 여부를 확인합니다.  

\- 체크 포인팅과 유휴, 재시작 과정 등을 수행합니다. 그렇기 때문에 호스트가 갑자기 중지되지 않고 정상적으로 호스트를 연결하는 데 책임이 있습니다.

\- 하지만 4계층에서도 연결을 하고 종료할 수 있기 때문에 우리가 어느 계층에서 연결이 끊어졌는지 판단하기에는 한계가 있습니다. 그러므로 세션 계층은 4계층과 무관하게 응용 프로그램 관점에서 봐야합니다.

### Full Duplex
두 디바이스간 통신선이 두 개(송신선, 수신선)
송신선과 수신선선이 각각 존재하므로 데이터 송신과 동시에 수신이 가능합니다.
![img](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbDzEMK%2FbtqXRu3SnAJ%2FlotMSRxsWHwk00php6wrf0%2Fimg.png)

### Half Duplex
두 디바이스 간 하나의 통신선으로 송신과 수신을 해야 하므로 송신과 수신을 동시에 할 수 없다. 한쪽이 송신 시 다른 쪽에서는 수신만 가능합니다. 다만 데이터 전송 간격이 짧고 속도가 빠르면 송신과 수신을 번갈아가며 통신해도 마치 Full Duplex 같이 느껴질 수 있습니다.  
![img](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fs40N9%2FbtqXMdBTTbF%2FYMYsslKNaB5vWXdrVEBalK%2Fimg.png)

### 5-1. 쿠키와 세션차이
|구분|Cookie|Session |
|:---:|:---:|:---:|
|저장위치|클라이언트(로컬)|서버|
|라이프사이클|쿠키 저장시 설정<br>(브라우저가 종료되더라도만료시점이 지나지않으면 자동삭제되지 않음)|브라우저 종료시 삭제(기간 별도 지정 가능) |
|보안|로컬에 저장되어 탈취,변조 위험 존재. 비교적 취약|서버에 저장되므로 안전|
|속도|로컬에 있으니 빠름|제공받은 세션아이디를 이용해서 서버에서 다시 데이터를 참조해야 하므로 비교적 느림 |

[참조]  
[세션 계층](https://mamu2830.blogspot.com/2020/06/osi-7.html)