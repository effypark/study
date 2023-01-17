package com.example.demo.service;

import com.example.demo.dto.UserDto;

import java.util.List;

public interface UserService {

    public List<UserDto> getUserList();

    public List<UserDto> getActiveUserList();
}