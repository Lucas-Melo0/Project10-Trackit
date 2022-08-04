import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import styled from "styled-components";
import TodayHabit from "./TodayHabit";

export default function TodayContainer() {

    const weekday = dayjs().locale("pt-br").format("dddd")
    const month = dayjs().format("MM");
    const day = dayjs().format("DD");
    return (
        <Wrapper>
            <Container>
                <H3>{weekday}, {day}/{month}</H3>
                <H5>Nenhum hábito concluído ainda</H5>
                <TodayHabit/>
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
const H3 = styled.h3 `
    font-family: 'Lexend Deca', sans-serif;
    font-size: 23px;
    color:#126BA5;

`
const H5 = styled.h5 `
    color: #BABABA;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 18px;


`

