console.log(`~~~~~~~~~~~~~~~~~~ Question 1~~~~~~~~~~~~~~~~~~~`);

function voteEligiblity(age){
    if (age <= 0 || age > 120 ||age=="undefined"||age=="null" ) {
        console.log(`This age has Invalid Data:${age}`);
    }
    if (age >= 18 && age <= 120) {
        console.log(`congrats you are "${age}" eligible for voting`);
    }
    if (age > 0 && age < 18) {
        console.log(`Sorry you are "${age}" and not eligible for voting`);
    }
}
voteEligiblity(45)
voteEligiblity(17)
voteEligiblity(8)
voteEligiblity(20)
voteEligiblity(-10)
voteEligiblity(200)
voteEligiblity(0)
voteEligiblity("undefined")
voteEligiblity("null")

console.log(`~~~~~~~~~~~~~~~~~~ Question 1~~~~~~~~~~~~~~~~~~~`);
function gradeCalculation(marks){
    if (marks>=90 && marks<=100 && typeof marks==="number") {
        console.log(`Funtastic marks: "${marks}",Your grade is A+`);
    }
    if (marks>=75 && marks<90 && typeof marks==="number") {
        console.log(`Excellent marks: "${marks}",Your grade is A`);
    }
    if (marks>=50 && marks<75 && typeof marks==="number") {
        console.log(`Good marks: "${marks}",Your grade is B`);
    }
    if (marks>=35 && marks<50 && typeof marks==="number") {
        console.log(`Marks: "${marks}",Your grade is C,Need Improvement`);
    }
    if (marks<=0 ||marks>100||typeof marks=="string"||marks==null||isNaN(marks)) {
        console.log(`"${marks}" Please provide a valid marks`);
    }
}
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation("91");
gradeCalculation("Eighty");
gradeCalculation(NaN);
gradeCalculation(null);


