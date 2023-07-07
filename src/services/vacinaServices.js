const dbConnection = require("../database/Conect");
const Vacina = require("../entity/Vacina");

const vacinaTeste = new Vacina();

class VacinaServices{
  //Adicionar Vacina
  async addVacina(vacinaTemp){
    try {
      const connection = await dbConnection();
      const query = `
      INSERT INTO GadoSeguro.Vacina (nome_vacina, info, fabricante) 
      VALUES (?,?,?)
      `;
      const values = [
        vacinaTemp.getNome(),
        vacinaTemp.getInfo(),
        vacinaTemp.getFabricante()
      ];
      await connection.execute(query, values);
      console.log("Vacina Adicionada com sucesso");
    } catch (error) {
      console.log("Erro ao Adicionar vacina", error);
      
    }
  }

  //Adicionar Vacina
  async getAllVacinas(){
    try {
      const connection = await dbConnection();
      const [vacinas] = await connection.query(`SELECT * FROM GadoSeguro.Vacina`);
      if(vacinas.length > 0){
        console.log(vacinas);
        return vacinas;
      }
      console.log("Lista das Vacinas");
    } catch (error) {
      console.log("Falha ao buscar a lista das vacinas", error);
    }
  }

  //Adicionar Vacina
  async getVacinaNome(vacinaNome){
    try {
      const connection = await dbConnection();
      const [vacinas] = await connection.query(`SELECT * FROM GadoSeguro.Vacina WHERE nome_vacina=?`, vacinaNome);
      if(vacinas.length > 0){
        console.log(vacinas[0]);
        return vacinas[0];
      }
      console.log("Vacina Encontrada");
    } catch (error) {
      console.log("Falha ao buscar a vacina", error);
    }
  }

  //Atualizar Vacina
  async updateVacina(vacinaNome, vacinaTemp){
    try {
      const connection = await dbConnection();
      const query = `
      UPDATE GadoSeguro.Vacina SET info=?, fabricante=? 
      WHERE nome_vacina=?
      `;
      const values = [
        vacinaTemp.getInfo(),
        vacinaTemp.getFabricante(),
        vacinaNome
      ];
      await connection.execute(query, values);
      console.log("Vacina Atualizada com sucesso");
    } catch (error) {
      console.log("erro ao Atualizar a Vacina", error);
      
    }
  }

  //Deletar Vacina pelo nome
async  deleteVacina(vacinaNome) {
  try {
    const connection = await dbConnection();
    await connection.query('DELETE FROM GadoSeguro.Vacina WHERE nome_vacina=?;', vacinaNome);
  } catch (error) {
    console.error("Erro ao deletar o objeto Vacina:", error);
  }
}
}

module.exports = new VacinaServices();