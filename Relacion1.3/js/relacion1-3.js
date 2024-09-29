/* 
### 1. The Age Calculator: function ageCalculator
*Forgot how old someone is? Calculate it!*
- Store the current year in a variable. +++++++++++++++++++
- Store their birth year in a variable. ++++++++++++++++++++
- Calculate their 2 possible ages based on the stored values.
- Output them to the screen like so: "They are either NN or NN", substituting the values.

*/

function ageCalculator(){
    let currentYear = new Date().getFullYear();
    let birthYear = new Date(1980);
    let result = currentYear - birthYear;
    return `They are either ${result} or ${result - 1}`;
}

/*### 2. The Lifetime Supply Calculator: function supplyCalculator
*Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!*
- Store your current age into a variable.+++++++++++++++++++++++
- Store a maximum age into a variable.++++++++++++++++++++++++++
- Store an estimated amount per day (as a number).
- Calculate how many you would eat total for the rest of your life.
- Output the result to the screen like so: "You will need NN to last you until the ripe old age of
X".*/


function supplyCalculator(){
    let currentAge = new Date().getFullYear() - new Date(1980);
    let maximumAge = 30;
    let estimated = 2;
    let result = ((currentAge - maximumAge) * 365) * 2;
    return `You will need ${result} to last you until the ripe old age of ${currentAge + maximumAge}`;
}

/*
### 3. The Geometrizer: function circumference, function area
Calculate properties of a circle, searching the internet for definitions if not remember.
- Store a radius into a variable.
- Calculate the circumference based on the radius, and output "The circumference is NN".
- Calculate the area based on the radius, and output "The area is NN".
*/

function circumference(){
    let radius = 50 * (2 * Math.PI);
    return `The circumference is ${radius.toFixed(4)}`;
}

function area(){
    let radius = 50;
    let area = Math.pow(radius,2) * Math.PI ;
    return `The area is ${area.toFixed(4)}`;
}

/*The Temperature Converter convertTemperature
It's hot out! Let's make a converter, and again you'll have to search the internet how to do it.
- Store a celsius temperature into a variable.
- Convert it to fahrenheit and output "NN°C is NN°F".
- Now store a fahrenheit temperature into a variable.
- Convert it to celsius and output "NN°F is NN°C."*/

function convertTemperature(){
    let celsius = 40;
    let convertoFahrenheit = ((celsius * 9 ) / 5 ) + 32
    return `${celsius}°C is ${convertoFahrenheit}°F`;
}