//pattern x

let nums=6,star="";

for(let i=1;i<=nums;i++){
    for(let j=1;j<nums;j++){
        if(i==j || (i+j==nums)){
            star += "*";
        }
        else{
            star += " ";
        }
    }
   star+="\n";
}
console.log(star);

