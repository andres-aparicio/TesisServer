import pool from '../datebase';
//const mariadb = require('mariadb');
const empresaCrl = { prueba:function(){} }

empresaCrl.prueba = async () => {
    let conn;
    try {
        conn = await pool.getConnection();
        const rows = await conn.query("SELECT * FROM departamento");
        console.log(rows);
    } catch (err) {
        throw err;
    } finally {
        if (conn) return conn.end();
    }
}

module.exports = empresaCrl;