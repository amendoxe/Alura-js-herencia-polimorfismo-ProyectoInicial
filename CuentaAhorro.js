import { Cliente } from "./Cliente.js";
import { CuentaCorriente } from "./CuentaCorriente.js";
export class cuentaAhorro {
	#cliente;
	#saldo;
	static cantidadCuentas = 0;

	set cliente(valor) {
		if (valor instanceof Cliente) this.#cliente = valor;
	}

	get cliente() {
		return this.#cliente;
	}

	constructor(cliente, numero, agencia, saldo) {
		this.numero = numero;
		this.agencia = agencia;
		this.#cliente = cliente;
		this.#saldo = saldo;
		CuentaCorriente.cantidadCuentas++;
	}

	depositoEnCuenta(valor) {
		if (valor > 0) this.#saldo += valor;
		return this.#saldo;
	}

	retirarDeCuenta(valor) {
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
