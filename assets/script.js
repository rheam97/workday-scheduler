//DOM references
var today = document.getElementById("currentDay")

//global variables
//var events = {}
//var savedEvents;

$(document).ready(function () {

    // get items from localStorage if any
    function loadEvents() {
        $(".hour").each(function(){
            var timing = $(this).text()
            var plan= localStorage.getItem(timing)

            if (plan !== null) {
            $(this).siblings(".listgroup").children("textarea").val(plan)
            }
        })
       
    }

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
loadEvents()
})

// draggable ul
// drag textarea to different timeblock div
// other ones sorted
//update
// must save with button
//text changes?

$(".time-block .listgroup").sortable({
    connectWith: $(".time-block .listgroup"),
    items: "> textarea",
    placeholder: "highlight",
    //helper: "clone",
    update: function(event){
    var changeArr= []
    $(this).each(function(){
        changeArr.push({
            text: $(this)
            .find("textarea")
            .val()
        })
    })
    // update on localstorage object and save and get on page refresh
    saveEvent()
    }
})

// save to localstorage /// do this and draggable UL thursday and submit
function saveEvent() {
    var eventTime = $(this).siblings(".hour").text()
    var event = $(this).siblings(".listgroup").children("textarea").val()

    localStorage.setItem(eventTime, event)

}

// save button event listener
$(".saveBtn").on("click", saveEvent)