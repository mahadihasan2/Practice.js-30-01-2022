function calculate(value,varient){
    if(varient == "celcious"){
        let faharenheit = value*9/5+32;
        return faharenheit;
    }else if(varient == "faharenheit"){
        let celcius =  value-32/1.8;
        return celcius;
    }else if(varient == "kelvin"){
         let kelvin = value+273.15;
         return kelvin;
    }else{
        return "something wrong";
    }
}

let result = calculate(13,"celcious")
let result2 = calculate(200,"faharenheit")
let result3 = calculate(50,"kelvin")
console.log("celcious", result);
console.log("faharenheit" ,result2);
console.log("kelvin" ,result3);