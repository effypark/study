package com.example.demo.service;

import com.example.demo.dto.UserDto;
import com.example.demo.mapper.UserMapper;

import java.util.List;

public interface UserService {

    public List<UserDto> getUserList();

    public List<UserDto> getActiveUserList();

//    public int insertUser(UserDto userDto) {
//        return UserDto.insertUser(userDto);
//    }
}