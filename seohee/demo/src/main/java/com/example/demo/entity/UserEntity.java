package com.example.demo.entity;

import com.example.demo.dto.UserDto;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Setter
@Getter
@Table(name = "users")

// 일종의 테이블 역할
public class UserEntity {
    @Id // pk 지정
    @GeneratedValue(strategy = GenerationType.IDENTITY) // auto_increment
    private Long idx;

    @Column(unique = true) // unique 걸기
    private String name;

    @Column
    private String email;

    @Column
    private String password;

    public static UserEntity toUserEntity(UserDto userDto) {
        UserEntity userEntity = new UserEntity();
        userEntity.setName(userDto.getName());
        userEntity.setEmail(userDto.getEmail());
        userEntity.setPassword(userDto.getPassword());
        return userEntity;
    }
}
