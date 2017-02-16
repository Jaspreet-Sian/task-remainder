// var Bars = new Meteor.Collection(null);
// Session.setDefault('barChartSort','none');
// Session.setDefault('barChartSortModifier',undefined);
Template.barChart.onCreated(function(){
  var tmpl= this;
  tmpl.autorun(function(){
    tmpl.subscribe('taskRecord');
  })
// var data=fetchData();
  // if(Bars.find({}).count() === 0){
  // 	for(i = 0; i < 5; i++){
  // 		Bars.insert({
  // 			value:Math.floor(Math.random() * 25)
  // 		});
  //   }
  // }
});


Template.barChart.onRendered(function(){
//
// 	//Width and height
// 	var w = 600;
// 	var h = 250;
//   var margin= {top : 20, bottom : 20, right: 20, left: 30};
// 	var xScale = d3.scale.ordinal()
// 					.rangeRoundBands([0, w], 0.05);
//
// 	var yScale = d3.scale.linear()
// 					.range([0, h]);
//
//       var y = d3.scale.linear()
//         					.range([h, 0]);
//
// console.log(yScale,"yScale");
//   var xAxis = d3.svg.axis()
//                 .scale(xScale)
//                 .orient("bottom");
//
//   var yAxis = d3.svg.axis()
//                     .scale(y)
//                     .orient("left")
//                     .ticks(10);
//
// 	//Define key function, to be used when binding data
// 	var key = function(d) {
// 		return d._id;
// 	};
//
// 	//Create SVG element
// 	var svg = d3.select("#barChart")
//         .attr("transform", "translate(0"   + ",0)")
// 				.attr("width", w + margin.left + margin.right)
// 				.attr("height", h + margin.top + margin.bottom);
//
//
// 	Deps.autorun(function(){
// 		var modifier = {fields:{value:1}};
// 		var sortModifier = Session.get('barChartSortModifier');
// 		if(sortModifier && sortModifier.sort)
// 			modifier.sort = sortModifier.sort;
//
// 		var dataset = Bars.find({},modifier).fetch();
//
// 		//Update scale domains
// 		xScale.domain(d3.range(dataset.length));
// 		yScale.domain([0, d3.max(dataset, function(d) { return d.value; })]);
//
// 		//Select…
// 		var bars = svg.selectAll("g")
//                 .attr("transform", "translate("+ margin.left+ "," + h  + ")")
// 			.data(dataset, key)
//
//
//       svg.append("g")
//           .attr("class", "x axis")
//           .attr("transform", "translate("+ margin.left + "," + h  + ")")
//           .call(xAxis);
//
//       svg.append("g")
//           .attr("class", "y axis")
//           .attr("transform", "translate("+ margin.left + ",0)")
//           .call(yAxis);
//
// 		//Enter…
// 		bars.enter()
// 			  .append("rect")
// 			  .attr("x", w)
// 			  .attr("y", function(d) {
// 				return h - yScale(d.value);
// 			})
// 			.attr("width", xScale.rangeBand())
// 			.attr("height", function(d) {
// 				return yScale(d.value);
// 			})
// 			.attr("fill", function(d) {
// 				return "rgb(0, 0, " + (d.value * 10) + ")";
// 			})
// 			.attr("data-id", function(d){
// 				return d._id;
// 			})
//       .attr("transform", "translate("+ margin.left + ",0)");
//
// 		//Update…
// 		bars.transition()
// 			// .delay(function(d, i) {
// 			// 	return i / dataset.length * 1000;
// 			// }) // this delay will make transistions sequential instead of paralle
// 			.duration(500)
// 			.attr("x", function(d, i) {
// 				return xScale(i);
// 			})
// 			.attr("y", function(d) {
// 				return h - yScale(d.value);
// 			})
// 			.attr("width", xScale.rangeBand())
// 			.attr("height", function(d) {
// 				return yScale(d.value);
// 			}).attr("fill", function(d) {
// 				return "rgb(0, 0, " + (d.value * 10) + ")";
// 			});
//
// 		//Exit…
// 		bars.exit()
// 			.transition()
// 			.duration(500)
// 			.attr("x", -xScale.rangeBand())
// 			.remove();
//
//
// 		//Update all labels
//
// 		//Select…
// 		var labels = svg.selectAll("text")
// 			.data(dataset, key);
//
// 		//Enter…
// 		labels.enter()
// 			.append("text")
// 			.text(function(d) {
// 				return d.value;
// 			})
// 			.attr("text-anchor", "middle")
// 			.attr("x",  function(d, i) {
// 				return xScale(i) + xScale.rangeBand() / 2;
//       })
// 			.attr("y", function(d) {
// 				return h - yScale(d.value) + 14 ;
// 			})
// 		   .attr("font-family", "sans-serif")
// 		   .attr("font-size", "11px")
// 		   .attr("fill", "white")
//        .attr("transform", "translate("+ margin.left + ",0)")
//        .text(function(d) {
//    				return d.value;
//    			});
//
// 		// //Update…
// 		// labels.transition()
// 		// 	// .delay(function(d, i) {
// 		// 	// 	return i / dataset.length * 1000;
// 		// 	// }) // this delay will make transistions sequential instead of paralle
// 		// 	.duration(500)
// 		// 	.attr("x", function(d, i) {
// 		// 		return xScale(i) + xScale.rangeBand() / 2;
// 		// 	}).attr("y", function(d) {
// 		// 		return h - yScale(d.value) + 14;
// 		// 	}).text(function(d) {
// 		// 		return d.value;
// 		// 	});
//
// 		//Exit…
// 	// 	labels.exit()
// 	// 		.transition()
// 	// 		.duration(500)
// 	// 		.attr("x", -xScale.rangeBand())
// 	// 		.remove();
// 	 });

// console.log(data);
  var margin= {
    top: 20,
    left: 50,
    bottom: 50,
    right: 20
  };
  var width=600 - margin.left - margin.right
  , height=300 - margin.top - margin.bottom;
  var chart= d3.select("svg");
  var xScale= d3.scale.ordinal()
                      .rangeRoundBands([0, width], .05);

  var yScale=d3.scale.linear()
                     .range([height,0]);

  var xAxis= d3.svg.axis()
                    .scale(xScale)
                    .orient("bottom");

  var yAxis= d3.svg.axis()
                   .scale(yScale)
                   .orient("left")
                   .ticks(10);

  var svg = d3.select("#barChart")
              .attr("width", width + margin.left + margin.right)
              .attr("height", height + margin.top + margin.bottom)
              .append("g")
              .attr("transform","translate(" + margin.left + "," + margin.top + ")");

      svg.append("g")
         .attr("class", "x axis")
         .attr("transform", "translate(0," + height + ")")
         .call(xAxis)
         .selectAll("text")
         .style("text-anchor", "end")
         .attr("dx", "-.8em")
         .attr("dy", "-.55em")
         .attr("transform", "rotate(-90)" );

      svg.append("g")
         .attr("class", "y axis")
         .call(yAxis)
         .append("text")
         .attr("transform", "rotate(-90)")
         .attr("y", 6)
         .attr("dy", ".71em")
         .style("text-anchor", "end")
         .text("hours (hh:mm)");


});
