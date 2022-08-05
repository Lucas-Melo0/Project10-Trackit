import styled from "styled-components";
import { weekLetters } from "../../auxiliary/days";
import { FaTrash } from 'react-icons/fa';
import { deleteHabit, getHabits } from "../../API/sendData";
import { UserContext } from "../UserContext";
import { useState, useEffect } from "react";
import { useContext } from "react";
import Loader from "../Loader/Loader";
import { WeekButtonContainer, WeekButton } from "./Habits";
export default function ListHabits() {

    const { userInfo } = useContext(UserContext);
    const [habitsData, setHabitsData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        getHabits(userInfo.token)
            .catch((value) => console.log(value))
            .then((value) => setHabitsData(value.data));
        console.log(habitsData)
    }, [isLoading])

    console.log(habitsData)

     /* if (habitsData.length === 0) {
         return <Loader />
     } */
  
    function habitDelete(value) {
        if (window.confirm("Deseja realmente apagar ?")) {
            deleteHabit(value.id, userInfo.token);
            setIsLoading(!isLoading)

        }
    }

    

    return (
        <>
            {
                habitsData.length === 0 ? <NoHabitsParagraph>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</NoHabitsParagraph> 
                : <>
                    {
                        habitsData.map((value, index) => {
                            return (

                                <HabitsCard key={index}>
                                    <p>{value.name}</p>
                                    <FaTrash onClick={() => habitDelete(value)} />
                                    <WeekButtonContainer>
                                        {
                                            weekLetters.map((letters, index) => <WeekButton selected={value.days.includes(index + 1)} key={index}>{letters}</WeekButton>)
                                        }
                                    </WeekButtonContainer>
                                </HabitsCard>
                            )
                        })
                    }

                </>
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
        cursor: pointer;
        fill:#666666;
        position: absolute;
        right: 10px;
    }
   
`
const NoHabitsParagraph = styled.p`
    font-size: 18px;
    color: #666666;
    font-family: 'Lexend Deca', sans-serif;

`