let str1:string="correspondence";

let result:string="";
for(let j:number=0;j<str1.length;j++){
    let count:number=0;
    for(let k:number=0;k<str1.length;k++){
        if(str1[j]==str1[k]){
            count++;
        }
       
        }
         if(count==1){
            result+=str1[j];
    }
   
    
}
 console.log(result);