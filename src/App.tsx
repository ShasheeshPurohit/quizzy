import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './Components/Header/Header';
import Home from './Pages/Home/Home';
import QuizPage from './Pages/QuizPage/QuizPage';
import { Routes, Route } from 'react-router-dom';
import QuizSelect from './Pages/QuizSelect/QuizSelect';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-md">
    <a className="navbar-brand" href="/ ">Quizzy💡</a>
  </div>
</nav>
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/quiz" element={<QuizPage/>}/>
          <Route path="/quizselect" element={<QuizSelect/>}/>
        </Routes>
      </header>
    </div>
  );
}

export default App;
