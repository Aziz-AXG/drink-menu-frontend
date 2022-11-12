import React, { useEffect, useState } from 'react'
import PulseLoader from "react-spinners/PulseLoader";
import styled from 'styled-components'
import DrinkContainer from '../DrinkContainer';


const AllDrinkList = () => {

            const [drinkList, setDrinkList] = useState([])
            const [loading, setLoading] = useState(true)

            useEffect(() => {
                        const fetchDrinklist = async () => {
                                    const res = await fetch('api/drink')
                                    const data = await res.json()
                                    setDrinkList(data)
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

export default AllDrinkList

export const Container = styled.div`
            display:  grid;
            justify-items: center;
            align-content: center;
            min-height: 80vh;
            grid-template-columns: 1fr 1fr;

            @media screen and (max-width: 330px) {
                        grid-template-columns: 1fr;
            }
            @media screen and (min-width: 800px) {
                        grid-template-columns: 1fr 1fr 1fr;
            }
            @media screen and (min-width: 1200px) {
                        grid-template-columns: 1fr 1fr 1fr 1fr;
            }

`