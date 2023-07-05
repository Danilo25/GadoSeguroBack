const fazendaS = require("./fazendaService");
const Fazenda = require("./Fazenda");

let fazendaTemp = new Fazenda();

fazendaTemp.setId(1);
fazendaTemp.setNome("Teste");
fazendaTemp.setSitio("Amarelo");
fazendaTemp.setCidade("Montana");
fazendaTemp.setCep("555-42");
fazendaTemp.setComplemento("Duas casas");
fazendaTemp.setNumeros(58);

fazendaS.addFazenda(fazendaTemp);

fazendaS.findFazendaId(1)
  .then((fazenda) => {
    console.log(fazenda);
  })
  .catch((error) => {
    console.error("Erro ao buscar o objeto fazenda:", error);
  });
fazendaS.deleteFazenda(1);