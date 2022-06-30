const mongoose = require('./database');
const config = require('../../config')();

/**
 * Initializes the connection to MongoDB
 */
const init = async () => {
  /**
   * If the connection is already established,
   * returns the mongoose instance.
   */
  if (mongoose.connection.readyState) {
    return mongoose;
  }

  /**
   * Connects to MongoDB
   */
  return mongoose
    .connect('mongodb+srv://sameco:IAmL9XpJX6jFTnvz@cluster0.cylpvbm.mongodb.net/?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then(() => console.log('MongoDB connected to MLab'))
    .then(() => mongoose);
};

/**
 * Before each request it checks if the connection is established,
 * if not, connects.
 *
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const middleware = async (req, res, next) => {
  try {
    await init();
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
    return;
  }
  return next();
};

exports.init = init;
exports.middleware = middleware;
