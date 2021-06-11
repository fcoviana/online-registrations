exports.up = (knex) =>
  knex.schema.createTable("registrions", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("email").notNullable().unique();
    table.date("birthDate").notNullable();
    table.string("registrationNumber").nullable();
    table
      .datetime("registrationAt")
      .notNullable()
      .defaultTo(knex.raw("CURRENT_TIMESTAMP"));
  });

exports.down = (knex) => knex.schema.dropTable("registrions");
