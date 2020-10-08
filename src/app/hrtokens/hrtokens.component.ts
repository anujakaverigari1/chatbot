import { Component, OnInit } from '@angular/core';
import { Query } from '../chat-bot/chat-bot.component';
import { QueryService } from '../service/query.service';

@Component({
  selector: 'app-hrtokens',
  templateUrl: './hrtokens.component.html',
  styleUrls: ['./hrtokens.component.css']
})
export class HrtokensComponent implements OnInit {
  q: Query[];

  constructor(private queryservice: QueryService) { }

  ngOnInit(): void {
    this.queryservice.getQueries().subscribe(response => this.q = response);
  }

  respond(answer){
    
  }

}
