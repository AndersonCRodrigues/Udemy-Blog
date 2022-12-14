module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'lallah.db.elephantsql.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'oopehnss'),
      user: env('DATABASE_USERNAME', 'oopehnss'),
      password: env('DATABASE_PASSWORD', 'beh_bcehq7MWrlmz35V3f7SJyIoWL90E'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
