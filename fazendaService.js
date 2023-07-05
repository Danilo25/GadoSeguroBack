const db = require("./Conect");

async function addFazenda(fazendaTemp) {
  try {
    const connection = await db.connect();
    const query = `INSERT INTO Fazenda (idFazenda, nome, sitio, cidade, cep, complemento, numero) VALUES (?,?,?,?,?,?,?)`;
    const values = [fazendaTemp.getId(), fazendaTemp.getNome(), fazendaTemp.getSitio(), fazendaTemp.getCidade(), fazendaTemp.getCep(), fazendaTemp.getComplemento(), fazendaTemp.getNumeros()];
    await connection.execute(query, values);
    console.log("Objeto fazenda adicionado com sucesso!");
    connection.end();
  } catch (error) {
    console.error("Erro ao adicionar o objeto fazenda:", error);
  }
}
module.exports = {
  addFazenda: addFazenda
}