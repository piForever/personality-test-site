const sociability = [`sociability low aspects` , "sociability medium aspects", "sociability high aspects"]
const sociability = document.querySelectorAll('input[name="score1"]');
let selectedValue;
var lowSociability  ; 
var mediumSociability ; 
var highSocialibility ; 

function sociabilityInformation(selectedValue) {
if (selectedValue=== "low") {
     lowSociability = sociability[0];
}   else if (selectedValue==="medium") {
     mediumSociability = sociability[1];
} else {
     highSocialibility = sociability[2];

}
}

for (const rb1 of sociability) {
    if (rb1.checked) {
        selectedValue = rb1.value;
        break;
    }
}

sociabilityInformation(selectedValue);


// otra manera de chequear el seleccionado 
/* if(document.getElementById('low').checked) {

}else if(document.getElementById('medium').checked) {

}else {
 ;

} 
*/


let liderazgo = document.getElementById('liderazgo');
liderazgo.innerHTML = `<span>${mediumSociability}</span>`;

    