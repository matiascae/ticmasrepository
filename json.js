const cars = `[
    {
        "modelo":"ford mustang",
        "produccion":2012,
        "millaje":12000
    },
    {
        "modelo":"honda accord",
        "produccion":2020,
        "millaje":50000
    },
    {
        "modelo":"volkswagen Golf",
        "produccion":2016,
        "millaje":58200
    }
]`;
dataCars = JSON.parse(cars)
console.log(typeof dataCars)

const carrosNuevos = dataCars.filter(
    (carro)=> carro.produccion > 2010 && carro.millaje < 30000
);

console.log(carrosNuevos);

const newCars = JSON.stringify(carrosNuevos)
console.log(typeof newCars);

document.getElementById('demo').innerHTML =  newCars;