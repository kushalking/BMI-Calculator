
document.getElementById("BMIform").addEventListener("submit",function(e){
    e.preventDefault();
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
    const feet = document.getElementById("feet").value;
    const inch = document.getElementById("inch").value;
    const weight = document.getElementById("weight").value;
    const result = document.getElementById("res");


    const height = ((parseInt((feet * 12)) + parseInt(inch)) * 0.0254);
    console.log(height);
    const BMI = (weight/(height * height));
    const BMIwhole = Math.round(BMI * 10)/10;

    console.log(typeof BMIwhole);
    let category = '';
    if (BMIwhole < 18.5) {
        category = 'Underweight';
    } else if (BMIwhole >= 18.5 && BMIwhole <= 24.9) { // Corrected condition
        category = 'Normal';
    } else if (BMIwhole >= 25 && BMIwhole <= 29.9) { // Corrected condition
        category = 'Overweight';
    } else {
        category = 'Obese';
    }

    let resultEl = "Your BMI is : " + BMIwhole + '<br>';
    resultEl += 'Your Category is : ' + category;

    result.innerHTML = resultEl;

})

