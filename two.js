//v pattern
let nums=5, star="";
for(let i=0;i<nums;i++){
    for(let j=0;j<nums-1;j++){
        if(i==j){
            star+="* ";
        }else{
            star+=" ";
        }
    }
    for(let j=0;j<nums;j++){
        if(i+j==nums-1){
            star+="* ";
        }else{
            star+=" ";
        }
    }
    star +="\n";
}
console.log(star);