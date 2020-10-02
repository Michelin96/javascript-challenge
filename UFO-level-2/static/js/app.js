// from data.js get the array of sighting objects
let tableData = data;

// Use D3 to select the table body
let tbody = d3.select("tbody");

// Use D3 to select the table
let table = d3.select("table");

let filterButton = d3.select("#filter-btn"),
    form = d3.select("#form");

let searchList = []

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


// for (let i = 0; i < 5; i++) {
//     // Runs 5 times, with values of i 0 through 4.
//     console.log(searchItems[i]);
//   };

// console.log(listItem);

 // Iterate over a NodeList
// let searchList = searchItems.values();
    // let inputValue = searchItems.property("value");
// console.log(searchList);


// searchArray.forEach(entry => {
//     var entryValue = entry.property("value");
//     console.log(entryValue);

// });


// Complete the event handler function for the search form
function runEnter () {
    // Prevent the page from refreshing
    d3.event.preventDefault();

    // // Select the input entry and get the raw HTML node
    // let searchItems = document.querySelectorAll("input");
    // console.log(searchItems);

    // // Convert searchItems NodeList to an array tip from https://jsfiddle.net/
    // var searchArray = Array.prototype.slice.call(searchItems); 

    // console.log(searchArray);

    // // // Iterate over a NodeList
    // for (const item of Object.entries(searchArray)){
    //     // let inputValue = item.property("value");
    //     console.log(item[1].property("value"));
    //     // searchList.push(item);
    // };
    // console.log(searchList);

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

    console.log(searchList);


    // Filter the data based on the input entry
    let filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

    // remove all sighting data from the table
    tbody.html("");

// Put the search items in a list
// Search each table object for any (or's) item in the list


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