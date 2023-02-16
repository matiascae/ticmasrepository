const proyecto1 = `{"nombre":"Finalplag"}`;
    const nombreFinal = JSON.parse(proyecto1);
    document.getElementById("final").innerHTML = nombreFinal.nombre 

const proyecto2 = `{"nombre":"Treinta y ocho semanas"}`;
const nombre38 = JSON.parse(proyecto2);
document.getElementById("38").innerHTML = nombre38.nombre 

const proyecto3 = `{"nombre":"SUR inmobiliaria"}`;
const nombreSur = JSON.parse(proyecto3);
document.getElementById("sur").innerHTML = nombreSur.nombre     

const proyecto4 = `{"nombre":"El futuro pensado por la unidad"}`;
const nombreFuturo = JSON.parse(proyecto4);
document.getElementById("futuro").innerHTML = nombreFuturo.nombre     

const diseñadopor = `{"nombre":"web diseñada por Matias Fontenla"}`;
const diseñpor = JSON.parse(diseñadopor);
document.getElementById("realizadopor").innerHTML = diseñpor.nombre     

