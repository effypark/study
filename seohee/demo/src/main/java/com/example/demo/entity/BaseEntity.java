package com.example.demo.entity;

import jakarta.persistence.Column;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.MappedSuperclass;
import lombok.Getter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDateTime;

@MappedSuperclass // 부모 클래스에 선언하고 속성만 상속 받아서 사용
@EntityListeners(AuditingEntityListener.class)
@Getter
public class BaseEntity {
    // Entity가 생성되어 저장될 때 시간이 자동 저장
    @CreationTimestamp
    @Column(updatable = false)
    private LocalDateTime createdTime;

    // Entity가 업데이트시 시간이 자동 저장
    @UpdateTimestamp
    @Column(insertable = false)
    private LocalDateTime updatedTime;
}
