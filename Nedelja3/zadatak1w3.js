
function maxNumber(a, b, c) {
    if (a > b && a > c) return a;
    if (b > a && b > c) return b;
    if (c > b && c > a) return c;
    else return 'Equal max values of two or more';



}
console.log(maxNumber(65, 69, 65));