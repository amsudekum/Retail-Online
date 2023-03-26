// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

Product.belongsTo(Category, 
  {
    foriegnKey: 'category_id'
  });

Category.hasMany(Product, 
  {
  foriegnKey: 'category_id'
  });

Product.belongsToMany(Tag, 
  {
    through: 'ProductTag', 
    foriegnKey: 'product_id'
  });
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Tag, 
  {
    through: 'ProductTag',
    foriegnKey: 'tag_id'
  });

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
