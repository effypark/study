package com.example.demo.mapper;

import com.example.demo.dto.UserDto;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface UserMapper {
    List<UserDto> getUserList();

    List<UserDto> getActiveUserList();

    @Insert("INSERT INTO users(username, password) VALUES (#{username}, #{password})")
    int insertUser(@Param("username") String username, @Param("password") String password);
}