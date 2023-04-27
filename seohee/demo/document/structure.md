* controller 폴더 : 말 그대로 경로와 메서드에 따른 부분을 작성하는 파일을 담는 폴더이다.
* entity 폴더 : 테이블 엔티티 파일과 관련한 파일을 담는 폴더이다.
* repository : 엔티티 파일들을 기반으로 하여 repository 를 연결하는 부분이다.
* service : 실제 로직적인 코드가 작성되는 부분이다.
  ~ 컨트롤러 폴더안의 파일에서 service 폴더의 파일을 호출하여 사용하고, service 폴더 안의 파일은 컨트롤러 파일 부분에서 사용된다.

==> 컨트롤러 파일에서 서비스 로직 파일을 호출하고, 서비스로직파일에서는 레포지토리 인터페이스를 사용하여 데이터베이스에 데이터를 입력한다.

<<<<<<< HEAD
***

![](../../../../../../var/folders/r3/7m4blks55kn4z4xy5lhvb98r0000gn/T/TemporaryItems/NSIRD_screencaptureui_JFXpNk/스크린샷 2023-01-14 오후 11.26.19.png)

=======
- 스프링부트도 MVC 패턴 사용함


html에서 Controller로 정보 전달
Controller에서 정보를 받은 후 Service로 전달
Service에서 Entity로 정보 전달
Entity에서 DTO타입을 Entity타입으로 변환 후 Service에 전달
Service에서 받은 후 Repository(JPA)로 전달
처리 완료 후 지정한 메서드 or 페이지로 이동


html -> controller -> service -> entity -> service -> Repository(JPA) -> page

main() ? 
- 웹 어플리케이션 실행 역할

src/main/resources/templates ?
- 타임리프(Thymeleaf) 템플릿 엔진의 사용을 권장
- 타임리프는 JSP와 마찬가지로, HTML 내에서 데이터를 처리하는 데 사용 (blade ?)

src/main/resources/application.properties ?
- 웹 애플리케이션을 실행하면서 자동으로 로딩되는 파일
- 톰캣(Tomcat)과 같은 WAS(포트 번호, 콘텍스트 패스 등)의 설정이나,
데이터베이스 관련 정보 등 각각으로 분리되어 있는 XML 또는 자바 기반의 설정을
해당 파일에 Key-Value 형식으로 지정해서 처리

src/test/java ?
- 클래스를 이용해서 각각의 개발 단계에 알맞은 단위 테스트를 진행
>>>>>>> 6cdba5e5d59d4765ebd0fb6a3fef19579c1e6764
