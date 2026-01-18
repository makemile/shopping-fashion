/**
 * This function calculates Total price of a new order
 * @param {Array} products
 * @returns {number} Total price
 */

export const TotalPrice = (products) =>
  products.reduce((sum, product) => sum + product.price, 0);

export const currentDate = () => new Date().toLocaleDateString();
