import React from 'react'
import MocktailsList from '../components/AllDrinkList/Mocktails'
import DrinkType from '../components/DrinkType'
import Home from '../components/Home'

function MocktailsPage() {
            return (
                        <>
                                    <Home />
                                    <DrinkType />
                                    <MocktailsList />
                        </>
            )
}

export default MocktailsPage