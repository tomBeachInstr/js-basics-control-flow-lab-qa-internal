function scuberGreetingForFeet(distance) {
  let greeting;
  if (distance <= 400) {
    greeting = 'This one is on me!';
  } else if ((distance > 2000) && (distance <= 2500)) {
    greeting = 'I will gladly take your thirty bucks.';
  } else if (distance > 2500) {
    greeting = 'No can do.';
  }
  return greeting;
}

scuberGreetingForFeet(400);
scuberGreetingForFeet(2000);
scuberGreetingForFeet(2500);

// ride is less than or equal to 400 feet
//   expect(scuberGreetingForFeet(199)).to.equal('This one is on me!');
// distance over 2000 feet
//   expect(scuberGreetingForFeet(2001)).to.equal('I will gladly take your thirty bucks.');
// does not allow rides over 2500 feet
//   expect(scuberGreetingForFeet(2501)).to.equal('No can do.');
