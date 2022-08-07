import styled from "styled-components";
import Loader from "../Loader/Loader";
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { useState, useEffect, useContext } from "react";
import { getHabitsHistory } from "../../API/sendData";
import { UserContext } from "../UserContext";
import dayjs from 'dayjs';


export default function HistoryContainer() {

    const [date, setDate] = useState(new Date());
    const [history, setHistory] = useState([]);
    const { userInfo } = useContext(UserContext);


    useEffect(() => {
        getHabitsHistory(userInfo.token).then((value) => {
            setHistory(value.data);
        })
    }, []);

    function tileClass(history, date) {
        const matchingDate = history.filter((value) => value.day === date);
        if (matchingDate.length === 1) {
            const doneHistory = matchingDate[0].habits.map((value) => value.done);
            if (doneHistory.includes(false)) {
                return 'not-completed';
            }
            else {
                return 'completed';
            }
        }
    }

    return (
        <Wrapper>
            <Container>
                <H3>Histórico</H3>
                {
                    history.length === 0 ? <Loader/> : <Calendar
                    onChange={setDate}
                    value={date}
                    tileClassName={({ date }) => tileClass(history, dayjs(new Date(date)).format('DD/MM/YYYY'))}/>
                }
                
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
    .not-completed{
        color: black;
        background-color: #EA5766;
        clip-path:circle(35%)
    }
    .completed{
        background-color: #8FC549;
        clip-path:circle(35%)
       
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