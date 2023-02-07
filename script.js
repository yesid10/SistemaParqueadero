let valorPorHora;
let carroTipo;
let horas;
let descuento;
let valorInicial;
let valorTotal;

document.getElementById("montos").style.display = "none";
document.getElementById("btnImprimir").style.display = "none";

function calcular() {
    horas = Number(document.getElementById("salida").value);
    tipo = document.getElementById("tipo").value.toLowerCase();



    if (horas == 0) {
        alert("Datos incorrectos");
    } else {
        valor = valorServicio(horas);
        descuento = porcentaje(tipo, valor);
        //modificación de input;

        valorTotal = valor - descuento;
        document.getElementById("valor").value = valor;
        document.getElementById("descuento").value = descuento;
        document.getElementById("total").value = valorTotal;

        document.getElementById("montos").style.display = "block";
        document.getElementById("btnImprimir").style.display = "block";
    }


}

function valorServicio(horas) {
    if (horas > 0 && horas <= 2) {
        valorPorHora = 5000;
        valorInicial = (horas * valorPorHora);
    } else if (horas >= 3 && horas <= 5) {
        valorPorHora = 4000;
        valorInicial = (2 * 5000) + (horas - 2) * valorPorHora;
    } else if (horas > 5 && horas <= 10) {
        valorPorHora = 3000;
        valorInicial = (2 * 5000) + (3 * 4000) + ((horas - 5) * valorPorHora);
    } else if (horas > 10) {
        valorPorHora = 2000;
        valorInicial = (2 * 5000) + (3 * 4000) + (5 * 3000) + ((horas - 10) * valorPorHora);
    }
    return valorInicial;
}

function porcentaje(tipo, valor) {
    switch (tipo) {
        case "carro":
            descuento = valor * 0.10;
            break;
        case "moto":
            descuento = valor * 0.15;
            break;
        default:
            break;
    }

    return descuento;

}