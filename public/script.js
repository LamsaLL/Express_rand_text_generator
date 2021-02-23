
const form  = document.querySelector('form');
const textaera = document.querySelector('textarea');

const getRandomText = function(callback){
    fetch('http://localhost:3000/randomText')
    .then(response =>  response.text())
    .then(callback)
    .catch((e) => {
        console.log(e);
    });
}

const displayRandomText = function(randomText){
    textaera.innerText = randomText;
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    const buttonClicked = document.activeElement.name;

    if(buttonClicked === "generate"){
        getRandomText( ( randomText ) => displayRandomText(randomText) );
    }
    else{
        console.log('add random text');
    }
})

getRandomText( ( randomText ) => displayRandomText(randomText) );