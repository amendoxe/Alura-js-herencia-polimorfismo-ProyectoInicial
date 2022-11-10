/*Importación de clases*/
import { Cliente } from "./Cliente.js";
import { CuentaCorriente } from "./CuentaCorriente.js";
import { cuentaAhorro } from "./CuentaAhorro.js";

const cliente = new Cliente("Leonardo", "13804050", "123224");
const cliente2 = new Cliente("María", "16979808", "8989");

const cuentaDeLeonardo = new CuentaCorriente(cliente, "1", "001");
const cuentaDeMaria = new CuentaCorriente(cliente2, "2", "002");

const cuentaAhorroDeLeonardo = new cuentaAhorro(cliente, "1", "001");
const cuentaAhorroDeMaria = new cuentaAhorro(cliente2, "2", "002");

console.log("cuenta de Ahorro de Leonardo", cuentaAhorroDeLeonardo);
console.log("cuenta de Leonardo", cuentaDeLeonardo);
