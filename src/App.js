import HomePageContainer from "./Components/HomePage/HomePageContainer";
import SignUpContainer from "./Components/SignUp/SignUpContainer";
import HabitsContainer from "./Components/Habits/HabitsContainer";
import GlobalStyle from "./styles/globalStyles";
import RequireAuth from "./Components/Authentication/RequireAuth";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

 const [userInfo, setUserInfo] = useState("")

  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<HomePageContainer setUserInfo={setUserInfo} />} />
          <Route path="/cadastro" element={<SignUpContainer />} />
          <Route path="/habitos" element={
            <RequireAuth userInfo={userInfo}>
              <HabitsContainer userInfo={userInfo}/>
            </RequireAuth>} />
        </Routes>

      </Router>


    </>

  );
}

export default App;

