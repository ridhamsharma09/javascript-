let str = "RiDhAm";

console.log(str.toUpperCase());
console.log(str.toLowerCase());

let ans=" hello world  ";
console.log(ans.trim());
console.log(ans);


let str2 = "I am learning JavaScript";

console.log(str2.includes("JavaScript"));
console.log(str2.includes("Python"));

let str3 = "Hello World";

console.log(str3.indexOf("World"));
console.log(str3.indexOf("o"));
console.log(str3.indexOf("Java"));

let str4 = "JavaScript";

console.log(str4.slice(0, 4));
console.log(str4.slice(4, 10));
console.log(str4.slice(-6));

let str5=str4.substr(1,4);
console.log(str5);

let str6=str.concat(str4);
console.log(str6);

let n=str6.length;
console.log(n);


console.log(10 + 20);       // 30
console.log("10" + 20);     // 1020
console.log(10 + "20");     // 1020
console.log("10" + "20");   // 1020

console.log(10+20+"hi"); //"30hi"

console.log("hi"+10+10); //"hi1010"

// que practice

let text = "  hello JavaScript World  ";
let word = "JavaScript";

console.log(text);
console.log(text.length);
console.log(text.trim().length);
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.slice(8,18));
console.log(text.substr(2,5));
console.log(text.includes("JavaScript"));
console.log(text.indexOf("World"));
console.log(text.startsWith("hello"));
console.log(text.endsWith("World"));
console.log(text.replace("JavaScript","Python"));
let x="";
for(let i=0;i<text.length;i++){
    if(text[i]==='l'){
        x+='L';
    }
    else{
        x+=text[i];
    }
}
console.log("manual",x);
console.log(text);
console.log(text.replaceAll('L','l'));
