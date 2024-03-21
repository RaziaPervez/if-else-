// used of if, else if, and else statements

             //TEMPERATURE CHECKER

let temperature = 39;
//whem temp between 40 & 30
if (temperature >= 30 && temperature <= 40) {
    console.log("It's too hot");
     //whem temp between 30 & 20
} else if (temperature >= 20 && temperature < 30) {
    console.log("The weather is pleasant");
    //whem temp between 20 & 10
} else if (temperature >= 10 && temperature < 20) {
    console.log("It's too cold");
    //else condition 
} else {
    console.log("Today is windy weather");
}