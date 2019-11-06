
function minNumber(a, b, c) {

    if (a < b && a < c) return a;
    if (b < a && b < c) return b;
    if (c < b && c < a) return c;
    else return 'Equal min values of two or more';
}
function pizzaPrice(price, r) {

    return price / (r * r * Math.PI) + ' Din/cm';

}

function cheapPizza(price1, r1, price2, r2, price3, r3) {

    return minNumber(pizzaPrice(price1, r1) +' Pizza 1', pizzaPrice(price2,r2)+' Pizza 2', pizzaPrice(price3, r3)+' Pizza 3');
} 
  
     console.log(cheapPizza(890,23,792,18,1800,29))