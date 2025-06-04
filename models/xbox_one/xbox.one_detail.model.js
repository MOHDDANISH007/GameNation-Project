import mongoose from 'mongoose';


const faqSchema = new mongoose.Schema({
  question: String,
  answer: String
});

const similarProductSchema = new mongoose.Schema({
  id: String,
  name: String,
  price: Number,
  image: String
});

const xbox_one_DetailsSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  title: String,
  developer: String,
  price: Number,
  description: String,
  gameType: String,
  genre: String,
  gameplayHours: String,
  internetRequired: String,
  psPlusRequired: String,
  metacriticScore: Number,
  releaseDate: String,
  publisher: String,
  countryOfOrigin: String,
  platform: [String],
  pegiRating: String,
  trailerVideo: String,
  about: String,
  image: String,
  faqs: [faqSchema],
  similarProducts: [similarProductSchema]
});

const XboxOneDetails = mongoose.model('XboxOneDetails', xbox_one_DetailsSchema);
export default XboxOneDetails;