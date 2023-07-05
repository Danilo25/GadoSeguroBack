async function connect(){
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;

    const mysql = require("mysql2/promise");
    //const connection = await mysql.createConnection("mysql://{usuario}:{senha}@localhost:3306/GadoSeguro");
    const connection = await mysql.createConnection("mysql://teste:Acesso_1@localhost:3306/GadoSeguro");
    global.connection = connection;
    return connection;
}

module.exports = {
  connect: connect
}