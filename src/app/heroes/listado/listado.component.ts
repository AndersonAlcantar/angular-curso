import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent{

  public heroes: string[] = ['spiderman', 'IronMan', 'Hulk', 'Thor', 'Superman'];
  public nuevoHeroe: string = "";
  borrarElemento(){
    this.nuevoHeroe = this.heroes.pop() || "";
  }
}

