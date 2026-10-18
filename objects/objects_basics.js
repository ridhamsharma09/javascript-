let v={
    name:"Ridham",
    age:20,
    height:182,
    cgpa:8.94,
};
console.log(v);
console.log(v.name);
console.log(v.age);    // basic changing the properties
v.name="Prince";
console.log(v);
v["name"]="Ridham";
console.log(v);

delete v.cgpa;  //deletion of a key value pair
console.log(v);

v.cgpa=9.05;        // addition of a key value pair
console.log(v);


let student = {
    name: "Rahul",
    age: 19,

    greet: function() {
        console.log("Hello, I am " + this.name);
    }
};

student.greet();



