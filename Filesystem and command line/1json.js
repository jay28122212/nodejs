const fs= require('fs')
const book={
    title:'learning',
    Athor:'jay patel '
}

const bookjson=JSON.stringify(book)
fs.writeFileSync('1json.json',bookjson)
// console.log(bookjson)

// const parsedata=JSON.parse(bookjson)
// console.log(parsedata.title)


const dataread=fs.readFileSync('1json.json')
console.log(dataread.toString())