const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function wakeDog(dog_name, breed){
	console.log(`Wake ${dog_name} the ${breed}`)
	return `Wake ${dog_name} the ${breed}`
}

// wakeDog("Xerox", "Border Collie")

function leashDog(dog_name, breed){
	console.log(`Leash ${dog_name} the ${breed}`)
	return `Leash ${dog_name} the ${breed}`
}

// leashDog("Boo Radley", "Pibble")

function walkToPark(dog_name, breed){
	console.log(`Walk to the park with ${dog_name} the ${breed}`)
	return `Walk to the park with ${dog_name} the ${breed}`
}

// walkToPark("Bunny", "Labrador")

function throwFrisbee(dog_name, breed){
	console.log(`Throw the frisbee for ${dog_name} the ${breed}`)
	return `Throw the frisbee for ${dog_name} the ${breed}`
}

// throwFrisbee("Mary J. Blige", "Papillon")

function walkHome(dog_name, breed){
	console.log(`Walk home with ${dog_name} the ${breed}`)
	return `Walk home with ${dog_name} the ${breed}`
}

// walkHome("Santa Paws", "Husky")

function unleashDog(dog_name, breed){
	console.log(`Unleash ${dog_name} the ${breed}`)
	return `Unleash ${dog_name} the ${breed}`
}

function exerciseDog(dog_name, breed){
	// let arr_func = [
	// 	routine.forEach(function(func){
	// 	func(dog_name, breed)
	// 	})
	// ]
	return routine.map(fn => fn(dog_name, breed))
}

// exerciseDog("Esther", "Dalmation")