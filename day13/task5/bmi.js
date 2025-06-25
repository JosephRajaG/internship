function bmical(Weight,height){
    return Math.round(Weight/(height)**2);
}

var bmi = bmical(65,1.8);
console.log(bmi);
