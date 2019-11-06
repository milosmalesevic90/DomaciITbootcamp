function pizzaPrice(price, r) {
    return price / (r * r * Math.PI) + ' Din/cm';

}

console.log(pizzaPrice(890, 26));
