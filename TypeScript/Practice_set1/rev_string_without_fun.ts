let str:string="TypeScript";
let rev:string="";
for(let i:number=0;i<str.length;i++){
    rev=str[i]+rev;
}
console.log(`Reverse of String ${str} is ${rev}`);