# Java DB setting check
JPA 
- Java Persistence API (자바 ORM 기술에 대한 API 표준 명세)
- JPA는 자바 객체와 DB 테이블 간의 매핑을 처리하는 ORM(Object Relational Mapping) 기술의 표준입니다.
- JPA는 테이블을 따로 생성하지 않아도, 엔티티(Entity) 클래스를 기준으로 테이블과 알맞은 타입의 컬럼을 자동으로 생성

Hibernate
- JPA를 사용하기 위해서 JPA를 구현한 ORM 프레임워크중 하나.
- Hibernate는 JPA 명세의 구현체이다. 
- javax.persistence.EntityManager와 같은 JPA의 인터페이스를 직접 구현한 라이브러리이다.

JPA에서는 단순히 Repository 인터페이스를 생성한후<br>
JpaRepository<Entity, 기본키 타입> 을 상속받으면(extends하면) <br>
기본적인 Create, Read, Update, Delete가 자동으로 생성된다.

- JPA 처리를 담당하는 Repository는 기본적으로 4가지가 있다. (T : Entity의 타입클래스, ID : P.K 값의 Type)
1) Repository<T, ID>
2) CrudRepository<T, ID>
3) PagingAndSortingRepository<T, ID>
4) JpaRepository<T, ID>

Lombok(롬복)이란?
- VO/DTO/Domain 객체를 생성해 getter/setter 그리고 toString 메서드를 만듭니다.
- 처음에 개발 초기에는 깔끔하게 하지만 잦은 수정과 필드명 변경 추가에 따라 관리가 쉽지 않습니다.

1. 롬복(Lombok)은 자바 클래스를 만들때 자주 사용되는 getter/setter나 toString 등의 코드를 어노테이션으로 대체해서 선언 
2. java 코드를 컴파일 할 때 그에 맞는 코드를 생성