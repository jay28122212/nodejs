setTimeout(()=>{
    console.log('two second')
},2000)


const geocode = (address, callbak) => {
    setTimeout(() => {
    const data = {
      title: "ddd",
      author: "jhh",
    };
    callbak(data);
  }, 2000);
};Learn Node.js by building real-world applications with Node JS, Express, MongoDB, Jest, and more!

        

geocode("visnagar", () => {
  console.log(data);
});


// shothand 


const name='jay'
const address=20setTimeout(()=>{
    console.log('two second')
},2000)


const geocode = (address, callbak) => {
    setTimeout(() => {
    const data = {
      title: "ddd",
      author: "jhh",
    };
    callbak(data);
  }, 2000);
};

geocode("visnagar", () => {
  console.log(data);
});


// shothand 


const name='jay'
const address=20

const user={
    name,
    adr:address,
    location:'visnagar'
}

console.log(user)


const user={
    name,
    adr:address,
    location:'visnagar'
}

console.log(user)

//  Destructuring

const product={

    name:'kaju',
    Qulity:'best',
    price:800
}

const {name,Qulity,price=200}=product

console.log(Qulity,prc)