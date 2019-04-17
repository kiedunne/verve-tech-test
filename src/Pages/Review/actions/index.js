
export const addToBasket = (action) => Object({
    type: 'ADD_TO_BASKET',
    id: action.id,
    title: action.title,
    price: action.price,
    active:action.active,
});


export const removeFromBasket = (action) => Object({
    type: 'REMOVE_FROM_BASKET',
    id: action.id,
    title: action.title,
    price: action.price,
    active: action.active,
});
