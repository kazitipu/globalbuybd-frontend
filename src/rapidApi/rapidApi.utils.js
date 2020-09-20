import axios from "axios";

export const productDetails =(productId) =>{
    axios({
        "method":"GET",
        "url":"https://ali-express1.p.rapidapi.com/product/4000479928418",
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"ali-express1.p.rapidapi.com",
        "x-rapidapi-key":"d15d176ef6msh6b0395ce42728b2p10e706jsn46d248ad756f",
        "useQueryString":true
        },"params":{
        "country":"US",
        "language":"en"
        }
        })
        .then((response)=>{
          console.log(response)
        })
        .catch((error)=>{
          console.log(error)
        })
}

export const gerProductsByCategory =(categoryId) =>{
    axios({
    "method":"GET",
    "url":"https://ali-express1.p.rapidapi.com/productsByCategory/205838503",
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"ali-express1.p.rapidapi.com",
    "x-rapidapi-key":"d15d176ef6msh6b0395ce42728b2p10e706jsn46d248ad756f",
    "useQueryString":true
    },"params":{
    "from":"0"
    }
    })
    .then((response)=>{
      console.log(response)
    })
    .catch((error)=>{
      console.log(error)
    })
}


export const getSearchedProducts =async (productName)=>{
    return await axios({
        "method":"GET",
        "url":"https://ali-express1.p.rapidapi.com/search",
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"ali-express1.p.rapidapi.com",
        "x-rapidapi-key":"d15d176ef6msh6b0395ce42728b2p10e706jsn46d248ad756f",
        "useQueryString":true
        },"params":{
        "from":"0",
        "limit":"20",
        "country":"BD",
        "query":`${productName}`
        }
        })
        .then((response)=>{
          return (response.data)
        })
        .catch((error)=>{
          console.log(error)
          return error
        })
}



