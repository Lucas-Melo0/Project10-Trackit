import styled from "styled-components";
import { useState } from "react";
import {createHabit} from "../../API/sendData";
import { UserContext } from "../UserContext";
import { useContext } from "react";
import { weekLetters } from "../../auxiliary/days";




export default function Habits({setButtonStatus}) {
    const {userInfo} = useContext(UserContext)
    const [input, setInput] = useState({name:""});
    const [days,setDays] = useState([]);
    const [selected, setSelected] = useState(false);
    

    function handleChange(event){
        setInput({
            ...input,
            [event.target.name] : event.target.value
        })
        console.log(input)
       
    }
   
    function getDays(index){
        setDays([...days,index + 1])
        setSelected(true);
        if ([...days].includes(index + 1)){
            setDays([...days].filter(element => element !== index + 1))
            setSelected(false);
        }
        console.log(days)
        console.log(selected)
    }

    function HandleSubmit(){
        createHabit({name:input.name,days:days},userInfo.token)
        .catch((value) => console.log(value))
        .then((value)=> console.log(value));
    }

    return (
        <HabitsCard>
            <input name ="name" onChange={handleChange} placeholder="nome do hábito"></input>
            <WeekButtonContainer>
                {
                    weekLetters.map((value,index) => <WeekButton onClick={()=> getDays(index)} selected={selected} >{value}</WeekButton>)
                }
            </WeekButtonContainer>
            <ResultButtonContainer>
                    <CancelButton onClick={()=>setButtonStatus(false)}>Cancelar</CancelButton>
                    <SaveButton onClick={HandleSubmit}>Salvar</SaveButton>
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

    
`

const WeekButton = styled.button `

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
export {WeekButton, WeekButtonContainer}