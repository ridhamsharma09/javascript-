let student={
    name:"Aman",
    age:20,
    marks:85,
    branch:"IT"
};
student["marks"]=92;
console.log(student.name);
console.log(student["name"]);
console.log(student);
student.city="Jalandhar";
console.log(student);


delete student.branch;
console.log("after deletion :  ",student);
console.log(Object.keys(student));
console.log(Object.values(student));
console.log(Object.entries(student));
