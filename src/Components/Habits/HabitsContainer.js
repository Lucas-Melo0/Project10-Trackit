import styled from "styled-components";
import Habits from "./Habits";
import { useState } from "react";
import ListHabits from "./ListHabits";
export default function HabitsContainer() {

    const [buttonStatus, setButtonStatus] = useState(false);

    return (
        <Wrapper>
            <Container>
                <AddHabitContainer>
                    <span>Meus hábitos</span>
                    <button onClick={()=>setButtonStatus(true)}>+</button>
                </AddHabitContainer>
                {
                    buttonStatus && <Habits setButtonStatus={setButtonStatus}></Habits>
                }
                <ListHabits/>
                <NoHabitsParagraph>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</NoHabitsParagraph>
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
    display: flex;
    flex-direction:column;
    row-gap:20px;
    width: 90vw;
    margin: 0 auto;
    padding: 20px 0;
    margin-bottom:70px;
`
const AddHabitContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;


    span {
    font-size: 23px;
    color: #126BA5;
    font-family: 'Lexend Deca', sans-serif;
    }
    button {
    all:unset;
    color: #FFFFFF;
    font-size: 30px;
    text-align: center;
    width: 40px;
    height: 35px;
    background: #52B6FF;
    border-radius: 4.6px;
    }
`
const NoHabitsParagraph = styled.p `
    font-size: 18px;
    color: #666666;
    font-family: 'Lexend Deca', sans-serif;

`





