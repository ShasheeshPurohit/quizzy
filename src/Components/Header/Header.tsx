import { HeaderProps } from "./HeaderProps.types";
import "./Header.css"

export function Header({userScore=0}:HeaderProps){

    return(
        <header>
            <h1>Quizzy 💡</h1>
            <div className="user-score">
                <p>score: {userScore}</p>
            </div>
        </header>
    );
}