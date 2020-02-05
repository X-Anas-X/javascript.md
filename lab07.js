prompt("who is this?")
prompt("have you eaten today?")
prompt("how was your exam?")
alert("we will do well")
var today = new Date();
var hourNow =today.getHours();
var greetings;
if (hourNow>18){
    greeting='Good evening!';

}
else if (hourNow>12){
    greeting='Good afternoon!';

}
else if (hourNow>0){
    greeting='Good morning!';

}
else {
    greeting='Welcome!';
}
document.write('<h3>'+greeting+'</h3>');