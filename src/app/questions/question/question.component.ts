import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IQuestionWithName } from 'src/models';
import { QuestionService } from '../services/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent implements OnInit {
  question?: IQuestionWithName;
  constructor(
    private route: ActivatedRoute,
    private questionService: QuestionService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.questionService
        .getQuestionById(param['id'])
        .subscribe((question) => {
          this.question = question;
        });
    });
  }
}
