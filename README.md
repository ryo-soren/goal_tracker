# Goal Tracker

## What is it?

Goal tracker is a project created for people to complete and track the success rate of their goals. It has both a front-end created with [React.js](https://github.com/facebook/create-react-app) and the back-end created with [Ruby on Rails](https://guides.rubyonrails.org/getting_started.html)

## What does it do?

Goal tracker allows users to create tasks based on the frequency for which it should be completed (one time/daily/weekly/monthly/yearly) with a deadline for when it needs to be completed by. When creating a new goal, users must select the target for which the person is aiming to complete that task and the backend will track the users progress for the given time period. Users have a visual aid which displays when the tasks were completed distinguished by colours based on their type, on a calendar with each date having markers for the respective goals. There is a seperate calendar component showing a week ahead for goals with upcoming deadline dates. There is also a section displaying the overall success rate on a circular progress bar, seperated by type of goal (one time/daily/weekly/monthly/yearly). Users additionally have a seperate page made for viewing all goals in order of creation date.

## Notable Features

* Completion Tracking
  * Calendar component built using DayJS that dynamically displays the goals that were done on any given date
  * Completions are shown using circular markers on the calendar date seperated by colour, depending on the type of goal (one time/daily/weekly/monthly/yearly)
  * 


Success rate is tracked based on whether the times completed matches the target for the goal and is calculated on a success/fail basis. Everyday at midnight, the backend will check to see that the times completed matches the target the user has set, and will update the successful or unssucessful attributes to reflect how they did for that given period. 