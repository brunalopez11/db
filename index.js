const sequelize = require('./db');
const User = require('./user');
const Class = require('./class');
const Enrollment = require('./enrollment');

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexão com o banco feita com sucesso!');

    await sequelize.sync({ alter: true });

    const novaTurma = await Class.create({
      nome: '3ºA',
      turno: 'Manhã',
      sala: '12B',
    });

    const novoUsuario = await User.create({
      nome: 'Maria Oliveira',
      email: 'maria@email.com',
      login: 'maria22',
      senha: 'Maria1234',
      telefone: '11988887777',
      dataNascimento: new Date('1995-08-25'),
    });

    // Criar uma matrícula
    const novaMatricula = await Enrollment.create({
      dataMatricula: new Date(),
      UserId: novoUsuario.id,
      ClassId: novaTurma.id,
    });

    console.log('Usuário criado:', novoUsuario.toJSON());
    console.log('Turma criada:', novaTurma.toJSON());
    console.log('Matrícula criada:', novaMatricula.toJSON());

  } catch (error) {
    console.error('Erro ao conectar ou usar o banco:', error);
  } finally {
    await sequelize.close();
  }
})();
