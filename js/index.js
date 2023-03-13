let walls = [0, 1, 0, 2, 1, 0, 3, 2, 1, 1, 1, 5, 0, 1];
let maxHeights = [];
let snowHeight;
let max = 0;
let snow = 0;

function SnowMeter() {
    console.log(walls);
    walls.forEach(function(wallHeight, i) {
        if (wallHeight > max && wallHeight > walls[i + 1]) {
            max = wallHeight;
            maxHeights.push(i);
        }
    });
    max = 0;
    let maxHeightsAux = [];
    for (var i = walls.length; i > 0; i--) {
        if (walls[i] > max && walls[i] > walls[i - 1]) {
            max = walls[i];
            maxHeightsAux.unshift(i);
        }
    }
    maxHeights = maxHeights.concat(maxHeightsAux);
    console.log(maxHeights);


}

SnowMeter();