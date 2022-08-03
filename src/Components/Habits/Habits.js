import styled from "styled-components";
export default function Habits() {

    const weekLetters = ["D", "S", "T", "Q", "Q", "S", "S"]

    return (
        <HabitsCard>
            <input placeholder="nome do hábito"></input>
            <WeekButtonContainer>
                {
                    weekLetters.map(value => <button>{value}</button>)
                }
            </WeekButtonContainer>
            <ResultButtonContainer>
                    <CancelButton>Cancelar</CancelButton>
                    <SaveButton>Salvar</SaveButton>
            </ResultButtonContainer>
            

        </HabitsCard>

    )

}

const HabitsCard = styled.div`
    row-gap: 10px;
    display: flex;
    flex-direction: column;
    width: 90vw;
    padding: 10px 20px;
    height: 180px;
    background: #FFFFFF;
    border-radius: 5px;
    input {
        all:unset;
        border:#CFCFCF 1px solid;
        font-size: 20px;
        color: #666666;
        height: 45px;
    }
   
`
const WeekButtonContainer = styled.div`
    display: flex;
    column-gap: 3px;

    button {
        all:unset;
        text-align: center;
        border: #DBDBDB 1px solid;
        font-size: 20px;
        border-radius:5px;
        font-family: 'Lexend Deca', sans-serif;
        color: #DBDBDB;
        width: 30px;
        height: 30px;

    }
`
const ResultButtonContainer = styled.div `
    display: flex;
    column-gap:10px;
    justify-content:flex-end

`

const CancelButton = styled.button `


    all:unset;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 16px;
    text-align: center;
    color: #52B6FF;   

`
const SaveButton = styled.button `


    all:unset;
    width: 84px;
    height: 35px;
    border-radius: 4.6px;
    background-color: #52B6FF;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 16px;
    text-align: center;
    color: #FFFFFF;  


`