package com.example.demo.dto;

import lombok.Data;

@Data
public class UserDto {
    private int idx;
    private String username;
    private String password;
    private String active;
}