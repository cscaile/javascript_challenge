// from data.js
import datetime

var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

console.log(data);

data.forEach((alienSighting) => {
  var row = tbody.append("tr");
  Object.entries(alienSighting).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});


// Getting a reference to the button on the page with the id property set to `click-me`
var button = d3.select("#filter-btn");
// Getting a reference to the input element on the page with the id property set to 'input-field'
var inDate = d3.select("#datetime");


// // Create a custom filtering function
// function selectDate(sighting) {
//     return sighting.date==inDate;
//   }
  
//   // filter() uses the custom function as its argument
//   var filteredSightings = data.filter(selectDate);
  
//   // Test
//   console.log(filteredSightings);

// // This function is triggered when the button is clicked
// function handleClick() {
//     console.log("A button was clicked!");
  
//     // We can use d3 to see the object that dispatched the event
//     console.log(d3.event.target);
//   }

// // We can use the `on` function in d3 to attach an event to the handler function
// button.on("click", handleClick);

// You can also define the click handler inline
button.on("click", function() {
  console.log("Hi, a button was clicked!");
  console.log(d3.event.target);
});

// You can also define the click handler inline
button.on("click", function selectDate(sighting) {
    return sighting.date==inDate;
    console.log("Hi, a button was clicked!");
    console.log(d3.event.target);
    var filteredSightings = data.filter(selectDate);
    console.log(filteredSightings);
  });


// // Create a custom filtering function
// function selectDate(sighting) {
//     return sighting.date==inDate;
//   }
  
//   // filter() uses the custom function as its argument
//   var filteredSightings = data.filter(selectDate);
  
//   // Test
//   console.log(filteredSightings);