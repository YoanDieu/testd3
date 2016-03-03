
function regions_france(d3){
  var width = 1000,
      height = 1000;

  var canvas = d3.select('body')
              .append('svg')
              .attr('width', width)
              .attr('height', height)
              .attr('id', 'canvas');

  d3.json("regions.geojson", function(data){

    var group = canvas.selectAll('g')
                .data(data.features)
                .enter()
                .append('g');

    var projection = d3.geo.mercator()
                      .scale(3000)
                      .translate([400,3200]);

    var path = d3.geo.path().projection(projection);

    var areas = group.append('path')
                  .attr('d', path)
                  .attr('class', 'area')
                  .attr('fill', 'steelblue');

    group.append('text')
          .attr('x', function(d) { return path.centroid(d)[0]; })
          .attr('y', function(d) { return path.centroid(d)[1]; })
          .text(function(d) {return d.properties.nom})
          .attr('text-anchor', 'middle')
          .attr('font-size', 10)
          .attr('fill', 'white');


    for (i = 0; i < areas[0].length; i++){
      areas[0][i].addEventListener('click',
                                    function(e){
                                      e.target.style.fill = "red";
                                    }
      );
      areas[0][i].addEventListener('mouseover',
                                    function(e){
                                      e.target.style.fill = "grey";
                                    }
      );

      areas[0][i].addEventListener('mouseout',
                                    function(e){

                                      if(getComputedStyle(e.target).fill != "rgb(255, 0, 0)"){
                                        e.target.style.fill = "steelblue";
                                      }

                                    }
      );
    }
  });
}
