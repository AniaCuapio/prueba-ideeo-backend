const Messages = require("../models/messages");

function getAll() {
  return Messages.find();
}
function getById(messageId) {
  return Messages.findById(messageId);
}

function create(messageData) {
  return Messages.create(messageData);
}

function remove(messageId) {
  return Messages.findByIdAndDelete(messageId);
}

function update(messageId, newmessageData) {
  return Messages.findByIdAndUpdate(messageId, newmessageData);
}


module.exports = {
  getAll,
  getById,
  create,
  remove,
  update,
};
