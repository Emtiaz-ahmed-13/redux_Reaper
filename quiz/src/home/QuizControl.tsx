import { Button } from "@/components/ui/button";
import {
  completeQuestion,
  nextQuestion,
  previousQuestion,
} from "@/redux/features/quiz/quizSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

const QuizControl = () => {
  const dispatch = useAppDispatch();
  const { currentQuestionIndex, question, userAnswer, quizComplete } =
    useAppSelector((state) => state.quiz);
  const isAnswerQuiz = userAnswer[currentQuestionIndex] !== null;
  const handleNextQuestion = () => {
    dispatch(nextQuestion());
  };
  const handlePreviousQuestion = () => {
    dispatch(previousQuestion());
  };
  const handleCompletedQuestion = () => {
    dispatch(completeQuestion());
  };
  const isCompleteQuiz =
    isAnswerQuiz || currentQuestionIndex !== question.length - 1;

  return (
    <div className="flex justify-between p-6">
      <Button
        disabled={currentQuestionIndex === 0 || quizComplete}
        onClick={handlePreviousQuestion}
      >
        {" "}
        Previous
      </Button>
      {currentQuestionIndex < question.length - 1 && (
        <Button disabled={!isAnswerQuiz} onClick={handleNextQuestion}>
          {" "}
          Next
        </Button>
      )}

      {currentQuestionIndex === question.length - 1 && !quizComplete && (
        <Button onClick={handleCompletedQuestion} disabled={!isCompleteQuiz}>
          {" "}
          Quiz Complete
        </Button>
      )}
    </div>
  );
};

export default QuizControl;
