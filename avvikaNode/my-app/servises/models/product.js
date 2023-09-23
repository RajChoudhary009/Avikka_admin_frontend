const { Sequelize, DataTypes } = require('sequelize');
const { database } = require("../connection/database"); // Import your Sequelize instance


const products = database.define('products', {
    product_categories: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    brand_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    brand_id: {
        type: DataTypes.INTEGER, // Update data type to match the primary key of the 'brand' table
        allowNull: false,
    },

    place:{
        type:DataTypes.STRING,
        allowNull: false,
    },

    product_title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    product_description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    product_price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    discount_price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    discount_percentes: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    color:{
        type:DataTypes.STRING,
        allowNull:false
    },

    image_url:{
        type:DataTypes.STRING,
        allowNull:false
    },

    product_ad: {
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    count_in_stock: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,

    },
    offer: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    rating: {
        type: DataTypes.FLOAT,
        allowNull: true

    },
})

module.exports = products;

