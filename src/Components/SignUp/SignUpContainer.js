import Logo from "../Logo/Logo";
import { useState } from "react";
import { Container } from "../HomePage/HomePageContainer";
import { FormStyle, ButtonContainer } from "../HomePage/SignIn";
import { LinkText } from "../HomePage/SignUpLink";
import { Link } from "react-router-dom";
import { sendData } from "../../API/sendData";
import { ThreeDots } from 'react-loader-spinner'
import { useNavigate } from "react-router-dom";
import SignUpInput from "./SignUpInput";
export default function SignUpContainer() {

    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [form, setForm] = useState({
        email: "",
        name: "",
        image: "",
        password: "",

    });
    function handleSubmit(event) {
        event.preventDefault();
        setIsLoading(true)
        sendData("/auth/sign-up", form)
            .catch((error) => {
                console.log(error);
                alert("Erro por favor digite dados validos")
                setIsLoading(false);

            })
            .then((value) => {
                if (value.statusText === "Created") {
                    console.log(value)
                    navigate("/")
                }
            })

    }
    function handleForm(event) {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    return (
        <Container>
            <Logo></Logo>
            <FormStyle isLoading={isLoading} onSubmit={handleSubmit}>
                <input disabled={isLoading}
                    name="email"
                    placeholder="email"
                    onChange={handleForm}>
                </input>
                <input disabled={isLoading}
                    type="password"
                    name="password"
                    placeholder="senha"
                    onChange={handleForm}>
                </input>
                <input disabled={isLoading}
                    name="name"
                    placeholder="nome"
                    onChange={handleForm}>
                </input>
                <input disabled={isLoading}
                    name="image"
                    placeholder="foto"
                    onChange={handleForm}>
                </input>
                <ButtonContainer>
                    <button disabled={isLoading}>{isLoading ? <ThreeDots color="#FFFFFF" /> : "Cadastrar"}</button>
                </ButtonContainer>
            </FormStyle>
            <Link to={"/"}>
                <LinkText>Já tem uma conta? Faça login!</LinkText>
            </Link>
        </Container>

    )
}
