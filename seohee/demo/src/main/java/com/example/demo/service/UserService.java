package com.example.demo.service;

import com.example.demo.dto.UserDto;
import com.example.demo.entity.UserEntity;
import com.example.demo.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public void save(UserDto userDto) {
        // 1. dto -> entity 변환
        // 2. repository 의 sava 메서드 호출
        //    (조건 : entity 객체를 넘겨줘야함)

        UserEntity userEntity = UserEntity.toUserEntity(userDto);
        userRepository.save(userEntity);
    }
}
