package com.example.demo.dto;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class UserDto {
    private int idx;
    private String name;
    private String email;
    private String password;
}