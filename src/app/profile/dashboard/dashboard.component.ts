import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../auth/api.service";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private apiService:ApiService) { }

  ngOnInit() {
  }
  logout(){
    this.apiService.logout();
  }
}
