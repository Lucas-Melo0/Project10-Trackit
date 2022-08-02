import styled from 'styled-components';
import Logo from '../Logo/Logo';
import SignIn from './SignIn';
import SignUpLink from './SignUpLink';
export default function HomePageContainer(){
    return (
        <Container>
            <Logo></Logo>
            <SignIn></SignIn>
            <SignUpLink></SignUpLink>
        </Container>
        
    )
}

const Container = styled.div `

    width: 90vw;
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    align-items: center;
    

`
export {Container}
