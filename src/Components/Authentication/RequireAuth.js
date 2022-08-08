import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import { UserContext } from "../UserContext";
import { useContext } from "react";
import styled from "styled-components"
import FooterContainer from "../Footer/FooterContainer";
export default function RequireAuth({ children }) {

    const {userInfo} = useContext(UserContext)
    const navigate = useNavigate();
    
    const auth = JSON.parse(localStorage.getItem(userInfo.name));
    if (!auth){
        return <H1>Sua sessão expirou!</H1>
    }
    return (
        <>
            <Header userInfo={userInfo}/>
            {children}
            <FooterContainer/>
        </>

    )

}
const H1 = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 90vh;
    margin: 0 auto;


`