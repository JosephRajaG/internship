function bmical(Weight,height){
    return (Weight/(height)**2);
}

var bmi = bmical(65,1.8);
    if(bmi<18.5){
        console.log("your BMI is "+bmi + " so you have underweight");
    }
    else if(bmi>24.9){
        console.log("your BMI is "+bmi + " so you have overweight");
    }
    else{
        console.log("your BMI is "+bmi + " so you have Normalweight");
    }
