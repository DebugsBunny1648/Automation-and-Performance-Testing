/* 
Calculate the BMI of a person BMI=weight/(height*height)
underweight<18.5
normal weight>18.5 and <25
overweight>=25 and <30
obesity>30
*/
let weight:number=40;
let height:number=1.8;
let BMI=weight/(height*height);
if(BMI<18.5){
    console.log("Underweight");
}
else if(BMI>18.5 && BMI<25){
    console.log("Normal Weight");
}
else if(BMI>=25 && BMI<30){
    console.log("Over weight");
}
else{
    console.log("Obesity");
}