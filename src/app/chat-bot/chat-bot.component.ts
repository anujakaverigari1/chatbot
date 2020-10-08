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
    private qService: QueryService) { }

  ngOnInit(): void {
    this.email = this.authenticationservice.email();
  }

  sendQuery(query){
    this.q=new Query(query, this.email);
    this.qService.postQuery(this.q).subscribe();
  }

}
