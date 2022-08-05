import styled from "styled-components";
import { useState } from "react";
import { createHabit } from "../../API/sendData";
import { UserContext } from "../UserContext";
import { useContext } from "react";
import { weekLetters } from "../../auxiliary/days";
import { ThreeDots } from "react-loader-spinner";




export default function Habits({ setButtonStatus }) {
    const { userInfo, isLoading, setIsLoading } = useContext(UserContext)
    const [input, setInput] = useState({ name: "" });
    const [days, setDays] = useState([]);


    function handleChange(event) {
        setInput({
            ...input,
            [event.target.name]: event.target.value
        })
        console.log(input)

    }
    function getDays(index) {
        setDays([...days, index + 1])

        if ([...days].includes(index + 1)) {
            setDays([...days].filter(element => element !== index + 1))

        }
        console.log(days)

    }

    function HandleSubmit() {
        setIsLoading(true)
        console.log(isLoading)
        createHabit({ name: input.name, days: days }, userInfo.token)
            .catch((value) => {
                console.log(value);
                setIsLoading(false);
            })
            .then((value) => {
                if (value.statusText === "Created") {
                    console.log(value);
                    setIsLoading(false);
                    setButtonStatus(false);
                }

            });
    }

    return (
        <HabitsCard isLoading={isLoading}>
            <input disabled={isLoading} name="name" onChange={handleChange} placeholder="nome do hábito"></input>
            <WeekButtonContainer>
                {
                    weekLetters.map((value, index) => {
                        return <WeekButton disabled={isLoading} onClick={() => getDays(index)} selected={days.includes(index + 1)} >{value}</WeekButton>
                    })
                }
            </WeekButtonContainer>
            <ResultButtonContainer>
                <CancelButton onClick={() => setButtonStatus(false)}>Cancelar</CancelButton>
                <SaveContainer isLoading={isLoading}>
                    <SaveButton   onClick={HandleSubmit}> {isLoading ? <ThreeDots color="#FFFFFF" /> : "Salvar"}</SaveButton>
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
        background-color: ${({isLoading}) => (isLoading ? "#F2F2F2" : "#FFFFFF")};
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
    font-family: 'Lexend Deca', sans-serif;
    font-size: 16px;
    text-align: center;
    color: #52B6FF;   

`
const SaveButton = styled.button`


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
export { WeekButton, WeekButtonContainer }
