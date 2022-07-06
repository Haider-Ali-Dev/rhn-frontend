import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  showMsg = false;
  inSubmission = false;
  alertMsg = 'Signing you in..';
  alertColor = '';

  password = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
  ]);

  email = new FormControl('', [Validators.email, Validators.required]);

  loginGroup = new FormGroup({
    password: this.password,
    email: this.email,
  });

  constructor(private auth: AuthService, private router: Router) {}
  ngOnInit(): void {
    this.auth.authenicate()
  }

  loginUser() {
    this.showMsg = true;
    this.alertMsg = 'Logging you in..';
    this.alertColor = 'blue';
    this.inSubmission = true;

    this.auth
      .signInUser({
        email: this.email.value as string,
        password: this.password.value as string,
      })
      .subscribe({
        next: () => {
          this.alertMsg = "You're logged in successfully.";
          this.alertColor = 'green';
          let interval = setInterval(() => {
            this.router.navigate([""])
            clearInterval(interval)
          }, 1000)
        },
        error: () => {
          this.inSubmission = false;
          this.alertColor = 'red';
          this.alertMsg =
            'Error while logging you in. Check your password and email.';
        },
      })
  }
}
