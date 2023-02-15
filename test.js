let tab1= [3, 1, 7, 9];
let tab2= [2, 4, 1, 9, 3];


var test ;
for (let i=0 ; i <tab1.length ; i++){
    test = false;
    for( let j=0 ; j<tab2.length; j++ ){
    if(tab1[i]=== tab2[j]){
    test = true;
    }
    }
    if (test === false){
        sum+= tab1[i]
    }
}

console.log(sum)