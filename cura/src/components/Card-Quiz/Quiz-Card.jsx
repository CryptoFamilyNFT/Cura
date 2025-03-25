export default function QuizCard({ title, hand }) {
  return (
    <div className=" relative z-10 flex justify-between w-auto h-30 m-2 p-3 bg-white/30 rounded-2xl quiz">
      <img src={hand} alt="" />
      <h1 className=" pt-10  ">{title}</h1>
      <button type="button" className="flex justify-center w-50 h-fit bg-[#23687D] rounded-2xl ">JOIN QUIZ</button>
    </div>
  );
}
