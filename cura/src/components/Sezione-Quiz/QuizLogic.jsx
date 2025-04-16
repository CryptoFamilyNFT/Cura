/* eslint-disable no-unused-vars */

import { ChatOpenAI } from "@langchain/openai";
import { useEffect, useState } from "react";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { StructuredOutputParser } from "@langchain/core/output_parsers";
import { z } from "zod";
import { fetchQuizData } from "../../action/QuizAction";

export const QuizLogic = () => {
    const [dataRes, setDataRes] = useState({ quizs: [] });

    useEffect(() => {
        (async () => {
            try {
                const result = await fetchQuizData(localStorage.getItem("Quiz"));
                setDataRes(result);
            } catch (error) {
                console.error("Error fetching quiz data:", error);
            }
        })();
    }, []);

    console.log(dataRes)

    return (
        <div style={{ padding: "20px", paddingTop: 100, fontFamily: "Arial, sans-serif", height: "100vh", overflowY: "auto" }}>
            {dataRes.quizs.length > 0 ? (
                dataRes.quizs.map((quiz, index) => (
                    <div
                        key={index}
                        style={{
                            marginBottom: "30px",
                            padding: "20px",
                            border: "2px solid #007BFF",
                            borderRadius: "10px",
                            backgroundColor: "#f9f9f9",
                        }}
                    >
                        <h2 style={{ color: "#007BFF" }}>{`Question ${index + 1}: ${quiz.question}`}</h2>
                        <ul style={{ listStyleType: "none", padding: 0 }}>
                            {quiz.answers.map((answer, idx) => (
                                <li
                                    key={idx}
                                    style={{
                                        margin: "10px 0",
                                        padding: "10px",
                                        border: "1px solid #ddd",
                                        borderRadius: "5px",
                                        cursor: "pointer",
                                        backgroundColor: "#fff",
                                        transition: "background-color 0.3s",
                                    }}
                                    onMouseEnter={(e) => (e.target.style.backgroundColor = "#f0f8ff")}
                                    onMouseLeave={(e) => (e.target.style.backgroundColor = "#fff")}
                                >
                                    {answer}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))
            ) : (
                <p style={{ textAlign: "center", color: "#555" }}>Loading...</p>
            )}
        </div>
    );
};
