import { Cuenta } from "./Cuenta.js";
export class CuentaNomina extends Cuenta {
	constructor(cliente, numero, agencia, saldo) {
		super(cliente, numero, agencia, saldo);
	}
	retirarDeCuenta(valor) {
		super.retirarDeCuenta(valor, 1);
	}
}
