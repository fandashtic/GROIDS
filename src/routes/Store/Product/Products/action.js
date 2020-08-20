import {ProductLookUp,GetProducts,GetProduct,UpdateProduct,DeleteProduct,AddProduct} from 'api/Shared/Master/ProductController';

export const  addData = (data) =>  {
    return AddProduct(data, (res, err) => { return {res:res,err:err} })
}

export const LookUpData = (data) =>  {
    let brand_id = data;
    return ProductLookUp(brand_id, (res, err) =>{ return {res:res,err:err} })
}

export const getData = id => {
    return GetProduct(id, (data, err) =>{ return {res:data,err:err} })
}

export const getDatas = (data) => {
    let filter = {status:true}
    return GetProducts(filter, (res, err) =>{ return {res:res,err:err} })
}
export const updateData = (id, data) => {
    return UpdateProduct(id, data, (res, err) =>{ return {res:res,err:err} })
}

export const deleteData = id => {
    return DeleteProduct(id, (res, err) =>{ return {res:res,err:err} })
}