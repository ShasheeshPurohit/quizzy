import { useReducer, useState } from "react";
import { Header } from "../../Components/Header/Header";
// import { calculateScore } from "../../utils/score-keeper";
import { quizOne } from "../../data/getQuiz";
import { Question, Option } from "../../data/quizTypes";
import { useQuiz } from "../../Context/QuizContext";
import "./QuizPage.css"
import QuestionCard from "../../Components/Cards/QuestionCard/QuestionCard";
const buttonStyle = {display: "block", width:"100%", padding: "1rem", fontSize:"1.2rem"}


export default function QuizPage(){
   const {state, dispatch} = useQuiz();
   const quiz = state.quizData

   const {questionNo, score} = state
   function calculateScore(question: Question, selectedOption: Option) {
    selectedOption.isRight?dispatch({type:"right", payload:{points: question.points}}):dispatch({type:"wrong",payload:{points:question.negativePoints}})
  }

    return(
        <div className="quiz-page-layout">
            <Header userScore={score}/>
            {state.questionNo>quiz.questions.length?"":<p>Current Question: {questionNo}/{quiz.questions.length}</p>}
            {state.questionNo>quiz.questions.length?<p>You've completed the quiz!<br/><button onClick={()=>dispatch({type:"reset"})}>Reset!</button></p>:<QuestionCard question={quiz.questions[state.questionNo-1]} optionHandler={calculateScore}/>}
            
        </div>
    );
}