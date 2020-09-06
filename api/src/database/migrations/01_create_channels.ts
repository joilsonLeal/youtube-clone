import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('channels', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('avatar').notNullable();
        table.integer('subscribers').notNullable();
        table.string('description').notNullable();
        table.date('createdAt').notNullable();

        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users');
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('channels');
}