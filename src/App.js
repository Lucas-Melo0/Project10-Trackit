import HomePageContainer from "./Components/HomePage/HomePageContainer";
import SignUpContainer from "./Components/SignUp/SignUpContainer";
import { UserContext } from "./Components/UserContext";
import HabitsContainer from "./Components/Habits/HabitsContainer";
import GlobalStyle from "./styles/globalStyles";
import RequireAuth from "./Components/Authentication/RequireAuth";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

function App() {

  const [userInfo, setUserInfo] = useState("")

  return (
    <>
      <GlobalStyle />
      <UserContext.Provider value ={{userInfo,setUserInfo}}>
        <Routes>
            <Route path="/" element={<HomePageContainer  />} />
            <Route path="/cadastro" element={<SignUpContainer />} />
            <Route path="/habitos" element={
              <RequireAuth >
                <HabitsContainer  />
              </RequireAuth>} />
        </Routes>
        </UserContext.Provider>

    </>

  );
}

export default App;

