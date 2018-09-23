import { Component } from '@angular/core';
import { User } from './shared/user/user.model';
import { UserService } from './shared/user/user.service';

@Component({
  selector: "gr-login",
  providers: [UserService],
  templateUrl: "login/login.component.html",
  styleUrls: ['login/login.component.css']
})

export class AppComponent {
  public user: User;
  public isLoggingIn: boolean = true;

  constructor(private userService: UserService) {
    this.user = new User();
    //this.user.email = "test_email@example.com";
    //this.user.password = "test_password";
  }

  public submit(): void {
    if (this.isLoggingIn) {
      this.login();
    } else {
      this.signUp();
    }
  }

  public login(): void {
    console.log('User was attempt to login in.');
  }

  public signUp(): void {
    this.userService.register(this.user)
      .subscribe(
        () => {
          alert("Your account was successfully created!");
          this.toggleDisplay();
        },
        () => {
          alert("Unfortunately we were unable to create your account!");
        }
      );
  }

  public toggleDisplay(): void {
    this.isLoggingIn = !this.isLoggingIn;
  }
}