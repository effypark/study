package com.example.demo.controller;

import com.example.demo.dto.UserDto;
import com.example.demo.service.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController // view 페이지가 필요없는 API 응답에 어울리는 어노테이션입니다.
//@RequestMapping("/api")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public Object test() {
        return "Hello World!";
    }

    @RequestMapping(value = "/user", method = RequestMethod.GET)
    public List<UserDto> getUser() {
        return userService.getUserList();
    }
}
