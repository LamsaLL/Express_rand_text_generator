const express = require('express');
const app = express();

const fs = require('fs');

const port = 3000;
const { generateRandomInt , generateRandomText} = require('./utils.js') // same as myObj1 = exports.prop1;  myObj2 = exports.prop2; 

//Search the file we want to Get is in the public directory
//Means that i can Get any file from public directory
app.use(express.static('public'));

app.get('/randomText', function(req, res){

    const randomLength = generateRandomInt(10, 300); 
    const randomText = generateRandomText(randomLength);

    res.set('Content-Type', 'text/plain')
    res.end(randomText);
})

app.post('/randomText', function(req, res){
    
})


app.listen(port, () => {
    console.log(`Server started on port ${port}`)
});


