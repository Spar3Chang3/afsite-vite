import './App.css'
import {useState, useEffect, useCallback} from "react";

export default function App() {

    const fetchLink = "http://192.168.0.245:3000/trivia/";

    let currentQuestionIndex = -1;

    const [ currentQuestion, setCurrentQuestion ] = useState(null);
    const [ selectedQuestionCard, setSelectedQuestionCard ] = useState({});
    const [ currentAnswers, setCurrentAnswers ] = useState([]); //just the array of answers
    const [ questions, setQuestions ] = useState([]); //all questions pulled from json
    const [ selectedAnswer, setSelectedAnswer ] = useState(""); //selected answer, duh
    const [ answerResponse, setAnswerResponse ] = useState("") //message from submission

    const scramble = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    const rand = () => {
        return (Math.random()*100) % questions.length;
    }


    const getQuestion = useCallback(() => {
        const newQuestionIndex = rand();
        if (newQuestionIndex !== currentQuestionIndex) {
            currentQuestionIndex = newQuestionIndex;
            setSelectedQuestionCard(questions[currentQuestionIndex]);
            setCurrentAnswers(scramble(questions[currentQuestionIndex].answers));
            setSelectedAnswer("");
            setAnswerResponse("");
        } else {
            getQuestion()
        }
        return (
            <div className={"form-container"}>
                <fieldset>
                    <legend>{selectedQuestionCard.question}</legend>

                    <div>
                        <input type={'radio'} id={currentAnswers[0]} name={'answer'} value={currentAnswers[0]}
                               onChange={() => setSelectedAnswer[currentAnswers[0]]}/>
                        <label htmlFor={currentAnswers[0]}>{currentAnswers[0]}</label>
                    </div>

                    <div>
                        <input type={'radio'} id={currentAnswers[1]} name={'answer'} value={currentAnswers[1]}
                               onChange={() => setSelectedAnswer[currentAnswers[1]]}/>
                        <label htmlFor={currentAnswers[1]}>{currentAnswers[1]}</label>
                    </div>

                    <div>
                        <input type={'radio'} id={currentAnswers[2]} name={'answer'} value={currentAnswers[2]}
                               onChange={() => setSelectedAnswer[currentAnswers[2]]}/>
                        <label htmlFor={currentAnswers[2]}>{currentAnswers[2]}</label>
                    </div>

                    <div>
                        <input type={'radio'} id={currentAnswers[3]} name={'answer'} value={currentAnswers[3]}
                               onChange={() => setSelectedAnswer[currentAnswers[3]]}/>
                        <label htmlFor={currentAnswers[3]}>{currentAnswers[3]}</label>
                    </div>

                </fieldset>
            </div>
        )
    })

    const checkAnswer = () => {
        (selectedQuestionCard.correctAnswer === selectedAnswer) ? setAnswerResponse(selectedQuestionCard.correctMessage) : setAnswerResponse(selectedQuestionCard.incorrectMessage);
    }

    useEffect(() => {
        fetch(fetchLink)
            .then(res => {
                return res;
            }).then(data => {
            return data.json();
        }).then(json => {
            setQuestions(json);
            setCurrentQuestion(getQuestion());
        }).catch(err => {
            console.log("Error fetching trivia file: ", err);
        });
    }, [getQuestion])

    return (
        <div className={'trivia-game-container'}>
            <div className={'banner'}>
                <h1>Trivia</h1>
            </div>
            <div className={'question-card'}>
                {currentQuestion}
                <div className={"button-container"}>
                    <button className={'button'}
                            onClick={() => checkAnswer()}>Submit
                    </button>
                    <button className={'button'}
                            onClick={() => getQuestion()}>Next
                    </button>
                </div>
                <div className={"answer-response"}>
                    {answerResponse}
                </div>
            </div>
        </div>
    )
}