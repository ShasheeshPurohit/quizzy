import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../../Context/QuizContext";

export default function QuizEndCard(){
    const{state, dispatch} = useQuiz();
    const {score} = state

    const navigate = useNavigate();
    return(
        <div>
            <p className="quiz-reset">
                {score>0 && score<=5 && "Seems like you need to study!"}
                {score>6 && score<=15 && "You can do better!"}
                {score>15 && score<=25 && "Damn! you're good!"}
                <br/><button className="quiz-reset-btn" onClick={()=>dispatch({type:"reset"})}>Play Again</button>
                <br/><button className="quiz-reset-btn" onClick={()=>navigate("/quizSelect")}>Try a different quiz</button>
                </p>

        </div>
    );
}