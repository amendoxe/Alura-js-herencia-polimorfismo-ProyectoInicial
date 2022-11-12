export class Empleado {
	#nombre;
	#dni;
	#salario;
	constructor(nombre, dni, salario) {
		this.#nombre = nombre;
		this.#dni = dni;
		this.#salario = salario;
	}
	showName() {
		let sName = this.#nombre;
		console.log(sName);
	}
	showDni() {
		let sName = this.#dni;
		console.log(sName);
	}
	showSalario() {
		return this.salario;
	}
	_showSalario() {
		const sSalario = this.#salario;
		return sSalario;
	}
	verBonificacion() {
		return this.#salario;
	}
	_bonificacion(bono) {
		return this.#salario + (this.#salario * bono) / 100;
	}
}
