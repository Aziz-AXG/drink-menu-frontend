import React from 'react'
import { Container, CafeName } from './home-style'
import { FaPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <Container >
            <Link to='/' style={{ textDecoration: 'none' }}>
                <CafeName>CAFE BOX</CafeName>
            </Link>
            <Link to='/AddDrink'>
                <FaPlus style={{ color: "white", fontSize: "36" }} />
            </Link>
        </Container>
    );
};

export default Home;
