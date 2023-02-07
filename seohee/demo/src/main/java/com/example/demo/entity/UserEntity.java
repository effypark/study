package com.example.demo.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "users")

// 일종의 테이블 역할
public class UserEntity {
    @Id // pk 지정
    @GeneratedValue(strategy = GenerationType.IDENTITY) // auto_increment
    private Long id;

    @Column(unique = true) // unique 걸기
    private String name;

    @Column
    private String email;

    @Column
    private String password;

    @Column
    private String active;
}
