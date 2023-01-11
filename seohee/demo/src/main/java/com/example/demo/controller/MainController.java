package com.example.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;

public class MainController {
    @GetMapping("/")
    public String index() {
        return "index";
    }

    @GetMapping("/join")
    public String joinForm() {
        return "user/join";
    }
}
