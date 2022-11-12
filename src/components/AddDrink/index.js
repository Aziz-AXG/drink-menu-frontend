import React, { useState } from 'react'
import { Container, BackLogBox, Form, Input, Select, InputIMG, Button } from './AddDrink-style'
import { FaBackspace, FaDoorOpen } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { CafeName } from '../Home/home-style'
import axios from 'axios'
import Swal from "sweetalert2";


function AddDrink() {

            const [drinkName, setDrinkName] = useState('')
            const [price, setPrice] = useState()
            const [typOfDrink, setTypOfDrink] = useState('')
            const [image, setImage] = useState()

            const onChangeImageName = (e) => {
                        setImage(e.target.files[0])
            }
            const handleSubmit = (e) => {
                        e.preventDefault()
                        const formData = new FormData();

                        formData.append('drinkName', drinkName)
                        formData.append('price', price)
                        formData.append('typOfDrink', typOfDrink)
                        formData.append('image', image)

                        axios.post('/api/drink', formData)
                                    .then(() => {
                                                Swal.fire(
                                                            'Add drink',
                                                            'New Drink has been added.',
                                                            'success')
                                    })
                                    .catch(() => {
                                                Swal.fire({
                                                            icon: 'error',
                                                            title: 'Oops...',
                                                            text: 'Please put all requirements in the form.'
                                                })
                                    })

                        setDrinkName('')
                        setPrice('')
                        setTypOfDrink('')
                        document.forms[0].reset()
            }

            return (
                        <Container>
                                    <BackLogBox>
                                                <Link to='/' >
                                                            <FaBackspace style={{ color: "white", fontSize: "36" }} />
                                                </Link>
                                                <FaDoorOpen style={{ color: "white", fontSize: "36" }} />
                                    </BackLogBox>
                                    <CafeName style={{ fontSize: '62px' }}>CAFE BOX</CafeName>
                                    <Form onSubmit={handleSubmit} encType='multipart/form-data'>
                                                <Input type='text' placeholder='Name the Drink'
                                                            onChange={(e) => setDrinkName(e.target.value)}
                                                            value={drinkName} />
                                                <Input type='number' placeholder='Price'
                                                            onChange={(e) => setPrice(e.target.value)}
                                                            value={price} />
                                                <Select onChange={(e) => setTypOfDrink(e.target.value)}
                                                            value={typOfDrink}>
                                                            <option >Select Type:</option>
                                                            <option value='Coffee'>Coffee</option>
                                                            <option value='Cocktail'>Cocktail</option>
                                                            <option value='Shakes'>Shakes</option>
                                                            <option value='Mocltail'>Mocltail</option>
                                                </Select>
                                                <InputIMG type="file"
                                                            accept="image/png, image/jpeg , image/gif"
                                                            image='image'
                                                            onChange={onChangeImageName}
                                                />
                                                <Button>Add Drink</Button>
                                    </Form>
                        </Container>
            )
}

export default AddDrink