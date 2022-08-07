import styled from "styled-components";
import { useState } from "react";
import { createHabit } from "../../API/sendData";
import { UserContext } from "../UserContext";
import { useContext } from "react";
import { weekLetters } from "../../auxiliary/days";
import { ThreeDots } from "react-loader-spinner";



export default function Habits({ setIsOpened }) {
    const { userInfo, isLoading, setIsLoading, render, setRender } = useContext(UserContext)
    const [habit, setHabit] = useState({ name: "" });
    const [days, setDays] = useState([]);



    function handleChange(event) {
        setHabit({
            ...habit,
            [event.target.name]: event.target.value
        });
        

    }
    function getDays(index) {

        setDays([...days, index === 6 ? 0 : index + 1]);

        if ([...days].includes(index + 1 )) {
            setDays([...days].filter(element => element !== index + 1));
        }
        else if ([...days].includes(0)){
            setDays([...days].filter(element => element !== 0));
        }

    }
    function changeColorOfButton(index) {
        if (days.includes(index + 1 )){
            return true;
        }
        else if (days.includes(index - 6)){
            return true;
        }
          
    }

    console.log(days)
    function HandleSubmit() {
        
        if (habit.name === "") {
            alert("Escreva o nome do hábito.");
        }
        else if (days.length === 0) {
            alert("Escolha pelo menos um dia.");
        } else {
            setIsLoading(true)
            createHabit({ name: habit.name, days: days }, userInfo.token)
                .catch((value) => {
                    console.log(value);
                    setIsLoading(false);
                })
                .then((value) => {
                    if (value.statusText === "Created") {
                        setIsLoading(false);
                        setRender(render + 1);
                        setIsOpened(false);

                    }
                });
        }

    }
    return (
        <HabitsCard isLoading={isLoading}>
            <input disabled={isLoading} name="name" onChange={handleChange} placeholder="nome do hábito"></input>
            <WeekButtonContainer>
                {
                    weekLetters.map((value, index) => {
                        return <WeekButton  key={index} disabled={isLoading} onClick={() => getDays(index)} selected={changeColorOfButton(index)} >{value}</WeekButton>
                    })
                }
            </WeekButtonContainer>
            <ResultButtonContainer>
                <CancelButton onClick={() => setIsOpened(false)}>Cancelar</CancelButton>
                <SaveContainer isLoading={isLoading}>
                    <SaveButton onClick={HandleSubmit}> {isLoading ? <ThreeDots color="#FFFFFF" /> : "Salvar"}</SaveButton>
                </SaveContainer>
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
        background-color: ${({ isLoading }) => (isLoading ? "#F2F2F2" : "#FFFFFF")};
    }
   
`
const WeekButtonContainer = styled.div`
    display: flex;
    column-gap: 3px;

    
`

const SaveContainer = styled.div`
    font-weight: 400;
    font-size: 20px;
    color: #FFFFFF;
    width: inherit;
    text-align: center;
    display: flex;
    width: 84px;
    height: 35px;
    
    button {
    all: unset;
    cursor: pointer;
    width: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #52B6FF;
    opacity: ${({ isLoading }) => (isLoading ? "0.4" : "1")};
    border-radius: 4.6px;
    }
`
const WeekButton = styled.button`

        all:unset;
        text-align: center;
        border: #DBDBDB 1px solid;
        font-size: 20px;
        border-radius:5px;
        font-family: 'Lexend Deca', sans-serif;
        color: ${({ selected }) => (selected ? "#FFFFFF" : "#DBDBDB;")};
        background-color: ${({ selected }) => (selected ? "#CFCFCF" : "#FFFFFF;")};
        width: 30px;
        height: 30px;

`

const ResultButtonContainer = styled.div`

    display: flex;
    column-gap:10px;
    justify-content:flex-end

`

const CancelButton = styled.button`


    all:unset;
    cursor: pointer;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 16px;
    text-align: center;
    color: #52B6FF;   

`
const SaveButton = styled.button`


    all:unset;
    cursor: pointer;
    width: 84px;
    height: 35px;
    border-radius: 4.6px;
    background-color: #52B6FF;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 16px;
    text-align: center;
    color: #FFFFFF;  


`
export { WeekButton, WeekButtonContainer }
