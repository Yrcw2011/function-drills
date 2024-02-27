const person =  {
    firstName: 'Mitch',
    lastName: 'Marsh',
   age: 'wouldnt you like to know'
}

console.log(person.lastName);
console.log(person['lastName']) //less common hardly ever needed

let meal = {  //destructuring the variable
    appetizer: 'onion rings',
    entree: 'sandwich',
    dessert: 'ice cream',
    drink: 'dr pepper'
}

let {dessert} = meal; //destructuring multible items
console.log(dessert);

let {appetizer, entree} = meal //you can change object if you replace the comma with a semi colon : 

console.log(appetizer, entree);

//for loop
for (key in meal){ //gives a list of the key names not object
    console.log(key) 
    console.log('${key} has the value of $(meal[key]');
}

meal.side = 'veggies, fries'// if you want to delete multible you will need to make meal side each time.
console.log(meal)

delete meal.side
console.log(meal)

class Dog {
    constructor(petName, breed, age) {
       this.name = petName
       this.breed = breed
       this.age = age
}

    greeting() {
        console.log('Hi, my name is ${this.name} and I am ${this.age}')
    }
}

let lassie = new Dog('Lassie', 'Collie', 3);
console.log(lassie.name)
console.log(lassie.greeting())
let beethoven = new Dog('Beethoven', "Saint Bernard", 10);
console.log(beethoven.name)

for (key in lassie) {
 console.log(lassie[key])
}
class puppy extends Dog {
    constructor(petName, breed, age, trainingLevel){
        super(petName, age)

        this.trainingLevel = trainingLevel
    }

    levelup(num){
        this.trainingLevel += num
        console.log(this.trainingLevel)
    }
}

let squirt = new Puppy('Squirt', .6, 20)
//console.log(Squirt) 
console.log(squirt.greeting())
console.log(squirt.levelUp(40))