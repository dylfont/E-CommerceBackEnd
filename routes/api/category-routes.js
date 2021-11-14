const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// Get route for categories 
router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
});







// Get category by id 
router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
});










// Post new category 
router.post('/', (req, res) => {
  // create a new category
});







// Update category by id 
router.put('/:id', (req, res) => {
  // update a category by its `id` value
});













// Delete category by id 
router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});










module.exports = router;
