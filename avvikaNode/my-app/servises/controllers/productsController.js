const { Op } = require('sequelize');
const products = require('../models/product')

const productsData = async (req, res) => {

    const product_categories = req.body.product_categories;
    const brand_name = req.body.brand_name;
    const brand_id = req.body.brand_id;
    const place = req.body.place;
    const product_title = req.body.product_title;
    const product_description = req.body.product_description;
    const product_price = req.body.product_price;
    const discount_price = req.body.discount_price;
    const discount_percentes = req.body.discount_percentes;
    const color = req.body.color;
    const image_url = req.files['image_url'][0].filename;
    const product_ad = req.body.product_ad;
    const count_in_stock = req.body.count_in_stock;
    const offer = req.body.offer;
    const rating = req.body.rating;

    try {
        // Check if all required fields are provided
        if (!product_categories || !brand_name || !brand_id || !place || !product_title || !product_description
            || !product_price || !discount_price || !discount_percentes || !color || !image_url
            || !product_ad || !count_in_stock || !offer || !rating) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        // Create a new products 
        const data = await products.create({
            product_categories,
            brand_name,
            brand_id,
            place,
            product_title,
            product_description,
            product_price,
            discount_price,
            discount_percentes,
            color,
            image_url,
            product_ad,
            count_in_stock,
            offer,
            rating,
        });

        // Respond with the created banner
        res.status(200).send(data);
    } catch (error) {
        console.error('Error creating carousel banner:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }

}

const getAllData = async (req, res) => {
    try {
        const data = await products.findAll()
        if (!data) {
            return res.status(404).json({ error: 'Banner not found' });
        }

        res.status(200).send(data);
    } catch (error) {
        console.error('Error fetching products data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const fillterData = async (req, res) => {
    try {
        // Example query parameters: /api/products?product_categories=category&brand_name=brand1
        const queryParameters = req.query;

        // Build a filter object based on query parameters
        const filter = {
            [Op.or]: [],
        };

        // Check if product_categories is present and add it to the filter[Op.or] array
        if (queryParameters.product_categories) {
            filter[Op.or].push({ product_categories: queryParameters.product_categories });
        }

        // Check if brand_name is present and add it to the filter[Op.or] array
        if (queryParameters.brand_name) {
            filter[Op.or].push({ brand_name: queryParameters.brand_name });
        }

        if (queryParameters.discount_price) {
            filter[Op.or].push({ discount_price: queryParameters.discount_price });
        }

        // Fetch products based on the filter
        const data = await products.findAll({
            where: filter,
        });

        // Respond with the filtered products
        res.status(200).send(data);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

// ***************************************************************

const getDataById = async (req, res) => {
    const productId = req.params.id;
    try {
        const data = await products.findOne({ where: { id: productId } })
        if (!data) {
            return res.status(404).json({ error: 'product not found' });
        }

        res.status(200).send(data);
    } catch (error) {
        console.error('Error fetching product by ID:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const productDeleteById = async (req, res) => {
    const productId = req.params.id;

    try {
        // Find the banner by its ID and delete it
        const deletedProducts = await products.destroy({ where: { id: productId } });

        if (!deletedProducts) {
            return res.status(404).json({ error: 'Product not found' });
        }

        // Respond with a success message
        res.status(200).send({ id: productId, message: 'product deleted successfully' });
    } catch (error) {
        console.error('Error deleting product by ID:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const editProductById = async (req, res) => {
    const productId = req.params.id;
    const { product_categories,
        brand_name,
        brand_id,
        place,
        product_title,
        product_description,
        product_price,
        discount_price,
        discount_percentes,
        color,
        image_url,
        product_ad,
        count_in_stock,
        offer,
        rating, } = req.body;

    try {
        // Find the banner by its ID
        const data = await products.findByPk(productId);

        if (!data) {
            return res.status(404).json({ error: 'Banner not found' });
        }
        // Update the banner's properties
        await products.update({
            product_categories,
            brand_name,
            brand_id,
            place,
            product_title,
            product_description,
            product_price,
            discount_price,
            discount_percentes,
            color,
            image_url,
            product_ad,
            count_in_stock,
            offer,
            rating,
        }, {
            where: {
                id: productId,
            },
        }
        );

        // Respond with the Product banner
        res.status(200).json({ updatedProducts: data, message: 'Products updated successfully' });
    } catch (error) {
        console.error('Error editing Product by ID:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


module.exports = { productsData, getAllData, fillterData, getDataById, productDeleteById, editProductById }