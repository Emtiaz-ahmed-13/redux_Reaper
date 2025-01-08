import { useState } from "react";
import { Question } from "./home/Question";
import QuizSummery from "./home/QuizSummary";
import { Result } from "./home/Result";
import { useAppSelector } from "./redux/hooks";

export default function Home() {
  const { quizComplete, moreResultInfo } = useAppSelector(
    (state) => state.quiz
  );

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
      }`}
    >
      {/* Mode Toggle Button */}
      <div className="flex justify-end p-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`px-4 py-2 rounded-lg shadow-md ${
            darkMode
              ? "bg-gray-600 text-white hover:bg-gray-700"
              : "bg-gray-200 text-black hover:bg-gray-300"
          }`}
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      {/* Quiz App Title */}
      <h1 className="text-center text-5xl font-bold my-12">Quiz App</h1>

      {/* Conditional Rendering for Quiz Sections */}
      <div className="flex justify-center">
        {moreResultInfo ? (
          <Result />
        ) : quizComplete ? (
          <QuizSummery />
        ) : (
          <Question />
        )}
      </div>
    </div>
  );
}
