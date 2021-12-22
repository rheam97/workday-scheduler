# Work Day Scheduler Starter Code
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with time blocks for standard business hours
WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future
WHEN I click into a time block
THEN I can enter an event
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
//page loads
//current day is displayed at the top possibly clock at the top
    //setInterval to go every thousand ms: format hours, min, sec in interval
    //create html element for current day
    //select it or get element id in js
    //use moment to display textcontent for element for current day
//separate divs for time blocs for 9-5 in html
    //use moment to audit blocks to set class attributes for past present and future
//.onclick for time block div to input changes or new events (<textarea> in html)
//ability to change the input and save with click of button
//click saves event to local storage for broswer to get after refresh
//click out and blur out of task (optional)
//draggable option? to reschedule?
    //if you were to do this, nest task input in time block div inside another div with ul
    //tasks would b li
    //attach classes to this instead of time block (maybe set another interval timer)
