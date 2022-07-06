import { Injectable } from '@angular/core';
import { IError, IRegisterUser, ISignInUser, IUser } from 'src/models';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { ThisReceiver } from '@angular/compiler';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: IUser | null = null;
  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse) {
    return throwError(() => error.error);
  }

  updateUser(user: IUser) {
    this.user = user;
  }
  async authenicate() {
    if (!this.user?.id) {
      this.http
        .get<IUser>('http://localhost:4000/api/auth', {
          withCredentials: true,
        })
        .subscribe((user) => {
          this.user = user;
        });
    } else return;
  }
  signInUser(user: ISignInUser) {
    return this.http
      .post<IUser>('http://localhost:4000/api/signin', user, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .pipe(
        catchError(this.handleError),
        map((user) => {
          this.user = user;
          return user;
        })
      );
  }

  registerUser(user: IRegisterUser) {
    return this.http
      .post<IUser>('http://localhost:4000/api/new/user', user, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      })
      .pipe<IUser, IUser>(
        catchError(this.handleError),
        map((user) => {
          this.user = user;
          return user;
        })
      );
  }
}
