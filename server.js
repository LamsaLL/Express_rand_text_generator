const express = require('express');
const app = express();

const fs = require('fs');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

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
    
    fs.readFile('./db.json', 'utf8', function readFileCallback(err, data){
        if (err){
            console.log(err);
        } else {

            obj = JSON.parse(data); 
            obj.text.push(req.body); 
            json = JSON.stringify(obj); 

            fs.writeFile("./db.json", json, 'utf8', function (err) {
                
                if (err) {
                    console.log("An error occured while writing JSON Object to File.");
                    return console.log(err);
                }
             
                console.log("JSON file has been saved.");
            });
        }
        });

    res.end('POOOOST');
})


app.listen(port, () => {
    console.log(`Server started on port ${port}`)
});


