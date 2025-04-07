import SezioneQuiz from "./components/Sezione-Quiz/Sezione-Quiz";
import { Route, Routes } from "react-router";
import TeamPage from "./components/Team/TeamPage";
import ProfilePage from "./pages/ProfilePage";

import QuizPage from "./pages/QuizPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="Login" />
        <Route path="Quiz" element={<SezioneQuiz />} />
        <Route path="team" element={<TeamPage />} />
        <Route path="/" element={<Hero />} />
        <Route path="quizpage" element={<QuizPage />} />
        <Route path="SignUp" element={<SignUp />} />
<<<<<<< HEAD
=======
        <Route path="profile" element={<ProfilePage />} />
>>>>>>> d3ce042f6037b3c1e4ad5a3b7294e9bc6fe40b3d
      </Routes>
    </>
  );
}

export default App;
