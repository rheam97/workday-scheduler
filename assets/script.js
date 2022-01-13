//DOM references
var today = document.getElementById("currentDay")

// get items from localStorage if any
function loadEvents() {
    $(".hour").each(function () {
        var timing = $(this).text()
        var plan = localStorage.getItem(timing)

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
setInterval(auditEvent, 1000)

// auditing function 
function auditEvent() {

    // loop over each hour element
    $(".hour").each(function () {
        // turn id into number to compare to current hour
        var hour = parseInt($(this).attr("id"))
        // get current hour
        var time = moment().hours()

        // if you still have some time before the event     
        if (hour > time) { /// not working 
            $(this).siblings(".listgroup").children("textarea").addClass("future")
        }
        // if it is the current hour of event 
        else if (hour === time) {
            $(this).siblings(".listgroup").children("textarea").addClass("present")

        }
        //  if event has passed
        else {

            $(this).siblings(".listgroup").children("textarea").addClass("past")
        }

    })
}

// draggable ul
// drag textarea to different timeblock div
// other ones sorted
//update
// must save with button
//text changes?

// $(".time-block .listgroup").sortable({
//     connectWith: $(".time-block .listgroup"),
//     items: $("textarea"),
//     placeholder: "highlight",
//     helper: "clone"
// })

// update on localstorage object and save and get on page refresh
//saveEvent()

// save to localstorage /// do this and draggable UL thursday and submit
function saveEvent() {
    var eventTime = $(this).siblings(".hour").text()
    var event = $(this).siblings(".listgroup").children("textarea").val()

    localStorage.setItem(eventTime, event)

}

// save button event listener
$(".saveBtn").on("click", saveEvent)
loadEvents()