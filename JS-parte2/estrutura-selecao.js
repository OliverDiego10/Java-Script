const marca = prosess.argv[2];

if (marca === "volks") {
    console.log("marca volks atendida");
}
else if (marca === ford) {
    console.log("marca ford atendida");
}
else  {
    console.log("marca não atendida");
}


const listaMarca = ["volks",  "ford"];
const marca = prosess.argv[2];

switch (marca) {
    case "volks";
    console.log("volks atendida");
    break;
    case "ford";
    console.log("ford atendida");
    break;
    default:
    console.log("marca não atendida");
}
