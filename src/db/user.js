import { createPool } from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const pool = createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    connectionLimit: 5,
  })
;

const search = async (params) => {
    console.log(params)
    const { user, password} = user;

    try {

        const [result] = await pool.query('SELECT * FROM usuario WHERE id = ?', [userId]);

        return result.insertId; // Retorna el ID del nuevo usuario
      } catch (error) {
        console.error('Error al crear el usuario:', error);

        throw error;
      }
}

export default {
    search,

}