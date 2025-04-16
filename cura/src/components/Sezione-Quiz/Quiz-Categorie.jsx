import QuizCard from "../Card-Quiz/Quiz-Card";
import masc from "../../../public/Images/mascotte_2.PNG"

export default function CategorieQuiz() {
  return (
    <div className="bg-[#A1C877] w-auto h-screen pl-20 pr-20 pt-10 col-span-2 overflow-auto Quiz-list">
      <QuizCard
        par={"VITA LAVORO"}
        desc={
          "Rispondi a queste domande per scoprire come bilanci il tuo tempo tra lavoro, famiglia e benessere. Il risultato ti aiuterà a capire se il tuo equilibrio vita-lavoro è ottimale o se ci sono aree da migliorare."
        }
        emoji={masc}
      />
      <QuizCard
        par={"SONNO"}
        desc={
          "Rispondi a queste domande per scoprire quanto il tuo sonno influisce sul tuo benessere. Il risultato ti aiuterà a capire se stai dormendo a sufficienza e se ci sono abitudini da migliorare per dormire meglio."
        }
        emoji={masc}
      />
      <QuizCard
        par={"LIVELLO DI STRESS"}
        desc={
          "Rispondi a queste domande per valutare il tuo livello di stress. Il risultato ti aiuterà a capire quanto lo stress influenzi la tua vita quotidiana e a individuare eventuali aree in cui puoi migliorare il tuo benessere."
        }
        emoji={masc}
      />
      <QuizCard
        par={"UMORE"}
        desc={
          "Rispondi a queste domande per valutare il tuo umore. Il risultato ti aiuterà a capire come ti senti emotivamente e a individuare eventuali aspetti della tua vita che potrebbero influenzare il tuo stato d’animo."
        }
        emoji={masc}
      />
      <QuizCard
        par={"AUTOCONSAPEVOLEZZA"}
        desc={
          "Rispondi a queste domande per esplorare il tuo livello di autoconsapevolezza. Il risultato ti aiuterà a capire quanto sei in sintonia con te stesso e a individuare aree in cui puoi crescere per migliorare la tua consapevolezza emotiva e mentale."
        }
        emoji={masc}
      />
    </div>
  );
}
