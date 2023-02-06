package com.example.demo.controller;

import com.example.demo.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping("/update/{idx}")
    public void updateUser(@PathVariable String idx, @RequestParam("username") String username) {
        userMapper.updateUser(idx, username);
    }

    @DeleteMapping("/delete/{idx}")
    public void deleteUser(@PathVariable String idx) {
        userMapper.deleteUser(idx);
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