package com.capstone2.mbtiProject.sign;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

//로그인과 회원관리 관련 처리를 하는 컨트롤러

@RestController
public class SignController {

    @Autowired
    private SignService signService;
    
    @PostMapping("/login")
    public ResponseEntity<Member> login(@RequestBody LoginData data){
        Optional<Member> member = signService.findMember(data);

        if (member.isPresent()) { //값을 성공적으로 가져온 경우.
            if(member.get().getPassword().equals(data.password)) { //입력받은 pw와 저장되었는 pw 비교
                return ResponseEntity.ok(member.get());
            }
        }

        //실패한 경우
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build(); // 401 Unauthorized 반환
    }

    @PostMapping("/signUp")
    public String signUp(@RequestBody Member member){
        String check = signService.duplicateCheck(member.getEmail()); // id중복 체크
        if(check == "중복"){
            return "중복";
        }

        signService.addMember(member);
        return member.getNickName();
    }

    @PostMapping("/resetPw")
    public String resetPw(@RequestBody Member data){

        Optional<Member> member = signService.resetMemberPw(data); // email로 member를 받아옴

        if (member.isPresent()) { //값을 성공적으로 가져온 경우.
            if(member.get().getAuthentication().equals(data.getAuthentication())) { //입력받은 이메일의 Authentication와 저장되었는 Authentication 비교

                //가져온 데이터 값의 pw를 새롭게 받은 pw로 변경
                Member buffer = member.get();
                buffer.setPassword(data.getPassword());
                signService.addMember(buffer);
                return "성공";
            }
        }

        //실패한 경우
        return "실패";
    }
}
