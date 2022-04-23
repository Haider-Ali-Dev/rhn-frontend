import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { QuestionsRoutingModule } from './questions-routing.module';
import { QuestionCardComponent } from './question-card/question-card.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { QuestionComponent } from './question/question.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    QuestionCardComponent,
    QuestionListComponent,
    QuestionComponent
  ],
  imports: [
    CommonModule,
    QuestionsRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  exports: [
    QuestionCardComponent,
    QuestionListComponent
  ]
})
export class QuestionsModule { }
