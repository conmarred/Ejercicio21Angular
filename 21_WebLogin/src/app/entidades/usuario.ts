export class Usuario{
    

    //Usuario y contraseña
    constructor(public email : string, public pass : string){
        this.email = email;
        this.pass = pass;
    }


    public toString() : string {
        return `Usuario: ${this.email}, Contraseña: ${this.pass}`
    }
}