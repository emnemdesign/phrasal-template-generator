var intro = alert("Let's make a story together!");

var colour = prompt("A colour (orange, indigo, etc.}");

var creature = prompt("A creature (dragon, moth, etc.");

var adjective = prompt("A creature (dragon, moth, etc.");

var verb = prompt("choose a past tense verb (ran, kissed etc");

var story = prompt("Which story would you like? Enter the letter below: 2)snacking b)escaping c)winning");

var storyA = function () {

  document.write("After snacking on " + adjective + "treats, the" + colour + "bellied" + creature + " " + verb + "for hours.");

};

var storyB = function () {

  document.write("Ameilia " + verb + "through the " + adjective + " " + colour + "nebula escaping the space " + creature + ".");
};

Var storyC = function () {

  document.write("Jackson chose his" + adjective + ", " + colour + creature + "and " + verb + "it to the table knowing he won.");
};

alert("Let's make a story together!");

if (story == "a" || story == "A") {
  storyA();
} else if (story == "b" || story == "B") {
  storyB();
} else if (story == "c" || story == "C") {
  storyC();
} else {
  document.write("You are no fun.");
};