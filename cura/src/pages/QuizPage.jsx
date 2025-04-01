import { useEffect, useState } from 'react';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import { fetchQuizData } from '../action/QuizAction';

const QuizPage = () => {
    const [selected, setSelected] = useState('');
    const currentQuestion = 1;
    const [dataRes, setDataRes] = useState({ quizs: [] });
    
        useEffect(() => {
            (async () => {
                try {
                    const result = await fetchQuizData("AUTOCONSAPEVOLEZZA");
                    console.log("Array result from fetch quiz data", result);
                    setDataRes(result);
                } catch (error) {
                    console.error("Error fetching quiz data:", error);
                }
            })();
        }, []);

    const handleOptionChange = (event) => {
        setSelected(event.target.value);
    };

    // Funzione per determinare le classi dinamiche del pulsante
    const getLabelClasses = (value) => {
        const baseClasses = "block text-[#F4F7E1] border border-green-100 py-2 px-4 rounded-lg cursor-pointer shadow-md";
        const selectedClasses = "bg-gradient-to-t from-[#23687D] to-purple-700 text-purple-200";
        const hoverClasses = "hover:bg-purple-200/30 hover:text-purple-200";
        const defaultClasses = "bg-green-100/15";

        return `${baseClasses} ${selected === value ? selectedClasses : defaultClasses} ${hoverClasses}`;
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-t from-[#23687D] to-[#A1C877]">
            <div className="bg-green-100/15 p-6 rounded-xl shadow-md">
                <ProgressBar current={currentQuestion} total={dataRes.quizs.length} />
                {dataRes.quizs.length > 0 ? (
                    dataRes.quizs.map((quiz) => (
                        <div key={quiz.id}>
                            <p className="text-3xl text-[#23687D] text-center my-4">Ti senti generalmente felice e soddisfatto/a della tua vita?</p>
                            <div className="space-y-4 px-70 py-4">
                                {quiz.answers.map((answer, idx) => (
                                    <label key={idx} className={getLabelClasses(idx)}>
                                        <input
                                            type="radio"
                                            name="answer"
                                            value={answer}
                                            checked={selected === answer}
                                            onChange={handleOptionChange}
                                            className="mr-2 accent-purple-500"
                                        />
                                        {answer}
                                    </label>
                                ))}
                            </div>
                            <div className="flex justify-center mt-4">
                                <button className="bg-[#23687D]/80 text-[#F4F7E1] px-4 py-2 rounded-lg shadow-md hover:bg-[#23687D] cursor-pointer">
                                    Invio
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500">Loading...</p>
                )}
            </div>
        </div>
    );
};

export default QuizPage;