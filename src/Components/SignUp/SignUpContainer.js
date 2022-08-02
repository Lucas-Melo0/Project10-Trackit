import Logo from "../Logo/Logo";
import { Container } from "../HomePage/HomePageContainer";
import { FormStyle, ButtonContainer } from "../HomePage/Inputs";
import { LinkText } from "../HomePage/SignUpLink";
export default function SignUpContainer(){
    return (
        <Container>
            <Logo></Logo>
            <FormStyle>
                <input placeholder="email"></input>
                <input placeholder="senha"></input>
                <input placeholder="nome"></input>
                <input placeholder="foto"></input>
                <ButtonContainer>
                    <button>Cadastrar</button>
                </ButtonContainer>
            </FormStyle>
            <LinkText>Já tem uma conta? Faça login!</LinkText>
        </Container>
        
    )
}