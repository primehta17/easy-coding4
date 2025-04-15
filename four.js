//diamond pattern
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
let nums=5,star="";
for(let i=0;i<nums;i++){
    for(let j=i;j<nums;j++){
        star+=" ";
    }
    for(let j=0;j<=i;j++){
        star+="*";
    }
    for(let j=0;j<i;j++){
        star+="*";
    }
    star+="\n";
}
for(let i=1;i<=nums;i++){
    for(let j=0;j<=i;j++){
        star+=" ";
    }
    for(let j=i;j<nums;j++){
        star+="*";
    }
    for(let j=i;j<nums-1;j++){
        star+="*";
    }
    star+="\n";
}
console.log(star);