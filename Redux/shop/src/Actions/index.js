let nextItemID=0
let cartID=0
//Add a new product to the store
export const addProduct = (title,price,description)=>({
    type:'ADD_PRODUCT',
    title:title,
    price:price,
    id:nextItemID++,
    description:description,
})
export const removeProduct = (id)=>({
    type:'REMOVE_PRODUCT',
    id:id,
})
export const addToCart = (title,price)=>({
    type:'ADD_TO_CART',
    title:title,
    price:price,
    id:cartID++,
})

export const changeQuantity = (id,quantity)=>({
    type:'CHANGE_QUANTITY',
    id:id,
    quantity:quantity,
})
export const removeFromCart = (id)=>({
    type:'REMOVE_FROM_CART',
    id:id,
})
export const buyAllStuff = ()=>({
    type:'BUY_ALL',
})