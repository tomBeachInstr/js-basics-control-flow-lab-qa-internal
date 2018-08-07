function scuberGreetingForFeet(distance) {
  console.log("== scuberGreetingForFeet ==");
  let result;
  if (distance <= 400) {
    result = "This one is on me!";
  } else if ((distance > 2000) && (distance <= 2500)) {
    result = "I will gladly take your thirty bucks.";
  } else if (distance > 2500) {
    result = "No can do.";
  }
  return result;
}

function ternaryCheckCity(city) {
  console.log("== ternaryCheckCity ==")
  let travel;
  city === "NYC"
    ? travel = "Ok, sounds good."
    : travel = "No go."
  return travel;
}

function switchOnCharmFromTip(tip) {
  console.log("== switchOnCharmFromTip ==")
  switch(tip) {
      case "generous":
          result = "Thank you so much."
          break;
      case !"generous":
          result = "Thank you."
          break;
      default:
          result = "Bye."
  }
}

scuberGreetingForFeet(200);
ternaryCheckCity("NYC");
switchOnCharmFromTip("generous");
