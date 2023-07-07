const fazendaS = require("./src/services/fazendaService");
const Fazenda = require("./src/entity/Fazenda");

const bovinoS = require("./src/services/bovinoService");
const Bovino = require("./src/entity/Bovino");

const vacinaS = require("./src/services/vacinaServices");
const Vacina = require("./src/entity/Vacina");

const doseS = require("./src/services/doseService");
const Dose = require("./src/entity/Dose");


let vacinaTemp = new Vacina();

vacinaTemp.setNome("FSG-124");
vacinaTemp.setInfo("Vacina para Sarampo");
vacinaTemp.setFabricante("Instituto Nacional de Proteção e Saúde");

//vacinaS.addVacina(vacinaTemp);

console.log(vacinaTemp.getFabricante());
let vacinaTemp2 = new Vacina();
console.log(vacinaTemp2.getNome());
vacinaS.getVacinaNome("FSG-124")
  .then((vacina) => {
    vacinaTemp2 = vacina;

    console.log(vacinaTemp2.getNome());

    let doseTemp = new Dose();
    doseTemp.setIdDose(1);
    doseTemp.setNomeVacina(vacinaTemp2.getNome());
    doseTemp.setLote("12-S");
    doseTemp.setInfo(vacinaTemp2.getInfo());
    doseTemp.setDataAplicada("2023-05-06");

    doseS.addDose(doseTemp);
  })
  .catch((error) => {
    console.log(error);
  })