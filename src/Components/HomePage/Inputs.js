import styled from "styled-components";
import { useState } from "react";
export default function SignIn() {

    const [form, setForm] = useState({});

    return (
        <FormStyle>
            <input placeholder="email"></input>
            <input placeholder="senha"></input>
            <ButtonContainer>
                <button>Entrar</button>
            </ButtonContainer>
        </FormStyle>


    )
}

const FormStyle = styled.form`
    row-gap: 8px;
    width: inherit;
    display: flex;
    align-items: center;
    flex-direction: column;
    input {
    all: unset;
    font-size: 20px;
    width: inherit;
    height: 45px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    }
`
const ButtonContainer = styled.div`
    font-weight: 400;
    font-size: 20px;
    color: #FFFFFF;
    width: inherit;
    text-align: center;
    display: flex;
    height: 45px;
    width: inherit;
    
    button {
    all: unset;
    width: inherit;
    background: #52B6FF;
    border-radius: 4.6px;
    }
`
export {FormStyle, ButtonContainer}