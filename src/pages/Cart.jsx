import React from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import { Add, Remove } from '@material-ui/icons'
import { mobile } from '../responsive'
import { mobileL } from '../responsive'



const Container =  styled.div``

const Wrapper =  styled.div`
     padding: 20px;
     ${mobile({padding: "10px"})}

`

const Title =  styled.h1`
     font-weight: 300;
     text-align: center;
`

const Top =  styled.div`
     display: flex;
     align-items: center;
     justify-content: space-between;
     padding: 20px;
`

const TopButton = styled.button`
     padding: 10px;
     font-weight: 600;
     cursor: pointer;
     border: ${props=>props.type === "filled" && "none"};
     background-color: ${props=>props.type === "filled" ? "black" : "transparent"};
     color: ${props=>props.type === "filled" && "white"}
`
const TopTexts = styled.div`
      ${mobile({display: "none"})}
      ${mobileL({display: "none"})}
     
`

const TopText = styled.span`
      text-decoration: underline;
      cursor: pointer;
      margin: 0px 10px;
`

const Bottom =  styled.div`
     display: flex;
     justify-content: space-between;
     ${mobile({flexDirection: "column"})}
     ${mobileL({flexDirection: "column"})}

`
const Info =  styled.div`
      flex: 3;
 `

 const Product = styled.div`
      display: flex;
      justify-content: space-between;
     ${mobile({flexDirection: "column"})}

 `
 const ProductDetail = styled.div`
       flex: 2;
       display: flex;
 `
 
 const Image = styled.img`
      width: 200px;
 `

 const Details = styled.div`
      padding: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
 `
 
 const ProductName = styled.span``
 
 const ProductId = styled.span``
 
 const ProductColor = styled.div`
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: ${props=>props.color};
 `
 
 const ProductSize = styled.span``
 
 const PriceDetail = styled.div`
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
 `

const ProductAmountContainer = styled.div`
     display: flex;
     align-items: center;
     justify-content: center;
     margin-bottom: 20px;
     ${mobile({margin: "15px 0px"})}

`
const ProductAmount = styled.div`
     font-size: 24px;
     margin-bottom: 10px;
     ${mobile({margin: "0px 15px"})}

`
const ProductPrice = styled.div`
     font-size: 30px;
     font-weight: 200;
     ${mobile({marginBottom: "20px"})}

`

const Hr = styled.hr`
     background-color: #eee;
     border: none;
     height: 1px;
`

const Summary =  styled.div`
      flex: 1;
      border: 0.5px solid lightgray;
      border-radius: 10px;
      padding: 20px;
      height: 50vh;
      ${mobileL({marginTop: "30px"})}
`

const SummaryTitle = styled.h1`
     font-weight: 200;
`

const SummaryItem = styled.div`
     margin: 30px 0px;
     display: flex;
     justify-content: space-between;
     font-weight: ${props=>props.type === "total" && "500"};
     font-size: ${props=>props.type === "total" && "24px"};
`

const SummaryItemText = styled.span``

const SummaryItemPrice = styled.span``

const SummaryButton = styled.button`
     width: 100%;
     padding: 10px;
     background-color: black;
     color: white;
     font-weight: 600;
`


const Cart = (props) => {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <TopButton>CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag(2)</TopText>
                    <TopText>Your Wishlist(0)</TopText>
                </TopTexts>
                <TopButton type="filled">CHECKOUT NOW</TopButton>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src="https://cpng.pikpng.com/pngl/s/1-18311_shoe-sepatu-nike-air-max-clipart.png"/>
                            <Details>
                            <ProductName><b>Product:</b>NIKE ALL SPORT SHOE</ProductName>
                            <ProductId><b>ID:</b> 2578794427</ProductId>
                            <ProductColor color="black" />
                            <ProductSize><b>Size:</b>44</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                        <ProductAmountContainer>
                            <Add />
                            <ProductAmount>2</ProductAmount>
                            <Remove />
                        </ProductAmountContainer>
                        <ProductPrice>$ 30</ProductPrice>
                        </PriceDetail>
                    </Product>
                    <Hr />
                    <Product>
                        <ProductDetail>
                            <Image src="https://e7.pngegg.com/pngimages/323/773/png-clipart-sneakers-basketball-shoe-sportswear-nike-shoe-outdoor-shoe-running.png"/>
                            <Details>
                            <ProductName><b>Product:</b>NIKE ALL SPORT COMFORT SHOE</ProductName>
                            <ProductId><b>ID:</b> 257798432211</ProductId>
                            <ProductColor color="blue" />
                            <ProductSize><b>Size:</b>46</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                        <ProductAmountContainer>
                            <Add />
                            <ProductAmount>2</ProductAmount>
                            <Remove />
                        </ProductAmountContainer>
                        <ProductPrice>$ 25</ProductPrice>
                        </PriceDetail>
                    </Product>
                </Info>
                <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>$ 55</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Shipping Discount</SummaryItemText>
                        <SummaryItemPrice>$ -5.10</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryItemText>Total</SummaryItemText>
                        <SummaryItemPrice>$ 55</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryButton>CHECKOUT NOW</SummaryButton>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer />
    </Container>
  )
}

export default Cart