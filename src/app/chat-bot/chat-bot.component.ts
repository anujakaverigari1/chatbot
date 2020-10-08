import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../service/register.service';

@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.css']
})
export class ChatBotComponent implements OnInit {
  query=""

  constructor(private queryService:RegisterService) { }

  ngOnInit(): void {
  }

  sendQueryToHr(){
    let employeeEmail = localStorage.getItem("empEmail")
    let data = new FormData();
    data.append("empEmail",employeeEmail)
    data.append("query",this.query)
    this.queryService.executeQueryService(data).subscribe()
  }

}
