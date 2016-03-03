
function basic_curve(d3){
  var canvas = d3.select('body').append('svg')
              .attr('width', 500)
              .attr('height', 500)
              .attr('id', 'canvas');


  var diagonal = d3.svg.diagonal()
                  .source({x: 10, y: 10})
                  .target({x: 300, y:300});

  canvas.append("path")
        .attr('fill', 'none')
        .attr('stroke', 'black')
        .attr("d", diagonal);
}
