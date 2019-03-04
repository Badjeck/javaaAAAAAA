
// Utilisez les méthodes text, html, val, attr pour travailler avec le HTML suivant.


// Récupérez et logguez dans la console le contenu du titre de la page.
const h1text = $('h1').text();

// Changez le contenu du titre de la page à 'My page title'.
const h1text = $('h1').text('My page title');

// Récupérez et logguez dans la console le HTML de l'article.
const articleHTML = $('#js-article').html();

/*Changez le contenu de l'article à
<h2>This is my article.</h2>
<p>This is my article's content.</p>
<a href="https://example.com">Read more</a>*/
$('js-article').html(`
<h2>This is my article.</h2>
<p>This is my article's content.</p>
<a href="https://example.com">Read more</a>
`);

// Récupérez et logguez dans la console la valeur du champ de saisie avec l'id js-search.
const inputValue = $('#js-search').val();

// Changez la valeur du champ de saisie à 'Beagles'
$('#js-search').val('Beagle');

// Récupérez et logguez dans la console la valeur du placeholder du champ de saisie.

// Changez la valeur du placeholder du champ de saisie à 'Search'

//TRAVAIL PRATIQUE

$('#js-serach-form')[0].addEventListener('submit', (event) => {
    event.preventDefault();
});