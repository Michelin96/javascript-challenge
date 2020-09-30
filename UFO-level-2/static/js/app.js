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

// Select the input entry and get the raw HTML node
let searchItems = document.querySelectorAll("input");
console.log(searchItems);


// Convert searchItems NodeList to an array
// var searchArray = Array.from(searchItems);
var searchArray = Array.prototype.slice.call(searchItems); 

console.log(searchArray);

// for (let i = 0; i < 5; i++) {
//     // Runs 5 times, with values of i 0 through 4.
//     console.log(searchItems[i]);
//   };

// console.log(listItem);

 // Iterate over a NodeList
// let searchList = searchItems.values();
    // let inputValue = searchItems.property("value");
// console.log(searchList);


// searchItems.forEach(item => {
//     console.log(item);
// });


// Complete the event handler function for the search form
const runEnter = () => {
    // Prevent the page from refreshing
    d3.event.preventDefault();

    // // Iterate over a NodeList
    // for (const item of Object.entries(searchItems)){
    //     let inputValue = item.property("value");
    //     searchList.push(inputValue);
    // };
    // console.log(searchList);
    // // Get the value property of the input entry, e.g. the date
    // let dateValue = dateEntry.property("value"),
    //     cityValue = cityEntry.property("value"),
    //     stateValue = stateEntry.property("value"),
    //     countryValue = countryEntry.property("value"),
    //     shapeValue = shapeEntry.property("value");

    // console.log(dateValue);
    // console.log(cityValue);
    // console.log(stateValue);
    // console.log(countryValue);
    // console.log(shapeValue);

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