import styled from "styled-components";
import Loader from "../Loader/Loader";
export default function HistoryContainer() {


    return (
        <Wrapper>
            <Container>
                <H3>Histórico</H3>
                <H5>Em breve você poderá ver o histórico dos seus hábitos aqui!</H5>
            </Container>
        </Wrapper>

    )
}


const Wrapper = styled.div`
    width: 100vw;
    min-height:90vh;
    background-color: #F2F2F2;

`

const Container = styled.div`
    row-gap: 10px;
    display: flex;
    flex-direction: column;
    width: 90vw;
    margin: 0 auto;
    padding: 20px 0 ;

`
const H3 = styled.h3`
    font-family: 'Lexend Deca', sans-serif;
    font-size: 23px;
    color:#126BA5;

`
const H5 = styled.h5`
    font-family: 'Lexend Deca', sans-serif;
    font-size: 18px;
    color:#666666;

`