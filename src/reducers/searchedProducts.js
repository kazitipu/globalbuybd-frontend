const initialState = {
    products: [],
    symbol: 'Tk',
    product_details: []
};

const searchedProductsArrayReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_SEARCHED_PRODUCTS_ARRAY':
            let products =[]
            action.payload.forEach(product=>{
                let productObj={}
                productObj.id = product.num_iid
                productObj.name = product.title
                productObj.pictures = [product.pic_url]
                productObj.salePrice = product.promotion_price
                productObj.price = product.price
                productObj.availability = 'searched-products'
                productObj.categoryId = product.sample_id
                productObj.rating = '5.0'

                products.push(productObj)
            })
            return {...state, products:products}
        
    }
    return state
};
export default searchedProductsArrayReducer;