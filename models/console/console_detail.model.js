import mongoose from 'mongoose';

const featureSchema = new mongoose.Schema({
    title: { type: String, required: true }, // Added required for consistency
    content: { type: String, required: true }
});

const sellingPointSchema = new mongoose.Schema({
    icon: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true }
});

const productDetailsSchema = new mongoose.Schema({
    product_id: { type: Number, required: true, unique: true },
    product_name: { type: String, required: true },
    current_price: { type: Number, required: true },
    original_price: { type: Number },
    discount: { type: String },
    availability: { type: String, required: true }, // Added required for consistency
    delivery_note: { type: String },
    description: {
        overview: { type: String, required: true },
        features: [featureSchema]
    },
    warranty: {
        duration: { type: String, required: true },
        description: { type: String, required: true }
    },
    included_items: [{ type: String }],
    specifications: {
        type: Map,
        of: String
    },
    selling_points: [sellingPointSchema],
    faqs: [{
        question: { type: String, required: true },
        answer: { type: String, required: true }
    }],
    media: {
        images_by_color: {
            type: Map,
            of: String,
            required: true
        },
        video: { type: String }
    }
}, { timestamps: true });

const ProductDetails = mongoose.model('ProductDetails', productDetailsSchema);
export default ProductDetails;