package com.example.demo.service;

import com.example.demo.dto.UserDto;
import com.example.demo.entity.UserEntity;
import com.example.demo.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

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

    public UserDto login(UserDto userDto) {
        Optional<UserEntity> byUserEmail = userRepository.findByEmail(userDto.getEmail());

        // 조회 정보가 있으면
        // orElseThrow
        if (byUserEmail.isPresent()) {
            UserEntity userEntity = byUserEmail.get();

            // 패스워드 일치하는지 비교 .equals()
            if (userEntity.getPassword().equals(userDto.getPassword())) {
                // entity -> dto 변환 후 return
                UserDto dto = UserDto.toUserDto(userEntity);
                return dto;
            } else {
                // 비밀번호 실패
                return null;
            }
        } else {
            // 조회 실패
            return null;
        }
    }
}
