class User{
    constructor  (Nombre, Apellido, rol, correo){
        this.Nombre= Nombre;
        this.Apellido=Apellido;
        this.correo=correo;
        this.rol=rol;
    }







}



// clase extendida
class ClaseExtendida extends User{


    get NOmbreCompleto (){
          return `${this.Nombre} ${this.Apellido}`;
    }


set NOmbreCompleto(nombreNuevo) {
    const [Nombre, Apellido] = nombreNuevo.split(" ");
    this.Nombre=Nombre;
    this.Apellido=Apellido;
}


}

class Maestro extends ClaseExtendida {
    constructor(Nombre, Apellido, correo) {
        super(Nombre, Apellido, 'Maestro', correo); 
    }
}


class Estudiante extends ClaseExtendida {
    constructor(Nombre, Apellido, correo) {
        super(Nombre, Apellido, 'Estudiante', correo); 
    }
}



//ejemplos de uso 

let Unoestudiante= new Estudiante ("Maidellin", "Alvarado", "susetalvarado21@gmail.com");

let UnoMaestro =new Maestro ("Rolando", "Cardenas", "rolandocardena@correo.com");


