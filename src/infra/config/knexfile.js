const { SUPPORTED_DATABASE } = require("./constants");

const { DB_CLIENT, DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT } =
  SUPPORTED_DATABASE.MYSQL;

module.exports = {
  client: DB_CLIENT,
  connection: {
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    charset: "utf8",
    port: DB_PORT,
  },
  migrations: {
    directory: "../orm/knex/migrations",
  },
  pool: {
    min: 2,
    max: 10,
  },
};
