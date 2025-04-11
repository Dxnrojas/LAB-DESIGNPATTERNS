let usuarios = [];

const getUsersFromDb = () => {
  return usuarios;
};

const createUserFromDb = (usuario) => {
  usuarios.push(usuario);
  return usuarios;
};

module.exports = {
  getUsersFromDb,
  createUserFromDb,
};