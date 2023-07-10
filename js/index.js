let heights = [0, 1, 0, 2, 1, 0, 3, 2, 1, 1, 1, 5, 0, 1];
let maxHeightWalls = [];
let maxHeightsAux = [];
let snowHeight;
let max = 0;
let snow = 0;
let wall = 0;

function SnowMeter() {
    calcularMaximos();
    for (var i = 0; i < maxHeightWalls.length; i++) {
        let leftWall = maxHeightWalls[i];
        let rightWall = maxHeightWalls[i + 1];
        if (heights[leftWall] <= heights[rightWall]) {
            snowHeight = heights[leftWall];
        } else if (heights[leftWall] >= heights[rightWall]) {
            snowHeight = heights[rightWall];
        } else {
            snowHeight = 0;
        }
        if (snowHeight != 0) {
            if (!(leftWall == rightWall)) {
                snow += (rightWall - (leftWall + 1)) * snowHeight;
            }
        }
        for (var j = leftWall + 1; j < rightWall; j++) {
            wall += heights[j]
        }
    }
    snow = snow - wall;
    console.log(`Nieve almacenada: ${snow}`);
}

function calcularMaximos() {
    heights.forEach(function(wallHeight, i) {
        if (wallHeight >= max && wallHeight > heights[i + 1]) {
            max = wallHeight;
            maxHeightWalls.push(i);
        }
    });
    max = 0;
    for (var i = heights.length; i > 0; i--) {
        if (heights[i] >= max && heights[i] > heights[i - 1]) {
            max = heights[i];
            maxHeightsAux.unshift(i);
        }
    }
    maxHeightWalls = maxHeightWalls.concat(maxHeightsAux);
}
SnowMeter();