
import { GetAllPayments, AddPayment, UpdatePayment, DeletePayment } from 'api/Core/PaymentManager';

let AddPaymentAPI = async (payment, callback) => {
    return await AddPayment(payment, callback);
};

let UpdatePaymentAPI = async (paymentId, payment, callback) => {
    return await UpdatePayment(paymentId, payment, callback);
};

let DeletePaymentAPI = async (paymentId, callback) => {
    return await DeletePayment(paymentId, callback);
};

let GetPaymentsAPI = async (filter, callback) => {
    return await GetAllPayments( filter, callback);
};

export { AddPaymentAPI, UpdatePaymentAPI, DeletePaymentAPI, GetPaymentsAPI };