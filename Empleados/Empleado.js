export class Empleado {
	#nombre;
	#dni;
	#salario;
	constructor(nombre, dni, salario) {
		this.#nombre = nombre;
		this.#dni = dni;
		this.#salario = salario;
		// this.#salario = salario;
	}
	showName() {
		let sName = this.#nombre;
		console.log(sName);
	}
	showName() {
		let sName = this.#dni;
		console.log(sName);
	}
}
