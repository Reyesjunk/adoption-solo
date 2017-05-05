const DATABASE_URL = process.env.DATABASE_URL || 
global.DATABASE_URL ||
`mongodb://ramon:ramon@ds123381.mlab.com:23381/adoption-solo` ||
`mongodb://localhost/adoption-solo`;
module.exports = {DATABASE_URL}