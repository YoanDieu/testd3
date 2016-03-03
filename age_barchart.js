
function age_barchart(d3){
d3.json('data_people.json', function(data){
  //code
  var canvas = d3.select('body').append('svg')
                .attr("width", 1000)
                .attr('height', 500)
                .attr('id', 'canvas');

  canvas.selectAll('rect')
      .data(data)
      .enter()
        .append('rect')
        .attr('width', function(d){ return d.age * 10; })
        .attr('height', 48)
        .attr('y', function(d, i){ return i * 50;})
        .attr('fill', 'blue');

  canvas.selectAll('text')
  .data(data)
  .enter()
      .append('text')
      .attr("fill", 'white')
      .attr('y', function(d, i){ return i * 50 + 28;})
      .text(function(d){ return d.name });

 });
}
