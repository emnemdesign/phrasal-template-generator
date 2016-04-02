var popup = alert("Let's make a story together!");

var colour = prompt('A colour (orange, indigo, etc.)');

var creature = prompt('A creature (dragon, moth, etc.)');

var adjective = prompt('An adjective (beautiful, super, etc.)');

var verb = prompt('A past tense verb (ran, kissed etc.)');

var story = prompt('Which story would you like? Enter the letter below: \na)snacking \nb)escaping \nc)winning');

var storyA = function () {

  document.write('After snacking on ' + adj + ' treats, the ' + colour + ' bellied ' + creature + ' ' + past + ' for hours ');

};

var storyB = function () {

  document.write('Ameilia ' + past + ' through the ' + adj + ' ' + colour + ' nebula escaping the space ' + creature + '.');
};

var storyC = function () {

  document.write('Jackson chose his ' + adj + ' ' + colour + ' ' + creature + ' card and ' + past + ' it to the table knowing he won.');
};

alert("Let's make a story together!");

if (story == 'a' || story == 'A') {
  storyA();
} else if (story == 'b' || story == 'B') {
  storyB();
} else if (story == 'c' || story == 'C') {
  storyC();
} else {
  document.write('You are no fun.');
};
