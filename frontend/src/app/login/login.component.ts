import { Component, OnInit } from '@angular/core';
import { AuthService} from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService) { }

  loginData={};

  ngOnInit() {
  }

  login(){
    this.authService.loginUser(this.loginData);
  }

}