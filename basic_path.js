function basic_path(d3){

  var canvas = d3.select('body').append('svg')
              .attr("width", 500)
              .attr("height", 500)
              .attr('id', 'canvas');

  var data = [
    {x: 10, y: 10},
    {x: 50, y: 85},
    {x: 150, y: 200}
  ];

  var group = canvas.append("g")
              .attr('transform', 'translate(100, 100)');

  var line = d3.svg.line()
            .x(function(d){return d.x;})
            .y(function(d){return d.y;});

  group.selectAll('path')
      .data([data])
      .enter()
      .append('path')
      .attr("d", line)
      .attr('fill', 'none')
      .attr('stroke', '#000')
      .attr('stroke-width', 5);
}
