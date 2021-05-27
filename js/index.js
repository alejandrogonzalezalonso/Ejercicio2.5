const apellidoItaliano = "pepe" ;
const apellidoNoItaliano = "González";

const esItaliano = (apellido) => {
    if(apellido.slice(-1) === "i"){
        console.log("Es italiano");
        return true;
    }else{
        console.log("No es italiano");
    }
}

esItaliano(apellidoNoItaliano);