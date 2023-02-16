
    const persona = `{"nombre":"Matias Fontenla", "email":"matiasfontenla1994@gmail.com","edad":"28","residencia":"Vicente Lopez, Buenso Aires"}`
    const obj = JSON.parse(persona);
    document.getElementById("nombre").innerHTML = obj.nombre 
    document.getElementById("email").innerHTML = obj.email 
    document.getElementById("edad").innerHTML = obj.edad 
    document.getElementById("residencia").innerHTML = obj.residencia 
