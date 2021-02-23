//File for usefull functions

const generateRandomInt = function(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const generateRandomText = function(length){
    let res = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz.,?!- ';
    const charactersLength = characters.length;
    
    for (let i = 0; i < length; i++) {
        res += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    
    return res;
}

exports.generateRandomInt = generateRandomInt;
exports.generateRandomText = generateRandomText;