package com.example.demo.service;

import com.example.demo.dto.UserDto;
import com.example.demo.mapper.UserMapper;

import java.util.List;

public interface UserService {

    public List<UserDto> getUserList();

    public List<UserDto> getActiveUserList();

    public void insertUser(UserDto userDto) {
        UserMapper.insertUser();
    };
    //아 풀리퀘 섞여서 들어갔다
}