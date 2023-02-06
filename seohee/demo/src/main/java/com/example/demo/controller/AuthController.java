package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class AuthController {
    @GetMapping("/auth/join")
    public String joinForm() {
        return "join";
    }

    @PostMapping("/auth/join")
    public String join(@RequestParam("userName") String userName) {
        System.out.println("AuthController.join"); // soutm
        System.out.println("userName = " + userName); // soutp
        return "index";
    }
}
