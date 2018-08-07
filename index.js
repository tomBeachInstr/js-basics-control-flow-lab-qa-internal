function scuberGreetingForFeet(distance) {
  console.log("== scuberGreetingForFeet ==")
  if (distance <= 400) {
    result = "free sample"
  } else if ((distance > 2000) && (distance <= 2500)) {
    result = "charges 30 dollars"
  } else if (distance > 2500) {
    result = "does not allow"
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
