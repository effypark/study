package com.example.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController

public class DemoControllerTest {
    @GetMapping("/test/hello")

    public String hello() {
        return "<h1>230104 안녕 스프링 부트</h1>";
    }
}
