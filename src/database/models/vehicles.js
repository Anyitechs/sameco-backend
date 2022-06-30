const database = require('../database');
const Schema = database.Schema;

/**
 * Vehicles database schema.
 * See https://mongoosejs.com/docs/models.html to learn how to customize it.
 */
const VehiclesSchema = new Schema(
  {
    vehicleNumber: {
      type: String,
      required: true,
    },
    driver: {
      type: String,
      required: true,
    },
    phone: {
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

VehiclesSchema.virtual('id').get(function() {
  return this._id.toHexString();
});

VehiclesSchema.set('toJSON', {
  getters: true,
});

VehiclesSchema.set('toObject', {
  getters: true,
});

const Vehicles = database.model('vehicles', VehiclesSchema);

module.exports = Vehicles;
