const fazendaS = require("./src/services/fazendaService");
const Fazenda = require("./src/entity/Fazenda");

const bovinoS = require("./src/services/bovinoService");
const Bovino = require("./src/entity/Bovino");

/*let fazendaTemp = new Fazenda();

fazendaTemp.setId(1);
fazendaTemp.setNome("Feliz");
fazendaTemp.setSitio("Pica-Pau");
fazendaTemp.setCidade("Montana");
fazendaTemp.setCep("555-42");
fazendaTemp.setComplemento("Duas casas");
fazendaTemp.setNumeros(58);

//fazendaS.addFazenda(fazendaTemp);

fazendaTemp.setNome("Triste");
fazendaTemp.setSitio("Amarelo");
fazendaTemp.setCidade("Montana");
fazendaTemp.setCep("555-42");
fazendaTemp.setComplemento("Uma casa");
fazendaTemp.setNumeros(55);

fazendaS.updateFazenda(1, fazendaTemp);

fazendaS.findFazendaId(1)
  .then((fazenda) => {
    console.log(fazenda);
  })
  .catch((error) => {
    console.error("Erro ao buscar o objeto fazenda:", error);
  });*/
  let teste1 = new Bovino();
  teste1.setId(2);
  teste1.setFazendaIdFazenda(1);
  teste1.setVacaIdVaca(null);
  teste1.setReprodutor(false);
  teste1.setSexo("Masc");
  teste1.setDataNascimento("2001-02-12");
  teste1.setChifre(true);
  teste1.setNome("Biel");
  teste1.setPeso(250.65);
  teste1.setCor("Marrom");
  
  bovinoS.addBovino(teste1);
//fazendaS.deleteFazenda(1);