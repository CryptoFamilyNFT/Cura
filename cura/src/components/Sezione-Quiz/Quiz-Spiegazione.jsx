import cloud from "../../../public/Images/cloud2.png";

export default function SpiegazioneQuiz() {
  return (
    <div className=" bg-[#DBE59E] h-screen p-3 rounded-2xl">
      <div className=" absolute flex flex-col space-y-30 p-10 thumb-cloud ">
        <div>
          <img src={cloud} className=" h-15" />
        </div>
        <div>
          <img src={cloud} className=" pl-80 h-15" />
        </div>
        <div>
          <img src={cloud} className=" pl-8 h-15" />
        </div>
      </div>
      <h1 className="relative font-extrabold text-6xl text-[#23687D] p-10">
        Quiz pensati per aiutarti a fare il primo passo verso una vita
        equilibrata
      </h1>
      <p className="p-10 text-xl text-[#23687D]">
        Al termine di ogni quiz, le tue risposte saranno analizzate da
        un'intelligenza artificiale avanzata che ti fornirà consigli
        personalizzati e suggerimenti pratici. Non si tratta solo di una
        valutazione momentanea: riceverai un percorso continuativo con esercizi
        e abitudini da integrare nella tua vita quotidiana, per migliorare il
        tuo benessere e la tua crescita personale giorno dopo giorno. Comincia
        oggi a scoprire come migliorare la tua vita, passo dopo passo!
      </p>
    </div>
  );
}
