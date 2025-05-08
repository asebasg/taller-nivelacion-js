let llueveStr = prompt("¿Está lloviendo?");
let llueve = llueveStr.toLowerCase() === "si";
let haceSolStr = prompt("¿Hace sol?");
let haceSol = haceSolStr.toLowerCase() === "si";
let vientoStr = prompt("¿Hace viento?");
let viento = vientoStr.toLowerCase() === "si";

function diaPicnic(llueve, haceSol, viento) {
    if (!llueve && haceSol && !viento) {
        return true;
    }
    return false;
}

const resultado = diaPicnic(llueve, haceSol, viento)

if (resultado) {
    console.log("Es un buen dia para hacer un picnic");
} else {
    console.log("No es un buen dia para hacer un picnic");
}