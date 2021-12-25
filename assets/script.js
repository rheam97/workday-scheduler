//DOM references
var today = document.getElementById("currentDay")

//global variables
var events = {}
var savedEvents;

// look up jquery objects again lol
$(document).ready(function () {

    // get items from localStorage if any
    //$(".hour textarea").localStorage.getItem(eventTime, event)

    // interval function for day, time display
    setInterval(function () {
        today.innerText = moment().format("dddd MMM Do YYYY, h:mm a")
    }, 1000)

    // interval for hour/event auditing
    setInterval(auditEvent(), 1000)

    // auditing function 
    function auditEvent() {

        // get current hour
        var time = moment().hours()

        // loop over each hour element
        $(".hour").each(function () {
            var hour = parseInt($(this).attr("id"))

            //  if event has passed
            if (hour < time) { /// not working 
                $("textarea").attr("class", "past")
            }
            // if it is the current hour of event 
            if (hour === time) {
                $("textarea").attr("class", "present")

            }
            // if you still have some time before the event
            else if (hour > time) {
                $("textarea").attr("class", "future")
            }

        })
    }

})

// draggable ul
// drag textarea to different timeblock div
// other ones sorted
// must save with button
//text changes?

$(".container .listgroup").sortable({
    connectWith: $(".time-block .listgroup"),
    tolerance: "pointer",
    items: "> textarea",
    helper: "clone",
  activate: function(event, ui) {
    //$(this).addClass("dropover");
    //$(".bottom-trash").addClass("bottom-trash-drag");
  },
  deactivate: function(event, ui) {
    //$(this).removeClass("dropover");
    //$(".bottom-trash").removeClass("bottom-trash-drag");
  },

})

// save to localstorage /// do this and draggable UL thursday and submit
function saveEvent() {
    var eventTime = $(this).siblings(".hour")
    var event = $(this).siblings("textarea").val()

    var toDo = {

    }

    localStorage.setItem(eventTime, event)

}

// save button event listener
$(".saveBtn").on("click", saveEvent)