package com.example.demo.controller;

import com.example.demo.model.Users;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
// @Controller, @ResponseBody가 합쳐진 어노테이션입니다.
// view 페이지가 필요없는 API 응답에 어울리는 어노테이션입니다.
@RequestMapping("/api")

public class UserController {

    private final UserRepository userRepository;
    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping("/all")
    public String allUsers() {
        return userRepository.findAll().toString();
    }

    @PostMapping("/user")
    public String create(@RequestParam(value = "username") String username) {
        // Users entity = Users.builder().username(username).password(password).build();
        // userRepository.save(entity);
        return "아이디 : " + username;
    }

//    public Users create(@RequestBody Users user) {
//        return userRepository.save(user);
//    }

    @GetMapping("/user/{id}")
    public String read(@PathVariable Long id) {

        Optional<Users> userOptional = userRepository.findById(id);
        userOptional.ifPresent(System.out::println);

        return "successfully executed";
    }
}
