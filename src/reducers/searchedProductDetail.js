const initialState = {
    product: null,
    symbol: 'Tk'
};

const searchedProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_SEARCHED_PRODUCT_DETAIL':
           if (action.payload !== null && action.payload !== undefined){
            let product = action.payload.prodct_array? action.payload.prodct_array: action.payload
            let imgsArray = product.item_imgs?product.item_imgs.map(item=>item.url):[]

            let productObj ={
            id : product.num_iid,
            name : product.title,
            pictures : [product.pic_url,...imgsArray],
            salePrice : product.price,
            price : product.orginal_price,
            availability : 'searched-products',
            categoryId : product.cid,
            rating : '5.0',
            description :product.desc,
            orders:product.total_sold,
            totalAvailableQuantity:'',
            specs:product.props,
            variants:product.skus?product.skus.sku:[],
            feedback:[],
            brand:product.brand,
            brandId:product.brandId,
            props_name:product.props_name,
            props_list:product.props_list,
            props_imgs:product.props_imgs?product.props_imgs:product.prop_imgs,
            item_weight: product.item_weight,
            price_range:product.priceRange? product.priceRange:[]
           
        }
            return {...state, product:productObj}
           }else{
               return {...state, product:action.payload}
           }
           
        
    }
    return state
};
export default searchedProductReducer;