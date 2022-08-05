import styled from "styled-components";
import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useContext } from "react";
import { UserContext } from "../UserContext";

export default function FooterContainer() {

    const {progress} = useContext(UserContext);
    const {done,total,percentage} = progress
    return (
        <Container>
            <Link to={"/habitos"}>
                <FooterButton>Hábitos</FooterButton>
            </Link>
            <Link to={"/hoje"}>
                <ProgressbarContainer >
                    <CircularProgressbar styles={buildStyles({
                        backgroundColor: '#52B6FF',
                        textColor: '#FFFFFF', trailColor: '#52B6FF',
                        pathColor: '#FFFFFF'
                    })}
                        background={true}
                        value={percentage(done,total)}
                        text={"Hoje"} />
                </ProgressbarContainer>
            </Link>
            <Link to={"/historico"}>
                <FooterButton >Histórico</FooterButton>
            </Link>
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