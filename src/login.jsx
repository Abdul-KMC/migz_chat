import React, { useState } from 'react';
import {Box, Typography, TextField, Button} from "@mui/material";
// import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
// import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';

const Login = () => {
    const [isSignup, setIsSignup] = useState(false);
    const [input, setInput] = useState({
        name: "", email: "", password: "",
    })
    const handleChange = (e) => {
        setInput((prevState) => ({
            ...prevState,
            [e.target.name] : e.target.value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(input);
    }
    const resetState = () => {
        setIsSignup(!isSignup);
        setInput({name:'', email:'', password:''});
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <Box display="flex" flexDirection={"column"} maxWidth={400} alignItems={'center'} justifyContent={'center'} margin="auto" marginTop={5} padding={3} borderRadius={5} boxShadow={'5px 5px 10px #ccc'} sx={{
                ":hover": {
                    boxShadow:'10px 10px 20px #ccc'
                }
            }}>
                <Typography variant='h3' padding={3} textAlign={'center'}>{isSignup ? "Register" : "Login"}</Typography>
                {isSignup && (<TextField onChange={handleChange} name='name' value={input.name} margin='normal' type={'text'} variant='outlined' placeholder='Name'/>)}
                <TextField onChange={handleChange} name='email' value={input.email} margin='normal' type={'email'} variant='outlined'placeholder='E-mail'/>
                <TextField onChange={handleChange} name='password' value={input.password} margin='normal' type={'password'} variant='outlined' placeholder='Password'/>
                <Button type='submit' sx={{marginTop: 3, borderRadius: 2}} variant='contained' color='success'>{isSignup ? "Register" : "Login"}</Button> {/* <Button endIcon={isSignup ? <HowToRegOutlinedIcon /> : <LoginOutlinedIcon/>} type='submit' sx={{marginTop: 3, borderRadius: 2}} variant='contained' color='success'>{isSignup ? "Register" : "Login"}</Button> */}
                <Button onClick={resetState} sx={{marginTop: 3, borderRadius: 2}}>{isSignup ? "Go to login" : "Go to Register"}</Button>
            </Box>
        </form>
    </div>
  );
};

export default Login