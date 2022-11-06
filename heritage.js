class Person {
    constructor(_name, _age) {
        this.name = _name;
        this.age = _age;
    }

    describe() {
        console.log(`On m'appelle ${this.name} et j'ai ${this.age} ans.`)
    }
}

class Programer extends Person {
    constructor(_name, _age, _yearsOfExperience) {
        super(_name, _age);

        // Attribut propre au programmeur
        this.yearsOfExperience = _yearsOfExperience;
    }

    // Seul les programmeur on accès à cette méthode
    code() {
        console.log(`${this.name} est en train de coder.`);
    }
}

let person1 = new Person("Jeff", 45);
let programer1 = new Programer("Dom", 32, 7);

console.log(person1);
console.log(programer1);
console.log(programer1.describe()); // fonctionne car c'est une méthode héritée de personne
programer1.code(); // fonctionne car c'est un programmeur
// person1.code(); // erreur car ce n'est pas un programmeur