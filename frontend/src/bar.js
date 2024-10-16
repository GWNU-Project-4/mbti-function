
import React from 'react';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export function Bar() {
    // 세션 스토리지에서 member 정보를 가져옴
    const memberData = sessionStorage.getItem('member');
    const member = memberData ? JSON.parse(memberData) : null;

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link to='/' style={{ textDecoration: "none", color:"white"}}>MBTI</Link>
                    </Typography>

                    {member ? (
                        <>
                            {/* 로그인이 되어있는 경우 */}
                            <Typography variant="body1" sx={{ marginRight: 2 }}>
                                {member.nickName}님, 환영합니다!
                            </Typography>
                            {/* 로그아웃 버튼 */}
                            <Button
                                color="inherit"
                                onClick={() => {
                                    // 로그아웃 처리 (예: 세션 스토리지 삭제)
                                    sessionStorage.removeItem('member');
                                    window.location.replace("/");
                                }}
                            >
                                Logout
                            </Button>
                        </>
                    ) : (
                        <>
                            {/* 로그인이 안되어있는 경우. 로그인 및 회원가입 버튼 */}
                            <Button color="inherit" onClick={() => { window.location.replace("/login"); }}>
                                Login
                            </Button>
                            <Button color="inherit" onClick={() => { window.location.replace("/signUp"); }}>
                                Sign Up
                            </Button>
                        </>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    );
}
