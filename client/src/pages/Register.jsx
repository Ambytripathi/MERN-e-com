import styled from "styled-components";
import { mobile } from "../responsive";
import { useDispatch } from "react-redux";
import { signup } from '../actions/auth';
import { useState } from "react";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  const dispatch=useDispatch()
  const [errorMessage,setErrorMessage]=useState()
  const [formData,setFormData]=useState({name:'',lastName:"",userName:"",email:"",Password:"",confirmPassword:""})


  const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})

  }
  const handleRegister=  (e)=>{
    e.preventDefault()
    if(formData.Password!==formData.confirmPassword) return setErrorMessage("Password doesn't match please check")
    dispatch(signup(formData))
    setFormData({name:'',lastName:"",userName:"",email:"",Password:"",confirmPassword:""})
    
  }
  setTimeout(() => {
    setErrorMessage('')
    
  }, 15000);

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <span style={{color:'red',fontWeight:'bold'}}>{errorMessage}</span>

        <Form>
          <Input placeholder="name" name='name' value={formData.name} onChange={handleChange} />
          <Input placeholder="last name" name="lastName" value={formData.lastName} onChange={handleChange} />
          <Input placeholder="username" required={true} name='userName' value={formData.userName} onChange={handleChange} />
          <Input placeholder="email" type='email' name='email' value={formData.email} onChange={handleChange} />
          <Input placeholder="password" type='password' name="Password" value={formData.Password} onChange={handleChange} />
          <Input placeholder="confirm password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange}/>
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button onClick={handleRegister}>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
