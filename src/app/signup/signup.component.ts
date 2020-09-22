import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../auth/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })
  public loginError:String;

  constructor(private apiService:ApiService,private router: Router) { }

  ngOnInit() {
  }

  onSubmit(){  
    if(this.signupForm.valid){
      this.apiService.signup(this.signupForm.value)
      .subscribe((data) => {
        if(data.status === 200 && !data.body.ErrorCode){
            this.router.navigate(['/dashboard']);
        }else{
          this.loginError = data.body.message;
        }        
      },
      error => this.loginError = error
      )
    }    
  }
}