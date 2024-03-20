function sampleCost(freeSample) {
  if (freeSample <= 400){
      return 'This one is on me!';
  }
  else if (freeSample > 400 && freeSample < 2000){
      return 'That will be twenty bucks.';
  }
  else if (freeSample >= 2000 && freeSample <= 2500){
      return 'I will gladly take your thirty bucks.';
  }
  else if (freeSample > 2500){
      return 'No can do.';
  }
  else {
      return 'Invalid input.';
  }
}
function scuberGreetingForFeet(distance) {
  return sampleCost(distance);
}

function ternaryCheckCity(city){
    if (city === 'NYC'){
        return 'Ok, sounds good.';
    }
    else {
        return 'No go.';
    }
}
function scuberGreetingForFeet(city){
     return sampleCost(city);
}

function switchOnCharmFromTip(tip){
  switch(tip) {
    case 'generous':
        return 'Thank you so much.';
    case 'not as generous':
        return 'Thank you.';
    default:
        return 'Bye.';
}
  }

function scuberGreetingForFeet(tip){
  return sampleCost(tip);
}