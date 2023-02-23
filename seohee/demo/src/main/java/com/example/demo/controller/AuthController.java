package com.example.demo.controller;

import com.example.demo.dto.UserDto;
import com.example.demo.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
@RequiredArgsConstructor
public class AuthController {
    // 생성자 주입
    private final UserService userService;

    @GetMapping("/auth/join")
    public String joinForm() {
        return "join";
    }

    @PostMapping("/auth/join")
    public String join(@ModelAttribute UserDto userDto) {
        System.out.println("userDto = " + userDto);

        userService.save(userDto);

        return "login";

//        <dependency>
//        <groupId>org.springframework.boot</groupId>
//        <artifactId>spring-boot-starter-security</artifactId>
//        </dependency>

//        스프링 시큐리티는 프로젝트 짤 때 로그인한 유저에 대해 쉽게 관리할 수 있게 해줍니다.
//        세팅만 할 수 있다면 유저의 id와 pw에 따른 로그인 진행(인증과정), 권한(ROLE) 부여와 권한에 따른 접근 제어, 유저 정보 보관, 세션 관리 등을
//        간단하게 처리할 수 있습니다.

    }
}
