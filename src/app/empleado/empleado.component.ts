import {Component} from '@angular/core';
import {Empleado} from './empleado';

@Component({
	selector: 'empleado',
	templateUrl: './empleado.component.html'
})


export class EmpleadoComponent {
	public title = 'Componente Empleado';
	public empleado:Empleado;
	public trabajadores:Array<Empleado>;
	public trabajador_externo:boolean;
	public color:string;

	constructor() {
		this.empleado = new Empleado('Antonio', 45, 'Cocinero', true);
		this.trabajadores = [			
			new Empleado('Manolo', 50, 'Administrativo', false),
			new Empleado('Pepe', 45, 'Cocinero', true),
			new Empleado('Ana', 35, 'Cocinera', true)
		];

		this.trabajador_externo = true;
		this.color = 'green';
	}

	cambiarExterno(valor) {
		this.trabajador_externo = valor;
	}
}