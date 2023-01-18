package com.example.demo.mapper;

import com.example.demo.dto.UserDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface UserMapper {
    List<UserDto> getUserList();

    List<UserDto> getActiveUserList();

    // int 0실패, 1성공으로 반환
    int insertUser(UserDto userDto);
}