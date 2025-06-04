import mongoose from 'mongoose';

const accessoriesSchema = new mongoose.Schema({
  accessory_id: { type: Number, required: true, unique: true },
  accessory_name: { type: String, required: true },
  price_inr: { type: Number, required: true },
  type: { type: String, default: 'Accessories' },
  images_by_color: { type: Map, of: String } // color: image_link
});

const Accessories = mongoose.model('Accessories', accessoriesSchema);
export default Accessories;
