//STRING LITERALS//

const background =  "red"
const color = "white"
const isAuthorized = false;

const button = document.createElement("button");
button.innerText = "click me";
button.style = "background: ; color: white;"
button.style = `background: ${isAuthorized ? background : 'red'};
color: ${color}`

button.addEventListener("click", () => {
    if (isAuthorized) {
        return alert("esta autorizado");
    }

    alert("no esta autorizado")
});

document.body.append(button)

//......................//

//ARRAYS//

const names = ['Oscar', 'Edgar', 'Ian', 'Luis']
const moreNames = ['Yona', 'Jony', 'Israel', 'Jafeth']

const newNames = names.map(function (name) {
    return `Hola ${name}`
})

console.log(names)
console.log(newNames)

//.................//

const nameFound = names.find(function(name){
    if (name === 'Edgar') {
        return name
    }
})

console.log(nameFound)

//.................//

const namesFiltered = names.filter(function (name){
    if (name !== 'Ian') {
        return name
    }
})

console.log(namesFiltered)

//.................//

console.log([...names, ...moreNames])


//SPREAD OPERATOR//

const user = {
    name: 'Edgar',
    lastname: 'Galvan',
}

const address = {
    street: 'Salmon 2202',
    city: 'Guadalupe',
}

const userInfo = {
    ...user,
    ...address,
}

console.log(userInfo)

//................//

//ECMASCRIPT MODULES//

import {add, multiply} from './add.js'

console.log(add(35, 15))
console.log(multiply(250,8))

//OPTIONAL CHAINING//

const person = {
    name: 'Luis',
    address: {
        city: 'Guadalajara'
    },

    location: {}
}

console.log(person.location?.city)

//......................//

//ASYNC AWAIT//

const ul = document.createElement("ul");

async function loadData () {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    data.forEach(function (post){
        const li = document.createElement("li");
        li.innerText = post.title;
        ul.append(li);
    });
    document.body.append(ul);
}

loadData()
console.log("linea 2")

//...................//



