import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { IQuestionSubmission, IQuestionWithName, IUser } from '../../../models';
import { throwError } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  questionList: IQuestionWithName[] = [];
  question: IQuestionWithName | null = null;
  constructor(private http: HttpClient, private auth: AuthService) {}
  private handleError(error: HttpErrorResponse) {
    return throwError(() => error.error);
  }
  getQuestions() {
    return this.http
      .get<IQuestionWithName[]>('http://localhost:4000/api/questions', {
        withCredentials: true,
      })
      .pipe(
        catchError(this.handleError),
        map((questions) => {
          this.questionList = questions;
          return questions;
        })
      );
  }

  getQuestionById(id: string) {
    return this.http
      .post<IQuestionWithName>(
        'http://localhost:4000/api/get-question',
        {
          question_id: id,
        },
        {
          withCredentials: true,
        }
      )
      .pipe(
        catchError(this.handleError),
        map((question) => {
          this.question = question;
          return question;
        })
      );
  }

  createQuestion(question: IQuestionSubmission) {
    return this.http
      .post<IUser>('http://localhost:4000/api/new/question', question, {
        withCredentials: true,
      })
      .pipe(
        catchError(this.handleError),
        map((user) => {
          this.auth.updateUser(user);
          return user;
        })
      );
  }

}
