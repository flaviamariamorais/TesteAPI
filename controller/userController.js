const userService = require('../service/userService');

exports.register = (req, res) => {
  try {
    const { username, password, isFavored } = req.body;
    if (!username || !password) {
      return res.status(400).json({ error: 'Usuário e senha são obrigatórios' });
    }
    const user = userService.registerUser({ username, password, isFavored });
    res.status(201).json({ message: 'Usuário registrado', user: { username: user.username, isFavored: user.isFavored } });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.login = (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ error: 'Usuário e senha são obrigatórios' });
    }
    const user = userService.authenticateUser(username, password);
    res.json({ message: 'Login realizado com sucesso', user: { username: user.username, isFavored: user.isFavored } });
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
};

exports.getUsers = (req, res) => {
  res.json(userService.getAllUsers());
};
