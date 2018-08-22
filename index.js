// add solution here

var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
var facts = [
   "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
   "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];


function theBeatlesPlay(musicians,instruments){
  var newArry = [];
  for(var i=0; i < musicians.length; i++){
    newArry.push(musicians[i] + " plays " + instruments[i]);
  }
  return newArry;
}

function johnLennonFacts(){
    var ArrayTest = [];
    for(var i = 0; i < facts.length; i++){
      ArrayTest.push(facts[i]+"!!!")
    }
}
