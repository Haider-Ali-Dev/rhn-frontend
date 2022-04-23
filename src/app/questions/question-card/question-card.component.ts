import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core'
import { QuestionService } from '../services/question.service';
import { IQuestionWithName } from '../../../models'
@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.css']
})
export class QuestionCardComponent implements OnInit {
  @Input() question?: IQuestionWithName;
  constructor(private questionService: QuestionService) {
  }

  truncate(string: string | undefined, length: number, delimiter: string) {
    
    delimiter = delimiter || "&hellip;";
    return (string as string).length > length ? (string as string).substring(0, length) + delimiter : string;
 };

 createUrl(): string {
   return `/question/${this.question?.id}`
 }

  ngOnInit() {}

}