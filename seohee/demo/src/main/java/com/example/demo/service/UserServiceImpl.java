package com.example.demo.service;

import com.example.demo.dto.UserDto;
import com.example.demo.mapper.UserMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserMapper userMapper;

    @Override
    public List<UserDto> getUserList() {
        return userMapper.getUserList();
    }

    public List<UserDto> getActiveUserList() {
        return userMapper.getActiveUserList();
    }

    public void insertUser(UserDto userDto) {
        return userMapper.insertUser(userDto);
    };
}
