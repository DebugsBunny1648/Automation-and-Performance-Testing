let str2:string="correspondence";
let output:string="";
for(let l:number=0;l<str2.length;l++){
    if(str2[l]!= 'a' || 'e'|| 'i' || 'o'||'u'){
        output+=str2[l];
    }
}
console.log(output);