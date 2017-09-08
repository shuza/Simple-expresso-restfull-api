var postgresConfig = {
    database: "postgres",
    user: "postgres",
    password: "postgres",
    options: {
        host: 'localhost',
        dialect: 'postgres',

        pool: {
            max: 100,
            min: 0,
            idle: 10000
        }
    }
}

module.exports = postgresConfig;