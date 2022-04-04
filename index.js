// Code your solution in this file!
function distanceFromHqInBlocks(street) {
    let blocks=(42-street);
    return Math.abs(blocks);
}

function distanceFromHqInFeet(street) {
    return (distanceFromHqInBlocks(street) * 264)
}

function distanceTravelledInFeet(startBlock, endBlock) {
    let blockTravel = Math.abs(endBlock - startBlock);
    return (blockTravel * 264);
}

function calculatesFarePrice (startBlock, endBlock) {
    let distanceFeet = distanceTravelledInFeet(startBlock, endBlock);
    if (distanceFeet <=400) {
        return 0;
    }
    if (distanceFeet >=400 && distanceFeet <=2000 ) {
        return (distanceFeet - 400) *0.02
    }
    if  (distanceFeet >= 2000 && distanceFeet <=2500) {
        return 25;
    }
    if  (distanceFeet >= 2500) {
        return "cannot travel that far"
    }
    }
