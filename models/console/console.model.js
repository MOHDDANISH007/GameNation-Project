import mongoose from 'mongoose';

const consoleSchema = new mongoose.Schema({
    Type: { type: String, required: true },
    product_id: { type: Number, required: true, unique: true }, // Changed from console_id to product_id
    console_name: { type: String, required: true },
    price_inr: { type: Number, required: true },
    images_by_color: {
        type: Map,
        of: String,
        required: true
    }
}, { timestamps: true });

const Product = mongoose.model('Product', consoleSchema); // Model name capitalized for convention
export default Product;