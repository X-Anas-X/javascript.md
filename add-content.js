var today = new date();
var hourNow = today.getHour();
var greeting;

if (hourNow > 12) {
    greeting = 'good evening!';}
    else if (hourNow > 0) {
        greeting = 'Good afternoon!';}
else {
    greeting = 'Welcome!';
}

document.write('<h3{' + greeting + '</h3>');

    
