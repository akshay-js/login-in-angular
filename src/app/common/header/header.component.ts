import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from "../../auth/api.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn : Observable<boolean>;
  

  constructor(private apiService:ApiService) {
    this.isLoggedIn = this.apiService.isLoggedIn();
    console.log(this.isLoggedIn);
  }

  ngOnInit() {
  }

  logout(){
    this.apiService.logout();
  }
}
