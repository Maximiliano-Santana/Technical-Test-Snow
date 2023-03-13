let heights = [0, 1, 0, 2, 1, 0, 3, 2, 1, 1, 1, 5, 0, 1];
let maxHeightWalls = [];
let snowHeight;
let max = 0;
let snow = 0;

function SnowMeter() {
    heights.forEach(function(wallHeight, i) {
        if (wallHeight > max && wallHeight > heights[i + 1]) {
            max = wallHeight;
            maxHeightWalls.push(i);
        }
    });
    max = 0;
    let maxHeightsAux = [];
    for (var i = heights.length; i > 0; i--) {
        if (heights[i] > max && heights[i] > heights[i - 1]) {
            max = heights[i];
            maxHeightsAux.unshift(i);
        }
    }
    maxHeightWalls = maxHeightWalls.concat(maxHeightsAux);



}

SnowMeter();