import * as React from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import { IoMdPerson } from "react-icons/io";



const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: 'auto',
  [theme.breakpoints.up('sm')]: {
    maxWidth: '450px',
  },
  boxShadow:
    'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
  ...theme.applyStyles('dark', {
    boxShadow:
      'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
  }),
}));

const SignInContainer = styled(Stack)(({ theme }) => ({
  padding: 20,
  marginTop: '10vh',
  '&::before': {
    content: '""',
    display: 'block',
    position: 'absolute',
    zIndex: -1,
    inset: 0,
    backgroundImage:
      'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
    backgroundRepeat: 'no-repeat',
    ...theme.applyStyles('dark', {
      backgroundImage:
        'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
    }),
  },
}));

export function SignUp() {
  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');

  const [MBTIError, setMBTIError] = React.useState(false);
  const [MBTIErrorMessage, setMBTIErrorMessage] = React.useState('');
  const [authenticationError, setAuthenticationError] = React.useState(false);
  const [authenticationErrorMessage, setAuthenticationErrorMessage] = React.useState('');

  const [nickNameError, setNickNameError] = React.useState(false);
  const [nickNameErrorMessage, setNickNameErrorMessage] = React.useState('');


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
      MBTI: data.get('mbti'),
      authentication: data.get('authentication'),
      nickName: data.get('nickName')
    });

    // 회원가입 버튼 push

                    axios({
                        method:"POST",
                        url: '/api/signUp',
                        data:{
                            "email": data.get('email'),
                            "password": data.get('password'),
                            "nickName": data.get('nickName'),
                            "authentication": data.get('authentication'),
                            "mbti": data.get('mbti')
                        }
                    }).then((res)=>{
                        if(res.status ===200){
                            if(res.data === "중복"){
                                alert("해당 이메일(ID)가 이미 존재합니다.")
                            }else{
                                alert("회원가입 성공했습니다.")
                                window.location.href = "/login";

                            }


                        }
                    }).catch(error=>{
                        console.log(error);
                        throw new Error(error);
                    });
                    //
  };

  const validateInputs = () => {
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const mbti = document.getElementById('mbti');
    const authentication = document.getElementById('authentication');
    const nickName = document.getElementById('nickName');

    let isValid = true;

    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      setEmailError(true);
      setEmailErrorMessage('유효한 이메일 주소를 입력하세요.');
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage('');
    }

    if (!password.value || password.value.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage('비밀번호는 최소 6자 이상이어야 합니다.');
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage('');
    }

    if (!mbti.value || mbti.value.length < 4) {
          setMBTIError(true);
          setMBTIErrorMessage('MBTI는 4자리 입니다.');
          isValid = false;
        }  else if (!/^[EISNTPFJ]+$/.test(mbti.value)) {
            setMBTIError(true);
            setMBTIErrorMessage('MBTI는 E, I, S, N, T, F, J, P 대문자만 포함되어야 합니다.');
            isValid = false;
          }else {
          setMBTIError(false);
          setMBTIErrorMessage('');
        }

        if (!authentication.value || authentication.value.length < 2) {
              setAuthenticationError(true);
              setAuthenticationErrorMessage('2자리 이상으로 입력해주세요');
              isValid = false;
            } else {
              setAuthenticationError(false);
              setAuthenticationErrorMessage('');
            }

            if (!nickName.value) {
                  setNickNameError(true);
                  setNickNameErrorMessage('닉네임을 입력하세요.');
                  isValid = false;
                } else {
                  setNickNameError(false);
                  setNickNameErrorMessage('');
                }

    return isValid;
  };

  return (
      <div>
      <CssBaseline enableColorScheme />
      <SignInContainer direction="column" justifyContent="space-between">
        <Card variant="outlined">
          <IoMdPerson/>
          <Typography
            component="h1"
            variant="h4"
            sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
          >
            Sign up
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              gap: 2,
            }}
          >


            <FormControl>
              <FormLabel htmlFor="email">Email(ID)</FormLabel>
              <TextField
                error={emailError}
                helperText={emailErrorMessage}
                id="email"
                type="email"
                name="email"
                placeholder="이메일을 입력하세요"
                autoComplete="email"
                autoFocus
                required
                fullWidth
                variant="outlined"
                color={emailError ? 'error' : 'primary'}
                sx={{ ariaLabel: 'email' }}
              />
            </FormControl>



            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <TextField
                error={passwordError}
                helperText={passwordErrorMessage}
                name="password"
                placeholder="••••••"
                type="password"
                id="password"
                autoComplete="current-password"
                autoFocus
                required
                fullWidth
                variant="outlined"
                color={passwordError ? 'error' : 'primary'}
              />
            </FormControl>

            <FormControl>
               <FormLabel htmlFor="nickName">nickName</FormLabel>
                 <TextField
                   error={nickNameError}
                   helperText={nickNameErrorMessage}
                   id="nickName"
                   type="text"
                   name="nickName"
                   placeholder="닉네임을 입력하세요"
                   autoFocus
                   required
                   fullWidth
                   variant="outlined"
                   color={nickNameError ? 'error' : 'primary'}

                   />
            </FormControl>


            <FormControl>
              <FormLabel htmlFor="mbti">MBTI</FormLabel>
                 <TextField
                   error={MBTIError}
                   helperText={MBTIErrorMessage}
                   name="mbti"
                   placeholder="entp, intj .."
                   type="text"
                   id="mbti"

                   autoFocus
                   required
                   fullWidth
                   variant="outlined"
                   color={MBTIError ? 'error' : 'primary'}
                  />
            </FormControl>

                  <FormControl>
                     <FormLabel htmlFor="authentication">Question.</FormLabel>
                        <TextField
                          error={authenticationError}
                          helperText={authenticationErrorMessage}
                          name="authentication"
                          placeholder="내가 태어난 지역은..."
                          type="text"
                          id="authentication"
                          autoFocus
                          required
                          fullWidth
                          variant="outlined"
                          color={authenticationError ? 'error' : 'primary'}
                          />
                  </FormControl>



            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={validateInputs}
            >
              Sign in
            </Button>
            <Typography sx={{ textAlign: 'center' }}>
              이미 계정이 있으신가요?{' '}
              <span>
                <Link
                  href="/login"
                  variant="body2"
                  sx={{ alignSelf: 'center' }}
                >
                  Sign in
                </Link>
              </span>
            </Typography>
          </Box>

        </Card>
      </SignInContainer>
      </div>

  );
}