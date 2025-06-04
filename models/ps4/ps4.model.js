import mongoose from 'mongoose';


const ps4Schema = new mongoose.Schema({
    game_id: { type: Number, required: true, unique: true },
    game_name: { type: String, required: true },
    price_inr: { type: Number, required: true },
    image_link: { type: String }
});


const Ps4 = mongoose.model('Ps4', ps4Schema);
export default Ps4;