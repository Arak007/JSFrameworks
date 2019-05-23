// function that takes a callback
function farewell(name)
{
    console.log(`Good bye ${name}`)
}


//simple finction takes callback as argument
function greeting (name, callback)
{
    console.log(`Hello ${name}`);

    callback(name);
}

//Call greeting, pass name, and farewell as callback

greeting(`Shaun McKinnon`, farewell);
//Hello executes first before farewell

function sayHiMoe()
{
    console.log(`Hi Moe`);
}

greeting(`Random`, sayHiMoe);