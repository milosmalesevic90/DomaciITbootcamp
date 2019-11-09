



function lifeSupply(a, b) {
    if (a > 0 && b > 0) return a * (100 - b) * 12;
    else return "Error";
}


console.log(lifeSupply(30, 30))