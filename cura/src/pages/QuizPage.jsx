import { useState } from 'react';
import ProgressBar from '../components/ProgressBar/ProgressBar';

const QuizPage = () => {
    const [selected, setSelected] = useState('');
    const currentQuestion = 1;
    const totalQuestions = 10;

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
                <ProgressBar current={currentQuestion} total={totalQuestions} />
                <h2 className="text-purple-800 text-sm ">Domanda {currentQuestion} di {totalQuestions}</h2>
                <p className="text-3xl text-[#23687D] text-center my-4">Ti senti generalmente felice e soddisfatto/a della tua vita?</p>
                <div className="space-y-4 px-70 py-4">
                    {["Mai", "A volte", "Spesso", "Sempre"].map((option) => (
                        <label key={option} className={getLabelClasses(option)}>
                            <input
                                type="radio"
                                name="answer"
                                value={option}
                                checked={selected === option}
                                onChange={handleOptionChange}
                                className="mr-2 accent-purple-500"
                            />
                            {option}
                        </label>
                    ))}
                </div>
                <div className="flex justify-center mt-4">
                    <button className="bg-[#23687D]/80 text-[#F4F7E1] px-4 py-2 rounded-lg shadow-md hover:bg-[#23687D] cursor-pointer">
                        Invio
                    </button>
                </div>
            </div>
        </div>
    );
};

export default QuizPage;