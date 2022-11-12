import { Empleado } from "./Empleado.js";

export class Director extends Empleado {
	constructor(nombre, dni, salario) {
		super(nombre, dni, salario);
	}
	showName() {
		super.showName();
	}
	verBonificacion() {
		const bono = 10;
		return super._bonificacion(bono);
	}
	showSalario() {
		super._showSalario();
	}
}
