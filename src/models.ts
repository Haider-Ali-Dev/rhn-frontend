interface IError {
  error: string;
}
interface IUser {
  name: string;
  email: string;
  joined: string;
  id: string;
  questions: Array<IQuestion>;
  answers: Array<IAnswer>;
}

interface IQuestion {
  question: string;
  answer: Array<IAnswer>;
  asked_on: string;
  by: string;
  id: string;
}

interface IAnswer {
  answer: string;
  for_question: string;
  by: string;
  id: string;
  answered_on: string;
}

interface ISignInUser {
  email: string;
  password: string;
}

interface IRegisterUser {
  email: string;
  password: string;
  name: string;
}

interface IAnswerWithName {
  answer: string;
  for_question: string;
  by: string;
  id: string;
  answered_on: string;
  name: string;
}

interface IQuestionWithName {
  question: string;
  answer: Array<IAnswerWithName>;
  asked_on: string;
  by: string;
  id: string;
  name: string;
  title: string
}

interface IQuestionSubmission {
  question: string;
  by: string;
}

export type {
  IQuestionSubmission,
  IUser,
  IQuestion,
  IAnswer,
  ISignInUser,
  IRegisterUser,
  IAnswerWithName,
  IQuestionWithName,
  IError,
};
