
function cluster(d3){
  var width = 800;
  var height = 600;

  var canvas = d3.select('body')
              .append('svg')
              .attr('width', 1500)
              .attr('height', 800)
              .attr('id', 'canvas')
              .append('g')
                  .attr('transform', 'translate(50,50)');

  var pack = d3.layout.pack()
              .size([width, height - 50])
              .padding(10);

  d3.json("tree.json", function(data){
    var nodes = pack.nodes(data);
    var node = canvas.selectAll('.node')
                .data(nodes)
                .enter()
                .append('g')
                .attr('class', 'node')
                .attr('transform', function(d){ return "translate(" + d.x + "," + d.y + ")";});

    node.append('circle')
        .attr('r', function(d){ return d.r; })
        .attr('fill', 'steelblue')
        .attr('opacity', 0.15)
        .attr('stroke', function(d){return d.children ? "black" : "lightblue";})
        .attr('stroke-width', "2");

    node.append('text')
        .text(function(d){return d.children ? "" : d.name;})
        .attr('fill', 'white')
        .attr('font-size', "14px")
        .attr('font-weight', 'bold');
  });
}
