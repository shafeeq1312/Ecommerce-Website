console.log ("Hello World!");
var  mass1=50;
var height1=150;
var BMI1=null;
var mass2=60 ;
var height2=160;
var BMI2=null;

var mass3=97 ;
var height3=175;
var BMI3=null;

BMI1=mass1/(height1*height1);
console.log (BMI1);
BMI2=mass2/(height2*height2);
console.log(BMI2);
BMI3=mass3/(height3*height3);
console.log(BMI3);

if(BMI1 > BMI2 && BMI3){
    console.log(`Person A ${BMI2} BMI is Greater than B ${BMI3} and C ${BMI1}`);
}
else if(BMI2 > BMI3)
{
    console.log(`Person B ${BMI2} BMI is Greater than c ${BMI3} and A ${BMI1}`);
}
else
{
    console.log(`Person c ${BMI3} BMI is Greater than A ${BMI1} and B ${BMI2}`);
}