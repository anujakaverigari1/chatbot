import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatBotComponent } from './chat-bot/chat-bot.component';
import { HrtokensComponent } from './hrtokens/hrtokens.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path: 'hrtokens', component: HrtokensComponent},
  {path:'bot',component:ChatBotComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
