// add solution here

var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians,instruments){
  var newArry = [];
  for(var i=0; i < musicians.length; i++){
    newArry.push(musicians[i] + " plays " + "instruments[i]");
  }
  return newArry;
}
