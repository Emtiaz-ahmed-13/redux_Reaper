import { quizData } from "@/data/quizData";
import { createSlice } from "@reduxjs/toolkit";

interface IQuiz {
    question: typeof quizData;
    currentQuestionIndex: number;
    userAnswer: (string | null)[];
    quizComplete: boolean;
    moreResultInfo: boolean;
}

const initialState: IQuiz = {
    question: quizData,
    currentQuestionIndex: 0,
    userAnswer: Array(quizData.length).fill(null),
    quizComplete: false,
    moreResultInfo: false
};
export const quizSlice = createSlice({
    name: "quiz",
    initialState,
    reducers: {
        setAnswer: (state, action) => {
            const { questionIndex, answer } = action.payload;
            state.userAnswer[questionIndex] = answer;
        },
        nextQuestion: (state) => {
            if (state.currentQuestionIndex < state.question.length - 1)
                state.currentQuestionIndex += 1;
        },
        previousQuestion: (state) => {
            if (state.currentQuestionIndex > 0) state.currentQuestionIndex -= 1;
        },
        completeQuestion: (state) => {
            state.quizComplete = true;
        },
        quizResultCheck: (state) => {
            state.moreResultInfo = true;
            state.currentQuestionIndex = 0;
        },
    },
});
export const { setAnswer, nextQuestion, previousQuestion, completeQuestion, quizResultCheck } = quizSlice.actions;

export default quizSlice.reducer;