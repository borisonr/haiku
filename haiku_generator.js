var haiku = require('./haiku');
var fs = require("fs");
var cmudictFile = readCmudictFile('./cmudict.txt');

function readCmudictFile(file){
  return fs.readFileSync(file).toString();
}
var words = [];
function formatData(data){    
   var lines = data.toString().split("\n"),
       lineSplit
       last = lines.pop();
   lines.forEach(function(line){    
    lineSplit = line.split("  ");    
    var word = lineSplit[0];
    var phonemes = lineSplit[1].split(" ");
    var syllableCount = 0;
    phonemes.forEach(function(phoneme){
    	if(phoneme.match(/\d/)){
    		syllableCount++;
    	}
    });
    words[syllableCount].push(word);
    
    //console.log("The word " + lineSplit[0] + " has this phoneme    layout: " + lineSplit[1]); 
  });   
}

formatData(cmudictFile);

haiku.createHaiku([[5], [7], [5]], words);