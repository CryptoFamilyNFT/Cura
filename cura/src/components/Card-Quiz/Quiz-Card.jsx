export default function QuizCard({ emoji, par, desc}){
  return(
      <div className=" w-auto h-auto m-10 p-3 bg-white/30 rounded-2xl quiz ">
          <div className=" float-left w-30 -rotate-4 -ml-20 thumb ">
              <img src={emoji} alt="" className=" grayscale-100" />
          </div>
          <div className="quiz-description">
              <h3 className=" inline absolute  text-2xl rounded-xl bg-[#A1C877] text-[#F4F7E1] p-0.5 pl-3 pr-3 -mt-9 quiz-title ">{par}</h3>
              <p className=" p-7 text-[#23687D] pl-20 pr-20">{desc}</p>
              <button type="button" className=" w-40 h-7 bg-[#23687D] text-[#F4F7E1] rounded-2xl"> JOIN QUIZ </button>
          </div>
      </div>
  )
}