function getcelcius(celcius){
    // let celcius = 40;
    
    if(typeof celcius=='number'){
        let farenheit = celcius*9/5+32;
        return farenheit.toFixed(1);
    }else{
        return 'celcius is not a number';
    }
   
    
}
// console.log('this temperather is farenheit =',farenheit);
let celciusvalue = 13;
let farenhitsValueIs = getcelcius(celciusvalue);
console.log(farenhitsValueIs);