function makeDemo1() {
    d3.tsv("./examples-simple.tsv")
        .then(function (data) {
            d3.select('svg')
                .selectAll('circle')
                .data(data)
                .enter()
                .append('circle')
                .attr('r', 5)
                .attr('fill', function (d) {
                    console.log(d);
                    console.log("d['x'] -->" + d['x']);
                    console.log("d['y'] -->" + d['y']);
                    return 'red';
                })
                .attr('cx', function (d) { return d['x'] })
                .attr('cy', function (d) { return d['y'] });
        });
}