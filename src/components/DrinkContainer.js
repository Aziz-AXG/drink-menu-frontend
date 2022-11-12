import React, { useEffect } from 'react'
import styled from 'styled-components'
import Aos from 'aos';
import 'aos/dist/aos.css'


const DrinkContainer = ({ drink }) => {
            useEffect(() => {
                        Aos.init({ duration: 1000 })
            }, [])

            return (
                        <DrinkBox data-aos="zoom-in">
                                    <ImgAndPrice>
                                                <DrinkIMG src={`${drink.imageName}`} data-aos="fade-right" />
                                                <Price data-aos="fade-left">{drink.price}$</Price>
                                    </ImgAndPrice>
                                    <DrinkName>{drink.drinkName}</DrinkName>
                        </DrinkBox>
            )
}

export default DrinkContainer

const DrinkBox = styled.div`
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            margin: 20px 0 20px 0;
            background: #FFFFFF;
            border-radius: 100% 25% 25% 25%/ 80% 25% 25% 25% ;
            min-width: 160px;
`

const ImgAndPrice = styled.div`
            display: flex;
`

const Price = styled.div`
            font-size: 25px;
            margin: 20px 10px 0  0;
`

const DrinkIMG = styled.img`
            width: 100px;
            height: 120px; 
`

const DrinkName = styled.h1`
            font-size: 25px;
            margin: 10px;
`