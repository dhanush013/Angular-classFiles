export class Employee {
    empId:number;
    empName:string;
    empSalary:number;
    empDob:Date;
  
    constructor() { 
      this.empId=1001;
      this.empName="A Kumar";
      this.empSalary=40000;
      this.empDob=new Date();
    }
}
