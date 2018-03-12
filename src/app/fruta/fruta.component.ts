import  { Component } from '@angular/core';

@Component({
    selector: 'fruta',
    templateUrl: './fruta.component.html'
})

export class FrutaComponent {
    public nombre_componente:string = 'Componente de fruta';
    public listado_frutas:string = 'Naranja, Manzara, Pera y Sandia';

    constructor() {
        console.log("constructor");
    }

    ngOnInit() {
        console.log("ngOnInit");
    }
}
