// from data.js
var tableData = data;
//mutible = changable
//imputible = cant change
//so we make a copy so we cang manuplate data
// YOUR CODE HERE!

var tbody = d3.select("tbody")
//2functions
//A = build html table
//B = handle click event

function table(fun_data){
tbody.html("");
    //1argument
    //take fun_data - define data - array - for each
    fun_data.forEach(function(element){
    var row = tbody.append("tr");
        Object.values(element).forEach((val) => {
            var cell = row.append("td");
                cell.text(val);
      }
    );
    })
}

table(tableData)

function handle_click(){
    var date = d3.select("#datetime").property("value")
    var filtered_data = tableData
    filtered_data = filtered_data.filter(element => element.datetime === date)
    table(filtered_data)
}
d3.selectAll("#filter-btn").on("click", handle_click);



//var filteredData = people.filter(person => person.bloodType === inputValue);
//
// var filtered_data = people.filter(person => person.bloodType === inputValue);




//function handle_click(){
//    var date = d3.select("#datetime").property("value")
//    var filtered_data = tableData
//    filtered_data = filtered_data.filter(function(element){
//    element.datetime === date
//    })
//    table(filtered_data)
//}
//d3.selectAll("#filter-btn").on("click", handle_click);






// Select the button
//var button = d3.select("#button");
//
//button.on("click", function() {
//
//  // Select the input element and get the raw HTML node
//  var inputElement = d3.select("#patient-form-input");
//
//  // Get the value property of the input element
//  var inputValue = inputElement.property("value");
//
//  console.log(inputValue);
//  console.log(tableData);
//
//  var filteredData = tableData.filter(person => person.bloodType === inputValue);
//
//  console.log(filteredData);
//
//  // BONUS: Calculate summary statistics for the age field of the filtered data
//
//  // First, create an array with just the age values
//  var ages = filteredData.map(person => person.age);
//
//  // Next, use math.js to calculate the mean, median, mode, var, and std of the ages
//  var mean = math.mean(ages);
//  var median = math.median(ages);
//  var mode = math.mode(ages);
//  var variance = math.var(ages);
//  var standardDeviation = math.std(ages);
//
//  // Then, select the unordered list element by class name
//  var list = d3.select(".summary");
//
//  // remove any children from the list to
//  list.html("");
//
//  // append stats to the list
//  list.append("li").text("datetime");
//  list.append("li").text(`Median: ${city}`);
//  list.append("li").text(`Mode: ${country}`);
//  list.append("li").text(`Variance: ${shape}`);
//  list.append("li").text(`Standard Deviation: ${durationMinutes}`);
//});









