import styled from "styled-components";
import { FaCheckSquare } from "react-icons/fa";
import { checkHabitAsDone, unCheckHabitAsDone } from "../../API/sendData";
import { useContext } from "react";
import { UserContext } from "../UserContext";
export default function TodayHabit({ value, updateProgress, progress }) {

    const { userInfo } = useContext(UserContext);
    console.log(value)
  




    function toggleHabit(value) {
        if (value.done === true) {
            unCheckHabitAsDone(value.id, userInfo.token)
            .then(updateProgress());
            
            
        }
        else {
            checkHabitAsDone(value.id, userInfo.token)
            .then(updateProgress());
            
        }
    }
    
    
    function greenSequenceText(value) {
        if (value.done === true ) {
            return true;
        }
    }
    function greenRecordText(value){
        if (value.done === true && value.highestSequence === value.currentSequence){
            return true;
        }
    }

    return (

        <Wrapper>
            <TextContainer recordText ={greenRecordText(value)}sequenceText={greenSequenceText(value)}>
                <h2>{value.name}</h2>
                <h4>Sequência atual: {value.currentSequence}</h4>
                <h5>Seu Recorde: {value.highestSequence}</h5>
            </TextContainer>
            <FaCheckSquare onClick={() => toggleHabit(value)} color={value.done ? "#8FC549" : null} />

        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    width: 90vw;
    height: 94px;
    background-color: #FFFFFF;
    padding: 10px 10px;
    position: relative;


    
    svg {
        top: 10px;
        right: 30px;
        width: 69px;
        height: 69px;
        position: absolute;
        color:#EBEBEB;
    }

`
const TextContainer = styled.div`
    row-gap: 5px;
    display: flex;
    flex-direction: column;

    h2{
    font-family: 'Lexend Deca';
    font-size: 20px;
    color: #666666;
    }
    h4{
    font-family: 'Lexend Deca';
    font-size: 13px;
    color:${({ sequenceText }) => (sequenceText ? "#8FC549" : "#666666;")};
    }
    h5{
    font-family: 'Lexend Deca';
    font-size: 13px;
    color: ${({ recordText }) => (recordText ? "#8FC549" : "#666666;")};
    }

`