let name = `Marina Trench`
const odb = `1991-12-1`;

//examples of new loops (for of and of for)

const temps = [1,2,3,4];
for (let temp of temps){
console.log(temp)
}

const bio = {name: `Bob`, age : 23}
for (let key in bio)
{
    //only returns the key not the actual value
    console.log(key)
    //returns index
    console.log(bio[key])
}

//esfunction arrow function
//LOOK AT WEEK 2 VIDEO for a better understanding


function Person() {
    var that = this;
    that.age = 0
    setInterval(function () {
        that.age++
        console.log(that.age);
    }, 1000);
    
}

let peep = new Person();