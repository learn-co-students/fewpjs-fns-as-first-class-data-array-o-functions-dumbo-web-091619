
function wakeDog(dogName, dogBreed){
    const wakeString = `Wake ${dogName} the ${dogBreed}`;
    console.log(wakeString);
    return wakeString;
} 

function leashDog(dogName, dogBreed){
    const leashString = `Leash ${dogName} the ${dogBreed}`;
    console.log(leashString);
    return leashString;
} 

function walkToPark(dogName, dogBreed){
    const walkToParkString = `Walk to the park with ${dogName} the ${dogBreed}`;
    console.log(walkToParkString);
    return walkToParkString;
} 

function throwFrisbee(dogName, dogBreed){
    const throwFrisbeeString = `Throw the frisbee for ${dogName} the ${dogBreed}`;
    console.log(throwFrisbeeString);
    return throwFrisbeeString;
} 

function walkHome(dogName, dogBreed){
    const walkHomeString = `Walk home with ${dogName} the ${dogBreed}`;
    console.log(walkHomeString);
    return walkHomeString;
} 

function unleashDog(dogName, dogBreed){
    const unleashString = `Unleash ${dogName} the ${dogBreed}`;
    console.log(unleashString);
    return unleashString;
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(dogName, dogBreed){
    return routine.map(activity=>activity(dogName, dogBreed))
}