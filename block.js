function sayHi(name)
{
 console.log(`Hello ${name}`)   
}

//Blocking code example (synchronous)
sayHi(`Keval`)
sayHi(`Devon`)
sayHi(`Dinor`)
sayHi(`They are blocking operations and hence aren't sorted`)

//Non blocking code example (asynchronous)
setInterval(sayHi, 2500,`Keval`,`Michael`)
setInterval(sayHi, 5000,`Keval`,`Michael`)



