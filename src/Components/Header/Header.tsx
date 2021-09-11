import { HeaderProps } from "./HeaderProps.types";
import "./Header.css"
import { useQuiz } from "../../Context/QuizContext";

export function Header({userScore=0}:HeaderProps){
    const {state} = useQuiz();
    return(
        <header>
            <div className="user-score">
                <p>score: {userScore}</p>
            </div>
        </header>
    );
}