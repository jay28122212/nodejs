// File system
 const fs = require ('fs')

 const yargs =require('yargs')

 fs.writeFileSync('note.txt','my first progrem in node.js')

fs.appendFileSync('note.txt', 'And i learn Fast')

// Sum for value Using Export

const add= require('./app.js')
const sum=add(4,8)
 console.log(sum)  


//Validator in Npm

const validator= require('validator')

 console.log(validator.isEmail('jaypatel@'))



// Chalk in Npm

// const chalk = require ('chalk')

// const green = chalk.green('succes!')
// console.log(green)

//  Process and Argv

 console.log(process.argv)

const command=process.argv[2]       
if(command==='add'){
    console.log('hfhfhfhfh')
}else if(command==='remove')
{
console.log('removing')
}

// Yargs

console.log(yargs.argv)