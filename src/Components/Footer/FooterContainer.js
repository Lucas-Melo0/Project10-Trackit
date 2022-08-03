import styled from "styled-components";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
export default function FooterContainer() {
    return (
        <Container>
            <FooterButton>Hábitos</FooterButton>
            <ProgressbarContainer onClick={()=> alert("oi")}>
                <CircularProgressbar styles={buildStyles({ backgroundColor: '#52B6FF',
                textColor:'#FFFFFF',trailColor:'#52B6FF', 
                pathColor:'#FFFFFF' })} 
                background ={true} 
                value={40} 
                text={"Hoje"} />
            </ProgressbarContainer>
            <FooterButton>Histórico</FooterButton>
        </Container>

    )
}

const Container = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: fixed;
    bottom:0;
    width: 100%;
    height: 70px;
    background: #FFFFFF;
`
const FooterButton = styled.button`
    all:unset;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: #52B6FF;
`
const ProgressbarContainer = styled.div`
    width: 100px;
    height: 150px;
`