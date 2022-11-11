import { Cliente } from "./Cliente.js";

export class CuentaCorriente {
	#cliente;
	numero;
	agencia;
	#saldo;
	static cantidadCuentas = 0;

	set cliente(valor) {
		if (valor instanceof Cliente) this.#cliente = valor;
	}

	get cliente() {
		return this.#cliente;
	}

	constructor(tipo, cliente, numero, agencia) {
		this.tipo = tipo;
		this.cliente = cliente;
		this.numero = numero;
		this.agencia = agencia;
		this.#saldo = 0;
		CuentaCorriente.cantidadCuentas++;
	}

	depositoEnCuenta(valor) {
		if (valor > 0) this.#saldo += valor;
		return this.#saldo;
	}

	retirarDeCuenta(valor) {
		if (this.tipo === "corriente") valor = valor * 1.05;
		if (valor <= this.#saldo) this.#saldo -= valor;
		return this.#saldo;
	}

	verSaldo() {
		return this.#saldo;
	}

	transferirParaCuenta(valor, cuentaDestino) {
		this.retirarDeCuenta(valor);
		cuentaDestino.depositoEnCuenta(valor);
		valor = 200;
		valor = valor * 1000;
	}
}
