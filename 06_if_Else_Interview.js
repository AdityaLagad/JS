console.log(`********************Question 1***********************`);

function tcsEligiblity(gradScore,hscScore,sscScore,name){
    console.log(`candidate = "${name}"`);
    if(gradScore >= 70 || hscScore >= 80 || sscScore >= 90){
        console.log(`Congrats "${name}" you are eligible for TCS Interview`);
    }
    else{
        console.log(`Unfortunately "${name}" you are not eligible for TCS Interview`);
    }
}
tcsEligiblity(80,86,79,"Aditya")
tcsEligiblity(70,65,55,"Neha")
tcsEligiblity(60,79,88,"Radhika")
tcsEligiblity(80,86,79,"OM")