package com.example.demo.mapper;

import com.example.demo.dto.UserDto;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserMapper {
    List<UserDto> getUserList();
}