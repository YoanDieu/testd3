
function enter_circle(d3){
  var data = [10];

  var canvas = d3.select('body')
              .append("svg")
              .attr('width', 500)
              .attr('height', 500)
              .attr('id', 'canvas');

  var circle = canvas.append('circle')
                .attr('cx', 50)
                .attr('cy', 100)
                .attr('r', 25)
                .attr('fill', 'red');

  var circles = canvas.selectAll('circle')
                .data(data)
                .enter()
                    .append('circle')
                    .attr('cx', 50)
                    .attr('cy', 50)
                    .attr('r', 25)
                    .attr('fill', 'green');
}
