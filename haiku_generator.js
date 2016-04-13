var haiku = require('./haiku');
var fs = require("fs");
var cmudictFile = readCmudictFile('./cmudict.txt');

function readCmudictFile(file){
  return fs.readFileSync(file).toString();
}
var words = {};
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
    
    if(!words[syllableCount]){
    	words[syllableCount] = [];};
    words[syllableCount].push(word);
  }); 
}

formatData(cmudictFile);


var haiku = haiku.createHaiku([[2, 1, 2], [2, 3, 2], [2, 1, 2]], words);
console.log(haiku);