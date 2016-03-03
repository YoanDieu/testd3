
function family_tree_two(d3){
  var canvas = d3.select('body')
              .append('svg')
              .attr('width', 1500)
              .attr('height', 800)
              .attr('id', 'canvas')
              .append('g')
                  .attr('transform', 'translate(50,50)');

  var tree = d3.layout.tree()
            .size([700,1400]);

  d3.json("tree.json", function(data){
    var nodes = tree.nodes(data);
    var links = tree.links(nodes);

    var node = canvas.selectAll('.node')
              .data(nodes)
              .enter()
              .append('g')
              .attr('class', 'node')
              .attr('transform', function(d){ return "translate(" + d.y + "," + d.x + ")";});

    node.append('circle')
        .attr('r', function(d){ return d.value / 4 ;})
        .attr('fill', 'lightblue');

    node.append('text')
        .text(function(d){ return d.name ;});

    var diagonal = d3.svg.diagonal()
                    .projection(function(d){return [d.y, d.x]; });

    var canvas_id = 0;
    var allLinks = canvas.selectAll('.link')
          .data(links)
          .enter()
          .append('path')
          .attr('class', 'link')
          .attr('fill', 'none')
          .attr('stroke', '#ADADAD')
          .attr('stroke-width', 5)
          .attr('d', diagonal)
          .attr('id', function(){
                        canvas_id++;
                        return "link-" + canvas_id
                      }
               );

  for (i = 0 ; i < allLinks[0].length; i++){
    allLinks[0][i].addEventListener('click',
                                    function(e){
                                      d3.select("#" + e.target.getAttribute('id'))
                                      .attr('stroke', 'red');
                                    },
                                    false);
  }
  });
}
