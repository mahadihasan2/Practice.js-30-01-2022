function sum_of_cubes(n){
    let sum = 0;
    for(i=1; i<=n; i++){
        sum += Math.pow(i,3);
    }
    return sum;
}

let number = 12;
let cubesNumber = sum_of_cubes(number);
console.log("Cubes Number is =", cubesNumber);