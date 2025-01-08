import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";

import {
  nextQuestion,
  previousQuestion,
} from "@/redux/features/quiz/quizSlice";

export function Result() {
  const dispatch = useAppDispatch();
  const { currentQuestionIndex, question, userAnswer } = useAppSelector(
    (state) => state.quiz
  );
  const currentQuestion = question[currentQuestionIndex];
  const currentAnswer = userAnswer[currentQuestionIndex];
  const handleNextQuestion = () => {
    dispatch(nextQuestion());
  };
  const handlePreviousQuestion = () => {
    dispatch(previousQuestion());
  };
  const isAnswerQuiz = userAnswer[currentQuestionIndex] !== null;
  const correctAnswer = currentQuestion.correctAnswer === currentAnswer;
  return (
    <div className="flex justify-center">
      <Card className="w-[456px]">
        <CardHeader>
          <CardTitle>{currentQuestion.question}</CardTitle>
          <CardDescription>
            Question:{currentQuestionIndex + 1} of {question.length}{" "}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {currentQuestion.options.map((option, index) => (
            <Button
              //   onClick={() => handleQuestionAnswerChange(option)}
              key={index}
              size={"lg"}
              className={`w-full mt-5  ${
                currentQuestion.correctAnswer === option && "bg-green-500"
              }`}
              // className="w-full mt-5"
              variant={option === currentAnswer ? "default" : "outline"}
            >
              {option}
            </Button>
          ))}
          <div className="flex flex-col mt-5">
            <p>
              Ans:
              {correctAnswer ? (
                <span className="text-green-500 font-bold">Correct</span>
              ) : (
                <span className="text-red-500 font-bold">Wrong</span>
              )}
            </p>
            {!correctAnswer && (
              <p>
                Correct Ans:{" "}
                <span className="text-green-500 font-bold">
                  {currentQuestion.correctAnswer}
                </span>{" "}
              </p>
            )}
          </div>
        </CardContent>
        {/* <CardFooter className="w-full"> */}
        <div className="flex justify-between p-6">
          <Button
            disabled={currentQuestionIndex === 0}
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
        </div>
        {/* </CardFooter> */}
      </Card>
    </div>
  );
}
