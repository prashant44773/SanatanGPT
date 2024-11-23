import { Component } from '@angular/core';
import { SharedModule } from '../../sharedModuels/shared.module';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isLogin = true; // Toggle between login and signup
  backgroundImageClass = 'background-image'; // Background image class

  // Function to toggle between login and signup forms
  toggleForm(isLogin?: boolean) {
    if (isLogin !== undefined) {
      this.isLogin = isLogin;
    } else {
      this.isLogin = !this.isLogin;
    }
  }
}
