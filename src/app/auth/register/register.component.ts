import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  showMsg = false;
  inSubmission = false;
  alertMsg = 'Registering you in..';
  alertColor = '';

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [
    Validators.required,
    Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/),
  ]);
  name = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(50),
  ]);

  registerGroup = new FormGroup({
    name: this.name,
    email: this.email,
    password: this.password,
  });
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {}

  async registerUser() {
    this.showMsg = true;
    this.inSubmission = true;
    this.alertMsg = 'Registering you in..';
    this.alertColor = 'blue';
    this.auth
      .registerUser({
        email: this.email.value as string,
        password: this.password.value as string,
        name: this.name.value as string,
      })
      .subscribe({
        next: (user) => {
          // --- HAD UPDATE USER ---
          this.alertColor = 'green';
          this.alertMsg = "You're registered successfully";
          this.inSubmission = true;
          setInterval(() => {
            this.router.navigate([""])
          }, 1000)
        
      },
      error: (e) => {
        this.alertColor = 'red';
        this.alertMsg = 'Error while registering..';
        this.inSubmission = false;
      }
      
    });
  }
}
