import React from 'react'
import AllDrinkList from '../components/AllDrinkList';
import DrinkType from '../components/DrinkType';
import Home from '../components/Home';

const HomePage = () => {
    return (
        <>
            <Home />
            <DrinkType />
            <AllDrinkList />
        </>
    )
}

export default HomePage
