
class Recepti {
    constructor(recept, tezina, sastojci) {
        this.recept = recept;
        this.tezina = tezina;
        this.sastojci = sastojci;

}
}

let recept1 = new Recepti('Spagete', 'Medium', ['spagete', 'paradajiz', 'meso', 'so', 'vegeta'])
let recept2 = new Recepti('Jaje na oko:)', 'Hard', ['jaja', 'so'])
let recept3 = new Recepti('Musaka', 'Medium', ['krompir', 'jaja', 'meso', 'so', 'vegeta', 'pavlaka'])
let recept4 = new Recepti('Sarme', 'Hard', ['kupus', 'slanina', 'meso', 'so'])
let recept5 = new Recepti('Sendvic', 'Eazy', ['sunka', 'paradajiz', 'hleb', 'kecap'])




var receptisve = [recept1,recept2,recept3,recept4,recept5]

function lakiRecepti() {
    receptisve.forEach(element => {
        if (element.tezina == 'Eazy') {
            console.log(element);
        }
    })
 
}

console.log(lakiRecepti())


