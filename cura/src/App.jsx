import SezioneQuiz from "./components/Sezione-Quiz/Sezione-Quiz";
import { Route, Routes } from "react-router";
import TeamPage from "./components/Team/TeamPage";
import ProfilePage from "./pages/ProfilePage";
import { Navbar } from "./components/Navbar/Navbar.jsx";
import { Hero } from "./components/Hero/Hero.jsx";
import { SignUp } from "./components/SignUp/SignUp.jsx"
import QuizPage from "./pages/QuizPage.jsx"
 
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="Login" />
        <Route path="Quiz" element={<SezioneQuiz />} >
          <Route path="Quiz/:quizTitle" element={<QuizPage />} />
        </Route>
        <Route path="team" element={<TeamPage />} />
        <Route path="/" element={<Hero />} />
        <Route path="SignUp" element={<SignUp />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="/about" element={<TeamPage/>}/>
      </Routes>
    </>
  );
}

export default App;
