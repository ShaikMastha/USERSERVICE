import { Injectable } from "@angular/core";
import { LoggerService } from "./logger.service";

@Injectable()
export class UserService {
    constructor(private Logger:LoggerService){

    }
    users = [
        {name : 'rebel' , status : 'active'},
        {name : 'King' , status : 'inactive'},
        {name : 'Lion' , status : 'active'}
    ]
    AddNewUser(name: string, status: string){
        this.users.push({name: name, status:status});
        this.Logger.LogMessage(name, status);
    }
}