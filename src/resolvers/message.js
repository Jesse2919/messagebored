const Message = require('../models/message');

module.exports = {
  getMessages: async (context) => {
    if (!context.isAuth) {
      throw new Error('Unauthenticated');
    }
    return Message.find();
  },
  createMessage: async ({ content }, context) => {
    if (!context.isAuth) {
      throw new Error('Unauthenticated');
    }
    const message = new Message({
      content,
      userId: context.userId
    });
    await message.save();
    return message;
  }
};
