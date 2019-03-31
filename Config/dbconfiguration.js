var config = {
  server: "speechrecognition.cspi3cx76xba.us-east-2.rds.amazonaws.com",
  database: "speechRecognition",
  user: "sv24122307",
  password: "",
  port: 1433,
  connectionTimeout: 20000000,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 3000000
  }
};

module.exports = config;
