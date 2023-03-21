
console.log("~~~~~~~~~~~~~~~~~~~~~Step 1~~~~~~~~~~~~~~~~~~~~~~~~~")

function tcsEligiblity(gradScore,hscScore,sscScore,name){
    console.log(`candidate = "${name}"`);
    var tcsEligiblity = gradScore >= 70 || hscScore >= 80 || sscScore >= 90 ?`Congrats "${name}" you are eligible for TCS Interview`:`Unfortunetly "${name}" you are not eligible for TCS Interview`;
    return tcsEligiblity
}
var result = tcsEligiblity(80,86,79,"Aditya");
console.log(result);
var result = tcsEligiblity(70,65,55,"Radhika");
console.log(result);
var result = tcsEligiblity(60,79,88,"Sushama");
console.log(result);