import { Injectable } from '@angular/core';
import { IUser } from 'src/models';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userId = "";
  user: IUser | null = null;

  constructor() { }
  

}
