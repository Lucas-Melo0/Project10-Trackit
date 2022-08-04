import styled from "styled-components";
import { weekLetters } from "../../auxiliary/days";
import { WeekButton, WeekButtonContainer } from "./Habits";
import { FaTrash } from 'react-icons/fa';
import { deleteHabit, getHabits } from "../../API/sendData";
import { UserContext } from "../UserContext";
import { useState, useEffect } from "react";
import { useContext } from "react";
import Loader from "../Loader/Loader";

export default function ListHabits() {

    const { userInfo } = useContext(UserContext);
    const [habitsData, setHabitsData] = useState([]);

    useEffect(() => {
        getHabits(userInfo.token)
            .catch((value) => console.log(value))
            .then((value) => setHabitsData(value.data));
        console.log(habitsData)
    }, [])
    if (habitsData.length === 0){
        return <Loader/>
    }

    return (
        <>
            {
                habitsData.map((value, index) => {
                    return (

                        <HabitsCard key={index}>
                            <p>{value.name}</p>
                            <FaTrash onClick={()=> deleteHabit(value.id,userInfo.token)}/>
                            <WeekButtonContainer>
                                {
                                    weekLetters.map((letters) => <WeekButton>{letters}</WeekButton>)
                                }
                            </WeekButtonContainer>
                        </HabitsCard>
                    )
                })
            }

        </>
    )


}


const HabitsCard = styled.div`
    row-gap: 10px;
    display: flex;
    flex-direction: column;
    width: 90vw;
    padding: 10px 20px;
    height: 90px;
    background: #FFFFFF;
    border-radius: 5px;
    position: relative;
    p {
        font-size: 20px;
        color: #666666;
    }
    svg{
        fill:#666666;
        position: absolute;
        right: 10px;
    }
   
`