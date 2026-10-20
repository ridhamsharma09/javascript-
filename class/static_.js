class student{
    constructor(n,a){
        this.name=n;
        this.age=a;
    }
    display(){
        console.log("MY name is :",this.name);
    }
     static hi(){
        console.log("who are you ??");
    }
}
let s1=new student("ridham",19);
s1.display();

student.hi();

