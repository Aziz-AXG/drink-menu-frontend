import styled from "styled-components";

export const Container = styled.div`
            display: flex;
            flex-direction: column;
            justify-content: center;
`

export const BackLogBox = styled.div`
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 20px;
`

export const Form = styled.form`
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
`

export const Input = styled.input`
            width: 200px;
            height: 30px;
            border-radius: 25px;
            border: none;
            margin: 10px 0 20px 0;
            text-align: center;
            box-shadow: none;
            outline: none;
            &:focus{
                        width:250px;
                        transition: 0.25s;
            }
`

export const Select = styled.select`
            -webkit-appearance: none;
            -moz-appearance: none;
            -ms-appearance: none;
            appearance: none;
            outline: 0;
            box-shadow: none;
            border: 0 !important;
            background: #FFFFFF;
            background-image: none;
            flex: 1;
            width: 200px;
            font-size: 24px;
            border-radius: 25px;
            text-align: center;
            padding: 0 0.5em;
            cursor: pointer;
            margin: 10px 0 20px 0;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`

export const InputIMG = styled.input`
            width: 200px;
            background: #FFFFFF;
            border-radius: 25px;
            border: none;
            margin: 10px 0 20px 0;
            text-align: center;
            box-shadow: none;
            outline: none;
`

export const Button = styled.button`
            box-sizing: none;
            outline: none;
            border: none;
            font-size: 24px;
            border-radius: 20px;
            padding: 5px;
`