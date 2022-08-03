import styled from "styled-components";
export default function Header({userInfo}) {

    return (
        <HeaderContainer>
            <span>Trackit</span>
            <img src={userInfo.image} alt="user "/>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.header`
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 70px;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    span {
    font-family: 'Playball', cursive;
    font-weight: 400;
    font-size: 39px;
    color: #FFFFFF;
    }
    img {
    width: 51px;
    height: 51px;
    border-radius: 98.5px;
    }
`