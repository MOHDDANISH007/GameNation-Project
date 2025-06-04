import mongoose from 'mongoose';

const xbox_xSchema = new mongoose.Schema({
    game_id: { type: Number, required: true, unique: true },
    game_name: { type: String, required: true },
    price_inr: { type: Number, required: true },
    image_link: { type: String }
});

const XboxX = mongoose.model('XboxX', xbox_xSchema);
export default XboxX;
