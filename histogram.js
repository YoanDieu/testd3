
function histogram(d3){
  d3.json('ages.json', function(data){
    var width = 500;
    var height = 500;
    var padding = 50;
    var map = data.map(function(d){ return parseInt(d.age); });

    var histogram = d3.layout.histogram()
                    .bins(8)
                    (map);

    var y = d3.scale.linear()
            .domain([0, d3.max( histogram.map(function(d){return d.length;}) )])
            .range([0, height]);

    var x = d3.scale.linear()
            .domain([0, d3.max(map)])
            .range([0, width - 20]);

    var xAxis = d3.svg.axis()
                .scale(x)
                .orient('bottom');

    var canvas = d3.select('body')
                .append('svg')
                .attr('width', width)
                .attr('height', height + padding)
                .attr('id', 'canvas')
                  .append('g')
                  .attr('transform', 'translate(20,0)');

    var group = canvas.append('g')
                .attr('transform', 'translate(0,' + height + ')')
                .call(xAxis);

    var bars = canvas.selectAll('.bar')
                .data(histogram)
                .enter()
                .append('g');

    bars.append('rect')
        .attr('x', function(d){ return x(d.x) ; })
        .attr('y', function(d){ return height - y(d.y); })
        .attr('width', function(d){return x(d.dx) ; })
        .attr('height', function(d){return y(d.y) ; })
        .attr('fill', 'steelblue');

    bars.append('text')
        .attr('x', function(d){ return x(d.x) + (x(d.dx)/2) ;})
        .attr('y', function(d){ return 500 - y(d.y) + 20 ;})
        .attr('fill', '#fff')
        .attr('text-anchor', 'middle')
        .text(function(d){return d.y });
  });
}
