//DOM references
var today = document.getElementById("currentDay")
//var saveEl =document.querySelectorAll(".saveBtn")
//var eventEl =document.querySelectorAll("textarea")
// hourEl = document.querySelectorAll(".hour")
//var timeBlockEl = document.querySelectorAll(".time-block")


//global variables

// look up jquery objects again lol
$(document).ready(function(){

saveEvent()
// interval function for day, time display
setInterval(function() {
    today.innerText= moment().format("dddd MMM Do YYYY, h:mm a" )
}, 1000)

// interval for hour auditing
setInterval(auditEvent(), 1000)

// auditing function 
function auditEvent() {

    // get current hour
    var time = moment().hours()
   // says undefined

  // loop over each hourel i dont think this works***
    $(".hour").each(function() {
        var hour = parseInt($(this).attr("id"))

    //  if event has passed
    if (hour < time) { /// not working 
        $("textarea").attr( "class", "past")
    }
    // if it is the current hour of event 
    if (hour === time) {
        $("textarea").attr( "class", "present")

    }
    // if you still have some time before the event
    else if (hour > time) {
        $("textarea").attr( "class", "future")
    }

})
}

})

// save to storage event listener 
function saveEvent () {

}

// save button event listener
$(".saveBtn").on("click", saveEvent)