import { useState } from "react";
import questions from "../questions.js";

export default function Quiz() {
  const [userAnswers, set] = useState([]);
  const activeQuestionIndex = userAnswers.length;
  return <h2> {questions[activeQuestionIndex].text}</h2>;
}
