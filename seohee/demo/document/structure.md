* controller 폴더 : 말 그대로 경로와 메서드에 따른 부분을 작성하는 파일을 담는 폴더이다.
* entity 폴더 : 테이블 엔티티 파일과 관련한 파일을 담는 폴더이다.
* repository : 엔티티 파일들을 기반으로 하여 repository 를 연결하는 부분이다.
* service : 실제 로직적인 코드가 작성되는 부분이다.
  ~ 컨트롤러 폴더안의 파일에서 service 폴더의 파일을 호출하여 사용하고, service 폴더 안의 파일은 컨트롤러 파일 부분에서 사용된다.

==> 컨트롤러 파일에서 서비스 로직 파일을 호출하고, 서비스로직파일에서는 레포지토리 인터페이스를 사용하여 데이터베이스에 데이터를 입력한다.

***

![](../../../../../../var/folders/r3/7m4blks55kn4z4xy5lhvb98r0000gn/T/TemporaryItems/NSIRD_screencaptureui_JFXpNk/스크린샷 2023-01-14 오후 11.26.19.png)

