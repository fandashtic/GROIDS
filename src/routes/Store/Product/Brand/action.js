 import { GetBrands, DeleteBrand, AddBrand, BrandLookUp ,GetBrand,UpdateBrand} from 'api/Shared/Master/BrandController';

export const  addData = (data) =>  {
    return AddBrand(data, (res, err) => { return {res:res,err:err} })
}

export const LookUpData = (data) =>  {
    let brand_id = data;
    return BrandLookUp(brand_id, (res, err) =>{ return {res:res,err:err} })
}

export const getBrand = id => {
    return GetBrand(id, (data, err) =>{ return {res:data,err:err} })
}

export const getBrands = (data) => {
    let filter = {status:true}
    return GetBrands(filter, (res, err) =>{ return {res:res,err:err} })
}
export const updateBrand = (id, data) => {
    return UpdateBrand(id, data, (res, err) =>{ return {res:res,err:err} })
}

export const deleteBrand = id => {
    return DeleteBrand(id, (res, err) =>{ return {res:res,err:err} })
}

