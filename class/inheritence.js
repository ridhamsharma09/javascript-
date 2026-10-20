class student{
    constructor(n,m){
        this.name=n;
        this.age=m;
    }
}

class newclass extends student{
    constructor(t,l,n,m){
        super(n,m);
        this.marks=t;
        this.hell=l;
    }
    display(){
        console.log(this.name);
        console.log(this.age);
    }
}

let s1= new newclass(20,39,"ridham",19);
s1.display();

