import { Component } from '@angular/core';


@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent{
    private nombre: string = "Iron Man";
    private edad: number = 45; 

    get getNombre(): string{
        return this.nombre;
    }

    get getEdad(): number{
        return this.edad;
    }

    get getNombreCapitalizado(): string{
        return this.nombre.toUpperCase();
    }

    obtenerNombre():string{
        return `${this.nombre} - ${this.edad}`;
    }

    cambiarNombre(): void{
        this.nombre = 'Spiderman';
    }

    cambiarEdad(): void{
        this.edad = 40;
    }

}
