function scuberGreetingForFeet(distance) {
  console.log("== scuberGreetingForFeet ==")
  if (distance <= 400) {
    let result = "This one is on me!";
  } else if ((distance > 2000) && (distance <= 2500)) {
    let result = "I will gladly take your thirty bucks.";
  } else if (distance > 2500) {
    let result = "No can do.";
  }
}

function ternaryCheckCity(city) {
  console.log("== ternaryCheckCity ==")
  city === "NYC"
    ? result = "Ok, sounds good."
    : result = "No go."
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
