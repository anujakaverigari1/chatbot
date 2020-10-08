import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { QueryService } from '../service/query.service';

@Component({
  selector: 'app-hr-respond',
  templateUrl: './hr-respond.component.html',
  styleUrls: ['./hr-respond.component.css']
})
export class HrRespondComponent implements OnInit {
  response:String

  constructor(private queryservice: QueryService) { }

  ngOnInit(): void {
  }

  submitResponse(){
    //console.log(this.response)
    this.queryservice.postResponse(this.response).subscribe()
  }

}
