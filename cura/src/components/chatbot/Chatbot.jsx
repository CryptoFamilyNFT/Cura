import React, { useState } from "react";
import mascotte from '../../../public/Images/mascotte_2.PNG';
import { ChatCurina } from "../../action/QuizChat";

const Chatbot = () => {
    const [messages, setMessages] = useState([
        { sender: "bot", text: "Hi there 👋\nHow can I help you today?" },
    ]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSendMessage = async () => {
        if (input.trim() === "") return;

        const newUserMessage = { sender: "user", text: input };
        const updatedMessages = [...messages, newUserMessage];

        // Aggiungi subito il messaggio utente
        setMessages(updatedMessages);
        setInput("");
        setLoading(true);

        try {
            // Chiama il bot con i messaggi
            const response = await ChatCurina(
                updatedMessages.map((m) => ({
                    sender: m.sender === "bot" ? "assistant" : m.sender,
                    text: m.text,
                })),
                true,
                "videogiochi"
            );

            // Estratto semplice del testo della risposta (dipende da LangChain, potresti dover fare un controllo su `response.content`)
            const botText = response?.content || "Sorry, I had trouble replying.";

            setMessages((prev) => [
                ...prev,
                { sender: "bot", text: botText },
            ]);
        } catch (error) {
            console.error("ChatCurina error:", error);
            setMessages((prev) => [
                ...prev,
                { sender: "bot", text: "Oops, something went wrong. 😕" },
            ]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="h-screen bg-gradient-to-t from-[#23687D] to-[#A1C877] flex flex-col items-center justify-center p-6">
            <div className="h-full w-full flex justify-center items-center">
                <div className="relative w-[90%] h-[95%] mt-[2%] md:w-3/4 lg:w-1/2 border flex flex-col rounded-t-xl" style={{ width: "-webkit-fill-available" }}>
                    <header className="w-full bg-primary-500 flex justify-between px-2 py-1 rounded-t-lg items-center">
                        <h2 className="text-sm font-semibold text-white flex items-center">
                            🟢 Curina
                        </h2>
                        <span className="text-white aspect-square w-8 cursor-pointer p-1">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path
                                    fill="#ffffff"
                                    d="M5.293 5.293a1 1 0 0 1 1.414 0L12 10.586l5.293-5.293a1 1 0 1 1 1.414 1.414L13.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414L12 13.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L10.586 12L5.293 6.707a1 1 0 0 1 0-1.414"
                                />
                            </svg>
                        </span>
                    </header>

                    <div className="flex w-full flex-col gap-4 p-2 select-none overflow-y-auto">
                        {messages.map((message, index) => (
                            <div
                                key={index}
                                className={`flex items-end ${message.sender === "user" ? "flex-row-reverse" : ""
                                    }`}
                            >
                                {
                                    message.sender !== "user" ? (
                                        <img src={mascotte} alt="Mascotte" className="w-8 h-8 mr-2" />
                                    ) : (
                                        <div className="rounded bg-primary-500 w-8 aspect-square p-1.5">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 256 256"
                                            >
                                                <path
                                                    fill="#ffffff"
                                                    d="M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8M72 96a56 56 0 1 1 56 56a56.06 56.06 0 0 1-56-56"
                                                />
                                            </svg>
                                        </div>
                                    )
                                }

                                <p className="mx-2 p-2 rounded bg-gray-200 leading-4 text-sm whitespace-pre-line">
                                    {message.text}
                                </p>
                            </div>
                        ))}

                        {loading && (
                            <div className="flex items-center gap-2">
                                <img src={mascotte} alt="Mascotte typing..." className="w-8 h-8" />
                                <p className="text-sm text-gray-500 italic">Typing...</p>
                            </div>
                        )}
                    </div>

                    <div className="flex items-center my-2 mx-1 w-full absolute bottom-0">
                        <textarea
                            id="chat"
                            rows={1}
                            className="block mx-2 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Your message..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        ></textarea>
                        <button
                            type="submit"
                            className="flex mx-2 justify-center items-center aspect-square h-9 bg-primary-500 p-1 text-white rounded-full cursor-pointer hover:bg-primary-700"
                            onClick={handleSendMessage}
                            disabled={loading}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M4.4 19.425q-.5.2-.95-.088T3 18.5V14l8-2l-8-2V5.5q0-.55.45-.837t.95-.088l15.4 6.5q.625.275.625.925t-.625.925z"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chatbot;
