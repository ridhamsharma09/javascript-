
class student{
     constructor(){
        this.name="Ridham";
        this.age=19;
     }
     display(){
        console.log("Name is : ",this.name);
        console.log("Age is: ",this.age);
     }
}

let s1=new student();
s1.display();

let s2=new student(s1);
s2.display();

