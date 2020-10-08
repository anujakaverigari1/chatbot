import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { QueryService } from '../service/query.service';

export class Query{
  constructor(
    public query: string,
    public emailId: string){}
}

@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.css']
})
export class ChatBotComponent implements OnInit {
  q:Query;
  query: any;
  email: any;

  constructor(private authenticationservice: AuthenticationService,
    private queryservice: QueryService) { }

  ngOnInit(): void {
    this.email = this.authenticationservice.email();
  }

  sendQuery(query){
    this.q=new Query(query, this.email);
    this.queryservice.postQuery(this.q).subscribe();
  }

  sendQueryToHr(){
    let employeeEmail = localStorage.getItem("empEmail")
    let data = new FormData();
    data.append("empEmail",employeeEmail)
    data.append("query",this.query)
    this.queryService.executeQueryService(data).subscribe()
  }

}
