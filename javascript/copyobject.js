let obj1={
    name:"reyna",
    age:"28",
    country:"UK"
}

//method 1 to copy object
let obj2={
    ...obj1
}

//method 2 to copy object
let obj3={};
for(let key in obj1){
    obj3[key]=obj1[key];
}

console.log(obj2);

console.log(obj3);

