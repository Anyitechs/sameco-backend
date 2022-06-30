const database = require('../database');
const Schema = database.Schema;
const { FileSchema } = require('./file');

/**
 * Parts database schema.
 * See https://mongoosejs.com/docs/models.html to learn how to customize it.
 */
const PartsSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: [
        "available",
        "unavailable",
        null
      ],
    },
    images: [FileSchema],
    stock: {
      type: Number,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
    updatedBy: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
    importHash: { type: String },
  },
  { timestamps: true },
);

PartsSchema.virtual('id').get(function() {
  return this._id.toHexString();
});

PartsSchema.set('toJSON', {
  getters: true,
});

PartsSchema.set('toObject', {
  getters: true,
});

const Parts = database.model('parts', PartsSchema);

module.exports = Parts;
