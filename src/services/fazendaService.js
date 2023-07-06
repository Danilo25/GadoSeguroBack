const dbConnection = require("./Conect");

class FazendaService {
  //Adicionar Fazenda
  async addFazenda(fazendaTemp) {
    try {
      const connection = await dbConnection.connect();
      const query = `INSERT INTO GadoSeguro.Fazenda (idFazenda, nome, sitio, cidade, cep, complemento, numero) VALUES (?,?,?,?,?,?,?)`;
      const values = [
        fazendaTemp.getId(),
        fazendaTemp.getNome(),
        fazendaTemp.getSitio(),
        fazendaTemp.getCidade(),
        fazendaTemp.getCep(),
        fazendaTemp.getComplemento(),
        fazendaTemp.getNumeros(),
      ];
      await connection.execute(query, values);
      console.log("Objeto fazenda adicionado com sucesso!");
      connection.end();
    } catch (error) {
      console.error("Erro ao adicionar o objeto fazenda:", error);
    }
  }

  //Achar Fazenda pelo ID
  async findFazendaId(idFazenda) {
    try {
      const connection = await dbConnection.connect();
      const [fazendaFind] = await connection.query(
        "SELECT * FROM GadoSeguro.Fazenda WHERE idFazenda=?;",
        idFazenda
      );
      if (fazendaFind.length > 0) {
        return fazendaFind[0];
      }
    } catch (error) {
      console.error("Erro ao buscar o objeto fazenda:", error);
    } finally {
      connection.end();
    }
  }

  //Deletar Fazenda pelo ID
  async deleteFazenda(idFazenda) {
    try {
      const connection = await dbConnection.connect();
      await connection.query(
        "DELETE FROM GadoSeguro.Fazenda WHERE idFazenda=?;",
        idFazenda
      );
      connection.end();
    } catch (error) {
      console.error("Erro ao deletar o objeto fazenda:", error);
    }
  }
}
module.exports = new FazendaService();
