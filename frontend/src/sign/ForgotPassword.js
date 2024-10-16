import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import OutlinedInput from '@mui/material/OutlinedInput';
import axios from 'axios';

function ForgotPassword({ open, handleClose }) {
  const [email, setEmail] = React.useState('');
  const [authentication, setAuthentication] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // 기본 동작 방지

    // 비밀번호 재설정 요청
    axios.post('/api/resetPw', {
      email,
      password,
      authentication,
    }).then((res) => {
      if (res.data === "성공") {
        alert("비밀번호 변경 성공");
        handleClose(); // 다이얼로그 닫기
      } else {
        alert("비밀번호 변경 실패 : 입력 내용을 재확인");
      }
    }).catch(error => {
      console.log(error);
      alert("오류가 발생했습니다. 나중에 다시 시도해 주세요.");
    });
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>비밀번호 재설정</DialogTitle>
      <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%' }}>
        <DialogContentText>
          비밀번호 재설정을 위해 이메일(ID)을 입력해 주세요.
        </DialogContentText>
        <OutlinedInput
          autoFocus
          required
          margin="dense"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
          type="email"
          fullWidth
        />
        <DialogContentText>
          Q. 태어난 도시의 이름은..
        </DialogContentText>
        <OutlinedInput
          required
          margin="dense"
          id="authentication"
          value={authentication}
          onChange={(e) => setAuthentication(e.target.value)}
          placeholder="도시명"
          type="text"
          fullWidth
        />
        <DialogContentText>
          변경 비밀번호
        </DialogContentText>
        <OutlinedInput
          required
          margin="dense"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="재설정 Password"
          type="password"
          fullWidth
        />
        <DialogActions sx={{ pb: 3, px: 3 }}>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="contained" onClick={handleSubmit}>
            Continue
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
}

ForgotPassword.propTypes = {
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default ForgotPassword;
