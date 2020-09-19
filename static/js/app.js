// from data.js

var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

console.log(data);

function buildtable(data) {
  data.forEach((alienSighting) => {
  var row = tbody.append("tr");
  Object.entries(alienSighting).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});
};
buildtable(data)

// Getting a reference to the button on the page with the id property set to `click-me`
var button = d3.select("#filter-btn");
// Getting a reference to the input element on the page with the id property set to 'input-field'


// You can also define the click handler inline
button.on("click", function eventHandler(sighting) {
  tbody.html('');
  var inDate = d3.select("#datetime").property('value');
  console.log(inDate);
  console.log(d3.event.target);
  var filteredSightings = data.filter((row)=>row.datetime==inDate);
  console.log(filteredSightings);
  buildtable(filteredSightings);
});

//arr.filter(selectDate(element))



// // Create a custom filtering function
function selectDate(sighting) {
    return sighting.datetime==inDate;
  }
  
//   // filter() uses the custom function as its argument
//   var filteredSightings = data.filter(selectDate);
  
//   // Test
//   console.log(filteredSightings);


// // You can also define the click handler inline
// button.on("click", function() {
//   console.log("Hi, a button was clicked!");
//   console.log(d3.event.target);
// });