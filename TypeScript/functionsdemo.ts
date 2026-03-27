function addNumbers(){
    let num1:number=10;
    let num2:number=20;
    console.log(`Addition is: ${num1+num2}`)
}
function subractNumebers(num1:number,num2:number){
    console.log(`Subtraction is: ${num1-num2}`)
}
function multiplyNumbers(n1:number,n2:number):number{
    return n1*n2;
}

addNumbers()
subractNumebers(10,19)
console.log(multiplyNumbers(10,3))
// function personInfo(name:string,age:number){

// }

personInfo("Kunal","Pune")
personInfo("Sachin"."Mumbai",28)

console.log(overloadingDemo(10,20));
console.log(overloadingDemo("Type","Script"));