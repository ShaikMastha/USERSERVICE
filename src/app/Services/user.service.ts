export class UserService {
    users = [
        {name : 'rebel' , status : 'active'},
        {name : 'King' , status : 'inactive'},
        {name : 'Lion' , status : 'active'}
    ]
    AddNewUser(name: string, status: string){
        this.users.push({name: name, status:status});
    }
}