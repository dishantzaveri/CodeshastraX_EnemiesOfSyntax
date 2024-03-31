import { createContext, useEffect, useState } from "react";
import axios from "axios";

const interviewContext = createContext({
    interviewJob: "",
    setInterviewJob: () => {},
    interviewLevel: "",
    setInterviewLevel: () => {},
    questions: [],
    setQuestions: () => {},
    answers: [],
    setAnswers: () => {},
    scores: [],
    setScores: () => {},
    feedback: [],
    setFeedback: () => {},
});

const InterviewProvider = (props) => {
    const [interviewJob, setInterviewJob] = useState("");
    const [interviewLevel, setInterviewLevel] = useState("");
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState([]);
    const [scores, setScores] = useState([]);
    const [feedback, setFeedback] = useState([]);

    // const openAIKey = import.meta.env.VITE_APP_API_KEY;
        const client = axios.create({
            headers: {
                "Authorization": `Bearer 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`, 
                "Content-Type": "application/json",
            }
        });

    const fetchAnalysis = async (i) => {
        try {
            const url = "https://api.openai.com/v1/completions";
    
            const params = {
                prompt: `Given the question "${questions[i]}" and my answer "${answers[i]}", please provide a critical analysis and feedback on how I can improve it. I am preparing for interviews and welcome any constructive criticism, even if it might seem harsh. Please be honest and direct - if my answer is subpar, I need to know so that I can work on improvement. Evaluate my answer as either "good" or "bad".

                Please return your response in the following JSON format: 
                
                {
                  "grade": "<either 'good' or 'bad'>",
                  "yourFeedback": "<your detailed feedback here>"
                }`,
                model: "gpt-3.5-turbo-instruct",
                max_tokens: 1250,
                temperature: .5
            }
    
            const response = await client.post(url, params);
            const jsonResponse = JSON.parse(response.data.choices[0].text);
            setFeedback(prevState => [...prevState, jsonResponse]);
        } catch (error) {
            console.error('Error fetching analysis:', error);
            setFeedback(prevState => [...prevState, {'grade': 'bad', 'yourFeedback': 'There was an error analyzing this question'}])
        }
    }

    useEffect(() => {
        const fetch = async (i) => {
            fetchAnalysis(i);
        }
        if (answers.length > 0) {
            fetch(answers.length - 1);
        }
        
    }, [answers]);

    return(
        <interviewContext.Provider value={{ interviewJob, setInterviewJob, interviewLevel, setInterviewLevel, questions, setQuestions, answers, setAnswers, scores, setScores, feedback, setFeedback}}>{props.children}</interviewContext.Provider>
    )
}

export { interviewContext, InterviewProvider };