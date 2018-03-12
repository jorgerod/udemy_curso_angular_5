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

	constructor() {
		this.empleado = new Empleado('Pepe', 45, 'Cocinero', true);
		this.trabajadores = [
			new Empleado('Pepe', 45, 'Cocinero', true),
			new Empleado('Manolo', 50, 'Administrativo', true),
			new Empleado('Ana', 35, 'Cocinera', true)
		];
	}
}