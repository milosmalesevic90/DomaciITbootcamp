

let dateTimeNow = new Date();
console.log(dateTimeNow);

let hours = dateTimeNow.getHours();
let minutes = dateTimeNow.getMinutes();
let seconds = dateTimeNow.getSeconds();
let timeStampString = `${hours}:${minutes}:${seconds}`;




const orderBtnClassName = '.btn-order';
const orderButtons = document.querySelectorAll(orderBtnClassName);
console.log(orderButtons);
const anyThingCounter = document.querySelector('#counter');
var brojac = 0;



orderButtons.forEach(button => {
    button.addEventListener('click', function () {
        orderButton(button);
    });
});

function orderButton(element) {
    console.log(element);
    brojac++;
    anyThingCounter.innerHTML = brojac;
}


const naruciodmaclass = '.btn-order-now';
const naruciodmaButtons = document.querySelectorAll(naruciodmaclass);
console.log(naruciodmaButtons);

naruciodmaButtons.forEach(button => {
    button.addEventListener('click', function () {
        izbaciporuku(button)


    });
});


function izbaciporuku(sms) {
    console.log(sms);
    if(brojac>0){
    document.getElementById("counter").innerHTML = `Narucili ste   ${brojac}   pica   Vreme   ${timeStampString}`;}
    else{
        document.getElementById("counter").innerHTML = "Greska";
    }

    return brojac = 0;
}

