module.exports = {
  database: process.env.DB_NAME || 'test',
  user: 'mongo',
  password: 'mortillan',
  port: process.env.DB_PORT || '',
}