import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: String,
    readyToOrder: Boolean
});

const Product = mongoose.model('Product', ProductSchema);

export default Product;
