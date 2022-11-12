import { Empleado } from "./Empleado.js";

export class Gerente extends Empleado {
	constructor(nombre, dni, salario) {
		super(nombre, dni, salario);
	}

	showName() {
		super.showName();
	}
	verBonificacion() {
		const bono = 5;
		return super._bonificacion(bono);
	}
}
