import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { QueryService } from '../service/query.service';
declare let window: any; 

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
  public message;
  sendMessage(){
    console.log(this.message)
  }
  q:Query;
  query: any;
  email: any;

  constructor(private authenticationservice: AuthenticationService,
    private qService: QueryService) { }

  ngOnInit(): void {
    this.email = this.authenticationservice.email();
    (function(d, m){
      var kommunicateSettings = 
          {"appId":"3234d55ac5a78ce5678c7ea59bbbda70d","popupWidget":true,"automaticChatOpenOnNavigation":true};
      var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
      s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
      var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
      window.kommunicate = m; m._globals = kommunicateSettings;
  })(document, window.kommunicate || {});
  }

  sendQuery(query){
    this.q=new Query(query, this.email);
    this.qService.postQuery(this.q).subscribe();
  }

}
