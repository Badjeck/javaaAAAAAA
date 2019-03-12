'use strict'

// affiche/cache le menu déroulant
$('#navbarDropdownMenuLink').click(() => {
    $('#navbarDropdownMenu').fadeToggle();
});

// déclare la variable date et y attribute l'année
var date = new Date().getFullYear();
// Ajoute la date au code html
$('#js-current-year').html(date);


// lorsque le bouton submit est cliqué
$('#js-bmi-form')[0].addEventListener('submit', (event) => {
    event.preventDefault();
    const pet_weight = $('#js-bmi-weight').val();
    const pet_height = $('#js-bmi-height').val();
    let pet_BMI = 0;
// on ajoute une classe alert
    $('#js-bmi-response').addClass("alert");
// si ce sont des chiffres
    if (Number.isInteger(pet_weight)==true && Number.isInteger(pet_height)==true) {
        pet_BMI = (pet_weight /((pet_weight/100) * (pet_height/100)))
// on affiche les resultats
            if (pet_BMI < 18.5) {
                $('#js-bmi-response').html(`<p>Your Body Mass Index is </p>` + pet_BMI + `. It is considered underweight`);
            } else if (pet_BMI >= 18.5 && pet_BMI <= 25) {
                $('#js-bmi-response').html(`<p>Your Body Mass Index is </p>` + pet_BMI + `. It is a healthy weight`);
            } else {
                $('#js-bmi-response').html(`<p>Your Body Mass Index is </p>` + pet_BMI + `. It is a considered overweight`);
            }       
    } else {
        $('#js-bmi-response').html(`<p>incorect value</p>`);
    }
});



