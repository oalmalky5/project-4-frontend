import apiUrl from  '../apiConfig'
import Axios from 'axios'


export const index = (user)  =>  {
    return  Axios({
        method:'GET',
        url: apiUrl + '/products',
        headers: {
            "Authorization": `Bearer ${user.token}`
        }
    })
}

export const show = (user, productId) => {
    return Axios({
        method:'GET',
        url: apiUrl + `/products/${productId}`,
        headers:{
            "Authorization":`Bearer ${user.token}`
        }
    })
}

export const create = (user, newProduct) => {
    return  Axios({
        method:'POST',
        url:apiUrl + '/products',
        headers:{
            "Authorization": `Bearer ${user.token}`
        },
        data:{
            product: newProduct
        }
    })
}


export const destroy = (user,productId) => {
    return Axios({
        method:"DELETE",
        url:apiUrl + `/products/${productId}`,
        headers:{
            "Authorization":`Bearer ${user.token}`
        }
    })
}

export const update = (user, updateProduct, productId) => {
    return Axios({
        method: 'PUT',
        url:apiUrl + `/products/${productId}`,
        headers: {
            "Authorization" : `Bearer ${user.token}` 
        },
        data:{
            product:updateProduct
        }
    })
}




