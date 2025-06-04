import mongoose from 'mongoose';

const featureSchema = new mongoose.Schema({
  title: String,
  content: String
});

const sellingPointSchema = new mongoose.Schema({
  icon: String,
  title: String,
  description: String
});

const faqSchema = new mongoose.Schema({
  question: String,
  answer: String
});

const accessoriesDetailsSchema = new mongoose.Schema({
  product_id: { type: Number, required: true, unique: true },
  product_name: { type: String, required: true },
  current_price: Number,
  original_price: Number,
  discount: String,
  availability: String,
  delivery_note: String,
  description: {
    overview: String,
    features: [featureSchema]
  },
  warranty: {
    duration: String,
    description: String
  },
  included_items: [String],
  specifications: {
    CPU: String,
    GPU: String,
    Memory: String,
    Storage: String,
    Dimensions: String
  },
  selling_points: [sellingPointSchema],
  faqs: [faqSchema],
  media: {
    images_by_color: { type: Map, of: String },
    video: String
  }
});

const AccessoriesDetails = mongoose.model('AccessoriesDetails', accessoriesDetailsSchema);
export default AccessoriesDetails;
