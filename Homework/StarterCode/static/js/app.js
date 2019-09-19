function buildMetadata(sample) {

  // @TODO: Complete the following function that builds the metadata panel

  // Use `d3.json` to fetch the metadata for a sample
  //JS template literal = concatinating strings and examples ${} = this is argument that I want to concatinate
  //fucntion that returns a promis ---- a promis can either succeed( we get the Json we want) or fail (we dont)
  var SQLData = `/metadata/${sample}`;
  d3.json(SQLData).then(function(rsample){
        //create call back function
        var panal = d3.select("#sample-metadata")
        //clear out HTML
        panal.html("")
        //Object = this is a JS object (key value pairs)
            Object.entries(sample).forEach(([key, value]) => {panel.append("h6").text(`${key}: ${value}`);
    })
  });
  }

    // Use d3 to select the panel with id of `#sample-metadata`

    // Use `.html("") to clear any existing metadata

    // Use `Object.entries` to add each key and value pair to the panel
    // Hint: Inside the loop, you will need to use d3 to append new
    // tags for each key-value in the metadata.

    // BONUS: Build the Gauge Chart
    // buildGauge(data.WFREQ);

//function buildPlot() {
    /* data route */
//  var url = "/api/pals";
//  d3.json(url).then(function(response) {
//
//    console.log(response);
//
//    var data = response;
//
//    var layout = {
//      scope: "usa",
//      title: "Pet Pals",
//      showlegend: false,
//      height: 600,
//            // width: 980,
//      geo: {
//        scope: "usa",
//        projection: {
//          type: "albers usa"
//        },
//        showland: true,
//        landcolor: "rgb(217, 217, 217)",
//        subunitwidth: 1,
//        countrywidth: 1,
//        subunitcolor: "rgb(255,255,255)",
//        countrycolor: "rgb(255,255,255)"
//      }
//    };
//
//    Plotly.newPlot("plot", data, layout);
//  });
//}
//
//buildPlot();


/* data route */
//var url = "/data";
//
//function buildPlot() {
//  d3.json(url).then(function(response) {
//
//    console.log(response);
//    var trace = {
//      type: "scatter",
//      mode: "lines",
//      name: "Bigfoot Sightings",
//      x: response.map(data => data.year),
//      y: response.map(data => data.sightings),
//      line: {
//        color: "#17BECF"
//      }
//    };
//
//    var data = [trace];
//
//    var layout = {
//      title: "Bigfoot Sightings Per Year",
//      xaxis: {
//        type: "date"
//      },
//      yaxis: {
//        autorange: true,
//        type: "linear"
//      }
//    };
//
//    Plotly.newPlot("plot", data, layout);
//  });
//}
//
//buildPlot();





function buildCharts(sample) {

  // @TODO: Use `d3.json` to fetch the sample data for the plots
    d3.json(SQLData).then(function(data){
        var x_axis = data.otu_ids;
        var y_axis = data.sample_values;
        var size = data.sample_values;
        var color = data.otu_ids;
        var texts = data.otu_labels;
    })
    // @TODO: Build a Bubble Chart using the sample data
    var bubble = {
        x: x_axis,
        y: y_axis,
        text: texts,
        mode: `markers`,
        marker: {
            size: size,
            color: color
            }
        };
    var data = [bubble];
    var layout = {
        title: "Yukky Belly Buttons",
        xaxis: {title: "OTU ID"
    }
    };
    Plotly.newPlot("bubble", data, layout);

    // @TODO: Build a Pie Chart
    // HINT: You will need to use slice() to grab the top 10 sample_values,
    // otu_ids, and labels (10 each).  LOOK FOR SPECIFIC FORMAT FOR EACH IMPUT
    d3.json(SQLData).then(function(data){
    var values = data.sample_values.slice(0,10);
    var labels = data.otu_ids.slice(0,10);
    var display = data.otu_labels.slice(0,10);

    var pieChart = [{
    values: values,
    labels: labels,
    hovertext: display,
    type: "pie"
    }];
    Plotly.newPlot('pie', pieChart);
    })
    };


function init() {
  // Grab a reference to the dropdown select element  --- init = initialize
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("/names").then((sampleNames) => {
    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    const firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  //memory = RAM
  buildCharts(newSample);
  buildMetadata(newSample);
}

// Initialize the dashboard
init();
