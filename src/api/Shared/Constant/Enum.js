const ActiveStatus = {
    ACTIVE : 1,
    INACTIVE : 0
}

const PaymentStatus = {
    PENDING : 1,
    RECIVED : 2,    
    PARCIALY_RECIVED : 3,
    REVISED : 4,
}

const UserType = {
    SUPER_ADMIN : 1,
    STORE_ADMIN : 2,    
    STORE_STAFF : 3,    
    CONSUMER : 4,
    SUPPORT : 5,
}

const StoreType = {
    Wholesale : 1,
    Retail : 2,    
    SuperMarket : 3,    
    Stockist : 4,
}

const ConsumerType = {
    PRIME : 1,
    NORMAL : 2,
}

const PaymentMode = {
    CASH : 1,
    CREDIT : 2,
    CHEQUE : 3,
    DD : 4,
    BANK_TRANSFER : 5,
    UPI : 6,
}

const CreditTerms = {
    NOCREDIT : 0,
    ONEWEEKDAYS : 2,
    TWOWEEKDAYS : 3,
    ONEMONTHDAYS : 4,
    TWOMONTHDAYS : 5,
    ONEYEARDAYS : 6,
}

const Event = {
    ADD : 1,
    EDIT : 2,    
    UPDATE : 3,    
    SAVE : 4,
    DELETE : 5,
    GET : 6,
    MAKE_ACTIVE : 7,
    MAKE_INACTIVE : 8,
    CANCEL : 9,
}
