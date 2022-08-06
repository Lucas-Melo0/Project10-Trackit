import styled from "styled-components";
import Loader from "../Loader/Loader";
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { useState, useEffect, useContext } from "react";
import { getHabitsHistory } from "../../API/sendData";
import { UserContext } from "../UserContext";

export default function HistoryContainer() {

    const [value, onChange] = useState(new Date());;
    const [history, setHistory] = useState({});
    const {userInfo} = useContext(UserContext)
    useEffect(()=> {
        getHabitsHistory(userInfo.token).then((res)=> {
            console.log(res)
            setHistory(res.data)})
    },[]);
    
    function historyStatus(){
        if( history[0].habits.length === history[0].habits.filter((value)=> value.done === true).length){
            console.log("todos feitos")
        } 
        else {
            console.log("nao feito")
        }
    }
    /* historyStatus() */

    return (
        <Wrapper>
            <Container>
                <H3>Histórico</H3>
                <Calendar locale="pt-br"
                onChange={onChange}
                value={value}/>
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
    margin-top:70px;
    div {
        border-radius: 10px;
        
    }
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