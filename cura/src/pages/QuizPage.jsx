import { useEffect, useState } from 'react';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import { fetchQuizData } from '../action/QuizAction';
import { Link } from 'react-router-dom';

const QuizPage = () => {
    const [answers, setAnswers] = useState([]);
    const [dataRes, setDataRes] = useState({ quizs: [] });
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [showFeedback, setShowFeedback] = useState(false);
    const [feedbackContent, setFeedbackContent] = useState(null);
    const currentQuiz = dataRes.quizs[currentQuestionIndex];

    useEffect(() => {
        (async () => {
            try {
                const result = await fetchQuizData(localStorage.getItem("Quiz"), true);
                setDataRes(result);
            } catch (error) {
                console.error("Error fetching quiz data:", error);
            }
        })();
    }, []);




    const handleOptionChange = (quizId, answer) => {
        setAnswers((prev) => {
            const updatedAnswers = [...prev];
            const existingAnswerIndex = updatedAnswers.findIndex((item) => item.questionIndex === quizId);
            if (existingAnswerIndex !== -1) {
                updatedAnswers[existingAnswerIndex] = { questionIndex: quizId, question: currentQuiz.question, answer };
            } else {
                updatedAnswers.push({ questionIndex: quizId, question: currentQuiz.question, answer });
            }
            return updatedAnswers;
        });
    };

    const getLabelClasses = (quizId, answer) => {
        const base = "block text-[#F4F7E1] border border-green-100 py-2 px-4 rounded-lg cursor-pointer shadow-md";
        const selected = "bg-gradient-to-t from-[#23687D] to-purple-700 text-purple-200";
        const hover = "hover:bg-purple-200/30 hover:text-purple-200";
        const unselected = "bg-green-100/15";
        const selectedAnswer = answers.find((item) => item.questionIndex === quizId)?.answer;
        return `${base} ${selectedAnswer === answer ? selected : unselected} ${hover}`;
    };

    const analyzeAnswers = () => {
        const score = answers.reduce((acc, item) => {
            const val = item.answer.toLowerCase();
            if (val.includes("mai") || val.includes("no")) return acc + 0;
            if (val.includes("a volte")) return acc + 1;
            if (val.includes("spesso")) return acc + 2;
            if (val.includes("sempre") || val.includes("sì")) return acc + 3;
            return acc + 1;
        }, 0);

        const max = answers.length * 3;
        if (score < max * 0.3) {
            return {
                title: "Squilibrio emotivo!",
                message: "Potresti considerare tecniche di gestione delle emozioni come mindfulness, journaling o il supporto di una persona di fiducia."
            };
        } else if (score < max * 0.7) {
            return {
                title: "Equilibrio parziale",
                message: "Hai una certa consapevolezza emotiva, ma ci sono aspetti su cui potresti lavorare per migliorare il tuo benessere."
            };
        } else {
            return {
                title: "Ottimo equilibrio!",
                message: "Mostri un buon livello di consapevolezza e gestione emotiva. Continua così!"
            };
        }
    };

    const handleNext = () => {
        if (currentQuestionIndex < dataRes.quizs.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            handleSubmit();
        }
    };

    const handleSubmit = () => {
        const feedback = analyzeAnswers();
        setFeedbackContent(feedback);
        setShowFeedback(true);
    };
    console.log(answers);
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-t from-[#23687D] to-[#A1C877]">
            <div className="bg-green-100/15 p-6 rounded-xl shadow-md max-w-3xl w-full">
                <ProgressBar current={currentQuestionIndex + 1} total={dataRes.quizs.length} />
                <p className="text-center text-purple-800 mt-2 text-sm">
                    Domanda {currentQuestionIndex + 1} di {dataRes.quizs.length}
                </p>
                {currentQuiz ? (
                    <div key={currentQuiz.id}>
                        <p className="text-3xl text-[#23687D] text-center my-4">{currentQuiz.question}</p>
                        <div className="space-y-4 py-4">
                            {currentQuiz.answers.map((answer, idx) => (
                                <label key={idx} className={getLabelClasses(currentQuiz.id, answer)}>
                                    <input
                                        type="radio"
                                        name={`answer-${currentQuiz.id}`}
                                        value={answer}
                                        onChange={() => handleOptionChange(currentQuiz.id, answer)}
                                        className="mr-2 accent-purple-500"
                                        checked={answers.find((item) => item.questionIndex === currentQuiz.id)?.answer === answer}
                                    />
                                    {answer}
                                </label>
                            ))}
                        </div>
                        <div className="flex justify-center mt-4">
                            <button
                                onClick={handleNext}
                                disabled={!answers.find((item) => item.questionIndex === currentQuiz.id)?.answer}
                                className="bg-[#23687D]/80 text-[#F4F7E1] px-4 py-2 rounded-lg shadow-md hover:bg-[#23687D] disabled:opacity-90"
                            >
                                {currentQuestionIndex < dataRes.quizs.length - 1 ? 'Avanti' : 'Invio'}
                            </button>
                        </div>
                    </div>
                ) : (
                    <p className="text-center text-gray-500">Caricamento...</p>
                )}
            </div>

            {/* MODAL FEEDBACK */}
            {showFeedback && feedbackContent && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-gradient-to-t from-[#23687D] to-[#A1C877] backdrop-blur-lg p-8 rounded-2xl shadow-xl max-w-md w-full text-center transition-all duration-300 hover:scale-105">
                        <h2 className="text-3xl text-[#23687D] font-semibold">{feedbackContent.title}</h2>
                        <div className="flex justify-center my-6">
                            <div className="bg-green-100/20 p-4 rounded-2xl shadow-lg">
                                <img
                                    src="../../public/mascotte_2.PNG"
                                    alt="Feedback"
                                    className="w-40 h-40 animate-pulse object-contain"
                                />
                            </div>
                        </div>
                        <p className="text-[#A1C877] text-lg leading-relaxed">
                            {feedbackContent.message}
                        </p>
                        <div className="flex justify-center mt-6">
                            <Link
                                to="/"
                                className="bg-[#23687D]/10 text-[#F4F7E1] border border-[#A1C877] px-5 py-2.5 rounded-lg shadow-md hover:bg-[#23687D] transition duration-300 transform hover:scale-105"
                            >
                                Home
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default QuizPage;
