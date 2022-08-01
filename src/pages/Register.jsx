import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'



const Container = styled.div`
     weight: 100vh;
     height: 100vh;
     background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
      url("https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80");
     display: flex;
     align-items: center;
     justify-content: center;
     background-repeat: no-repeat;
     background-size: cover;
     background-position: center center;
`

const Wrapper = styled.div`
     padding: 20px;
     width: 40%;
     background-color: white;
     ${mobile({width: "75%"})}

`

const Title = styled.h1`
     font-size: 24px;
     font-weight: 300;
`

const Form = styled.form`
     display: flex;
     flex-wrap: wrap;
`

const Input = styled.input`
     flex: 1;
     min-width: 40%;
     margin: 20px 10px 0px 0px;
     padding: 10px;
`

const Agreement = styled.span`
     font-size: 12px;
     margin: 20px 0px;
`

const Button = styled.button`
      width: 40%;
      border: none;
      padding: 15px 20px;
      background-color: teal;
      color: white;
      cursor: pointer;
`


const Register = () => {
  return (
    <Container>
    <Wrapper>
        <Title>CREATE AN ACOUNT</Title>
            <Form>
                <Input placeholder="name" />
                <Input placeholder="last name" />
                <Input placeholder="username" />
                <Input placeholder="email" />
                <Input placeholder="password" />
                <Input placeholder="confirm password" />
                <Agreement>
                    By creating an account, I consent to the proccessing of my personal data in accordance with
                    the <b>PRIVACY POLICY</b>
                 </Agreement>    
                    <Button>CREATE</Button>
                
            </Form>
    </Wrapper>
    </Container>
  )
}

export default Register