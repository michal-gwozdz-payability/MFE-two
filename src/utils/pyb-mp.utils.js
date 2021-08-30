const PybIntegrationUtils = {
  integrate() {
    return new Promise((res) => setTimeout(() => res({integrated: true}), 1000));
  },

  authorize(supplierKey, authKey) {
    return new Promise((res) => setTimeout(() => res({authorized: true}), 1000));
  },

  validateSupplierKey(supplierKey) {
    return new Promise((res) => setTimeout(() => res({validation: true}), 500));
  },

  validateAuthKey(authKey) {
    return new Promise((res) => setTimeout(() => res({validation: true}), 500));
  },
};

module.exports = { PybIntegrationUtils };
