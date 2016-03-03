
function donnut_chart(d3){
  var data = [10, 30, 50];
  var r = 300;

  var color = d3.scale.ordinal()
              .range(['red', 'green', 'orange']);

  var canvas = d3.select('body').append('svg')
                .attr('width', 1500)
                .attr('height', 1500)
                .attr('id', 'canvas');

  var group = canvas.append('g')
              .attr('transform', 'translate(300, 300)');

  var arc = d3.svg.arc()
            .innerRadius(200)
            .outerRadius(r);

  var pie = d3.layout.pie()
            .value(function(d){return d; });

  var arcs = group.selectAll('.arc')
              .data(pie(data))
              .enter()
              .append('g')
              .attr('class', 'arc');

  arcs.append('path')
      .attr('d', arc)
      .attr('fill', function(d){ return color(d.data); });


  arcs.append('text')
      .attr('fill', 'white')
      .text(function(d){ return d.data; })
      .attr('font-size', "2em")
      .attr('transform', function(d){ return "translate(" + arc.centroid(d) + ")";})
}
