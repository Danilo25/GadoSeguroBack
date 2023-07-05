
const fazendaS = require("./fazendaService");
const Fazenda = require("./Fazenda");

console.log("Começou");

const fazendaTemp = new Fazenda();

fazendaTemp.setId(2);
fazendaTemp.setNome("Fazenda triste");
fazendaTemp.setSitio("Amarelo");
fazendaTemp.setCidade("Montana");
fazendaTemp.setCep("555-42");
fazendaTemp.setComplemento("Uma casas");
fazendaTemp.setNumeros(57);

fazendaS.addFazenda(fazendaTemp);