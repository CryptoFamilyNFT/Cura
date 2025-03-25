import QuizCard from "../Card-Quiz/Quiz-Card";

export default function CategorieQuiz() {
  return (
    <div className=" grid-cols-1 bg-[#A1C877] rounded-2xl p-0.5 col-span-2 pt-10 overflow-auto list">
      <QuizCard title="VITA LAVORO" hand={hands} className="quiz"/>
      <QuizCard title="SONNO E RECUPERO" hand={hands} className="quiz"/>
      <QuizCard title="LIVELLO DI STRESS" hand={hands} className="quiz"/>
      <QuizCard title="UMORE ED EMOZIONI" hand={hands} className="quiz"/>
      <QuizCard title="AUTOCONSAPEVOLEZZA" hand={hands} className="quiz"/>
    </div>
  );
}
