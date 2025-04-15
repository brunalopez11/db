// index.js
const sequelize = require('./db');
const User = require('./user');

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexão com o banco feita com sucesso!');

    // Atualiza a tabela com os novos campos
    await sequelize.sync({ alter: true });

    // CREATE
    const novoUsuario = await User.create({
      nome: 'Maria Oliveira',
      email: 'maria@email.com',
      login: 'maria22',
      senha: 'Maria1234',
      telefone: '11988887777',
      dataNascimento: new Date('1995-08-25'),
    });
    console.log('Usuário criado:', novoUsuario.toJSON());

    // READ
    const usuarios = await User.findAll();
    console.log('Usuários:', usuarios.map(u => u.toJSON()));

    // UPDATE
    await User.update({ nome: 'Maria Atualizada' }, {
      where: { email: 'maria@email.com' },
    });

  } catch (error) {
    console.error('Erro ao conectar ou usar o banco:', error);
  } finally {
    await sequelize.close();
  }
})();
