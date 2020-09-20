const dbconfig = {
  HOTS: "localhost",
  USER: "root",
  PASSWORD: "mysql2020",
  DB: "Twitter",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

module.exports = dbconfig;
