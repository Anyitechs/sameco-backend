const database = require('../database');
const Schema = database.Schema;

/**
 * Overhead database schema.
 * See https://mongoosejs.com/docs/models.html to learn how to customize it.
 */
const OverheadSchema = new Schema(
  {
    parts: {
      type: Schema.Types.ObjectId,
      ref: 'parts',
      required: true,
    },
    vehicle: {
      type: Schema.Types.ObjectId,
      ref: 'vehicles',
      required: true,
    },
    issueDate: {
      type: Date,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    otherExpenses: {
      type: String,
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

OverheadSchema.virtual('id').get(function() {
  return this._id.toHexString();
});

OverheadSchema.set('toJSON', {
  getters: true,
});

OverheadSchema.set('toObject', {
  getters: true,
});

const Overhead = database.model('overhead', OverheadSchema);

module.exports = Overhead;
