import { Component, Input, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() user:User;

  constructor() {
    this.user=new User();
  }

  userInfo(){
    alert('ID is '+this.user.userId)
    alert('Name is '+this.user.userName)
    alert('Salary is '+this.user.userSalary)
  }

  ngOnInit(): void {
  }

}
