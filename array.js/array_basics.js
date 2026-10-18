const arr1=[1,2,3,4,5];
console.log(arr1);

const arr2=new Array(1,2,3,4);
console.log(arr2);

arr2.push(5);
console.log(arr2);

arr2.pop();
console.log(arr2);

arr2.unshift(20);
console.log(arr2);

arr2.shift();
console.log(arr2);

console.log(arr2.indexOf(2));

let string =arr2.join();
console.log(string);

console.log(arr2.includes(10));

const newarr1=arr2.slice(1,3);
console.log(newarr1);

console.log(arr2);

const arr3=arr2.concat(arr1);
console.log(arr3);

const arr4=[...arr1,...arr1];
console.log(arr4);


console.log(...arr4);

console.log(typeof(arr4));
console.log(typeof(arr1));



