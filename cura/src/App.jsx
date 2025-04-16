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
import Page1 from "./pages/landing-page/Page1"
import Page2 from "./pages/landing-page/Page2"
import Page3 from "./pages/landing-page/Page3"
import MeditazioneHome from "./pages/Meditazione-pages/MeditazioneHome.jsx";
import MeditazioneMindfullness from "./pages/landing-page/Page3";
import Sonno from "./pages/Meditazione-pages/Sonno.jsx";
import Mindfullness from "./pages/Meditazione-pages/Mindfullness.jsx";
import Chatbot from "./components/chatbot/chatbot.jsx";

function App() {

  return (
    <>
      <Navbar />
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
        <Route path="/Page1" element={<Page1 />} />
        <Route path="/Page2" element={<Page2 />} />
        <Route path="/Page3" element={<Page3 />} />
        <Route path="meditazione" element={<MeditazioneHome />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
        <Route path="/mindfullness" element={<Mindfullness />} />
        <Route path="/sonno" element={<Sonno />} />
        <Route path="/chatbot" element={<Chatbot />} />
      </Routes>
    </>
  );
}

export default App;
