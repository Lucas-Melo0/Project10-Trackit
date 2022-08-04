import styled from "styled-components";
import { FaCheckSquare } from "react-icons/fa";
export default function TodayHabit({value}) {
    return (

        <Wrapper>
            <TextContainer>
                <h2>{value.name}</h2>
                <h4>Sequência atual: {value.currentSequence}</h4>
                <h4>{value.highestSequence}</h4>
            </TextContainer>
            <FaCheckSquare/>

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
    color: #666666;
    }

`