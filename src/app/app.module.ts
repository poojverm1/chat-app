import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RouterModule, Routes} from '@angular/router';
import { ChatBoxComponent } from './chat-box/chat-box.component';

import { LoginComponent } from './login/login.component';
import { ChattingModule } from './chatting/chatting.module';
import { UserModule } from './user/user.module';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,

   
    
  ],
  imports: [
    BrowserModule,
    ChattingModule,
   UserModule,
    RouterModule.forRoot([
      {path:'login',component:LoginComponent,pathMatch:'full'},
      {path:'',redirectTo:'login',pathMatch:'full'},
      {path:'*',component:LoginComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
