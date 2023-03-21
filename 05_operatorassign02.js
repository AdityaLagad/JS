console.log("~~~~~~~~~~~~~~~~~~~~~Step 1~~~~~~~~~~~~~~~~~~~~~~~~~");

function maleMarraigeEligiblity(gender,age,name){
    console.log(`Candidate = "${name}"`);
    var result = gender =="Male" && age >=21 ? `Hey "${name}" you are eligible for marraige`:`Hey "${name}" you are not eligible for marraige`;
    return result;
}
var result = maleMarraigeEligiblity("Male",25,"Bill Gates")
console.log(result);

var result = maleMarraigeEligiblity("Male",17,"Steve Jobs")
console.log(result);

console.log("~~~~~~~~~~~~~~~~~~~~~Step 1~~~~~~~~~~~~~~~~~~~~~~~~~")

function femaleMarraigeEligiblity(gender,age,name){
    console.log(`candidate = ${name}`);
    var foo = gender =="Female" && age >=21 ? `Hey "${name}" you are eligible for marraige`:`Hey "${name}" you are not eligible for marraige`;
    return foo
}
var foo = femaleMarraigeEligiblity("Female",16,"Jenifer");
console.log(foo);

var  foo = femaleMarraigeEligiblity("Female",27,"Malinda Gates");
console.log(foo);