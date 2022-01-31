function getfarenheit(farenhit){
    let celcius = farenhit-32/1.8;
    return celcius.toFixed(1);
}

let celciusValueIs = 60;
let getcelciusValue = getfarenheit(celciusValueIs);
console.log(getcelciusValue);

// if-else condition using Fahrenheit to Celcius 
 
function getcelciusIs(Fahrenheit){
    if(typeof Fahrenheit == 'number' ){
        let celciusvalue = Fahrenheit-32/1.8;
        return celciusvalue.toFixed(2);
        
    }else{
        return 'this number is not celcius';
    }


}

let farenhitvalue = 70;
let celciusdividedValueIs = getcelciusIs(farenhitvalue);
console.log(celciusdividedValueIs);