import { Component } from '@angular/core';
import { User } from './shared/user/user.model';

@Component({
  selector: "gr-login",
  templateUrl: "login/login.component.html",
  styleUrls: ['login/login.component.css']
})

export class AppComponent {
  public user: User;
  public isLoggingIn: boolean = true;

  constructor() {
    this.user = new User();
  }

  public submit(): void {
    alert('Your\'re using: ' + this.user.email);
  }

  public toggleDisplay(): void {
    this.isLoggingIn = !this.isLoggingIn;
  }
}