package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

// 데이터베이스와 실제 매칭되는 역할을 하는 클래스

@Entity // 데이터베이스와 연결된 객체를 Entity로 지정한다는 어노테이션
@Data  // 롬복의 어노테이션으로 Getter과 Setter를 직접 구현하지 않아도 사용할 수 있게 해주는 어노테이션

public class User{
    @Id
    // 데이터베이스에 Primary Key에 해당하는 칼럼을 지정하는 어노테이션
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    //  IDENETY를 설정하면 DB의 AutoIncreament를 사용

    private Long id;

    private String username;

    private String password;

}
