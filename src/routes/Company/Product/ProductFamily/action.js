import {GetProductFamilies,GetProductFamily,ProductFamilyLookUp,AddProductFamily,UpdateProductFamily,DeleteProductFamily} from 'api/Shared/Master/ProductFamilyController';

export const  addData = (data) =>  {
    return AddProductFamily(data, (res, err) => { return {res:res,err:err} })
}

export const LookUpData = (data) =>  {
    let brand_id = data;
    return ProductFamilyLookUp(brand_id, (res, err) =>{ return {res:res,err:err} })
}

export const getData = id => {
    return GetProductFamily(id, (data, err) =>{ return {res:data,err:err} })
}

export const getDatas = (data) => {
    let filter = {status:true}
    return GetProductFamilies(filter, (res, err) =>{ return {res:res,err:err} })
}
export const updateData = (id, data) => {
    return UpdateProductFamily(id, data, (res, err) =>{ return {res:res,err:err} })
}

export const deleteData = id => {
    return DeleteProductFamily(id, (res, err) =>{ return {res:res,err:err} })
}