export class Videojuego{

    public id: number
    public titulo: string 
    public company: string
    public imagen: string
    public valoracion: number

     //Los videojuegos tendran un identificador, un titulo, una compañia, un icono/imagen y una valoración media.

     constructor(id: number, titulo:string, company:string, imagen:string, valoracion:number){
        this.id = id
        this.titulo = titulo
        this.company = company
        this.imagen = imagen
        this.valoracion = valoracion
    }

    public getValoracion(): number {
        return this.valoracion;
    }
    public setValoracion(value: number) {
        this.valoracion = value;
    }
    public getImagen(): string {
        return this.imagen;
    }
    public setImagen(value: string) {
        this.imagen = value;
    }
    public getCompany(): string {
        return this.company;
    }
    public setCompany(value: string) {
        this.company = value;
    }
    public getTitulo(): string {
        return this.titulo;
    }
    public setTitulo(value: string) {
        this.titulo = value;
    }
    public getd(): number {
        return this.id;
    }
    public setId(value: number) {
        this.id = value;
    }


}