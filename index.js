/*Importación de clases*/
import { Cliente } from "./Cliente.js";
import { Cuenta } from "./Cuenta.js";
import { CuentaCorriente } from "./CuentaCorriente.js";
import { cuentaAhorro } from "./CuentaAhorro.js";

const cliente = new Cliente("ahorro", "Leonardo", "13804050", "123224");
const cliente2 = new Cliente("ahorro", "María", "16979808", "8989");

const cuentaDeLeonardo = new CuentaCorriente("corriente", cliente, "1", "001");
const cuentaDeMaria = new CuentaCorriente(cliente2, "2", "002");

const cuentaAhorroDeLeonardo = new Cuenta("ahorro", cliente, "1", "001", 0);
const cuentaAhorroDeMaria = new cuentaAhorro(cliente2, "2", "002", 10);

console.log("cuenta de Leonardo", cuentaDeLeonardo);
cuentaDeLeonardo.depositoEnCuenta(200);
console.log(cuentaDeLeonardo.verSaldo());
cuentaDeLeonardo.retirarDeCuenta(50);
console.log(cuentaDeLeonardo.verSaldo());
console.log("cuenta de Ahorro de Leonardo", cuentaAhorroDeLeonardo);
cuentaAhorroDeLeonardo.depositoEnCuenta(200);
console.log(cuentaAhorroDeLeonardo.verSaldo());
cuentaAhorroDeLeonardo.retirarDeCuenta(50);
console.log(cuentaAhorroDeLeonardo.verSaldo());
