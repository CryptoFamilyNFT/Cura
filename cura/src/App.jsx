import SezioneQuiz from "./components/Sezione-Quiz/Sezione-Quiz";
import { Route, Routes } from "react-router";
import TeamPage from "./components/Team/TeamPage";
import ProfilePage from "./pages/ProfilePage";
import Navbar from "./components/Navbar/Navbar.jsx";
import { Hero } from "./components/Hero/Hero.jsx";
import { SignUp } from "./components/Mutation/SignUp"
import { SignIn } from "./components/Mutation/SignIn"
import HomeReview from "./components/Review/HomeReview"
import QuizPage from "./pages/QuizPage";
import FeedbackPage from "./pages/FeedbackPage";
import MeditazioneHome from "./pages/Meditazione-pages/MeditazioneHome.jsx";
import Mindfullness from "./pages/Meditazione-pages/Mindfullness.jsx"
import Sonno from "./pages/Meditazione-pages/Sonno.jsx"
import MainSection from "./pages/home-page/MainSection.jsx"
import LandingPage from "./pages/landing-page/LandingPage.jsx";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()
  return (
    <>
      <Navbar userState={user} dispatch={dispatch} />
      <Routes>
        <Route path="/Meditazione" element={<MeditazioneHome/>}/>
          <Route path="/Meditazione/mindfullness" element={<Mindfullness/>}/>
          <Route path="/Meditazione/sonno" element={<Sonno/>}/>
        <Route path="/Quiz" element={<SezioneQuiz />} />
        <Route path="QuizPage" element={<QuizPage />} />
        <Route path="/Team" element={<TeamPage />} />
        <Route path="/" element={<Hero />} />
        <Route path="login" element={<SignIn />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="/Review" element={<HomeReview />} />
        <Route path="/Feedback" element={<FeedbackPage />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Profile" element={<ProfilePage />} />
        <Route path="/about" element={<TeamPage/>}/>
        <Route path="/Menu" element={<MainSection/>}/>
        <Route path='/LandingPage' element={<LandingPage/>}/>
      </Routes>
    </>
  );
}

export default App;
