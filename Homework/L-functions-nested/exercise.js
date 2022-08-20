var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

function spellsUpperCase(name1, name2, name3, name4, name5){
    let mentorOne =  name1.toUpperCase();
    let mentorTwo =  name2.toUpperCase();
    let mentorThree =  name3.toUpperCase();
    let mentorFour =  name4.toUpperCase();
    let mentorFive =  name5.toUpperCase();

     return mentorOne + " " + mentorTwo + " " + mentorThree + " " + mentorFour + " " + mentorFive;
}

function greetMentors(){
    let nom1 = mentor1;
    let nom2 = mentor2;
    let nom3 = mentor3;
    let nom4 = mentor4;
    let nom5 = mentor5;

let msg = spellsUpperCase(nom1, nom2, nom3, nom4, nom5);

console.log(`HELLO: ${msg}`);

}

greetMentors();

/**  
function greetMentors(msg1, msg2, msg3, msg4, msg5){
    let storeMentorsValue1 = spellsUpperCase(msg1);
    let storeMentorsValue2 = spellsUpperCase(msg2);
    let storeMentorsValue3 = spellsUpperCase(msg3);
    let storeMentorsValue4 = spellsUpperCase(msg4);
    let storeMentorsValue5 = spellsUpperCase(msg5);

    //console.log(storeMentorsValue1 + storeMentorsValue2 + storeMentorsValue3 + storeMentorsValue4 + storeMentorsValue5);
    //console.log(`HELLO ${storeMentorsValue1} + ${storeMentorsValue2} + ${storeMentorsValue3} + ${storeMentorsValue4} + ${storeMentorsValue5}`)
    console.log(`HELLO ${storeMentorsValue1}`);
    console.log(`HELLO ${storeMentorsValue2}`);
    console.log(`HELLO ${storeMentorsValue3}`);
    console.log(`HELLO ${storeMentorsValue4}`);
    console.log(`HELLO ${storeMentorsValue5}`);

}

greetMentors(mentor1, mentor2, mentor3, mentor4, mentor5);
//console.log(result);

**/