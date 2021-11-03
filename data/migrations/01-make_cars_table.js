exports.up = function (knex) {
  // DO YOUR MAGIC
  return knex.schema.createTable('cars', tbl => {
    tbl.increments()
    tbl.string('vin', 17).unique().notNullable()
    tbl.string('make', 128).notNullable()
    tbl.string('model', 128).notNullable()
    tbl.float('mileage').unsigned().notNullable()
    tbl.string('title', 128)
    tbl.string('transmission', 128)

  })
};

exports.down = function (knex) {
  // DO YOUR MAGIC
  return knex.schema.dropTableIfExists('cars')
};
