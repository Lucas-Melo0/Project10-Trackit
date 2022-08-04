import styled from "styled-components";
import {TailSpin} from 'react-loader-spinner'
export default function Loader(){
    return (
        <Container>
            <TailSpin color="#52B6FF"/>
        </Container>
    )
}

const Container = styled.div `
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;


`