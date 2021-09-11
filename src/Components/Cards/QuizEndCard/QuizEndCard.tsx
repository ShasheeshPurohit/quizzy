import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../../Context/QuizContext";
import "./QuizEndCard.css"

export default function QuizEndCard(){
    const{state, dispatch} = useQuiz();
    const {score} = state

    const navigate = useNavigate();
    return(
        <div>
            <p className="quiz-reset">
                {score>0 && score<=5 && <p className="quiz-result-text">"Seems like you need to study!"</p>}
                {score>6 && score<=15 && <p className="quiz-result-text">"You can do better!"</p>}
                {score>15 && score<=25 && <p className="quiz-result-text">"Damn! you're good!"</p>}
                <br/><button className="quiz-end-btn reset" onClick={()=>dispatch({type:"reset"})}>Play Again</button>
                <br/><button className="quiz-end-btn new-quiz" onClick={()=>navigate("/quizSelect")}>Try a different quiz</button>
                </p>

        </div>
    );
}