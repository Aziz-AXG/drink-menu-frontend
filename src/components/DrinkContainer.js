import React, { useEffect } from 'react'
import styled from 'styled-components'
import Aos from 'aos';
import 'aos/dist/aos.css'

//if u want to make img showup make it like to server port like "localhost:500/{drink.imageName}"

const DrinkContainer = ({ drink }) => {
            useEffect(() => {
                        Aos.init({ duration: 1000 })
            }, [])

            return (
                        <DrinkBox data-aos="zoom-in">
                                    <ImgAndPrice>
                                                <DrinkIMG src={drink.imageName} data-aos="fade-right" />
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
            width: 160px;
`

const ImgAndPrice = styled.div`
            display: flex;
`

const Price = styled.h1`
            position: absolute;
            padding-left: 80%;
            font-size: 25px;
            margin: 20px 10px 0  0;
`

const DrinkIMG = styled.img`
            width: 160px;
            height: 100px; 
            margin-right: 40px;
`

const DrinkName = styled.h1`
            font-size: 25px;
            margin: 10px;
            text-align: center;
`