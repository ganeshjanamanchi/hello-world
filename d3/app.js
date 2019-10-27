// /////////////////////////////////////////////////////////////
const canvas = d3.select('.canv');
const svg = canvas.append('svg')
    .attr('height', 500);
const rect = svg.selectAll('rect');


d3.json('http://127.0.0.1:5500/data')
    .then(function (data, error) {
        console.log(data);
        console.log(error);
    });


// /////////////////////////////////////////////////////////////




// /////////////////////////////////////////////////////////////
// const canvas = d3.select(".canv");
// const dataArray = [1, 9, 3, 6, 7, 8, 4, 5, 2, 10];
// const dataArray1 = [
//     { value: 1, width: 10 },
//     { value: 9, width: 2 },
//     { value: 3, width: 8 },
//     { value: 6, width: 5 },
//     { value: 7, width: 4 },
//     { value: 8, width: 3 },
//     { value: 4, width: 7 },
//     { value: 5, width: 6 },
//     { value: 2, width: 9 },
//     { value: 10, width: 1 },
// ]
// const svg = canvas.append("svg");
// const rect = svg.selectAll("rect");
// rect.data(dataArray1)
//     .enter().append("rect")
//     .attr("width", 24)
//     .attr("fill", function (d) {
//         var letters = '0123456789ABCDEF';
//         var color = '#';
//         for (var i = 0; i < 6; i++) {
//             color += letters[Math.floor(Math.random() * 16)];
//         }
//         return color;
//     })
//     .attr("height", function (d) {
//         return d.value * 15;
//     })
//     .attr("x", function (d, i) {
//         return i * 25;
//     })
//     .attr("y", function (d, i) {
//         return 150 - d.value * 15;
//     })
// /////////////////////////////////////////////////////////////