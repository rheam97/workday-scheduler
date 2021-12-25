# Work Day Scheduler
# Table of Contents
* [Project Description](#project-description)
* [How I Made It](#how-i-made-it)
* [Usage](#Usage)
* [URL](#URL)

<a name= "projectdescription"></a>
## Project Description

Create a simple calendar application that allows a user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery and Moment.js.


### Acceptance Criteria

```
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
```
<a name="howimadeit"></a>
## How I Made It

I started by using moment and attachged it to the element with the id "currentday" and formatetd the text to show the day of the week, date, and time. This is seyt to an interval so that it shows every minute change in the page. I also made new HTML elements for each timeblock and text input. I put the text inputs inside a ul because I wanted to experiment with sortable UI in jequery, but I wasn't able to get advice or help on it before the break started or before the due date. I plan on going back and fixing this so that the textareas can be sorted in case events need to be rearranged throughout the day. I made each time-block auditable by parsing the id attribute for every "hour" div and comparing that to the current time in hours using moment. I then attached classes to each textarea next to each hour div depending on whether or not they fell in the past, present hour, or future. I added an event listener to the save button so that it would save the textarea and time in an object in local storage. This can be retreived with every page refresh or load. 

<a name="usage"></a>
## Usage

Here is how the app looks and functions: 
![app function](workdayscheduler.gif)


<a name="URL"></a>
## URL

* The URL of the deployed application: 
* The URl of the repo: 

- - -



