let n = 5;
for (let i = 1; i <= n; i++) {
    sharp = "";
    for (let j = 0; j <= n - i; j++) {
        sharp += " ";
    }
    for (let k = 1; k <= i; k++) {
        sharp += "#";
    }
    for (let l = 0; l < 1; l++) {
        sharp += " ";
    }
    for (let dz = 0; dz < i; dz++) {
        sharp += "" + "#";
    } console.log(sharp)
}
