import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'
import { mobileL } from '../responsive'
import {Link} from "react-router-dom"


const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
  `
const Image = styled.img`
     width: 100%;
     height: 100%;
     object-fit: cover;
  ${mobile({height: "30vh"})}
  ${mobileL({height: "40vh"})}

`
const Info = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    down: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Title = styled.h1`
    color: white;
    margin-bottom: 20px;
`
const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: white;
    color: gray;
    cursor: pointer;
    font-weight: 600;
`

const CategoryItem = ({item}) => {
  return (
    <Container>
    <Link to="Product">
    <Image src={item.img} />
    <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
    </Info>
    </Link>
    </Container>
  )
}

export default CategoryItem