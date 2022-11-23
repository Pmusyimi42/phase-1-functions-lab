// Code your solution in this file!
const distanceFromHqInBlocks = function(pickUpLocation, distance, headquarters = 42){
  if (pickUpLocation >= headquarters){
    distance = pickUpLocation - headquarters;
    return distance;
  }
  else{
    distance = headquarters - pickUpLocation;
    return distance;
  }
}
const distanceFromHqInFeet = function(someValue){
  return distanceFromHqInBlocks(someValue)*264;
}
const distanceTravelledInFeet = function(startBlock, endBlock){
  if(endBlock > startBlock){
    return (endBlock - startBlock)*264;
  }
  else{
    return (startBlock - endBlock)*264;
  }
}
const calculatesFarePrice = function(startBlock, endBlock){
  let distance = distanceTravelledInFeet(startBlock, endBlock);
  if (distance <= 400){
    return 0;
  }
  else if (distance > 400 && distance <= 2000){
    return (distance - 400)* 0.02;
  }
  else if (distance > 2000 && distance <= 2500){
    return 25;
  }
  else{
    return "cannot travel that far";
  }
}

