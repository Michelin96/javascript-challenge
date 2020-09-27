// from data.js get the array of sighting objects
let tableData = data;

// Use D3 to select the table body
let tbody = d3.select("tbody");

// Use D3 to select the table
let table = d3.select("table");

let filterButton = d3.select("#filter-btn"),
    form = d3.select("#form");

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
    // Select the input entry and get the raw HTML node
    let inputEntry = d3.select("#datetime");
  
    // Get the value property of the input entry, e.g. the date
    let inputValue = inputEntry.property("value");

    // Filter the data based on the input entry
    let filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

    let table = d3.select("table");

    // remove all sighting data from the table
    tbody.html("");

    console.log(filteredData);

    // Create a new table of the filtered sighting data
    filteredData.forEach(sighting => {
        let row = tbody.append("tr");
        row.append("td").text(sighting.datetime);
        row.append("td").text(sighting.city);
        row.append("td").text(sighting.state);
        row.append("td").text(sighting.country);
        row.append("td").text(sighting.shape);
        row.append("td").text(sighting.durationMinutes);
        row.append("td").text(sighting.comments);
    });
};

// Create event handlers 
filterButton.on("click", runEnter);
form.on("submit",runEnter);