/* eslint-disable no-unused-vars */

import { ChatOpenAI } from "@langchain/openai";
import { useEffect, useState } from "react";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { StructuredOutputParser } from "@langchain/core/output_parsers";
import { z } from "zod";

async function callZodOutputParser() {
    const outputParser = StructuredOutputParser.fromZodSchema(
        z.object({
            quizs: z.array(
                z.object({
                    question: z.string().describe("Domanda del quiz"),
                    answers: z.array(z.string()).length(4).describe("Risposte del quiz"),
                }).describe("Quiz singolo che deve essere composto da una domanda e 4 risposte")
            ).describe("Struttura quizs di 10 quiz"),
        })
    );

    return outputParser;
}

export function rmQuizFromStorage(topic) {
    if (topic === undefined) {
        console.error("Topic ci deve essere")
    }
    localStorage.removeItem(topic);
}

export const fetchQuizData = async (topic = undefined, saveInStorage = false) => {

    if (localStorage.getItem(topic) !== null && saveInStorage === false) {
        return localStorage.getItem(topic);
    }


    const llm = new ChatOpenAI({
        model: "gpt-4o-mini",
        temperature: 0.7,
        apiKey:"",
    });

    const parser = await callZodOutputParser();

    const prompt = ChatPromptTemplate.fromTemplate(`
        Create a quiz based on the topic: {topic}.
        Format the quiz as: {json_istruction}.
        The quiz should contain 10 questions, each with 4 possible answers.
        You must always return valid JSON fenced by a markdown code block. Do not return any additional text.
    `);


    const chain = prompt.pipe(llm).pipe(parser);

    const result = await chain.invoke({
        topic: topic !== undefined ? topic : "videogiochi",
        json_istruction: parser.getFormatInstructions(),
    });

    if (saveInStorage === true) {
        localStorage.setItem(topic, JSON.stringify(result))
    }

    return result;
};
