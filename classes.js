 /**
 * Classes JavaScript
 */

// syntax
class Square {
    // constructeur de la classe
    constructor(_width) {
        this.width = _width;
        this.height = _width;
    }

    // méthode
    squareWidth() {
        return this.width;
    }

    // getter
    get area() {
        return this.width * this.height;
    }

    // setter
    set area(newArea) {
        this.width = Math.sqrt(newArea);
        this.height = this.width;
    }

    // méthode static
    /**
     *
     *Méthode comprenant l'ensemble des fonctionalités utilitaires (fonctionalités de bases, ne demandant pas de générer une instance la classe) Les méthodes statiques ne sont pas disponibles sur les instances d'une classe mais sont appelées sur la classe elle-même. Les méthodes statiques sont généralement des fonctions utilitaires (qui peuvent permettre de créer ou de cloner des objets par exemple). 
     * 
     */
    static compare(a, b) {
        // compare deux carré a et b
        return (a.width * a.height) === (b.width * b.height);
    }

    static isValidDimensions(width, height) {
        // vérifie si les dimensions son valides pour un carré
        return width === height;
    }
}


// Création d'un object (ou d'une instance) de la classe Rectangle
let square1 = new Square(5);

//===============================
// console.log(square1.isValidDimensions(2, 3));
/**
 * Le code ci-dessus génère une erreure car isValidDimensions et une méthode statique et ne peut donc pas être appelée sur une instance de la classe.
 */
//===============================

console.log(square1);
console.log(square1.squareWidth());  // renvoi la valeur de la méthode squareWidth()
square1.area = 16; // change l'aire du carré à travers le setter area
console.log(square1.area); // renvoi la valeur du setter area


// utilisation de la méthode statique compare pour comparer deux carrés
let square3 = new Square(8);
let square4 = new Square(8);
console.log("static", Square.compare(square3, square4));
