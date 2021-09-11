import { useReducer, useState } from "react";
import { Header } from "../../Components/Header/Header";
// import { calculateScore } from "../../utils/score-keeper";
import { quizOne } from "../../data/getQuiz";
import { Question, Option } from "../../data/quizTypes";
import { useQuiz } from "../../Context/QuizContext";
import "./QuizPage.css"
import QuestionCard from "../../Components/Cards/QuestionCard/QuestionCard";
import QuizEndCard from "../../Components/Cards/QuizEndCard/QuizEndCard";
const buttonStyle = {display: "block", width:"100%", padding: "1rem", fontSize:"1.2rem"}


export default function QuizPage(){
   const {state, dispatch} = useQuiz();
   const quiz = state.quizData
   const {questions} = quiz
   const {questionNo, score} = state
   function calculateScore(question: Question, selectedOption: Option) {
    selectedOption.isRight?dispatch({type:"right", payload:{points: question.points}}):dispatch({type:"wrong",payload:{points:question.negativePoints}})
  }

    return(
        <div className="quiz-page-layout">
            <Header userScore={score}/>
            {questionNo>questions.length?"":<p>Current Question: {questionNo}/{questions.length}</p>}
            {state.questionNo>questions.length?<QuizEndCard/>:<QuestionCard question={quiz.questions[state.questionNo-1]} optionHandler={calculateScore}/>}
            
        </div>
    );
}