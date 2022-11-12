import React from 'react'
import { Link } from 'react-router-dom'
import { Container, DrinkTypeBox, TypeOfDrink, DrinkTypeLen } from './DrinkType-style'

function DrinkType() {

            return (
                        <Container>
                                    <DrinkTypeBox>
                                                <Link to='coffee'
                                                            style={{ textDecoration: 'none' }}>
                                                            <TypeOfDrink>Coffee</TypeOfDrink>
                                                </Link>
                                                <Link to='Cocktail' style={{ textDecoration: 'none' }}>
                                                            <TypeOfDrink>Cocktail</TypeOfDrink>
                                                </Link>
                                                <Link to='Mocktails' style={{ textDecoration: 'none' }}>
                                                            <TypeOfDrink>Mocktails</TypeOfDrink>
                                                </Link>
                                                <Link to='Shakes' style={{ textDecoration: 'none' }}>
                                                            <TypeOfDrink>Shakes</TypeOfDrink>
                                                </Link>
                                    </DrinkTypeBox>
                                    <DrinkTypeLen></DrinkTypeLen>
                        </Container>
            )
}

export default DrinkType