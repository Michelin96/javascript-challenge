// from data.js get the array of sighting objects
let tableData = data;

// Use D3 to select the table body
let tbody = d3.select("tbody");

// Use D3 to select the table
let table = d3.select("table");

let filterButton = d3.select("#filter-btn"),
    form = d3.select("#form");

let searchList = []

let filteredData = []

// Make a table of all the sighting data
tableData.forEach(sighting => {
    let row = tbody.append("tr");
    row.append("td").text(sighting.datetime);
    row.append("td").text(sighting.city);
    row.append("td").text(sighting.state);
    row.append("td").text(sighting.country);
    row.append("td").text(sighting.shape);
    row.append("td").text(sighting.durationMinutes);
    row.append("td").text(sighting.comments);
});

// Complete the event handler function for the search form
function runEnter () {
    // Prevent the page from refreshing
    d3.event.preventDefault();

     //Select the input entry and get the raw HTML node
    let dateEntry = d3.select("#datetime");
    let cityEntry = d3.select("#city");
    let stateEntry = d3.select("#state");
    let countryEntry = d3.select("#country");
    let shapeEntry = d3.select("#shape");
 
     // Get the value property of the input entry, e.g. the date and push to a list
    searchList.push(dateEntry.property("value"));
    searchList.push(cityEntry.property("value"));
    searchList.push(stateEntry.property("value"));
    searchList.push(countryEntry.property("value"));
    searchList.push(shapeEntry.property("value"));

    // Show the list of the input entries
    console.log(searchList);

    // Get the values of each key in the object (row of sighting data)
    let objectValues = Object.values(tableData[0]);

    console.log(objectValues);

    // Check each sighting object key value and compare it with each item in the search list

    // If the object key value matches an item in the search list
            // append the object to the filtered list

//     // remove all sighting data from the table
//     tbody.html("");

//     // Create a new table of the filtered sighting data array of objects
//     filteredData.forEach(sighting => {
//         let row = tbody.append("tr");
//         row.append("td").text(sighting.datetime);
//         row.append("td").text(sighting.city);
//         row.append("td").text(sighting.state);
//         row.append("td").text(sighting.country);
//         row.append("td").text(sighting.shape);
//         row.append("td").text(sighting.durationMinutes);
//         row.append("td").text(sighting.comments);
//     });
};

// Create event handlers 
filterButton.on("click", runEnter);
form.on("submit",runEnter);