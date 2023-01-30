package com.example.demo.controller;

import com.example.demo.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController // view 페이지가 필요없는 API 응답에 어울리는 어노테이션입니다.
public class UserController {
    private final UserMapper userMapper;

    @Autowired
    public UserController(UserMapper userMapper) {
        this.userMapper = userMapper;
    }

    @PutMapping("/join")
    public void insertUser(@RequestParam("username") String username, @RequestParam("password") String password) {
        userMapper.insertUser(username, password);
    }
//    @RequestMapping(value = "/user", method = RequestMethod.GET)
//    public List<UserDto> getUser() {
//        return userService.getUserList();
//    }
//
//    @RequestMapping(value = "/active-user", method = RequestMethod.GET)
//    public List<UserDto> getActiveUser() {
//        return userService.getActiveUserList();
//    }
}