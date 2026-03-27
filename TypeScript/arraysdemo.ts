let names:string[]=["Sachin","Ravi","Prashant","Rabchod"];
console.log("Name Array: ",names);
console.log("Name 1:",names[0]);
for(let i:number=0;i<names.length;i++){
    console.log(`Name at index ${i} is ${names[i]}`)
}

let numbers: readonly number[]=[1,2,3,4,5];

let newArray=numbers.map((value)=> value*2);
console.log("Number Array: "+numbers)
console.log("New Array",newArray)

let oddNumber=numbers.filter((value)=>value%2!=0)
console.log("Odd Numbera are:",oddNumber)
let sum=numbers.reduce((accumulator,currentValue)=>accumulator+currentValue,0);
console.log("Odd Numbers are:", sum)
