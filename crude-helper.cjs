// Connect to the database
require('dotenv').config();
const db = require('./config/database.cjs');

// Require the Mongoose models
// const User = require('./models/user');
// const Item = require('./models/item');
// const Category = require('./models/category');
// const Order = require('./models/order');

// Local variables will come in handy for holding retrieved documents
let user, item, category, order;
let users, items, categories, orders;

//getting the collection
const coll = db.users

//find code
const cursor = coll.find()

await cursor.forEach(job._id)

setTimeout(() => {
  db.close();
}, 5000);