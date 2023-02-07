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

        return "index";
    }
}
