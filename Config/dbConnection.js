const dbConfig = require("./dbconfiguration");
var sql = require("mssql");

const getConnection = () => {
  return new sql.ConnectionPool(dbConfig);
};

module.exports = getConnection;
