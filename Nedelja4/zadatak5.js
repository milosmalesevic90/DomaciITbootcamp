class Sastojci {
    constructor(sastojak, kolicina, cena) {
        this.sastojak = sastojak;
        this.kolicina = kolicina;
        this.cena = cena;
    }
   
    

}

let sastojak1 = new Sastojci('Meso', 1, 500);
let sastojak2 = new Sastojci('Jaja', 1, 15);
let sastojak3 = new Sastojci('Krompir', 1, 50);
let sastojak4 = new Sastojci('SO', 1, 10);
let sastojak5 = new Sastojci('Kecap', 1, 30);
let sastojak6 = new Sastojci('Kupus', 1, 23);


class Recepti {
    constructor(recept, tezina) {
        this.recept = recept;
        this.tezina = tezina;

    } 
    constructor(recept, tezina, sastojci) {
        this.recept = recept;
        this.tezina = tezina;
        this.sastojci = sastojci;

    }
}

let recept0 = new Recepti('Spagete', 'Medium')
let recept1 = new Recepti('Spagete', 'Medium', ['spagete', 'paradajiz', sastojak1, sastojak4, 'vegeta'])
let recept2 = new Recepti('Jaje na oko:)', 'Hard', [sastojak2, sastojak4])
let recept3 = new Recepti('Musaka', 'Medium', [sastojak3, sastojak2, sastojak1, sastojak4, 'vegeta', 'pavlaka'])
let recept4 = new Recepti('Sarme', 'Hard', [sastojak6, 'slanina', sastojak1, sastojak4])
let recept5 = new Recepti('Sendvic', 'Eazy', ['sunka', 'paradajiz', 'hleb', sastojak5])




function receptCena(recept) {
    let sum = 0;
    for (let i = 0; i < recept.sastojci.length; i++)
      if(recept.sastojci[i].cena>0 && recept.sastojci[i].kolicina>0)
        sum += recept.sastojci[i].cena * recept.sastojci[i].kolicina;
    return sum;

}
console.log(receptCena(recept1))