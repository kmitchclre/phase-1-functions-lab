// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
    return Math.abs(blocks - 42);
}


function distanceFromHqInFeet(block) {
    return distanceFromHqInBlocks(block) * 264;
}

function distanceTravelledInFeet(number1, number2) {
    let distance = Math.abs(number1 - number2);
    return distance * 264
}


function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);
    if (distance < 400) {
        return 0
    }
    else if (distance > 400 && distance < 2000) {
        return (distance - 400) * .02;
    }
    else if (distance > 2000 && distance < 2500) {
        return 25
    }
    else {
        return "cannot travel that far";
    }
}
