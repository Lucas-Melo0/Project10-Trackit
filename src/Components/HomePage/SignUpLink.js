import { Link } from "react-router-dom";
import styled from "styled-components";
export default function SignUpLink() {
    return (
        <Link to={"/cadastro"}>
            <LinkText>Não tem uma conta? Cadastre-se!</LinkText>
        </Link>

    )
}
const LinkText = styled.p `
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    color: #52B6FF;
`
export {LinkText}