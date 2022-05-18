let quality = document.getElementById('quality');
let output1 = document.getElementById('output1');
let output2 = document.getElementById('output2');
let number = document.getElementById('number');

let checkAirQuality = () => {
    number.innerHTML = quality.value;
    if (quality.value <= 50) {
        output1.innerHTML = "Level of health concern: Good ";
        output2.innerHTML = " Level of health effect: Little or no risk";
        document.body.style.backgroundColor = "green";
    }
    else if (quality.value > 50 && quality.value <= 100) {
        output1.innerHTML = "Level of health concern: Moderate";
        output2.innerHTML = "Level of health effect: Acceptable quality";
        document.body.style.backgroundColor = "yellow";
    }

    else if (quality.value > 100 && quality.value <= 150) {
        output1.innerHTML = "Level of health concern: Unhealthy for sensitive groups ";
        output2.innerHTML = "Level of health effect: Generable publics not likely affected";
        document.body.style.backgroundColor = "orange";
    }
}

/*-----------LEV 2.3-------------*/

let difference = (banana) => {
    let palmas = banana - 27;
    if (banana > 27) {
        return palmas * 2;
    }
    else {
        return palmas;
    }
}

console.log(difference(35));
console.log(difference(74));
console.log(difference(123));

/*------------LEV 2.4------------*/

let summe = (zahl1, zahl2) => {
    if (zahl1 != zahl2) {
        zahl1 + zahl2;
        console.log(zahl1 + zahl2);
    }
    else if (zahl1 === zahl2) {
        (zahl1 + zahl2) * 5;
        console.log((zahl1 + zahl2) * 5);
    }
}

summe(15, 16);
summe(15, 15)



