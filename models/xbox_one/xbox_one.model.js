import mongoose from 'mongoose';

const xbox_oneSchema = new mongoose.Schema({
    game_id: { type: Number, required: true, unique: true },
    game_name: { type: String, required: true },
    price_inr: { type: Number, required: true },
    image_link: { type: String }
});

const xbox_one = mongoose.model('xbox_one', xbox_oneSchema);
export default xbox_one;
