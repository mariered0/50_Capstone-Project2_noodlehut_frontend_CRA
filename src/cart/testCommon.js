// cart, getTotalCost, isCartOpen, setIsCartOpen, deleteAllFromCart

export const cart = [
    {id: 7, name: 'Fried Tofu', price: '6.95', quantity: 1},
    {id: 6, name: 'Spring Rolls', price: '6.95', quantity: 1},
    {id: 9, name: 'Pot Sticker', price: '6.95', quantity: 5}
];

export const getTotalCost = jest.fn();
export const isCartOpen = true;
export const setIsCartOpen = jest.fn();
export const deleteAllFromCart = jest.fn();
