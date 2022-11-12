import { Empleado } from "./Empleado.js";

export class Director extends Empleado {
	constructor(nombre, dni, salario) {
		super(nombre, dni, salario);
	}
	showName() {
		super.showName();
	}
}
