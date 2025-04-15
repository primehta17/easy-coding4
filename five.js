//watchglass pattern 
// * * * * * 
// * * * * 
//  * * * 
//   * * 
//    * 
//   * * 
//  * * * 
// * * * * 
// * * * * * 

let nums=5,star="";
for(let i=1;i<=nums;i++){
    for(let j=1;j<=i;j++){
        star+=" ";
    }
    for(let j=i;j<=nums;j++){
        star+="* ";
    }
    star +="\n";
}
for(let i=2;i<=nums;i++){
    for(let j=i;j<=nums;j++){
        star+=" ";
    }
    for(let j=1;j<=i;j++){
        star+="* ";
    }
    star +="\n";
}
console.log(star);

//butterfly pattern 

// *        *
// **      **
// ***    ***
// ****  ****
// **********
// **********
// ****  ****
// ***    ***
// **      **
// *        *

for(let i=1;i<=nums;i++){
    for(let j=1;j<=i;j++){
        star += "*";
    }
    for(let j=i;j<=nums;j++){
        star += " ";
    }
    for(let j=i;j<nums;j++){
        star += " ";
    }
    for(let j=1;j<=i;j++){
        star += "*";
    }
      star+="\n"
}
for(let i=1;i<=nums;i++){
    for(let j=i;j<=nums;j++){
        star += "*";
    }
    for(let j=1;j<i;j++){
        star += " ";
    }
    for(let j=1;j<=i;j++){
        star += " ";
    }
    for(let j=i;j<=nums;j++){
        star += "*";
    }
    star+="\n"
}
console.log(star);