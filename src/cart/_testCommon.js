// cart, setCart, addToCart, getItemQuantity, removeFromCart, deleteItem, getTotalCost, isCartOpen, setIsCartOpen, deleteAllFromCart


const cart = [
    {id: 7, name: 'Fried Tofu', price: '6.95', quantity: 1},
    {id: 6, name: 'Spring Rolls', price: '6.95', quantity: 1},
    {id: 9, name: 'Pot Sticker', price: '6.95', quantity: 5}
];

const setCart = jest.fn();
const addToCart = jest.fn();
const getItemQuantity = jest.fn();
const removeFromCart = jest.fn();
const deleteItem = jest.fn();
const getTotalCost = jest.fn();
const isCartOpen = true;
const setIsCartOpen = jest.fn();
const deleteAllFromCart = jest.fn();

module.exports = {
    cart,
    setCart,
    addToCart,
    getItemQuantity,
    removeFromCart,
    getTotalCost,
    isCartOpen,
    setIsCartOpen,
    deleteAllFromCart
};
