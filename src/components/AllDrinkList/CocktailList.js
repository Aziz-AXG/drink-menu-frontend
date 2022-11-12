import React, { useEffect, useState } from 'react'
import PulseLoader from "react-spinners/PulseLoader";
import { Container } from './index'
import DrinkContainer from '../DrinkContainer';

function CocktailList() {
            const [drinkList, setDrinkList] = useState([])
            const [loading, setLoading] = useState(true)

            useEffect(() => {
                        const fetchDrinklist = async () => {
                                    const res = await fetch('/api/drink')
                                    const data = await res.json()
                                    const dataFilter = data.filter(drinkType => drinkType.typOfDrink === 'Cocktail')
                                    setDrinkList(dataFilter)
                                    setLoading(false)
                        }
                        fetchDrinklist()
            }, [setDrinkList])
            return (
                        <>
                                    {loading ? (<PulseLoader color='#ffff'
                                                size={100}
                                                aria-label="Loading Spinner"
                                                data-testid="loader"
                                                style={{
                                                            display: 'grid', justifyItems: "center",
                                                            alignItems: "center", gridTemplateColumns: '1fr 1fr 1fr',
                                                            height: '90vh'
                                                }}
                                    />) : (<Container>
                                                {drinkList.map((drink) => {
                                                            return <DrinkContainer key={drink._id} drink={drink} />
                                                })}
                                    </Container>
                                    )}

                        </>
            )
}

export default CocktailList