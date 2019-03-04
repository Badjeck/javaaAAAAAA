'use strict';

/* // Utilisez les méthodes text, html, val, attr pour travailler avec le HTML suivant.
const h1text = $('h1').text();
console.log('h1text', h1text);

// Récupérez et logguez dans la console le contenu du titre de la page.
$('h1').text('My page title');

const articleHTML = $("#js-article").html;

// Récupérez et logguez dans la console le HTML de l'article.
$('#js-article').html(`
        <h2 > This is my article. </h2>
        <p> This is my article 's content.</p>
        <a href = "https://example.com"> Read more </a>
        `);



// Récupérez et logguez dans la console la valeur du champ de saisie avec l'id js-search.
const inputValue = $('#js-search').val();
console.log('valeur champ saisie', inputValue);

// Changez la valeur du champ de saisie à 'Beagles'
$('#js-search').val('Beagle'); */

// Sélectionnez le formulaire dans le DOM. Ajoutez un écouteur d'événements 'submit' au formulaire pour déclencher un événement à chaque fois que le formulaire est soumis. Quand ce formulaire est soumis, récupérez la valeur saisie dans le champ de recherche. Si la valeur saisie est égale à 'Chat', insérez le texte 'Miaou!' dans le <div> avec l'id js-search-result. Sinon dans ce même <div> insérez du HTML <p>Pas de resultats pour la recherche : <strong>' + keyword + '</strong></p>.

$('#js-search-form')[0].addEventListener('submit', (event) => {
    event.preventDefault();
    const inputValue = $('#js-search').val();

    if (inputValue == 'chat') {
        $('#js-search-result').html(`<p>MIOW MIOW NIGGERS</p>`);
    } else {
        $('#js-search-result').html(`<p>Pas de resultats pour la recherche : <strong>'` + inputValue + `'</strong></p>`);
    }

});