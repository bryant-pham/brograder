export const POSSIBLE_ANSWER_CHOICES: Array<string> = ['A', 'B', 'C', 'D', 'E'];

export class Question {
  questionNumber: string;
  numOfAnswers: number;
  answerChoices: Array<string> = [];
  correctAnswer: string;
  userAnswer: string;
  isCorrect: boolean = false;

  constructor(questionNumber: string,
              numOfAnswers: number,
              correctAnswer: string) {
    this.questionNumber = questionNumber;
    this.numOfAnswers = numOfAnswers;
    for (let i = 0; i < numOfAnswers; i++) {
      this.answerChoices.push(POSSIBLE_ANSWER_CHOICES[i]);
    }
    this.correctAnswer = correctAnswer;
  }

  answer(answer: string): void {
    this.userAnswer = answer;
    this.isCorrect = this.userAnswer === this.correctAnswer;
  }
}

export module Question {
  export class Builder {
    static createMultiple(...correctAnswers: Array<string>): Array<Question> {
      let questions: Array<Question> = [];
      for (let i = 0; i < correctAnswers.length; i++) {
        questions.push(new Question(String(i), 4, correctAnswers[i]));
      }
      return questions;
    }
  }
}
