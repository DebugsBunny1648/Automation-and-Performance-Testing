/* 
Write a program to rpint whether a student is early, late or on-time for exam 9:30 am 
is the on time, if a student arrives before 9:30 then print ""LATE
 and "ONTIME" if student reaches at 9:30


*/

let time1:String="10:30";
if(time1=="9:30"){
    console.log("On_time");
}
else if(time1<"9:30"){
    console.log("Before time");
} else{
    console.log("Late");
}
