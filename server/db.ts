import { Sequelize } from 'sequelize';

export const db = new Sequelize(
  process.env.DB_DATABASE!,
  process.env.DB_DB_USERNAME!,
  process.env.DB_PASSWORD!,
  {
    port: +process.env.DB_PORT!,
    dialect: 'postgres',
    host: process.env.DB_HOST
  }
)