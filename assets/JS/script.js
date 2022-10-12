var timeViewElement = $('#time-view');
var now; 

var UpdateTime = function(){
    now = moment();
    timeViewElement.text(now.format("MMMM Do YYYY hh:mm:ss a"));
}

$(document).ready(function(){

    UpdateTime();
    setInterval(UpdateTime, 1000);
})