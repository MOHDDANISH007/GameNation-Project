import mongoose from 'mongoose';


const ps5Schema = new mongoose.Schema({
    game_id: { type: Number, required: true, unique: true },
    game_name: { type: String, required: true },
    price_inr: { type: Number, required: true },
    image_link: { type: String }
});


const Ps5 = mongoose.model('Ps5', ps5Schema);
export default Ps5;