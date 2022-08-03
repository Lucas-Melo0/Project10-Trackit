/* import styled from "styled-components"
import { useState } from "react";

export default function HabitsButton(){

    const [days,setDays] = useState([]);
    const [selected, setSelected] = useState(false);
    const weekLetters = [ "S", "T", "Q", "Q", "S", "S","D"];
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

    return (
        <>
        {
            weekLetters.map((value,index)=> <WeekButton selected={selected} onClick={()=> getDays(index)} >{value}</WeekButton>)
        }
        
        </>
        
    )
}
 */


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