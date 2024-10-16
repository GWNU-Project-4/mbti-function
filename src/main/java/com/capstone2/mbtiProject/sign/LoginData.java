package com.capstone2.mbtiProject.sign;

//로그인 시 데이터를 쉽게 받기 위해 제작
public class LoginData {
    String email;
    String password;

    public LoginData() {
    }

    public LoginData(String email, String password) {
        this.email = email;
        this.password = password;
    }

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
}
