import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import {Add, Remove} from "@material-ui/icons"
import { mobile } from '../responsive'
import { addProduct } from '../redux/cartRedux'
import { useDispatch } from 'react-redux'


const Container = styled.div``

const Wrapper = styled.div`
      padding: 50px;
      display: flex
      ${mobile({padding: "10px", flexDirection: "column"})}

`
const ImgContainer = styled.div`
     flex: 1;
`
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    ${mobile({height: "40vh"})}

`

const InfoContainer = styled.div`
     flex: 1;
     padding: 0px 50px;
     ${mobile({padding: "10px"})}

`
const Title = styled.h1`
     font-weight: 200;
`
const Desc = styled.p`
       margin: 20px 0px;
`
const Price = styled.span`
      font-weight: 100;
      font-size: 40px;
`


const FilterContainer = styled.div`
   width: 50%;
   margin: 30px 0px;
   display: flex;
   justify-content: space-between;
   ${mobile({width: "100%"})}

`

const Filter = styled.div`
   display: flex;
   align-items: center;
`

const FilterTitle = styled.span`
       font-size: 20px;
       font-weight: 200;
`

const FilterColor = styled.div`
       width: 20px;
       height: 20px;
       border-radius: 50%;
       background-color: ${props=>props.color};
       margin: 0px 5px;
       cursor: pointer;
`

const FilterSize = styled.select`
       margin-left: 10px;
       padding: 5px;
`

const FilterSizeOption = styled.option``

const AddContainer = styled.div`
       width: 50%;
       display: flex;
       align-items: center;
       justify-content: space-between;
      ${mobile({width: "100%"})}

`

const AmountContainer = styled.div`
       display: flex;
       align-items: center;
       font-weight: 700;
`

const Amount = styled.span`
       width: 30px;
       height: 30px;
       border-radius: 10px;
       border: 1px solid teal;
       display: flex;
       align-items: center;
       justify-content: center;
       margin: 0px 5px;
`

const Button = styled.button`
       padding: 15px;
       border: 2px solid teal;
       background-color: white;
       cursor: pointer;
       font-weight: 500;

       &:hover{
        background-color: #f8f4f4;
       }
`


const Product = () => {
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(addProduct({ Product}))
    }
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
            <ImgContainer>
                <Image src="https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"/>
            </ImgContainer>
            <InfoContainer>
                <Title>Denim pants</Title>
                <Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dapibus porttitor magna sed consequat
                . Suspendisse suscipit mauris quis odio mollis, a suscipit ligula consectetur. Nullam sagittis nulla in
                 diam ultricies, eget aliquet dolor dictum. Etiam nec tellus quis lectus posuere commodo.
                  Praesent ac nulla sed erat vulputate pellentesque. Cras varius.
                  </Desc>
                <Price>$ 25</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color="black" />
                        <FilterColor color="darkblue" />
                        <FilterColor color="gray" />
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>XS</FilterSizeOption>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>
                            <FilterSizeOption>XXL</FilterSizeOption>
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Remove />
                        <Amount>1</Amount>
                        <Add />
                    </AmountContainer>
                    <Button onClick={handleClick}>ADD TO CART</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter />
        <Footer />
    </Container>
  )
}

export default Product