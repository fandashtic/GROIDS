import {GetManufactures,GetManufacture,AddManufacture,UpdateManufacture,DeleteManufacture,ManufactureLookUp} from 'api/Shared/Master/ManufactureController';

export const  addData = (data) =>  {
    return AddManufacture(data, (res, err) => { return {res:res,err:err} })
}

export const LookUpData = (data) =>  {
    let brand_id = data;
    return ManufactureLookUp(brand_id, (res, err) =>{ return {res:res,err:err} })
}

export const getData = id => {
    return GetManufacture(id, (data, err) =>{ return {res:data,err:err} })
}

export const getDatas = (data) => {
    let filter = {status:true}
    return GetManufactures(filter, (res, err) =>{ return {res:res,err:err} })
}
export const updateData = (id, data) => {
    return UpdateManufacture(id, data, (res, err) =>{ return {res:res,err:err} })
}

export const deleteData = id => {
    return DeleteManufacture(id, (res, err) =>{ return {res:res,err:err} })
}