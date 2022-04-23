import { Component, OnInit } from '@angular/core';
import { IQuestionWithName } from 'src/models';
import { QuestionService } from '../services/question.service';
@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  questions: IQuestionWithName[] = []
  constructor(
    private questionService: QuestionService
  ) { }

  ngOnInit(): void {
    this.questionService
      .getQuestions()
      .subscribe((questions) => {
        this.questions = questions
      })
  }

}
