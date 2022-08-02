import trackitLogo from '../../images/logo.png'
import styled from 'styled-components';
export default function Logo(){
    return (
        <LogoImage src={trackitLogo}/>
    )

}

const LogoImage = styled.img `
    width: 180px;
    height: 178.38px;

`