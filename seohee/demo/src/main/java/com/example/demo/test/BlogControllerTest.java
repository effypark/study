package com.example.demo.test;

@RestController
public class BlogControllerTest {

    @GetMapping("/test/hello")
    // http://localhost:8080/test/hello

    public String hello() {
        return "<h1>hello spring boot</h1>";
    }

}