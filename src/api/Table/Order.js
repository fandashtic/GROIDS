import { string } from "prop-types";

let Order = {
    order_id: String,
    company_id: String,
    company_name: String,
    store_id: String,
    store_name: String,
    product_details: string,
    profile_image_url: String,
    status: Boolean,
    created_on: Date,
    created_by: String,
    modified_on: Date,
    modified_by: String
}

export { Order };