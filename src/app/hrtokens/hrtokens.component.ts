import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Query } from '../chat-bot/chat-bot.component';
import { QueryService } from '../service/query.service';

@Component({
  selector: 'app-hrtokens',
  templateUrl: './hrtokens.component.html',
  styleUrls: ['./hrtokens.component.css']
})
export class HrtokensComponent implements OnInit {
  query = new Query(1,"anujakaverigari@gmail.com","your name");
  query2 = new Query(2,"anujakaverigari@gmail.com","your name");
  q : Query[] = [this.query,this.query2]
  

  constructor(private queryservice: QueryService,
    private router:Router) { }

  ngOnInit(): void {
    //this.queryservice.getQueries().subscribe(response => this.q = response);
    
    
    //this.q.push(this.query)
  }
  

  respond(){
    this.router.navigate(['hr-response'])
  }

}
