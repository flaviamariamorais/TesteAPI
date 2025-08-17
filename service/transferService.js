const { transfers } = require('../model/transferModel');
const { findUserByUsername } = require('./userService');

function transfer({ from, to, amount }) {
  if (!from || !to || typeof amount !== 'number' || amount <= 0) {
    throw new Error('Dados de transferência inválidos');
  }
  const sender = findUserByUsername(from);
  const recipient = findUserByUsername(to);
  if (!sender || !recipient) {
    throw new Error('Usuário remetente ou destinatário não encontrado');
  }
  if (sender.balance < amount) {
    throw new Error('Saldo insuficiente');
  }
  if (!recipient.isFavored && amount >= 5000) {
    throw new Error('Transferências acima de R$ 5.000,00 só são permitidas para favorecidos');
  }
  sender.balance -= amount;
  recipient.balance += amount;
  const transfer = { from, to, amount, date: new Date() };
  transfers.push(transfer);
  return transfer;
}

module.exports = {
  transfer
};
