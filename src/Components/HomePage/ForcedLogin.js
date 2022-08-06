/* import { UserContext } from "../UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
export default function ForcedLogin({ children }) {
    const navigate = useNavigate();
    const { userInfo } = useContext(UserContext);
    const auth = JSON.parse(localStorage.getItem("user"));
    
    if (auth !== null) {
        navigate("/hoje")
    }
    
    return (
        <>
            {children}
        </>






    )
} */