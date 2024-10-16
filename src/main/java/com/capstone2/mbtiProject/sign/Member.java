package com.capstone2.mbtiProject.sign;

import jakarta.persistence.*;

//사용자의 정보 담을 수 있는 Memeber
@Entity
@Table(name = "members") // 테이블 이름을 설정합니다.
public class Member {

    @Id
    @Column(nullable = false, unique = true) // email을 기본키로 설정합니다.
    private String email;

    @Column(nullable = false)
    private String password;

    @Column(name = "nickName", nullable = false)
    private String nickName;


    @Column(nullable = false)
    private String authentication;

    @Column(nullable = false)
    private String mbti;

    // 기본 생성자
    public Member() {}

    public Member(String email, String password, String authentication) {
        this.email = email;
        this.password = password;
        this.authentication = authentication;
    }

    // 모든 필드를 포함하는 생성자
    public Member(String email, String password, String nickName, String authentication, String mbti) {
        this.email = email;
        this.password = password;
        this.nickName = nickName;
        this.authentication = authentication;
        this.mbti = mbti;
    }

    // Getter와 Setter 메서드
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getNickName() {
        return nickName;
    }

    public void setNickName(String nickName) {
        this.nickName = nickName;
    }

    public String getAuthentication() {
        return authentication;
    }

    public void setAuthentication(String authentication) {
        this.authentication = authentication;
    }

    public String getMbti() {
        return mbti;
    }

    public void setMbti(String mbti) {
        this.mbti = mbti;
    }
}