function circle_transition(d3){
  var canvas = d3.select('body')
                .append('svg')
                .attr('width', 500)
                .attr('height', 500)
                .attr('id', 'canvas');

  var circle = canvas.append('circle')
                .attr('cx', 50)
                .attr('cy', 50)
                .attr('r', 25);

  circle.transition()
    .duration(3000)
    .attr('cx', 150)
    .each('end', function(){
                    d3.select(this).attr('fill', 'red');
                  });
}
