module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "0000",
  DB: "appdata",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
