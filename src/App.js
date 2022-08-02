import HomePageContainer from "./Components/HomePage/HomePageContainer";
import SignUpContainer from "./Components/SignUp/SignUpContainer";
import GlobalStyle from "./styles/globalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<HomePageContainer/>}/> 
          <Route path ="/cadastro" element={<SignUpContainer/> }/> 
        </Routes>

      </Router>


    </>

  );
}

export default App;

