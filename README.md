BookingAutomationProject
This project includes a basic flow automation of Booking.com official website. Webdriverio and cucumber is used in implementation

Prerequisites to setup project
* install and setup Node
* install an IDE (VS Code)

Steps to run the code
* clone the reporsitory - git clone https://github.com/agazzaz/JSWDIOAssessment.git
* Open the project in IDE
* run a 'npm install' to install all the dependencies
* To run the test -> npx wdio run wdio.conf.js

Issues faced
* Difficulties in identified elements which were not straighforward. 
* Syntax difference
     example:
  I had to use
  "module.exports = new search();" instead of "export default new Search();"
  "const SearchPage = require ("../pages/pg_search.js");" instead of import home from "../pages/pg_home.js"

As of now, I have added the urls and data outside the script or method without hardcoding.
