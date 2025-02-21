const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    price: {
        type: Number,
        require: true,
    },
    months: {
        type: String,
        enum: ['Six', '1 year', '2year'],
        require: true,
    },
    is_drink: {
        type: Boolean,
        default: false,
    },
    facility: {
        type: [String],
        default: [],
    },
    num_sales: {
        type: Number,
        default: 0,
    }
})

const MenuItem = mongoose.model('MenuItem',menuItemSchema);
module.exports=MenuItem;