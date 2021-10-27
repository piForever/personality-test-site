const words = new URLSearchParams(window.location.search);

const score1 = words.get('score1');
var lowSociability = "" ; 
var mediumSociability = "" ; 
var highSocialibility = "" ; 

const sociability = [`sociability low aspects` , "sociability medium aspects", "sociability high aspects"]
function sociabilityInformation(score1) {
if (score1=== "low") {
     lowSociability = sociability[0];
}   else if (score1==="medium") {
     mediumSociability = sociability[1];
} else {
     highSocialibility = sociability[2];

}
}


let liderazgo = document.getElementById('liderazgo');
liderazgo.innerHTML = `<span>${mediumSociability}</span>`;


``