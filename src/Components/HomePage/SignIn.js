import styled from "styled-components";
import { useState, useContext } from "react";
import { UserContext } from "../UserContext";
import { useNavigate } from "react-router-dom";
import { sendData } from "../../API/sendData";
import { ThreeDots } from "react-loader-spinner";
export default function SignIn() {

    const { setUserInfo, isLoading, setIsLoading } = useContext(UserContext)
    const navigate = useNavigate();
    const [form, setForm] = useState({
        email: "",
        password: ""

    });

    function handleSubmit(event) {
        event.preventDefault();
        setIsLoading(true);
        sendData("/auth/login", form)
            .catch((error) => {
                console.log(error)
                alert("Digite dados validos");
                setIsLoading(false);
            })
            .then((value) => {
                if (value.statusText === "OK") {
                    console.log(value)
                    localStorage.setItem(value.data.name, JSON.stringify({ token: value.data.token }));
                    setUserInfo(value.data);
                    setIsLoading(false);
                    navigate("/habitos")

                }

            })
    }
    function handleForm(event) {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        }
        )
    }
    console.log(form)
    return (
        <FormStyle isLoading={isLoading} onSubmit={handleSubmit}>
            <input disabled={isLoading}
                name="email"
                onChange={handleForm}
                placeholder="email">
            </input>
            <input disabled={isLoading}
                type="password"
                name="password"
                onChange={handleForm}
                placeholder="senha">
            </input>
            <ButtonContainer isLoading={isLoading}>
                <button>{isLoading ? <ThreeDots color="#FFFFFF" /> : "Entrar"}</button>
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
    background: ${({ isLoading }) => (isLoading ? "#F2F2F2" : "#FFFFFF")};
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
    display: flex;
    justify-content: center;
    align-items: center;
    background: #52B6FF;
    opacity: ${({ isLoading }) => (isLoading ? "0.4" : "1")};
    border-radius: 4.6px;
    }
`
export { FormStyle, ButtonContainer }