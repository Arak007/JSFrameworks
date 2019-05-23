
//node js specific
const https = require(`https`);

function getInsult(){
    const url = `https://insult.mattbas.org/api/insult`;

    //instantiating an object
//aslong as code is successful, resolve will run. can define it anywhere, reject for any error
    return new Promise(function (resolve,reject) {
    https.get(url, function (client) {
        client.on(`data`,function(data){
            resolve(data.toString());
            });
        })
        .on(`error`), function(error) {
            reject(error);
        };
    });
}

getInsult()
.then(function (insult){
    console.log(insult)
})
.catch(function (insult){
    console.log(error)
})

//promis consists of properties, and we'll be using that
