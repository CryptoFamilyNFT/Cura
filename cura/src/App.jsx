import SezioneQuiz from "./components/Sezione-Quiz/Sezione-Quiz";
import { Route, Routes } from "react-router";
import TeamPage from "./components/Team/TeamPage";
import ProfilePage from "./pages/ProfilePage";
import Navbar from "./components/Navbar/Navbar.jsx";
import { Hero } from "./components/Hero/Hero.jsx";
import { SignUp } from "./components/SignUp/SignUp.jsx";

import HomeReview from "./components/Review/HomeReview"
import QuizPage from "./pages/QuizPage";
import FeedbackPage from "./pages/FeedbackPage";
import Page1 from "./pages/landing-page/Page1"
import Page2 from "./pages/landing-page/Page2"
import Page3 from "./pages/landing-page/Page3"
import { useDispatch, useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()
  return (
    <>
      <Navbar userState={user} dispatch={dispatch} />
      <Routes>
        <Route path="Login" />
        <Route path="Quiz" element={<SezioneQuiz />} />
        <Route path="Team" element={<TeamPage />} />
        <Route path="/" element={<Hero />} />
        <Route path="QuizPage" element={<QuizPage />} />
        <Route path="SignUp" element={<SignUp />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="/Review" element={<HomeReview />} />
        <Route path="/Feedback" element={<FeedbackPage />} />
        <Route path="/Page1" element={<Page1 />} />
        <Route path="/Page2" element={<Page2 />} />
        <Route path="/Page3" element={<Page3 />} />
      </Routes>
    </>
  );
}

export default App;
