export class Empleado {
	#nombre;
	#dniNumero;
	#salario;
	constructor(nombre, numero, salario) {
		this.#nombre = nombre;
		this.#numero = numero;
		this.#salario = salario;
	}
}
