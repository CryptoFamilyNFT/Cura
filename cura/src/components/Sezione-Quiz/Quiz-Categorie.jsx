import QuizCard from "../Card-Quiz/Quiz-Card";
import hands from "../img/hands.png";

export default function CategorieQuiz() {
  return (
    <div className=" relative grid-cols-1 bg-[#A1C877] p-0.5 col-span-2 ">
      <QuizCard buh="VITA LAVORO" hand={hands} />
      <QuizCard buh="SONNO E RECUPERO" hand={hands} />
      <QuizCard buh="LIVELLO DI STRESS" hand={hands} />
      <QuizCard buh="UMORE ED EMOZIONI" hand={hands} />
      <QuizCard buh="AUTOCONSAPEVOLEZZA" hand={hands} />
    </div>
  );
}
