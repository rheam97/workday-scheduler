//DOM references
var today = document.getElementById("currentDay")

//global variables



// interval function for day, time display
setInterval(function() {
    today.innerText= moment().format("dddd MMM Do YYYY, h:mm a" )
}, 1000)



// audit interval function 


// save to storage event listener 

//sortable ui

