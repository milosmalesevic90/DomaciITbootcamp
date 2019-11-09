let array = [1, 5, 7, 15, 16, 55];
let niz2 = [1, 5, 7, 15, 16, 55, 85];
let niz1 = [1, 5, 7, 15, 16, 55, 12, 65];




function divisibleByFive(arr) {

    arr.forEach(element => {
        if (element % 5 == 0) {
            console.log(element);
        }

    });


}
divisibleByFive(array)
divisibleByFive(niz1)