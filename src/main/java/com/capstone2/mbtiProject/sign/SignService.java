package com.capstone2.mbtiProject.sign;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class SignService {
    @Autowired
    private SignRepository signRepository;

    public void addMember(Member member){
        signRepository.save(member);
        return;
    }

    public Optional<Member> findMember(LoginData data){
        Optional<Member> member = signRepository.findById(data.getEmail());

        return member;
    }

    public String duplicateCheck(String Id){ //중복 체크
        Optional<Member> member = signRepository.findById(Id);
        if(member.isEmpty()){
            return "허용";
        }
        return "중복";
    }

    public Optional<Member> resetMemberPw(Member data){
        Optional<Member> member = signRepository.findById(data.getEmail());

        return member;
    }





}
