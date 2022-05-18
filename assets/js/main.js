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
