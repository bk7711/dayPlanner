var node = ['.nine', '.ten', '.eleven', '.twelve', '.one', '.two', '.three', '.four','.five'];
var classEl;
// var text;
// var integer;
var saveEl = $('.textarea');
var buttonEl = $('saveBtn');
var now = moment().format("hh");
var calendar = [];


//set the date and time and run function. recheck and post time


var timerInterval = setInterval(function (){
    var currentEl = moment().format("dddd MMMM DD,YYYY hh:mm");
    $('#currentDay').text(currentEl);
    //pull events from local storage
    
    changeColor();

},5000);

function changeColor() {
    var i;
    //loop through the array of classes from html
    for (i = 0; i < node.length; i++){
        //set query selector for each class in node array
         var selectionEl = document.querySelector(node[i]);
         //pull the text from div with above id
         text = $(node[i]).text();
         //parse the number from the text and save as integer
         integer = parseInt(text,10);

        // compare the integer to the hour of the current time
    
        if (now == integer){
                    var change = selectionEl.getElementsByTagName("textarea");
                    
                    
                    //if they are equal as current hour change background to red
                    $(change).addClass("present");
                    //change previous timeblock
                    var prevDiv = ($(selectionEl).prevAll());
                    var prevSibling = $(prevDiv).find('textarea');
                    
                    $(prevSibling).addClass('past');

                    var nextDiv = ($(selectionEl).nextAll());
                    var nextSibling = $(nextDiv).find('textarea');
                    
                    $(nextSibling).addClass('future');
                }  
         }
    };
var storeEvents = function(){
    localStorage.setItem("calendar", JSON.stringify(calendar));
}
var getStoredEvents = function(){
    if(localStorage.length > 0){
        calendar = JSON.parse(localStorage.getItem('calendar'));
        for(var i = 0; i < calendar.length; i++){
            var oldTask = $('body').find('button[id="'+calendar[i].timeblock+'"]');
            oldTask.prev().text(calendar[i].meeting);
        }
    }else{
        alert("You have no meetings scheduled!")
    }
    
}
//save and post user's add to text area when button is clicked
function saveMeeting(){
    
    $(".saveBtn").click(function (event) {
        var currentEvent = {};
        event.preventDefault();

        //capture event id and set in currentEvent object
        currentEvent.timeblock = event.target.id
        console.log(event.target.id);
        //capture textarea text and add it to the calendar
        currentEvent.meeting = $(this).siblings(".textarea").val();
        $(this).prev().text(currentEvent.meeting);

        //push currentEvent to calendar object for local storage
        calendar.push(currentEvent);
         
        
        storeEvents();

    });



}
var loadCalendar = function(){
    getStoredEvents();
    saveMeeting();
};

loadCalendar();