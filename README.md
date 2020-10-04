# javascript-challenge
Filtering data from a table using a web page search field.

# Synopsis and Usage

The index.html files in UFO-level-1 and UFO-level-2 build a table from the array of objects in static\js\data.js using the JavaScript in static\js\app.js. 

## UFO-level-1

When opened in a web browser, index.html displays the whole table of UFO sighting data and provides a search field to filter sightings by date. The range of dates in the table is from 1/1/2010 to 1/13/2010. Input any date in that range and click the "Filter Table" button or hit enter to filter the data. The table clears and only the data from that date is displayed. 

## UFO-level-2

The index.html file search function was upgraded to include all the data columns in the table (except duration and comments). The multi search option is partially functional with the following known bugs:

* The filer only works when clicking the button, not on "enter"
* A page refresh is required to try new filter options
* Using CA in the State field also includes CA (Canada) from the Country Field

Additionally, search dropdowns would improved usabilty.
