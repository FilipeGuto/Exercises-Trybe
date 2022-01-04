const Author = require('../models/Author');

const create = async (firstName, middleName, lastName) => {
  const existingAuthor = await Author.findByName(firstName, middleName, lastName);

  if (existingAuthor) {
    return {
      error: {
        code: 'alreadyExists',
        message: 'uma pessoa autora já existe com esse nome',
      },
    };
  }
  Author.create(firstName, middleName, lastName);
};

const findById = async (id) => {
  const author = await Author.findById(id);

  if(!author) {
    return {
      error: {
        code: 'notFound',
        message: `Não encontrou pessoa com o id ${id}`,
      },
    };
  }
  return author;
};

const getAll = async () => Author.getAll();

module.exports = {
  create,
  findById,
  getAll,
};