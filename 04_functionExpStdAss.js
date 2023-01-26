var student = function( gradScore ,hscScore , sscScore , studName){
if (gradScore>= 70 || hscScore>=80 || sscScore>= 90) {

    console.log(`Congrats you are eligible for interview`, studName);

} else {
    console.log(`Unortunately you are not eligible for interview`);
}
}
student( 80,82,90, "Maruti") 

student( 71,75,91,  "Shubhangi") 

student( 60, 79, 88,  "Swati") 


