import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { QuestionsModule } from './questions/questions.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [AppComponent, FooterComponent, NavbarComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, AuthModule, SharedModule, QuestionsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
