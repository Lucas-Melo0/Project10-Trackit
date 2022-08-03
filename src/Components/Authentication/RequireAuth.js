import Header from "../Header/Header";
export default function RequireAuth({ children, userInfo }) {

    
    const auth = JSON.parse(localStorage.getItem(userInfo.name));
    console.log(auth)
    if (!auth){
        return <h1>ta loco doidao</h1>
    }
    return (
        <>
            <Header userInfo={userInfo}/>
            {children}
        </>

    )


}