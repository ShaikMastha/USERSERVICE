import { Component, OnInit } from '@angular/core';
import { UserService } from './Services/user.service';
import { LoggerService } from './Services/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[UserService, LoggerService]
})
export class AppComponent implements OnInit{
  title = 'USERSERVICE';

  users: {name:string, status: string} []= [];

constructor(private userService: UserService, private LoggerServive: LoggerService){}
  ngOnInit(){
    this.users = this.userService.users;

  }
}
