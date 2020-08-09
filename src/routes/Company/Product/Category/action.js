import {GetProductCategories,GetProductCategory,ProductCategoryLookUp,UpdateProductCategory,DeleteProductCategory,AddProductCategory} from 'api/Shared/Master/ProductCategoryController';

export const  addData = (data) =>  {
    return AddProductCategory(data, (res, err) => { return {res:res,err:err} })
}

export const LookUpData = (data) =>  {
    let brand_id = data;
    return ProductCategoryLookUp(brand_id, (res, err) =>{ return {res:res,err:err} })
}

export const getData = id => {
    return GetProductCategory(id, (data, err) =>{ return {res:data,err:err} })
}

export const getDatas = (data) => {
    let filter = {status:true}
    return GetProductCategories(filter, (res, err) =>{ return {res:res,err:err} })
}
export const updateData = (id, data) => {
    return UpdateProductCategory(id, data, (res, err) =>{ return {res:res,err:err} })
}

export const deleteData = id => {
    return DeleteProductCategory(id, (res, err) =>{ return {res:res,err:err} })
}
