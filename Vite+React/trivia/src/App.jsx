import './App.css'
import { useState, useEffect } from "react";

export default function App() {

    const fetchLink = "http://192.168.0.111:3000/trivia/";

    let currentQuestionIndex = -1;

    const [ currentQuestionCard, setCurrentQuestionCard ] = useState(null); //full question object
    const [ currentTriviaQuestion, setCurrentTriviaQuestion ] = useState(null); //formatted trivia question
    const [ questionCardArray, setQuestionCardArray ] = useState([]) //array of all question objects
    const [ selectedAnswer, setSelectedAnswer ] = useState("");
    const [ submissionResponse, setSubmissionResponse ] = useState("");

    const scramble = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    const rand = () => {
        return Math.floor((Math.random()*100)) % questionCardArray.length;
    }

    function newQuestion() {
        if (questionCardArray.length > 0) {
            const newQuestionIndex = rand();
            if (newQuestionIndex !== currentQuestionIndex) {
                currentQuestionIndex = newQuestionIndex;
                setCurrentQuestionCard(questionCardArray[currentQuestionIndex]);
                displayQuestion();
            } else {
                newQuestion();
            }
        }
    }

    function generateAnswerChoice(answer) {
        return (
            <div className={"form-selection"}>
                <input type={'radio'} id={'answer'} name={'answer'} value={'answer'}
                       onChange={() => setSelectedAnswer(answer)}/>
                <label htmlFor={'answer'}>{answer}</label>
            </div>
        )
    }

    function displayQuestion() {
        const currentAnswerSelection = currentQuestionCard.answers;
        setCurrentTriviaQuestion(
            <div className={"form-container"}>
                <fieldset>
                    <legend>{currentQuestionCard.question}</legend>

                    {currentAnswerSelection.map((answer, index) => generateAnswerChoice(answer))}

                </fieldset>
            </div>
        )
    }

    const checkAnswer = () => {
        if (selectedAnswer === currentQuestionCard.correctAnswer) {
            setSubmissionResponse(currentQuestionCard.correctMessage);
        } else {
            setSubmissionResponse(currentQuestionCard.incorrectMessage);
        }
    }

    useEffect(() => {
        fetch(fetchLink)
            .then(res => {
                return res;
            }).then(data => {
                return data.json();
            }).then(json => {
                setQuestionCardArray(json);
            }).catch(err => {
                console.log("Error fetching trivia file: ", err);
            });

        return newQuestion();
    }, [5]);

    return (
        <div className={'trivia-game-container'}>
            <div className={'banner'}>
                <h1>Trivia</h1>
            </div>
            <div className={'question-card'}>
                {currentTriviaQuestion}
                <div className={"button-container"}>
                    <button className={'button'}
                            onClick={() => checkAnswer()}>Submit
                    </button>
                    <button className={'button'}
                            onClick={() => newQuestion()}>Next
                    </button>
                </div>
                <div className={"submission-response"}>
                    {submissionResponse}
                </div>
            </div>
        </div>
    )
}