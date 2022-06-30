module.exports = {
  env: 'production',

  database: {
    //mlab password - o0zVYtg5KmtYaXfQ
    // mongodb+srv://root:o0zVYtg5KmtYaXfQ@sameco-inventory-kyods.mongodb.net/inventory?retryWrites=true&w=majority
    /**
     * Connection URL for Mongoose
     * See https://mongoosejs.com/docs/index.html
     */
    connection: 'mongodb+srv://sameco:IAmL9XpJX6jFTnvz@cluster0.cylpvbm.mongodb.net/?retryWrites=true&w=majority',
    /**
     * In case you want to use ACID transactions, change this flag to true.
     * See: https://mongoosejs.com/docs/transactions.html
     */
    transactions: false,
  },

  /**
   * Secret used to Sign the JWT (Authentication) tokens.
   */
  authJwtSecret: 'sameco12345',

  /**
   * Directory where uploaded files are saved.
   * Default to the storage volume: /storage.
   * See /docker-compose.yml
   */
  uploadDir: '/storage',

  /**
   * Configuration to allow email sending used on:
   * backend/src/services/shared/email/emailSender.js
   *
   * More info: https://nodemailer.com
   */
  email: {
    from: '<insert your email here>',
    host: null,
    auth: {
      user: null,
      pass: null,
    },
  },

  /**
   * Client URL used when sending emails.
   */
  clientUrl: '<insert client url here>',

  
};
