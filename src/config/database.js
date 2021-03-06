require('dotenv').config({
    path: process.env.NODE_ENV === 'test' ? '.env.test': '.env'
});

const DB_DIALECT = process.env.DB_DIALECT || 'postgres'
console.log({DB_DIALECT});
module.exports = {
    dialect: DB_DIALECT,
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    storage: './__tests__/database.sqlite',
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    }

}