//Practica 1:
/*
    Defina toda la logica basica de un cajero automatico.
    
    Debe mostrar un menu con las opciones:
        Consultar
        Retirar
        Depositar
        Transferir

    Estas opciones deben ser ingresadas mediante numero
*/

//variables
let saldo = 1000;

//Main
alert (`¡Bienviendo a su cajero automatico!
    Pulse "Aceptar" para continuar`);

let opc1 = +prompt(`¿Cuál de las siguientes opciones desea realizar?
1. Consultar Saldo
2. Retirar
3. Deposito
4. Transferencia`, "Ingrese el numero de la opción");

switch(opc1){
    case 1:
        consultar_saldo();
        break;
    case 2:
        retiro_en_cuenta();
        break;
    case 3:
        deposito();
        break;
    case 4:
        transferencia();
        break;
    default:
        break;
}


//FUNCIONES

//Consulta de saldo
function consultar_saldo(){
    alert ("El monto disponible en cuenta es de: "+saldo+"$")
};

//Retiro monetario
function retiro_en_cuenta(){
        let retiro = +prompt(`Su saldo actual es de: `+saldo+`$
    Indique el monto a retirar`, "Ingrese el monto a retirar");
    
    Retiro_Monetario (retiro);

    function Retiro_Monetario (montoRetiro){
        if ((saldo - montoRetiro) < 0 ) {
            alert ("¡Disculpe! El monto ingresado "+montoRetiro+"$ es mayor al disponible en cuenta." );
        }else if ((saldo - montoRetiro) >= 0){
            saldo -= montoRetiro;
            alert (`¡Su retiro se a realizado con exito! 
Queda disponible en su cuenta: `+saldo+"$");
        }
        return (saldo)
    };
};

//Depositar
function deposito(){
    let deposito = +prompt(`Indique el monto a depositar`, "Ingrese el monto a depositar");
    saldo += deposito;
    alert(`¡Su deposito se ha realizado con exito!
El monto ahora disponible en cuenta es de: `+saldo+"$");
    return (saldo);
};

//Transferencia
function transferencia(){
    let monto_trans = +prompt (`Indique el monto a tranferir`, `Ingrese el monto de tranferir`);
    let cuentas_trans = +prompt (`Indique la cuenta a la cual desea tranferir
    1. 5889
    2. 2009
    3. 5001
    4. 7895
    5. 6008`, "Ingrese la opcion (1,2,3...)");

    if (monto_trans > saldo){
        alert (`¡Su transferencia no pudo ser completada
el monto a transferir es mayor al disponible en cuenta!

Monto a transferir: `+monto_trans+`$
Monto disponible en cuenta: `+saldo+"$");

    }else if (monto_trans <= saldo) {
        (saldo -= monto_trans)
        alert(`¡Su tranferencia de: `+monto_trans+`$`+` a la cuenta n°: `+cuentas_trans+` fue hecha exitosamente!
Disponible en cuenta: `+saldo+`$`)
    };
};