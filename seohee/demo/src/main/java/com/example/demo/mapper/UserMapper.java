package com.example.demo.mapper;

import com.example.demo.dto.UserDto;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface UserMapper {
    List<UserDto> getUserList();

    List<UserDto> getActiveUserList();

    @Insert("INSERT INTO users(username, password) VALUES (#{username}, #{password})")
    int insertUser(@Param("username") String username, @Param("password") String password);

    @Update("UPDATE users SET username=#{username} WHERE idx = #{idx}")
    int updateUser(@Param("idx") String idx, @Param("username") String username);

    @Delete("DELETE FROM users where idx = #{idx}")
    int deleteUser(@Param("idx") String idx);
}