async function up({ context: queryInterface }) {
  await queryInterface.bulkInsert('Users', [{
    id: 1,
    name: 'admin',
    password: 'admin',
    createdAt: new Date(),
    updatedAt: new Date()
  }], {
    upsertKeys: ['id'],
    updateOnDuplicate: ['name', 'password', 'updatedAt']
  });
}

async function down({ context: queryInterface }) {
  await queryInterface.bulkDelete('Users', {
    id: 1,
    name: 'admin',
    password: 'admin'
  });
}

module.exports = { up, down };