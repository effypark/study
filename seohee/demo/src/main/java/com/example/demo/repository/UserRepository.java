package com.example.demo.repository;

import com.example.demo.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

// Entity 클래스와 해당 클래스의 Id 타입
// = <User, Long>
public interface UserRepository extends JpaRepository<User, Long> {

}