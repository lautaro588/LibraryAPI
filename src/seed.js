const { Umzug, memoryStorage } = require('umzug');
const { sequelize } = require('./config/db-config');

const seeder = new Umzug({
	migrations: { glob: ['seeders/*.js', { cwd: __dirname }] },
	context: sequelize.getQueryInterface(),
	storage: memoryStorage(),
	logger: undefined
});

const seed = async () => {
	try {
		await seeder.up();
		console.log('Seed data inserted.')
	} catch (error) {
		console.error('Failed to run seeds.', error);
	}
}

module.exports = seed;