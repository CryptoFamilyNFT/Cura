import SezioneQuiz from "./components/Sezione-Quiz/Sezione-Quiz";
import { Route, Routes } from "react-router";
import TeamPage from "./components/Team/TeamPage";
import ProfilePage from "./pages/ProfilePage";
import Navbar from "./components/Navbar/Navbar.jsx";
import { Hero } from "./components/Hero/Hero.jsx";
import { SignUp } from "./components/Mutation/SignUp";
import { SignIn } from "./components/Mutation/SignIn";
import HomeReview from "./components/Review/HomeReview";
import QuizPage from "./pages/QuizPage";
import FeedbackPage from "./pages/FeedbackPage";
import MainSection from "./pages/home-page/MainSection.jsx";
import MeditazioneHome from "./pages/Meditazione-pages/MeditazioneHome.jsx";
import Sonno from "./pages/Meditazione-pages/Sonno.jsx";
import Mindfullness from "./pages/Meditazione-pages/Mindfullness.jsx";
import Chatbot from "./components/chatbot/chatbot.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/Meditazione" element={<MeditazioneHome />} />
        <Route path="/Meditazione/mindfullness" element={<Mindfullness />} />
        <Route path="/Meditazione/sonno" element={<Sonno />} />
        <Route path="/Quiz" element={<SezioneQuiz />} />
        <Route path="/Team" element={<TeamPage />} />
        <Route path="/" element={<Hero />} />
        <Route path="/QuizPage" element={<QuizPage />} />
        <Route path="/Login" element={<SignIn />} />
        <Route path="/Profile" element={<ProfilePage />} />
        <Route path="/Review" element={<HomeReview />} />
        <Route path="/Feedback" element={<FeedbackPage />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/About" element={<TeamPage />} />
        <Route path="/Menu" element={<MainSection />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
        <Route path="/Chatbot" element={<Chatbot />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
