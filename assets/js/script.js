var node = ['.nine', '.ten', '.eleven', '.twelve', '.one', '.two', '.three', '.four','.five'];
var classEl;
// var text;
// var integer;
var saveEl = $('.textarea');
var buttonEl = $('saveBtn');
var now = moment().format("hh");

//set the date and time and run function. recheck and post time
var timerInterval = setInterval(function (){
    var currentEl = moment().format("dddd MMMM DD,YYYY hh:mm");
    $('#currentDay').text(currentEl);
    
    changeColor();

},5000);
//save and post user's add to text area when button is clicked






function changeColor() {
    var i;
    //loop through the array of id's from html
    for (i = 0; i < node.length; i++){
        //set query selector for each id in node array
         var selectionEl = document.querySelector(node[i]);
         //pull the text from div with above id
         text = $(node[i]).text();
         //parse the number from the text and save as integer
         integer = parseInt(text,10);

        // compare the integer to the hour of the current time
    
        if (now == integer){
                    var change = selectionEl.next;
                    //if they are equal as current hour change background to red
                    change.setAttribute('class','present');
                    var prevSibling = change.previousElementSibling;
                    prevSibling.setAttribute('class', 'past');
                    var nextSibling = change.nextElementSibling;
                    nextSibling.setAttribute('class', 'future');
                }  
         }
    };

//save and post user's add to text area when button is clicked
function saveMeeting(){
    //when save button is clicked
    $(".saveBtn").click(function(event){
        //pull value from related textarea
        meeting = $.trim($(".textarea").val());
        $(this).prev().text(meeting);
        meeting = "";
    });
        // $(this).text(meeting);
        // $(event.delegateTarget).val(meeting);
        // saveEl.append(meeting);
}
saveMeeting();