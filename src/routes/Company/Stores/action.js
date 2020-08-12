import {GetStores,AddStore,UpdateStore,DeleteStore,GetStore,StoreLookUp} from 'api/Shared/Master/StoreController';

export const  addData = (data) =>  {
    return AddStore(data, (res, err) => { return {res:res,err:err} })
}

export const LookUpData = (data) =>  {
    let brand_id = data;
    return StoreLookUp(brand_id, (res, err) =>{ return {res:res,err:err} })
}

export const getData = id => {
    return GetStore(id, (data, err) =>{ return {res:data,err:err} })
}

export const getDatas = (data) => {
    let filter = {status:true}
    return GetStores(filter, (res, err) =>{ return {res:res,err:err} })
}
export const updateData = (id, data) => {
    return UpdateStore(id, data, (res, err) =>{ return {res:res,err:err} })
}

export const deleteData = id => {
    return DeleteStore(id, (res, err) =>{ return {res:res,err:err} })
}