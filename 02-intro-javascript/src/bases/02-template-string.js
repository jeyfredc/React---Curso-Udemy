const nombre = "pablito";
const apellido = "clavo un clavito";

//const nombreCompleto = nombre + " " + apellido

const nombreCompleto = `
${nombre}
${apellido}
${4}
Esta es una 
           frase distinta al nombre`

console.log(nombreCompleto)

function getSaludo(nombre){
    return 'Hola ' + nombre;
}

console.log(`Este es un texto: ${getSaludo(nombre)}`)