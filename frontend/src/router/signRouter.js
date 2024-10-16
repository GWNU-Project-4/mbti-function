import {Routes, Route } from 'react-router-dom';
import {LoginPage} from '../sign/loginPage';
import {SignUp} from '../sign/signUpPage';

//로그인과 회원가입관련 라우터
  export function SignRouter(){
    return(
        <Routes>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/signUp" element={<SignUp />}></Route>
        </Routes>
    );
  }
