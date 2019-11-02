


let n = 5;
for (let i = 1; i <= n; i++) {
    sharp = "";
    for (let j = 0; j <= n - i; j++) {
        sharp += " ";
    }
    for (let k = 1; k <= i; k++) {
        sharp += "#";
    }
    console.log(sharp);
}
