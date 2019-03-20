const vandium = require("vandium");
var sql = require("mssql");
const conn = require("../Config/dbConnection")();

function getSpeechText() {
  return new Promise((resolve, reject) => {
    conn.connect().then(function() {
      var request = new sql.Request(conn);
      request
        .query("select * from speechData")
        .then(function(recordSet) {
          resolve(recordSet.recordset);
          conn.close();
        })
        .catch(function(err) {
          reject(err);
          conn.close();
        });
    });
  });
}

module.exports = { getSpeechText };
