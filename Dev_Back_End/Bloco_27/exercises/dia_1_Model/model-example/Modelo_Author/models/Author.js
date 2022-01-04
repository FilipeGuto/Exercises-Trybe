const connection = require('./connection');

// // // Cria uma string com o nome completo do autor
// const getFullNameAuthor = (first_name, middle_name, last_name) => {
// //   // Note que `Boolean` é uma função que recebe um parâmetro e retorna true ou false
// //   // nesse caso, se middle_name for `undefined` ou uma string vazia o retorno será `false`
//   const fullName = [first_name, middle_name, last_name]
//     .filter(Boolean)
//     .join(' ');

//   return fullName;
// };

// //  // Converte o nome dos campos de snake_case para camelCase
//   const serialize = ({ id, first_name, middle_name, last_name }) => ({
//   id,
//   firstName: first_name,
//   middleName: middle_name,
//   lastName: last_name,
//   fullName: getFullNameAuthor(first_name, middle_name, last_name),
// });

// Busca todos os autores do banco.
const getAll = async () => {
    const [authors] = await connection.execute(
        'SELECT id, first_name, middle_name, last_name FROM model_example.authors;',
    );
    return authors;
};

module.exports = {
    getAll,
};