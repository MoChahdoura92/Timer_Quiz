import { useState } from "react";
import questions from "../questions.js";

export default function Quiz() {
  const [userAnswers, setAnswer] = useState([]);
  const activeQuestionIndex = userAnswers.length;

  function handleSelectAnswer(answer) {
    setAnswer((oldAnswer) => [...oldAnswer, answer]);
  }

  return (
    <div id="quiz">
      <div id="question">
        <h2> {questions[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {questions[activeQuestionIndex].answers.map((a, index) => (
            <li className="answer">
              <button key={a} onClick={() => handleSelectAnswer(a)}>
                {a}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
