package com.example.demo.repository;

import com.example.demo.model.Users;
import org.apache.catalina.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<Users, Long> {

    // 회원 생성
    Users save(Users user);

    // id로 회원 검색
    // Optional ? null safe
    Optional<Users> findById(Long id);


    // username으로 회원 검색
    Optional<Users> findByUserName(String username);

    // 회원 전체 출력
    List<Users> findAll();
}