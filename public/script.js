
const form  = document.querySelector('form');
const textaera = document.querySelector('textarea');
const generateButton = document.querySelector('input[name="generate"]')

const fetchRandomText = function(callback){
    fetch('http://localhost:3000/randomText')
    .then(response =>  response.text())
    .then(callback)
    .catch((e) => {
        console.log(e);
    });
}

const addRandomText = function(jsonRandomText){
   
    fetch('http://localhost:3000/randomText', {
        method: 'POST',
        headers: {'Content-Type' : 'application/json; charset=UTF-8'},
        body: JSON.stringify(jsonRandomText)
    })
    .then((response) => response.text())
    .then(console.log('Texte ajouté'))
    .catch(() => console.error("Impossible d'envoyer le random Texte"));

}

const displayRandomText = function(randomText){
    textaera.innerText = randomText;
}

generateButton.addEventListener('click', function(e){
    e.preventDefault();

    fetchRandomText( ( randomText ) => displayRandomText(randomText) );
})

form.addEventListener('submit', function(e){
    e.preventDefault();
    
    const content = e.target.elements.randomText;

    const jsonRandomText = {
        content: content.innerHTML
    };
    
    addRandomText(jsonRandomText);
})

fetchRandomText( ( randomText ) => displayRandomText(randomText) );