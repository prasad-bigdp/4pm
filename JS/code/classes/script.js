/* object oriented programming revolves around objects */
/* object: any physical entity with properties and methods*/
let obj = {
    username: "raj",
    password:"1234"
}
console.log(obj.username)
/* class is a blueprint of object */
class Student
{
    rno; fee; marks; name; 
}
// console.log(typeof Student)
let obj2 = new Student();/* creating new object obj2 */
/* create class employee with eid,salary,name,position and create an object */
class Employee
{
    eid; salry; name; pos;
    constructor(id,n,s,p)
    {
        this.eid = id;
        this.name = n;
        this.salry = s;
        this.pos=p
    }
}
let emp = new Employee(a,b,c,d)
let emp1= new Employee(12145,"raj",20000,"Manager")
console.log(emp.eid)


/* create a basic class named teacher with each student name,marks will be stored */

class teacher{
    name; subj; institute;
    constructor(name, subj, institute){
        this.name = name;
    this.subj = subj;
    this.institute = institute;
    }
}
let teach = new teacher("prasadh", "UI", "nareshit");
let teach2 = new teacher("sopmeone", "UI", "nareshit")
class pricipal extends teacher
{
    k;   
}
let abc= new pricipal()
console.log(abc.k)

/* create two classes and 
make them one of other properties use using inheritance */


/* modules:*/





