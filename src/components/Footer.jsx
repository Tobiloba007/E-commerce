import React from 'react'
import styled from 'styled-components'
import {Facebook, Instagram, Twitter, Pinterest, LocationOn, LocalPhone, MailOutline} from '@material-ui/icons'
import { mobile } from '../responsive'
import { mobileL } from '../responsive'


const Container = styled.div`
    display: flex;
  ${mobile({flexDirection: "column"})}
  ${mobileL({flexDirection: "column"})}

`
const Left = styled.div`
     flex: 1;
     display: flex;
     flex-direction: column;
     padding: 20px;
`
const Logo = styled.h1`
 ${mobileL({textAlign: "center"})}
`
const Desc = styled.p`
    margin: 20px 0px;
`
const SocialContainer = styled.div`
    display: flex;
    ${mobileL({display: "flex", justifyContent: "center"})}
`
const SocialIcon = styled.div`
     width: 40px;
     height: 40px;
     border-radius: 50%;
     color: white;
     background-color: #${props => props.color};
     display: flex;
     align-items: center;
     justify-content: center;
     margin-right: 20px;
`

const Center = styled.div`
     flex: 1;
     padding: 20px;
  ${mobile({display: "none"})}

`
const Title = styled.h3`
     margin-bottom: 30px;
`

const List = styled.ul`
       margin: 0;
       padding: 0;
       list-style: none;
       display: flex;
       flex-wrap: wrap;
`

const ListItem = styled.li`
      width: 50%;
      margin-bottom: 10px;
`

const Right = styled.div`
     flex: 1;
     padding: 10px;
  ${mobile({backgroundColor: "#fff8f8"})}

`
const ContactItem = styled.div`
        margin-bottom: 20px;
        display: flex;
        align-items: center
`
const Payment = styled.img`
       width: 50%;
       ${mobileL({marginLeft: "25%"})}
`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>MIKE</Logo>
            <Desc>
                There are many variations of passages of lorem ipsum available, but the majority have suffered alteration
                in some form, by injected humour, or randomised words which dont look even slightly believable.
            </Desc>
            <SocialContainer>
            <SocialIcon color="385999">
            <a href='https://web.facebook.com/signup?_rdc=1&_rdr' style={{color: 'inherit'}}>
            <Facebook/>
            </a>
            </SocialIcon>
            <SocialIcon color="E4405F">
            <a href='https://www.instagram.com/' style={{color: 'inherit'}}>
            <Instagram/>
            </a>
            </SocialIcon>
            <SocialIcon color="55ACEE">
            <a href='https://twitter.com/signin' style={{color: 'inherit'}}>
            <Twitter/>
            </a>
            </SocialIcon>
            <SocialIcon color="E60023">
            <a href='https://www.pinterest.com/signin/' style={{color: 'inherit'}}>
                <Pinterest/>
                </a>
            </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Man Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Woman Fashion</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
        <Title>Contact</Title>
        <ContactItem> <LocationOn style={{marginRight: "10px"}}/>
            111 George smith road, ilaro park
        </ContactItem>
        <ContactItem> <LocalPhone style={{marginRight: "10px"}}/>
            +224 341 1233
        </ContactItem>
        <ContactItem><MailOutline style={{marginRight: "10px"}}/>
            E-commerce@gmail.com
        </ContactItem>
        <Payment src="https://www.pngkey.com/png/detail/43-434839_la-dolce-vitae-banner-paypal-secure-assignment-help.png"/>
        </Right>
    </Container>
  )
}

export default Footer