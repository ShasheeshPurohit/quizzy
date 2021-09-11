import { Option, Question, Quiz } from "../../../data/quizTypes";
import "./QuestionCard.css"

const buttonStyle = {display: "block", width:"100%", padding: "1rem", fontSize:"1.2rem"}

type QuestionCardProps = {
    question: Question,
    optionHandler:(question: Question, selectedOption: Option) => void,
}

export default function QuestionCard({question, optionHandler}:QuestionCardProps){
    return(
        <div className="question-card">
                <p className="question-text">{question.question}</p>
                <ul className="answer-options">
                    {question.options.map((option)=>{
                       return <li className="answer-option"><button onClick={()=>optionHandler(question, option)} style={buttonStyle}>{option.text}</button></li>
                    })}
                </ul>
            </div>
    );
}