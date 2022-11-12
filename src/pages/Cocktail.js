import React from 'react'
import CocktailList from '../components/AllDrinkList/CocktailList'
import DrinkType from '../components/DrinkType'
import Home from '../components/Home'

function CocktailPage() {
            return (
                        <>
                                    <Home />
                                    <DrinkType />
                                    <CocktailList />
                        </>
            )
}

export default CocktailPage