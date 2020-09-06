import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('videos', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('description').notNullable();
        table.string('url').notNullable();
        table.string('thumbnail').notNullable();
        table.integer('likes').notNullable();
        table.integer('deslikes').notNullable();
        table.integer('views').notNullable();
        table.date('created_at').notNullable();

        table.integer('channel_id')
            .notNullable()
            .references('id')
            .inTable('channels');
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('videos');
}