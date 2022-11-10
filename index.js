/*Importación de clases*/
import { Cliente } from "./Cliente.js";
import { CuentaCorriente } from "./CuentaCorriente.js";
import { cuentaAhorro } from "./CuentaAhorro";

const cliente = new Cliente("Leonardo", "13804050", "123224");
const cliente2 = new Cliente("María", "16979808", "8989");

const cuentaDeLeonardo = new CuentaCorriente(cliente, "1", "001");
const cuentaDeMaria = new CuentaCorriente(cliente2, "2", "002");

let saldo = cuentaDeLeonardo.verSaldo();

saldo = cuentaDeLeonardo.depositoEnCuenta(150);
cuentaDeLeonardo.transferirParaCuenta(parametroValor, cuentaDeMaria);

const saldoMaria = cuentaDeMaria.verSaldo();

const saldoLeonardo = cuentaDeLeonardo.verSaldo();
