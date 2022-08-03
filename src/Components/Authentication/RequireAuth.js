
import Header from "../Header/Header";
import { UserContext } from "../UserContext";
import { useContext } from "react";
import FooterContainer from "../Footer/FooterContainer";
export default function RequireAuth({ children }) {

    const {userInfo} = useContext(UserContext)

    
    const auth = JSON.parse(localStorage.getItem(userInfo.name));
    console.log(auth)
    if (!auth){
        return <h1>ta loco doidao</h1>
    }
    return (
        <>
            <Header userInfo={userInfo}/>
            {children}
            <FooterContainer/>
        </>

    )


}