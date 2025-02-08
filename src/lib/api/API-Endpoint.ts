const URL_PREFIX = "http://localhost:5223";

export const SUPPLY_CHAIN_API = {
    getWarehouses: `${URL_PREFIX}/admin/warehouses`,
    getWarehouse: `${URL_PREFIX}/admin/warehouse`,
    createWarehouse: `${URL_PREFIX}/admin/warehouse`,
    updateWarehouse: `${URL_PREFIX}/admin/warehouse`,
    
    getSuppliers: `${URL_PREFIX}/admin/suppliers`,
    createSupplier: `${URL_PREFIX}/admin/supplier`,
    getSupplier: `${URL_PREFIX}/admin/supplier`,
    updateSupplier: `${URL_PREFIX}/admin/supplier`,
    
    getProductTypes: `${URL_PREFIX}/admin/producttypes`,
    getProducts: `${URL_PREFIX}/admin/products`,
    getProduct: `${URL_PREFIX}/admin/product`,
    createProduct: `${URL_PREFIX}/admin/product`,
    updateProduct: `${URL_PREFIX}/admin/product`,
    
    createOrder: `${URL_PREFIX}/Order/order`,
    getOrder: `${URL_PREFIX}/Order/order`,
    getOrders: `${URL_PREFIX}/Order/orders`,
    updatePayment: `${URL_PREFIX}/Order/payment`,
    syncData: `${URL_PREFIX}/Order/sync`,

    getRevenueByYear: `${URL_PREFIX}/report/RevenueByYear`,
    getRevenueByMonth: `${URL_PREFIX}/report/RevenueByMonth`,
    getRevenueByProduct: `${URL_PREFIX}/report/RevenueByProduct`,
    getPaymentByYear: `${URL_PREFIX}/report/PaymentByYear`,
    getPaymentByMonth: `${URL_PREFIX}/report/PaymentByMonth`,
    getPaymentBySupplier: `${URL_PREFIX}/report/PaymentBySupplier`,
};
